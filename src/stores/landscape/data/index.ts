import { defineStore } from 'pinia'
import { ref, computed, shallowRef } from 'vue'
import type { GlobalPhotographerWork, GlobalPhotographer, GlobalImage, GlobalVideo, GlobalGuide } from '@/types/landscape/data'
import {
  fetchPhotographers,
  fetchImages,
  fetchVideos,
  fetchGuides,
  fetchHotTopics,
  fetchPopularDestinations,
} from '@/services/landscape'
import { OSS } from '@/utils/landscape/constants'

export type { GlobalPhotographerWork, GlobalPhotographer, GlobalImage, GlobalVideo, GlobalGuide }
export { OSS }

export const useLandscapeDataStore = defineStore('landscapeData', () => {
  const photographers = shallowRef<GlobalPhotographer[]>([])
  const images = shallowRef<GlobalImage[]>([])
  const videos = shallowRef<GlobalVideo[]>([])
  const guides = shallowRef<GlobalGuide[]>([])
  const hotTopics = shallowRef<any[]>([])
  const popularDestinations = shallowRef<any[]>([])

  const loading = ref(false)
  const error = ref<string | null>(null)
  const loaded = ref(false)
  let abortController: AbortController | null = null

  async function loadAll() {
    if (loaded.value || loading.value) return
    loading.value = true
    error.value = null
    abortController?.abort()
    abortController = new AbortController()
    const signal = abortController.signal
    try {
      const [photoRes, imageRes, videoRes, guideRes, hotRes, destRes] = await Promise.all([
        fetchPhotographers({ signal }),
        fetchImages({ signal }),
        fetchVideos({ signal }),
        fetchGuides({ signal }),
        fetchHotTopics({ signal }),
        fetchPopularDestinations({ signal }),
      ])
      photographers.value = photoRes.items
      images.value = imageRes.items
      videos.value = videoRes.items
      guides.value = guideRes.items
      hotTopics.value = hotRes.items
      popularDestinations.value = destRes.items
      loaded.value = true
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return
      error.value = e instanceof Error ? e.message : '加载失败'
      photographers.value = []
      images.value = []
      videos.value = []
      guides.value = []
      hotTopics.value = []
      popularDestinations.value = []
    } finally {
      loading.value = false
    }
  }

  async function ensureLoaded() {
    if (!loaded.value) {
      await loadAll()
    }
  }

  const photographerMap = computed(() => {
    const map = new Map<string, GlobalPhotographer>()
    for (const p of photographers.value) {
      map.set(p.id, p)
    }
    return map
  })

  const imageMap = computed(() => {
    const map = new Map<string, GlobalImage>()
    for (const img of images.value) {
      map.set(img.id, img)
    }
    return map
  })

  const videoMap = computed(() => {
    const map = new Map<string, GlobalVideo>()
    for (const v of videos.value) {
      map.set(v.id, v)
    }
    return map
  })

  const guideMap = computed(() => {
    const map = new Map<string, GlobalGuide>()
    for (const g of guides.value) {
      map.set(g.id, g)
    }
    return map
  })

  const worksByAuthorMap = computed(() => {
    const map = new Map<string, { images: GlobalImage[]; videos: GlobalVideo[]; guides: GlobalGuide[] }>()
    for (const img of images.value) {
      if (!img.authorId) continue
      if (!map.has(img.authorId)) map.set(img.authorId, { images: [], videos: [], guides: [] })
      map.get(img.authorId)!.images.push(img)
    }
    for (const v of videos.value) {
      if (!v.authorId) continue
      if (!map.has(v.authorId)) map.set(v.authorId, { images: [], videos: [], guides: [] })
      map.get(v.authorId)!.videos.push(v)
    }
    for (const g of guides.value) {
      if (!g.authorId) continue
      if (!map.has(g.authorId)) map.set(g.authorId, { images: [], videos: [], guides: [] })
      map.get(g.authorId)!.guides.push(g)
    }
    return map
  })

  const getPhotographer = (id: string): GlobalPhotographer | undefined => {
    return photographerMap.value.get(id)
  }

  const getImage = (id: string): GlobalImage | undefined => {
    return imageMap.value.get(id)
  }

  const getVideo = (id: string): GlobalVideo | undefined => {
    return videoMap.value.get(id)
  }

  const getGuide = (id: string): GlobalGuide | undefined => {
    return guideMap.value.get(id)
  }

  const getAllPhotographers = (): GlobalPhotographer[] => {
    return photographers.value
  }

  const getAllImages = (): GlobalImage[] => {
    return images.value
  }

  const getAllVideos = (): GlobalVideo[] => {
    return videos.value
  }

  const getAllGuides = (): GlobalGuide[] => {
    return guides.value
  }

  const getAllHotTopics = (): any[] => {
    return hotTopics.value
  }

  const getAllPopularDestinations = (): any[] => {
    return popularDestinations.value
  }

  const getFeaturedPhotographers = (): GlobalPhotographer[] => {
    return photographers.value.filter(p => p.verified)
  }

  const getNewPhotographers = (): GlobalPhotographer[] => {
    return photographers.value.filter(p => p.joinDate?.includes('天前') || p.joinDate?.includes('周前'))
  }

  const getPhotographersByCategory = (category: string): GlobalPhotographer[] => {
    if (category === 'all' || !category) return photographers.value
    return photographers.value.filter(p => p.tags.some(t => t.includes(category)) || p.category === category)
  }

  const getWorksByAuthor = (authorId: string) => {
    return worksByAuthorMap.value.get(authorId) || { images: [], videos: [], guides: [] }
  }

  return {
    photographers,
    images,
    videos,
    guides,
    loading,
    error,
    loaded,
    loadAll,
    ensureLoaded,
    photographerMap,
    imageMap,
    videoMap,
    guideMap,
    worksByAuthorMap,
    getPhotographer,
    getImage,
    getVideo,
    getGuide,
    getAllPhotographers,
    getAllImages,
    getAllVideos,
    getAllGuides,
    getAllHotTopics,
    getAllPopularDestinations,
    getFeaturedPhotographers,
    getNewPhotographers,
    getPhotographersByCategory,
    getWorksByAuthor,
  }
})

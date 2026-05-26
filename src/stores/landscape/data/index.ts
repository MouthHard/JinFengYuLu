import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { GlobalPhotographerWork, GlobalPhotographer, GlobalImage, GlobalVideo, GlobalGuide } from '@/typesOfPages/landscape/data'
import { allPhotographers } from './photographers'
import { allImages } from './images'
import { allVideos } from './videos'
import { allGuides } from './guides'
import { OSS } from '@/utils/landscape/constants'

export type { GlobalPhotographerWork, GlobalPhotographer, GlobalImage, GlobalVideo, GlobalGuide }
export { OSS }

export const useLandscapeDataStore = defineStore('landscapeData', () => {
  const photographerMap = computed(() => {
    const map = new Map<string, GlobalPhotographer>()
    for (const p of allPhotographers) {
      map.set(p.id, p)
    }
    return map
  })

  const imageMap = computed(() => {
    const map = new Map<string, GlobalImage>()
    for (const img of allImages) {
      map.set(img.id, img)
    }
    return map
  })

  const videoMap = computed(() => {
    const map = new Map<string, GlobalVideo>()
    for (const v of allVideos) {
      map.set(v.id, v)
    }
    return map
  })

  const guideMap = computed(() => {
    const map = new Map<string, GlobalGuide>()
    for (const g of allGuides) {
      map.set(g.id, g)
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
    return allPhotographers
  }

  const getAllImages = (): GlobalImage[] => {
    return allImages
  }

  const getAllVideos = (): GlobalVideo[] => {
    return allVideos
  }

  const getAllGuides = (): GlobalGuide[] => {
    return allGuides
  }

  const getFeaturedPhotographers = (): GlobalPhotographer[] => {
    return allPhotographers.filter(p => p.verified)
  }

  const getNewPhotographers = (): GlobalPhotographer[] => {
    return allPhotographers.filter(p => p.joinDate?.includes('天前') || p.joinDate?.includes('周前'))
  }

  const getPhotographersByCategory = (category: string): GlobalPhotographer[] => {
    if (category === 'all' || !category) return allPhotographers
    return allPhotographers.filter(p => p.tags.some(t => t.includes(category)) || p.category === category)
  }

  const getWorksByAuthor = (authorId: string) => {
    return {
      images: allImages.filter(img => img.authorId === authorId),
      videos: allVideos.filter(v => v.authorId === authorId),
      guides: allGuides.filter(g => g.authorId === authorId),
    }
  }

  return {
    photographerMap,
    imageMap,
    videoMap,
    guideMap,
    getPhotographer,
    getImage,
    getVideo,
    getGuide,
    getAllPhotographers,
    getAllImages,
    getAllVideos,
    getAllGuides,
    getFeaturedPhotographers,
    getNewPhotographers,
    getPhotographersByCategory,
    getWorksByAuthor,
  }
})

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { LandscapeItem, Category } from '@/types/landscape'
import { usePagination } from '@/composables/landscape/usePagination'
import { useLandscapeDataStore } from './data'

function deterministicHeight(id: string, index: number): number {
  let hash = 0
  const str = String(id) + String(index)
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0
  }
  return 270 + (Math.abs(hash) % 150)
}

function buildItemsFromStore(): LandscapeItem[] {
  const dataStore = useLandscapeDataStore()
  const items: LandscapeItem[] = []

  const allImages = dataStore.getAllImages()
  allImages.forEach((img, idx) => {
    const photographer = dataStore.getPhotographer(img.authorId)
    items.push({
      id: img.id,
      type: 'image',
      title: img.title,
      description: `${img.category}风光作品，拍摄于${img.location}`,
      location: img.location,
      thumbnail: img.thumbnail || img.url,
      fullImage: img.url,
      videoUrl: '',
      category: img.category,
      tags: img.tags,
      categoryTags: img.categoryTags,
      author: photographer?.name || img.author || '未知摄影�?,
      authorId: img.authorId,
      authorAvatar: photographer?.avatar,
      date: img.date || '',
      camera: img.camera || '',
      likes: img.likes,
      loves: img.loves,
      views: img.views,
      shares: img.shares,
      bookmarks: img.favorites,
      liked: false,
      height: deterministicHeight(img.id, idx),
    })
  })

  const allVideos = dataStore.getAllVideos()
  allVideos.forEach((vid, idx) => {
    const photographer = dataStore.getPhotographer(vid.authorId || '')
    items.push({
      id: vid.id,
      type: 'video',
      title: vid.title,
      description: `${vid.category}视频作品，拍摄于${vid.location}`,
      location: vid.location,
      thumbnail: vid.poster,
      fullImage: vid.poster,
      videoUrl: vid.url,
      category: vid.category,
      tags: vid.tags || [vid.category],
      categoryTags: vid.categoryTags,
      author: photographer?.name || vid.author || '未知摄影�?,
      authorId: vid.authorId,
      authorAvatar: photographer?.avatar || vid.authorAvatar,
      date: vid.date || '',
      camera: '',
      likes: vid.likes,
      loves: vid.loves,
      views: vid.views,
      shares: vid.shares,
      bookmarks: vid.bookmarks,
      liked: false,
      height: deterministicHeight(vid.id, allImages.length + idx),
      duration: vid.duration,
    })
  })

  const allGuides = dataStore.getAllGuides()
  allGuides.forEach((guide, idx) => {
    const photographer = dataStore.getPhotographer(guide.authorId)
    items.push({
      id: guide.id,
      type: 'guide',
      title: guide.title,
      description: guide.excerpt,
      location: guide.location,
      thumbnail: guide.cover,
      fullImage: guide.cover,
      videoUrl: '',
      category: guide.category,
      tags: guide.tags,
      categoryTags: guide.categoryTags,
      author: photographer?.name || guide.author || '未知摄影�?,
      authorId: guide.authorId,
      authorAvatar: photographer?.avatar || guide.authorAvatar,
      date: guide.date || guide.publishDate || '',
      camera: '',
      likes: guide.likes,
      loves: guide.loves,
      views: guide.views,
      shares: guide.shares,
      bookmarks: guide.bookmarks,
      liked: false,
      height: deterministicHeight(guide.id, allImages.length + allVideos.length + idx),
      duration: guide.readTime ? `${guide.readTime}分钟` : undefined,
    })
  })

  return items
}

export const useCategoryStore = defineStore('landscape-category', () => {
  const categories = ref<Category[]>([])
  const items = ref<LandscapeItem[]>([])
  const loading = ref(false)
  const selectedCategory = ref('all')
  const selectedType = ref<'all' | 'image' | 'video'>('all')
  const sortBy = ref('popular')

  const filteredItems = computed(() => {
    let result = [...items.value]

    if (selectedCategory.value !== 'all') {
      result = result.filter(item => item.category === selectedCategory.value)
    }

    if (selectedType.value !== 'all') {
      result = result.filter(item => item.type === selectedType.value)
    }

    const sortFn = sortBy.value
    if (sortFn === 'newest') {
      const timeCache = new Map<string | number, number>()
      result.sort((a, b) => {
        let ta = timeCache.get(a.id)
        if (ta === undefined) { ta = new Date(a.date).getTime(); timeCache.set(a.id, ta) }
        let tb = timeCache.get(b.id)
        if (tb === undefined) { tb = new Date(b.date).getTime(); timeCache.set(b.id, tb) }
        return tb - ta
      })
    } else if (sortFn === 'popular') {
      result.sort((a, b) => b.views - a.views)
    } else if (sortFn === 'likes') {
      result.sort((a, b) => b.likes - a.likes)
    }

    return result
  })

  const pagination = usePagination(filteredItems, { pageSize: 20 })

  const totalCount = computed(() => filteredItems.value.length)

  function setCategory(categoryId: string) {
    selectedCategory.value = categoryId
    pagination.goToPage(1)
  }

  function setType(type: 'all' | 'image' | 'video') {
    selectedType.value = type
    pagination.goToPage(1)
  }

  function setSortBy(sort: string) {
    sortBy.value = sort
    pagination.goToPage(1)
  }

  function toggleLike(itemId: number | string) {
    const item = items.value.find(i => i.id === Number(itemId) || i.id === itemId)
    if (item) {
      item.liked = !item.liked
      item.likes += item.liked ? 1 : -1
    }
  }

  async function fetchItems() {
    loading.value = true
    try {
      if (items.value.length === 0) {
        items.value = buildItemsFromStore()
      }
    } finally {
      loading.value = false
    }
  }

  async function loadMore() {
    // 数据已全量加载，无需分页加载更多
  }

  return {
    categories,
    items,
    loading,
    selectedCategory,
    selectedType,
    sortBy,
    currentPage: pagination.currentPage,
    pageSize: pagination.currentPageSize,
    filteredItems,
    totalPages: pagination.totalPages,
    paginatedItems: pagination.paginatedItems,
    totalCount,
    setPage: pagination.goToPage,
    setCategory,
    setType,
    setSortBy,
    toggleLike,
    fetchItems,
    loadMore
  }
})

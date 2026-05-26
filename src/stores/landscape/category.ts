import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { LandscapeItem, Category } from '@/typesOfPages/landscape'
import { usePagination } from '@/composables/landscape/usePagination'
import { useLandscapeDataStore } from './data'

function buildItemsFromStore(): LandscapeItem[] {
  const dataStore = useLandscapeDataStore()
  const items: LandscapeItem[] = []

  const allImages = dataStore.getAllImages()
  allImages.forEach(img => {
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
      author: photographer?.name || img.author || '未知摄影师',
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
      height: 270 + Math.random() * 150,
    })
  })

  const allVideos = dataStore.getAllVideos()
  allVideos.forEach(vid => {
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
      author: photographer?.name || vid.author || '未知摄影师',
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
      height: 270 + Math.random() * 150,
      duration: vid.duration,
    })
  })

  const allGuides = dataStore.getAllGuides()
  allGuides.forEach(guide => {
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
      author: photographer?.name || guide.author || '未知摄影师',
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
      height: 270 + Math.random() * 150,
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

    result.sort((a, b) => {
      switch (sortBy.value) {
        case 'popular':
          return b.views - a.views
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'likes':
          return b.likes - a.likes
        default:
          return 0
      }
    })

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
      await new Promise(resolve => setTimeout(resolve, 300))
      if (items.value.length === 0) {
        items.value = buildItemsFromStore()
      }
    } finally {
      loading.value = false
    }
  }

  async function loadMore() {
    if (loading.value) return
    loading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
    } finally {
      loading.value = false
    }
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

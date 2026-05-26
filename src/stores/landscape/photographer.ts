import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { FilterParams } from '@/typesOfPages/landscape'
import { useLandscapeDataStore } from './data'
import { useInteractionStore } from './interaction'
import { parseCount } from '@/utils/landscape/format'
import { usePagination } from '@/composables/landscape/usePagination'

export const usePhotographerStore = defineStore('landscape-photographer', () => {
  const dataStore = useLandscapeDataStore()
  const photographers = ref(dataStore.getAllPhotographers())
  const loading = ref(false)
  const selectedTag = ref('all')
  const searchQuery = ref('')
  const sortBy = ref('popular')

  const filterTags = computed(() => {
    const tagMap = new Map<string, { id: string; name: string; icon: string; count: number }>()
    tagMap.set('all', { id: 'all', name: '全部', icon: '📸', count: photographers.value.length })

    photographers.value.forEach(p => {
      p.tags?.forEach(tag => {
        const existing = tagMap.get(tag)
        if (existing) {
          existing.count++
        } else {
          tagMap.set(tag, { id: tag, name: tag, icon: '🏷️', count: 1 })
        }
      })
    })

    return Array.from(tagMap.values()).sort((a, b) => b.count - a.count)
  })

  const filteredPhotographers = computed(() => {
    let result = [...photographers.value]

    if (selectedTag.value !== 'all') {
      result = result.filter(p => p.tags?.includes(selectedTag.value))
    }

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.title?.toLowerCase().includes(query) ||
        p.location?.toLowerCase().includes(query) ||
        p.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    }

    result.sort((a, b) => {
      switch (sortBy.value) {
        case 'popular':
          return parseCount(b.followers) - parseCount(a.followers)
        case 'works':
          return parseCount(b.worksCount) - parseCount(a.worksCount)
        case 'newest':
          return new Date(b.joinDate || 0).getTime() - new Date(a.joinDate || 0).getTime()
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        default:
          return 0
      }
    })

    return result
  })

  const pagination = usePagination(filteredPhotographers, { pageSize: 12 })

  const startIndex = computed(() => pagination.startIndex.value + 1)

  function setTag(tag: string) {
    selectedTag.value = tag
    pagination.goToPage(1)
  }

  function setSearch(query: string) {
    searchQuery.value = query
    pagination.goToPage(1)
  }

  function setSortBy(sort: string) {
    sortBy.value = sort
    pagination.goToPage(1)
  }

  function toggleFollow(photographerId: string) {
    const interactionStore = useInteractionStore()
    interactionStore.toggleFollowPhotographer(photographerId)
  }

  async function fetchPhotographers(params?: Partial<FilterParams>) {
    loading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      if (params) {
        if (params.category) selectedTag.value = params.category
        if (params.search) searchQuery.value = params.search
        if (params.sortBy) sortBy.value = params.sortBy
        if (params.page) pagination.goToPage(params.page)
        if (params.pageSize) pagination.setPageSize(params.pageSize)
      }
    } finally {
      loading.value = false
    }
  }

  return {
    photographers,
    loading,
    selectedTag,
    searchQuery,
    sortBy,
    currentPage: pagination.currentPage,
    pageSize: pagination.currentPageSize,
    filterTags,
    filteredPhotographers,
    totalPages: pagination.totalPages,
    paginatedPhotographers: pagination.paginatedItems,
    startIndex,
    endIndex: pagination.endIndex,
    setPage: pagination.goToPage,
    nextPage: pagination.nextPage,
    prevPage: pagination.prevPage,
    setTag,
    setSearch,
    setSortBy,
    toggleFollow,
    fetchPhotographers
  }
})

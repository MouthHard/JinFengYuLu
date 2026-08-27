import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { FilterParams } from '@/types/landscape'
import { useLandscapeDataStore } from './data'
import { useInteractionStore } from './interaction'
import { parseCount } from '@/utils/landscape/format'
import { usePagination } from '@/composables/landscape/usePagination'

export const usePhotographerStore = defineStore('landscape-photographer', () => {
  const dataStore = useLandscapeDataStore()
  const photographers = computed(() => dataStore.getAllPhotographers())
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
          tagMap.set(tag, { id: tag, name: tag, icon: '🏷�?, count: 1 })
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

    const sortFn = sortBy.value
    if (sortFn === 'newest') {
      const timeCache = new Map<string, number>()
      result.sort((a, b) => {
        let ta = timeCache.get(a.id)
        if (ta === undefined) { ta = new Date(a.joinDate || 0).getTime(); timeCache.set(a.id, ta) }
        let tb = timeCache.get(b.id)
        if (tb === undefined) { tb = new Date(b.joinDate || 0).getTime(); timeCache.set(b.id, tb) }
        return tb - ta
      })
    } else if (sortFn === 'popular' || sortFn === 'works') {
      const numCache = new Map<string, number>()
      const getNum = (p: typeof result[0]) => {
        let v = numCache.get(p.id)
        if (v === undefined) {
          v = parseCount(sortFn === 'popular' ? p.followers : p.worksCount)
          numCache.set(p.id, v)
        }
        return v
      }
      result.sort((a, b) => getNum(b) - getNum(a))
    } else if (sortFn === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

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
      await dataStore.ensureLoaded()
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

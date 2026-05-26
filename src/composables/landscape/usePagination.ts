import { ref, computed, type Ref, type ComputedRef } from 'vue'

interface UsePaginationOptions {
  pageSize?: number
  initialPage?: number
}

interface UsePaginationReturn<T> {
  currentPage: Ref<number>
  currentPageSize: Ref<number>
  totalPages: ComputedRef<number>
  paginatedItems: ComputedRef<T[]>
  hasNextPage: ComputedRef<boolean>
  hasPrevPage: ComputedRef<boolean>
  startIndex: ComputedRef<number>
  endIndex: ComputedRef<number>
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  firstPage: () => void
  lastPage: () => void
  setPageSize: (size: number) => void
}

export function usePagination<T>(
  items: Ref<T[]> | ComputedRef<T[]> | T[],
  options: UsePaginationOptions = {}
): UsePaginationReturn<T> {
  const { pageSize = 10, initialPage = 1 } = options
  
  const currentPage = ref(initialPage)
  const currentPageSize = ref(pageSize)
  
  const itemsArray = computed(() => {
    if (Array.isArray(items)) {
      return items
    }
    return items.value
  })
  
  const totalPages = computed(() => {
    return Math.ceil(itemsArray.value.length / currentPageSize.value)
  })
  
  const startIndex = computed(() => {
    return (currentPage.value - 1) * currentPageSize.value
  })
  
  const endIndex = computed(() => {
    return Math.min(startIndex.value + currentPageSize.value, itemsArray.value.length)
  })
  
  const paginatedItems = computed(() => {
    return itemsArray.value.slice(startIndex.value, endIndex.value)
  })
  
  const hasNextPage = computed(() => {
    return currentPage.value < totalPages.value
  })
  
  const hasPrevPage = computed(() => {
    return currentPage.value > 1
  })
  
  const goToPage = (page: number) => {
    currentPage.value = Math.max(1, Math.min(page, totalPages.value))
  }
  
  const nextPage = () => {
    if (hasNextPage.value) {
      currentPage.value++
    }
  }
  
  const prevPage = () => {
    if (hasPrevPage.value) {
      currentPage.value--
    }
  }
  
  const firstPage = () => {
    currentPage.value = 1
  }
  
  const lastPage = () => {
    currentPage.value = totalPages.value
  }
  
  const setPageSize = (size: number) => {
    currentPageSize.value = Math.max(1, size)
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value || 1
    }
  }
  
  return {
    currentPage,
    currentPageSize,
    totalPages,
    paginatedItems,
    hasNextPage,
    hasPrevPage,
    startIndex,
    endIndex,
    goToPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    setPageSize
  }
}

export function useInfiniteScroll<T>(
  items: Ref<T[]> | ComputedRef<T[]> | T[],
  loadMore: () => Promise<void>,
  options: { batchSize?: number; threshold?: number } = {}
) {
  const { batchSize = 10, threshold = 100 } = options
  
  const loading = ref(false)
  const hasMore = ref(true)
  const displayedCount = ref(batchSize)
  
  const itemsArray = computed(() => {
    if (Array.isArray(items)) {
      return items
    }
    return items.value
  })
  
  const displayedItems = computed(() => {
    return itemsArray.value.slice(0, displayedCount.value)
  })
  
  const loadNext = async () => {
    if (loading.value || !hasMore.value) return
    
    loading.value = true
    try {
      await loadMore()
      displayedCount.value += batchSize
      hasMore.value = displayedCount.value < itemsArray.value.length
    } finally {
      loading.value = false
    }
  }
  
  const checkScroll = (scrollTop: number, scrollHeight: number, clientHeight: number) => {
    if (scrollHeight - scrollTop - clientHeight < threshold) {
      loadNext()
    }
  }
  
  return {
    displayedItems,
    loading,
    hasMore,
    loadNext,
    checkScroll
  }
}

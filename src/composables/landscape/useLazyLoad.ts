import { ref, onMounted, onUnmounted } from 'vue'

interface UseLazyLoadOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useLazyLoad(options: UseLazyLoadOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options
  
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  const hasLoaded = ref(false)
  
  let observer: IntersectionObserver | null = null
  
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }
  
  onMounted(() => {
    if (!elementRef.value) return
    
    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
        
        if (entry.isIntersecting && !hasLoaded.value) {
          hasLoaded.value = true
          
          if (once) {
            cleanup()
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    )
    
    observer.observe(elementRef.value)
  })
  
  onUnmounted(cleanup)
  
  return {
    elementRef,
    isVisible,
    hasLoaded
  }
}

export function useLazyLoadImage(options: UseLazyLoadOptions = {}) {
  const { elementRef, isVisible, hasLoaded } = useLazyLoad(options)
  
  const imageRef = ref<HTMLImageElement | null>(null)
  const isLoaded = ref(false)
  const isError = ref(false)
  
  const loadImage = (src: string) => {
    if (!isVisible.value) return
    
    const img = new Image()
    img.src = src
    img.onload = () => {
      isLoaded.value = true
      if (imageRef.value) {
        imageRef.value.src = src
      }
    }
    img.onerror = () => {
      isError.value = true
    }
  }
  
  return {
    elementRef,
    imageRef,
    isVisible,
    hasLoaded,
    isLoaded,
    isError,
    loadImage
  }
}

export function useLazyLoadMultiple(
  itemCount: number,
  options: UseLazyLoadOptions & { batchSize?: number } = {}
) {
  const { batchSize = 5, ...lazyOptions } = options
  
  const loadedCount = ref(batchSize)
  const loading = ref(false)
  
  const loadMore = () => {
    if (loadedCount.value >= itemCount || loading.value) return
    
    loading.value = true
    requestAnimationFrame(() => {
      loadedCount.value = Math.min(loadedCount.value + batchSize, itemCount)
      loading.value = false
    })
  }
  
  const { elementRef, isVisible } = useLazyLoad(lazyOptions)
  
  return {
    elementRef,
    isVisible,
    loadedCount,
    loading,
    loadMore
  }
}

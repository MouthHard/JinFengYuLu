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

  let pendingImage: HTMLImageElement | null = null

  const loadImage = (src: string) => {
    if (!isVisible.value) return

    if (pendingImage) {
      pendingImage.onload = null
      pendingImage.onerror = null
      pendingImage = null
    }

    const img = new Image()
    pendingImage = img
    img.src = src
    img.onload = () => {
      if (pendingImage !== img) return
      pendingImage = null
      isLoaded.value = true
      if (imageRef.value) {
        imageRef.value.src = src
      }
    }
    img.onerror = () => {
      if (pendingImage !== img) return
      pendingImage = null
      isError.value = true
    }
  }

  onUnmounted(() => {
    if (pendingImage) {
      pendingImage.onload = null
      pendingImage.onerror = null
      pendingImage = null
    }
  })

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

  let rafId: number | null = null

  const loadMore = () => {
    if (loadedCount.value >= itemCount || loading.value) return

    loading.value = true
    rafId = requestAnimationFrame(() => {
      rafId = null
      loadedCount.value = Math.min(loadedCount.value + batchSize, itemCount)
      loading.value = false
    })
  }

  const { elementRef, isVisible } = useLazyLoad(lazyOptions)

  onUnmounted(() => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  })

  return {
    elementRef,
    isVisible,
    loadedCount,
    loading,
    loadMore
  }
}

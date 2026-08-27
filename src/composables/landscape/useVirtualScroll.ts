import { ref, computed, onMounted, onUnmounted, watch, type Ref } from 'vue'

interface UseVirtualScrollOptions {
  itemHeight: number
  buffer?: number
  threshold?: number
}

export function useVirtualScroll(
  containerRef: Ref<HTMLElement | null>,
  items: Ref<any[]>,
  options: UseVirtualScrollOptions
) {
  const { itemHeight, buffer = 5, threshold = 100 } = options

  const scrollTop = ref(0)
  const containerHeight = ref(0)
  const isScrolling = ref(false)

  const totalHeight = computed(() => items.value.length * itemHeight)

  const visibleCount = computed(() => {
    return Math.ceil(containerHeight.value / itemHeight) + buffer * 2
  })

  const startIndex = computed(() => {
    const start = Math.floor(scrollTop.value / itemHeight) - buffer
    return Math.max(0, start)
  })

  const endIndex = computed(() => {
    return Math.min(items.value.length, startIndex.value + visibleCount.value)
  })

  const offsetY = computed(() => startIndex.value * itemHeight)

  const visibleItems = computed(() => {
    return items.value.slice(startIndex.value, endIndex.value).map((item, i) => ({
      ...item,
      _index: startIndex.value + i
    }))
  })

  const progress = computed(() => {
    if (totalHeight.value === 0) return 0
    return Math.min(1, (scrollTop.value + containerHeight.value) / totalHeight.value)
  })

  const isAtBottom = computed(() => {
    return scrollTop.value + containerHeight.value >= totalHeight.value - threshold
  })

  let scrollTimeout: number | null = null
  let rafId: number | null = null

  const handleScroll = () => {
    if (!containerRef.value) return

    if (rafId !== null) return

    rafId = requestAnimationFrame(() => {
      rafId = null
      scrollTop.value = containerRef.value!.scrollTop
      isScrolling.value = true

      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      scrollTimeout = window.setTimeout(() => {
        isScrolling.value = false
      }, 150)
    })
  }

  let resizeObserver: ResizeObserver | null = null

  const setup = () => {
    if (!containerRef.value) return

    containerHeight.value = containerRef.value.clientHeight
    containerRef.value.addEventListener('scroll', handleScroll, { passive: true })

    resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        containerHeight.value = entry.contentRect.height
      }
    })
    resizeObserver.observe(containerRef.value)
  }

  const cleanup = () => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('scroll', handleScroll)
    }
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  const scrollToIndex = (index: number) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = index * itemHeight
    }
  }

  const scrollToTop = () => {
    if (containerRef.value) {
      containerRef.value.scrollTop = 0
    }
  }

  const scrollToBottom = () => {
    if (containerRef.value) {
      containerRef.value.scrollTop = totalHeight.value - containerHeight.value
    }
  }

  onMounted(setup)
  onUnmounted(cleanup)

  watch(containerRef, (newRef, oldRef) => {
    if (oldRef) {
      cleanup()
    }
    if (newRef) {
      setup()
    }
  })

  return {
    scrollTop,
    containerHeight,
    totalHeight,
    visibleCount,
    startIndex,
    endIndex,
    offsetY,
    visibleItems,
    progress,
    isAtBottom,
    isScrolling,
    scrollToIndex,
    scrollToTop,
    scrollToBottom
  }
}

<template>
  <div
    ref="containerRef"
    class="virtual-scroll-container"
    @scroll="handleScroll"
  >
    <div
      class="virtual-scroll-content"
      :style="{ height: `${totalHeight}px` }"
    >
      <div
        class="virtual-scroll-viewport"
        :style="{ transform: `translate3d(0, ${offsetY}px, 0)` }"
      >
        <div
          v-for="item in visibleItems"
          :key="getItemKey(item)"
          class="virtual-scroll-item"
          :style="{ height: `${itemHeight}px` }"
        >
          <slot :item="item" :index="item._index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface Props {
  items: unknown[]
  itemHeight: number
  buffer?: number
  keyField?: string
}

const props = withDefaults(defineProps<Props>(), {
  buffer: 5,
  keyField: 'id'
})

const emit = defineEmits<{
  'scroll-end': []
  'load-more': []
}>()

const containerRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
const containerHeight = ref(0)

const totalHeight = computed(() => props.items.length * props.itemHeight)

const visibleCount = computed(() => {
  return Math.ceil(containerHeight.value / props.itemHeight) + props.buffer * 2
})

const startIndex = computed(() => {
  const start = Math.floor(scrollTop.value / props.itemHeight) - props.buffer
  return Math.max(0, start)
})

const endIndex = computed(() => {
  return Math.min(props.items.length, startIndex.value + visibleCount.value)
})

const offsetY = computed(() => startIndex.value * props.itemHeight)

const visibleItems = computed(() => {
  return props.items.slice(startIndex.value, endIndex.value).map((item, i) => ({
    ...(item as Record<string, unknown>),
    _index: startIndex.value + i
  }))
})

const getItemKey = (item: Record<string, unknown>): PropertyKey => {
  const key = item[props.keyField]
  if (key !== undefined && key !== null) {
    return key as PropertyKey
  }
  return item._index as number
}

let rafId: number | null = null

const handleScroll = () => {
  if (!containerRef.value || rafId !== null) return

  rafId = requestAnimationFrame(() => {
    rafId = null
    if (!containerRef.value) return
    scrollTop.value = containerRef.value.scrollTop

    const scrollBottom = scrollTop.value + containerHeight.value
    if (scrollBottom >= totalHeight.value - 100) {
      emit('scroll-end')
    }
  })
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (!containerRef.value) return

  containerHeight.value = containerRef.value.clientHeight

  resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      containerHeight.value = entry.contentRect.height
    }
  })
  resizeObserver.observe(containerRef.value)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
})

watch(() => props.items.length, () => {
  if (containerRef.value) {
    containerHeight.value = containerRef.value.clientHeight
  }
})

defineExpose({
  scrollToIndex: (index: number) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = index * props.itemHeight
    }
  },
  scrollToTop: () => {
    if (containerRef.value) {
      containerRef.value.scrollTop = 0
    }
  }
})
</script>

<style scoped lang="scss" src="./index.scss" />

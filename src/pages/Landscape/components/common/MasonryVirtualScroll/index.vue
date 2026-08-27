<template>
  <div
    ref="containerRef"
    class="masonry-virtual-scroll"
    @scroll="handleScroll"
  >
    <div
      class="masonry-content"
      :style="{ height: `${totalHeight}px` }"
    >
      <div
        v-for="item in visibleItems"
        :key="getItemKey(item)"
        class="masonry-item"
        :style="getItemStyle(item)"
      >
        <slot :item="item" :index="item._index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface Props {
  items: unknown[]
  columns?: number
  gap?: number
  estimatedHeight?: number
  keyField?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: 4,
  gap: 16,
  estimatedHeight: 300,
  keyField: 'id'
})

const emit = defineEmits<{
  'scroll-end': []
}>()

const containerRef = ref<HTMLElement | null>(null)
const scrollTop = ref(0)
const containerWidth = ref(1200)
const containerHeight = ref(800)

const columnWidth = computed(() => {
  return (containerWidth.value - props.gap * (props.columns - 1)) / props.columns
})

const columnHeights = ref<number[]>(new Array(props.columns).fill(0))
const itemPositions = ref<Map<number, { x: number; y: number; height: number }>>(new Map())

const calculateLayout = () => {
  const positions = new Map<number, { x: number; y: number; height: number }>()
  const heights = new Array(props.columns).fill(0)

  props.items.forEach((item, index) => {
    const minHeight = Math.min(...heights)
    const column = heights.indexOf(minHeight)

    const x = column * (columnWidth.value + props.gap)
    const y = heights[column]

    const height = ((item as Record<string, unknown>).height as number) || props.estimatedHeight

    positions.set(index, { x, y, height })
    heights[column] += height + props.gap
  })

  itemPositions.value = positions
  columnHeights.value = heights
}

const totalHeight = computed(() => {
  return Math.max(...columnHeights.value)
})

const bufferHeight = computed(() => props.estimatedHeight * 3)

const visibleItems = computed(() => {
  const start = scrollTop.value - bufferHeight.value
  const end = scrollTop.value + containerHeight.value + bufferHeight.value

  const visible: Record<string, unknown>[] = []

  itemPositions.value.forEach((pos, index) => {
    if (pos.y + pos.height >= start && pos.y <= end) {
      visible.push({
        ...(props.items[index] as Record<string, unknown>),
        _index: index,
        _x: pos.x,
        _y: pos.y,
        _height: pos.height
      })
    }
  })

  return visible.sort((a, b) => (a._index as number) - (b._index as number))
})

const getItemKey = (item: Record<string, unknown>): PropertyKey => {
  const key = item[props.keyField]
  if (key !== undefined && key !== null) {
    return key as PropertyKey
  }
  return item._index as number
}

const getItemStyle = (item: Record<string, unknown>) => {
  return {
    position: 'absolute' as const,
    left: `${item._x as number}px`,
    top: `${item._y as number}px`,
    width: `${columnWidth.value}px`,
    height: `${item._height as number}px`
  }
}

const handleScroll = () => {
  if (!containerRef.value) return

  scrollTop.value = containerRef.value.scrollTop

  const scrollBottom = scrollTop.value + containerHeight.value
  if (scrollBottom >= totalHeight.value - 200) {
    emit('scroll-end')
  }
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  if (!containerRef.value) return

  containerWidth.value = containerRef.value.clientWidth
  containerHeight.value = containerRef.value.clientHeight

  resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      containerWidth.value = entry.contentRect.width
      containerHeight.value = entry.contentRect.height
      calculateLayout()
    }
  })
  resizeObserver.observe(containerRef.value)

  nextTick(calculateLayout)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

watch(() => props.items.length, () => {
  nextTick(calculateLayout)
})

watch(() => props.columns, () => {
  nextTick(calculateLayout)
})

defineExpose({
  scrollToTop: () => {
    if (containerRef.value) {
      containerRef.value.scrollTop = 0
    }
  },
  recalculate: calculateLayout
})
</script>

<style scoped lang="scss" src="./index.scss" />

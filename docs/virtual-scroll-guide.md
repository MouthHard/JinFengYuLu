# 虚拟滚动组件使用指南

## 概述

虚拟滚动通过只渲染可视区域的元素，大幅提升大列表性能。适用于：
- 100+ 条数据列表
- 瀑布流布局
- 固定高度或动态高度列表

---

## 1. VirtualScroll - 固定高度列表

**适用场景**: 所有项高度相同的列表（如摄影师卡片）

**组件路径**: `src/pages/Landscape/components/common/VirtualScroll/index.vue`

**使用示例**:
```vue
<template>
  <VirtualScroll
    ref="scrollRef"
    :items="photographers"
    :item-height="280"
    :buffer="5"
    @scroll-end="handleLoadMore"
  >
    <template #default="{ item, index }">
      <PhotographerCard :photographer="item" />
    </template>
  </VirtualScroll>
</template>

<script setup lang="ts">
import VirtualScroll from '../common/VirtualScroll/index.vue'
import { ref } from 'vue'

const scrollRef = ref()
const photographers = ref([...]) // 100+ 摄影师数据

const handleLoadMore = () => {
  // 加载更多数据
  loadMorePhotographers()
}

// 滚动到指定索引
const scrollToIndex = (index: number) => {
  scrollRef.value?.scrollToIndex(index)
}

// 滚动到顶部
const scrollToTop = () => {
  scrollRef.value?.scrollToTop()
}
</script>
```

**Props**:
- `items: any[]` - 列表数据
- `itemHeight: number` - 每项高度（px）
- `buffer?: number` - 缓冲项数量，默认 5
- `keyField?: string` - 唯一标识字段，默认 'id'

**Events**:
- `scroll-end` - 滚动到底部触发
- `load-more` - 需要加载更多

**Methods**:
- `scrollToIndex(index)` - 滚动到指定索引
- `scrollToTop()` - 滚动到顶部

---

## 2. MasonryVirtualScroll - 瀅布流布局

**适用场景**: 不同高度的卡片紧密排列（如作品展示）

**组件路径**: `src/pages/Landscape/components/common/MasonryVirtualScroll/index.vue`

**使用示例**:
```vue
<template>
  <MasonryVirtualScroll
    ref="masonryRef"
    :items="works"
    :columns="4"
    :gap="16"
    :estimated-height="300"
    @scroll-end="handleLoadMore"
  >
    <template #default="{ item, index }">
      <WorkCard :work="item" />
    </template>
  </MasonryVirtualScroll>
</template>

<script setup lang="ts">
import MasonryVirtualScroll from '../common/MasonryVirtualScroll/index.vue'
import { ref } from 'vue'

const works = ref([
  { id: 1, title: '作品1', height: 320 },
  { id: 2, title: '作品2', height: 280 },
  { id: 3, title: '作品3', height: 350 },
  // ...
])

// 注意：每个 item 需要有 height 属性
</script>
```

**Props**:
- `items: any[]` - 列表数据（需包含 height 属性）
- `columns?: number` - 列数，默认 4
- `gap?: number` - 间距，默认 16px
- `estimatedHeight?: number` - 预估高度，默认 300px
- `keyField?: string` - 唯一标识字段

**Methods**:
- `scrollToTop()` - 滚动到顶部
- `recalculate()` - 重新计算布局

---

## 3. useVirtualScroll - Composable

**适用场景**: 自定义虚拟滚动逻辑

**使用示例**:
```vue
<template>
  <div ref="containerRef" class="scroll-container" style="height: 600px; overflow-y: auto">
    <div :style="{ height: `${totalHeight}px` }">
      <div :style="{ transform: `translateY(${offsetY}px)` }">
        <div
          v-for="item in visibleItems"
          :key="item.id"
          :style="{ height: `${itemHeight}px` }"
        >
          <ItemCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useVirtualScroll } from '@/composables/landscape'

const containerRef = ref<HTMLElement | null>(null)
const items = ref([...]) // 大列表数据

const {
  totalHeight,
  offsetY,
  visibleItems,
  progress,
  isAtBottom,
  scrollToIndex
} = useVirtualScroll(containerRef, items, {
  itemHeight: 200,
  buffer: 5,
  threshold: 100
})

// 当滚动到底部时加载更多
watch(isAtBottom, (atBottom) => {
  if (atBottom) {
    loadMore()
  }
})
</script>
```

**返回值**:
- `scrollTop` - 当前滚动位置
- `totalHeight` - 总高度
- `visibleItems` - 可见项
- `startIndex` / `endIndex` - 可见范围
- `offsetY` - 偏移量
- `progress` - 滚动进度 (0-1)
- `isAtBottom` - 是否到底部
- `isScrolling` - 是否正在滚动
- `scrollToIndex(index)` - 滚动到索引
- `scrollToTop()` / `scrollToBottom()` - 滚动到顶部/底部

---

## 性能对比

### 传统渲染
- 1000 条数据 = 1000 个 DOM 节点
- 滚动卡顿，内存占用高

### 虚拟滚动
- 1000 条数据 ≈ 20 个 DOM 节点（仅可见区域）
- 流畅滚动，内存占用低

**优化效果**:
- DOM 节点减少 95%+
- 内存占用减少 80%+
- 滚动帧率稳定 60fps

---

## 注意事项

1. **固定高度列表**: 使用 VirtualScroll
2. **动态高度列表**: 使用 MasonryVirtualScroll，需提供 height 属性
3. **key 唯一性**: 确保每个 item 有唯一 id
4. **buffer 设置**: 根据项高度调整，一般 3-8
5. **响应式**: 列数变化时 MasonryVirtualScroll 自动重新计算

---

## 待集成组件

- [ ] AllPhotographers - 使用 VirtualScroll
- [ ] ResultGrid - 使用 MasonryVirtualScroll
- [ ] Search 页面结果列表 - 使用 VirtualScroll

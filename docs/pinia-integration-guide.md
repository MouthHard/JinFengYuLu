# Pinia Store 集成指南

## 已创建的 Store

### 1. usePhotographerStore
**路径**: `src/stores/landscape/photographer.ts`

**功能**:
- 摄影师列表管理
- 筛选（标签、搜索）
- 排序（人气、作品数、最新、评分）
- 分页
- 关注/取关

**使用示例**:
```vue
<script setup lang="ts">
import { usePhotographerStore } from '@/stores/landscape'
import { storeToRefs } from 'pinia'

const store = usePhotographerStore()
const {
  paginatedPhotographers,
  filterTags,
  loading,
  currentPage,
  totalPages,
  startIndex,
  endIndex
} = storeToRefs(store)

const { setTag, setSearch, setSortBy, setPage, toggleFollow } = store
</script>

<template>
  <!-- 使用 store 数据 -->
  <div v-for="p in paginatedPhotographers" :key="p.id">
    {{ p.name }}
  </div>
</template>
```

---

### 2. useCategoryStore
**路径**: `src/stores/landscape/category.ts`

**功能**:
- 分类列表管理
- 作品项列表
- 筛选（分类、类型）
- 排序（人气、最新、点赞）
- 分页
- 点赞功能
- 加载更多

**使用示例**:
```vue
<script setup lang="ts">
import { useCategoryStore } from '@/stores/landscape'
import { storeToRefs } from 'pinia'

const store = useCategoryStore()
const {
  categories,
  paginatedItems,
  loading,
  selectedCategory,
  totalPages
} = storeToRefs(store)

const { fetchItems, setCategory, toggleLike, loadMore } = store

onMounted(() => {
  fetchItems(100)
})
</script>
```

---

### 3. useSearchStore
**路径**: `src/stores/landscape/search.ts`

**功能**:
- 搜索查询管理
- 搜索结果
- 搜索历史（本地存储）
- 筛选（类型、分类、排序）
- 最近搜索记录

**使用示例**:
```vue
<script setup lang="ts">
import { useSearchStore } from '@/stores/landscape'
import { storeToRefs } from 'pinia'

const store = useSearchStore()
const {
  query,
  results,
  loading,
  history,
  hasResults,
  resultCount
} = storeToRefs(store)

const { search, addToHistory, removeFromHistory, clearHistory } = store

const handleSearch = async () => {
  await search(query.value)
}
</script>
```

---

## 迁移步骤

### 从本地状态迁移到 Pinia

**Before (AllPhotographers 组件)**:
```vue
<script setup lang="ts">
const selectedTag = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const sortBy = ref('default')

const filteredPhotographers = computed(() => {
  // 大量筛选逻辑...
})

const paginatedPhotographers = computed(() => {
  // 分页逻辑...
})
</script>
```

**After (使用 Pinia)**:
```vue
<script setup lang="ts">
import { usePhotographerStore } from '@/stores/landscape'
import { storeToRefs } from 'pinia'

const store = usePhotographerStore()
const {
  selectedTag,
  searchQuery,
  currentPage,
  sortBy,
  paginatedPhotographers,
  filterTags,
  totalPages
} = storeToRefs(store)

const { setTag, setSearch, setSortBy, setPage } = store
</script>

<template>
  <button @click="setTag('风光')">风光</button>
  <input v-model="searchQuery" @input="setSearch($event.target.value)" />
</template>
```

---

## 优势

1. **状态共享**: 多组件共享同一状态，无需 props 层层传递
2. **逻辑复用**: 筛选、排序、分页逻辑集中在 store
3. **持久化**: 搜索历史自动保存到 localStorage
4. **类型安全**: TypeScript 完整支持
5. **DevTools**: Pinia DevTools 调试状态

---

## 待集成组件

- [x] Search 页面 → useSearchStore
- [ ] AllPhotographers → usePhotographerStore
- [ ] Category 页面 → useCategoryStore
- [ ] ResultGrid → useCategoryStore

---

## 注意事项

1. 使用 `storeToRefs` 解构保持响应性
2. Actions 直接调用，不需要 `.value`
3. 组件卸载时状态不会重置（如需重置用 `$reset()`）
4. 可在多个组件中共享同一个 store 实例

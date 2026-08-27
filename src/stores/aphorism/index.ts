import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Poem } from '@/types/aphorism'
import {
  fetchAphorisms,
  fetchAphorismById,
  fetchAphorismCategories,
  fetchHotTags,
} from '@/services/aphorism'
import type { AphorismQueryParams, CategoryGroup } from '@/services/aphorism'
import { filterPoemsByCategory, searchPoems } from '@/utils/aphorism/categoryFilter'

export const useAphorismDataStore = defineStore('aphorismData', () => {
  const poems = ref<Poem[]>([])
  const filteredPoems = ref<Poem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const categories = ref<CategoryGroup[]>([])
  const hotTags = ref<string[]>([])

  async function getPoem(id: number): Promise<Poem | null> {
    // 先查本地缓存
    const local = poems.value.find((p) => p.id === id)
    if (local) return local
    try {
      return await fetchAphorismById(id)
    } catch {
      return null
    }
  }

  async function loadPoems(params: AphorismQueryParams = {}) {
    loading.value = true
    error.value = null
    try {
      const response = await fetchAphorisms({
        page: params.page ?? 1,
        limit: params.limit ?? 100,
      })
      poems.value = response.items
      filteredPoems.value = response.items
    } catch (e) {
      error.value = e instanceof Error ? e.message : '加载失败'
      poems.value = []
      filteredPoems.value = []
    } finally {
      loading.value = false
    }
  }

  async function loadCategories() {
    try {
      categories.value = await fetchAphorismCategories()
    } catch {
      categories.value = []
    }
  }

  async function loadHotTags() {
    try {
      hotTags.value = await fetchHotTags()
    } catch {
      hotTags.value = []
    }
  }

  // 前端纯过滤，避免重复网络请求
  function filterByCategory(mainCategoryId?: string, subCategoryId?: number) {
    if (!mainCategoryId || !subCategoryId) {
      filteredPoems.value = poems.value
      return
    }
    const subCat = categories.value
      .find((c) => c.id === mainCategoryId)
      ?.children.find((ch) => ch.id === subCategoryId)
    const subCategoryIdName = subCat?.name ?? String(subCategoryId)
    filteredPoems.value = filterPoemsByCategory(poems.value, {
      categoryId: mainCategoryId,
      subCategoryId: subCategoryIdName,
    })
  }

  // 前端纯搜索，避免重复网络请求
  function searchByKeyword(keyword: string) {
    const trimmed = keyword.trim()
    if (!trimmed) {
      filteredPoems.value = poems.value
      return
    }
    filteredPoems.value = searchPoems(poems.value, trimmed)
  }

  function resetFilter() {
    filteredPoems.value = poems.value
  }

  const getAllPoems = (): Poem[] => poems.value

  return {
    poems,
    filteredPoems,
    loading,
    error,
    categories,
    hotTags,
    loadPoems,
    getPoem,
    loadCategories,
    loadHotTags,
    filterByCategory,
    searchByKeyword,
    resetFilter,
    getAllPoems,
  }
})

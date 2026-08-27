import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Poem } from '@/types/aphorism/poem'

const STORAGE_KEYS = {
  liked: 'aphorism_liked',
  loved: 'aphorism_loved',
  favorites: 'aphorism_favorites',
  recentViews: 'aphorism_recent_views',
  searchHistory: 'aphorism_search_history',
} as const

const MAX_RECENT_VIEWS = 20
const MAX_SEARCH_HISTORY = 20

function loadStringArrayFromStorage(key: string): string[] {
  try {
    const data = localStorage.getItem(key)
    if (data) {
      const parsed = JSON.parse(data)
      if (Array.isArray(parsed)) {
        return parsed.filter((s: unknown): s is string => typeof s === 'string')
      }
    }
  } catch {
    // ignore
  }
  return []
}

function saveStringArrayToStorage(key: string, arr: string[]) {
  localStorage.setItem(key, JSON.stringify(arr))
}

function loadArrayFromStorage(key: string): number[] {
  try {
    const data = localStorage.getItem(key)
    if (data) {
      // 确保所有 ID 都是数字类型
      return JSON.parse(data).map((id: number) => Number(id))
    }
  } catch {
    // ignore
  }
  return []
}

function saveArrayToStorage(key: string, arr: number[]) {
  localStorage.setItem(key, JSON.stringify(arr))
}

export const useAphorismInteractionStore = defineStore('aphorismInteraction', () => {
  // 使用数组保持 Vue 3 ref 响应式，用 computed Set 镜像实现 O(1) 查找
  const likedIds = ref<number[]>(loadArrayFromStorage(STORAGE_KEYS.liked))
  const lovedIds = ref<number[]>(loadArrayFromStorage(STORAGE_KEYS.loved))
  const favoriteIds = ref<number[]>(loadArrayFromStorage(STORAGE_KEYS.favorites))
  const recentViewIds = ref<number[]>(loadArrayFromStorage(STORAGE_KEYS.recentViews))
  const searchHistory = ref<string[]>(loadStringArrayFromStorage(STORAGE_KEYS.searchHistory))

  // Set 镜像：O(1) 查找
  const likedSet = computed(() => new Set(likedIds.value))
  const lovedSet = computed(() => new Set(lovedIds.value))
  const favoriteSet = computed(() => new Set(favoriteIds.value))

  // 防抖写 localStorage，避免频繁点击阻塞主线程
  const storageTimers: Record<string, number | null> = {}
  const debouncedSave = (key: string, value: unknown) => {
    if (storageTimers[key]) clearTimeout(storageTimers[key])
    storageTimers[key] = window.setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(value))
      storageTimers[key] = null
    }, 300)
  }

  const toggleLike = (poemId: number) => {
    const index = likedIds.value.indexOf(poemId)
    if (index > -1) {
      likedIds.value.splice(index, 1)
    } else {
      likedIds.value.push(poemId)
    }
    debouncedSave(STORAGE_KEYS.liked, likedIds.value)
  }

  const isLiked = (poemId: number) => likedSet.value.has(poemId)

  const toggleLove = (poemId: number) => {
    const index = lovedIds.value.indexOf(poemId)
    if (index > -1) {
      lovedIds.value.splice(index, 1)
    } else {
      lovedIds.value.push(poemId)
    }
    debouncedSave(STORAGE_KEYS.loved, lovedIds.value)
  }

  const isLoved = (poemId: number) => lovedSet.value.has(poemId)

  const toggleFavorite = (poemId: number) => {
    const index = favoriteIds.value.indexOf(poemId)
    if (index > -1) {
      favoriteIds.value.splice(index, 1)
    } else {
      favoriteIds.value.push(poemId)
    }
    debouncedSave(STORAGE_KEYS.favorites, favoriteIds.value)
  }

  const isFavorite = (poemId: number) => favoriteSet.value.has(poemId)

  const addRecentView = (poemId: number) => {
    const index = recentViewIds.value.indexOf(poemId)
    if (index > -1) {
      recentViewIds.value.splice(index, 1)
    }
    recentViewIds.value.unshift(poemId)
    if (recentViewIds.value.length > MAX_RECENT_VIEWS) {
      recentViewIds.value.length = MAX_RECENT_VIEWS
    }
    debouncedSave(STORAGE_KEYS.recentViews, recentViewIds.value)
  }

  const clearRecentViews = () => {
    recentViewIds.value = []
    saveArrayToStorage(STORAGE_KEYS.recentViews, [])
  }

  const addSearchHistory = (keyword: string) => {
    const trimmed = keyword.trim()
    if (!trimmed) return
    const index = searchHistory.value.indexOf(trimmed)
    if (index > -1) {
      searchHistory.value.splice(index, 1)
    }
    searchHistory.value.unshift(trimmed)
    if (searchHistory.value.length > MAX_SEARCH_HISTORY) {
      searchHistory.value.length = MAX_SEARCH_HISTORY
    }
    debouncedSave(STORAGE_KEYS.searchHistory, searchHistory.value)
  }

  const removeSearchHistory = (keyword: string) => {
    const index = searchHistory.value.indexOf(keyword)
    if (index > -1) {
      searchHistory.value.splice(index, 1)
    }
    debouncedSave(STORAGE_KEYS.searchHistory, searchHistory.value)
  }

  const clearSearchHistory = () => {
    searchHistory.value = []
    saveStringArrayToStorage(STORAGE_KEYS.searchHistory, [])
  }

  const getLikedPoems = (allPoems: Poem[]) => {
    const s = likedSet.value
    return allPoems.filter((p) => s.has(p.id))
  }

  const getLovedPoems = (allPoems: Poem[]) => {
    const s = lovedSet.value
    return allPoems.filter((p) => s.has(p.id))
  }

  const getFavoritePoems = (allPoems: Poem[]) => {
    const s = favoriteSet.value
    return allPoems.filter((p) => s.has(p.id))
  }

  const getRecentViewPoems = (allPoems: Poem[]): Poem[] => {
    const poemMap = new Map(allPoems.map((p) => [p.id, p]))
    return recentViewIds.value
      .map((id) => poemMap.get(id))
      .filter((p): p is Poem => p !== undefined)
  }

  const likedCount = computed(() => likedIds.value.length)
  const lovedCount = computed(() => lovedIds.value.length)
  const favoriteCount = computed(() => favoriteIds.value.length)

  const totalInteractionCount = computed(
    () => lovedIds.value.length + favoriteIds.value.length,
  )

  // 合并 Set 避免重复构建
  const interactedSet = computed(() => {
    const s = new Set<number>(lovedIds.value)
    for (const id of favoriteIds.value) s.add(id)
    return s
  })

  const getFavoritePoets = (allPoems: Poem[]) => {
    const s = interactedSet.value
    const poetMap = new Map<string, { name: string; dynasty: string; count: number }>()

    for (const poem of allPoems) {
      if (s.has(poem.id)) {
        const key = `${poem.author}-${poem.dynasty}`
        const existing = poetMap.get(key)
        if (existing) {
          existing.count++
        } else {
          poetMap.set(key, { name: poem.author, dynasty: poem.dynasty, count: 1 })
        }
      }
    }

    return [...poetMap.values()].sort((a, b) => b.count - a.count)
  }

  const getDynastyDistribution = (allPoems: Poem[]) => {
    const s = interactedSet.value
    const dynastyMap = new Map<string, number>()

    for (const poem of allPoems) {
      if (s.has(poem.id)) {
        dynastyMap.set(poem.dynasty, (dynastyMap.get(poem.dynasty) || 0) + 1)
      }
    }

    return [...dynastyMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }))
  }

  return {
    likedIds,
    lovedIds,
    favoriteIds,
    recentViewIds,
    searchHistory,
    toggleLike,
    isLiked,
    toggleLove,
    isLoved,
    toggleFavorite,
    isFavorite,
    addRecentView,
    clearRecentViews,
    addSearchHistory,
    removeSearchHistory,
    clearSearchHistory,
    getLikedPoems,
    getLovedPoems,
    getFavoritePoems,
    getRecentViewPoems,
    likedCount,
    lovedCount,
    favoriteCount,
    totalInteractionCount,
    getFavoritePoets,
    getDynastyDistribution,
  }
})

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Poem } from '@/typesOfPages/aphorism/poem'

const STORAGE_KEYS = {
  liked: 'aphorism_liked',
  loved: 'aphorism_loved',
  favorites: 'aphorism_favorites',
  recentViews: 'aphorism_recent_views',
} as const

const MAX_RECENT_VIEWS = 20

function loadFromStorage(key: string): Set<string> {
  try {
    const data = localStorage.getItem(key)
    if (data) {
      return new Set<string>(JSON.parse(data))
    }
  } catch {
    // ignore
  }
  return new Set<string>()
}

function loadArrayFromStorage(key: string): string[] {
  try {
    const data = localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
  } catch {
    // ignore
  }
  return []
}

function saveToStorage(key: string, set: Set<string>) {
  localStorage.setItem(key, JSON.stringify([...set]))
}

function saveArrayToStorage(key: string, arr: string[]) {
  localStorage.setItem(key, JSON.stringify(arr))
}

export const useAphorismInteractionStore = defineStore('aphorismInteraction', () => {
  // 使用 Set 存储诗词 id，保证唯一性
  const likedIds = ref<Set<string>>(loadFromStorage(STORAGE_KEYS.liked))
  const lovedIds = ref<Set<string>>(loadFromStorage(STORAGE_KEYS.loved))
  const favoriteIds = ref<Set<string>>(loadFromStorage(STORAGE_KEYS.favorites))

  // 最近浏览：有序数组（最新的在前）
  const recentViewIds = ref<string[]>(loadArrayFromStorage(STORAGE_KEYS.recentViews))

  // ---- 点赞 ----
  const toggleLike = (poemId: string) => {
    if (likedIds.value.has(poemId)) {
      likedIds.value.delete(poemId)
    } else {
      likedIds.value.add(poemId)
    }
    saveToStorage(STORAGE_KEYS.liked, likedIds.value)
  }

  const isLiked = (poemId: string) => likedIds.value.has(poemId)

  // ---- 喜爱 ----
  const toggleLove = (poemId: string) => {
    if (lovedIds.value.has(poemId)) {
      lovedIds.value.delete(poemId)
    } else {
      lovedIds.value.add(poemId)
    }
    saveToStorage(STORAGE_KEYS.loved, lovedIds.value)
  }

  const isLoved = (poemId: string) => lovedIds.value.has(poemId)

  // ---- 收藏 ----
  const toggleFavorite = (poemId: string) => {
    if (favoriteIds.value.has(poemId)) {
      favoriteIds.value.delete(poemId)
    } else {
      favoriteIds.value.add(poemId)
    }
    saveToStorage(STORAGE_KEYS.favorites, favoriteIds.value)
  }

  const isFavorite = (poemId: string) => favoriteIds.value.has(poemId)

  // ---- 最近浏览 ----
  const addRecentView = (poemId: string) => {
    const arr = recentViewIds.value.filter((id) => id !== poemId)
    arr.unshift(poemId)
    recentViewIds.value = arr.slice(0, MAX_RECENT_VIEWS)
    saveArrayToStorage(STORAGE_KEYS.recentViews, recentViewIds.value)
  }

  const clearRecentViews = () => {
    recentViewIds.value = []
    saveArrayToStorage(STORAGE_KEYS.recentViews, [])
  }

  // ---- 获取各类别的诗词列表 ----
  const getLikedPoems = (allPoems: Poem[]) =>
    allPoems.filter((p) => likedIds.value.has(p.id))

  const getLovedPoems = (allPoems: Poem[]) =>
    allPoems.filter((p) => lovedIds.value.has(p.id))

  const getFavoritePoems = (allPoems: Poem[]) =>
    allPoems.filter((p) => favoriteIds.value.has(p.id))

  const getRecentViewPoems = (allPoems: Poem[]): Poem[] => {
    const poemMap = new Map(allPoems.map((p) => [p.id, p]))
    return recentViewIds.value
      .map((id) => poemMap.get(id))
      .filter((p): p is Poem => p !== undefined)
  }

  // ---- 统计 ----
  const likedCount = computed(() => likedIds.value.size)
  const lovedCount = computed(() => lovedIds.value.size)
  const favoriteCount = computed(() => favoriteIds.value.size)

  // 总互动数（喜爱 + 收藏）
  const totalInteractionCount = computed(
    () => lovedIds.value.size + favoriteIds.value.size,
  )

  // 从喜爱/收藏中提取诗人统计
  const getFavoritePoets = (allPoems: Poem[]) => {
    const poemSet = new Set([...lovedIds.value, ...favoriteIds.value])
    const poetMap = new Map<string, { name: string; dynasty: string; count: number }>()

    for (const poem of allPoems) {
      if (poemSet.has(poem.id)) {
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

  // 从喜爱/收藏中提取朝代分布
  const getDynastyDistribution = (allPoems: Poem[]) => {
    const poemSet = new Set([...lovedIds.value, ...favoriteIds.value])
    const dynastyMap = new Map<string, number>()

    for (const poem of allPoems) {
      if (poemSet.has(poem.id)) {
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
    toggleLike,
    isLiked,
    toggleLove,
    isLoved,
    toggleFavorite,
    isFavorite,
    addRecentView,
    clearRecentViews,
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

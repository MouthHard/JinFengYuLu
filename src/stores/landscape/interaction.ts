import { defineStore } from 'pinia'
import { reactive, shallowReactive, computed, ref, watch } from 'vue'
import { useLandscapeDataStore, type GlobalPhotographer } from './data'
import type { InteractionItem } from '@/types/landscape'
import { debounce } from '@/utils/landscape/debounce'

export type { InteractionItem }

export interface ItemCounts {
  likes: number
  views: number
  loves: number
  favorites: number
  shares: number
}

export const useInteractionStore = defineStore('interaction', () => {
  const STORAGE_KEY = 'landscape-interaction'

  const mapFromJSON = <T>(json: string | null): Map<string, T> => {
    if (!json) return new Map()
    try {
      const entries: Array<[string, T]> = JSON.parse(json)
      return new Map(entries)
    } catch {
      return new Map()
    }
  }

  const mapToJSON = <T>(map: Map<string, T>): string => {
    return JSON.stringify(Array.from(map.entries()))
  }

  const savedRaw = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  const saved = savedRaw ? ((): Record<string, string> | null => { try { return JSON.parse(savedRaw) } catch { return null } })() : null

  const favorites = shallowReactive(saved ? mapFromJSON<InteractionItem>(saved.favorites || null) : new Map<string, InteractionItem>())
  const loves = shallowReactive(saved ? mapFromJSON<InteractionItem>(saved.loves || null) : new Map<string, InteractionItem>())
  const likes = shallowReactive(saved ? mapFromJSON<InteractionItem>(saved.likes || null) : new Map<string, InteractionItem>())
  const shares = shallowReactive(saved ? mapFromJSON<number>(saved.shares || null) : new Map<string, number>())
  const following = shallowReactive(saved ? mapFromJSON<InteractionItem>(saved.following || null) : new Map<string, InteractionItem>())
  const counts = reactive(saved ? mapFromJSON<ItemCounts>(saved.counts || null) : new Map<string, ItemCounts>())

  const persistToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        favorites: mapToJSON(favorites),
        loves: mapToJSON(loves),
        likes: mapToJSON(likes),
        shares: mapToJSON(shares),
        following: mapToJSON(following),
        counts: mapToJSON(counts),
      }))
    } catch { }
  }

  const getDataStore = () => useLandscapeDataStore()

  const migrateItemAuthor = (item: InteractionItem, dataStore: ReturnType<typeof useLandscapeDataStore>): InteractionItem => {
    if (item.authorId && item.authorAvatar) return item
    
    if (item.type === 'image') {
      const image = dataStore.getImage(item.id)
      if (image) {
        const photographer = image.authorId ? dataStore.getPhotographer(image.authorId) : null
        return { ...item, authorId: image.authorId, authorAvatar: photographer?.avatar, author: photographer?.name || item.author }
      }
    } else if (item.type === 'video') {
      const video = dataStore.getVideo(item.id)
      if (video) {
        const photographer = video.authorId ? dataStore.getPhotographer(video.authorId) : null
        return { ...item, authorId: video.authorId, authorAvatar: photographer?.avatar || video.authorAvatar, author: photographer?.name || item.author }
      }
    } else if (item.type === 'guide') {
      const guide = dataStore.getGuide(item.id)
      if (guide) {
        const photographer = guide.authorId ? dataStore.getPhotographer(guide.authorId) : null
        return { ...item, authorId: guide.authorId, authorAvatar: photographer?.avatar || guide.authorAvatar, author: photographer?.name || item.author }
      }
    }
    return item
  }

  const migrateStoredData = () => {
    const dataStore = getDataStore()
    let needPersist = false
    
    favorites.forEach((item, id) => {
      const migrated = migrateItemAuthor(item, dataStore)
      if (migrated.authorId !== item.authorId || migrated.authorAvatar !== item.authorAvatar) {
        favorites.set(id, migrated)
        needPersist = true
      }
    })
    
    loves.forEach((item, id) => {
      const migrated = migrateItemAuthor(item, dataStore)
      if (migrated.authorId !== item.authorId || migrated.authorAvatar !== item.authorAvatar) {
        loves.set(id, migrated)
        needPersist = true
      }
    })
    
    if (needPersist) {
      persistToStorage()
    }
  }

  if (typeof window !== 'undefined' && (favorites.size > 0 || loves.size > 0)) {
    setTimeout(migrateStoredData, 100)
  }

  const debouncedPersist = debounce(persistToStorage, 500)

  watch(() => mapToJSON(favorites), debouncedPersist)
  watch(() => mapToJSON(loves), debouncedPersist)
  watch(() => mapToJSON(likes), debouncedPersist)
  watch(() => mapToJSON(shares), debouncedPersist)
  watch(() => mapToJSON(following), debouncedPersist)
  watch(() => mapToJSON(counts), debouncedPersist)
  
  const favoritesVersion = ref(0)
  const lovesVersion = ref(0)
  
  const getItemFromDataStore = (id: string, type: InteractionItem['type']): InteractionItem | null => {
    const dataStore = getDataStore()
    if (type === 'image') {
      const image = dataStore.getImage(id)
      if (image) {
        const photographer = image.authorId ? dataStore.getPhotographer(image.authorId) : null
        return {
          id: image.id,
          type: 'image',
          title: image.title,
          image: image.url,
          location: image.location,
          category: image.category,
          timestamp: Date.now(),
          likes: image.likes,
          views: image.views,
          loves: image.loves,
          favorites: image.favorites,
          shares: image.shares,
          author: photographer?.name || image.author,
          authorId: image.authorId,
          authorAvatar: photographer?.avatar,
          date: image.date,
        }
      }
    } else if (type === 'video') {
      const video = dataStore.getVideo(id)
      if (video) {
        const photographer = video.authorId ? dataStore.getPhotographer(video.authorId) : null
        return {
          id: video.id,
          type: 'video',
          title: video.title,
          image: video.poster,
          location: video.location,
          category: video.category,
          timestamp: Date.now(),
          likes: video.likes,
          views: video.views,
          loves: video.loves,
          favorites: video.bookmarks,
          shares: video.shares,
          author: photographer?.name || video.author,
          authorId: video.authorId,
          authorAvatar: photographer?.avatar || video.authorAvatar,
          duration: (() => {
            const parts = video.duration.split(':')
            if (parts.length === 2) return parseInt(parts[0]) * 60 + parseInt(parts[1])
            if (parts.length === 3) return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2])
            return null
          })(),
        }
      }
    } else if (type === 'guide') {
      const guide = dataStore.getGuide(id)
      if (guide) {
        const photographer = guide.authorId ? dataStore.getPhotographer(guide.authorId) : null
        return {
          id: guide.id,
          type: 'guide',
          title: guide.title,
          image: guide.cover,
          location: guide.location,
          category: guide.category,
          timestamp: Date.now(),
          likes: guide.likes,
          views: guide.views,
          loves: guide.loves,
          favorites: guide.bookmarks || 0,
          shares: guide.shares,
          author: photographer?.name || guide.author,
          authorId: guide.authorId,
          authorAvatar: photographer?.avatar || guide.authorAvatar,
          summary: guide.excerpt,
          rating: guide.rating,
          readTime: guide.readTime,
          difficulty: guide.difficulty,
        }
      }
    }
    return null
  }

  const registerCount = (id: string, initial: Partial<ItemCounts>) => {
    const existing = counts.get(id)
    if (existing) {
      existing.likes = initial.likes ?? existing.likes
      existing.views = initial.views ?? existing.views
      existing.loves = initial.loves ?? existing.loves
      existing.favorites = initial.favorites ?? existing.favorites
      existing.shares = initial.shares ?? existing.shares
    } else {
      counts.set(id, {
        likes: initial.likes ?? 0,
        views: initial.views ?? 0,
        loves: initial.loves ?? 0,
        favorites: initial.favorites ?? 0,
        shares: initial.shares ?? 0,
      })
    }
  }

  const getCount = (id: string): ItemCounts => {
    return counts.get(id) || { likes: 0, views: 0, loves: 0, favorites: 0, shares: 0 }
  }

  const registerBatch = (items: Array<{ id: string; counts: Partial<ItemCounts> }>) => {
    items.forEach(item => registerCount(item.id, item.counts))
  }

  const addToFavorites = (item: InteractionItem) => {
    favorites.set(item.id, item)
  }

  const removeFromFavorites = (id: string) => {
    favorites.delete(id)
  }

  const toggleFavorite = (item: InteractionItem) => {
    if (favorites.has(item.id)) {
      favorites.delete(item.id)
      favoritesVersion.value++
      const c = counts.get(item.id)
      if (c) c.favorites--
      return false
    } else {
      const fullItem = getItemFromDataStore(item.id, item.type) || item
      favorites.set(item.id, fullItem)
      favoritesVersion.value++
      const c = counts.get(item.id)
      if (c) c.favorites++
      return true
    }
  }

  const isFavorited = (id: string) => {
    return favorites.has(id)
  }

  const addToLoves = (item: InteractionItem) => {
    loves.set(item.id, item)
  }

  const removeFromLoves = (id: string) => {
    loves.delete(id)
  }

  const toggleLove = (item: InteractionItem) => {
    if (loves.has(item.id)) {
      loves.delete(item.id)
      lovesVersion.value++
      const c = counts.get(item.id)
      if (c) c.loves--
      return false
    } else {
      const fullItem = getItemFromDataStore(item.id, item.type) || item
      loves.set(item.id, fullItem)
      lovesVersion.value++
      const c = counts.get(item.id)
      if (c) c.loves++
      return true
    }
  }

  const isLoved = (id: string) => {
    return loves.has(id)
  }

  const toggleLike = (itemOrId: InteractionItem | string) => {
    const item = typeof itemOrId === 'string' ? { id: itemOrId } as InteractionItem : itemOrId
    if (likes.has(item.id)) {
      likes.delete(item.id)
      const c = counts.get(item.id)
      if (c) c.likes--
      return false
    } else {
      likes.set(item.id, item)
      const c = counts.get(item.id)
      if (c) c.likes++
      return true
    }
  }

  const isLiked = (id: string) => {
    return likes.has(id)
  }

  const getLikesByType = (type: InteractionItem['type']) => {
    return Array.from(likes.values()).filter(item => item.type === type)
  }

  const incrementShares = (id: string) => {
    const current = shares.get(id) || 0
    shares.set(id, current + 1)
    const c = counts.get(id)
    if (c) c.shares++
    return current + 1
  }

  const incrementLikes = (id: string) => {
    const c = counts.get(id)
    if (c) c.likes++
  }

  const decrementLikes = (id: string) => {
    const c = counts.get(id)
    if (c && c.likes > 0) c.likes--
  }

  const incrementLoves = (id: string) => {
    const c = counts.get(id)
    if (c) c.loves++
  }

  const decrementLoves = (id: string) => {
    const c = counts.get(id)
    if (c && c.loves > 0) c.loves--
  }

  const incrementFavorites = (id: string) => {
    const c = counts.get(id)
    if (c) c.favorites++
  }

  const decrementFavorites = (id: string) => {
    const c = counts.get(id)
    if (c && c.favorites > 0) c.favorites--
  }

  const getShareCount = (id: string) => {
    return shares.get(id) || 0
  }

  const getFavoritesByType = (type: InteractionItem['type']) => {
    void favoritesVersion.value
    return Array.from(favorites.values()).filter(item => item.type === type)
  }

  const getLovesByType = (type: InteractionItem['type']) => {
    void lovesVersion.value
    return Array.from(loves.values()).filter(item => item.type === type)
  }

  const favoritesCount = computed(() => favorites.size)
  const lovesCount = computed(() => loves.size)
  const likesCount = computed(() => likes.size)

  const favoritesByTypeCount = computed(() => {
    const counts = { image: 0, video: 0, photographer: 0, guide: 0 }
    favorites.forEach(item => {
      counts[item.type]++
    })
    return counts
  })

  const lovesByTypeCount = computed(() => {
    const counts = { image: 0, video: 0, photographer: 0, guide: 0 }
    loves.forEach(item => {
      counts[item.type]++
    })
    return counts
  })

  const followingVersion = ref(0)

  const followingCount = computed(() => following.size)

  const toggleFollow = (item: InteractionItem) => {
    if (following.has(item.id)) {
      following.delete(item.id)
      followingVersion.value++
      return false
    } else {
      following.set(item.id, item)
      followingVersion.value++
      return true
    }
  }

  const toggleFollowPhotographer = (photographerId: string): boolean => {
    const dataStore = useLandscapeDataStore()
    const photographer = dataStore.getPhotographer(photographerId)
    
    if (following.has(photographerId)) {
      following.delete(photographerId)
      followingVersion.value++
      return false
    } else {
      if (photographer) {
        const item: InteractionItem = {
          id: photographer.id,
          type: 'photographer',
          title: photographer.name,
          image: photographer.avatar,
          location: photographer.location,
          category: photographer.title,
          timestamp: Date.now(),
          likes: parseFloat(photographer.likes) || 0,
          views: parseFloat(photographer.views) || 0,
          favorites: parseFloat(photographer.bookmarks) || 0,
          summary: photographer.bio,
          authorVerified: photographer.verified,
          rating: photographer.rating,
        }
        following.set(photographerId, item)
        followingVersion.value++
      }
      return true
    }
  }

  const getFollowingPhotographerData = (): GlobalPhotographer[] => {
    void followingVersion.value
    const dataStore = useLandscapeDataStore()
    const result: GlobalPhotographer[] = []
    for (const [id, item] of following) {
      if (item.type === 'photographer') {
        const photographer = dataStore.getPhotographer(id)
        if (photographer) {
          result.push(photographer)
        }
      }
    }
    return result
  }

  const isFollowing = (id: string) => {
    return following.has(id)
  }

  const getFollowingList = () => {
    return Array.from(following.values())
  }

  return {
    favorites,
    loves,
    likes,
    shares,
    following,
    counts,
    registerCount,
    getCount,
    registerBatch,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorited,
    addToLoves,
    removeFromLoves,
    toggleLove,
    isLoved,
    toggleLike,
    isLiked,
    getLikesByType,
    incrementShares,
    incrementLikes,
    decrementLikes,
    incrementLoves,
    decrementLoves,
    incrementFavorites,
    decrementFavorites,
    getShareCount,
    getFavoritesByType,
    getLovesByType,
    favoritesCount,
    lovesCount,
    likesCount,
    favoritesByTypeCount,
    lovesByTypeCount,
    followingCount,
    followingVersion,
    toggleFollow,
    toggleFollowPhotographer,
    getFollowingPhotographerData,
    isFollowing,
    getFollowingList,
  }
})

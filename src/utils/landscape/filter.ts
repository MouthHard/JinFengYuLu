import type { ImageItem, VideoItem, PhotographerItem, GuideItem } from '@/typesOfPages/landscape'

export function filterImages(items: ImageItem[], category: string): ImageItem[] {
  if (!category || category === 'all') return items
  return items.filter(item => item.category === category)
}

export function filterVideos(items: VideoItem[], category: string): VideoItem[] {
  if (!category || category === 'all') return items
  return items.filter(item => item.category === category)
}

export function filterPhotographers(items: PhotographerItem[], options: {
  category?: string
  search?: string
  isFollowing?: boolean
}): PhotographerItem[] {
  let filtered = [...items]
  
  if (options.category && options.category !== 'all') {
    filtered = filtered.filter(item => item.tags.includes(options.category!))
  }
  
  if (options.search) {
    const searchLower = options.search.toLowerCase()
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(searchLower) ||
      item.title.toLowerCase().includes(searchLower) ||
      item.bio?.toLowerCase().includes(searchLower)
    )
  }
  
  if (options.isFollowing !== undefined) {
    filtered = filtered.filter(item => item.isFollowing === options.isFollowing)
  }
  
  return filtered
}

export function filterGuides(items: GuideItem[], options: {
  category?: string
  difficulty?: string
  duration?: string
  season?: string
  search?: string
}): GuideItem[] {
  let filtered = [...items]
  
  if (options.category && options.category !== 'all') {
    filtered = filtered.filter(item => item.category === options.category)
  }
  
  if (options.difficulty) {
    filtered = filtered.filter(item => item.difficulty === options.difficulty)
  }
  
  if (options.duration) {
    filtered = filtered.filter(item => item.duration?.includes(options.duration!))
  }
  
  if (options.season) {
    filtered = filtered.filter(item => item.season?.includes(options.season!))
  }
  
  if (options.search) {
    const searchLower = options.search.toLowerCase()
    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(searchLower) ||
      item.summary.toLowerCase().includes(searchLower) ||
      item.location?.toLowerCase().includes(searchLower)
    )
  }
  
  return filtered
}

export function sortItems<T>(items: T[], sortBy: string, getSortValue: (item: T) => number | string): T[] {
  const sorted = [...items]
  
  switch (sortBy) {
    case 'latest':
      return sorted.sort((a, b) => {
        const valA = getSortValue(a)
        const valB = getSortValue(b)
        return valB > valA ? 1 : -1
      })
    case 'popular':
      return sorted.sort((a, b) => {
        const valA = Number(getSortValue(a))
        const valB = Number(getSortValue(b))
        return valB - valA
      })
    case 'rating':
      return sorted.sort((a, b) => {
        const valA = Number(getSortValue(a))
        const valB = Number(getSortValue(b))
        return valB - valA
      })
    default:
      return sorted
  }
}

export function paginate<T>(items: T[], page: number, pageSize: number): {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
} {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const data = items.slice(start, end)
  
  return {
    data,
    total: items.length,
    page,
    pageSize,
    hasMore: end < items.length
  }
}

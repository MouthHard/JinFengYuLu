import type { SafetyInfo, ShootParam, GearItem } from './profile'

export interface GuideSearchItem {
  id: string
  type: 'guide'
  title: string
  thumbnail?: string
  description?: string
  author?: string
  authorName?: string
  authorAvatar?: string
  category?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'easy' | 'medium' | 'hard'
  rating?: number
  readTime?: string
  views: number
  likes: number
  bookmarks: number
  shares: number
  date?: string
  publishDate?: string
  location?: string
  bestTime?: string
  duration?: string
  tags?: string[]
  highlights?: string[]
  steps?: number
}

export interface GuideDetail {
  id: string
  title: string
  thumbnail?: string
  summary: string
  author?: string
  authorVerified?: boolean
  authorAvatar?: string
  category?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  rating?: number
  ratingCount?: number
  readTime?: string
  views?: number
  saves?: number
  comments?: number
  likes?: number
  shares?: number
  date?: string
  isEditorPick?: boolean
  isCollected?: boolean
  location?: string
  season?: string
  duration?: string
  transport?: string
  budget?: string
  audience?: string
  highlights?: string[]
  accommodation?: string
  language?: string
  warnings?: string[]
  shootTime?: string
  shootParams?: ShootParam[]
  gears?: GearItem[]
  safety?: SafetyInfo[]
  altitude?: string
  temperature?: string
  tips?: string[]
  content?: string
  images?: string[]
  tags?: string[]
}

export interface GuideCategory {
  id: string
  name: string
  icon: string
  count: number
  description?: string
}

export interface GuideFilter {
  category?: string
  difficulty?: string
  duration?: string
  season?: string
  search?: string
  sortBy?: string
  page?: number
  pageSize?: number
}

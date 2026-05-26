import type { ShootParam, GearItem, SafetyInfo } from './profile'

export interface SocialLink {
  platform: string
  url?: string
  iconPath?: string
}

export interface ContactInfo {
  email?: string
  website?: string
  phone?: string
}

export interface Category {
  id: string
  name: string
  icon: string
  count?: number
  description?: string
  children?: Category[]
}

export interface CategoryTag {
  dimension: string
  category: string
  subCategory: string
}

export interface Difficulty {
  type: 'beginner' | 'intermediate' | 'advanced'
}

export interface ImageSearchItem {
  id: string
  type: 'image'
  title: string
  thumbnail?: string
  description?: string
  author?: string
  authorAvatar?: string
  category?: string
  views: number
  likes: number
  loves?: number
  bookmarks: number
  shares: number
  date?: string
  location?: string
  tags?: string[]
  camera?: string
  resolution?: string
  iso?: number
  aperture?: string
  shutterSpeed?: string
}

export interface VideoSearchItem {
  id: string
  type: 'video'
  title: string
  thumbnail?: string
  description?: string
  author?: string
  authorAvatar?: string
  category?: string
  views: number
  likes: number
  bookmarks: number
  shares: number
  date?: string
  location?: string
  tags?: string[]
  duration?: string
  resolution?: string
  fps?: number
}

export interface PhotographerSearchItem {
  id: string
  type: 'photographer'
  name: string
  avatar?: string
  thumbnail?: string
  title?: string
  bio?: string
  description?: string
  location?: string
  specialty?: string
  followers?: number
  worksCount?: number
  rating?: number
  tags?: string[]
  date?: string
  joinDate?: string
  views?: number
  likes?: number
  bookmarks?: number
  shares?: number
  online?: boolean
  verified?: boolean
  pro?: boolean
}

export type SearchItem = ImageSearchItem | VideoSearchItem | import('./guides').GuideSearchItem | PhotographerSearchItem

export interface SearchHistoryItem {
  query: string
  timestamp: number
  count: number
}

export interface SearchFilter {
  type: 'all' | 'image' | 'video'
  category: string
  sortBy: 'relevance' | 'newest' | 'popular'
}

export interface InteractionItem {
  id: string
  type: 'image' | 'video' | 'guide' | 'photographer'
  title: string
  image: string
  location?: string
  category?: string
  timestamp: number
  likes?: number
  views?: number
  loves?: number
  favorites?: number
  shares?: number
  icon?: string
  quality?: string
  duration?: number | null
  summary?: string
  author?: string
  authorId?: string
  authorAvatar?: string
  authorVerified?: boolean
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  rating?: number
  ratingCount?: number
  readTime?: string
  saves?: number
  comments?: number
  date?: string
  isEditorPick?: boolean
  season?: string
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
}



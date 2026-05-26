import type { SocialLink, ContactInfo } from './common'

export interface Photographer {
  id: string
  name: string
  avatar: string
  title: string
  bio?: string
  location?: string
  works: number | string
  followers: string
  views?: string
  likes?: string
  tags: string[]
  verified?: boolean
  isFollowing?: boolean
  recentWorks?: string[]
  socials?: SocialLink[]
  contact?: ContactInfo
  experience?: string
  equipment?: string
  rating?: number
  onlineStatus?: 'online' | 'offline'
  joinDate?: string
  awards?: string[]
  category?: string
  banner?: string
  website?: string
  socialLinks?: {
    instagram?: string
    youtube?: string
    twitter?: string
    weibo?: string
  }
  createdAt?: string
  updatedAt?: string
  isFavorite?: boolean
  isOnline?: boolean
  worksPreview?: string[]
}

export interface Work {
  id: string
  title?: string
  image?: string
  cover?: string
  type?: 'photo' | 'video'
  duration?: string
  author?: string
  thumbnail?: string
  views?: number
  likes?: number
  saves?: number
  category?: string
  tags?: string[]
  location?: string
  date?: string
  description?: string
  camera?: string
  resolution?: string
  fps?: number
}

export interface RankingItem {
  rank: number
  photographer: Photographer
  score: number
  trend: 'up' | 'down' | 'same'
  change: number
}

export interface CategoryFilter {
  id: string
  name: string
  icon: string
  count?: number
}

export interface SortOption {
  value: string
  label: string
}

export interface FilterParams {
  category: string
  search: string
  sortBy: string
  page: number
  pageSize: number
}

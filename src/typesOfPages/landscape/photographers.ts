import type { SocialLink, ContactInfo, Category } from './common'

export type WorkType = 'photo' | 'video' | 'guide' | 'panorama' | 'timelapse' | 'aerial' | 'longexp' | 'startrail' | 'hdr' | 'macro';

export interface WorkPreview {
  id?: string;
  image?: string;
  cover?: string;
  title?: string;
  type?: WorkType | string;
  likes?: number;
  loves?: number;
  favorites?: number;
  views?: number;
  shares?: number;
}

export interface Photographer {
  id: string
  name: string
  avatar: string
  title: string
  bio?: string
  location?: string
  works: number | string
  followers: number | string
  views?: string
  likes?: string
  tags?: string[]
  verified?: boolean
  isFollowing?: boolean
  recentWorks?: string[]
  socials?: SocialLink[]
  contact?: ContactInfo
  experience?: string
  equipment?: string | string[]
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
  isPro?: boolean
  lastActive?: string
  workTypes?: (WorkType | string)[]
  worksPreview?: WorkPreview[] | string[]
  worksCount?: string
  bookmarks?: string
  joinTime?: string
}

export interface Video {
  id: number | string;
  url: string;
  poster: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  views: number;
  likes: number;
  loves: number;
  bookmarks: number;
  shares: number;
  comments: number;
  authorAvatar: string;
  authorName: string;
  authorTitle: string;
}

export interface Image {
  id: number | string;
  image: string;
  title: string;
  location?: string;
  category?: string;
  author?: string;
  authorAvatar?: string;
  views?: number;
  likes?: number;
  loves?: number;
  favorites?: number;
  shares?: number;
}

export interface Work {
  id: string
  title?: string
  image?: string
  cover?: string
  type?: WorkType
  duration?: string
  author?: string
  thumbnail?: string
  views?: number
  likes?: number
  loves?: number
  favorites?: number
  shares?: number
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

export type CategoryFilter = Category

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

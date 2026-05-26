import type { SocialLink, ContactInfo } from './common'
import type { Component } from 'vue'

export interface ImageItem {
  id: string
  title: string
  thumbnail: string
  image?: string
  category: string
  location: string
  author?: string
  authorId?: string
  authorAvatar?: string
  tag2?: string
  tag3?: string
  views?: number
  likes?: number
  loves?: number
  shares?: number
  saves?: number
  favorites?: number
  rating?: number
  camera?: string
  date?: string
  isCollected?: boolean
}

export interface VideoItem {
  id: string
  title: string
  thumbnail: string
  image?: string
  duration: string
  author: string
  authorId?: string
  authorAvatar?: string
  category: string
  location?: string
  tag2?: string
  tag3?: string
  views?: number
  likes?: number
  loves?: number
  saves?: number
  favorites?: number
  shares?: number
  comments?: number
  resolution?: string
  fps?: number
  description?: string
  isCollected?: boolean
}

export interface PhotographerItem {
  id: string
  name: string
  avatar: string
  title: string
  bio?: string
  location?: string
  works: number
  followers: number
  views?: string
  likes?: string
  tags: string[]
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
}

export interface ShootParam {
  label: string
  value: string
}

export interface GearItem {
  name: string
  required?: boolean
}

export interface SafetyInfo {
  type: 'danger' | 'warning' | 'info'
  title: string
  content: string
}

export interface GuideItem {
  id: string
  title: string
  thumbnail?: string
  summary: string
  author?: string
  authorId?: string
  authorAvatar?: string
  authorVerified?: boolean
  category?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  rating?: number
  ratingCount?: number
  readTime?: string
  views?: number
  saves?: number
  comments?: number
  likes?: number
  loves?: number
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
  equipment?: string[]
  gears?: GearItem[]
  safety?: SafetyInfo[]
  altitude?: string
  temperature?: string
  tips?: string[]
  tag2?: string
  tag3?: string
  bestTime?: string
  routeSummary?: string
}

export interface User {
  id?: string
  name: string
  title: string
  bio: string
  location: string
  joinDate: string
  tags: string[]
  verified: boolean
  avatar?: string
  stats?: {
    works: number
    favorites: number
    likes: number
    following: number
  }
}

export interface Stat {
  label: string
  value: string
  trend: number
  icon: () => Component
}

export interface Tab {
  key: string
  name: string
  count: number
  icon: () => Component
}

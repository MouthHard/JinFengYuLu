import type { SocialLink, ContactInfo, CategoryTag } from './common'

export interface GlobalPhotographerWork {
  id?: string
  image?: string
  cover?: string
  title?: string
  type?: string
  likes?: number
  loves?: number
  favorites?: number
  views?: number
  shares?: number
}

export interface GlobalPhotographer {
  id: string
  name: string
  avatar: string
  title: string
  specialty: string
  bio: string
  location: string
  rating: number
  equipment: string[]
  worksCount: string
  works: string
  followers: string
  likes: string
  bookmarks: string
  views: string
  tags: string[]
  verified: boolean
  isPro: boolean
  isOnline: boolean
  banner?: string
  category?: string
  workTypes: string[]
  worksPreview: GlobalPhotographerWork[]
  joinDate?: string
  lastActive?: string
  socials?: SocialLink[]
  contact?: ContactInfo
  experience?: string
  awards?: string[]
}

export interface GlobalImage {
  id: string
  url: string
  thumbnail?: string
  title: string
  category: string
  location: string
  authorId: string
  author?: string
  tags: string[]
  views: number
  likes: number
  loves: number
  favorites: number
  shares: number
  width?: number
  height?: number
  camera?: string
  date?: string
  randomHeight?: number
  categoryTags?: CategoryTag[]
}

export interface GlobalVideo {
  id: string
  url: string
  poster: string
  title: string
  category: string
  location: string
  authorId?: string
  author?: string
  authorAvatar?: string
  authorTitle?: string
  duration: string
  views: number
  likes: number
  loves: number
  bookmarks: number
  shares: number
  comments: number
  resolution?: string
  fps?: number
  tags?: string[]
  date?: string
  categoryTags?: CategoryTag[]
}

export interface GuideSection {
  title: string
  items: string[]
}

export interface GuideEquipment {
  title: string
  icon: string
  items: string[]
}

export interface GuideTip {
  title: string
  content: string
  type?: 'tip' | 'warning' | 'info'
}

export interface GlobalGuide {
  id: string
  title: string
  cover: string
  excerpt: string
  authorId: string
  author: string
  authorAvatar?: string
  authorVerified?: boolean
  category: string
  location: string
  tags: string[]
  views: number
  likes: number
  loves: number
  bookmarks: number
  shares: number
  comments?: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  season?: string
  budget?: string
  rating?: number
  publishDate?: string
  content?: string
  highlights?: string[]
  type?: string
  typeName?: string
  date?: string
  readTime?: string
  travelMode?: string
  sceneryTheme?: string
  locationId?: string
  categoryTags?: CategoryTag[]
  sections?: GuideSection[]
  transport?: string
  audience?: string
  language?: string
  warnings?: string[]
  shootTime?: string
  shootParams?: Array<{ label: string; value: string }>
  gears?: Array<{ name: string; required: boolean }>
  safety?: string[]
  altitude?: string
  temperature?: string
  equipments?: GuideEquipment[]
  tips?: GuideTip[]
  bestTime?: string
  weather?: string
  transportation?: string
  accommodation?: string
  budgetDetail?: string
  safetyNotes?: string[]
  routePoints?: string[]
  recommendedGear?: string[]
  postProcessing?: string[]
}

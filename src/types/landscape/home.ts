export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  location: string
  tag: string
}

export interface Destination {
  id: number | string
  name: string
  country: string
  image?: string
  images?: {
    spring: string
    summer: string
    autumn: string
    winter: string
  }
  rating: number
  score: number
  photos: string
  views: string
  likes: number
  loves: number
  works?: number
  photographers?: number
  trending?: boolean
  navigation?: {
    dimension: string
    category: string
    subCategory: string
  }
}

export interface Topic {
  id: number | string
  title: string
  category: string
  image: string
  description: string
  views: string
  likes: string
  favorites?: string
  comments: string
  date: string
  bestSeason: string
  locations: string[]
  tips: string[]
  navigation?: {
    dimension: string
    category: string
    subCategory: string
  }
  posts?: number
  followers?: number
  trending?: boolean
}

export interface Guide {
  id: string
  title: string
  author: string
  avatar: string
  location: string
  duration: string
  rating: number
  saves: number
  thumbnail: string
  isEditorPick?: boolean
}

export interface RecommendedPhotographer {
  id: string
  name: string
  avatar: string
  title: string
  works: number
  followers: number
  isFollowing: boolean
  featuredWork: string
  tags: string[]
  verified?: boolean
}

export interface HomePhotographerRecommendation {
  id: string
  name: string
  avatar: string
  specialty: string
  location: string
  bio: string
  rating: number
  equipment: string[]
  worksCount: string
  followers: string
  likes: string
  bookmarks: string
  works: Array<{
    id: string
    type: 'photo' | 'video' | 'guide'
    title: string
    cover?: string
    views?: string
    likes?: string
    loves?: string
    bookmarks?: string
    shares?: string
    duration?: string
    excerpt?: string
    size?: 'large' | 'normal' | 'small'
  }>
}

export interface FeaturedSlide {
  id: string
  image: string
  category: string
  icon: string
  title: string
  location: string
  likes: number
  loves: number
  views: number
  favorites: number
  shares: number
  mediaType: 'image' | 'video'
  quality: string
  duration: number | null
}

export interface VideoShowcase {
  id: string
  url: string
  poster: string
  title: string
  location: string
  category: string
  duration: string
  views: number
  likes: number
  loves: number
  bookmarks: number
  shares: number
  comments: number
  authorAvatar: string
  authorName: string
  authorTitle: string
}

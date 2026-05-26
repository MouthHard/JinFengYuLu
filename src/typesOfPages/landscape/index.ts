export * from './common'
export * from './profile'
export * from './home'
export * from './photographers'
export * from './guides'

export * from './data'

export interface LandscapeItem {
  id: number | string
  type: 'image' | 'video' | 'guide'
  title: string
  description: string
  location: string
  thumbnail: string
  fullImage: string
  videoUrl: string
  category: string
  tags: string[]
  categoryTags?: import('./common').CategoryTag[]
  author: string
  authorId?: string
  authorAvatar?: string
  date: string
  camera: string
  likes: number
  loves: number
  views: number
  shares: number
  bookmarks: number
  liked: boolean
  height: number
  duration?: string
}

export interface SearchParams {
  query: string
  category: string
}

export interface UploadFile {
  file: File
  type: 'image' | 'video'
  name: string
  size: number
}

export interface PreviewWork {
  image?: string
  cover?: string
  type?: string
  duration?: string
  title?: string
  author?: string
}

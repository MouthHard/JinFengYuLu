import type { InteractionItem } from '@/types/landscape/common'
import type { GlobalImage, GlobalVideo, GlobalGuide, GlobalPhotographer, GlobalPhotographerWork } from '@/types/landscape/data'
import {
  IMAGE_DEFAULTS,
  VIDEO_DEFAULTS,
  GUIDE_DEFAULTS,
  DATE_DEFAULTS,
  AUTHOR_DEFAULTS,
} from './defaults'

export function convertImageToInteractionItem(
  image: GlobalImage,
  getCounts: (id: string) => { likes: number; views: number; loves: number; favorites: number; shares: number },
  idPrefix = '',
): InteractionItem {
  const itemId = idPrefix ? `${idPrefix}${image.id}` : String(image.id)
  const c = getCounts(itemId)
  return {
    id: itemId,
    type: 'image',
    title: image.title,
    image: image.url,
    location: image.location,
    category: image.category,
    timestamp: Date.now(),
    likes: c.likes,
    views: c.views,
    favorites: c.favorites,
    shares: c.shares,
    author: image.author || AUTHOR_DEFAULTS.name,
    authorId: image.authorId,
  }
}

export function convertVideoToInteractionItem(
  video: GlobalVideo,
  getCounts: (id: string) => { likes: number; views: number; loves: number; favorites: number; shares: number },
  idPrefix = '',
): InteractionItem {
  const itemId = idPrefix ? `${idPrefix}${video.id}` : String(video.id)
  const c = getCounts(itemId)
  return {
    id: itemId,
    type: 'video',
    title: video.title,
    image: video.poster,
    location: video.location,
    category: video.category,
    timestamp: Date.now(),
    likes: c.likes,
    views: c.views,
    favorites: c.favorites,
    shares: c.shares,
    duration: null,
    author: video.author || AUTHOR_DEFAULTS.name,
    authorId: video.authorId,
    authorAvatar: video.authorAvatar,
  }
}

export function convertGuideToInteractionItem(
  guide: GlobalGuide,
  getCounts: (id: string) => { likes: number; views: number; loves: number; favorites: number; shares: number },
  idPrefix = '',
): InteractionItem {
  const itemId = idPrefix ? `${idPrefix}${guide.id}` : String(guide.id)
  const c = getCounts(itemId)
  return {
    id: itemId,
    type: 'guide',
    title: guide.title,
    image: guide.cover,
    location: guide.location,
    category: guide.category,
    timestamp: Date.now(),
    likes: c.likes,
    views: c.views,
    favorites: c.favorites,
    shares: c.shares,
    summary: guide.excerpt || GUIDE_DEFAULTS.summary,
    author: guide.author || AUTHOR_DEFAULTS.name,
    authorId: guide.authorId,
    authorAvatar: guide.authorAvatar,
    authorVerified: guide.authorVerified ?? true,
    difficulty: guide.difficulty || GUIDE_DEFAULTS.difficulty,
    rating: guide.rating || GUIDE_DEFAULTS.rating,
    ratingCount: GUIDE_DEFAULTS.ratingCount,
    readTime: guide.readTime || GUIDE_DEFAULTS.readTime,
    saves: c.favorites,
    comments: GUIDE_DEFAULTS.comments,
    date: guide.date || guide.publishDate || DATE_DEFAULTS.fallback,
    isEditorPick: false,
    season: guide.season || GUIDE_DEFAULTS.season,
    transport: GUIDE_DEFAULTS.transport,
    budget: guide.budget || GUIDE_DEFAULTS.budget,
    audience: GUIDE_DEFAULTS.audience,
    highlights: guide.highlights || GUIDE_DEFAULTS.highlights,
    accommodation: GUIDE_DEFAULTS.accommodation,
    language: GUIDE_DEFAULTS.language,
    warnings: GUIDE_DEFAULTS.warnings,
    shootTime: GUIDE_DEFAULTS.shootTime,
    shootParams: GUIDE_DEFAULTS.shootParams,
    gears: GUIDE_DEFAULTS.gears,
    safety: GUIDE_DEFAULTS.safety,
    altitude: GUIDE_DEFAULTS.altitude,
    temperature: GUIDE_DEFAULTS.temperature,
    tips: GUIDE_DEFAULTS.tips,
  }
}

export function convertWorkToInteractionItem(
  work: GlobalPhotographerWork & { type?: string; excerpt?: string; duration?: string },
  photographer: GlobalPhotographer,
  getCounts: (id: string) => { likes: number; views: number; loves: number; favorites: number; shares: number },
  idPrefix = '',
): InteractionItem {
  const type = work.type === 'photo' ? 'image' : work.type === 'video' ? 'video' : 'guide'
  const itemId = idPrefix ? `${idPrefix}${work.id}` : (work.id || '')
  const c = getCounts(itemId)

  const baseItem: InteractionItem = {
    id: itemId,
    type,
    title: work.title || '',
    image: work.image || '',
    location: photographer.location,
    category: work.type || '',
    timestamp: Date.now(),
    summary: work.excerpt,
    author: photographer.name,
    authorVerified: true,
    views: c.views,
    likes: c.likes,
    loves: c.loves,
    favorites: c.favorites,
    shares: c.shares,
    duration: work.duration ? parseInt(work.duration.split(':')[0]) * 60 + parseInt(work.duration.split(':')[1]) : null,
    rating: photographer.rating,
    date: DATE_DEFAULTS.fallback,
  }

  if (type === 'guide') {
    return {
      ...baseItem,
      difficulty: GUIDE_DEFAULTS.difficulty,
      ratingCount: GUIDE_DEFAULTS.ratingCount,
      readTime: '15',
      saves: baseItem.favorites || 0,
      comments: 100,
      isEditorPick: true,
      season: GUIDE_DEFAULTS.season,
      transport: GUIDE_DEFAULTS.transport,
      budget: GUIDE_DEFAULTS.budget,
      audience: GUIDE_DEFAULTS.audience,
      highlights: GUIDE_DEFAULTS.highlights,
      accommodation: GUIDE_DEFAULTS.accommodation,
      language: GUIDE_DEFAULTS.language,
      warnings: GUIDE_DEFAULTS.warnings,
      shootTime: GUIDE_DEFAULTS.shootTime,
      shootParams: [
        { label: '相机', value: IMAGE_DEFAULTS.camera },
        { label: '镜头', value: IMAGE_DEFAULTS.lens },
        { label: 'ISO', value: String(IMAGE_DEFAULTS.iso) },
      ],
      gears: GUIDE_DEFAULTS.gears,
      safety: GUIDE_DEFAULTS.safety,
      altitude: GUIDE_DEFAULTS.altitude,
      temperature: GUIDE_DEFAULTS.temperature,
      tips: GUIDE_DEFAULTS.tips,
    }
  }

  return {
    ...baseItem,
    icon: type,
    quality: VIDEO_DEFAULTS.resolution,
  }
}

export function convertSlideToInteractionItem(
  slide: { id: string; title: string; image: string; location?: string; category?: string; mediaType?: string; icon?: string; quality?: string; duration?: number | null; author?: string; authorId?: string; authorAvatar?: string },
  getCounts: (id: string) => { likes: number; views: number; loves: number; favorites: number; shares: number },
  idPrefix = '',
): InteractionItem {
  const itemId = idPrefix ? `${idPrefix}${slide.id}` : String(slide.id)
  const c = getCounts(itemId)
  return {
    id: itemId,
    type: slide.mediaType === 'video' ? 'video' : 'image',
    title: slide.title,
    image: slide.image,
    location: slide.location,
    category: slide.category,
    timestamp: Date.now(),
    likes: c.likes,
    views: c.views,
    favorites: c.favorites,
    shares: c.shares,
    icon: slide.icon,
    quality: slide.quality,
    duration: slide.duration,
    author: slide.author,
    authorId: slide.authorId,
    authorAvatar: slide.authorAvatar,
  }
}

export function createSimpleInteractionItem(
  id: string | number,
  type: InteractionItem['type'],
  title: string,
  options: {
    image?: string;
    location?: string;
    author?: string;
    authorId?: string;
    authorAvatar?: string;
    category?: string;
  } = {},
): InteractionItem {
  return {
    id: String(id),
    type,
    title,
    image: options.image || '',
    location: options.location || '',
    category: options.category || '',
    timestamp: Date.now(),
    author: options.author || '',
    authorId: options.authorId,
    authorAvatar: options.authorAvatar,
  }
}

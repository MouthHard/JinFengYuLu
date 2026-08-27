import { useLandscapeDataStore } from '@/stores/landscape'
import type { HomePhotographerRecommendation, FeaturedSlide, VideoShowcase } from '@/types/landscape'
import { parseCount, formatNumber } from '@/utils/landscape/format'



export function useHomeViewData() {
  const dataStore = useLandscapeDataStore()

  const photographerRecommendations = (): HomePhotographerRecommendation[] => {
    const photographers = dataStore.getFeaturedPhotographers().slice(0, 8)
    
    return photographers.map((p) => {
      const works: Array<{
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
      }> = []
      const authorWorks = dataStore.getWorksByAuthor(p.id)
      
      authorWorks.images.forEach((img, idx) => {
        works.push({
          id: img.id,
          type: 'photo' as const,
          title: img.title,
          cover: img.url,
          views: formatNumber(img.views),
          likes: formatNumber(img.likes),
          loves: formatNumber(img.loves),
          bookmarks: formatNumber(img.favorites),
          shares: formatNumber(img.shares),
          size: idx % 3 === 0 ? 'large' : 'normal',
        })
      })
      
      authorWorks.videos.forEach((vid) => {
        works.push({
          id: vid.id,
          type: 'video' as const,
          title: vid.title,
          cover: vid.poster,
          views: formatNumber(vid.views),
          likes: formatNumber(vid.likes),
          loves: formatNumber(vid.loves),
          bookmarks: formatNumber(vid.bookmarks),
          shares: formatNumber(vid.shares),
          duration: vid.duration,
        })
      })
      
      authorWorks.guides.forEach((guide) => {
        works.push({
          id: guide.id,
          type: 'guide' as const,
          title: guide.title,
          cover: guide.cover,
          views: formatNumber(guide.views),
          likes: formatNumber(guide.likes),
          loves: formatNumber(guide.loves),
          bookmarks: formatNumber(guide.bookmarks),
          shares: formatNumber(guide.shares),
          excerpt: guide.excerpt,
        })
      })
      
      if (works.length < 7) {
        const allImages = dataStore.getAllImages()
        const allVideos = dataStore.getAllVideos()
        const allGuides = dataStore.getAllGuides()
        
        const remaining = 7 - works.length
        
        const existingIds = new Set(works.map(w => w.id))
        const remainingImages = allImages.filter(img => !existingIds.has(img.id)).slice(0, remaining)
        remainingImages.forEach((img, idx) => {
          works.push({
            id: img.id,
            type: 'photo' as const,
            title: img.title,
            cover: img.url,
            views: formatNumber(img.views),
            likes: formatNumber(img.likes),
            loves: formatNumber(img.loves),
            bookmarks: formatNumber(img.favorites),
            shares: formatNumber(img.shares),
            size: (works.length + idx) % 3 === 0 ? 'large' : 'normal',
          })
        })
        
        if (works.length < 7) {
          const remainingVideos = allVideos.filter(vid => !existingIds.has(vid.id)).slice(0, 7 - works.length)
          remainingVideos.forEach(vid => {
            works.push({
              id: vid.id,
              type: 'video' as const,
              title: vid.title,
              cover: vid.poster,
              views: formatNumber(vid.views),
              likes: formatNumber(vid.likes),
              loves: formatNumber(vid.loves),
              bookmarks: formatNumber(vid.bookmarks),
              shares: formatNumber(vid.shares),
              duration: vid.duration,
            })
          })
        }
        
        if (works.length < 7) {
          const remainingGuides = allGuides.filter(g => !existingIds.has(g.id)).slice(0, 7 - works.length)
          remainingGuides.forEach(guide => {
            works.push({
              id: guide.id,
              type: 'guide' as const,
              title: guide.title,
              cover: guide.cover,
              views: formatNumber(guide.views),
              likes: formatNumber(guide.likes),
              loves: formatNumber(guide.loves),
              bookmarks: formatNumber(guide.bookmarks),
              shares: formatNumber(guide.shares),
              excerpt: guide.excerpt,
            })
          })
        }
      }
      
      return {
        id: p.id,
        name: p.name,
        avatar: p.avatar,
        specialty: p.specialty,
        location: p.location,
        bio: p.bio,
        rating: p.rating,
        equipment: p.equipment,
        worksCount: p.worksCount,
        followers: p.followers,
        likes: p.likes,
        bookmarks: p.bookmarks,
        works,
      }
    })
  }

  const featuredSlides = (): FeaturedSlide[] => {
    const images = dataStore.getAllImages().slice(0, 5)
    return images.map((img, idx) => ({
      id: img.id,
      image: img.url,
      category: img.category,
      icon: ['🏔', '🌌', '🏖', '🏛', '🌃'][idx % 5],
      title: img.title,
      location: img.location,
      likes: img.likes,
      loves: img.loves,
      views: img.views,
      favorites: img.favorites,
      shares: img.shares,
      mediaType: idx % 2 === 0 ? 'image' : 'video',
      quality: ['4K', 'HDR', '1080P'][idx % 3],
      duration: idx % 2 === 1 ? 60 + (idx * 37) % 300 : null,
    }))
  }

  const videoShowcase = (): VideoShowcase[] => {
    const videos = dataStore.getAllVideos()
    return videos.map(v => {
      const author = dataStore.getPhotographer(v.authorId || '')
      return {
        id: v.id,
        url: v.url,
        poster: v.poster,
        title: v.title,
        location: v.location,
        category: v.category,
        duration: v.duration,
        views: v.views,
        likes: v.likes,
        loves: v.loves,
        bookmarks: v.bookmarks,
        shares: v.shares,
        comments: v.comments,
        authorAvatar: v.authorAvatar || (author?.avatar || ''),
        authorName: v.author || (author?.name || ''),
        authorTitle: author?.title || '',
      }
    })
  }

  return {
    photographerRecommendations,
    featuredSlides,
    videoShowcase,
  }
}

export function usePhotographersViewData() {
  const dataStore = useLandscapeDataStore()

  const featuredPhotographers = () => {
    return dataStore.getFeaturedPhotographers()
  }

  const allPhotographers = () => {
    return dataStore.getAllPhotographers()
  }

  const newPhotographers = () => {
    return dataStore.getNewPhotographers()
  }

  const rankingPhotographers = (sortBy: 'works' | 'followers' | 'likes' | 'views') => {
    const photographers = [...dataStore.getAllPhotographers()]
    return photographers.sort((a, b) => {
      switch (sortBy) {
        case 'works':
          return parseCount(b.worksCount) - parseCount(a.worksCount)
        case 'followers':
          return parseCount(b.followers) - parseCount(a.followers)
        case 'likes':
          return parseCount(b.likes) - parseCount(a.likes)
        case 'views':
          return parseCount(b.views) - parseCount(a.views)
        default:
          return 0
      }
    })
  }

  return {
    featuredPhotographers,
    allPhotographers,
    newPhotographers,
    rankingPhotographers,
  }
}

export function useProfileViewData() {
  const dataStore = useLandscapeDataStore()

  const myImages = () => {
    return dataStore.getAllImages()
  }

  const myVideos = () => {
    return dataStore.getAllVideos()
  }

  const myGuides = () => {
    return dataStore.getAllGuides()
  }

  const myPhotographers = () => {
    return dataStore.getFeaturedPhotographers()
  }

  return {
    myImages,
    myVideos,
    myGuides,
    myPhotographers,
  }
}

export function useSearchViewData() {
  const dataStore = useLandscapeDataStore()

  const searchImages = (query: string) => {
    const images = dataStore.getAllImages()
    if (!query) return images
    const q = query.toLowerCase()
    return images.filter(img =>
      img.title.toLowerCase().includes(q) ||
      img.location.toLowerCase().includes(q) ||
      img.category.toLowerCase().includes(q) ||
      (img.author || '').toLowerCase().includes(q) ||
      (img.camera || '').toLowerCase().includes(q) ||
      (img.date || '').toLowerCase().includes(q) ||
      img.tags.some(t => t.toLowerCase().includes(q)) ||
      (img.categoryTags || []).some(ct => (ct.subCategory || ct.category || '').toLowerCase().includes(q))
    )
  }

  const searchVideos = (query: string) => {
    const videos = dataStore.getAllVideos()
    if (!query) return videos
    const q = query.toLowerCase()
    return videos.filter(v =>
      v.title.toLowerCase().includes(q) ||
      v.location.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      (v.author || '').toLowerCase().includes(q) ||
      (v.authorTitle || '').toLowerCase().includes(q) ||
      (v.resolution || '').toLowerCase().includes(q) ||
      (v.date || '').toLowerCase().includes(q) ||
      (v.tags || []).some(t => t.toLowerCase().includes(q)) ||
      (v.categoryTags || []).some(ct => (ct.subCategory || ct.category || '').toLowerCase().includes(q))
    )
  }

  const searchGuides = (query: string) => {
    const guides = dataStore.getAllGuides()
    if (!query) return guides
    const q = query.toLowerCase()
    return guides.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.excerpt.toLowerCase().includes(q) ||
      g.location.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q) ||
      (g.author || '').toLowerCase().includes(q) ||
      g.difficulty.toLowerCase().includes(q) ||
      (g.season || '').toLowerCase().includes(q) ||
      (g.bestTime || '').toLowerCase().includes(q) ||
      (g.travelMode || '').toLowerCase().includes(q) ||
      (g.sceneryTheme || '').toLowerCase().includes(q) ||
      (g.content || '').toLowerCase().includes(q) ||
      (g.transport || '').toLowerCase().includes(q) ||
      (g.audience || '').toLowerCase().includes(q) ||
      g.tags.some(t => t.toLowerCase().includes(q)) ||
      (g.highlights || []).some(h => h.toLowerCase().includes(q))
    )
  }

  const searchPhotographers = (query: string) => {
    const photographers = dataStore.getAllPhotographers()
    if (!query) return photographers
    const q = query.toLowerCase()
    return photographers.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.specialty.toLowerCase().includes(q) ||
      p.bio.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q) ||
      (p.experience || '').toLowerCase().includes(q) ||
      (p.awards || []).some(a => a.toLowerCase().includes(q)) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }

  return {
    searchImages,
    searchVideos,
    searchGuides,
    searchPhotographers,
  }
}
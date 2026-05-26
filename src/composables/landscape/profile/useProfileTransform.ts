import type { DisplayCounts, BaseItemData } from './types';
import { useLandscapeDataStore } from '@/stores/landscape/data';
import {
  IMAGE_DEFAULTS,
  VIDEO_DEFAULTS,
  GUIDE_DEFAULTS,
  DATE_DEFAULTS,
  AUTHOR_DEFAULTS,
} from '@/utils/landscape/defaults';

export function useProfileTransform() {
  const dataStore = useLandscapeDataStore();

  const resolveAuthor = (item: any): { author: string; authorId: string; authorAvatar: string } => {
    if (item.authorId) {
      const photographer = dataStore.getPhotographer(item.authorId);
      if (photographer) {
        return {
          author: photographer.name,
          authorId: item.authorId,
          authorAvatar: photographer.avatar,
        };
      }
    }
    
    if (item.type === 'image' || !item.type) {
      const image = dataStore.getImage(item.id);
      if (image) {
        const photographer = image.authorId ? dataStore.getPhotographer(image.authorId) : null;
        return {
          author: photographer?.name || image.author || AUTHOR_DEFAULTS.name,
          authorId: image.authorId || AUTHOR_DEFAULTS.id,
          authorAvatar: photographer?.avatar || AUTHOR_DEFAULTS.avatar,
        };
      }
    } else if (item.type === 'video') {
      const video = dataStore.getVideo(item.id);
      if (video) {
        const photographer = video.authorId ? dataStore.getPhotographer(video.authorId) : null;
        return {
          author: photographer?.name || video.author || AUTHOR_DEFAULTS.name,
          authorId: video.authorId || AUTHOR_DEFAULTS.id,
          authorAvatar: photographer?.avatar || video.authorAvatar || AUTHOR_DEFAULTS.avatar,
        };
      }
    } else if (item.type === 'guide') {
      const guide = dataStore.getGuide(item.id);
      if (guide) {
        const photographer = guide.authorId ? dataStore.getPhotographer(guide.authorId) : null;
        return {
          author: photographer?.name || guide.author || AUTHOR_DEFAULTS.name,
          authorId: guide.authorId || AUTHOR_DEFAULTS.id,
          authorAvatar: photographer?.avatar || guide.authorAvatar || AUTHOR_DEFAULTS.avatar,
        };
      }
    }
    
    return {
      author: item.author || AUTHOR_DEFAULTS.name,
      authorId: item.authorId || AUTHOR_DEFAULTS.id,
      authorAvatar: item.authorAvatar || AUTHOR_DEFAULTS.avatar,
    };
  };

  const transformPhotographerData = (photographer: any) => {
    return {
      id: photographer.id,
      name: photographer.name,
      avatar: photographer.avatar,
      title: photographer.title,
      bio: photographer.bio,
      location: photographer.location,
      works: parseInt(photographer.worksCount) || 0,
      followers: photographer.followers,
      views: photographer.views,
      likes: photographer.likes,
      tags: photographer.tags,
      verified: photographer.verified,
      isFollowing: true,
      recentWorks: photographer.worksPreview.slice(0, 3),
      rating: photographer.rating,
      equipment: photographer.equipment.join(' / '),
      experience: photographer.experience || '',
      joinDate: photographer.joinDate || '',
      awards: photographer.awards || [],
      onlineStatus: photographer.isOnline ? 'online' : 'offline',
      socials: photographer.socials?.map((s: any) => ({
        platform: s.platform,
        iconPath: '',
        url: s.url || '#',
      })) || [],
      contact: photographer.contact || {},
    };
  };

  const createBaseData = (item: any, displayCounts: DisplayCounts): BaseItemData => {
    const imageUrl = item.image || item.url || item.thumbnail || item.cover || ''
    return {
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail || item.image || item.url || item.cover || '',
      image: imageUrl,
      location: item.location || '未知地点',
      category: item.category,
      likes: displayCounts.likes,
      loves: displayCounts.loves,
      views: displayCounts.views,
      favorites: displayCounts.favorites,
      shares: displayCounts.shares,
      icon: item.icon,
      quality: item.quality,
      duration: item.duration,
    };
  };

  const transformGuideData = (item: any, baseData: BaseItemData) => {
    const authorInfo = resolveAuthor(item);
    return {
      ...baseData,
      ...authorInfo,
      summary: item.summary || item.excerpt || GUIDE_DEFAULTS.summary,
      authorVerified: item.authorVerified || AUTHOR_DEFAULTS.verified,
      difficulty: item.difficulty || GUIDE_DEFAULTS.difficulty,
      rating: item.rating || GUIDE_DEFAULTS.rating,
      ratingCount: item.ratingCount || GUIDE_DEFAULTS.ratingCount,
      readTime: item.readTime || GUIDE_DEFAULTS.readTime,
      saves: item.saves || GUIDE_DEFAULTS.saves,
      comments: item.comments || GUIDE_DEFAULTS.comments,
      date: item.date || item.publishDate || DATE_DEFAULTS.fallback,
      isEditorPick: item.isEditorPick || false,
      season: item.season || GUIDE_DEFAULTS.season,
      transport: item.transport || GUIDE_DEFAULTS.transport,
      budget: item.budget || GUIDE_DEFAULTS.budget,
      audience: item.audience || GUIDE_DEFAULTS.audience,
      highlights: item.highlights || GUIDE_DEFAULTS.highlights,
      accommodation: item.accommodation || GUIDE_DEFAULTS.accommodation,
      language: item.language || GUIDE_DEFAULTS.language,
      warnings: item.warnings || GUIDE_DEFAULTS.warnings,
      shootTime: item.shootTime || GUIDE_DEFAULTS.shootTime,
      shootParams: item.shootParams || GUIDE_DEFAULTS.shootParams,
      gears: item.gears || GUIDE_DEFAULTS.gears,
      safety: item.safety || GUIDE_DEFAULTS.safety,
      altitude: item.altitude || GUIDE_DEFAULTS.altitude,
      temperature: item.temperature || GUIDE_DEFAULTS.temperature,
      tips: item.tips || GUIDE_DEFAULTS.tips,
    };
  };

  const transformImageData = (item: any, baseData: BaseItemData) => {
    const authorInfo = resolveAuthor(item);
    return {
      ...baseData,
      ...authorInfo,
      camera: item.camera || IMAGE_DEFAULTS.camera,
      lens: IMAGE_DEFAULTS.lens,
      iso: IMAGE_DEFAULTS.iso,
      aperture: IMAGE_DEFAULTS.aperture,
      shutterSpeed: IMAGE_DEFAULTS.shutterSpeed,
      focalLength: IMAGE_DEFAULTS.focalLength,
      date: item.date || DATE_DEFAULTS.fallback,
      tags: [...IMAGE_DEFAULTS.tags],
      tag2: IMAGE_DEFAULTS.tag2,
      tag3: IMAGE_DEFAULTS.tag3,
    };
  };

  const transformVideoData = (item: any, baseData: BaseItemData) => {
    const authorInfo = resolveAuthor(item);
    return {
      ...baseData,
      ...authorInfo,
      duration: item.duration || VIDEO_DEFAULTS.duration,
      resolution: item.resolution || VIDEO_DEFAULTS.resolution,
      fps: item.fps || VIDEO_DEFAULTS.fps,
      codec: VIDEO_DEFAULTS.codec,
      date: item.date || DATE_DEFAULTS.fallback,
      description: item.summary || item.description || '精彩视频内容',
      tags: [...VIDEO_DEFAULTS.tags],
      tag2: VIDEO_DEFAULTS.tag2,
      tag3: VIDEO_DEFAULTS.tag3,
    };
  };

  return {
    transformPhotographerData,
    createBaseData,
    transformGuideData,
    transformImageData,
    transformVideoData,
  };
}

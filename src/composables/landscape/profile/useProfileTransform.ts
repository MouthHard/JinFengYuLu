import type { DisplayCounts, BaseItemData } from './types';
import { useLandscapeDataStore } from '@/stores/landscape/data';
import { useInteractionStore } from '@/stores/landscape';
import {
  IMAGE_DEFAULTS,
  VIDEO_DEFAULTS,
  GUIDE_DEFAULTS,
  DATE_DEFAULTS,
  AUTHOR_DEFAULTS,
} from '@/utils/landscape/defaults';

export function useProfileTransform() {
  const dataStore = useLandscapeDataStore();
  const interactionStore = useInteractionStore();

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
      works: photographer.works,
      worksCount: parseInt(photographer.worksCount) || 0,
      followers: photographer.followers,
      views: photographer.views,
      likes: photographer.likes,
      tags: photographer.tags,
      verified: photographer.verified,
      isFollowing: interactionStore.isFollowing(photographer.id),
      recentWorks: [...(photographer.worksPreview || [])]
        .sort((a: any, b: any) => {
          const la = typeof a === 'string' ? 0 : (a.likes || 0);
          const lb = typeof b === 'string' ? 0 : (b.likes || 0);
          return lb - la;
        })
        .slice(0, 3)
        .map((w: any) => (typeof w === 'string' ? w : (w.image || w.cover || ''))),
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
    // 从 dataStore 拉取完整攻略数据，确保内容与攻略页面一致
    const fullGuide = dataStore.getGuide(item.id) as any;
    const g = fullGuide || item;

    // safety: GlobalGuide 是 string[]，GuideItem 是 SafetyInfo[]
    const rawSafety = g.safety;
    const safety = rawSafety
      ? (fullGuide
        ? rawSafety.map((s: string) => ({ type: 'info' as const, title: '注意事项', content: s }))
        : rawSafety)
      : GUIDE_DEFAULTS.safety;

    // tips: GlobalGuide 是 GuideTip[]，GuideItem 是 string[]
    const rawTips = g.tips;
    const tips = rawTips
      ? (fullGuide
        ? rawTips.map((t: any) => (typeof t === 'string' ? t : t.title + (t.content ? `：${t.content}` : '')))
        : rawTips)
      : GUIDE_DEFAULTS.tips;

    return {
      ...baseData,
      ...authorInfo,
      summary: g.summary || g.excerpt || GUIDE_DEFAULTS.summary,
      authorVerified: g.authorVerified || AUTHOR_DEFAULTS.verified,
      difficulty: g.difficulty || GUIDE_DEFAULTS.difficulty,
      rating: g.rating || GUIDE_DEFAULTS.rating,
      ratingCount: g.ratingCount || GUIDE_DEFAULTS.ratingCount,
      readTime: g.readTime || GUIDE_DEFAULTS.readTime,
      saves: g.saves || g.bookmarks || GUIDE_DEFAULTS.saves,
      comments: g.comments || GUIDE_DEFAULTS.comments,
      date: g.date || g.publishDate || DATE_DEFAULTS.fallback,
      isEditorPick: g.isEditorPick || false,
      season: g.season || GUIDE_DEFAULTS.season,
      transport: g.transport || GUIDE_DEFAULTS.transport,
      budget: g.budget || GUIDE_DEFAULTS.budget,
      audience: g.audience || GUIDE_DEFAULTS.audience,
      highlights: g.highlights || GUIDE_DEFAULTS.highlights,
      accommodation: g.accommodation || GUIDE_DEFAULTS.accommodation,
      language: g.language || GUIDE_DEFAULTS.language,
      warnings: g.warnings || GUIDE_DEFAULTS.warnings,
      shootTime: g.shootTime || GUIDE_DEFAULTS.shootTime,
      shootParams: g.shootParams || GUIDE_DEFAULTS.shootParams,
      gears: g.gears || GUIDE_DEFAULTS.gears,
      safety,
      altitude: g.altitude || GUIDE_DEFAULTS.altitude,
      temperature: g.temperature || GUIDE_DEFAULTS.temperature,
      tips,
      // 动态模块字段：完整搬用 Guides 攻略内容，有值才传，不兜底默认值
      sections: g.sections,
      equipments: g.equipments,
      guideTips: fullGuide ? g.tips : undefined,
      routePoints: g.routePoints,
      recommendedGear: g.recommendedGear,
      postProcessing: g.postProcessing,
      safetyNotes: g.safetyNotes,
      bestTime: g.bestTime,
      weather: g.weather,
      transportation: g.transportation,
      budgetDetail: g.budgetDetail,
      content: g.content,
      tags: g.tags,
      travelMode: g.travelMode,
      sceneryTheme: g.sceneryTheme,
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

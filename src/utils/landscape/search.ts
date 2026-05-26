import type { GlobalImage, GlobalVideo, GlobalGuide, GlobalPhotographer } from '@/typesOfPages/landscape/data';
import { parseCount } from './format';

const categoryTagLabels: Record<string, string> = {
  aurora: '极光', starry: '星空', mountain: '山峰', valley: '峡谷', skyline: '天际线',
  street: '街景', spring: '春季', forest: '森林', beach: '海滩', nightview: '夜景',
  architecture: '建筑', water: '水域',
  timelapse: '延时', aerial: '航拍', panorama: '全景', 'low-angle': '低角度',
  'long-exposure': '长曝光', 'rule-of-thirds': '三分法', 'leading-lines': '引导线',
  framing: '框架构图',
  dramatic: '戏剧感', powerful: '震撼', peaceful: '宁静', romantic: '浪漫',
  'cool-tone': '冷色调', 'warm-tone': '暖色调', vintage: '复古', vibrant: '鲜艳',
  shadow: '光影', ice: '冰雪', rocks: '岩石', flowers: '花卉', reflection: '倒影',
  'architectural-detail': '建筑细节', 'single-tree': '孤树', silhouette: '剪影',
  people: '人物', fog: '雾', mist: '薄雾',
  '4k': '4K', '8k': '8K', hdr: 'HDR', slowmo: '慢动作', hyperlapse: '超延时',
};

export type SearchResultItem = {
  id: string | number;
  type: 'image' | 'video' | 'guide' | 'photographer';
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
  date: string;
  bookmarks: number;
  shares: number;
  views: number;
  likes: number;
  loves: number;
  highlights?: string[];
  authorAvatar?: string;
  authorName?: string;
  author?: string;
  difficulty?: string;
  duration?: string;
  location?: string;
  joinDate?: string;
  followers?: number;
  worksCount?: number;
  publishDate?: string;
  bestTime?: string;
  camera?: string;
  verified?: boolean;
  online?: boolean;
  resolution?: string;
  name?: string;
  fps?: number;
};

export function convertImageToSearchResult(image: GlobalImage): SearchResultItem {
  return {
    ...image,
    type: 'image' as const,
    thumbnail: image.url,
    description: image.title,
    tags: image.tags || [],
    date: image.date || '',
    bookmarks: typeof image.favorites === 'string' ? parseCount(image.favorites) : (image.favorites || 0),
    shares: typeof image.shares === 'string' ? parseCount(image.shares) : (image.shares || 0),
    views: typeof image.views === 'string' ? parseCount(image.views) : (image.views || 0),
    likes: typeof image.likes === 'string' ? parseCount(image.likes) : (image.likes || 0),
    loves: typeof image.loves === 'string' ? parseCount(image.loves) : (image.loves || 0),
  };
}

export function convertVideoToSearchResult(video: GlobalVideo): SearchResultItem {
  const displayTags = (video.categoryTags || [])
    .filter((t: { dimension: string }) => ['theme', 'element', 'technique', 'style'].includes(t.dimension))
    .map((t: { subCategory: string }) => categoryTagLabels[t.subCategory] || t.subCategory);
  const resolutionTag = video.resolution ? [video.resolution.toUpperCase()] : [];
  const finalTags = [...displayTags, ...resolutionTag].slice(0, 3);

  return {
    ...video,
    type: 'video' as const,
    thumbnail: video.poster,
    description: video.title,
    tags: finalTags,
    date: video.date || '',
    bookmarks: typeof video.bookmarks === 'string' ? parseCount(video.bookmarks) : (video.bookmarks || 0),
    shares: typeof video.shares === 'string' ? parseCount(video.shares) : (video.shares || 0),
    views: typeof video.views === 'string' ? parseCount(video.views) : (video.views || 0),
    likes: typeof video.likes === 'string' ? parseCount(video.likes) : (video.likes || 0),
    loves: typeof video.loves === 'string' ? parseCount(video.loves) : (video.loves || 0),
    resolution: video.resolution || '',
    fps: video.fps || 0,
    duration: video.duration || '',
  };
}

export function convertGuideToSearchResult(guide: GlobalGuide): SearchResultItem {
  return {
    ...guide,
    type: 'guide' as const,
    thumbnail: guide.cover,
    description: guide.excerpt || '',
    tags: guide.tags || [],
    date: guide.publishDate || '',
    bookmarks: typeof guide.bookmarks === 'string' ? parseCount(guide.bookmarks) : (guide.bookmarks || 0),
    shares: typeof guide.shares === 'string' ? parseCount(guide.shares) : (guide.shares || 0),
    views: typeof guide.views === 'string' ? parseCount(guide.views) : (guide.views || 0),
    likes: typeof guide.likes === 'string' ? parseCount(guide.likes) : (guide.likes || 0),
    loves: typeof guide.loves === 'string' ? parseCount(guide.loves) : (guide.loves || 0),
    authorName: guide.author || '',
    authorAvatar: guide.authorAvatar || '',
    difficulty: guide.difficulty || '',
    location: guide.location || '',
    bestTime: guide.bestTime || '',
    duration: guide.duration || '',
    highlights: guide.highlights || [],
  };
}

export function convertPhotographerToSearchResult(photographer: GlobalPhotographer): SearchResultItem {
  return {
    ...photographer,
    type: 'photographer' as const,
    thumbnail: photographer.avatar,
    description: photographer.bio || '',
    tags: photographer.tags || [],
    date: photographer.joinDate || '',
    bookmarks: typeof photographer.bookmarks === 'string' ? parseCount(photographer.bookmarks) : (photographer.bookmarks || 0),
    shares: 0,
    views: typeof photographer.views === 'string' ? parseCount(photographer.views) : (photographer.views || 0),
    likes: typeof photographer.likes === 'string' ? parseCount(photographer.likes) : (photographer.likes || 0),
    loves: 0,
    followers: typeof photographer.followers === 'string' ? parseCount(photographer.followers) : (photographer.followers || 0),
    worksCount: typeof photographer.worksCount === 'string' ? parseCount(photographer.worksCount) : (photographer.worksCount || 0),
    verified: photographer.verified || false,
    online: photographer.isOnline || false,
    joinDate: photographer.joinDate || '',
    location: photographer.location || '',
  };
}

export function sanitizeKeyword(keyword: string): string {
  let sanitized = keyword
    .replace(/[\s\t\n\r]+/g, ' ')
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s\-_.,，。！!？?、]/g, '')
    .trim()
    .substring(0, 50);

  return sanitized;
}

export function sortSearchResults(
  results: SearchResultItem[],
  sortBy: string
): SearchResultItem[] {
  const getViews = (item: SearchResultItem) => Number(item.views || 0);
  const getLikes = (item: SearchResultItem) => Number(item.likes || 0);
  const getBookmarks = (item: SearchResultItem) => Number(item.bookmarks || 0);
  const getShares = (item: SearchResultItem) => Number(item.shares || 0);
  const getFollowers = (item: SearchResultItem) => Number(item.followers || 0);

  return [...results].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      case 'views':
        return getViews(b) - getViews(a);
      case 'likes':
        return getLikes(b) - getLikes(a);
      case 'bookmarks':
        return getBookmarks(b) - getBookmarks(a);
      case 'shares':
        return getShares(b) - getShares(a);
      case 'followers':
        return getFollowers(b) - getFollowers(a);
      case 'relevance':
      default:
        return (getLikes(b) * 0.5 + getViews(b) * 0.3 + getBookmarks(b) * 0.2) -
               (getLikes(a) * 0.5 + getViews(a) * 0.3 + getBookmarks(a) * 0.2);
    }
  });
}

export function filterSearchResults(
  results: SearchResultItem[],
  keyword: string,
  type: string
): SearchResultItem[] {
  let filtered = [...results];

  if (type !== 'all') {
    filtered = filtered.filter(item => item.type === type);
  }

  if (keyword) {
    const lowerQuery = keyword.toLowerCase();
    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      (item as any).name?.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery)) ||
      (item as any).location?.toLowerCase().includes(lowerQuery)
    );
  }

  return filtered;
}
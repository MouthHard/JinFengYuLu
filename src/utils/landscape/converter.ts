import type { GlobalImage, GlobalVideo } from '@/typesOfPages/landscape/data';
import type { LandscapeItem } from '@/typesOfPages/landscape';

export function convertToLandscapeItem(item: GlobalImage | GlobalVideo): LandscapeItem {
  const base: LandscapeItem = {
    id: item.id,
    type: 'image',
    title: item.title,
    description: (item as GlobalImage).title || '',
    location: item.location,
    thumbnail: (item as GlobalImage).url || (item as GlobalVideo).poster || '',
    fullImage: (item as GlobalImage).url || (item as GlobalVideo).poster || '',
    videoUrl: (item as GlobalVideo).url || '',
    category: item.category,
    tags: (item as GlobalImage).tags || (item as GlobalVideo).tags || [],
    categoryTags: (item as GlobalImage).categoryTags || (item as GlobalVideo).categoryTags || [],
    author: (item as GlobalImage).author || (item as GlobalVideo).author || '',
    date: (item as GlobalImage).date || (item as GlobalVideo).date || '',
    camera: (item as GlobalImage).camera || '',
    likes: item.likes,
    loves: item.loves,
    views: item.views,
    shares: item.shares,
    bookmarks: (item as GlobalImage).favorites || (item as GlobalVideo).bookmarks || 0,
    liked: false,
    height: 300 + Math.floor(Math.random() * 100),
  };

  if ('duration' in item) {
    base.type = 'video';
    base.duration = (item as GlobalVideo).duration;
  }

  return base;
}
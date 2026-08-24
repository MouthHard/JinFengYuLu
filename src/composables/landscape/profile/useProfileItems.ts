import { computed, type Ref } from 'vue';
import { useInteractionStore } from '@/stores/landscape';
import type { ProfileItem, DisplayCounts } from './types';
import { useProfileTransform } from './useProfileTransform';

export function useProfileItems(
  activeTab: Ref<string>,
  selectedCategory: Ref<string>,
  images: Ref<any[]>,
  videos: Ref<any[]>,
  photographers: Ref<any[]>,
  guides: Ref<any[]>
) {
  const interactionStore = useInteractionStore();
  const {
    transformPhotographerData,
    createBaseData,
    transformGuideData,
    transformImageData,
    transformVideoData,
  } = useProfileTransform();

  const getDisplayCount = (item: any): DisplayCounts => {
    const c = interactionStore.getCount(item.id);
    return {
      likes: c.likes,
      loves: c.loves,
      favorites: c.favorites,
      shares: c.shares,
      views: c.views,
    };
  };

  const processItemByType = (
    item: any,
    prefix: string,
    gi: { value: number }
  ): ProfileItem[] => {
    const items: ProfileItem[] = [];
    const displayCounts = getDisplayCount(item);
    const baseData = createBaseData(item, displayCounts);
    
    const itemWithType = { ...item, type: item.type };

    if (item.type === 'guide') {
      items.push({
        type: 'guide',
        data: transformGuideData(itemWithType, baseData),
        id: `${prefix}-${item.id}`,
        globalIndex: gi.value++,
      });
    } else if (item.type === 'image') {
      items.push({
        type: 'image',
        data: transformImageData(itemWithType, baseData),
        id: `${prefix}-${item.id}`,
        globalIndex: gi.value++,
      });
    } else if (item.type === 'video') {
      items.push({
        type: 'video',
        data: transformVideoData(itemWithType, baseData),
        id: `${prefix}-${item.id}`,
        globalIndex: gi.value++,
      });
    } else {
      items.push({
        type: item.type,
        data: baseData,
        id: `${prefix}-${item.id}`,
        globalIndex: gi.value++,
      });
    }

    return items;
  };

  const processFollowingItems = (): ProfileItem[] => {
    const items: ProfileItem[] = [];
    let gi = 0;
    const followingPhotographers = interactionStore.getFollowingPhotographerData();

    for (const photographer of followingPhotographers) {
      items.push({
        type: 'photographer',
        data: transformPhotographerData(photographer),
        id: `follow-${photographer.id}`,
        globalIndex: gi++,
      });
    }

    return items;
  };

  const processFavoritesOrLikes = (type: 'favorites' | 'likes'): ProfileItem[] => {
    const items: ProfileItem[] = [];
    const gi = { value: 0 };
    const prefix = type === 'favorites' ? 'fav' : 'love';

    const itemsData = type === 'favorites'
      ? interactionStore.getFavoritesByType(selectedCategory.value as any)
      : interactionStore.getLovesByType(selectedCategory.value as any);

    for (const item of itemsData) {
      items.push(...processItemByType(item, prefix, gi));
    }

    return items;
  };

  const processUploadsItems = (): ProfileItem[] => {
    const items: ProfileItem[] = [];
    const gi = { value: 0 };

    const filteredImages = selectedCategory.value !== 'image' ? [] : images.value;
    const filteredVideos = selectedCategory.value !== 'video' ? [] : videos.value;
    const filteredPhotographers = selectedCategory.value !== 'photographer' ? [] : photographers.value;
    const filteredGuides = selectedCategory.value !== 'guide' ? [] : guides.value;

    for (const item of filteredImages) {
      const displayCounts = getDisplayCount(item);
      const baseData = createBaseData(item, displayCounts);
      const itemWithType = { ...item, type: 'image' };
      items.push({ type: 'image', data: transformImageData(itemWithType, baseData), id: `img-${item.id}`, globalIndex: gi.value++ });
    }
    for (const item of filteredVideos) {
      const displayCounts = getDisplayCount(item);
      const baseData = createBaseData(item, displayCounts);
      const itemWithType = { ...item, type: 'video' };
      items.push({ type: 'video', data: transformVideoData(itemWithType, baseData), id: `vid-${item.id}`, globalIndex: gi.value++ });
    }
    for (const item of filteredPhotographers) {
      items.push({ type: 'photographer', data: transformPhotographerData(item), id: `pho-${item.id}`, globalIndex: gi.value++ });
    }
    for (const item of filteredGuides) {
      const displayCounts = getDisplayCount(item);
      const baseData = createBaseData(item, displayCounts);
      const itemWithType = { ...item, type: 'guide' };
      items.push({ type: 'guide', data: transformGuideData(itemWithType, baseData), id: `gui-${item.id}`, globalIndex: gi.value++ });
    }

    return items;
  };

  const allItems = computed((): ProfileItem[] => {
    if (activeTab.value === 'following') {
      return processFollowingItems();
    }

    if (activeTab.value === 'favorites') {
      return processFavoritesOrLikes('favorites');
    }

    if (activeTab.value === 'likes') {
      return processFavoritesOrLikes('likes');
    }

    return processUploadsItems();
  });

  const getColumnItems = (colIndex: number, totalCols: number) => {
    return allItems.value.filter((_, i) => i % totalCols === colIndex);
  };

  return {
    allItems,
    getColumnItems,
  };
}

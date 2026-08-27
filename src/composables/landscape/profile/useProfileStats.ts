import { computed, h } from 'vue';
import { useInteractionStore } from '@/stores/landscape';
import { formatNumber } from '@/utils/landscape';
import UserPlusIcon from '@/pages/Landscape/icon/common/UserPlusIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';

export function useProfileStats() {
  const interactionStore = useInteractionStore();

  const stats = computed(() => {
    const baseStats = [
      { icon: h(UserPlusIcon, { strokeWidth: 2 }), label: '关注', value: '0', trend: 12 },
      { icon: h(BookmarkIcon, { strokeWidth: 2 }), label: '收藏', value: '0', trend: -5 },
      { icon: h(HeartIcon, { strokeWidth: 2 }), label: '喜欢', value: '0', trend: 8 },
      { icon: h(EyeIcon, { strokeWidth: 2 }), label: '浏览', value: '12.5K', trend: 23 },
    ];
    return [
      { ...baseStats[0], value: formatNumber(interactionStore.followingCount) },
      { ...baseStats[1], value: formatNumber(interactionStore.favoritesCount) },
      { ...baseStats[2], value: formatNumber(interactionStore.lovesCount) },
      baseStats[3],
    ];
  });

  const getDisplayCount = (item: any) => {
    const c = interactionStore.getCount(item.id);
    return {
      likes: c.likes,
      loves: c.loves,
      favorites: c.favorites,
      shares: c.shares,
      views: c.views,
    };
  };

  return {
    stats,
    getDisplayCount,
  };
}

import { ref, computed, type Ref, type ComputedRef } from 'vue';
import type { LandscapeItem } from '@/types/landscape';
import type { Category } from '@/utils/landscape/categories';
import { dimensions } from '@/utils/landscape/constants';

interface UseCategoryFilterReturn {
  activeDimension: Ref<string>;
  selectedCategory: Ref<Category | null>;
  selectedSubCategory: Ref<Category | null>;
  activeFilter: Ref<string>;
  mediaType: Ref<'all' | 'image' | 'video'>;
  expandedDimensions: Ref<string[]>;
  expandedCategories: Ref<string[]>;
  currentFilterTitle: ComputedRef<string>;
  filteredItems: ComputedRef<LandscapeItem[]>;
  featuredItems: ComputedRef<LandscapeItem[]>;
  resetFilters: () => void;
}

export function useCategoryFilter(
  items: Ref<LandscapeItem[]>
): UseCategoryFilterReturn {
  const activeDimension = ref('theme');
  const selectedCategory = ref<Category | null>(null);
  const selectedSubCategory = ref<Category | null>(null);
  const activeFilter = ref('all');
  const mediaType = ref<'all' | 'image' | 'video'>('all');
  const expandedDimensions = ref<string[]>(['theme']);
  const expandedCategories = ref<string[]>([]);

  const currentFilterTitle = computed(() => {
    if (selectedSubCategory.value) {
      return selectedSubCategory.value.name;
    }
    if (selectedCategory.value) {
      return selectedCategory.value.name;
    }
    const dim = dimensions.find((d) => d.id === activeDimension.value);
    return dim?.name || '全部风景';
  });

  const filteredItems = computed(() => {
    let result = [...items.value];

    const getFirstTagInDimension = (item: LandscapeItem, dimId: string) => {
      if (!item.categoryTags || item.categoryTags.length === 0) {
        return null;
      }
      return item.categoryTags.find((tag) => tag.dimension === dimId) || null;
    };

    if (selectedSubCategory.value && selectedCategory.value) {
      result = result.filter((item) => {
        const firstTag = getFirstTagInDimension(item, activeDimension.value);
        return (
          firstTag &&
          firstTag.category === selectedCategory.value!.id &&
          firstTag.subCategory === selectedSubCategory.value!.id
        );
      });
    } else if (selectedCategory.value) {
      result = result.filter((item) => {
        const firstTag = getFirstTagInDimension(item, activeDimension.value);
        return firstTag && firstTag.category === selectedCategory.value!.id;
      });
    }

    if (mediaType.value !== 'all') {
      result = result.filter((item) => item.type === mediaType.value);
    }

    if (activeFilter.value === 'latest') {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (activeFilter.value === 'most-views') {
      result.sort((a, b) => b.views - a.views);
    } else if (activeFilter.value === 'most-likes') {
      result.sort((a, b) => b.likes - a.likes);
    } else if (activeFilter.value === 'most-loves') {
      result.sort((a, b) => (b.loves || 0) - (a.loves || 0));
    } else if (activeFilter.value === 'most-favorites') {
      result.sort((a, b) => (b.bookmarks || 0) - (a.bookmarks || 0));
    } else if (activeFilter.value === 'most-shares') {
      result.sort((a, b) => (b.shares || 0) - (a.shares || 0));
    }

    return result;
  });

  const featuredItems = computed(() => {
    let base = items.value.filter((item) => item.likes > 500);

    if (selectedSubCategory.value || selectedCategory.value) {
      base = base.filter((item) => {
        if (selectedSubCategory.value && selectedCategory.value) {
          return item.categoryTags?.some(
            (tag) =>
              tag.dimension === activeDimension.value &&
              tag.category === selectedCategory.value!.id
          );
        }
        if (selectedCategory.value) {
          return item.categoryTags?.some(
            (tag) =>
              tag.dimension === activeDimension.value &&
              tag.category === selectedCategory.value!.id
          );
        }
        return true;
      });
    }

    if (mediaType.value !== 'all') {
      base = base.filter((item) => item.type === mediaType.value);
    }

    return base.slice(0, 8);
  });

  const resetFilters = () => {
    selectedCategory.value = null;
    selectedSubCategory.value = null;
  };

  return {
    activeDimension,
    selectedCategory,
    selectedSubCategory,
    activeFilter,
    mediaType,
    expandedDimensions,
    expandedCategories,
    currentFilterTitle,
    filteredItems,
    featuredItems,
    resetFilters,
  };
}

export type { UseCategoryFilterReturn };

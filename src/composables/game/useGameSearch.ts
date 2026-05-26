import { ref, computed, type Ref } from 'vue';
import type { GameItem, GameCategory, GameTag, GamePlatform } from '@/typesOfPages/game';

interface SearchFilters {
  category: GameCategory | 'all';
  tag: GameTag | 'all';
  platform: GamePlatform | 'all';
  priceRange: 'all' | 'free' | 'under50' | 'under100' | 'over100';
}

type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'discount';

export function useGameSearch(games: Ref<GameItem[]>) {
  const searchKeyword = ref('');
  const filters = ref<SearchFilters>({
    category: 'all',
    tag: 'all',
    platform: 'all',
    priceRange: 'all',
  });
  const sortBy = ref<SortOption>('popular');

  const filteredGames = computed(() => {
    let result = games.value;

    if (searchKeyword.value.trim()) {
      const keyword = searchKeyword.value.toLowerCase().trim();
      result = result.filter(game => 
        game.title.toLowerCase().includes(keyword) ||
        game.subtitle?.toLowerCase().includes(keyword) ||
        game.developer.toLowerCase().includes(keyword) ||
        game.publisher.toLowerCase().includes(keyword) ||
        game.category.toLowerCase().includes(keyword) ||
        game.tags.some(tag => tag.toLowerCase().includes(keyword))
      );
    }

    if (filters.value.category !== 'all') {
      result = result.filter(game => game.category === filters.value.category);
    }

    if (filters.value.tag !== 'all') {
      result = result.filter(game => game.tags.includes(filters.value.tag as GameTag));
    }

    if (filters.value.platform !== 'all') {
      result = result.filter(game => 
        game.platforms.includes(filters.value.platform as GamePlatform)
      );
    }

    switch (filters.value.priceRange) {
      case 'free':
        result = result.filter(game => game.price === 0);
        break;
      case 'under50':
        result = result.filter(game => game.price > 0 && game.price < 50);
        break;
      case 'under100':
        result = result.filter(game => game.price >= 50 && game.price < 100);
        break;
      case 'over100':
        result = result.filter(game => game.price >= 100);
        break;
    }

    const sorted = [...result];
    switch (sortBy.value) {
      case 'popular':
        sorted.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sorted.sort((a, b) => 
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        );
        break;
      case 'discount':
        sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
    }

    return sorted;
  });

  const setSearchKeyword = (keyword: string) => {
    searchKeyword.value = keyword;
  };

  const setFilter = <K extends keyof SearchFilters>(
    key: K,
    value: SearchFilters[K]
  ) => {
    filters.value[key] = value;
  };

  const setSortBy = (sort: SortOption) => {
    sortBy.value = sort;
  };

  const clearFilters = () => {
    searchKeyword.value = '';
    filters.value = {
      category: 'all',
      tag: 'all',
      platform: 'all',
      priceRange: 'all',
    };
    sortBy.value = 'popular';
  };

  const activeFilterCount = computed(() => {
    let count = 0;
    if (searchKeyword.value.trim()) count++;
    if (filters.value.category !== 'all') count++;
    if (filters.value.tag !== 'all') count++;
    if (filters.value.platform !== 'all') count++;
    if (filters.value.priceRange !== 'all') count++;
    return count;
  });

  const hasFilters = computed(() => activeFilterCount.value > 0);

  return {
    searchKeyword,
    filters,
    sortBy,
    filteredGames,
    activeFilterCount,
    hasFilters,
    setSearchKeyword,
    setFilter,
    setSortBy,
    clearFilters,
  };
}

export type { SearchFilters, SortOption };

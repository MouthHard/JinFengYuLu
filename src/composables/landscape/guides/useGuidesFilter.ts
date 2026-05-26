import { ref, computed, type Ref, type ComputedRef } from 'vue';
import type { GlobalGuide } from '@/typesOfPages/landscape';
import { guideModeMap, guideSeasonMap, guideDurationMap, guideThemeMap } from '@/utils/landscape/constants';

interface SelectedFilters {
  travelMode: string[];
  sceneryTheme: string[];
  location: string[];
  season: string[];
  duration: string[];
}

interface UseGuidesFilterReturn {
  selectedFilters: Ref<SelectedFilters>;
  activeCategory: Ref<string>;
  expandedSections: Ref<string[]>;
  currentSort: Ref<string>;
  activeFilterCount: ComputedRef<number>;
  filteredGuides: ComputedRef<GlobalGuide[]>;
  toggleSection: (section: string) => void;
  toggleFilter: (category: string, value: string) => void;
  clearAllFilters: () => void;
  changeSort: (sort: string) => void;
  initializeFromQuery: (query: Record<string, any>) => void;
}

const modeMap = guideModeMap;
const seasonMap = guideSeasonMap;
const durationMap = guideDurationMap;
const themeMap = guideThemeMap;

export function useGuidesFilter(
  guides: Ref<GlobalGuide[]>,
  searchKeyword: Ref<string>
): UseGuidesFilterReturn {
  const selectedFilters = ref<SelectedFilters>({
    travelMode: [],
    sceneryTheme: [],
    location: [],
    season: [],
    duration: [],
  });

  const activeCategory = ref<string>('season');
  const expandedSections = ref<string[]>(['season']);
  const currentSort = ref<string>('latest');

  const activeFilterCount = computed(() => {
    return Object.values(selectedFilters.value).reduce((count, filters) => {
      return count + filters.length;
    }, 0);
  });

  const filteredGuides = computed(() => {
    let result = [...guides.value];

    if (searchKeyword.value) {
      const keyword = searchKeyword.value.toLowerCase();
      result = result.filter(
        (guide) =>
          guide.title.toLowerCase().includes(keyword) ||
          guide.excerpt.toLowerCase().includes(keyword) ||
          guide.location.toLowerCase().includes(keyword) ||
          guide.tags.some((tag) => tag.toLowerCase().includes(keyword))
      );
    }

    if (selectedFilters.value.travelMode.length > 0) {
      result = result.filter((guide) =>
        guide.travelMode && selectedFilters.value.travelMode.some((mode) => guide.travelMode === modeMap[mode])
      );
    }

    if (selectedFilters.value.sceneryTheme.length > 0) {
      result = result.filter((guide) =>
        guide.sceneryTheme && selectedFilters.value.sceneryTheme.some((theme) => guide.sceneryTheme === themeMap[theme])
      );
    }

    if (selectedFilters.value.season.length > 0) {
      result = result.filter((guide) =>
        guide.season && selectedFilters.value.season.some((s) => guide.season === seasonMap[s])
      );
    }

    if (selectedFilters.value.location.length > 0) {
      result = result.filter((guide) =>
        guide.locationId && selectedFilters.value.location.includes(guide.locationId)
      );
    }

    if (selectedFilters.value.duration.length > 0) {
      result = result.filter((guide) =>
        guide.duration && selectedFilters.value.duration.some((dur) => guide.duration === durationMap[dur])
      );
    }

    if (currentSort.value === 'latest') {
      result.sort((a, b) => {
        const dateA = a.publishDate ? new Date(a.publishDate).getTime() : 0;
        const dateB = b.publishDate ? new Date(b.publishDate).getTime() : 0;
        return dateB - dateA;
      });
    } else if (currentSort.value === 'views') {
      result.sort((a, b) => b.views - a.views);
    } else if (currentSort.value === 'likes') {
      result.sort((a, b) => b.likes - a.likes);
    } else if (currentSort.value === 'loves') {
      result.sort((a, b) => b.loves - a.loves);
    } else if (currentSort.value === 'bookmarks') {
      result.sort((a, b) => b.bookmarks - a.bookmarks);
    } else if (currentSort.value === 'shares') {
      result.sort((a, b) => b.shares - a.shares);
    }

    return result;
  });

  const toggleSection = (section: string) => {
    const index = expandedSections.value.indexOf(section);
    if (index > -1) {
      expandedSections.value.splice(index, 1);
    } else {
      expandedSections.value.push(section);
    }
    activeCategory.value = section;
    Object.keys(selectedFilters.value).forEach((key) => {
      selectedFilters.value[key as keyof SelectedFilters] = [];
    });
  };

  const toggleFilter = (category: string, value: string) => {
    const filters = selectedFilters.value[category as keyof SelectedFilters];
    const index = filters.indexOf(value);

    activeCategory.value = category;

    if (index > -1) {
      filters.splice(index, 1);
    } else {
      Object.keys(selectedFilters.value).forEach((key) => {
        selectedFilters.value[key as keyof SelectedFilters] = [];
      });
      selectedFilters.value[category as keyof SelectedFilters] = [value];
    }
  };

  const clearAllFilters = () => {
    Object.keys(selectedFilters.value).forEach((key) => {
      selectedFilters.value[key as keyof SelectedFilters] = [];
    });
    activeCategory.value = '';
    searchKeyword.value = '';
  };

  const changeSort = (sort: string) => {
    currentSort.value = sort;
  };

  const initializeFromQuery = (query: Record<string, any>) => {
    const { travelMode } = query;

    if (travelMode && typeof travelMode === 'string') {
      selectedFilters.value.travelMode = [travelMode];
      if (!expandedSections.value.includes('travelMode')) {
        expandedSections.value.push('travelMode');
      }
      activeCategory.value = 'travelMode';
    }
  };

  return {
    selectedFilters,
    activeCategory,
    expandedSections,
    currentSort,
    activeFilterCount,
    filteredGuides,
    toggleSection,
    toggleFilter,
    clearAllFilters,
    changeSort,
    initializeFromQuery,
  };
}

export { modeMap, seasonMap, durationMap, themeMap };
export type { SelectedFilters, UseGuidesFilterReturn };

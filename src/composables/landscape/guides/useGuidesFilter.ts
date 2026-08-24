import { ref, computed, type Ref, type ComputedRef } from 'vue';
import type { GlobalGuide } from '@/types/landscape';
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
    const keyword = searchKeyword.value ? searchKeyword.value.toLowerCase() : '';
    const hasKeyword = !!keyword;
    const tmFilters = selectedFilters.value.travelMode;
    const stFilters = selectedFilters.value.sceneryTheme;
    const seasonFilters = selectedFilters.value.season;
    const locFilters = selectedFilters.value.location;
    const durFilters = selectedFilters.value.duration;

    const hasTm = tmFilters.length > 0;
    const hasSt = stFilters.length > 0;
    const hasSeason = seasonFilters.length > 0;
    const hasLoc = locFilters.length > 0;
    const hasDur = durFilters.length > 0;

    if (!hasKeyword && !hasTm && !hasSt && !hasSeason && !hasLoc && !hasDur) {
      return [...guides.value];
    }

    const result: GlobalGuide[] = [];
    for (const guide of guides.value) {
      if (hasKeyword) {
        const match =
          guide.title.toLowerCase().includes(keyword) ||
          guide.excerpt.toLowerCase().includes(keyword) ||
          guide.location.toLowerCase().includes(keyword) ||
          (guide.author || '').toLowerCase().includes(keyword) ||
          (guide.season || '').toLowerCase().includes(keyword) ||
          (guide.travelMode || '').toLowerCase().includes(keyword) ||
          (guide.sceneryTheme || '').toLowerCase().includes(keyword) ||
          (guide.duration || '').toLowerCase().includes(keyword) ||
          (guide.publishDate || '').toLowerCase().includes(keyword) ||
          guide.tags.some((tag) => tag.toLowerCase().includes(keyword));
        if (!match) continue;
      }
      if (hasTm && !(guide.travelMode && tmFilters.some((m) => guide.travelMode === modeMap[m]))) continue;
      if (hasSt && !(guide.sceneryTheme && stFilters.some((t) => guide.sceneryTheme === themeMap[t]))) continue;
      if (hasSeason && !(guide.season && seasonFilters.some((s) => guide.season === seasonMap[s]))) continue;
      if (hasLoc && !(guide.locationId && locFilters.includes(guide.locationId))) continue;
      if (hasDur && !(guide.duration && durFilters.some((d) => guide.duration === durationMap[d]))) continue;
      result.push(guide);
    }

    const sortFn = currentSort.value;
    if (sortFn === 'latest') {
      const timeCache = new Map<string, number>();
      result.sort((a, b) => {
        let ta = timeCache.get(a.id);
        if (ta === undefined) { ta = a.publishDate ? new Date(a.publishDate).getTime() : 0; timeCache.set(a.id, ta); }
        let tb = timeCache.get(b.id);
        if (tb === undefined) { tb = b.publishDate ? new Date(b.publishDate).getTime() : 0; timeCache.set(b.id, tb); }
        return tb - ta;
      });
    } else if (sortFn === 'views') {
      result.sort((a, b) => b.views - a.views);
    } else if (sortFn === 'likes') {
      result.sort((a, b) => b.likes - a.likes);
    } else if (sortFn === 'loves') {
      result.sort((a, b) => b.loves - a.loves);
    } else if (sortFn === 'bookmarks') {
      result.sort((a, b) => b.bookmarks - a.bookmarks);
    } else if (sortFn === 'shares') {
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
  };

  const toggleFilter = (category: string, value: string) => {
    const filters = selectedFilters.value[category as keyof SelectedFilters];
    const index = filters.indexOf(value);

    activeCategory.value = category;

    if (index > -1) {
      filters.splice(index, 1);
    } else {
      filters.push(value);
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

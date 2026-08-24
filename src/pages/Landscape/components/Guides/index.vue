<template>
  <div class="travel-guide">
    <!-- 使用网格布局的整体容�?-->
    <div class="page-grid">
      <!-- 左侧列：搜索框header + 筛选结�?-->
      <div class="left-column">
        <!-- 顶部导航�?-->
        <TopNav :initial-keyword="searchKeyword" @update:search-keyword="searchKeyword = $event" @search="handleSearch" />

        <!-- 内容展示�?-->
        <main ref="contentAreaRef" class="content-area">
          <!-- 排序�?-->
          <div class="sort-bar">
            <div class="result-count">
              <SearchIcon class="result-icon" />
              共找�?              <strong>{{ filteredGuides.length }}</strong>
              篇攻�?            </div>
            <div class="sort-options">
              <button v-for="sort in guideSortOptions" :key="sort.value"
                :class="['sort-btn', { active: currentSort === sort.value }]" @click="changeSort(sort.value)">
                <ClockIcon v-if="sort.value === 'latest'" class="sort-icon" />
                <EyeIcon v-else-if="sort.value === 'views'" class="sort-icon" />
                <ThumbUpIcon v-else-if="sort.value === 'likes'" class="sort-icon" />
                <HeartIcon v-else-if="sort.value === 'loves'" class="sort-icon" />
                <BookmarkIcon v-else-if="sort.value === 'bookmarks'" class="sort-icon" />
                <ShareIcon v-else-if="sort.value === 'shares'" class="sort-icon" />
                {{ sort.label }}
              </button>
            </div>
          </div>

          <!-- 攻略列表 -->
          <div class="guides-container grid">
            <GuideCard v-for="(guide, index) in filteredGuides" :key="guide.id" :guide="guide" :index="index"
              @click="openGuideDetail" />
          </div>

          <!-- 加载更多 -->
          <div v-if="filteredGuides.length >= 30 && hasMoreGuides" class="load-more">
            <button class="load-more-btn" :disabled="isLoadingMore" @click="loadMoreGuides">
              <span v-if="!isLoadingMore">加载更多攻略</span>
              <span v-else class="loading-spinner"></span>
            </button>
          </div>

          <!-- 空状�?-->
          <div v-if="filteredGuides.length === 0 && !isLoadingMore" class="empty-state">
            <div class="empty-icon">🔍</div>
            <h3>没有找到相关攻略</h3>
            <p>试试调整筛选条件或搜索关键�?/p>
            <button class="reset-btn" @click="clearAllFilters">重置筛�?/button>
          </div>
        </main>
      </div>

      <!-- 右侧列：筛选菜�?- 极简卡片式设�?-->
      <FilterSidebar :travel-modes-with-count="travelModesWithCount"
        :natural-scenery-with-count="naturalSceneryWithCount" :weather-scenery-with-count="weatherSceneryWithCount"
        :seasonal-scenery-with-count="seasonalSceneryWithCount" :cultural-scenery-with-count="culturalSceneryWithCount"
        :wildlife-scenery-with-count="wildlifeSceneryWithCount" :locations-with-count="locationsWithCount"
        :seasons-with-count="seasonsWithCount" :duration-with-count="durationWithCount"
        :selected-filters="selectedFilters" :active-filter-count="activeFilterCount" :active-category="activeCategory"
        :expanded-sections="expandedSections" @toggle-section="toggleSection" @toggle-filter="toggleFilter"
        @clear-all-filters="clearAllFilters" />
    </div>

    <Teleport to="body">
      <GuideModal v-if="selectedGuide" :visible="!!selectedGuide" :guide="selectedGuide" @close="closeGuideDetail"
        @like="toggleLike" @love="toggleLove" @bookmark="toggleBookmark" @share="shareGuide" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Guides' });
import { ref, computed, onMounted, watch, Teleport } from 'vue';
import { useRoute } from 'vue-router';
import { showMessage, createSimpleInteractionItem } from '@/utils/landscape';
import { useInteractionStore } from '@/stores/landscape';
import { useLandscapeDataStore } from '@/stores/landscape';
import type { GlobalGuide } from '@/types/landscape/data';
import { useGuidesFilter, modeMap, seasonMap, durationMap, themeMap } from '@/composables/landscape/guides/useGuidesFilter';
import TopNav from './components/TopNav/index.vue';
import FilterSidebar from './components/FilterSidebar/index.vue';
import GuideCard from './components/GuideCard/index.vue';
import GuideModal from './components/GuideModal/index.vue';
import SearchIcon from '@/pages/Landscape/icon/common/SearchIcon.vue';
import ClockIcon from '@/pages/Landscape/icon/common/ClockIcon.vue';
import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
import {
  travelModes,
  naturalScenery,
  weatherScenery,
  seasonalScenery,
  culturalScenery,
  wildlifeScenery,
  locations,
  seasons,
  durations,
  guideSortOptions,
} from '@/utils/landscape/constants';

const interactionStore = useInteractionStore();
const dataStore = useLandscapeDataStore();
const route = useRoute();

const guides = computed<GlobalGuide[]>(() => dataStore.getAllGuides());
type Guide = GlobalGuide;

const initialQueryKeyword = (() => {
  const q = route.query.q;
  return q && typeof q === 'string' ? q : '';
})();

const searchKeyword = ref(initialQueryKeyword);

const {
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
} = useGuidesFilter(guides, searchKeyword);

const selectedGuide = ref<Guide | null>(null);
const isLoadingMore = ref(false);
const hasMoreGuides = ref(true);

const getCountForFilter = (category: string, filterId: string): number => {
  let result = [...guides.value];

  if (category === 'travelMode') {
    result = result.filter((guide) => guide.travelMode === modeMap[filterId]);
  } else if (category === 'sceneryTheme') {
    result = result.filter((guide) => guide.sceneryTheme === themeMap[filterId]);
  } else if (category === 'season') {
    result = result.filter((guide) => guide.season === seasonMap[filterId]);
  } else if (category === 'location') {
    result = result.filter((guide) => guide.locationId === filterId || guide.location === filterId);
  } else if (category === 'duration') {
    result = result.filter((guide) => guide.duration === durationMap[filterId]);
  }

  return result.length;
};

const travelModesWithCount = computed(() =>
  travelModes.map((mode) => ({
    ...mode,
    count: getCountForFilter('travelMode', mode.id),
  }))
);

const naturalSceneryWithCount = computed(() =>
  naturalScenery.map((theme) => ({
    ...theme,
    count: getCountForFilter('sceneryTheme', theme.id),
  }))
);

const weatherSceneryWithCount = computed(() =>
  weatherScenery.map((theme) => ({
    ...theme,
    count: getCountForFilter('sceneryTheme', theme.id),
  }))
);

const seasonalSceneryWithCount = computed(() =>
  seasonalScenery.map((theme) => ({
    ...theme,
    count: getCountForFilter('sceneryTheme', theme.id),
  }))
);

const culturalSceneryWithCount = computed(() =>
  culturalScenery.map((theme) => ({
    ...theme,
    count: getCountForFilter('sceneryTheme', theme.id),
  }))
);

const wildlifeSceneryWithCount = computed(() =>
  wildlifeScenery.map((theme) => ({
    ...theme,
    count: getCountForFilter('sceneryTheme', theme.id),
  }))
);

const locationsWithCount = computed(() =>
  locations.map((loc) => ({
    ...loc,
    count: getCountForFilter('location', loc.id),
  }))
);

const seasonsWithCount = computed(() =>
  seasons.map((season) => ({
    ...season,
    count: getCountForFilter('season', season.id),
  }))
);

const durationWithCount = computed(() =>
  durations.map((dur) => ({
    ...dur,
    count: getCountForFilter('duration', dur.id),
  }))
);

const contentAreaRef = ref<HTMLElement | null>(null);

const handleSearch = () => {
  if (contentAreaRef.value) {
    contentAreaRef.value.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const openGuideDetail = (guide: Guide) => {
  selectedGuide.value = guide;
  document.body.style.overflow = 'hidden';
};

const closeGuideDetail = () => {
  selectedGuide.value = null;
  document.body.style.overflow = '';
};

const getGuideId = (id: string) => id;

const toggleLike = (guide: Guide) => {
  const isLiked = interactionStore.toggleLike(getGuideId(guide.id));
  if (isLiked) {
    showMessage.like.success(guide.title);
  } else {
    showMessage.like.cancel();
  }
};

const toggleLove = (guide: Guide) => {
  const item = createSimpleInteractionItem(getGuideId(guide.id), 'guide', guide.title, {
    image: guide.cover,
    location: guide.location,
  });
  const isLoved = interactionStore.toggleLove(item);
  if (isLoved) {
    showMessage.love.success(guide.title, 'guide');
  } else {
    showMessage.love.cancel(guide.title, 'guide');
  }
};

const toggleBookmark = (guide: Guide) => {
  const item = createSimpleInteractionItem(getGuideId(guide.id), 'guide', guide.title, {
    image: guide.cover,
    location: guide.location,
  });
  const isFavorited = interactionStore.toggleFavorite(item);
  if (isFavorited) {
    showMessage.favorite.success(guide.title, 'guide');
  } else {
    showMessage.favorite.cancel(guide.title, 'guide');
  }
};

const shareGuide = (guide: Guide) => {
  if (navigator.share) {
    navigator.share({
      title: guide.title,
      text: guide.excerpt,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    showMessage.share.copied();
  }
};

const loadMoreGuides = () => {
  hasMoreGuides.value = false;
};

watch(() => guides.value.length, (len) => {
  if (len > 0) {
    interactionStore.registerBatch(
      guides.value.map((guide) => ({
        id: getGuideId(guide.id),
        counts: {
          likes: guide.likes,
          loves: guide.loves,
          views: guide.views,
          favorites: guide.bookmarks,
          shares: guide.shares,
        },
      }))
    );
  }
}, { immediate: true });

onMounted(() => {
  initializeFromQuery(route.query);
});
</script>

<style scoped lang="scss" src="./index.scss" />

<template>
  <section class="module-ranking">
    <RankingBackground />

    <header class="grid-area-header">
      <div class="header-title">🏆 美食排行榜</div>

      <div class="header-controls">
        <div class="filters-group">
          <div class="filter-item">
            <label class="filter-label">价格</label>
            <div class="custom-select" :class="{ 'open-select': openSelect === 'price' }">
              <div class="select-header" @click="toggleSelect('price')">
                <span class="select-value">
                  {{
                    getSelectedText(
                      priceOptions,
                      selectedPriceFilter,
                      '选择价格',
                    )
                  }}
                </span>
                <SciFiArrow />
              </div>
              <div v-if="openSelect === 'price'" class="select-options">
                <div v-for="option in priceOptions" :key="option.value" class="select-option"
                  :class="{ selected: selectedPriceFilter === option.value }"
                  @click="selectOption('price', option.value)">
                  <span class="option-icon">💰</span>
                  <span class="option-text">{{ option.text }}</span>
                  <EcgBackground v-if="selectedPriceFilter === option.value" />
                </div>
              </div>
            </div>
          </div>

          <div class="filter-item">
            <label class="filter-label">评分</label>
            <div class="custom-select" :class="{ 'open-select': openSelect === 'rating' }">
              <div class="select-header" @click="toggleSelect('rating')">
                <span class="select-value">
                  {{
                    getSelectedText(
                      ratingOptions,
                      selectedRatingFilter,
                      '选择评分',
                    )
                  }}
                </span>
                <SciFiArrow />
              </div>
              <div v-if="openSelect === 'rating'" class="select-options">
                <div v-for="option in ratingOptions" :key="option.value" class="select-option"
                  :class="{ selected: selectedRatingFilter === option.value }"
                  @click="selectOption('rating', option.value)">
                  <span class="option-icon">⭐</span>
                  <span class="option-text">{{ option.text }}</span>
                  <EcgBackground v-if="selectedRatingFilter === option.value" />
                </div>
              </div>
            </div>
          </div>

          <div class="filter-item">
            <label class="filter-label">分类</label>
            <div class="custom-select" :class="{ 'open-select': openSelect === 'category' }">
              <div class="select-header" @click="toggleSelect('category')">
                <span class="select-value">
                  {{ getSelectedCategoryText() }}
                </span>
                <SciFiArrow />
              </div>
              <div v-if="openSelect === 'category'" class="select-options">
                <div class="select-option" :class="{ selected: selectedCategoryFilter === 'all' }"
                  @click="selectOption('category', 'all')">
                  <span class="option-icon">🍽️</span>
                  <span class="option-text">全部</span>
                  <EcgBackground v-if="selectedCategoryFilter === 'all'" />
                </div>
                <div v-for="category in uniqueCategories" :key="category" class="select-option"
                  :class="{ selected: selectedCategoryFilter === category }"
                  @click="selectOption('category', category)">
                  <span class="option-icon">🍜</span>
                  <span class="option-text">{{ category }}</span>
                  <EcgBackground v-if="selectedCategoryFilter === category" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sort-control">
          <label class="filter-label">排序</label>
          <div class="custom-select" :class="{ 'open-select': openSelect === 'sort' }">
            <div class="select-header" @click="toggleSelect('sort')">
              <span class="select-value">
                {{ getSelectedText(sortOptions, selectedSort, '选择排序方式') }}
              </span>
              <SciFiArrow />
            </div>
            <div v-if="openSelect === 'sort'" class="select-options">
              <div v-for="option in sortOptions" :key="option.value" class="select-option"
                :class="{ selected: selectedSort === option.value }" @click="selectOption('sort', option.value)">
                <span class="option-icon">
                  {{
                    option.value === 'ranking'
                      ? '🏆'
                      : option.value === 'rating'
                        ? '⭐'
                        : option.value === 'price-asc'
                          ? '↗️'
                          : option.value === 'price-desc'
                            ? '↘️'
                            : option.value === 'reviews'
                              ? '💬'
                              : ''
                  }}
                </span>
                <span class="option-text">{{ option.text }}</span>
                <EcgBackground v-if="selectedSort === option.value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="grid-area-chart">
      <header class="panel-header">美食数据洞察</header>

      <section class="chart-section">
        <nav class="chart-tabs">
          <button v-for="tab in chartTabs" :key="tab.id" class="tab-button" :class="{ active: activeTab === tab.id }"
            @click="switchChartTab(tab.id)">
            {{ tab.title }}
          </button>
        </nav>

        <div class="chart-container">
          <div ref="chartContainer" class="chart-content" :class="`chart-${activeTab}`"></div>
        </div>
      </section>
    </div>

    <div class="grid-area-ranking">
      <div v-if="filteredAndSortedFoods.length === 0" class="empty-results">
        <div class="empty-icon">🔍</div>
        <h4 class="empty-title">没有找到匹配的美食</h4>
        <p class="empty-description">尝试调整筛选条件，或者查看其他推荐</p>
        <button class="reset-button" @click="resetFilters">重置筛选条件</button>
      </div>

      <div v-else class="foods-container">
        <article v-for="(food, index) in filteredAndSortedFoods.slice(0, 4)" :key="food.id" class="food-card" :class="{
          'gold-medal': index === 0,
          'silver-medal': index === 1,
          'bronze-medal': index === 2,
          'fourth-place': index === 3,
        }">
          <div class="rank-badge">
            <span class="rank-number">{{ index + 1 }}</span>
            <span v-if="index < 3" class="rank-medal">
              {{ ['🥇', '🥈', '🥉'][index] }}
            </span>
            <span v-else class="rank-medal">🏅</span>
          </div>

          <div class="card-content">
            <div class="image-container">
              <img loading="lazy" :src="food.image" :alt="food.name" class="food-image" />
            </div>

            <div class="food-info">
              <h4 class="food-name">
                {{ food.name }}
                <span class="food-price-inline">¥{{ food.price }}</span>
              </h4>

              <div class="food-tags">
                <span class="food-tag highlight-tag">
                  {{ (food as any).highlight || '人气美食推荐' }}
                </span>
                <span v-for="(tag, tagIndex) in (food.tags || []).slice(0, 2)" :key="tagIndex" class="food-tag">
                  {{ tag }}
                </span>
              </div>

              <div class="food-meta">
                <div class="food-rating">
                  <el-rate :model-value="food.rating" :disabled="true" :max="5" :precision="1" show-score
                    class="custom-element-rate" />
                  <span class="rating-count">
                    ({{ (food as any).reviewCount || 0 }}条评价)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card-actions">
            <button class="action-button favorite-button" :class="{ active: isFavorite(food.id) }"
              @click="toggleFavorite(food.id)">
              <HeartIcon />
            </button>

            <button class="action-button detail-button" aria-label="查看详情">
              详情
            </button>
          </div>
        </article>

        <div v-if="filteredAndSortedFoods.length > 4" class="more-container">
          <button class="more-button">查看更多 ➣</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  computed,
  nextTick,
  shallowRef,
} from 'vue';
import type { Food } from '@/typesOfPages/travelGuide';
import {
  RankingBackground,
  SciFiArrow,
  EcgBackground,
} from '@/pages/TravelGuide/icons/pages/food';
import { ChartManager } from './charts';
import { HeartIcon } from '@/pages/TravelGuide/icons/pages/food/index.ts';
const props = defineProps<{
  popularFoods?: Food[];
  allFoods?: Food[];
}>();

// 定义筛选和排序的响应式数据
const selectedPriceFilter = ref<string>('all');
const selectedRatingFilter = ref<string>('all');
const selectedCategoryFilter = ref<string>('all');
const selectedSort = ref<string>('ranking');
// 使用 shallowRef 优化数组操作，因为我们只需要监听数组的引用变化
const favoriteFoods = shallowRef<Food[]>([]);

// 自定义下拉菜单状态管理
const openSelect = ref<string | null>(null);

// 切换下拉菜单
const toggleSelect = (type: string) => {
  openSelect.value = openSelect.value === type ? null : type;
};

//下拉菜单选中什么值则将展示在下拉框的值更新为这个值
const selectOption = (type: string, value: string) => {
  switch (type) {
    case 'price':
      selectedPriceFilter.value = value;
      break;
    case 'rating':
      selectedRatingFilter.value = value;
      break;
    case 'category':
      selectedCategoryFilter.value = value;
      break;
    case 'sort':
      selectedSort.value = value;
      break;
  }
  openSelect.value = null;
};

// 点击外部区域关闭下拉菜单
const handleClickOutside = (event: MouseEvent) => {
  const customSelects = document.querySelectorAll('.custom-select');
  let clickedInside = false;

  customSelects.forEach((select) => {
    if (select.contains(event.target as Node)) {
      clickedInside = true;
    }
  });

  if (!clickedInside) {
    openSelect.value = null;
  }
};

// 获取选中的文本
const getSelectedText = (
  options: Array<{ value: string; text: string }>,
  value: string,
  placeholder: string,
) => {
  const option = options.find((opt) => opt.value === value);
  return option ? option.text : placeholder;
};

// 获取选中的分类文本
const getSelectedCategoryText = () => {
  if (selectedCategoryFilter.value === 'all') {
    return '全部';
  }
  return selectedCategoryFilter.value || '选择分类';
};

// 下拉选项数据
const priceOptions = [
  { value: 'all', text: '全部' },
  { value: '0-50', text: '¥0-50' },
  { value: '51-100', text: '¥51-100' },
  { value: '101-150', text: '¥101-150' },
  { value: '151+', text: '¥151+' },
];

const ratingOptions = [
  { value: 'all', text: '全部' },
  { value: '4.5+', text: '4.5分以上' },
  { value: '4.0-4.4', text: '4.0-4.4分' },
  { value: '3.5-3.9', text: '3.5-3.9分' },
  { value: '3.0-3.4', text: '3.0-3.4分' },
];

const sortOptions = [
  { value: 'ranking', text: '按排名' },
  { value: 'rating', text: '按评分' },
  { value: 'price-asc', text: '价格从低到高' },
  { value: 'price-desc', text: '价格从高到低' },
  { value: 'reviews', text: '按评价数量' },
];

// 重置所有筛选条件
const resetFilters = () => {
  selectedPriceFilter.value = 'all';
  selectedRatingFilter.value = 'all';
  selectedCategoryFilter.value = 'all';
  selectedSort.value = 'ranking';
};

const uniqueCategories = computed(() => {
  const categories = new Set<string>();
  const foods = props.allFoods || [];
  foods.forEach((food: Food) => {
    if (food.category) {
      categories.add(food.category);
    }
  });
  return Array.from(categories);
});

// 筛选和排序工具函数
const applyFilters = (foods: Food[]) => {
  return foods.filter((food: Food) => {
    // 价格筛选
    if (selectedPriceFilter.value !== 'all') {
      const [min, max] = selectedPriceFilter.value.split('-');
      const numPrice = food.price ? Number(food.price) : 0;
      if (max === undefined) {
        if (!food.price || numPrice < parseInt(min)) return false;
      } else {
        if (
          !food.price ||
          numPrice < parseInt(min) ||
          numPrice > parseInt(max)
        )
          return false;
      }
    }

    // 评分筛选
    if (selectedRatingFilter.value !== 'all') {
      const ratingValue = selectedRatingFilter.value;
      if (ratingValue === '4.5+') {
        if (food.rating < 4.5) return false;
      } else if (ratingValue.includes('-')) {
        const [min, max] = ratingValue.split('-').map(parseFloat);
        if (food.rating < min || food.rating > max) return false;
      }
    }

    // 分类筛选
    if (selectedCategoryFilter.value !== 'all') {
      if (food.category !== selectedCategoryFilter.value) return false;
    }

    return true;
  });
};

const applySort = (foods: Food[]) => {
  if (selectedSort.value === 'ranking') {
    return foods;
  }

  const sortedFoods = [...foods];
  switch (selectedSort.value) {
    case 'rating':
      return sortedFoods.sort((a: Food, b: Food) => b.rating - a.rating);
    case 'price-asc':
      return sortedFoods.sort(
        (a: Food, b: Food) => Number(a.price || 0) - Number(b.price || 0),
      );
    case 'price-desc':
      return sortedFoods.sort(
        (a: Food, b: Food) => Number(b.price || 0) - Number(a.price || 0),
      );
    case 'reviews':
      return sortedFoods.sort(
        (a: Food, b: Food) =>
          ((b as any).reviewCount || 0) - ((a as any).reviewCount || 0),
      );
    default:
      return sortedFoods;
  }
};

// 使用 computed 缓存计算结果，只有当依赖变化时才重新计算
const filteredAndSortedFoods = computed(() => {
  const foods = props.popularFoods || [];
  const filteredFoods = applyFilters(foods);
  return applySort(filteredFoods);
});

const toggleFavorite = (foodId: string) => {
  const currentFavorites = [...favoriteFoods.value];
  const index = currentFavorites.findIndex((f) => f.id === foodId);
  if (index === -1) {
    const food = props.allFoods?.find((f) => f.id === foodId);
    if (food) {
      currentFavorites.push(food);
    }
  } else {
    currentFavorites.splice(index, 1);
  }
  favoriteFoods.value = currentFavorites; // 重新赋值触发响应式更新
};

const isFavorite = (foodId: string) => {
  return favoriteFoods.value.some((f) => f.id === foodId);
};

// 图表配置
const chartTabs = ref([
  { id: 'rating', title: '评分对比' },
  { id: 'price', title: '价格分布' },
  { id: 'category', title: '分类数量' },
  { id: 'price-rating', title: '价格-评分关系' },
]);

// 当前激活的图表Tab
const activeTab = ref('rating');

// 图表容器ref
const chartContainer = ref<HTMLElement | null>(null);

// 图表管理器实例
let chartManager: ChartManager | null = null;

// Tab切换方法
const switchChartTab = (tabId: string) => {
  activeTab.value = tabId;
  // 切换Tab后重新初始化当前图表
  nextTick(() => {
    setTimeout(() => {
      chartManager?.setActiveTab(tabId);
      chartManager?.init();
    }, 50);
  });
};

// 数据变化监听 - 直接监听props对象，确保任何变化都能被检测到
watch(
  () => props,
  () => {
    try {
      chartManager?.updateProps(props);
      chartManager?.init();
    } catch (error) {
      console.error('Failed to initialize chart:', error);
    }
  },
  { deep: true },
);

const handleChartResize = () => chartManager?.resize();

onMounted(() => {
  chartManager = new ChartManager(chartContainer.value, props);
  chartManager.setActiveTab(activeTab.value);
  chartManager.init();
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleChartResize);
});

onUnmounted(() => {
  chartManager?.destroy();
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleChartResize);
});
</script>

<style scoped lang="scss" src="./index.scss" />

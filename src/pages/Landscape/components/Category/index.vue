<template>
  <div class="category-page">
    <div class="main-layout">
      <CategorySidebar
        :items="items"
        :active-dimension="activeDimension"
        :selected-category="selectedCategory"
        :selected-sub-category="selectedSubCategory"
        :expanded-dimensions="expandedDimensions"
        :expanded-categories="expandedCategories"
        @update:active-dimension="activeDimension = $event"
        @update:selected-category="selectedCategory = $event"
        @update:selected-sub-category="selectedSubCategory = $event"
        @update:expanded-dimensions="expandedDimensions = $event"
        @update:expanded-categories="expandedCategories = $event"
        @reset="resetFilters"
      />

      <div class="result-content">
        <FilterHeader
          :modelValue="searchQuery"
          :title="currentFilterTitle"
          :count="filteredItems.length"
          :activeFilter="activeFilter"
          :mediaType="mediaType"
          @update:model-value="$emit('update:searchQuery', $event)"
          @update:active-filter="activeFilter = $event"
          @update:media-type="mediaType = $event"
        />
        <ResultGrid
          v-if="filteredItems.length > 0"
          :items="filteredItems"
          @open-detail="selectedDetail = $event"
          @toggle-like="toggleLike"
          @toggle-love="toggleLove"
          @toggle-favorite="toggleFavorite"
        />
        <div v-else class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>未找到相关内�?/h3>
          <p>尝试调整筛选条件或切换分类</p>
          <button class="reset-btn" @click="resetFilters">重置筛�?/button>
        </div>
      </div>

      <FeaturedSidebar
        :items="featuredItems"
        @open-detail="selectedDetail = $event"
      />
    </div>

    <CategoryDetailModal
      :item="selectedDetail"
      @close="selectedDetail = null"
      @toggle-like="toggleLike"
      @toggle-love="toggleLove"
      @toggle-favorite="toggleFavorite"
      @share="$emit('share', $event)"
      @download="$emit('download', $event)"
    />
  </div>
</template>

<script setup lang="ts">
  defineOptions({ name: 'Category' });
  import { ref, onMounted, watch, toRef } from 'vue';
  import { useRoute } from 'vue-router';
  import { useInteractionStore } from '@/stores/landscape';
  import type { InteractionItem } from '@/types/landscape';
  import { showMessage, createSimpleInteractionItem } from '@/utils/landscape';
  import { useCategoryFilter } from '@/composables/landscape/category';
  import type { LandscapeItem } from '@/types/landscape';
  import { categoryGroups } from '@/utils/landscape/categories';
  import CategorySidebar from './components/CategorySidebar/index.vue';
  import FilterHeader from './components/FilterHeader/index.vue';
  import ResultGrid from './components/ResultGrid/index.vue';
  import FeaturedSidebar from './components/FeaturedSidebar/index.vue';
  import CategoryDetailModal from './components/CategoryDetailModal/index.vue';

  interface Props {
    items: LandscapeItem[];
    searchQuery: string;
  }

  const props = defineProps<Props>();
  const route = useRoute();
  const interactionStore = useInteractionStore();

  const emit = defineEmits<{
    'update:searchQuery': [value: string];
    'open-detail': [item: LandscapeItem];
    'toggle-like': [item: LandscapeItem];
    share: [item: LandscapeItem];
    download: [item: LandscapeItem];
  }>();

  const itemsRef = toRef(props, 'items');

  const {
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
  } = useCategoryFilter(itemsRef);

  const selectedDetail = ref<LandscapeItem | null>(null);

  const getItemId = (id: number | string) => String(id);

  const toggleLike = (item: LandscapeItem) => {
    const isLiked = interactionStore.toggleLike(getItemId(item.id));
    if (isLiked) {
      showMessage.like.success(item.title);
    } else {
      showMessage.like.cancel();
    }
  };

  const toggleLove = (item: LandscapeItem) => {
    const interactionItem = createSimpleInteractionItem(
      getItemId(item.id),
      item.type,
      item.title,
      {
        image: item.thumbnail,
        location: item.location,
        author: item.author,
        authorId: item.authorId,
        authorAvatar: item.authorAvatar,
      },
    );
    const isLoved = interactionStore.toggleLove(interactionItem);
    if (isLoved) {
      showMessage.love.success(
        item.title,
        item.type as InteractionItem['type'],
      );
    } else {
      showMessage.love.cancel(item.title, item.type as InteractionItem['type']);
    }
  };

  const toggleFavorite = (item: LandscapeItem) => {
    const interactionItem = createSimpleInteractionItem(
      getItemId(item.id),
      item.type,
      item.title,
      {
        image: item.thumbnail,
        location: item.location,
        author: item.author,
        authorId: item.authorId,
        authorAvatar: item.authorAvatar,
      },
    );
    const isFavorited = interactionStore.toggleFavorite(interactionItem);
    if (isFavorited) {
      showMessage.favorite.success(
        item.title,
        item.type as InteractionItem['type'],
      );
    } else {
      showMessage.favorite.cancel(
        item.title,
        item.type as InteractionItem['type'],
      );
    }
  };

  const handleNavigationParams = () => {
    const { dimension, category, subCategory } = route.query;

    if (dimension && category && subCategory) {
      activeDimension.value = dimension as string;

      if (!expandedDimensions.value.includes(dimension as string)) {
        expandedDimensions.value.push(dimension as string);
      }

      const group = categoryGroups.find((g) => g.key === dimension);
      if (group) {
        const cat = group.categories.find((c) => c.id === category);
        if (cat) {
          selectedCategory.value = cat;

          const categoryKey = `${dimension}-${category}`;
          if (!expandedCategories.value.includes(categoryKey)) {
            expandedCategories.value.push(categoryKey);
          }

          if (cat.children) {
            const subCat = cat.children.find((c) => c.id === subCategory);
            if (subCat) {
              selectedSubCategory.value = subCat;
            }
          }
        }
      }
    }
  };

  onMounted(() => {
    handleNavigationParams();
  });

  watch(
    () => props.items,
    (items) => {
      if (items && items.length > 0) {
        interactionStore.registerBatch(
          items.map((item) => ({
            id: getItemId(item.id),
            counts: {
              likes: item.likes,
              loves: item.loves || 0,
              views: item.views,
              favorites: item.bookmarks,
              shares: item.shares,
            },
          })),
        );
      }
    },
    { immediate: true },
  );
</script>

<style scoped lang="scss" src="./index.scss" />

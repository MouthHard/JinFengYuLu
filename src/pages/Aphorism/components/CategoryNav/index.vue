<template>
  <div class="category-nav">
    <!-- 主分类标签 -->
    <div class="category-tabs">
      <button v-for="category in categories" :key="category.id" class="category-tab"
        :class="{ active: activeCategory === category.id }" @click="selectCategory(category)">
        <span class="tab-icon">{{ category.icon }}</span>
        <span class="tab-name">{{ category.name }}</span>
      </button>
    </div>

    <!-- 子分类 -->

    <div v-if="subCategories.length > 0" class="category-grid">
      <button v-for="sub in subCategories" :key="sub.id" class="category-item sub-category"
        :class="{ active: activeSubCategory === sub.id }" @click="selectSubCategory(sub)">
        <span class="item-icon">{{ sub.icon }}</span>
        <span class="item-name">{{ sub.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useAphorismDataStore } from '@/stores/aphorism';
import type { CategoryGroup, CategoryChild } from '@/services/aphorism';
import './index.scss';

const emit = defineEmits<{
  (e: 'category-change', categoryId: string, subCategoryId?: number): void;
}>();

const dataStore = useAphorismDataStore();
const activeCategory = ref<string>('');
const activeSubCategory = ref<number | null>(null);
const hasAutoSelected = ref(false);

const categories = computed<CategoryGroup[]>(() => dataStore.categories);

const subCategories = computed<CategoryChild[]>(() => {
  if (!activeCategory.value) return [];
  const category = categories.value.find((c) => c.id === activeCategory.value);
  return category?.children || [];
});

const handleCategorySelection = (
  categoryId: string,
  subCategoryId?: number,
) => {
  emit('category-change', categoryId, subCategoryId);
};

const selectCategory = (category: CategoryGroup) => {
  hasAutoSelected.value = true;
  activeCategory.value = category.id;
  activeSubCategory.value = null;
  const firstSub = category.children?.[0];
  if (firstSub) {
    activeSubCategory.value = firstSub.id;
    const subId = firstSub.name === '全部诗词' ? undefined : firstSub.id;
    handleCategorySelection(category.id, subId);
  } else {
    handleCategorySelection(category.id);
  }
};

const selectSubCategory = (sub: CategoryChild) => {
  hasAutoSelected.value = true;
  activeSubCategory.value = sub.id;
  const subId = sub.name === '全部诗词' ? undefined : sub.id;
  handleCategorySelection(activeCategory.value, subId);
};

onMounted(async () => {
  if (categories.value.length === 0) {
    await dataStore.loadCategories();
  }
});

watch(
  () => [dataStore.poems.length, categories.value.length] as const,
  ([poemLen, catLen]) => {
    if (poemLen > 0 && catLen > 0 && !hasAutoSelected.value) {
      selectCategory(categories.value[0]);
    }
  },
  { immediate: true },
);
</script>

<template>
  <section class="module-categories">

    <div class="particles-container">
      <CategoriesBackground />
    </div>

    <div class="section-header">
      <h3 class="section-title">🍽️ 美食分类</h3>
      <div class="categories-grid">
        <div v-for="(category, index) in foodCategories" :key="category.id" class="category-card" :class="{
          active: selectedCategory?.id === category.id,
          [`color-theme-${(index % 5) + 1}`]: true,
        }" @click="toggleCategory(category)">
          <div class="category-icon">{{ category.icon }}</div>
          <div class="category-content">{{ category.name }}</div>
          <div class="category-count">{{ category.count }}</div>
        </div>
      </div>
    </div>

    <!-- 分类美食展示 -->
    <section v-if="selectedCategory" class="category-foods-section">
      <div v-for="(food, index) in filteredFoods" :key="food.id" class="food-card-horizontal"
        :class="`color-theme-${(index % 5) + 1}`">
        <div class="food-card-horizontal-header">
          <h4 class="food-card-horizontal-name">{{ food.name }}</h4>
          <div class="food-card-horizontal-tags">
            <span v-for="(tag, tagIndex) in food.tags" :key="tagIndex" class="food-card-horizontal-tag"
              :class="`tag-color-${(tagIndex % 5) + 1}`">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="food-card-horizontal-image-container">
          <img :src="food.image" :alt="food.name" class="food-card-horizontal-image" loading="lazy"
            @error="handleImageError" />
          <div v-if="!food.image" class="image-placeholder">
            <span class="placeholder-icon">🍽️</span>
            <span class="placeholder-text">暂无图片</span>
          </div>
          <div class="food-card-horizontal-rating-badge">
            ⭐ {{ food.rating }}
          </div>
          <div v-if="food.price && Number(food.price) < 50" class="food-card-horizontal-discount">
            特价
          </div>
          <div class="food-card-horizontal-price-badge">¥{{ food.price }}</div>
        </div>
        <div class="food-card-horizontal-content">
          <div class="food-card-horizontal-main">
            {{ food.description }}
          </div>
          <div class="food-card-horizontal-footer">
            <div class="food-card-horizontal-recommendations">
              <div class="recommendations-header">
                <span class="recommendations-icon">💡</span>
                <span class="recommendations-title">推荐</span>
              </div>
              <div class="recommendations-content">
                <div class="recommendation-item">
                  <span class="recommendation-label-pairings">搭配：</span>
                  <span class="recommendation-value">
                    {{
                      food.recommendations?.pairings?.join('、') || '暂无推荐'
                    }}
                  </span>
                </div>
                <div class="recommendation-item">
                  <span class="recommendation-label-eating">吃法：</span>
                  <span class="recommendation-value">
                    {{ food.recommendations?.eatingMethod || '暂无推荐' }}
                  </span>
                </div>
              </div>
            </div>
            <div class="food-card-horizontal-actions">
              <button class="food-card-horizontal-favorite-btn" @click.stop>
                ❤️
              </button>
              <button class="food-card-horizontal-share-btn" @click.stop>
                📤
              </button>
              <button class="food-card-horizontal-add-btn" @click.stop>
                📋
              </button>
              <button class="food-card-horizontal-detail-btn" @click="$emit('select-food', food)">
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Food, FoodCategory } from '@/typesOfPages/travelGuide';
import { CategoriesBackground } from '@/pages/TravelGuide/icons/pages/food/index.ts';

interface Props {
  allFoods: Food[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'select-food', food: Food): void;
}>();

const selectedCategory = ref<FoodCategory | null>(null);

const CATEGORY_ICONS: Record<string, string> = {
  主食: '🍜',
  菜肴: '🍲',
  小吃: '🥟',
  甜品: '🍰',
  饮品: '🥤',
};

const foodCategories = computed<FoodCategory[]>(() => {
  return Object.entries(CATEGORY_ICONS).map(([name, icon], index) => ({
    id: index + 1,
    name,
    icon,
    count: props.allFoods.filter((food) => food.category === name).length,
  }));
});

const filteredFoods = computed<Food[]>(() => {
  if (!selectedCategory.value) return [];
  return props.allFoods.filter(
    (food) => food.category === selectedCategory.value?.name,
  );
});

const toggleCategory = (category: FoodCategory): void => {
  if (selectedCategory.value?.id !== category.id) {
    selectedCategory.value = category;
  }
};

const handleImageError = (event: Event): void => {
  const target = event.target as HTMLImageElement;
  target.style.display = 'none';
  const placeholder =
    target.parentElement?.querySelector('.image-placeholder');
  if (placeholder) {
    (placeholder as HTMLElement).style.display = 'flex';
  }
};

watch(
  foodCategories,
  (newCategories, oldCategories) => {
    if (newCategories.length !== oldCategories?.length) {
      if (newCategories.length > 0 && !selectedCategory.value) {
        selectedCategory.value = newCategories[0];
      }
    }
  },
  { immediate: true },
);
</script>

<style scoped lang="scss" src="./index.scss" />

<template>
  <section class="module-categories">
    <!-- SVG粒子特效 -->
    <div class="particles-container">
      <svg
        class="particles-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
      >
        <!-- 定义动画和滤镜 -->
        <defs>
          <!-- 星星发光滤镜 -->
          <filter
            id="starGlow"
            x="-500%"
            y="-500%"
            width="1000%"
            height="1000%"
          >
            <!-- 增强的模糊效果 -->
            <feGaussianBlur stdDeviation="12" result="blur1" />
            <feComposite
              in="SourceGraphic"
              in2="blur1"
              operator="over"
              result="glow1"
            />
            <!-- 更强烈的外层模糊 -->
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="20"
              result="blur2"
            />
            <feComposite in="glow1" in2="blur2" operator="over" />
          </filter>

          <!-- 粒子浮动动画 -->
          <animateTransform
            id="float1"
            attributeName="transform"
            type="translate"
            values="0 0; 50 50; 100 100; 50 150; 0 0"
            dur="15s"
            repeatCount="indefinite"
          />
          <animateTransform
            id="float2"
            attributeName="transform"
            type="translate"
            values="0 0; 30 30; 60 60; 30 90; 0 0"
            dur="12s"
            repeatCount="indefinite"
            begin="1s"
          />
          <animateTransform
            id="float3"
            attributeName="transform"
            type="translate"
            values="0 0; 70 70; 140 140; 70 210; 0 0"
            dur="18s"
            repeatCount="indefinite"
            begin="2s"
          />

          <!-- 粒子透明度动画 -->
          <animate
            id="fade1"
            attributeName="opacity"
            values="0.4; 0.6; 0.4"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            id="fade2"
            attributeName="opacity"
            values="0.3; 0.5; 0.3"
            dur="3s"
            repeatCount="indefinite"
            begin="0.5s"
          />
          <animate
            id="fade3"
            attributeName="opacity"
            values="0.2; 0.4; 0.2"
            dur="5s"
            repeatCount="indefinite"
            begin="1s"
          />
        </defs>

        <!-- 背景径向渐变 -->
        <circle cx="500" cy="500" r="500" fill="url(#bgGradient)" />
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(0, 255, 255, 0.02)" />
            <stop offset="50%" stop-color="rgba(255, 0, 127, 0.02)" />
            <stop offset="100%" stop-color="transparent" />
          </radialGradient>
        </defs>

        <!-- 粒子定义 -->
        <defs>
          <circle id="particle" cx="0" cy="0" r="1" />
        </defs>

        <!-- 动态生成的随机粒子 -->
        <g v-for="particle in particles" :key="particle.id">
          <circle
            :cx="particle.x"
            :cy="particle.y"
            r="2.5"
            :fill="particle.color"
            :opacity="particle.opacity"
            filter="url(#starGlow)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="particle.animationValues"
              :dur="particle.animationDuration"
              repeatCount="indefinite"
              :begin="particle.animationDelay"
            />
            <animate
              attributeName="opacity"
              :values="particle.opacityValues"
              :dur="particle.fadeDuration"
              repeatCount="indefinite"
              :begin="particle.fadeDelay"
            />
          </circle>
        </g>
      </svg>
    </div>

    <div class="section-header">
      <h3 class="section-title">🍽️ 美食分类</h3>
      <div class="categories-grid">
        <div
          v-for="(category, index) in foodCategories"
          :key="category.id"
          class="category-card"
          :class="{
            active: selectedCategory?.id === category.id,
            [`color-theme-${(index % 5) + 1}`]: true,
          }"
          @click="toggleCategory(category)"
        >
          <div class="category-icon">{{ category.icon }}</div>
          <div class="category-content">{{ category.name }}</div>
          <div class="category-count">{{ category.count }}</div>
        </div>
      </div>
    </div>

    <!-- 分类美食展示 -->
    <section v-if="selectedCategory" class="category-foods-section">
      <div
        v-for="(food, index) in filteredFoods"
        :key="food.id"
        class="food-card-horizontal"
        :class="`color-theme-${(index % 5) + 1}`"
      >
        <div class="food-card-horizontal-header">
          <h4 class="food-card-horizontal-name">{{ food.name }}</h4>
          <div class="food-card-horizontal-tags">
            <span
              v-for="(tag, tagIndex) in food.tags"
              :key="tagIndex"
              class="food-card-horizontal-tag"
              :class="`tag-color-${(tagIndex % 5) + 1}`"
              >{{ tag }}</span
            >
          </div>
        </div>
        <div class="food-card-horizontal-image-container">
          <img
            :src="food.image"
            :alt="food.name"
            class="food-card-horizontal-image"
          />
          <div class="food-card-horizontal-rating-badge">
            ⭐ {{ food.rating }}
          </div>
          <div
            class="food-card-horizontal-discount"
            v-if="food.price && food.price < 50"
          >
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
                  <span class="recommendation-value">{{
                    food.recommendations?.pairings?.join("、") || "暂无推荐"
                  }}</span>
                </div>
                <div class="recommendation-item">
                  <span class="recommendation-label-eating">吃法：</span>
                  <span class="recommendation-value">{{
                    food.recommendations?.eatingMethod || "暂无推荐"
                  }}</span>
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
              <button
                class="food-card-horizontal-detail-btn"
                @click="$emit('select-food', food)"
              >
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
import { ref, computed, watch } from "vue";
import type { Food, FoodCategory } from "@/types/travelGuide";

interface Props {
  allFoods: Food[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "select-food", food: Food): void;
}>();

const selectedCategory = ref<FoodCategory | null>(null);

const CATEGORY_ICONS: Record<string, string> = {
  主食: "🍜",
  菜肴: "🍲",
  小吃: "🥟",
  甜品: "🍰",
  饮品: "🥤",
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

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  opacity: number;
  animationValues: string;
  animationDuration: string;
  animationDelay: string;
  opacityValues: string;
  fadeDuration: string;
  fadeDelay: string;
}

const PARTICLE_COLORS = [
  "rgba(0, 255, 255, 0.8)",
  "rgba(255, 0, 127, 0.8)",
  "rgba(255, 255, 100, 0.8)",
  "rgba(0, 255, 127, 0.8)",
  "rgba(128, 0, 255, 0.8)",
];

const PARTICLE_COUNT = 100;

const particles = computed<Particle[]>(() => {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const color =
      PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    const opacity = Math.random() * 0.5 + 0.4;
    const animationDuration = Math.random() * 10 + 15;
    const animationDelay = Math.random() * 3;
    const fadeDuration = Math.random() * 3 + 1;
    const fadeDelay = Math.random() * 2;

    const dx1 = Math.random() * 30 + 10;
    const dy1 = Math.random() * 30 + 10;
    const dx2 = Math.random() * 60 + 20;
    const dy2 = Math.random() * 60 + 20;
    const dx3 = Math.random() * 90 + 30;
    const dy3 = Math.random() * 90 + 30;

    return {
      id: i,
      x,
      y,
      color,
      opacity,
      animationValues: `0 0; ${dx1} ${dy1}; ${dx2} ${dy2}; ${dx3} ${dy3}; 0 0`,
      animationDuration: `${animationDuration}s`,
      animationDelay: `${animationDelay}s`,
      opacityValues: `${opacity}; ${opacity + 0.5}; ${opacity}; ${opacity + 0.3}; ${opacity}`,
      fadeDuration: `${fadeDuration}s`,
      fadeDelay: `${fadeDelay}s`,
    };
  });
});
</script>

<style scoped lang="scss" src="./index.scss" />

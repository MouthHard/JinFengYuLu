<template>
  <section class="module-popular" v-if="popularFoods.length > 0">
    <!-- 黑客帝国风格背景线条 -->
    <svg
      class="matrix-background"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <!-- 随机线条 -->
      <line
        v-for="i in 25"
        :key="i"
        class="matrix-line"
        :x1="getRandomPosition()"
        :y1="getRandomPosition()"
        :x2="getLongLineEnd()"
        :y2="getLongLineEnd()"
        :stroke="getMatrixColor()"
        :stroke-width="getRandomWidth()"
        :style="{
          animationDelay: `${i * 0.2}s`,
          animationDuration: `${getRandomDuration()}s`,
        }"
      />
    </svg>

    <div class="section-header">
      <h3 class="section-title">🔥 热门推荐</h3>
      <button class="section-more">查看更多</button>
    </div>
    <div class="popular-grid">
      <div v-for="food in popularFoods" :key="food.id" class="popular-card">
        <!-- 图片区域 -->
        <div class="popular-card-image-container">
          <!-- 左侧三角形热门推荐标签 -->
          <div
            class="popular-card-badge"
            :style="{ '--badge-color': food.badgeColor || '#ff6b6b' }"
          >
            <span class="badge-text">{{ food.badgeText || "热门推荐" }}</span>
          </div>

          <div class="popular-card-image-wrapper">
            <img :src="food.image" class="popular-card-image" loading="lazy" />
          </div>
        </div>

        <!-- 卡片内容区域 -->
        <div class="popular-card-content">
          <div class="popular-card-header">
            <h4 class="popular-card-title">{{ food.name }}</h4>
            <div class="popular-card-title-rating">
              <el-rate
                :model-value="Number(food.rating)"
                :disabled="true"
                :max="5"
                :precision="1"
                show-score
                class="custom-element-rate popular-card-title-rate"
              />
            </div>
          </div>

          <div class="popular-card-tags">
            <span
              v-for="(tag, index) in food.tags"
              :key="index"
              class="popular-card-tag"
              :style="getColorByString(tag)"
            >
              {{ tag }}
            </span>
          </div>

          <p class="popular-card-description">{{ food.description }}</p>

          <div class="popular-card-footer">
            <div class="popular-card-price">
              <span class="price-symbol">¥</span>
              <span class="price-value">{{ food.price }}</span>
            </div>
            <div class="popular-card-actions">
              <button class="action-btn">了解详情</button>
              <button
                class="favorite-btn"
                :class="{ active: isFavorite(food.id) }"
                @click.stop="toggleFavorite(food.id)"
              >
                <svg
                  class="heart-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useFavorites } from "@/composables/useFavorites";
import { getColorByString } from "@/utils";
import type { Food } from "@/types/travelGuide";

interface Props {
  popularFoods: Food[];
}

const props = withDefaults(defineProps<Props>(), {
  popularFoods: () => [],
});

const { isFavorite, toggleFavorite } = useFavorites<Food>();

// 生成黑客帝国风格颜色
const usedColors = new Set<number>();
const colorPalette: number[][] = [
  [0, 255, 140],
  [34, 139, 34],
  [0, 255, 0],
  [144, 238, 144],
  [0, 200, 0],
  [50, 205, 50],
  [0, 255, 255],
  [0, 191, 255],
  [0, 139, 139],
  [147, 112, 219],
  [123, 104, 238],
  [64, 224, 208],
  [255, 215, 0],
  [255, 107, 107],
  [102, 126, 234],
  [255, 165, 0],
  [255, 192, 203],
  [152, 251, 152],
  [218, 112, 214],
  [255, 20, 147],
  [240, 128, 128],
  [173, 216, 230],
  [238, 130, 238],
];

const getMatrixColor = (): string => {
  const opacity = Math.random() * 0.5 + 0.4;

  if (usedColors.size >= colorPalette.length) {
    usedColors.clear();
  }

  let colorIndex: number;
  let rgb: number[];

  do {
    colorIndex = Math.floor(Math.random() * colorPalette.length);
    rgb = colorPalette[colorIndex];
  } while (usedColors.has(colorIndex));

  usedColors.add(colorIndex);

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
};

const getRandomWidth = (): number => {
  return Math.random() * 0.5 + 0.2;
};

const getRandomPosition = (): number => {
  return Math.random() * 100;
};

const getRandomDuration = (): number => {
  return Math.random() * 4 + 1;
};

const getLongLineEnd = (): number => {
  const direction = Math.random() > 0.5 ? 1 : -1;
  return direction > 0 ? 150 : -50;
};
</script>

<style scoped lang="scss" src="./index.scss" />

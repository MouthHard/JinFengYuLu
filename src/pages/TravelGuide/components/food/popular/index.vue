<template>
  <section v-if="popularFoods.length > 0" class="module-popular">
    <div class="cyber-bg">
      <ParticlesBackground />

      <div class="data-matrix">
        <div
          v-for="i in 30"
          :key="i"
          class="matrix-dot"
          :style="getMatrixDotStyle(i)"
        ></div>
      </div>
    </div>

    <div class="section-header">
      <div class="header-content">
        <div class="header-icon">🔥</div>
        <h3 class="section-title">
          <span class="title-main">热门推荐</span>
          <span class="title-sub">HOT RECOMMENDATION</span>
        </h3>
      </div>
      <button class="section-more">查看更多</button>
    </div>

    <div class="popular-grid">
      <div
        v-for="(food, index) in popularFoods"
        :key="food.id"
        class="popular-card"
        :style="{ '--card-index': index }"
      >
        <div class="card-frame">
          <div class="frame-corner top-left"></div>
          <div class="frame-corner top-right"></div>
          <div class="frame-corner bottom-left"></div>
          <div class="frame-corner bottom-right"></div>
          <div class="frame-edge top"></div>
          <div class="frame-edge right"></div>
          <div class="frame-edge bottom"></div>
          <div class="frame-edge left"></div>
        </div>

        <div class="card-hologram">
          <div class="holo-shimmer"></div>
        </div>

        <div class="card-image-section">
          <div class="image-frame">
            <div class="image-border"></div>
            <div class="image-glow"></div>
            <img :src="food.image" class="card-image" loading="lazy" />
            <div class="image-overlay"></div>
          </div>

          <div
            class="data-badge"
            :style="{ '--badge-color': food.badgeColor || '#ff6b6b' }"
          >
            <div class="badge-content">
              <span class="badge-icon">�?/span>
              <span class="badge-text">{{ food.badgeText || '热门' }}</span>
            </div>
            <div class="badge-glow"></div>
          </div>

          <div class="rating-display">
            <div class="rating-value">{{ food.rating }}</div>
            <div class="rating-label">评分</div>
          </div>
        </div>

        <div class="card-content-section">
          <div class="content-header">
            <div class="title-bar">
              <div class="title-indicator"></div>
              <h4 class="card-title">{{ food.name }}</h4>
            </div>
            <div class="title-id">
              ID: {{ String(food.id).padStart(4, '0') }}
            </div>
          </div>

          <div class="tag-cloud">
            <div
              v-for="(tag, tagIndex) in food.tags"
              :key="tagIndex"
              class="tag-item"
              :style="{
                '--tag-index': tagIndex,
                '--tag-border-color': getTagBorderColor(tag),
                ...getColorByString(tag),
              }"
            >
              <span class="tag-text">{{ tag }}</span>
            </div>
          </div>

          <div class="description-box">
            <div class="desc-header">
              <span class="desc-icon">i</span>
              <span class="desc-label">简�?/span>
            </div>
            <p class="card-description">{{ food.description }}</p>
          </div>

          <div class="action-bar">
            <div class="price-display">
              <div class="price-label">价格</div>
              <div class="price-value">
                <span class="currency">¥</span>
                <span class="amount">{{ food.price }}</span>
              </div>
              <div class="price-glow"></div>
            </div>

            <div class="action-buttons">
              <button class="btn-detail">
                <span class="btn-text">详情</span>
                <div class="btn-shine"></div>
              </button>
              <button
                class="btn-favorite"
                :class="{ active: isFavorite(food) }"
                @click.stop="toggleFavorite(food)"
              >
                <HeartIcon />
                <div class="btn-pulse"></div>
              </button>
            </div>
          </div>
        </div>

        <div class="data-flow">
          <div
            v-for="i in 5"
            :key="i"
            class="flow-line"
            :style="{ '--flow-delay': i * 0.2 + 's' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useFavorites } from '@/composables/travelGuide';
  import { getColorByString } from '@/utils';
  import type { Food } from '@/types/travelGuide';
  import {
    HeartIcon,
    ParticlesBackground,
  } from '@/pages/TravelGuide/icons/pages/food/index.ts';

  interface Props {
    popularFoods: Food[];
  }

  const props = withDefaults(defineProps<Props>(), {
    popularFoods: () => [],
  });

  const { isFavorite, toggleFavorite } = useFavorites<Food>();

  // 数据点阵样式生成
  const getMatrixDotStyle = (_index: number) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 2 + 1;
    const delay = Math.random() * 3;

    return {
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };
  };

  // Tag边框颜色生成
  const getTagBorderColor = (tag: string): string => {
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
      hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    // 返回HSL颜色，饱和度更高，亮度更亮，用于边框
    return `hsl(${hue}, 80%, 60%)`;
  };
</script>

<style scoped lang="scss" src="./index.scss" />

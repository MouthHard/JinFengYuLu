<template>
  <!-- 精选文创轮播 -->
  <div class="featured-carousel">
    <header>热门推荐</header>
    <div
      class="carousel-container"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- 轮播内容 -->
      <div class="carousel-wrapper">
        <div
          class="carousel-slides"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(product, index) in featuredProducts"
            :key="product.id || index"
            class="carousel-slide"
          >
            <!-- 产品图片 -->
            <div class="carousel-image">
              <img
                :src="product.image || getDefaultImage(index)"
                class="product-image"
                @error="handleImageError"
              />
            </div>

            <!-- 产品信息 -->
            <div class="carousel-content">
              <h3 class="carousel-title">{{ product.name }}</h3>
              <p class="carousel-desc">{{ product.description }}</p>
              <div class="carousel-action">
                <span class="carousel-price">¥{{ product.price }}</span>
                <button
                  class="carousel-buy-btn"
                  @click="handleBuyClick(product)"
                >
                  立即购买
                </button>
                <button
                  class="carousel-favorite-btn"
                  @click="handleFavoriteClick(product)"
                  aria-label="收藏"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  class="carousel-collect-btn"
                  @click="handleCollectClick(product)"
                  aria-label="喜爱"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  class="carousel-share-btn"
                  @click="handleShareClick(product)"
                  aria-label="分享"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <polyline
                      points="16 6 12 2 8 6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 导航按钮 -->
      <button
        v-if="featuredProducts.length > 1"
        class="carousel-btn prev"
        @click="prevSlide"
        aria-label="上一张"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        v-if="featuredProducts.length > 1"
        class="carousel-btn next"
        @click="nextSlide"
        aria-label="下一张"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- 精美指示器 -->
      <div v-if="featuredProducts.length > 1" class="carousel-indicators">
        <button
          v-for="(product, index) in featuredProducts"
          :key="`indicator-${index}`"
          class="indicator"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
          :aria-label="`跳转到第${index + 1}张`"
        >
          <!-- 外层装饰环 -->
          <svg
            class="indicator-outer-ring"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <defs>
              <linearGradient
                :id="`outerGrad-${index}`"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style="stop-color: #5d4037; stop-opacity: 0.6"
                />
                <stop
                  offset="100%"
                  style="stop-color: #3e2723; stop-opacity: 0.6"
                />
              </linearGradient>
            </defs>
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              :stroke="`url(#outerGrad-${index})`"
              stroke-width="2"
              stroke-dasharray="5 3"
            />
          </svg>

          <!-- 中层旋转装饰 -->
          <svg
            class="indicator-spin-ring"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <defs>
              <linearGradient
                :id="`spinGrad-${index}`"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style="stop-color: #4e342e; stop-opacity: 0.7"
                />
                <stop
                  offset="100%"
                  style="stop-color: #3e2723; stop-opacity: 0.7"
                />
              </linearGradient>
            </defs>
            <path
              d="M16 2 L18 6 L22 6 L19 9 L20 13 L16 11 L12 13 L13 9 L10 6 L14 6 Z"
              fill="none"
              :stroke="`url(#spinGrad-${index})`"
              stroke-width="1.5"
            />
          </svg>

          <!-- 内层核心图标 - 故宫风格花纹 -->
          <svg
            class="indicator-core"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient
                :id="`coreGrad-${index}`"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style="stop-color: #5d4037" />
                <stop offset="50%" style="stop-color: #4e342e" />
                <stop offset="100%" style="stop-color: #3e2723" />
              </linearGradient>
              <filter
                :id="`glow-${index}`"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <!-- 中心圆点 -->
            <circle
              cx="12"
              cy="12"
              r="6"
              :fill="`url(#coreGrad-${index})`"
              :filter="`url(#glow-${index})`"
            />
            <!-- 四角装饰 -->
            <circle
              cx="12"
              cy="6"
              r="2"
              :fill="`url(#coreGrad-${index})`"
              opacity="0.8"
            />
            <circle
              cx="12"
              cy="18"
              r="2"
              :fill="`url(#coreGrad-${index})`"
              opacity="0.8"
            />
            <circle
              cx="6"
              cy="12"
              r="2"
              :fill="`url(#coreGrad-${index})`"
              opacity="0.8"
            />
            <circle
              cx="18"
              cy="12"
              r="2"
              :fill="`url(#coreGrad-${index})`"
              opacity="0.8"
            />
          </svg>

          <!-- 激活状态的额外装饰 -->
          <svg
            v-if="index === currentSlide"
            class="indicator-active-glow"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <defs>
              <radialGradient id="activeGlow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  style="stop-color: #d2691e; stop-opacity: 0.9"
                />
                <stop
                  offset="50%"
                  style="stop-color: #8b4513; stop-opacity: 0.5"
                />
                <stop
                  offset="100%"
                  style="stop-color: #5d4037; stop-opacity: 0"
                />
              </radialGradient>
            </defs>
            <circle cx="24" cy="24" r="22" fill="url(#activeGlow)" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import type { CreativeProduct } from "@/types/museum/index";

const props = defineProps<{
  creativeProducts: CreativeProduct[];
}>();

const emit = defineEmits<{
  (e: "buy", product: CreativeProduct): void;
}>();

const currentSlide = ref(0);
let autoSlideInterval: number | null = null;
const isHovering = ref(false);

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});

// 开始自动轮播
const startAutoSlide = () => {
  if (
    !isHovering.value &&
    !autoSlideInterval &&
    featuredProducts.value.length > 1
  ) {
    autoSlideInterval = window.setInterval(() => {
      nextSlide();
    }, 5000);
  }
};

// 暂停自动轮播
const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

// 处理鼠标悬停
const handleMouseEnter = () => {
  isHovering.value = true;
  stopAutoSlide();
};

// 处理鼠标离开
const handleMouseLeave = () => {
  isHovering.value = false;
  startAutoSlide();
};

// 精选文创产品（用于轮播）
const featuredProducts = computed(() => {
  return props.creativeProducts.slice(0, 5); // 最多显示5个产品
});

// 轮播控制
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % featuredProducts.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + featuredProducts.value.length) %
    featuredProducts.value.length;
};

// 跳转到指定幻灯片
const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// 处理购买点击
const handleBuyClick = (product: CreativeProduct) => {
  emit("buy", product);
};

// 处理收藏点击
const handleFavoriteClick = (product: CreativeProduct) => {
  // 这里可以添加收藏逻辑
  console.log("收藏产品:", product.name);
};

// 处理喜爱点击
const handleCollectClick = (product: CreativeProduct) => {
  // 这里可以添加喜爱逻辑
  console.log("喜爱产品:", product.name);
};

// 处理分享点击
const handleShareClick = (product: CreativeProduct) => {
  // 这里可以添加分享逻辑
  console.log("分享产品:", product.name);
};

// 处理图片加载错误
const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = getDefaultImage(currentSlide.value);
};

// 获取默认图片
const getDefaultImage = (index: number) => {
  // 这里可以返回默认图片路径，或者使用占位图服务
  const defaultImages = [
    "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20cultural%20creative%20product%2C%20elegant%20design%2C%20traditional%20patterns%2C%20high%20quality%20photography&image_size=landscape_16_9",
  ];
  return defaultImages[index % defaultImages.length];
};
</script>

<style lang="scss" scoped src="./index.scss"></style>

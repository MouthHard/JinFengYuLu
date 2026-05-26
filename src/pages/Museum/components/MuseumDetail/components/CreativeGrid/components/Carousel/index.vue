<template>
  <div class="featured-carousel">
    <header>热门推荐</header>
    <div
      class="carousel-container"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
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
            <div class="carousel-image">
              <img loading="lazy"                 :src="product.image || getDefaultImage(index)"
                class="product-image"
                @error="handleImageError"
              />
            </div>

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
                  aria-label="收藏"
                  @click="handleFavoriteClick(product)"
                >
                  <StarIcon />
                </button>
                <button
                  class="carousel-collect-btn"
                  aria-label="喜爱"
                  @click="handleCollectClick(product)"
                >
                  <HeartIcon />
                </button>
                <button
                  class="carousel-share-btn"
                  aria-label="分享"
                  @click="handleShareClick(product)"
                >
                  <ShareIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        v-if="featuredProducts.length > 1"
        class="carousel-btn prev"
        aria-label="上一张"
        @click="prevSlide"
      >
        <CornArrowIcon />
      </button>
      <button
        v-if="featuredProducts.length > 1"
        class="carousel-btn next"
        aria-label="下一张"
        @click="nextSlide"
      >
        <CornArrowIcon />
      </button>

      <div v-if="featuredProducts.length > 1" class="carousel-indicators">
        <button
          v-for="(_, index) in featuredProducts"
          :key="`indicator-${index}`"
          class="indicator"
          :class="{ active: index === currentSlide }"
          :aria-label="`跳转到第${index + 1}张`"
          @click="goToSlide(index)"
        >
          <CarouselIndicatorIcon :is-active="index === currentSlide" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import type { CreativeProduct } from '@/typesOfPages/museum/index';
  import {
    StarIcon,
    HeartIcon,
    ShareIcon,
    CarouselIndicatorIcon,
    CornArrowIcon,
  } from '@/pages/Museum/icon/pages/CreativeProduct';

  const props = defineProps<{
    creativeProducts: CreativeProduct[];
  }>();

  const emit = defineEmits<{
    (e: 'buy', product: CreativeProduct): void;
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

  const stopAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  };

  const handleMouseEnter = () => {
    isHovering.value = true;
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    isHovering.value = false;
    startAutoSlide();
  };

  // 最多显示5个产品
  const featuredProducts = computed(() => {
    return props.creativeProducts.slice(0, 5);
  });

  const nextSlide = () => {
    currentSlide.value =
      (currentSlide.value + 1) % featuredProducts.value.length;
  };

  const prevSlide = () => {
    currentSlide.value =
      (currentSlide.value - 1 + featuredProducts.value.length) %
      featuredProducts.value.length;
  };

  const goToSlide = (index: number) => {
    currentSlide.value = index;
  };

  const handleBuyClick = (product: CreativeProduct) => {
    emit('buy', product);
  };

  const handleFavoriteClick = (product: CreativeProduct) => {
    console.log('收藏产品:', product.name);
  };

  const handleCollectClick = (product: CreativeProduct) => {
    console.log('喜爱产品:', product.name);
  };

  const handleShareClick = (product: CreativeProduct) => {
    console.log('分享产品:', product.name);
  };

  const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = getDefaultImage(currentSlide.value);
  };

  const getDefaultImage = (index: number) => {
    const defaultImages = [
      'https://file.8kraw.com/photo/w1000w/2026-03/1268f1a87c89e4b9ef47aa6ac5fd509d_w1000w.jpg ',
    ];
    return defaultImages[index % defaultImages.length];
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>

<template>
  <div class="scenery-gallery">
    <div v-if="sceneryGallery.length > 0" class="carousel-container">
      <GalleryBackground />

      <div class="carousel-header">
        <div class="header-content">
          <div class="icon-container">
            <GalleryPanelIcon class="panel-icon" />
          </div>

          <div class="text-content">
            <p class="section-title">风光画廊</p>
            <p class="section-subtitle">
              探索目的地的绝美风光，感受自然与人文魅力
            </p>
          </div>
        </div>
      </div>

      <div
        class="carousel-wrapper"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(image, index) in sceneryGallery"
          :key="index"
          class="carousel-item"
        >
          <div class="carousel-content">
            <div class="carousel-image-container">
              <img loading="lazy" :src="image.url" class="carousel-image" />
            </div>
            <div class="carousel-description-container">
              <div class="carousel-title-row">
                <h4 class="carousel-title">{{ image.title }}</h4>
                <span class="carousel-rating">
                  <span class="rating-icon">⭐</span>
                  {{ image.rating || 5.0 }}
                </span>
              </div>
              <p class="carousel-description">{{ image.description }}</p>
              <div class="carousel-info">
                <span class="info-item">
                  <span class="info-icon">📍</span>
                  {{ image.location || '景区 ' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-controls">
        <button
          class="carousel-control prev"
          aria-label="上一个"
          @click="prevSlide"
        >➫</button>
        <button
          class="carousel-control next"
          aria-label="下一个"
          @click="nextSlide"
        >➫</button>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">🖼️</div>
      <h4 class="empty-title">暂无风光图片</h4>
      <p class="empty-description">该地区暂无风光图片数</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import type { ScenerySpot, SceneryData } from '@/typesOfPages/travelGuide';
  import {
    GalleryBackground,
    GalleryPanelIcon,
  } from '@/pages/TravelGuide/icons/pages/scenery';

  const props = defineProps<{
    sceneryData?: SceneryData;
  }>();

  const currentSlide = ref(0);

  // 使用计算属性替代方法，避免每次渲染都返回新数组
  const sceneryGallery = computed(() => {
    // 从props获取数据，如果没有则返回空数组
    if (props.sceneryData?.spots && props.sceneryData.spots.length > 0) {
      return props.sceneryData.spots.slice(0, 3).map((spot: ScenerySpot) => ({
        url: spot.image,
        title: spot.name,
        description: spot.description,
        location: spot.location,
        rating: spot.rating,
      }));
    }

    return [];
  });

  const prevSlide = () => {
    const totalSlides = sceneryGallery.value.length;
    if (totalSlides <= 1) return;

    if (currentSlide.value === 0) {
      currentSlide.value = totalSlides - 1;
    } else {
      currentSlide.value--;
    }
  };

  const nextSlide = () => {
    const totalSlides = sceneryGallery.value.length;
    if (totalSlides <= 1) return;

    if (currentSlide.value === totalSlides - 1) {
      currentSlide.value = 0;
    } else {
      currentSlide.value++;
    }
  };
</script>

<style scoped lang="scss" src="./index.scss"></style>

<template>
  <section class="featured-section">
    <div class="section-header">
      <div class="title-decoration"></div>
      <h2 class="section-title">
        <span class="title-icon">🎬</span>
        <span class="title-text">山河流转</span>
        <span class="title-subtitle">· 精选影像集</span>
      </h2>
      <div class="title-decoration right"></div>
    </div>

    <div
      class="carousel-container"
      @mouseenter="pauseAutoPlay"
      @mouseleave="resumeAutoPlay"
    >
      <div v-if="slides.length > 0" class="carousel-content">
        <div class="carousel-perspective">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(slide, i) in slides"
              :key="slide.id || `slide-${i}`"
              class="carousel-slide"
              :class="{ active: currentSlide === i }"
            >
              <div class="slide-image">
                <img :src="slide.image" loading="lazy" @load="onImageLoad(i)" />

                <!-- 媒体类型标识 -->
                <div class="media-type-badge">
                  <div class="media-icon">
                    <PlayIcon v-if="slide.mediaType === 'video'" />
                    <ImageFilledIcon v-else />
                  </div>
                  <span class="media-text">
                    {{ slide.mediaType === 'video' ? '视频' : '图片' }}
                  </span>
                  <div
                    class="quality-tag"
                    :class="`quality-${slide.quality.toLowerCase().replace(/[^a-z0-9]/g, '')}`"
                  >
                    {{ slide.quality }}
                  </div>
                </div>

                <!-- 视频时长标识 -->
                <div
                  v-if="slide.mediaType === 'video' && slide.duration"
                  class="video-duration-badge"
                >
                  <ClockIcon />
                  <span>{{ formatDuration(slide.duration) }}</span>
                </div>

                <div class="slide-overlay">
                  <div class="slide-content">
                    <div class="category-badge">
                      <span class="badge-icon">{{ slide.icon }}</span>
                      <span class="badge-text">{{ slide.category }}</span>
                    </div>
                    <h3 class="slide-title">{{ slide.title }}</h3>
                    <p class="slide-location">
                      <LocationIcon class="location-icon" :stroke-width="2" />
                      {{ slide.location }}
                    </p>
                    <div class="slide-stats">
                      <div class="stat">
                        <ThumbUpIcon
                          :filled="
                            interactionStore.isLiked(getSlideId(slide.id))
                          "
                        />
                        <span>
                          {{
                            fmt(
                              interactionStore.getCount(getSlideId(slide.id))
                                .likes,
                            )
                          }}
                        </span>
                      </div>
                      <div class="stat">
                        <HeartIcon
                          :filled="
                            interactionStore.isLoved(getSlideId(slide.id))
                          "
                        />
                        <span>
                          {{
                            fmt(
                              interactionStore.getCount(getSlideId(slide.id))
                                .loves,
                            )
                          }}
                        </span>
                      </div>
                      <div class="stat">
                        <BookmarkIcon
                          :filled="
                            interactionStore.isFavorited(getSlideId(slide.id))
                          "
                        />
                        <span>
                          {{
                            fmt(
                              interactionStore.getCount(getSlideId(slide.id))
                                .favorites,
                            )
                          }}
                        </span>
                      </div>
                      <div class="stat">
                        <EyeIcon />
                        <span>
                          {{
                            fmt(
                              interactionStore.getCount(getSlideId(slide.id))
                                .views,
                            )
                          }}
                        </span>
                      </div>
                      <div class="stat">
                        <ShareIcon />
                        <span>
                          {{
                            fmt(
                              interactionStore.getCount(getSlideId(slide.id))
                                .shares,
                            )
                          }}
                        </span>
                      </div>
                    </div>
                    <div class="action-buttons">
                      <button
                        class="action-btn like"
                        :class="{
                          active: interactionStore.isLiked(
                            getSlideId(slide.id),
                          ),
                        }"
                        title="点赞"
                        @click="handleToggleLike(slide)"
                      >
                        <ThumbUpIcon
                          :filled="
                            interactionStore.isLiked(getSlideId(slide.id))
                          "
                        />
                      </button>
                      <button
                        class="action-btn love"
                        :class="{
                          active: interactionStore.isLoved(
                            getSlideId(slide.id),
                          ),
                        }"
                        title="喜爱"
                        @click="handleToggleLove(slide)"
                      >
                        <HeartIcon
                          :filled="
                            interactionStore.isLoved(getSlideId(slide.id))
                          "
                        />
                      </button>
                      <button
                        class="action-btn favorite"
                        :class="{
                          active: interactionStore.isFavorited(
                            getSlideId(slide.id),
                          ),
                        }"
                        title="收藏"
                        @click="handleToggleFavorite(slide)"
                      >
                        <BookmarkIcon
                          :filled="
                            interactionStore.isFavorited(getSlideId(slide.id))
                          "
                        />
                      </button>
                      <button
                        class="action-btn share"
                        title="分享"
                        @click="handleShare(slide)"
                      >
                        <ShareIcon />
                      </button>
                      <button
                        class="action-btn download"
                        title="下载"
                        @click="handleDownload(slide)"
                      >
                        <DownloadIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }"
          ></div>
        </div>

        <div class="carousel-controls">
          <button class="control-btn prev" @click="prevSlide">➢</button>
          <div class="slide-counter">
            <span class="current">
              {{ String(currentSlide + 1).padStart(2, '0') }}
            </span>
            <span class="divider">/</span>
            <span class="total">
              {{ String(totalSlides).padStart(2, '0') }}
            </span>
          </div>
          <button class="control-btn next" @click="nextSlide">➢</button>
        </div>
      </div>
      <div v-else class="empty-state">
        <div class="empty-icon">🎬</div>
        <h3>暂无精选影像</h3>
        <p>敬请期待精彩内容</p>
      </div>
    </div>

    <div v-if="slides.length > 0" class="carousel-dots">
      <button
        v-for="i in totalSlides"
        :key="i"
        :class="['dot', { active: currentSlide === i - 1 }]"
        @click="goToSlide(i - 1)"
      >
        <DotActiveIcon v-if="currentSlide === i - 1" class="icon" />
        <DotInactiveIcon v-else class="icon" />
      </button>
    </div>

    <ShareMenu
      v-model:visible="showShareMenu"
      :title="currentShareSlide?.title"
      @share="handleSharePlatform"
    />
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useHomeViewData } from '@/composables/landscape';
  import { useInteractionStore } from '@/stores/landscape';
  import {
    formatNumber as fmt,
    formatDuration,
  } from '@/utils/landscape/format';
  import { convertSlideToInteractionItem } from '@/utils/landscape/interaction';

  const { featuredSlides } = useHomeViewData();
  const slides = featuredSlides();
  const totalSlides = slides.length;
  import ShareMenu from '../../../common/ShareMenu/index.vue';
  import type { InteractionItem } from '@/typesOfPages/landscape';
  import { showMessage } from '@/utils/landscape';
  import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
  import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
  import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
  import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
  import DownloadIcon from '@/pages/Landscape/icon/common/DownloadIcon.vue';
  import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
  import PlayIcon from '@/pages/Landscape/icon/common/PlayIcon.vue';
  import ClockIcon from '@/pages/Landscape/icon/common/ClockIcon.vue';
  import LocationIcon from '@/pages/Landscape/icon/common/LocationIcon.vue';
  import ImageFilledIcon from '@/pages/Landscape/icon/components/home/FeaturedCarousel/ImageFilledIcon.vue';
  import DotActiveIcon from '@/pages/Landscape/icon/components/home/FeaturedCarousel/DotActiveIcon.vue';
  import DotInactiveIcon from '@/pages/Landscape/icon/components/home/FeaturedCarousel/DotInactiveIcon.vue';

  const interactionStore = useInteractionStore();

  const currentSlide = ref(0);
  let autoPlayTimer: number | null = null;
  const showShareMenu = ref(false);
  const currentShareSlide = ref<(typeof slides)[0] | null>(null);

  const prevSlide = () => {
    currentSlide.value =
      currentSlide.value > 0 ? currentSlide.value - 1 : totalSlides - 1;
  };

  const nextSlide = () => {
    currentSlide.value =
      currentSlide.value < totalSlides - 1 ? currentSlide.value + 1 : 0;
  };

  const goToSlide = (index: number) => {
    currentSlide.value = index;
  };

  const startAutoPlay = () => {
    autoPlayTimer = window.setInterval(() => {
      if (!document.hidden) {
        nextSlide();
      }
    }, 5000);
  };

  const pauseAutoPlay = () => {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  };

  const resumeAutoPlay = () => {
    startAutoPlay();
  };

  const onImageLoad = (index: number) => {
    console.log(`Image ${index + 1} loaded`);
  };

  const getSlideId = (id: string) => `fc-${id}`;

  const convertToInteractionItem = (
    slide: (typeof slides)[0],
  ): InteractionItem => {
    return convertSlideToInteractionItem(
      slide,
      (id) => interactionStore.getCount(id),
      'fc-',
    );
  };

  const handleToggleFavorite = (slide: (typeof slides)[0]) => {
    const item = convertToInteractionItem(slide);
    const isAdded = interactionStore.toggleFavorite(item);
    const mediaType = slide.mediaType === 'video' ? 'video' : 'image';
    if (isAdded) {
      showMessage.favorite.success(slide.title, mediaType);
    } else {
      showMessage.favorite.cancel(slide.title, mediaType);
    }
  };

  const handleToggleLove = (slide: (typeof slides)[0]) => {
    const item = convertToInteractionItem(slide);
    const isAdded = interactionStore.toggleLove(item);
    const mediaType = slide.mediaType === 'video' ? 'video' : 'image';
    if (isAdded) {
      showMessage.love.success(slide.title, mediaType);
    } else {
      showMessage.love.cancel(slide.title, mediaType);
    }
  };

  const handleToggleLike = (slide: (typeof slides)[0]) => {
    const item = convertToInteractionItem(slide);
    const isAdded = interactionStore.toggleLike(item);
    if (isAdded) {
      showMessage.like.success(slide.title);
    } else {
      showMessage.like.cancel();
    }
  };

  const handleShare = (slide: (typeof slides)[0]) => {
    currentShareSlide.value = slide;
    showShareMenu.value = true;
  };

  interface Platform {
    id: string;
    name: string;
    gradient: string;
    icon: any;
  }

  const handleSharePlatform = (_platform: Platform) => {
    if (currentShareSlide.value) {
      interactionStore.incrementShares(getSlideId(currentShareSlide.value.id));
    }
  };

  const handleDownload = async (slide: (typeof slides)[0]) => {
    try {
      const response = await fetch(slide.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${slide.title}-${slide.id}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      showMessage.download.success(slide.title);
    } catch (error) {
      console.error('Download failed:', error);
      showMessage.download.error();
      window.open(slide.image, '_blank');
    }
  };

  onMounted(() => {
    startAutoPlay();
    interactionStore.registerBatch(
      slides.map((s) => ({
        id: getSlideId(s.id),
        counts: {
          likes: s.likes || 0,
          views: s.views || 0,
          loves: s.loves || 0,
          favorites: s.favorites || 0,
          shares: s.shares || 0,
        },
      })),
    );
  });

  onUnmounted(() => {
    pauseAutoPlay();
  });
</script>

<style scoped lang="scss" src="./index.scss" />

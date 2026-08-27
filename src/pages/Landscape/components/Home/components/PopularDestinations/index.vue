<template>
  <section class="popular-destinations">
    <div class="section-header">
      <div class="header-left">
        <span class="title-label">DESTINATIONS</span>
        <h2 class="section-title">梦境之地</h2>
        <p class="section-subtitle">探索世界最令人向往的旅行目的地</p>
      </div>
      <button class="more-btn" @click="handleMore">
        <RefreshIcon class="refresh-icon" :stroke-width="2" />
        <span class="btn-label">刷新</span>
        <span class="btn-shine"></span>
      </button>
    </div>

    <div v-if="destinations.length > 0" class="destinations-gallery">
      <div class="gallery-track">
        <div
          v-for="(dest, index) in destinations"
          :key="dest.id"
          class="gallery-item"
          :class="{ 'item-large': index === 0, 'item-wide': index === 3 }"
          :style="{ '--delay': `${index * 0.15}s` }"
          @mouseenter="activeDestination = dest.id"
          @mouseleave="activeDestination = null"
        >
          <!-- 背景图片 -->
          <div class="item-background">
            <img :src="dest.images.spring" :alt="dest.name" loading="lazy" />
            <div class="background-overlay"></div>
          </div>

          <!-- 悬浮信息卡片 -->
          <div
            class="item-content"
            :class="{ active: activeDestination === dest.id }"
          >
            <div class="content-tags">
              <span class="tag tag-season">
                <ClockIcon :stroke-width="2" />
                {{ dest.bestTime }}
              </span>
              <span class="tag tag-views">
                <EyeIcon :stroke-width="2" />
                {{ dest.views }}
              </span>
            </div>

            <div class="content-main">
              <div class="title-row">
                <h3 class="dest-name">{{ dest.name }}</h3>
                <div class="location-badge">
                  <LocationIcon :stroke-width="2" />
                  <span>{{ dest.country }}</span>
                </div>
              </div>

              <div class="rating-row">
                <div class="stars">
                  <span
                    v-for="i in 5"
                    :key="i"
                    :class="['star', { filled: i <= dest.rating }]"
                  >
                    �?                  </span>
                </div>
                <span class="score">{{ dest.score }}</span>
                <span class="photos-count">
                  <ImageIcon :stroke-width="2" />
                  {{ dest.photos }} 张照�?                </span>
              </div>

              <p class="dest-tips">{{ dest.tips }}</p>

              <div class="dest-stats">
                <span class="stat-item">
                  <EyeIcon :stroke-width="2" />
                  {{ fmt(getDestCount(dest.id).views) }}
                </span>
                <button class="stat-item stat-interactive stat-like" :class="{ active: localLikes.has(getDestId(dest.id)) }" @click.stop="handleToggleLike(dest)">
                  <ThumbUpIcon :stroke-width="2" :filled="localLikes.has(getDestId(dest.id))" />
                  {{ fmt(getDestCount(dest.id).likes) }}
                </button>
                <span class="stat-item stat-love">
                  <HeartIcon :stroke-width="2" />
                  {{ fmt(getDestCount(dest.id).loves) }}
                </span>
                <span class="stat-item stat-favorite">
                  <BookmarkIcon :stroke-width="2" />
                  {{ fmt(getDestCount(dest.id).favorites) }}
                </span>
                <button class="stat-item stat-interactive stat-share" @click.stop="handleShare(dest)">
                  <ShareIcon :stroke-width="2" />
                  {{ fmt(getDestCount(dest.id).shares) }}
                </button>
              </div>
            </div>

            <button class="explore-btn" @click="handleExplore(dest)">探索此地</button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <LocationIcon :stroke-width="1.5" />
      </div>
      <p class="empty-text">暂无热门目的�?/p>
      <span class="empty-hint">精彩目的地即将呈�?/span>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import RefreshIcon from '@/pages/Landscape/icon/components/home/PopularDestinations/RefreshIcon.vue';
  import ClockIcon from '@/pages/Landscape/icon/common/ClockIcon.vue';
  import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
  import LocationIcon from '@/pages/Landscape/icon/common/LocationIcon.vue';
  import ImageIcon from '@/pages/Landscape/icon/common/ImageIcon.vue';
  import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
  import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
  import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
  import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
  import { useInteractionStore, useLandscapeDataStore } from '@/stores/landscape';
  import type { Destination } from '@/types/landscape/home';
  import { showMessage } from '@/utils/landscape';
  import { formatNumber as fmt } from '@/utils/landscape/format';

  const router = useRouter();
  const interactionStore = useInteractionStore();
  const dataStore = useLandscapeDataStore();
  const activeDestination = ref<number | null>(null);
  const localLikes = ref<Set<string>>(new Set());

  const destinations = computed(() => dataStore.getAllPopularDestinations());

  const getDestId = (id: string | number) => `pd-${id}`;
  const getDestCount = (id: string | number) => interactionStore.getCount(getDestId(id));

  const handleToggleLike = (dest: Destination) => {
    const dId = getDestId(dest.id);
    const newSet = new Set(localLikes.value);
    if (newSet.has(dId)) {
      newSet.delete(dId);
      interactionStore.decrementLikes(dId);
      showMessage.like.cancel();
    } else {
      newSet.add(dId);
      interactionStore.incrementLikes(dId);
      showMessage.like.success(dest.name);
    }
    localLikes.value = newSet;
  };

  const handleShare = (dest: Destination) => {
    interactionStore.incrementShares(getDestId(dest.id));
    showMessage.share.success(dest.name);
  };

  const handleMore = () => {
    console.log('查看更多目的�?);
  };

  const handleExplore = (dest: Destination) => {
    if (dest.navigation) {
      router.push({
        path: '/landscape/category',
        query: {
          dimension: dest.navigation.dimension,
          category: dest.navigation.category,
          subCategory: dest.navigation.subCategory,
        },
      });
    }
  };

  watch(
    () => destinations.value.length,
    (len) => {
      if (len === 0) return;
      interactionStore.registerBatch(
        destinations.value.map((dest) => ({
          id: getDestId(dest.id),
          counts: {
            likes: dest.likes || 0,
            views: parseInt(dest.views.replace(/,/g, '')) || 0,
            loves: dest.loves || 0,
            favorites: dest.favorites || 0,
            shares: dest.shares || 0,
          },
        }))
      );
    },
    { immediate: true },
  );
</script>

<style scoped lang="scss" src="./index.scss" />

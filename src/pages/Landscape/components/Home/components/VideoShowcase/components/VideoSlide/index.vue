<template>
  <div
    :class="['coverflow-slide', { active: isActive }]"
    :style="slideStyle"
    @click="$emit('click')"
  >
    <div class="slide-inner">
      <div class="slide-poster" @click.stop="isActive && $emit('play')">
        <img loading="lazy" :src="video.poster" :alt="video.title" />
        <div class="poster-glow"></div>
        <div class="film-grain"></div>

        <div v-if="isActive" class="slide-play">
          <div class="play-ring-outer"></div>
          <div class="play-ring-inner"></div>
          <PlayIcon />
        </div>

        <div class="slide-duration">{{ video.duration }}</div>
      </div>

      <div v-if="isActive" class="slide-info">
        <div class="info-row-top">
          <span class="category-tag" :data-category="video.category">
            {{ video.category }}
          </span>
          <span class="info-location">{{ video.location }}</span>
        </div>
        <h3 class="info-title">{{ video.title }}</h3>
        <div class="info-row-bottom">
          <div class="info-author">
            <img loading="lazy" :src="video.authorAvatar" :alt="video.authorName" />
            <span>{{ video.authorName }}</span>
          </div>
        </div>
        <div class="info-actions">
          <span class="act-item act-views">
            <EyeIcon :stroke-width="2" />
            <span>{{ formatNumber(counts.views) }}</span>
          </span>
          <button
            class="act-item act-like"
            :class="{ active: isLiked }"
            @click.stop="$emit('like')"
          >
            <ThumbUpIcon :filled="isLiked" />
            <span>{{ formatNumber(counts.likes) }}</span>
          </button>
          <button
            class="act-item act-love"
            :class="{ active: isLoved }"
            @click.stop="$emit('love')"
          >
            <HeartIcon :filled="isLoved" />
            <span>{{ formatNumber(counts.loves) }}</span>
          </button>
          <button
            class="act-item act-bookmark"
            :class="{ active: isFavorited }"
            @click.stop="$emit('favorite')"
          >
            <BookmarkIcon :filled="isFavorited" :stroke-width="2" />
            <span>{{ formatNumber(counts.favorites) }}</span>
          </button>
          <button class="act-item act-share" @click.stop="$emit('share')">
            <ShareIcon :stroke-width="2" />
            <span>{{ formatNumber(counts.shares) }}</span>
          </button>
          <button class="act-item act-download">
            <DownloadIcon :stroke-width="2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CSSProperties } from 'vue';
import { formatNumber } from '@/utils/landscape/format';
import PlayIcon from '@/pages/Landscape/icon/common/PlayIcon.vue';
import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
import DownloadIcon from '@/pages/Landscape/icon/common/DownloadIcon.vue';

interface Video {
  id: string | number;
  poster: string;
  title: string;
  duration: string;
  category: string;
  location: string;
  authorAvatar: string;
  authorName: string;
}

interface Counts {
  views: number;
  likes: number;
  loves: number;
  favorites: number;
  shares: number;
}

defineProps<{
  video: Video;
  isActive: boolean;
  slideStyle: CSSProperties;
  counts: Counts;
  isLiked: boolean;
  isLoved: boolean;
  isFavorited: boolean;
}>();

defineEmits<{
  click: [];
  play: [];
  like: [];
  love: [];
  favorite: [];
  share: [];
}>();
</script>

<style scoped lang="scss" src="./index.scss" />

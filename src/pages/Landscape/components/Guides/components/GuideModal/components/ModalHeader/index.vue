<template>
  <div class="modal-header">
    <div class="modal-hero">
      <img loading="lazy" :src="guide.cover" :alt="guide.title" />
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-content">
        <div class="modal-badges">
          <span v-if="guide.travelMode" :class="['badge', 'mode', `mode-${travelModeClass}`]">{{ guide.travelMode }}</span>
          <span v-if="guide.sceneryTheme" class="badge theme">{{ guide.sceneryTheme }}</span>
          <span :class="['badge', 'diff', guide.difficulty || 'intermediate']">{{ difficultyLabel }}</span>
        </div>
        <h1 class="modal-title">{{ guide.title }}</h1>
      </div>
    </div>

    <div class="modal-meta-wrapper">
      <div class="modal-meta">
        <div class="meta-author">
          <img loading="lazy" :src="guide.authorAvatar" :alt="guide.author" />
          <div class="author-info">
            <span class="author-name">{{ guide.author }}</span>
            <span v-if="guide.category" :class="['author-badge', `mode-${travelModeClass}`]">{{ guide.category }}</span>
          </div>
        </div>
        <div class="meta-details">
          <span class="detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {{ guide.publishDate }}
          </span>
          <span class="detail-divider">·</span>
          <span class="detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {{ guide.duration }}
          </span>
          <span class="detail-divider">·</span>
          <span class="detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {{ guide.location }}
          </span>
          <span class="detail-divider">·</span>
          <span class="detail-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            {{ seasonLabel }}
          </span>
        </div>
      </div>

      <div class="modal-stats-row">
        <div :class="['stat-block', `mode-${travelModeClass}`]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          <div class="stat-info">
            <span class="stat-value">{{ formatNumber(counts.views) }}</span>
            <span class="stat-label">浏览</span>
          </div>
        </div>
        <button 
          :class="['stat-block', 'interactive', `mode-${travelModeClass}`, { active: isLiked }]"
          @click="$emit('toggle-like')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
          <div class="stat-info">
            <span class="stat-value">{{ formatNumber(counts.likes) }}</span>
            <span class="stat-label">点赞</span>
          </div>
        </button>
        <button 
          :class="['stat-block', 'interactive', `mode-${travelModeClass}`, { active: isLoved }]"
          @click="$emit('toggle-love')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <div class="stat-info">
            <span class="stat-value">{{ formatNumber(counts.loves) }}</span>
            <span class="stat-label">喜爱</span>
          </div>
        </button>
        <button 
          :class="['stat-block', 'interactive', `mode-${travelModeClass}`, { active: isFavorited }]"
          @click="$emit('toggle-favorite')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          <div class="stat-info">
            <span class="stat-value">{{ formatNumber(counts.favorites) }}</span>
            <span class="stat-label">收藏</span>
          </div>
        </button>
        <button
          :class="['stat-block', 'interactive', `mode-${travelModeClass}`]"
          @click="$emit('share')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.41" x2="15.42" y2="17.59"/><line x1="15.41" y1="6.41" x2="8.59" y2="10.59"/></svg>
          <div class="stat-info">
            <span class="stat-value">{{ formatNumber(counts.shares) }}</span>
            <span class="stat-label">分享</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { difficultyMap, travelModeMap, seasonMap } from '@/utils/landscape/constants';
import { formatNumber } from '@/utils/landscape/format';

interface Guide {
  id: string;
  title: string;
  cover: string;
  excerpt: string;
  travelMode?: string;
  sceneryTheme?: string;
  location: string;
  duration: string;
  author: string;
  authorAvatar?: string;
  category: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  season?: string;
  publishDate?: string;
}

interface Counts {
  views: number;
  likes: number;
  loves: number;
  favorites: number;
  shares: number;
}

interface Props {
  guide: Guide;
  counts: Counts;
  isLiked: boolean;
  isLoved: boolean;
  isFavorited: boolean;
}

const props = defineProps<Props>();

defineEmits<{
  (e: 'toggle-like'): void;
  (e: 'toggle-love'): void;
  (e: 'toggle-favorite'): void;
  (e: 'share'): void;
}>();

const difficultyLabel = computed(() => {
  const difficulty: 'beginner' | 'intermediate' | 'advanced' = props.guide.difficulty || 'intermediate';
  return difficultyMap[difficulty] || difficulty;
});

const travelModeClass = computed(() => {
  const mode = props.guide.travelMode || 'self-drive';
  return travelModeMap[mode]?.class || 'default';
});

const seasonLabel = computed(() => {
  const season = props.guide.season || 'spring';
  return seasonMap[season] || season;
});
</script>

<style scoped lang="scss" src="./index.scss" />

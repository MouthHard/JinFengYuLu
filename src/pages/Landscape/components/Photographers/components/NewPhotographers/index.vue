<template>
  <section class="new-photographers-section">
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-icon">🌟</span>
        新晋摄影�?      </h2>
      <div class="header-right">
        <p class="section-desc">最近加入的优秀摄影�?/p>
        <button class="show-more-btn">
          <span>展示更多</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="photographers.length > 0" class="new-photographers-grid">
      <article v-for="(photographer, index) in photographers" :key="photographer.id" class="photographer-card new" :style="{ '--delay': `${index * 0.1}s` }">
        <div class="card-left">
          <div class="avatar-section">
            <div class="avatar-ring"></div>
            <img loading="lazy" :src="photographer.avatar" :alt="photographer.name" class="avatar" />
            <div class="new-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 7.08L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <div class="info-section">
            <h3 class="name">{{ photographer.name }}</h3>
            <p class="title">{{ photographer.title }}</p>
            <div class="bio">{{ photographer.bio || '专注于摄影艺术创作，用镜头记录美好瞬�? }}</div>
            <div class="tags-row">
              <span v-for="tag in photographer.tags?.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="stats-mini">
              <div class="stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>{{ photographer.worksCount }}</span>
              </div>
              <div class="stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <span>{{ photographer.likes }}</span>
              </div>
              <div class="stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>{{ photographer.followers || '1.2K' }}</span>
              </div>
              <div class="stat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <span>{{ photographer.views || '12.5K' }}</span>
              </div>
            </div>
            <div class="action-buttons">
              <button class="follow-btn" :class="{ following: getFollowingState(photographer) }" @click="$emit('toggle-follow', photographer)">
                <span>{{ getFollowingState(photographer) ? '已关�? : '关注' }}</span>
              </button>
              <button 
                class="interaction-btn" 
                :class="{ active: interactionStore.isLiked(getPhotographerId(photographer)) }"
                @click="toggleLike(photographer)"
              >
                <ThumbUpIcon />
                <span>{{ formatNumber(interactionStore.getCount(getPhotographerId(photographer)).likes) }}</span>
              </button>
              <button class="view-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </button>
            </div>
            <div class="join-info">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{{ photographer.joinDate || '最近加�? }}</span>
            </div>
          </div>
        </div>
        <div class="card-right">
          <div class="works-grid">
            <div v-for="(work, idx) in photographer.worksPreview?.slice(0, 6)" :key="idx" class="work-item" @click="$emit('preview', { ...work, author: photographer.name, authorId: photographer.id, authorAvatar: photographer.avatar })">
              <img loading="lazy" :src="work.image" :alt="work.title || `作品 ${idx + 1}`" />
              <div class="work-type-tag" :class="`type-${work.type || 'photo'}`">
                {{ getWorkTypeLabel(work.type) }}
              </div>
              <div class="work-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div v-else class="empty-state">
      <div class="empty-icon">🌟</div>
      <h3>暂无新晋摄影�?/h3>
      <p>快来成为第一个新晋摄影师�?/p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { showMessage } from '@/utils/landscape';
import { useInteractionStore } from '@/stores/landscape';
import { useFormatNumber } from '@/composables/landscape/useFormatNumber';
import { workTypeLabels } from '@/utils/landscape/constants';
import { usePhotographersViewData } from '@/composables/landscape';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import type { Photographer } from '@/types/landscape';

defineEmits<{
  preview: [work: { image?: string; type?: string; author?: string; authorId?: string; authorAvatar?: string; id?: string; cover?: string; title?: string; likes?: number; loves?: number; favorites?: number; views?: number; shares?: number }]
  'toggle-follow': [photographer: Photographer]
}>();

const getWorkTypeLabel = (type?: string) => workTypeLabels[type || 'photo'] || '照片';

const { newPhotographers } = usePhotographersViewData();
const photographers = computed(() => newPhotographers());
const interactionStore = useInteractionStore();
const { formatCount: formatNumber } = useFormatNumber();

const getFollowingState = (photographer: Photographer): boolean => {
  return interactionStore.isFollowing(String(photographer.id));
};

const getPhotographerId = (photographer: Photographer): string => {
  return String(photographer.id);
};

watch(
  () => photographers.value.length,
  (len) => {
    if (len === 0) return;
    photographers.value.forEach(photographer => {
      const id = getPhotographerId(photographer);
      interactionStore.registerCount(id, {
        likes: parseInt(photographer.likes?.replace(/[KM]/g, '') || '0') * (photographer.likes?.includes('K') ? 1000 : photographer.likes?.includes('M') ? 1000000 : 1),
        views: parseInt(photographer.views?.replace(/[KM]/g, '') || '0') * (photographer.views?.includes('K') ? 1000 : photographer.views?.includes('M') ? 1000000 : 1),
        loves: 0,
        favorites: 0,
        shares: 0
      });

      if (photographer.worksPreview && Array.isArray(photographer.worksPreview)) {
        interactionStore.registerBatch(
          photographer.worksPreview.map(work => ({
            id: work.id || `work-${photographer.id}-${Math.random()}`,
            counts: {
              likes: work.likes || 0,
              loves: work.loves || 0,
              favorites: work.favorites || 0,
              views: work.views || 0,
              shares: work.shares || 0,
            }
          }))
        );
      }
    });
  },
  { immediate: true },
);

const toggleLike = (photographer: Photographer) => {
  const id = getPhotographerId(photographer);
  const isAdded = interactionStore.toggleLike(id);
  if (isAdded) {
    showMessage.like.success(photographer.name);
  } else {
    showMessage.like.cancel();
  }
};
</script>

<style scoped lang="scss" src="./index.scss" />

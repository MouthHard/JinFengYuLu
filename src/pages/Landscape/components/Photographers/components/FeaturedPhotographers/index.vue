<template>
  <section class="featured-photographers-section">
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-icon">�?/span>
        推荐摄影�?     </h2>
      <div class="header-right">
        <p class="section-desc">精选全球优秀风光摄影�?/p>
        <button class="show-more-btn">
          <span>展示更多</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="photographers.length > 0" class="featured-grid">
      <article
        v-for="(photographer, index) in photographers"
        :key="photographer.id"
        class="photographer-card featured"
        :style="{ '--delay': `${index * 0.1}s` }"
      >
        <div class="card-banner">
          <img loading="lazy" :src="photographer.banner || photographer.avatar" :alt="photographer.name" class="banner-image" />
          <div class="banner-overlay"></div>
        </div>

        <div class="card-content">
          <div class="photographer-header">
            <div class="avatar-wrapper">
              <img loading="lazy" :src="photographer.avatar" :alt="photographer.name" class="avatar" />
              <div class="avatar-ring"></div>
            </div>
            <div class="photographer-info">
              <h3 class="name">{{ photographer.name }}</h3>
              <p class="title">{{ photographer.title }}</p>
              <div class="specialty-tags">
                <span v-for="tag in photographer.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>

          <p class="bio">{{ photographer.bio }}</p>

          <div class="stats-row">
            <div class="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span class="value">{{ photographer.works }}</span>
              <span class="label">作品</span>
            </div>
            <div class="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span class="value">{{ photographer.views }}</span>
              <span class="label">浏览</span>
            </div>
            <div class="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span class="value">{{ photographer.likes }}</span>
              <span class="label">点赞</span>
            </div>
            <div class="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span class="value">{{ photographer.followers }}</span>
              <span class="label">粉丝</span>
            </div>
          </div>

          <div class="works-preview">
            <div 
              v-for="(work, idx) in photographer.worksPreview.slice(0, 3)" 
              :key="idx" 
              class="preview-item"
              @click="$emit('preview', { ...work, author: photographer.name, authorId: photographer.id, authorAvatar: photographer.avatar })"
            >
              <img loading="lazy" :src="work.image" :alt="work.title || `作品 ${idx + 1}`" />
              <div class="preview-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
            <div 
              v-if="photographer.worksPreview.length > 3" 
              class="preview-item preview-more"
              @click="$emit('preview', { ...photographer.worksPreview[3], author: photographer.name, authorId: photographer.id, authorAvatar: photographer.avatar })"
            >
              <img loading="lazy" :src="photographer.worksPreview[3].image" :alt="'作品 4'" />
              <div class="more-overlay">
                <span class="more-count">+{{ photographer.worksPreview.length - 3 }}</span>
              </div>
            </div>
          </div>

          <div class="card-actions">
            <button 
              class="action-btn follow" 
              :class="{ following: getFollowingState(photographer) }"
              @click="$emit('toggle-follow', photographer)"
            >
              <svg v-if="!getFollowingState(photographer)" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              <span>{{ getFollowingState(photographer) ? '已关�? : '关注' }}</span>
            </button>
            <button 
              class="action-btn secondary" 
              :class="{ active: interactionStore.isLiked(getPhotographerId(photographer)) }"
              @click="toggleLike(photographer)"
            >
              <ThumbUpIcon />
              <span class="count">{{ formatNumber(interactionStore.getCount(getPhotographerId(photographer)).likes) }}</span>
            </button>
            <button class="action-btn view">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>查看作品</span>
            </button>
          </div>
        </div>
      </article>
    </div>
    <div v-else class="empty-state">
      <div class="empty-icon">📸</div>
      <h3>暂无推荐摄影�?/h3>
      <p>敬请期待更多优秀摄影�?/p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { showMessage } from '@/utils/landscape';
import { useInteractionStore } from '@/stores/landscape';
import { useFormatNumber } from '@/composables/landscape/useFormatNumber';
import { usePhotographersViewData } from '@/composables/landscape';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import type { Photographer } from '@/types/landscape';

defineEmits<{
  preview: [work: { image?: string; type?: string; author?: string; authorId?: string; authorAvatar?: string; id?: string; cover?: string; title?: string; likes?: number; loves?: number; favorites?: number; views?: number; shares?: number }]
  'toggle-follow': [photographer: Photographer]
}>();

const { featuredPhotographers } = usePhotographersViewData();
const photographers = computed(() => featuredPhotographers());
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

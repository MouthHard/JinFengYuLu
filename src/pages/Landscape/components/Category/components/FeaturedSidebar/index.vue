<template>
  <aside class="featured-sidebar">
    <div class="sidebar-header">
      <div class="header-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <div class="header-text">
        <h3>精选推荐</h3>
        <span class="header-count">{{ items.length }}</span>
      </div>
    </div>
    <div class="featured-list">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="featured-item"
        :class="item.type"
        :style="{ '--item-index': index }"
      >
        <div class="item-thumb" @click="$emit('open-detail', item)">
          <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
          <div class="type-indicator" :class="item.type">
            <svg v-if="item.type === 'image'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
        <div class="item-info-overlay" :class="item.type">
          <h4>{{ item.title }}</h4>
          <p>{{ item.location }}</p>
          <div class="item-actions" :class="item.type">
            <span class="act-chip act-views" @click.stop>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              {{ formatCount(item.views) }}
            </span>
            <button class="act-chip act-like" @click.stop>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              {{ formatCount(item.likes) }}
            </button>
            <button class="act-chip act-bookmark" @click.stop>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              {{ formatCount(item.bookmarks) }}
            </button>
            <button class="act-chip act-share" @click.stop>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              {{ formatCount(item.shares) }}
            </button>
            <button class="act-chip act-download" @click.stop>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { LandscapeItem } from '@/types/landscape';

interface Props {
  items: LandscapeItem[];
}

defineProps<Props>();

defineEmits<{
  'open-detail': [item: LandscapeItem];
}>();

const formatCount = (count: number) => {
  if (count >= 10000) return (count / 10000).toFixed(1) + 'w';
  if (count >= 1000) return (count / 1000).toFixed(1) + 'k';
  return String(count);
};
</script>

<style scoped lang="scss" src="./index.scss" />

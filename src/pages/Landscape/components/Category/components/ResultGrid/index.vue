<template>
  <div class="result-grid">
    <div v-for="(item, index) in items" :key="item.id" class="result-item" :class="item.type"
      :style="{ '--item-index': index }">
      <div class="item-image" @click="$emit('open-detail', item)">
        <img :src="item.thumbnail" :alt="item.title" loading="lazy" @load="onImageLoad" />
        <div class="type-badge" :class="item.type">
          <svg v-if="item.type === 'image'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span>{{ item.type === 'image' ? '图片' : '视频' }}</span>
        </div>
        <div v-if="item.type === 'video' && item.duration" class="duration-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{{ item.duration }}</span>
        </div>
        <div class="image-overlay" :class="item.type">
          <div class="overlay-content">
            <h3>{{ item.title }}<span class="item-date">{{ item.date }}</span></h3>
            <p>{{ item.location }}</p>
            <div class="item-tags">
              <span v-for="tag in item.tags?.slice(0, 3)" :key="tag" class="tag" :class="item.type">
                {{ tag }}
              </span>
            </div>
            <div class="item-actions" :class="item.type">
              <span class="act-chip act-views" @click.stop>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {{ formatNumber(getCount(item.id).views) }}
              </span>
              <button class="act-chip act-like" type="button" :class="{ active: isLiked(item.id) }"
                @click.stop="handleToggleLike($event, item)">
                <ThumbUpIcon :stroke-width="2" />
                {{ formatNumber(getCount(item.id).likes) }}
              </button>
              <button class="act-chip act-love" type="button" :class="{ active: isLoved(item.id) }"
                @click.stop="handleToggleLove($event, item)">
                <HeartIcon :stroke-width="2" />
                {{ formatNumber(getCount(item.id).loves) }}
              </button>
              <button class="act-chip act-bookmark" type="button" :class="{ active: isFavorited(item.id) }"
                @click.stop="handleToggleFavorite($event, item)">
                <BookmarkIcon :stroke-width="2" />
                {{ formatNumber(getCount(item.id).favorites) }}
              </button>
              <button class="act-chip act-share" type="button" @click.stop>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                {{ formatNumber(getCount(item.id).shares) }}
              </button>
              <button class="act-chip act-download" type="button" @click.stop>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInteractionStore } from '@/stores/landscape';
import { formatNumber } from '@/utils/landscape/format';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import type { LandscapeItem } from '@/typesOfPages/landscape';

interface Props {
  items: LandscapeItem[];
}

defineProps<Props>();

const emit = defineEmits<{
  'open-detail': [item: LandscapeItem];
  'toggle-like': [item: LandscapeItem];
  'toggle-love': [item: LandscapeItem];
  'toggle-favorite': [item: LandscapeItem];
}>();

const interactionStore = useInteractionStore();

const getCount = (id: number | string) => interactionStore.getCount(String(id));
const isLiked = (id: number | string) => interactionStore.isLiked(String(id));
const isLoved = (id: number | string) => interactionStore.isLoved(String(id));
const isFavorited = (id: number | string) => interactionStore.isFavorited(String(id));

const handleToggleLike = (event: MouseEvent, item: LandscapeItem) => {
  event.stopPropagation();
  emit('toggle-like', item);
};

const handleToggleLove = (event: MouseEvent, item: LandscapeItem) => {
  event.stopPropagation();
  emit('toggle-love', item);
};

const handleToggleFavorite = (event: MouseEvent, item: LandscapeItem) => {
  event.stopPropagation();
  emit('toggle-favorite', item);
};

const onImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.classList.add('loaded');
};
</script>

<style scoped lang="scss" src="./index.scss" />

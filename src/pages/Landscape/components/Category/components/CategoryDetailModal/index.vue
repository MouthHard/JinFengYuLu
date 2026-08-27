<template>
  <Teleport to="body">
    <transition name="modal">
      <div v-if="item" class="modal-overlay" :class="item.type" @click="$emit('close')">
        <div class="modal-container" :class="item.type" @click.stop>
          <button class="modal-close" :class="item.type" @click="$emit('close')">
            <CloseIcon :stroke-width="2" />
          </button>

          <div class="modal-content">
            <div class="modal-media">
              <img v-if="item.type === 'image'" loading="lazy" :src="item.fullImage" :alt="item.title" />
              <video v-else :src="item.videoUrl" controls autoplay></video>
              <div class="media-type-badge" :class="item.type">
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
            </div>

            <div class="modal-info" :class="item.type">
              <div class="info-scroll">
                <div class="info-header">
                  <h2 class="modal-title" :class="item.type">{{ item.title }}</h2>
                  <p class="modal-description">{{ item.description }}</p>
                </div>

                <div class="modal-meta">
                  <div class="meta-item" :class="item.type">
                    <div class="meta-icon author" :class="item.type">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div class="meta-text">
                      <span class="meta-label">作者</span>
                      <span class="meta-value">{{ item.author }}</span>
                    </div>
                  </div>
                  <div class="meta-item" :class="item.type">
                    <div class="meta-icon location" :class="item.type">
                      <LocationIcon :stroke-width="2" />
                    </div>
                    <div class="meta-text">
                      <span class="meta-label">拍摄地点</span>
                      <span class="meta-value">{{ item.location }}</span>
                    </div>
                  </div>
                  <div class="meta-item" :class="item.type">
                    <div class="meta-icon date" :class="item.type">
                      <CalendarIcon :stroke-width="2" />
                    </div>
                    <div class="meta-text">
                      <span class="meta-label">发布日期</span>
                      <span class="meta-value">{{ item.date }}</span>
                    </div>
                  </div>
                  <div class="meta-item" :class="item.type">
                    <div class="meta-icon camera" :class="item.type">
                      <CameraIcon :stroke-width="2" />
                    </div>
                    <div class="meta-text">
                      <span class="meta-label">拍摄设备</span>
                      <span class="meta-value">{{ item.camera }}</span>
                    </div>
                  </div>
                </div>

                <div class="modal-tags-section">
                  <div class="section-label">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <span>标签</span>
                  </div>
                  <div class="modal-tags">
                    <span v-for="tag in item.tags" :key="tag" class="tag" :class="item.type">{{ tag }}</span>
                  </div>
                </div>

                <div class="action-chips" :class="item.type">
                  <span class="act-chip act-views">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    {{ formatNumber(getCount().views) }}
                  </span>
                  <button 
                    class="act-chip act-like" 
                    :class="{ active: isLiked }"
                    @click="handleToggleLike"
                  >
                    <ThumbUpIcon :stroke-width="2" />
                    {{ formatNumber(getCount().likes) }}
                  </button>
                  <button 
                    class="act-chip act-love" 
                    :class="{ active: isLoved }"
                    @click="handleToggleLove"
                  >
                    <HeartIcon :stroke-width="2" />
                    {{ formatNumber(getCount().loves) }}
                  </button>
                  <button 
                    class="act-chip act-bookmark" 
                    :class="{ active: isFavorited }"
                    @click="handleToggleFavorite"
                  >
                    <BookmarkIcon :stroke-width="2" />
                    {{ formatNumber(getCount().favorites) }}
                  </button>
                  <button class="act-chip act-share" @click="$emit('share', item)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                    {{ formatNumber(getCount().shares) }}
                  </button>
                  <button class="act-chip act-download" @click="$emit('download', item)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useInteractionStore } from '@/stores/landscape';
import { formatNumber } from '@/utils/landscape/format';
import type { LandscapeItem } from '@/types/landscape';
import CloseIcon from '../../../../icon/common/CloseIcon.vue';
import LocationIcon from '../../../../icon/common/LocationIcon.vue';
import CalendarIcon from '../../../../icon/common/CalendarIcon.vue';
import CameraIcon from '../../../../icon/common/CameraIcon.vue';
import ThumbUpIcon from '../../../../icon/common/ThumbUpIcon.vue';
import HeartIcon from '../../../../icon/common/HeartIcon.vue';
import BookmarkIcon from '../../../../icon/common/BookmarkIcon.vue';

const props = defineProps<{
  item: LandscapeItem | null;
}>();

const emit = defineEmits<{
  close: [];
  'toggle-like': [item: LandscapeItem];
  'toggle-love': [item: LandscapeItem];
  'toggle-favorite': [item: LandscapeItem];
  share: [item: LandscapeItem];
  download: [item: LandscapeItem];
}>();

const interactionStore = useInteractionStore();

const getCount = () => {
  if (!props.item) return { likes: 0, views: 0, loves: 0, favorites: 0, shares: 0 };
  return interactionStore.getCount(String(props.item.id));
};

const isLiked = computed(() => props.item ? interactionStore.isLiked(String(props.item.id)) : false);
const isLoved = computed(() => props.item ? interactionStore.isLoved(String(props.item.id)) : false);
const isFavorited = computed(() => props.item ? interactionStore.isFavorited(String(props.item.id)) : false);

const handleToggleLike = () => {
  if (!props.item) return;
  emit('toggle-like', props.item);
};

const handleToggleLove = () => {
  if (!props.item) return;
  emit('toggle-love', props.item);
};

const handleToggleFavorite = () => {
  if (!props.item) return;
  emit('toggle-favorite', props.item);
};
</script>

<style scoped lang="scss" src="./index.scss" />

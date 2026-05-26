<template>
  <div v-if="previewWork" class="work-preview-modal" @click="$emit('close')">
    <div class="lightbox-frame">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="$emit('close')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div class="image-viewport">
          <div class="type-badge" :class="`badge-${workType}`">
            <span class="type-icon">{{ workTypeConfig.icon }}</span>
            <span class="type-name">{{ workTypeConfig.name }}</span>
          </div>

          <img v-if="isImageType" loading="lazy"
            :src="previewWork.cover || previewWork.image" alt="作品预览" />
          <div v-else-if="workType === 'video' || workType === 'timelapse'" class="video-viewport">
            <img loading="lazy" :src="previewWork.cover || previewWork.image" alt="作品预览" />
            <div class="video-play-overlay">
              <div class="play-btn-ring"></div>
              <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div v-if="workType === 'timelapse'" class="timelapse-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>延时摄影</span>
            </div>
            <div v-if="previewWork.duration" class="duration-badge">
              {{ previewWork.duration }}
            </div>
          </div>
          <div v-else-if="workType === 'aerial'" class="aerial-viewport">
            <img loading="lazy" :src="previewWork.cover || previewWork.image" alt="作品预览" />
            <div class="aerial-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              <span>航拍视角</span>
            </div>
          </div>
          <div v-else>
            <img loading="lazy" :src="previewWork.cover || previewWork.image" alt="作品预览" />
          </div>

          <div class="focus-indicator">
            <div class="focus-point"></div>
            <div class="focus-ring"></div>
          </div>
        </div>

        <div class="info-bar">
          <div class="info-left">
            <h3 v-if="previewWork.title" class="work-title">{{ previewWork.title }}</h3>
            <div v-if="previewWork.author" class="work-author-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span class="author-name">{{ previewWork.author }}</span>
            </div>
          </div>

          <div class="info-center">
            <button 
              :class="['action-btn', 'like', { active: isLiked }]"
              @click="handleToggleLike"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
              <span class="btn-count">{{ formatNumber(getCount().likes) }}</span>
            </button>
            <button 
              :class="['action-btn', 'love', { active: isLoved }]"
              @click="handleToggleLove"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span class="btn-count">{{ formatNumber(getCount().loves) }}</span>
            </button>
            <button 
              :class="['action-btn', 'bookmark', { active: isFavorited }]"
              @click="handleToggleFavorite"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              <span class="btn-count">{{ formatNumber(getCount().favorites) }}</span>
            </button>
            <button class="action-btn share" @click="handleShare">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.41" x2="15.42" y2="17.59"/><line x1="15.41" y1="6.41" x2="8.59" y2="10.59"/>
              </svg>
              <span class="btn-count">{{ formatNumber(getCount().shares) }}</span>
            </button>
            <button class="action-btn download" @click="handleDownload">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </button>
          </div>

          <div class="info-right">
            <div class="tech-badge">
              <span class="tech-label">格式</span>
              <span class="tech-value">{{ workTypeConfig.format }}</span>
            </div>
            <div class="tech-badge">
              <span class="tech-label">类型</span>
              <span class="tech-value">{{ workTypeConfig.name }}</span>
            </div>
          </div>
        </div>

        <div class="viewport-footer">
          <span class="footer-label">{{ workTypeConfig.format }}</span>
          <span class="footer-dot"></span>
          <span class="footer-label">{{ workTypeConfig.name }}</span>
          <span class="footer-dot"></span>
          <span class="footer-label">ISO 100</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { workTypeConfigs } from '@/utils/landscape/constants';
import { showMessage } from '@/utils/landscape';
import { useInteractionStore, type InteractionItem } from '@/stores/landscape';
import { formatNumber } from '@/utils/landscape/format';

interface PreviewWork {
  id?: string;
  image?: string;
  cover?: string;
  type?: string;
  duration?: string;
  title?: string;
  author?: string;
  authorId?: string;
  authorAvatar?: string;
  location?: string;
  category?: string;
}

const props = defineProps<{
  previewWork: PreviewWork | null
}>();

defineEmits<{
  close: []
}>();

const interactionStore = useInteractionStore();

const workType = computed(() => props.previewWork?.type || 'photo');
const workTypeConfig = computed(() => {
  return workTypeConfigs[workType.value] || workTypeConfigs.photo;
});
const isImageType = computed(() => ['photo', 'panorama', 'hdr', 'startrail', 'longexp'].includes(workType.value));

const workId = computed(() => props.previewWork?.id || `work-${Date.now()}`);
const workTitle = computed(() => props.previewWork?.title || '精选作品');

const getCount = () => interactionStore.getCount(workId.value);
const isLiked = computed(() => interactionStore.isLiked(workId.value));
const isLoved = computed(() => interactionStore.isLoved(workId.value));
const isFavorited = computed(() => interactionStore.isFavorited(workId.value));

const handleToggleLike = () => {
  const liked = interactionStore.toggleLike(workId.value);
  if (liked) {
    showMessage.like.success(workTitle.value);
  } else {
    showMessage.like.cancel();
  }
};

const handleToggleLove = () => {
  const item: InteractionItem = {
    id: workId.value,
    type: 'image',
    title: workTitle.value,
    image: props.previewWork?.cover || props.previewWork?.image || '',
    location: props.previewWork?.location || '',
    category: props.previewWork?.category || '',
    timestamp: Date.now(),
    author: props.previewWork?.author,
    authorId: props.previewWork?.authorId,
    authorAvatar: props.previewWork?.authorAvatar,
  };
  const loved = interactionStore.toggleLove(item);
  if (loved) {
    showMessage.love.success(workTitle.value, 'image');
  } else {
    showMessage.love.cancel(workTitle.value, 'image');
  }
};

const handleToggleFavorite = () => {
  const item: InteractionItem = {
    id: workId.value,
    type: 'image',
    title: workTitle.value,
    image: props.previewWork?.cover || props.previewWork?.image || '',
    location: props.previewWork?.location || '',
    category: props.previewWork?.category || '',
    timestamp: Date.now(),
    author: props.previewWork?.author,
    authorId: props.previewWork?.authorId,
    authorAvatar: props.previewWork?.authorAvatar,
  };
  const favorited = interactionStore.toggleFavorite(item);
  if (favorited) {
    showMessage.favorite.success(workTitle.value, 'image');
  } else {
    showMessage.favorite.cancel(workTitle.value, 'image');
  }
};

const handleShare = () => {
  interactionStore.incrementShares(workId.value);
  showMessage.share.success(workTitle.value);
};

const handleDownload = () => {
  showMessage.download.success(workTitle.value);
};
</script>

<style scoped lang="scss" src="./index.scss" />

<template>
  <section class="visual-feast-section">
    <div class="section-header">
      <div class="header-left">
        <span class="title-label">GALLERY</span>
        <h2 class="section-title">视觉盛宴</h2>
        <p class="section-subtitle">精选全球最美风景，每一帧都是艺术品</p>
      </div>
      <button class="more-btn" @click="handleMore">
        <span>更多</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
    
    <div v-if="images.length > 0" class="masonry-grid">
      <div
        v-for="(item, index) in visibleImages"
        :key="item.id"
        class="masonry-item"
        :style="{ '--delay': `${index * 0.05}s`, '--card-height': getCardHeight(index) }"
        @click="openImageModal(item, index)"
      >
        <div class="image-card">
          <div class="image-container">
            <img :src="item.thumbnail || item.url" :alt="item.title" loading="lazy" />
          </div>
          <div class="image-overlay">
            <div class="overlay-content">
              <h3>{{ item.title }}</h3>
              <p class="location">{{ item.location }}</p>
              <div class="action-rings">
                <span class="ring-node r-views" @click.stop>
                  <span class="ring-ripple"></span>
                  <span class="ring-body">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </span>
                  <span class="ring-val">{{ formatNumber(getImageCount(item.id).views) }}</span>
                </span>
                <button class="ring-node r-like" :class="{ active: isImageLiked(item.id) }" @click.stop="toggleImageLike(item)">
                  <span class="ring-ripple"></span>
                  <span class="ring-body">
                    <ThumbUpIcon :filled="isImageLiked(item.id)" />
                  </span>
                  <span class="ring-val">{{ formatNumber(getImageCount(item.id).likes) }}</span>
                </button>
                <button class="ring-node r-love" :class="{ active: isImageLoved(item.id) }" @click.stop="toggleImageLove(item)">
                  <span class="ring-ripple"></span>
                  <span class="ring-body">
                    <HeartIcon :filled="isImageLoved(item.id)" />
                  </span>
                  <span class="ring-val">{{ formatNumber(getImageCount(item.id).loves) }}</span>
                </button>
                <button class="ring-node r-bookmark" :class="{ active: isImageFavorited(item.id) }" @click.stop="toggleImageFavorite(item)">
                  <span class="ring-ripple"></span>
                  <span class="ring-body">
                    <BookmarkIcon :filled="isImageFavorited(item.id)" />
                  </span>
                  <span class="ring-val">{{ formatNumber(getImageCount(item.id).favorites) }}</span>
                </button>
                <button class="ring-node r-share" @click.stop="toggleImageShare(item)">
                  <span class="ring-ripple"></span>
                  <span class="ring-body">
                    <ShareIcon />
                  </span>
                  <span class="ring-val">{{ formatNumber(getImageCount(item.id).shares) }}</span>
                </button>
                <button class="ring-node r-download" @click.stop="handleDownload(item)">
                  <span class="ring-ripple"></span>
                  <span class="ring-body">
                    <DownloadIcon />
                  </span>
                  <span class="ring-val">下载</span>
                </button>
              </div>
            </div>
          </div>
          <div class="image-badge">{{ item.category }}</div>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
      </div>
      <p class="empty-text">暂无图片内容</p>
      <span class="empty-hint">精选图片即将呈�?/span>
    </div>

    <!-- 图片预览模态框 -->
    <div v-if="showImageModal" class="image-modal" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeImageModal">×</button>
        <div class="modal-left">
          <div class="image-preview">
            <img loading="lazy" :src="selectedImage?.url" class="preview-image" />
          </div>
          <div class="image-navigation">
            <button class="nav-btn prev" :disabled="currentImageIndex <= 0" @click="navigateImage(-1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div class="nav-center">
              <span class="nav-current">{{ currentImageIndex + 1 }}</span>
              <span class="nav-separator">/</span>
              <span class="nav-total">{{ images.length }}</span>
            </div>
            <button class="nav-btn next" :disabled="currentImageIndex >= images.length - 1" @click="navigateImage(1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div class="nav-progress">
              <div class="nav-progress-bar" :style="{ width: `${((currentImageIndex + 1) / images.length) * 100}%` }"></div>
            </div>
          </div>
        </div>
        <div class="modal-right">
          <div class="modal-header">
            <span class="modal-category">{{ selectedImage?.category }}</span>
            <h3>{{ selectedImage?.title }}</h3>
            <span class="modal-location">{{ selectedImage?.location }}</span>
          </div>
          <div v-if="selectedImage?.camera || selectedImage?.date" class="image-meta">
            <div v-if="selectedImage?.camera" class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M10 6V2"/></svg>
              <span>{{ selectedImage?.camera }}</span>
            </div>
            <div v-if="selectedImage?.date" class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>{{ selectedImage?.date }}</span>
            </div>
          </div>
          <div class="action-cards">
            <button class="action-card views-card">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div class="card-body">
                <span class="card-value">{{ selectedImage ? formatNumber(getImageCount(selectedImage.id).views) : '' }}</span>
                <span class="card-label">浏览</span>
              </div>
            </button>
            <button class="action-card like-card" :class="{ active: selectedImage && isImageLiked(selectedImage.id) }" @click="toggleImageLike(selectedImage)">
              <div class="card-icon">
                <ThumbUpIcon :filled="selectedImage ? isImageLiked(selectedImage.id) : false" />
              </div>
              <div class="card-body">
                <span class="card-value">{{ selectedImage ? formatNumber(getImageCount(selectedImage.id).likes) : '' }}</span>
                <span class="card-label">点赞</span>
              </div>
            </button>
            <button class="action-card love-card" :class="{ active: selectedImage && isImageLoved(selectedImage.id) }" @click="toggleImageLove(selectedImage)">
              <div class="card-icon">
                <HeartIcon :filled="selectedImage ? isImageLoved(selectedImage.id) : false" />
              </div>
              <div class="card-body">
                <span class="card-value">{{ selectedImage ? formatNumber(getImageCount(selectedImage.id).loves) : '' }}</span>
                <span class="card-label">喜爱</span>
              </div>
            </button>
            <button class="action-card bookmark-card" :class="{ active: selectedImage && isImageFavorited(selectedImage.id) }" @click="toggleImageFavorite(selectedImage)">
              <div class="card-icon">
                <BookmarkIcon :filled="selectedImage ? isImageFavorited(selectedImage.id) : false" />
              </div>
              <div class="card-body">
                <span class="card-value">{{ selectedImage ? formatNumber(getImageCount(selectedImage.id).favorites) : '' }}</span>
                <span class="card-label">收藏</span>
              </div>
            </button>
            <button class="action-card share-card" @click="toggleImageShare(selectedImage)">
              <div class="card-icon">
                <ShareIcon />
              </div>
              <div class="card-body">
                <span class="card-value">{{ selectedImage ? formatNumber(getImageCount(selectedImage.id).shares) : '' }}</span>
                <span class="card-label">分享</span>
              </div>
            </button>
            <button class="action-card download-card" @click="handleDownload(selectedImage)">
              <div class="card-icon">
                <DownloadIcon />
              </div>
              <div class="card-body">
                <span class="card-value">下载</span>
                <span class="card-label">原图</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="visibleImages.length < images.length" ref="loadMoreRef" class="load-more-sentinel"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, onMounted, watch } from 'vue';
import { showMessage, createSimpleInteractionItem } from '@/utils/landscape';
import { useInteractionStore } from '@/stores/landscape';
import { useLandscapeDataStore } from '@/stores/landscape';
import { formatNumber } from '@/utils/landscape/format';
import { masonryCardHeights } from '@/utils/landscape/constants';
import type { GlobalImage } from '@/types/landscape/data';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
import DownloadIcon from '@/pages/Landscape/icon/common/DownloadIcon.vue';

const interactionStore = useInteractionStore();
const dataStore = useLandscapeDataStore();
const showImageModal = ref(false);
const selectedImage = ref<GlobalImage | null>(null);
const currentImageIndex = ref(0);

const handleMore = () => {
  console.log('查看更多');
};

const images = computed(() => dataStore.getAllImages());


const BATCH_SIZE = 24;
const visibleCount = ref(BATCH_SIZE);
const loadMoreRef = ref<HTMLElement | null>(null);
let loadMoreObserver: IntersectionObserver | null = null;

const visibleImages = computed(() => images.value.slice(0, visibleCount.value));

onMounted(() => {
  loadMoreObserver = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting && visibleCount.value < images.value.length) {
      visibleCount.value = Math.min(visibleCount.value + BATCH_SIZE, images.value.length);
    }
  }, { rootMargin: '200px' });
});

watch(loadMoreRef, (el) => {
  if (!loadMoreObserver) return;
  loadMoreObserver.disconnect();
  if (el) loadMoreObserver.observe(el);
});

onUnmounted(() => {
  loadMoreObserver?.disconnect();
});

const getGlobalId = (id: string | number) => String(id);

const getCardHeight = (index: number) => {
  return `${masonryCardHeights[index % masonryCardHeights.length]}px`;
};

watch(
  () => images.value.length,
  (len) => {
    if (len === 0) return;
    interactionStore.registerBatch(
      images.value.map((img: GlobalImage) => ({
        id: getGlobalId(img.id),
        counts: { likes: img.likes || 0, views: img.views || 0, loves: img.loves || 0, favorites: img.favorites || 0, shares: img.shares || 0 },
      }))
    );
  },
  { immediate: true },
);

const getImageCount = (id: string | number) => interactionStore.getCount(getGlobalId(id));

const isImageLiked = (id: string | number) => interactionStore.isLiked(getGlobalId(id));
const isImageLoved = (id: string | number) => interactionStore.isLoved(getGlobalId(id));
const isImageFavorited = (id: string | number) => interactionStore.isFavorited(getGlobalId(id));

const toggleImageLike = (image: GlobalImage | null) => {
  if (!image) return;
  const gId = getGlobalId(image.id);
  const item = createSimpleInteractionItem(gId, 'image', image.title, {
    image: image.thumbnail || '',
    location: image.location,
    category: image.category,
  });
  const isAdded = interactionStore.toggleLike(item);
  if (isAdded) {
    showMessage.like.success(image.title);
  } else {
    showMessage.like.cancel();
  }
};

const toggleImageLove = (image: GlobalImage | null) => {
  if (!image) return;
  const gId = getGlobalId(image.id);
  const item = createSimpleInteractionItem(gId, 'image', image.title, {
    image: image.thumbnail || '',
    location: image.location,
    category: image.category,
    author: image.author,
    authorId: image.authorId,
  });
  const isAdded = interactionStore.toggleLove(item);
  if (isAdded) {
    showMessage.love.success(image.title, 'image');
  } else {
    showMessage.love.cancel(image.title, 'image');
  }
};

const toggleImageFavorite = (image: GlobalImage | null) => {
  if (!image) return;
  const gId = getGlobalId(image.id);
  const item = createSimpleInteractionItem(gId, 'image', image.title, {
    image: image.thumbnail || '',
    location: image.location,
    category: image.category,
    author: image.author,
    authorId: image.authorId,
  });
  const isAdded = interactionStore.toggleFavorite(item);
  if (isAdded) {
    showMessage.favorite.success(image.title, 'image');
  } else {
    showMessage.favorite.cancel(image.title, 'image');
  }
};

const toggleImageShare = (image: GlobalImage | null) => {
  if (!image) return;
  interactionStore.incrementShares(getGlobalId(image.id));
  showMessage.share.success(image.title);
};

const handleDownload = (image: GlobalImage | null) => {
  if (!image) return;
  showMessage.download.success(image.title);
};

const openImageModal = (image: GlobalImage, index: number) => {
  selectedImage.value = image;
  currentImageIndex.value = index;
  showImageModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeImageModal = () => {
  showImageModal.value = false;
  document.body.style.overflow = '';
};

const navigateImage = (direction: number) => {
  const newIndex = currentImageIndex.value + direction;
  if (newIndex >= 0 && newIndex < images.value.length) {
    currentImageIndex.value = newIndex;
    selectedImage.value = images.value[newIndex];
  }
};

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped lang="scss" src="./index.scss" />

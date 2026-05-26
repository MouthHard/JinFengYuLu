<template>
  <section class="video-showcase">
    <div class="section-header">
      <div class="header-left">
        <span class="title-label">CINEMA</span>
        <h2 class="section-title">流光掠影</h2>
        <p class="section-subtitle">用镜头记录世界</p>
      </div>
      <button class="more-btn" @click="handleMore">
        <span>更多</span>
        <ArrowRightIcon :stroke-width="2" />
      </button>
    </div>

    <div v-if="videos.length > 0" class="coverflow-stage">
      <VideoFrame
        ref="videoFrameRef"
        :current-title="videos[activeIndex]?.title"
        :active-index="activeIndex"
        :total-count="videos.length"
        @select="setActive"
        @prev="prevSlide"
        @next="nextSlide"
      >
        <VideoSlide
          v-for="(video, index) in videos"
          :key="video.id"
          :video="video"
          :is-active="activeIndex === index"
          :slide-style="getSlideStyle(index)"
          :counts="getVideoCount(video.id)"
          :is-liked="isVideoLiked(video.id)"
          :is-loved="isVideoLoved(video.id)"
          :is-favorited="isVideoFavorited(video.id)"
          @click="setActive(index)"
          @play="openVideoModal(video)"
          @like="toggleVideoLike(video)"
          @love="toggleVideoLove(video)"
          @favorite="toggleVideoFavorite(video)"
          @share="toggleVideoShare(video)"
        />
      </VideoFrame>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M10 9l5 3-5 3V9z"/>
        </svg>
      </div>
      <p class="empty-text">暂无视频内容</p>
      <span class="empty-hint">精彩视频即将上线</span>
    </div>

    <VideoModal
      ref="videoModalRef"
      :visible="showVideoModal"
      :video="selectedVideo"
      :playlist="videos"
      :counts="selectedVideo ? getVideoCount(selectedVideo.id) : emptyCounts"
      :is-liked="selectedVideo ? isVideoLiked(selectedVideo.id) : false"
      :is-loved="selectedVideo ? isVideoLoved(selectedVideo.id) : false"
      :is-favorited="selectedVideo ? isVideoFavorited(selectedVideo.id) : false"
      :is-following="isFollowing"
      @close="closeVideoModal"
      @ended="handleVideoEnd"
      @follow="toggleFollow"
      @like="toggleVideoLike(selectedVideo)"
      @love="toggleVideoLove(selectedVideo)"
      @favorite="toggleVideoFavorite(selectedVideo)"
      @share="toggleVideoShare(selectedVideo)"
      @select="openVideoModal"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { showMessage, createSimpleInteractionItem } from '@/utils/landscape';
import { useInteractionStore } from '@/stores/landscape';
import { useHomeViewData } from '@/composables/landscape';
import type { GlobalVideo } from '@/typesOfPages/landscape/data';
import ArrowRightIcon from '@/pages/Landscape/icon/common/ArrowRightIcon.vue';
import VideoSlide from './components/VideoSlide/index.vue';
import VideoFrame from './components/VideoFrame/index.vue';
import VideoModal from './components/VideoModal/index.vue';

const interactionStore = useInteractionStore();
const showVideoModal = ref(false);
const selectedVideo = ref<GlobalVideo | null>(null);
const isFollowing = ref(false);
const activeIndex = ref(0);
const videoModalRef = ref<{ videoPlayer: HTMLVideoElement | null } | null>(null);

const emptyCounts = { views: 0, likes: 0, loves: 0, favorites: 0, shares: 0 };

const { videoShowcase } = useHomeViewData();
const videosData = videoShowcase();
const videos = ref(videosData);

const getVideoGlobalId = (id: string | number) => String(id);

onMounted(() => {
  interactionStore.registerBatch(
    videos.value.map((v: GlobalVideo) => ({
      id: getVideoGlobalId(v.id),
      counts: {
        likes: v.likes || 0,
        views: v.views || 0,
        loves: v.loves || 0,
        favorites: v.bookmarks || 0,
        shares: v.shares || 0,
      },
    })),
  );
});

const getVideoCount = (id: string | number) =>
  interactionStore.getCount(getVideoGlobalId(id));

const isVideoLiked = (id: string | number) =>
  interactionStore.isLiked(getVideoGlobalId(id));
const isVideoLoved = (id: string | number) =>
  interactionStore.isLoved(getVideoGlobalId(id));
const isVideoFavorited = (id: string | number) =>
  interactionStore.isFavorited(getVideoGlobalId(id));

const toggleVideoLike = (video: GlobalVideo | null) => {
  if (!video) return;
  const gId = getVideoGlobalId(video.id);
  const c = interactionStore.getCount(gId);
  const item = {
    id: gId,
    type: 'video' as const,
    title: video.title,
    image: video.poster || '',
    location: video.location,
    category: video.category,
    timestamp: Date.now(),
    likes: c.likes,
    views: c.views,
    favorites: c.favorites,
    shares: c.shares,
  };
  const isAdded = interactionStore.toggleLike(item);
  if (isAdded) {
    showMessage.like.success(video.title);
  } else {
    showMessage.like.cancel();
  }
};

const toggleVideoLove = (video: GlobalVideo | null) => {
  if (!video) return;
  const gId = getVideoGlobalId(video.id);
  const item = createSimpleInteractionItem(gId, 'video', video.title, {
    image: video.poster || '',
    location: video.location,
    category: video.category,
    author: video.author,
    authorId: video.authorId,
    authorAvatar: video.authorAvatar,
  });
  const isAdded = interactionStore.toggleLove(item);
  if (isAdded) {
    showMessage.love.success(video.title, 'video');
  } else {
    showMessage.love.cancel(video.title, 'video');
  }
};

const toggleVideoFavorite = (video: GlobalVideo | null) => {
  if (!video) return;
  const gId = getVideoGlobalId(video.id);
  const item = createSimpleInteractionItem(gId, 'video', video.title, {
    image: video.poster || '',
    location: video.location,
    category: video.category,
    author: video.author,
    authorId: video.authorId,
    authorAvatar: video.authorAvatar,
  });
  const isAdded = interactionStore.toggleFavorite(item);
  if (isAdded) {
    showMessage.favorite.success(video.title, 'video');
  } else {
    showMessage.favorite.cancel(video.title, 'video');
  }
};

const toggleVideoShare = (video: GlobalVideo | null) => {
  if (!video) return;
  interactionStore.incrementShares(getVideoGlobalId(video.id));
  showMessage.share.success(video.title);
};

const getSlideStyle = (index: number) => {
  const offset = index - activeIndex.value;
  const absOffset = Math.abs(offset);
  const isLeft = offset < 0;
  const translateX = offset * 280;
  const translateZ = -absOffset * 200;
  const rotateY = isLeft ? 45 : offset > 0 ? -45 : 0;
  const scale = Math.max(1 - absOffset * 0.15, 0.6);
  const opacity = Math.max(1 - absOffset * 0.3, 0.3);
  const zIndex = 100 - absOffset;

  return {
    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity: opacity,
    zIndex: zIndex,
    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
  };
};

const setActive = (index: number) => {
  activeIndex.value = index;
};

const prevSlide = () => {
  if (activeIndex.value > 0) activeIndex.value--;
};

const nextSlide = () => {
  if (activeIndex.value < videos.value.length - 1) activeIndex.value++;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (showVideoModal.value) return;
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});

const handleMore = () => {
  console.log('查看更多');
};

const openVideoModal = (video: any) => {
  selectedVideo.value = video;
  showVideoModal.value = true;
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    if (videoModalRef.value?.videoPlayer) {
      videoModalRef.value.videoPlayer.play();
    }
  }, 100);
};

const closeVideoModal = () => {
  showVideoModal.value = false;
  document.body.style.overflow = '';
  if (videoModalRef.value?.videoPlayer) {
    videoModalRef.value.videoPlayer.pause();
  }
};

const handleVideoEnd = () => {
  const video = selectedVideo.value;
  if (!video) return;
  const currentIndex = videos.value.findIndex((v) => v.id === video.id);
  const nextIndex = (currentIndex + 1) % videos.value.length;
  openVideoModal(videos.value[nextIndex]);
};

const toggleFollow = () => {
  isFollowing.value = !isFollowing.value;
};
</script>

<style scoped lang="scss" src="./index.scss" />

<template>
  <article
    class="guide-card"
    @mousemove="handleCardMouseMove"
  >
    <div class="card-image" @click="$emit('click', guide)">
      <img :src="guide.cover" :alt="guide.title" loading="lazy" />
      <div class="image-overlay"></div>

      <!-- 状态标签 -->
      <div class="card-badges">
        <span v-if="guide.isFeatured" class="badge featured">
          <StarIcon />
          精选
        </span>
        <span v-if="guide.isNew" class="badge new">
          <CircleIcon />
          新
        </span>
        <span v-if="guide.isHot" class="badge hot">
          <StarIcon />
          热
        </span>
      </div>

      <!-- 时长标签 -->
      <div class="card-duration">
        <ClockIcon />
        <span>{{ guide.duration }}</span>
      </div>
    </div>

    <div class="card-content">
      <!-- 位置标签 -->
      <div class="card-location">
        <LocationIcon />
        <span>{{ guide.location }}</span>
      </div>

      <!-- 标题行 -->
      <div class="title-row">
        <h3 class="card-title">{{ guide.title }}</h3>
        <span v-if="guide.publishDate" class="publish-date">{{ guide.publishDate }}</span>
      </div>

      <!-- 简介 -->
      <p class="card-excerpt">{{ guide.excerpt }}</p>

      <!-- 标签 -->
      <div class="card-tags">
        <span v-if="guide.travelMode" class="tag mode">{{ guide.travelMode }}</span>
        <span v-if="guide.sceneryTheme" class="tag theme">{{ guide.sceneryTheme }}</span>
        <span class="tag season">{{ seasonLabel }}</span>
      </div>

      <!-- 底部信息 -->
      <div class="card-footer">
        <div class="author-info">
          <img loading="lazy" :src="guide.authorAvatar" :alt="guide.author" />
          <div class="author-details">
            <span class="author-name">{{ guide.author }}</span>
            <span v-if="guide.category" class="author-badge">{{ guide.category }}</span>
          </div>
        </div>
      </div>

      <!-- 数据按钮行 -->
      <div class="card-stats-row">
        <div class="stat-item">
          <EyeIcon />
          <span>{{ formatNumber(getCount().views) }}</span>
        </div>
        <button 
          class="stat-item interactive" 
          type="button"
          :class="{ active: isLiked }"
          @click.stop="toggleLike"
        >
          <ThumbUpIcon />
          <span>{{ formatNumber(getCount().likes) }}</span>
        </button>
        <button 
          class="stat-item interactive" 
          type="button"
          :class="{ active: isLoved }"
          @click.stop="toggleLove"
        >
          <HeartIcon />
          <span>{{ formatNumber(getCount().loves) }}</span>
        </button>
        <button 
          class="stat-item interactive" 
          type="button"
          :class="{ active: isFavorited }"
          @click.stop="toggleBookmark"
        >
          <BookmarkIcon />
          <span>{{ formatNumber(getCount().favorites) }}</span>
        </button>
        <div class="stat-item">
          <ShareIcon />
          <span>{{ formatNumber(getCount().shares) }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { seasonMap } from '@/utils/landscape/constants';
import { useInteractionStore } from '@/stores/landscape';
import { formatNumber } from '@/utils/landscape/format';
import { showMessage, createSimpleInteractionItem } from '@/utils/landscape';
import StarIcon from '@/pages/Landscape/icon/common/StarIcon.vue';
import CircleIcon from '@/pages/Landscape/icon/components/guides/GuideCard/CircleIcon.vue';
import ClockIcon from '@/pages/Landscape/icon/common/ClockIcon.vue';
import LocationIcon from '@/pages/Landscape/icon/common/LocationIcon.vue';
import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
interface Guide {
  id: string;
  title: string;
  cover: string;
  excerpt: string;
  travelMode?: string;
  sceneryTheme?: string;
  location: string;
  locationId?: string;
  duration: string;
  views: number;
  likes: number;
  loves: number;
  bookmarks: number;
  shares: number;
  tags: string[];
  authorId: string;
  author: string;
  authorAvatar?: string;
  authorVerified?: boolean;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  season?: string;
  rating?: number;
  publishDate?: string;
  content?: string;
  type?: string;
  typeName?: string;
  date?: string;
  readTime?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isHot?: boolean;
}

interface Props {
  guide: Guide;
  index?: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'click', guide: Guide): void;
}>();

const interactionStore = useInteractionStore();

const seasonLabel = computed(() => {
  const season = props.guide.season || 'spring';
  return seasonMap[season] || season;
});

const getCount = () => interactionStore.getCount(props.guide.id);
const isLiked = computed(() => interactionStore.isLiked(props.guide.id));
const isLoved = computed(() => interactionStore.isLoved(props.guide.id));
const isFavorited = computed(() => interactionStore.isFavorited(props.guide.id));

const toggleLike = (event: MouseEvent) => {
  event.stopPropagation();
  const isLiked = interactionStore.toggleLike(props.guide.id);
  if (isLiked) {
    showMessage.like.success(props.guide.title);
  } else {
    showMessage.like.cancel();
  }
};

const toggleLove = (event: MouseEvent) => {
  event.stopPropagation();
  const item = createSimpleInteractionItem(
    props.guide.id,
    'guide',
    props.guide.title,
    {
      image: props.guide.cover,
      location: props.guide.location,
      author: props.guide.author,
      authorId: props.guide.authorId,
      authorAvatar: props.guide.authorAvatar,
    }
  );
  const isLoved = interactionStore.toggleLove(item);
  if (isLoved) {
    showMessage.love.success(props.guide.title, 'guide');
  } else {
    showMessage.love.cancel(props.guide.title, 'guide');
  }
};

const toggleBookmark = (event: MouseEvent) => {
  event.stopPropagation();
  const item = createSimpleInteractionItem(
    props.guide.id,
    'guide',
    props.guide.title,
    {
      image: props.guide.cover,
      location: props.guide.location,
      author: props.guide.author,
      authorId: props.guide.authorId,
      authorAvatar: props.guide.authorAvatar,
    }
  );
  const isFavorited = interactionStore.toggleFavorite(item);
  if (isFavorited) {
    showMessage.favorite.success(props.guide.title, 'guide');
  } else {
    showMessage.favorite.cancel(props.guide.title, 'guide');
  }
};

const handleCardMouseMove = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty('--mouse-x', `${x}%`);
  card.style.setProperty('--mouse-y', `${y}%`);
};
</script>

<style scoped lang="scss" src="./index.scss" />

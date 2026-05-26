<template>
  <div class="image-card" :style="{ '--delay': delay }">
    <!-- 挂钩系统：钉+D环 -->
    <div class="hanger">
      <span class="hanger-nail"></span>
      <span class="hanger-wire"></span>
      <span class="hanger-d-ring"></span>
    </div>

    <!-- 外框（实木相框） -->
    <div class="frame-outer">
      <!-- 木纹层：主纹理 -->
      <div class="frame-grain-primary"></div>
      <!-- 木纹层：横向细纹 -->
      <div class="frame-grain-secondary"></div>
      <!-- 木纹层：节疤不规则 -->
      <div class="frame-grain-knots"></div>
      <!-- 外斜面高光 -->
      <div class="frame-bevel-outer"></div>
      <!-- 内斜面阴影 -->
      <div class="frame-bevel-inner"></div>
      <!-- 内凹深槽 -->
      <div class="frame-rabbet"></div>
      <!-- 金箔镶边 -->
      <div class="frame-gilding"></div>

      <!-- 四角角花 -->
      <span class="corner-ornament corner-tl"></span>
      <span class="corner-ornament corner-tr"></span>
      <span class="corner-ornament corner-bl"></span>
      <span class="corner-ornament corner-br"></span>

      <!-- 四角铜钉 -->
      <span class="brass-brad brad-tl"></span>
      <span class="brass-brad brad-tr"></span>
      <span class="brass-brad brad-bl"></span>
      <span class="brass-brad brad-br"></span>

      <!-- 卡纸衬垫 -->
      <div class="mat-board">
        <!-- 照片窗口 -->
        <div class="photo-window">
          <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
          <div class="glass-overlay"></div>
          <div class="glass-glare"></div>

          <div class="photo-actions">
            <button class="action-btn like-btn" :class="{ liked: isLiked }" @click.stop="toggleLike">
              <svg viewBox="0 0 24 24" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
              <span>{{ formatCount(getCounts().likes) }}</span>
            </button>
            <button class="action-btn love-btn" :class="{ loved: isLoved }" @click.stop="toggleLove">
              <HeartIcon :filled="isLoved" :stroke-width="2" />
              <span>{{ formatCount(getCounts().loves) }}</span>
            </button>
            <button class="action-btn collect-btn" :class="{ collected: isCollected }" @click.stop="toggleCollect">
              <BookmarkIcon :filled="isCollected" :stroke-width="2" />
              <span>{{ formatCount(getCounts().favorites) }}</span>
            </button>
            <button class="action-btn share-btn" @click.stop="toggleShare">
              <ShareIcon :stroke-width="2" />
              <span>{{ formatCount(getCounts().shares) }}</span>
            </button>
          </div>

          <div class="views-badge">
            <EyeIcon />
            {{ formatCount(item.views || 0) }}
          </div>
        </div>

        <!-- 卡纸底部信息区 -->
        <div class="mat-info">
          <div class="info-top">
            <h3 class="info-title">{{ item.title }}</h3>
            <div v-if="item.rating" class="info-rating">
              <StarIcon />
              <span>{{ item.rating }}</span>
            </div>
          </div>

          <div class="info-meta">
            <LocationIcon />
            <span>{{ item.location }}</span>
            <span v-if="item.author" class="meta-dot"></span>
            <span v-if="item.author">{{ item.author }}</span>
          </div>

          <div class="info-tags">
            <span class="tag">{{ item.category }}</span>
            <span v-if="item.tag2" class="tag">{{ item.tag2 }}</span>
            <span v-if="item.tag3" class="tag">{{ item.tag3 }}</span>
          </div>

          <div class="info-footer">
            <div v-if="item.camera || item.date" class="footer-exif">
              <span v-if="item.camera" class="exif">
                <CameraIcon />
                {{ item.camera }}
              </span>
              <span v-if="item.date" class="exif">
                <CalendarIcon />
                {{ item.date }}
              </span>
            </div>
            <span class="footer-action">
              查看作品
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { showMessage } from '@/utils/landscape';
import type { ImageItem } from '@/typesOfPages/landscape';
import { useFormatNumber } from '@/composables/landscape';
import { useInteractionStore } from '@/stores/landscape';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
import StarIcon from '@/pages/Landscape/icon/common/StarIcon.vue';
import LocationIcon from '@/pages/Landscape/icon/common/LocationIcon.vue';
import CameraIcon from '@/pages/Landscape/icon/common/CameraIcon.vue';
import CalendarIcon from '@/pages/Landscape/icon/common/CalendarIcon.vue';
import ArrowRightIcon from '@/pages/Landscape/icon/common/ArrowRightIcon.vue';

const props = defineProps<{
  item: ImageItem;
  delay?: string;
}>();

const { formatCount } = useFormatNumber();
const interactionStore = useInteractionStore();

const isLiked = computed(() => interactionStore.isLiked(props.item.id));
const isShared = ref(false);
const isCollected = computed(() => interactionStore.isFavorited(props.item.id));
const isLoved = computed(() => interactionStore.isLoved(props.item.id));

const getCounts = () => interactionStore.getCount(props.item.id);

const toggleLike = () => {
  const isAdded = interactionStore.toggleLike(props.item.id);
  if (isAdded) {
    showMessage.like.success(props.item.title);
  } else {
    showMessage.like.cancel();
  }
};

const toggleLove = () => {
  const item = {
    id: props.item.id,
    type: 'image' as const,
    title: props.item.title,
    image: props.item.thumbnail || props.item.image || '',
    location: props.item.location,
    category: props.item.category,
    timestamp: Date.now(),
    likes: props.item.likes,
    views: props.item.views,
    favorites: props.item.favorites,
    shares: props.item.shares,
    author: props.item.author,
    authorId: props.item.authorId,
    authorAvatar: props.item.authorAvatar,
  };
  const isAdded = interactionStore.toggleLove(item);
  if (isAdded) {
    showMessage.love.success(props.item.title, 'image');
  } else {
    showMessage.love.cancel(props.item.title, 'image');
  }
};

const toggleShare = () => {
  isShared.value = !isShared.value;
  showMessage.share.success(props.item.title);
};

const toggleCollect = () => {
  const item = {
    id: props.item.id,
    type: 'image' as const,
    title: props.item.title,
    image: props.item.thumbnail || props.item.image || '',
    location: props.item.location,
    category: props.item.category,
    timestamp: Date.now(),
    likes: props.item.likes,
    views: props.item.views,
    favorites: props.item.favorites,
    shares: props.item.shares,
    author: props.item.author,
    authorId: props.item.authorId,
    authorAvatar: props.item.authorAvatar,
  };
  const isAdded = interactionStore.toggleFavorite(item);
  if (isAdded) {
    showMessage.favorite.success(props.item.title, 'image');
  } else {
    showMessage.favorite.cancel(props.item.title, 'image');
  }
};
</script>

<style scoped lang="scss" src="./index.scss" />

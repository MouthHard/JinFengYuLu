<template>
  <div class="video-card" :style="{ '--delay': delay }">
    <div class="card-ambient"></div>

    <!-- ===== 顶板（相机顶壳） ===== -->
    <div class="top-plate">
      <!-- 热靴座 -->
      <div class="hot-shoe">
        <span class="shoe-rail"></span>
        <span v-for="c in 4" :key="c" class="shoe-contact"></span>
      </div>
      <!-- 模式拨盘 -->
      <div class="mode-dial">
        <span class="dial-ring"></span>
        <span v-for="m in 8" :key="m" class="dial-mark" :style="{ '--m': m }"></span>
        <span class="dial-indicator"></span>
        <span class="dial-label">MOV</span>
      </div>
      <!-- 快门释放钮 -->
      <div class="shutter-btn"></div>
      <!-- 状态LED -->
      <div class="status-led">
        <span class="led-dot"></span>
        <span class="led-label">REC</span>
      </div>
    </div>

    <!-- ===== 机身主区 ===== -->
    <div class="camera-body">
      <!-- 左侧：胶片卷轴 + LCD屏 -->
      <div class="reel-section">
        <div class="reel-wheel left">
          <span v-for="s in 6" :key="s" class="spoke" :style="{ '--s': s }"></span>
          <span class="hub"></span>
        </div>

        <div class="film-frame">
          <div class="sprocket-track top">
            <span v-for="i in 8" :key="i" class="sprocket"></span>
          </div>

          <!-- LCD屏幕 -->
          <div class="lcd-screen">
            <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
            <div class="lcd-glare"></div>
            <div class="lcd-vignette"></div>

            <!-- 三分线网格 -->
            <div class="rule-thirds">
              <span class="h-line h1"></span>
              <span class="h-line h2"></span>
              <span class="v-line v1"></span>
              <span class="v-line v2"></span>
            </div>

            <!-- 播放指示器 -->
            <div class="play-indicator" @click.stop>
              <span class="tape-icon">
                <PlayIcon />
              </span>
              <span class="tape-line left"></span>
              <span class="tape-line right"></span>
            </div>

            <!-- 分辨率 -->
            <span v-if="item.resolution" class="res-stamp">{{ item.resolution }}</span>
            <!-- 时长 -->
            <span class="dur-stamp">{{ item.duration }}</span>
            <!-- 帧进度 -->
            <div class="film-progress">
              <div class="progress-track"></div>
              <div class="progress-head"></div>
            </div>
          </div>

          <div class="sprocket-track bottom">
            <span v-for="i in 8" :key="i" class="sprocket"></span>
          </div>
        </div>

        <div class="reel-wheel right">
          <span v-for="s in 6" :key="s" class="spoke" :style="{ '--s': s }"></span>
          <span class="hub"></span>
        </div>
      </div>

      <!-- 右侧：控制面板 -->
      <div class="control-section">
        <!-- OSD信息栏 -->
        <div class="osd-bar">
          <span class="osd-item iso">ISO 800</span>
          <span class="osd-sep"></span>
          <span class="osd-item">f/2.8</span>
          <span class="osd-sep"></span>
          <span class="osd-item">1/60s</span>
          <span class="osd-sep"></span>
          <span class="osd-item wb">AWB</span>
        </div>

        <!-- 取景器标题框 -->
        <div class="viewfinder-title">
          <span class="vf-corner tl"></span>
          <span class="vf-corner tr"></span>
          <span class="vf-corner bl"></span>
          <span class="vf-corner br"></span>
          <h3 class="vf-text">{{ item.title }}</h3>
        </div>

        <!-- 作者行 -->
        <div class="author-row">
          <UserIcon />
          <span>{{ item.author }}</span>
          <span class="dot"></span>
          <span v-if="item.fps" class="fps-label">{{ item.fps }}fps</span>
        </div>

        <!-- 描述 -->
        <p v-if="item.description" class="desc">{{ item.description }}</p>

        <!-- 标签 -->
        <div class="tag-row">
          <span class="tag">{{ item.category }}</span>
          <span v-if="item.tag2" class="tag">{{ item.tag2 }}</span>
          <span v-if="item.tag3" class="tag">{{ item.tag3 }}</span>
        </div>

        <!-- 仪表盘统计 -->
        <div class="dash-stats">
          <div class="gauge">
            <EyeIcon />
            <span class="gauge-val">{{ formatCount(getCounts().views) }}</span>
            <span class="gauge-label">播放</span>
          </div>
          <div class="gauge-sep"></div>
          <div class="gauge">
            <ThumbUpIcon />
            <span class="gauge-val">{{ formatCount(getCounts().likes) }}</span>
            <span class="gauge-label">点赞</span>
          </div>
          <div class="gauge-sep"></div>
          <div class="gauge" :class="{ 'is-loved': isLoved }">
            <HeartIcon :filled="isLoved" />
            <span class="gauge-val">{{ formatCount(getCounts().loves) }}</span>
            <span class="gauge-label">喜爱</span>
          </div>
          <div class="gauge-sep"></div>
          <div class="gauge" :class="{ 'is-collected': isCollected }">
            <BookmarkIcon :filled="isCollected" />
            <span class="gauge-val">{{ formatCount(getCounts().favorites) }}</span>
            <span class="gauge-label">收藏</span>
          </div>
          <div class="gauge-sep"></div>
          <div class="gauge">
            <ShareIcon />
            <span class="gauge-val">{{ formatCount(getCounts().shares) }}</span>
            <span class="gauge-label">分享</span>
          </div>
          <div class="gauge-sep"></div>
          <div v-if="item.comments" class="gauge">
            <CommentIcon />
            <span class="gauge-val">{{ formatCount(item.comments) }}</span>
            <span class="gauge-label">评论</span>
          </div>
        </div>

        <!-- 物理按钮组 -->
        <div class="action-bar">
          <button class="act-btn like-btn" :class="{ liked: isLiked }" @click.stop="toggleLike">
            <ThumbUpIcon :filled="isLiked" :stroke-width="2" />
          </button>
          <button class="act-btn love-btn" :class="{ loved: isLoved }" @click.stop="toggleLove">
            <HeartIcon :filled="isLoved" :stroke-width="2" />
          </button>
          <button class="act-btn collect-btn" :class="{ collected: isCollected }" @click.stop="toggleCollect">
            <BookmarkIcon :filled="isCollected" :stroke-width="2" />
          </button>
          <button class="act-btn share-btn" :class="{ shared: isShared }" @click.stop="toggleShare">
            <ShareIcon :stroke-width="2" />
          </button>
          <!-- 后拨轮 -->
          <div class="rear-dial">
            <span v-for="t in 12" :key="t" class="rd-tick" :style="{ '--t': t }"></span>
          </div>
          <span class="play-cta">
            播放影片
            <ArrowRightIcon />
          </span>
        </div>

        <!-- 胶片条码 -->
        <div class="film-barcode">
          <span v-for="b in 16" :key="b" class="bar" :class="{ thick: b % 3 === 0 }"></span>
          <span class="barcode-id">#{{ String(item.id).padStart(4, '0') }}</span>
        </div>
      </div>
    </div>

    <!-- ===== 底板（相机底壳） ===== -->
    <div class="bottom-plate">
      <div class="tripod-mount"></div>
      <div class="battery-compartment">
        <span class="bat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="18" height="10" rx="2"/>
            <line x1="22" y1="10" x2="22" y2="14"/>
            <rect x="4" y="9" width="6" height="6" fill="currentColor" stroke="none"/>
          </svg>
        </span>
      </div>
    </div>

    <div class="card-edge-glow"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { showMessage } from '@/utils/landscape';
import type { VideoItem } from '@/typesOfPages/landscape';
import { useFormatNumber } from '@/composables/landscape';
import { useInteractionStore } from '@/stores/landscape';
import PlayIcon from '@/pages/Landscape/icon/common/PlayIcon.vue';
import UserIcon from '@/pages/Landscape/icon/common/UserIcon.vue';
import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import CommentIcon from '@/pages/Landscape/icon/components/profile/VideoCard/CommentIcon.vue';
import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
import ArrowRightIcon from '@/pages/Landscape/icon/common/ArrowRightIcon.vue';

const props = defineProps<{
  item: VideoItem;
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
    type: 'video' as const,
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
    showMessage.love.success(props.item.title, 'video');
  } else {
    showMessage.love.cancel(props.item.title, 'video');
  }
};

const toggleShare = () => {
  isShared.value = !isShared.value;
  showMessage.share.success(props.item.title);
};

const toggleCollect = () => {
  const item = {
    id: props.item.id,
    type: 'video' as const,
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
    showMessage.favorite.success(props.item.title, 'video');
  } else {
    showMessage.favorite.cancel(props.item.title, 'video');
  }
};
</script>

<style scoped lang="scss" src="./index.scss" />

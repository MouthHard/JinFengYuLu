<template>
  <section class="photographer-recommendations">
    <div class="gallery-header">
      <div class="header-left">
        <span class="title-label">ARTISTS</span>
        <h2 class="section-title">追帧旅人</h2>
        <p class="section-subtitle">发现优秀的风景摄影师</p>
      </div>
      <button class="more-btn" @click="handleMore">
        探索更多
        <DoubleChevronDownIcon class="icon" style="width: 24px; height: 24px;" />
      </button>
    </div>

    <div class="gallery-stage">
      <div class="artist-panel">
        <Transition name="panel-slide" mode="out-in">
          <div :key="currentArtist.id" class="panel-inner">
            <div class="panel-top-accent"></div>

            <div class="panel-avatar-area">
              <div class="avatar-frame">
                <div class="avatar-ring-anim"></div>
                <div class="avatar-ring-outer"></div>
                <img loading="lazy" :src="currentArtist.avatar" :alt="currentArtist.name" class="avatar-img" />
              </div>
              <div class="avatar-glow"></div>
              <div class="avatar-particles">
                <span v-for="i in 4" :key="i" class="particle" :class="`p-${i}`"></span>
              </div>
            </div>

            <div class="panel-identity">
              <span class="identity-specialty">
                {{ currentArtist.specialty }}
              </span>
              <h3 class="identity-name">
                <span class="name-text">{{ currentArtist.name }}</span>
                <span class="name-underline"></span>
              </h3>
              <div v-if="activeIndex === 0" class="identity-featured">
                <StarIcon style="width: 12px; height: 12px;" />
                <span>Featured</span>
              </div>
            </div>

            <div class="panel-divider"></div>

            <p class="panel-bio">{{ currentArtist.bio }}</p>

            <div class="panel-stats">
              <div class="stat-item">
                <span class="stat-num">{{ currentArtist.worksCount }}</span>
                <span class="stat-label">作品</span>
                <div class="stat-glow"></div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-num">{{ currentArtist.followers }}</span>
                <span class="stat-label">粉丝</span>
                <div class="stat-glow"></div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-num">{{ currentArtist.likes }}</span>
                <span class="stat-label">点赞</span>
                <div class="stat-glow"></div>
              </div>
            </div>

            <div class="panel-tags">
              <div class="tag tag-location">
                <LocationIcon :stroke-width="2" style="width: 12px; height: 12px;" />
                <span>{{ currentArtist.location }}</span>
              </div>
              <div class="tag tag-rating">
                <StarIcon style="width: 12px; height: 12px;" />
                <span>{{ currentArtist.rating }}</span>
              </div>
              <span v-for="eq in currentArtist.equipment" :key="eq" class="tag tag-equip">
                {{ eq }}
              </span>
            </div>

            <div class="panel-actions">
              <button class="btn-follow" :class="{ followed: isFollowing(currentArtist.id) }"
                @click="toggleFollow(currentArtist.id)">
                <span class="btn-icon">
                  {{ isFollowing(currentArtist.id) ? '✓' : '+' }}
                </span>
                <span>
                  {{ isFollowing(currentArtist.id) ? '已关注' : '关注' }}
                </span>
              </button>
              <button class="btn-icon-only" :class="{ liked: isArtistLiked(currentArtist.id) }"
                @click="toggleArtistLike(currentArtist.id)">
                <ThumbUpIcon :filled="isArtistLiked(currentArtist.id)" :stroke-width="2" style="width: 16px; height: 16px;" />
              </button>
              <button class="btn-icon-only">
                <ShareIcon :stroke-width="2" style="width: 16px; height: 16px;" />
              </button>
            </div>

            <div class="panel-content-tabs">
              <div class="tab-indicator" :style="tabIndicatorStyle"></div>
              <button v-for="(tab, ti) in contentTabs" :key="tab.key" :ref="(el) => {
                  if (el) tabRefs[ti] = el as HTMLElement;
                }
                  "
                class="content-tab" :class="{ active: activeTab === tab.key }" @click="activeTab = tab.key">
                <span class="tab-label">{{ tab.label }}</span>
                <span class="tab-count">{{ getTabCount(tab.key) }}</span>
              </button>
            </div>
          </div>
        </Transition>
      </div>

      <div class="works-gallery">
        <TransitionGroup v-if="filteredWorks.length > 0" name="gallery-item" tag="div" class="gallery-grid">
          <div v-for="(work, wi) in filteredWorks" :key="`${currentArtist.id}-${work.id}`" class="work-card"
            :class="[`work-${work.type}`, `card-size-${work.size || 'normal'}`]"
            :style="{ '--card-delay': `${wi * 0.06}s` }">
            <div class="card-media">
              <img v-if="work.type === 'photo'" loading="lazy" :src="work.cover" :alt="work.title" class="media-img" />
              <div v-if="work.type === 'photo'" class="card-shine"></div>

              <div v-else-if="work.type === 'video'" class="media-video">
                <img loading="lazy" :src="work.cover" :alt="work.title" class="media-img" />
                <div class="video-overlay">
                  <div class="play-btn">
                    <div class="play-ripple"></div>
                    <PlayIcon style="width: 22px; height: 22px;" />
                  </div>
                  <span v-if="work.duration" class="video-duration">
                    {{ work.duration }}
                  </span>
                </div>
              </div>

              <div v-else-if="work.type === 'guide'" class="media-guide">
                <div class="guide-accent-line"></div>
                <div class="guide-icon">
                  <BookDetailIcon style="width: 28px; height: 28px;" />
                </div>
                <h4 class="guide-title">{{ work.title }}</h4>
                <p class="guide-excerpt">{{ work.excerpt }}</p>
                <div class="guide-read-more">
                  <span>阅读全文</span>
                  <ArrowRightIcon style="width: 14px; height: 14px;" />
                </div>
              </div>
            </div>

            <div class="card-info">
              <div class="card-info-row">
                <div class="card-type-badge" :class="`badge-${work.type}`">
                  <ImageIcon v-if="work.type === 'photo'" :stroke-width="2" style="width: 10px; height: 10px;" />
                  <PlayIcon v-else-if="work.type === 'video'" style="width: 10px; height: 10px;" />
                  <BookIcon v-else-if="work.type === 'guide'" :stroke-width="2" style="width: 10px; height: 10px;" />
                  <span v-if="work.type === 'photo'">Photo</span>
                  <span v-else-if="work.type === 'video'">Video</span>
                  <span v-else-if="work.type === 'guide'">Guide</span>
                </div>
                <span v-if="work.type !== 'guide'" class="card-title">
                  {{ work.title }}
                </span>
              </div>

              <div v-if="work.views || work.likes" class="card-actions">
                <span v-if="work.views" class="act-chip act-views">
                  <EyeIcon :stroke-width="2" />
                  {{ work.views }}
                </span>
                <button v-if="work.likes" class="act-chip act-like" :class="{ liked: isWorkLiked(work.id) }" @click.stop="handleWorkLike(work)">
                  <ThumbUpIcon :filled="isWorkLiked(work.id)" :stroke-width="2" />
                  {{ getWorkDisplayLikes(work) }}
                </button>
                <button class="act-chip act-love" :class="{ loved: isWorkLoved(work.id) }" @click.stop="handleWorkLove(work)">
                  <HeartIcon :filled="isWorkLoved(work.id)" :stroke-width="2" />
                  {{ getWorkDisplayLoves(work) }}
                </button>
                <button v-if="work.bookmarks" class="act-chip act-bookmark" :class="{ collected: isWorkFavorited(work.id) }" @click.stop="handleWorkFavorite(work)">
                  <BookmarkIcon :filled="isWorkFavorited(work.id)" :stroke-width="2" />
                  {{ getWorkDisplayBookmarks(work) }}
                </button>
                <button class="act-chip act-share" @click.stop="handleWorkShare(work)">
                  <ShareIcon :stroke-width="2" />
                  {{ getWorkDisplayShares(work) }}
                </button>
                <button v-if="work.type === 'photo' || work.type === 'video'" class="act-chip act-download">
                  <DownloadIcon :stroke-width="2" />
                </button>
              </div>
            </div>
          </div>
        </TransitionGroup>
        <div v-else class="empty-state">
          <div class="empty-icon">📷</div>
          <h3>暂无作品</h3>
          <p>该摄影师还没有上传作品</p>
        </div>
      </div>
    </div>

    <div class="artist-switcher">
      <button class="switcher-arrow" @click="switchArtist(-1)">
        <ChevronLeftIcon />
      </button>

      <div class="switcher-track">
        <div class="track-bg-line"></div>
        <div v-for="(artist, idx) in photographers" :key="artist.id" class="switcher-capsule"
          :class="{ active: idx === activeIndex }" @click="switchToArtist(artist.id)">
          <div v-if="idx === activeIndex" class="capsule-dot-ring"></div>
          <img loading="lazy" :src="artist.avatar" :alt="artist.name" class="capsule-avatar" />
          <div class="capsule-info">
            <span class="capsule-name">{{ artist.name }}</span>
            <span class="capsule-spec">
              {{ artist.specialty.split('·')[0].trim() }}
            </span>
          </div>
        </div>
      </div>

      <button class="switcher-arrow" @click="switchArtist(1)">
        <ChevronRightIcon />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue';
import { showMessage } from '@/utils/landscape';
import { contentTabs } from '@/utils/landscape/constants';
import { useHomeViewData } from '@/composables/landscape';
import { useInteractionStore } from '@/stores/landscape';
import { parseCount, formatNumber } from '@/utils/landscape/format';
import { convertWorkToInteractionItem as buildWorkInteractionItem } from '@/utils/landscape/interaction';
import type { InteractionItem } from '@/typesOfPages/landscape';
import StarIcon from '@/pages/Landscape/icon/common/StarIcon.vue';
import LocationIcon from '@/pages/Landscape/icon/common/LocationIcon.vue';
import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
import PlayIcon from '@/pages/Landscape/icon/common/PlayIcon.vue';
import BookIcon from '@/pages/Landscape/icon/common/BookIcon.vue';
import ArrowRightIcon from '@/pages/Landscape/icon/common/ArrowRightIcon.vue';
import ImageIcon from '@/pages/Landscape/icon/common/ImageIcon.vue';
import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
import DownloadIcon from '@/pages/Landscape/icon/common/DownloadIcon.vue';
import ChevronLeftIcon from '@/pages/Landscape/icon/common/ChevronLeftIcon.vue';
import ChevronRightIcon from '@/pages/Landscape/icon/common/ChevronRightIcon.vue';
import DoubleChevronDownIcon from '@/pages/Landscape/icon/components/home/PhotographerRecommendations/DoubleChevronDownIcon.vue';
import BookDetailIcon from '@/pages/Landscape/icon/components/home/PhotographerRecommendations/BookDetailIcon.vue';

const interactionStore = useInteractionStore();
const { photographerRecommendations } = useHomeViewData();
const photographersData = photographerRecommendations();
const photographers = ref(photographersData);

const getArtistId = (id: string) => `pho-${id}`;
const getWorkId = (id: string) => id;

interactionStore.registerBatch(
  photographersData.flatMap(artist => 
    artist.works.map(work => ({
      id: getWorkId(work.id),
      counts: {
        likes: parseCount(work.likes || '0'),
        views: parseCount(work.views || '0'),
        loves: parseCount(work.loves || '0'),
        favorites: parseCount(work.bookmarks || '0'),
        shares: parseCount(work.shares || '0'),
      },
    }))
  )
);

type WorkItem = typeof photographersData[0]['works'][0];

const activeIndex = ref(0);
const activeTab = ref('all');
const tabRefs = ref<HTMLElement[]>([]);

const currentArtist = computed(() => photographers.value[activeIndex.value]);
const total = computed(() => photographers.value.length);

const tabIndicatorStyle = computed(() => {
  const idx = contentTabs.findIndex((t) => t.key === activeTab.value);
  if (idx < 0 || !tabRefs.value[idx]) return { left: '0px', width: '0px' };
  const el = tabRefs.value[idx];
  return {
    left: `${el.offsetLeft}px`,
    width: `${el.offsetWidth}px`,
  };
});

watch(activeTab, () => {
  nextTick(() => {
    void tabIndicatorStyle.value;
  });
});

const filteredWorks = computed(() => {
  const works = currentArtist.value.works;
  if (activeTab.value === 'all') return works;
  return works.filter((w) => w.type === activeTab.value);
});

const getTabCount = (tabKey: string): number => {
  const works = currentArtist.value.works;
  if (tabKey === 'all') return works.length;
  return works.filter((w) => w.type === tabKey).length;
};

const switchArtist = (direction: number) => {
  activeTab.value = 'all';
  activeIndex.value =
    (activeIndex.value + direction + total.value) % total.value;
};

const switchToArtist = (id: string) => {
  const idx = photographers.value.findIndex((p) => p.id === id);
  if (idx !== -1) {
    activeTab.value = 'all';
    activeIndex.value = idx;
  }
};

const handleMore = () => {
  console.log('查看更多');
};

const toggleFollow = (id: string) => {
  const artist = photographers.value.find(p => p.id === id);
  if (!artist) return;
  
  const isFollowing = interactionStore.toggleFollowPhotographer(id);
  
  if (isFollowing) {
    showMessage.follow.success(artist.name);
  } else {
    showMessage.follow.cancel(artist.name);
  }
};

const isFollowing = (id: string) => {
  return interactionStore.isFollowing(id);
};

const toggleArtistLike = (id: string) => {
  const artist = photographers.value.find(p => p.id === id);
  if (!artist) return;
  
  const aId = getArtistId(id);
  const c = interactionStore.getCount(aId);
  const item: InteractionItem = {
    id: aId,
    type: 'photographer',
    title: artist.name,
    image: artist.avatar,
    location: artist.location,
    category: artist.specialty,
    timestamp: Date.now(),
    likes: c.likes,
    views: c.views,
    favorites: c.favorites,
    shares: c.shares,
  };
  
  const isAdded = interactionStore.toggleLike(item);
  
  if (isAdded) {
    showMessage.like.success(artist.name);
  } else {
    showMessage.like.cancel();
  }
};

const isArtistLiked = (id: string) => {
  return interactionStore.isLiked(getArtistId(id));
};

const convertWorkToInteractionItem = (work: WorkItem, artist: any): InteractionItem => {
  return buildWorkInteractionItem(
    {
      ...work,
      image: work.cover,
      likes: work.likes ? parseCount(work.likes) : undefined,
      views: work.views ? parseCount(work.views) : undefined,
      loves: work.loves ? parseCount(work.loves) : undefined,
      favorites: work.bookmarks ? parseCount(work.bookmarks) : undefined,
      shares: work.shares ? parseCount(work.shares) : undefined,
    } as any,
    artist as any,
    (id) => interactionStore.getCount(id),
  );
};

const handleWorkLike = (work: WorkItem) => {
  const item = convertWorkToInteractionItem(work, currentArtist.value);
  const isAdded = interactionStore.toggleLike(item);
  if (isAdded) {
    showMessage.like.success(work.title);
  } else {
    showMessage.like.cancel();
  }
};

const handleWorkLove = (work: WorkItem) => {
  const item = convertWorkToInteractionItem(work, currentArtist.value);
  const isAdded = interactionStore.toggleLove(item);
  const type = work.type === 'photo' ? 'image' : work.type === 'video' ? 'video' : 'guide';
  if (isAdded) {
    showMessage.love.success(work.title, type);
  } else {
    showMessage.love.cancel(work.title, type);
  }
};

const handleWorkFavorite = (work: WorkItem) => {
  const item = convertWorkToInteractionItem(work, currentArtist.value);
  const isAdded = interactionStore.toggleFavorite(item);
  const type = work.type === 'photo' ? 'image' : work.type === 'video' ? 'video' : 'guide';
  if (isAdded) {
    showMessage.favorite.success(work.title, type);
  } else {
    showMessage.favorite.cancel(work.title, type);
  }
};

const handleWorkShare = (work: WorkItem) => {
  interactionStore.incrementShares(getWorkId(work.id));
  showMessage.share.success(work.title);
};

const isWorkLiked = (id: string) => interactionStore.isLiked(getWorkId(id));
const isWorkLoved = (id: string) => interactionStore.isLoved(getWorkId(id));
const isWorkFavorited = (id: string) => interactionStore.isFavorited(getWorkId(id));

const getWorkDisplayLikes = (work: WorkItem): string => {
  const count = interactionStore.getCount(getWorkId(work.id));
  return formatNumber(count.likes);
};

const getWorkDisplayLoves = (work: WorkItem): string => {
  const count = interactionStore.getCount(getWorkId(work.id));
  return formatNumber(count.loves);
};

const getWorkDisplayBookmarks = (work: WorkItem): string => {
  const count = interactionStore.getCount(getWorkId(work.id));
  return formatNumber(count.favorites);
};

const getWorkDisplayShares = (work: WorkItem): string => {
  const count = interactionStore.getCount(getWorkId(work.id));
  return formatNumber(count.shares);
};
</script>

<style scoped lang="scss" src="./index.scss" />

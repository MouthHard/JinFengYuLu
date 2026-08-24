<template>
  <div class="studyroom-page">
    <!-- 固定头部区域 -->
    <div class="sticky-header">
      <header class="page-header">
        <button class="back-button" @click="goBack">返回</button>

        <div class="header-content">
          <div class="decoration-pattern left">
            <span class="pattern-line"></span>
            <span class="pattern-diamond"></span>
            <span class="pattern-line"></span>
          </div>

          <div class="header-title-area">
            <div class="title-seal">
              <span class="seal-char">我</span>
              <span class="seal-char">的</span>
              <span class="seal-char">书</span>
              <span class="seal-char">房</span>
            </div>
            <div class="title-decoration-line"></div>
            <p class="title-subtitle">珍藏诗意 · 品味人生</p>
          </div>

          <div class="decoration-pattern right">
            <span class="pattern-line"></span>
            <span class="pattern-diamond"></span>
            <span class="pattern-line"></span>
          </div>
        </div>
      </header>

      <!-- 悬浮状态徽章模块 -->
      <div class="status-badges-float">
        <div v-for="badge in statusBadges" :key="badge.key" class="status-badge" :class="badge.key"
          @click="badge.action?.()">
          <BadgeIcon :d="badge.iconPath" />
          <span class="badge-value">{{ badge.value }}</span>
          <span class="badge-label">{{ badge.label }}</span>
        </div>
      </div>

      <!-- 标签页切换 -->
      <div class="tabs-wrapper">
        <div class="tabs-container">
          <div v-for="tab in tabs" :key="tab.key" class="tab-item" :class="{ active: activeTab === tab.key }"
            @click="activeTab = tab.key">
            <span class="tab-icon">
              <component :is="tab.icon" />
            </span>
            <span class="tab-label">{{ tab.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 内容区域 -->
    <main class="page-main">
      <!-- ===== 喜爱 / 收藏：诗词卡片列表 ===== -->
      <template v-if="activeTab === 'loved' || activeTab === 'favorites'">
        <section class="poems-section">
          <h2 v-if="currentPoems.length > 0" class="section-title">
            {{ currentSectionTitle }}
          </h2>
          <div v-if="currentPoems.length > 0" class="poems-grid">
            <StudyRoomCard v-for="poem in currentPoems" :key="poem.id" :poem="poem" :type="activeTab"
              @click="handlePoemClick" @remove="handleRemove" />
          </div>
          <div v-else class="empty-state">
            <div class="empty-icon"><component :is="emptyIcon" /></div>
            <h3>{{ emptyTitle }}</h3>
            <p>{{ emptyDesc }}</p>
            <button class="go-browse-btn" @click="goBrowse">去浏览诗词</button>
          </div>
        </section>
      </template>

      <!-- ===== 探索：功能模块区 ===== -->
      <template v-if="activeTab === 'explore'">
        <section class="modules-section">
          <!-- 今日推荐 -->
          <div v-if="dailyPick" class="module-card daily-pick"
            @click="handlePoemClick(dailyPick, getBackgroundUrl(dailyPick.id))">
            <div class="module-header">
              <span class="module-tag">今日推荐</span>
              <button class="refresh-btn" title="换一首" @click.stop="refreshDailyPick">
                <RefreshIcon />
              </button>
            </div>
            <div class="module-body">
              <h3 class="pick-title">{{ dailyPick.title }}</h3>
              <p class="pick-meta">
                {{ dailyPick.dynasty }} · {{ dailyPick.author }}
              </p>
              <p class="pick-content">
                {{ dailyPick.content.slice(0, 2).join(',') }}
              </p>
            </div>
            <div class="pick-hint">点击查看全文</div>
          </div>

          <!-- 我的诗人 -->
          <div class="module-card my-poets">
            <div class="module-header">
              <span class="module-tag">我的诗人</span>
            </div>
            <div v-if="favoritePoets.length > 0" class="module-body poets-list">
              <div v-for="(poet, idx) in favoritePoets.slice(0, 8)" :key="idx" class="poet-item"
                @click="goSearch(poet.name)">
                <span class="poet-rank">{{ idx + 1 }}</span>
                <span class="poet-name">{{ poet.name }}</span>
                <span class="poet-dynasty">{{ poet.dynasty }}</span>
                <span class="poet-count">{{ poet.count }}首</span>
              </div>
            </div>
            <div v-else class="module-body module-empty">
              <p>喜爱或收藏诗词后，此处将显示你常读的诗人</p>
            </div>
          </div>

          <!-- 最近浏览 -->
          <div class="module-card recent-views">
            <div class="module-header">
              <span class="module-tag">最近浏览</span>
              <button v-if="recentViewPoems.length > 0" class="clear-btn" title="清空" @click="handleClearRecent">
                清空
              </button>
            </div>
            <div v-if="recentViewPoems.length > 0" class="module-body recent-list">
              <div v-for="poem in recentViewPoems.slice(0, 6)" :key="poem.id" class="recent-item"
                @click="handlePoemClick(poem, getBackgroundUrl(poem.id))">
                <span class="recent-title">{{ poem.title }}</span>
                <span class="recent-author">{{ poem.author }}</span>
              </div>
            </div>
            <div v-else class="module-body module-empty">
              <p>查看过的诗词将记录于此</p>
            </div>
          </div>

          <!-- 诗词足迹 -->
          <div class="module-card poetry-footprint">
            <div class="module-header">
              <span class="module-tag">诗词足迹</span>
            </div>
            <div v-if="dynastyDistribution.length > 0" class="module-body footprint-chart">
              <div v-for="(item, idx) in dynastyDistribution.slice(0, 6)" :key="idx" class="footprint-bar-wrapper">
                <span class="footprint-name">{{ item.name }}</span>
                <div class="footprint-bar-track">
                  <div class="footprint-bar-fill" :style="{
                    width: `${(item.value / maxDynastyCount) * 100}%`,
                  }"></div>
                </div>
                <span class="footprint-count">{{ item.value }}首</span>
              </div>
            </div>
            <div v-else class="module-body module-empty">
              <p>你的诗词朝代偏好分布图</p>
            </div>
          </div>
        </section>
      </template>
    </main>

    <!-- 诗词详情弹窗 -->
    <PoemModal v-if="selectedPoem" :visible="showModal" :poem="selectedPoem" :background-image="selectedPoemBackground"
      @close="showModal = false" @tag-click="handleTagClick" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
const PoemModal = defineAsyncComponent(() => import('../PoemModal/index.vue'));
import { useAphorismDataStore } from '@/stores/aphorism';
import { useAphorismInteractionStore } from '@/stores/aphorism/interaction';
import type { Poem } from '@/types/aphorism/poem';
import StudyRoomCard from './components/StudyRoomCard/index.vue';
import BadgeIcon from '../../icons/StudyRoom/BadgeIcon.vue';
import RefreshIcon from '../../icons/StudyRoom/RefreshIcon.vue';
import { getBackgroundUrl } from '../../../../composables/aphorism/usePoemBackground';
import './index.scss';

const router = useRouter();
const dataStore = useAphorismDataStore();
const interactionStore = useAphorismInteractionStore();

const allPoems = computed(() => dataStore.getAllPoems());
const selectedPoem = ref<Poem | null>(null);
const selectedPoemBackground = ref('');
const showModal = ref(false);
const activeTab = ref<'loved' | 'favorites' | 'explore'>('loved');

// ---- 背景图工具（使用共享 composable） ----

// ---- 三个标签页 ----
import HeartIcon from '../../icons/common/HeartIcon.vue';
import BookmarkIcon from '../../icons/PoemModal/BookmarkIcon.vue';
import CompassIcon from '../../icons/StudyRoom/CompassIcon.vue';

const tabs = [
  {
    key: 'loved' as const,
    label: '喜爱',
    icon: HeartIcon,
  },
  {
    key: 'favorites' as const,
    label: '收藏',
    icon: BookmarkIcon,
  },
  {
    key: 'explore' as const,
    label: '探索',
    icon: CompassIcon,
  },
];

// ---- 悬浮状态徽章 ----
const favoritePoets = computed(() =>
  interactionStore.getFavoritePoets(allPoems.value),
);
const dynastyDistributionRaw = computed(() =>
  interactionStore.getDynastyDistribution(allPoems.value),
);
const dynastyDistribution = computed(() =>
  dynastyDistributionRaw.value.map((d) => ({ name: d.name, value: d.count })),
);

const statusBadges = computed(() => [
  {
    key: 'loved',
    label: '喜爱',
    value: interactionStore.lovedCount,
    iconPath:
      'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    action: () => {
      activeTab.value = 'loved';
    },
  },
  {
    key: 'favorites',
    label: '收藏',
    value: interactionStore.favoriteCount,
    iconPath: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z',
    action: () => {
      activeTab.value = 'favorites';
    },
  },
  {
    key: 'poets',
    label: '诗人',
    value: favoritePoets.value.length,
    iconPath:
      'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 018 0M9 7v4m0 0v4m0-4h4',
    action: () => {
      activeTab.value = 'explore';
    },
  },
  {
    key: 'dynasties',
    label: '朝代',
    value: dynastyDistribution.value.length,
    iconPath: 'M4 6h16M4 10h16M4 14h16M4 18h16',
    action: () => {
      activeTab.value = 'explore';
    },
  },
]);
const currentPoems = computed(() => {
  if (activeTab.value === 'loved')
    return interactionStore.getLovedPoems(allPoems.value);
  if (activeTab.value === 'favorites')
    return interactionStore.getFavoritePoems(allPoems.value);
  return [];
});

const currentSectionTitle = computed(() =>
  activeTab.value === 'loved' ? '我喜爱的诗词' : '我收藏的诗词',
);

const emptyIcon = computed(() =>
  activeTab.value === 'loved' ? HeartIcon : BookmarkIcon,
);
const emptyTitle = computed(() =>
  activeTab.value === 'loved' ? '暂无喜爱的诗词' : '暂无收藏的诗词',
);
const emptyDesc = computed(() =>
  activeTab.value === 'loved'
    ? '在诗词详情中点击喜爱按钮，将喜欢的诗词收入书房'
    : '在诗词详情中点击收藏按钮，将诗词加入书签',
);

const maxDynastyCount = computed(() =>
  Math.max(...dynastyDistributionRaw.value.map((d) => d.count), 1),
);

// ---- 今日推荐 ----
const dailyPick = ref<Poem | null>(null);

const refreshDailyPick = () => {
  if (allPoems.value.length === 0) return;
  dailyPick.value = allPoems.value[Math.floor(Math.random() * allPoems.value.length)];
};

const getTodaySeed = () => {
  const today = new Date();
  return (
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate()
  );
};

watch(
  () => allPoems.value.length,
  (len) => {
    if (len > 0 && !dailyPick.value) {
      dailyPick.value = allPoems.value[getTodaySeed() % len];
    }
  },
  { immediate: true },
);

// ---- 最近浏览 ----
const recentViewPoems = computed(() =>
  interactionStore.getRecentViewPoems(allPoems.value),
);

// ---- 方法 ----
onMounted(() => {
  if (allPoems.value.length === 0) {
    dataStore.loadPoems();
  }
});

const goBack = () => router.push('/aphorism');
const goBrowse = () => router.push('/aphorism');
const goSearch = (keyword: string) => {
  router.push({ path: '/aphorism', query: { search: keyword } });
};

const handlePoemClick = (poem: Poem, backgroundImage: string) => {
  interactionStore.addRecentView(poem.id);
  selectedPoem.value = poem;
  selectedPoemBackground.value = backgroundImage;
  showModal.value = true;
};

const handleRemove = (poemId: number) => {
  if (activeTab.value === 'loved') {
    interactionStore.toggleLove(poemId);
  } else {
    interactionStore.toggleFavorite(poemId);
  }
};

const handleClearRecent = () => {
  interactionStore.clearRecentViews();
};

const handleTagClick = (tag: string) => {
  showModal.value = false;
  router.push({ path: '/aphorism', query: { search: tag } });
};
</script>

<style scoped lang="scss">
@use './index.scss';
</style>

<template>
  <div class="category-panel">
    <div class="category-panel__body">
      <!-- 左侧分类维度导航 -->
      <nav class="category-panel__tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="category-panel__tab"
          :class="{ 'category-panel__tab--active': activeTab === tab.key }"
          @mouseenter="activeTab = tab.key"
          @click="activeTab = tab.key"
        >
          <span class="category-panel__tab-icon">{{ tab.icon }}</span>
          <span class="category-panel__tab-label">{{ tab.label }}</span>
          <span class="category-panel__tab-glow" :style="{ background: tab.color }"></span>
        </button>
      </nav>

      <!-- 右侧内容区 -->
      <div class="category-panel__content">
        <transition name="panel-switch" mode="out-in">
          <div :key="activeTab" class="category-panel__section">
            <!-- 维度描述 -->
            <div class="category-panel__section-head">
              <span class="category-panel__section-icon">{{ currentTab?.icon }}</span>
              <h4 class="category-panel__section-title">{{ currentTab?.label }}</h4>
              <p class="category-panel__section-subtitle">{{ currentTab?.desc }}</p>
            </div>

            <!-- 类型维度：主分类 + 子标签 -->
            <div v-if="activeTab === 'genres'" class="category-panel__genres">
              <button
                v-for="cat in genreCategories"
                :key="cat.key"
                class="genre-card"
                :style="{ '--genre-color': cat.color, '--genre-color-rgb': hexToRgb(cat.color) }"
                @click="selectCategory(cat.key)"
              >
                <div class="genre-card__bg"></div>
                <div class="genre-card__main">
                  <span class="genre-card__icon">{{ cat.icon }}</span>
                  <div class="genre-card__info">
                    <span class="genre-card__label">{{ cat.label }}</span>
                    <span class="genre-card__count">{{ getCategoryCount(cat.key) }} 款游戏</span>
                  </div>
                </div>
                <div class="genre-card__tags">
                  <span v-for="tag in cat.subTags" :key="tag" class="genre-card__tag">{{ tag }}</span>
                </div>
                <div class="genre-card__arrow">→</div>
              </button>
            </div>

            <!-- 标签维度：热门标签云 -->
            <div v-else-if="activeTab === 'tags'" class="category-panel__tags">
              <button
                v-for="tag in themeTags"
                :key="tag.key"
                class="theme-tag"
                :class="{ 'theme-tag--hot': tag.hot }"
                :style="{ '--tag-color': tag.color, '--tag-color-rgb': hexToRgb(tag.color) }"
                @click="selectFilter(tag.key, 'tag')"
              >
                <span class="theme-tag__icon">{{ tag.icon }}</span>
                <span class="theme-tag__label">{{ tag.label }}</span>
                <span v-if="tag.hot" class="theme-tag__badge">HOT</span>
              </button>
            </div>

            <!-- 平台维度 -->
            <div v-else-if="activeTab === 'platforms'" class="category-panel__platforms">
              <button
                v-for="platform in platformCategories"
                :key="platform.key"
                class="platform-card"
                :style="{ '--platform-color': platform.color }"
                @click="selectFilter(platform.key, 'platform')"
              >
                <span class="platform-card__icon">{{ platform.icon }}</span>
                <div class="platform-card__info">
                  <span class="platform-card__label">{{ platform.label }}</span>
                  <span class="platform-card__count">{{ getPlatformCount(platform.key) }} 款游戏</span>
                </div>
                <span class="platform-card__check">✓</span>
              </button>
            </div>

            <!-- 玩家规模维度 -->
            <div v-else-if="activeTab === 'players'" class="category-panel__players">
              <button
                v-for="mode in playerModes"
                :key="mode.key"
                class="player-card"
                :style="{ '--player-color': mode.color, '--player-color-rgb': hexToRgb(mode.color) }"
                @click="selectFilter(mode.key, 'player')"
              >
                <span class="player-card__icon">{{ mode.icon }}</span>
                <div class="player-card__info">
                  <span class="player-card__label">{{ mode.label }}</span>
                  <span class="player-card__desc">{{ mode.desc }}</span>
                </div>
              </button>
            </div>

            <!-- 特色内容维度 -->
            <div v-else-if="activeTab === 'features'" class="category-panel__features">
              <button
                v-for="feature in featureCategories"
                :key="feature.key"
                class="feature-card"
                :style="{ '--feature-color': feature.color, '--feature-color-rgb': hexToRgb(feature.color) }"
                @click="selectFilter(feature.key, 'feature')"
              >
                <span class="feature-card__icon">{{ feature.icon }}</span>
                <span class="feature-card__label">{{ feature.label }}</span>
              </button>
            </div>

            <!-- 价格特惠维度 -->
            <div v-else-if="activeTab === 'deals'" class="category-panel__deals">
              <button
                v-for="deal in dealCategories"
                :key="deal.key"
                class="deal-card"
                :style="{ '--deal-color': deal.color }"
                @click="selectFilter(deal.key, 'deal')"
              >
                <div class="deal-card__left">
                  <span class="deal-card__icon">{{ deal.icon }}</span>
                  <div class="deal-card__info">
                    <span class="deal-card__label">{{ deal.label }}</span>
                    <span class="deal-card__desc">{{ deal.desc }}</span>
                  </div>
                </div>
                <span class="deal-card__count">{{ deal.count }} 款</span>
              </button>
            </div>
          </div>
        </transition>

        <!-- 底部推荐位 -->
        <div class="category-panel__footer">
          <div class="category-panel__footer-title">
            <span>🔥</span>
            <span>当前热门</span>
          </div>
          <div class="category-panel__hot-list">
            <button
              v-for="item in hotQuickFilters"
              :key="item.key"
              class="hot-chip"
              @click="selectFilter(item.key, item.type)"
            >
              <span class="hot-chip__icon">{{ item.icon }}</span>
              <span class="hot-chip__label">{{ item.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { fetchGames, type GameItemResponse } from '@/services/game';

const emit = defineEmits<{
  select: [payload: { type: string; value: string }];
  close: [];
}>();

const activeTab = ref('genres');
const games = ref<GameItemResponse[]>([]);

onMounted(async () => {
  try {
    const res = await fetchGames({ limit: 50 });
    games.value = res.items;
  } catch (e) {
    console.error('Failed to load category panel data:', e);
  }
});

const tabs = [
  { key: 'genres', label: '游戏类型', icon: '🎯', color: '#f5b342', desc: '按游戏玩法与题材选择' },
  { key: 'tags', label: '热门标签', icon: '🏷️', color: '#4ecdc4', desc: '当前玩家最关注的主题' },
  { key: 'platforms', label: '游戏平台', icon: '🖥️', color: '#66c0f4', desc: '选择你的游戏设备' },
  { key: 'players', label: '玩家人数', icon: '👥', color: '#a78bfa', desc: '按游戏人数与模式筛选' },
  { key: 'features', label: '特色内容', icon: '✨', color: '#f472b6', desc: '按游戏特色体验筛选' },
  { key: 'deals', label: '价格特惠', icon: '💰', color: '#22c55e', desc: '超值游戏与优惠活动' },
];

const currentTab = computed(() => tabs.find(t => t.key === activeTab.value));

const genreCategories = [
  {
    key: 'action',
    label: '动作',
    icon: '⚔️',
    color: '#ef4444',
    subTags: ['动作冒险', '平台跳跃', '格斗', '砍杀', '潜行'],
  },
  {
    key: 'rpg',
    label: '角色扮演',
    icon: '🛡️',
    color: '#a855f7',
    subTags: ['动作RPG', '回合制RPG', '沙盒RPG', 'MMORPG', '恋爱养成'],
  },
  {
    key: 'fps',
    label: '射击',
    icon: '🎯',
    color: '#f97316',
    subTags: ['第一人称', '第三人称', '战术射击', '大逃杀', '刷宝射击'],
  },
  {
    key: 'strategy',
    label: '策略',
    icon: '♟️',
    color: '#3b82f6',
    subTags: ['即时战略', '回合策略', '塔防', '4X', '自走棋'],
  },
  {
    key: 'simulation',
    label: '模拟',
    icon: '🏗️',
    color: '#10b981',
    subTags: ['模拟经营', '生活模拟', '城市建设', '载具模拟', '沙盒'],
  },
  {
    key: 'adventure',
    label: '冒险',
    icon: '🗺️',
    color: '#06b6d4',
    subTags: ['解谜冒险', '视觉小说', '互动电影', '开放世界', '探索'],
  },
  {
    key: 'sports',
    label: '体育竞速',
    icon: '🏎️',
    color: '#eab308',
    subTags: ['足球', '篮球', '赛车', '极限运动', '体育模拟'],
  },
  {
    key: 'puzzle',
    label: '解谜',
    icon: '🧩',
    color: '#ec4899',
    subTags: ['逻辑解谜', '物理解谜', '密室逃脱', '益智', '推箱子'],
  },
  {
    key: 'horror',
    label: '恐怖',
    icon: '👻',
    color: '#64748b',
    subTags: ['生存恐怖', '心理恐怖', '僵尸', '克苏鲁', '灵异'],
  },
  {
    key: 'indie',
    label: '独立',
    icon: '💎',
    color: '#14b8a6',
    subTags: ['像素风', 'Roguelike', '类银河战士', '步行模拟', '实验艺术'],
  },
  {
    key: 'multiplayer',
    label: '多人联机',
    icon: '🌐',
    color: '#8b5cf6',
    subTags: ['MOBA', '合作', '竞技', 'MMO', '派对'],
  },
  {
    key: 'casual',
    label: '休闲',
    icon: '🎈',
    color: '#f43f5e',
    subTags: ['音游', '派对', '卡牌', '消除', '儿童'],
  },
];

const themeTags = [
  { key: 'open-world', label: '开放世界', icon: '🌍', color: '#22c55e', hot: true },
  { key: 'sandbox', label: '沙盒', icon: '🧱', color: '#eab308', hot: false },
  { key: 'roguelike', label: 'Roguelike', icon: '🎲', color: '#ef4444', hot: true },
  { key: 'anime', label: '二次元', icon: '🌸', color: '#f472b6', hot: true },
  { key: 'cyberpunk', label: '赛博朋克', icon: '🌃', color: '#06b6d4', hot: false },
  { key: 'wuxia', label: '武侠', icon: '🗡️', color: '#dc2626', hot: false },
  { key: 'sci-fi', label: '科幻', icon: '🚀', color: '#3b82f6', hot: false },
  { key: 'fantasy', label: '奇幻', icon: '🐉', color: '#a855f7', hot: false },
  { key: 'post-apocalyptic', label: '末日生存', icon: '☢️', color: '#f97316', hot: true },
  { key: 'western', label: '西部', icon: '🤠', color: '#d97706', hot: false },
  { key: 'steampunk', label: '蒸汽朋克', icon: '⚙️', color: '#92400e', hot: false },
  { key: 'pixel', label: '像素风', icon: '👾', color: '#10b981', hot: true },
  { key: 'retro', label: '复古', icon: '🕹️', color: '#6366f1', hot: false },
  { key: 'dark-fantasy', label: '黑暗奇幻', icon: '🦇', color: '#475569', hot: false },
  { key: 'space', label: '太空', icon: '🌌', color: '#6366f1', hot: false },
];

const platformCategories: { key: string; label: string; icon: string; color: string }[] = [
  { key: 'pc', label: 'PC 游戏', icon: '💻', color: '#66c0f4' },
  { key: 'ps5', label: 'PlayStation 5', icon: '🎮', color: '#2563eb' },
  { key: 'ps4', label: 'PlayStation 4', icon: '🎮', color: '#1d4ed8' },
  { key: 'xbox', label: 'Xbox Series X/S', icon: '🎯', color: '#16a34a' },
  { key: 'switch', label: 'Nintendo Switch', icon: '🕹️', color: '#dc2626' },
  { key: 'mobile', label: '移动端', icon: '📱', color: '#f97316' },
  { key: 'vr', label: 'VR / 虚拟现实', icon: '🥽', color: '#a855f7' },
];

const playerModes = [
  { key: 'single', label: '单人', icon: '🧍', color: '#3b82f6', desc: '独自沉浸的冒险' },
  { key: 'co-op', label: '在线合作', icon: '🤝', color: '#22c55e', desc: '与好友组队闯关' },
  { key: 'local-coop', label: '本地合作', icon: '🛋️', color: '#eab308', desc: '同屏同乐' },
  { key: 'pvp', label: '玩家对战', icon: '⚔️', color: '#ef4444', desc: '竞技对抗' },
  { key: 'mmo', label: '大型多人在线', icon: '🌐', color: '#8b5cf6', desc: '万人同服' },
  { key: 'party', label: '派对聚会', icon: '🎉', color: '#ec4899', desc: '多人同乐' },
];

const featureCategories = [
  { key: 'story-rich', label: '剧情丰富', icon: '📖', color: '#f59e0b' },
  { key: 'atmospheric', label: '氛围沉浸', icon: '🌫️', color: '#64748b' },
  { key: 'soundtrack', label: '音乐出众', icon: '🎵', color: '#ec4899' },
  { key: 'art-style', label: '美术独特', icon: '🎨', color: '#8b5cf6' },
  { key: 'challenging', label: '高难度', icon: '💀', color: '#dc2626' },
  { key: 'choices', label: '剧情选择', icon: '🔀', color: '#3b82f6' },
  { key: 'building', label: '建造创造', icon: '🏗️', color: '#10b981' },
  { key: 'exploration', label: '自由探索', icon: '🧭', color: '#06b6d4' },
  { key: 'procedural', label: '程序生成', icon: '🔄', color: '#f97316' },
  { key: 'modding', label: '支持 Mod', icon: '🔧', color: '#6366f1' },
];

const dealCategories = computed(() => {
  const gs = games.value;
  return [
    { key: 'free', label: '免费游戏', icon: '🎁', color: '#22c55e', desc: '零门槛畅玩', count: gs.filter(g => g.price === 0).length },
    { key: 'sale', label: '限时特惠', icon: '⏰', color: '#ef4444', desc: '折扣倒计时中', count: gs.filter(g => g.discount && g.discount >= 20).length },
    { key: 'new', label: '新品首发', icon: '🆕', color: '#3b82f6', desc: '近期上线新作', count: gs.filter(g => g.tags?.includes('new')).length },
    { key: 'top-rated', label: '好评如潮', icon: '⭐', color: '#f59e0b', desc: '玩家口碑佳作', count: gs.filter(g => g.rating >= 9.0).length },
    { key: 'under-10', label: '10元以下', icon: '💸', color: '#10b981', desc: '超值低价', count: gs.filter(g => g.price > 0 && g.price <= 10).length },
    { key: 'deep-discount', label: '5折以上', icon: '🔥', color: '#f97316', desc: '深度折扣', count: gs.filter(g => g.discount && g.discount >= 50).length },
  ];
});

const hotQuickFilters = [
  { key: 'action', label: '动作冒险', icon: '⚔️', type: 'category' },
  { key: 'rpg', label: '角色扮演', icon: '🛡️', type: 'category' },
  { key: 'fps', label: '射击游戏', icon: '🎯', type: 'category' },
  { key: 'strategy', label: '策略游戏', icon: '♟️', type: 'category' },
  { key: 'simulation', label: '模拟经营', icon: '🏗️', type: 'category' },
  { key: 'multiplayer', label: '多人联机', icon: '🌐', type: 'category' },
];

const getCategoryCount = (catKey: string) => {
  return games.value.filter(g => g.category === catKey).length;
};

const getPlatformCount = (platformKey: string) => {
  return games.value.filter(g => g.platforms?.includes(platformKey)).length;
};

const hexToRgb = (hex: string): string => {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const selectCategory = (key: string) => {
  emit('select', { type: 'category', value: key });
  emit('close');
};

const selectFilter = (key: string, type: string) => {
  emit('select', { type, value: key });
  emit('close');
};
</script>

<style scoped lang="scss">
$steam-blue: #66c0f4;
$steam-dark: #1b2838;
$steam-darker: #171a21;
$text-primary: #c7d5e0;
$text-secondary: #8f98a0;
$text-bright: #ffffff;
$accent-gold: #f5b342;
$accent-cyan: #4ecdc4;
$ease-out-back: cubic-bezier(0.16, 1, 0.3, 1);
$ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

.category-panel {
  width: 100%;
  height: 500px;
  max-height: calc(75vh - 120px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

// ===== 主体区域 =====
.category-panel__body {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

// ===== 左侧标签导航 =====
.category-panel__tabs {
  width: 160px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba($accent-gold, 0.2); border-radius: 2px; }
}

.category-panel__tab {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 14px;
  background: transparent;
  border: none;
  border-radius: 10px;
  color: $text-secondary;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s $ease-out-back;
  text-align: left;
  overflow: hidden;

  &:hover {
    color: $text-bright;
    background: rgba(255, 255, 255, 0.04);
  }

  &--active {
    color: $text-bright;
    background: rgba(255, 255, 255, 0.08);
  }
}

.category-panel__tab-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}

.category-panel__tab-label {
  position: relative;
  z-index: 1;
}

.category-panel__tab-glow {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  border-radius: 0 3px 3px 0;
  opacity: 0;
  transition: all 0.3s $ease-out-back;
}

.category-panel__tab--active .category-panel__tab-glow {
  height: 60%;
  opacity: 1;
}

// ===== 右侧内容区 =====
.category-panel__content {
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 24px 28px;
  gap: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); }
  &::-webkit-scrollbar-thumb { background: rgba($accent-gold, 0.25); border-radius: 3px; }
}

.category-panel__section {
  flex: 1;
  min-height: 0;
}

.category-panel__section-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  flex-shrink: 0;
}

.category-panel__section-icon {
  font-size: 20px;
}

.category-panel__section-title {
  font-size: 16px;
  font-weight: 700;
  color: $text-bright;
  margin: 0;
}

.category-panel__section-subtitle {
  font-size: 12px;
  color: $text-secondary;
  margin: 0 0 0 auto;
}

// ===== 游戏类型网格 =====
.category-panel__genres {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.genre-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s $ease-out-back;
  text-align: left;

  &__bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 100% 0%, var(--genre-color, $accent-gold), transparent 60%);
    opacity: 0.08;
    transition: opacity 0.35s;
  }

  &__main {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    transition: all 0.35s $ease-spring;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__label {
    font-size: 14px;
    font-weight: 700;
    color: $text-bright;
  }

  &__count {
    font-size: 11px;
    color: $text-secondary;
  }

  &__tags {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    opacity: 0.7;
    transition: opacity 0.3s;
  }

  &__tag {
    font-size: 10px;
    color: var(--genre-color, $accent-gold);
    background: rgba(255, 255, 255, 0.06);
    padding: 3px 8px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__arrow {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: var(--genre-color, $accent-gold);
    opacity: 0;
    transition: all 0.3s $ease-out-back;
  }

  &:hover {
    border-color: var(--genre-color, $accent-gold);
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35), 0 0 24px rgba(var(--genre-color-rgb, 245, 179, 66), 0.12);

    .genre-card__bg { opacity: 0.18; }
    .genre-card__icon {
      background: var(--genre-color, $accent-gold);
      transform: scale(1.1) rotate(-5deg);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    }
    .genre-card__tags { opacity: 1; }
    .genre-card__arrow {
      opacity: 1;
      transform: translateY(-50%) translateX(4px);
    }
  }
}

// ===== 热门标签云 =====
.category-panel__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.theme-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  color: $text-primary;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s $ease-out-back;

  &__icon { font-size: 16px; }

  &__badge {
    font-size: 9px;
    font-weight: 800;
    color: #fff;
    background: linear-gradient(135deg, #ef4444, #f87171);
    padding: 2px 6px;
    border-radius: 8px;
    animation: badgePulse 2s infinite;
  }

  &:hover {
    border-color: var(--tag-color, $accent-cyan);
    color: var(--tag-color, $accent-cyan);
    background: linear-gradient(145deg, rgba(var(--tag-color-rgb, 78, 205, 196), 0.12), rgba(var(--tag-color-rgb, 78, 205, 196), 0.04));
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  &--hot {
    border-color: rgba(#ef4444, 0.3);
  }
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

// ===== 平台网格 =====
.category-panel__platforms {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.platform-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s $ease-out-back;
  text-align: left;

  &__icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    transition: all 0.3s $ease-spring;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  &__label {
    font-size: 14px;
    font-weight: 700;
    color: $text-bright;
  }

  &__count {
    font-size: 11px;
    color: $text-secondary;
  }

  &__check {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    color: transparent;
    font-size: 12px;
    transition: all 0.25s $ease-out-back;
  }

  &:hover {
    border-color: var(--platform-color, $steam-blue);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

    .platform-card__icon {
      background: var(--platform-color, $steam-blue);
      transform: scale(1.08);
    }

    .platform-card__check {
      border-color: var(--platform-color, $steam-blue);
      color: var(--platform-color, $steam-blue);
    }
  }
}

// ===== 玩家规模 =====
.category-panel__players {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.player-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 22px 16px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s $ease-out-back;
  text-align: center;

  &__icon {
    font-size: 32px;
    transition: transform 0.3s $ease-spring;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__label {
    font-size: 14px;
    font-weight: 700;
    color: $text-bright;
  }

  &__desc {
    font-size: 11px;
    color: $text-secondary;
  }

  &:hover {
    border-color: var(--player-color, $accent-gold);
    background: linear-gradient(145deg, rgba(var(--player-color-rgb, 245, 179, 66), 0.1), rgba(var(--player-color-rgb, 245, 179, 66), 0.02));
    transform: translateY(-3px);

    .player-card__icon { transform: scale(1.15); }
  }
}

// ===== 特色内容 =====
.category-panel__features {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 12px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s $ease-out-back;
  text-align: center;

  &__icon {
    font-size: 28px;
    transition: transform 0.3s $ease-spring;
  }

  &__label {
    font-size: 12px;
    font-weight: 600;
    color: $text-primary;
  }

  &:hover {
    border-color: var(--feature-color, $accent-cyan);
    background: linear-gradient(145deg, rgba(var(--feature-color-rgb, 78, 205, 196), 0.12), rgba(var(--feature-color-rgb, 78, 205, 196), 0.03));
    transform: translateY(-3px);

    .feature-card__icon { transform: scale(1.2); }
  }
}

// ===== 价格特惠 =====
.category-panel__deals {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.deal-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s $ease-out-back;
  text-align: left;

  &__left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__icon {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    transition: all 0.3s $ease-spring;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__label {
    font-size: 14px;
    font-weight: 700;
    color: $text-bright;
  }

  &__desc {
    font-size: 11px;
    color: $text-secondary;
  }

  &__count {
    font-size: 13px;
    font-weight: 700;
    color: var(--deal-color, $accent-gold);
    background: rgba(255, 255, 255, 0.06);
    padding: 4px 10px;
    border-radius: 20px;
  }

  &:hover {
    border-color: var(--deal-color, $accent-gold);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

    .deal-card__icon {
      background: var(--deal-color, $accent-gold);
      transform: scale(1.1);
    }
  }
}

// ===== 底部热门推荐 =====
.category-panel__footer {
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.category-panel__footer-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: $text-secondary;
  margin-bottom: 10px;
}

.category-panel__hot-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hot-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: $text-primary;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s $ease-out-back;

  &:hover {
    background: linear-gradient(145deg, rgba($accent-gold, 0.15), rgba($accent-gold, 0.05));
    border-color: rgba($accent-gold, 0.4);
    color: $accent-gold;
    transform: translateY(-1px);
  }
}

// ===== 切换动画 =====
.panel-switch-enter-active,
.panel-switch-leave-active {
  transition: all 0.25s $ease-out-back;
}

.panel-switch-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.panel-switch-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

// ===== 响应式 =====
@media (max-width: 1100px) {
  .category-panel__genres { grid-template-columns: repeat(3, 1fr); }
  .category-panel__features { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 900px) {
  .category-panel__body { flex-direction: column; }
  .category-panel__tabs {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 10px;
  }
  .category-panel__tab { white-space: nowrap; }
  .category-panel__tab-glow {
    left: 50%;
    top: auto;
    bottom: 0;
    transform: translateX(-50%);
    width: 40%;
    height: 3px;
    border-radius: 3px 3px 0 0;
  }
  .category-panel__tab--active .category-panel__tab-glow {
    height: 3px;
    width: 60%;
  }
  .category-panel__genres { grid-template-columns: repeat(2, 1fr); }
  .category-panel__platforms { grid-template-columns: repeat(2, 1fr); }
  .category-panel__players { grid-template-columns: repeat(2, 1fr); }
  .category-panel__deals { grid-template-columns: repeat(2, 1fr); }
  .category-panel__features { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 600px) {
  .category-panel__genres { grid-template-columns: 1fr; }
  .category-panel__platforms { grid-template-columns: 1fr; }
  .category-panel__players { grid-template-columns: 1fr; }
  .category-panel__deals { grid-template-columns: 1fr; }
  .category-panel__features { grid-template-columns: repeat(2, 1fr); }
}
</style>
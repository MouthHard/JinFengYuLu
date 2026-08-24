<template>
  <div class="ranking-page">
    <div class="ranking-page__hero">
      <div class="ranking-page__hero-bg"></div>
      <div class="ranking-page__hero-content">
        <h1 class="ranking-page__title">🏆 游戏排行榜</h1>
        <p class="ranking-page__sub">发现最受欢迎的游戏</p>
      </div>
    </div>

    <div class="ranking-page__tabs">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="ranking-page__tab"
        :class="{ 'ranking-page__tab--active': activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.icon }} {{ tab.label }}
      </button>
    </div>

    <div class="ranking-page__content">
      <!-- 前三名展示 -->
      <div v-if="activeTab === 'hot'" class="ranking-page__podium">
        <div v-for="(game, idx) in topThree" :key="game.id" class="podium-item" :class="`podium-item--${idx}`">
          <div class="podium-item__rank">{{ idx + 1 }}</div>
          <div class="podium-item__card" @click="navigateToDetail(game)">
            <img :src="game.cover" :alt="game.title" class="podium-item__cover" loading="lazy" />
            <div class="podium-item__info">
              <h3>{{ game.title }}</h3>
              <div class="podium-item__rating">★ {{ game.rating.toFixed(1) }}</div>
              <div class="podium-item__price">
                <span v-if="game.price === 0">免费</span>
                <span v-else>¥{{ game.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 排行榜列表 -->
      <div class="ranking-page__list">
        <div 
          v-for="(game, idx) in sortedGames" 
          :key="game.id" 
          class="rank-item"
          @click="navigateToDetail(game)"
        >
          <div class="rank-item__num" :class="{ 'rank-item__num--top': idx < 3 }">{{ idx + 1 }}</div>
          <img :src="game.cover" :alt="game.title" class="rank-item__cover" loading="lazy" />
          <div class="rank-item__info">
            <h3 class="rank-item__title">{{ game.title }}</h3>
            <div class="rank-item__meta">
              <span class="rank-item__cat">{{ categoryLabelMap[game.category] }}</span>
              <span v-if="game.discount" class="rank-item__tag rank-item__tag--sale">-{{ game.discount }}%</span>
              <span v-if="game.tags?.includes('new')" class="rank-item__tag">NEW</span>
            </div>
          </div>
          <div class="rank-item__right">
            <div class="rank-item__rating">★ {{ game.rating.toFixed(1) }}</div>
            <div class="rank-item__reviews">{{ formatReviews(game.reviewCount) }} 评价</div>
          </div>
          <div class="rank-item__price-block">
            <span v-if="game.price === 0" class="rank-item__price rank-item__price--free">免费</span>
            <template v-else>
              <span v-if="game.discount" class="rank-item__original">¥{{ game.originalPrice }}</span>
              <span class="rank-item__price">¥{{ game.price }}</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchGames, fetchGameCategories, type GameItemResponse, type GameCategoryItem } from '@/services/game';

defineOptions({ name: 'GameRanking' });

const router = useRouter();
const allGames = ref<GameItemResponse[]>([]);
const categories = ref<GameCategoryItem[]>([]);

const categoryLabelMap = computed<Record<string, string>>(() =>
  Object.fromEntries(categories.value.map(c => [c.key, c.label]))
);

const tabs = [
  { key: 'hot', label: '热销榜', icon: '🔥' },
  { key: 'new', label: '新品榜', icon: '✨' },
  { key: 'rating', label: '好评榜', icon: '⭐' },
  { key: 'discount', label: '特惠榜', icon: '💰' },
] as const;

type TabKey = typeof tabs[number]['key'];
const activeTab = ref<TabKey>('hot');

const sortedGames = computed(() => {
  const games = allGames.value;
  switch (activeTab.value) {
    case 'hot': return [...games].sort((a, b) => b.reviewCount - a.reviewCount);
    case 'new': return games.filter(g => g.tags?.includes('new'));
    case 'rating': return [...games].sort((a, b) => b.rating - a.rating);
    case 'discount': return games.filter(g => g.discount).sort((a, b) => (b.discount || 0) - (a.discount || 0));
    default: return games;
  }
});

const topThree = computed(() => sortedGames.value.slice(0, 3));

const navigateToDetail = (game: GameItemResponse) => {
  router.push(`/game/detail/${game.id}`);
};

const formatReviews = (count: number) => {
  if (count >= 10000) return (count / 10000).toFixed(1) + 'W';
  if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
  return String(count);
};

onMounted(async () => {
  try {
    const [gamesRes, catRes] = await Promise.all([
      fetchGames({ limit: 50 }),
      fetchGameCategories(),
    ]);
    allGames.value = gamesRes.items;
    categories.value = catRes;
  } catch (e) {
    console.error('Failed to load ranking data:', e);
  }
});
</script>

<style scoped lang="scss">
$steam-blue: #66c0f4;
$steam-dark: #1b2838;
$text-primary: #c7d5e0;
$text-secondary: #8f98a0;
$text-bright: #ffffff;
$green-text: #a4d007;

.ranking-page {
  min-height: calc(100vh - 52px);
  background: $steam-dark;
  padding-bottom: 40px;

  &__hero {
    position: relative;
    height: 180px;
    overflow: hidden;

    &-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(102, 192, 244, 0.15) 0%, rgba(102, 192, 244, 0.05) 100%);
    }

    &-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 24px;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    color: $text-bright;
    margin: 0 0 8px;
    text-shadow: 0 2px 20px rgba($steam-blue, 0.3);
  }

  &__sub {
    font-size: 15px;
    color: $text-secondary;
    margin: 0;
  }

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 20px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__tab {
    padding: 10px 24px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: $text-secondary;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      color: $text-bright;
      background: rgba(255, 255, 255, 0.08);
    }

    &--active {
      color: $steam-blue;
      background: rgba($steam-blue, 0.12);
      border-color: $steam-blue;
    }
  }

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  // ===== 领奖台 =====
  &__podium {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 20px;
    margin-bottom: 32px;
  }
}

.podium-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__rank {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, $steam-blue, lighten($steam-blue, 20%));
    color: $steam-dark;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    box-shadow: 0 4px 16px rgba($steam-blue, 0.3);
  }

  &__card {
    width: 100%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
      border-color: rgba($steam-blue, 0.3);
    }
  }

  &__cover {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  &__info {
    padding: 12px;
    text-align: center;

    h3 {
      font-size: 14px;
      font-weight: 600;
      color: $text-bright;
      margin: 0 0 6px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &__rating {
    font-size: 13px;
    color: #f5a623;
    margin-bottom: 4px;
  }

  &__price {
    font-size: 15px;
    font-weight: 600;
    color: $steam-blue;
  }

  &--0 { .podium-item__rank { background: linear-gradient(135deg, #ffd700, #ffed4e); } }
  &--1 { .podium-item__rank { background: linear-gradient(135deg, #c0c0c0, #e8e8e8); } }
  &--2 { .podium-item__rank { background: linear-gradient(135deg, #cd7f32, #daa06d); } }
}

// ===== 排行榜列表 =====
.ranking-page__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rank-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: rgba($steam-blue, 0.06);
    border-color: rgba($steam-blue, 0.2);
    transform: translateX(4px);
  }

  &__num {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    color: $text-secondary;
    flex-shrink: 0;

    &--top {
      color: $steam-blue;
      font-size: 20px;
    }
  }

  &__cover {
    width: 80px;
    height: 45px;
    border-radius: 4px;
    object-fit: cover;
    flex-shrink: 0;
  }

  &__info {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-size: 15px;
    font-weight: 600;
    color: $text-bright;
    margin: 0 0 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  &__cat {
    font-size: 12px;
    color: $text-secondary;
  }

  &__tag {
    font-size: 10px;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.1);
    color: $text-secondary;

    &--sale {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }
  }

  &__right {
    text-align: right;
    flex-shrink: 0;
  }

  &__rating {
    font-size: 16px;
    font-weight: 600;
    color: #f5a623;
  }

  &__reviews {
    font-size: 12px;
    color: $text-secondary;
  }

  &__price-block {
    text-align: right;
    flex-shrink: 0;
    min-width: 80px;
  }

  &__original {
    font-size: 12px;
    color: $text-secondary;
    text-decoration: line-through;
    margin-right: 4px;
  }

  &__price {
    font-size: 16px;
    font-weight: 600;
    color: $steam-blue;

    &--free {
      color: $green-text;
    }
  }
}

$green-text: #a4d007;
</style>

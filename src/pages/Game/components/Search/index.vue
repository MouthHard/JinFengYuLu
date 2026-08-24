<template>
  <div class="search-page">
    <!-- 搜索头部 -->
    <div class="search-page__head">
      <div class="search-page__title">
        <span class="search-page__icon">🔍</span>
        <span>搜索结果</span>
        <span class="search-page__query">"{{ searchQuery }}"</span>
      </div>
      <div class="search-page__meta">
        <span v-if="results.length > 0">找到 {{ results.length }} 款游戏</span>
        <span v-else>未找到匹配的游戏</span>
      </div>
    </div>

    <!-- 搜索栏（持续搜索） -->
    <div class="search-page__bar">
      <input
        v-model="searchInput"
        type="text"
        class="search-page__input"
        placeholder="继续搜索..."
        @keyup.enter="doSearch"
      />
      <button class="search-page__btn" @click="doSearch">
        <SearchIcon />
      </button>
    </div>

    <!-- 热门搜索 -->
    <div v-if="results.length === 0 && !searchQuery" class="search-page__suggestions">
      <h3 class="search-page__suggestions-title">🔥 热门搜索</h3>
      <div class="search-page__suggestions-list">
        <button 
          v-for="term in hotSearches" 
          :key="term" 
          class="search-page__suggestion-item"
          @click="doSearch(term)"
        >
          {{ term }}
        </button>
      </div>
    </div>

    <!-- 筛选和排序 -->
    <div v-if="results.length > 0" class="search-page__filters">
      <div class="search-page__filter-group">
        <span class="search-page__filter-label">分类:</span>
        <button
          v-for="cat in filterCategories"
          :key="cat.key"
          class="search-page__filter-btn"
          :class="{ 'search-page__filter-btn--active': activeCategory === cat.key }"
          @click="activeCategory = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>
      <div class="search-page__sort">
        <span class="search-page__filter-label">排序:</span>
        <select 
          v-model="sortBy"
          class="search-page__sort-select"
        >
          <option value="relevance">相关性</option>
          <option value="rating">评分最高</option>
          <option value="price-asc">价格 低→高</option>
          <option value="price-desc">价格 高→低</option>
          <option value="discount">折扣最大</option>
        </select>
      </div>
    </div>

    <!-- 搜索结果 -->
    <div v-if="results.length > 0" class="search-page__results">
      <div 
        v-for="game in sortedResults" 
        :key="game.id" 
        class="search-item"
        @click="navigateToDetail(game)"
      >
        <img :src="game.cover" :alt="game.title" class="search-item__cover" loading="lazy" />
        <div class="search-item__info">
          <h3 class="search-item__title" v-html="highlightKeyword(game.title)"></h3>
          <div class="search-item__tags">
            <span v-if="game.discount" class="search-item__tag search-item__tag--sale">-{{ game.discount }}%</span>
            <span v-if="game.tags?.includes('new')" class="search-item__tag">NEW</span>
            <span v-if="game.tags?.includes('hot')" class="search-item__tag">HOT</span>
            <span class="search-item__cat">{{ categoryLabelMap[game.category] }}</span>
          </div>
          <p class="search-item__desc">{{ game.description }}</p>
          <div class="search-item__meta">
            <span class="search-item__rating">★ {{ game.rating.toFixed(1) }}</span>
            <span class="search-item__reviews">{{ formatReviews(game.reviewCount) }} 评价</span>
            <span class="search-item__dev">{{ game.developer }}</span>
          </div>
        </div>
        <div class="search-item__right">
          <div v-if="game.price === 0" class="search-item__price search-item__price--free">免费</div>
          <template v-else>
            <div v-if="game.discount" class="search-item__original">¥{{ game.originalPrice }}</div>
            <div class="search-item__price">¥{{ game.price }}</div>
          </template>
          <button 
            class="search-item__wish"
            :class="{ 'search-item__wish--active': gameStore.isInWishlist(game.id) }"
            @click.stop="toggleWishlist(game)"
          >
            {{ gameStore.isInWishlist(game.id) ? '♥' : '♡' }}
          </button>
          <button 
            class="search-item__cart"
            :disabled="gameStore.isInCart(game.id) || gameStore.isOwned(game.id)"
            @click.stop="addToCart(game.id)"
          >
            {{ gameStore.isOwned(game.id) ? '已拥有' : gameStore.isInCart(game.id) ? '已在购物车' : '加入购物车' }}
          </button>
        </div>
      </div>
    </div>

    <!-- 无结果 -->
    <div v-else-if="searchQuery" class="search-page__no-results">
      <div class="search-page__no-results-icon">😕</div>
      <h2>没有找到相关游戏</h2>
      <p>试试其他关键词，或者浏览热门游戏</p>
      <router-link to="/game/store" class="search-page__no-results-btn">浏览商店</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchGames, fetchGameCategories, type GameItemResponse, type GameCategoryItem } from '@/services/game';
import { useGameStore } from '@/stores/game';
import { showMessage } from '@/components/common/InteractionMessage';
import { highlightSearchMatch } from '@/utils/common';
import SearchIcon from '../../icons/NavBar/SearchIcon.vue';

defineOptions({ name: 'GameSearch' });

const route = useRoute();
const router = useRouter();
const gameStore = useGameStore();
const allGames = ref<GameItemResponse[]>([]);
const gameCategories = ref<GameCategoryItem[]>([]);

const categoryLabelMap = computed<Record<string, string>>(() =>
  Object.fromEntries(gameCategories.value.map(c => [c.key, c.label]))
);

const searchQuery = ref((route.query.q as string) || '');
const searchInput = ref('');

const loadSearchData = async () => {
  try {
    const [gamesRes, catRes] = await Promise.all([
      fetchGames({
        keyword: searchQuery.value || undefined,
        limit: 50,
      }),
      fetchGameCategories(),
    ]);
    allGames.value = gamesRes.items;
    gameCategories.value = catRes;
  } catch (e) {
    console.error('Failed to load search data:', e);
  }
};

onMounted(async () => {
  searchInput.value = searchQuery.value;
  await loadSearchData();
});

watch(searchQuery, () => {
  loadSearchData();
});

const results = computed(() => {
  if (!searchQuery.value) return [];
  return allGames.value;
});

const filterCategories = computed(() => [
  { key: 'all' as const, label: '全部' },
  ...gameCategories.value,
]);

const activeCategory = ref<string>('all');

const sortBy = ref('relevance');

const sortedResults = computed(() => {
  let list = [...results.value];
  
  if (activeCategory.value !== 'all') {
    list = list.filter(g => g.category === activeCategory.value);
  }
  
  switch (sortBy.value) {
    case 'rating': return list.sort((a, b) => b.rating - a.rating);
    case 'price-asc': return list.sort((a, b) => a.price - b.price);
    case 'price-desc': return list.sort((a, b) => b.price - a.price);
    case 'discount': return list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    default: return list;
  }
});

const hotSearches = ['热门', '免费', '折扣', '新作', '多人', '角色扮演', '射击'];

const doSearch = (term?: string | Event) => {
  const q = typeof term === 'string' ? term : searchInput.value.trim();
  if (q) {
    searchQuery.value = q;
    searchInput.value = q;
    activeCategory.value = 'all';
    router.replace({ path: '/game/search', query: { q } });
  }
};

const navigateToDetail = (game: GameItemResponse) => {
  router.push(`/game/detail/${game.id}`);
};

const toggleWishlist = (game: GameItemResponse) => {
  const added = gameStore.toggleWishlist(game.id);
  if (added) {
    showMessage.favorite.success(game.title, 'game');
  } else {
    showMessage.favorite.cancel(game.title, 'game');
  }
};

const addToCart = (gameId: string) => {
  const game = allGames.value.find(g => g.id === gameId);
  const success = gameStore.addToCart(gameId);
  if (success && game) {
    showMessage.success(`《${game.title}》已加入购物车`);
  }
};

const formatReviews = (count: number) => {
  if (count >= 10000) return (count / 10000).toFixed(1) + 'W';
  if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
  return String(count);
};

const highlightKeyword = (text: string) => {
  return highlightSearchMatch(text, searchQuery.value);
};
</script>

<style scoped lang="scss">
$steam-blue: #66c0f4;
$steam-dark: #1b2838;
$text-primary: #c7d5e0;
$text-secondary: #8f98a0;
$text-bright: #ffffff;
$green-text: #a4d007;

.search-page {
  min-height: calc(100vh - 52px);
  background: $steam-dark;
  padding-bottom: 40px;

  // ===== 头部 =====
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    font-weight: 600;
    color: $text-bright;

    span:last-child {
      color: $steam-blue;
      font-weight: 400;
    }
  }

  &__icon {
    font-size: 24px;
  }

  &__meta {
    font-size: 14px;
    color: $text-secondary;
  }

  // ===== 搜索栏 =====
  &__bar {
    display: flex;
    justify-content: center;
    gap: 4px;
    padding: 0 24px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__input {
    flex: 1;
    max-width: 600px;
    height: 44px;
    padding: 0 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: $text-bright;
    font-size: 16px;
    outline: none;
    transition: all 0.25s;

    &:focus {
      border-color: $steam-blue;
      box-shadow: 0 0 0 3px rgba($steam-blue, 0.15);
    }

    &::placeholder {
      color: rgba(143, 152, 160, 0.6);
    }
  }

  &__btn {
    width: 44px;
    height: 44px;
    background: $steam-blue;
    border: none;
    border-radius: 8px;
    color: $steam-dark;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: lighten($steam-blue, 5%);
      transform: scale(1.05);
    }
  }

  // ===== 热门搜索 =====
  &__suggestions {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 24px;
  }

  &__suggestions-title {
    font-size: 14px;
    color: $text-secondary;
    margin: 0 0 16px;
  }

  &__suggestions-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__suggestion-item {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: $text-primary;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: rgba($steam-blue, 0.15);
      border-color: $steam-blue;
      color: $steam-blue;
    }
  }

  // ===== 筛选器 =====
  &__filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 20px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__filter-group {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  &__filter-label {
    font-size: 13px;
    color: $text-secondary;
  }

  &__filter-btn {
    padding: 6px 14px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: $text-secondary;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: $text-bright;
    }

    &--active {
      background: rgba($steam-blue, 0.15);
      border-color: $steam-blue;
      color: $steam-blue;
    }
  }

  &__sort {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__sort-select {
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: $text-primary;
    font-size: 13px;
    cursor: pointer;

    option {
      background: $steam-dark;
      color: $text-primary;
    }
  }

  // ===== 搜索结果 =====
  &__results {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  // ===== 无结果 =====
  &__no-results {
    text-align: center;
    padding: 60px 20px;

    h2 {
      font-size: 24px;
      color: $text-bright;
      margin: 16px 0 8px;
    }

    p {
      font-size: 15px;
      color: $text-secondary;
      margin: 0 0 24px;
    }
  }

  &__no-results-icon {
    font-size: 48px;
  }

  &__no-results-btn {
    padding: 12px 28px;
    background: linear-gradient(135deg, $steam-blue, lighten($steam-blue, 10%));
    color: $steam-dark;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba($steam-blue, 0.3);
    }
  }
}

// ===== 搜索结果卡片 =====
.search-item {
  display: grid;
  grid-template-columns: 140px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background: rgba($steam-blue, 0.06);
    border-color: rgba($steam-blue, 0.2);
    transform: translateX(4px);
  }

  &__cover {
    width: 140px;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 6px;
  }

  &__info {
    min-width: 0;
  }

  &__title {
    font-size: 17px;
    font-weight: 600;
    color: $text-bright;
    margin: 0 0 8px;

    mark {
      background: rgba($steam-blue, 0.4);
      color: $text-bright;
      padding: 0 2px;
      border-radius: 2px;
    }
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }

  &__tag {
    font-size: 11px;
    font-weight: 600;
    padding: 2px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    color: $text-secondary;

    &--sale {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }
  }

  &__cat {
    font-size: 12px;
    color: $text-secondary;
    padding: 2px 8px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  &__desc {
    font-size: 13px;
    color: $text-secondary;
    margin: 0 0 8px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 12px;
    color: $text-secondary;
  }

  &__rating {
    color: #f5a623;
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    min-width: 120px;
  }

  &__original {
    font-size: 13px;
    color: $text-secondary;
    text-decoration: line-through;
  }

  &__price {
    font-size: 20px;
    font-weight: 700;
    color: $steam-blue;

    &--free {
      color: $green-text;
    }
  }

  &__wish {
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: $text-secondary;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba($steam-blue, 0.15);
      color: $steam-blue;
    }

    &--active {
      color: #ef4444;
      border-color: #ef4444;
      background: rgba(239, 68, 68, 0.1);
    }
  }

  &__cart {
    padding: 8px 14px;
    background: rgba($steam-blue, 0.15);
    border: 1px solid rgba($steam-blue, 0.3);
    border-radius: 4px;
    color: $steam-blue;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover:not(:disabled) {
      background: rgba($steam-blue, 0.25);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

// ===== 响应式 =====
@media (max-width: 900px) {
  .search-item {
    grid-template-columns: 100px 1fr;
    grid-template-rows: auto auto;
    gap: 12px;

    &__cover {
      width: 100px;
    }

    &__right {
      grid-column: 1 / -1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

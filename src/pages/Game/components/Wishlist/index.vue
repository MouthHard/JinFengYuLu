<template>
  <div class="wishlist-page">
    <div class="wishlist-page__head">
      <div class="wishlist-page__head-left">
        <h1 class="wishlist-page__title">❤️ 我的愿望单</h1>
        <span class="wishlist-page__count">{{ wishlistGames.length }} 款游戏</span>
      </div>
      <div class="wishlist-page__head-right">
        <span class="wishlist-page__total">预估总价: ¥{{ totalPrice.toFixed(2) }}</span>
        <button 
          v-if="wishlistGames.length > 0"
          class="wishlist-page__btn"
          @click="moveAllToCart"
        >
          全部加入购物车
        </button>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="wishlistGames.length === 0" class="wishlist-page__empty">
      <div class="wishlist-page__empty-icon">🎮</div>
      <h2 class="wishlist-page__empty-title">愿望单还是空的</h2>
      <p class="wishlist-page__empty-desc">浏览游戏商店，将感兴趣的游戏添加到愿望单</p>
      <div class="wishlist-page__empty-actions">
        <router-link to="/game/store" class="wishlist-page__empty-btn wishlist-page__empty-btn--primary">浏览商店</router-link>
        <router-link to="/game/sale" class="wishlist-page__empty-btn">查看特惠</router-link>
      </div>
      <div v-if="suggestions.length > 0" class="wishlist-page__empty-suggestions">
        <span class="wishlist-page__empty-sug-label">你可能喜欢</span>
        <div class="wishlist-page__empty-sug-list">
          <div 
            v-for="game in suggestions" 
            :key="game.id" 
            class="wishlist-page__empty-sug-item"
            @click="navigateToDetail(game)"
          >
            <img :src="game.cover" :alt="game.title" loading="lazy" />
            <span>{{ game.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 愿望单列表 -->
    <template v-else>
      <div class="wishlist-page__toolbar">
        <div class="wishlist-page__sort">
          <button
            v-for="opt in sortOptions"
            :key="opt.key"
            class="wishlist-page__sort-btn"
            :class="{ 'wishlist-page__sort-btn--active': sortBy === opt.key }"
            @click="sortBy = opt.key"
          >
            {{ opt.label }}
          </button>
        </div>
      </div>

      <div class="wishlist-page__grid">
        <div 
          v-for="game in sortedGames" 
          :key="game.id" 
          class="wish-card"
          @click="navigateToDetail(game)"
        >
          <div class="wish-card__cover-wrap">
            <img :src="game.cover" :alt="game.title" class="wish-card__cover" loading="lazy" />
            <div v-if="game.discount" class="wish-card__badge">-{{ game.discount }}%</div>
            <button 
              class="wish-card__wish-btn"
              title="移除"
              @click.stop="removeFromWishlist(game.id)"
            >
              ♥
            </button>
          </div>
          <div class="wish-card__info">
            <h3 class="wish-card__title">{{ game.title }}</h3>
            <div class="wish-card__tags">
              <span v-for="tag in (game.tags ?? []).slice(0, 3)" :key="tag" class="wish-card__tag">{{ tagLabelMap[tag] || tag }}</span>
            </div>
          </div>
          <div class="wish-card__footer">
            <div class="wish-card__price-block">
              <span v-if="game.price === 0" class="wish-card__price wish-card__price--free">免费</span>
              <template v-else>
                <span v-if="game.discount" class="wish-card__original">¥{{ game.originalPrice }}</span>
                <span class="wish-card__price">¥{{ game.price }}</span>
              </template>
            </div>
            <button 
              class="wish-card__add-cart"
              :disabled="gameStore.isInCart(game.id)"
              @click.stop="addToCart(game.id)"
            >
              {{ gameStore.isInCart(game.id) ? '已在购物车' : '加入购物车' }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchGames, type GameItemResponse } from '@/services/game';
import { useGameStore } from '@/stores/game';
import { showMessage } from '@/components/common/InteractionMessage';

defineOptions({ name: 'GameWishlist' });

const router = useRouter();
const gameStore = useGameStore();
const allGames = ref<GameItemResponse[]>([]);

const tagLabelMap: Record<string, string> = {
  hot: '热门', new: '新作', sale: '特惠', coming: '即将推出',
  free: '免费', 'editor-choice': '精选', multiplayer: '多人'
};

const wishlistGames = computed(() => allGames.value.filter(g => gameStore.isInWishlist(g.id)));

const totalPrice = computed(() => 
  wishlistGames.value.reduce((sum, g) => sum + g.price, 0)
);

const suggestions = computed(() => 
  allGames.value.filter(g => g.rating >= 9 && !gameStore.isInWishlist(g.id)).slice(0, 4)
);

const sortOptions = [
  { key: 'added', label: '添加时间' },
  { key: 'price-asc', label: '价格 低→高' },
  { key: 'price-desc', label: '价格 高→低' },
  { key: 'rating', label: '评分最高' },
  { key: 'discount', label: '折扣最大' },
] as const;

type SortKey = typeof sortOptions[number]['key'];
const sortBy = ref<SortKey>('added');

const sortedGames = computed(() => {
  const list = [...wishlistGames.value];
  switch (sortBy.value) {
    case 'price-asc': return list.sort((a, b) => a.price - b.price);
    case 'price-desc': return list.sort((a, b) => b.price - a.price);
    case 'rating': return list.sort((a, b) => b.rating - a.rating);
    case 'discount': return list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    default: return list;
  }
});

const navigateToDetail = (game: GameItemResponse) => {
  router.push(`/game/detail/${game.id}`);
};

const removeFromWishlist = (gameId: string) => {
  const game = allGames.value.find(g => g.id === gameId);
  gameStore.removeFromWishlist(gameId);
  if (game) {
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

const moveAllToCart = () => {
  wishlistGames.value.forEach(g => {
    gameStore.addToCart(g.id);
  });
  showMessage.success('已将全部愿望单游戏加入购物车');
};

onMounted(async () => {
  try {
    const res = await fetchGames({ limit: 50 });
    allGames.value = res.items;
  } catch (e) {
    console.error('Failed to load wishlist data:', e);
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

.wishlist-page {
  min-height: calc(100vh - 52px);
  background: $steam-dark;
  padding-bottom: 40px;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__head-left {
    display: flex;
    align-items: baseline;
    gap: 12px;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: $text-bright;
    margin: 0;
  }

  &__count {
    font-size: 14px;
    color: $text-secondary;
  }

  &__head-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__total {
    font-size: 14px;
    color: $text-secondary;
  }

  &__btn {
    padding: 10px 20px;
    background: linear-gradient(135deg, $steam-blue, lighten($steam-blue, 10%));
    color: $steam-dark;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba($steam-blue, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  // ===== 空状态 =====
  &__empty {
    text-align: center;
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__empty-icon {
    font-size: 64px;
    margin-bottom: 16px;
  }

  &__empty-title {
    font-size: 24px;
    font-weight: 600;
    color: $text-bright;
    margin: 0 0 8px;
  }

  &__empty-desc {
    font-size: 15px;
    color: $text-secondary;
    margin: 0 0 24px;
  }

  &__empty-actions {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
  }

  &__empty-btn {
    padding: 12px 28px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.25s;

    &--primary {
      background: linear-gradient(135deg, $steam-blue, lighten($steam-blue, 10%));
      color: $steam-dark;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba($steam-blue, 0.3);
      }
    }

    &:not(&--primary) {
      background: rgba(255, 255, 255, 0.08);
      color: $text-primary;

      &:hover {
        background: rgba(255, 255, 255, 0.12);
      }
    }
  }

  &__empty-suggestions {
    margin-top: 40px;
  }

  &__empty-sug-label {
    display: block;
    font-size: 14px;
    color: $text-secondary;
    margin-bottom: 12px;
  }

  &__empty-sug-list {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__empty-sug-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      transform: translateY(-4px);

      img {
        border-color: rgba($steam-blue, 0.5);
      }
    }

    img {
      width: 120px;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid transparent;
      transition: border-color 0.25s;
    }

    span {
      font-size: 13px;
      color: $text-primary;
    }
  }

  // ===== 工具栏 =====
  &__toolbar {
    display: flex;
    justify-content: center;
    padding: 16px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__sort {
    display: flex;
    gap: 4px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 6px;
    padding: 4px;
  }

  &__sort-btn {
    padding: 8px 16px;
    background: transparent;
    border: none;
    border-radius: 4px;
    color: $text-secondary;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: $text-bright;
    }

    &--active {
      color: $text-bright;
      background: rgba($steam-blue, 0.15);
    }
  }

  // ===== 网格 =====
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }
}

// ===== 卡片 =====
.wish-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba($steam-blue, 0.3);
  }

  &__cover-wrap {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
  }

  &:hover &__cover {
    transform: scale(1.05);
  }

  &__badge {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 10px;
    background: rgba(239, 68, 68, 0.9);
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    border-radius: 4px;
  }

  &__wish-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid #ef4444;
    border-radius: 50%;
    color: #ef4444;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s;

    &:hover {
      background: #ef4444;
      color: #ffffff;
      transform: scale(1.1);
    }
  }

  &__info {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    color: $text-bright;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  &__tag {
    font-size: 11px;
    padding: 2px 8px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    color: $text-secondary;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  &__price-block {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  &__original {
    font-size: 13px;
    color: $text-secondary;
    text-decoration: line-through;
  }

  &__price {
    font-size: 18px;
    font-weight: 700;
    color: $steam-blue;

    &--free {
      color: $green-text;
    }
  }

  &__add-cart {
    padding: 8px 14px;
    background: rgba($steam-blue, 0.15);
    border: 1px solid rgba($steam-blue, 0.3);
    border-radius: 4px;
    color: $steam-blue;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: rgba($steam-blue, 0.25);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>

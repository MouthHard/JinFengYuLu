<template>
  <div class="cart-page">
    <div class="cart-page__head">
      <h1 class="cart-page__title">🛒 购物车</h1>
      <span class="cart-page__count">{{ cartGames.length }} 款游戏</span>
    </div>

    <!-- 空状态 -->
    <div v-if="cartGames.length === 0" class="cart-page__empty">
      <div class="cart-page__empty-icon">🛒</div>
      <h2 class="cart-page__empty-title">购物车是空的</h2>
      <p class="cart-page__empty-desc">浏览游戏商店，将喜欢的游戏加入购物车</p>
      <div class="cart-page__empty-actions">
        <router-link to="/game/store" class="cart-page__empty-btn cart-page__empty-btn--primary">浏览商店</router-link>
        <router-link to="/game/sale" class="cart-page__empty-btn">查看特惠</router-link>
      </div>
    </div>

    <!-- 购物车内容 -->
    <template v-else>
      <div class="cart-page__content">
        <!-- 购物车列表 -->
        <div class="cart-page__list">
          <div 
            v-for="game in cartGames" 
            :key="game.id" 
            class="cart-item"
          >
            <img :src="game.cover" :alt="game.title" class="cart-item__cover" loading="lazy" />
            <div class="cart-item__info">
              <h3 class="cart-item__title">{{ game.title }}</h3>
              <div class="cart-item__meta">
                <span class="cart-item__cat">{{ categoryLabelMap[game.category] }}</span>
                <span v-if="game.tags?.includes('multiplayer')" class="cart-item__tag">多人联机</span>
                <span v-if="game.platforms?.length" class="cart-item__platform">
                  {{ game.platforms?.join(', ') }}
                </span>
              </div>
              <div class="cart-item__developer">
                开发者: {{ game.developer }}
              </div>
            </div>
            <div class="cart-item__price-block">
              <span v-if="game.price === 0" class="cart-item__price cart-item__price--free">免费</span>
              <template v-else>
                <span v-if="game.discount" class="cart-item__original">¥{{ game.originalPrice }}</span>
                <span class="cart-item__price">¥{{ game.price }}</span>
              </template>
            </div>
            <button 
              class="cart-item__remove"
              title="移除"
              @click="removeFromCart(game.id)"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- 结算面板 -->
        <aside class="cart-page__summary">
          <div class="cart-page__summary-box">
            <h2 class="cart-page__summary-title">订单摘要</h2>
            
            <div class="cart-page__summary-row">
              <span>游戏数量</span>
              <span>{{ cartGames.length }} 款</span>
            </div>
            <div class="cart-page__summary-row">
              <span>原价总计</span>
              <span class="cart-page__summary-original">¥{{ originalTotal.toFixed(2) }}</span>
            </div>
            <div class="cart-page__summary-row cart-page__summary-row--discount">
              <span>节省金额</span>
              <span>-¥{{ discountTotal.toFixed(2) }}</span>
            </div>
            
            <div class="cart-page__summary-total">
              <span>应付总额</span>
              <span class="cart-page__summary-price">¥{{ totalPrice.toFixed(2) }}</span>
            </div>

            <button 
              class="cart-page__checkout"
              @click="checkout"
            >
              立即结算
            </button>

            <button 
              class="cart-page__clear"
              @click="clearCart"
            >
              清空购物车
            </button>
          </div>

          <!-- 推荐 -->
          <div class="cart-page__recommend">
            <h3 class="cart-page__recommend-title">你可能还喜欢</h3>
            <div class="cart-page__recommend-list">
              <div 
                v-for="game in recommendations" 
                :key="game.id" 
                class="cart-page__recommend-item"
                @click="navigateToDetail(game)"
              >
                <img :src="game.cover" :alt="game.title" loading="lazy" />
                <span>{{ game.title }}</span>
                <strong>¥{{ game.price }}</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { fetchGames, fetchGameCategories, type GameItemResponse, type GameCategoryItem } from '@/services/game';
import { useGameStore } from '@/stores/game';
import { showMessage } from '@/components/common/InteractionMessage';

defineOptions({ name: 'GameCart' });

const router = useRouter();
const gameStore = useGameStore();
const allGames = ref<GameItemResponse[]>([]);
const categories = ref<GameCategoryItem[]>([]);

const categoryLabelMap = computed<Record<string, string>>(() =>
  Object.fromEntries(categories.value.map(c => [c.key, c.label]))
);

const cartGames = computed(() => gameStore.getCartGames<GameItemResponse>(allGames.value));

const totalPrice = computed(() => 
  cartGames.value.reduce((sum, g) => sum + g.price, 0)
);

const originalTotal = computed(() => 
  cartGames.value.reduce((sum, g) => sum + (g.originalPrice || g.price), 0)
);

const discountTotal = computed(() => originalTotal.value - totalPrice.value);

const recommendations = computed(() => 
  allGames.value.filter(g => !gameStore.isInCart(g.id) && !gameStore.isOwned(g.id) && g.rating >= 8.5).slice(0, 4)
);

const navigateToDetail = (game: GameItemResponse) => {
  router.push(`/game/detail/${game.id}`);
};

const removeFromCart = (gameId: string) => {
  gameStore.removeFromCart(gameId);
  showMessage.success('已从购物车移除');
};

const clearCart = () => {
  if (confirm('确定要清空购物车吗？')) {
    gameStore.clearCart();
    showMessage.success('购物车已清空');
  }
};

const checkout = () => {
  showMessage.success(`结算成功！共 ${cartGames.value.length} 款游戏，¥${totalPrice.value.toFixed(2)}`);
  gameStore.clearCart();
  gameStore.purchaseCart();
  setTimeout(() => {
    router.push('/game/library');
  }, 1500);
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
    console.error('Failed to load cart data:', e);
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

.cart-page {
  min-height: calc(100vh - 52px);
  background: $steam-dark;
  padding-bottom: 40px;

  &__head {
    display: flex;
    align-items: baseline;
    gap: 12px;
    padding: 24px;
    max-width: 1400px;
    margin: 0 auto;
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

  // ===== 空状态 =====
  &__empty {
    text-align: center;
    padding: 60px 20px;
    max-width: 600px;
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

  // ===== 内容布局 =====
  &__content {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 24px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
  }

  // ===== 购物车列表 =====
  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__summary {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: sticky;
    top: 72px;
    align-self: start;
  }

  &__summary-box {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 24px;
  }

  &__summary-title {
    font-size: 18px;
    font-weight: 600;
    color: $text-bright;
    margin: 0 0 20px;
  }

  &__summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 14px;
    color: $text-primary;

    &--discount span:last-child {
      color: $green-text;
    }
  }

  $green-text: #a4d007;

  &__summary-original {
    text-decoration: line-through;
    color: $text-secondary;
  }

  &__summary-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    margin: 16px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    span:first-child {
      font-size: 14px;
      color: $text-secondary;
    }
  }

  &__summary-price {
    font-size: 28px;
    font-weight: 700;
    color: $steam-blue;
  }

  &__checkout {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, $steam-blue, lighten($steam-blue, 10%));
    color: $steam-dark;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s;
    margin-bottom: 12px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba($steam-blue, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__clear {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: $text-secondary;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: $text-primary;
    }
  }

  // ===== 推荐 =====
  &__recommend {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 20px;
  }

  &__recommend-title {
    font-size: 16px;
    font-weight: 600;
    color: $text-bright;
    margin: 0 0 16px;
  }

  &__recommend-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__recommend-item {
    display: grid;
    grid-template-columns: 80px 1fr auto;
    gap: 12px;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
      background: rgba($steam-blue, 0.08);

      img {
        border-color: rgba($steam-blue, 0.3);
      }
    }

    img {
      width: 80px;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 4px;
      border: 1px solid transparent;
    }

    span {
      font-size: 13px;
      color: $text-primary;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    strong {
      font-size: 14px;
      font-weight: 600;
      color: $steam-blue;
    }
  }
}

// ===== 购物车项目 =====
.cart-item {
  display: grid;
  grid-template-columns: 120px 1fr auto auto;
  gap: 20px;
  align-items: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  transition: all 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba($steam-blue, 0.2);
  }

  &__cover {
    width: 120px;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 6px;
  }

  &__info {
    min-width: 0;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    color: $text-bright;
    margin: 0 0 8px;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
  }

  &__cat {
    font-size: 12px;
    color: $text-secondary;
    padding: 2px 8px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 4px;
  }

  &__tag {
    font-size: 12px;
    color: $green-text;
  }

  &__platform {
    font-size: 12px;
    color: $text-secondary;
  }

  &__developer {
    font-size: 12px;
    color: $text-secondary;
  }

  &__price-block {
    text-align: right;
  }

  &__original {
    display: block;
    font-size: 13px;
    color: $text-secondary;
    text-decoration: line-through;
    margin-bottom: 2px;
  }

  &__price {
    font-size: 20px;
    font-weight: 700;
    color: $steam-blue;

    &--free {
      color: $green-text;
    }
  }

  &__remove {
    width: 36px;
    height: 36px;
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: 6px;
    color: #ef4444;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(239, 68, 68, 0.25);
      transform: scale(1.05);
    }
  }
}

// ===== 响应式 =====
@media (max-width: 1024px) {
  .cart-page__content {
    grid-template-columns: 1fr;
  }

  .cart-page__summary {
    position: static;
  }
}

@media (max-width: 640px) {
  .cart-item {
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto auto;
    gap: 12px;

    &__cover {
      width: 80px;
    }

    &__price-block {
      grid-column: 1 / -1;
      text-align: left;
    }

    &__remove {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
}
</style>

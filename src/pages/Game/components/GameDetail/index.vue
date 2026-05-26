<template>
  <div v-if="game" class="detail-page">
    <div class="detail-page__hero">
      <img :src="game.banner || game.cover" :alt="game.title" class="detail-page__hero-img" />
      <div class="detail-page__hero-shade" />
    </div>

    <div class="detail-page__body">
      <div class="detail-page__main">
        <div class="detail-page__head">
          <div class="detail-page__tags">
            <span v-for="tag in game.tags" :key="tag" class="detail-page__tag">{{ tagLabel(tag) }}</span>
          </div>
          <h1 class="detail-page__title">{{ game.title }}</h1>
          <p v-if="game.subtitle" class="detail-page__subtitle">{{ game.subtitle }}</p>
        </div>

        <p class="detail-page__desc">{{ game.description }}</p>

        <div v-if="game.screenshots && game.screenshots.length" class="detail-page__screenshots">
          <h3 class="detail-page__section-label">游戏截图</h3>
          <div ref="ssTrackRef" class="detail-page__ss-track">
            <div
              v-for="(ss, i) in game.screenshots"
              :key="i"
              class="detail-page__ss-item"
              :class="{ 'detail-page__ss-item--active': activeSs === i }"
              @click="activeSs = i"
            >
              <img :src="ss" :alt="`截图 ${i + 1}`" loading="lazy" width="400" height="225" />
            </div>
          </div>
          <div v-if="game.screenshots[activeSs]" class="detail-page__ss-preview-wrap">
            <button v-if="game.screenshots.length > 1" class="detail-page__ss-arrow detail-page__ss-arrow--prev" @click="prevSs">‹</button>
            <img :key="activeSs" :src="game.screenshots[activeSs]" alt="预览截图" class="detail-page__ss-preview" />
            <button v-if="game.screenshots.length > 1" class="detail-page__ss-arrow detail-page__ss-arrow--next" @click="nextSs">›</button>
            <span class="detail-page__ss-counter">{{ activeSs + 1 }} / {{ game.screenshots.length }}</span>
          </div>
        </div>

        <div v-if="game.features" class="detail-page__features">
          <h3 class="detail-page__section-label">游戏特色</h3>
          <div class="detail-page__feature-grid">
            <span v-for="f in game.features" :key="f" class="detail-page__feature">{{ f }}</span>
          </div>
        </div>

        <div class="detail-page__meta-grid">
          <div class="detail-page__meta-item">
            <span class="detail-page__meta-label">开发商</span>
            <span class="detail-page__meta-value">{{ game.developer }}</span>
          </div>
          <div class="detail-page__meta-item">
            <span class="detail-page__meta-label">发行商</span>
            <span class="detail-page__meta-value">{{ game.publisher }}</span>
          </div>
          <div class="detail-page__meta-item">
            <span class="detail-page__meta-label">发行日期</span>
            <span class="detail-page__meta-value">{{ game.releaseDate }}</span>
          </div>
          <div class="detail-page__meta-item">
            <span class="detail-page__meta-label">评分</span>
            <span class="detail-page__meta-value detail-page__meta-value--rating">★ {{ game.rating.toFixed(1) }} ({{ game.reviewCount.toLocaleString() }} 评价)</span>
          </div>
        </div>
      </div>

      <aside class="detail-page__sidebar">
        <div class="detail-page__purchase">
          <div class="detail-page__price-block">
            <template v-if="game.price === 0">
              <span class="detail-page__price detail-page__price--free">免费游玩</span>
            </template>
            <template v-else-if="game.discount">
              <span class="detail-page__original">¥{{ game.originalPrice }}</span>
              <span class="detail-page__price detail-page__price--sale">¥{{ game.price }}</span>
              <span class="detail-page__discount-badge">-{{ game.discount }}%</span>
            </template>
            <template v-else>
              <span class="detail-page__price">¥{{ game.price }}</span>
            </template>
          </div>
          <button 
            class="detail-page__buy-btn"
            :class="{ 
              'detail-page__buy-btn--owned': isOwned,
              'detail-page__buy-btn--in-cart': isInCart && !isOwned
            }"
            @click="handleBuyOrAddToCart"
          >
            <template v-if="isOwned">已拥有 · 启动</template>
            <template v-else-if="game.price === 0">免费获取</template>
            <template v-else-if="isInCart">已在购物车</template>
            <template v-else>加入购物车</template>
          </button>
          <button 
            class="detail-page__wish-btn" 
            :class="{ 'detail-page__wish-btn--active': isInWishlist }"
            @click="handleToggleWishlist"
          >
            {{ isInWishlist ? '♥ 已愿望' : '♡ 加入愿望单' }}
          </button>
        </div>
        <div class="detail-page__platforms">
          <span class="detail-page__platforms-label">支持平台</span>
          <div class="detail-page__platforms-list">
            <span v-for="p in game.platforms" :key="p" class="detail-page__platform">{{ platformLabel(p) }}</span>
          </div>
        </div>
      </aside>
    </div>
  </div>

  <div v-else class="detail-page__not-found">
    <p>未找到该游戏</p>
    <router-link to="/game/store">返回商店</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import type { GameTag, GamePlatform } from '@/typesOfPages/game';
import { games } from '../../data/index';
import { useGameStore } from '@/stores/game';
import { showMessage } from '@/components/common/InteractionMessage';

defineOptions({ name: 'GameDetail' });

const route = useRoute();
const gameStore = useGameStore();
const game = computed(() => games.find(g => g.id === route.params.id));
const activeSs = ref(0);
const ssTrackRef = ref<HTMLElement | null>(null);

const isOwned = computed(() => game.value ? gameStore.isOwned(game.value.id) : false);
const isInWishlist = computed(() => game.value ? gameStore.isInWishlist(game.value.id) : false);
const isInCart = computed(() => game.value ? gameStore.isInCart(game.value.id) : false);

const ssCount = computed(() => game.value?.screenshots?.length || 0);
const nextSs = () => { if (ssCount.value) activeSs.value = (activeSs.value + 1) % ssCount.value; };
const prevSs = () => { if (ssCount.value) activeSs.value = (activeSs.value - 1 + ssCount.value) % ssCount.value; };

watch(activeSs, (idx) => {
  if (!ssTrackRef.value) return;
  const items = ssTrackRef.value.querySelectorAll('.detail-page__ss-item');
  items[idx]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
});

watch(() => route.params.id, () => { activeSs.value = 0; });

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') nextSs();
  else if (e.key === 'ArrowLeft') prevSs();
};
onMounted(() => { 
  window.addEventListener('keydown', onKeydown);
  gameStore.initializeFromData(games);
});
onUnmounted(() => { window.removeEventListener('keydown', onKeydown); });

const tagLabel = (tag: GameTag): string => {
  const map: Record<string, string> = { hot: '热门', new: '新作', sale: '特惠', coming: '即将推出', free: '免费', premium: '精品', 'editor-choice': '编辑精选', multiplayer: '多人' };
  return map[tag] || '';
};
const platformLabel = (p: GamePlatform): string => {
  const map: Record<string, string> = { pc: 'PC', ps5: 'PS5', ps4: 'PS4', xbox: 'Xbox', switch: 'Nintendo Switch', mobile: '移动端' };
  return map[p] || p;
};

const handleBuyOrAddToCart = () => {
  if (!game.value) return;
  
  if (isOwned.value) {
    showMessage.like.success(`正在启动 ${game.value.title}`);
    return;
  }
  
  if (game.value.price === 0) {
    gameStore.purchaseGames([game.value.id]);
    showMessage.favorite.success(game.value.title, 'game');
    return;
  }
  
  const added = gameStore.addToCart(game.value.id);
  if (added) {
    showMessage.like.success(`已将 ${game.value.title} 加入购物车`);
  } else if (isInCart.value) {
    showMessage.like.cancel();
  }
};

const handleToggleWishlist = () => {
  if (!game.value) return;
  const added = gameStore.toggleWishlist(game.value.id);
  if (added) {
    showMessage.favorite.success(game.value.title, 'game');
  } else {
    showMessage.favorite.cancel(game.value.title, 'game');
  }
};
</script>

<style scoped lang="scss" src="./index.scss" />

<template>
  <div class="store-page">
    <HeroBanner :banners="banners" />

    <div class="store-page__content">
      <div class="store-page__main">
        <section class="store-page__shelf">
          <div class="store-page__shelf-head">
            <h2 class="store-page__shelf-title">{{ currentTab.label }}</h2>
            <div class="store-page__tabs">
              <button
                v-for="tab in tabs"
                :key="tab.key"
                class="store-page__tab"
                :class="{ 'store-page__tab--active': activeTab === tab.key }"
                @click="activeTab = tab.key"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>
          <div class="store-page__carousel">
            <button class="store-page__arrow store-page__arrow--prev" @click="scrollShelf(-1)">‹</button>
            <div ref="shelfRef" class="store-page__shelf-track">
              <GameCard
                v-for="game in tabGames"
                :key="game.id"
                :game="game"
                @click="navigateToDetail"
                @toggle-wishlist="handleToggleWishlist"
              />
            </div>
            <button class="store-page__arrow store-page__arrow--next" @click="scrollShelf(1)">›</button>
          </div>
        </section>

        <section class="store-page__shelf">
          <div class="store-page__shelf-head">
            <h2 class="store-page__shelf-title">特惠推荐</h2>
            <router-link to="/game/sale" class="store-page__view-all">浏览全部特惠 →</router-link>
          </div>
          <div class="store-page__carousel">
            <button class="store-page__arrow store-page__arrow--prev" @click="scrollSale(-1)">‹</button>
            <div ref="saleRef" class="store-page__shelf-track">
              <GameCard
                v-for="game in saleGames"
                :key="game.id"
                :game="game"
                @click="navigateToDetail"
                @toggle-wishlist="handleToggleWishlist"
              />
            </div>
            <button class="store-page__arrow store-page__arrow--next" @click="scrollSale(1)">›</button>
          </div>
        </section>

        <section class="store-page__shelf">
          <div class="store-page__shelf-head">
            <h2 class="store-page__shelf-title">新品上线</h2>
          </div>
          <div class="store-page__carousel">
            <button class="store-page__arrow store-page__arrow--prev" @click="scrollNew(-1)">‹</button>
            <div ref="newRef" class="store-page__shelf-track">
              <GameCard
                v-for="game in newGames"
                :key="game.id"
                :game="game"
                @click="navigateToDetail"
                @toggle-wishlist="handleToggleWishlist"
              />
            </div>
            <button class="store-page__arrow store-page__arrow--next" @click="scrollNew(1)">›</button>
          </div>
        </section>
      </div>

      <aside class="store-page__sidebar">
        <div class="store-page__top-sellers">
          <h3 class="store-page__top-title">热销排行</h3>
          <div class="store-page__top-list">
            <div
              v-for="(game, idx) in topSellers"
              :key="game.id"
              class="store-page__top-item"
              @click="navigateToDetail(game)"
            >
              <span class="store-page__top-rank">{{ idx + 1 }}</span>
              <img :src="game.cover" :alt="game.title" class="store-page__top-cover" loading="lazy" width="80" height="37" />
              <div class="store-page__top-info">
                <span class="store-page__top-name">{{ game.title }}</span>
                <span class="store-page__top-price" :class="{ 'store-page__top-price--sale': game.discount }">
                  <template v-if="game.price === 0">免费</template>
                  <template v-else>¥{{ game.price }}</template>
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/stores/game';
import type { GameItemResponse } from '@/services/game';
import { showMessage } from '@/components/common/InteractionMessage';
import HeroBanner from '../common/HeroBanner/index.vue';
import GameCard from '../common/GameCard/index.vue';

defineOptions({ name: 'GameStore' });

const router = useRouter();
const gameStore = useGameStore();
const banners = computed(() => gameStore.banners);
const shelfRef = ref<HTMLElement | null>(null);
const saleRef = ref<HTMLElement | null>(null);
const newRef = ref<HTMLElement | null>(null);

const tabs = [
  { key: 'hot', label: '热门推荐' },
  { key: 'top', label: '热销榜' },
  { key: 'editor', label: '编辑精选' },
  { key: 'free', label: '免费游玩' },
] as const;

type TabKey = typeof tabs[number]['key'];
const activeTab = ref<TabKey>('hot');

const currentTab = computed(() => tabs.find(t => t.key === activeTab.value) || tabs[0]);

const allGames = computed(() => gameStore.games);

const tabGames = computed(() => {
  const games = allGames.value;
  switch (activeTab.value) {
    case 'hot': return games.filter(g => g.tags?.includes('hot')).slice(0, 8);
    case 'top': return [...games].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
    case 'editor': return games.filter(g => g.tags?.includes('editor-choice')).slice(0, 8);
    case 'free': return games.filter(g => g.price === 0).slice(0, 8);
    default: return games.slice(0, 8);
  }
});

const saleGames = computed(() => allGames.value.filter(g => g.discount).sort((a, b) => (b.discount || 0) - (a.discount || 0)).slice(0, 8));
const newGames = computed(() => allGames.value.filter(g => g.tags?.includes('new')).slice(0, 8));
const topSellers = computed(() => [...allGames.value].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 10));

const navigateToDetail = (game: GameItemResponse) => { router.push(`/game/detail/${game.id}`); };

const handleToggleWishlist = (game: GameItemResponse) => {
  const added = gameStore.toggleWishlist(game.id);
  if (added) {
    showMessage.favorite.success(game.title, 'game');
  } else {
    showMessage.favorite.cancel(game.title, 'game');
  }
};

const scrollShelf = (dir: number) => { scrollTrack(shelfRef.value, dir); };
const scrollSale = (dir: number) => { scrollTrack(saleRef.value, dir); };
const scrollNew = (dir: number) => { scrollTrack(newRef.value, dir); };
const scrollTrack = (el: HTMLElement | null, dir: number) => {
  if (!el) return;
  el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
};

onMounted(() => {
  gameStore.ensureDataLoaded();
});
</script>

<style scoped lang="scss" src="./index.scss" />

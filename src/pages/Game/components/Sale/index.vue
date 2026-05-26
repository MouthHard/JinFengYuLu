<template>
  <div class="sale-page">
    <div class="sale-page__hero">
      <div class="sale-page__hero-inner">
        <h1 class="sale-page__title">特惠促销</h1>
        <p class="sale-page__sub">探索折扣，发现好游戏</p>
        <div class="sale-page__timer-block">
          <span class="sale-page__timer-label">距结束</span>
          <div class="sale-page__timer-cells">
            <div class="sale-page__timer-cell">
              <span class="sale-page__timer-num">{{ countdownDays }}</span>
              <span class="sale-page__timer-unit">天</span>
            </div>
            <span class="sale-page__timer-sep">:</span>
            <div class="sale-page__timer-cell">
              <span class="sale-page__timer-num">{{ countdownHours }}</span>
              <span class="sale-page__timer-unit">时</span>
            </div>
            <span class="sale-page__timer-sep">:</span>
            <div class="sale-page__timer-cell">
              <span class="sale-page__timer-num">{{ countdownMins }}</span>
              <span class="sale-page__timer-unit">分</span>
            </div>
            <span class="sale-page__timer-sep">:</span>
            <div class="sale-page__timer-cell">
              <span class="sale-page__timer-num">{{ countdownSecs }}</span>
              <span class="sale-page__timer-unit">秒</span>
            </div>
          </div>
        </div>
        <div class="sale-page__stats">
          <span class="sale-page__stat">{{ saleGames.length }} 款特惠</span>
          <span class="sale-page__stat">最高 -{{ maxDiscount }}%</span>
        </div>
      </div>
    </div>

    <div class="sale-page__toolbar">
      <button
        v-for="opt in sortOptions"
        :key="opt.key"
        class="sale-page__sort-btn"
        :class="{ 'sale-page__sort-btn--active': sortBy === opt.key }"
        @click="sortBy = opt.key"
      >
        {{ opt.label }}
      </button>
    </div>

    <div class="sale-page__grid">
      <div v-for="game in sortedSaleGames" :key="game.id" class="sale-card" @click="navigateToDetail(game)">
        <div class="sale-card__cover-wrap">
          <img :src="game.cover" :alt="game.title" class="sale-card__cover" loading="lazy" width="460" height="215" />
        </div>
        <div class="sale-card__info">
          <div class="sale-card__left">
            <h3 class="sale-card__title">{{ game.title }}</h3>
            <div class="sale-card__tags">
              <span v-for="tag in game.tags.slice(0, 2)" :key="tag" class="sale-card__tag">{{ tagLabelMap[tag] || tag }}</span>
            </div>
          </div>
          <div class="sale-card__price-block">
            <span v-if="game.discount" class="sale-card__discount">-{{ game.discount }}%</span>
            <span v-if="game.originalPrice" class="sale-card__original">¥{{ game.originalPrice }}</span>
            <span class="sale-card__price">¥{{ game.price }}</span>
          </div>
        </div>
        <button
          class="sale-card__wish"
          :class="{ 'sale-card__wish--active': wishlisted.has(game.id) }"
          @click.stop="toggleWish(game.id)"
        >
          {{ wishlisted.has(game.id) ? '♥' : '♡' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import type { GameItem } from '@/typesOfPages/game';
import { games } from '../../data/index';

defineOptions({ name: 'GameSale' });

const router = useRouter();
const saleGames = computed(() => games.filter(g => g.discount).sort((a, b) => (b.discount || 0) - (a.discount || 0)));
const navigateToDetail = (game: GameItem) => { router.push(`/game/detail/${game.id}`); };

const maxDiscount = computed(() => Math.max(...saleGames.value.map(g => g.discount || 0)));

const tagLabelMap: Record<string, string> = { hot: '热门', new: '新作', sale: '特惠', coming: '即将推出', free: '免费', 'editor-choice': '精选', multiplayer: '多人' };

const sortOptions = [
  { key: 'discount', label: '折扣力度' },
  { key: 'price-asc', label: '价格低→高' },
  { key: 'price-desc', label: '价格高→低' },
  { key: 'rating', label: '评分最高' },
] as const;

type SortKey = typeof sortOptions[number]['key'];
const sortBy = ref<SortKey>('discount');

const sortedSaleGames = computed(() => {
  const list = [...saleGames.value];
  switch (sortBy.value) {
    case 'discount': return list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    case 'price-asc': return list.sort((a, b) => a.price - b.price);
    case 'price-desc': return list.sort((a, b) => b.price - a.price);
    case 'rating': return list.sort((a, b) => b.rating - a.rating);
    default: return list;
  }
});

const wishlisted = ref<Set<string>>(new Set());
const toggleWish = (id: string) => {
  const next = new Set(wishlisted.value);
  next.has(id) ? next.delete(id) : next.add(id);
  wishlisted.value = next;
};

const countdownDays = ref('0');
const countdownHours = ref('00');
const countdownMins = ref('00');
const countdownSecs = ref('00');
let timer: number | null = null;
const target = new Date();
target.setDate(target.getDate() + 3);
target.setHours(target.getHours() + 12);

const updateCountdown = () => {
  const diff = Math.max(0, target.getTime() - Date.now());
  countdownDays.value = String(Math.floor(diff / 86400000));
  countdownHours.value = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
  countdownMins.value = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  countdownSecs.value = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
};

onMounted(() => { updateCountdown(); timer = window.setInterval(updateCountdown, 1000); });
onUnmounted(() => { if (timer) clearInterval(timer); });
</script>

<style scoped lang="scss" src="./index.scss" />

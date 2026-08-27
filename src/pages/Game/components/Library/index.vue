<template>
  <div class="library-page">
    <div class="library-page__head">
      <h1 class="library-page__title">我的游戏库</h1>
      <span class="library-page__count">{{ ownedGames.length }} 款游戏</span>
    </div>

    <div v-if="ownedGames.length === 0" class="library-page__empty">
      <div class="library-page__empty-icon">🎮</div>
      <h2 class="library-page__empty-title">游戏库还是空的</h2>
      <p class="library-page__empty-desc">探索商店发现你喜爱的游戏，购买后会出现在这里</p>
      <div class="library-page__empty-actions">
        <router-link to="/game/store" class="library-page__empty-btn library-page__empty-btn--primary">浏览商店</router-link>
        <router-link to="/game/sale" class="library-page__empty-btn">查看特惠</router-link>
      </div>
      <div class="library-page__empty-suggestions">
        <span class="library-page__empty-sug-label">你可能喜欢</span>
        <div class="library-page__empty-sug-list">
          <div v-for="game in suggestions" :key="game.id" class="library-page__empty-sug-item" @click="navigateToDetail(game)">
            <img :src="game.cover" :alt="game.title" class="library-page__empty-sug-cover" loading="lazy" width="60" height="34" />
            <span class="library-page__empty-sug-name">{{ game.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <template v-else>
      <div class="library-page__toolbar">
        <div class="library-page__sort">
          <button
            v-for="opt in sortOptions"
            :key="opt.key"
            class="library-page__sort-btn"
            :class="{ 'library-page__sort-btn--active': sortBy === opt.key }"
            @click="sortBy = opt.key"
          >
            {{ opt.label }}
          </button>
        </div>
        <div class="library-page__filter">
          <button
            v-for="cat in filterCategories"
            :key="cat.key"
            class="library-page__filter-btn"
            :class="{ 'library-page__filter-btn--active': filterBy === cat.key }"
            @click="filterBy = cat.key"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <div class="library-page__list">
        <div v-for="game in displayGames" :key="game.id" class="lib-item" @click="navigateToDetail(game)">
          <img :src="game.cover" :alt="game.title" class="lib-item__cover" loading="lazy" width="80" height="45" />
          <div class="lib-item__info">
            <h3 class="lib-item__title">{{ game.title }}</h3>
            <span class="lib-item__cat">{{ categoryLabelMap[game.category] }}</span>
          </div>
          <span class="lib-item__time">{{ game.releaseDate }}</span>
          <span class="lib-item__rating">★ {{ game.rating.toFixed(1) }}</span>
          <button class="lib-item__play" @click.stop>启动</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { useGameStore } from '@/stores/game';
import type { GameItemResponse } from '@/services/game';

defineOptions({ name: 'GameLibrary' });

const router = useRouter();
const gameStore = useGameStore();

const ownedGames = computed(() => gameStore.getOwnedGames(gameStore.games));
const suggestions = computed(() => gameStore.games.filter(g => g.rating >= 4.5).slice(0, 3));
const navigateToDetail = (game: GameItemResponse) => { router.push(`/game/detail/${game.id}`); };

const sortOptions = [
  { key: 'name', label: '名称' },
  { key: 'recent', label: '最近游玩' },
  { key: 'rating', label: '评分' },
] as const;

type SortKey = typeof sortOptions[number]['key'];
const sortBy = ref<SortKey>('recent');

const ownedCategories = computed(() => [...new Set(ownedGames.value.map(g => g.category))]);
const filterCategories = computed(() => [
  { key: 'all' as const, label: '全部' },
  ...ownedCategories.value.map(c => ({ key: c, label: gameStore.categoryLabelMap[c] })),
]);

const filterBy = ref<string>('all');

const categoryLabelMap = computed(() => gameStore.categoryLabelMap);

const displayGames = computed(() => {
  let list = [...ownedGames.value];
  if (filterBy.value !== 'all') list = list.filter(g => g.category === filterBy.value);
  switch (sortBy.value) {
    case 'name': return list.sort((a, b) => a.title.localeCompare(b.title));
    case 'rating': return list.sort((a, b) => b.rating - a.rating);
    default: return list;
  }
});

onMounted(() => {
  gameStore.ensureDataLoaded();
});
</script>

<style scoped lang="scss" src="./index.scss" />

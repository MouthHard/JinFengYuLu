<template>
  <nav class="game-nav">
    <div class="game-nav__top">
      <div class="game-nav__inner">
        <div class="game-nav__brand">
          <span class="game-nav__logo">◆</span>
          <span class="game-nav__name">游戏空间</span>
        </div>
        <div class="game-nav__links">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="game-nav__link"
            active-class="game-nav__link--active"
          >
            {{ link.label }}
          </router-link>
        </div>
        <div class="game-nav__actions">
          <button 
            class="game-nav__action-btn"
            :title="`愿望单 (${wishlistCount})`"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span v-if="wishlistCount > 0" class="game-nav__badge">{{ wishlistCount }}</span>
          </button>
          <button 
            class="game-nav__action-btn"
            :title="`购物车 (${cartCount})`"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span v-if="cartCount > 0" class="game-nav__badge">{{ cartCount }}</span>
          </button>
        </div>
        <div class="game-nav__search">
          <input
            v-model="searchQuery"
            type="text"
            class="game-nav__search-input"
            placeholder="搜索游戏..."
            @keyup.enter="handleSearch"
          />
          <button class="game-nav__search-btn" @click="handleSearch">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="game-nav__sub">
      <div class="game-nav__sub-inner">
        <button
          v-for="cat in categories"
          :key="cat.key"
          class="game-nav__cat"
          :class="{ 'game-nav__cat--active': activeCategory === cat.key }"
          @click="$emit('categoryChange', cat.key); activeCategory = cat.key"
        >
          {{ cat.icon }} {{ cat.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import type { GameCategory } from '@/typesOfPages/game';
import { gameCategories, games } from '../../../data/index';
import { useGameStore } from '@/stores/game';

defineEmits<{ categoryChange: [key: GameCategory | 'all'] }>();

const router = useRouter();
const gameStore = useGameStore();
const searchQuery = ref('');
const activeCategory = ref<GameCategory | 'all'>('all');

const cartCount = gameStore.cartCount;
const wishlistCount = gameStore.wishlistCount;

const navLinks = [
  { to: '/game/store', label: '商店' },
  { to: '/game/sale', label: '特惠' },
  { to: '/game/library', label: '游戏库' },
];

const categories = [
  { key: 'all' as const, label: '全部', icon: '🎮' },
  ...gameCategories,
];

const handleSearch = () => {
  const q = searchQuery.value.trim();
  if (q) router.push({ path: '/game/store', query: { q } });
};

onMounted(() => {
  gameStore.initializeFromData(games);
});
</script>

<style scoped lang="scss" src="./index.scss" />

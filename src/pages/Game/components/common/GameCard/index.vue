<template>
  <div class="game-card" @click="$emit('click', game)">
    <div class="game-card__cover-wrap">
      <img
        class="game-card__cover"
        :src="game.cover"
        :alt="game.title"
        loading="lazy"
        width="460"
        height="215"
      />
      <div v-if="game.discount" class="game-card__discount">-{{ game.discount }}%</div>
      <div v-if="game.price === 0 && !game.discount" class="game-card__free-badge">免费</div>
      <div class="game-card__hover-overlay">
        <div class="game-card__hover-info">
          <span class="game-card__hover-review" :class="reviewClass">{{ reviewSummary }}</span>
          <span class="game-card__hover-count">{{ formatCount(game.reviewCount) }} 篇评价</span>
        </div>
      </div>
      <button 
        class="game-card__wish-btn"
        :class="{ 'game-card__wish-btn--active': isInWishlist }"
        :title="isInWishlist ? '从愿望单移除' : '加入愿望单'"
        @click="handleToggleWishlist"
      >
        {{ isInWishlist ? '♥' : '♡' }}
      </button>
    </div>
    <div class="game-card__info">
      <div class="game-card__left">
        <h3 class="game-card__title">{{ game.title }}</h3>
        <div class="game-card__tags">
          <span v-for="tag in displayTags" :key="tag" class="game-card__tag">{{ tag }}</span>
        </div>
        <div class="game-card__platforms-row">
          <span v-for="p in game.platforms" :key="p" class="game-card__platform-icon" :title="platformFullName(p)">{{ platformIcon(p) }}</span>
        </div>
      </div>
      <div class="game-card__price-block">
        <template v-if="game.price === 0">
          <span class="game-card__price game-card__price--free">免费游玩</span>
        </template>
        <template v-else-if="game.discount">
          <span class="game-card__original">¥{{ game.originalPrice }}</span>
          <span class="game-card__price game-card__price--sale">¥{{ game.price }}</span>
        </template>
        <template v-else>
          <span class="game-card__price">¥{{ game.price }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { GameItemResponse } from '@/services/game';
import { useGameStore } from '@/stores/game';

const props = defineProps<{ game: GameItemResponse }>();
const emit = defineEmits<{ 
  click: [game: GameItemResponse];
  'toggle-wishlist': [game: GameItemResponse];
}>();

const gameStore = useGameStore();

const tagLabels: Record<string, string> = { hot: '热门', new: '新作', sale: '特惠', coming: '即将推出', free: '免费', 'editor-choice': '精选', multiplayer: '多人' };
const displayTags = computed(() => (props.game.tags ?? []).slice(0, 2).map(t => tagLabels[t] || t));

const reviewSummary = computed(() => {
  const r = props.game.rating;
  if (r >= 9) return '好评如潮';
  if (r >= 8) return '特别好评';
  if (r >= 7) return '多半好评';
  return '褒贬不一';
});

const reviewClass = computed(() => {
  const r = props.game.rating;
  if (r >= 8) return 'game-card__hover-review--positive';
  if (r >= 7) return 'game-card__hover-review--mixed';
  return 'game-card__hover-review--negative';
});

const platformIcon = (p: string) => {
  const map: Record<string, string> = { pc: '🖥', ps5: '5', ps4: '4', xbox: 'X', switch: 'N', mobile: '📱' };
  return map[p] || p;
};

const platformFullName = (p: string) => {
  const map: Record<string, string> = { pc: 'PC', ps5: 'PS5', ps4: 'PS4', xbox: 'Xbox', switch: 'Nintendo Switch', mobile: '移动端' };
  return map[p] || p;
};

const formatCount = (n: number): string => {
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
};

const isInWishlist = computed(() => gameStore.isInWishlist(props.game.id));

const handleToggleWishlist = (e: Event) => {
  e.stopPropagation();
  emit('toggle-wishlist', props.game);
};
</script>

<style scoped lang="scss" src="./index.scss" />

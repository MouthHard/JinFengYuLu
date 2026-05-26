<template>
  <div class="hero-banner" @mouseenter="pause" @mouseleave="resume">
    <div class="hero-banner__track" :style="{ transform: `translateX(-${current * 100}%)` }">
      <div v-for="banner in banners" :key="banner.id" class="hero-banner__slide">
        <img :src="banner.image" :alt="banner.title" class="hero-banner__img" />
        <div class="hero-banner__shade" />
        <div class="hero-banner__text">
          <span v-if="banner.tag" class="hero-banner__tag">{{ tagLabel(banner.tag) }}</span>
          <h2 class="hero-banner__title">{{ banner.title }}</h2>
          <p class="hero-banner__sub">{{ banner.subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="hero-banner__progress">
      <div
        v-for="(_, i) in banners"
        :key="i"
        class="hero-banner__progress-bar"
        :class="{ 'hero-banner__progress-bar--active': i === current }"
      >
        <div
          v-if="i === current && !paused"
          class="hero-banner__progress-fill"
          :style="{ animationDuration: `${interval}ms` }"
        />
        <div v-else-if="i < current" class="hero-banner__progress-fill hero-banner__progress-fill--done" />
      </div>
    </div>
    <div class="hero-banner__thumbs">
      <div
        v-for="(banner, i) in banners"
        :key="i"
        class="hero-banner__thumb"
        :class="{ 'hero-banner__thumb--active': i === current }"
        @click="goTo(i)"
      >
        <img :src="banner.image" :alt="banner.title" class="hero-banner__thumb-img" loading="lazy" width="160" height="60" />
        <div class="hero-banner__thumb-label">
          <span class="hero-banner__thumb-title">{{ banner.title }}</span>
        </div>
      </div>
    </div>
    <button class="hero-banner__arrow hero-banner__arrow--prev" @click="prev">‹</button>
    <button class="hero-banner__arrow hero-banner__arrow--next" @click="next">›</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { GameBanner, GameTag } from '@/typesOfPages/game';

const props = defineProps<{ banners: GameBanner[] }>();
const interval = 6000;

const current = ref(0);
const paused = ref(false);
let timer: number | null = null;

const tagLabel = (tag: GameTag): string => {
  const map: Record<string, string> = { hot: '热门', new: '新作', sale: '特惠', coming: '即将推出', free: '免费', premium: '精品', 'editor-choice': '编辑精选', multiplayer: '多人' };
  return map[tag] || '';
};

const next = () => { current.value = (current.value + 1) % props.banners.length; };
const prev = () => { current.value = (current.value - 1 + props.banners.length) % props.banners.length; };
const goTo = (i: number) => { current.value = i; };
const pause = () => { paused.value = true; };
const resume = () => { paused.value = false; };

onMounted(() => {
  timer = window.setInterval(() => { if (!document.hidden && !paused.value) next(); }, interval);
});
onUnmounted(() => { if (timer) clearInterval(timer); });
</script>

<style scoped lang="scss" src="./index.scss" />

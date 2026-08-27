<template>
  <section class="hero-section">
    <h1 class="hero-title">
      <span class="title-line">
        <span
          v-for="(char, index) in heroTitle"
          :key="index"
          class="title-char"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ char }}
        </span>
      </span>
      <span class="title-line subtitle">
        <span
          v-for="(word, index) in heroSubtitleWords"
          :key="index"
          class="subtitle-word"
          :style="{ animationDelay: `${1 + index * 0.2}s` }"
        >
          {{ word }}
          <span v-if="index < 2" class="dot">✦</span>
        </span>
      </span>
    </h1>
    <div class="hero-stats">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-item"
        :style="{ animationDelay: `${1.5 + index * 0.15}s` }"
      >
        <div class="stat-icon">{{ stat.icon }}</div>
        <div class="stat-content">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { heroTitle, heroSubtitleWords } from '@/utils/landscape/constants';
  import { useLandscapeDataStore } from '@/stores/landscape';
  import { formatNumber } from '@/utils/landscape/format';

  const dataStore = useLandscapeDataStore();

  const stats = computed(() => {
    const images = dataStore.getAllImages();
    const videos = dataStore.getAllVideos();
    const photographerCount = dataStore.getAllPhotographers().length;
    const locations = new Set<string>();
    images.forEach(img => { if (img.location) locations.add(img.location); });
    videos.forEach(vid => { if (vid.location) locations.add(vid.location); });

    return [
      { icon: '📸', number: formatNumber(images.length + videos.length), label: '精选作品' },
      { icon: '👤', number: formatNumber(photographerCount), label: '摄影师' },
      { icon: '🌍', number: formatNumber(locations.size), label: '拍摄地' },
    ];
  });
</script>

<style scoped lang="scss" src="./index.scss" />

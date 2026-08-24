<template>
  <header class="page-header">
    <div class="header-content">
      <div class="title-group">
        <div class="lens-ring">
          <div v-for="i in 8" :key="i" class="lens-blade" :style="{ '--i': i }"></div>
          <div class="lens-core"></div>
        </div>
        <div class="title-block">
          <h1 class="main-title">定格诗者</h1>
          <p class="subtitle">探索全球顶尖风光摄影师的作品与故事</p>
        </div>
      </div>
      <div class="stats-bar">
        <div class="stat-item amber">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <div class="stat-text">
            <span class="stat-value">{{ statsA }}</span>
            <span class="stat-label">摄影师</span>
          </div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item cyan">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div class="stat-text">
            <span class="stat-value">{{ statsB }}</span>
            <span class="stat-label">作品</span>
          </div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item rose">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div class="stat-text">
            <span class="stat-value">{{ statsC }}</span>
            <span class="stat-label">拍摄地</span>
          </div>
        </div>
      </div>
    </div>
    <div class="camera-dial">
      <div v-for="i in 36" :key="i" class="dial-mark" :style="{ '--a': (i - 1) * 10 + 'deg' }"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useLandscapeDataStore } from '@/stores/landscape';
  import { formatNumber } from '@/utils/landscape/format';

  const dataStore = useLandscapeDataStore();

  const statsA = computed(() => formatNumber(dataStore.getAllPhotographers().length));
  const statsB = computed(() => formatNumber(dataStore.getAllImages().length + dataStore.getAllVideos().length));
  const statsC = computed(() => {
    const locations = new Set<string>();
    dataStore.getAllImages().forEach(img => { if (img.location) locations.add(img.location); });
    dataStore.getAllVideos().forEach(vid => { if (vid.location) locations.add(vid.location); });
    return formatNumber(locations.size);
  });
</script>

<style scoped lang="scss" src="./index.scss" />

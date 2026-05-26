<template>
  <section class="ranking-section">
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-icon">🏆</span>
        摄影师排行榜
      </h2>
      <p class="section-desc">发现最受欢迎的摄影师</p>
    </div>

    <div class="ranking-tabs">
      <button v-for="tab in rankingTabs" :key="tab.value" :class="['ranking-tab', { active: activeRankingTab === tab.value }]" @click="activeRankingTab = tab.value">
        <span class="tab-icon">{{ tab.icon }}</span>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </div>

    <div v-if="rankingPhotographers.length > 0" class="ranking-list">
      <div v-for="(photographer, index) in rankingPhotographers" :key="photographer.id" class="ranking-item" :style="{ '--index': index }">
        <div class="rank-number" :class="`rank-${index + 1}`">{{ index + 1 }}</div>
        <div class="rank-avatar">
          <img loading="lazy" :src="photographer.avatar" :alt="photographer.name" />
          <div class="avatar-ring"></div>
        </div>
        <div class="rank-info">
          <h3 class="rank-name">{{ photographer.name }}</h3>
          <p class="rank-title">{{ photographer.title }}</p>
        </div>
        <div class="rank-stats">
          <div class="rank-stat" :class="{ highlight: activeRankingTab === 'works' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <div class="stat-content">
              <span class="rank-stat-value">{{ photographer.worksCount }}</span>
              <span class="rank-stat-label">作品</span>
            </div>
          </div>
          <div class="rank-stat" :class="{ highlight: activeRankingTab === 'followers' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div class="stat-content">
              <span class="rank-stat-value">{{ photographer.followers }}</span>
              <span class="rank-stat-label">粉丝</span>
            </div>
          </div>
          <div class="rank-stat" :class="{ highlight: activeRankingTab === 'likes' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <div class="stat-content">
              <span class="rank-stat-value">{{ photographer.likes }}</span>
              <span class="rank-stat-label">点赞</span>
            </div>
          </div>
          <div class="rank-stat" :class="{ highlight: activeRankingTab === 'views' }">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <div class="stat-content">
              <span class="rank-stat-value">{{ photographer.views }}</span>
              <span class="rank-stat-label">浏览</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <p class="empty-text">暂无排行榜数据</p>
      <span class="empty-hint">排行榜数据即将呈现</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePhotographersViewData } from '@/composables/landscape';
import { rankingTabs } from '@/utils/landscape/constants';

const activeRankingTab = ref('works');

const { allPhotographers } = usePhotographersViewData();
const photographers = ref(allPhotographers());

const parseCount = (value: string): number => {
  const num = parseFloat(value.replace(/[KMk]/gi, ''));
  if (value.toUpperCase().includes('K')) return num * 1000;
  if (value.toUpperCase().includes('M')) return num * 1000000;
  return num;
};

const rankingPhotographers = computed(() => {
  const list = [...photographers.value];
  
  if (activeRankingTab.value === 'works') {
    return list.sort((a, b) => parseCount(b.worksCount) - parseCount(a.worksCount)).slice(0, 5);
  } else if (activeRankingTab.value === 'followers') {
    return list.sort((a, b) => parseCount(b.followers) - parseCount(a.followers)).slice(0, 5);
  } else if (activeRankingTab.value === 'likes') {
    return list.sort((a, b) => parseCount(b.likes) - parseCount(a.likes)).slice(0, 5);
  } else {
    return list.sort((a, b) => parseCount(b.views) - parseCount(a.views)).slice(0, 5);
  }
});
</script>

<style scoped lang="scss" src="./index.scss" />

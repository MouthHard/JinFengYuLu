<template>
  <div class="detail-panel">
    <Transition name="detail-fade" mode="out-in">
      <div v-if="dynasty" :key="dynasty.id" class="detail-content">
        <div class="detail-header">
          <div class="header-main">
            <h2 class="dynasty-title">{{ dynasty.name }}</h2>
            <div class="dynasty-meta">
              <span class="meta-period">{{ dynasty.period }}</span>
              <span class="meta-duration">{{ durationYears }}年</span>
              <span class="meta-capital">都城：{{ dynasty.capital }}</span>
            </div>
          </div>
          <button class="close-btn" @click="handleClose">
            ×
          </button>
        </div>

        <div class="info-cards">
          <div class="info-card" :style="{ '--index': 0 }">
            <div class="card-icon">👑</div>
            <div class="card-content">
              <span class="card-label">开国皇帝</span>
              <span class="card-value">{{ dynasty.founder }}</span>
            </div>
          </div>
          <div class="info-card" :style="{ '--index': 1 }">
            <div class="card-icon">🏛️</div>
            <div class="card-content">
              <span class="card-label">统治民族</span>
              <span class="card-value">{{ dynasty.ethnicGroup }}</span>
            </div>
          </div>
          <div class="info-card" :style="{ '--index': 2 }">
            <div class="card-icon">📍</div>
            <div class="card-content">
              <span class="card-label">主要地域</span>
              <span class="card-value">{{ dynasty.location }}</span>
            </div>
          </div>
        </div>

 
        <div class="description-section">
          <h3 class="section-title">历史概述</h3>
          <p class="description-text">{{ dynasty.description }}</p>
        </div>

 
        <div class="highlights-section">
          <h3 class="section-title">重要事件</h3>
          <div class="highlights-list">
            <div
              v-for="(highlight, idx) in dynasty.highlights"
              :key="idx"
              class="highlight-item"
              :style="{ '--delay': idx * 0.1 + 's' }"
            >
              <div class="highlight-dot"></div>
              <span class="highlight-text">{{ highlight }}</span>
            </div>
          </div>
        </div>

 
        <div class="map-section">
          <h3 class="section-title">疆域范围</h3>
          <div class="map-container">
            <img loading="lazy" :src="dynasty.mapUrl" :alt="dynasty.name + '疆域'" />
            <div class="map-overlay">
              <p>{{ dynasty.mapDescription }}</p>
            </div>
          </div>
        </div>
      </div>

 
      <div v-else class="empty-state">
        <div class="empty-icon">📜</div>
        <h3 class="empty-title">探索中国历史</h3>
        <p class="empty-desc">点击左侧朝代，了解五千年华夏文明</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  interface Dynasty {
    id: string;
    name: string;
    period: string;
    era: string;
    periodTag: string;
    isUnified?: boolean;
    description?: string;
    highlights?: string[];
    mapUrl?: string;
    mapDescription?: string;
    capital?: string;
    location?: string;
    ethnicGroup?: string;
    founder?: string;
    startYear?: number;
    endYear?: number;
  }

  const props = defineProps<{
    dynasty: Dynasty | null;
    durationYears: number;
  }>();

  const emit = defineEmits<{
    (e: 'close'): void;
  }>();

  const handleClose = () => {
    emit('close');
  };
</script>

<style scoped lang="scss">
  @use './index.scss' as *;
</style>

<template>
  <section class="intangible-heritage">
    <div class="section-header">
      <div class="header-left">
        <span class="badge-icon">🏮</span>
        <span class="badge-text">非物质文化遗产</span>
      </div>
      <button class="more-btn" @click="handleMoreClick">更多</button>
    </div>

    <div class="heritage-grid">
      <div
        v-for="heritage in heritages"
        :key="heritage.id"
        class="heritage-card-wrapper"
      >
        <div class="heritage-card" :class="heritage.level">
          <div class="card-background"></div>
          <div class="card-glow"></div>

          <div class="card-visual">
            <img :src="heritage.image" class="card-image" loading="lazy" />

            <div class="level-badge">
              <span class="badge-icon">{{ getLevelIcon(heritage.level) }}</span>
              <span class="badge-label">{{ levelLabels[heritage.level] }}</span>
            </div>

            <div class="action-buttons">
              <button class="detail-btn">详情</button>
              <button
                class="icon-btn"
                :class="{ active: isFavorite(heritage.id) }"
                @click.stop="toggleFavorite(heritage.id)"
              >
                <svg
                  viewBox="0 0 24 24"
                  :fill="isFavorite(heritage.id) ? 'currentColor' : 'none'"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  ></path>
                </svg>
              </button>
              <button class="icon-btn" @click.stop="shareHeritage(heritage)">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>

          <div class="card-body">
            <div class="card-top">
              <div class="heritage-title">{{ heritage.name }}</div>
              <div class="title-decoration"></div>
            </div>

            <p class="heritage-desc">{{ heritage.description }}</p>

            <div class="info-card">
              <span class="info-icon">🏛️</span>

              <div class="info-text">
                <span class="info-label">保护单位</span>
                <span class="info-value">{{ heritage.protectionUnit }}</span>
              </div>
            </div>

            <div class="feature-tags">
              <span
                v-for="(tag, index) in heritage.tags || heritage.features"
                :key="index"
                class="feature-tag"
                :class="`tag-style-${index % 5}`"
              >
                <span class="tag-dot"></span>
                {{ tag }}
              </span>
            </div>

            <div class="stats-row">
              <div class="stat-item">
                <span class="stat-emoji">👁️</span>
                <span class="stat-number">{{
                  formatNumber(heritage.views || 0)
                }}</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-emoji">❤️</span>
                <span class="stat-number">{{
                  formatNumber(heritage.likes || 0)
                }}</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-emoji">⭐</span>
                <span class="stat-number">{{
                  (heritage.rating || 0).toFixed(1)
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="heritages.length === 0" class="empty-state">
        <div class="empty-icon">🏮</div>
        <h4 class="empty-title">暂无非物质文化遗产数据</h4>
        <p class="empty-desc">该地区的非物质文化遗产信息正在更新中</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IntangibleHeritage } from "./types";

const props = defineProps<{
  heritages: IntangibleHeritage[];
}>();

const favorites = ref<Set<string>>(new Set());

const levelLabels: Record<string, string> = {
  national: "国家级",
  provincial: "省级",
  municipal: "市级",
};

const getLevelIcon = (level: string) => {
  const icons: Record<string, string> = {
    national: "👑",
    provincial: "🎖️",
    municipal: "🏅",
  };
  return icons[level] || "🏆";
};

const handleMoreClick = () => {
  console.log("更多按钮被点击");
};

const isFavorite = (id: string) => favorites.value.has(id);

const toggleFavorite = (id: string) => {
  if (favorites.value.has(id)) {
    favorites.value.delete(id);
  } else {
    favorites.value.add(id);
  }
};

const shareHeritage = (heritage: IntangibleHeritage) => {
  if (navigator.share) {
    navigator.share({
      title: heritage.name,
      text: heritage.description,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(`${heritage.name}: ${heritage.description}`);
  }
};

const formatNumber = (num: number) => {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + "w";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};
</script>

<style scoped src="./index.scss" />

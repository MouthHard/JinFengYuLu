<template>
  <div class="artifacts-section">
    <div class="section-header">
      <h4 class="section-title">
        <span class="title-icon">✨</span>
        馆藏精品
      </h4>
      <button class="more-link">查看全部</button>
    </div>
    <div class="artifacts-grid">
      <div
        v-for="(artifact, index) in artifacts"
        :key="index"
        class="artifact-card"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        <!-- 3D卡片装饰层 -->
        <div class="card-shine"></div>

        <div class="artifact-image">
          <img loading="lazy" :src="artifact.image" :alt="artifact.name" />

          <!-- 收藏和分享按钮 -->
          <div class="quick-actions">
            <button class="action-icon" title="收藏">
              <span>❤️</span>
            </button>
            <button class="action-icon" title="分享">
              <span>🔗</span>
            </button>
          </div>
        </div>
        <div class="artifact-info">
          <div class="info-badge">
            <span class="badge-dot"></span>
            精品馆藏
          </div>
          <h5 class="artifact-name">{{ artifact.name }}</h5>
          <div class="artifact-meta">
            <span class="artifact-period">
              <span class="period-icon">📅</span>
              {{ artifact.period }}
            </span>
            <span class="artifact-rarity">珍贵文物</span>
          </div>
          <p class="artifact-desc">{{ artifact.description }}</p>
          <!-- 互动标签 -->
          <div class="artifact-tags">
            <span class="tag-3d">国宝级</span>
            <span class="tag-3d">限时展出</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  interface Props {
    artifacts: any[];
  }

  defineProps<Props>();

  const hoveredIndex = ref<number | null>(null);

  const handleMouseEnter = (index: number) => {
    hoveredIndex.value = index;
  };

  const handleMouseLeave = () => {
    hoveredIndex.value = null;
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>

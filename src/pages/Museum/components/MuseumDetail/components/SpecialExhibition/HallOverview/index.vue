<template>
  <div class="hall-overview">
    <div class="overview-main">
      <div class="overview-image">
        <img loading="lazy" :src="hall.coverImage" :alt="hall.name" />
        <div class="image-overlay">
          <span class="hall-badge">{{ hall.category }}</span>
        </div>
      </div>
      <div class="overview-info">
        <h3 class="hall-name">{{ hall.name }}</h3>
        <p class="hall-intro">{{ hall.introduction }}</p>
        <div class="hall-stats">
          <div class="stat-item">
            <span class="stat-number">
              {{ hall.stats.artifacts }}
            </span>
            <span class="stat-label">件藏品</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">
              {{ hall.stats.exhibitions }}
            </span>
            <span class="stat-label">个展览</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">
              {{ hall.stats.visitors }}
            </span>
            <span class="stat-label">万+参观</span>
          </div>
        </div>
        <div class="hall-actions">
          <button class="action-btn primary">
            <span>🎫</span>
            立即预约
          </button>
          <button class="action-btn secondary">
            <span>🎧</span>
            语音导览
          </button>
        </div>
        <!-- 参观信息（合并到概览区） -->
        <div class="visit-info-inline">
          <div class="info-item-inline">
            <span class="info-icon">📍</span>
            <div class="info-content">
              <span class="info-label">展馆位置</span>
              <span class="info-value">{{ hall.location }}</span>
            </div>
          </div>
          <div class="info-item-inline">
            <span class="info-icon">🕐</span>
            <div class="info-content">
              <span class="info-label">开放时间</span>
              <span class="info-value">{{ hall.openTime }}</span>
            </div>
          </div>
          <div class="info-item-inline">
            <span class="info-icon">⏱️</span>
            <div class="info-content">
              <span class="info-label">建议时长</span>
              <span class="info-value">{{ hall.duration }}</span>
            </div>
          </div>
          <div class="info-item-inline">
            <span class="info-icon">🎫</span>
            <div class="info-content">
              <span class="info-label">门票信息</span>
              <span class="info-value">{{ hall.ticket }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    hall: any;
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped src="./index.scss"></style>

<template>
  <div class="recommend-section">
    <div class="section-header">
      <h4 class="section-title">
        <span class="title-icon">💡</span>
        相关推荐
      </h4>
      <div class="header-decoration">
        <div class="decoration-line"></div>
        <div class="decoration-dot"></div>
      </div>
    </div>
    <div class="recommend-grid">
      <div
        v-for="(item, index) in recommendations"
        :key="index"
        class="recommend-card"
      >
        <!-- 卡片背景装饰 -->
        <div class="card-bg-pattern"></div>
        <div class="card-glow"></div>

        <!-- 卡片内容 -->
        <div class="card-content">
          <div class="recommend-icon-wrapper">
            <div class="icon-circle"></div>
            <div class="icon-ring"></div>
            <div class="recommend-icon">{{ item.icon }}</div>
          </div>

          <div class="card-info">
            <h5>{{ item.title }}</h5>
            <p>{{ item.desc }}</p>
          </div>

          <div class="recommend-footer">
            <span class="recommend-type">
              <span class="type-badge">{{ item.type }}</span>
            </span>
            <button class="explore-btn">
              <span class="btn-text">探索</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    recommendations: any[];
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped src="./index.scss"></style>

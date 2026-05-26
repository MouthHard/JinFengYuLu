<template>
  <div class="exhibitions-section">
    <div class="section-header">
      <h4 class="section-title">
        <span class="title-icon">🎯</span>
        专题展览
      </h4>
      <button class="more-link">更多展览</button>
    </div>

    <div class="exhibitions-grid">
      <div
        v-for="(exhibition, index) in exhibitions"
        :key="index"
        class="exhibition-card"
      >
        <div class="card-inner">
          <div class="card-image">
            <img loading="lazy" :src="exhibition.image" :alt="exhibition.title" />

            <span class="status-badge" :class="exhibition.status">
              {{ exhibition.statusText }}
            </span>

            <div class="hover-actions">
              <button class="action-icon-btn" title="收藏">❤️</button>
              <button class="action-icon-btn" title="分享">↗️</button>
            </div>
          </div>

          <div class="card-content">
            <h5 class="card-title">{{ exhibition.title }}</h5>

            <div class="card-meta">
              <span class="meta-date">📅 {{ exhibition.date }}</span>
            </div>

            <p class="card-desc">{{ exhibition.description }}</p>

            <div class="card-footer">
              <div class="tags">
                <span
                  v-for="(tag, tIndex) in exhibition.tags?.slice(0, 2)"
                  :key="tIndex"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>

              <button class="reserve-btn">
                <span class="btn-icon">🎫</span>
                <span>立即预约</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    exhibitions: any[];
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped src="./index.scss"></style>

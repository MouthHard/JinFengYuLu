<template>
  <div class="digital-section">
    <div class="section-header">
      <h4 class="section-title">
        <span class="title-icon">🌐</span>
        数字体验
      </h4>
    </div>
    <div v-if="immersiveItems.length > 0" class="digital-grid">
      <div
        v-for="(item, index) in immersiveItems"
        :key="index"
        class="digital-card"
        :class="cardClass(index)"
      >
        <div class="neon-border"></div>
        <div class="card-bg-glow"></div>

        <div class="digital-icon-wrapper">
          <div class="digital-icon">{{ cardIcon(index) }}</div>
          <div class="icon-ring"></div>
          <div class="icon-pulse"></div>
        </div>
        <h5>{{ item.title }}</h5>
        <p>{{ item.description }}</p>
        <button class="digital-btn">
          <span class="btn-text">进入体验</span>
          <span class="btn-glow"></span>
        </button>
      </div>
    </div>
    <div v-else class="no-data">
      <p>暂无数字体验内容</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useMuseumDataStore } from '@/stores/museum';

  const props = defineProps<{
    museumId: number;
  }>();

  const store = useMuseumDataStore();

  const immersiveItems = computed(() => {
    return store.getImmersiveByMuseumId(props.museumId);
  });

  const cardIcons = ['🥽', '📱', '🎬', '🎧'];
  const cardClasses = ['vr-card', 'ar-card', 'video-card', 'audio-card'];

  const cardIcon = (index: number) => cardIcons[index % cardIcons.length];
  const cardClass = (index: number) => cardClasses[index % cardClasses.length];
</script>

<style lang="scss" scoped src="./index.scss"></style>

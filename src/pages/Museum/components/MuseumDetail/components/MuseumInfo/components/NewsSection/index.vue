<template>
  <section class="news-section">
    <div class="section-header">
      <h2 class="section-title">博物馆新闻</h2>
      <button class="more-button">更多</button>
    </div>
    <div class="news-container">
      <div v-for="(news, index) in homeNews" :key="index" class="news-card">
        <div class="news-date">{{ news.date }}</div>
        <h3 class="news-title">{{ news.title }}</h3>
        <p class="news-description">{{ news.description }}</p>
        <div class="news-actions">
          <button class="read-more-button">阅读更多</button>
        </div>
      </div>
    </div>
    <div v-if="homeNews.length === 0" class="news-placeholder">
      <div class="placeholder-icon">🌼</div>
      <div class="placeholder-text">更多精彩新闻即将上线，敬请期待！</div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { Museum } from '@/typesOfPages/museum';
  import { getNewsByMuseumId } from '@/pages/Museum/data/news';

  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();

  const homeNews = computed(() => {
    if (!props.museum) return [];
    return getNewsByMuseumId(props.museum.id);
  });
</script>

<style lang="scss" scoped src="./index.scss"></style>

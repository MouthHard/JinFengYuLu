<template>
  <section class="exhibitions-section">
    <div class="section-header">
      <h2 class="section-title">最新展览</h2>
      <button class="more-button">更多</button>
    </div>
    <div class="exhibitions-container">
      <div
        class="exhibition-card"
        v-for="(exhibition, index) in homeExhibitions"
        :key="index"
      >
        <div class="image-container">
          <img :src="exhibition.image" @error="handleImageError" />
          <div class="image-placeholder" style="display: none">
            <span class="placeholder-icon">🖼️</span>
          </div>
        </div>
        <div class="exhibition-info">
          <h3 class="exhibition-title">{{ exhibition.title }}</h3>
          <p class="exhibition-description">{{ exhibition.description }}</p>
          <div class="action-buttons">
            <button class="action-button favorite-button">
              <span class="button-icon">❤️</span>
              <span class="button-text">收藏</span>
            </button>
            <button class="action-button follow-button">
              <span class="button-icon">⭐</span>
              <span class="button-text">关注</span>
            </button>
            <button class="action-button share-button">
              <span class="button-icon">📤</span>
              <span class="button-text">分享</span>
            </button>
          </div>
          <p class="exhibition-date">{{ exhibition.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Museum } from "@/types/museum";
import { getExhibitionsByMuseumId } from "@/pages/Museum/data";

interface Props {
  museum: Museum;
}

const props = defineProps<Props>();

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  if (target) {
    target.style.display = "none";
    const placeholder = target.nextElementSibling as HTMLElement;
    if (placeholder) {
      placeholder.style.display = "flex";
    }
  }
};

const homeExhibitions = computed(() => {
  if (!props.museum) return [];
  return getExhibitionsByMuseumId(props.museum.id);
});
</script>

<style lang="scss" scoped src="./index.scss"></style>

<template>
  <section class="immersive-section">
    <div class="section-header">
      <h2 class="section-title">沉浸式体验</h2>
      <button class="more-button">更多</button>
    </div>
    <div class="immersive-content">
      <div
        class="immersive-item"
        v-for="(item, index) in immersiveExperiences"
        :key="index"
      >
        <div class="immersive-image">
          <img v-if="item.image" :src="item.image" />
        </div>
        <div class="immersive-info">
          <h3 class="immersive-title">{{ item.title }}</h3>
          <p class="immersive-description">{{ item.description }}</p>
          <div class="immersive-actions">
            <button class="immersive-button">体验详情</button>
            <div class="action-buttons">
              <button class="action-button like-button">
                <span class="button-icon">👍</span>
                <span class="button-text">点赞</span>
              </button>
              <button class="action-button share-button">
                <span class="button-icon">📤</span>
                <span class="button-text">分享</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Museum } from "@/types/museum";
import { getImmersiveExperiencesByMuseumId } from "@/pages/Museum/data";

interface Props {
  museum: Museum;
}

const props = defineProps<Props>();

const immersiveExperiences = computed(() => {
  if (!props.museum) return [];
  return getImmersiveExperiencesByMuseumId(props.museum.id);
});
</script>

<style lang="scss" scoped src="./index.scss"></style>

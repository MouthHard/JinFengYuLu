<template>
  <section class="artifacts-section">
    <div class="section-header">
      <h2 class="section-title">文物精选</h2>
      <button class="more-button">
        <span class="button-decoration">❖</span>
        <span>更多</span>
      </button>
    </div>
    <div class="artifacts-container">
      <div
        v-for="(artifact, index) in homeArtifacts"
        :key="index"
        class="artifact-card"
        :style="getCardStyle(index)"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        <div class="card-inner">
          <div class="artifact-image">
            <img
              v-if="artifact.image"
              :src="artifact.image"
              :alt="artifact.name"
            />
            <div v-else class="image-placeholder">
              <span class="placeholder-icon">🏺</span>
            </div>
          </div>
          <div class="artifact-info">
            <h3 class="artifact-name">{{ artifact.name }}</h3>
            <p class="artifact-period">{{ artifact.period }}</p>
            <div class="action-buttons">
              <button class="action-button favorite-button">
                <span class="button-icon">❤️</span>
                <span class="button-text">喜爱</span>
              </button>
              <button class="action-button like-button">
                <span class="button-icon">⭐</span>
                <span class="button-text">收藏</span>
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
import { computed, ref } from "vue";
import type { Museum } from "@/types/museum";
import { getArtifactsByMuseumId } from "@/pages/Museum/data";

interface Props {
  museum: Museum;
}

const props = defineProps<Props>();

const hoveredIndex = ref<number | null>(null);

const homeArtifacts = computed(() => {
  if (!props.museum) return [];
  return getArtifactsByMuseumId(props.museum.id);
});

const getCardStyle = (index: number) => {
  const baseOffset = 60;

  let left = index * baseOffset;
  let zIndex = homeArtifacts.value.length - index;
  let transform = "";
  let transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";

  // 当悬停在某个卡片上时
  if (hoveredIndex.value !== null) {
    if (index === hoveredIndex.value) {
      // 当前悬停的卡片
      if (index !== 0) {
        // 不是第一张卡片，需要右移
        left = hoveredIndex.value * baseOffset + 100; // 右移100px
      }
      zIndex = homeArtifacts.value.length + 1; // 提升到最上层
      transform = "translateY(-10px) scale(1.05)";
    } else if (index > hoveredIndex.value) {
      // 右侧的卡片
      left = index * baseOffset + 150; // 右移更多
      zIndex = homeArtifacts.value.length - index; // 保持原有层级
    }
  }

  return {
    left: `${left}px`,
    zIndex,
    transform,
    transition,
  };
};

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index;
};

const handleMouseLeave = () => {
  hoveredIndex.value = null;
};
</script>

<style lang="scss" scoped src="./index.scss"></style>

<template>
  <div class="spots-section">
    <div class="section-header">
      <span class="title-icon">🗺️</span>
      全部景点
      <span class="spots-count">{{ spots.length }}</span>
    </div>

    <div class="spots-container">
      <div v-for="spot in spots" :key="spot.id" class="spot-card">
        <div class="spot-image-wrapper">
          <img :src="spot.image" :alt="spot.name" class="spot-image" />

          <div class="main-landscape-types">
            <div
              v-for="category in spot.landscapeCategory || ['自然景观']"
              :key="category"
              class="main-landscape-type"
            >
              {{ category }}
            </div>
          </div>

          <div class="spot-rating">
            <span class="rating-icon">⭐</span>
            <span class="rating-value">{{ spot.rating || 4.5 }}</span>
          </div>

          <div class="sub-landscape-types">
            <span
              v-for="tag in spot.landformTags"
              :key="tag"
              class="landscape-type-tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="spot-content">
          <div class="spot-header">
            <h3 class="spot-name">{{ spot.name }}</h3>
            <div class="spot-actions">
              <button class="action-btn" @click.stop="toggleFavorite(spot.id)">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </button>
              <button class="action-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <p class="spot-description">{{ spot.description }}</p>

          <div class="spot-meta">
            <div class="meta-item">
              <LocationIcon />
              <span>{{ spot.location }}</span>
            </div>
            <div class="meta-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <span>{{ spot.bestTime }}</span>
            </div>
          </div>

          <div class="spot-tags">
            <span
              v-for="(tag, index) in spot.tags"
              :key="index"
              class="tag-item"
              :class="`tag-${(index as number) % 3}`"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocationIcon } from "../../../../icons";

const props = defineProps<{
  spots: any[];
}>();

const emit = defineEmits<{
  toggleFavorite: [spotId: string];
}>();

const toggleFavorite = (spotId: string) => {
  emit("toggleFavorite", spotId);
};
</script>

<style scoped src="./index.scss" />

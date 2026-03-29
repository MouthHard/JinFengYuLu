<template>
  <div class="spots-section">
    <div class="section-header">
      <span class="title-icon">🗺️</span>
      全部景点
      <span class="spots-count">{{ spots.length }}</span>
    </div>

    <div class="spots-container">
      <div v-for="spot in spots" :key="spot.id" class="spot-card-wrapper">
        <div class="spot-card">
          <div class="card-header">
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
            <svg
              class="stars-animation stars-header"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="1.5"
                fill="rgba(255,255,255,0.8)"
                class="star star-1"
              />
              <circle
                cx="50"
                cy="35"
                r="1"
                fill="rgba(255,255,255,0.6)"
                class="star star-2"
              />
              <circle
                cx="80"
                cy="15"
                r="1.2"
                fill="rgba(255,255,255,0.7)"
                class="star star-3"
              />
              <circle
                cx="120"
                cy="40"
                r="0.8"
                fill="rgba(255,255,255,0.5)"
                class="star star-4"
              />
              <circle
                cx="150"
                cy="25"
                r="1.3"
                fill="rgba(255,255,255,0.75)"
                class="star star-5"
              />
              <circle
                cx="180"
                cy="50"
                r="1"
                fill="rgba(255,255,255,0.65)"
                class="star star-6"
              />
              <circle
                cx="30"
                cy="60"
                r="0.9"
                fill="rgba(255,255,255,0.55)"
                class="star star-7"
              />
              <circle
                cx="100"
                cy="70"
                r="1.1"
                fill="rgba(255,255,255,0.7)"
                class="star star-8"
              />
              <circle
                cx="160"
                cy="65"
                r="0.8"
                fill="rgba(255,255,255,0.5)"
                class="star star-9"
              />
              <circle
                cx="70"
                cy="80"
                r="1"
                fill="rgba(255,255,255,0.6)"
                class="star star-10"
              />
              <circle
                cx="130"
                cy="85"
                r="0.7"
                fill="rgba(255,255,255,0.45)"
                class="star star-11"
              />
              <circle
                cx="40"
                cy="45"
                r="1.2"
                fill="rgba(255,255,255,0.7)"
                class="star star-12"
              />
            </svg>
          </div>

          <div class="image-wrapper">
            <img :src="spot.image" :alt="spot.name" class="spot-image" />
          </div>

          <div class="card-footer">
            <p class="spot-description">{{ spot.description }}</p>
            <div class="spot-meta">
              <div class="meta-item">
                <LocationIcon />
                <span>{{ spot.location }}</span>
              </div>
              <div v-if="spot.rating" class="meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
                <span>{{ spot.rating }}</span>
              </div>
            </div>
            <div class="spot-tags">
              <span
                v-for="(tag, index) in spot.tags"
                :key="index"
                class="tag-item"
                :class="`tag-${Number(index) % 9}`"
              >
                {{ tag }}
              </span>
            </div>
            <svg
              class="stars-animation stars-footer"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="15"
                r="1.2"
                fill="rgba(255,255,255,0.7)"
                class="star star-1"
              />
              <circle
                cx="60"
                cy="30"
                r="0.9"
                fill="rgba(255,255,255,0.55)"
                class="star star-2"
              />
              <circle
                cx="95"
                cy="10"
                r="1.1"
                fill="rgba(255,255,255,0.65)"
                class="star star-3"
              />
              <circle
                cx="130"
                cy="35"
                r="0.8"
                fill="rgba(255,255,255,0.5)"
                class="star star-4"
              />
              <circle
                cx="165"
                cy="20"
                r="1.3"
                fill="rgba(255,255,255,0.75)"
                class="star star-5"
              />
              <circle
                cx="35"
                cy="55"
                r="1"
                fill="rgba(255,255,255,0.6)"
                class="star star-6"
              />
              <circle
                cx="85"
                cy="65"
                r="0.7"
                fill="rgba(255,255,255,0.45)"
                class="star star-7"
              />
              <circle
                cx="115"
                cy="50"
                r="1.1"
                fill="rgba(255,255,255,0.7)"
                class="star star-8"
              />
              <circle
                cx="155"
                cy="60"
                r="0.9"
                fill="rgba(255,255,255,0.55)"
                class="star star-9"
              />
              <circle
                cx="45"
                cy="75"
                r="0.8"
                fill="rgba(255,255,255,0.5)"
                class="star star-10"
              />
              <circle
                cx="105"
                cy="85"
                r="1"
                fill="rgba(255,255,255,0.6)"
                class="star star-11"
              />
              <circle
                cx="145"
                cy="80"
                r="0.7"
                fill="rgba(255,255,255,0.45)"
                class="star star-12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div v-if="spots.length === 0" class="no-results">
      <div class="no-results-icon">🔍</div>
      <h3>未找到相关景点</h3>
      <p>请尝试调整搜索关键词或筛选条件</p>
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

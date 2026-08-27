<template>
  <div class="spots-container">
    <div v-for="spot in spots" :key="spot.id" class="spot-card">
      <div class="spot-image-wrapper">
        <img loading="lazy" :src="spot.image" :alt="spot.name" class="spot-image" />

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
              <HeartIcon width="18" height="18" />
            </button>
            <button class="action-btn">
              <ShareIcon width="18" height="18" />
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
            🍁
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
</template>

<script setup lang="ts">
  import { LocationIcon } from '@/pages/TravelGuide/icons/pages/scenery/index.ts';
  import { HeartIcon } from '@/pages/TravelGuide/icons/pages/food/index.ts';
  import { ShareIcon } from '@/pages/TravelGuide/icons/common/index.ts';
  const props = defineProps<{
    spots: any[];
  }>();

  const emit = defineEmits<{
    toggleFavorite: [spotId: string];
  }>();

  const toggleFavorite = (spotId: string) => {
    emit('toggleFavorite', spotId);
  };
</script>

<style scoped src="./index.scss" />

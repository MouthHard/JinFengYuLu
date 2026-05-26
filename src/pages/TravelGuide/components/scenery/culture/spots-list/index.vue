<template>
  <div class="spots-section">
    <div class="spots-container">
      <div v-for="spot in spots" :key="spot.id" class="spot-card-wrapper">
        <div class="spot-card">
          <div class="card-header">
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

          <div class="image-wrapper">
            <img loading="lazy" :src="spot.image" :alt="spot.name" class="spot-image" />
          </div>

          <div class="card-footer">
            <p class="spot-description">{{ spot.description }}</p>
            <div class="spot-meta">
              <div class="meta-item">
                <LocationIcon />
                <span>{{ spot.location }}</span>
              </div>
              <div v-if="spot.rating" class="meta-item">
                ⭐
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
            <StarsAnimation class="stars-footer" />
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
  import { LocationIcon, StarsAnimation } from '@/pages/TravelGuide/icons/pages/scenery/index.ts';
  import { HeartIcon } from '@/pages/TravelGuide/icons/pages/food/index.ts';
  import { ShareIcon } from '@/pages/TravelGuide/icons/common/index';

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

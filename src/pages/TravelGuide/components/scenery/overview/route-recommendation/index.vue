<template>
  <div class="route-recommendation">
    <div class="recommendation-header">
      <span class="recommendation-icon">
        <RouteIcon />
      </span>
      智能路线推荐
    </div>

    <div v-if="recommendedRoutes.length > 0" class="route-container">
      <div
        v-for="route in recommendedRoutes"
        :key="route.id"
        class="route-card"
        :data-route-id="route.id"
      >
        <div class="svg-background-layer">
          <RouteBackground />
        </div>

        <div class="route-card-header">
          <h4 class="route-title">{{ route.title }}</h4>
          <div class="route-badges">
            <span
              v-for="(tag, tagIndex) in (route.tags || []).slice(0, 3)"
              :key="tagIndex"
              class="tag-badge"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="route-image-section">
          <img loading="lazy" :src="route.image" :alt="route.title" class="route-image" />
          <div class="route-image-overlay">
            <div class="route-rating">
              <span class="rating-icon">⭐</span>
              <span class="rating-value">{{ route.rating }}</span>
            </div>
            <div class="route-duration">
              <span class="duration-icon">⏱️</span>
              <span class="duration-value">{{ route.duration }}</span>
            </div>
          </div>
        </div>

        <div class="route-details-block">
          <div class="info-row">
            <div class="info-item">
              <span class="info-label">最佳时间</span>
              <span class="info-value">{{ route.bestTime }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">交通方式</span>
              <span class="info-value">{{ route.traffic }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">适合人群</span>
              <span class="info-value">{{ route.suitableFor }}</span>
            </div>
          </div>
          <div class="spots-section">
            <span class="spots-label">途经景点</span>
            <span
              v-for="(spot, spotIndex) in route.spots"
              :key="spotIndex"
              class="spot-tag"
            >
              {{ spot }}
            </span>
          </div>
        </div>

        <div class="route-actions">
          <button class="btn-primary">
            <span class="btn-icon">📋</span>
            查看详情
          </button>
          <button class="btn-secondary">
            <span class="btn-icon">❤️</span>
            收藏路线
          </button>
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">🗺</div>
      <h4 class="empty-title">暂无路线推荐</h4>
      <p class="empty-description">该地区暂无路线推荐</p>
      <button class="btn-primary">
        <span class="btn-icon">🔍</span>
        探索更多路线
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import {
    RouteIcon,
    RouteBackground,
  } from '@/pages/TravelGuide/icons/pages/scenery';

  const props = defineProps({
    sceneryData: {
      type: Object,
      default: () => ({}),
    },
  });

  // 使用计算属性替代方法，避免每次渲染都返回新数组
  const recommendedRoutes = computed(() => {
    // 从props获取路线数据，如果没有则返回空数组
    if (props.sceneryData.routes && props.sceneryData.routes.length > 0) {
      return props.sceneryData.routes.slice(0, 4);
    }

    return [];
  });
</script>

<style scoped lang="scss" src="./index.scss" />

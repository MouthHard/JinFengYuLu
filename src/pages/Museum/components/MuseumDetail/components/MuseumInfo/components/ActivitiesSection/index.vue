<template>
  <section class="activities-section">
    <div class="section-header">
      <h2 class="section-title">活动预告</h2>
      <button class="more-button">更多</button>
    </div>
    <div class="activities-container">
      <div
        v-for="(activity, index) in homeActivities"
        :key="index"
        class="activity-card"
      >
        <!-- 赛博朋克SVG背景 -->
        <CyberpunkBackground />

        <div class="activity-image">
          <img loading="lazy" :src="activity.image" :alt="activity.title" />
        </div>

        <div class="activity-info">
          <h3 class="activity-title">{{ activity.title }}</h3>
          <p class="activity-description">{{ activity.description }}</p>
          <div class="activity-date">{{ activity.date }}</div>
          <div class="activity-location">
            <span class="location-icon">📍</span>
            <span>{{ activity.location || props.museum.name }}</span>
          </div>
          <div class="activity-actions">
            <button class="detail-button" @click="viewActivityDetail(activity)">
              查看详情
            </button>
            <button
              class="reservation-button"
              @click="reserveActivity(activity)"
            >
              预约活动
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { Museum, Activity } from '@/types/museum';
  import { useMuseumDataStore } from '@/stores/museum';
  import { CyberpunkBackground } from '@/pages/Museum/icon/pages';

  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();
  const store = useMuseumDataStore();

  const homeActivities = computed(() => {
    if (!props.museum) return [];
    return store.getActivitiesByMuseumId(props.museum.id);
  });

  const reserveActivity = (_activity: Activity) => {
    window.open(`/museum/${props.museum.id}?tab=exhibitions`, '_self');
  };

  const viewActivityDetail = (_activity: Activity) => {
    window.open(`/museum/${props.museum.id}?tab=exhibitions`, '_self');
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>

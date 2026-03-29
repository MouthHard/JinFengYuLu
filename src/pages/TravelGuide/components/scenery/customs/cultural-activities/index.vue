<template>
  <section class="cultural-activities">
    <div class="section-header">
      <div class="header-left">
        <span class="badge-icon">🎭</span>
        <span class="badge-text">文化活动</span>
      </div>
      <button class="more-btn" @click="handleMoreClick">更多</button>
    </div>
    <div class="activities-grid">
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="activity-card"
      >
        <div class="activity-card-header">
          {{ activity.name }}
        </div>
        <div class="activity-image-wrapper">
          <img
            :src="activity.image"
            :alt="activity.name"
            class="activity-image"
          />
          <div class="activity-overlay">
            <span class="activity-type">{{ activity.type }}</span>
          </div>
        </div>
        <div class="activity-content">
          <p class="activity-description">{{ activity.description }}</p>
          <div class="activity-details">
            <div class="detail-item">
              <span class="detail-label">地点：</span>
              <span class="detail-value">{{ activity.location }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">类型：</span>
              <span class="detail-value">{{ activity.type }}</span>
            </div>
          </div>
          <div class="activity-actions">
            <button
              class="action-btn favorite-btn"
              @click="toggleFavorite(activity.id)"
            >
              ❤ 收藏
            </button>
            <button
              class="action-btn share-btn"
              @click="shareActivity(activity.id)"
            >
              📤 分享
            </button>
          </div>
        </div>
      </div>
      <div v-if="activities.length === 0" class="empty-state">
        <p>暂无文化活动数据</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  activities: any[];
}>();

const emit = defineEmits<{
  toggleFavorite: [activityId: string];
  shareActivity: [activityId: string];
}>();

const handleMoreClick = () => {
  console.log("更多按钮被点击");
};

const toggleFavorite = (activityId: string) => {
  emit("toggleFavorite", activityId);
};

const shareActivity = (activityId: string) => {
  emit("shareActivity", activityId);
};
</script>

<style scoped src="./index.scss" />

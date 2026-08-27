<template>
  <div class="profile-achievements">
    <div class="achievements-header">
      <h2 class="page-title">我的</h2>
      <div class="achievements-summary">
        <div class="summary-stat">
          <span class="stat-icon"></span>
          <span class="stat-text">
            已获成就 <span class="stat-highlight">{{ achievedCount }}</span> / {{ totalCount }} 个成就          </span>
        </div>
        <div class="summary-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
          </div>
          <span class="progress-text">{{ progressPercentage }}%</span>
        </div>
      </div>
    </div>

    <div class="achievements-grid">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="achievement-card"
        :class="{ 'achieved': achievement.achieved }"
      >
        <div v-if="achievement.achieved" class="achievement-badge">
          <span class="badge-icon"></span>
        </div>

        <div class="achievement-icon">
          {{ achievement.icon }}
        </div>

        <div class="achievement-content">
          <h3 class="achievement-name">{{ achievement.name }}</h3>
          <p class="achievement-desc">{{ achievement.desc }}</p>

          <div v-if="!achievement.achieved" class="achievement-progress">
            <div class="progress-track">
              <div class="progress-fill" :style="{ width: achievement.progress + '%' }"></div>
            </div>
            <span class="progress-label">{{ achievement.progress }}%</span>
          </div>

          <div v-if="achievement.achieved" class="achievement-status">
            <span class="status-badge">
              <span class="badge-check"></span>
              已获成就            </span>
          </div>
        </div>

        <div v-if="achievement.achieved" class="achievement-glow"></div>
      </div>
    </div>

    <div v-if="!achievements || achievements.length === 0" class="achievements-empty">
      <div class="empty-icon"></div>
      <p class="empty-text">暂无成就</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAchievements',
  props: {
    achievements: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    achievedCount() {
      return this.achievements.filter(a => a.achieved).length;
    },
    totalCount() {
      return this.achievements.length;
    },
    progressPercentage() {
      if (this.totalCount === 0) return 0;
      return Math.round((this.achievedCount / this.totalCount) * 100);
    }
  }
};
</script>

<style lang="scss" src="./index.scss"></style>

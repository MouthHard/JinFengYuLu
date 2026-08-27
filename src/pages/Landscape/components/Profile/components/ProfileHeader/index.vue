<template>
  <section class="profile-hero">
    <div class="hero-container">
      <!-- 左侧：头像与基本信息 -->
      <div class="profile-main">
        <div class="avatar-cosmos">
          <div class="avatar-ring ring-outer"></div>
          <div class="avatar-ring ring-inner"></div>
          <div class="avatar-glow"></div>
          <div class="avatar-container">
            <img v-if="user.avatar" loading="lazy" :src="user.avatar" :alt="user.name" class="avatar-image" />
            <div v-else class="avatar-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
        
        <div class="profile-info">
          <div class="name-section">
            <h1 class="user-name">{{ user.name }}</h1>
            <div v-if="user.verified" class="verified-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="user-title">{{ user.title }}</p>
          <p class="user-bio">{{ user.bio }}</p>
          
          <div class="profile-meta">
            <div v-if="user.location" class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{{ user.location }}</span>
            </div>
            <div v-if="user.joinDate" class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>{{ user.joinDate }}加入</span>
            </div>
            <div v-if="user.tags && user.tags.length > 0" class="tags-wrapper">
              <svg class="tags-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              <div class="tags-list">
                <span v-for="tag in user.tags" :key="tag" class="tag-chip">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：数据统�?-->
      <div class="stats-cosmos">
        <div v-for="(stat, index) in stats" :key="stat.label" class="stat-card" :style="{ '--delay': `${index * 0.1}s` }">
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
          <div class="stat-icon-wrapper">
            <div class="stat-icon-bg"></div>
            <div class="stat-icon">
              <component :is="stat.icon" />
            </div>
          </div>
          <div class="stat-trend" :class="stat.trend > 0 ? 'up' : 'down'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path :d="stat.trend > 0 ? 'M18 15l-6-6-6 6' : 'M6 9l6 6 6-6'" />
            </svg>
            <span>{{ Math.abs(stat.trend) }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="hero-actions">
      <button class="action-btn primary" @click="showEditModal = true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
        <span>编辑资料</span>
      </button>
    </div>

    <!-- 编辑资料弹窗 -->
    <Teleport to="body">
      <EditProfileModal
        v-model:visible="showEditModal"
        :user="user"
        @save="handleSaveProfile"
      />
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, type VNode } from 'vue';
import EditProfileModal from './components/EditProfileModal/index.vue';
import type { User } from '@/types/landscape';

interface Stat {
  label: string;
  value: string;
  trend: number;
  icon: VNode;
}

const props = defineProps<{
  user: User;
  stats: Stat[];
}>();

const emit = defineEmits<{
  'update:user': [value: User];
}>();

const showEditModal = ref(false);

const handleSaveProfile = (data: Partial<User> & { avatar?: string; tags?: string[] }) => {
  const updatedUser: User = {
    ...props.user,
    name: data.name || props.user.name || '',
    title: data.title || props.user.title || '',
    bio: data.bio || props.user.bio || '',
    location: data.location || props.user.location || '',
    joinDate: props.user.joinDate || '',
    tags: data.tags || props.user.tags || [],
    verified: props.user.verified || false,
    avatar: data.avatar || props.user.avatar,
  };
  emit('update:user', updatedUser);
};
</script>

<style scoped lang="scss" src="./index.scss" />


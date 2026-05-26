<template>
  <div class="photographer-card">
    <div class="card-left">
      <div class="avatar-container">
        <img :src="item.thumbnail" :alt="item.title" loading="lazy" class="avatar" />
        <div class="avatar-ring"></div>
        <div v-if="item.verified" class="verified-badge">
          <CheckIcon :stroke-width="2.5" />
        </div>
        <div v-if="item.online" class="online-dot"></div>
      </div>
      
      <div class="stats-column">
        <div class="stat-item" :class="{ 'sort-highlighted': !isFollowersDimmed && sortMode !== 'relevance', 'sort-dimmed': isFollowersDimmed }">
          <UsersIcon :stroke-width="2" />
          <span class="stat-value">{{ formatCount(Number(item.followers) || 0) }}</span>
        </div>
        <div class="stat-item" :class="{ 'sort-highlighted': !isWorksDimmed && sortMode !== 'relevance', 'sort-dimmed': isWorksDimmed }">
          <ImageIcon :stroke-width="2" />
          <span class="stat-value">{{ formatCount(Number(item.worksCount) || 0) }}</span>
        </div>
        <div class="stat-item" :class="{ 'sort-highlighted': !isLikeDimmed && sortMode !== 'relevance', 'sort-dimmed': isLikeDimmed }">
          <ThumbUpIcon :stroke-width="2" />
          <span class="stat-value">{{ formatCount(item.likes || 0) }}</span>
        </div>
        <div class="stat-item" :class="{ 'sort-highlighted': !isBookmarkDimmed && sortMode !== 'relevance', 'sort-dimmed': isBookmarkDimmed }">
          <BookmarkIcon :stroke-width="2" />
          <span class="stat-value">{{ formatCount(item.bookmarks || 0) }}</span>
        </div>
      </div>
    </div>
    
    <div class="card-right">
      <div class="card-header">
        <div class="title-section">
          <h3 class="card-title">{{ item.name || item.title }}</h3>
          <span class="user-title">{{ item.title || '摄影师' }}</span>
        </div>
        <div class="type-badge">
          <UserIcon :stroke-width="2" />
          <span>摄影师</span>
        </div>
      </div>
      
      <div class="card-body">
        <p v-if="item.description" class="card-description">{{ item.description }}</p>
        
        <div v-if="item.joinDate || item.location" class="info-row">
          <div v-if="item.joinDate" class="join-date" :class="{ 'sort-highlighted': !isDateDimmed && sortMode !== 'relevance', 'sort-dimmed': isDateDimmed }">
            <CalendarIcon :stroke-width="2" />
            <span>{{ item.joinDate.includes('加入') ? item.joinDate : item.joinDate + ' 加入' }}</span>
          </div>
          <span v-if="item.joinDate && item.location" class="info-divider">|</span>
          <div v-if="item.location" class="location-info">
            <LocationIcon :stroke-width="2" />
            <span>{{ item.location }}</span>
          </div>
        </div>
      </div>
      
      <div class="card-footer">
        <button class="follow-btn" :class="{ following: isFollowing }" @click="handleFollow">
          <UserPlusIcon :stroke-width="2" />
          <span>{{ isFollowing ? '已关注' : '关注' }}</span>
        </button>
        <div class="social-links">
          <button class="social-btn instagram" title="Instagram">
            <InstagramIcon :stroke-width="2" />
          </button>
          <button class="social-btn twitter" title="Twitter">
            <TwitterIcon :stroke-width="2" />
          </button>
          <button class="social-btn youtube" title="YouTube">
            <YoutubeIcon :stroke-width="2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import UserIcon from '../../../../icon/common/UserIcon.vue'
import CheckIcon from '../../../../icon/common/CheckIcon.vue'
import CalendarIcon from '../../../../icon/common/CalendarIcon.vue'
import LocationIcon from '../../../../icon/common/LocationIcon.vue'
import UsersIcon from '../../../../icon/common/UsersIcon.vue'
import ImageIcon from '../../../../icon/common/ImageIcon.vue'
import ThumbUpIcon from '../../../../icon/common/ThumbUpIcon.vue'
import BookmarkIcon from '../../../../icon/common/BookmarkIcon.vue'
import UserPlusIcon from '../../../../icon/common/UserPlusIcon.vue'
import InstagramIcon from '../../../../icon/common/InstagramIcon.vue'
import TwitterIcon from '../../../../icon/common/TwitterIcon.vue'
import YoutubeIcon from '../../../../icon/common/YoutubeIcon.vue'

import type { SearchResultItem } from '@/utils/landscape'

interface Props {
  item: SearchResultItem
  sortMode: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  follow: [id: string]
  like: [id: string]
}>()

const isFollowing = ref(false)

const isDateDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'latest'
})
const isFollowersDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'followers'
})
const isWorksDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'works'
})
const isLikeDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'likes'
})
const isBookmarkDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'bookmarks'
})

const formatCount = (count: number) => {
  if (count >= 10000) return (count / 10000).toFixed(1) + 'w'
  if (count >= 1000) return (count / 1000).toFixed(1) + 'k'
  return String(count)
}

const handleFollow = () => {
  isFollowing.value = !isFollowing.value
  emit('follow', String(props.item.id))
}
</script>

<style scoped lang="scss" src="./index.scss" />

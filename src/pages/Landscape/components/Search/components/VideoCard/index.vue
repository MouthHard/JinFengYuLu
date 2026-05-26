<template>
  <div class="video-card">
    <div class="card-header">
      <div class="type-badge">
        <VideoIcon :stroke-width="2" />
        <span>视频</span>
      </div>
      <div class="date-badge" :class="{ 'sort-highlighted': !isDateDimmed && sortMode !== 'relevance', 'sort-dimmed': isDateDimmed }">
        <CalendarIcon :stroke-width="2" />
        <span>{{ item.date }}</span>
      </div>
    </div>
    
    <div class="card-thumbnail">
      <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
      <div class="play-overlay">
        <div class="play-button">
          <PlayIcon :stroke-width="2.5" />
        </div>
      </div>
      <div class="duration-overlay">{{ item.duration }}</div>
    </div>
    
    <div class="card-content">
      <div class="content-header">
        <h3 class="card-title">{{ item.title }}</h3>
        <p v-if="item.description" class="card-description">{{ item.description }}</p>
      </div>
      
      <div v-if="item.tags && item.tags.length > 0" class="video-tags">
        <span v-for="tag in item.tags.slice(0, 3)" :key="tag" class="tag-item">{{ tag }}</span>
      </div>
      
      <div v-if="item.location" class="video-location">
        <LocationIcon :stroke-width="2" />
        <span>{{ item.location }}</span>
      </div>
    </div>
    
    <div class="card-footer">
      <div class="action-buttons">
        <button class="action-btn like" :class="{ active: isLiked, 'sort-highlighted': !isLikeDimmed && sortMode !== 'relevance', 'sort-dimmed': isLikeDimmed }" @click="handleLike">
          <HeartIcon :stroke-width="2" />
          <span>{{ formatCount(item.likes) }}</span>
        </button>
        <button class="action-btn bookmark" :class="{ active: isBookmarked, 'sort-highlighted': !isBookmarkDimmed && sortMode !== 'relevance', 'sort-dimmed': isBookmarkDimmed }" @click="handleBookmark">
          <BookmarkIcon :stroke-width="2" />
          <span>{{ formatCount(item.bookmarks) }}</span>
        </button>
        <button class="action-btn share" :class="{ 'sort-highlighted': !isShareDimmed && sortMode !== 'relevance', 'sort-dimmed': isShareDimmed }" @click="handleShare">
          <ShareIcon :stroke-width="2" />
          <span>{{ formatCount(item.shares) }}</span>
        </button>
        <div class="action-btn views" :class="{ 'sort-highlighted': !isViewsDimmed && sortMode !== 'relevance', 'sort-dimmed': isViewsDimmed }">
          <EyeIcon :stroke-width="2" />
          <span>{{ formatCount(item.views) }}</span>
        </div>
      </div>
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
          <div class="progress-glow"></div>
        </div>
        <span class="progress-text">已观看 {{ progressPercent }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VideoIcon from '../../../../icon/common/VideoIcon.vue'
import PlayIcon from '../../../../icon/common/PlayIcon.vue'
import CalendarIcon from '../../../../icon/common/CalendarIcon.vue'
import LocationIcon from '../../../../icon/common/LocationIcon.vue'
import HeartIcon from '../../../../icon/common/HeartIcon.vue'
import BookmarkIcon from '../../../../icon/common/BookmarkIcon.vue'
import ShareIcon from '../../../../icon/common/ShareIcon.vue'
import EyeIcon from '../../../../icon/common/EyeIcon.vue'

import type { SearchResultItem } from '@/utils/landscape'

interface Props {
  item: SearchResultItem
  sortMode: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  like: [id: string]
  bookmark: [id: string]
  share: [id: string]
}>()

const isLiked = ref(false)
const isBookmarked = ref(false)
const progressPercent = computed(() => Math.floor(Math.random() * 100))

const isDateDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'latest'
})
const isLikeDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'likes'
})
const isViewsDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'views'
})
const isBookmarkDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'bookmarks'
})
const isShareDimmed = computed(() => {
  const mode = props.sortMode
  return mode !== 'relevance' && mode !== 'shares'
})

const formatCount = (count: number) => {
  if (count >= 10000) return (count / 10000).toFixed(1) + 'w'
  if (count >= 1000) return (count / 1000).toFixed(1) + 'k'
  return String(count)
}

const handleLike = () => {
  isLiked.value = !isLiked.value
  emit('like', String(props.item.id))
}

const handleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
  emit('bookmark', String(props.item.id))
}

const handleShare = () => {
  emit('share', String(props.item.id))
}
</script>

<style scoped lang="scss" src="./index.scss" />

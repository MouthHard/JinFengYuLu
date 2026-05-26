<template>
  <div class="guide-card">
    <div class="card-left">
      <div class="card-header">
        <div class="type-badge">
          <BookIcon :stroke-width="2" />
          <span>攻略</span>
        </div>
        <div v-if="item.difficulty" class="difficulty-badge" :class="item.difficulty">
          {{ difficultyLabel }}
        </div>
      </div>
      
      <div class="content-title">
        <div class="title-row">
          <h3 class="card-title">{{ item.title }}</h3>
          <span class="publish-date" :class="{ 'sort-highlighted': !isDateDimmed && sortMode !== 'relevance', 'sort-dimmed': isDateDimmed }">{{ item.publishDate || '刚刚' }}</span>
        </div>
        <p v-if="item.description" class="card-description">{{ item.description }}</p>
      </div>
      
      <div class="guide-info">
        <div v-if="item.location" class="info-item">
          <LocationIcon :stroke-width="2" />
          <span class="info-label">地点</span>
          <span class="info-value">{{ item.location }}</span>
        </div>
        <div v-if="item.bestTime" class="info-item">
          <CalendarIcon :stroke-width="2" />
          <span class="info-label">最佳时间</span>
          <span class="info-value">{{ item.bestTime }}</span>
        </div>
        <div v-if="item.duration" class="info-item">
          <ClockIcon :stroke-width="2" />
          <span class="info-label">推荐时长</span>
          <span class="info-value">{{ item.duration }}</span>
        </div>
      </div>
      
      <div v-if="item.highlights && item.highlights.length > 0" class="highlights">
        <span v-for="(highlight, idx) in item.highlights.slice(0, 4)" :key="idx" class="highlight-tag">
          {{ highlight }}
        </span>
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
        <div class="author-info">
          <img :src="item.authorAvatar || '/default-avatar.jpg'" :alt="item.authorName" class="author-avatar" loading="lazy" />
          <span class="author-name">{{ item.authorName || '匿名用户' }}</span>
        </div>
      </div>
    </div>
    
    <div class="card-right">
      <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
      <div class="image-gradient"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BookIcon from '../../../../icon/common/BookIcon.vue'
import LocationIcon from '../../../../icon/common/LocationIcon.vue'
import CalendarIcon from '../../../../icon/common/CalendarIcon.vue'
import ClockIcon from '../../../../icon/common/ClockIcon.vue'
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

const difficultyLabels: Record<string, string> = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
  easy: '简单',
  medium: '中等',
  hard: '困难'
}

const difficultyLabel = computed(() => {
  const diff = props.item.difficulty || 'beginner'
  return difficultyLabels[diff] || diff
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

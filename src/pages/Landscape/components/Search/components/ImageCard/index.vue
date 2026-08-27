<template>
  <div class="image-card">
    <div class="card-left">
      <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
      <div class="image-overlay">
        <ImageIcon :stroke-width="2" />
      </div>
      <div v-if="item.date" class="date-badge" :class="{ 'sort-highlighted': !isDateDimmed && sortMode !== 'relevance', 'sort-dimmed': isDateDimmed }">{{ item.date }}</div>
    </div>
    
    <div class="card-right">
      <div class="card-header">
        <div class="type-badge">
          <ImageIcon :stroke-width="2" />
          <span>图片</span>
        </div>
      </div>
      
      <div class="card-body">
        <h3 class="card-title">{{ item.title }}</h3>
        <p v-if="item.description" class="card-description">{{ item.description }}</p>
        
        <div class="image-meta">
          <div v-if="item.location" class="meta-item">
            <LocationIcon :stroke-width="2" />
            <span>{{ item.location }}</span>
          </div>
          <div v-if="item.camera" class="meta-item">
            <CameraIcon :stroke-width="2" />
            <span>{{ item.camera }}</span>
          </div>
        </div>
        
        <div v-if="item.tags && item.tags.length > 0" class="card-tags">
          <span v-for="tag in item.tags.slice(0, 4)" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
      
      <div class="card-footer">
        <button class="action-btn like" :class="{ active: isLiked, 'sort-highlighted': !isLikeDimmed && sortMode !== 'relevance', 'sort-dimmed': isLikeDimmed }" @click="handleLike">
          <HeartIcon :stroke-width="2" />
          <span>{{ formatCount(getCounts().likes) }}</span>
        </button>
        <button class="action-btn bookmark" :class="{ active: isBookmarked, 'sort-highlighted': !isBookmarkDimmed && sortMode !== 'relevance', 'sort-dimmed': isBookmarkDimmed }" @click="handleBookmark">
          <BookmarkIcon :stroke-width="2" />
          <span>{{ formatCount(getCounts().favorites) }}</span>
        </button>
        <button class="action-btn share" :class="{ 'sort-highlighted': !isShareDimmed && sortMode !== 'relevance', 'sort-dimmed': isShareDimmed }" @click="handleShare">
          <ShareIcon :stroke-width="2" />
          <span>{{ formatCount(getCounts().shares) }}</span>
        </button>
        <div class="action-btn views" :class="{ 'sort-highlighted': !isViewsDimmed && sortMode !== 'relevance', 'sort-dimmed': isViewsDimmed }">
          <EyeIcon :stroke-width="2" />
          <span>{{ formatCount(getCounts().views) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SearchResultItem } from '@/utils/landscape'
import { useInteractionStore } from '@/stores/landscape'
import ImageIcon from '../../../../icon/common/ImageIcon.vue'
import LocationIcon from '../../../../icon/common/LocationIcon.vue'
import CameraIcon from '../../../../icon/common/CameraIcon.vue'
import HeartIcon from '../../../../icon/common/HeartIcon.vue'
import BookmarkIcon from '../../../../icon/common/BookmarkIcon.vue'
import ShareIcon from '../../../../icon/common/ShareIcon.vue'
import EyeIcon from '../../../../icon/common/EyeIcon.vue'

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

const interactionStore = useInteractionStore()
const isLiked = computed(() => interactionStore.isLiked(String(props.item.id)))
const isBookmarked = computed(() => interactionStore.isFavorited(String(props.item.id)))
const getCounts = () => interactionStore.getCount(String(props.item.id))

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
  emit('like', String(props.item.id))
}

const handleBookmark = () => {
  emit('bookmark', String(props.item.id))
}

const handleShare = () => {
  emit('share', String(props.item.id))
}
</script>

<style scoped lang="scss" src="./index.scss" />

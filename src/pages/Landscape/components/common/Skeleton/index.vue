<template>
  <div class="skeleton" :class="`skeleton-${type}`">
    <template v-if="type === 'image'">
      <div class="skeleton-shimmer" :style="skeletonStyle"></div>
    </template>
    
    <template v-else-if="type === 'card'">
      <div class="skeleton-card-image skeleton-shimmer"></div>
      <div class="skeleton-card-content">
        <div class="skeleton-card-title skeleton-shimmer"></div>
        <div class="skeleton-card-text skeleton-shimmer"></div>
        <div class="skeleton-card-text skeleton-shimmer" style="width: 60%;"></div>
      </div>
    </template>
    
    <template v-else-if="type === 'text'">
      <div 
        v-for="i in rows" 
        :key="i" 
        class="skeleton-text-row skeleton-shimmer"
        :style="{ width: i === rows && lastRowWidth ? lastRowWidth : undefined }"
      ></div>
    </template>
    
    <template v-else-if="type === 'avatar'">
      <div class="skeleton-avatar skeleton-shimmer" :style="{ width: size, height: size }"></div>
    </template>
    
    <template v-else-if="type === 'gallery'">
      <div class="skeleton-gallery-grid">
        <div v-for="i in count" :key="i" class="skeleton-gallery-item skeleton-shimmer"></div>
      </div>
    </template>
    
    <template v-else-if="type === 'list'">
      <div v-for="i in count" :key="i" class="skeleton-list-item">
        <div class="skeleton-list-avatar skeleton-shimmer"></div>
        <div class="skeleton-list-content">
          <div class="skeleton-list-title skeleton-shimmer"></div>
          <div class="skeleton-list-text skeleton-shimmer"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'image' | 'card' | 'text' | 'avatar' | 'gallery' | 'list'
  width?: string | number
  height?: string | number
  rows?: number
  lastRowWidth?: string
  count?: number
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'image',
  width: '100%',
  height: '100%',
  rows: 3,
  lastRowWidth: '40%',
  count: 6,
  size: '40px'
})

const skeletonStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height
}))
</script>

<style scoped lang="scss" src="./index.scss" />

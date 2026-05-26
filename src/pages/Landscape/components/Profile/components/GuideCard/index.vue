<template>
  <div class="guide-card" :style="{ '--delay': delay }">
    <div class="handbook" :class="{ expanded: isExpanded }">
      <div class="book-spine"></div>

      <div class="cover">
        <div class="cover-bg">
          <div class="cover-image" :style="item.thumbnail ? `background-image: url(${item.thumbnail})` : ''">
            <div class="image-overlay"></div>
          </div>
          <div class="leather-border"></div>
        </div>

        <div class="cover-glow"></div>

        <div class="cover-content">
          <div class="cover-header">
            <div class="top-bar">
              <div class="destination-badge">
                <span class="dest-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/>
                  </svg>
                </span>
                <span class="dest-text">{{ item.location || '未知目的地' }}</span>
              </div>

              <div class="quick-badges">
                <span class="difficulty-seal" :class="item.difficulty || 'intermediate'">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <span>{{ getDifficultyLabel(item.difficulty) }}</span>
                </span>

                <span v-if="item.isEditorPick" class="editor-pick">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
            </div>

            <h3 class="guide-title">{{ item.title }}</h3>

            <p class="guide-summary">{{ item.summary }}</p>

            <div class="info-bar">
              <div class="stats-row">
                <div v-if="item.duration" class="stat-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{{ item.duration }}</span>
                </div>
                <div v-if="item.season" class="stat-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                  <span>{{ item.season }}</span>
                </div>
                <div v-if="item.budget" class="stat-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <span>{{ item.budget }}</span>
                </div>
              </div>

              <div class="rating-row">
                <div class="stars">
                  <svg v-for="i in 5" :key="i" viewBox="0 0 24 24"
                    :fill="i <= Math.floor(item.rating || 0) ? 'currentColor' : 'none'"
                    stroke="currentColor" stroke-width="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span class="rating-value">{{ item.rating || '-' }}</span>
                <span class="rating-count">{{ formatNumber(item.ratingCount || 0) }}评</span>
              </div>
            </div>
          </div>

          <div class="cover-footer">
            <div class="cover-author">
              <div class="author-avatar">
                <img v-if="item.authorAvatar" :src="item.authorAvatar" :alt="item.author" class="avatar-img" loading="lazy" />
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div class="author-info">
                <span class="author-name">{{ item.author || '未知摄影师' }}</span>
                <span class="author-date">{{ item.date || '最近更新' }}</span>
              </div>
            </div>

            <div class="cover-actions">
              <button class="cover-btn like-btn" :class="{ active: isLiked }" title="点赞" @click.stop="toggleLike">
                <svg viewBox="0 0 24 24" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
                <span>{{ formatNumber(getCounts().likes) }}</span>
              </button>

              <button class="cover-btn love-btn" :class="{ active: isLoved }" title="喜爱" @click.stop="toggleLove">
                <svg viewBox="0 0 24 24" :fill="isLoved ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span>{{ formatNumber(getCounts().loves) }}</span>
              </button>

              <button class="cover-btn collect-btn" :class="{ active: isCollected }" title="收藏" @click.stop="toggleCollect">
                <svg viewBox="0 0 24 24" :fill="isCollected ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
                <span>{{ formatNumber(getCounts().favorites) }}</span>
              </button>

              <button class="cover-btn share-btn" title="分享" @click.stop="handleShare">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                <span>{{ formatNumber(getCounts().shares) }}</span>
              </button>

              <button class="cover-btn view-btn" title="查看详情" @click.stop="handleClick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
                <span>查看</span>
              </button>
            </div>
          </div>
        </div>

        <div class="corner-decor top-left"></div>
        <div class="corner-decor top-right"></div>
        <div class="corner-decor bottom-left"></div>
        <div class="corner-decor bottom-right"></div>

        <div class="cover-stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>

        <div class="cover-glow-dots">
          <div class="glow-dot"></div>
          <div class="glow-dot"></div>
          <div class="glow-dot"></div>
        </div>
      </div>
      
      <div class="inner-page" @click="handleClick">
        <div class="page-texture"></div>
        <div class="back-indicator">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
          <span>点击返回封面</span>
        </div>
        
        <div class="inner-content" @click.stop>
          <div class="page-header">
            <h2 class="page-title">{{ item.title }}</h2>
            <p v-if="item.summary" class="page-subtitle">{{ item.summary }}</p>
          </div>
          
          <div class="main-section">
            <div class="info-grid">
              <div v-if="item.transport" class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div class="info-body">
                  <span class="info-label">交通方式</span>
                  <span class="info-value">{{ item.transport }}</span>
                </div>
              </div>
              
              <div v-if="item.audience" class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div class="info-body">
                  <span class="info-label">适合人群</span>
                  <span class="info-value">{{ item.audience }}</span>
                </div>
              </div>
              
              <div v-if="item.accommodation" class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div class="info-body">
                  <span class="info-label">住宿建议</span>
                  <span class="info-value">{{ item.accommodation }}</span>
                </div>
              </div>
              
              <div v-if="item.language" class="info-card">
                <div class="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div class="info-body">
                  <span class="info-label">当地语言</span>
                  <span class="info-value">{{ item.language }}</span>
                </div>
              </div>
            </div>
            
            <div v-if="item.highlights?.length" class="highlights-section">
              <h4 class="section-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                核心亮点
              </h4>
              <div class="highlights-grid">
                <span v-for="(h, idx) in item.highlights" :key="idx" class="highlight-card">
                  {{ h }}
                </span>
              </div>
            </div>
            
            <div v-if="item.warnings?.length" class="warnings-section">
              <div class="warning-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <div class="warning-content">
                  <span class="warning-title">注意事项</span>
                  <span class="warning-text">{{ item.warnings.join(' · ') }}</span>
                </div>
              </div>
            </div>
            
            <div v-if="item.shootTime || item.shootParams?.length" class="shoot-section">
              <h4 class="section-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                拍摄指南
              </h4>
              <div class="shoot-info">
                <div v-if="item.shootTime" class="shoot-time">
                  <span class="shoot-label">最佳时间</span>
                  <span class="shoot-value">{{ item.shootTime }}</span>
                </div>
                <div v-if="item.shootParams?.length" class="params-grid">
                  <div v-for="(p, idx) in item.shootParams" :key="idx" class="param-item">
                    <span class="param-label">{{ p.label }}</span>
                    <span class="param-value">{{ p.value }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div v-if="item.gears?.length" class="gear-section">
              <h4 class="section-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
                器材清单
              </h4>
              <div class="gear-grid">
                <span v-for="(g, idx) in item.gears" :key="idx" class="gear-tag" :class="{ required: g.required }">
                  <svg v-if="g.required" viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {{ g.name }}
                </span>
              </div>
            </div>
            
            <div v-if="item.safety?.length" class="safety-section">
              <h4 class="section-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                安全须知
              </h4>
              <div class="safety-list">
                <div v-for="(s, idx) in item.safety" :key="idx" class="safety-item" :class="s.type">
                  <span class="safety-title">{{ s.title }}</span>
                  <span class="safety-content">{{ s.content }}</span>
                </div>
              </div>
            </div>
            
            <div v-if="item.altitude || item.temperature" class="env-section">
              <div v-if="item.altitude" class="env-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span class="env-label">海拔</span>
                <span class="env-value">{{ item.altitude }}</span>
              </div>
              <div v-if="item.temperature" class="env-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
                </svg>
                <span class="env-label">温度</span>
                <span class="env-value">{{ item.temperature }}</span>
              </div>
            </div>
            
            <div v-if="item.tips?.length" class="tips-section">
              <h4 class="section-header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                实用贴士
              </h4>
              <ul class="tips-list">
                <li v-for="(t, idx) in item.tips" :key="idx">{{ t }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="page-shadow"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { showMessage } from '@/utils/landscape'
import type { GuideItem } from '@/typesOfPages/landscape'
import { formatNumber, getDifficultyLabel } from '@/utils/landscape'
import { useInteractionStore } from '@/stores/landscape'

const props = defineProps<{
  item: GuideItem
  delay?: string
}>()

const emit = defineEmits<{
  (e: 'collect', id: string): void
  (e: 'like', id: string): void
  (e: 'share', item: GuideItem): void
  (e: 'click', item: GuideItem): void
}>()

const interactionStore = useInteractionStore()
const isExpanded = ref(false)

const isCollected = computed(() => interactionStore.isFavorited(props.item.id))
const isLiked = computed(() => interactionStore.isLiked(props.item.id))
const isLoved = computed(() => interactionStore.isLoved(props.item.id))

const getCounts = () => interactionStore.getCount(props.item.id)

const toggleCollect = () => {
  const item = {
    id: props.item.id,
    type: 'guide' as const,
    title: props.item.title,
    image: props.item.thumbnail || '',
    location: props.item.location,
    category: props.item.category,
    timestamp: Date.now(),
    likes: props.item.likes,
    views: props.item.views,
    favorites: props.item.saves,
    shares: props.item.shares,
    author: props.item.author,
    authorId: props.item.authorId,
    authorAvatar: props.item.authorAvatar,
  }
  const isAdded = interactionStore.toggleFavorite(item)
  if (isAdded) {
    showMessage.favorite.success(props.item.title, 'guide')
  } else {
    showMessage.favorite.cancel(props.item.title, 'guide')
  }
  emit('collect', props.item.id)
}

const toggleLike = () => {
  const isAdded = interactionStore.toggleLike(props.item.id)
  if (isAdded) {
    showMessage.like.success(props.item.title)
  } else {
    showMessage.like.cancel()
  }
  emit('like', props.item.id)
}

const toggleLove = () => {
  const item = {
    id: props.item.id,
    type: 'guide' as const,
    title: props.item.title,
    image: props.item.thumbnail || '',
    location: props.item.location,
    category: props.item.category,
    timestamp: Date.now(),
    likes: props.item.likes,
    views: props.item.views,
    favorites: props.item.saves,
    shares: props.item.shares,
    author: props.item.author,
    authorId: props.item.authorId,
    authorAvatar: props.item.authorAvatar,
  }
  const isAdded = interactionStore.toggleLove(item)
  if (isAdded) {
    showMessage.love.success(props.item.title, 'guide')
  } else {
    showMessage.love.cancel(props.item.title, 'guide')
  }
}

const handleShare = () => {
  showMessage.share.success(props.item.title)
  emit('share', props.item)
}

const handleClick = () => {
  isExpanded.value = !isExpanded.value
  emit('click', props.item)
}
</script>

<style scoped lang="scss" src="./index.scss" />
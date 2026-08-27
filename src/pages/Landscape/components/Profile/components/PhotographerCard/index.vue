<template>
  <div class="photographer-card" :style="{ '--delay': delay }">
    <!-- 挂绳 -->
    <div class="lanyard">
      <span class="lanyard-clip"></span>
      <span class="lanyard-band"></span>
    </div>

    <!-- 证件卡主�?->
    <div class="badge-card">
      <div class="card-sheen"></div>
      <div class="holo-strip"></div>

      <!-- 卡片头部�?->
      <div class="badge-header">
        <div class="header-left">
          <span class="org-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M14.5 9a3.5 3.5 0 0 0-5 0"/>
              <circle cx="12" cy="14" r="1.5"/>
              <line x1="12" y1="2" x2="12" y2="5"/>
              <line x1="12" y1="19" x2="12" y2="22"/>
            </svg>
          </span>
          <div class="org-text">
            <span class="org-name">PHOTOGRAPHY</span>
            <span class="org-sub">PRESS CREDENTIAL</span>
          </div>
        </div>
        <div class="header-right">
          <span v-if="item.onlineStatus === 'online'" class="online-dot"></span>
          <span class="badge-id">{{ item.id.toUpperCase() }}</span>
          <span class="security-chip">
            <span class="chip-coil"></span>
            <span class="chip-core"></span>
          </span>
        </div>
      </div>

      <!-- 顶部：证件照 + 核心信息 横排 -->
      <div class="profile-row">
        <!-- 证件�?->
        <div class="id-photo-area">
          <div class="photo-border">
            <img loading="lazy" :src="item.avatar" :alt="item.name" class="id-photo" />
          </div>
          <div class="embossed-seal"></div>
          <div v-if="item.verified" class="verified-stamp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>

        <!-- 核心文字信息 -->
        <div class="core-info">
          <div class="name-line">
            <h3 class="person-name">{{ item.name }}</h3>
            <span v-if="item.rating" class="person-rating">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              {{ item.rating }}
            </span>
          </div>
          <p class="person-title">{{ item.title }}</p>
          <div class="meta-line">
            <span v-if="item.location" class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {{ item.location }}
            </span>
            <span v-if="item.experience" class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              {{ item.experience }}
            </span>
            <span v-if="item.joinDate" class="meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {{ item.joinDate }}
            </span>
          </div>
          <p v-if="item.bio" class="person-bio">{{ item.bio }}</p>
          <div v-if="item.equipment" class="equip-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <span>{{ item.equipment }}</span>
          </div>
          <!-- 奖项�?->
          <div v-if="item.awards && item.awards.length" class="awards-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="7"/>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
            </svg>
            <span v-for="award in item.awards.slice(0, 3)" :key="award" class="award-tag">{{ award }}</span>
          </div>
        </div>
      </div>

      <!-- 统计行：全宽4�?->
      <div class="stats-row">
        <div class="stat-cell">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span class="stat-val">{{ item.works }}</span>
          <span class="stat-label">作品</span>
        </div>
        <div class="stat-cell">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span class="stat-val">{{ item.followers }}</span>
          <span class="stat-label">粉丝</span>
        </div>
        <div class="stat-cell">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span class="stat-val">{{ item.views || '0' }}</span>
          <span class="stat-label">浏览</span>
        </div>
        <div class="stat-cell">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span class="stat-val">{{ item.likes || '0' }}</span>
          <span class="stat-label">获赞</span>
        </div>
      </div>

      <!-- 标签 + 社交 + 联系 一�?->
      <div class="info-strip">
        <div class="tags-group">
          <span v-for="tag in item.tags.slice(0, 4)" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="divider-dot"></div>
        <div v-if="item.socials && item.socials.length" class="socials-group">
          <a v-for="s in item.socials" :key="s.platform" class="social-icon" :title="s.platform">
            <svg viewBox="0 0 24 24" fill="currentColor" v-html="s.iconPath"></svg>
          </a>
        </div>
        <div v-if="item.contact" class="divider-dot"></div>
        <div v-if="item.contact" class="contact-group">
          <span v-if="item.contact.email" class="contact-item" :title="item.contact.email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4L12 13 2 4"/>
            </svg>
          </span>
          <span v-if="item.contact.website" class="contact-item" :title="item.contact.website">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </span>
          <span v-if="item.contact.phone" class="contact-item" :title="item.contact.phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.71 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.348 1.85.583 2.81.71A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
        </div>
      </div>

      <!-- 作品横排3张大�?->
      <div v-if="item.recentWorks && item.recentWorks.length > 0" class="works-row">
        <div class="works-label">
          <span>代表作品</span>
          <span class="works-count">{{ item.works }}</span>
        </div>
        <div class="works-gallery">
          <div
            v-for="(work, idx) in item.recentWorks.slice(0, 3)"
            :key="idx"
            class="work-item"
          >
            <img loading="lazy" :src="work" alt="recent work" />
            <div class="work-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
            <div
              v-if="idx === item.recentWorks.length - 1 && item.worksCount > item.recentWorks.length"
              class="work-more"
            >
              <span>+{{ item.worksCount - item.recentWorks.length }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 条码 -->
      <div class="barcode-strip">
        <span class="barcode"></span>
        <span class="barcode-text">{{ item.id.toUpperCase() }}</span>
      </div>

      <!-- 底部操作�?->
      <div class="action-bar">
        <button
          class="action-btn follow-btn"
          :class="{ following: isFollowing }"
          @click.stop="toggleFollow"
        >
          <svg v-if="!isFollowing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <line x1="20" y1="11" x2="20" y2="17"/>
            <line x1="23" y1="14" x2="17" y2="14"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>{{ isFollowing ? '已关�? : '关注' }}</span>
        </button>
        <button class="action-btn like-btn" :class="{ liked: isLiked }" @click.stop="toggleLike">
          <svg viewBox="0 0 24 24" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>{{ isLiked ? '已赞' : '点赞' }}</span>
        </button>

        <button class="action-btn share-btn" @click.stop>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          <span>分享</span>
        </button>
        <button class="action-btn msg-btn" @click.stop>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span>私信</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { showMessage } from '@/utils/landscape'
import type { PhotographerItem } from '@/types/landscape'
import { useInteractionStore } from '@/stores/landscape'

const props = defineProps<{
  item: PhotographerItem;
  delay?: string;
}>();

const emit = defineEmits<{
  (e: 'follow', id: string): void;
}>();

const interactionStore = useInteractionStore()
const isFollowing = computed(() => interactionStore.isFollowing(props.item.id))
const isLiked = computed(() => interactionStore.isLiked(props.item.id))


const toggleFollow = () => {
  const wasFollowing = isFollowing.value
  const isAdded = interactionStore.toggleFollowPhotographer(props.item.id)
  if (wasFollowing && !isAdded) {
    showMessage.follow.cancel(props.item.name)
  } else if (!wasFollowing && isAdded) {
    showMessage.follow.success(props.item.name)
  }
  emit('follow', props.item.id)
}

const toggleLike = () => {
  const wasLiked = isLiked.value
  const isAdded = interactionStore.toggleLike({
    id: props.item.id,
    type: 'photographer',
    title: props.item.name,
    image: props.item.avatar,
    timestamp: Date.now(),
  })
  if (!wasLiked && isAdded) {
    showMessage.like.success(props.item.name)
  } else if (wasLiked && !isAdded) {
    showMessage.like.cancel()
  }
}

</script>

<style scoped lang="scss" src="./index.scss" />

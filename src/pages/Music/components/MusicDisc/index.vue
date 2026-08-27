<template>
  <div class="music-disc-container">
    <div class="disc-bg" :style="{ backgroundImage: `url(${currentSong?.cover})` }"></div>

    <button class="close-btn" @click="$emit('close')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

    <div class="disc-content">
        <div class="disc-visual">
          <div class="disc-wrapper" :class="{ playing: isPlaying }">
            <div class="vinyl-disc">
              <div class="disc-grooves"></div>
              <div class="disc-center">
                <img v-if="currentSong" loading="lazy" :src="currentSong.cover" :alt="currentSong.name" />
              </div>
              <div class="disc-shine"></div>
            </div>
            <div class="tone-arm" :class="{ playing: isPlaying }">
              <div class="arm-base"></div>
              <div class="arm-head"></div>
            </div>
          </div>
        </div>

        <div class="disc-info">
          <div class="song-title">{{ currentSong?.name || '未播放歌�? }}</div>
          <div v-if="currentSong" class="song-meta">
            <div class="meta-item">
              <span class="meta-label">专辑�?/span>
              <span class="meta-value">{{ currentSong.album.name }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">歌手�?/span>
              <span class="meta-value">{{ currentSong.artists.map(a => a.name).join(' / ') }}</span>
            </div>
          </div>

          <div class="function-tabs">
            <button class="tab-btn" :class="{ active: activeTab === 'lyric' }" @click="activeTab = 'lyric'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>歌词</span>
            </button>
            <button class="tab-btn" :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>详情</span>
            </button>
            <button class="tab-btn" :class="{ active: activeTab === 'similar' }" @click="activeTab = 'similar'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>相似</span>
            </button>
          </div>

          <div class="content-area">
            <div v-if="activeTab === 'lyric'" class="lyric-content">
              <div v-if="currentLyrics.length > 0" class="lyrics-wrapper">
                <div
                  v-for="(line, index) in currentLyrics"
                  :key="index"
                  class="lyric-line"
                  :class="{ active: index === currentLyricIndex }"
                >
                  {{ line.text }}
                </div>
              </div>
              <div v-else class="no-lyric">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18V5l12-3v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                <p>纯音乐，请欣�?/p>
              </div>
            </div>
            <div v-else-if="activeTab === 'info'" class="info-content">
              <div class="info-item">
                <span class="info-label">歌曲ID</span>
                <span class="info-value">{{ currentSong?.id || '-' }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">时长</span>
                <span class="info-value">{{ formatDuration(currentSong?.duration || 0) }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">发行时间</span>
                <span class="info-value">{{ currentSong?.album.publishTime || '-' }}</span>
              </div>
            </div>
            <div v-else class="similar-content">
              <p class="placeholder-text">相似推荐功能开发中...</p>
            </div>
          </div>

          <div class="social-actions">
            <button class="action-btn like-btn" :class="{ liked: isLiked }">
              <svg viewBox="0 0 24 24" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>{{ formatCount(likeCount) }}</span>
            </button>
            <button class="action-btn comment-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>{{ formatCount(commentCount) }}</span>
            </button>
            <button class="action-btn share-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span>分享</span>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { formatDuration } from "@/utils/music";
import type { Song, LyricLine } from "@/types/music";

const props = defineProps<{
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  lyrics: LyricLine[];
}>();

defineEmits<{
  close: [];
}>();

const activeTab = ref<"lyric" | "info" | "similar">("lyric");
const isLiked = ref(false);
const likeCount = ref(12580);
const commentCount = ref(999);

const currentLyrics = computed(() => props.lyrics || []);

const currentLyricIndex = computed(() => {
  if (!props.lyrics || props.lyrics.length === 0) return -1;
  
  for (let i = props.lyrics.length - 1; i >= 0; i--) {
    if (props.currentTime >= props.lyrics[i].time) {
      return i;
    }
  }
  return 0;
});

const formatCount = (count: number): string => {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + "w";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k";
  }
  return count.toString();
};

watch(() => props.currentSong, () => {
  likeCount.value = Math.floor(Math.random() * 50000) + 10000;
  commentCount.value = Math.floor(Math.random() * 5000) + 500;
});
</script>

<style lang="scss" src="./index.scss" scoped></style>
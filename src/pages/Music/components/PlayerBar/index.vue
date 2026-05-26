<template>
  <div class="player-bar" @click="handleBarClick">
    <div class="player-song-info">
      <div class="song-cover" :class="{ spinning: isPlaying }">
        <img v-if="currentSong"           loading="lazy"
          :src="currentSong.cover"
          :alt="currentSong.name"
        />
        <div v-else class="cover-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      </div>
      <div v-if="currentSong" class="song-meta">
        <div class="song-name">{{ currentSong.name }}</div>
        <div class="song-artist">{{ currentSong.artists.map(a => a.name).join(' / ') }}</div>
      </div>
    </div>

    <div class="player-controls" >
      <div class="control-buttons">
        <button class="ctrl-btn mode-btn" :title="modeLabel" @click="$emit('toggleMode')">
          <svg v-if="playMode === 'sequence'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else-if="playMode === 'loop'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
          </svg>
          <svg v-else-if="playMode === 'random'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
          </svg>
        </button>

        <button class="ctrl-btn" title="上一首" @click="$emit('prev')">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
          </svg>
        </button>

        <button class="ctrl-btn play-btn" :title="isPlaying ? '暂停' : '播放'" @click="$emit('togglePlay')">
          <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        </button>

        <button class="ctrl-btn" title="下一首" @click="$emit('next')">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
          </svg>
        </button>

        <button class="ctrl-btn lyric-btn" :class="{ active: showLyric }" title="歌词" @click="$emit('toggleLyric')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      <div class="progress-bar">
        <span class="time current">{{ formatTime(currentTime) }}</span>
        <div
          ref="progressTrack"
          class="progress-track"
          @click="handleProgressClick"
          @mousedown="startDrag"
        >
          <div class="progress-fill" :style="{ width: progressPercent + '%' }">
            <div class="progress-thumb"></div>
          </div>
        </div>
        <span class="time total">{{ formatTime(duration) }}</span>
      </div>
    </div>

    <div class="player-extra" >
      <button class="ctrl-btn like-btn" :class="{ liked: isLiked }" title="喜欢">
        <svg viewBox="0 0 24 24" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      <div class="volume-control">
        <button class="ctrl-btn volume-btn" @click="$emit('toggleMute')">
          <svg v-if="isMuted || volume === 0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
          <svg v-else-if="volume < 50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        </button>
        <div
          class="volume-track"
          @click="handleVolumeClick"
        >
          <div class="volume-fill" :style="{ width: (isMuted ? 0 : volume) + '%' }">
            <div class="volume-thumb"></div>
          </div>
        </div>
      </div>
      <button class="ctrl-btn playlist-btn" title="播放列表">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="8" y1="6" x2="21" y2="6"/>
          <line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/>
          <line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { formatDuration } from "@/utils/music";
import type { Song, PlayMode } from "@/typesOfPages/music";

const props = defineProps<{
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playMode: PlayMode;
  showLyric: boolean;
}>();

const emit = defineEmits<{
  togglePlay: [];
  prev: [];
  next: [];
  seek: [time: number];
  volumeChange: [val: number];
  toggleMute: [];
  toggleMode: [];
  toggleLyric: [];
  toggleDisc: [];
}>();

const progressTrack = ref<HTMLElement | null>(null);
const isLiked = ref(false);

const progressPercent = computed(() => {
  if (!props.duration) return 0;
  return (props.currentTime / props.duration) * 100;
});

const modeLabel = computed(() => {
  const map: Record<string, string> = {
    sequence: "顺序播放",
    loop: "列表循环",
    random: "随机播放",
    single: "单曲循环",
  };
  return map[props.playMode] || "顺序播放";
});

const formatTime = (seconds: number): string => {
  return formatDuration(seconds);
};

const handleBarClick = () => {
  emit('toggleDisc');
};

const handleProgressClick = (e: MouseEvent) => {
  if (!progressTrack.value || !props.duration) return;
  const rect = progressTrack.value.getBoundingClientRect();
  const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  emit("seek", percent * props.duration);
};

const startDrag = (e: MouseEvent) => {
  e.preventDefault();
  const track = progressTrack.value;
  if (!track || !props.duration) return;

  const onMove = (moveEvent: MouseEvent) => {
    const rect = track.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (moveEvent.clientX - rect.left) / rect.width));
    emit("seek", percent * props.duration);
  };

  const onUp = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
  };

  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);
};

const handleVolumeClick = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
  emit("volumeChange", Math.round(percent));
};
</script>

<style lang="scss" src="./index.scss" scoped></style>

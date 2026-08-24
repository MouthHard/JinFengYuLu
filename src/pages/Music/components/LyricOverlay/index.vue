<template>
  <div class="lyric-overlay">
    <div class="lyric-bg">
      <img loading="lazy" :src="song.cover" alt="" />
    </div>

    <div class="lyric-header">
      <button class="close-btn" @click="$emit('close')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        <span>收起</span>
      </button>
      <div class="header-info">
        <div class="header-title">{{ song.name }}</div>
        <div class="header-artist">{{ song.artists.map(a => a.name).join(' / ') }}</div>
      </div>
    </div>

    <div class="lyric-body">
      <div ref="lyricScroll" class="lyric-scroll">
        <div
          v-for="(line, index) in lyrics"
          :key="index"
          :ref="el => { if (index === currentLyricIndex) activeLineEl = el as HTMLElement }"
          class="lyric-line"
          :class="{ active: index === currentLyricIndex }"
        >
          {{ line.text }}
        </div>
      </div>
    </div>

    <div class="lyric-controls">
      <button class="lyric-ctrl" @click="$emit('prev')">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
      </button>
      <button class="lyric-ctrl play-ctrl" @click="$emit('togglePlay')">
        <svg v-if="!isPlaying" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        <svg v-else viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
      </button>
      <button class="lyric-ctrl" @click="$emit('next')">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { getCurrentLyricIndex } from "@/utils/music";
import type { Song, LyricLine } from "@/types/music";

const props = defineProps<{
  song: Song;
  isPlaying: boolean;
  currentTime: number;
  lyrics: LyricLine[];
}>();

defineEmits<{
  close: [];
  togglePlay: [];
  prev: [];
  next: [];
}>();

const lyricScroll = ref<HTMLElement | null>(null);
const activeLineEl = ref<HTMLElement | null>(null);

const currentLyricIndex = computed(() => {
  return getCurrentLyricIndex(props.lyrics, props.currentTime);
});

watch(currentLyricIndex, () => {
  nextTick(() => {
    if (activeLineEl.value && lyricScroll.value) {
      const container = lyricScroll.value;
      const line = activeLineEl.value;
      const containerHeight = container.clientHeight;
      const lineTop = line.offsetTop;
      const lineHeight = line.clientHeight;
      container.scrollTo({
        top: lineTop - containerHeight / 2 + lineHeight / 2,
        behavior: "smooth",
      });
    }
  });
});
</script>

<style lang="scss" src="./index.scss" scoped></style>

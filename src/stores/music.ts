/**
 * Music 模块状态管理
 *
 * 管理音乐播放器、歌单、收藏等状态
 */

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMusicStore = defineStore("music", () => {
  // 状态
  const currentSong = ref<Song | null>(null);
  const isPlaying = ref(false);
  const volume = ref(0.8);
  const playlist = ref<Song[]>([]);
  const currentIndex = ref(0);

  // 计算属性
  const hasNextSong = computed(
    () => currentIndex.value < playlist.value.length - 1,
  );
  const hasPrevSong = computed(() => currentIndex.value > 0);

  // 方法
  const playSong = (song: Song) => {
    currentSong.value = song;
    isPlaying.value = true;
  };

  const togglePlay = () => {
    isPlaying.value = !isPlaying.value;
  };

  const nextSong = () => {
    if (hasNextSong.value) {
      currentIndex.value++;
      currentSong.value = playlist.value[currentIndex.value];
    }
  };

  const prevSong = () => {
    if (hasPrevSong.value) {
      currentIndex.value--;
      currentSong.value = playlist.value[currentIndex.value];
    }
  };

  const setVolume = (newVolume: number) => {
    volume.value = Math.max(0, Math.min(1, newVolume));
  };

  return {
    // 状态
    currentSong,
    isPlaying,
    volume,
    playlist,
    currentIndex,
    // 计算属性
    hasNextSong,
    hasPrevSong,
    // 方法
    playSong,
    togglePlay,
    nextSong,
    prevSong,
    setVolume,
  };
});

// 类型定义
interface Song {
  id: number;
  name: string;
  artist: string;
  url: string;
  cover?: string;
}

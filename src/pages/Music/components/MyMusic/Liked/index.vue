<template>
  <div class="music-page">
    <div class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <div class="hero-info">
          <h1>我喜欢的音乐</h1>
          <p>{{ likedSongsData.length }} 首歌曲 · {{ totalDuration }}</p>
        </div>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" @click="playAll">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          播放全部
        </button>
        <button class="btn btn-secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 3 21 3 21 8"/>
            <line x1="4" y1="20" x2="21" y2="3"/>
            <polyline points="21 16 21 21 16 21"/>
            <line x1="15" y1="15" x2="21" y2="21"/>
          </svg>
        </button>
        <button class="btn btn-secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 3h5v5"/>
            <path d="M4 20h16"/>
            <path d="M21 3l-7 7"/>
            <path d="M10 14H4v7h7"/>
            <path d="M3 21l7-7"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="stats-section">
      <div class="stat-card">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19V6l12-3v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        </div>
        <div class="stat-content">
          <span class="stat-value">{{ likedSongsData.length }}</span>
          <span class="stat-label">收藏歌曲</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="7" r="4"/>
            <path d="M5.5 21.7c0-2.2 1.4-4 3.3-4.7 1.2-.5 2.3-.4 3.2.2 1 .6 1.8 1.5 2.5 2.5.7-.9 1.5-2 2.5-2.5.9-.6 2-.7 3.2-.2 1.9.7 3.3 2.5 3.3 4.7"/>
          </svg>
        </div>
        <div class="stat-content">
          <span class="stat-value">{{ uniqueArtists }}</span>
          <span class="stat-label">歌手</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <polyline points="8 12 12 16 16 12"/>
            <line x1="12" y1="8" x2="12" y2="16"/>
          </svg>
        </div>
        <div class="stat-content">
          <span class="stat-value">{{ uniqueAlbums }}</span>
          <span class="stat-label">专辑</span>
        </div>
      </div>
    </div>

    <div class="content-section">
      <div class="section-header">
        <h2>歌曲列表</h2>
        <div class="sort-dropdown">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12h18"/>
            <path d="M3 6h18"/>
            <path d="M3 18h18"/>
          </svg>
          <span>排序</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <div class="songs-table">
        <div class="table-header">
          <div class="col">#</div>
          <div class="col cover">封面</div>
          <div class="col title">歌曲</div>
          <div class="col artist">歌手</div>
          <div class="col album">专辑</div>
          <div class="col duration">时长</div>
          <div class="col more"></div>
        </div>
        <div
          v-for="(song, index) in likedSongsData"
          :key="song.id"
          class="table-row"
          @click="handlePlaySong(song)"
        >
          <div class="col index">{{ index + 1 }}</div>
          <div class="col cover">
            <div class="cover-wrapper">
              <img loading="lazy" :src="song.cover" :alt="song.name" />
              <div class="cover-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="col title">
            <span class="song-name">{{ song.name }}</span>
            <div class="badges">
              <span v-if="song.isVip" class="badge vip">VIP</span>
              <span v-if="song.isSq" class="badge sq">SQ</span>
            </div>
          </div>
          <div class="col artist">{{ song.artists.map((a: { name: string }) => a.name).join(' / ') }}</div>
          <div class="col album">{{ song.album.name }}</div>
          <div class="col duration">{{ formatDuration(song.duration) }}</div>
          <div class="col more">
            <button class="more-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="19" cy="12" r="1"/>
                <circle cx="5" cy="12" r="1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { likedSongsData } from "@/stores/music";
import { formatDuration } from "@/utils/music";
import type { Song } from "@/typesOfPages/music";

const playSong = inject<(song: Song) => void>("playSong");

const totalDuration = computed(() => {
  const total = likedSongsData.reduce((acc, song) => acc + song.duration, 0);
  const hours = Math.floor(total / 3600000);
  const minutes = Math.floor((total % 3600000) / 60000);
  if (hours > 0) {
    return `${hours}小时${minutes}分钟`;
  }
  return `${minutes}分钟`;
});

const uniqueArtists = computed(() => {
  const artistIds = new Set(likedSongsData.flatMap(song => song.artists.map((a: { id: number }) => a.id)));
  return artistIds.size;
});

const uniqueAlbums = computed(() => {
  const albumIds = new Set(likedSongsData.map(song => song.album.id));
  return albumIds.size;
});

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};

const playAll = () => {
  if (likedSongsData.length > 0) {
    playSong?.(likedSongsData[0]);
  }
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
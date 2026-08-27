<template>
  <div v-if="artist" class="artist-detail">
    <div class="artist-hero">
      <div class="hero-bg">
        <img loading="lazy" :src="artist.avatar" alt="" />
      </div>
      <div class="hero-content">
        <div class="artist-avatar-lg">
          <img loading="lazy" :src="artist.avatar" :alt="artist.name" />
        </div>
        <div class="artist-info">
          <div class="artist-tags">
            <span v-for="tag in artist.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <h1>{{ artist.name }}</h1>
          <p v-if="artist.alias" class="alias">{{ artist.alias }}</p>
          <p class="description">{{ artist.description }}</p>
          <div class="artist-stats">
            <div class="stat">
              <strong>{{ formatPlayCount(artist.songCount) }}</strong>
              <span>歌曲</span>
            </div>
            <div class="stat">
              <strong>{{ formatPlayCount(artist.albumCount) }}</strong>
              <span>专辑</span>
            </div>
            <div class="stat">
              <strong>{{ formatPlayCount(artist.fanCount) }}</strong>
              <span>粉丝</span>
            </div>
          </div>
          <div class="hero-actions">
            <button class="action-btn primary" @click="playAll">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              播放热门
            </button>
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              关注
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>热门歌曲</h3>
      </div>
      <div class="hot-songs">
        <div
          v-for="(song, index) in artist.hotSongs"
          :key="song.id"
          class="song-row"
          @click="handlePlaySong(song)"
        >
          <span class="song-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="song-cover-sm">
            <img loading="lazy" :src="song.cover" :alt="song.name" />
          </div>
          <div class="song-info">
            <span class="song-name">{{ song.name }}</span>
            <span class="song-album">{{ song.album.name }}</span>
          </div>
          <span class="song-duration">{{ formatDuration(song.duration) }}</span>
        </div>
      </div>
    </div>

    <div v-if="artist.albums.length > 0" class="section">
      <div class="section-header">
        <h3>专辑</h3>
      </div>
      <div class="album-grid">
        <div
          v-for="album in artist.albums"
          :key="album.id"
          class="album-card"
        >
          <div class="album-cover">
            <img loading="lazy" :src="album.cover" :alt="album.name" />
          </div>
          <div class="album-name">{{ album.name }}</div>
          <div class="album-date">{{ album.publishTime }}</div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="not-found-content">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <p>歌手不存�?/p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { useRoute } from "vue-router";
import { useMusicDataStore } from "@/stores/music";
import { formatPlayCount, formatDuration } from "@/utils/music";
import type { Song } from "@/types/music";

const musicStore = useMusicDataStore();
const getArtistDetailById = (id: number) => musicStore.getArtistDetail(id);

const route = useRoute();
const playSong = inject<(song: Song) => void>("playSong");

const artistId = computed(() => Number(route.params.id));
const artist = computed(() => getArtistDetailById(artistId.value));

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};

const playAll = () => {
  if (artist.value && artist.value.hotSongs.length > 0) {
    playSong?.(artist.value.hotSongs[0]);
  }
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
<template>
  <div v-if="playlist" class="playlist-detail">
    <div class="detail-header">
      <div class="header-bg">
        <img loading="lazy" :src="playlist.cover" alt="" />
      </div>
      <div class="header-content">
        <div class="cover-wrap">
          <img loading="lazy" :src="playlist.cover" :alt="playlist.name" />
        </div>
        <div class="header-info">
          <div class="tag-row">
            <span v-for="tag in playlist.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
          <h1 class="playlist-name">{{ playlist.name }}</h1>
          <div class="creator-row">
            <span class="creator">{{ playlist.creator }}</span>
            <span class="divider">·</span>
            <span class="count">{{ playlist.songCount }} 首歌曲</span>
          </div>
          <p v-if="playlist.description" class="description">
            {{ playlist.description }}
          </p>
          <div class="action-row">
            <button class="action-btn primary" @click="playAll">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              播放全部
            </button>
            <button class="action-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                width="16"
                height="16"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              收藏
            </button>
            <button class="action-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                width="16"
                height="16"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              分享
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="song-list">
      <div class="list-header">
        <div class="col index-col"></div>
        <div class="col name-col">歌曲</div>
        <div class="col artist-col">歌手</div>
        <div class="col album-col">专辑</div>
        <div class="col duration-col">时长</div>
      </div>
      <div
        v-for="(song, index) in playlist.songs"
        :key="song.id"
        class="song-row"
        :class="{ active: currentSong?.id === song.id }"
        @click="handlePlaySong(song)"
        @dblclick="handlePlaySong(song)"
      >
        <div class="col index-col">
          <span v-if="currentSong?.id !== song.id" class="index-num">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <svg
            v-else
            class="playing-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="16"
            height="16"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <div class="col name-col">
          <div class="song-cover-xs">
            <img loading="lazy" :src="song.cover" :alt="song.name" />
          </div>
          <div class="song-name-cell">
            <span class="name">{{ song.name }}</span>
            <span v-if="song.isVip" class="vip-tag">VIP</span>
            <span v-if="song.isSq" class="sq-tag">SQ</span>
          </div>
        </div>
        <div class="col artist-col">
          {{ song.artists.map((a) => a.name).join(' / ') }}
        </div>
        <div class="col album-col">{{ song.album.name }}</div>
        <div class="col duration-col">{{ formatDuration(song.duration) }}</div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="not-found-content">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <p>歌单不存在</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useMusicDataStore } from "@/stores/music";
  import { formatDuration } from '@/utils/music';
  import type { Song } from '@/typesOfPages/music';

  const musicStore = useMusicDataStore();
  const getPlaylistById = (id: number) => musicStore.getPlaylist(id);

  const route = useRoute();
  const playSong = inject<(song: Song) => void>('playSong');
  const currentSong = inject<Ref<Song | null>>('currentSong');

  const playlistId = computed(() => Number(route.params.id));
  const playlist = computed(() => getPlaylistById(playlistId.value));

  const handlePlaySong = (song: Song) => {
    playSong?.(song);
  };

  const playAll = () => {
    if (playlist.value && playlist.value.songs.length > 0) {
      playSong?.(playlist.value.songs[0]);
    }
  };
</script>

<style lang="scss" src="./index.scss" scoped></style>
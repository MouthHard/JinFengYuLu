<template>
  <div class="music-page">
    <div class="header-section">
      <div class="header-bg"></div>
      <div class="header-content">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </div>
        <div class="header-info">
          <h1>我的收藏</h1>
          <p>珍藏每一段感�?/p>
        </div>
      </div>
    </div>

    <div class="tabs-section">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-btn"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path :d="tab.icon" />
        </svg>
        <span class="tab-label">{{ tab.label }}</span>
        <span class="tab-count">{{ tab.count }}</span>
      </button>
    </div>

    <div v-if="activeTab === 'songs'" class="content-section songs-view">
      <div class="section-header">
        <h2>收藏歌曲</h2>
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
          v-for="(song, index) in collectionSongsData"
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

    <div v-else class="content-section playlists-view">
      <div class="section-header">
        <h2>收藏歌单</h2>
        <button class="see-all-btn">查看全部</button>
      </div>

      <div class="playlists-grid">
        <div
          v-for="playlist in collectionPlaylistsData"
          :key="playlist.id"
          class="playlist-card"
          @click="handlePlaylistClick(playlist)"
        >
          <div class="card-cover">
            <img loading="lazy" :src="playlist.cover" :alt="playlist.name" />
            <div class="cover-overlay">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
            <div class="card-badge">{{ playlist.songCount }}�?/div>
          </div>
          <div class="card-info">
            <h4>{{ playlist.name }}</h4>
            <p class="card-desc">{{ playlist.description }}</p>
            <span class="card-creator">{{ playlist.creator }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { collectionSongsData, collectionPlaylistsData } from "@/stores/music";
import { formatDuration } from "@/utils/music";
import type { Song, MyPlaylist } from "@/types/music";

const playSong = inject<(song: Song) => void>("playSong");

const activeTab = ref('songs');

const tabs = [
  {
    key: 'songs',
    label: '收藏歌曲',
    count: collectionSongsData.length,
    icon: 'M9 19V6l12-3v13'
  },
  {
    key: 'playlists',
    label: '收藏歌单',
    count: collectionPlaylistsData.length,
    icon: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4;M12 10l7 7-7 7'
  }
];

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};

const handlePlaylistClick = (playlist: MyPlaylist) => {
  console.log('Playlist clicked:', playlist.name);
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
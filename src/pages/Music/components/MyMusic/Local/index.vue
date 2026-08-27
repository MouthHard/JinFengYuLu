<template>
  <div class="music-page">
    <div class="header-section">
      <div class="header-bg"></div>
      <div class="header-content">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </div>
        <div class="header-info">
          <h1>本地音乐</h1>
          <p>存储在设备中的音乐文�?/p>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn btn-primary" @click="importMusic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          导入音乐
        </button>
        <button class="btn btn-secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="storage-section">
      <div class="storage-card">
        <div class="storage-header">
          <div class="storage-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div class="storage-title">
            <h3>存储信息</h3>
            <p>本地音乐占用空间</p>
          </div>
        </div>
        <div class="storage-bar-wrapper">
          <div class="storage-bar">
            <div class="storage-fill" :style="{ width: '36%' }"></div>
          </div>
          <div class="storage-info">
            <span class="used">1.8 GB</span>
            <span class="total">/ 5.0 GB</span>
          </div>
        </div>
        <div class="storage-stats">
          <div class="stat-item">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19V6l12-3v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
              </svg>
            </div>
            <div class="stat-content">
              <span class="stat-value">{{ localSongsData.length }}</span>
              <span class="stat-label">本地歌曲</span>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div class="stat-content">
              <span class="stat-value">{{ localFoldersData.length }}</span>
              <span class="stat-label">文件�?/span>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7.5 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <div class="stat-content">
              <span class="stat-value">{{ totalSize }}</span>
              <span class="stat-label">总大�?/span>
            </div>
          </div>
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
      </button>
    </div>

    <div v-if="activeTab === 'songs'" class="content-section songs-view">
      <div class="view-toggle">
        <button class="toggle-btn" :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        </button>
        <button class="toggle-btn" :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        </button>
      </div>

      <div v-if="viewMode === 'list'" class="songs-list">
        <div class="list-header">
          <div class="col">#</div>
          <div class="col cover">封面</div>
          <div class="col title">名称</div>
          <div class="col artist">艺术�?/div>
          <div class="col album">专辑</div>
          <div class="col duration">时长</div>
          <div class="col size">大小</div>
        </div>
        <div
          v-for="(song, index) in localSongsData"
          :key="song.id"
          class="list-row"
          @click="handlePlaySong(song)"
        >
          <div class="col index">{{ index + 1 }}</div>
          <div class="col cover">
            <img loading="lazy" :src="song.cover" :alt="song.name" />
          </div>
          <div class="col title">{{ song.name }}</div>
          <div class="col artist">{{ song.artists.map((a: { name: string }) => a.name).join(' / ') }}</div>
          <div class="col album">{{ song.album.name }}</div>
          <div class="col duration">{{ formatDuration(song.duration) }}</div>
          <div class="col size">{{ song.size }}</div>
        </div>
      </div>

      <div v-else class="songs-grid">
        <div
          v-for="song in localSongsData"
          :key="song.id"
          class="grid-card"
          @click="handlePlaySong(song)"
        >
          <div class="card-cover">
            <img loading="lazy" :src="song.cover" :alt="song.name" />
            <div class="card-overlay">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
          <div class="card-info">
            <h4>{{ song.name }}</h4>
            <p>{{ song.artists.map((a: { name: string }) => a.name).join(' / ') }}</p>
            <span class="card-size">{{ song.size }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="content-section folders-view">
      <div class="folders-list">
        <div
          v-for="folder in localFoldersData"
          :key="folder.id"
          class="folder-item"
          @click="handleFolderClick(folder)"
        >
          <div class="folder-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div class="folder-info">
            <h4>{{ folder.name }}</h4>
            <span class="folder-path">{{ folder.path }}</span>
          </div>
          <div class="folder-meta">
            <span class="song-count">{{ folder.songCount }} �?/span>
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
import { ref, computed, inject } from "vue";
import { localSongsData, localFoldersData } from "@/stores/music";
import { formatDuration } from "@/utils/music";
import type { Song, LocalFolder } from "@/types/music";

const playSong = inject<(song: Song) => void>("playSong");

const activeTab = ref('songs');
const viewMode = ref<'list' | 'grid'>('list');

const tabs = [
  {
    key: 'songs',
    label: '歌曲',
    icon: 'M9 19V6l12-3v13'
  },
  {
    key: 'folders',
    label: '文件�?,
    icon: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'
  }
];

const totalSize = computed(() => {
  const sizes = localSongsData.map(s => parseFloat(s.size));
  const total = sizes.reduce((a: number, b: number) => a + b, 0);
  return total.toFixed(1) + ' MB';
});

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};

const handleFolderClick = (folder: LocalFolder) => {
  console.log('Folder clicked:', folder.name);
};

const importMusic = () => {
  console.log('Import music');
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
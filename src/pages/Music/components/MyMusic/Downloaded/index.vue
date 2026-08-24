<template>
  <div class="music-page">
    <div class="header-section">
      <div class="header-bg"></div>
      <div class="header-particles"></div>
      <div class="header-glow"></div>
      <div class="header-content">
        <div class="header-icon">
          <div class="icon-inner">
            <DownloadIcon />
          </div>
          <div class="icon-ring"></div>
        </div>
        <div class="header-info">
          <div class="title-wrapper">
            <h1>下载</h1>
            <div class="title-badge">
              <CheckCircleIcon :width="12" :height="12" />
              已同�?            </div>
          </div>
          <p class="subtitle">{{ downloadedSongs.length }} 首已下载 �?{{ totalSize }}</p>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn btn-primary" disabled title="敬请期待期待">
          <PlayIcon fill="currentColor" />
          全部播放
        </button>
        <button class="btn btn-secondary" @click="clearAll">
          <TrashIcon />
          娓呯┖鍒楄�?        </button>
      </div>
    </div>

    <div class="storage-section">
      <div class="storage-card">
        <div class="storage-glow"></div>
        <div class="storage-header">
          <div class="storage-icon">
            <MonitorIcon />
          </div>
          <div class="storage-info-text">
            <span class="storage-label">已用空间</span>
            <span class="storage-value">{{ totalSize }}</span>
          </div>
          <div class="storage-percentage">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3" />
              <path class="circle-fill" :stroke-dasharray="`${storagePercent}, 100`"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none"
                stroke-width="3" stroke-linecap="round" />
            </svg>
            <span class="percentage-text">{{ storagePercent.toFixed(1) }}%</span>
          </div>
        </div>
        <div class="storage-bar-container">
          <div class="storage-bar">
            <div class="storage-fill" :style="{ width: storagePercent + '%' }">
              <div class="fill-glow"></div>
            </div>
            <div class="bar-shine"></div>
          </div>
        </div>
        <div class="storage-detail">
          <div class="detail-item">
            <span class="detail-dot used"></span>
            <span>{{ usedSize }} GB</span>
          </div>
          <div class="detail-divider"></div>
          <div class="detail-item">
            <span class="detail-dot available"></span>
            <span>{{ maxSpace }} GB</span>
          </div>
        </div>
      </div>
    </div>

    <div class="filter-bar">
      <div class="filter-tabs">
        <button v-for="tab in filterTabs" :key="tab.key" class="filter-tab"
          :class="{ active: activeFilter === tab.key }" @click="activeFilter = tab.key">
          <span class="tab-text">{{ tab.label }}</span>
          <span class="tab-count">{{ tab.count }}</span>
          <div v-if="activeFilter === tab.key" class="tab-indicator"></div>
        </button>
      </div>
      <div class="filter-sort">
        <div class="sort-select">
          <SortIcon class="sort-icon" />
          <select v-model="sortBy">
            <option value="time">下载时间</option>
            <option value="size">大小</option>
            <option value="name">歌曲名称</option>
          </select>
        </div>
      </div>
    </div>

    <div class="songs-list-container">
      <div class="list-header-decoration"></div>
      <div class="songs-list">
        <div class="list-header">
          <div class="col col-check">
            <label class="custom-checkbox">
              <input type="checkbox" @change="toggleSelectAll" />
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="col col-cover"></div>
          <div class="col col-name">歌曲</div>
          <div class="col col-artist"></div>
          <div class="col col-size">鏂囦�?/div>
          <div class="col col-date">下载</div>
          <div class="col col-quality"></div>
          <div class="col col-action"></div>
        </div>
        <transition-group name="list-fade" tag="div" class="list-body">
          <div v-for="(song, idx) in filteredSongs" :key="song.id" class="list-row"
            :class="{ selected: selectedIds.has(song.id) }" :style="{ animationDelay: `${idx * 30}ms` }">
            <div class="row-hover-effect"></div>
            <div class="col col-check">
              <label class="custom-checkbox">
                <input type="checkbox" :checked="selectedIds.has(song.id)" @change="toggleSelect(song.id)" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col col-cover">
              <div class="cover-wrapper">
                <img loading="lazy" :src="song.cover" :alt="song.name" />
                <div class="cover-overlay">
                  <PlayIcon fill="currentColor" />
                </div>
              </div>
            </div>
            <div class="col col-name">
              <div class="name-content">
                <span class="song-title">{{ song.name }}</span>
                <div class="tags-group">
                  <span v-if="song.isVip" class="tag-vip">
                    <StarIcon :width="10" :height="10" fill="currentColor" />
                    VIP
                  </span>
                  <span v-if="song.isSq" class="tag-sq">Hi-Res</span>
                </div>
              </div>
            </div>
            <div class="col col-artist">
              <span class="artist-name">{{ song.artists[0]?.name || '-' }}</span>
            </div>
            <div class="col col-size">
              <span class="size-value">{{ song.fileSize }}</span>
            </div>
            <div class="col col-date">
              <span class="date-value">{{ song.downloadTime }}</span>
            </div>
            <div class="col col-quality">
              <span :class="'quality-badge ' + song.quality.toLowerCase()">{{ song.qualityLabel }}</span>
            </div>
            <div class="col col-action">
              <button class="action-btn play" title="播放" disabled>
                <PlayIcon fill="currentColor" />
              </button>
              <button class="action-btn delete" title="删除" @click="handleDelete(song)">
                <TrashIcon />
              </button>
            </div>
          </div>
        </transition-group>

        <div v-if="filteredSongs.length === 0" class="empty-state">
          <div class="empty-icon-wrapper">
            <div class="empty-glow"></div>
            <DownloadIcon :stroke-width="1.5" />
          </div>
          <p class="empty-title">暂无下载</p>
          <span class="empty-desc">暂无下载内容，去发现好音乐吧</span>
          <button class="btn-go-discover" @click="$router.push('/music/discover')">
            <SearchIcon :stroke-width="2" />
            去发�?          </button>
        </div>
      </div>
    </div>

    <Transition name="batch-slide">
      <div v-if="selectedIds.size > 0" class="batch-actions">
        <div class="batch-glow"></div>
        <div class="batch-content">
          <div class="batch-info">
            <div class="selected-icon">
              <CheckIcon :stroke-width="2.5" />
            </div>
            <span class="selected-count">宸查€夋�?<strong>{{ selectedIds.size }}</strong> </span>
          </div>
          <div class="batch-buttons">
            <button class="btn-batch primary" @click="batchDelete">
              <TrashIcon />
              批量删除
            </button>
            <button class="btn-batch secondary" @click="selectedIds.clear()">
              取消选择
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { downloadedSongsData } from '@/stores/music/data'
import type { DownloadedSong } from '@/types/music'
import PlayIcon from '@/pages/Music/icons/common/PlayIcon.vue';
import DownloadIcon from '@/pages/Music/icons/MyMusic/common/DownloadIcon.vue';
import CheckCircleIcon from '@/pages/Music/icons/MyMusic/common/CheckCircleIcon.vue';
import TrashIcon from '@/pages/Music/icons/MyMusic/common/TrashIcon.vue';
import StarIcon from '@/pages/Music/icons/PlayerBar/StarIcon.vue';
import MonitorIcon from '@/pages/Music/icons/MyMusic/common/MonitorIcon.vue';
import SearchIcon from '@/pages/Music/icons/common/SearchIcon.vue';

const downloadedSongs = ref([...downloadedSongsData])
const selectedIds = ref<Set<number>>(new Set())
const activeFilter = ref('all')
const sortBy = ref('time')

const filterTabs = computed(() => [
  { key: 'all', label: '全部', count: downloadedSongs.value.length },
  { key: 'high', label: '高品质', count: downloadedSongs.value.filter((s: DownloadedSong) => s.quality === 'lossless' || s.quality === 'hi-res').length },
  { key: 'standard', label: '标准', count: downloadedSongs.value.filter((s: DownloadedSong) => s.quality === 'standard').length },
])

const totalSize = computed(() => {
  const bytes = downloadedSongs.value.reduce((sum: number, s: DownloadedSong) => sum + (s.fileBytes || 0), 0)
  return formatSize(bytes)
})

const usedSize = computed(() => {
  const bytes = downloadedSongs.value.reduce((sum: number, s: DownloadedSong) => sum + (s.fileBytes || 0), 0)
  return formatSize(bytes)
})

const maxSpace = '5.0 GB'
const storagePercent = computed(() => {
  const bytes = downloadedSongs.value.reduce((sum: number, s: DownloadedSong) => sum + (s.fileBytes || 0), 0)
  return Math.min((bytes / (5 * 1024 * 1024 * 1024)) * 100, 100)
})

const filteredSongs = computed(() => {
  let list = [...downloadedSongs.value]
  if (activeFilter.value !== 'all') {
    if (activeFilter.value === 'high') {
      list = list.filter((s: DownloadedSong) => s.quality === 'lossless' || s.quality === 'hi-res')
    } else if (activeFilter.value === 'standard') {
      list = list.filter((s: DownloadedSong) => s.quality === 'standard')
    }
  }
  if (sortBy.value === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'size') {
    list.sort((a, b) => (b.fileBytes || 0) - (a.fileBytes || 0))
  }
  return list
})

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' MB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' GB'
}

function toggleSelect(id: number) {
  if (selectedIds.value.has(id)) {
    selectedIds.value.delete(id)
  } else {
    selectedIds.value.add(id)
  }
}

function toggleSelectAll(e: Event) {
  const checked = (e.target as HTMLInputElement).checked
  if (checked) {
    selectedIds.value = new Set(filteredSongs.value.map(s => s.id))
  } else {
    selectedIds.value.clear()
  }
}

function handleDelete(song: DownloadedSong) {
  const idx = downloadedSongs.value.findIndex((s: DownloadedSong) => s.id === song.id)
  if (idx > -1) downloadedSongs.value.splice(idx, 1)
  selectedIds.value.delete(song.id)
}

function batchDelete() {
  downloadedSongs.value = downloadedSongs.value.filter((s: DownloadedSong) => !selectedIds.value.has(s.id))
  selectedIds.value.clear()
}

function clearAll() {
  downloadedSongs.value = []
  selectedIds.value.clear()
}
</script>

<style lang="scss" src="./index.scss" scoped></style>

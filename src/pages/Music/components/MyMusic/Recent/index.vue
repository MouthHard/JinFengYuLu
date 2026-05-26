<template>
  <div class="music-page">
    <div class="header-section">
      <div class="header-bg"></div>
      <div class="header-content">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8v4l3 3"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        <div class="header-info">
          <h1>最近播放</h1>
          <p>记录你的音乐足迹</p>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn btn-primary" @click="playAll">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          播放全部
        </button>
      </div>
    </div>

    <div class="timeline-section">
      <div class="section-header">
        <h2>最近听过</h2>
      </div>
      
      <div class="timeline">
        <div
          v-for="(group, groupIndex) in groupedSongs"
          :key="groupIndex"
          class="timeline-group"
        >
          <div class="group-header">
            <div class="group-dot"></div>
            <span class="group-label">{{ group.date }}</span>
            <div class="group-line"></div>
          </div>
          
          <div
            v-for="item in group.songs"
            :key="item.song.id"
            class="timeline-item"
            @click="handlePlaySong(item.song)"
          >
            <div class="item-cover">
              <img loading="lazy" :src="item.song.cover" :alt="item.song.name" />
              <div class="cover-overlay">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
            <div class="item-info">
              <div class="item-title-row">
                <span class="song-name">{{ item.song.name }}</span>
                <div class="badges">
                  <span v-if="item.song.isVip" class="badge vip">VIP</span>
                  <span v-if="item.song.isSq" class="badge sq">SQ</span>
                </div>
              </div>
              <span class="item-artist">{{ item.song.artists.map((a: { name: string }) => a.name).join(' / ') }}</span>
            </div>
            <span class="item-time">{{ item.playTime.split(' ')[1] }}</span>
            <span class="item-duration">{{ formatDuration(item.song.duration) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="playlists-section">
      <div class="section-header">
        <h2>最近听过的歌单</h2>
        <button class="see-all-btn">查看全部</button>
      </div>
      
      <div class="playlists-grid">
        <div
          v-for="playlist in recentPlaylistsData"
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
            <div class="card-badge">{{ playlist.songCount }}首</div>
          </div>
          <div class="card-info">
            <h4>{{ playlist.name }}</h4>
            <span class="card-meta">{{ playlist.lastPlayed }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { recentPlayedData, recentPlaylistsData } from "@/stores/music";
import { formatDuration } from "@/utils/music";
import type { Song, MyPlaylist, PlayTimeInfo } from "@/typesOfPages/music";

const playSong = inject<(song: Song) => void>("playSong");

const groupedSongs = computed(() => {
  const groups: { date: string; songs: PlayTimeInfo[] }[] = [];
  let currentDate = "";

  recentPlayedData.forEach((item: PlayTimeInfo) => {
    const date = item.playTime.split(' ')[0];
    if (date !== currentDate) {
      currentDate = date;
      groups.push({ date, songs: [item] });
    } else {
      groups[groups.length - 1].songs.push(item);
    }
  });

  return groups;
});

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};

const playAll = () => {
  if (recentPlayedData.length > 0) {
    playSong?.(recentPlayedData[0].song);
  }
};

const handlePlaylistClick = (playlist: MyPlaylist) => {
  console.log('Playlist clicked:', playlist.name);
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
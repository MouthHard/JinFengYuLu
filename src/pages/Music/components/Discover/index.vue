<template>
  <div class="discover-page">
    <div class="banner-section">
      <div class="banner-carousel">
        <div
          v-for="(banner, index) in bannerImages"
          :key="banner.id"
          class="banner-slide"
          :class="{ active: currentBanner === index }"
        >
          <img loading="lazy" :src="banner.image" :alt="banner.title" />
          <div class="banner-overlay">
            <h2>{{ banner.title }}</h2>
            <p>{{ banner.subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="banner-dots">
        <span
          v-for="(_, index) in bannerImages"
          :key="index"
          class="dot"
          :class="{ active: currentBanner === index }"
          @click="currentBanner = index"
        ></span>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>推荐歌单</h3>
        <span class="more-link">查看更多 →</span>
      </div>
      <div class="playlist-grid">
        <div
          v-for="pl in recommendPlaylists"
          :key="pl.id"
          class="playlist-card"
          @click="goPlaylist(pl.id)"
        >
          <div class="card-cover">
            <img :src="pl.cover" :alt="pl.name" loading="lazy" />
            <div class="play-count">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {{ formatPlayCount(pl.playCount) }}
            </div>
            <div class="play-overlay">
              <div class="play-circle">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="card-name">{{ pl.name }}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>新歌速递</h3>
        <div class="tab-switch">
          <span
            v-for="(tab, idx) in newSongTabs"
            :key="idx"
            :class="{ active: activeNewSongTab === idx }"
            @click="activeNewSongTab = idx"
          >{{ tab }}</span>
        </div>
      </div>
      <div class="new-songs-grid">
        <div
          v-for="(song, index) in displayNewSongs"
          :key="song.id"
          class="new-song-item"
          @click="handlePlaySong(song)"
        >
          <span class="song-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <div class="song-cover-sm">
            <img :src="song.cover" :alt="song.name" loading="lazy" />
            <div class="play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
          <div class="song-info">
            <div class="song-name-row">
              <span class="name">{{ song.name }}</span>
              <span v-if="song.isVip" class="vip-tag">VIP</span>
              <span v-if="song.isSq" class="sq-tag">SQ</span>
            </div>
            <div class="song-artist-row">{{ song.artists.map((a: { name: string }) => a.name).join(' / ') }}</div>
          </div>
          <div class="song-duration">{{ formatDuration(song.duration) }}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>排行榜</h3>
      </div>
      <div class="toplist-grid">
        <div
          v-for="list in toplists"
          :key="list.id"
          class="toplist-card"
          @click="goPlaylist(list.id)"
        >
          <div class="toplist-header">
            <div class="toplist-cover">
              <img loading="lazy" :src="list.cover" :alt="list.name" />
            </div>
            <div class="toplist-meta">
              <div class="toplist-name">{{ list.name }}</div>
              <div class="toplist-freq">{{ list.updateFrequency }}</div>
            </div>
          </div>
          <div class="toplist-songs">
            <div
              v-for="(song, idx) in list.songs"
              :key="song.id"
              class="toplist-song"
              @click.stop="handlePlaySong(song)"
            >
              <span class="rank" :class="{ top3: idx < 3 }">{{ idx + 1 }}</span>
              <span class="toplist-song-name">{{ song.name }}</span>
              <span class="toplist-song-artist"> - {{ song.artists.map((a: { name: string }) => a.name).join('/') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>热门歌手</h3>
        <span class="more-link" @click="showAllArtists = !showAllArtists">
          {{ showAllArtists ? '收起' : '查看更多' }} →
        </span>
      </div>
      <div class="artist-grid">
        <div
          v-for="artist in displayArtists"
          :key="artist.id"
          class="artist-card"
          @click="goArtist(artist.id)"
        >
          <div class="artist-avatar">
            <img :src="artist.avatar" :alt="artist.name" loading="lazy" />
            <div class="artist-overlay">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
          <div class="artist-name">{{ artist.name }}</div>
          <div v-if="artist.alias" class="artist-alias">{{ artist.alias }}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>精选MV</h3>
      </div>
      <div class="mv-grid">
        <div
          v-for="mv in featuredMVs"
          :key="mv.id"
          class="mv-card"
        >
          <div class="mv-cover">
            <img :src="mv.cover" :alt="mv.title" loading="lazy" />
            <div class="mv-play-count">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {{ formatPlayCount(mv.playCount) }}
            </div>
            <div class="mv-duration">{{ mv.duration }}</div>
            <div class="mv-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>
          <div class="mv-info">
            <div class="mv-title">{{ mv.title }}</div>
            <div class="mv-artist">{{ mv.artist }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>热门电台</h3>
        <span class="more-link">查看更多 →</span>
      </div>
      <div class="radio-grid">
        <div
          v-for="radio in popularRadio"
          :key="radio.id"
          class="radio-card"
        >
          <div class="radio-cover">
            <img :src="radio.cover" :alt="radio.name" loading="lazy" />
            <div class="radio-overlay">
              <div class="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="radio-info">
            <h4 class="radio-name">{{ radio.name }}</h4>
            <p class="radio-desc">{{ radio.description }}</p>
            <div class="radio-meta">
              <span class="radio-listener">{{ radio.listeners }} 听众</span>
              <span class="radio-category">{{ radio.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h3>为你推荐</h3>
        <span class="more-link">更多推荐 →</span>
      </div>
      <div class="personalized-grid">
        <div
          v-for="playlist in personalizedPlaylists"
          :key="playlist.id"
          class="personalized-card"
          @click="goPlaylist(playlist.id)"
        >
          <div class="personalized-cover">
            <img :src="playlist.cover" :alt="playlist.name" loading="lazy" />
            <div class="personalized-overlay">
              <div class="play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="personalized-info">
            <h4 class="personalized-name">{{ playlist.name }}</h4>
            <p class="personalized-desc">{{ playlist.description }}</p>
            <div class="personalized-playcount">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {{ formatPlayCount(playlist.playCount) }} 次播放
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { inject } from "vue";
import { bannerImages, recommendPlaylists, newSongs, toplists, artists } from "@/stores/music";
import { formatPlayCount, formatDuration } from "@/utils/music";
import type { Song } from "@/typesOfPages/music";

const router = useRouter();
const playSong = inject<(song: Song) => void>("playSong");

const currentBanner = ref(0);
const activeNewSongTab = ref(0);
const newSongTabs = ["全部", "华语", "欧美"];
const showAllArtists = ref(false);

let bannerTimer: number | null = null;

const displayNewSongs = computed(() => {
  if (activeNewSongTab.value === 0) return newSongs;
  if (activeNewSongTab.value === 1) {
    return newSongs.filter((s) =>
      s.artists.some((a) => a.id <= 9)
    );
  }
  return newSongs.filter((s) =>
    s.artists.some((a) => a.id > 9)
  );
});

const displayArtists = computed(() => {
  return showAllArtists.value ? artists : artists.slice(0, 8);
});

const featuredMVs = [
  {
    id: 1,
    title: "最伟大的作品",
    artist: "周杰伦",
    cover: "https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/music/mv/greatest.webp",
    playCount: 8567234,
    duration: "4:32"
  },
  {
    id: 2,
    title: "孤勇者",
    artist: "陈奕迅",
    cover: "https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/music/mv/hero.webp",
    playCount: 6234567,
    duration: "4:22"
  },
  {
    id: 3,
    title: "光年之外",
    artist: "邓紫棋",
    cover: "https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/music/mv/lightyear.webp",
    playCount: 4567890,
    duration: "3:55"
  },
  {
    id: 4,
    title: "Anti-Hero",
    artist: "Taylor Swift",
    cover: "https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/music/mv/antihero.webp",
    playCount: 3890123,
    duration: "3:20"
  },
];

const popularRadio = [
  {
    id: 1,
    name: '流行音乐电台',
    description: '最新流行音乐，让你紧跟时尚潮流',
    cover: 'https://picsum.photos/seed/radio1/400/400',
    listeners: '12.5万',
    category: '流行'
  },
  {
    id: 2,
    name: '摇滚音乐电台',
    description: '摇滚不死，激情无限',
    cover: 'https://picsum.photos/seed/radio2/400/400',
    listeners: '8.3万',
    category: '摇滚'
  },
  {
    id: 3,
    name: '电子音乐电台',
    description: '电音舞曲，嗨翻全场',
    cover: 'https://picsum.photos/seed/radio3/400/400',
    listeners: '6.7万',
    category: '电子'
  },
  {
    id: 4,
    name: '古典音乐电台',
    description: '经典名曲，陶冶情操',
    cover: 'https://picsum.photos/seed/radio4/400/400',
    listeners: '4.2万',
    category: '古典'
  },
  {
    id: 5,
    name: '民谣音乐电台',
    description: '清新民谣，温暖人心',
    cover: 'https://picsum.photos/seed/radio5/400/400',
    listeners: '5.8万',
    category: '民谣'
  },
  {
    id: 6,
    name: '嘻哈音乐电台',
    description: '说唱文化，街头潮流',
    cover: 'https://picsum.photos/seed/radio6/400/400',
    listeners: '7.1万',
    category: '嘻哈'
  },
  {
    id: 7,
    name: 'R&B音乐电台',
    description: '节奏布鲁斯，灵魂之声',
    cover: 'https://picsum.photos/seed/radio7/400/400',
    listeners: '5.3万',
    category: 'R&B'
  },
  {
    id: 8,
    name: '爵士音乐电台',
    description: '爵士风情，优雅格调',
    cover: 'https://picsum.photos/seed/radio8/400/400',
    listeners: '3.9万',
    category: '爵士'
  },
];

const personalizedPlaylists = [
  {
    id: 101,
    name: '根据你的喜好推荐',
    cover: 'https://picsum.photos/seed/playlist1/400/400',
    playCount: 1234567,
    description: '为你精选的个性化歌单'
  },
  {
    id: 102,
    name: '本周热门单曲',
    cover: 'https://picsum.photos/seed/playlist2/400/400',
    playCount: 987654,
    description: '本周最受欢迎的歌曲'
  },
  {
    id: 103,
    name: '睡前放松音乐',
    cover: 'https://picsum.photos/seed/playlist3/400/400',
    playCount: 567890,
    description: '助你安然入睡的轻音乐'
  },
  {
    id: 104,
    name: '运动健身必备',
    cover: 'https://picsum.photos/seed/playlist4/400/400',
    playCount: 789012,
    description: '激发运动潜能的动感音乐'
  },
];

const goPlaylist = (id: number) => {
  router.push(`/music/playlist/${id}`);
};

const goArtist = (id: number) => {
  router.push(`/music/artist/${id}`);
};

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};

onMounted(() => {
  bannerTimer = window.setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % bannerImages.length;
  }, 4000);
});

onUnmounted(() => {
  if (bannerTimer) {
    clearInterval(bannerTimer);
    bannerTimer = null;
  }
});
</script>

<style lang="scss" src="./index.scss" scoped></style>
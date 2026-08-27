<template>
  <div class="search-page">
    <div class="search-header">
      <div class="search-input-wrap">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          ref="searchInput"
          v-model="keyword"
          type="text"
          placeholder="搜索歌曲、歌手、专�?
          @keyup.enter="doSearch"
        />
        <button v-if="keyword" class="clear-btn" @click="clearSearch">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="!hasSearched" class="hot-section">
      <div class="section-title">热搜�?/div>
      <div class="hot-list">
        <div
          v-for="(hot, index) in searchHots"
          :key="hot.id"
          class="hot-item"
          @click="searchHot(hot.text)"
        >
          <span class="hot-rank" :class="{ top3: index < 3 }">{{ index + 1 }}</span>
          <div class="hot-info">
            <span class="hot-text">{{ hot.text }}</span>
            <span v-if="hot.icon" class="hot-icon">{{ hot.icon }}</span>
          </div>
          <span class="hot-heat">{{ formatPlayCount(hot.heat) }}</span>
        </div>
      </div>
    </div>

    <div v-else class="search-results">
      <div class="results-tabs">
        <span
          v-for="tab in searchTabs"
          :key="tab.key"
          class="tab-item"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <span class="tab-count">({{ tab.count }})</span>
        </span>
      </div>

      <div v-if="activeTab === 'songs'" class="results-section">
        <div v-if="filteredSongs.length > 0" class="results-list">
          <div
            v-for="(song, index) in filteredSongs"
            :key="song.id"
            class="result-row"
            @click="handlePlaySong(song)"
          >
            <span class="result-index">{{ index + 1 }}</span>
            <div class="result-cover">
              <img loading="lazy" :src="song.cover" :alt="song.name" />
            </div>
            <div class="result-info">
              <div class="result-name">
                <span v-html="highlightText(song.name)"></span>
                <span v-if="song.isVip" class="vip-tag">VIP</span>
              </div>
              <div class="result-artist" v-html="highlightText(song.artists.map((a: { name: string }) => a.name).join(' / '))"></div>
            </div>
            <div class="result-album">{{ song.album.name }}</div>
            <div class="result-duration">{{ formatDuration(song.duration) }}</div>
          </div>
        </div>
        <div v-else class="no-results">
          <p>未找到相关歌�?/p>
        </div>
      </div>

      <div v-if="activeTab === 'artists'" class="results-section">
        <div v-if="filteredArtists.length > 0" class="artist-results">
          <div
            v-for="artist in filteredArtists"
            :key="artist.id"
            class="artist-result-card"
            @click="goArtist(artist.id)"
          >
            <div class="artist-result-avatar">
              <img loading="lazy" :src="artist.avatar" :alt="artist.name" />
            </div>
            <div class="artist-result-info">
              <div class="artist-result-name" v-html="highlightText(artist.name)"></div>
              <div v-if="artist.alias" class="artist-result-alias">{{ artist.alias }}</div>
            </div>
          </div>
        </div>
        <div v-else class="no-results">
          <p>未找到相关歌�?/p>
        </div>
      </div>

      <div v-if="activeTab === 'playlists'" class="results-section">
        <div v-if="filteredPlaylists.length > 0" class="playlist-results">
          <div
            v-for="pl in filteredPlaylists"
            :key="pl.id"
            class="playlist-result-card"
            @click="goPlaylist(pl.id)"
          >
            <div class="playlist-result-cover">
              <img loading="lazy" :src="pl.cover" :alt="pl.name" />
            </div>
            <div class="playlist-result-info">
              <div class="playlist-result-name" v-html="highlightText(pl.name)"></div>
              <div class="playlist-result-count">{{ pl.songCount }} 首歌�?/div>
            </div>
          </div>
        </div>
        <div v-else class="no-results">
          <p>未找到相关歌�?/p>
        </div>
      </div>

      <div v-if="filteredSongs.length === 0 && filteredArtists.length === 0 && filteredPlaylists.length === 0" class="no-results-all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <p>未找到相关结�?/p>
        <span>试试其他关键词吧</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { inject } from "vue";
import { searchHots, songs, artists, playlists } from "@/stores/music";
import { formatPlayCount, formatDuration } from "@/utils/music";
import { highlightSearchMatch } from "@/utils/common";
import type { Song, Artist, Playlist } from "@/types/music";

const route = useRoute();
const router = useRouter();
const playSong = inject<(song: Song) => void>("playSong");

const keyword = ref("");
const searchedKeyword = ref("");
const hasSearched = ref(false);
const searchInput = ref<HTMLInputElement | null>(null);
const activeTab = ref("songs");

const filteredSongs = computed(() => {
  if (!searchedKeyword.value) return [];
  const lowerKeyword = searchedKeyword.value.toLowerCase();
  return songs.filter((song: Song) =>
    song.name.toLowerCase().includes(lowerKeyword) ||
    song.artists.some((a: { name: string }) => a.name.toLowerCase().includes(lowerKeyword))
  );
});

const filteredArtists = computed(() => {
  if (!searchedKeyword.value) return [];
  const lowerKeyword = searchedKeyword.value.toLowerCase();
  return artists.filter((artist: Artist) =>
    artist.name.toLowerCase().includes(lowerKeyword) ||
    (artist.alias && artist.alias.toLowerCase().includes(lowerKeyword))
  );
});

const filteredPlaylists = computed(() => {
  if (!searchedKeyword.value) return [];
  const lowerKeyword = searchedKeyword.value.toLowerCase();
  return playlists.filter((pl: Playlist) =>
    pl.name.toLowerCase().includes(lowerKeyword) ||
    pl.tags.some((tag: string) => tag.toLowerCase().includes(lowerKeyword))
  );
});

const searchTabs = computed(() => [
  { key: "songs", label: "歌曲", count: filteredSongs.value.length },
  { key: "artists", label: "歌手", count: filteredArtists.value.length },
  { key: "playlists", label: "歌单", count: filteredPlaylists.value.length },
]);

const doSearch = () => {
  if (keyword.value.trim()) {
    searchedKeyword.value = keyword.value.trim();
    hasSearched.value = true;
  }
};

const searchHot = (text: string) => {
  keyword.value = text;
  doSearch();
};

const clearSearch = () => {
  keyword.value = "";
  searchedKeyword.value = "";
  hasSearched.value = false;
};

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};

const goArtist = (id: number) => {
  router.push(`/music/artist/${id}`);
};

const goPlaylist = (id: number) => {
  router.push(`/music/playlist/${id}`);
};

const highlightText = (text: string): string => {
  return highlightSearchMatch(text, searchedKeyword.value);
};

watch(() => route.query.q, (newQ) => {
  if (newQ && typeof newQ === "string") {
    keyword.value = newQ;
    doSearch();
  }
}, { immediate: true });

onMounted(() => {
  searchInput.value?.focus();
});
</script>

<style lang="scss" src="./index.scss" scoped></style>

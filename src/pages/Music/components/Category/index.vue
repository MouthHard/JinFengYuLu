<template>
  <div class="category-page">
    <div class="page-header">
      <h1>音乐分类</h1>
      <p>探索不同类型的音乐，发现更多精彩</p>
    </div>

    <div class="category-tabs">
      <div
        v-for="tab in categoryTabs"
        :key="tab.value"
        class="tab-item"
        :class="{ active: activeTab === tab.value }"
        @click="activeTab = tab.value"
      >
        <span class="tab-icon" v-html="tab.icon"></span>
        <span class="tab-label">{{ tab.label }}</span>
      </div>
    </div>

    <div class="subcategory-filters">
      <div
        v-for="filter in currentSubcategories"
        :key="filter.value"
        class="filter-item"
        :class="{ active: activeSubcategory === filter.value }"
        @click="activeSubcategory = filter.value"
      >
        {{ filter.label }}
      </div>
    </div>

    <div class="content-section">
      <div v-if="activeTab === 'songs'" class="song-grid">
        <div
          v-for="song in filteredItems"
          :key="song.id"
          class="song-card"
          @click="handlePlaySong(song)"
        >
          <div class="song-cover">
            <img loading="lazy" :src="song.cover" :alt="song.name" />
            <div class="song-overlay">
              <div class="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="song-info">
            <h3 class="song-name">{{ song.name }}</h3>
            <p class="song-artist">{{ song.artists.map((a: any) => a.name).join(' / ') }}</p>
            <div class="song-meta">
              <span class="song-album">{{ song.album.name }}</span>
              <span class="song-duration">{{ formatDuration(song.duration) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'artists'" class="artist-grid">
        <div
          v-for="artist in filteredItems"
          :key="artist.id"
          class="artist-card"
        >
          <div class="artist-avatar">
            <img loading="lazy" :src="artist.avatar" :alt="artist.name" />
          </div>
          <div class="artist-info">
            <h3 class="artist-name">{{ artist.name }}</h3>
            <p class="artist-songs">{{ artist.songCount }} 首歌�?/p>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'albums'" class="album-grid">
        <div
          v-for="album in filteredItems"
          :key="album.id"
          class="album-card"
        >
          <div class="album-cover">
            <img loading="lazy" :src="album.cover" :alt="album.name" />
          </div>
          <div class="album-info">
            <h3 class="album-name">{{ album.name }}</h3>
            <p class="album-artist">{{ album.artist }}</p>
            <p class="album-year">{{ album.year }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'mv'" class="mv-grid">
        <div
          v-for="mv in filteredItems"
          :key="mv.id"
          class="mv-card"
        >
          <div class="mv-cover">
            <img loading="lazy" :src="mv.cover" :alt="mv.name" />
            <div class="mv-overlay">
              <div class="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <span class="mv-duration">{{ formatDuration(mv.duration) }}</span>
            </div>
          </div>
          <div class="mv-info">
            <h3 class="mv-name">{{ mv.name }}</h3>
            <p class="mv-artist">{{ mv.artist }}</p>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'radio'" class="radio-grid">
        <div
          v-for="radio in filteredItems"
          :key="radio.id"
          class="radio-card"
        >
          <div class="radio-cover">
            <img loading="lazy" :src="radio.cover" :alt="radio.name" />
            <div class="radio-overlay">
              <div class="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="radio-info">
            <h3 class="radio-name">{{ radio.name }}</h3>
            <p class="radio-desc">{{ radio.description }}</p>
            <div class="radio-meta">
              <span class="radio-listener">{{ radio.listeners }} 听众</span>
              <span class="radio-category">{{ radio.category }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'charts'" class="charts-section">
        <div class="chart-content">
          <div class="chart-header">
            <h2>{{ getChartName(activeSubcategory) }}</h2>
            <p>{{ getChartDescription(activeSubcategory) }}</p>
          </div>
          <div class="chart-list">
            <div
              v-for="(song, index) in filteredItems"
              :key="song.id"
              class="chart-song-item"
              @click="handlePlaySong(song)"
            >
              <span class="chart-rank" :class="{ top3: index < 3 }">{{ index + 1 }}</span>
              <div class="chart-song-info">
                <div class="chart-song-name-row">
                  <span class="chart-song-name">{{ song.name }}</span>
                  <span v-if="song.isVip" class="vip-tag">VIP</span>
                  <span v-if="song.isSq" class="sq-tag">SQ</span>
                </div>
                <div class="chart-song-artist">{{ song.artists.map((a: any) => a.name).join(' / ') }}</div>
              </div>
              <span class="chart-song-duration">{{ formatDuration(song.duration) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { inject } from "vue";
import { songs, artists, albums, mvs } from "@/stores/music";
import { formatDuration } from "@/utils/music";
import type { Song } from "@/types/music";

const playSong = inject<(song: Song) => void>("playSong");

const activeTab = ref('songs');
const activeSubcategory = ref<string>('all');

const categoryTabs = [
  {
    label: '歌曲',
    value: 'songs',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
  },
  {
    label: '歌手',
    value: 'artists',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  },
  {
    label: '专辑',
    value: 'albums',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'
  },
  {
    label: 'MV',
    value: 'mv',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>'
  },
  {
    label: '电台',
    value: 'radio',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  },
  {
    label: '排行�?,
    value: 'charts',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>'
  }
];

const subcategories = {
  songs: [
    { label: '全部', value: 'all' },
    { label: '流行', value: 'pop' },
    { label: '摇滚', value: 'rock' },
    { label: '电子', value: 'electronic' },
    { label: '古典', value: 'classical' },
    { label: '民谣', value: 'folk' },
    { label: '嘻哈', value: 'hiphop' },
    { label: 'R&B', value: 'rnb' },
    { label: '爵士', value: 'jazz' },
    { label: '乡村', value: 'country' },
    { label: '重金属', value: 'metal' },
    { label: '朋克', value: 'punk' }
  ],
  artists: [
    { label: '全部', value: 'all' },
    { label: '流行歌手', value: 'pop' },
    { label: '摇滚歌手', value: 'rock' },
    { label: '电子音乐人', value: 'electronic' },
    { label: '古典音乐家', value: 'classical' },
    { label: '民谣歌手', value: 'folk' },
    { label: '嘻哈歌手', value: 'hiphop' },
    { label: 'R&B歌手', value: 'rnb' },
    { label: '爵士歌手', value: 'jazz' }
  ],
  albums: [
    { label: '全部', value: 'all' },
    { label: '流行专辑', value: 'pop' },
    { label: '摇滚专辑', value: 'rock' },
    { label: '电子专辑', value: 'electronic' },
    { label: '古典专辑', value: 'classical' },
    { label: '民谣专辑', value: 'folk' },
    { label: '嘻哈专辑', value: 'hiphop' },
    { label: 'R&B专辑', value: 'rnb' },
    { label: '爵士专辑', value: 'jazz' }
  ],
  mv: [
    { label: '全部', value: 'all' },
    { label: '流行MV', value: 'pop' },
    { label: '摇滚MV', value: 'rock' },
    { label: '电子MV', value: 'electronic' },
    { label: '嘻哈MV', value: 'hiphop' },
    { label: 'R&B MV', value: 'rnb' },
    { label: '民谣MV', value: 'folk' }
  ],
  charts: [
    { label: '飙升榜', value: 'hot' },
    { label: '新歌榜', value: 'new' },
    { label: '流行指数榜', value: 'pop' },
    { label: '听歌识曲榜', value: 'shazam' },
    { label: 'MV榜', value: 'mv' },
    { label: '地区榜', value: 'region' },
    { label: '内地榜', value: 'china' },
    { label: '港台榜', value: 'hk-tw' },
    { label: '欧美榜', value: 'western' },
    { label: '日本榜', value: 'japan' },
    { label: '韩国榜', value: 'korea' },
    { label: '特色榜', value: 'feature' },
    { label: '说唱榜', value: 'rap' },
    { label: '电音榜', value: 'edm' },
    { label: '摇滚榜', value: 'rock' },
    { label: '民谣榜', value: 'folk' },
    { label: '国风榜', value: 'chinese' },
    { label: '全球榜', value: 'global' }
  ],
  radio: [
    { label: '全部', value: 'all' },
    { label: '流行电台', value: 'pop' },
    { label: '摇滚电台', value: 'rock' },
    { label: '电子电台', value: 'electronic' },
    { label: '古典电台', value: 'classical' },
    { label: '民谣电台', value: 'folk' },
    { label: '嘻哈电台', value: 'hiphop' },
    { label: 'R&B电台', value: 'rnb' },
    { label: '爵士电台', value: 'jazz' },
    { label: '乡村电台', value: 'country' },
    { label: '古典音乐', value: 'classical' },
    { label: '轻音乐', value: 'light' },
    { label: '世界音乐', value: 'world' },
    { label: '儿童音乐', value: 'children' },
    { label: '有声读物', value: 'audio' }
  ]
};

const currentSubcategories = computed(() => {
  return subcategories[activeTab.value as keyof typeof subcategories] || [];
});

const radioData = [
  { id: 1, name: '流行音乐电台', description: '最新流行音乐，让你紧跟时尚潮流', cover: 'https://picsum.photos/seed/radio1/400/400', listeners: '12.5万', category: '流行' },
  { id: 2, name: '摇滚音乐电台', description: '摇滚不死，激情无限', cover: 'https://picsum.photos/seed/radio2/400/400', listeners: '8.3万', category: '摇滚' },
  { id: 3, name: '电子音乐电台', description: '电音舞曲，嗨翻全场', cover: 'https://picsum.photos/seed/radio3/400/400', listeners: '6.7万', category: '电子' },
  { id: 4, name: '古典音乐电台', description: '经典名曲，陶冶情操', cover: 'https://picsum.photos/seed/radio4/400/400', listeners: '4.2万', category: '古典' },
  { id: 5, name: '民谣音乐电台', description: '清新民谣，温暖人心', cover: 'https://picsum.photos/seed/radio5/400/400', listeners: '5.8万', category: '民谣' },
  { id: 6, name: '嘻哈音乐电台', description: '说唱文化，街头潮流', cover: 'https://picsum.photos/seed/radio6/400/400', listeners: '7.1万', category: '嘻哈' },
  { id: 7, name: 'R&B音乐电台', description: '节奏布鲁斯，灵魂之声', cover: 'https://picsum.photos/seed/radio7/400/400', listeners: '5.3万', category: 'R&B' },
  { id: 8, name: '爵士音乐电台', description: '爵士风情，优雅格调', cover: 'https://picsum.photos/seed/radio8/400/400', listeners: '3.9万', category: '爵士' },
  { id: 9, name: '乡村音乐电台', description: '乡村民谣，自然纯真', cover: 'https://picsum.photos/seed/radio9/400/400', listeners: '4.5万', category: '乡村' },
  { id: 10, name: '轻音乐电�?, description: '舒缓放松，减压必�?, cover: 'https://picsum.photos/seed/radio10/400/400', listeners: '9.2�?, category: '轻音�? },
  { id: 11, name: '世界音乐电台', description: '全球音乐，文化交融', cover: 'https://picsum.photos/seed/radio11/400/400', listeners: '3.6万', category: '世界音乐' },
  { id: 12, name: '儿童音乐电台', description: '儿歌童谣，陪伴成长', cover: 'https://picsum.photos/seed/radio12/400/400', listeners: '2.8万', category: '儿童音乐' },
  { id: 13, name: '有声读物电台', description: '精彩故事，用心聆听', cover: 'https://picsum.photos/seed/radio13/400/400', listeners: '6.4万', category: '有声读物' },
  { id: 14, name: '国风音乐电台', description: '中国传统音乐，文化传承', cover: 'https://picsum.photos/seed/radio14/400/400', listeners: '7.8万', category: '国风' },
  { id: 15, name: '电音舞曲电台', description: '派对必备，嗨到天亮', cover: 'https://picsum.photos/seed/radio15/400/400', listeners: '8.9万', category: '电子' },
];

const chartsData = {
  hot: songs.slice(0, 20),
  new: songs.slice(5, 25),
  pop: songs.slice(10, 30),
  shazam: songs.slice(15, 35),
  mv: songs.slice(20, 40),
  region: songs.slice(25, 45),
  china: songs.slice(0, 20),
  'hk-tw': songs.slice(5, 25),
  western: songs.slice(10, 30),
  japan: songs.slice(15, 35),
  korea: songs.slice(20, 40),
  feature: songs.slice(25, 45),
  rap: songs.slice(0, 20),
  edm: songs.slice(5, 25),
  rock: songs.slice(10, 30),
  folk: songs.slice(15, 35),
  chinese: songs.slice(20, 40),
  global: songs.slice(25, 45)
};

const getChartName = (chartKey: any): string => {
  const chartNames: Record<string, string> = {
    hot: '飙升�?,
    new: '新歌�?,
    pop: '流行指数�?,
    shazam: '听歌识曲�?,
    mv: 'MV�?,
    region: '地区�?,
    china: '内地�?,
    'hk-tw': '港台�?,
    western: '欧美�?,
    japan: '日本�?,
    korea: '韩国�?,
    feature: '特色�?,
    rap: '说唱�?,
    edm: '电音�?,
    rock: '摇滚�?,
    folk: '民谣�?,
    chinese: '国风�?,
    global: '全球�?
  };
  return chartNames[chartKey] || '排行�?;
};

const getChartDescription = (chartKey: any): string => {
  const chartDescriptions: Record<string, string> = {
    hot: '实时热门歌曲',
    new: '最新发布歌�?,
    pop: '最受欢迎流行歌�?,
    shazam: '最热门识别歌曲',
    mv: '热门音乐视频',
    region: '各地区热门歌�?,
    china: '中国大陆热门歌曲',
    'hk-tw': '港澳台地区热门歌�?,
    western: '欧美地区热门歌曲',
    japan: '日本地区热门歌曲',
    korea: '韩国地区热门歌曲',
    feature: '特色音乐榜单',
    rap: '说唱音乐热门歌曲',
    edm: '电子音乐热门歌曲',
    rock: '摇滚音乐热门歌曲',
    folk: '民谣音乐热门歌曲',
    chinese: '中国风音乐热门歌�?,
    global: '全球热门歌曲'
  };
  return chartDescriptions[chartKey] || '发现热门音乐，追踪流行趋�?;
};

const filteredItems = computed(() => {
  let result: any[] = [];
  
  switch (activeTab.value) {
    case 'songs':
      result = songs;
      break;
    case 'artists':
      result = artists;
      break;
    case 'albums':
      result = albums;
      break;
    case 'mv':
      result = mvs;
      break;
    case 'radio':
      result = radioData;
      break;
    case 'charts':
      result = chartsData[activeSubcategory.value as keyof typeof chartsData] || songs;
      break;
  }
  
  if (activeTab.value !== 'charts' && activeSubcategory.value !== 'all') {
    result = result.filter((_, index) => index % 4 === ['pop', 'rock', 'electronic', 'classical'].indexOf(activeSubcategory.value));
  }
  
  return result;
});

const handlePlaySong = (song: Song) => {
  playSong?.(song);
};
</script>

<style lang="scss" src="./index.scss" scoped></style>
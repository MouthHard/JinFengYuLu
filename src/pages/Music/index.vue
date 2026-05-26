<template>
  <div class="music-app" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
    <!-- 顶部搜索栏 -->
    <header class="music-header">
      <div class="header-left">
        <button class="menu-toggle" @click="toggleSidebar">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <button class="home-btn" @click="goHome">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
        <div class="header-logo">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
          </svg>
          <span>SoundWave</span>
        </div>
      </div>

      <div class="header-search">
        <div class="search-box">
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            v-model="headerSearchKeyword"
            type="text"
            placeholder="搜索音乐、歌手、专辑"
            @keyup.enter="handleHeaderSearch"
          />
        </div>
      </div>

      <div class="header-right">
        <button class="header-btn">
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
        </button>
        <button class="header-btn">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button>
        <div class="header-user" @click="toggleUserMenu">
          <div class="user-avatar">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <!-- 用户菜单 -->
          <transition name="menu-slide">
            <div v-if="showUserMenu" class="user-menu" @click.stop>
              <div class="menu-section">
                <div class="section-title">账号</div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>个人主页</span>
                </div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                  <span>我的收藏</span>
                  <span class="item-badge">128</span>
                </div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>听歌排行</span>
                </div>
              </div>
              <div class="menu-section">
                <div class="section-title">服务</div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  <span>VIP会员</span>
                </div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    />
                  </svg>
                  <span>音乐商城</span>
                </div>
                <div class="menu-item">
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
                  <span>消息中心</span>
                  <span class="item-badge">3</span>
                </div>
              </div>
              <div class="menu-section">
                <div class="section-title">设置</div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path
                      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51v.17a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.07A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                    />
                  </svg>
                  <span>设置</span>
                </div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>帮助与反馈</span>
                </div>
                <div class="menu-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  <span>退出登录</span>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </header>

    <!-- 左侧侧边栏 -->
    <aside class="music-sidebar" :class="{ collapsed: sidebarCollapsed }">
      <div class="sidebar-content">
        <Sidebar :active-route="currentRoute" @navigate="handleNavigate" />
      </div>
      <button class="sidebar-toggle" @click="toggleSidebar">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
    </aside>

    <!-- 主内容区 -->
    <main class="music-main" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <!-- 音乐盘嵌入式页面 -->
      <transition name="disc-slide">
        <div v-if="showMusicDisc" class="music-disc-embedded">
          <MusicDisc
            :current-song="currentSong"
            :is-playing="isPlaying"
            :current-time="currentTime"
            :lyrics="currentLyrics"
            @close="closeMusicDisc"
          />
        </div>
      </transition>

      <!-- 正常内容区 -->
      <div v-show="!showMusicDisc" class="music-content">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>

    <!-- 底部播放器 -->
    <div class="music-player">
      <PlayerBar
        :current-song="currentSong"
        :is-playing="isPlaying"
        :current-time="currentTime"
        :duration="duration"
        :volume="volume"
        :is-muted="isMuted"
        :play-mode="playMode"
        :show-lyric="showLyric"
        @toggle-play="togglePlay"
        @prev="playPrev"
        @next="playNext"
        @seek="handleSeek"
        @volume-change="handleVolumeChange"
        @toggle-mute="toggleMute"
        @toggle-mode="toggleMode"
        @toggle-lyric="toggleLyric"
        @toggle-disc="toggleMusicDisc"
      />
    </div>

    <LyricOverlay
      v-if="showLyric && currentSong"
      :song="currentSong"
      :is-playing="isPlaying"
      :current-time="currentTime"
      :lyrics="currentLyrics"
      @close="toggleLyric"
      @toggle-play="togglePlay"
      @prev="playPrev"
      @next="playNext"
    />

    <!-- 音频元素 -->
    <audio
      ref="audioRef"
      :src="currentAudioSrc"
      @timeupdate="handleTimeUpdate"
      @loadedmetadata="handleLoadedMetadata"
      @ended="handleEnded"
    ></audio>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted, provide, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import Sidebar from './components/Sidebar/index.vue';
  import PlayerBar from './components/PlayerBar/index.vue';
  import LyricOverlay from './components/LyricOverlay/index.vue';
  import MusicDisc from './components/MusicDisc/index.vue';
  import { songs, lyrics } from '@/stores/music';
  import { getNextIndex, getPrevIndex } from '@/utils/music';
  import type { Song, PlayMode, LyricLine } from '@/typesOfPages/music';

  const getLyricsBySongId = (songId: number): LyricLine[] => {
    return lyrics[songId] || [{ time: 0, text: '暂无歌词' }];
  };

  const router = useRouter();
  const route = useRoute();

  const currentSong = ref<Song | null>(null);
  const isPlaying = ref(false);
  const currentTime = ref(0);
  const duration = ref(0);
  const volume = ref(80);
  const isMuted = ref(false);
  const playMode = ref<PlayMode>('sequence');
  const showLyric = ref(false);
  const showMusicDisc = ref(false);
  const playlist = ref<Song[]>([...songs]);
  const currentIndex = ref(0);
  const audioRef = ref<HTMLAudioElement | null>(null);

  // 侧边栏状态
  const sidebarCollapsed = ref(false);

  // 顶部搜索
  const headerSearchKeyword = ref('');

  // 用户菜单
  const showUserMenu = ref(false);

  let progressTimer: number | null = null;

  const currentRoute = computed(() => route.path);

  const currentLyrics = computed<LyricLine[]>(() => {
    if (!currentSong.value) return [];
    return getLyricsBySongId(currentSong.value.id);
  });

  // 使用在线音频示例
  const currentAudioSrc = computed(() => {
    if (!currentSong.value) return '';
    // 使用一个免费的在线音频示例
    return 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  });

  const playSong = (song: Song) => {
    const index = playlist.value.findIndex((s) => s.id === song.id);
    if (index >= 0) {
      currentIndex.value = index;
    } else {
      playlist.value.push(song);
      currentIndex.value = playlist.value.length - 1;
    }
    currentSong.value = song;
    duration.value = song.duration;
    currentTime.value = 0;
    isPlaying.value = true;
    startProgress();
  };

  const togglePlay = () => {
    if (!currentSong.value) {
      if (playlist.value.length > 0) {
        playSong(playlist.value[0]);
      }
      return;
    }
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) {
      startProgress();
      audioRef.value?.play();
    } else {
      stopProgress();
      audioRef.value?.pause();
    }
  };

  const playPrev = () => {
    if (playlist.value.length === 0) return;
    const prevIdx = getPrevIndex(
      currentIndex.value,
      playlist.value.length,
      playMode.value,
    );
    currentIndex.value = prevIdx;
    currentSong.value = playlist.value[prevIdx];
    duration.value = currentSong.value.duration;
    currentTime.value = 0;
    isPlaying.value = true;
    startProgress();
  };

  const playNext = () => {
    if (playlist.value.length === 0) return;
    const nextIdx = getNextIndex(
      currentIndex.value,
      playlist.value.length,
      playMode.value,
    );
    if (nextIdx === -1) {
      isPlaying.value = false;
      stopProgress();
      return;
    }
    currentIndex.value = nextIdx;
    currentSong.value = playlist.value[nextIdx];
    duration.value = currentSong.value.duration;
    currentTime.value = 0;
    isPlaying.value = true;
    startProgress();
  };

  const handleSeek = (time: number) => {
    currentTime.value = time;
    if (audioRef.value) {
      audioRef.value.currentTime = time;
    }
  };

  const handleVolumeChange = (val: number) => {
    volume.value = val;
    isMuted.value = val === 0;
    if (audioRef.value) {
      audioRef.value.volume = val / 100;
    }
  };

  const toggleMute = () => {
    isMuted.value = !isMuted.value;
    if (audioRef.value) {
      audioRef.value.muted = isMuted.value;
    }
  };

  const toggleMode = () => {
    const modes: PlayMode[] = ['sequence', 'loop', 'random', 'single'];
    const idx = modes.indexOf(playMode.value);
    playMode.value = modes[(idx + 1) % modes.length];
  };

  const toggleLyric = () => {
    showLyric.value = !showLyric.value;
  };

  const toggleMusicDisc = () => {
    showMusicDisc.value = !showMusicDisc.value;
  };

  const closeMusicDisc = () => {
    showMusicDisc.value = false;
  };

  // 音频事件处理
  const handleTimeUpdate = () => {
    if (audioRef.value) {
      currentTime.value = audioRef.value.currentTime;
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.value) {
      duration.value = audioRef.value.duration;
    }
  };

  const handleEnded = () => {
    playNext();
  };

  // 监听播放状态
  watch(isPlaying, (newVal) => {
    if (audioRef.value) {
      if (newVal) {
        audioRef.value.play().catch(() => {
          // 自动播放可能被浏览器阻止
        });
      } else {
        audioRef.value.pause();
      }
    }
  });

  // 监听音量变化
  watch(volume, (newVal) => {
    if (audioRef.value) {
      audioRef.value.volume = newVal / 100;
    }
  });

  const startProgress = () => {
    stopProgress();
    progressTimer = window.setInterval(() => {
      if (currentTime.value < duration.value) {
        currentTime.value += 0.1;
      } else {
        playNext();
      }
    }, 100);
  };

  const stopProgress = () => {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  };

  const handleNavigate = (path: string) => {
    // 导航时关闭音乐碟页面
    showMusicDisc.value = false;
    router.push(path);
  };

  // 侧边栏折叠方法
  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value;
  };

  // 顶部搜索处理
  const handleHeaderSearch = () => {
    if (headerSearchKeyword.value.trim()) {
      router.push({
        path: '/music/search',
        query: { q: headerSearchKeyword.value },
      });
    }
  };

  // 用户菜单切换
  const toggleUserMenu = () => {
    showUserMenu.value = !showUserMenu.value;
  };

  // 返回项目首页
  const goHome = () => {
    router.push('/');
  };

  provide('playSong', playSong);
  provide('playlist', playlist);
  provide('currentSong', currentSong);

  onMounted(() => {
    if (playlist.value.length > 0 && !currentSong.value) {
      currentSong.value = playlist.value[0];
      duration.value = playlist.value[0].duration;
    }
    if (audioRef.value) {
      audioRef.value.volume = volume.value / 100;
    }
  });

  onUnmounted(() => {
    stopProgress();
  });
</script>

<style scoped src="./index.scss" lang="scss"></style>

<template>
  <aside class="sidebar">
    <div class="sidebar-glow"></div>

    <nav class="sidebar-nav">
      <div class="nav-section">
        <div class="nav-section-title">
          <span class="title-icon">✨</span>
          <span>推荐</span>
        </div>
        <div
          v-for="item in recommendNav"
          :key="item.route"
          class="nav-item"
          :class="{ active: activeRoute === item.route }"
          @click="$emit('navigate', item.route)"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-label">{{ item.label }}</span>
          <div class="nav-shine"></div>
        </div>
        <div
          v-for="item in musicCategoryNav"
          :key="item.route"
          class="nav-item"
          :class="{ active: activeRoute === item.route }"
          @click="$emit('navigate', item.route)"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-label">{{ item.label }}</span>
          <div class="nav-shine"></div>
        </div>
      </div>

      <div class="nav-section">
        <div class="nav-section-title">
          <span class="title-icon">❤️</span>
          <span>我的</span>
        </div>
        <div
          v-for="item in myNav"
          :key="item.route"
          class="nav-item"
          :class="{ active: activeRoute === item.route }"
          @click="$emit('navigate', item.route)"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-label">{{ item.label }}</span>
          <div class="nav-shine"></div>
        </div>
      </div>

      <div class="nav-section">
        <div class="nav-section-title">
          <span class="title-icon">🎵</span>
          <span>歌单</span>
        </div>
        <div
          v-for="item in playlistNav"
          :key="item.route"
          class="nav-item playlist-item"
          :class="{ active: activeRoute === item.route }"
          @click="$emit('navigate', item.route)"
        >
          <span class="nav-icon" v-html="item.icon"></span>
          <span class="nav-label">{{ item.label }}</span>
          <div class="nav-shine"></div>
        </div>
      </div>


    </nav>
  </aside>
</template>

<script setup lang="ts">
  defineProps<{
    activeRoute: string;
  }>();

  const emit = defineEmits<{
    navigate: [path: string];
  }>();

  const recommendNav = [
    {
      label: '发现音乐',
      route: '/music/discover',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>',
    },
  ];

  const myNav = [
    {
      label: '我喜欢的音乐',
      route: '/music/mine/liked',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    },
    {
      label: '最近播放',
      route: '/music/mine/recent',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    },
    {
      label: '我的收藏',
      route: '/music/mine/collection',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    },
    {
      label: '本地音乐',
      route: '/music/mine/local',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    },
  ];

  const playlistNav = [
    {
      label: '深夜独白',
      route: '/music/playlist/2',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    },
    {
      label: '欧美热单',
      route: '/music/playlist/3',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    },
  ];

  const musicCategoryNav = [
    {
      label: '分类',
      route: '/music/category',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    },
  ];
</script>

<style lang="scss" src="./index.scss" scoped></style>

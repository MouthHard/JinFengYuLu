<template>
  <header class="landscape-header">
    <div class="logo" @click="router.push('/landscape/home')">
      <div class="logo-icon">
        <CameraIcon :stroke-width="2" />
      </div>
      <span class="logo-text">风景</span>
    </div>

    <nav class="category-nav">
      <router-link
        v-for="nav in mainNavs"
        :key="nav.path"
        :to="nav.path"
        class="nav-item"
        :class="{ active: isActiveNav(nav.path) }"
      >
        <div v-if="isActiveNav(nav.path)" class="active-indicator-left">
          <CameraIcon :stroke-width="2.5" />
        </div>
        <span class="nav-icon">{{ nav.icon }}</span>
        <span class="nav-text">{{ nav.name }}</span>
        <div v-if="isActiveNav(nav.path)" class="active-indicator-right">
          <SunAltIcon />
        </div>
      </router-link>
    </nav>

    <SearchBox />

    <div class="user-actions">
      <button
        class="action-btn upload-btn"
        title="上传作品"
        @click="emit('open-upload')"
      >
        <UploadIcon :stroke-width="2" />
        <span class="btn-text">上传</span>
      </button>
      <button
        class="action-btn settings-btn"
        title="设置"
        @click="goToSettings"
      >
        <SettingsIcon :stroke-width="2" />
        <span class="btn-text">设置</span>
      </button>
      <button
        class="action-btn home-btn"
        title="返回项目首页"
        @click="goToHome"
      >
        <HomeIcon :stroke-width="2" />
        <span class="btn-text">首页</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router';
  import CameraIcon from '../../icon/common/CameraIcon.vue';
  import UploadIcon from '../../icon/header/UploadIcon.vue';
  import HomeIcon from '../../icon/header/HomeIcon.vue';
  import SettingsIcon from '../../icon/header/SettingsIcon.vue';
  import SunAltIcon from '../../icon/header/SunAltIcon.vue';
  import SearchBox from '../common/SearchBox/index.vue';
  import { mainNavs } from '@/utils/landscape/constants';

  const router = useRouter();
  const route = useRoute();
  const emit = defineEmits<{
    'open-upload': [];
  }>();

  const isActiveNav = (path: string) => {
    return route.path === path || route.path.startsWith(path + '/');
  };

  const goToHome = () => {
    router.push('/');
  };

  const goToSettings = () => {
    router.push('/landscape/setting');
  };
</script>

<style scoped lang="scss" src="./index.scss" />

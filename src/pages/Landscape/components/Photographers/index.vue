<template>
  <div class="photographers-page">
    <!-- 宇宙背景 -->
    <div class="cosmic-background">
      <div class="cosmic-gradient"></div>
      <div class="cosmic-particles"></div>
      <div class="cosmic-overlay"></div>
    </div>

    <!-- 页面头部 -->
    <PageHeader />

    <!-- 精选作品展示 -->
    <FeaturedWorks @preview="openWorkPreview" />

    <!-- 推荐摄影师 -->
    <FeaturedPhotographers 
      @preview="openWorkPreview"
      @toggle-follow="toggleFollow"
    />

    <!-- 新晋摄影师 -->
    <NewPhotographers 
      @preview="openWorkPreview"
      @toggle-follow="toggleFollow"
    />

    <!-- 所有摄影师 -->
    <AllPhotographers @toggle-follow="toggleFollow" />

    <!-- 摄影师排行榜 -->
    <RankingSection />

    <!-- 作品预览模态框 -->
    <WorkPreviewModal 
      :preview-work="previewWork"
      @close="closeWorkPreview"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineOptions({ name: 'Photographers' });
import { showMessage } from '@/utils/landscape';
import { useInteractionStore } from '@/stores/landscape';
import type { Photographer } from '@/typesOfPages/landscape';

import PageHeader from './components/PageHeader/index.vue';
import FeaturedWorks from './components/FeaturedWorks/index.vue';
import FeaturedPhotographers from './components/FeaturedPhotographers/index.vue';
import NewPhotographers from './components/NewPhotographers/index.vue';
import AllPhotographers from './components/AllPhotographers/index.vue';
import RankingSection from './components/RankingSection/index.vue';
import WorkPreviewModal from './components/WorkPreviewModal/index.vue';

interface PreviewWork {
  image?: string;
  cover?: string;
  type?: string;
  duration?: string;
  title?: string;
  author?: string;
}

const previewWork = ref<PreviewWork | null>(null);
const interactionStore = useInteractionStore();

const toggleFollow = (photographer: Photographer) => {
  const photographerId = String(photographer.id);
  const isAdded = interactionStore.toggleFollowPhotographer(photographerId);
  if (isAdded) {
    showMessage.follow.success(photographer.name);
  } else {
    showMessage.follow.cancel(photographer.name);
  }
};

const openWorkPreview = (work: string | PreviewWork) => {
  if (typeof work === 'string') {
    previewWork.value = { image: work, type: 'photo' };
  } else {
    previewWork.value = work;
  }
};

const closeWorkPreview = () => {
  previewWork.value = null;
};
</script>

<style scoped lang="scss" src="./index.scss" />

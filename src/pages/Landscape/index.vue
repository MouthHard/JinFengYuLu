<template>
  <div id="landscape-app">
    <StarBackground />

    <Header @open-upload="showUploadModal = true" />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViewsArray" :max="5">
          <component
            :is="Component"
            :items="filteredItems"
            :search-query="searchQuery"
            @update:search-query="searchQuery = $event"
            @open-detail="openDetail"
          />
        </keep-alive>
      </router-view>
    </main>

    <!-- 上传弹窗 -->
    <UploadModal
      :visible="showUploadModal"
      @close="showUploadModal = false"
      @upload="handleUpload"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, defineAsyncComponent } from 'vue';
  import {
    useLandscapeDataStore,
    useInteractionStore,
  } from '@/stores/landscape';
  import type { LandscapeItem } from '@/typesOfPages/landscape';
  import { cachedViews, MIN_LOAD_TIME } from '@/utils/landscape/constants';
  import { convertToLandscapeItem } from '@/utils/landscape';

  const cachedViewsArray = [...cachedViews];

  const Header = defineAsyncComponent(
    () => import('./components/Header/index.vue'),
  );

  const StarBackground = defineAsyncComponent(
    () => import('./components/common/StarBackground/index.vue'),
  );

  const UploadModal = defineAsyncComponent(
    () => import('./components/common/UploadModal/index.vue'),
  );

  const isPageLoading = ref(true);
  const searchQuery = ref('');
  const selectedItem = ref<LandscapeItem | null>(null);
  const showUploadModal = ref(false);

  const dataStore = useLandscapeDataStore();
  const interactionStore = useInteractionStore();

  const landscapeItems = ref<LandscapeItem[]>([]);
  const favoriteItems = ref<LandscapeItem[]>([]);

  onMounted(() => {
    const startTime = performance.now();

    const images = dataStore.getAllImages();
    const videos = dataStore.getAllVideos();

    landscapeItems.value = [
      ...images.map(convertToLandscapeItem),
      ...videos.map(convertToLandscapeItem),
    ];

    interactionStore.registerBatch(
      landscapeItems.value.map((item) => ({
        id: String(item.id),
        counts: {
          likes: item.likes,
          loves: item.loves,
          views: item.views,
          favorites: item.bookmarks,
          shares: item.shares,
        },
      })),
    );

    const savedFavorites = localStorage.getItem('landscape-favorites');
    if (savedFavorites) {
      try {
        favoriteItems.value = JSON.parse(savedFavorites);
      } catch (e) {
        console.error('Failed to parse favorites:', e);
      }
    }

    const loadTime = performance.now() - startTime;
    const delay = Math.max(0, MIN_LOAD_TIME - loadTime);

    setTimeout(() => {
      isPageLoading.value = false;
    }, delay);
  });

  const filteredItems = computed(() => {
    let items = landscapeItems.value;

    if (searchQuery.value) {
      const lowerQuery = searchQuery.value.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.location.toLowerCase().includes(lowerQuery) ||
          item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
      );
    }

    return items;
  });

  const openDetail = (item: LandscapeItem) => {
    selectedItem.value = item;
  };

  const handleUpload = (file: File) => {
    console.log('上传文件:', file.name);
    showUploadModal.value = false;
  };
</script>

<style scoped lang="scss" src="./index.scss" />

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
  import { ref, shallowRef, computed, onMounted, watch, defineAsyncComponent } from 'vue';
  import {
    useLandscapeDataStore,
    useInteractionStore,
  } from '@/stores/landscape';
  import type { LandscapeItem } from '@/types/landscape';
  import { cachedViews } from '@/utils/landscape/constants';
  import { convertToLandscapeItem } from '@/utils/landscape';
  import { debounce } from '@/utils/landscape/debounce';

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

  const searchQuery = ref('');
  const debouncedQuery = ref('');
  const showUploadModal = ref(false);

  const dataStore = useLandscapeDataStore();
  const interactionStore = useInteractionStore();

  const landscapeItems = shallowRef<LandscapeItem[]>([]);

  watch(searchQuery, debounce((val: string) => {
    debouncedQuery.value = val;
  }, 200));

  onMounted(async () => {
    await dataStore.ensureLoaded();

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
  });

  const filteredItems = computed(() => {
    let items = landscapeItems.value;

    if (debouncedQuery.value) {
      const lowerQuery = debouncedQuery.value.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.location.toLowerCase().includes(lowerQuery) ||
          item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
          (item.author || '').toLowerCase().includes(lowerQuery) ||
          (item.description || '').toLowerCase().includes(lowerQuery),
      );
    }

    return items;
  });

  const openDetail = (_item: LandscapeItem) => {};

  const handleUpload = (file: File) => {
    console.log('上传文件:', file.name);
    showUploadModal.value = false;
  };
</script>

<style scoped lang="scss" src="./index.scss" />

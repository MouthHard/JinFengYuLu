<template>
  <div class="culture-scenery">
    <SearchFilterSection
      :search-query="searchQuery"
      :selected-theme="selectedTheme"
      :get-theme-count="getThemeCount"
      @search-query="handleSearchQuery"
      @selected-theme="handleThemeChange"
    />

    <SpotsList :spots="filteredSpots" />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, watch } from 'vue';
  import SearchFilterSection from './search-filter-section/index.vue';
  import SpotsList from './spots-list/index.vue';
  import { loadSceneryData } from '../../../data/dataLoader';
  import type { ScenerySpot } from '@/typesOfPages/travelGuide';

  const props = defineProps<{
    provinceId: string;
  }>();

  const searchQuery = ref('');
  const selectedTheme = ref('');
  const cultureSpots = ref<ScenerySpot[]>([]);
  const themeMapping: Record<string, string[]> = {
    historical: ['历史', '古迹', '古建筑', '宫殿', '城墙', '寺庙'],
    religious: ['宗教', '佛教', '道教', '教堂', '寺庙', '道观'],
    folk: ['民俗', '传统', '节日', '庙会', '民俗'],
    art: ['艺术', '文化', '博物馆', '美术馆', '艺术'],
    modern: ['现代', '都市', '建筑', '广场', '现代'],
  };
  const filteredSpots = computed(() => {
    let spots = cultureSpots.value;
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      spots = spots.filter(
        (spot: ScenerySpot) =>
          spot.name.toLowerCase().includes(query) ||
          spot.description.toLowerCase().includes(query) ||
          spot.location.toLowerCase().includes(query) ||
          spot.tags.some((tag: string) => tag.toLowerCase().includes(query)),
      );
    }

    if (selectedTheme.value) {
      spots = spots.filter((spot: ScenerySpot) => {
        const keywords = themeMapping[selectedTheme.value] || [];
        return keywords.some(
          (keyword: string) =>
            spot.tags.some((tag: string) => tag.includes(keyword)) ||
            spot.name.includes(keyword) ||
            spot.description.includes(keyword),
        );
      });
    }

    return spots;
  });

  const getThemeCount = (theme: string) => {
    if (!theme) return cultureSpots.value.length;

    const keywords = themeMapping[theme] || [];
    return cultureSpots.value.filter((spot: ScenerySpot) =>
      keywords.some(
        (keyword: string) =>
          spot.tags.some((tag: string) => tag.includes(keyword)) ||
          spot.name.includes(keyword) ||
          spot.description.includes(keyword),
      ),
    ).length;
  };

  const handleSearchQuery = (value: string) => {
    searchQuery.value = value;
  };

  const handleThemeChange = (value: string) => {
    selectedTheme.value = value;
  };

  const loadCultureData = async () => {
    try {
      const data = await loadSceneryData(props.provinceId);
      if (data) {
        cultureSpots.value = data.spots.filter(
          (spot: ScenerySpot) => spot.type === 'culture',
        );
      } else {
        cultureSpots.value = [];
      }
    } catch (error) {
      console.error('Failed to load culture scenery data:', error);
      cultureSpots.value = [];
    }
  };

  onMounted(() => {
    loadCultureData();
  });

  watch(
    () => props.provinceId,
    () => {
      loadCultureData();
    }
  );
</script>

<style scoped src="./index.scss" />

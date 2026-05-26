<template>
  <div class="travel-guide-container">
    <StickyHeader
      :current-province-capital="currentProvinceCapital"
      :weather-icon="weatherIcon"
      :weather-description="weatherDescription"
      :all-tags="allTags"
      :province-description="provinceDescription"
      :current-province-name="currentProvinceName"
      :tabs="tabs"
      :active-tab="activeTab"
      @update:active-tab="activeTab = $event"
      @back-home="router.push('/')"
    />

    <ProvinceSidebar
      :province-selector-icon="provinceSelectorIcon"
      :search-query="searchQuery"
      :selected-region="selectedRegion"
      :regions="regions"
      :filtered-provinces="filteredProvinces"
      :selected-province-id="selectedProvinceId"
      @update:search-query="searchQuery = $event"
      @update:selected-region="selectedRegion = $event"
      @select-province="selectProvince($event)"
    />

    <main class="main-content">
      <FoodModule
        v-if="activeTab === 'food'"
        :province-id="selectedProvinceId"
      />
      <SceneryModule
        v-else-if="activeTab === 'scenery'"
        :province-id="selectedProvinceId"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, provide, type Ref } from 'vue';
  import { useRouter } from 'vue-router';

  import type { Tab } from '@/typesOfPages/travelGuide/index.ts';
  import { provinces as provincesData } from './data/provinces.ts';
  import {
    getWeatherByProvince,
    filterProvinces,
    extractRegions,
    DEFAULT_TAB_ID,
    DEFAULT_REGION,
  } from '@/utils/travelGuide';
  import FoodModule from './components/food/index.vue';
  import SceneryModule from './components/scenery/index.vue';
  import StickyHeader from './components/sticky-header/index.vue';
  import ProvinceSidebar from './components/province-sidebar/index.vue';
  import { FoodIcon, SceneryIcon, ProvinceIcon } from './icons';

  const router = useRouter();
  // 默认选择第一个省份
  const selectedProvinceId: Ref<string> = ref(provincesData[0].id);
  // 默认选择美食标签页
  const activeTab: Ref<string> = ref(DEFAULT_TAB_ID);

  // 标签页定义
  const tabs: Tab[] = [
    { id: 'food', name: '美食', icon: FoodIcon },
    { id: 'scenery', name: '风光', icon: SceneryIcon },
  ];

  // 省份选择器图标
  const provinceSelectorIcon = ProvinceIcon;

  // 提供省份选择状态给子组件
  provide('selectedProvinceId', selectedProvinceId);

  // 使用 computed 缓存当前省份
  const currentProvince = computed(() => {
    return provincesData.find((p) => p.id === selectedProvinceId.value);
  });

  // 计算属性：当前省份名称
  const currentProvinceName = computed(() => {
    return currentProvince.value?.name || '';
  });

  // 计算属性：当前省份标签（包括地区）
  const allTags = computed(() => {
    if (!currentProvince.value) return [];
    return [
      currentProvince.value.region,
      ...(currentProvince.value.tags || []),
    ];
  });

  // 计算属性：当前省份描述
  const provinceDescription = computed(() => {
    return currentProvince.value?.description || '';
  });

  // 计算属性：当前省份省会
  const currentProvinceCapital = computed(() => {
    return currentProvince.value?.capital || '';
  });

  // ✅ 优化：使用工具函数获取天气信息（消除重复的哈希计算逻辑）
  const weatherInfo = computed(() => {
    const province = currentProvince.value;
    if (!province) return getWeatherByProvince('');
    return getWeatherByProvince(province.id);
  });
  const weatherIcon = computed(() => weatherInfo.value.icon);
  const weatherDescription = computed(() => weatherInfo.value.description);

  // 省份选择器相关状态
  const selectedRegion: Ref<string> = ref(DEFAULT_REGION);
  const searchQuery: Ref<string> = ref('');

  // ✅ 优化：使用工具函数获取地区列表
  const regions = computed(() => extractRegions(provincesData));

  // ✅ 优化：使用工具函数过滤省份（消除重复的过滤逻辑）
  const filteredProvinces = computed(() =>
    filterProvinces(provincesData, selectedRegion.value, searchQuery.value),
  );

  const selectProvince = (provinceId: string): void => {
    selectedProvinceId.value = provinceId;
  };
</script>

<style scoped src="./index.scss" lang="scss"></style>

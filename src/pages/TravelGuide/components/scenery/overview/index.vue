<template>
  <div class="scenery-overview">
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>加载�?..</p>
    </div>

    <template v-else-if="sceneryData">
      <Gallery :scenery-data="sceneryData" />

      <ControlPanel :scenery-data="sceneryData" />

      <RouteRecommendation :scenery-data="sceneryData" />
    </template>

    <!-- 数据加载失败 -->
    <div v-else class="error-state">
      <p>加载数据失败，请重试</p>
      <button @click="loadData(provinceId)">重试</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import Gallery from './gallery/index.vue';
  import ControlPanel from './control-panel/index.vue';
  import RouteRecommendation from './route-recommendation/index.vue';
  import { loadProvinceData } from '../../../data/dataLoader';
  import type { SceneryData } from '@/types/travelGuide';

  const props = defineProps<{
    provinceId: string;
  }>();

  const sceneryData = ref<SceneryData | null>(null);
  const loading = ref(false);

  // 加载省份数据
  const loadData = async (province: string) => {
    loading.value = true;
    const data = await loadProvinceData(province);
    sceneryData.value = data;
    loading.value = false;
  };

  // 监听省份变化
  watch(
    () => props.provinceId,
    (newProvince) => {
      loadData(newProvince);
    },
    { immediate: true },
  );

  // 初始加载
  onMounted(() => {
    loadData(props.provinceId);
  });
</script>

<style scoped lang="scss" src="./index.scss"></style>

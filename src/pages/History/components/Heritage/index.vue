<template>
  <div class="heritage-container">
    <!-- 左侧分类标签 -->
    <HeritageTabs v-model:active-tab="activeTab" />

    <!-- 中间遗产卡片区域 -->
    <HeritageCards
      :active-tab="activeTab"
      @select-heritage="handleSelectHeritage"
    />

    <!-- 右侧遗产详情 -->
    <HeritageDetail
      :selected-heritage="selectedHeritage"
      @select-heritage="handleSelectRelatedHeritage"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useHistoryDataStore } from '@/stores/history';
  import type { CulturalHeritageItem } from '@/types/history';
  import HeritageTabs from './components/HeritageTabs/index.vue';
  import HeritageCards from './components/HeritageCards/index.vue';
  import HeritageDetail from './components/HeritageDetail/index.vue';

  const historyStore = useHistoryDataStore();

  // 响应式数�?  const activeTab = ref<string>('all');
  const selectedHeritage = ref<CulturalHeritageItem | null>(null);

  // 方法
  const handleSelectHeritage = (heritage: CulturalHeritageItem) => {
    selectedHeritage.value = heritage;
  };

  const handleSelectRelatedHeritage = (id: string) => {
    // 使用find方法查找遗产，性能更优
    const heritage = historyStore.heritage.find((item) => item.id === id);
    if (heritage) {
      selectedHeritage.value = heritage;
      // 同时更新activeTab到对应分�?      activeTab.value = heritage.category || 'all';
    }
  };

  // 生命周期
  onMounted(() => {
    if (historyStore.heritage.length > 0) {
      selectedHeritage.value = historyStore.heritage[0];
    }
  });
</script>

<style lang="scss" scoped>
  @use './index.scss';
</style>

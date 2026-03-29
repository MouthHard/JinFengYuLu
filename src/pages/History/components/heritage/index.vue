<template>
  <div class="heritage-container">
    <!-- 左侧分类标签 -->
    <HeritageTabs v-model:activeTab="activeTab" />

    <!-- 中间遗产卡片区域 -->
    <HeritageCards
      :activeTab="activeTab"
      @select-heritage="handleSelectHeritage"
    />

    <!-- 右侧遗产详情 -->
    <HeritageDetail
      :selectedHeritage="selectedHeritage"
      @select-heritage="handleSelectRelatedHeritage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  culturalHeritage,
  type CulturalHeritageItem,
} from "../../data/heritage";
import HeritageTabs from "./components/HeritageTabs/Index.vue";
import HeritageCards from "./components/HeritageCards/Index.vue";
import HeritageDetail from "./components/HeritageDetail/Index.vue";

// 响应式数据
const activeTab = ref<string>("all");
const selectedHeritage = ref<CulturalHeritageItem | null>(null);

// 方法
const handleSelectHeritage = (heritage: CulturalHeritageItem) => {
  selectedHeritage.value = heritage;
};

const handleSelectRelatedHeritage = (id: string) => {
  // 使用find方法查找遗产，性能更优
  const heritage = culturalHeritage.find((item) => item.id === id);
  if (heritage) {
    selectedHeritage.value = heritage;
    // 同时更新activeTab到对应分类
    activeTab.value = heritage.category || "all";
  }
};

// 生命周期
onMounted(() => {
  if (culturalHeritage.length > 0) {
    selectedHeritage.value = culturalHeritage[0];
  }
});
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>

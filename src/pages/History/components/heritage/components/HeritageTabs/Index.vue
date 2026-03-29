<template>
  <div class="heritage-tabs">
    <!-- 左侧云纹装饰 -->
    <div class="cloud-pattern left"></div>
    <h2 class="heritage-title">文化遗产</h2>
    <p class="heritage-subtitle">中华文明的珍贵遗产，人类共同的文化财富</p>
    <div class="tabs-list">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-item"
        :class="{ active: activeTab === tab.id }"
        @click="switchTab(tab.id)"
      >
        <span class="tab-name">{{ tab.name }}</span>
        <span class="tab-count">{{ tab.count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { culturalHeritage } from "../../../../data/heritage";

interface Tab {
  id: string;
  name: string;
  count: number;
}

// 分类名称映射
const categoryNameMap: Record<string, string> = {
  site: "文化遗址",
  building: "古建筑",
  artifact: "文物",
  intangible: "非遗",
};

// 响应式数据
const activeTab = computed({
  get: () => props.activeTab,
  set: (value) => emit("update:activeTab", value),
});

// 动态计算各分类数量
const categoryCounts = computed(() => {
  const counts: Record<string, number> = {};
  culturalHeritage.forEach((item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });
  return counts;
});

const tabs = computed<Tab[]>(() => [
  { id: "all", name: "全部遗产", count: culturalHeritage.length },
  ...Object.entries(categoryCounts.value).map(([id, count]) => ({
    id,
    name: categoryNameMap[id] || id,
    count,
  })),
]);

// Props
const props = defineProps<{
  activeTab: string;
}>();

// Emits
const emit = defineEmits<{
  "update:activeTab": [value: string];
}>();

// 方法
const switchTab = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>

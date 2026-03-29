<template>
  <div class="historical-figures">
    <div class="fixed-header">
      <FigureHeader />
      <FilterBar
        :active-category="activeCategory"
        @category-change="handleCategoryChange"
      />
    </div>
    <div class="figures-masonry">
      <FigureCard
        v-for="(figure, index) in filteredFigures"
        :key="figure.id"
        :figure="figure"
        :delay="index * 0.08"
        @open-detail="openDetail"
      />
    </div>
    <FigureModal :selected-figure="selectedFigure" @close="closeDetail" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { historicalFigures } from "../../data/figures";
import FigureHeader from "./components/FigureHeader/index.vue";
import FilterBar from "./components/FilterBar/index.vue";
import FigureCard from "./components/FigureCard/index.vue";
import FigureModal from "./components/FigureModal/index.vue";
import type { HistoricalFigure } from "@/types/history";

// 响应式状态
const selectedFigure = ref<HistoricalFigure | null>(null);

// 响应式状态：当前激活的分类
const activeCategory = ref("all");

// 计算属性：根据分类过滤人物
const filteredFigures = computed(() => {
  if (activeCategory.value === "all") {
    return historicalFigures;
  }
  return historicalFigures.filter(
    (f: HistoricalFigure) => f.category === activeCategory.value,
  );
});

// 打开详情弹窗
const openDetail = (figure: HistoricalFigure) => {
  if (!figure) return;
  selectedFigure.value = figure;
  document.body.style.overflow = "hidden";
};

// 关闭详情弹窗
const closeDetail = () => {
  selectedFigure.value = null;
  document.body.style.overflow = "";
};

// 键盘事件处理：ESC键关闭弹窗
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && selectedFigure.value) {
    closeDetail();
  }
};

// 处理分类变化事件
const handleCategoryChange = (category: string) => {
  activeCategory.value = category;
};

// 生命周期钩子：挂载时添加键盘事件监听器
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

// 生命周期钩子：卸载时移除键盘事件监听器
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped lang="scss">
@use "./index.scss" as *;
</style>

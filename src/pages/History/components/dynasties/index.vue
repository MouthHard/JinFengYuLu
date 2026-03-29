<template>
  <div class="dynasties-container">
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 左侧：时间轴导航 -->
      <TimelineNav
        :dynasties="filteredDynasties"
        v-model="selectedCategory"
        :selected-id="selectedDynasty?.id || null"
        :filtered-count="filteredDynasties.length"
        @select="selectDynasty"
      />

      <!-- 右侧：详情展示 -->
      <DetailPanel
        :dynasty="selectedDynasty"
        :duration-years="
          selectedDynasty ? getDynastyDuration(selectedDynasty) : 0
        "
        @close="selectedDynasty = null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { dynastiesData } from "../../data/dynasties";
import TimelineNav from "./components/TimelineNav/index.vue";
import DetailPanel from "./components/DetailPanel/index.vue";
import { HistoryUtils } from "@/utils";

interface Dynasty {
  id: string;
  name: string;
  period: string;
  era: string;
  periodTag: string;
  isUnified?: boolean;
  description?: string;
  highlights?: string[];
  mapUrl?: string;
  mapDescription?: string;
  capital?: string;
  location?: string;
  ethnicGroup?: string;
  founder?: string;
  startYear?: number;
  endYear?: number;
}

const selectedDynasty = ref<Dynasty | null>(null);
const selectedCategory = ref("");

// 计算持续时间（年）
const getDynastyDuration = (dynasty: Dynasty): number => {
  return HistoryUtils.getDurationYears(dynasty.period);
};

// 按时间顺序排序
const sortedDynasties = computed(() => {
  return [...dynastiesData].sort((a, b) => {
    return (
      HistoryUtils.getStartYear(a.period) - HistoryUtils.getStartYear(b.period)
    );
  });
});

// 过滤后的朝代列表
const filteredDynasties = computed(() => {
  let result = sortedDynasties.value;

  // 按分类筛选
  if (selectedCategory.value) {
    result = result.filter((dynasty) => {
      return dynasty.periodTag === selectedCategory.value;
    });
  }

  return result;
});

// 监听过滤后的朝代列表变化，默认选择第一个
watch(
  filteredDynasties,
  (newDynasties) => {
    if (newDynasties.length > 0) {
      selectedDynasty.value = newDynasties[0];
    } else {
      selectedDynasty.value = null;
    }
  },
  { immediate: true },
);

// 选择朝代
const selectDynasty = (dynasty: Dynasty) => {
  selectedDynasty.value = dynasty;
};
</script>

<style scoped lang="scss">
@use "./index.scss" as *;
</style>

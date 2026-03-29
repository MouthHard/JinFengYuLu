<template>
  <section class="exhibition-list-container">
    <div class="exhibition-main">
      <div class="exhibition-left">
        <!-- 头部筛选区域 -->
        <ExhibitionHeader
          v-model:statusFilter="statusFilter"
          v-model:themeFilter="themeFilter"
          :categories="categories"
          @search="handleSearch"
        />
        <!-- 可滚动的展览卡片库 -->
        <ExhibitionCardList
          :exhibitions="filteredExhibitions"
          :selectedExhibitionId="selectedExhibition?.id"
          @selectExhibition="selectExhibition"
        />
      </div>

      <!-- 右侧模块 -->
      <div class="exhibition-right">
        <ExhibitionDetail :selectedExhibition="selectedExhibition" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { getExhibitionsByMuseumId } from "@/pages/Museum/data";
import type { Exhibition, Museum } from "@/types/museum/index";

// 导入子组件
import ExhibitionHeader from "./components/ExhibitionHeader/index.vue";
import ExhibitionCardList from "./components/ExhibitionCardList/index.vue";
import ExhibitionDetail from "./components/ExhibitionDetail/index.vue";

// 接收博物馆参数
interface Props {
  museum: Museum;
}

const props = defineProps<Props>();

const statusFilter = ref("all");
const themeFilter = ref("all");
const selectedExhibition = ref<Exhibition | null>(null);
const searchQuery = ref("");

// 选择展览
const selectExhibition = (exhibition: any) => {
  selectedExhibition.value = exhibition as Exhibition;
};

// 处理搜索
const handleSearch = (query: string) => {
  searchQuery.value = query;
};

// 展览分类数据
const categories = ref([
  {
    id: 1,
    name: "历史文化",
    count: 12,
    icon: "🏛️",
  },
  {
    id: 2,
    name: "艺术精品",
    count: 8,
    icon: "🎨",
  },
  {
    id: 3,
    name: "科技考古",
    count: 5,
    icon: "🔬",
  },
  {
    id: 4,
    name: "民俗风情",
    count: 7,
    icon: "🎭",
  },
]);

// 获取当前博物馆的展览数据
const allExhibitions = computed(() => {
  return getExhibitionsByMuseumId(props.museum.id);
});

// 筛选后的展览
const filteredExhibitions = computed(() => {
  let result = allExhibitions.value;

  // 状态筛选
  if (statusFilter.value !== "all") {
    switch (statusFilter.value) {
      case "hot":
        result = result.filter((item) => (item as any).status === "热门");
        break;
      case "latest":
        result = result.filter((item) => (item as any).status === "最新");
        break;
      case "ending":
        result = result.filter((item) => (item as any).status === "即将结束");
        break;
      case "planning":
        result = result.filter((item) => (item as any).status === "筹备中");
        break;
      case "historical":
        result = result.filter((item) => (item as any).status === "已结束");
        break;
    }
  }

  // 主题筛选
  if (themeFilter.value !== "all") {
    const selectedCategoryName = categories.value.find(
      (cat) => cat.id.toString() === themeFilter.value,
    )?.name;
    result = result.filter((item) => item.category === selectedCategoryName);
  }

  // 搜索筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.location && item.location.toLowerCase().includes(query)) ||
        (item.category && item.category.toLowerCase().includes(query)) ||
        ((item as any).status &&
          (item as any).status.toLowerCase().includes(query))
      );
    });
  }

  return result;
});

// 监听筛选结果变化，当结果为空时清空选中的展览详情
watch(filteredExhibitions, (newFilteredExhibitions) => {
  if (newFilteredExhibitions.length === 0) {
    selectedExhibition.value = null;
  } else {
    // 如果当前选中的展览不在筛选结果中，也清空选中状态
    if (selectedExhibition.value) {
      const isSelectedInResults = newFilteredExhibitions.some(
        (exhibition) => exhibition.id === selectedExhibition.value?.id,
      );
      if (!isSelectedInResults) {
        selectedExhibition.value = null;
      }
    }
  }
});
</script>

<style lang="scss" scoped src="./index.scss"></style>

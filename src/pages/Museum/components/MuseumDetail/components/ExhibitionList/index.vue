<template>
  <section class="exhibition-list-container">
    <div class="exhibition-main">
      <div class="exhibition-left">
        <ExhibitionHeader
          v-model:status-filter="statusFilter"
          v-model:theme-filter="themeFilter"
          :categories="categories"
          @search="handleSearch"
        />

        <ExhibitionCardList
          :exhibitions="filteredExhibitions"
          :selected-exhibition-id="selectedExhibition?.id"
          @select-exhibition="selectExhibition"
        />
      </div>

      <div class="exhibition-right">
        <ExhibitionDetail :selected-exhibition="selectedExhibition" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import { useMuseumDataStore } from '@/stores/museum';
  import type { Exhibition, Museum } from '@/types/museum/index';

  // 导入子组�?  import ExhibitionHeader from './components/ExhibitionHeader/index.vue';
  import ExhibitionCardList from './components/ExhibitionCardList/index.vue';
  import ExhibitionDetail from './components/ExhibitionDetail/index.vue';

  // 接收博物馆参�?  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();
  const store = useMuseumDataStore();

  const statusFilter = ref('all');
  const themeFilter = ref('all');
  const selectedExhibition = ref<Exhibition | null>(null);
  const searchQuery = ref('');

  // 选择展览
  const selectExhibition = (exhibition: any) => {
    selectedExhibition.value = exhibition as Exhibition;
  };

  // 处理搜索
  const handleSearch = (query: string) => {
    searchQuery.value = query;
  };

  // 获取当前博物馆的展览数据
  const allExhibitions = computed(() => {
    return store.getExhibitionsByMuseumId(props.museum.id);
  });

  // 展览分类数据（count 从当前博物馆真实展览数据统计�?  const categoryConfig = [
      name: '历史文化',
    { id: 2, name: '艺术精品', icon: '🎨' },
    { id: 3, name: '科技考古', icon: '🔬' },
    { id: 4, name: '民俗风情', icon: '🎭' },
  ];

  const categories = computed(() => {
    return categoryConfig.map((cat) => ({
      ...cat,
      count: allExhibitions.value.filter(
        (item) => item.category === cat.name,
      ).length,
    }));
  });

  // 筛选后的展�?  const filteredExhibitions = computed(() => {
    let result = allExhibitions.value;

    // 状态筛�?    if (statusFilter.value !== 'all') {
      switch (statusFilter.value) {
        case 'hot':
          result = result.filter((item) => (item as any).status === '热门');
          break;
        case 'latest':
          result = result.filter((item) => (item as any).status === '最�?);
          break;
        case 'ending':
          result = result.filter((item) => (item as any).status === '即将结束');
          break;
        case 'planning':
          result = result.filter((item) => (item as any).status === '筹备�?);
          break;
        case 'historical':
          result = result.filter((item) => (item as any).status === '已结�?);
          break;
      }
    }

    // 主题筛�?    if (themeFilter.value !== 'all') {
      const selectedCategoryName = categories.value.find(
        (cat) => cat.id.toString() === themeFilter.value,
      )?.name;
      result = result.filter((item) => item.category === selectedCategoryName);
    }

    // 搜索筛�?    if (searchQuery.value) {
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

  // 监听筛选结果变化，当结果为空时清空选中的展览详�?  watch(filteredExhibitions, (newFilteredExhibitions) => {
    if (newFilteredExhibitions.length === 0) {
      selectedExhibition.value = null;
    } else {
      // 如果当前选中的展览不在筛选结果中，也清空选中状�?      if (selectedExhibition.value) {
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

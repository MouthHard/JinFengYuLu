<template>
  <div class="historical-figures">
    <div class="fixed-header">
      <CategoryFilterHeader
        :active-category="activeCategory"
        @category-change="handleCategoryChange"
        @search="handleSearch"
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
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { historicalFigures } from '../../data/figures';
  import CategoryFilterHeader from './components/CategoryFilterHeader/index.vue';
  import FigureCard from './components/FigureCard/index.vue';
  import FigureModal from './components/FigureModal/index.vue';
  import type { HistoricalFigure } from '@/typesOfPages/history';

  const selectedFigure = ref<HistoricalFigure | null>(null);

  const activeCategory = ref('all');
  const searchQuery = ref('');

  const filteredFigures = computed(() => {
    let result = historicalFigures;
    
    // 按分类筛选
    if (activeCategory.value !== 'all') {
      result = result.filter(
        (f: HistoricalFigure) => f.category === activeCategory.value,
      );
    }
    
    // 按搜索关键词筛选
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(
        (f: HistoricalFigure) => 
          f.name.toLowerCase().includes(query) ||
          f.description.toLowerCase().includes(query) ||
          f.achievements.some(a => a.toLowerCase().includes(query))
      );
    }
    
    return result;
  });

  const openDetail = (figure: HistoricalFigure) => {
    if (!figure) return;
    selectedFigure.value = figure;
    document.body.style.overflow = 'hidden';
  };

  const closeDetail = () => {
    selectedFigure.value = null;
    document.body.style.overflow = '';
  };

  // 键盘事件处理：ESC键关闭弹窗
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && selectedFigure.value) {
      closeDetail();
    }
  };

  // 处理分类变化事件
  const handleCategoryChange = (category: string) => {
    activeCategory.value = category;
  };

  // 处理搜索事件
  const handleSearch = (query: string) => {
    searchQuery.value = query;
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<style scoped lang="scss">
  @use './index.scss' as *;
</style>

<template>
  <div class="category-filter-header">
    <div class="header-main">
      <div class="header-info">
        <h2 class="section-title">历史人物</h2>
        <p class="section-desc">中华五千年文明的杰出代表</p>
      </div>

      <div class="search-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索历史人物..."
          class="search-input"
          @input="handleSearch"
        />
        <span v-if="searchQuery" class="search-clear" @click="clearSearch">
          ✕
        </span>
        <span class="search-icon" @click="handleSearch">🔍</span>
      </div>
    </div>

    <div class="filter-bar">
      <button
        v-for="category in categories"
        :key="category.id"
        class="pill-btn"
        :class="{ active: activeCategory === category.id }"
        @click="handleCategoryChange(category.id)"
      >
        <span v-if="category.id === activeCategory">
          <FigureActiveTabIcon />
        </span>
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { FigureActiveTabIcon } from '@/pages/History/icons/index.ts';

  // 接收父组件传递的activeCategory
  const props = defineProps<{
    activeCategory: string;
  }>();

  // 定义emit事件
  const emit = defineEmits<{
    (e: 'category-change', category: string): void;
    (e: 'search', query: string): void;
  }>();

  const categories = [
    { id: 'all', name: '全部人物' },
    { id: 'politics', name: '政治军事' },
    { id: 'culture', name: '文化艺术' },
    { id: 'science', name: '科技学术' },
    { id: 'philosophy', name: '思想哲学' },
  ];

  const searchQuery = ref('');

  // 处理分类变化
  const handleCategoryChange = (category: string) => {
    emit('category-change', category);
  };

  // 处理搜索
  const handleSearch = () => {
    emit('search', searchQuery.value);
  };

  // 清除搜索
  const clearSearch = () => {
    searchQuery.value = '';
    emit('search', '');
  };
</script>

<style scoped lang="scss">
  @use './index.scss' as *;
</style>

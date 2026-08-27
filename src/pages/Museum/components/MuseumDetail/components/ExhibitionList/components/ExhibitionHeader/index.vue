<template>
  <div class="filter-header">
    <div class="filters-wrapper">
      <div class="category-filters">
        <button
          class="category-filter-btn"
          :class="{ active: statusFilter === 'all' }"
          @click="updateStatusFilter('all')"
        >
          全部
        </button>
        <button
          class="category-filter-btn"
          :class="{ active: statusFilter === 'hot' }"
          @click="updateStatusFilter('hot')"
        >
          热门推荐
        </button>
        <button
          class="category-filter-btn"
          :class="{ active: statusFilter === 'latest' }"
          @click="updateStatusFilter('latest')"
        >
          最新展览
        </button>
        <button
          class="category-filter-btn"
          :class="{ active: statusFilter === 'ending' }"
          @click="updateStatusFilter('ending')"
        >
          即将结束
        </button>
        <button
          class="category-filter-btn"
          :class="{ active: statusFilter === 'planning' }"
          @click="updateStatusFilter('planning')"
        >
          筹备中
        </button>
        <button
          class="category-filter-btn"
          :class="{ active: statusFilter === 'historical' }"
          @click="updateStatusFilter('historical')"
        >
          历年展览
        </button>
      </div>

      <div class="category-filters">
        <button
          class="category-filter-btn"
          :class="{ active: themeFilter === 'all' }"
          @click="updateThemeFilter('all')"
        >
          全部主题
        </button>
        <button
          v-for="category in categories"
          :key="category.id"
          class="category-filter-btn"
          :class="{ active: themeFilter === category.id.toString() }"
          @click="updateThemeFilter(category.id.toString())"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <div class="search-section">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索展览..."
        class="search-input"
      />
      <button class="search-btn" @click="handleSearch">搜索</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';

  // Props
  const props = defineProps({
    statusFilter: {
      type: String,
      default: 'all',
    },
    themeFilter: {
      type: String,
      default: 'all',
    },
    categories: {
      type: Array as () => Array<{
        id: number;
        name: string;
        count: number;
        icon: string;
      }>,
      default: () => [],
    },
  });

  // Emits
  const emit = defineEmits([
    'update:statusFilter',
    'update:themeFilter',
    'search',
  ]);

  // 搜索查询
  const searchQuery = ref('');

  // 更新状态筛选
  const updateStatusFilter = (filter: string) => {
    emit('update:statusFilter', filter);
  };

  // 更新主题筛选
  const updateThemeFilter = (filter: string) => {
    emit('update:themeFilter', filter);
  };

  // 处理搜索
  const handleSearch = () => {
    emit('search', searchQuery.value);
  };

  // 监听搜索输入，实时搜索
  watch(searchQuery, (newValue) => {
    if (newValue.includes('\n')) {
      searchQuery.value = newValue.replace('\n', '');
    }
    // 实时触发搜索
    handleSearch();
  });
</script>

<style lang="scss" scoped src="./index.scss"></style>

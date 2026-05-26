<template>
  <div class="poetry-page">
    <!-- 固定头部区域 -->
    <div class="sticky-header">
      <header class="page-header">
        <div class="header-content">
          <div class="header-decoration left">
            <span class="decoration-line"></span>
            <span class="decoration-dot"></span>
          </div>

          <div class="header-center">
            <h1 class="page-title">
              <span class="title-char" data-char="诗">诗</span>
              <span class="title-divider">·</span>
              <span class="title-char" data-char="词">词</span>
              <span class="title-divider">·</span>
              <span class="title-char" data-char="雅">雅</span>
              <span class="title-divider">·</span>
              <span class="title-char" data-char="韵">韵</span>
            </h1>
            <p class="page-subtitle">传承千年文化，品味诗词之美</p>
          </div>

          <div class="header-decoration right">
            <span class="decoration-line"></span>
            <span class="decoration-dot"></span>
          </div>
        </div>
        <button class="back-button" @click="goBack">返回首页</button>
      </header>

      <!-- 模式切换 + 内容区域 -->
      <div class="mode-content-wrapper">
        <!-- 左侧竖排模式切换Tab -->
        <aside class="mode-tabs-vertical">
          <div
            class="mode-tab-vertical"
            :class="{ active: !isSearchMode }"
            @click="switchMode(false)"
          >
            <span class="tab-icon">📚</span>
            <span class="tab-text">分类浏览</span>
          </div>
          <div
            class="mode-tab-vertical"
            :class="{ active: isSearchMode }"
            @click="switchMode(true)"
          >
            <span class="tab-icon">🔍</span>
            <span class="tab-text">搜索模式</span>
          </div>
        </aside>

        <!-- 右侧内容区域 -->
        <div class="content-area">
          <!-- 搜索模式 -->
          <template v-if="isSearchMode">
            <section class="search-section">
              <SearchBar v-model="searchQuery" @search="handleSearch" />
            </section>
            <!-- 搜索结果统计 -->
            <section v-if="searchQuery" class="search-results-header">
              <div class="search-results-bar">
                <div class="search-results-info">
                  <span class="search-keyword">搜索: "{{ searchQuery }}"</span>
                  <span class="search-count">
                    共找到 {{ filteredPoems.length }} 首诗词
                  </span>
                </div>
              </div>
            </section>
          </template>

          <!-- 分类浏览模式 -->
          <template v-else>
            <section class="category-section">
              <CategoryNav @category-change="handleCategoryChange" />
            </section>
          </template>
        </div>
      </div>
    </div>

    <!-- 可滚动内容区域 -->
    <main class="page-main">
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <p>正在加载诗词...</p>
      </div>

      <div v-else-if="filteredPoems.length === 0" class="empty-state">
        <div class="empty-icon">📜</div>
        <h3>暂无相关诗词</h3>
        <p>换个关键词试试吧</p>
      </div>

      <div v-else class="poems-grid">
        <PoemCard
          v-for="poem in displayedPoems"
          :key="poem.id"
          :poem="poem"
          @click="handlePoemClick"
          @tag-click="handleTagClick"
          @favorite-toggle="handleFavoriteToggle"
        />
      </div>

      <!-- 分页 -->
      <Pagination
        v-if="totalPages > 1 && !loading"
        :current-page="currentPage"
        :total-pages="totalPages"
        :total-items="filteredPoems.length"
        @page-change="handlePageChange"
      />
    </main>

    <!-- 诗词详情弹窗 -->
    <PoemModal
      v-if="selectedPoem"
      :visible="showModal"
      :poem="selectedPoem"
      :background-image="selectedPoemBackground"
      @close="showModal = false"
      @tag-click="handleTagClick"
      @favorite-toggle="handleFavoriteToggle"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import SearchBar from './components/SearchBar/index.vue';
  import CategoryNav from './components/CategoryNav/index.vue';
  import PoemCard from './components/PoemCard/index.vue';
  import PoemModal from './components/PoemModal/index.vue';
  import Pagination from './components/Pagination/index.vue';

  // 从公共模块导入
  import { poems } from './data/poems-refactored';
  import {
    filterPoemsByCategory,
    searchPoems as searchPoemsUtil,
  } from '../../utils/poetry';
  import type { Poem } from '../../typesOfPages/poetry/poem';
  import type { CategoryFilterParams } from '../../typesOfPages/poetry/category';

  const router = useRouter();

  // 状态
  const loading = ref(false);
  const searchQuery = ref('');
  const currentPage = ref(1);
  const selectedPoem = ref<Poem | null>(null);
  const selectedPoemBackground = ref<string>('');
  const showModal = ref(false);
  const isSearchMode = ref(false);
  const pageSize = 12;

  // 分类筛选状态
  const filterParams = ref<CategoryFilterParams>({
    categoryId: '',
    subCategoryId: '',
  });

  // 模式切换
  const switchMode = (searchMode: boolean) => {
    isSearchMode.value = searchMode;
    searchQuery.value = '';
    if (!searchMode) {
      filterParams.value = { categoryId: '', subCategoryId: '' };
    }
    currentPage.value = 1;
  };

  // 筛选后的诗词
  const filteredPoems = computed(() => {
    if (isSearchMode.value && searchQuery.value) {
      return searchPoemsUtil(poems, searchQuery.value);
    }
    if (!isSearchMode.value && filterParams.value.categoryId) {
      return filterPoemsByCategory(poems, filterParams.value);
    }
    return poems;
  });

  // 分页数据
  const totalPages = computed(() =>
    Math.ceil(filteredPoems.value.length / pageSize),
  );
  const displayedPoems = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    return filteredPoems.value.slice(start, start + pageSize);
  });

  // 方法
  const goBack = () => router.push('/');

  const handleSearch = (query: string) => {
    searchQuery.value = query;
    currentPage.value = 1;
  };

  const handleCategoryChange = (categoryId: string, subCategoryId?: string) => {
    filterParams.value = {
      categoryId,
      subCategoryId: subCategoryId || '',
    };
    currentPage.value = 1;
  };

  const handlePageChange = (page: number) => {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePoemClick = (poem: Poem, backgroundImage: string) => {
    selectedPoem.value = poem;
    selectedPoemBackground.value = backgroundImage;
    showModal.value = true;
  };

  const handleTagClick = (tag: string) => {
    searchQuery.value = tag;
    isSearchMode.value = true;
    currentPage.value = 1;
  };

  const handleFavoriteToggle = (poemId: string) => {
    console.log('Toggle favorite:', poemId);
  };

  // 生命周期
  onMounted(() => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  });
</script>

<style scoped lang="scss">
  @use './index.scss';
</style>

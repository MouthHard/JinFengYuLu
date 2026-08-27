<template>
  <nav class="top-nav">
    <div class="nav-container">
      <div class="nav-brand">
        <span class="brand-icon">🏔️</span>
        <span class="brand-text">旅途志</span>
      </div>

      <div ref="searchContainer" class="nav-search">
        <div class="search-box">
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref="searchInput"
            v-model="searchKeyword"
            type="text"
            placeholder="搜索目的地、攻略、摄影技巧..."
            @input="handleSearch"
            @focus="handleFocus"
            @blur="handleBlur"
          />
          <button
            v-if="searchKeyword"
            class="clear-btn"
            @click="clearSearch"
          >
            ×
          </button>
        </div>

        <!-- 搜索下拉菜单 -->
        <div v-if="isSearchFocused" class="search-dropdown">
          <!-- 搜索历史 -->
          <div v-if="searchHistory.length > 0" class="dropdown-section">
            <div class="section-header">
              <span class="section-title">搜索历史</span>
              <button class="clear-history-btn" @click="clearSearchHistory">清除</button>
            </div>
            <div class="history-tags">
              <button
                v-for="(item, index) in visibleHistory"
                :key="index"
                class="history-tag"
                @mousedown="selectHistoryItem(item)"
              >
                {{ item }}
              </button>
              <button
                v-if="hasMoreHistory"
                class="more-history-btn"
                @mousedown.prevent="toggleShowAllHistory"
              >
                {{ showAllHistory ? '收起' : '更多' }}
              </button>
            </div>
          </div>

          <!-- 热门推荐 -->
          <div class="dropdown-section">
            <div class="section-header">
              <span class="section-title">热门推荐</span>
            </div>
            <div class="hot-tags-list">
              <button
                v-for="tag in hotTags"
                :key="tag.id"
                class="hot-tag"
                @mousedown="selectHotTag(tag.name)"
              >
                {{ tag.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { hotTags } from '@/utils/landscape/constants';
import { debounce } from '@/utils/landscape/debounce';

const props = defineProps<{
  initialKeyword?: string;
}>();

const searchKeyword = ref('');
const isSearchFocused = ref(false);
const searchHistory = ref<string[]>([]);
const searchInput = ref<HTMLInputElement | null>(null);
const showAllHistory = ref(false);

const emit = defineEmits<{
  (e: 'update:searchKeyword', value: string): void;
  (e: 'search'): void;
}>();

const visibleHistory = computed(() => {
  if (showAllHistory.value) {
    return searchHistory.value;
  }
  return searchHistory.value.slice(0, 3);
});

const hasMoreHistory = computed(() => searchHistory.value.length > 3);

// 从localStorage加载搜索历史
const loadSearchHistory = () => {
  try {
    const history = localStorage.getItem('guideSearchHistory');
    if (history) {
      searchHistory.value = JSON.parse(history);
    }
  } catch (error) {
    console.error('加载搜索历史失败:', error);
  }
};

// 保存搜索历史到localStorage
const saveSearchHistory = (keyword: string) => {
  try {
    if (!keyword.trim()) return;

    // 移除已存在的相同关键词
    const index = searchHistory.value.indexOf(keyword);
    if (index > -1) {
      searchHistory.value.splice(index, 1);
    }

    // 添加到开头
    searchHistory.value.unshift(keyword);

    // 限制历史记录数量为10条
    if (searchHistory.value.length > 10) {
      searchHistory.value = searchHistory.value.slice(0, 10);
    }

    localStorage.setItem('guideSearchHistory', JSON.stringify(searchHistory.value));
  } catch (error) {
    console.error('保存搜索历史失败:', error);
  }
};

const handleFocus = () => {
  isSearchFocused.value = true;
  showAllHistory.value = false;
};

const handleBlur = () => {
  // 延迟关闭，以便点击事件能够触发
  setTimeout(() => {
    isSearchFocused.value = false;
  }, 200);
};

const debouncedSearch = debounce((val: unknown) => {
  const value = val as string;
  emit('update:searchKeyword', value);
  emit('search');
  if (value.trim()) {
    saveSearchHistory(value);
  }
}, 300);

const handleSearch = () => {
  debouncedSearch(searchKeyword.value);
};

const clearSearch = () => {
  searchKeyword.value = '';
  emit('update:searchKeyword', '');
  emit('search');
  searchInput.value?.focus();
};

const selectHistoryItem = (item: string) => {
  searchKeyword.value = item;
  emit('update:searchKeyword', item);
  emit('search');
  isSearchFocused.value = false;
};

const selectHotTag = (tag: string) => {
  searchKeyword.value = tag;
  emit('update:searchKeyword', tag);
  emit('search');
  saveSearchHistory(tag);
  isSearchFocused.value = false;
};

const toggleShowAllHistory = () => {
  showAllHistory.value = !showAllHistory.value;
};

const clearSearchHistory = () => {
  searchHistory.value = [];
  localStorage.removeItem('guideSearchHistory');
};

onMounted(() => {
  loadSearchHistory();
  if (props.initialKeyword) {
    searchKeyword.value = props.initialKeyword;
    emit('update:searchKeyword', props.initialKeyword);
    emit('search');
  }
});
</script>

<style scoped lang="scss" src="./index.scss" />

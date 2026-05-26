<template>
  <div class="search-bar">
    <div class="search-container">
      <div class="search-icon">🔍</div>
      <div class="search-input-container">
        <input
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="搜索诗词、作者、名句..."
          @keyup.enter="handleSearch"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <button
          v-if="searchQuery"
          class="clear-button"
          title="清除搜索"
          @click="clearSearch"
        >
          ×
        </button>
      </div>
      <button class="search-button" @click="handleSearch">搜索</button>
    </div>

    <div v-if="isFocused && !searchQuery" class="hot-searches">
      <span class="hot-label">热门搜索：</span>
      <span
        v-for="(tag, index) in hotTags"
        :key="index"
        class="hot-tag"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </span>
    </div>

    <div
      v-if="isFocused && searchQuery && suggestions.length > 0"
      class="search-suggestions"
    >
      <div
        v-for="(item, index) in suggestions"
        :key="index"
        class="suggestion-item"
        @click="selectSuggestion(item)"
      >
        <span class="suggestion-icon">{{ item.icon }}</span>
        <span class="suggestion-text">{{ item.text }}</span>
        <span class="suggestion-count">{{ item.count }}首</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue';
  import { searchPoems } from '../../../../utils/poetry';
  import { hotTags } from '../../data/categories';
  import { poems } from '../../data/poems-refactored';
  import './index.scss';

  // 类型定义
  interface SuggestionItem {
    icon: string;
    text: string;
    count: number;
    type: 'poem' | 'author';
    id?: string;
  }

  const props = defineProps<{
    modelValue: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'search', query: string): void;
  }>();

  const searchQuery = ref(props.modelValue || '');
  const isFocused = ref(false);

  // 搜索处理函数
  const handleSearch = () => {
    if (searchQuery.value.trim()) {
      emit('search', searchQuery.value);
    }
  };

  // 防抖函数
  const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number,
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: number | null = null;
    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // 防抖处理的搜索函数
  const debouncedSearch = debounce(handleSearch, 300);

  // 监听搜索查询变化，实时触发搜索
  watch(searchQuery, (newQuery) => {
    if (newQuery.trim()) {
      debouncedSearch();
    }
  });

  const suggestions = computed<SuggestionItem[]>(() => {
    if (!searchQuery.value) return [];

    const results = searchPoems(poems, searchQuery.value);
    const uniqueAuthors = [...new Set(results.map((p) => p.author))].slice(
      0,
      3,
    );

    // 计算作者出现次数的映射，避免重复过滤
    const authorCountMap = new Map<string, number>();
    results.forEach((p) => {
      authorCountMap.set(p.author, (authorCountMap.get(p.author) || 0) + 1);
    });

    const items: SuggestionItem[] = [
      ...results.slice(0, 3).map((p) => ({
        icon: '📜',
        text: p.title,
        count: 1,
        type: 'poem' as const,
        id: p.id,
      })),
      ...uniqueAuthors.map((a) => ({
        icon: '👤',
        text: a,
        count: authorCountMap.get(a) || 0,
        type: 'author' as const,
      })),
    ];

    return items.slice(0, 6);
  });

  const handleFocus = () => {
    isFocused.value = true;
  };

  const handleBlur = () => {
    // 延迟设置 isFocused 为 false，确保点击事件能够先执行
    setTimeout(() => {
      isFocused.value = false;
    }, 200);
  };

  watch(
    () => props.modelValue,
    (newVal) => {
      searchQuery.value = newVal;
    },
  );

  // 统一处理选择标签或建议的函数
  const handleSelect = (value: string) => {
    searchQuery.value = value;
    emit('update:modelValue', value);
    handleSearch();
  };

  const selectTag = (tag: string) => {
    handleSelect(tag);
  };

  const selectSuggestion = (item: SuggestionItem) => {
    handleSelect(item.text);
  };

  // 清除搜索内容
  const clearSearch = () => {
    searchQuery.value = '';
    emit('update:modelValue', '');
  };
</script>

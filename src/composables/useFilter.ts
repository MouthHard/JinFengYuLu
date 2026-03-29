/**
 * 数据过滤 Composable
 *
 * 提供分类过滤和搜索过滤功能，支持自定义过滤函数。
 *
 * @future 用于 History、TravelGuide 等需要过滤功能的模块
 * @example
 * ```typescript
 * const { filteredItems, setCategory, setSearchQuery } = useFilter({
 *   items: () => historicalEvents,
 *   categoryKey: 'category',
 * });
 * ```
 */

import { ref, computed } from "vue";

export interface UseFilterOptions<T> {
  items: () => T[];
  filterFn?: (item: T, query: string) => boolean;
  categoryKey?: keyof T;
}

export function useFilter<T extends Record<string, any>>(
  options: UseFilterOptions<T>,
) {
  const { items, filterFn, categoryKey = "category" } = options;

  const activeCategory = ref("all");
  const searchQuery = ref("");

  const filteredItems = computed(() => {
    let result = items();

    if (activeCategory.value !== "all") {
      result = result.filter(
        (item) => item[categoryKey] === activeCategory.value,
      );
    }

    if (searchQuery.value && filterFn) {
      result = result.filter((item) =>
        filterFn(item, searchQuery.value.toLowerCase()),
      );
    }

    return result;
  });

  const setCategory = (category: string): void => {
    activeCategory.value = category;
  };

  const setSearchQuery = (query: string): void => {
    searchQuery.value = query;
  };

  const clearFilters = (): void => {
    activeCategory.value = "all";
    searchQuery.value = "";
  };

  const itemCount = computed(() => filteredItems.value.length);

  return {
    activeCategory,
    searchQuery,
    filteredItems,
    itemCount,
    setCategory,
    setSearchQuery,
    clearFilters,
  };
}

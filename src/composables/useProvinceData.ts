/**
 * 省份数据加载 Composable
 *
 * 用于动态加载和管理省份相关的数据，支持异步加载、错误处理和自动重新加载。
 *
 * @future 用于 TravelGuide 模块的省份详情页面
 * @example
 * ```typescript
 * const { data, loading, error } = useProvinceData(() => provinceId.value);
 * ```
 */

import { ref, watch } from "vue";
import { loadProvinceData } from "@/pages/TravelGuide/data/dataLoader";
import type { SceneryData } from "@/pages/TravelGuide/data/scenery";

export interface UseProvinceDataOptions {
  immediate?: boolean;
}

export function useProvinceData(
  provinceId: () => string,
  options: UseProvinceDataOptions = {},
) {
  const { immediate = true } = options;

  const data = ref<SceneryData | null>(null);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const loadData = async (province: string): Promise<void> => {
    loading.value = true;
    error.value = null;
    try {
      const result = await loadProvinceData(province);
      data.value = result;
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e));
    } finally {
      loading.value = false;
    }
  };

  const reload = (): Promise<void> => {
    return loadData(provinceId());
  };

  if (immediate) {
    watch(
      provinceId,
      (newProvince) => {
        loadData(newProvince);
      },
      { immediate: true },
    );
  }

  return {
    data,
    loading,
    error,
    loadData,
    reload,
  };
}

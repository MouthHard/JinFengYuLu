/**
 * 省份选择管理 Composable
 *
 * 提供省份选择、区域过滤、搜索功能，支持依赖注入。
 *
 * @future 用于 TravelGuide 模块的省份选择器组件
 * @example
 * ```typescript
 * // 在父组件中
 * const { selectedProvinceId, filteredProvinces } = useProvinceSelection();
 *
 * // 在子组件中
 * const provinceId = useInjectedProvince();
 * ```
 */

import {
  ref,
  computed,
  provide,
  inject,
  type InjectionKey,
  type Ref,
} from "vue";
import { provinces as provincesData } from "@/pages/TravelGuide/data/provinces";
import type { Province } from "@/pages/TravelGuide/data/provinces";

export const SelectedProvinceKey: InjectionKey<Ref<string>> =
  Symbol("selectedProvince");

export interface UseProvinceSelectionOptions {
  defaultProvinceId?: string;
  provideInjection?: boolean;
}

export function useProvinceSelection(
  options: UseProvinceSelectionOptions = {},
) {
  const { defaultProvinceId = provincesData[0]?.id, provideInjection = true } =
    options;

  const selectedProvinceId = ref(defaultProvinceId);
  const selectedRegion = ref("全部");
  const searchQuery = ref("");

  const currentProvince = computed<Province | undefined>(() => {
    return provincesData.find((p) => p.id === selectedProvinceId.value);
  });

  const regions = computed<string[]>(() => {
    const regionSet = new Set(provincesData.map((p) => p.region));
    return ["全部", ...Array.from(regionSet)];
  });

  const filteredProvinces = computed<Province[]>(() => {
    return provincesData.filter((province) => {
      const matchRegion =
        selectedRegion.value === "全部" ||
        province.region === selectedRegion.value;
      const matchSearch =
        searchQuery.value === "" ||
        province.name.includes(searchQuery.value) ||
        province.id.includes(searchQuery.value);
      return matchRegion && matchSearch;
    });
  });

  const selectProvince = (provinceId: string): void => {
    selectedProvinceId.value = provinceId;
  };

  const setRegion = (region: string): void => {
    selectedRegion.value = region;
  };

  const setSearchQuery = (query: string): void => {
    searchQuery.value = query;
  };

  if (provideInjection) {
    provide(SelectedProvinceKey, selectedProvinceId);
  }

  return {
    selectedProvinceId,
    selectedRegion,
    searchQuery,
    currentProvince,
    regions,
    filteredProvinces,
    selectProvince,
    setRegion,
    setSearchQuery,
  };
}

export function useInjectedProvince(): Ref<string> | undefined {
  return inject(SelectedProvinceKey);
}

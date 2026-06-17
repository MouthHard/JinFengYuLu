/**
 * TravelGuide Store 模块入口
 *
 * 职责划分（遵循 vue3-project-specification.md 分层原则）：
 *   - 本文件：Pinia Store + 业务数据导出行程 + 工具具函数
 *   - @/constants/TravelGuide：静态常量（省份信息、风光分类体系等）
 *   - stores/travelGuide/data/：业务实体数据（景点、美食、美食街等）
 *
 * ⚠️ 常量导出行程仅为向后兼容保留，新代码请直接从 @/constants/TravelGuide 导入
 */

import { defineStore } from 'pinia';
// 业务数据从 data 层导入
import { provincesData } from './data/provinces';
import { sceneryData } from './data/scenery';
import { allFoodData, foodDataByProvince } from './data/food/food';
import foodStreetsData from './data/food/foodStreetsData';
import type { SceneryData, FoodLocation } from '@/typesOfPages/travelGuide';
// 静态常量
import {
  sceneryTabs,
  cultureThemes,
  landscapeTypes,
  bestTimes,
  seasons,
} from '@/constants/TravelGuide/scenery';

// ====== 业务数据导出行程 ======
export { provincesData as provinces } from './data/provinces';
export type { Province } from './data/provinces';
export { sceneryData };
export { allFoodData, foodDataByProvince };

// ====== 静态常量（从 @/constants/TravelGuide 转发，向后兼容） ======
// 新代码请直接 import { xxx } from '@/constants/TravelGuide'
export {
  sceneryTabs,
  cultureThemes,
  landscapeTypes,
  bestTimes,
  seasons,
} from '@/constants/TravelGuide/scenery'

// ====== 工具具函数（保留在此处，属于数据访问层） ======

/** 动态加载省份数据 */
export const loadProvinceData = async (provinceKey: string): Promise<SceneryData | null> => {
  try {
    const module = await import(`./data/scenery/${provinceKey}`);
    return module.default || module;
  } catch (error) {
    console.warn(`Failed to load province data for ${provinceKey}:`, error);
    return null;
  }
};

/** 从已加载的数据中获取省份数据 */
export const loadSceneryData = (provinceKey: string): SceneryData | null => {
  return sceneryData[provinceKey as keyof typeof sceneryData] || null;
};

/** 按省份获取美食数据 */
export const loadFoodDataByProvince = (province: string) => {
  return foodDataByProvince[province] || [];
};

/** 获取所有已加载的美食数据 */
export const getLoadedFoodData = () => foodDataByProvince;

/** 美食位置列表（聚合生成） */
export const foodLocations = (() => {
  const locations: FoodLocation[] = [];

  // 优先使用foodStreetsData中的真实美食街数据
  for (const street of foodStreetsData) {
    locations.push({
      id: street.id,
      name: street.name,
      location: street.location,
      type: street.type || '',
      icon: street.icon || '',
      image: street.image,
      foods: street.foods || [],
      reason: street.reason || '',
      rank: street.rank,
      rating: street.rating,
      address: street.address,
      openingHours: street.openingHours,
      specialties: street.specialties,
      bestTimeToVisit: street.bestTimeToVisit,
      provinceId: street.provinceId,
      provinceName: street.provinceName,
    });
  }

  // 如果某些省份没有美食街数据，则回退到原来的逻辑
  const provincesWithStreets = new Set(foodStreetsData.map(s => s.provinceId));
  Object.entries(foodDataByProvince).forEach(([provinceId, foods]) => {
    if (!provincesWithStreets.has(provinceId)) {
      locations.push({
        id: provinceId,
        name: provincesData.find(p => p.id === provinceId)?.name || provinceId,
        location: `${provincesData.find(p => p.id === provinceId)?.name || provinceId}美食聚集区`,
        type: '城市',
        icon: '🍽️',
        image: foods[0]?.image || '',
        foods: foods.map(f => f.name),
        reason: `${foods.length}道特色美食`,
      });
    }
  });

  return locations;
})();

// ====== Pinia Store 定义 ======
export const useTravelGuideDataStore = defineStore('travelGuideData', () => {
  const getAllProvinces = () => provincesData;
  const getSceneryData = () => sceneryData;
  const getAllFoodData = () => allFoodData;
  const getFoodDataByProvince = (province: string) => foodDataByProvince[province] || [];

  return {
    getAllProvinces,
    getSceneryData,
    getAllFoodData,
    getFoodDataByProvince,
    // 数据引用
    provinces: provincesData,
    sceneryData,
    allFoodData,
    foodDataByProvince,
    // 常量转发
    sceneryTabs,
    cultureThemes,
    landscapeTypes,
    bestTimes,
    seasons,
    // 工具具函数
    loadProvinceData,
    loadSceneryData,
    loadFoodDataByProvince,
    getLoadedFoodData,
    foodLocations,
  };
});

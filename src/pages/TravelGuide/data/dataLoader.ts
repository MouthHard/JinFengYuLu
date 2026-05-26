 

import type { SceneryData } from "@/typesOfPages/travelGuide";

// 省份数据映射
const provinceDataMap: Record<string, () => Promise<SceneryData>> = {
  beijing: () => import("./scenery/beijing").then((m) => m.default),
  tianjin: () => import("./scenery/tianjin").then((m) => m.default),
  hebei: () => import("./scenery/hebei").then((m) => m.default),
  shanxi: () => import("./scenery/shanxi").then((m) => m.default),
  neimenggu: () => import("./scenery/neimenggu").then((m) => m.default),
  liaoning: () => import("./scenery/liaoning").then((m) => m.default),
  jilin: () => import("./scenery/jilin").then((m) => m.default),
  heilongjiang: () => import("./scenery/heilongjiang").then((m) => m.default),
  shanghai: () => import("./scenery/shanghai").then((m) => m.default),
  jiangsu: () => import("./scenery/jiangsu").then((m) => m.default),
  zhejiang: () => import("./scenery/zhejiang").then((m) => m.default),
  anhui: () => import("./scenery/anhui").then((m) => m.default),
  fujian: () => import("./scenery/fujian").then((m) => m.default),
  jiangxi: () => import("./scenery/jiangxi").then((m) => m.default),
  shandong: () => import("./scenery/shandong").then((m) => m.default),
  henan: () => import("./scenery/henan").then((m) => m.default),
  hubei: () => import("./scenery/hubei").then((m) => m.default),
  hunan: () => import("./scenery/hunan").then((m) => m.default),
  guangdong: () => import("./scenery/guangdong").then((m) => m.default),
  guangxi: () => import("./scenery/guangxi").then((m) => m.default),
  hainan: () => import("./scenery/hainan").then((m) => m.default),
  chongqing: () => import("./scenery/chongqing").then((m) => m.default),
  sichuan: () => import("./scenery/sichuan").then((m) => m.default),
  guizhou: () => import("./scenery/guizhou").then((m) => m.default),
  yunnan: () => import("./scenery/yunnan").then((m) => m.default),
  xizang: () => import("./scenery/xizang").then((m) => m.default),
  shaanxi: () => import("./scenery/shaanxi").then((m) => m.default),
  gansu: () => import("./scenery/gansu").then((m) => m.default),
  qinghai: () => import("./scenery/qinghai").then((m) => m.default),
  ningxia: () => import("./scenery/ningxia").then((m) => m.default),
  xinjiang: () => import("./scenery/xinjiang").then((m) => m.default),
  hongkong: () => import("./scenery/hongkong").then((m) => m.default),
  macau: () => import("./scenery/macau").then((m) => m.default),
  taiwan: () => import("./scenery/taiwan").then((m) => m.default),
};

/**
 * 加载指定省份的风光数据
 * @param province 省份名称
 * @returns 省份风光数据
 */
export const loadProvinceData = async (
  province: string,
): Promise<SceneryData | null> => {
  try {
    if (provinceDataMap[province]) {
      return await provinceDataMap[province]();
    }
    console.warn(`未找到${province}的风光数据`);
    return null;
  } catch (error) {
    console.error(`加载${province}数据失败:`, error);
    return null;
  }
};

/**
 * 加载指定省份的风光数据（别名函数）
 * @param provinceId 省份ID
 * @returns 省份风光数据
 */
export const loadSceneryData = async (
  provinceId: string,
): Promise<SceneryData | null> => {
  return await loadProvinceData(provinceId);
};

/**
 * 检查指定省份是否有数据
 * @param province 省份名称
 * @returns 是否有数据
 */
export const hasProvinceData = (province: string): boolean => {
  return province in provinceDataMap;
};

/**
 * 获取所有有数据的省份列表
 * @returns 省份列表
 */
export const getAvailableProvinces = (): string[] => {
  return Object.keys(provinceDataMap);
};

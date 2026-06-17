// 博物馆数据主入口 - 按省份组织的新架构
//
// 新架构说明：
// 所有博物馆相关数据按省份组织在 provinces/ 目录下
// 每个省份文件包含：museums, details, artifacts, activities, creativeProducts,
//                     exhibitions, news, academicResources, immersiveExperiences
//
// 保留的独立模块：
// - map/           地图数据（省份数字化展示）
// （展厅数据已合并到各省份文件的 exhibitionHalls 字段中）

// ============================================================
// 1. 省份数据（核心架构）
// ============================================================
export {
  provinceDataMap,
  allProvincesData,
  getProvinceData,
  getMuseumAllDataByProvince,
  getAllMuseumsFromProvinces,
  getAllArtifactsFromProvinces,
  getAllActivitiesFromProvinces,
  getAllCreativeProductsFromProvinces,
  getAllExhibitionsFromProvinces,
  getAllNewsFromProvinces,
  getAllAcademicResourcesFromProvinces,
  getAllImmersiveExperiencesFromProvinces,
} from './provinces';
export type { ProvinceData } from './provinces';

// ============================================================
// 2. 向后兼容的全局数据访问接口
// （从省份数据中聚合生成，保持原有API不变）
// ============================================================
import {
  allProvincesData as _allProvinces,
  getMuseumAllDataByProvince as _getMuseumAllDataByProvince,
} from './provinces';

import type {
  Museum,
  Artifact,
  Exhibition,
  Activity,
  CreativeProduct,
  News,
  AcademicResource,
  ImmersiveExperience,
  MuseumDetailInfo,
} from '@/typesOfPages/museum';

// 获取所有博物馆
export const museums: Museum[] = _allProvinces.flatMap((p) => p.museums);

// 按省份分组的博物馆
export const museumsByProvince: Record<string, Museum[]> = Object.fromEntries(
  _allProvinces.map((p) => [p.code, p.museums]),
);

// 获取所有文物
export const artifacts: Artifact[] = _allProvinces.flatMap((p) => p.artifacts || []);

// 文物常量（从 constants/Museum 导入 - 固定分类体系，不随业务变化）
export {
  ARTIFACT_TYPES,
  DYNASTIES,
  ARTIFACT_TYPE_MAP,
  DYNASTY_MAP,
} from '@/constants/Museum/artifacts';

// 按博物馆ID获取文物
export const getArtifactsByMuseumId = (museumId: number): Artifact[] =>
  artifacts.filter((a) => a.museumId === museumId);

// 获取所有展览
export const exhibitions: Exhibition[] = _allProvinces.flatMap(
  (p) => p.exhibitions || [],
);

// 按博物馆ID获取展览
export const getExhibitionsByMuseumId = (museumId: number): Exhibition[] =>
  exhibitions.filter((e) => e.museumId === museumId);

// 获取所有活动
export const activities: Activity[] = _allProvinces.flatMap(
  (p) => p.activities || [],
);
export const getActivitiesByMuseumId = (museumId: number): Activity[] =>
  activities.filter((a) => a.museumId === museumId);

// 获取所有文创产品
export const creativeProducts: CreativeProduct[] = _allProvinces.flatMap(
  (p) => p.creativeProducts || [],
);
export const getCreativeProductsByMuseumId = (
  museumId: number,
): CreativeProduct[] => creativeProducts.filter((c) => c.museumId === museumId);

// 获取所有新闻
export const news: News[] = _allProvinces.flatMap((p) => p.news || []);
export const getNewsByMuseumId = (museumId: number): News[] =>
  news.filter((n) => n.museumId === museumId);

// 获取所有学术资源
export const academicResources: AcademicResource[] = _allProvinces.flatMap(
  (p) => p.academicResources || [],
);
export const getAcademicResourcesByMuseumId = (
  museumId: number,
): AcademicResource[] =>
  academicResources.filter((a) => a.museumId === museumId);

// 获取所有沉浸式体验
export const immersiveExperiences: ImmersiveExperience[] =
  _allProvinces.flatMap((p) => p.immersiveExperiences || []);
export const getImmersiveExperiencesByMuseumId = (
  museumId: number,
): ImmersiveExperience[] =>
  immersiveExperiences.filter((i) => i.museumId === museumId);

// 获取所有博物馆详情
export const allMuseumDetails: MuseumDetailInfo[] = _allProvinces.flatMap((p) =>
  Object.values(p.details || {}),
);

// 按博物馆ID获取详情
export const getMuseumDetailsById = (
  id: number,
): MuseumDetailInfo | undefined => {
  for (const province of _allProvinces) {
    if (province.details && province.details[id]) return province.details[id];
  }
  return undefined;
};

// 获取某博物馆的所有关联数据（完整版）
export const getMuseumAllData = (museumId: number) =>
  _getMuseumAllDataByProvince(museumId);

// 按省份获取博物馆列表
export const getMuseumsByProvince = (
  provinceCode: string,
): Museum[] | undefined => {
  return museumsByProvince[provinceCode];
};

// ============================================================
// 3. 地图数据（独立模块）
// ============================================================
export {
  provinceElevation,
  provinceNameMap,
  provinceColors,
  getElevationTier,
} from './map';

// ============================================================
// 4. 展厅数据（从省份数据聚合 - 专题展览功能）
// ============================================================
import { getAllExhibitionHallsFromProvinces } from './provinces';
const _allExhibitionHalls = getAllExhibitionHallsFromProvinces();

export const exhibitionHalls = Object.values(_allExhibitionHalls).flat();
export { _allExhibitionHalls as museumExhibitionHalls };
export const getExhibitionHallsByMuseumId = (museumId: number) => _allExhibitionHalls[museumId] || [];
export const getAllExhibitionHalls = () => exhibitionHalls;
export const getExhibitionHallById = (hallId: string) => exhibitionHalls.find((h) => h.id === hallId);
export const getExhibitionHallsByCategory = (category: string) => exhibitionHalls.filter((h) => h.category === category);

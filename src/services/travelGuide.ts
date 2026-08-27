/**
 * ============================================================================
 * 旅游指南模块 API 请求�?- travelGuide.ts
 * ============================================================================
 * 【前端同学必读�? * 本文件封装了"旅游指南"模块所有与后端通信的函数�? *
 * 【后�?API 基础路径�?/api/travel-guide/
 * 所有请求自动加�?/api 前缀（由 request.ts �?BASE_URL 控制）�? *
 * 【本模块�?5 �?API 端点�? * 1. GET /api/travel-guide/provinces       �?获取省份列表（支持分�?筛选）
 * 2. GET /api/travel-guide/provinces/:id   �?获取单个省份详情
 * 3. GET /api/travel-guide/regions         �?获取地区分类列表（如"华北"�?华南"�? * 4. GET /api/travel-guide/scenery/:provinceId �?获取某省的风光数�? * 5. GET /api/travel-guide/food/:provinceId    �?获取某省的美食数�? *
 * 【数据结构特点�? * - provinces 是主资源，scenery �?food 是省份的子资源（通过 provinceId 关联�? * - scenery 接口返回的数据中，后端已�?customs（民俗）、intangibleHeritage（非遗）
 *   等子表数据合并到同一响应中，前端通过 ProvinceScenery 扩展类型接收
 * - food 接口返回 items（美食列表）�?locations（美食地点列表）两部分数�? *
 * ============================================================================
 */
import { httpClient } from './request';
import type {
  Province,
  SceneryData,
  FoodItem,
  FoodLocation,
} from '@/types/travelGuide';

/**
 * 分页列表响应结构 �?后端所有列表接口统一返回此格�? *
 * @template T - 列表项的具体类型（如 Province�? *
 * 【字段说明�? * - items: 当前页的数据数组
 * - total: 满足筛选条件的总记录数
 * - page: 当前页码（从 1 开始）
 * - limit: 每页条数
 * - totalPages: 总页�? */
export interface TravelGuideListResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 列表查询参数 �?省份列表接口支持的筛选条�? *
 * 【字段说明�? * - keyword: 搜索关键词，后端模糊匹配省份名称
 * - region: 地区筛选（�?"华北"�?华东"�?华南"），对应后端�?region 字段
 * - page: 页码（默�?1�? * - limit: 每页条数（本模块默认 100�? */
export interface TravelGuideQueryParams {
  keyword?: string;
  region?: string;
  page?: number;
  limit?: number;
}

/**
 * 省份风光扩展类型 �?�?SceneryData 基础上追加民俗数�? *
 * 【为什么需要这个扩展？�? * 后端�?/travel-guide/scenery/:provinceId 接口中，
 * 除了返回基础风光数据（SceneryData），还将 customs（民俗活动）合并进同一响应�? * 所以前端需要在 SceneryData 类型上追�?customs 字段来完整接收后端数据�? *
 * - customs.activities: 民俗活动列表（如庙会、节庆等），具体结构由后端动态决�? */
export interface ProvinceScenery extends SceneryData {
  customs?: { activities?: unknown[] };
}

/**
 * 省份美食数据 �?包含美食列表和美食地点两部分
 *
 * 【字段说明�? * - items: 美食条目列表（如"北京烤鸭"�?小笼�?等）
 * - locations: 美食地点列表（如"簋街"�?城隍�?等），每个地点关联若干美�? */
export interface ProvinceFood {
  items: FoodItem[];
  locations: FoodLocation[];
}

/**
 * 构建查询字符�?�?将参数对象转�?URL 查询参数
 *
 * 【工作原理�? * 遍历参数对象，过滤掉 undefined/null/空值，
 * 拼接�?'keyword=xxx&region=yyy' 格式的查询字符串�? *
 * @param params - 查询参数对象
 * @returns URL 查询字符串（�?'keyword=北京&region=华北'�? */
function buildQuery(params: TravelGuideQueryParams = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });
  return query.toString();
}

/**
 * 获取省份列表
 *
 * 【API 端点�?GET /api/travel-guide/provinces
 * 【请求方法�?GET
 * 【默认参数�?limit=100（一次性加载最�?100 个省份）
 * 【响应类型�?TravelGuideListResponse<Province>
 * 【后端逻辑�?�?provinces 表查询，支持 keyword 模糊搜索�?region 地区筛�? *
 * @param params - 筛选参数，默认 limit=100
 * @returns 分页的省份列�? */
export function fetchProvinces(params: TravelGuideQueryParams = {}) {
  const qs = buildQuery({ limit: 100, ...params });
  return httpClient.get<TravelGuideListResponse<Province>>(
    `/travel-guide/provinces${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单个省份详情
 *
 * 【API 端点�?GET /api/travel-guide/provinces/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?省份唯一标识（如 "beijing"�?guangdong"�? * 【响应类型�?Province（包含名称、简称、地区、省会、描述等�? * 【后端逻辑�?根据 id �?provinces 表查询单条记�? *
 * @param id - 省份 ID
 * @returns 省份详细信息
 */
export function fetchProvinceById(id: string) {
  return httpClient.get<Province>(`/travel-guide/provinces/${id}`);
}

/**
 * 获取地区分类列表
 *
 * 【API 端点�?GET /api/travel-guide/regions
 * 【请求方法�?GET
 * 【无参数�?此接口不需要任何查询参�? * 【响应类型�?string[]（如 ["华北", "华东", "华南", "西北", "西南", "东北", "华中"]�? * 【后端逻辑�?�?provinces 表中提取去重后的 region 字段�? * 【用途�?前端用于渲染地区筛选下拉框/标签�? *
 * @returns 地区名称数组
 */
export function fetchRegions() {
  return httpClient.get<string[]>('/travel-guide/regions');
}

/**
 * 获取某省的风光数�? *
 * 【API 端点�?GET /api/travel-guide/scenery/:provinceId
 * 【请求方法�?GET
 * 【路径参数�?provinceId �?省份 ID（如 "sichuan"�? * 【响应类型�?ProvinceScenery（风光数�?+ 民俗数据合并返回�? * 【后端逻辑�? *   1. 根据 provinceId 查询该省的风光景点（spots）、季节推荐（seasonal）、活动（activities）等
 *   2. 同时查询该省�?customs/intangibleHeritage/folkCustomsElements/festivals 数据
 *   3. 合并到同一响应中返�? *
 * @param provinceId - 省份 ID
 * @returns 该省的风光和民俗数据
 */
export function fetchScenery(provinceId: string) {
  return httpClient.get<ProvinceScenery>(
    `/travel-guide/scenery/${provinceId}`,
  );
}

/**
 * 获取某省的美食数�? *
 * 【API 端点�?GET /api/travel-guide/food/:provinceId
 * 【请求方法�?GET
 * 【路径参数�?provinceId �?省份 ID（如 "sichuan"�? * 【响应类型�?ProvinceFood（包�?items 美食列表 + locations 美食地点列表�? * 【后端逻辑�? *   1. 根据 provinceId 查询该省的美食条目（food_items 表）
 *   2. 同时查询该省的美食地点（food_locations 表）
 *   3. 两部分数据合并返�? *
 * @param provinceId - 省份 ID
 * @returns 该省的美食和美食地点数据
 */
export function fetchFood(provinceId: string) {
  return httpClient.get<ProvinceFood>(`/travel-guide/food/${provinceId}`);
}

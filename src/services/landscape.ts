/**
 * ============================================================================
 * 风景模块 API 请求�?- landscape.ts
 * ============================================================================
 * 【前端同学必读�? * 本文件封装了"风景"模块所有与后端通信的函数。每个函数对应一个后�?API 端点�? *
 * 【后�?API 基础路径�? * 所有请求会自动加上 /api 前缀（由 request.ts �?BASE_URL 控制），
 * 所以本文件中的 '/landscape/photographers' 实际请求的是 '/api/landscape/photographers'�? *
 * 【请求流转�? * 前端调用 fetchPhotographers() �?httpClient.get('/landscape/photographers')
 *   �?完整 URL: /api/landscape/photographers
 *   �?Vite/Nginx 代理转发到后�?�?后端 Controller 处理 �?返回 JSON
 *
 * 【本模块�?4 类资源�? * - photographers（摄影师�?�?后端数据�? global_photographers
 * - images（图片）         �?后端数据�? global_images
 * - videos（视频）         �?后端数据�? global_videos
 * - guides（攻略）         �?后端数据�? global_guides
 *
 * 每类资源都有"列表查询"�?�?ID 查详�?两个接口，共 8 �?API 函数�? *
 * 【分页响应结构�? * 后端返回的列表数据统一使用 LandscapeListResponse<T> 格式�? *   { items: T[], total: 100, page: 1, limit: 200, totalPages: 1 }
 * 其中 T 是具体的资源类型（如 GlobalPhotographer、GlobalImage 等）�? *
 * 【查询参数�? * LandscapeQueryParams 定义了所有列表接口支持的筛选条件：
 *   keyword �?关键词搜索（模糊匹配标题/名称�? *   category �?分类筛选（�?"自然风光"�?城市建筑"�? *   location �?地点筛选（�?"西藏"�?云南"�? *   authorId �?按作�?ID 筛�? *   page/limit �?分页参数
 *   signal �?AbortSignal，用于取消请求（路由切换时中断未完成的请求）
 *
 * ============================================================================
 */
import { httpClient } from './request';
import type {
  GlobalPhotographer,
  GlobalImage,
  GlobalVideo,
  GlobalGuide,
} from '@/types/landscape/data';

/**
 * 分页列表响应结构 �?后端所有列表接口统一返回此格�? *
 * @template T - 列表项的具体类型（如 GlobalPhotographer、GlobalImage�? *
 * 【字段说明�? * - items: 当前页的数据数组
 * - total: 满足筛选条件的总记录数（不是当前页的数量）
 * - page: 当前页码（从 1 开始）
 * - limit: 每页条数
 * - totalPages: 总页�?= Math.ceil(total / limit)
 */
export interface LandscapeListResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 列表查询参数 �?所有风景模块列表接口共用的筛选条�? *
 * 【字段说明�? * - keyword: 搜索关键词，后端会模糊匹配标�?名称等字�? * - category: 分类标识，对应后端数据库中的 category 字段
 * - location: 地点名称，对应后端数据库中的 location 字段
 * - authorId: 作�?摄影�?ID，用于筛选某作者的所有作�? * - page: 页码（默�?1�? * - limit: 每页条数（本模块默认 200，一次性加载较多数据）
 * - signal: 浏览�?AbortSignal，传入后可在路由切换时取消请求，避免内存泄漏
 */
export interface LandscapeQueryParams {
  keyword?: string;
  category?: string;
  location?: string;
  authorId?: string;
  page?: number;
  limit?: number;
  signal?: AbortSignal;
}

/**
 * 构建查询字符�?�?将参数对象转�?URL 查询参数
 *
 * 【工作原理�? * 1. 从参数中提取 signal（signal 不是 URL 参数，是 fetch 选项�? * 2. 遍历其余参数，过滤掉 undefined/null/空�? * 3. 拼接�?'keyword=xxx&category=yyy' 格式的查询字符串
 *
 * @param params - 查询参数对象
 * @returns qs: URL 查询字符串（�?'keyword=�?category=自然'），signal: AbortSignal
 */
function buildQuery(params: LandscapeQueryParams = {}) {
  const query = new URLSearchParams();
  const { signal, ...rest } = params; // signal 不参�?URL 拼接，仅传给 fetch
  Object.entries(rest).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });
  return { qs: query.toString(), signal };
}

/**
 * 获取摄影师列�? *
 * 【API 端点�?GET /api/landscape/photographers
 * 【请求方法�?GET
 * 【默认参数�?limit=200（一次性加载最�?200 条）
 * 【响应类型�?LandscapeListResponse<GlobalPhotographer>
 * 【后端逻辑�?�?global_photographers 表查询，支持 keyword/category/location/authorId 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的摄影师列表
 */
export function fetchPhotographers(params: LandscapeQueryParams = {}) {
  const { qs, signal } = buildQuery({ limit: 200, ...params });
  return httpClient.get<LandscapeListResponse<GlobalPhotographer>>(
    `/landscape/photographers${qs ? `?${qs}` : ''}`,
    { signal },
  );
}

/**
 * 获取单个摄影师详�? *
 * 【API 端点�?GET /api/landscape/photographers/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?摄影师唯一标识
 * 【响应类型�?GlobalPhotographer（包含头像、简介、作品预览等完整信息�? * 【后端逻辑�?根据 id �?global_photographers 表查询单条记�? *
 * @param id - 摄影�?ID
 * @returns 摄影师详细信�? */
export function fetchPhotographerById(id: string) {
  return httpClient.get<GlobalPhotographer>(`/landscape/photographers/${id}`);
}

/**
 * 获取风景图片列表
 *
 * 【API 端点�?GET /api/landscape/images
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?LandscapeListResponse<GlobalImage>
 * 【后端逻辑�?�?global_images 表查询，支持 keyword/category/location/authorId 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的图片列�? */
export function fetchImages(params: LandscapeQueryParams = {}) {
  const { qs, signal } = buildQuery({ limit: 200, ...params });
  return httpClient.get<LandscapeListResponse<GlobalImage>>(
    `/landscape/images${qs ? `?${qs}` : ''}`,
    { signal },
  );
}

/**
 * 获取单张图片详情
 *
 * 【API 端点�?GET /api/landscape/images/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?图片唯一标识
 * 【响应类型�?GlobalImage（包�?URL、标签、拍摄参数等完整信息�? * 【后端逻辑�?根据 id �?global_images 表查询单条记�? *
 * @param id - 图片 ID
 * @returns 图片详细信息
 */
export function fetchImageById(id: string) {
  return httpClient.get<GlobalImage>(`/landscape/images/${id}`);
}

/**
 * 获取风景视频列表
 *
 * 【API 端点�?GET /api/landscape/videos
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?LandscapeListResponse<GlobalVideo>
 * 【后端逻辑�?�?global_videos 表查询，支持 keyword/category/location/authorId 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的视频列�? */
export function fetchVideos(params: LandscapeQueryParams = {}) {
  const { qs, signal } = buildQuery({ limit: 200, ...params });
  return httpClient.get<LandscapeListResponse<GlobalVideo>>(
    `/landscape/videos${qs ? `?${qs}` : ''}`,
    { signal },
  );
}

/**
 * 获取单个视频详情
 *
 * 【API 端点�?GET /api/landscape/videos/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?视频唯一标识
 * 【响应类型�?GlobalVideo（包含视�?URL、封面、时长、分辨率等完整信息）
 * 【后端逻辑�?根据 id �?global_videos 表查询单条记�? *
 * @param id - 视频 ID
 * @returns 视频详细信息
 */
export function fetchVideoById(id: string) {
  return httpClient.get<GlobalVideo>(`/landscape/videos/${id}`);
}

/**
 * 获取摄影攻略列表
 *
 * 【API 端点�?GET /api/landscape/guides
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?LandscapeListResponse<GlobalGuide>
 * 【后端逻辑�?�?global_guides 表查询，支持 keyword/category/location/authorId 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的攻略列�? */
export function fetchGuides(params: LandscapeQueryParams = {}) {
  const { qs, signal } = buildQuery({ limit: 200, ...params });
  return httpClient.get<LandscapeListResponse<GlobalGuide>>(
    `/landscape/guides${qs ? `?${qs}` : ''}`,
    { signal },
  );
}

/**
 * 获取单篇攻略详情
 *
 * 【API 端点�?GET /api/landscape/guides/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?攻略唯一标识
 * 【响应类型�?GlobalGuide（包含正文、装备建议、安全提示等完整信息�? * 【后端逻辑�?根据 id �?global_guides 表查询单条记�? *
 * @param id - 攻略 ID
 * @returns 攻略详细信息
 */
export function fetchGuideById(id: string) {
  return httpClient.get<GlobalGuide>(`/landscape/guides/${id}`);
}

export function fetchHotTopics(params: LandscapeQueryParams = {}) {
  const { qs, signal } = buildQuery({ limit: 200, ...params });
  return httpClient.get<LandscapeListResponse<any>>(
    `/landscape/hot-topics${qs ? `?${qs}` : ''}`,
    { signal },
  );
}

export function fetchPopularDestinations(params: LandscapeQueryParams = {}) {
  const { qs, signal } = buildQuery({ limit: 200, ...params });
  return httpClient.get<LandscapeListResponse<any>>(
    `/landscape/popular-destinations${qs ? `?${qs}` : ''}`,
    { signal },
  );
}

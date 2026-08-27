/**
 * ============================================================================
 * 博物馆模�?API 请求�?- museum.ts
 * ============================================================================
 * 【前端同学必读�? * 本文件封装了"博物�?模块所有与后端通信的函数�? *
 * 【后�?API 基础路径�?/api/museum/
 * 所有请求自动加�?/api 前缀（由 request.ts �?BASE_URL 控制）�? *
 * 【本模块�?API 端点一览�? * 1. GET /api/museum                           �?获取博物馆列�? * 2. GET /api/museum/:id                       �?获取单个博物馆基本信�? * 3. GET /api/museum/:museumId/detail          �?获取博物馆详情（参观信息、历史沿革等�? * 4. GET /api/museum/artifacts                 �?获取文物列表
 * 5. GET /api/museum/artifacts/:id             �?获取单件文物基本信息
 * 6. GET /api/museum/artifact-details/:id      �?获取文物详细信息（等级、故事等�? * 7. GET /api/museum/exhibitions               �?获取展览列表
 * 8. GET /api/museum/activities                �?获取活动列表
 * 9. GET /api/museum/news                      �?获取新闻列表
 * 10. GET /api/museum/immersive                �?获取沉浸式体验列�? * 11. GET /api/museum/creative-products        �?获取文创产品列表
 * 12. GET /api/museum/academic-resources       �?获取学术资源列表
 * 13. GET /api/museum/exhibition-halls         �?获取专馆列表
 *
 * 【数据关系�? * 博物馆是主资源，文物/展览/活动/新闻等是子资源，通过 museumId 关联�? * 列表接口默认 limit=500（博物馆子资源较多，一次性加载更多数据）�? *
 * 【注意�? * museum 列表接口的路径是 /api/museum（无复数 s），与其他模块不同�? * artifacts 的详情接口路径是 /api/museum/artifact-details/:id（注意连字符）�? *
 * ============================================================================
 */
import { httpClient } from './request';
import type {
  Museum,
  MuseumDetailInfo,
  Artifact,
  ArtifactDetail,
  Exhibition,
  Activity,
  News,
  ImmersiveExperience,
  CreativeProduct,
  AcademicResource,
  ExhibitionHall,
} from '@/types/museum';

/**
 * 分页列表响应结构 �?后端所有列表接口统一返回此格�? *
 * @template T - 列表项的具体类型（如 Museum、Artifact、Exhibition 等）
 *
 * 【字段说明�? * - items: 当前页的数据数组
 * - total: 满足筛选条件的总记录数
 * - page: 当前页码（从 1 开始）
 * - limit: 每页条数
 * - totalPages: 总页�? */
export interface MuseumListResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 列表查询参数 �?博物馆模块列表接口共用的筛选条�? *
 * 【字段说明�? * - keyword: 搜索关键词，后端模糊匹配名称/标题
 * - province: 省份筛选（�?"北京"�?陕西"），对应后端�?province 字段
 * - type: 博物馆类型筛选（�?"综合�?�?专题�?�? * - museumId: 按博物馆 ID 筛选子资源（文�?展览/活动等的 museumId 字段�? * - category: 分类筛选（文物的朝代分类、展览的类型等）
 * - page: 页码（默�?1�? * - limit: 每页条数（本模块子资源默�?500�? */
export interface MuseumQueryParams {
  keyword?: string;
  province?: string;
  type?: string;
  museumId?: number;
  category?: string;
  page?: number;
  limit?: number;
}

/**
 * 构建查询字符�?�?将参数对象转�?URL 查询参数
 *
 * 【工作原理�? * 遍历参数对象，过滤掉 undefined/null/空值，
 * 拼接�?'keyword=xxx&province=yyy' 格式的查询字符串�? *
 * @param params - 查询参数对象
 * @returns URL 查询字符�? */
function buildQuery(params: MuseumQueryParams = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });
  return query.toString();
}

/**
 * 获取博物馆列�? *
 * 【API 端点�?GET /api/museum
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?MuseumListResponse<Museum>
 * 【后端逻辑�?�?museums 表查询，支持 keyword/province/type 筛�? * 【注意�?路径�?/museum（无复数 s），与其他模块的命名风格不同
 *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的博物馆列表
 */
export function fetchMuseums(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<MuseumListResponse<Museum>>(
    `/museum${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单个博物馆基本信�? *
 * 【API 端点�?GET /api/museum/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?博物馆唯一标识（数字型�? * 【响应类型�?Museum（包含名称、省份、类型、文物数、展览数等）
 * 【后端逻辑�?根据 id �?museums 表查询单条记�? *
 * @param id - 博物�?ID
 * @returns 博物馆基本信�? */
export function fetchMuseumById(id: number) {
  return httpClient.get<Museum>(`/museum/${id}`);
}

/**
 * 获取博物馆详情（参观信息等）
 *
 * 【API 端点�?GET /api/museum/:museumId/detail
 * 【请求方法�?GET
 * 【路径参数�?museumId �?博物馆唯一标识
 * 【响应类型�?MuseumDetailInfo（包含参观信息、历史沿革、建筑特色等�? * 【后端逻辑�?根据 museumId �?museum_details 表查询，包含开放时间、票务、交通等
 * 【与 fetchMuseumById 的区别�? *   - fetchMuseumById 返回基本信息（名称、图片、文物数量等�? *   - fetchMuseumDetail 返回详细信息（参观须知、历史沿革、建筑特色等�? *
 * @param museumId - 博物�?ID
 * @returns 博物馆详细信�? */
export function fetchMuseumDetail(museumId: number) {
  return httpClient.get<MuseumDetailInfo>(`/museum/${museumId}/detail`);
}

/**
 * 获取文物列表
 *
 * 【API 端点�?GET /api/museum/artifacts
 * 【请求方法�?GET
 * 【默认参数�?limit=500（文物数量较多，默认加载更多�? * 【响应类型�?MuseumListResponse<Artifact>
 * 【后端逻辑�?�?artifacts 表查询，支持 keyword/museumId/category 筛�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的文物列�? */
export function fetchArtifacts(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<Artifact>>(
    `/museum/artifacts${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单件文物基本信息
 *
 * 【API 端点�?GET /api/museum/artifacts/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?文物唯一标识
 * 【响应类型�?Artifact（包含名称、朝代、图片、描述等基本信息�? * 【后端逻辑�?根据 id �?artifacts 表查询单条记�? *
 * @param id - 文物 ID
 * @returns 文物基本信息
 */
export function fetchArtifactById(id: number) {
  return httpClient.get<Artifact>(`/museum/artifacts/${id}`);
}

/**
 * 获取文物详细信息
 *
 * 【API 端点�?GET /api/museum/artifact-details/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?文物唯一标识
 * 【响应类型�?ArtifactDetail（包含文物等级、相关故事、保护现状、文化意义等�? * 【后端逻辑�?根据 id �?artifact_details 表查询，包含更丰富的描述字段
 * 【与 fetchArtifactById 的区别�? *   - fetchArtifactById 返回基本信息（名称、朝代、图片）
 *   - fetchArtifactDetail 返回详细信息（等级、故事、文化意义等�? * 【注意�?路径�?artifact-details（连字符），不是 artifacts/:id/detail
 *
 * @param id - 文物 ID
 * @returns 文物详细信息
 */
export function fetchArtifactDetail(id: number) {
  return httpClient.get<ArtifactDetail>(`/museum/artifact-details/${id}`);
}

/**
 * 获取展览列表
 *
 * 【API 端点�?GET /api/museum/exhibitions
 * 【请求方法�?GET
 * 【默认参数�?limit=500
 * 【响应类型�?MuseumListResponse<Exhibition>
 * 【后端逻辑�?�?exhibitions 表查询，支持 keyword/museumId/category 筛�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的展览列�? */
export function fetchExhibitions(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<Exhibition>>(
    `/museum/exhibitions${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取活动列表
 *
 * 【API 端点�?GET /api/museum/activities
 * 【请求方法�?GET
 * 【默认参数�?limit=500
 * 【响应类型�?MuseumListResponse<Activity>
 * 【后端逻辑�?�?activities 表查询，支持 keyword/museumId 筛�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的活动列�? */
export function fetchActivities(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<Activity>>(
    `/museum/activities${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取新闻列表
 *
 * 【API 端点�?GET /api/museum/news
 * 【请求方法�?GET
 * 【默认参数�?limit=500
 * 【响应类型�?MuseumListResponse<News>
 * 【后端逻辑�?�?news 表查询，支持 keyword/museumId 筛�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的新闻列�? */
export function fetchNews(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<News>>(
    `/museum/news${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取沉浸式体验列�? *
 * 【API 端点�?GET /api/museum/immersive
 * 【请求方法�?GET
 * 【默认参数�?limit=500
 * 【响应类型�?MuseumListResponse<ImmersiveExperience>
 * 【后端逻辑�?�?immersive_experiences 表查询，支持 keyword/museumId 筛�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的沉浸式体验列表
 */
export function fetchImmersive(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<ImmersiveExperience>>(
    `/museum/immersive${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取文创产品列表
 *
 * 【API 端点�?GET /api/museum/creative-products
 * 【请求方法�?GET
 * 【默认参数�?limit=500
 * 【响应类型�?MuseumListResponse<CreativeProduct>
 * 【后端逻辑�?�?creative_products 表查询，支持 keyword/museumId/category 筛�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的文创产品列�? */
export function fetchCreativeProducts(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<CreativeProduct>>(
    `/museum/creative-products${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取学术资源列表
 *
 * 【API 端点�?GET /api/museum/academic-resources
 * 【请求方法�?GET
 * 【默认参数�?limit=500
 * 【响应类型�?MuseumListResponse<AcademicResource>
 * 【后端逻辑�?�?academic_resources 表查询，支持 keyword/museumId 筛�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的学术资源列�? */
export function fetchAcademicResources(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<AcademicResource>>(
    `/museum/academic-resources${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取专馆列表
 *
 * 【API 端点�?GET /api/museum/exhibition-halls
 * 【请求方法�?GET
 * 【默认参数�?limit=500
 * 【响应类型�?MuseumListResponse<ExhibitionHall>
 * 【后端逻辑�?�?exhibition_halls 表查询，支持 keyword/museumId 筛�? * 【专�?vs 展览�? *   - 展览（Exhibition）是临时性的，有开�?结束日期
 *   - 专馆（ExhibitionHall）是常设的展厅，有固定位置和开放时�? *
 * @param params - 筛选参数，默认 limit=500
 * @returns 分页的专馆列�? */
export function fetchExhibitionHalls(params: MuseumQueryParams = {}) {
  const qs = buildQuery({ limit: 500, ...params });
  return httpClient.get<MuseumListResponse<ExhibitionHall>>(
    `/museum/exhibition-halls${qs ? `?${qs}` : ''}`,
  );
}

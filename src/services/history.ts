/**
 * ============================================================================
 * 历史模块 API 请求�?- history.ts
 * ============================================================================
 * 【前端同学必读�? * 本文件封装了"历史"模块所有与后端通信的函数�? *
 * 【后�?API 基础路径�?/api/history/
 * 所有请求自动加�?/api 前缀（由 request.ts �?BASE_URL 控制）�? *
 * 【本模块�?8 �?API 端点�? * 1. GET /api/history/dynasties        �?获取朝代列表
 * 2. GET /api/history/dynasties/:id    �?获取单个朝代详情
 * 3. GET /api/history/events           �?获取历史事件列表
 * 4. GET /api/history/events/:id       �?获取单个历史事件详情
 * 5. GET /api/history/figures          �?获取历史人物列表
 * 6. GET /api/history/figures/:id      �?获取单个历史人物详情
 * 7. GET /api/history/heritage         �?获取文化遗产列表
 * 8. GET /api/history/heritage/:id     �?获取单个文化遗产详情
 *
 * 【数据关系�? * 本模块有 4 类独立资源（朝代、事件、人物、遗产），它们之间通过字段关联�? * - 事件和人物通过 dynasty 字段关联到朝�? * - 遗产通过 era 字段关联到朝�? * - 人物�?backContent.relatedFigures 关联到其他人�? *
 * 【查询参数特点�? * HistoryQueryParams 支持多种筛选维度：
 * - era/periodTag/dynasty 都可以用于按时代筛选，区别在于�? *   - era: 大时代划分（�?古代"�?近现�?�? *   - periodTag: 更细的时代标签（�?春秋战国"�?魏晋南北�?�? *   - dynasty: 具体朝代（如"�?�?�?�? *
 * ============================================================================
 */
import { httpClient } from './request';
import type {
  Dynasty,
  HistoricalEvent,
  HistoricalFigure,
  CulturalHeritageItem,
} from '@/types/history';

/**
 * 分页列表响应结构 �?后端所有列表接口统一返回此格�? *
 * @template T - 列表项的具体类型（如 Dynasty、HistoricalEvent 等）
 *
 * 【字段说明�? * - items: 当前页的数据数组
 * - total: 满足筛选条件的总记录数
 * - page: 当前页码（从 1 开始）
 * - limit: 每页条数
 * - totalPages: 总页�? */
export interface HistoryListResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 列表查询参数 �?历史模块列表接口共用的筛选条�? *
 * 【字段说明�? * - keyword: 搜索关键词，后端模糊匹配名称/标题
 * - category: 分类筛选（�?"政治"�?文化"�?军事"�? * - era: 大时代筛选（�?"古代"�?近现�?），对应后端�?era 字段
 * - periodTag: 时代标签筛选（�?"春秋战国"�?魏晋南北�?），�?era 更细�? * - dynasty: 朝代筛选（�?"�?�?�?），对应后端�?dynasty 字段
 * - page: 页码（默�?1�? * - limit: 每页条数（本模块默认 200�? */
export interface HistoryQueryParams {
  keyword?: string;
  category?: string;
  era?: string;
  periodTag?: string;
  dynasty?: string;
  page?: number;
  limit?: number;
}

/**
 * 构建查询字符�?�?将参数对象转�?URL 查询参数
 *
 * 【工作原理�? * 遍历参数对象，过滤掉 undefined/null/空值，
 * 拼接�?'keyword=xxx&dynasty=yyy' 格式的查询字符串�? *
 * @param params - 查询参数对象
 * @returns URL 查询字符�? */
function buildQuery(params: HistoryQueryParams = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });
  return query.toString();
}

/**
 * 获取朝代列表
 *
 * 【API 端点�?GET /api/history/dynasties
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?HistoryListResponse<Dynasty>
 * 【后端逻辑�?�?dynasties 表查询，支持 keyword/era/periodTag/dynasty 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的朝代列�? */
export function fetchDynasties(params: HistoryQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<HistoryListResponse<Dynasty>>(
    `/history/dynasties${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单个朝代详情
 *
 * 【API 端点�?GET /api/history/dynasties/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?朝代唯一标识（如 "tang"�?song"�? * 【响应类型�?Dynasty（包含朝代名称、时期、地图、都城等完整信息�? * 【后端逻辑�?根据 id �?dynasties 表查询单条记�? *
 * @param id - 朝代 ID
 * @returns 朝代详细信息
 */
export function fetchDynastyById(id: string) {
  return httpClient.get<Dynasty>(`/history/dynasties/${id}`);
}

/**
 * 获取历史事件列表
 *
 * 【API 端点�?GET /api/history/events
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?HistoryListResponse<HistoricalEvent>
 * 【后端逻辑�?�?historical_events 表查询，支持 keyword/category/era/periodTag/dynasty 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的历史事件列�? */
export function fetchEvents(params: HistoryQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<HistoryListResponse<HistoricalEvent>>(
    `/history/events${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单个历史事件详情
 *
 * 【API 端点�?GET /api/history/events/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?事件唯一标识
 * 【响应类型�?HistoricalEvent（包含标题、时期、描述、影响等完整信息�? * 【后端逻辑�?根据 id �?historical_events 表查询单条记�? *
 * @param id - 事件 ID
 * @returns 历史事件详细信息
 */
export function fetchEventById(id: string) {
  return httpClient.get<HistoricalEvent>(`/history/events/${id}`);
}

/**
 * 获取历史人物列表
 *
 * 【API 端点�?GET /api/history/figures
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?HistoryListResponse<HistoricalFigure>
 * 【后端逻辑�?�?historical_figures 表查询，支持 keyword/category/dynasty 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的历史人物列�? */
export function fetchFigures(params: HistoryQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<HistoryListResponse<HistoricalFigure>>(
    `/history/figures${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单个历史人物详情
 *
 * 【API 端点�?GET /api/history/figures/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?人物唯一标识
 * 【响应类型�?HistoricalFigure（包含姓名、朝代、成就、名言、背景内容等�? * 【后端逻辑�?根据 id �?historical_figures 表查询单条记�? *
 * @param id - 人物 ID
 * @returns 历史人物详细信息
 */
export function fetchFigureById(id: string) {
  return httpClient.get<HistoricalFigure>(`/history/figures/${id}`);
}

/**
 * 获取文化遗产列表
 *
 * 【API 端点�?GET /api/history/heritage
 * 【请求方法�?GET
 * 【默认参数�?limit=200
 * 【响应类型�?HistoryListResponse<CulturalHeritageItem>
 * 【后端逻辑�?�?cultural_heritage 表查询，支持 keyword/category/era 筛�? *
 * @param params - 筛选参数，默认 limit=200
 * @returns 分页的文化遗产列�? */
export function fetchHeritage(params: HistoryQueryParams = {}) {
  const qs = buildQuery({ limit: 200, ...params });
  return httpClient.get<HistoryListResponse<CulturalHeritageItem>>(
    `/history/heritage${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单个文化遗产详情
 *
 * 【API 端点�?GET /api/history/heritage/:id
 * 【请求方法�?GET
 * 【路径参数�?id �?遗产唯一标识
 * 【响应类型�?CulturalHeritageItem（包含名称、位置、历史、文化意义、图片等�? * 【后端逻辑�?根据 id �?cultural_heritage 表查询单条记�? *
 * @param id - 遗产 ID
 * @returns 文化遗产详细信息
 */
export function fetchHeritageById(id: string) {
  return httpClient.get<CulturalHeritageItem>(`/history/heritage/${id}`);
}

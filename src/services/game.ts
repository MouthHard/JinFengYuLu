/**
 * ============================================================================
 * 游戏模块 API 请求�?- game.ts
 * ============================================================================
 * 【前端同学必读�?
 * 本文件封装了"游戏"模块所有与后端通信的函数�?
 *
 * 【后�?API 基础路径�?/api/game/
 * 所有请求自动加�?/api 前缀（由 request.ts �?BASE_URL 控制）�?
 *
 * 【本模块�?7 �?API 端点�?
 * 1. GET /api/game                  �?获取游戏列表（支持分�?筛�?排序�?
 * 2. GET /api/game/:gameId          �?获取单个游戏详情
 * 3. GET /api/game/banners          �?获取首页轮播图列�?
 * 4. GET /api/game/categories       �?获取游戏分类配置（含动态计数）
 * 5. GET /api/game/tags             �?获取所有可用标�?
 * 6. GET /api/game/platforms        �?获取所有可用平�?
 * 7. GET /api/game/sale             �?获取特惠游戏列表
 *
 * 【与其他模块的区别�?
 * - 游戏模块的类型定义直接写在本文件中（GameItemResponse 等）�?
 *   而不是从 types 导入，因为游戏模块的 API 响应类型和前端展示类型差异较�?
 * - 游戏列表支持排序（sortBy + sortOrder），其他模块暂不支持
 * - 游戏列表支持价格区间筛选（priceRange�?
 *
 * 【排序参数说明�?
 * - sortBy: 排序字段（如 "price"�?rating"�?releaseDate"�?
 * - sortOrder: 排序方向�?ASC"（升序）�?"DESC"（降序）
 * 后端会将这两个参数转换为 SQL �?ORDER BY 子句
 *
 * ============================================================================
 */
import { httpClient } from './request';

// --- 类型定义 ---

/**
 * 游戏条目响应类型 �?后端 /api/game �?/api/game/:id 返回的数据结�?
 *
 * 【字段说明�?
 * - id: 游戏唯一标识（通常�?URL slug，如 "black-myth-wukong"�?
 * - title: 游戏名称
 * - subtitle: 副标题（可选）
 * - cover: 封面�?URL
 * - banner: Banner �?URL（可选，用于详情页顶部）
 * - category: 游戏分类（如 "action"�?rpg"�?
 * - price: 当前价格（单位：元）
 * - originalPrice: 原价（可选，有折扣时显示�?
 * - discount: 折扣百分比（可选，�?0.8 表示八折�?
 * - rating: 评分�?-10�?
 * - reviewCount: 评价数量
 * - developer: 开发商
 * - publisher: 发行�?
 * - releaseDate: 发行日期（ISO 格式字符串）
 * - description: 游戏描述
 * - isActive: 是否上架（后端软删除标记�?
 * - createdAt/updatedAt: 后端自动维护的时间戳
 * - screenshots: 游戏截图 URL 数组
 * - features: 游戏特性列表（�?"开放世�?�?多人联机"�?
 * - tags: 标签列表（如 "hot"�?new"�?sale"�?
 * - platforms: 支持平台列表（如 "pc"�?ps5"�?
 */
export interface GameItemResponse {
  id: string;
  title: string;
  subtitle?: string;
  cover: string;
  banner?: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  developer: string;
  publisher: string;
  releaseDate: string;
  description: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  screenshots?: string[];
  features?: string[];
  tags?: string[];
  platforms?: string[];
}

/**
 * 游戏列表响应结构 �?后端列表接口统一返回此格�?
 *
 * 【字段说明�?
 * - items: 当前页的游戏数据数组
 * - total: 满足筛选条件的总记录数
 * - page: 当前页码（从 1 开始）
 * - limit: 每页条数
 * - totalPages: 总页�?
 */
export interface GameListResponse {
  items: GameItemResponse[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 游戏列表查询参数 �?支持筛�?排序
 *
 * 【字段说明�?
 * - keyword: 搜索关键词，后端模糊匹配游戏名称
 * - category: 分类筛选（�?"action"�?rpg"�?
 * - tag: 标签筛选（�?"hot"�?new"�?sale"�?
 * - platform: 平台筛选（�?"pc"�?ps5"�?switch"�?
 * - priceRange: 价格区间筛选，后端解析字符串如 "0-50"�?50-100"�?100+"
 * - sortBy: 排序字段（如 "price"�?rating"�?releaseDate"�?
 * - sortOrder: 排序方向�?ASC"（升序）�?"DESC"（降序）
 * - page: 页码
 * - limit: 每页条数
 */
export interface GameQueryParams {
  keyword?: string;
  category?: string;
  tag?: string;
  platform?: string;
  priceRange?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  page?: number;
  limit?: number;
}

/**
 * 游戏 Banner 条目 �?首页轮播图数�?
 *
 * 【字段说明�?
 * - id: Banner 唯一标识
 * - gameId: 关联的游�?ID（点�?Banner 跳转到该游戏详情页）
 * - image: Banner 图片 URL
 * - title: Banner 标题
 * - subtitle: Banner 副标�?
 * - tag: 标签（可选，�?"新品"�?特惠"�?
 */
export interface GameBannerItem {
  id: string;
  gameId: string;
  image: string;
  title: string;
  subtitle: string;
  tag?: string;
}

/**
 * 游戏分类配置�?�?含动态计�?
 *
 * 【字段说明�?
 * - key: 分类标识（如 "action"�?rpg"），对应 GameQueryParams.category
 * - label: 分类显示名称（如 "动作"�?角色扮演"�?
 * - icon: 分类图标
 * - count: 该分类下的游戏数量（后端实时统计，不是固定值）
 */
export interface GameCategoryItem {
  key: string;
  label: string;
  icon: string;
  count: number;
}

/**
 * 游戏标签�?�?含动态计�?
 *
 * 【字段说明�?
 * - tag: 标签名称（如 "hot"�?new"�?sale"�?
 * - count: 该标签下的游戏数量（后端实时统计�?
 */
export interface GameTagItem {
  tag: string;
  count: number;
}

/**
 * 游戏平台�?�?含动态计�?
 *
 * 【字段说明�?
 * - platform: 平台名称（如 "pc"�?ps5"�?switch"�?
 * - count: 该平台下的游戏数量（后端实时统计�?
 */
export interface GamePlatformItem {
  platform: string;
  count: number;
}

// --- API 函数 ---

/**
 * 获取游戏列表（分�?+ 筛�?+ 排序�?
 *
 * 【API 端点�?GET /api/game
 * 【请求方法�?GET
 * 【响应类型�?GameListResponse
 * 【后端逻辑�?
 *   �?games 表查询，支持�?
 *   - keyword 模糊搜索
 *   - category/tag/platform 精确筛�?
 *   - priceRange 价格区间筛选（后端解析�?SQL BETWEEN 条件�?
 *   - sortBy + sortOrder 排序（后端转换为 ORDER BY 子句�?
 *
 * @param params - 筛选和排序参数
 * @returns 分页的游戏列�?
 */
export function fetchGames(params: GameQueryParams = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });
  const qs = query.toString();
  return httpClient.get<GameListResponse>(`/game${qs ? `?${qs}` : ''}`);
}

/**
 * 获取单个游戏详情（通过 gameId slug�?
 *
 * 【API 端点�?GET /api/game/:gameId
 * 【请求方法�?GET
 * 【路径参数�?gameId �?游戏唯一标识（通常�?URL slug，如 "black-myth-wukong"�?
 * 【响应类型�?GameItemResponse（包含截图、特性、标签等完整信息�?
 * 【后端逻辑�?根据 id/slug �?games 表查询单条记�?
 *
 * @param gameId - 游戏 ID �?slug
 * @returns 游戏详细信息
 */
export function fetchGameById(gameId: string) {
  return httpClient.get<GameItemResponse>(`/game/${gameId}`);
}

/**
 * 获取 Banner 列表
 *
 * 【API 端点�?GET /api/game/banners
 * 【请求方法�?GET
 * 【无参数�?此接口不需要任何查询参�?
 * 【响应类型�?GameBannerItem[]（数组，不是分页结构�?
 * 【后端逻辑�?�?game_banners 表查询所有上架的 Banner，按排序字段排列
 * 【用途�?前端首页轮播图组件的数据�?
 *
 * @returns Banner 列表
 */
export function fetchGameBanners() {
  return httpClient.get<GameBannerItem[]>('/game/banners');
}

/**
 * 获取游戏分类配置（含动态计数）
 *
 * 【API 端点�?GET /api/game/categories
 * 【请求方法�?GET
 * 【无参数�?
 * 【响应类型�?GameCategoryItem[]（数组，不是分页结构�?
 * 【后端逻辑�?
 *   1. �?game_categories 配置表获取分类定�?
 *   2. 对每个分类执�?COUNT 查询，统计该分类下的游戏数量
 *   3. 合并返回
 * 【用途�?前端分类筛选栏的数据源，count 用于显示"动作(12)"这样的标�?
 *
 * @returns 分类配置列表
 */
export function fetchGameCategories() {
  return httpClient.get<GameCategoryItem[]>('/game/categories');
}

/**
 * 获取所有可用标�?
 *
 * 【API 端点�?GET /api/game/tags
 * 【请求方法�?GET
 * 【无参数�?
 * 【响应类型�?GameTagItem[]（数组，不是分页结构�?
 * 【后端逻辑�?�?games 表的 tags 字段提取去重标签，并统计每个标签的游戏数�?
 * 【用途�?前端标签筛选栏的数据源
 *
 * @returns 标签列表
 */
export function fetchGameTags() {
  return httpClient.get<GameTagItem[]>('/game/tags');
}

/**
 * 获取所有可用平�?
 *
 * 【API 端点�?GET /api/game/platforms
 * 【请求方法�?GET
 * 【无参数�?
 * 【响应类型�?GamePlatformItem[]（数组，不是分页结构�?
 * 【后端逻辑�?�?games 表的 platforms 字段提取去重平台，并统计每个平台的游戏数�?
 * 【用途�?前端平台筛选栏的数据源
 *
 * @returns 平台列表
 */
export function fetchGamePlatforms() {
  return httpClient.get<GamePlatformItem[]>('/game/platforms');
}

/**
 * 获取特惠游戏
 *
 * 【API 端点�?GET /api/game/sale
 * 【请求方法�?GET
 * 【查询参数�?limit �?返回数量上限（默�?10�?
 * 【响应类型�?GameListResponse（复用列表结构，但通常只取 items�?
 * 【后端逻辑�?
 *   �?games 表查�?discount 不为空且大于 0 的游戏，
 *   �?discount 降序排列（折扣力度大的排前面），限制返回条数
 *
 * @param limit - 返回数量上限，默�?10
 * @returns 特惠游戏列表
 */
export function fetchGameOnSale(limit = 10) {
  return httpClient.get<GameListResponse>(`/game/sale?limit=${limit}`);
}

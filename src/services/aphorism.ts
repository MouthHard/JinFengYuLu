/**
 * ============================================================================
 * 诗词模块 API 请求层 - aphorism.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件封装了"诗词"模块所有与后端通信的函数。
 *
 * 【后端 API 基础路径】/api/aphorism/
 * 所有请求自动加上 /api 前缀（由 request.ts 的 BASE_URL 控制）。
 *
 * 【本模块共 4 个 API 端点】
 * 1. GET /api/aphorism              → 获取诗词列表（支持分页、筛选、排序）
 * 2. GET /api/aphorism/:id          → 获取单首诗词详情
 * 3. GET /api/aphorism/categories   → 获取诗词分类体系（含动态计数）
 * 4. GET /api/aphorism/tags/hot     → 获取热门标签
 *
 * 【与其他模块的区别】
 * - 诗词模块支持排序（sortBy + sortOrder），类似游戏模块
 * - 诗词模块有分类体系（CategoryGroup + CategoryChild 两级结构），
 *   其他模块的 categories 接口通常返回扁平列表
 * - 诗词模块的 isFeatured 筛选参数，用于获取"精选"诗词
 *
 * 【分类体系说明】
 * 后端返回的 categories 是两级结构：
 * - CategoryGroup（主分类）：如 "诗"、"词"、"曲"...
 * - CategoryChild（子分类）：如 "五言绝句"、"七言律诗"（属于某个主分类）
 * 每个 CategoryChild 包含 count 字段，表示该子分类下的诗词数量。
 *
 * ============================================================================
 */
import { httpClient } from './request';
import type { Poem } from '@/types/aphorism/poem';

/**
 * 诗词列表响应结构 — 后端列表接口统一返回此格式。
 *
 * 【字段说明】
 * - items: 当前页的诗词数据数组
 * - total: 满足筛选条件的总记录数
 * - page: 当前页码（从 1 开始）
 * - limit: 每页条数
 * - totalPages: 总页数
 */
export interface AphorismListResponse {
  items: Poem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 诗词列表查询参数 — 支持筛选、排序
 *
 * 【字段说明】
 * - keyword: 搜索关键词，后端模糊匹配诗词标题、内容、作者
 * - dynasty: 朝代筛选（如 "唐"、"宋"），对应后端的 dynasty 字段
 * - author: 作者筛选（如 "李白"、"杜甫"），对应后端的 author 字段
 * - categoryId: 分类 ID 筛选，对应 CategoryChild.id
 * - tag: 标签筛选（如 "思乡"、"送别"）
 * - sortBy: 排序字段（如 "viewCount"、"likeCount"、"createdAt"）
 * - page: 页码
 * - limit: 每页条数
 */
export interface AphorismQueryParams {
  keyword?: string;
  dynasty?: string;
  author?: string;
  form?: string;
  categoryId?: number;
  tag?: string;
  isFeatured?: boolean;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  page?: number;
  limit?: number;
}

/**
 * 分类子项 — 诗词分类体系的二级节点
 *
 * 【字段说明】
 * - id: 子分类唯一标识（数字型），可作为 AphorismQueryParams.categoryId 传入
 * - name: 子分类名称（如 "五言绝句"、"七言律诗"）
 * - icon: 子分类图标
 * - count: 该子分类下的诗词数量（后端实时统计）
 * - sortOrder: 排序权重（后端用于控制前端显示顺序）
 */
export interface CategoryChild {
  id: number;
  name: string;
  icon: string;
  count: number;
  sortOrder: number;
}

/**
 * 分类组（主分类）— 诗词分类体系的一级节点
 *
 * 【字段说明】
 * - id: 主分类唯一标识（字符串型，如 "shi"、"ci"）
 * - name: 主分类名称（如 "诗"、"词"、"曲"）
 * - icon: 主分类图标
 * - children: 该主分类下的子分类列表
 *
 * 【数据结构示意】
 * CategoryGroup "诗"
 *   ├── CategoryChild "五言绝句" (count: 120)
 *   ├── CategoryChild "七言绝句" (count: 85)
 *   ├── CategoryChild "五言律诗" (count: 60)
 *   └── CategoryChild "七言律诗" (count: 45)
 */
export interface CategoryGroup {
  id: string;
  name: string;
  icon: string;
  children: CategoryChild[];
}

/**
 * 获取诗词列表（分页 + 筛选 + 排序）
 *
 * 【API 端点】GET /api/aphorism
 * 【请求方法】GET
 * 【响应类型】AphorismListResponse
 * 【后端逻辑】
 *   从 poems 表查询，支持：
 *   - keyword 模糊搜索（匹配标题、内容、作者）
 *   - dynasty/author/form/tag 精确筛选
 *   - categoryId 按子分类筛选
 *   - isFeatured 精选筛选
 *   - sortBy + sortOrder 排序
 *
 * @param params - 筛选和排序参数
 * @returns 分页的诗词列表
 */
export function fetchAphorisms(params: AphorismQueryParams = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.append(key, String(value));
    }
  });
  const qs = query.toString();
  return httpClient.get<AphorismListResponse>(
    `/aphorism${qs ? `?${qs}` : ''}`,
  );
}

/**
 * 获取单首诗词详情
 *
 * 【API 端点】GET /api/aphorism/:id
 * 【请求方法】GET
 * 【路径参数】id — 诗词唯一标识（数字型）
 * 【响应类型】Poem（包含标题、作者、朝代、内容、注释、翻译、赏析等完整信息）
 * 【后端逻辑】根据 id 从 poems 表查询单条记录
 *
 * @param id - 诗词 ID
 * @returns 诗词详细信息
 */
export function fetchAphorismById(id: number) {
  return httpClient.get<Poem>(`/aphorism/${id}`);
}

/**
 * 获取诗词分类体系（含动态计数）
 *
 * 【API 端点】GET /api/aphorism/categories
 * 【请求方法】GET
 * 【无参数】
 * 【响应类型】CategoryGroup[]（两级分类结构，不是分页结构）
 * 【后端逻辑】
 *   1. 从 poem_categories 配置表获取主分类和子分类定义
 *   2. 对每个子分类执行 COUNT 查询，统计该分类下的诗词数量
 *   3. 按 sortOrder 排序后返回
 * 【用途】前端分类导航组件的数据源，count 用于显示"五言绝句(120)"这样的标签
 *
 * @returns 分类体系列表
 */
export function fetchAphorismCategories() {
  return httpClient.get<CategoryGroup[]>('/aphorism/categories');
}

/**
 * 获取热门标签
 *
 * 【API 端点】GET /api/aphorism/tags/hot
 * 【请求方法】GET
 * 【查询参数】limit — 返回数量上限（默认 20）
 * 【响应类型】string[]（标签名称数组，如 ["思乡", "送别", "山水", "边塞"]）
 * 【后端逻辑】
 *   从 poems 表的 tags 字段统计出现频率最高的标签
 *   按频率降序排列，限制返回条数
 * 【用途】前端热门标签组件的数据源
 *
 * @param limit - 返回数量上限，默认 20
 * @returns 热门标签名称数组
 */
export function fetchHotTags(limit = 20) {
  return httpClient.get<string[]>(`/aphorism/tags/hot?limit=${limit}`);
}

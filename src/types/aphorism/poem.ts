/**
 * ============================================================================
 * 诗词模块 - 诗词实体类型 - aphorism/poem.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了诗词（Poem）的数据类型，对应后端 /api/aphorism 返回的数据结构。
 *
 * 【与后端 API 的对应关系】
 * - Poem ← GET /api/aphorism 响应中的 items 元素
 * - Poem ← GET /api/aphorism/:id 响应的单个对象
 *
 * 【数据库表】poems
 *
 * 【字段来源说明】
 * 所有字段均来自后端数据库，前端只负责展示。
 * 部分可选字段（标注 ?）在某些诗词中可能为空，前端需做兜底处理。
 *
 * 【字段含义对照】
 * - content: 诗词正文（数组类型，每行一个元素，方便前端逐行渲染）
 * - form: 体裁（如"五言绝句"、"七言律诗"）
 * - annotation: 注释（对古文词汇的解释）
 * - translation: 白话译文
 * - background: 创作背景
 * - appreciation: 赏析（文学评论）
 * - poetIntroduction: 诗人简介
 * - isFeatured: 是否精选（后端管理员标记，用于首页推荐）
 *
 * ============================================================================
 */

/**
 * 诗词实体 — 对应后端 GET /api/aphorism 返回的单条数据
 *
 * @property id               - 诗词唯一标识（数字型，来自后端）
 * @property title            - 诗词标题（来自后端，如 "静夜思"）
 * @property author           - 作者（来自后端，如 "李白"）
 * @property dynasty          - 朝代（来自后端，如 "唐"）
 * @property content          - 诗词正文（来自后端，数组格式，每行一个字符串）
 * @property form             - 体裁（可选，来自后端，如 "五言绝句"）
 * @property tags             - 标签列表（可选，来自后端，如 ["思乡", "月亮"]）
 * @property imageUrl         - 配图 URL（可选，来自后端）
 * @property annotation       - 注释（可选，来自后端，对古文词汇的解释）
 * @property translation      - 白话译文（可选，来自后端）
 * @property background       - 创作背景（可选，来自后端）
 * @property appreciation     - 赏析（可选，来自后端，文学评论）
 * @property poetIntroduction - 诗人简介（可选，来自后端）
 * @property viewCount        - 浏览次数（可选，来自后端统计）
 * @property likeCount        - 点赞次数（可选，来自后端统计）
 * @property isFeatured       - 是否精选（可选，来自后端管理员标记）
 * @property createdAt        - 创建时间（可选，来自后端，ISO 格式字符串）
 * @property updatedAt        - 更新时间（可选，来自后端，ISO 格式字符串）
 */
export interface Poem {
  id: number;
  title: string;
  author: string;
  dynasty: string;
  content: string[];
  form?: string;
  tags?: string[];
  imageUrl?: string;
  annotation?: string;
  translation?: string;
  background?: string;
  appreciation?: string;
  poetIntroduction?: string;
  viewCount?: number;
  likeCount?: number;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

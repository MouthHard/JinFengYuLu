/**
 * ============================================================================
 * 诗词实体 - aphorism.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这是"诗词"模块的核心数据表，存储每首诗词的完整信息。
 * 前端调用 GET /aphorism 接口返回的数据结构就来自这个实体。
 *
 * 【数据库表名】aphorism
 * 【数据流向】数据库 → Service 查询 → Controller 返回 → 前端渲染
 *
 * 【关键字段说明】
 * - content：JSON 数组类型，存储诗词正文（每句一个元素）
 * - viewCount/likeCount：浏览量和点赞数，前端可用于排序
 * - isFeatured：是否精选，前端首页/推荐位用此字段筛选
 * - isActive：软删除标记，0=下架（不返回给前端）
 *
 * 【@Index() 的作用】
 * 给数据库列加索引，就像给字典加目录——按该字段查询时速度更快。
 * title/author/dynasty/isFeatured/isActive 都加了索引，因为它们是常用筛选条件。
 *
 * 【JSON 列的特殊处理】
 * content 字段在数据库中是 JSON 类型，TypeORM 读取时可能是字符串或数组。
 * Service 层的 formatResponse() 方法会统一处理成数组返回给前端。
 * ============================================================================
 */
import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('aphorism') // 映射到数据库的 aphorism 表
export class Aphorism extends BaseEntity {
  // 诗词标题，如"静夜思"、"将进酒"
  @Column({ type: 'varchar', length: 200 })
  @Index() // 加索引：支持按标题搜索
  title: string;

  // 作者，如"李白"、"杜甫"
  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index() // 加索引：支持按作者筛选
  author: string;

  // 朝代，如"唐"、"宋"
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index() // 加索引：支持按朝代筛选
  dynasty: string;

  // 诗词正文，JSON 数组格式，如 ["床前明月光", "疑是地上霜", ...]
  // 数据库存 JSON，TypeORM 读取时可能是字符串，Service 层会统一解析为数组
  @Column({ type: 'json' })
  content: string[];

  // 诗词形式，如"五言绝句"、"七言律诗"
  @Column({ type: 'varchar', length: 100, nullable: true })
  form: string;

  // 诗词配图 URL
  @Column({ name: 'image_url', type: 'varchar', length: 500, nullable: true })
  imageUrl: string;

  // 注释/注解文本
  @Column({ type: 'text', nullable: true })
  annotation: string;

  // 白话译文
  @Column({ type: 'text', nullable: true })
  translation: string;

  // 创作背景
  @Column({ type: 'text', nullable: true })
  background: string;

  // 赏析/鉴赏文本
  @Column({ type: 'text', nullable: true })
  appreciation: string;

  // 诗人简介
  @Column({ name: 'poet_introduction', type: 'text', nullable: true })
  poetIntroduction: string;

  // 浏览量，前端可用于"热门排序"
  @Column({ name: 'view_count', type: 'int', unsigned: true, default: 0 })
  viewCount: number;

  // 点赞数
  @Column({ name: 'like_count', type: 'int', unsigned: true, default: 0 })
  likeCount: number;

  // 是否精选：1=精选（首页推荐），0=普通
  @Column({ name: 'is_featured', type: 'tinyint', default: 0 })
  @Index() // 加索引：筛选精选诗词时更快
  isFeatured: boolean;

  // 是否启用：1=上架（前端可见），0=下架
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index() // 加索引：每次查询都要过滤 isActive=true
  isActive: boolean;
}

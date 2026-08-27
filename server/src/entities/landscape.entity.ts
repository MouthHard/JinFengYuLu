/**
 * ============================================================================
 * 风景模块实体定义 - landscape.entity.ts
 * ============================================================================
 *
 * 【前端同学必读】这个文件定义了风景模块的 4 张数据库表结构。
 * 每个实体类 = 一张数据库表，类的属性 = 表的列。
 *
 * 【本模块的数据存储策略：JSON 透传】
 * 与其他模块（如 aphorism/game）不同，landscape 模块采用"JSON 透传"模式：
 * - 表中只有少量结构化列（id, category, location, authorId 等）用于筛选/索引
 * - 完整的业务数据存在 `data` 列（JSON 类型）中
 * - 查询时直接把 data 字段展开返回给前端
 *
 * 【为什么用 JSON 透传？】
 * 优点：灵活，新增字段不需要改表结构（加列），只需在 JSON 中加属性
 * 缺点：JSON 内部字段无法建索引，无法高效搜索 JSON 内部内容
 *
 * 【表结构示意】
 * landscape_photographer 表：
 * ┌──────┬──────────────┬──────────┬──────────┬──────────┬───────┬─────────────────────┐
 * │ id   │ name         │ category │ location │ verified │ data  │ created_at          │
 * │ varchar(50) │ varchar(100) │ varchar(50) │ varchar(100) │ tinyint │ json │ timestamp │
 * │ p001 │ 张三         │ 风光     │ 中国     │ 1        │ {...} │ 2024-01-01          │
 * └──────┴──────────────┴──────────┴──────────┴──────────┴───────┴─────────────────────┘
 *
 * data 列内容示例：
 * { "avatar": "https://...", "bio": "...", "likes": "1.2k", "followers": "5.6k", ... }
 *
 * ============================================================================
 */

import {
  Entity,
  Column,
  Index,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';

/**
 * ============================================================================
 * 摄影师表 - landscape_photographer
 * ============================================================================
 *
 * 存储所有摄影师信息。id 是手动指定的字符串（如 "p001"），不是自增数字。
 * data 列存储完整摄影师对象（头像、简介、作品数、粉丝数等）。
 *
 * 【@Index() 装饰器】
 * 给列加索引，加速查询。类似书的目录——没有目录只能逐页翻（全表扫描），
 * 有目录可以直接跳到对应页（索引查找）。
 *
 * 以下列加了索引：
 * - name：按名字搜索时加速（如前端搜索摄影师）
 * - category：按分类筛选时加速
 * - location：按地点筛选时加速
 */
@Entity('landscape_photographer')
export class LandscapePhotographer {
  /**
   * @PrimaryColumn — 主键列，手动指定值（不是自增）
   * type: 'varchar', length: 50 → 最多 50 字符的字符串主键
   */
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  /**
   * @Column — 普通列
   * @Index() — 加索引，加速 WHERE name LIKE 'xxx%' 查询
   */
  @Column({ type: 'varchar', length: 100 })
  @Index()
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  location: string;

  @Column({ type: 'tinyint', default: 0 })
  verified: boolean;

  /**
   * JSON 列 — 存储完整摄影师数据对象
   * nullable: true → 允许为空
   * Record<string, unknown> → TypeScript 类型，表示"键为字符串、值为任意类型的对象"
   */
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  /**
   * @CreateDateColumn — 创建时间，INSERT 时自动填充
   * name: 'created_at' → 数据库中的列名（蛇形命名），TypeScript 中用 createdAt（驼峰）
   * @Index() — 加索引，支持按时间排序/筛选
   */
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Index()
  createdAt: Date;
}

/**
 * ============================================================================
 * 图片作品表 - landscape_image
 * ============================================================================
 *
 * 存储所有图片作品。authorId 关联到 landscape_photographer.id。
 * data 列存储完整图片对象（url, thumbnail, tags, likes, views 等）。
 */
@Entity('landscape_image')
export class LandscapeImage {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  location: string;

  /**
   * author_id → 数据库列名（蛇形）
   * authorId → TypeScript 属性名（驼峰）
   * TypeORM 会自动映射这两个名字
   */
  @Column({ name: 'author_id', type: 'varchar', length: 50, nullable: true })
  @Index()
  authorId: string;

  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Index()
  createdAt: Date;
}

/**
 * ============================================================================
 * 视频作品表 - landscape_video
 * ============================================================================
 *
 * 结构与 landscape_image 完全一致，只是存储视频数据。
 * data 列中的视频对象包含 url, poster, duration 等视频特有字段。
 */
@Entity('landscape_video')
export class LandscapeVideo {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  location: string;

  @Column({ name: 'author_id', type: 'varchar', length: 50, nullable: true })
  @Index()
  authorId: string;

  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Index()
  createdAt: Date;
}

/**
 * ============================================================================
 * 攻略表 - landscape_guide
 * ============================================================================
 *
 * 存储所有攻略/指南文章。
 * 多了 title 列（用于搜索）和 difficulty 列（用于难度筛选）。
 * data 列存储完整攻略对象（cover, excerpt, readTime, rating 等）。
 */
@Entity('landscape_guide')
export class LandscapeGuide {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  /**
   * title 列 — 攻略标题，单独存为结构化列以支持索引搜索
   * length: 200 → 攻略标题可能较长
   */
  @Column({ type: 'varchar', length: 200, nullable: true })
  @Index()
  title: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  location: string;

  @Column({ name: 'author_id', type: 'varchar', length: 50, nullable: true })
  @Index()
  authorId: string;

  /**
   * difficulty — 难度等级（beginner/intermediate/advanced/expert）
   * 单独存为列以支持按难度筛选
   */
  @Column({ type: 'varchar', length: 20, nullable: true })
  @Index()
  difficulty: string;

  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Index()
  createdAt: Date;
}

/**
 * 热门主题表 - landscape_hot_topic
 */
@Entity('landscape_hot_topic')
export class LandscapeHotTopic {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  title: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Index()
  createdAt: Date;
}

/**
 * 热门目的地表 - landscape_popular_destination
 */
@Entity('landscape_popular_destination')
export class LandscapePopularDestination {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  country: string;

  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @Index()
  createdAt: Date;
}

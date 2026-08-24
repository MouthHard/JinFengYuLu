/**
 * ============================================================================
 * 游戏模块实体 - game.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这个文件定义了游戏模块的 8 张数据表（8 个实体类）：
 *
 * 主表：
 * 1. Game（游戏主表）—— 游戏核心信息（标题/价格/评分/开发商等）
 *
 * 关联子表（通过 gameId 关联到 Game）：
 * 2. GameScreenshot（截图表）—— 游戏截图列表
 * 3. GameFeature（特性表）—— 游戏特色功能列表
 * 4. GameTag（标签表）—— 游戏标签（多对多拆分）
 * 5. GamePlatform（平台表）—— 游戏支持平台（多对多拆分）
 *
 * 配置表：
 * 6. GameBanner（Banner表）—— 首页轮播图配置
 * 7. GameCategory（分类配置表）—— 游戏分类的 key/label/icon 映射
 *
 * 【为什么 GameScreenshot/GameFeature/GameTag/GamePlatform 不继承 BaseEntity？】
 * 这些是"关联子表"，数据简单（只有 id + gameId + 内容 + createdAt），
 * 不需要 updatedAt 字段，所以只手动定义了 id 和 createdAt。
 *
 * 【GameBanner 的 gameIdRef 是字符串】
 * 注意：Banner 引用游戏时用的是 gameId（字符串业务ID），不是数据库自增 id。
 * 这是因为前端路由使用 gameId（如 'game-001'），Banner 需要直接链接到游戏详情页。
 *
 * 【@Index({ unique: true }) vs @Index()】
 * - @Index({ unique: true })：唯一索引，值不能重复（如 gameId、bannerId）
 * - @Index()：普通索引，值可以重复，只是加速查询
 * ============================================================================
 */
import { Entity, Column, Index, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

// ==================== 游戏主表 ====================
@Entity('game')
export class Game extends BaseEntity {
  // 游戏业务ID，如 'game-001'，前端路由用（唯一）
  @Column({ name: 'game_id', type: 'varchar', length: 100 })
  @Index({ unique: true })
  gameId: string;

  // 游戏标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // 副标题
  @Column({ type: 'varchar', length: 200, nullable: true })
  subtitle: string;

  // 封面图 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  cover: string;

  // 横幅图 URL（详情页顶部大图）
  @Column({ type: 'varchar', length: 500, nullable: true })
  banner: string;

  // 游戏分类，如 'action'/'rpg'/'strategy'，前端用于分类筛选
  @Column({ type: 'varchar', length: 50 })
  @Index()
  category: string;

  // 当前价格（decimal 类型，前端展示时需用 Number() 转换）
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  @Index()
  price: number;

  // 原价（打折前的价格）
  @Column({ name: 'original_price', type: 'decimal', precision: 10, scale: 2, nullable: true })
  originalPrice: number;

  // 折扣百分比，如 30 表示打 7 折（30% off）
  @Column({ type: 'tinyint', unsigned: true, nullable: true })
  @Index()
  discount: number;

  // 评分（0.0 - 10.0）
  @Column({ type: 'decimal', precision: 3, scale: 1, default: 0 })
  @Index()
  rating: number;

  // 评价数量
  @Column({ name: 'review_count', type: 'int', unsigned: true, default: 0 })
  reviewCount: number;

  // 开发商
  @Column({ type: 'varchar', length: 200 })
  developer: string;

  // 发行商
  @Column({ type: 'varchar', length: 200 })
  publisher: string;

  // 发行日期
  @Column({ name: 'release_date', type: 'date', nullable: true })
  @Index()
  releaseDate: string;

  // 游戏描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;
}

// ==================== 游戏截图表 ====================
/** 关联表仅有 id + created_at，不继承 BaseEntity */
@Entity('game_screenshot')
export class GameScreenshot {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 关联的游戏数据库 ID（注意：是自增 id，不是 gameId 字符串）
  @Column({ name: 'game_id', type: 'int', unsigned: true })
  @Index()
  gameId: number;

  // 截图 URL
  @Column({ type: 'varchar', length: 500 })
  url: string;

  // 截图排序（数值越小越靠前）
  @Column({ name: 'sort_order', type: 'int', unsigned: true, default: 0 })
  sortOrder: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 游戏特性表 ====================
@Entity('game_feature')
export class GameFeature {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 关联的游戏数据库 ID
  @Column({ name: 'game_id', type: 'int', unsigned: true })
  @Index()
  gameId: number;

  // 特性描述文本，如"开放世界"/"多人在线"
  @Column({ type: 'varchar', length: 100 })
  feature: string;

  // 特性排序
  @Column({ name: 'sort_order', type: 'int', unsigned: true, default: 0 })
  sortOrder: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 游戏标签表 ====================
@Entity('game_tag')
export class GameTag {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 关联的游戏数据库 ID
  @Column({ name: 'game_id', type: 'int', unsigned: true })
  @Index()
  gameId: number;

  // 标签文本，如"hot"/"new"/"sale"/"multiplayer"
  @Column({ type: 'varchar', length: 50 })
  @Index()
  tag: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 游戏平台表 ====================
@Entity('game_platform')
export class GamePlatform {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 关联的游戏数据库 ID
  @Column({ name: 'game_id', type: 'int', unsigned: true })
  @Index()
  gameId: number;

  // 平台名称，如"pc"/"ps5"/"switch"/"mobile"
  @Column({ type: 'varchar', length: 20 })
  @Index()
  platform: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== Banner 配置表 ====================
@Entity('game_banner')
export class GameBanner extends BaseEntity {
  // Banner 业务ID，如 'banner-001'
  @Column({ name: 'banner_id', type: 'varchar', length: 50 })
  @Index({ unique: true })
  bannerId: string;

  // 引用的游戏业务ID（字符串，如 'game-001'），前端点击跳转用
  @Column({ name: 'game_id_ref', type: 'varchar', length: 100 })
  gameIdRef: string;

  // Banner 图片 URL
  @Column({ type: 'varchar', length: 500 })
  image: string;

  // Banner 标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // Banner 副标题
  @Column({ type: 'varchar', length: 200, nullable: true })
  subtitle: string;

  // Banner 标签文本，如"新品"/"特惠"
  @Column({ type: 'varchar', length: 50, nullable: true })
  tag: string;

  // Banner 排序
  @Column({ name: 'sort_order', type: 'int', unsigned: true, default: 0 })
  sortOrder: number;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;
}

// ==================== 游戏分类配置表 ====================
@Entity('game_category')
export class GameCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 分类键名，如 'action'/'rpg'，唯一标识（前端筛选参数用此值）
  @Column({ name: 'key_name', type: 'varchar', length: 50 })
  @Index({ unique: true })
  keyName: string;

  // 分类显示名称，如"动作"/"角色扮演"（前端 UI 展示用此值）
  @Column({ type: 'varchar', length: 50 })
  label: string;

  // 分类图标
  @Column({ type: 'varchar', length: 20, nullable: true })
  icon: string;

  // 分类排序
  @Column({ name: 'sort_order', type: 'int', unsigned: true, default: 0 })
  sortOrder: number;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;
}

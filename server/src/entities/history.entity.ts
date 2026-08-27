/**
 * ============================================================================
 * 历史模块实体 - history.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这个文件定义了历史模块的 4 张数据表（4 个实体类）：
 * 1. Dynasty（朝代表）—— 存储中国历代王朝信息
 * 2. HistoricalEvent（历史事件表）—— 存储重大历史事件
 * 3. HistoricalFigure（历史人物表）—— 存储历史人物及"卡片背面"内容
 * 4. CulturalHeritage（文化遗产表）—— 存储文化遗产信息
 *
 * 【数据库表名】dynasty / historical_event / historical_figure / cultural_heritage
 *
 * 【设计模式】
 * 每个实体都有业务 ID（如 dynastyId/eventId/figureId/heritageId），
 * 这些是字符串类型的唯一标识（如 'tang'/'event-001'），方便前端做路由映射。
 * 同时继承了 BaseEntity 的自增 id 作为数据库主键。
 *
 * 【JSON 列说明】
 * highlights/achievements/tags/features/images 等字段用 JSON 类型存储数组，
 * 因为这些数据不需要单独建表查询，直接作为整体返回给前端即可。
 * Service 层会用 parseJsonArray() 统一处理成数组格式。
 *
 * 【HistoricalFigure 的 back* 字段】
 * 这些是"卡片背面"内容（backEra/backContribution/backInfluence/backFunFact/backRelatedFigures），
 * 前端在人物卡片翻转时展示，Service 层会将它们打包成 backContent 对象返回。
 * ============================================================================
 */
import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

// ==================== 朝代表 ====================
@Entity('dynasty')
export class Dynasty extends BaseEntity {
  // 朝代业务ID，如 'tang'(唐)、'song'(宋)，用于前端路由和唯一标识
  @Column({ name: 'dynasty_id', type: 'varchar', length: 50 })
  @Index({ unique: true }) // 唯一索引：保证 dynastyId 不重复
  dynastyId: string;

  // 朝代名称，如"唐"、"北宋"
  @Column({ type: 'varchar', length: 100 })
  name: string;

  // 时期描述，如"618-907年"
  @Column({ type: 'varchar', length: 100 })
  period: string;

  // 时代分类，如"ancient"(上古)、"imperial"(帝制)，前端用于大时期筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  era: string;

  // 时期标签，如"先秦"、"秦汉"，前端用于时间线分组
  @Column({ name: 'period_tag', type: 'varchar', length: 50, nullable: true })
  @Index()
  periodTag: string;

  // 是否大一统王朝：1=大一统，0=分裂/偏安
  @Column({ name: 'is_unified', type: 'tinyint', default: 1 })
  isUnified: boolean;

  // 朝代简介
  @Column({ type: 'text', nullable: true })
  description: string;

  // 朝代亮点/关键词，JSON 数组，如 ["贞观之治", "开元盛世"]
  @Column({ type: 'json', nullable: true })
  highlights: string[];

  // 都城，如"长安"、"洛阳"
  @Column({ type: 'varchar', length: 200, nullable: true })
  capital: string;

  // 地理位置描述
  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  // 民族，如"汉"、"蒙古"
  @Column({ name: 'ethnic_group', type: 'varchar', length: 100, nullable: true })
  ethnicGroup: string;

  // 开国君主，如"李渊"、"赵匡胤"
  @Column({ type: 'varchar', length: 100, nullable: true })
  founder: string;

  // 疆域地图图片 URL
  @Column({ name: 'map_url', type: 'varchar', length: 500, nullable: true })
  mapUrl: string;

  // 地图说明文字
  @Column({ name: 'map_description', type: 'text', nullable: true })
  mapDescription: string;

  // 排序权重，数值越小越靠前
  @Column({ name: 'sort_order', type: 'int', default: 0 })
  @Index()
  sortOrder: number;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;
}

// ==================== 历史事件表 ====================
@Entity('historical_event')
export class HistoricalEvent extends BaseEntity {
  // 事件业务ID，如 'event-001'，前端路由用
  @Column({ name: 'event_id', type: 'varchar', length: 50 })
  @Index({ unique: true })
  eventId: string;

  // 事件标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // 发生时期，如"贞观元年"
  @Column({ type: 'varchar', length: 100, nullable: true })
  period: string;

  // 事件分类，如"政治"、"军事"、"文化"，前端用于分类筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  // 事件简要描述
  @Column({ type: 'varchar', length: 500, nullable: true })
  brief: string;

  // 事件详细描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 历史影响
  @Column({ type: 'text', nullable: true })
  impact: string;

  // 事件配图 URL
  @Column({ name: 'image_url', type: 'varchar', length: 500, nullable: true })
  imageUrl: string;

  // 事件标签，JSON 数组
  @Column({ type: 'json', nullable: true })
  tags: string[];

  // 排序权重
  @Column({ name: 'sort_order', type: 'int', default: 0 })
  @Index()
  sortOrder: number;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;
}

// ==================== 历史人物表 ====================
@Entity('historical_figure')
export class HistoricalFigure extends BaseEntity {
  // 人物业务ID，如 'figure-001'，前端路由用
  @Column({ name: 'figure_id', type: 'varchar', length: 50 })
  @Index({ unique: true })
  figureId: string;

  // 人物姓名
  @Column({ type: 'varchar', length: 100 })
  name: string;

  // 所属朝代，如"唐"，前端用于朝代筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  dynasty: string;

  // 人物分类，如"帝王"、"文臣"、"武将"，前端用于分类筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  // 人物头衔/称号，如"诗仙"、"卧龙"
  @Column({ type: 'varchar', length: 200, nullable: true })
  title: string;

  // 人物简介
  @Column({ type: 'varchar', length: 500, nullable: true })
  brief: string;

  // 人物详细描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 主要成就，JSON 数组
  @Column({ type: 'json', nullable: true })
  achievements: string[];

  // 名言/语录
  @Column({ type: 'varchar', length: 500, nullable: true })
  quotes: string;

  // 人物画像 URL
  @Column({ name: 'portrait_url', type: 'varchar', length: 500, nullable: true })
  portraitUrl: string;

  // 人物标签，JSON 数组
  @Column({ type: 'json', nullable: true })
  tags: string[];

  // ---- 以下为"卡片背面"内容，前端翻转卡片时展示 ----

  // 背面-所处时代
  @Column({ name: 'back_era', type: 'varchar', length: 100, nullable: true })
  backEra: string;

  // 背面-主要贡献
  @Column({ name: 'back_contribution', type: 'varchar', length: 500, nullable: true })
  backContribution: string;

  // 背面-历史影响
  @Column({ name: 'back_influence', type: 'varchar', length: 500, nullable: true })
  backInfluence: string;

  // 背面-趣闻轶事
  @Column({ name: 'back_fun_fact', type: 'varchar', length: 500, nullable: true })
  backFunFact: string;

  // 背面-相关人物，JSON 数组
  @Column({ name: 'back_related_figures', type: 'json', nullable: true })
  backRelatedFigures: string[];

  // 代表作，如"《论语》《春秋》"
  @Column({ name: 'representative_works', type: 'varchar', length: 500, nullable: true })
  representativeWorks: string;

  // 历史评价标签，JSON 数组，如 ["万世师表","儒家始祖",...]
  @Column({ name: 'evaluation_tags', type: 'json', nullable: true })
  evaluationTags: string[];

  // 排序权重
  @Column({ name: 'sort_order', type: 'int', default: 0 })
  @Index()
  sortOrder: number;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;
}

// ==================== 文化遗产表 ====================
@Entity('cultural_heritage')
export class CulturalHeritage extends BaseEntity {
  // 遗产业务ID，如 'heritage-001'，前端路由用
  @Column({ name: 'heritage_id', type: 'varchar', length: 50 })
  @Index({ unique: true })
  heritageId: string;

  // 遗产名称
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 所在地，如"北京"、"西安"
  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  // 遗产分类，如"建筑"、"非遗"、"考古"，前端用于分类筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  // 所属时代，如"明代"
  @Column({ type: 'varchar', length: 100, nullable: true })
  era: string;

  // 年代描述
  @Column({ type: 'varchar', length: 100, nullable: true })
  year: string;

  // 遗产简介
  @Column({ type: 'varchar', length: 500, nullable: true })
  brief: string;

  // 遗产详细描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 历史沿革
  @Column({ type: 'text', nullable: true })
  history: string;

  // 文化意义
  @Column({ name: 'cultural_significance', type: 'text', nullable: true })
  culturalSignificance: string;

  // 特色特征，JSON 数组
  @Column({ type: 'json', nullable: true })
  features: string[];

  // 相关历史人物，JSON 数组
  @Column({ name: 'related_figures', type: 'json', nullable: true })
  relatedFigures: string[];

  // 主图 URL
  @Column({ name: 'image_url', type: 'varchar', length: 500, nullable: true })
  imageUrl: string;

  // 缩略图 URL（列表页用，加载更快）
  @Column({ name: 'thumbnail_url', type: 'varchar', length: 500, nullable: true })
  thumbnailUrl: string;

  // 图片集，JSON 数组
  @Column({ type: 'json', nullable: true })
  images: string[];

  // 相关推荐项目，JSON 数组
  @Column({ name: 'related_items', type: 'json', nullable: true })
  relatedItems: string[];

  // 排序权重
  @Column({ name: 'sort_order', type: 'int', default: 0 })
  @Index()
  sortOrder: number;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;
}

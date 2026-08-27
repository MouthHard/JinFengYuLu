/**
 * ============================================================================
 * 博物馆模块实体 - museum.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这个文件定义了博物馆模块的 11 张数据表（11 个实体类），是所有模块中最多的：
 *
 * 核心表：
 * 1. Museum（博物馆主表）—— 名称/省份/类型/统计数等概要信息
 * 2. MuseumDetail（博物馆详情表）—— 参观信息/历史/建筑/教育等详细内容
 *
 * 子资源表（都通过 museumId 关联到博物馆）：
 * 3. MuseumArtifact（文物表）—— 博物馆藏品概要
 * 4. MuseumArtifactDetail（文物详情表）—— 藏品完整信息
 * 5. MuseumExhibition（展览表）—— 展览活动
 * 6. MuseumActivity（活动表）—— 社教活动
 * 7. MuseumNews（新闻表）—— 博物馆动态
 * 8. MuseumImmersive（沉浸式体验表）—— VR/AR 项目
 * 9. MuseumCreativeProduct（文创产品表）—— 文创商品
 * 10. MuseumAcademicResource（学术资源表）—— 论文/讲座
 * 11. MuseumExhibitionHall（专馆表）—— 专题展厅
 *
 * 【为什么不继承 BaseEntity？】
 * Museum 模块的实体使用自定义主键（@PrimaryColumn 或 @PrimaryGeneratedColumn），
 * 而不是继承 BaseEntity 的自增 id。这是因为数据来自外部导入，ID 需要固定。
 * 但仍然手动定义了 createdAt/updatedAt 字段。
 *
 * 【@PrimaryColumn vs @PrimaryGeneratedColumn】
 * - @PrimaryColumn：主键值由数据导入时指定（如博物馆ID=1就是1）
 * - @PrimaryGeneratedColumn：主键值由数据库自动递增（1, 2, 3...）
 *
 * 【JSON 列说明】
 * visitInfo/basicInfo/stats/artifacts/exhibitions/recommendations 等字段用 JSON 存储，
 * 因为结构复杂且不需要按内部字段单独查询，直接整体返回给前端即可。
 * ============================================================================
 */
import {
  Entity,
  Column,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// ==================== 博物馆主表 ====================
@Entity('museum')
export class Museum {
  // 博物馆ID，由数据导入时指定（非自增）
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 博物馆名称，如"故宫博物院"、"国家博物馆"
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 所在省份，如"北京"、"陕西"，前端用于省份筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  province: string;

  // 博物馆类型，如"综合"、"历史"、"艺术"，前端用于类型筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  type: string;

  // 博物馆封面图 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 博物馆简介
  @Column({ type: 'text', nullable: true })
  description: string;

  // 馆藏文物数量（统计字段，前端直接展示数字）
  @Column({ name: 'artifacts_count', type: 'int', unsigned: true, default: 0 })
  artifactsCount: number;

  // 展览数量
  @Column({ name: 'exhibitions_count', type: 'int', unsigned: true, default: 0 })
  exhibitionsCount: number;

  // 参观人数（年度统计）
  @Column({ type: 'int', unsigned: true, default: 0 })
  visitors: number;

  // 博物馆特色标签，JSON 数组，如 ["世界遗产", "5A景区"]
  @Column({ type: 'json', nullable: true })
  features: string[];

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  // 创建时间（自动填充）
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  // 更新时间（自动更新）
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 博物馆详情表 ====================
@Entity('museum_detail')
export class MuseumDetail {
  // 详情ID（自增主键）
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 关联的博物馆ID（唯一，一个博物馆只有一条详情）
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index({ unique: true }) // 唯一索引：一个博物馆只能有一条详情记录
  museumId: number;

  // 参观信息，JSON 对象，含开放时间/票价/交通等
  @Column({ name: 'visit_info', type: 'json', nullable: true })
  visitInfo: Record<string, unknown>;

  // 博物馆历史沿革
  @Column({ type: 'text', nullable: true })
  history: string;

  // 建筑特色
  @Column({ type: 'text', nullable: true })
  architecture: string;

  // 馆藏亮点，可能是字符串或数组，Service 层会用 formatHighlights() 统一处理
  @Column({ type: 'json', nullable: true })
  highlights: string | string[];

  // 教育活动介绍
  @Column({ type: 'text', nullable: true })
  education: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 文物表 ====================
@Entity('museum_artifact')
export class MuseumArtifact {
  // 文物ID，由数据导入时指定
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 所属博物馆ID（外键）
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 文物名称，如"清明上河图"、"四羊方尊"
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 文物年代，如"北宋"、"商代"
  @Column({ type: 'varchar', length: 100, nullable: true })
  period: string;

  // 文物图片 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 文物简介
  @Column({ type: 'text', nullable: true })
  description: string;

  // 文物分类，如"书画"、"青铜器"，前端用于分类筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  // 基本信息JSON对象，含尺寸/材质/出土地等
  @Column({ name: 'basic_info', type: 'json', nullable: true })
  basicInfo: Record<string, unknown>;

  // 外观描述
  @Column({ type: 'text', nullable: true })
  appearance: string;

  // 历史价值
  @Column({ name: 'historical_value', type: 'text', nullable: true })
  historicalValue: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 文物详情表 ====================
@Entity('museum_artifact_detail')
export class MuseumArtifactDetail {
  // 文物详情ID，由数据导入时指定
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 文物名称
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 文物年代
  @Column({ type: 'varchar', length: 100, nullable: true })
  period: string;

  // 文物详细描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 文物图片 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 文物类型
  @Column({ type: 'varchar', length: 50, nullable: true })
  type: string;

  // 基本信息JSON对象
  @Column({ name: 'basic_info', type: 'json', nullable: true })
  basicInfo: Record<string, unknown>;

  // 外观描述
  @Column({ type: 'text', nullable: true })
  appearance: string;

  // 历史价值
  @Column({ name: 'historical_value', type: 'text', nullable: true })
  historicalValue: string;

  // 文物级别，如"国宝级"、"一级文物"
  @Column({ name: 'artifact_level', type: 'varchar', length: 200, nullable: true })
  artifactLevel: string;

  // 相关故事
  @Column({ name: 'related_story', type: 'text', nullable: true })
  relatedStory: string;

  // 保护状况
  @Column({ name: 'protection_status', type: 'text', nullable: true })
  protectionStatus: string;

  // 文化意义
  @Column({ name: 'cultural_significance', type: 'text', nullable: true })
  culturalSignificance: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 展览表 ====================
@Entity('museum_exhibition')
export class MuseumExhibition {
  // 展览ID，由数据导入时指定
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 所属博物馆ID
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 展览标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // 展览描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 展览日期/时间
  @Column({ type: 'varchar', length: 200, nullable: true })
  date: string;

  // 展览封面图 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 展览地点
  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  // 展览分类，如"常设展"、"临时展"，前端用于筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  // 展览状态码，如"ongoing"/"upcoming"/"ended"
  @Column({ type: 'varchar', length: 50, nullable: true })
  status: string;

  // 展览状态中文文本，如"进行中"/"即将开始"/"已结束"
  @Column({ name: 'status_text', type: 'varchar', length: 100, nullable: true })
  statusText: string;

  // 展览标签，JSON 数组
  @Column({ type: 'json', nullable: true })
  tags: string[];

  // 策展人
  @Column({ type: 'varchar', length: 200, nullable: true })
  curator: string;

  // 展览规模，如"大型"、"中型"
  @Column({ type: 'varchar', length: 100, nullable: true })
  scale: string;

  // 参观人数
  @Column({ type: 'int', unsigned: true, nullable: true })
  visitors: number;

  // 展览背景介绍
  @Column({ type: 'text', nullable: true })
  background: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 活动表 ====================
@Entity('museum_activity')
export class MuseumActivity {
  // 活动ID
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 所属博物馆ID
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 活动标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // 活动描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 活动日期
  @Column({ type: 'varchar', length: 200, nullable: true })
  date: string;

  // 活动时间
  @Column({ type: 'varchar', length: 100, nullable: true })
  time: string;

  // 活动地点
  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  // 活动封面图 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 新闻表 ====================
@Entity('museum_news')
export class MuseumNews {
  // 新闻ID
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 所属博物馆ID
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 新闻标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // 新闻内容
  @Column({ type: 'text', nullable: true })
  description: string;

  // 发布日期
  @Column({ type: 'varchar', length: 50, nullable: true })
  date: string;

  // 新闻配图 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 沉浸式体验表 ====================
@Entity('museum_immersive')
export class MuseumImmersive {
  // 沉浸式项目ID
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 所属博物馆ID
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 项目标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // 项目描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 项目封面图 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 文创产品表 ====================
@Entity('museum_creative_product')
export class MuseumCreativeProduct {
  // 文创产品ID
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 所属博物馆ID
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 产品名称
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 产品描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 产品价格（decimal 类型，精度 10 位，小数 2 位）
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  // 产品图片 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  // 产品分类，如"文具"、"饰品"，前端用于筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  category: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 学术资源表 ====================
@Entity('museum_academic_resource')
export class MuseumAcademicResource {
  // 学术资源ID
  @PrimaryColumn({ type: 'int', unsigned: true })
  id: number;

  // 所属博物馆ID
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 资源标题
  @Column({ type: 'varchar', length: 200 })
  title: string;

  // 作者
  @Column({ type: 'varchar', length: 200, nullable: true })
  author: string;

  // 发表日期
  @Column({ type: 'varchar', length: 50, nullable: true })
  date: string;

  // 资源类型，如"论文"/"讲座"/"报告"，前端用于筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  @Index()
  type: string;

  // 资源描述
  @Column({ type: 'text', nullable: true })
  description: string;

  // 资源链接 URL
  @Column({ type: 'varchar', length: 500, nullable: true })
  link: string;

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

// ==================== 专馆表 ====================
@Entity('museum_exhibition_hall')
export class MuseumExhibitionHall {
  // 专馆ID（自增主键）
  @PrimaryGeneratedColumn('increment')
  id: number;

  // 专馆业务ID，如 'hall-001'，前端路由用
  @Column({ name: 'hall_id', type: 'varchar', length: 100 })
  @Index({ unique: true })
  hallId: string;

  // 所属博物馆ID
  @Column({ name: 'museum_id', type: 'int', unsigned: true })
  @Index()
  museumId: number;

  // 专馆名称
  @Column({ type: 'varchar', length: 200 })
  name: string;

  // 专馆图标
  @Column({ type: 'varchar', length: 50, nullable: true })
  icon: string;

  // 专馆分类，如"书画馆"/"青铜馆"，前端用于筛选
  @Column({ type: 'varchar', length: 100, nullable: true })
  @Index()
  category: string;

  // 封面图 URL
  @Column({ name: 'cover_image', type: 'varchar', length: 500, nullable: true })
  coverImage: string;

  // 专馆介绍
  @Column({ type: 'text', nullable: true })
  introduction: string;

  // 统计数据，JSON 对象，如 { artifacts: 120, exhibitions: 5, visitors: 50000 }
  @Column({ type: 'json', nullable: true })
  stats: Record<string, unknown>;

  // 专馆位置
  @Column({ type: 'varchar', length: 200, nullable: true })
  location: string;

  // 开放时间
  @Column({ name: 'open_time', type: 'varchar', length: 200, nullable: true })
  openTime: string;

  // 参观时长
  @Column({ type: 'varchar', length: 100, nullable: true })
  duration: string;

  // 门票信息
  @Column({ type: 'varchar', length: 200, nullable: true })
  ticket: string;

  // 馆内文物列表，JSON 数组
  @Column({ type: 'json', nullable: true })
  artifacts: unknown[];

  // 馆内展览列表，JSON 数组
  @Column({ type: 'json', nullable: true })
  exhibitions: unknown[];

  // 推荐内容，JSON 数组
  @Column({ type: 'json', nullable: true })
  recommendations: unknown[];

  // 是否启用
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  @Index()
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

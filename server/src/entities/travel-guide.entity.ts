/**
 * ============================================================================
 * 旅游指南模块实体 - travel-guide.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这个文件定义了旅游指南模块的 3 张数据表（3 个实体类）：
 * 1. TravelGuideProvince（省份表）—— 存储省份基本信息
 * 2. TravelGuideScenery（风光表）—— 存储省份的风光数据（景点/季节/路线等）
 * 3. TravelGuideFood（美食表）—— 存储省份的美食数据
 *
 * 【设计模式：JSON 大对象存储】
 * 和音乐模块类似，旅游指南的数据结构复杂且嵌套深，
 * 所以采用"主键 + name + JSON data"的简化设计：
 * - id/provinceId：主键（省份ID，如 'beijing'/'sichuan'）
 * - name：名称（用于搜索）
 * - data：完整对象数据（JSON 类型）
 *
 * Service 层的 toObject() 方法直接把 data JSON 返回给前端，
 * 前端拿到的数据结构和原始 JSON 完全一致。
 *
 * 【省份ID 作为主键】
 * TravelGuideProvince 的主键是字符串省份ID（如 'beijing'），
 * TravelGuideScenery/Food 的主键也是 provinceId（即省份ID），
 * 形成一对一关系：一个省份 → 一条风光数据 + 一条美食数据。
 *
 * 【类比前端】
 * 类似前端的"按省份索引的数据结构"——
 * { beijing: { scenery: {...}, food: {...} }, sichuan: {...} }
 * 后端用三张表分开存储，前端通过 API 分别获取。
 * ============================================================================
 */
import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

// ==================== 省份表 ====================
@Entity('travel_guide_province')
export class TravelGuideProvince {
  // 省份ID，如 'beijing'/'sichuan'，前端路由用
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  // 省份名称，如"北京"/"四川"
  @Column({ type: 'varchar', length: 100 })
  name: string;

  // 所属地区，如"华北"/"华东"/"西南"，前端用于地区筛选
  @Column({ type: 'varchar', length: 50, nullable: true })
  region: string;

  // 省份完整数据，JSON 对象，含简介/气候/最佳季节/热门城市等
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 风光数据表 ====================
@Entity('travel_guide_scenery')
export class TravelGuideScenery {
  // 省份ID（主键，与 TravelGuideProvince.id 一一对应）
  @PrimaryColumn({ name: 'province_id', type: 'varchar', length: 50 })
  provinceId: string;

  // 省份名称
  @Column({ type: 'varchar', length: 100 })
  name: string;

  // 风光完整数据，JSON 对象，含概览/景点/季节/活动/路线/风俗/非遗等
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

// ==================== 美食数据表 ====================
@Entity('travel_guide_food')
export class TravelGuideFood {
  // 省份ID（主键，与 TravelGuideProvince.id 一一对应）
  @PrimaryColumn({ name: 'province_id', type: 'varchar', length: 50 })
  provinceId: string;

  // 省份名称
  @Column({ type: 'varchar', length: 100 })
  name: string;

  // 美食完整数据，JSON 对象，含美食列表(items)和地点(locations)等
  @Column({ type: 'json', nullable: true })
  data: Record<string, unknown>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}

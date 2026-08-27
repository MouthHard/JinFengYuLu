/**
 * ============================================================================
 * 实体统一导出 - index.ts
 * ============================================================================
 * 【前端同学必读】
 * 这个文件是所有实体类（Entity）的"汇总出口"。
 * 类似前端的 barrel 文件（barrel export），把分散在各文件的导出集中到一处，
 * 其他模块只需 `import { Aphorism, Game } from '../../entities'` 即可。
 *
 * 【Entity 是什么？】
 * Entity = 数据库表在 TypeScript 中的映射类。一个 Entity 类 ↔ 数据库一张表。
 * 类的属性（带 @Column 装饰器） ↔ 表的列。
 * 类比前端：类似 TypeScript 的 interface，但多了"能直接操作数据库"的能力。
 *
 * 【为什么需要统一导出？】
 * 在 NestJS 的 Module 中注册实体时，需要把所有用到的实体类列出来。
 * 集中导出后，各业务模块（aphorism/game/history 等）可以方便地按需引入。
 * ============================================================================
 */
export { BaseEntity } from './base.entity'; // 抽象基类：提供 id/createdAt/updatedAt 三个公共字段
export { Category } from './category.entity'; // 通用分类表：支持多级分类（诗词朝代/形式/题材等）
export { Aphorism } from './aphorism.entity'; // 诗词表：存储诗词标题/作者/内容/赏析等
export { AphorismTag } from './aphorism-tag.entity'; // 诗词标签表：每首诗可以有多个标签（多对多拆分）
export { AphorismCategoryRelation } from './aphorism-category-relation.entity'; // 诗词-分类关联表：诗词与分类的多对多关系
export {
  Dynasty, // 朝代表：存储朝代名称/时期/都城/创始人等
  HistoricalEvent, // 历史事件表：存储重大历史事件
  HistoricalFigure, // 历史人物表：存储历史人物及"背面"内容
  CulturalHeritage, // 文化遗产表：存储文化遗产信息
} from './history.entity';
export {
  Museum, // 博物馆主表：名称/省份/类型/统计数等
  MuseumDetail, // 博物馆详情表：参观信息/历史/建筑/教育等
  MuseumArtifact, // 文物表：博物馆下的文物概要信息
  MuseumArtifactDetail, // 文物详情表：文物的完整详细信息
  MuseumExhibition, // 展览表：博物馆的展览活动
  MuseumActivity, // 活动表：博物馆的社教活动
  MuseumNews, // 新闻表：博物馆的新闻动态
  MuseumImmersive, // 沉浸式体验表：VR/AR等沉浸式项目
  MuseumCreativeProduct, // 文创产品表：博物馆文创商品
  MuseumAcademicResource, // 学术资源表：论文/讲座等学术内容
  MuseumExhibitionHall, // 专馆表：博物馆内的专题展厅
} from './museum.entity';

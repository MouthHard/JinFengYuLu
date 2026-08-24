/**
 * ============================================================================
 * 诗词-分类关联实体 - aphorism-category-relation.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这是诗词和分类之间的"关联表"（也叫中间表/桥接表）。
 * 一首诗可以属于多个分类，一个分类下有多首诗——这是"多对多"关系。
 *
 * 【为什么需要关联表？】
 * 数据库不能直接在一张表里表示多对多关系。
 * 比如李白既是"唐代诗人"又是"浪漫主义"，这两个分类分属不同维度。
 * 关联表就是用两列（poemId + categoryId）记录"哪首诗属于哪个分类"。
 *
 * 【数据库表名】aphorism_category_relation
 * 【@Unique 装饰器】保证同一首诗不会重复关联同一分类（防重复数据）。
 *
 * 【类比前端】
 * 类似前端的"标签选择器"——一篇文章可以选多个标签，
 * 后端就是用这种关联表来存储的。
 * ============================================================================
 */
import { Entity, Column, Index, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('aphorism_category_relation') // 映射到数据库的 aphorism_category_relation 表
@Unique(['poemId', 'categoryId']) // 联合唯一约束：同一首诗+同一分类的组合不能重复
export class AphorismCategoryRelation extends BaseEntity {
  // 诗词 ID（外键，指向 aphorism.id）
  @Column({ name: 'poem_id', type: 'int', unsigned: true })
  @Index() // 加索引：按诗词 ID 查关联分类时更快
  poemId: number;

  // 分类 ID（外键，指向 category.id）
  @Column({ name: 'category_id', type: 'int', unsigned: true })
  @Index() // 加索引：按分类 ID 查关联诗词时更快
  categoryId: number;
}

/**
 * ============================================================================
 * 通用分类实体 - category.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这是"通用分类表"，被诗词等多个模块共用。
 * 支持多级分类（通过 parentId 实现树形结构）。
 *
 * 【数据库表名】category
 * 【类比前端】这个表的数据会被后端查询后以树形结构返回给前端，
 *   前端拿到的就是类似 [{ id: 'dynasty', name: '朝代', children: [...] }] 的结构。
 *
 * 【关键字段说明】
 * - type：分类类型，如 'aphorism_dynasty'（诗词-朝代）、'aphorism_form'（诗词-形式）
 * - parentId：父分类ID，为 null 表示顶级分类，实现树形嵌套
 * - sortOrder：排序权重，数值越小越靠前
 * - isActive：软删除标记，0=禁用（不显示），1=启用
 *
 * 【装饰器速查】
 * - @Entity('category') → 映射到数据库的 category 表
 * - @Column() → 声明这是一个数据库列
 * - @Index() → 为该列创建索引，加速查询（类似前端的"给数组建哈希表"）
 * ============================================================================
 */
import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('category') // 映射到数据库的 category 表
export class Category extends BaseEntity {
  // 分类类型，如 'aphorism_dynasty'、'aphorism_form'、'aphorism_subject' 等
  // 同一 type 下的分类归为一组（前端侧边栏的一级分类）
  @Column({ type: 'varchar', length: 50 })
  @Index() // 加索引：按 type 筛选分类时更快
  type: string;

  // 父分类ID，null 表示顶级分类
  // 前端理解：类似树形菜单的 parent 指针
  @Column({ name: 'parent_id', type: 'int', unsigned: true, nullable: true })
  @Index() // 加索引：按父分类查询子分类时更快
  parentId: number;

  // 分类名称，如"唐诗"、"五言绝句"、"边塞诗"等
  @Column({ type: 'varchar', length: 100 })
  name: string;

  // 分类图标（emoji 或图标名），前端直接渲染
  @Column({ type: 'varchar', length: 100, nullable: true })
  icon: string;

  // 分类描述
  @Column({ type: 'varchar', length: 500, nullable: true })
  description: string;

  // 排序权重，数值越小越靠前（前端列表按此排序）
  @Column({ name: 'sort_order', type: 'int', default: 0 })
  sortOrder: number;

  // 是否启用：1=启用（前端可见），0=禁用（前端不可见）
  // 类似前端的"软删除"，数据还在数据库但不再展示
  @Column({ name: 'is_active', type: 'tinyint', default: 1 })
  isActive: boolean;
}

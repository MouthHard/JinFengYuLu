/**
 * ============================================================================
 * 诗词标签实体 - aphorism-tag.entity.ts
 * ============================================================================
 * 【前端同学必读】
 * 这是诗词的"标签"表，用于给诗词打标签（如"思乡"、"送别"、"山水"）。
 * 一首诗可以有多个标签，一个标签可以被多首诗使用——这是"多对多"关系。
 *
 * 【为什么不直接在 aphorism 表加个 tags 字段？】
 * 虽然也可以用 JSON 数组存标签，但单独建表有以下优势：
 * 1. 可以给标签建索引，按标签搜索更快
 * 2. 可以统计每个标签被多少首诗使用（热门标签功能）
 * 3. 数据库层面保证数据一致性
 *
 * 【数据库表名】aphorism_tag
 * 【类比前端】类似前端的"标签系统"——文章和标签的多对多关联表。
 *
 * 【关键字段】
 * - poemId：关联的诗词 ID（对应 aphorism 表的 id）
 * - tag：标签文本，如"思乡"、"送别"
 * ============================================================================
 */
import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('aphorism_tag') // 映射到数据库的 aphorism_tag 表
export class AphorismTag extends BaseEntity {
  // 关联的诗词 ID（外键，指向 aphorism.id）
  @Column({ name: 'poem_id', type: 'int', unsigned: true })
  @Index() // 加索引：按诗词 ID 查标签时更快
  poemId: number;

  // 标签文本，如"思乡"、"送别"、"山水"、"边塞"等
  @Index() // 加索引：按标签名搜索/统计时更快
  @Column({ type: 'varchar', length: 50 })
  tag: string;
}

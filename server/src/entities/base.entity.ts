/**
 * ============================================================================
 * 基础抽象实体 - base.entity.ts
 * ============================================================================
 *
 * 【实体（Entity）是什么？】
 * 实体类 = 数据库表在 TypeScript 中的映射。一个实体类对应数据库中的一张表。
 * 类的属性 = 表的列（Column）。
 *
 * 【类比前端】
 * 实体类 ≈ TypeScript 接口类型（interface），但多了"与数据库关联"的能力。
 * - interface User { id: number; name: string } → 纯类型，运行时不存在
 * - @Entity() class User { @Column() name: string } → 运行时存在，能操作数据库
 *
 * 【这个 BaseEntity 是什么？】
 * 抽象基类，提供所有实体共有的三个字段：
 * - id：自增主键（数据库自动分配，1, 2, 3...）
 * - createdAt：创建时间（插入数据时自动填充）
 * - updatedAt：更新时间（修改数据时自动更新）
 *
 * 其他实体可以 extends BaseEntity 来继承这三个字段，避免重复定义。
 * 但不是所有实体都继承它——有些实体用自定义的字符串 ID（如 landscape 模块）。
 *
 * 【装饰器说明】
 * - @Entity() → 告诉 TypeORM "这是一个数据库表映射类"
 * - @PrimaryGeneratedColumn('increment') → 自增主键列（AUTO_INCREMENT）
 * - @CreateDateColumn → 创建时间列，INSERT 时自动设为当前时间
 * - @UpdateDateColumn → 更新时间列，UPDATE 时自动设为当前时间
 *
 * 【abstract 关键字】
 * 表示这个类不能直接实例化，只能被其他实体继承。
 * 数据库中不会创建名为 "base_entity" 的表。
 */
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}

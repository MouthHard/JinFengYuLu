/**
 * ============================================================================
 * 风景模块 - landscape.module.ts
 * ============================================================================
 *
 * 【模块（Module）是什么？】
 * NestJS 的模块 = 一组相关功能的封装，类似 Vue 的"页面级组件"。
 * 每个模块声明自己需要哪些功能（imports）、提供哪些控制器（controllers）、
 * 提供哪些服务（providers）、对外暴露什么（exports）。
 *
 * 【本模块的组成】
 * - imports: TypeOrmModule.forFeature([...]) → 注册 4 个实体类，让 TypeORM
 *   自动为每张表创建一个 Repository（数据访问对象），Service 中就能通过
 *   @InjectRepository() 注入使用
 * - controllers: [LandscapeController] → 注册路由控制器，处理 HTTP 请求
 * - providers: [LandscapeService] → 注册业务服务，包含查询逻辑
 * - exports: [LandscapeService] → 允许其他模块注入 LandscapeService
 *   （目前没有其他模块使用，但预留了扩展可能）
 *
 * 【依赖注入（DI）】
 * NestJS 的核心设计模式。不需要手动 new LandscapeService(repos)，
 * 框架会自动创建实例并注入到 Controller 中。
 * 类似 Vue 的 provide/inject，但由框架自动管理生命周期。
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandscapeController } from './landscape.controller';
import { LandscapeService } from './landscape.service';
import {
  LandscapePhotographer,
  LandscapeImage,
  LandscapeVideo,
  LandscapeGuide,
  LandscapeHotTopic,
  LandscapePopularDestination,
} from '../../entities/landscape.entity';

@Module({
  imports: [
    /**
     * TypeOrmModule.forFeature() — 注册本模块需要的数据库表
     * 调用后，TypeORM 会为每个实体创建一个 Repository 对象，
     * 可以在 Service 中通过 @InjectRepository() 注入使用。
     *
     * Repository 是什么？→ 数据库操作的封装，类似前端的 Store：
     * - repository.find() → 查询多条
     * - repository.findOne() → 查询一条
     * - repository.createQueryBuilder() → 构建复杂查询
     */
    TypeOrmModule.forFeature([
      LandscapePhotographer,
      LandscapeImage,
      LandscapeVideo,
      LandscapeGuide,
      LandscapeHotTopic,
      LandscapePopularDestination,
    ]),
  ],
  controllers: [LandscapeController],
  providers: [LandscapeService],
  exports: [LandscapeService],
})
export class LandscapeModule {}

/**
 * ============================================================================
 * 诗词模块 - aphorism.module.ts
 * ============================================================================
 * 【前端同学必读】
 * 这是 NestJS 的"模块"文件，相当于前端的"插件注册"或"依赖注入容器"。
 *
 * 【Module 是什么？】
 * 在 NestJS 中，Module 用来把相关的 Controller（路由处理）、Service（业务逻辑）、
 * Entity（数据模型）打包在一起。类似 Vue 的组件或 React 的 Context Provider。
 *
 * 【各字段含义】
 * - imports：导入本模块需要的依赖。TypeOrmModule.forFeature([...]) 表示
 *   "把这些 Entity 注册到本模块的数据库操作上下文中"，之后才能在 Service 中注入 Repository。
 * - controllers：注册路由处理器（类似前端的"页面/路由组件"）
 * - providers：注册服务提供者（类似前端的"store/composable"）
 * - exports：导出 Service，使其他模块也能使用（类似前端的"provide/inject"）
 *
 * 【依赖注入（DI）是什么？】
 * 不需要手动 new AphorismService()，NestJS 框架会自动创建实例并注入到 Controller 中。
 * 类比前端：类似 Vue 的 provide/inject 或 React 的 useContext。
 *
 * 【TypeOrmModule.forFeature vs forRoot】
 * - forRoot：在 AppModule 中调用一次，建立数据库连接
 * - forFeature：在各业务模块中调用，注册该模块用到的 Entity
 * ============================================================================
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AphorismController } from './aphorism.controller';
import { AphorismService } from './aphorism.service';
import { Aphorism } from '../../entities/aphorism.entity';
import { AphorismTag } from '../../entities/aphorism-tag.entity';
import { AphorismCategoryRelation } from '../../entities/aphorism-category-relation.entity';
import { Category } from '../../entities/category.entity';

@Module({
  imports: [
    // 注册本模块用到的 4 个 Entity，之后可以在 Service 中通过 @InjectRepository 注入
    TypeOrmModule.forFeature([
      Aphorism, // 诗词表
      AphorismTag, // 诗词标签表
      AphorismCategoryRelation, // 诗词-分类关联表
      Category, // 通用分类表
    ]),
  ],
  controllers: [AphorismController], // 注册控制器，处理 HTTP 请求
  providers: [AphorismService], // 注册服务，包含业务逻辑
  exports: [AphorismService], // 导出服务，允许其他模块使用
})
export class AphorismModule {}

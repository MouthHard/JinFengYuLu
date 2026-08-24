/**
 * ============================================================================
 * 历史模块 - history.module.ts
 * ============================================================================
 * 【前端同学必读】
 * 历史模块的 NestJS Module 文件，注册了历史模块用到的 4 个 Entity 和对应的 Controller/Service。
 *
 * 【注册的 Entity】
 * - Dynasty：朝代表
 * - HistoricalEvent：历史事件表
 * - HistoricalFigure：历史人物表
 * - CulturalHeritage：文化遗产表
 *
 * 【Module 的作用】
 * 把 Controller（路由）、Service（业务逻辑）、Repository（数据访问）打包在一起，
 * 通过 NestJS 的依赖注入系统自动管理。类似前端的"模块化注册"。
 * ============================================================================
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import {
  Dynasty,
  HistoricalEvent,
  HistoricalFigure,
  CulturalHeritage,
} from '../../entities/history.entity';

@Module({
  imports: [
    // 注册 4 个 Entity，之后 Service 中可通过 @InjectRepository 注入对应的 Repository
    TypeOrmModule.forFeature([
      Dynasty, // 朝代表
      HistoricalEvent, // 历史事件表
      HistoricalFigure, // 历史人物表
      CulturalHeritage, // 文化遗产表
    ]),
  ],
  controllers: [HistoryController], // 注册控制器
  providers: [HistoryService], // 注册服务
  exports: [HistoryService], // 导出服务，允许其他模块使用
})
export class HistoryModule {}

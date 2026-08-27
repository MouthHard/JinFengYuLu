/**
 * ============================================================================
 * 旅游指南模块 - travel-guide.module.ts
 * ============================================================================
 * 【前端同学必读】
 * 旅游指南模块的 NestJS Module 文件，注册了 3 个 Entity。
 *
 * 【注册的 Entity 列表】
 * - TravelGuideProvince：省份表（省份基本信息 + JSON 完整数据）
 * - TravelGuideScenery：风光表（省份的风光数据）
 * - TravelGuideFood：美食表（省份的美食数据）
 *
 * 【模块设计】
 * 旅游指南采用"省份"为核心的数据组织方式：
 * - 省份列表 → 前端展示省份选择器
 * - 每个省份 → 一条风光数据 + 一条美食数据
 * - 数据以 JSON 大对象形式存储，Service 层直接透传给前端
 * ============================================================================
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelGuideController } from './travel-guide.controller';
import { TravelGuideService } from './travel-guide.service';
import {
  TravelGuideProvince,
  TravelGuideScenery,
  TravelGuideFood,
} from '../../entities/travel-guide.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TravelGuideProvince, // 省份表
      TravelGuideScenery, // 风光表
      TravelGuideFood, // 美食表
    ]),
  ],
  controllers: [TravelGuideController],
  providers: [TravelGuideService],
  exports: [TravelGuideService],
})
export class TravelGuideModule {}

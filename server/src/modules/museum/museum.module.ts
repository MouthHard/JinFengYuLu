/**
 * ============================================================================
 * 博物馆模块 - museum.module.ts
 * ============================================================================
 * 【前端同学必读】
 * 博物馆模块的 NestJS Module 文件，注册了 11 个 Entity（所有模块中最多的）。
 *
 * 【注册的 Entity 列表】
 * - Museum：博物馆主表
 * - MuseumDetail：博物馆详情表
 * - MuseumArtifact：文物表
 * - MuseumArtifactDetail：文物详情表
 * - MuseumExhibition：展览表
 * - MuseumActivity：活动表
 * - MuseumNews：新闻表
 * - MuseumImmersive：沉浸式体验表
 * - MuseumCreativeProduct：文创产品表
 * - MuseumAcademicResource：学术资源表
 * - MuseumExhibitionHall：专馆表
 *
 * 【为什么博物馆模块有这么多 Entity？】
 * 博物馆是一个内容丰富的模块，包含博物馆本身、文物、展览、活动、
 * 新闻、沉浸式体验、文创、学术资源、专馆等多种子资源，
 * 每种子资源都有独立的数据结构，所以需要独立的表。
 * ============================================================================
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumController } from './museum.controller';
import { MuseumService } from './museum.service';
import {
  Museum,
  MuseumDetail,
  MuseumArtifact,
  MuseumArtifactDetail,
  MuseumExhibition,
  MuseumActivity,
  MuseumNews,
  MuseumImmersive,
  MuseumCreativeProduct,
  MuseumAcademicResource,
  MuseumExhibitionHall,
} from '../../entities/museum.entity';

@Module({
  imports: [
    // 注册 11 个 Entity
    TypeOrmModule.forFeature([
      Museum, // 博物馆主表
      MuseumDetail, // 博物馆详情表
      MuseumArtifact, // 文物表
      MuseumArtifactDetail, // 文物详情表
      MuseumExhibition, // 展览表
      MuseumActivity, // 活动表
      MuseumNews, // 新闻表
      MuseumImmersive, // 沉浸式体验表
      MuseumCreativeProduct, // 文创产品表
      MuseumAcademicResource, // 学术资源表
      MuseumExhibitionHall, // 专馆表
    ]),
  ],
  controllers: [MuseumController],
  providers: [MuseumService],
  exports: [MuseumService],
})
export class MuseumModule {}

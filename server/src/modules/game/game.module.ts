/**
 * ============================================================================
 * 游戏模块 - game.module.ts
 * ============================================================================
 * 【前端同学必读】
 * 游戏模块的 NestJS Module 文件，注册了 7 个 Entity。
 *
 * 【注册的 Entity 列表】
 * - Game：游戏主表
 * - GameScreenshot：截图表
 * - GameFeature：特性表
 * - GameTag：标签表
 * - GamePlatform：平台表
 * - GameBanner：Banner 配置表
 * - GameCategory：分类配置表
 *
 * 【为什么截图/特性/标签/平台也要注册？】
 * 因为 GameService 中需要注入这些表的 Repository 来查询关联数据。
 * 如果不注册，NestJS 启动时会报依赖注入错误。
 * ============================================================================
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import {
  Game,
  GameScreenshot,
  GameFeature,
  GameTag,
  GamePlatform,
  GameBanner,
  GameCategory,
} from '../../entities/game.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Game, // 游戏主表
      GameScreenshot, // 截图表
      GameFeature, // 特性表
      GameTag, // 标签表
      GamePlatform, // 平台表
      GameBanner, // Banner 配置表
      GameCategory, // 分类配置表
    ]),
  ],
  controllers: [GameController],
  providers: [GameService],
  exports: [GameService],
})
export class GameModule {}

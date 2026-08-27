/**
 * ============================================================================
 * 根模块 - app.module.ts
 * ============================================================================
 *
 * 【前端同学必读】这个文件是 NestJS 应用的"根组件"，类似 Vue 的 App.vue。
 * 它负责：加载环境变量、连接数据库、注册所有业务模块。
 *
 * NestJS 的模块系统（Module）类似 Vue 的组件系统：
 * - @Module() 装饰器 = 定义一个模块（类似 defineComponent）
 * - imports = 导入其他模块（类似 Vue 组件的 components 注册）
 * - 每个业务模块（landscape/game 等）内部有自己的 Controller + Service + Entity
 *
 * ============================================================================
 */

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AphorismModule } from './modules/aphorism/aphorism.module';
import { GameModule } from './modules/game/game.module';
import { HistoryModule } from './modules/history/history.module';
import { MuseumModule } from './modules/museum/museum.module';
import { LandscapeModule } from './modules/landscape/landscape.module';
import { MusicModule } from './modules/music/music.module';
import { TravelGuideModule } from './modules/travel-guide/travel-guide.module';

@Module({
  imports: [
    /**
     * ============================================================================
     * ConfigModule — 环境变量配置模块
     * ============================================================================
     *
     * 【这是什么？】
     * 从 .env 文件加载环境变量，类似前端的 VITE_XXX 变量。
     * isGlobal: true 表示全局可用，任何模块都能通过 ConfigService 读取。
     *
     * .env 文件示例：
     *   DB_HOST=localhost
     *   DB_PORT=3306
     *   DB_USERNAME=root
     *   DB_PASSWORD=123456
     *   DB_DATABASE=personal_website
     *
     * 【为什么不用硬编码？】
     * 不同环境（开发/测试/生产）的数据库密码、端口等不同，
     * 放在 .env 中可以在不修改代码的情况下切换环境。
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),

    /**
     * ============================================================================
     * ThrottlerModule — API 速率限制
     * ============================================================================
     *
     * 【为什么需要限流？】
     * 防止恶意用户短时间内大量请求导致服务器过载。
     * 每个 IP 每 60 秒最多 100 次请求，超过返回 429 Too Many Requests。
     */
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),

    /**
     * ============================================================================
     * TypeOrmModule — 数据库连接模块（ORM = 对象关系映射）
     * ============================================================================
     *
     * 【ORM 是什么？】
     * ORM（Object-Relational Mapping）让你用 TypeScript 类操作数据库，
     * 而不是手写 SQL。类似前端的"用对象操作 DOM"而不是"手写 HTML 字符串"。
     *
     * 【举例】
     * 不用 ORM：SELECT * FROM landscape_photographer WHERE id = 'p001'
     * 用 ORM：  repository.findOne({ where: { id: 'p001' } })
     * 两者效果完全一样，ORM 帮你生成 SQL。
     *
     * 【forRootAsync vs forRoot】
     * forRootAsync = 异步初始化，因为数据库配置需要从 ConfigService 读取（异步依赖）
     * 如果配置是固定的，可以用 forRoot 直接写死。
     *
     * 【关键配置说明】
     * - type: 'mysql' → 使用 MySQL 数据库（需安装 mysql2 驱动包）
     * - host/port/username/password/database → 从 .env 读取，有默认值
     * - entities → 告诉 TypeORM 去哪里找实体类（/*.entity.ts 匹配所有实体文件）
     * - synchronize: false → 【重要】禁止自动同步！
     *   如果设为 true，TypeORM 会根据实体类自动修改数据库表结构（加列/删列），
     *   生产环境极其危险（可能丢失数据）。我们用 database/ 目录下的 SQL 脚本手动管理。
     * - logging → 开发环境打印 SQL 日志，方便调试
     * - charset: 'utf8mb4' → 支持 emoji 和中文（4字节 UTF-8 编码）
     */
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 3306),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', ''),
        database: configService.get('DB_DATABASE', 'personal_website'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: configService.get('NODE_ENV') === 'development',
        charset: 'utf8mb4',
      }),
      inject: [ConfigService],
    }),

    /**
     * ============================================================================
     * 业务模块注册
     * ============================================================================
     *
     * 每个业务模块对应网站的一个功能区域：
     * - AphorismModule → 诗词模块（/api/aphorism）
     * - GameModule → 游戏模块（/api/game）
     * - HistoryModule → 历史模块（/api/history）
     * - MuseumModule → 博物馆模块（/api/museum）
     * - LandscapeModule → 风景模块（/api/landscape）← 你主要在用的
     * - MusicModule → 音乐模块（/api/music）
     * - TravelGuideModule → 旅游指南模块（/api/travel-guide）
     *
     * 每个模块内部结构一致：Module + Controller + Service + DTO + Entity
     * 详见各模块目录下的注释。
     */
    AphorismModule,
    GameModule,
    HistoryModule,
    MuseumModule,
    LandscapeModule,
    MusicModule,
    TravelGuideModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

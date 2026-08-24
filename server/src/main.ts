/**
 * ============================================================================
 * 应用入口文件 - main.ts
 * ============================================================================
 *
 * 【前端同学必读】这个文件是整个后端服务的启动入口，相当于前端的 main.ts / index.ts。
 * 它负责：创建应用实例、配置跨域、注册全局管道、挂载 API 文档、启动 HTTP 监听。
 *
 * NestJS 应用的启动流程：
 * 1. NestFactory.create() → 创建应用实例（类似 Vue 的 createApp()）
 * 2. 配置中间件/管道/插件 → 类似 Vue 的 app.use()
 * 3. app.listen() → 启动 HTTP 服务器监听端口
 *
 * 运行方式：npm run start:dev（开发模式，文件变动自动重启）
 *          npm run start:prod（生产模式，需先 npm run build）
 * ============================================================================
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

async function bootstrap() {
  /**
   * 创建 NestJS 应用实例
   * - AppModule 是根模块，包含了所有业务模块的注册（类似 Vue 的根组件）
   * - logger: 只输出 error/warn/log 三种级别，过滤 debug 和 verbose
   */
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  /**
   * Helmet — HTTP 安全头中间件
   * 设置 X-Content-Type-Options、X-Frame-Options、Strict-Transport-Security 等安全头
   * 防止 MIME 类型嗅探、点击劫持、降级攻击等
   */
  app.use(helmet());

  /**
   * ConfigService：从 .env 文件读取环境变量
   * - 类似前端的 import.meta.env / process.env
   * - .env 文件在项目根目录 server/.env 中（已 gitignore，不提交到代码仓库）
   */
  const configService = app.get(ConfigService);

  /**
   * NODE_ENV 环境判断
   * - production：生产环境，启用严格 CORS、关闭 Swagger 文档
   * - development：开发环境，CORS 全开放、开启 Swagger、开启 SQL 日志
   */
  const isProduction = configService.get('NODE_ENV') === 'production';

  /**
   * ============================================================================
   * CORS（跨域资源共享）配置
   * ============================================================================
   *
   * 【为什么需要 CORS？】
   * 前端运行在 localhost:5173（Vite），后端运行在 localhost:3000（NestJS），
   * 端口不同 = 跨域。浏览器默认会拦截跨域请求，CORS 头告诉浏览器"允许这个源访问"。
   *
   * - production：只允许 CORS_ORIGIN 环境变量指定的域名访问（如 https://yourdomain.com）
   * - development：允许所有来源访问（origin: '*'）
   * - credentials: true → 允许携带 Cookie / Authorization 头（登录态需要）
   * - methods → 允许的 HTTP 方法
   */
  app.enableCors({
    origin: (() => {
      if (!isProduction) return '*';
      const corsOrigin = configService.get<string>('CORS_ORIGIN');
      if (!corsOrigin) {
        throw new Error(
          '生产环境必须设置 CORS_ORIGIN 环境变量，指定允许的前端域名',
        );
      }
      return corsOrigin.split(',').map((s) => s.trim());
    })(),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  /**
   * ============================================================================
   * 全局验证管道（ValidationPipe）
   * ============================================================================
   *
   * 【这是什么？】
   * 类似前端的表单验证，但作用于后端接收的请求参数。
   * 每个接口的 DTO 类（如 QueryLandscapeDto）中用装饰器定义了验证规则，
   * ValidationPipe 会自动在请求进入 Controller 之前执行验证。
   *
   * - whitelist: true → 自动剔除 DTO 中未定义的字段（防止客户端传入多余字段）
   * - forbidNonWhitelisted: true → 如果有未定义字段，直接报错 400（比 whitelist 更严格）
   * - transform: true → 自动将请求参数转为 DTO 中声明的类型（如字符串 "123" → 数字 123）
   *
   * 【举例】
   * DTO 声明了 page?: number，前端传 ?page=abc
   * → 没有 transform：page 是字符串 "abc"，后续逻辑可能出错
   * → 有 transform：自动转为数字 NaN，ValidationPipe 会报 400 错误
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /**
   * 全局路由前缀
   * 所有接口自动加上 /api 前缀，如 /api/landscape/photographers
   * 前端请求时需要拼接这个前缀（在 services/request.ts 中已配置 baseURL）
   */
  app.setGlobalPrefix('api');

  /**
   * ============================================================================
   * Swagger API 文档（仅开发环境）
   * ============================================================================
   *
   * 访问 http://localhost:3000/api/docs 可以看到所有接口的交互式文档。
   * 类似前端的 Storybook，但用于 API 接口。
   * 可以直接在页面上测试接口，无需 Postman。
   *
   * 生产环境不启用，避免暴露接口细节。
   */
  if (!isProduction) {
    const config = new DocumentBuilder()
      .setTitle('个人网站 API')
      .setDescription('个人网站后端 API 文档')
      .setVersion('0.1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  }

  /**
   * 启动 HTTP 监听
   * PORT 从 .env 读取，默认 3000
   * 启动后可通过 http://localhost:3000/api/xxx 访问所有接口
   */
  const port = configService.get('PORT', 3000);
  await app.listen(port);

  const logger = new Logger('Bootstrap');
  logger.log(`🚀 后端服务已启动: http://localhost:${port}`);
  if (!isProduction) {
    logger.log(`📚 API 文档: http://localhost:${port}/api/docs`);
  }
}

bootstrap();

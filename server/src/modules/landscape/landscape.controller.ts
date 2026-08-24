/**
 * ============================================================================
 * 风景模块控制器 - landscape.controller.ts
 * ============================================================================
 *
 * 【控制器（Controller）是什么？】
 * 控制器 = 路由处理器，负责接收 HTTP 请求并返回响应。
 * 类似前端的"API 调用定义"——前端用 axios.get('/landscape/photographers')，
 * 后端用 @Get('photographers') 来接收这个请求。
 *
 * 【NestJS 路由装饰器】
 * - @Controller('landscape') → 所有路由以 /api/landscape 开头
 * - @Get('photographers') → 处理 GET /api/landscape/photographers
 * - @Get('photographers/:id') → 处理 GET /api/landscape/photographers/p001
 * - @Query() → 获取 URL 查询参数（?keyword=xxx&page=1）
 * - @Param('id') → 获取 URL 路径参数（:id 部分）
 *
 * 【Swagger 装饰器】
 * - @ApiTags('风景') → 在 Swagger 文档中分组为"风景"
 * - @ApiOperation → 接口描述文字
 * - @ApiResponse → 响应状态码说明
 * 这些装饰器不影响运行逻辑，只是生成 API 文档。
 *
 * 【@Header('Cache-Control', 'public, max-age=300')】
 * 在响应头中添加缓存指令，告诉浏览器：
 * - public → 可以被 CDN/代理缓存
 * - max-age=300 → 缓存 300 秒（5分钟），期间浏览器不会重复请求
 * 只加了列表接口，详情接口没加（因为详情可能更频繁变化）
 *
 * 【请求流转过程】
 * 前端请求 → CORS 检查 → ValidationPipe 验证参数 → Controller 方法 → Service 查数据库 → 返回 JSON
 */

import { Controller, Get, Query, Param, Res, Header } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LandscapeService } from './landscape.service';
import { QueryLandscapeDto } from './dto/landscape.dto';

@ApiTags('风景')
@Controller('landscape')
export class LandscapeController {
  /**
   * 依赖注入：NestJS 自动创建 LandscapeService 实例并传入
   * private readonly → 只读，不可重新赋值
   * 类似 Vue 的 inject()，但由框架自动完成
   */
  constructor(private readonly landscapeService: LandscapeService) {}

  /**
   * GET /api/landscape/photographers?keyword=xxx&category=风光&page=1&limit=20
   *
   * @Query() query → 自动将 URL 查询参数解析为 QueryLandscapeDto 对象
   * QueryLandscapeDto 中定义了每个参数的类型和验证规则
   */
  @Get('photographers')
  @ApiOperation({ summary: '获取摄影师列表' })
  @ApiResponse({ status: 200, description: '返回摄影师列表' })
  @Header('Cache-Control', 'public, max-age=300')
  findPhotographers(@Query() query: QueryLandscapeDto) {
    return this.landscapeService.findPhotographers(query);
  }

  /**
   * GET /api/landscape/photographers/p001
   *
   * @Param('id') → 从 URL 路径中提取 :id 参数
   */
  @Get('photographers/:id')
  @ApiOperation({ summary: '获取单个摄影师' })
  @ApiResponse({ status: 200, description: '返回摄影师详情' })
  @Header('Cache-Control', 'public, max-age=600')
  findPhotographerById(@Param('id') id: string) {
    return this.landscapeService.findPhotographerById(id);
  }

  @Get('images')
  @ApiOperation({ summary: '获取图片作品列表' })
  @ApiResponse({ status: 200, description: '返回图片作品列表' })
  @Header('Cache-Control', 'public, max-age=300')
  findImages(@Query() query: QueryLandscapeDto) {
    return this.landscapeService.findImages(query);
  }

  @Get('images/:id')
  @ApiOperation({ summary: '获取单个图片作品' })
  @ApiResponse({ status: 200, description: '返回图片作品详情' })
  @Header('Cache-Control', 'public, max-age=600')
  findImageById(@Param('id') id: string) {
    return this.landscapeService.findImageById(id);
  }

  @Get('videos')
  @ApiOperation({ summary: '获取视频作品列表' })
  @ApiResponse({ status: 200, description: '返回视频作品列表' })
  @Header('Cache-Control', 'public, max-age=300')
  findVideos(@Query() query: QueryLandscapeDto) {
    return this.landscapeService.findVideos(query);
  }

  @Get('videos/:id')
  @ApiOperation({ summary: '获取单个视频作品' })
  @ApiResponse({ status: 200, description: '返回视频作品详情' })
  @Header('Cache-Control', 'public, max-age=600')
  findVideoById(@Param('id') id: string) {
    return this.landscapeService.findVideoById(id);
  }

  @Get('guides')
  @ApiOperation({ summary: '获取攻略列表' })
  @ApiResponse({ status: 200, description: '返回攻略列表' })
  @Header('Cache-Control', 'public, max-age=300')
  findGuides(@Query() query: QueryLandscapeDto) {
    return this.landscapeService.findGuides(query);
  }

  @Get('guides/:id')
  @ApiOperation({ summary: '获取单个攻略' })
  @ApiResponse({ status: 200, description: '返回攻略详情' })
  @Header('Cache-Control', 'public, max-age=600')
  findGuideById(@Param('id') id: string) {
    return this.landscapeService.findGuideById(id);
  }

  @Get('hot-topics')
  @ApiOperation({ summary: '获取热门主题列表' })
  @ApiResponse({ status: 200, description: '返回热门主题列表' })
  @Header('Cache-Control', 'public, max-age=300')
  findHotTopics(@Query() query: QueryLandscapeDto) {
    return this.landscapeService.findHotTopics(query);
  }

  @Get('popular-destinations')
  @ApiOperation({ summary: '获取热门目的地列表' })
  @ApiResponse({ status: 200, description: '返回热门目的地列表' })
  @Header('Cache-Control', 'public, max-age=300')
  findPopularDestinations(@Query() query: QueryLandscapeDto) {
    return this.landscapeService.findPopularDestinations(query);
  }
}

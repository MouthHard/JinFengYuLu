/**
 * ============================================================================
 * 诗词模块控制器 - aphorism.controller.ts
 * ============================================================================
 * 【前端同学必读】
 * Controller 是 NestJS 的"路由处理器"，定义了前端可以调用的 API 接口。
 * 每个方法对应一个 HTTP 端点，前端通过 axios/fetch 调用这些端点获取数据。
 *
 * 【Controller 是什么？】
 * 类比前端：Controller ≈ API 路由定义文件。
 * - @Controller('aphorism') → 基础路径为 /aphorism
 * - @Get() → GET /aphorism（列表）
 * - @Get('featured') → GET /aphorism/featured（精选）
 * - @Get(':id') → GET /aphorism/:id（详情）
 *
 * 【装饰器说明】
 * - @ApiTags('诗词') → Swagger 文档分组标签
 * - @ApiOperation({ summary: '...' }) → Swagger 接口描述
 * - @Query() → 从 URL 查询参数获取数据（?keyword=李白&page=1）
 * - @Param('id') → 从 URL 路径参数获取数据（/aphorism/123）
 * - @ParseIntPipe → 自动将字符串参数转为数字，失败返回 400 错误
 *
 * 【前端对应的 API 调用示例】
 * - GET /aphorism → 获取诗词列表（分页+筛选）
 * - GET /aphorism/featured → 获取精选诗词
 * - GET /aphorism/categories → 获取分类体系
 * - GET /aphorism/tags/hot → 获取热门标签
 * - GET /aphorism/123 → 获取 ID=123 的诗词详情
 * ============================================================================
 */
import { Controller, Get, Query, Param, ParseIntPipe, Header } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AphorismService } from './aphorism.service';
import { QueryAphorismDto } from './dto/aphorism.dto';

@ApiTags('诗词') // Swagger 文档中的分组标签
@Controller('aphorism') // 基础路由：/aphorism
export class AphorismController {
  // 依赖注入：NestJS 自动创建 AphorismService 实例并传入
  constructor(private readonly aphorismService: AphorismService) {}

  // GET /aphorism — 获取诗词列表（支持分页、关键词搜索、朝代/作者/分类/标签筛选）
  @Get()
  @ApiOperation({ summary: '获取诗词列表（分页+筛选）' })
  @ApiResponse({ status: 200, description: '返回诗词列表' })
  async findAll(@Query() query: QueryAphorismDto) {
    return this.aphorismService.findAll(query);
  }

  // GET /aphorism/featured — 获取精选诗词（isFeatured=true，按浏览量降序）
  @Get('featured')
  @ApiOperation({ summary: '获取精选诗词' })
  async findFeatured(@Query('limit') limit?: number) {
    return this.aphorismService.findAll({
      isFeatured: true,
      limit: limit || 10,
      sortBy: 'viewCount',
      sortOrder: 'DESC',
    });
  }

  // GET /aphorism/categories — 获取诗词分类体系（6大分类 + 每个分类的诗词数量）
  @Get('categories')
  @ApiOperation({ summary: '获取诗词分类体系（含动态计数）' })
  @ApiResponse({ status: 200, description: '返回6大分类体系树形结构' })
  @Header('Cache-Control', 'public, max-age=300')
  async getCategories() {
    return this.aphorismService.getCategories();
  }

  // GET /aphorism/tags/hot — 获取热门标签（按引用次数降序）
  @Get('tags/hot')
  @ApiOperation({ summary: '获取热门标签' })
  @ApiResponse({ status: 200, description: '返回热门标签列表' })
  @Header('Cache-Control', 'public, max-age=300')
  async getHotTags(@Query('limit') limit?: number) {
    return this.aphorismService.getHotTags(limit || 20);
  }

  // GET /aphorism/:id — 获取单个诗词详情（同时增加浏览量）
  @Get(':id')
  @ApiOperation({ summary: '获取单个诗词详情' })
  @Header('Cache-Control', 'no-store')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.aphorismService.findOne(id);
  }
}

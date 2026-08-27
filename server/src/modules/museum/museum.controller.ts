/**
 * ============================================================================
 * 博物馆模块控制器 - museum.controller.ts
 * ============================================================================
 * 【前端同学必读】
 * 博物馆模块的 API 路由定义，提供博物馆及其子资源的查询端点。
 *
 * 【API 端点一览】
 * - GET /museum → 博物馆列表（支持省份/类型/关键词筛选）
 * - GET /museum/artifacts → 文物列表
 * - GET /museum/artifacts/:id → 单个文物
 * - GET /museum/artifact-details/:id → 文物详细信息
 * - GET /museum/exhibitions → 展览列表
 * - GET /museum/activities → 活动列表
 * - GET /museum/news → 新闻列表
 * - GET /museum/immersive → 沉浸式体验列表
 * - GET /museum/creative-products → 文创产品列表
 * - GET /museum/academic-resources → 学术资源列表
 * - GET /museum/exhibition-halls → 专馆列表
 * - GET /museum/:id/detail → 博物馆详情（参观信息等）
 * - GET /museum/:id → 单个博物馆信息
 *
 * 【路由顺序很重要】
 * NestJS 按定义顺序匹配路由。'artifacts'、'exhibitions' 等固定路径必须放在 ':id' 之前，
 * 否则 'artifacts' 会被当作 id 参数匹配。
 * ============================================================================
 */
import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MuseumService } from './museum.service';
import { QueryMuseumDto } from './dto/museum.dto';

@ApiTags('博物馆') // Swagger 文档分组
@Controller('museum') // 基础路由：/museum
export class MuseumController {
  constructor(private readonly museumService: MuseumService) {}

  // GET /museum — 博物馆列表
  @Get()
  @ApiOperation({ summary: '获取博物馆列表' })
  @ApiResponse({ status: 200, description: '返回博物馆列表' })
  async findMuseums(@Query() query: QueryMuseumDto) {
    return this.museumService.findMuseums(query);
  }

  // GET /museum/artifacts — 文物列表
  @Get('artifacts')
  @ApiOperation({ summary: '获取文物列表' })
  @ApiResponse({ status: 200, description: '返回文物列表' })
  async findArtifacts(@Query() query: QueryMuseumDto) {
    return this.museumService.findArtifacts(query);
  }

  // GET /museum/artifacts/:id — 单个文物
  @Get('artifacts/:id')
  @ApiOperation({ summary: '获取单个文物' })
  @ApiResponse({ status: 200, description: '返回文物详情' })
  async findArtifactById(@Param('id', ParseIntPipe) id: number) {
    return this.museumService.findArtifactById(id);
  }

  // GET /museum/artifact-details/:id — 文物详细信息
  @Get('artifact-details/:id')
  @ApiOperation({ summary: '获取文物详细信息' })
  @ApiResponse({ status: 200, description: '返回文物详细信息' })
  async findArtifactDetail(@Param('id', ParseIntPipe) id: number) {
    return this.museumService.findArtifactDetail(id);
  }

  // GET /museum/exhibitions — 展览列表
  @Get('exhibitions')
  @ApiOperation({ summary: '获取展览列表' })
  @ApiResponse({ status: 200, description: '返回展览列表' })
  async findExhibitions(@Query() query: QueryMuseumDto) {
    return this.museumService.findExhibitions(query);
  }

  // GET /museum/activities — 活动列表
  @Get('activities')
  @ApiOperation({ summary: '获取活动列表' })
  @ApiResponse({ status: 200, description: '返回活动列表' })
  async findActivities(@Query() query: QueryMuseumDto) {
    return this.museumService.findActivities(query);
  }

  // GET /museum/news — 新闻列表
  @Get('news')
  @ApiOperation({ summary: '获取新闻列表' })
  @ApiResponse({ status: 200, description: '返回新闻列表' })
  async findNews(@Query() query: QueryMuseumDto) {
    return this.museumService.findNews(query);
  }

  // GET /museum/immersive — 沉浸式体验列表
  @Get('immersive')
  @ApiOperation({ summary: '获取沉浸式体验列表' })
  @ApiResponse({ status: 200, description: '返回沉浸式体验列表' })
  async findImmersive(@Query() query: QueryMuseumDto) {
    return this.museumService.findImmersive(query);
  }

  // GET /museum/creative-products — 文创产品列表
  @Get('creative-products')
  @ApiOperation({ summary: '获取文创产品列表' })
  @ApiResponse({ status: 200, description: '返回文创产品列表' })
  async findCreativeProducts(@Query() query: QueryMuseumDto) {
    return this.museumService.findCreativeProducts(query);
  }

  // GET /museum/academic-resources — 学术资源列表
  @Get('academic-resources')
  @ApiOperation({ summary: '获取学术资源列表' })
  @ApiResponse({ status: 200, description: '返回学术资源列表' })
  async findAcademicResources(@Query() query: QueryMuseumDto) {
    return this.museumService.findAcademicResources(query);
  }

  // GET /museum/exhibition-halls — 专馆列表
  @Get('exhibition-halls')
  @ApiOperation({ summary: '获取专馆列表' })
  @ApiResponse({ status: 200, description: '返回专馆列表' })
  async findExhibitionHalls(@Query() query: QueryMuseumDto) {
    return this.museumService.findExhibitionHalls(query);
  }

  // GET /museum/:id/detail — 博物馆详情（参观信息/历史/建筑等）
  // 注意：此路由在 :id 之前，因为 'detail' 是固定路径
  @Get(':id/detail')
  @ApiOperation({ summary: '获取博物馆详情（参观信息等）' })
  @ApiResponse({ status: 200, description: '返回博物馆详情' })
  async findMuseumDetail(@Param('id', ParseIntPipe) id: number) {
    return this.museumService.findMuseumDetail(id);
  }

  // GET /museum/:id — 单个博物馆基本信息
  @Get(':id')
  @ApiOperation({ summary: '获取单个博物馆' })
  @ApiResponse({ status: 200, description: '返回博物馆信息' })
  async findMuseumById(@Param('id', ParseIntPipe) id: number) {
    return this.museumService.findMuseumById(id);
  }
}

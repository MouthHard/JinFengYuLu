/**
 * ============================================================================
 * 旅游指南模块控制器 - travel-guide.controller.ts
 * ============================================================================
 * 【前端同学必读】
 * 旅游指南模块的 API 路由定义，提供省份列表/详情/地区/风光/美食等端点。
 *
 * 【API 端点一览】
 * - GET /travel-guide/provinces → 省份列表（支持地区/关键词筛选）
 * - GET /travel-guide/provinces/:id → 单个省份详情（id 是字符串，如 'beijing'）
 * - GET /travel-guide/regions → 地区列表（华北/华东/西南等）
 * - GET /travel-guide/scenery/:provinceId → 省份风光数据
 * - GET /travel-guide/food/:provinceId → 省份美食数据
 *
 * 【路由设计说明】
 * - provinces 用复数形式，:id 是省份字符串ID
 * - scenery 和 food 以 provinceId 为路径参数，因为风光/美食是一对一关联到省份的
 * - regions 是独立端点，返回所有地区名称的数组
 * ============================================================================
 */
import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TravelGuideService } from './travel-guide.service';
import { QueryTravelGuideDto } from './dto/travel-guide.dto';

@ApiTags('旅游指南') // Swagger 文档分组
@Controller('travel-guide') // 基础路由：/travel-guide
export class TravelGuideController {
  constructor(private readonly travelGuideService: TravelGuideService) {}

  // GET /travel-guide/provinces — 省份列表（支持地区/关键词筛选）
  @Get('provinces')
  @ApiOperation({ summary: '获取省份列表（支持地区/关键词筛选）' })
  findProvinces(@Query() query: QueryTravelGuideDto) {
    return this.travelGuideService.findProvinces(query);
  }

  // GET /travel-guide/provinces/:id — 单个省份详情
  @Get('provinces/:id')
  @ApiOperation({ summary: '获取单个省份' })
  findProvinceById(@Param('id') id: string) {
    return this.travelGuideService.findProvinceById(id);
  }

  // GET /travel-guide/regions — 地区列表（华北/华东/西南等）
  @Get('regions')
  @ApiOperation({ summary: '获取地区列表' })
  getRegions() {
    return this.travelGuideService.getRegions();
  }

  // GET /travel-guide/scenery/:provinceId — 省份风光数据
  @Get('scenery/:provinceId')
  @ApiOperation({ summary: '获取省份风光数据' })
  getScenery(@Param('provinceId') provinceId: string) {
    return this.travelGuideService.getScenery(provinceId);
  }

  // GET /travel-guide/food/:provinceId — 省份美食数据
  @Get('food/:provinceId')
  @ApiOperation({ summary: '获取省份美食数据' })
  getFood(@Param('provinceId') provinceId: string) {
    return this.travelGuideService.getFood(provinceId);
  }
}

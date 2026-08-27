/**
 * ============================================================================
 * 历史模块控制器 - history.controller.ts
 * ============================================================================
 * 【前端同学必读】
 * 历史模块的 API 路由定义，提供 4 类资源的 CRUD 端点：
 * - 朝代（dynasties）
 * - 历史事件（events）
 * - 历史人物（figures）
 * - 文化遗产（heritage）
 *
 * 每类资源都有"列表"和"详情"两个端点。
 *
 * 【API 端点一览】
 * - GET /history/dynasties → 朝代列表（支持关键词/时代/时期标签筛选）
 * - GET /history/dynasties/:id → 朝代详情（id 是字符串，如 'tang'）
 * - GET /history/events → 历史事件列表
 * - GET /history/events/:id → 事件详情
 * - GET /history/figures → 历史人物列表
 * - GET /history/figures/:id → 人物详情
 * - GET /history/heritage → 文化遗产列表
 * - GET /history/heritage/:id → 遗产详情
 *
 * 【注意：id 是字符串】
 * 历史/博物馆模块的业务 ID 是字符串（如 'tang'、'event-001'），
 * 不是数字自增 ID，所以用 @Param('id') 而不是 @ParseIntPipe。
 * ============================================================================
 */
import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HistoryService } from './history.service';
import { QueryHistoryDto } from './dto/history.dto';

@ApiTags('历史') // Swagger 文档分组
@Controller('history') // 基础路由：/history
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  // ---- 朝代 ----

  @Get('dynasties')
  @ApiOperation({ summary: '获取朝代列表' })
  @ApiResponse({ status: 200, description: '返回朝代列表' })
  async findDynasties(@Query() query: QueryHistoryDto) {
    return this.historyService.findDynasties(query);
  }

  @Get('dynasties/:id')
  @ApiOperation({ summary: '获取单个朝代详情' })
  @ApiResponse({ status: 200, description: '返回朝代详情' })
  async findDynastyById(@Param('id') id: string) {
    return this.historyService.findDynastyById(id);
  }

  // ---- 历史事件 ----

  @Get('events')
  @ApiOperation({ summary: '获取历史事件列表' })
  @ApiResponse({ status: 200, description: '返回历史事件列表' })
  async findEvents(@Query() query: QueryHistoryDto) {
    return this.historyService.findEvents(query);
  }

  @Get('events/:id')
  @ApiOperation({ summary: '获取单个历史事件详情' })
  @ApiResponse({ status: 200, description: '返回历史事件详情' })
  async findEventById(@Param('id') id: string) {
    return this.historyService.findEventById(id);
  }

  // ---- 历史人物 ----

  @Get('figures')
  @ApiOperation({ summary: '获取历史人物列表' })
  @ApiResponse({ status: 200, description: '返回历史人物列表' })
  async findFigures(@Query() query: QueryHistoryDto) {
    return this.historyService.findFigures(query);
  }

  @Get('figures/:id')
  @ApiOperation({ summary: '获取单个历史人物详情' })
  @ApiResponse({ status: 200, description: '返回历史人物详情' })
  async findFigureById(@Param('id') id: string) {
    return this.historyService.findFigureById(id);
  }

  // ---- 文化遗产 ----

  @Get('heritage')
  @ApiOperation({ summary: '获取文化遗产列表' })
  @ApiResponse({ status: 200, description: '返回文化遗产列表' })
  async findHeritage(@Query() query: QueryHistoryDto) {
    return this.historyService.findHeritage(query);
  }

  @Get('heritage/:id')
  @ApiOperation({ summary: '获取单个文化遗产详情' })
  @ApiResponse({ status: 200, description: '返回文化遗产详情' })
  async findHeritageById(@Param('id') id: string) {
    return this.historyService.findHeritageById(id);
  }
}

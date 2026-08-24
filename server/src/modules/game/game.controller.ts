/**
 * ============================================================================
 * 游戏模块控制器 - game.controller.ts
 * ============================================================================
 * 【前端同学必读】
 * 游戏模块的 API 路由定义，提供游戏列表/详情/Banner/分类/标签/平台/特惠等端点。
 *
 * 【API 端点一览】
 * - GET /game → 游戏列表（分页+筛选+排序）
 * - GET /game/banners → Banner 轮播图列表
 * - GET /game/categories → 游戏分类配置（含每个分类的游戏数量）
 * - GET /game/tags → 所有可用标签及使用次数
 * - GET /game/platforms → 所有可用平台及使用次数
 * - GET /game/sale → 特惠游戏（有折扣的）
 * - GET /game/:gameId → 单个游戏详情（gameId 是字符串，如 'game-001'）
 *
 * 【路由顺序】
 * 'banners'/'categories'/'tags'/'platforms'/'sale' 等固定路径在 ':gameId' 之前，
 * 避免被当作 gameId 参数匹配。
 * ============================================================================
 */
import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GameService } from './game.service';
import { QueryGameDto } from './dto/game.dto';

@ApiTags('游戏') // Swagger 文档分组
@Controller('game') // 基础路由：/game
export class GameController {
  constructor(private readonly gameService: GameService) {}

  // GET /game — 游戏列表（支持关键词/分类/标签/平台/价格区间/排序）
  @Get()
  @ApiOperation({ summary: '获取游戏列表（分页+筛选）' })
  @ApiResponse({ status: 200, description: '返回游戏列表' })
  async findAll(@Query() query: QueryGameDto) {
    return this.gameService.findAll(query);
  }

  // GET /game/banners — 首页轮播 Banner 列表
  @Get('banners')
  @ApiOperation({ summary: '获取Banner列表' })
  @ApiResponse({ status: 200, description: '返回Banner列表' })
  async getBanners() {
    return this.gameService.getBanners();
  }

  // GET /game/categories — 游戏分类配置（含动态计数）
  @Get('categories')
  @ApiOperation({ summary: '获取游戏分类配置（含动态计数）' })
  @ApiResponse({ status: 200, description: '返回游戏分类列表' })
  async getCategories() {
    return this.gameService.getCategories();
  }

  // GET /game/tags — 所有可用标签及使用次数
  @Get('tags')
  @ApiOperation({ summary: '获取所有可用标签' })
  @ApiResponse({ status: 200, description: '返回标签列表' })
  async getTags() {
    return this.gameService.getTags();
  }

  // GET /game/platforms — 所有可用平台及使用次数
  @Get('platforms')
  @ApiOperation({ summary: '获取所有可用平台' })
  @ApiResponse({ status: 200, description: '返回平台列表' })
  async getPlatforms() {
    return this.gameService.getPlatforms();
  }

  // GET /game/sale — 特惠游戏（有折扣的，按折扣力度降序）
  @Get('sale')
  @ApiOperation({ summary: '获取特惠游戏' })
  @ApiResponse({ status: 200, description: '返回折扣游戏列表' })
  async getOnSale(@Query('limit') limit?: number) {
    return this.gameService.getOnSale(limit || 10);
  }

  // GET /game/:gameId — 单个游戏详情
  @Get(':gameId')
  @ApiOperation({ summary: '获取单个游戏详情' })
  @ApiResponse({ status: 200, description: '返回游戏详情' })
  async findOne(@Param('gameId') gameId: string) {
    return this.gameService.findOne(gameId);
  }
}

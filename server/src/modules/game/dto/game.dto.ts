/**
 * ============================================================================
 * 游戏模块 DTO - game.dto.ts
 * ============================================================================
 * 【前端同学必读】
 * 游戏模块的查询参数 DTO，定义了前端传给后端的筛选/排序/分页参数。
 *
 * 【前端调用示例】
 * GET /game?keyword=原神&category=rpg&platform=pc&sortBy=rating&page=1&limit=20
 * GET /game?priceRange=free&sortBy=popular
 * GET /game?tag=hot&sortOrder=DESC
 *
 * 【sortBy 可选值说明】
 * - popular：按热度（评价数量降序）
 * - price-asc：价格从低到高
 * - price-desc：价格从高到低
 * - rating：按评分降序
 * - newest：按发行日期降序
 * - discount：按折扣力度降序
 *
 * 【priceRange 可选值说明】
 * - free：免费游戏（price=0）
 * - under50：50 元以下
 * - under100：50-100 元
 * - over100：100 元以上
 * ============================================================================
 */
import { IsOptional, IsString, IsInt, Min, Max, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryGameDto {
  // 搜索关键词（在标题/副标题/开发商/发行商/标签中模糊匹配）
  @ApiPropertyOptional({ description: '搜索关键词（标题/副标题/开发商/标签）' })
  @IsOptional()
  @IsString()
  keyword?: string;

  // 按分类筛选，对应 game_category 表的 key_name
  @ApiPropertyOptional({ description: '按分类筛选: action/rpg/strategy/adventure/fps/simulation/sports/puzzle/horror/indie' })
  @IsOptional()
  @IsString()
  category?: string;

  // 按标签筛选，如 hot/new/sale/coming/free/premium/editor-choice/multiplayer
  @ApiPropertyOptional({ description: '按标签筛选: hot/new/sale/coming/free/premium/editor-choice/multiplayer' })
  @IsOptional()
  @IsString()
  tag?: string;

  // 按平台筛选，如 pc/ps5/ps4/xbox/switch/mobile
  @ApiPropertyOptional({ description: '按平台筛选: pc/ps5/ps4/xbox/switch/mobile' })
  @IsOptional()
  @IsString()
  platform?: string;

  // 按价格区间筛选（前端定义的虚拟分类）
  @ApiPropertyOptional({ description: '按价格区间筛选: free/under50/under100/over100' })
  @IsOptional()
  @IsString()
  priceRange?: string;

  // 排序方式
  @ApiPropertyOptional({ description: '排序方式: popular/price-asc/price-desc/rating/newest/discount' })
  @IsOptional()
  @IsEnum(['popular', 'price-asc', 'price-desc', 'rating', 'newest', 'discount'])
  sortBy?: string;

  // 排序方向（可选，覆盖 sortBy 的默认方向）
  @ApiPropertyOptional({ description: '排序方向: ASC/DESC' })
  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC';

  // 页码
  @ApiPropertyOptional({ description: '页码' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  // 每页数量
  @ApiPropertyOptional({ description: '每页数量' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;
}

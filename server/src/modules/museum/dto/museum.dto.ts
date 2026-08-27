/**
 * ============================================================================
 * 博物馆模块 DTO - museum.dto.ts
 * ============================================================================
 * 【前端同学必读】
 * 博物馆模块的查询参数 DTO，被博物馆/文物/展览/活动等所有子资源列表接口共用。
 *
 * 【前端调用示例】
 * GET /museum?province=北京&type=综合
 * GET /museum/artifacts?museumId=1&category=书画
 * GET /museum/exhibitions?museumId=1&category=常设展
 * GET /museum/creative-products?category=文具
 *
 * 【museumId 字段说明】
 * 子资源（文物/展览/活动等）通过 museumId 筛选属于哪个博物馆。
 * 不传则返回所有博物馆的数据，传了则只返回指定博物馆的数据。
 *
 * 【type vs category】
 * - type：博物馆类型（综合/历史/艺术），仅博物馆列表使用
 * - category：子资源分类（文物类别/展览类别/文创类别等），各子资源共用
 * 学术资源接口中，type 和 category 都可以筛选资源类型，优先使用 type。
 * ============================================================================
 */
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryMuseumDto {
  // 搜索关键词
  @ApiPropertyOptional({ description: '搜索关键词' })
  @IsOptional()
  @IsString()
  keyword?: string;

  // 按省份筛选（仅博物馆列表使用）
  @ApiPropertyOptional({ description: '按省份筛选' })
  @IsOptional()
  @IsString()
  province?: string;

  // 按博物馆类型筛选（仅博物馆列表使用），如"综合"/"历史"/"艺术"
  @ApiPropertyOptional({ description: '按博物馆类型筛选' })
  @IsOptional()
  @IsString()
  type?: string;

  // 按博物馆ID筛选（子资源列表使用），筛选属于哪个博物馆的数据
  @ApiPropertyOptional({ description: '按博物馆ID筛选' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  museumId?: number;

  // 按分类筛选（各子资源共用），如文物的"书画"/"青铜器"，展览的"常设展"/"临时展"
  @ApiPropertyOptional({ description: '按分类筛选' })
  @IsOptional()
  @IsString()
  category?: string;

  // 页码
  @ApiPropertyOptional({ description: '页码' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  // 每页数量，默认 200（博物馆数据量不大，便于前端一次加载）
  @ApiPropertyOptional({
    description: '每页数量（默认 200，便于前端一次加载后客户端筛选）',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  limit?: number = 200;
}

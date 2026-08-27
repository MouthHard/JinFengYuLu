/**
 * ============================================================================
 * 历史模块 DTO - history.dto.ts
 * ============================================================================
 * 【前端同学必读】
 * 历史模块的查询参数 DTO，被朝代/事件/人物/遗产四个列表接口共用。
 *
 * 【为什么 limit 默认是 200？】
 * 历史数据量相对较小（朝代几十条、事件/人物几百条），
 * 默认 200 条基本能一次加载全部数据，前端可以在客户端做筛选和分页，
 * 减少网络请求次数，提升用户体验。
 *
 * 【前端调用示例】
 * GET /history/dynasties?keyword=唐&era=imperial&page=1&limit=200
 * GET /history/events?category=政治
 * GET /history/figures?dynasty=唐&category=文臣
 * GET /history/heritage?era=明代
 *
 * 【验证装饰器说明】
 * - @IsOptional()：字段可选
 * - @IsString()：必须是字符串
 * - @IsInt() + @Min(1)：必须是 ≥1 的整数
 * - @Type(() => Number)：URL 参数自动转数字
 * ============================================================================
 */
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryHistoryDto {
  // 搜索关键词（在各资源的名称/描述等字段中模糊匹配）
  @ApiPropertyOptional({ description: '搜索关键词' })
  @IsOptional()
  @IsString()
  keyword?: string;

  // 按分类筛选（事件/人物/遗产共用）
  @ApiPropertyOptional({ description: '按分类筛选' })
  @IsOptional()
  @IsString()
  category?: string;

  // 按时代筛选：ancient(上古)/imperial(帝制)，主要用于朝代筛选
  @ApiPropertyOptional({ description: '按时代筛选: ancient/imperial' })
  @IsOptional()
  @IsString()
  era?: string;

  // 按时期标签筛选（先秦/秦汉/魏晋/...），主要用于朝代筛选
  @ApiPropertyOptional({ description: '按时期标签筛选' })
  @IsOptional()
  @IsString()
  periodTag?: string;

  // 按朝代筛选，主要用于历史人物筛选
  @ApiPropertyOptional({ description: '按朝代筛选（人物）' })
  @IsOptional()
  @IsString()
  dynasty?: string;

  // 页码，默认第 1 页
  @ApiPropertyOptional({ description: '页码' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  // 每页数量，默认 200（便于前端一次加载后客户端筛选）
  @ApiPropertyOptional({ description: '每页数量（默认 200，便于前端一次加载后客户端筛选）' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  limit?: number = 200;
}

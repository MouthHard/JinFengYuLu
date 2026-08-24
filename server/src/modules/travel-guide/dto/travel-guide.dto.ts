/**
 * ============================================================================
 * 旅游指南模块 DTO - travel-guide.dto.ts
 * ============================================================================
 * 【前端同学必读】
 * 旅游指南模块的查询参数 DTO，目前只用于省份列表接口。
 * 风光/美食接口通过路径参数 provinceId 查询，不需要 DTO。
 *
 * 【前端调用示例】
 * GET /travel-guide/provinces?keyword=四川&region=西南&page=1&limit=100
 * GET /travel-guide/provinces?region=华北
 *
 * 【region 参数说明】
 * region 是地区名称，如"华北"/"华东"/"西南"等。
 * 前端可通过 GET /travel-guide/regions 获取所有可选地区。
 * 传"全部"或不传时，返回所有省份。
 * ============================================================================
 */
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryTravelGuideDto {
  // 搜索关键词（在省份名称和ID中模糊匹配）
  @ApiPropertyOptional({ description: '搜索关键词（名称/ID）' })
  @IsOptional()
  @IsString()
  keyword?: string;

  // 按地区筛选（华北/华东/西南等），不传或传"全部"则返回所有省份
  @ApiPropertyOptional({ description: '按地区筛选（华北/华东等）' })
  @IsOptional()
  @IsString()
  region?: string;

  // 页码
  @ApiPropertyOptional({ description: '页码' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  // 每页数量，默认 100
  @ApiPropertyOptional({ description: '每页数量' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(200)
  limit?: number = 100;
}

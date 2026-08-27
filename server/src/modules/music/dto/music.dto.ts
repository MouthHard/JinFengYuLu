/**
 * ============================================================================
 * 音乐模块 DTO - music.dto.ts
 * ============================================================================
 * 【前端同学必读】
 * 音乐模块的查询参数 DTO，被歌曲/歌手/专辑/歌单四个列表接口共用。
 *
 * 【设计简洁】
 * 音乐模块采用"JSON 大对象"存储，大部分数据存在 data 列中，
 * 所以查询参数很简单，只有 keyword（搜索）和分页参数。
 * 不需要 category/era 等筛选参数，因为这些信息都在 data JSON 内部。
 *
 * 【前端调用示例】
 * GET /music/songs?keyword=周杰伦&page=1&limit=200
 * GET /music/artists?keyword=林俊杰
 * GET /music/albums?page=1&limit=50
 * GET /music/playlists?keyword=流行
 * ============================================================================
 */
import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryMusicDto {
  // 搜索关键词（在 name 列中模糊匹配）
  @ApiPropertyOptional({ description: '搜索关键词' })
  @IsOptional()
  @IsString()
  keyword?: string;

  // 分类（预留字段，目前未使用）
  @ApiPropertyOptional({ description: '分类' })
  @IsOptional()
  @IsString()
  category?: string;

  // 页码，默认第 1 页
  @ApiPropertyOptional({ description: '页码', default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  // 每页数量，默认 200（音乐数据一次加载，前端客户端筛选）
  @ApiPropertyOptional({ description: '每页数量', default: 200 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  limit?: number = 200;
}

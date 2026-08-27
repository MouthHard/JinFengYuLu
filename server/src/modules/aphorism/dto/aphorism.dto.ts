/**
 * ============================================================================
 * 诗词模块 DTO - aphorism.dto.ts
 * ============================================================================
 * 【前端同学必读】
 * DTO（Data Transfer Object）= 数据传输对象，定义了前端传给后端的查询参数格式。
 *
 * 【DTO 是什么？】
 * 类比前端：DTO ≈ TypeScript 的 interface 或 Zod schema，
 * 用来约束"前端传什么参数、参数是什么类型"。
 * 后端会自动验证：如果前端传了错误类型（如 page="abc"），会返回 400 错误。
 *
 * 【装饰器说明】
 * - @IsOptional() → 该参数可选（前端可以不传）
 * - @IsString() → 必须是字符串
 * - @IsInt() → 必须是整数
 * - @IsBoolean() → 必须是布尔值
 * - @IsEnum([...]) → 必须是枚举值之一
 * - @Min(1) → 最小值为 1
 * - @Type(() => Number) → 自动类型转换（URL 参数都是字符串，需转为数字）
 * - @ApiPropertyOptional() → Swagger 文档中显示该字段
 *
 * 【前端调用示例】
 * GET /aphorism?keyword=李白&dynasty=唐&page=1&limit=20&sortBy=viewCount&sortOrder=DESC
 * 这些查询参数会自动映射到 QueryAphorismDto 的对应字段。
 *
 * 【验证流程】
 * 前端请求 → NestJS Pipe 自动用 class-validator 验证 DTO →
 *   验证通过 → 传入 Controller/Service
 *   验证失败 → 返回 400 Bad Request + 错误信息
 * ============================================================================
 */
import { IsOptional, IsString, IsInt, Min, Max, IsEnum, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryAphorismDto {
  // 搜索关键词（模糊匹配标题/作者/内容/标签）
  @ApiPropertyOptional({ description: '搜索关键词（标题/作者/内容）' })
  @IsOptional()
  @IsString()
  keyword?: string;

  // 按朝代筛选（精确匹配），如"唐"、"宋"
  @ApiPropertyOptional({ description: '按朝代筛选' })
  @IsOptional()
  @IsString()
  dynasty?: string;

  // 按作者筛选（精确匹配）
  @ApiPropertyOptional({ description: '按作者筛选' })
  @IsOptional()
  @IsString()
  author?: string;

  // 按形式筛选（精确匹配），如"五言绝句"、"七言律诗"
  @ApiPropertyOptional({ description: '按形式筛选' })
  @IsOptional()
  @IsString()
  form?: string;

  // 按分类ID筛选（数字，关联 category 表的 id）
  @ApiPropertyOptional({ description: '按分类ID筛选' })
  @IsOptional()
  @Type(() => Number) // URL 参数是字符串，需自动转为数字
  @IsInt()
  categoryId?: number;

  // 按标签筛选（精确匹配标签名）
  @ApiPropertyOptional({ description: '按标签筛选' })
  @IsOptional()
  @IsString()
  tag?: string;

  // 是否只看精选（true=精选，false=非精选，不传=全部）
  @ApiPropertyOptional({ description: '是否只看精选' })
  @IsOptional()
  @Type(() => Boolean) // URL 参数 "true"/"false" 转为布尔值
  @IsBoolean()
  isFeatured?: boolean;

  // 排序字段：id(默认)/title/viewCount/createdAt
  @ApiPropertyOptional({ description: '排序方式: id/title/viewCount/createdAt' })
  @IsOptional()
  @IsEnum(['id', 'title', 'viewCount', 'createdAt'])
  sortBy?: 'id' | 'title' | 'viewCount' | 'createdAt' = 'id';

  // 排序方向：ASC(升序)/DESC(降序，默认)
  @ApiPropertyOptional({ description: '排序方向: ASC/DESC' })
  @IsOptional()
  @IsEnum(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC' = 'DESC';

  // 页码，从 1 开始
  @ApiPropertyOptional({ description: '页码' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1) // 最小为 1
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

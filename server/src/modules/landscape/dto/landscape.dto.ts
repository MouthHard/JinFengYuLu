/**
 * ============================================================================
 * 风景模块 DTO（数据传输对象）- landscape.dto.ts
 * ============================================================================
 *
 * 【DTO 是什么？】
 * DTO（Data Transfer Object）= 定义 API 接口接收的参数结构。
 * 类似前端的 TypeScript 接口类型（interface），但多了"运行时验证"能力。
 *
 * 【为什么需要 DTO？】
 * 1. 参数验证：自动检查前端传来的参数是否合法（类型、范围等）
 * 2. API 文档：Swagger 根据装饰器自动生成接口文档
 * 3. 类型安全：TypeScript 编译时检查类型
 *
 * 【验证装饰器说明】
 * - @IsOptional() → 可选参数，不传也行
 * - @IsString() → 必须是字符串类型
 * - @IsInt() → 必须是整数
 * - @Min(1) → 最小值为 1
 * - @Type(() => Number) → 自动将字符串转为数字
 *   （URL 查询参数都是字符串，如 ?page=1 中的 1 是字符串 "1"，
 *   这个装饰器让它在进入 Controller 前自动转为数字 1）
 *
 * 【与 ValidationPipe 的配合】
 * main.ts 中注册了全局 ValidationPipe，它会在请求进入 Controller 之前：
 * 1. 根据 DTO 中的装饰器验证参数
 * 2. 不合法 → 直接返回 400 错误，不会执行 Controller 方法
 * 3. 合法 → 将验证通过的参数传给 Controller
 *
 * 【举例】
 * 前端请求：GET /api/landscape/photographers?keyword=冰岛&page=abc
 * → page 不是数字 → ValidationPipe 返回 400：page must be an integer
 *
 * 前端请求：GET /api/landscape/photographers?keyword=冰岛&page=-1
 * → page < 1 → ValidationPipe 返回 400：page must not be less than 1
 *
 * 前端请求：GET /api/landscape/photographers?keyword=冰岛&page=2
 * → 合法 → Controller 接收到 { keyword: "冰岛", page: 2 }
 *
 * ============================================================================
 */

import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryLandscapeDto {
  /** 搜索关键词 → 用于 LIKE 前缀搜索（如 WHERE name LIKE '冰岛%'） */
  @ApiPropertyOptional({ description: '搜索关键词' })
  @IsOptional()
  @IsString()
  keyword?: string;

  /** 分类筛选 → 用于精确匹配（如 WHERE category = '风光'） */
  @ApiPropertyOptional({ description: '分类' })
  @IsOptional()
  @IsString()
  category?: string;

  /** 地点筛选 → 用于前缀匹配（如 WHERE location LIKE '中国%'） */
  @ApiPropertyOptional({ description: '地点' })
  @IsOptional()
  @IsString()
  location?: string;

  /** 作者 ID → 用于精确匹配（如 WHERE authorId = 'p001'） */
  @ApiPropertyOptional({ description: '作者ID' })
  @IsOptional()
  @IsString()
  authorId?: string;

  /**
   * 页码 → 用于分页计算 skip = (page - 1) * limit
   * 默认第 1 页，最小值 1
   * @Type(() => Number) → 将 URL 中的字符串 "1" 自动转为数字 1
   */
  @ApiPropertyOptional({ description: '页码', default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  /**
   * 每页数量 → 用于 LIMIT 子句
   * 默认 200（前端首次加载时一次拉取所有数据，后续可改为更小的值配合分页）
   * 最小值 1
   */
  @ApiPropertyOptional({ description: '每页数量', default: 200 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(200)
  limit?: number = 200;
}

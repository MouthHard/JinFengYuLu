/**
 * ============================================================================
 * 诗词模块服务 - aphorism.service.ts
 * ============================================================================
 * 【前端同学必读】
 * Service 是 NestJS 的"业务逻辑层"，Controller 只负责接收请求和返回响应，
 * 真正的数据查询、处理、格式化都在 Service 中完成。
 *
 * 【Service 是什么？】
 * 类比前端：Service ≈ Pinia Store 或 React Custom Hook 中的数据获取逻辑。
 * Controller 调用 Service 的方法，Service 查询数据库并返回处理后的数据。
 *
 * 【Repository 是什么？】
 * Repository 是 TypeORM 提供的"数据访问对象"，类似前端的"数据仓库"。
 * 每个 Entity 对应一个 Repository，提供 find/findOne/create/save 等方法。
 * 通过 @InjectRepository 注入，NestJS 自动创建实例。
 *
 * 【QueryBuilder 是什么？】
 * TypeORM 的查询构建器，用链式调用构建复杂 SQL 查询。
 * 类比前端：类似 axios 的参数构建，但生成的是 SQL 而不是 HTTP 请求。
 * - createQueryBuilder('a') → 创建别名 'a' 的查询
 * - .where('a.is_active = :active', { active: true }) → WHERE 条件
 * - .andWhere(...) → 追加 AND 条件
 * - .skip(n).take(m) → 分页（跳过 n 条，取 m 条）
 * - .getManyAndCount() → 返回 [数据列表, 总数]
 *
 * 【N+1 查询问题】
 * 如果对列表中每条数据都单独查询关联数据，就会产生 N+1 次数据库查询。
 * 本 Service 采用"批量查询 + Map 映射"的方式避免此问题：
 * 1. 先查出所有诗词 ID
 * 2. 一次性查出所有关联标签
 * 3. 用 Map 按 poemId 分组
 * 4. 遍历诗词列表时从 Map 中取标签
 *
 * 【Brackets 的作用】
 * 生成 SQL 中的括号分组，确保 OR 条件不会"泄漏"到其他 AND 条件中。
 * 类比：SQL 中的 (A OR B OR C) AND D，而不是 A OR B OR (C AND D)。
 * ============================================================================
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets } from 'typeorm';
import { Aphorism } from '../../entities/aphorism.entity';
import { AphorismTag } from '../../entities/aphorism-tag.entity';
import { AphorismCategoryRelation } from '../../entities/aphorism-category-relation.entity';
import { Category } from '../../entities/category.entity';
import { QueryAphorismDto } from './dto/aphorism.dto';

@Injectable() // 标记为可注入的服务，NestJS 会自动管理其生命周期
export class AphorismService {
  constructor(
    // 依赖注入 4 个 Repository，分别对应 4 张表
    @InjectRepository(Aphorism)
    private aphorismRepository: Repository<Aphorism>,
    @InjectRepository(AphorismTag)
    private tagRepository: Repository<AphorismTag>,
    @InjectRepository(AphorismCategoryRelation)
    private relationRepository: Repository<AphorismCategoryRelation>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  /**
   * 获取诗词列表（分页 + 筛选 + 排序）
   * 前端调用 GET /aphorism 时触发
   */
  async findAll(query: QueryAphorismDto) {
    const {
      keyword, // 搜索关键词
      dynasty, // 朝代筛选
      author, // 作者筛选
      form, // 形式筛选
      categoryId, // 分类ID筛选
      tag, // 标签筛选
      isFeatured, // 是否精选
      sortBy = 'id', // 排序字段，默认按 id
      sortOrder = 'DESC', // 排序方向，默认降序
      page = 1, // 页码
      limit = 20, // 每页数量
    } = query;

    // 创建查询构建器，别名 'a' 代表 aphorism 表
    const qb = this.aphorismRepository
      .createQueryBuilder('a')
      .where('a.is_active = :active', { active: true }); // 只查启用的诗词

    // 关键词搜索：在标题/作者/朝代/content全文/标签/注释/译文/背景/赏析/诗人简介中模糊匹配
    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        // Brackets 确保 OR 条件被括号包裹，不会影响其他 AND 条件
        new Brackets((qb) => {
          qb.where('a.title LIKE :kw', { kw })
            .orWhere('a.author LIKE :kw', { kw })
            .orWhere('a.dynasty LIKE :kw', { kw })
            .orWhere('a.form LIKE :kw', { kw })
            .orWhere("CAST(a.content AS CHAR) LIKE :kw", { kw }) // JSON 列全文搜索
            .orWhere('a.annotation LIKE :kw', { kw })
            .orWhere('a.translation LIKE :kw', { kw })
            .orWhere('a.background LIKE :kw', { kw })
            .orWhere('a.appreciation LIKE :kw', { kw })
            .orWhere('a.poet_introduction LIKE :kw', { kw })
            .orWhere(
              // 子查询：在标签表中搜索匹配的标签
              "EXISTS (SELECT 1 FROM aphorism_tag t WHERE t.poem_id = a.id AND t.tag LIKE :kw)",
              { kw },
            );
        }),
      );
    }

    // 朝代筛选
    if (dynasty) {
      qb.andWhere('a.dynasty = :dynasty', { dynasty });
    }

    // 作者筛选
    if (author) {
      qb.andWhere('a.author = :author', { author });
    }

    // 形式筛选（如"五言绝句"、"七言律诗"）
    if (form) {
      qb.andWhere('a.form = :form', { form });
    }

    // 精选筛选
    if (isFeatured !== undefined) {
      qb.andWhere('a.is_featured = :featured', { featured: isFeatured });
    }

    // 分类筛选（通过关联表 INNER JOIN）
    if (categoryId) {
      qb.innerJoin(
        AphorismCategoryRelation,
        'r',
        'r.poem_id = a.id AND r.category_id = :catId',
        { catId: categoryId },
      );
    }

    // 标签筛选（通过标签表 INNER JOIN）
    if (tag) {
      qb.innerJoin(
        AphorismTag,
        't',
        't.poem_id = a.id AND t.tag = :tag',
        { tag },
      );
    }

    // 排序：将前端的排序字段映射到数据库列名
    const orderField =
      sortBy === 'viewCount' ? 'a.view_count' :
      sortBy === 'title' ? 'a.title' :
      sortBy === 'createdAt' ? 'a.created_at' : 'a.id';
    qb.orderBy(orderField, sortOrder);

    // 分页：skip = 跳过的条数，take = 取的条数
    const skip = (page - 1) * limit;
    qb.skip(skip).take(limit);

    // 执行查询，返回 [数据列表, 总条数]
    const [items, total] = await qb.getManyAndCount();

    // ---- 避免 N+1 查询：批量获取标签 ----
    const poemIds = items.map((item) => item.id);
    const allTags = poemIds.length
      ? await this.tagRepository
          .createQueryBuilder('t')
          .where('t.poem_id IN (:...ids)', { ids: poemIds }) // 批量查询
          .getMany()
      : [];

    // 构建 poemId → tags[] 的映射
    const tagMap = new Map<number, string[]>();
    for (const t of allTags) {
      if (!tagMap.has(t.poemId)) tagMap.set(t.poemId, []);
      tagMap.get(t.poemId)!.push(t.tag);
    }

    // 组装最终返回结果
    const results = items.map((item) => ({
      ...this.formatResponse(item),
      tags: tagMap.get(item.id) || [], // 从 Map 中取标签
    }));

    return {
      items: results,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * 获取单个诗词详情
   * 前端调用 GET /aphorism/:id 时触发
   */
  async findOne(id: number) {
    const item = await this.aphorismRepository.findOne({
      where: { id, isActive: true },
    });

    if (!item) {
      throw new NotFoundException(`诗词 ID ${id} 不存在`);
    }

    // 并行执行：浏览量+1、获取标签、获取分类关联
    const [, tags, relations] = await Promise.all([
      this.aphorismRepository.increment({ id }, 'viewCount', 1),
      this.tagRepository.find({ where: { poemId: id } }),
      this.relationRepository.find({ where: { poemId: id } }),
    ]);

    return {
      ...this.formatResponse(item),
      viewCount: item.viewCount + 1,
      tags: tags.map((t) => t.tag),
      categoryIds: relations.map((r) => r.categoryId),
    };
  }

  // 低频变更数据缓存（分类体系、热门标签）
  private categoriesCache: { data: any[]; expireAt: number } | null = null;
  private hotTagsCache: { data: string[]; expireAt: number } | null = null;
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 分钟

  /**
   * 获取诗词分类体系（含每个分类的诗词数量）
   * 返回按 type 分组的树形结构
   * 前端调用 GET /aphorism/categories 时触发
   */
  async getCategories() {
    // 命中缓存直接返回
    if (this.categoriesCache && Date.now() < this.categoriesCache.expireAt) {
      return this.categoriesCache.data;
    }

    // 查询所有诗词分类，按 type 和 sort_order 排序
    const categories = await this.categoryRepository
      .createQueryBuilder('c')
      .where('c.type LIKE :prefix', { prefix: 'aphorism_%' }) // 只查诗词相关分类
      .andWhere('c.isActive = :active', { active: true })
      .orderBy('c.type')
      .addOrderBy('c.sortOrder')
      .getMany();

    // 查询总诗词数（用于"全部诗词"分类的计数）
    const totalPoems = await this.aphorismRepository.count({
      where: { isActive: true },
    });

    // 查询每个分类的诗词数量（通过 aphorism_category_relation 关联表统计）
    const countResults = await this.relationRepository
      .createQueryBuilder('r')
      .select('r.categoryId', 'categoryId')
      .addSelect('COUNT(DISTINCT r.poemId)', 'count')
      .innerJoin('aphorism', 'a', 'a.id = r.poem_id AND a.is_active = 1')
      .groupBy('r.categoryId')
      .getRawMany(); // getRawMany() 返回原始 SQL 结果（不是 Entity 对象）

    // 构建 categoryId → count 的映射
    const countMap = new Map<number, number>();
    countResults.forEach((r) => {
      countMap.set(Number(r.categoryId), Number(r.count));
    });

    // 主分类元数据（type → 中文名 + 图标）
    const typeMeta: Record<string, { name: string; icon: string }> = {
      aphorism_dynasty: { name: '朝代', icon: '👑' },
      aphorism_form: { name: '形式', icon: '📜' },
      aphorism_subject: { name: '题材', icon: '📝' },
      aphorism_emotion: { name: '情感', icon: '❤️' },
      aphorism_school: { name: '流派', icon: '🎭' },
      aphorism_usage: { name: '用途', icon: '💡' },
    };

    // 按 type 分组
    const grouped: Record<string, typeof categories> = {};
    for (const cat of categories) {
      if (!grouped[cat.type]) grouped[cat.type] = [];
      grouped[cat.type].push(cat);
    }

    // 构建返回结构：[{ id, name, icon, children: [{ id, name, icon, count }] }]
    const result = Object.entries(grouped).map(([type, cats]) => {
      const meta = typeMeta[type] || { name: type, icon: '📚' };
      // 从 type 提取主分类 ID（如 aphorism_dynasty → dynasty）
      const mainId = type.replace('aphorism_', '');

      return {
        id: mainId,
        name: meta.name,
        icon: meta.icon,
        children: cats.map((cat) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon || '📚',
          count: cat.name === '全部诗词' ? totalPoems : (countMap.get(cat.id) || 0),
          sortOrder: cat.sortOrder,
        })),
      };
    });

    this.categoriesCache = { data: result, expireAt: Date.now() + this.CACHE_TTL };
    return result;
  }

  /**
   * 获取热门标签（按引用次数降序）
   * 前端调用 GET /aphorism/tags/hot 时触发
   */
  async getHotTags(limit = 20) {
    // 命中缓存直接返回
    if (this.hotTagsCache && Date.now() < this.hotTagsCache.expireAt) {
      return this.hotTagsCache.data;
    }

    const results = await this.tagRepository
      .createQueryBuilder('t')
      .select('t.tag', 'tag') // 只取标签名
      .addSelect('COUNT(*)', 'count') // 统计每个标签被多少首诗使用
      .innerJoin('aphorism', 'a', 'a.id = t.poem_id AND a.is_active = 1') // 只统计启用的诗词
      .groupBy('t.tag')
      .orderBy('count', 'DESC') // 按使用次数降序
      .limit(limit)
      .getRawMany();

    const result = results.map((r) => r.tag); // 只返回标签名字符串数组
    this.hotTagsCache = { data: result, expireAt: Date.now() + this.CACHE_TTL };
    return result;
  }

  /**
   * 格式化单个诗词的响应数据
   * 主要处理 content 字段（JSON → 数组）和字段名映射
   */
  private formatResponse(item: Aphorism) {
    // content 字段可能是字符串或数组，统一处理为数组
    let content: string[];
    if (typeof item.content === 'string') {
      try {
        const parsed = JSON.parse(item.content);
        content = Array.isArray(parsed) ? parsed : [item.content];
      } catch {
        content = [item.content];
      }
    } else if (Array.isArray(item.content)) {
      content = item.content;
    } else {
      content = [];
    }

    return {
      id: item.id,
      title: item.title,
      author: item.author,
      dynasty: item.dynasty,
      content,
      form: item.form,
      imageUrl: item.imageUrl,
      annotation: item.annotation,
      translation: item.translation,
      background: item.background,
      appreciation: item.appreciation,
      poetIntroduction: item.poetIntroduction,
      viewCount: item.viewCount,
      likeCount: item.likeCount,
      isFeatured: item.isFeatured,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  }
}

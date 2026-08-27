/**
 * ============================================================================
 * 风景模块服务 - landscape.service.ts
 * ============================================================================
 *
 * 【服务（Service）是什么？】
 * Service = 业务逻辑层，负责数据库查询、数据处理等核心逻辑。
 * Controller 只负责"接收请求、返回响应"，真正的查询逻辑都在 Service 中。
 * 类似前端的 Store/Pinia —— Controller 是组件，Service 是 Store。
 *
 * 【本 Service 的核心方法】
 * - toObject()：将数据库行（id + data JSON）展开为前端需要的完整对象
 * - paginate()：通用分页查询方法，所有列表接口共用
 * - findXxx()：调用 paginate() 查询列表
 * - findXxxById()：根据 ID 查询单条记录
 *
 * ============================================================================
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets } from 'typeorm';
import {
  LandscapePhotographer,
  LandscapeImage,
  LandscapeVideo,
  LandscapeGuide,
  LandscapeHotTopic,
  LandscapePopularDestination,
} from '../../entities/landscape.entity';
import { QueryLandscapeDto } from './dto/landscape.dto';

/**
 * @Injectable() — 声明这个类可以被 NestJS 的依赖注入系统管理
 * 类似 Vue 的 defineStore()，告诉框架"这是一个可注入的服务"
 */
@Injectable()
export class LandscapeService {
  /**
   * 构造函数 — 通过依赖注入获取 4 个数据库 Repository
   *
   * @InjectRepository() → 告诉 NestJS "请注入这个实体对应的 Repository"
   * Repository → TypeORM 提供的数据库操作对象，类似前端的 API 客户端：
   *   - repository.find() → SELECT * FROM table
   *   - repository.findOne({ where: { id } }) → SELECT * FROM table WHERE id = ?
   *   - repository.createQueryBuilder('t') → 构建复杂 SQL 查询
   *
   * 每个 Repository 对应一张数据库表：
   *   photographerRepository → landscape_photographer 表
   *   imageRepository → landscape_image 表
   *   videoRepository → landscape_video 表
   *   guideRepository → landscape_guide 表
   */
  constructor(
    @InjectRepository(LandscapePhotographer)
    private photographerRepository: Repository<LandscapePhotographer>,
    @InjectRepository(LandscapeImage)
    private imageRepository: Repository<LandscapeImage>,
    @InjectRepository(LandscapeVideo)
    private videoRepository: Repository<LandscapeVideo>,
    @InjectRepository(LandscapeGuide)
    private guideRepository: Repository<LandscapeGuide>,
    @InjectRepository(LandscapeHotTopic)
    private hotTopicRepository: Repository<LandscapeHotTopic>,
    @InjectRepository(LandscapePopularDestination)
    private popularDestinationRepository: Repository<LandscapePopularDestination>,
  ) {}

  /**
   * ============================================================================
   * toObject() — JSON 透传核心方法
   * ============================================================================
   *
   * 数据库中的数据结构：{ id: "p001", data: { name: "张三", avatar: "...", ... } }
   * 前端需要的结构：{ id: "p001", name: "张三", avatar: "...", ... }
   *
   * 这个方法把 data JSON 字段"展开"到顶层，和 id 合并成一个完整对象。
   *
   * 泛型 <T>：让 TypeScript 知道返回值的类型（如 GlobalPhotographer）
   * 类似前端的泛型函数：function fetchData<T>(): Promise<T>
   *
   * 【为什么不直接返回 data？】
   * 因为 data 中可能没有 id 字段（id 存在表的主键列中），
   * 需要把 id 也合并进去，前端才能通过 id 引用这条记录。
   */
  private toObject<T>(row: { id: string; data: Record<string, unknown> }): T {
    return { ...(row.data as object), id: row.id } as T;
  }

  /**
   * ============================================================================
   * paginate() — 通用分页查询方法
   * ============================================================================
   *
   * 【这是整个模块最核心的方法】所有列表接口（摄影师/图片/视频/攻略）都调用它。
   *
   * 【参数说明】
   * @param repo — 要查询的数据库表对应的 Repository
   * @param query — 前端传来的查询参数（keyword, category, location, authorId, page, limit）
   * @param searchable — 可搜索的列名数组（如摄影师搜 name，图片搜 title）
   *
   * 【查询构建过程】（类比前端：逐步拼接过滤条件）
   * 1. createQueryBuilder('t') → 创建查询构建器，'t' 是表别名
   * 2. keyword → 在 searchable 列中做 LIKE 前缀搜索（如 WHERE t.name LIKE '张%'）
   * 3. category → 精确匹配分类
   * 4. location → LIKE 前缀匹配地点
   * 5. authorId → 精确匹配作者 ID
   * 6. orderBy → 按 ID 升序排列
   * 7. getCount() → 先获取总记录数（用于计算总页数）
   * 8. skip/take → 分页：跳过前 (page-1)*limit 条，取 limit 条
   *    等价于 SQL: LIMIT limit OFFSET skip
   * 9. getMany() → 执行查询，获取当前页的数据
   *
   * 【Brackets 是什么？】
   * 用于生成 SQL 中的括号分组：
   *   WHERE (t.name LIKE :kw OR t.title LIKE :kw) AND t.category = :category
   * 没有 Brackets 会变成：
   *   WHERE t.name LIKE :kw OR t.title LIKE :kw AND t.category = :category
   * 后者 AND 优先级高于 OR，逻辑完全不同！
   *
   * 【LIKE 前缀搜索 vs 全模糊搜索】
   * LIKE '张%' → 前缀匹配，可以利用 B-Tree 索引，查询快
   * LIKE '%张%' → 全模糊匹配，无法利用索引，必须全表扫描，查询慢
   * 我们用前缀匹配，牺牲了"中间包含"的搜索能力，换取了性能。
   *
   * 【返回值结构】
   * {
   *   items: [...],      // 当前页的数据数组
   *   total: 100,        // 总记录数
   *   page: 1,           // 当前页码
   *   limit: 200,        // 每页数量
   *   totalPages: 1,     // 总页数 = Math.ceil(total / limit)
   * }
   */
  private async paginate<T>(
    repo: Repository<T & { id: string }>,
    query: QueryLandscapeDto,
    searchable: string[] = [],
  ) {
    const { keyword, category, location, authorId, page = 1, limit = 200 } = query;

    /** 创建查询构建器，'t' 是 SQL 中的表别名 */
    const qb = repo.createQueryBuilder('t');

    /**
     * 关键词搜索
     * searchable 数组指定了哪些列可以被搜索：
     * - 摄影师：['name'] → 搜名字
     * - 图片/视频/攻略：['title'] → 搜标题
     *
     * 生成的 SQL（以摄影师为例）：
     * WHERE t.name LIKE '关键词%'
     *
     * 如果 searchable 有多列（如 ['name', 'title']）：
     * WHERE (t.name LIKE '关键词%' OR t.title LIKE '关键词%')
     */
    if (keyword) {
      const kw = `${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          searchable.forEach((col, i) => {
            const fn = i === 0 ? 'where' : 'orWhere';
            sub[fn](`t.${col} LIKE :kw`, { kw });
          });
        }),
      );
    }

    /** 精确匹配分类 → WHERE t.category = '风光' */
    if (category) {
      qb.andWhere('t.category = :category', { category });
    }

    /** 前缀匹配地点 → WHERE t.location LIKE '中国%' */
    if (location) {
      qb.andWhere('t.location LIKE :location', { location: `${location}%` });
    }

    /** 精确匹配作者 → WHERE t.authorId = 'p001' */
    if (authorId) {
      qb.andWhere('t.authorId = :authorId', { authorId });
    }

    /** 按 ID 升序排列 → ORDER BY t.id ASC */
    qb.orderBy('t.id', 'ASC');

    /**
     * 分页查询
     * 先获取总记录数（不包含 skip/take），再添加分页限制执行查询
     *
     * 为什么不直接用 getManyAndCount()？
     * 因为 getManyAndCount() 在有 JOIN 时会返回错误的 count，
     * 分开调用 getCount() + getMany() 更可靠。
     *
     * skip = (page - 1) * limit → 跳过前面页的数据
     * take = limit → 取 limit 条数据
     *
     * 等价 SQL：
     *   SELECT COUNT(1) FROM ... WHERE ...  → 获取 total
     *   SELECT * FROM ... WHERE ... ORDER BY t.id ASC LIMIT 200 OFFSET 0  → 获取 items
     */
    const skip = (page - 1) * limit;
    const total = await qb.getCount();
    qb.skip(skip).take(limit);
    const rows = await qb.getMany();

    return {
      items: rows.map((r) => this.toObject(r as any)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  }

  /**
   * ============================================================================
   * 列表查询方法 — 每个调用 paginate()，传入对应的 Repository 和可搜索列
   * ============================================================================
   *
   * findPhotographers → 搜索 name 列
   * findImages/findVideos/findGuides → 搜索 title 列
   */
  async findPhotographers(query: QueryLandscapeDto) {
    return this.paginate(this.photographerRepository, query, ['name']);
  }

  async findPhotographerById(id: string) {
    return this.findSingleById(this.photographerRepository, id, `摄影师`);
  }

  async findImages(query: QueryLandscapeDto) {
    return this.paginate(this.imageRepository, query, []);
  }

  async findImageById(id: string) {
    return this.findSingleById(this.imageRepository, id, `图片`);
  }

  async findVideos(query: QueryLandscapeDto) {
    return this.paginate(this.videoRepository, query, []);
  }

  async findVideoById(id: string) {
    return this.findSingleById(this.videoRepository, id, `视频`);
  }

  async findGuides(query: QueryLandscapeDto) {
    return this.paginate(this.guideRepository, query, ['title']);
  }

  async findGuideById(id: string) {
    return this.findSingleById(this.guideRepository, id, `攻略`);
  }

  async findHotTopics(query: QueryLandscapeDto) {
    return this.paginate(this.hotTopicRepository, query, ['title']);
  }

  async findPopularDestinations(query: QueryLandscapeDto) {
    return this.paginate(this.popularDestinationRepository, query, ['name']);
  }

  /**
   * ============================================================================
   * 详情查询方法 — 根据 ID 查询单条记录
   * ============================================================================
   *
   * findOne({ where: { id } }) → SELECT * FROM table WHERE id = ? LIMIT 1
   * 如果找不到，抛出 NotFoundException（HTTP 404）
   *
   * NotFoundException 是 NestJS 内置异常，会自动返回 404 状态码和错误信息。
   * 类似前端的"页面不存在"提示，但作用于 API 层面。
   */
  private async findSingleById<T extends { id: string; data: Record<string, unknown> }>(
    repo: Repository<T>,
    id: string,
    label: string,
  ) {
    const row = await repo.findOne({ where: { id } as any });
    if (!row) {
      throw new NotFoundException(`${label} ${id} 不存在`);
    }
    return this.toObject(row);
  }
}

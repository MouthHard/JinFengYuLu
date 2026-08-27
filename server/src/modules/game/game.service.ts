/**
 * ============================================================================
 * 游戏模块服务 - game.service.ts
 * ============================================================================
 * 【前端同学必读】
 * 游戏模块的业务逻辑层，处理游戏列表/详情/Banner/分类/标签/平台/特惠的查询。
 *
 * 【设计模式：批量加载关联数据避免 N+1】
 * 游戏有 4 种关联子数据（截图/特性/标签/平台），如果对每个游戏单独查询，
 * 10 个游戏就会产生 40+ 次数据库查询（N+1 问题）。
 *
 * 本 Service 采用"批量查询 + Map 映射"的方式：
 * 1. 先查出游戏列表
 * 2. 收集所有游戏 ID
 * 3. 用 Promise.all 并行批量查询 4 种关联数据
 * 4. 构建 gameId → 数据[] 的 Map
 * 5. 遍历游戏列表时从 Map 中取关联数据
 *
 * 【Promise.all 的作用】
 * 4 个关联查询互不依赖，可以并行执行，比串行快 4 倍。
 * 类比前端：类似 Promise.all([fetchA(), fetchB(), fetchC()])。
 *
 * 【价格区间筛选（priceRange）】
 * 前端传 priceRange 参数（如 'free'/'under50'），Service 用 switch 映射为 SQL 条件。
 * 这是因为价格区间是前端定义的"虚拟分类"，数据库中没有对应字段。
 *
 * 【排序映射（sortBy）】
 * 前端传 sortBy 参数（如 'popular'/'price-asc'/'rating'），Service 用 switch 映射为
 * 数据库排序字段和方向。
 * ============================================================================
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets } from 'typeorm';
import { Game, GameScreenshot, GameFeature, GameTag, GamePlatform, GameBanner, GameCategory } from '../../entities/game.entity';
import { QueryGameDto } from './dto/game.dto';

@Injectable()
export class GameService {
  constructor(
    // 注入 7 个 Repository
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(GameScreenshot)
    private screenshotRepository: Repository<GameScreenshot>,
    @InjectRepository(GameFeature)
    private featureRepository: Repository<GameFeature>,
    @InjectRepository(GameTag)
    private tagRepository: Repository<GameTag>,
    @InjectRepository(GamePlatform)
    private platformRepository: Repository<GamePlatform>,
    @InjectRepository(GameBanner)
    private bannerRepository: Repository<GameBanner>,
    @InjectRepository(GameCategory)
    private categoryRepository: Repository<GameCategory>,
  ) {}

  /**
   * 获取游戏列表（分页 + 筛选 + 排序）
   * 前端调用 GET /game 时触发
   */
  async findAll(query: QueryGameDto) {
    const {
      keyword, // 搜索关键词
      category, // 分类筛选
      tag, // 标签筛选
      platform, // 平台筛选
      priceRange, // 价格区间筛选
      sortBy = 'popular', // 排序方式，默认按热度
      sortOrder, // 排序方向（可选覆盖）
      page = 1,
      limit = 20,
    } = query;

    const qb = this.gameRepository
      .createQueryBuilder('g')
      .where('g.is_active = :active', { active: true });

    // 关键词搜索：在标题/副标题/开发商/发行商/标签中模糊匹配
    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((qb) => {
          qb.where('g.title LIKE :kw', { kw })
            .orWhere('g.subtitle LIKE :kw', { kw })
            .orWhere('g.developer LIKE :kw', { kw })
            .orWhere('g.publisher LIKE :kw', { kw })
            .orWhere(
              // 子查询：在标签表中搜索
              "EXISTS (SELECT 1 FROM game_tag t WHERE t.game_id = g.id AND t.tag LIKE :kw)",
              { kw },
            );
        }),
      );
    }

    // 分类筛选（精确匹配）
    if (category) {
      qb.andWhere('g.category = :category', { category });
    }

    // 标签筛选（通过 game_tag 表 INNER JOIN）
    if (tag) {
      qb.innerJoin(
        GameTag,
        't',
        't.game_id = g.id AND t.tag = :tag',
        { tag },
      );
    }

    // 平台筛选（通过 game_platform 表 INNER JOIN）
    if (platform) {
      qb.innerJoin(
        GamePlatform,
        'p',
        'p.game_id = g.id AND p.platform = :platform',
        { platform },
      );
    }

    // 价格区间筛选（前端定义的虚拟分类，映射为 SQL 条件）
    if (priceRange) {
      switch (priceRange) {
        case 'free': // 免费
          qb.andWhere('g.price = 0');
          break;
        case 'under50': // 50 元以下
          qb.andWhere('g.price > 0 AND g.price < 50');
          break;
        case 'under100': // 50-100 元
          qb.andWhere('g.price >= 50 AND g.price < 100');
          break;
        case 'over100': // 100 元以上
          qb.andWhere('g.price >= 100');
          break;
      }
    }

    // 排序映射：前端排序参数 → 数据库排序字段
    switch (sortBy) {
      case 'popular': // 按热度（评价数降序）
        qb.orderBy('g.review_count', 'DESC');
        break;
      case 'price-asc': // 价格升序
        qb.orderBy('g.price', 'ASC');
        break;
      case 'price-desc': // 价格降序
        qb.orderBy('g.price', 'DESC');
        break;
      case 'rating': // 按评分降序
        qb.orderBy('g.rating', 'DESC');
        break;
      case 'newest': // 按发行日期降序
        qb.orderBy('g.release_date', 'DESC');
        break;
      case 'discount': // 按折扣力度降序
        qb.orderBy('g.discount', 'DESC');
        break;
      default:
        qb.orderBy('g.review_count', 'DESC');
    }

    // sortOrder 参数的覆盖逻辑（目前简化处理）
    if (sortOrder) {
      if (sortOrder === 'ASC') {
        // 预留：可在此处反转排序方向
      }
    }

    // 分页
    const skip = (page - 1) * limit;
    qb.skip(skip).take(limit);

    const [items, total] = await qb.getManyAndCount();

    // ---- 批量加载关联数据（避免 N+1 查询）----
    const gameIds = items.map((item) => item.id);

    // 并行查询 4 种关联数据
    const [allScreenshots, allFeatures, allTags, allPlatforms] = await Promise.all([
      gameIds.length
        ? this.screenshotRepository
            .createQueryBuilder('s')
            .where('s.game_id IN (:...ids)', { ids: gameIds })
            .orderBy('s.sort_order', 'ASC')
            .getMany()
        : [],
      gameIds.length
        ? this.featureRepository
            .createQueryBuilder('f')
            .where('f.game_id IN (:...ids)', { ids: gameIds })
            .orderBy('f.sort_order', 'ASC')
            .getMany()
        : [],
      gameIds.length
        ? this.tagRepository
            .createQueryBuilder('t')
            .where('t.game_id IN (:...ids)', { ids: gameIds })
            .getMany()
        : [],
      gameIds.length
        ? this.platformRepository
            .createQueryBuilder('p')
            .where('p.game_id IN (:...ids)', { ids: gameIds })
            .getMany()
        : [],
    ]);

    // 构建 gameId → 数据[] 的映射
    const screenshotMap = new Map<number, string[]>();
    for (const s of allScreenshots) {
      if (!screenshotMap.has(s.gameId)) screenshotMap.set(s.gameId, []);
      screenshotMap.get(s.gameId)!.push(s.url);
    }

    const featureMap = new Map<number, string[]>();
    for (const f of allFeatures) {
      if (!featureMap.has(f.gameId)) featureMap.set(f.gameId, []);
      featureMap.get(f.gameId)!.push(f.feature);
    }

    const tagMap = new Map<number, string[]>();
    for (const t of allTags) {
      if (!tagMap.has(t.gameId)) tagMap.set(t.gameId, []);
      tagMap.get(t.gameId)!.push(t.tag);
    }

    const platformMap = new Map<number, string[]>();
    for (const p of allPlatforms) {
      if (!platformMap.has(p.gameId)) platformMap.set(p.gameId, []);
      platformMap.get(p.gameId)!.push(p.platform);
    }

    // 组装最终结果
    const results = items.map((item) => ({
      ...this.formatResponse(item),
      screenshots: screenshotMap.get(item.id) || [],
      features: featureMap.get(item.id) || [],
      tags: tagMap.get(item.id) || [],
      platforms: platformMap.get(item.id) || [],
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
   * 获取单个游戏详情
   * 前端调用 GET /game/:gameId 时触发
   */
  async findOne(gameId: string) {
    const item = await this.gameRepository.findOne({
      where: { gameId, isActive: true },
    });

    if (!item) {
      throw new NotFoundException(`游戏 ${gameId} 不存在`);
    }

    // 并行查询该游戏的 4 种关联数据
    const [screenshots, features, tags, platforms] = await Promise.all([
      this.screenshotRepository.find({
        where: { gameId: item.id },
        order: { sortOrder: 'ASC' },
      }),
      this.featureRepository.find({
        where: { gameId: item.id },
        order: { sortOrder: 'ASC' },
      }),
      this.tagRepository.find({ where: { gameId: item.id } }),
      this.platformRepository.find({ where: { gameId: item.id } }),
    ]);

    return {
      ...this.formatResponse(item),
      screenshots: screenshots.map((s) => s.url),
      features: features.map((f) => f.feature),
      tags: tags.map((t) => t.tag),
      platforms: platforms.map((p) => p.platform),
    };
  }

  /**
   * 获取 Banner 列表
   * 前端调用 GET /game/banners 时触发
   */
  async getBanners() {
    const banners = await this.bannerRepository.find({
      where: { isActive: true },
      order: { sortOrder: 'ASC' },
    });

    return banners.map((b) => ({
      id: b.bannerId,
      gameId: b.gameIdRef, // 引用的游戏业务ID，前端点击跳转用
      image: b.image,
      title: b.title,
      subtitle: b.subtitle,
      tag: b.tag,
    }));
  }

  /**
   * 获取游戏分类配置（含每分类游戏数）
   * 前端调用 GET /game/categories 时触发
   */
  async getCategories() {
    const categories = await this.categoryRepository.find({
      where: { isActive: true },
      order: { sortOrder: 'ASC' },
    });

    // 统计每个分类的游戏数量
    const countResults = await this.gameRepository
      .createQueryBuilder('g')
      .select('g.category', 'category')
      .addSelect('COUNT(*)', 'count')
      .where('g.is_active = :active', { active: true })
      .groupBy('g.category')
      .getRawMany();

    const countMap = new Map<string, number>();
    countResults.forEach((r) => {
      countMap.set(r.category, Number(r.count));
    });

    return categories.map((cat) => ({
      key: cat.keyName, // 分类键名，如 'action'
      label: cat.label, // 分类显示名，如"动作"
      icon: cat.icon,
      count: countMap.get(cat.keyName) || 0, // 该分类的游戏数量
    }));
  }

  /**
   * 获取所有可用标签及使用次数
   * 前端调用 GET /game/tags 时触发
   */
  async getTags() {
    const results = await this.tagRepository
      .createQueryBuilder('t')
      .select('t.tag', 'tag')
      .addSelect('COUNT(*)', 'count')
      .innerJoin('game', 'g', 'g.id = t.game_id AND g.is_active = 1')
      .groupBy('t.tag')
      .orderBy('count', 'DESC')
      .getRawMany();

    return results.map((r) => ({
      tag: r.tag,
      count: Number(r.count),
    }));
  }

  /**
   * 获取所有可用平台及使用次数
   * 前端调用 GET /game/platforms 时触发
   */
  async getPlatforms() {
    const results = await this.platformRepository
      .createQueryBuilder('p')
      .select('p.platform', 'platform')
      .addSelect('COUNT(*)', 'count')
      .innerJoin('game', 'g', 'g.id = p.game_id AND g.is_active = 1')
      .groupBy('p.platform')
      .orderBy('count', 'DESC')
      .getRawMany();

    return results.map((r) => ({
      platform: r.platform,
      count: Number(r.count),
    }));
  }

  /**
   * 获取特惠游戏（有折扣的）
   * 前端调用 GET /game/sale 时触发
   */
  async getOnSale(limit = 10) {
    const qb = this.gameRepository
      .createQueryBuilder('g')
      .where('g.is_active = :active', { active: true })
      .andWhere('g.discount IS NOT NULL')
      .andWhere('g.discount > 0')
      .orderBy('g.discount', 'DESC') // 按折扣力度降序
      .take(limit);

    const [items, total] = await qb.getManyAndCount();
    const gameIds = items.map((item) => item.id);

    // 批量加载关联数据（与 findAll 相同的逻辑）
    const [allScreenshots, allFeatures, allTags, allPlatforms] = await Promise.all([
      gameIds.length
        ? this.screenshotRepository
            .createQueryBuilder('s')
            .where('s.game_id IN (:...ids)', { ids: gameIds })
            .orderBy('s.sort_order', 'ASC')
            .getMany()
        : [],
      gameIds.length
        ? this.featureRepository
            .createQueryBuilder('f')
            .where('f.game_id IN (:...ids)', { ids: gameIds })
            .orderBy('f.sort_order', 'ASC')
            .getMany()
        : [],
      gameIds.length
        ? this.tagRepository
            .createQueryBuilder('t')
            .where('t.game_id IN (:...ids)', { ids: gameIds })
            .getMany()
        : [],
      gameIds.length
        ? this.platformRepository
            .createQueryBuilder('p')
            .where('p.game_id IN (:...ids)', { ids: gameIds })
            .getMany()
        : [],
    ]);

    const screenshotMap = new Map<number, string[]>();
    for (const s of allScreenshots) {
      if (!screenshotMap.has(s.gameId)) screenshotMap.set(s.gameId, []);
      screenshotMap.get(s.gameId)!.push(s.url);
    }
    const featureMap = new Map<number, string[]>();
    for (const f of allFeatures) {
      if (!featureMap.has(f.gameId)) featureMap.set(f.gameId, []);
      featureMap.get(f.gameId)!.push(f.feature);
    }
    const tagMap = new Map<number, string[]>();
    for (const t of allTags) {
      if (!tagMap.has(t.gameId)) tagMap.set(t.gameId, []);
      tagMap.get(t.gameId)!.push(t.tag);
    }
    const platformMap = new Map<number, string[]>();
    for (const p of allPlatforms) {
      if (!platformMap.has(p.gameId)) platformMap.set(p.gameId, []);
      platformMap.get(p.gameId)!.push(p.platform);
    }

    return {
      items: items.map((item) => ({
        ...this.formatResponse(item),
        screenshots: screenshotMap.get(item.id) || [],
        features: featureMap.get(item.id) || [],
        tags: tagMap.get(item.id) || [],
        platforms: platformMap.get(item.id) || [],
      })),
      total,
      page: 1,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  }

  /**
   * 格式化游戏响应数据
   * 主要处理 decimal 类型的数字转换（TypeORM 读取 decimal 返回字符串）
   */
  private formatResponse(item: Game) {
    return {
      id: item.gameId, // 使用业务ID
      title: item.title,
      subtitle: item.subtitle,
      cover: item.cover,
      banner: item.banner,
      category: item.category,
      price: Number(item.price), // decimal → number
      originalPrice: item.originalPrice ? Number(item.originalPrice) : undefined,
      discount: item.discount,
      rating: Number(item.rating), // decimal → number
      reviewCount: item.reviewCount,
      developer: item.developer,
      publisher: item.publisher,
      releaseDate: item.releaseDate,
      description: item.description,
      isActive: item.isActive,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  }
}

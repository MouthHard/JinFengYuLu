/**
 * ============================================================================
 * 博物馆模块服务 - museum.service.ts
 * ============================================================================
 * 【前端同学必读】
 * 博物馆模块的业务逻辑层，处理博物馆及其 10 种子资源的查询和格式化。
 * 是所有 Service 中代码量最大的（11 个 Repository + 11 套查询/格式化逻辑）。
 *
 * 【设计模式】
 * 与历史模块类似，采用"通用分页 + 专用格式化"的模式：
 * - paginate()：通用分页方法
 * - parseJsonArray()：JSON 数组解析
 * - parseJsonValue()：通用 JSON 值解析（对象/数组/基本类型）
 * - formatHighlights()：特殊处理 highlights 字段（可能是字符串或数组）
 * - formatXxx()：每种资源的专用格式化方法
 *
 * 【museumId 筛选的特殊处理】
 * 子资源（文物/展览/活动等）都通过 museumId 关联到博物馆。
 * 前端可以通过 ?museumId=1 筛选某个博物馆下的子资源。
 * 代码中用 `museumId !== undefined && museumId !== null` 判断，
 * 而不是简单的 `if (museumId)`，因为 museumId=0 也是合法值。
 *
 * 【formatXxx 方法中的条件赋值】
 * 部分格式化方法使用 `if (item.xxx) result.xxx = item.xxx` 的写法，
 * 而不是直接展开所有字段。这样做的目的是：
 * 只返回有值的字段，省略 null/undefined 字段，减少响应体积。
 * ============================================================================
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets, ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import {
  Museum,
  MuseumDetail,
  MuseumArtifact,
  MuseumArtifactDetail,
  MuseumExhibition,
  MuseumActivity,
  MuseumNews,
  MuseumImmersive,
  MuseumCreativeProduct,
  MuseumAcademicResource,
  MuseumExhibitionHall,
} from '../../entities/museum.entity';
import { QueryMuseumDto } from './dto/museum.dto';

@Injectable()
export class MuseumService {
  constructor(
    // 注入 11 个 Repository
    @InjectRepository(Museum)
    private museumRepository: Repository<Museum>,
    @InjectRepository(MuseumDetail)
    private detailRepository: Repository<MuseumDetail>,
    @InjectRepository(MuseumArtifact)
    private artifactRepository: Repository<MuseumArtifact>,
    @InjectRepository(MuseumArtifactDetail)
    private artifactDetailRepository: Repository<MuseumArtifactDetail>,
    @InjectRepository(MuseumExhibition)
    private exhibitionRepository: Repository<MuseumExhibition>,
    @InjectRepository(MuseumActivity)
    private activityRepository: Repository<MuseumActivity>,
    @InjectRepository(MuseumNews)
    private newsRepository: Repository<MuseumNews>,
    @InjectRepository(MuseumImmersive)
    private immersiveRepository: Repository<MuseumImmersive>,
    @InjectRepository(MuseumCreativeProduct)
    private creativeRepository: Repository<MuseumCreativeProduct>,
    @InjectRepository(MuseumAcademicResource)
    private academicRepository: Repository<MuseumAcademicResource>,
    @InjectRepository(MuseumExhibitionHall)
    private hallRepository: Repository<MuseumExhibitionHall>,
  ) {}

  /** 获取博物馆列表（支持关键词/省份/类型筛选） */
  async findMuseums(query: QueryMuseumDto) {
    const { keyword, province, type, page = 1, limit = 200 } = query;

    const qb = this.museumRepository
      .createQueryBuilder('m')
      .where('m.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('m.name LIKE :kw', { kw })
            .orWhere('m.description LIKE :kw', { kw })
            .orWhere('m.province LIKE :kw', { kw })
            .orWhere('m.type LIKE :kw', { kw });
        }),
      );
    }

    if (province) {
      qb.andWhere('m.province = :province', { province });
    }

    if (type) {
      qb.andWhere('m.type = :type', { type });
    }

    qb.orderBy('m.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatMuseum(item));
  }

  /** 获取单个博物馆 */
  async findMuseumById(id: number) {
    const item = await this.museumRepository.findOne({
      where: { id, isActive: true },
    });
    if (!item) {
      throw new NotFoundException(`博物馆 ${id} 不存在`);
    }
    return this.formatMuseum(item);
  }

  /** 获取博物馆详情（参观信息/历史/建筑等） */
  async findMuseumDetail(museumId: number) {
    const item = await this.detailRepository.findOne({
      where: { museumId, isActive: true },
    });
    if (!item) {
      throw new NotFoundException(`博物馆 ${museumId} 详情不存在`);
    }
    return this.formatMuseumDetail(item);
  }

  /** 获取文物列表（支持关键词/博物馆ID/分类筛选） */
  async findArtifacts(query: QueryMuseumDto) {
    const { keyword, museumId, category, page = 1, limit = 200 } = query;

    const qb = this.artifactRepository
      .createQueryBuilder('a')
      .where('a.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('a.name LIKE :kw', { kw })
            .orWhere('a.description LIKE :kw', { kw })
            .orWhere('a.period LIKE :kw', { kw });
        }),
      );
    }

    // 注意：用 !== undefined && !== null 而非 if (museumId)，因为 0 也是合法值
    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('a.museum_id = :museumId', { museumId });
    }

    if (category) {
      qb.andWhere('a.category = :category', { category });
    }

    qb.orderBy('a.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatArtifact(item));
  }

  /** 获取单个文物 */
  async findArtifactById(id: number) {
    const item = await this.artifactRepository.findOne({
      where: { id, isActive: true },
    });
    if (!item) {
      throw new NotFoundException(`文物 ${id} 不存在`);
    }
    return this.formatArtifact(item);
  }

  /** 获取文物详细信息（来自 museum_artifact_detail 表） */
  async findArtifactDetail(id: number) {
    const item = await this.artifactDetailRepository.findOne({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException(`文物详情 ${id} 不存在`);
    }
    return this.formatArtifactDetail(item);
  }

  /** 获取展览列表 */
  async findExhibitions(query: QueryMuseumDto) {
    const { keyword, museumId, category, page = 1, limit = 200 } = query;

    const qb = this.exhibitionRepository
      .createQueryBuilder('e')
      .where('e.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('e.title LIKE :kw', { kw })
            .orWhere('e.description LIKE :kw', { kw })
            .orWhere('e.location LIKE :kw', { kw });
        }),
      );
    }

    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('e.museum_id = :museumId', { museumId });
    }

    if (category) {
      qb.andWhere('e.category = :category', { category });
    }

    qb.orderBy('e.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatExhibition(item));
  }

  /** 获取活动列表 */
  async findActivities(query: QueryMuseumDto) {
    const { keyword, museumId, page = 1, limit = 200 } = query;

    const qb = this.activityRepository
      .createQueryBuilder('a')
      .where('a.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('a.title LIKE :kw', { kw })
            .orWhere('a.description LIKE :kw', { kw })
            .orWhere('a.location LIKE :kw', { kw });
        }),
      );
    }

    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('a.museum_id = :museumId', { museumId });
    }

    qb.orderBy('a.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatActivity(item));
  }

  /** 获取新闻列表 */
  async findNews(query: QueryMuseumDto) {
    const { keyword, museumId, page = 1, limit = 200 } = query;

    const qb = this.newsRepository
      .createQueryBuilder('n')
      .where('n.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('n.title LIKE :kw', { kw })
            .orWhere('n.description LIKE :kw', { kw });
        }),
      );
    }

    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('n.museum_id = :museumId', { museumId });
    }

    qb.orderBy('n.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatNews(item));
  }

  /** 获取沉浸式体验列表 */
  async findImmersive(query: QueryMuseumDto) {
    const { keyword, museumId, page = 1, limit = 200 } = query;

    const qb = this.immersiveRepository
      .createQueryBuilder('i')
      .where('i.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('i.title LIKE :kw', { kw })
            .orWhere('i.description LIKE :kw', { kw });
        }),
      );
    }

    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('i.museum_id = :museumId', { museumId });
    }

    qb.orderBy('i.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatImmersive(item));
  }

  /** 获取文创产品列表 */
  async findCreativeProducts(query: QueryMuseumDto) {
    const { keyword, museumId, category, page = 1, limit = 200 } = query;

    const qb = this.creativeRepository
      .createQueryBuilder('c')
      .where('c.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('c.name LIKE :kw', { kw })
            .orWhere('c.description LIKE :kw', { kw });
        }),
      );
    }

    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('c.museum_id = :museumId', { museumId });
    }

    if (category) {
      qb.andWhere('c.category = :category', { category });
    }

    qb.orderBy('c.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatCreative(item));
  }

  /** 获取学术资源列表 */
  async findAcademicResources(query: QueryMuseumDto) {
    const { keyword, museumId, type, category, page = 1, limit = 200 } = query;
    // type 和 category 都可以用来筛选资源类型，优先使用 type
    const resourceType = type || category;

    const qb = this.academicRepository
      .createQueryBuilder('r')
      .where('r.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('r.title LIKE :kw', { kw })
            .orWhere('r.description LIKE :kw', { kw })
            .orWhere('r.author LIKE :kw', { kw });
        }),
      );
    }

    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('r.museum_id = :museumId', { museumId });
    }

    if (resourceType) {
      qb.andWhere('r.type = :resourceType', { resourceType });
    }

    qb.orderBy('r.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatAcademic(item));
  }

  /** 获取专馆列表 */
  async findExhibitionHalls(query: QueryMuseumDto) {
    const { keyword, museumId, category, page = 1, limit = 200 } = query;

    const qb = this.hallRepository
      .createQueryBuilder('h')
      .where('h.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('h.name LIKE :kw', { kw })
            .orWhere('h.introduction LIKE :kw', { kw })
            .orWhere('h.category LIKE :kw', { kw });
        }),
      );
    }

    if (museumId !== undefined && museumId !== null) {
      qb.andWhere('h.museum_id = :museumId', { museumId });
    }

    if (category) {
      qb.andWhere('h.category = :category', { category });
    }

    qb.orderBy('h.id', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatHall(item));
  }

  /**
   * 通用分页方法
   * 与历史模块的 paginate 相同，支持泛型格式化函数
   */
  private async paginate<T extends ObjectLiteral, R>(
    qb: SelectQueryBuilder<T>,
    page: number,
    limit: number,
    formatter: (item: T) => R,
  ) {
    const skip = (page - 1) * limit;
    qb.skip(skip).take(limit);
    const [items, total] = await qb.getManyAndCount();
    return {
      items: items.map(formatter),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  }

  /** 通用 JSON 数组解析 */
  private parseJsonArray(value: unknown): string[] {
    if (Array.isArray(value)) return value as string[];
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  }

  /** 通用 JSON 值解析（支持对象/数组/基本类型） */
  private parseJsonValue<T>(value: unknown, fallback: T): T {
    if (value === null || value === undefined) return fallback;
    if (typeof value === 'string') {
      try {
        return JSON.parse(value) as T;
      } catch {
        return fallback;
      }
    }
    return value as T;
  }

  /** 格式化 highlights 字段（可能是字符串或数组，统一转为字符串） */
  private formatHighlights(value: unknown): string {
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value.join('；'); // 数组用中文分号连接
    if (value && typeof value === 'object') return JSON.stringify(value);
    return '';
  }

  /** 格式化博物馆数据 */
  private formatMuseum(item: Museum) {
    return {
      id: item.id,
      name: item.name,
      province: item.province,
      type: item.type,
      image: item.image,
      description: item.description,
      artifacts: item.artifactsCount, // 数据库字段名 artifactsCount → 前端字段名 artifacts
      exhibitions: item.exhibitionsCount,
      visitors: item.visitors,
      features: this.parseJsonArray(item.features),
    };
  }

  /** 格式化博物馆详情数据 */
  private formatMuseumDetail(item: MuseumDetail) {
    return {
      museumId: item.museumId,
      visitInfo: this.parseJsonValue(item.visitInfo, {}), // JSON 对象解析
      history: item.history,
      architecture: item.architecture,
      highlights: this.formatHighlights(item.highlights), // 特殊处理
      education: item.education,
    };
  }

  /** 格式化文物数据（条件赋值：只返回有值的字段） */
  private formatArtifact(item: MuseumArtifact) {
    const result: Record<string, unknown> = {
      id: item.id,
      museumId: item.museumId,
      name: item.name,
      period: item.period,
      image: item.image,
    };
    // 以下字段只在有值时才添加到响应中，减少响应体积
    if (item.description) result.description = item.description;
    if (item.category) result.category = item.category;
    if (item.basicInfo) {
      result.basicInfo = this.parseJsonValue(item.basicInfo, undefined);
    }
    if (item.appearance) result.appearance = item.appearance;
    if (item.historicalValue) result.historicalValue = item.historicalValue;
    return result;
  }

  /** 格式化文物详情数据 */
  private formatArtifactDetail(item: MuseumArtifactDetail) {
    const result: Record<string, unknown> = {
      id: item.id,
      name: item.name,
      period: item.period,
      description: item.description,
      image: item.image,
    };
    if (item.type) result.type = item.type;
    if (item.basicInfo) {
      result.basicInfo = this.parseJsonValue(item.basicInfo, undefined);
    }
    if (item.appearance) result.appearance = item.appearance;
    if (item.historicalValue) result.historicalValue = item.historicalValue;
    if (item.artifactLevel) result.artifactLevel = item.artifactLevel;
    if (item.relatedStory) result.relatedStory = item.relatedStory;
    if (item.protectionStatus) result.protectionStatus = item.protectionStatus;
    if (item.culturalSignificance) {
      result.culturalSignificance = item.culturalSignificance;
    }
    return result;
  }

  /** 格式化展览数据 */
  private formatExhibition(item: MuseumExhibition) {
    const result: Record<string, unknown> = {
      id: item.id,
      museumId: item.museumId,
      title: item.title,
      description: item.description,
      date: item.date,
      image: item.image,
    };
    if (item.location) result.location = item.location;
    if (item.category) result.category = item.category;
    if (item.status) result.status = item.status;
    if (item.statusText) result.statusText = item.statusText;
    if (item.tags) result.tags = this.parseJsonArray(item.tags);
    if (item.curator) result.curator = item.curator;
    if (item.scale) result.scale = item.scale;
    if (item.visitors !== null && item.visitors !== undefined) {
      result.visitors = item.visitors;
    }
    if (item.background) result.background = item.background;
    return result;
  }

  /** 格式化活动数据 */
  private formatActivity(item: MuseumActivity) {
    const result: Record<string, unknown> = {
      id: item.id,
      museumId: item.museumId,
      title: item.title,
      description: item.description,
      date: item.date,
      image: item.image,
    };
    if (item.time) result.time = item.time;
    if (item.location) result.location = item.location;
    return result;
  }

  /** 格式化新闻数据 */
  private formatNews(item: MuseumNews) {
    return {
      id: item.id,
      museumId: item.museumId,
      title: item.title,
      description: item.description,
      date: item.date,
      image: item.image,
    };
  }

  /** 格式化沉浸式体验数据 */
  private formatImmersive(item: MuseumImmersive) {
    return {
      id: item.id,
      museumId: item.museumId,
      title: item.title,
      description: item.description,
      image: item.image,
    };
  }

  /** 格式化文创产品数据 */
  private formatCreative(item: MuseumCreativeProduct) {
    const result: Record<string, unknown> = {
      id: item.id,
      museumId: item.museumId,
      name: item.name,
      description: item.description,
      price: Number(item.price), // decimal 类型需转为数字
      image: item.image,
    };
    if (item.category) result.category = item.category;
    return result;
  }

  /** 格式化学术资源数据 */
  private formatAcademic(item: MuseumAcademicResource) {
    const result: Record<string, unknown> = {
      id: item.id,
      museumId: item.museumId,
      title: item.title,
      date: item.date,
      type: item.type,
      description: item.description,
    };
    if (item.author) result.author = item.author;
    if (item.link) result.link = item.link;
    return result;
  }

  /** 格式化专馆数据 */
  private formatHall(item: MuseumExhibitionHall) {
    return {
      id: item.hallId, // 使用业务ID
      museumId: item.museumId,
      name: item.name,
      icon: item.icon,
      category: item.category,
      coverImage: item.coverImage,
      introduction: item.introduction,
      stats: this.parseJsonValue(item.stats, {
        artifacts: 0,
        exhibitions: 0,
        visitors: 0,
      }),
      location: item.location,
      openTime: item.openTime,
      duration: item.duration,
      ticket: item.ticket,
      artifacts: this.parseJsonValue(item.artifacts, []),
      exhibitions: this.parseJsonValue(item.exhibitions, []),
      recommendations: this.parseJsonValue(item.recommendations, []),
    };
  }
}

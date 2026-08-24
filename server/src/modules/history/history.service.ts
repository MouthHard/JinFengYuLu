/**
 * ============================================================================
 * 历史模块服务 - history.service.ts
 * ============================================================================
 * 【前端同学必读】
 * 历史模块的业务逻辑层，处理朝代/事件/人物/遗产的查询和格式化。
 *
 * 【设计模式：通用分页 + 格式化】
 * 本 Service 抽象了两个通用方法：
 * 1. paginate() — 通用分页逻辑（skip/take + getManyAndCount + 格式化）
 * 2. parseJsonArray() — 通用 JSON 数组解析（处理数据库 JSON 列可能是字符串的情况）
 *
 * 各查询方法（findDynasties/findEvents/...）的流程：
 * 1. 创建 QueryBuilder 并添加基础条件（isActive=true）
 * 2. 根据参数添加筛选条件（keyword/category/era 等）
 * 3. 设置排序
 * 4. 调用 paginate() 执行分页查询并格式化
 *
 * 【formatXxx 方法】
 * 每个 Entity 都有对应的 formatXxx 方法，作用是：
 * - 将数据库列名（snake_case）映射为前端友好的驼峰字段
 * - 处理 JSON 列的解析
 * - 组装嵌套结构（如 formatFigure 中的 backContent）
 *
 * 【类比前端】
 * 类似前端的"数据转换层"——从 API 拿到原始数据后，
 * 在 store/composable 中做字段映射和格式化，再传给组件渲染。
 * ============================================================================
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Brackets, ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import {
  Dynasty,
  HistoricalEvent,
  HistoricalFigure,
  CulturalHeritage,
} from '../../entities/history.entity';
import { QueryHistoryDto } from './dto/history.dto';

@Injectable()
export class HistoryService {
  constructor(
    // 注入 4 个 Repository
    @InjectRepository(Dynasty)
    private dynastyRepository: Repository<Dynasty>,
    @InjectRepository(HistoricalEvent)
    private eventRepository: Repository<HistoricalEvent>,
    @InjectRepository(HistoricalFigure)
    private figureRepository: Repository<HistoricalFigure>,
    @InjectRepository(CulturalHeritage)
    private heritageRepository: Repository<CulturalHeritage>,
  ) {}

  /**
   * 获取朝代列表
   * 支持 keyword/era/periodTag 筛选，按 sortOrder 升序排列
   */
  async findDynasties(query: QueryHistoryDto) {
    const { keyword, era, periodTag, page = 1, limit = 200 } = query;

    const qb = this.dynastyRepository
      .createQueryBuilder('d')
      .where('d.is_active = :active', { active: true });

    // 关键词搜索：在名称/描述/都城/创始人/地理位置中模糊匹配
    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('d.name LIKE :kw', { kw })
            .orWhere('d.description LIKE :kw', { kw })
            .orWhere('d.capital LIKE :kw', { kw })
            .orWhere('d.founder LIKE :kw', { kw })
            .orWhere('d.location LIKE :kw', { kw });
        }),
      );
    }

    // 按时代筛选（ancient/imperial）
    if (era) {
      qb.andWhere('d.era = :era', { era });
    }

    // 按时期标签筛选（先秦/秦汉/...）
    if (periodTag) {
      qb.andWhere('d.period_tag = :periodTag', { periodTag });
    }

    qb.orderBy('d.sort_order', 'ASC'); // 按排序权重升序
    return this.paginate(qb, page, limit, (item) => this.formatDynasty(item));
  }

  /**
   * 获取单个朝代详情
   */
  async findDynastyById(dynastyId: string) {
    const item = await this.dynastyRepository.findOne({
      where: { dynastyId, isActive: true },
    });
    if (!item) {
      throw new NotFoundException(`朝代 ${dynastyId} 不存在`);
    }
    return this.formatDynasty(item);
  }

  /**
   * 获取历史事件列表
   * 支持 keyword/category 筛选
   */
  async findEvents(query: QueryHistoryDto) {
    const { keyword, category, page = 1, limit = 200 } = query;

    const qb = this.eventRepository
      .createQueryBuilder('e')
      .where('e.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('e.title LIKE :kw', { kw })
            .orWhere('e.brief LIKE :kw', { kw })
            .orWhere('e.description LIKE :kw', { kw })
            .orWhere('e.period LIKE :kw', { kw });
        }),
      );
    }

    if (category) {
      qb.andWhere('e.category = :category', { category });
    }

    qb.orderBy('e.sort_order', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatEvent(item));
  }

  /**
   * 获取单个历史事件详情
   */
  async findEventById(eventId: string) {
    const item = await this.eventRepository.findOne({
      where: { eventId, isActive: true },
    });
    if (!item) {
      throw new NotFoundException(`历史事件 ${eventId} 不存在`);
    }
    return this.formatEvent(item);
  }

  /**
   * 获取历史人物列表
   * 支持 keyword/category/dynasty 筛选
   */
  async findFigures(query: QueryHistoryDto) {
    const { keyword, category, dynasty, page = 1, limit = 200 } = query;

    const qb = this.figureRepository
      .createQueryBuilder('f')
      .where('f.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('f.name LIKE :kw', { kw })
            .orWhere('f.title LIKE :kw', { kw })
            .orWhere('f.brief LIKE :kw', { kw })
            .orWhere('f.description LIKE :kw', { kw })
            .orWhere('f.dynasty LIKE :kw', { kw });
        }),
      );
    }

    if (category) {
      qb.andWhere('f.category = :category', { category });
    }

    if (dynasty) {
      qb.andWhere('f.dynasty = :dynasty', { dynasty });
    }

    qb.orderBy('f.sort_order', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatFigure(item));
  }

  /**
   * 获取单个历史人物详情
   */
  async findFigureById(figureId: string) {
    const item = await this.figureRepository.findOne({
      where: { figureId, isActive: true },
    });
    if (!item) {
      throw new NotFoundException(`历史人物 ${figureId} 不存在`);
    }
    return this.formatFigure(item);
  }

  /**
   * 获取文化遗产列表
   * 支持 keyword/category/era 筛选
   */
  async findHeritage(query: QueryHistoryDto) {
    const { keyword, category, era, page = 1, limit = 200 } = query;

    const qb = this.heritageRepository
      .createQueryBuilder('h')
      .where('h.is_active = :active', { active: true });

    if (keyword) {
      const kw = `%${keyword}%`;
      qb.andWhere(
        new Brackets((sub) => {
          sub
            .where('h.name LIKE :kw', { kw })
            .orWhere('h.brief LIKE :kw', { kw })
            .orWhere('h.description LIKE :kw', { kw })
            .orWhere('h.location LIKE :kw', { kw })
            .orWhere('h.era LIKE :kw', { kw });
        }),
      );
    }

    if (category) {
      qb.andWhere('h.category = :category', { category });
    }

    if (era) {
      qb.andWhere('h.era = :era', { era });
    }

    qb.orderBy('h.sort_order', 'ASC');
    return this.paginate(qb, page, limit, (item) => this.formatHeritage(item));
  }

  /**
   * 获取单个文化遗产详情
   */
  async findHeritageById(heritageId: string) {
    const item = await this.heritageRepository.findOne({
      where: { heritageId, isActive: true },
    });
    if (!item) {
      throw new NotFoundException(`文化遗产 ${heritageId} 不存在`);
    }
    return this.formatHeritage(item);
  }

  /**
   * 通用分页方法
   * @param qb 查询构建器
   * @param page 页码
   * @param limit 每页数量
   * @param formatter 格式化函数（将 Entity 转为前端友好的对象）
   * @returns { items, total, page, limit, totalPages }
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
      items: items.map(formatter), // 对每条数据应用格式化函数
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1, // 至少 1 页
    };
  }

  /**
   * 通用 JSON 数组解析
   * 数据库 JSON 列可能是数组或字符串，统一处理为数组
   */
  private parseJsonArray(value: unknown): string[] {
    if (Array.isArray(value)) return value;
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

  /** 格式化朝代数据 */
  private formatDynasty(item: Dynasty) {
    return {
      id: item.dynastyId, // 使用业务ID而非自增id
      name: item.name,
      period: item.period,
      era: item.era,
      periodTag: item.periodTag,
      isUnified: Boolean(item.isUnified),
      description: item.description,
      highlights: this.parseJsonArray(item.highlights),
      capital: item.capital,
      location: item.location,
      ethnicGroup: item.ethnicGroup,
      founder: item.founder,
      mapUrl: item.mapUrl,
      mapDescription: item.mapDescription,
    };
  }

  /** 格式化历史事件数据 */
  private formatEvent(item: HistoricalEvent) {
    return {
      id: item.eventId,
      title: item.title,
      period: item.period,
      category: item.category,
      brief: item.brief,
      description: item.description,
      impact: item.impact,
      imageUrl: item.imageUrl,
      tags: this.parseJsonArray(item.tags),
    };
  }

  /** 格式化历史人物数据（含卡片背面内容） */
  private formatFigure(item: HistoricalFigure) {
    return {
      id: item.figureId,
      name: item.name,
      dynasty: item.dynasty,
      category: item.category,
      title: item.title,
      brief: item.brief,
      description: item.description,
      achievements: this.parseJsonArray(item.achievements),
      quotes: item.quotes,
      portraitUrl: item.portraitUrl,
      tags: this.parseJsonArray(item.tags),
      representativeWorks: item.representativeWorks,
      evaluationTags: this.parseJsonArray(item.evaluationTags),
      // 将 back* 字段打包为嵌套对象，前端翻转卡片时使用
      backContent: {
        era: item.backEra,
        contribution: item.backContribution,
        influence: item.backInfluence,
        funFact: item.backFunFact,
        relatedFigures: this.parseJsonArray(item.backRelatedFigures),
      },
    };
  }

  /** 格式化文化遗产数据 */
  private formatHeritage(item: CulturalHeritage) {
    return {
      id: item.heritageId,
      name: item.name,
      location: item.location,
      category: item.category,
      era: item.era,
      year: item.year,
      brief: item.brief,
      description: item.description,
      history: item.history,
      culturalSignificance: item.culturalSignificance,
      features: this.parseJsonArray(item.features),
      relatedFigures: this.parseJsonArray(item.relatedFigures),
      imageUrl: item.imageUrl,
      thumbnailUrl: item.thumbnailUrl,
      images: this.parseJsonArray(item.images),
      relatedItems: this.parseJsonArray(item.relatedItems),
    };
  }
}

/**
 * ============================================================================
 * 旅游指南模块服务 - travel-guide.service.ts
 * ============================================================================
 * 【前端同学必读】
 * 旅游指南模块的业务逻辑层，采用"JSON 大对象透传"模式，与音乐模块类似。
 *
 * 【核心设计：toObject() 方法】
 * 将数据库行的 data JSON 列直接返回给前端，不做字段拆分。
 * 与音乐模块不同的是，旅游指南的 toObject 不合并 id（因为 data 中已包含省份信息）。
 *
 * 【getRegions() 方法】
 * 从省份表中提取所有不重复的 region 值，返回地区名称数组。
 * 前端用此数组渲染地区筛选器（如"全部"/"华北"/"华东"/"西南"等）。
 *
 * 【findProvinces 的 region 筛选】
 * 当 region 为 '全部' 或不传时，不添加筛选条件，返回所有省份。
 * 只有 region 为具体地区名时才添加 WHERE 条件。
 *
 * 【scenery/food 的查询方式】
 * 通过 provinceId（省份ID）直接查询单条记录，
 * 因为风光/美食与省份是一对一关系，一个省份只有一条风光数据和一条美食数据。
 * ============================================================================
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  TravelGuideProvince,
  TravelGuideScenery,
  TravelGuideFood,
} from '../../entities/travel-guide.entity';
import { QueryTravelGuideDto } from './dto/travel-guide.dto';

@Injectable()
export class TravelGuideService {
  constructor(
    // 注入 3 个 Repository
    @InjectRepository(TravelGuideProvince)
    private provinceRepository: Repository<TravelGuideProvince>,
    @InjectRepository(TravelGuideScenery)
    private sceneryRepository: Repository<TravelGuideScenery>,
    @InjectRepository(TravelGuideFood)
    private foodRepository: Repository<TravelGuideFood>,
  ) {}

  /**
   * 将数据库行的 data JSON 直接返回给前端
   * data 列存放完整对象，直接透出给前端即可还原原数据结构
   */
  private toObject<T>(row: { data: Record<string, unknown> }): T {
    return row.data as T;
  }

  /**
   * 省份列表（支持地区/关键词筛选）
   * 前端调用 GET /travel-guide/provinces 时触发
   */
  async findProvinces(query: QueryTravelGuideDto) {
    const { keyword, region, page = 1, limit = 100 } = query;
    const qb = this.provinceRepository.createQueryBuilder('t');

    // 关键词搜索：在省份名称和ID中模糊匹配
    if (keyword) {
      qb.andWhere('(t.name LIKE :kw OR t.id LIKE :kw)', { kw: `%${keyword}%` });
    }

    // 地区筛选：'全部'或不传时不筛选
    if (region && region !== '全部') {
      qb.andWhere('t.region = :region', { region });
    }

    qb.orderBy('t.id', 'ASC');
    const [rows, total] = await qb
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();
    return {
      items: rows.map((r) => this.toObject(r)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * 获取单个省份详情
   * 前端调用 GET /travel-guide/provinces/:id 时触发
   */
  async findProvinceById(id: string) {
    const row = await this.provinceRepository.findOne({ where: { id } });
    if (!row) {
      throw new NotFoundException(`省份 ${id} 不存在`);
    }
    return this.toObject(row);
  }

  /**
   * 获取全部地区列表
   * 前端调用 GET /travel-guide/regions 时触发
   * 返回格式：['全部', '华北', '华东', '西南', ...]
   */
  async getRegions() {
    const rows = await this.provinceRepository
      .createQueryBuilder('p')
      .select('DISTINCT p.region', 'region')
      .where('p.region IS NOT NULL')
      .getRawMany();
    const regions = rows.map((r) => r.region).filter(Boolean);
    return ['全部', ...Array.from(new Set(regions))];
  }

  /**
   * 省份风光数据（含概览/景点/季节/活动/路线/风俗/非遗）
   * 前端调用 GET /travel-guide/scenery/:provinceId 时触发
   */
  async getScenery(provinceId: string) {
    const row = await this.sceneryRepository.findOne({
      where: { provinceId },
    });
    if (!row) {
      throw new NotFoundException(`省份 ${provinceId} 的风光数据不存在`);
    }
    return this.toObject(row);
  }

  /**
   * 省份美食数据（含 items + locations）
   * 前端调用 GET /travel-guide/food/:provinceId 时触发
   */
  async getFood(provinceId: string) {
    const row = await this.foodRepository.findOne({
      where: { provinceId },
    });
    if (!row) {
      throw new NotFoundException(`省份 ${provinceId} 的美食数据不存在`);
    }
    return this.toObject(row);
  }
}

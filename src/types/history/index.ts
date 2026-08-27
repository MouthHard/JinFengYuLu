/**
 * ============================================================================
 * 历史模块 - 数据类型定义 - history/index.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了历史模块所有后端 API 响应的数据类型。
 * 每个接口对应后端数据库中的一张表，字段名与后端返回的 JSON 键名一一对应。
 *
 * 【类型与 API 的对应关系】
 * - Dynasty              ← GET /api/history/dynasties 响应中的 items 元素
 * - HistoricalEvent      ← GET /api/history/events 响应中的 items 元素
 * - HistoricalFigure     ← GET /api/history/figures 响应中的 items 元素
 * - CulturalHeritageItem ← GET /api/history/heritage 响应中的 items 元素
 *
 * 【数据关系】
 * - 事件和人物通过 dynasty 字段关联到朝代
 * - 遗产通过 era 字段关联到时代
 * - 人物的 backContent.relatedFigures 关联到其他人物
 *
 * 【数据库表对应】
 * - Dynasty              → dynasties 表
 * - HistoricalEvent      → historical_events 表
 * - HistoricalFigure     → historical_figures 表
 * - CulturalHeritageItem → cultural_heritage 表
 *
 * ============================================================================
 */

/**
 * 历史人物背景内容 — 嵌套在 HistoricalFigure.backContent 中的子类型
 *
 * 【字段来源】后端 historical_figure_details 表
 * - era: 所处时代背景（来自后端）
 * - contribution: 主要贡献（来自后端）
 * - influence: 历史影响（来自后端）
 * - funFact: 趣闻轶事（来自后端）
 * - relatedFigures: 相关历史人物名称列表（来自后端，用于"相关人物"推荐）
 */
export interface BackContent {
  era: string;
  contribution: string;
  influence: string;
  funFact: string;
  relatedFigures: string[];
}

/**
 * 历史人物 — 对应后端 GET /api/history/figures 返回的单条数据
 *
 * 【数据库表】historical_figures
 *
 * @property id          - 人物唯一标识（来自后端）
 * @property name        - 人物姓名（来自后端，如 "李白"）
 * @property dynasty     - 所在朝代（来自后端，如 "唐"，关联 dynasties 表）
 * @property category    - 人物分类（来自后端，如 "文学"、"政治"、"军事"）
 * @property title       - 人物头衔/标签（来自后端，如 "诗仙"）
 * @property brief       - 简短介绍（来自后端，列表页展示用）
 * @property description - 详细介绍（来自后端，详情页展示用）
 * @property achievements - 主要成就列表（来自后端）
 * @property quotes      - 名言/名句（来自后端）
 * @property portraitUrl - 人物画像 URL（来自后端）
 * @property tags        - 标签列表（来自后端）
 * @property backContent - 背景内容（可选，来自后端，嵌套 BackContent）
 */
export interface HistoricalFigure {
  id: string;
  name: string;
  dynasty: string;
  category: string;
  title: string;
  brief: string;
  description: string;
  achievements: string[];
  quotes: string;
  portraitUrl: string;
  tags: string[];
  representativeWorks?: string;
  evaluationTags?: string[];
  backContent?: BackContent;
}

/**
 * 朝代 — 对应后端 GET /api/history/dynasties 返回的单条数据
 *
 * 【数据库表】dynasties
 *
 * @property id            - 朝代唯一标识（来自后端，如 "tang"、"song"）
 * @property name          - 朝代名称（来自后端，如 "唐"、"宋"）
 * @property period        - 时期描述（来自后端，如 "618-907年"）
 * @property era           - 大时代划分（来自后端，如 "古代"、"近现代"）
 * @property periodTag     - 时代标签（来自后端，如 "隋唐"，比 era 更细分）
 * @property isUnified     - 是否大一统朝代（可选，来自后端）
 * @property description   - 朝代简介（可选，来自后端）
 * @property highlights    - 朝代亮点列表（可选，来自后端）
 * @property mapUrl        - 疆域地图 URL（可选，来自后端）
 * @property mapDescription - 地图说明（可选，来自后端）
 * @property capital       - 都城（可选，来自后端，如 "长安"）
 * @property location      - 地理位置描述（可选，来自后端）
 * @property ethnicGroup   - 民族（可选，来自后端，如 "汉族"、"蒙古族"）
 * @property founder       - 开国君主（可选，来自后端）
 * @property startYear     - 开始年份（可选，来自后端）
 * @property endYear       - 结束年份（可选，来自后端）
 */
export interface Dynasty {
  id: string;
  name: string;
  period: string;
  era: string;
  periodTag: string;
  isUnified?: boolean;
  description?: string;
  highlights?: string[];
  mapUrl?: string;
  mapDescription?: string;
  capital?: string;
  location?: string;
  ethnicGroup?: string;
  founder?: string;
  startYear?: number;
  endYear?: number;
}

/**
 * 历史事件 — 对应后端 GET /api/history/events 返回的单条数据
 *
 * 【数据库表】historical_events
 *
 * @property id          - 事件唯一标识（来自后端）
 * @property title       - 事件标题（来自后端，如 "安史之乱"）
 * @property period      - 发生时期（来自后端，如 "唐朝"）
 * @property category    - 事件分类（来自后端，如 "政治"、"军事"）
 * @property brief       - 简短描述（来自后端，列表页展示用）
 * @property description - 详细描述（来自后端，详情页展示用）
 * @property impact      - 历史影响（来自后端）
 * @property imageUrl    - 配图 URL（可选，来自后端）
 * @property tags        - 标签列表（可选，来自后端）
 */
export interface HistoricalEvent {
  id: string;
  title: string;
  period: string;
  category: string;
  brief: string;
  description: string;
  impact: string;
  imageUrl?: string;
  tags?: string[];
}

/**
 * 文化遗产 — 对应后端 GET /api/history/heritage 返回的单条数据
 *
 * 【数据库表】cultural_heritage
 *
 * @property id                  - 遗产唯一标识（来自后端）
 * @property name                - 遗产名称（来自后端，如 "长城"）
 * @property location            - 所在地（来自后端，如 "北京"）
 * @property category            - 遗产分类（来自后端，如 "建筑"、"自然"）
 * @property era                 - 所属时代（来自后端，如 "古代"）
 * @property year                - 年代描述（来自后端，如 "公元前7世纪"）
 * @property brief               - 简短介绍（来自后端）
 * @property description         - 详细介绍（来自后端）
 * @property history             - 历史沿革（来自后端）
 * @property culturalSignificance - 文化意义（来自后端）
 * @property features            - 特色列表（来自后端）
 * @property relatedFigures      - 相关历史人物列表（来自后端）
 * @property imageUrl            - 主图 URL（来自后端）
 * @property thumbnailUrl        - 缩略图 URL（来自后端）
 * @property images              - 图片列表（来自后端，多图展示）
 * @property relatedItems        - 相关遗产列表（来自后端，用于"相关推荐"）
 */
export interface CulturalHeritageItem {
  id: string;
  name: string;
  location: string;
  category: string;
  era: string;
  year: string;
  brief: string;
  description: string;
  history: string;
  culturalSignificance: string;
  features: string[];
  relatedFigures: string[];
  imageUrl: string;
  thumbnailUrl: string;
  images: string[];
  relatedItems: string[];
}

/**
 * 分类选项 — 前端筛选组件使用的分类数据
 *
 * 【注意】此类型不直接来自后端 API，由前端根据后端数据构建
 * - label: 分类显示名称（如 "政治"、"文化"）
 * - value: 分类值（如 "politics"、"culture"）
 */
export interface Category {
  label: string;
  value: string;
}

/**
 * 筛选选项 — 前端筛选面板的状态
 *
 * 【注意】此类型不来自后端，由前端筛选组件内部管理
 * - category: 当前选中的分类
 * - dynasty: 当前选中的朝代
 * - searchQuery: 当前搜索关键词
 */
export interface FilterOptions {
  category?: string;
  dynasty?: string;
  searchQuery?: string;
}

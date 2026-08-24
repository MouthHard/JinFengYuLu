/**
 * ============================================================================
 * 博物馆模块 - 数据类型定义 - museum/index.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了博物馆模块所有后端 API 响应的数据类型。
 * 每个接口对应后端数据库中的一张表，字段名与后端返回的 JSON 键名一一对应。
 *
 * 【类型与 API 的对应关系】
 * - Museum               ← GET /api/museum 响应中的 items 元素
 * - MuseumDetailInfo      ← GET /api/museum/:museumId/detail 响应
 * - Artifact             ← GET /api/museum/artifacts 响应中的 items 元素
 * - ArtifactDetail       ← GET /api/museum/artifact-details/:id 响应
 * - Exhibition           ← GET /api/museum/exhibitions 响应中的 items 元素
 * - Activity             ← GET /api/museum/activities 响应中的 items 元素
 * - News                 ← GET /api/museum/news 响应中的 items 元素
 * - ImmersiveExperience  ← GET /api/museum/immersive 响应中的 items 元素
 * - CreativeProduct      ← GET /api/museum/creative-products 响应中的 items 元素
 * - AcademicResource     ← GET /api/museum/academic-resources 响应中的 items 元素
 * - ExhibitionHall       ← GET /api/museum/exhibition-halls 响应中的 items 元素
 *
 * 【数据关系】
 * Museum 是主资源，其他类型通过 museumId 字段关联到博物馆。
 * ProvinceData 是按省份聚合的复合数据结构，包含一个省内所有博物馆相关数据。
 *
 * ============================================================================
 */

/**
 * 博物馆基本信息 — 对应后端 GET /api/museum 返回的单条数据
 *
 * 【数据库表】museums
 *
 * @property id          - 博物馆唯一标识（来自后端）
 * @property name        - 博物馆名称（来自后端，如 "故宫博物院"）
 * @property province    - 所在省份（来自后端，如 "北京"）
 * @property type        - 博物馆类型（来自后端，如 "综合类"、"遗址类"）
 * @property image       - 封面图 URL（来自后端）
 * @property description - 简介（来自后端）
 * @property artifacts   - 馆藏文物数量（来自后端统计）
 * @property exhibitions - 展览数量（来自后端统计）
 * @property visitors    - 参观人数（来自后端统计）
 * @property features    - 特色标签列表（来自后端，如 ["国宝级文物", "免费参观"]）
 */
export interface Museum {
  id: number;
  name: string;
  province: string;
  type: string;
  image: string;
  description: string;
  artifacts: number;
  exhibitions: number;
  visitors: number;
  features: string[];
}

/**
 * 文物基本信息 — 对应后端 GET /api/museum/artifacts 返回的单条数据
 *
 * 【数据库表】artifacts
 *
 * @property id           - 文物唯一标识（来自后端）
 * @property museumId     - 所属博物馆 ID（来自后端，关联 museums 表）
 * @property name         - 文物名称（来自后端，如 "后母戊鼎"）
 * @property period       - 所属时期（来自后端，如 "商代"）
 * @property image        - 文物图片 URL（来自后端）
 * @property description  - 文物描述（可选，来自后端）
 * @property category     - 文物分类（可选，来自后端，如 "青铜器"）
 * @property basicInfo    - 基础信息对象（可选，来自后端）
 *   - periodDetail: 时期详情（如 "商代晚期"）
 *   - material: 材质（如 "青铜"）
 *   - dimensions: 尺寸（如 "高133cm"）
 *   - collection: 收藏地（如 "中国国家博物馆"）
 *   - excavation: 出土地点（如 "河南安阳"）
 * @property appearance       - 外观描述（可选，来自后端）
 * @property historicalValue  - 历史价值（可选，来自后端）
 */
export interface Artifact {
  id: number;
  museumId: number;
  name: string;
  period: string;
  image: string;
  description?: string;
  category?: string;
  basicInfo?: {
    periodDetail?: string;
    material?: string;
    dimensions?: string;
    collection?: string;
    excavation?: string;
  };
  appearance?: string;
  historicalValue?: string;
}

/**
 * 展览 — 对应后端 GET /api/museum/exhibitions 返回的单条数据
 *
 * 【数据库表】exhibitions
 *
 * @property id          - 展览唯一标识（来自后端）
 * @property museumId    - 所属博物馆 ID（来自后端）
 * @property title       - 展览标题（来自后端）
 * @property description - 展览描述（来自后端）
 * @property date        - 展览日期（来自后端）
 * @property image       - 展览图片 URL（来自后端）
 * @property location    - 展览地点（可选，来自后端）
 * @property category    - 展览分类（可选，来自后端）
 * @property status      - 展览状态码（可选，来自后端）
 * @property statusText  - 展览状态文本（可选，来自后端，如 "进行中"、"已结束"）
 * @property tags        - 标签列表（可选，来自后端）
 * @property curator     - 策展人（可选，来自后端）
 * @property scale       - 展览规模（可选，来自后端）
 * @property visitors    - 参观人数（可选，来自后端统计）
 * @property background  - 展览背景（可选，来自后端）
 */
export interface Exhibition {
  id: number;
  museumId: number;
  title: string;
  description: string;
  date: string;
  image: string;
  location?: string;
  category?: string;
  status?: string;
  statusText?: string;
  tags?: string[];
  curator?: string;
  scale?: string;
  visitors?: number;
  background?: string;
}

/**
 * 活动 — 对应后端 GET /api/museum/activities 返回的单条数据
 *
 * 【数据库表】activities
 *
 * @property id          - 活动唯一标识（来自后端）
 * @property museumId    - 所属博物馆 ID（来自后端）
 * @property title       - 活动标题（来自后端）
 * @property description - 活动描述（来自后端）
 * @property date        - 活动日期（来自后端）
 * @property time        - 活动时间（可选，来自后端，如 "14:00-16:00"）
 * @property location    - 活动地点（可选，来自后端）
 * @property image       - 活动图片 URL（来自后端）
 */
export interface Activity {
  id: number;
  museumId: number;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  image: string;
}

/**
 * 新闻 — 对应后端 GET /api/museum/news 返回的单条数据
 *
 * 【数据库表】news
 *
 * @property id          - 新闻唯一标识（来自后端）
 * @property museumId    - 所属博物馆 ID（来自后端）
 * @property title       - 新闻标题（来自后端）
 * @property description - 新闻摘要（来自后端）
 * @property date        - 新闻日期（来自后端）
 * @property image       - 新闻图片 URL（来自后端）
 */
export interface News {
  id: number;
  museumId: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

/**
 * 沉浸式体验 — 对应后端 GET /api/museum/immersive 返回的单条数据
 *
 * 【数据库表】immersive_experiences
 *
 * @property id          - 体验唯一标识（来自后端）
 * @property museumId    - 所属博物馆 ID（来自后端）
 * @property title       - 体验标题（来自后端）
 * @property description - 体验描述（来自后端）
 * @property image       - 体验图片 URL（来自后端）
 */
export interface ImmersiveExperience {
  id: number;
  museumId: number;
  title: string;
  description: string;
  image: string;
}

/**
 * 文创产品 — 对应后端 GET /api/museum/creative-products 返回的单条数据
 *
 * 【数据库表】creative_products
 *
 * @property id          - 产品唯一标识（来自后端）
 * @property museumId    - 所属博物馆 ID（来自后端）
 * @property name        - 产品名称（来自后端）
 * @property description - 产品描述（来自后端）
 * @property price       - 价格（来自后端，单位：元）
 * @property image       - 产品图片 URL（来自后端）
 * @property category    - 产品分类（可选，来自后端，如 "文具"、"饰品"）
 */
export interface CreativeProduct {
  id: number;
  museumId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

/**
 * 学术资源 — 对应后端 GET /api/museum/academic-resources 返回的单条数据
 *
 * 【数据库表】academic_resources
 *
 * @property id          - 资源唯一标识（来自后端）
 * @property museumId    - 所属博物馆 ID（来自后端）
 * @property title       - 资源标题（来自后端）
 * @property author      - 作者（可选，来自后端）
 * @property date        - 发布日期（来自后端）
 * @property type        - 资源类型（来自后端："article" 文章 | "book" 书籍 | "video" 视频）
 * @property description - 资源描述（来自后端）
 * @property link        - 外部链接（可选，来自后端，点击跳转到原文）
 */
export interface AcademicResource {
  id: number;
  museumId: number;
  title: string;
  author?: string;
  date: string;
  type: "article" | "book" | "video";
  description: string;
  link?: string;
}

/**
 * 文物详细信息 — 对应后端 GET /api/museum/artifact-details/:id 返回的数据
 *
 * 【数据库表】artifact_details
 * 【与 Artifact 的区别】Artifact 是列表展示的基本信息，ArtifactDetail 是详情页的完整信息
 *
 * @property id                   - 文物唯一标识（来自后端）
 * @property name                 - 文物名称（来自后端）
 * @property period               - 所属时期（来自后端）
 * @property description          - 文物描述（来自后端）
 * @property image                - 文物图片 URL（来自后端）
 * @property type                 - 文物类型（可选，来自后端）
 * @property basicInfo            - 基础信息对象（可选，来自后端，同 Artifact.basicInfo）
 * @property appearance           - 外观描述（可选，来自后端）
 * @property historicalValue      - 历史价值（可选，来自后端）
 * @property artifactLevel        - 文物等级（可选，来自后端，如 "一级文物"、"国宝级"）
 * @property relatedStory         - 相关故事（可选，来自后端）
 * @property protectionStatus     - 保护现状（可选，来自后端）
 * @property culturalSignificance - 文化意义（可选，来自后端）
 */
export interface ArtifactDetail {
  id: number;
  name: string;
  period: string;
  description: string;
  image: string;
  type?: string;
  basicInfo?: {
    periodDetail?: string;
    material?: string;
    dimensions?: string;
    collection?: string;
    excavation?: string;
  };
  appearance?: string;
  historicalValue?: string;
  artifactLevel?: string;
  relatedStory?: string;
  protectionStatus?: string;
  culturalSignificance?: string;
}

/**
 * 展览分类 — 用于展览分类筛选
 *
 * 【数据库表】exhibition_categories
 *
 * @property id    - 分类唯一标识（来自后端）
 * @property name  - 分类名称（来自后端，如 "常设展"、"临时展"）
 * @property count - 该分类下的展览数量（来自后端统计）
 * @property icon  - 分类图标（来自后端）
 */
export interface ExhibitionCategory {
  id: number;
  name: string;
  count: number;
  icon: string;
}

/**
 * 专馆（展厅）— 对应后端 GET /api/museum/exhibition-halls 返回的单条数据
 *
 * 【数据库表】exhibition_halls
 * 【与 Exhibition 的区别】
 *   - Exhibition 是临时展览，有开始/结束日期
 *   - ExhibitionHall 是常设展厅，有固定位置和开放时间
 *
 * @property id           - 专馆唯一标识（来自后端）
 * @property museumId     - 所属博物馆 ID（可选，来自后端）
 * @property name         - 专馆名称（来自后端，如 "青铜器馆"）
 * @property icon         - 专馆图标（来自后端）
 * @property category     - 专馆分类（来自后端）
 * @property coverImage   - 封面图 URL（来自后端）
 * @property introduction - 专馆介绍（来自后端）
 * @property stats        - 统计数据（来自后端）
 *   - artifacts: 馆藏文物数
 *   - exhibitions: 展览数
 *   - visitors: 参观人数
 * @property location     - 位置描述（来自后端）
 * @property openTime     - 开放时间（来自后端）
 * @property duration     - 参观时长建议（来自后端）
 * @property ticket       - 门票信息（来自后端）
 * @property artifacts    - 馆藏文物列表（来自后端，嵌套结构）
 * @property exhibitions  - 展览列表（来自后端，嵌套结构）
 * @property recommendations - 推荐内容列表（来自后端，嵌套结构）
 */
export interface ExhibitionHall {
  id: string;
  museumId?: number;
  name: string;
  icon: string;
  category: string;
  coverImage: string;
  introduction: string;
  stats: {
    artifacts: number;
    exhibitions: number;
    visitors: number;
  };
  location: string;
  openTime: string;
  duration: string;
  ticket: string;
  artifacts: Array<{
    name: string;
    period: string;
    description: string;
    image: string;
  }>;
  exhibitions: Array<{
    title: string;
    date: string;
    description: string;
    status: string;
    statusText: string;
    image: string;
    tags: string[];
  }>;
  recommendations: Array<{
    icon: string;
    title: string;
    desc: string;
    type: string;
  }>;
}

/**
 * 开放时间信息 — 嵌套在 MuseumVisitInfo 中
 *
 * 【字段来源】后端 museum_visit_info 表
 * - regularTime: 常规开放时间（如 "9:00-17:00"）
 * - stopEntryTime: 停止入馆时间（如 "16:00"）
 * - closeDay: 闭馆日（如 "周一"）
 * - holidayNotice: 节假日公告（可选，如 "春节期间正常开放"）
 */
export interface OpenTimeInfo {
  regularTime: string;
  stopEntryTime: string;
  closeDay: string;
  holidayNotice?: string;
}

/**
 * 票务信息 — 嵌套在 MuseumVisitInfo 中
 *
 * 【字段来源】后端 museum_visit_info 表
 * - price: 门票价格描述（如 "免费"、"60元"）
 * - isFree: 是否免费
 * - needReservation: 是否需要预约
 * - idRequired: 证件要求（可选，如 "需携带身份证"）
 * - discountPolicy: 优惠政策列表（可选，如 ["学生半价", "65岁以上免费"]）
 */
export interface TicketInfo {
  price: string;
  isFree: boolean;
  needReservation: boolean;
  idRequired?: string;
  discountPolicy?: string[];
}

/**
 * 参观须知 — 嵌套在 MuseumVisitInfo 中
 *
 * 【字段来源】后端 museum_visit_info 表
 * - allowed: 允许的行为列表（如 ["拍照", "携带饮水"]）
 * - forbidden: 禁止的行为列表（如 ["闪光灯", "触摸展品"]）
 */
export interface VisitRules {
  allowed: string[];
  forbidden: string[];
}

/**
 * 交通信息 — 嵌套在 MuseumVisitInfo 中
 *
 * 【字段来源】后端 museum_visit_info 表
 * - address: 详细地址
 * - metro: 地铁信息（可选，如 "1号线天安门东站"）
 * - bus: 公交信息（可选）
 * - parking: 停车信息（可选）
 */
export interface TransportationInfo {
  address: string;
  metro?: string;
  bus?: string;
  parking?: string;
}

/**
 * 服务设施 — 嵌套在 MuseumVisitInfo 中
 *
 * 【字段来源】后端 museum_visit_info 表
 * - hasGuide: 是否提供讲解服务
 * - hasStorage: 是否提供物品寄存
 * - hasRestaurant: 是否有餐饮服务
 * - hasAccessibility: 是否有无障碍设施
 * - hasRestArea: 是否有休息区
 * - hasWiFi: 是否有免费 WiFi
 * - otherServices: 其他服务列表（可选）
 */
export interface ServiceFacilities {
  hasGuide: boolean;
  hasStorage: boolean;
  hasRestaurant: boolean;
  hasAccessibility: boolean;
  hasRestArea: boolean;
  hasWiFi: boolean;
  otherServices?: string[];
}

/**
 * 联系方式 — 嵌套在 MuseumVisitInfo 中
 *
 * 【字段来源】后端 museum_visit_info 表
 * - phone: 咨询电话
 * - email: 电子邮箱（可选）
 * - complaintPhone: 投诉建议电话（可选）
 * - website: 官方网站（可选）
 */
export interface ContactInfo {
  phone: string;
  email?: string;
  complaintPhone?: string;
  website?: string;
}

/**
 * 参观信息 — 嵌套在 MuseumDetailInfo 中，包含完整的参观指南
 *
 * 【字段来源】后端 museum_visit_info 表
 * - openTime: 开放时间（可能是 OpenTimeInfo 对象或字符串）
 * - ticket: 票务信息（可能是 TicketInfo 对象或字符串）
 * - rules: 参观须知（可选）
 * - transportation: 交通指南（可选）
 * - services: 服务设施（可选）
 * - contact: 联系方式（可选）
 */
export interface MuseumVisitInfo {
  openTime: OpenTimeInfo | string;
  ticket: TicketInfo | string;
  rules?: VisitRules;
  transportation?: TransportationInfo;
  services?: ServiceFacilities;
  contact?: ContactInfo;
}

/**
 * 博物馆详情 — 对应后端 GET /api/museum/:museumId/detail 返回的数据
 *
 * 【数据库表】museum_details
 * 【与 Museum 的区别】Museum 是列表展示的基本信息，MuseumDetailInfo 是详情页的完整信息
 *
 * @property museumId     - 博物馆 ID（来自后端，关联 museums 表）
 * @property visitInfo    - 参观信息（来自后端，嵌套 MuseumVisitInfo）
 * @property history      - 历史沿革（来自后端）
 * @property architecture - 建筑特色（来自后端）
 * @property highlights   - 重要馆藏（来自后端）
 * @property education    - 教育活动（来自后端）
 */
export interface MuseumDetailInfo {
  museumId: number;
  visitInfo: MuseumVisitInfo;
  history: string;
  architecture: string;
  highlights: string;
  education: string;
}

/**
 * 省份数据 — 按省份聚合的博物馆复合数据结构
 *
 * 【注意】此类型不是直接对应某个后端 API，而是前端将多个 API 的数据
 * 按省份聚合后的结构，用于省份详情页的数据管理。
 *
 * @property code                   - 省份代码（如 "BJ"）
 * @property name                   - 省份名称（如 "北京"）
 * @property museums                - 该省的博物馆列表
 * @property details                - 博物馆详情映射（可选，key 为博物馆 ID）
 * @property artifacts              - 该省的文物列表（可选）
 * @property activities             - 该省的活动列表（可选）
 * @property creativeProducts       - 该省的文创产品列表（可选）
 * @property exhibitions            - 该省的展览列表（可选）
 * @property news                   - 该省的新闻列表（可选）
 * @property academicResources      - 该省的学术资源列表（可选）
 * @property immersiveExperiences   - 该省的沉浸式体验列表（可选）
 * @property exhibitionHalls        - 该省的专馆映射（可选，key 为博物馆 ID）
 */
export interface ProvinceData {
  code: string;
  name: string;
  museums: Museum[];
  details?: Record<number, MuseumDetailInfo>;
  artifacts?: Artifact[];
  activities?: Activity[];
  creativeProducts?: CreativeProduct[];
  exhibitions?: Exhibition[];
  news?: News[];
  academicResources?: AcademicResource[];
  immersiveExperiences?: ImmersiveExperience[];
  exhibitionHalls?: Record<number, ExhibitionHall[]>;
}

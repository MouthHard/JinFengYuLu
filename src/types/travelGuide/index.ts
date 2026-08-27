/**
 * ============================================================================
 * 旅游指南模块 - 数据类型定义 - travelGuide/index.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了旅游指南模块所有后端 API 响应的数据类型。
 * 每个接口对应后端数据库中的一张表，字段名与后端返回的 JSON 键名一一对应。
 *
 * 【类型与 API 的对应关系】
 * - Province     ← GET /api/travel-guide/provinces 响应中的 items 元素
 * - SceneryData  ← GET /api/travel-guide/scenery/:provinceId 响应（services 层扩展为 ProvinceScenery）
 * - ProvinceFood ← GET /api/travel-guide/food/:provinceId 响应（包含 FoodItem + FoodLocation）
 *
 * 【数据关系】
 * - Province 是主资源，SceneryData 和 Food 是省份的子资源
 * - FoodItem 和 FoodLocation 是 ProvinceFood 的组成部分
 * - ScenerySpot 是 SceneryData 的子元素
 *
 * 【数据库表对应】
 * - Province     → provinces 表
 * - ScenerySpot  → scenery_spots 表
 * - FoodItem     → food_items 表
 * - FoodLocation → food_locations 表
 *
 * ============================================================================
 */

/**
 * 省份 — 对应后端 GET /api/travel-guide/provinces 返回的单条数据
 *
 * 【数据库表】provinces
 *
 * @property id          - 省份唯一标识（来自后端，如 "beijing"、"sichuan"）
 * @property name        - 省份名称（来自后端，如 "北京"、"四川"）
 * @property abbreviation - 省份简称（来自后端，如 "京"、"川"）
 * @property region      - 所属地区（来自后端，如 "华北"、"西南"）
 * @property capital     - 省会城市（来自后端，如 "成都"）
 * @property description - 省份简介（来自后端）
 * @property tags        - 标签列表（可选，来自后端）
 */
export interface Province {
  id: string;
  name: string;
  abbreviation: string;
  region: string;
  capital: string;
  description: string;
  tags?: string[];
}

/**
 * 标签页 — 前端 Tab 切换组件的数据类型
 *
 * 【注意】此类型不来自后端，由前端组件内部定义
 * - id: 标签页标识
 * - name: 标签页显示名称
 * - icon: 标签页图标（any 类型，兼容各种图标库）
 */
export interface Tab {
  id: string;
  name: string;
  icon: any;
}

/**
 * 美食条目 — 对应后端美食列表中的单条数据
 *
 * 【数据库表】food_items
 *
 * @property id            - 美食唯一标识（来自后端）
 * @property name          - 美食名称（来自后端，如 "北京烤鸭"）
 * @property description   - 美食描述（可选，来自后端）
 * @property image         - 美食图片 URL（来自后端）
 * @property isPopular     - 是否热门（可选，来自后端标记）
 * @property price         - 价格（来自后端，可能是字符串如 "人均80元" 或数字）
 * @property rating        - 评分（来自后端，0-5）
 * @property category      - 分类（来自后端，如 "小吃"、"正餐"）
 * @property badgeText     - 角标文字（可选，来自后端，如 "必吃"）
 * @property badgeColor    - 角标颜色（可选，来自后端）
 * @property tags          - 标签列表（可选，来自后端）
 * @property province      - 所属省份（可选，来自后端）
 * @property taste         - 口味（可选，来自后端，如 "麻辣"、"清淡"）
 * @property ingredients   - 主要食材列表（可选，来自后端）
 * @property cookingMethod - 烹饪方法（可选，来自后端）
 * @property nameEn        - 英文名称（可选，来自后端）
 * @property history       - 历史渊源（可选，来自后端）
 * @property bestRestaurant - 推荐餐厅（可选，来自后端）
 * @property recommendations - 推荐信息（可选，来自后端）
 *   - pairings: 搭配推荐（如 "配酸梅汤"）
 *   - eatingMethod: 食用方式（如 "趁热食用"）
 */
export interface FoodItem {
  id: string;
  name: string;
  description?: string;
  image: string;
  isPopular?: boolean;
  price: string | number;
  rating: number;
  category: string;
  badgeText?: string;
  badgeColor?: string;
  tags?: string[];
  province?: string;
  taste?: string;
  ingredients?: string[];
  cookingMethod?: string;
  nameEn?: string;
  history?: string;
  bestRestaurant?: string;
  recommendations?: {
    pairings?: string[];
    eatingMethod?: string;
  };
}

/**
 * 美食地点 — 对应后端美食地点列表中的单条数据
 *
 * 【数据库表】food_locations
 *
 * @property id             - 地点唯一标识（来自后端，可能是数字或字符串）
 * @property name           - 地点名称（来自后端，如 "簋街"）
 * @property location       - 位置描述（来自后端）
 * @property type           - 地点类型（来自后端，如 "美食街"、"夜市"）
 * @property icon           - 地点图标（来自后端）
 * @property image          - 地点图片 URL（来自后端）
 * @property foods          - 该地点的美食名称列表（来自后端）
 * @property reason         - 推荐理由（来自后端）
 * @property rank           - 排名（可选，来自后端）
 * @property rating         - 评分（可选，来自后端）
 * @property address        - 详细地址（可选，来自后端）
 * @property openingHours   - 营业时间（可选，来自后端）
 * @property specialties    - 特色美食列表（可选，来自后端）
 * @property bestTimeToVisit - 最佳到访时间（可选，来自后端）
 * @property provinceId     - 所属省份 ID（可选，来自后端）
 * @property provinceName   - 所属省份名称（可选，来自后端）
 */
export interface FoodLocation {
  id: number | string;
  name: string;
  location: string;
  type: string;
  icon: string;
  image: string;
  foods: string[];
  reason: string;
  rank?: number;
  rating?: number;
  address?: string;
  openingHours?: string;
  specialties?: string[];
  bestTimeToVisit?: string;
  provinceId?: string;
  provinceName?: string;
}

/**
 * 美食 — 通用美食数据类型（与 FoodItem 类似但字段略有不同）
 *
 * 【注意】此类型可能用于前端内部状态管理，部分字段与 FoodItem 重复
 * @property id            - 美食唯一标识
 * @property name          - 美食名称
 * @property rating        - 评分
 * @property isPopular     - 是否热门（可选）
 * @property tags          - 标签列表（可选）
 * @property openingHours  - 营业时间（可选）
 * @property address       - 地址（可选）
 * @property description   - 描述（可选）
 * @property images        - 图片列表（可选，多图展示）
 * @property category      - 分类（可选）
 * @property price         - 价格（可选）
 * @property badgeText     - 角标文字（可选）
 * @property badgeColor    - 角标颜色（可选）
 * @property image         - 图片 URL（可选）
 * @property recommendations - 推荐信息（可选）
 */
export interface Food {
  id: string;
  name: string;
  rating: number;
  isPopular?: boolean;
  tags?: string[];
  openingHours?: string;
  address?: string;
  description?: string;
  images?: string[];
  category?: string;
  price?: string | number;
  badgeText?: string;
  badgeColor?: string;
  image?: string;
  recommendations?: {
    pairings?: string[];
    eatingMethod?: string;
  };
}

/**
 * 美食街道 — 美食地点的扩展类型
 *
 * 【数据库表】food_locations（type = "street"）
 * 【与 FoodLocation 的区别】FoodStreet 包含更多城市和标签信息
 *
 * @property id             - 街道唯一标识
 * @property name           - 街道名称
 * @property description    - 街道描述（可选）
 * @property image          - 街道图片 URL
 * @property location       - 位置描述
 * @property province       - 所属省份名称（可选）
 * @property provinceId     - 所属省份 ID（可选）
 * @property provinceName   - 所属省份名称（可选）
 * @property city           - 所属城市（可选）
 * @property foods          - 美食列表（可选）
 * @property rating         - 评分（可选）
 * @property tags           - 标签列表（可选）
 * @property type           - 类型（可选）
 * @property icon           - 图标（可选）
 * @property reason         - 推荐理由（可选）
 * @property rank           - 排名（可选）
 * @property address        - 详细地址（可选）
 * @property openingHours   - 营业时间（可选）
 * @property specialties    - 特色美食（可选）
 * @property bestTimeToVisit - 最佳到访时间（可选）
 */
export interface FoodStreet {
  id: string;
  name: string;
  description?: string;
  image: string;
  location: string;
  province?: string;
  provinceId?: string;
  provinceName?: string;
  city?: string;
  foods?: string[];
  rating?: number;
  tags?: string[];
  type?: string;
  icon?: string;
  reason?: string;
  rank?: number;
  address?: string;
  openingHours?: string;
  specialties?: string[];
  bestTimeToVisit?: string;
}

/**
 * 美食分类 — 用于美食分类筛选
 *
 * @property id    - 分类唯一标识（来自后端）
 * @property name  - 分类名称（来自后端，如 "小吃"、"正餐"）
 * @property icon  - 分类图标（来自后端）
 * @property count - 该分类下的美食数量（来自后端统计）
 */
export interface FoodCategory {
  id: number;
  name: string;
  icon: string;
  count: number;
}

/**
 * 风光景点 — 嵌套在 SceneryData.spots 中的子类型
 *
 * 【数据库表】scenery_spots
 *
 * @property id               - 景点唯一标识（来自后端）
 * @property name             - 景点名称（来自后端）
 * @property description      - 景点描述（来自后端）
 * @property image            - 景点图片 URL（来自后端）
 * @property location         - 景点位置（来自后端）
 * @property type             - 景点类型（来自后端，"nature" 自然 | "culture" 人文）
 * @property bestTime         - 最佳游览时间（来自后端）
 * @property tags             - 标签列表（来自后端）
 * @property rating           - 评分（可选，来自后端）
 * @property landscapeType    - 景观类型（可选，来自后端）
 * @property landscapeCategory - 景观分类列表（可选，来自后端）
 * @property landformTags     - 地貌标签列表（可选，来自后端）
 * @property cultureType      - 文化类型（可选，来自后端）
 */
export interface ScenerySpot {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  type: "nature" | "culture";
  bestTime: string;
  tags: string[];
  rating?: number;
  landscapeType?: string;
  landscapeCategory?: string[];
  landformTags?: string[];
  cultureType?: string;
}

/**
 * 风光概览 — 嵌套在 SceneryData.overview 中的子类型
 *
 * 【字段来源】后端根据 scenery_spots 表统计生成
 * - totalSpots: 景点总数
 * - natureSpots: 自然景点数
 * - cultureSpots: 人文景点数
 * - topAttractions: 热门景点列表（含名称、图片、描述）
 */
export interface SceneryOverview {
  totalSpots: number;
  natureSpots: number;
  cultureSpots: number;
  topAttractions: Array<{
    name: string;
    image: string;
    description: string;
  }>;
}

/**
 * 风光数据 — 对应后端 GET /api/travel-guide/scenery/:provinceId 返回的数据
 *
 * 【数据库表】多表聚合（scenery_spots + scenery_seasonal + scenery_activities + scenery_routes 等）
 *
 * @property overview            - 风光概览（来自后端统计）
 * @property spots               - 景点列表（来自后端 scenery_spots 表）
 * @property seasonal            - 季节推荐列表（来自后端，含季节名称、描述、图片、活动）
 * @property activities          - 活动列表（来自后端 scenery_activities 表）
 * @property routes              - 路线列表（来自后端 scenery_routes 表）
 * @property intangibleHeritage  - 非物质文化遗产列表（可选，来自后端）
 * @property festivals           - 节日列表（可选，来自后端，any 类型待细化）
 * @property folkCustomsElements - 民俗元素列表（可选，来自后端，any 类型待细化）
 */
export interface SceneryData {
  overview: SceneryOverview;
  spots: ScenerySpot[];
  seasonal: Array<{
    name: string;
    description: string;
    image: string;
    activities: string[];
  }>;
  activities: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    location: string;
    duration: string;
    difficulty: string;
    type: string;
  }>;
  routes: Array<{
    id: string;
    name: string;
    title: string;
    description: string;
    duration: string;
    difficulty: string;
    highlights: string[];
    spots: string[];
    tags: string[];
    image: string;
    rating: number;
    bestTime: string;
    traffic: string;
    suitableFor: string;
  }>;
  intangibleHeritage?: Array<{
    id: string;
    name: string;
    level: string;
    description: string;
    image: string;
    category: string;
    heritageType?: string;
    protectionUnit: string;
    tags?: string[];
    icon: string;
    features: string[];
    views?: number;
    likes?: number;
    rating?: number;
  }>;
  festivals?: any[];
  folkCustomsElements?: any[];
}

/**
 * 景观类型 — 风光分类筛选的选项
 *
 * 【注意】此类型可能来自后端配置或前端静态定义
 * - value: 类型标识
 * - label: 类型显示名称
 * - icon: 类型图标
 * - name: 类型名称（可选，与 label 类似）
 * - description: 类型描述（可选）
 * - children: 子类型列表（可选，支持多级嵌套）
 */
export interface LandscapeType {
  value: string;
  label: string;
  icon: string;
  name?: string;
  description?: string;
  children?: LandscapeType[];
}

/**
 * 文化主题 — 文化类风光的筛选选项
 *
 * @property value       - 主题标识
 * @property name        - 主题名称
 * @property icon        - 主题图标
 * @property description - 主题描述（可选）
 */
export interface CultureTheme {
  value: string;
  name: string;
  icon: string;
  description?: string;
}

/**
 * 最佳时间 — 游览时间筛选选项
 *
 * @property value - 时间标识
 * @property name  - 时间名称（如 "春季"、"全年"）
 * @property icon  - 时间图标
 */
export interface BestTime {
  value: string;
  name: string;
  icon: string;
}

/**
 * 风光标签页 — 前端风光页面 Tab 切换的数据类型
 *
 * 【注意】此类型不来自后端，由前端组件内部定义
 * - id: 标签页标识
 * - name: 标签页显示名称
 * - icon: 标签页图标
 */
export interface SceneryTab {
  id: string;
  name: string;
  icon: string;
}

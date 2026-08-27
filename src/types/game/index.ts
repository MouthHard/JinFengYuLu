/**
 * ============================================================================
 * 游戏模块 - 数据类型定义 - game/index.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了游戏模块的前端展示类型和筛选类型。
 *
 * 【与 services/game.ts 中类型的区别】
 * - services/game.ts 中的 GameItemResponse 等类型：直接对应后端 API 返回的 JSON 结构
 * - 本文件中的 GameItem 等类型：前端展示和筛选使用的类型，可能包含前端计算字段
 *
 * 【类型用途说明】
 * - GameCategory: 游戏分类的联合类型（如 "action"、"rpg"）
 * - GamePlatform: 游戏平台的联合类型（如 "pc"、"ps5"）
 * - GameTag: 游戏标签的联合类型（如 "hot"、"new"、"sale"）
 * - GameItem: 游戏详情的展示类型（对应后端 GameItemResponse，但增加了 isOwned/isWishlisted）
 * - GameBanner: 轮播图展示类型
 * - GameCategoryInfo: 分类配置展示类型
 * - GameFilter: 前端筛选面板的状态类型
 *
 * 【联合类型说明】
 * GameCategory/GamePlatform/GameTag 是 TypeScript 的联合类型（Union Type），
 * 限制变量只能取预定义的值，类似后端的枚举（ENUM）。
 * 好处：IDE 自动补全 + 类型检查，避免拼写错误。
 *
 * ============================================================================
 */

/**
 * 游戏分类联合类型 — 对应后端数据库的 category 枚举字段
 *
 * 【可选值说明】
 * - 'action': 动作游戏
 * - 'rpg': 角色扮演
 * - 'strategy': 策略游戏
 * - 'adventure': 冒险游戏
 * - 'fps': 第一人称射击
 * - 'simulation': 模拟游戏
 * - 'sports': 体育游戏
 * - 'puzzle': 益智游戏
 * - 'horror': 恐怖游戏
 * - 'indie': 独立游戏
 */
export type GameCategory = 'action' | 'rpg' | 'strategy' | 'adventure' | 'fps' | 'simulation' | 'sports' | 'puzzle' | 'horror' | 'indie';

/**
 * 游戏平台联合类型 — 对应后端数据库的 platform 枚举字段
 *
 * 【可选值说明】
 * - 'pc': PC 电脑
 * - 'ps5': PlayStation 5
 * - 'ps4': PlayStation 4
 * - 'xbox': Xbox
 * - 'switch': Nintendo Switch
 * - 'mobile': 手机/平板
 */
export type GamePlatform = 'pc' | 'ps5' | 'ps4' | 'xbox' | 'switch' | 'mobile';

/**
 * 游戏标签联合类型 — 对应后端数据库的 tag 枚举字段
 *
 * 【可选值说明】
 * - 'hot': 热门
 * - 'new': 新品
 * - 'sale': 特惠
 * - 'coming': 即将发售
 * - 'free': 免费
 * - 'premium': 付费
 * - 'editor-choice': 编辑推荐
 * - 'multiplayer': 多人游戏
 */
export type GameTag = 'hot' | 'new' | 'sale' | 'coming' | 'free' | 'premium' | 'editor-choice' | 'multiplayer';

/**
 * 游戏条目 — 前端展示用的游戏详情类型
 *
 * 【与 GameItemResponse 的区别】
 * - GameItemResponse（services 层）：直接对应后端返回的 JSON，字段如 isActive/createdAt
 * - GameItem（本文件）：前端展示用，增加了 isOwned/isWishlisted 等前端状态字段，
 *   使用 GameCategory/GameTag/GamePlatform 联合类型替代 string
 *
 * @property id               - 游戏唯一标识（来自后端，通常是 URL slug）
 * @property title            - 游戏名称（来自后端）
 * @property subtitle         - 副标题（可选，来自后端）
 * @property cover            - 封面图 URL（来自后端）
 * @property banner           - Banner 图 URL（可选，来自后端）
 * @property screenshots      - 截图列表（可选，来自后端）
 * @property category         - 分类（来自后端，使用 GameCategory 联合类型）
 * @property tags             - 标签列表（来自后端，使用 GameTag 联合类型数组）
 * @property platforms        - 平台列表（来自后端，使用 GamePlatform 联合类型数组）
 * @property price            - 当前价格（来自后端，单位：元）
 * @property originalPrice    - 原价（可选，来自后端，有折扣时显示）
 * @property discount         - 折扣百分比（可选，来自后端，如 0.8 表示八折）
 * @property rating           - 评分（来自后端，0-10）
 * @property reviewCount      - 评价数量（来自后端统计）
 * @property developer        - 开发商（来自后端）
 * @property publisher        - 发行商（来自后端）
 * @property releaseDate      - 发行日期（来自后端，ISO 格式字符串）
 * @property description      - 游戏描述（来自后端）
 * @property features         - 特性列表（可选，来自后端）
 * @property systemRequirements - 系统配置要求（可选，来自后端）
 *   - minimum: 最低配置
 *   - recommended: 推荐配置
 * @property isOwned          - 是否已拥有（前端状态，不来自后端）
 * @property isWishlisted     - 是否已加入愿望单（前端状态，不来自后端）
 */
export interface GameItem {
  id: string;
  title: string;
  subtitle?: string;
  cover: string;
  banner?: string;
  screenshots?: string[];
  category: GameCategory;
  tags: GameTag[];
  platforms: GamePlatform[];
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  developer: string;
  publisher: string;
  releaseDate: string;
  description: string;
  features?: string[];
  systemRequirements?: {
    minimum: string;
    recommended: string;
  };
  isOwned?: boolean;
  isWishlisted?: boolean;
}

/**
 * 游戏 Banner — 前端展示用的轮播图类型
 *
 * 【与 GameBannerItem 的区别】
 * - GameBannerItem（services 层）：tag 是 string 类型
 * - GameBanner（本文件）：tag 是 GameTag 联合类型，更严格
 *
 * @property id      - Banner 唯一标识（来自后端）
 * @property gameId  - 关联的游戏 ID（来自后端，点击跳转用）
 * @property image   - 图片 URL（来自后端）
 * @property title   - 标题（来自后端）
 * @property subtitle - 副标题（来自后端）
 * @property tag     - 标签（可选，来自后端，使用 GameTag 联合类型）
 */
export interface GameBanner {
  id: string;
  gameId: string;
  image: string;
  title: string;
  subtitle: string;
  tag?: GameTag;
}

/**
 * 游戏分类信息 — 前端分类筛选栏的展示类型
 *
 * 【与 GameCategoryItem 的区别】
 * - GameCategoryItem（services 层）：key 是 string 类型
 * - GameCategoryInfo（本文件）：key 是 GameCategory 联合类型，更严格
 *
 * @property key   - 分类标识（来自后端，使用 GameCategory 联合类型）
 * @property label - 分类显示名称（来自后端，如 "动作"、"角色扮演"）
 * @property icon  - 分类图标（来自后端）
 */
export interface GameCategoryInfo {
  key: GameCategory;
  label: string;
  icon: string;
}

/**
 * 游戏筛选条件 — 前端筛选面板的状态类型
 *
 * 【注意】此类型不来自后端，由前端筛选组件内部管理
 * 所有字段都支持 'all' 值，表示"不筛选"
 *
 * @property category   - 分类筛选（GameCategory 或 'all'）
 * @property tag        - 标签筛选（GameTag 或 'all'）
 * @property platform   - 平台筛选（GamePlatform 或 'all'）
 * @property priceRange - 价格区间筛选
 *   - 'all': 不限
 *   - 'free': 免费
 *   - 'under50': 50 元以下
 *   - 'under100': 100 元以下
 *   - 'over100': 100 元以上
 * @property sortBy - 排序方式
 *   - 'popular': 按热度
 *   - 'price-asc': 价格升序
 *   - 'price-desc': 价格降序
 *   - 'rating': 按评分
 *   - 'newest': 按最新
 *   - 'discount': 按折扣力度
 */
export interface GameFilter {
  category: GameCategory | 'all';
  tag: GameTag | 'all';
  platform: GamePlatform | 'all';
  priceRange: 'all' | 'free' | 'under50' | 'under100' | 'over100';
  sortBy: 'popular' | 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'discount';
}

/**
 * ============================================================================
 * 风景模块 - 通用类型定义 - landscape/common.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了风景模块中多个子模块共用的数据类型。
 * 这些类型被 data.ts、guides.ts、profile.ts 等文件引用。
 *
 * 【类型用途说明】
 * - SocialLink: 摄影师的社交链接（微博、Instagram 等），嵌套在 GlobalPhotographer 中
 * - ContactInfo: 摄影师的联系方式，嵌套在 GlobalPhotographer 中
 * - Category: 分类树节点，用于分类导航（支持多级嵌套）
 * - CategoryTag: 多维分类标签，用于高级筛选（维度→大类→子类）
 * - Difficulty: 难度等级，攻略和活动的难度标记
 * - ImageSearchItem/VideoSearchItem/PhotographerSearchItem: 搜索结果条目
 * - SearchItem: 搜索结果的联合类型（图片 | 视频 | 攻略 | 摄影师）
 * - SearchHistoryItem: 搜索历史记录
 * - SearchFilter: 搜索筛选条件
 * - InteractionItem: 互动条目（点赞/收藏/浏览记录等）
 *
 * 【与后端的关系】
 * 这些类型大多对应后端返回的嵌套数据结构，而非独立的 API 端点。
 * 例如 SocialLink 不是独立的 API，而是摄影师详情接口返回的 socials 字段。
 *
 * ============================================================================
 */
import type { ShootParam, GearItem, SafetyInfo } from './profile'

/**
 * 社交链接 — 摄影师的社交媒体账号
 *
 * 【字段来源】后端 global_photographer_socials 表
 * - platform: 平台名称（如 "weibo"、"instagram"、"twitter"）
 * - url: 链接地址（可选，点击后跳转）
 * - iconPath: 图标路径（可选，前端渲染社交图标用）
 */
export interface SocialLink {
  platform: string
  url?: string
  iconPath?: string
}

/**
 * 联系方式 — 摄影师的商务/个人联系方式
 *
 * 【字段来源】后端 global_photographer_contacts 表
 * - email: 电子邮箱（可选）
 * - website: 个人网站（可选）
 * - phone: 电话号码（可选）
 */
export interface ContactInfo {
  email?: string
  website?: string
  phone?: string
}

/**
 * 分类节点 — 支持多级嵌套的分类树结构
 *
 * 【字段来源】后端 global_categories 表
 * - id: 分类唯一标识
 * - name: 分类名称（如 "自然风光"）
 * - icon: 分类图标
 * - count: 该分类下的内容数量（可选，后端动态统计）
 * - description: 分类描述（可选）
 * - children: 子分类列表（可选，支持无限嵌套）
 *
 * 【数据结构示意】
 * Category "自然风光" (count: 500)
 *   ├── Category "山岳" (count: 120)
 *   ├── Category "湖泊" (count: 80)
 *   └── Category "海洋" (count: 60)
 */
export interface Category {
  id: string
  name: string
  icon: string
  count?: number
  description?: string
  children?: Category[]
}

/**
 * 多维分类标签 — 用于高级筛选的三级分类体系
 *
 * 【字段来源】后端 global_category_tags 表
 * - dimension: 维度名称（如 "景观类型"、"文化主题"、"最佳时间"）
 * - category: 大类名称（如 "自然"、"文化"）
 * - subCategory: 子类名称（如 "山岳"、"古建筑"）
 *
 * 【使用场景】
 * 前端高级筛选面板中，按维度分组显示筛选选项。
 * 例如"景观类型"维度下有"自然→山岳"、"自然→湖泊"等选项。
 */
export interface CategoryTag {
  dimension: string
  category: string
  subCategory: string
}

/**
 * 难度等级 — 攻略和活动的难度标记
 *
 * 【字段来源】后端的 difficulty 字段
 * - type: 难度值
 *   - 'beginner': 入门级（适合新手）
 *   - 'intermediate': 进阶级（需要一定经验）
 *   - 'advanced': 高级（需要丰富经验）
 */
export interface Difficulty {
  type: 'beginner' | 'intermediate' | 'advanced'
}

/**
 * 图片搜索结果条目 — 搜索接口返回的图片类型结果
 *
 * 【字段来源】后端搜索接口 /api/landscape/search?type=image
 * - id: 图片 ID
 * - type: 固定为 'image'，用于前端区分搜索结果类型
 * - title: 图片标题
 * - thumbnail: 缩略图 URL（可选，搜索结果列表展示用）
 * - description: 描述（可选）
 * - author/authorAvatar: 作者信息（可选）
 * - category: 分类（可选）
 * - views/likes/loves/bookmarks/shares: 互动数据（来自后端统计）
 * - date: 日期（可选）
 * - location: 拍摄地点（可选）
 * - tags: 标签列表（可选）
 * - camera: 拍摄设备（可选）
 * - resolution: 分辨率（可选）
 * - iso/aperture/shutterSpeed: 拍摄参数（可选，来自后端 EXIF 数据）
 */
export interface ImageSearchItem {
  id: string
  type: 'image'
  title: string
  thumbnail?: string
  description?: string
  author?: string
  authorAvatar?: string
  category?: string
  views: number
  likes: number
  loves?: number
  bookmarks: number
  shares: number
  date?: string
  location?: string
  tags?: string[]
  camera?: string
  resolution?: string
  iso?: number
  aperture?: string
  shutterSpeed?: string
}

/**
 * 视频搜索结果条目 — 搜索接口返回的视频类型结果
 *
 * 【字段来源】后端搜索接口 /api/landscape/search?type=video
 * - id: 视频 ID
 * - type: 固定为 'video'
 * - title: 视频标题
 * - thumbnail: 缩略图 URL（可选）
 * - description: 描述（可选）
 * - author/authorAvatar: 作者信息（可选）
 * - category: 分类（可选）
 * - views/likes/bookmarks/shares: 互动数据（来自后端统计）
 * - date: 日期（可选）
 * - location: 拍摄地点（可选）
 * - tags: 标签列表（可选）
 * - duration: 时长（可选，如 "03:25"）
 * - resolution: 分辨率（可选）
 * - fps: 帧率（可选）
 */
export interface VideoSearchItem {
  id: string
  type: 'video'
  title: string
  thumbnail?: string
  description?: string
  author?: string
  authorAvatar?: string
  category?: string
  views: number
  likes: number
  bookmarks: number
  shares: number
  date?: string
  location?: string
  tags?: string[]
  duration?: string
  resolution?: string
  fps?: number
}

/**
 * 摄影师搜索结果条目 — 搜索接口返回的摄影师类型结果
 *
 * 【字段来源】后端搜索接口 /api/landscape/search?type=photographer
 * - id: 摄影师 ID
 * - type: 固定为 'photographer'
 * - name: 摄影师名称
 * - avatar: 头像 URL（可选）
 * - thumbnail: 缩略图 URL（可选）
 * - title: 头衔（可选）
 * - bio/description: 简介（可选）
 * - location: 所在地（可选）
 * - specialty: 专长（可选）
 * - followers/worksCount/rating: 统计数据（可选）
 * - tags: 标签列表（可选）
 * - date/joinDate: 日期信息（可选）
 * - views/likes/bookmarks/shares: 互动数据（可选）
 * - online: 是否在线（可选）
 * - verified: 是否认证（可选）
 * - pro: 是否专业（可选）
 */
export interface PhotographerSearchItem {
  id: string
  type: 'photographer'
  name: string
  avatar?: string
  thumbnail?: string
  title?: string
  bio?: string
  description?: string
  location?: string
  specialty?: string
  followers?: number
  worksCount?: number
  rating?: number
  tags?: string[]
  date?: string
  joinDate?: string
  views?: number
  likes?: number
  bookmarks?: number
  shares?: number
  online?: boolean
  verified?: boolean
  pro?: boolean
}

/**
 * 搜索结果联合类型 — 搜索接口可能返回四种类型的结果
 *
 * 【使用方式】
 * 前端通过 item.type 判断具体类型，然后渲染不同的卡片组件：
 * - 'image' → 图片卡片
 * - 'video' → 视频卡片
 * - 'photographer' → 摄影师卡片
 * - GuideSearchItem（来自 guides.ts）→ 攻略卡片
 */
export type SearchItem = ImageSearchItem | VideoSearchItem | import('./guides').GuideSearchItem | PhotographerSearchItem

/**
 * 搜索历史记录 — 前端本地存储的搜索历史
 *
 * 【注意】此类型不来自后端，由前端 localStorage 管理
 * - query: 搜索关键词
 * - timestamp: 搜索时间戳
 * - count: 搜索次数（同一关键词多次搜索时累加）
 */
export interface SearchHistoryItem {
  query: string
  timestamp: number
  count: number
}

/**
 * 搜索筛选条件 — 前端搜索面板的状态
 *
 * 【注意】此类型不来自后端，由前端搜索组件内部管理
 * - type: 搜索范围（'all' 全部 | 'image' 仅图片 | 'video' 仅视频）
 * - category: 分类筛选
 * - sortBy: 排序方式（'relevance' 相关度 | 'newest' 最新 | 'popular' 最热）
 */
export interface SearchFilter {
  type: 'all' | 'image' | 'video'
  category: string
  sortBy: 'relevance' | 'newest' | 'popular'
}

/**
 * 互动条目 — 用户的点赞/收藏/浏览等互动记录
 *
 * 【字段来源】后端 user_interactions 表
 * - id: 内容 ID
 * - type: 内容类型（'image' | 'video' | 'guide' | 'photographer'）
 * - title: 内容标题
 * - image: 封面图 URL
 * - location/category: 位置和分类（可选）
 * - timestamp: 互动时间戳
 * - likes/views/loves/favorites/shares: 互动数据（可选）
 * - icon: 图标（可选）
 * - quality/duration: 质量标签/时长（可选）
 * - summary: 摘要（可选）
 * - author/authorId/authorAvatar/authorVerified: 作者信息（可选）
 * - difficulty: 难度等级（可选，攻略专用）
 * - rating/ratingCount: 评分信息（可选）
 * - readTime: 阅读时长（可选，攻略专用）
 * - saves/comments: 收藏数/评论数（可选）
 * - date: 日期（可选）
 * - isEditorPick: 是否编辑推荐（可选）
 * - season/transport/budget/audience: 行程信息（可选，攻略专用）
 * - highlights: 亮点列表（可选）
 * - accommodation/language/warnings: 住宿/语言/注意事项（可选）
 * - shootTime/shootParams: 拍摄信息（可选）
 * - gears: 装备需求（可选，来自 profile.ts 的 GearItem）
 * - safety: 安全信息（可选，来自 profile.ts 的 SafetyInfo）
 * - altitude/temperature: 海拔/温度（可选）
 * - tips: 小贴士（可选）
 */
export interface InteractionItem {
  id: string
  type: 'image' | 'video' | 'guide' | 'photographer'
  title: string
  image: string
  location?: string
  category?: string
  timestamp: number
  likes?: number
  views?: number
  loves?: number
  favorites?: number
  shares?: number
  icon?: string
  quality?: string
  duration?: number | null
  summary?: string
  author?: string
  authorId?: string
  authorAvatar?: string
  authorVerified?: boolean
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  rating?: number
  ratingCount?: number
  readTime?: string
  saves?: number
  comments?: number
  date?: string
  isEditorPick?: boolean
  season?: string
  transport?: string
  budget?: string
  audience?: string
  highlights?: string[]
  accommodation?: string
  language?: string
  warnings?: string[]
  shootTime?: string
  shootParams?: ShootParam[]
  gears?: GearItem[]
  safety?: SafetyInfo[]
  altitude?: string
  temperature?: string
  tips?: string[]
}

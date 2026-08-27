/**
 * ============================================================================
 * 风景模块 - 数据类型定义 - landscape/data.ts
 * ============================================================================
 * 【前端同学必读】
 * 本文件定义了风景模块所有后端 API 响应的数据类型。
 * 每个接口对应后端数据库中的一张表，字段名与后端返回的 JSON 键名一一对应。
 *
 * 【类型与 API 的对应关系】
 * - GlobalPhotographer  ← GET /api/landscape/photographers 响应中的 items 元素
 * - GlobalImage         ← GET /api/landscape/images 响应中的 items 元素
 * - GlobalVideo         ← GET /api/landscape/videos 响应中的 items 元素
 * - GlobalGuide         ← GET /api/landscape/guides 响应中的 items 元素
 *
 * 【字段来源说明】
 * - 标记为"来自后端"的字段：由后端数据库查询返回，前端只负责展示
 * - 标记为"前端计算"的字段：后端不返回此字段，前端根据其他字段计算得出
 * - 可选字段（?）：后端可能返回 null 或不返回该字段，前端需做兜底处理
 *
 * 【数据库表对应】
 * - GlobalPhotographer → global_photographers 表
 * - GlobalImage        → global_images 表
 * - GlobalVideo        → global_videos 表
 * - GlobalGuide        → global_guides 表
 *
 * ============================================================================
 */
import type { SocialLink, ContactInfo, CategoryTag } from './common'

/**
 * 摄影师作品 — 嵌套在 GlobalPhotographer.worksPreview 中的子类型
 *
 * 【字段来源】后端 global_photographer_works 表
 * - id: 作品 ID
 * - image/cover: 作品图片 URL
 * - title: 作品标题
 * - type: 作品类型（如 "风景"、"人像"）
 * - likes/loves/favorites/views/shares: 互动数据，来自后端的统计表
 */
export interface GlobalPhotographerWork {
  id?: string
  image?: string
  cover?: string
  title?: string
  type?: string
  likes?: number
  loves?: number
  favorites?: number
  views?: number
  shares?: number
}

/**
 * 摄影师 — 对应后端 GET /api/landscape/photographers 返回的单条数据
 *
 * 【数据库表】global_photographers
 *
 * 【字段说明】
 * - id: 摄影师唯一标识（来自后端）
 * - name: 摄影师名称（来自后端）
 * - avatar: 头像 URL（来自后端）
 * - title: 头衔/职业标签（如 "风光摄影师"）（来自后端）
 * - specialty: 专长领域（如 "星空摄影"）（来自后端）
 * - bio: 个人简介（来自后端）
 * - location: 所在地（来自后端）
 * - rating: 评分（来自后端，0-5）
 * - equipment: 摄影设备列表（来自后端，如 ["Canon R5", "Sony A7IV"]）
 * - worksCount/works/followers/likes/bookmarks/views: 统计数据（来自后端）
 *   注意：这些字段是 string 类型，后端返回的是格式化后的字符串（如 "1.2万"）
 * - tags: 标签列表（来自后端）
 * - verified: 是否认证摄影师（来自后端）
 * - isPro: 是否专业摄影师（来自后端）
 * - isOnline: 是否在线（来自后端）
 * - banner: 个人主页横幅图（可选，来自后端）
 * - category: 分类（可选，来自后端）
 * - workTypes: 作品类型列表（来自后端）
 * - worksPreview: 作品预览列表（来自后端，嵌套 GlobalPhotographerWork）
 * - joinDate/lastActive: 时间信息（可选，来自后端）
 * - socials: 社交链接列表（可选，来自后端）
 * - contact: 联系方式（可选，来自后端）
 * - experience: 经验描述（可选，来自后端）
 * - awards: 获奖列表（可选，来自后端）
 */
export interface GlobalPhotographer {
  id: string
  name: string
  avatar: string
  title: string
  specialty: string
  bio: string
  location: string
  rating: number
  equipment: string[]
  worksCount: string
  works: string
  followers: string
  likes: string
  bookmarks: string
  views: string
  tags: string[]
  verified: boolean
  isPro: boolean
  isOnline: boolean
  banner?: string
  category?: string
  workTypes: string[]
  worksPreview: GlobalPhotographerWork[]
  joinDate?: string
  lastActive?: string
  socials?: SocialLink[]
  contact?: ContactInfo
  experience?: string
  awards?: string[]
}

/**
 * 风景图片 — 对应后端 GET /api/landscape/images 返回的单条数据
 *
 * 【数据库表】global_images
 *
 * 【字段说明】
 * - id: 图片唯一标识（来自后端）
 * - url: 图片原始 URL（来自后端，用于全屏查看）
 * - thumbnail: 缩略图 URL（可选，来自后端，用于列表展示）
 * - title: 图片标题（来自后端）
 * - category: 分类（来自后端，如 "自然风光"）
 * - location: 拍摄地点（来自后端）
 * - authorId: 作者 ID（来自后端，关联 global_photographers 表）
 * - author: 作者名称（可选，来自后端，冗余字段避免额外查询）
 * - tags: 标签列表（来自后端）
 * - views/likes/loves/favorites/shares: 互动数据（来自后端统计）
 * - width/height: 图片尺寸（可选，来自后端，用于布局计算）
 * - camera: 拍摄设备（可选，来自后端）
 * - date: 拍摄日期（可选，来自后端）
 * - randomHeight: 随机高度值（可选，前端用于瀑布流布局的高度随机化）
 * - categoryTags: 多维分类标签（可选，来自后端，用于高级筛选）
 */
export interface GlobalImage {
  id: string
  url: string
  thumbnail?: string
  title: string
  category: string
  location: string
  authorId: string
  author?: string
  tags: string[]
  views: number
  likes: number
  loves: number
  favorites: number
  shares: number
  width?: number
  height?: number
  camera?: string
  date?: string
  randomHeight?: number
  categoryTags?: CategoryTag[]
}

/**
 * 风景视频 — 对应后端 GET /api/landscape/videos 返回的单条数据
 *
 * 【数据库表】global_videos
 *
 * 【字段说明】
 * - id: 视频唯一标识（来自后端）
 * - url: 视频文件 URL（来自后端）
 * - poster: 视频封面图 URL（来自后端，用于列表展示）
 * - title: 视频标题（来自后端）
 * - category: 分类（来自后端）
 * - location: 拍摄地点（来自后端）
 * - authorId: 作者 ID（可选，来自后端）
 * - author/authorAvatar/authorTitle: 作者信息（可选，来自后端）
 * - duration: 时长（来自后端，格式如 "03:25"）
 * - views/likes/loves/bookmarks/shares/comments: 互动数据（来自后端统计）
 * - resolution: 分辨率（可选，来自后端，如 "4K"）
 * - fps: 帧率（可选，来自后端）
 * - tags: 标签列表（可选，来自后端）
 * - date: 发布日期（可选，来自后端）
 * - categoryTags: 多维分类标签（可选，来自后端）
 */
export interface GlobalVideo {
  id: string
  url: string
  poster: string
  title: string
  category: string
  location: string
  authorId?: string
  author?: string
  authorAvatar?: string
  authorTitle?: string
  duration: string
  views: number
  likes: number
  loves: number
  bookmarks: number
  shares: number
  comments: number
  resolution?: string
  fps?: number
  tags?: string[]
  date?: string
  categoryTags?: CategoryTag[]
}

/**
 * 攻略章节 — 嵌套在 GlobalGuide.sections 中的子类型
 *
 * 【字段来源】后端 global_guide_sections 表
 * - title: 章节标题
 * - items: 章节内容条目列表
 */
export interface GuideSection {
  title: string
  items: string[]
}

/**
 * 攻略装备 — 嵌套在 GlobalGuide.equipments 中的子类型
 *
 * 【字段来源】后端 global_guide_equipments 表
 * - title: 装备分类标题（如 "相机"）
 * - icon: 装备分类图标
 * - items: 具体装备列表（如 ["Canon R5", "RF 24-70mm"]）
 */
export interface GuideEquipment {
  title: string
  icon: string
  items: string[]
}

/**
 * 攻略提示 — 嵌套在 GlobalGuide.tips 中的子类型
 *
 * 【字段来源】后端 global_guide_tips 表
 * - title: 提示标题
 * - content: 提示内容
 * - type: 提示类型（'tip' 小贴士 | 'warning' 警告 | 'info' 信息）
 */
export interface GuideTip {
  title: string
  content: string
  type?: 'tip' | 'warning' | 'info'
}

/**
 * 摄影攻略 — 对应后端 GET /api/landscape/guides 返回的单条数据
 *
 * 【数据库表】global_guides
 *
 * 【字段说明】
 * - id: 攻略唯一标识（来自后端）
 * - title: 攻略标题（来自后端）
 * - cover: 封面图 URL（来自后端）
 * - excerpt: 摘要（来自后端，列表页展示用）
 * - authorId/author/authorAvatar/authorVerified: 作者信息（来自后端）
 * - category: 分类（来自后端）
 * - location: 目的地（来自后端）
 * - tags: 标签列表（来自后端）
 * - views/likes/loves/bookmarks/shares/comments: 互动数据（来自后端统计）
 * - difficulty: 难度等级（来自后端，'beginner' 入门 | 'intermediate' 进阶 | 'advanced' 高级）
 * - duration: 行程时长（来自后端，如 "3天2夜"）
 * - season: 最佳季节（可选，来自后端）
 * - budget: 预算（可选，来自后端）
 * - rating: 评分（可选，来自后端）
 * - publishDate: 发布日期（可选，来自后端）
 * - content: 正文内容（可选，来自后端，详情页使用）
 * - highlights: 亮点列表（可选，来自后端）
 * - type/typeName: 攻略类型（可选，来自后端）
 * - date: 日期（可选，来自后端）
 * - readTime: 阅读时长（可选，来自后端，如 "5分钟"）
 * - travelMode: 出行方式（可选，来自后端）
 * - sceneryTheme: 风光主题（可选，来自后端）
 * - locationId: 地点 ID（可选，来自后端）
 * - categoryTags: 多维分类标签（可选，来自后端）
 * - sections: 章节列表（可选，来自后端，嵌套 GuideSection）
 * - transport: 交通方式（可选，来自后端）
 * - audience: 适合人群（可选，来自后端）
 * - language: 语言（可选，来自后端）
 * - warnings: 注意事项（可选，来自后端）
 * - shootTime: 拍摄时间建议（可选，来自后端）
 * - shootParams: 拍摄参数（可选，来自后端，如光圈、快门速度）
 * - gears: 装备需求（可选，来自后端，含 required 标记）
 * - safety: 安全提示（可选，来自后端）
 * - altitude: 海拔（可选，来自后端）
 * - temperature: 温度（可选，来自后端）
 * - equipments: 装备分类列表（可选，来自后端，嵌套 GuideEquipment）
 * - tips: 小贴士列表（可选，来自后端，嵌套 GuideTip）
 * - bestTime/weather/transportation/accommodation/budgetDetail: 行程信息（可选，来自后端）
 * - safetyNotes: 安全须知（可选，来自后端）
 * - routePoints: 路线节点（可选，来自后端）
 * - recommendedGear: 推荐装备（可选，来自后端）
 * - postProcessing: 后期处理建议（可选，来自后端）
 */
export interface GlobalGuide {
  id: string
  title: string
  cover: string
  excerpt: string
  authorId: string
  author: string
  authorAvatar?: string
  authorVerified?: boolean
  category: string
  location: string
  tags: string[]
  views: number
  likes: number
  loves: number
  bookmarks: number
  shares: number
  comments?: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  season?: string
  budget?: string
  rating?: number
  publishDate?: string
  content?: string
  highlights?: string[]
  type?: string
  typeName?: string
  date?: string
  readTime?: string
  travelMode?: string
  sceneryTheme?: string
  locationId?: string
  categoryTags?: CategoryTag[]
  sections?: GuideSection[]
  transport?: string
  audience?: string
  language?: string
  warnings?: string[]
  shootTime?: string
  shootParams?: Array<{ label: string; value: string }>
  gears?: Array<{ name: string; required: boolean }>
  safety?: string[]
  altitude?: string
  temperature?: string
  equipments?: GuideEquipment[]
  tips?: GuideTip[]
  bestTime?: string
  weather?: string
  transportation?: string
  accommodation?: string
  budgetDetail?: string
  safetyNotes?: string[]
  routePoints?: string[]
  recommendedGear?: string[]
  postProcessing?: string[]
}

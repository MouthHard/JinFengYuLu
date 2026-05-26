import type { ShootParam, GearItem, SafetyInfo } from '@/typesOfPages/landscape/profile'

export const IMAGE_DEFAULTS = {
  camera: 'Sony A7R V',
  lens: '14mm f/1.8',
  iso: 3200,
  aperture: 'f/2.8',
  shutterSpeed: '30s',
  focalLength: '14mm',
  tags: ['风光', '星空', '延时'] as string[],
  tag2: '热门推荐',
  tag3: '编辑精选',
} as const

export const VIDEO_DEFAULTS = {
  codec: 'H.264',
  resolution: '4K',
  fps: 30,
  duration: '3:24',
  tags: ['风光', '延时', '旅行'] as string[],
  tag2: '精选视频',
  tag3: '热门推荐',
} as const

export const GUIDE_DEFAULTS = {
  summary: '暂无简介',
  difficulty: 'intermediate' as const,
  rating: 4.5,
  ratingCount: 50,
  readTime: '10',
  saves: 0,
  comments: 0,
  season: '春秋最佳',
  transport: '自驾/包车',
  budget: '¥8000-15000',
  audience: '摄影爱好者',
  highlights: ['极致自然风光', '独特地质景观', '丰富摄影机会'] as string[],
  accommodation: '特色民宿/酒店',
  language: '当地语言/英语',
  warnings: ['注意天气变化', '准备防寒装备'] as string[],
  shootTime: '清晨/黄昏最佳',
  shootParams: [
    { label: '相机', value: '全画幅单反' },
    { label: '镜头', value: '广角16-35mm' },
  ] as ShootParam[],
  gears: [
    { name: '全画幅相机', required: true },
    { name: '广角镜头', required: true },
  ] as GearItem[],
  safety: [
    { type: 'warning' as const, title: '天气预警', content: '关注当地天气预报' },
  ] as SafetyInfo[],
  altitude: '500-3000m',
  temperature: '-5°C ~ 20°C',
  tips: ['建议提前规划行程', '尊重当地文化'] as string[],
} as const

export const INTERACTION_DEFAULTS = {
  likes: 0,
  views: 0,
  loves: 0,
  favorites: 0,
  shares: 0,
  bookmarks: 0,
  comments: 0,
} as const

export const DATE_DEFAULTS = {
  fallback: '2024-03-15',
} as const

export const AUTHOR_DEFAULTS = {
  name: '未知摄影师',
  avatar: '',
  id: '',
  verified: false,
} as const

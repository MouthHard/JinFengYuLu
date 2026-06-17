/**
 * Landscape 模块核心常量
 * 包含：OSS地址、维度配置、Hero区域数据、热门话题、热门目的地等
 */

// ====== OSS 配置 ======
export const OSS = 'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape'

// ====== 维度配置 ======
export const dimensions = [
  { id: 'theme', name: '主题', icon: '🎯' },
  { id: 'location', name: '地点', icon: '📍' },
  { id: 'time', name: '时间', icon: '🕐' },
  { id: 'weather', name: '天气', icon: '🌤️' },
  { id: 'technique', name: '技术', icon: '📸' },
  { id: 'style', name: '风格', icon: '🎨' },
  { id: 'element', name: '元素', icon: '💎' },
]

// ====== Hero 区域数据 ======
export const heroStats = [
  { icon: '📷', number: '10,000+', label: '精选作品' },
  { icon: '👤', number: '5,000+', label: '摄影师' },
  { icon: '🌍', number: '100+', label: '国家地区' },
]

export const heroTitle = '发现世界之美'
export const heroSubtitleWords = ['发现', '收藏', '分享'] as const

// ====== 热门话题 ======
export const hotTopics = [
  {
    id: 1,
    title: '极光摄影',
    category: '星空夜景',
    image: `${OSS}/1.webp`,
    description: '探索世界各地的极光现象，掌握拍摄极光的最佳时机和技巧',
    views: '12.5k',
    likes: '1.8k',
    favorites: '567',
    comments: '234',
    date: '2024-02-15',
    bestSeason: '冬季',
    locations: ['冰岛·雷克雅未克未', '挪威·特罗姆瑟', '芬兰·罗瓦涅米', '加拿大·黄刀镇'],
    tips: ['选择冬季晴朗的夜晚，避开满月', '使用三脚架和快门线，长曝光拍摄', '设置高ISO和大光圈，保证足够的进光量', '寻找有前景的构图，增加画面层次感'],
    navigation: { dimension: 'theme', category: 'sky', subCategory: 'aurora' },
  },
  {
    id: 2,
    title: '山岳风光',
    category: '自然风光',
    image: `${OSS}/2.webp`,
    description: '征服高山峻岭，捕捉世界上的山岳风光和云海奇观',
    views: '9.8k',
    likes: '1.2k',
    favorites: '389',
    comments: '187',
    date: '2024-01-20',
    bestSeason: '秋季',
    locations: ['瑞士·阿尔卑斯山脉', '中国·黄山', '美国·优胜美地', '新西兰南岛阿尔卑斯山脉'],
    tips: ['选择日出或日落时分，光线最柔和', '提前了解天气情况，云海出现的概率', '携带广角镜头，拍摄壮丽的风景', '注意安全，选择安全的拍摄位置'],
    navigation: { dimension: 'theme', category: 'nature', subCategory: 'mountain' },
  },
  {
    id: 3,
    title: '城市天际线',
    category: '城市建筑',
    image: `${OSS}/4.webp`,
    description: '探索全球著名城市的天际线，捕捉现代都市的魅力',
    views: '15.2k',
    likes: '2.1k',
    favorites: '678',
    comments: '312',
    date: '2024-02-05',
    bestSeason: '四季',
    locations: ['美国·纽约', '中国·上海', '阿拉伯联合酋长国·迪拜', '新加坡'],
    tips: ['选择高处拍摄点，如观景台或高楼大厦', '黄金时刻拍摄，城市灯光和自然光平衡', '使用三脚架，保证画面清晰', '尝试不同角度，寻找独特的构图'],
    navigation: { dimension: 'theme', category: 'urban', subCategory: 'skyline' },
  },
  {
    id: 4,
    title: '海滩日落',
    category: '海边风光',
    image: `${OSS}/5.webp`,
    description: '邂逅最美的海滩日落，记录夕阳西下的绝美时刻',
    views: '10.7k',
    likes: '1.5k',
    favorites: '423',
    comments: '203',
    date: '2024-01-15',
    bestSeason: '夏季',
    locations: ['马尔代夫', '泰国·普吉岛苏梅岛', '夏威夷·威基基海滩', '澳大利亚·黄金海岸'],
    tips: ['提前到达拍摄地点，抢占最佳位置', '使用渐变滤镜，平衡天空和地面曝光', '捕捉海浪和沙滩的纹理，增加画面细节', '尝试不同的构图，如三分法或引导线'],
    navigation: { dimension: 'theme', category: 'water', subCategory: 'beach' },
  },
]

// ====== 热门目的地 ======
export const popularDestinations = [
  {
    id: 1,
    name: '马尔代夫',
    country: '马尔代夫',
    images: { spring: `${OSS}/1.webp`, summer: `${OSS}/2.webp`, autumn: `${OSS}/3.webp`, winter: `${OSS}/4.webp` },
    rating: 5,
    score: 9.8,
    photos: '12,543',
    views: '234,567',
    likes: 12543,
    loves: 8756,
    favorites: 6543,
    shares: 2341,
    bestTime: '11月-4月',
    tips: '最佳旅游季节为旱季，建议提前预订水上屋',
    coordinates: { lat: 3.2028, lng: 73.2207 },
    navigation: { dimension: 'location', category: 'oceania', subCategory: 'pacific' },
  },
  {
    id: 2,
    name: '冰岛',
    country: '冰岛',
    images: { spring: `${OSS}/5.webp`, summer: `${OSS}/6.webp`, autumn: `${OSS}/7.webp`, winter: `${OSS}/8.webp` },
    rating: 5,
    score: 9.6,
    photos: '8,765',
    views: '189,234',
    likes: 8765,
    loves: 6234,
    favorites: 5432,
    shares: 1892,
    bestTime: '6月-8月',
    tips: '夏季可看午夜阳光，冬季可观测极光',
    coordinates: { lat: 64.9631, lng: -19.0208 },
    navigation: { dimension: 'location', category: 'europe', subCategory: 'northern-europe' },
  },
  {
    id: 3,
    name: '大峡谷',
    country: '美国',
    images: { spring: `${OSS}/3.webp`, summer: `${OSS}/1.webp`, autumn: `${OSS}/5.webp`, winter: `${OSS}/7.webp` },
    rating: 5,
    score: 9.5,
    photos: '6,543',
    views: '156,789',
    likes: 6543,
    loves: 4567,
    favorites: 3456,
    shares: 1567,
    bestTime: '3月-5月',
    tips: '春季适宜，适合徒步和摄影',
    coordinates: { lat: 36.1069, lng: -112.1129 },
    navigation: { dimension: 'location', category: 'america', subCategory: 'north-america' },
  },
  {
    id: 4,
    name: '瑞士阿尔卑斯',
    country: '瑞士',
    images: { spring: `${OSS}/2.webp`, summer: `${OSS}/4.webp`, autumn: `${OSS}/6.webp`, winter: `${OSS}/8.webp` },
    rating: 5,
    score: 9.7,
    photos: '9,876',
    views: '201,345',
    likes: 9876,
    loves: 7654,
    favorites: 6789,
    shares: 2013,
    bestTime: '6月-9月',
    tips: '夏季适合徒步，冬季适合滑雪',
    coordinates: { lat: 46.8182, lng: 8.2275 },
    navigation: { dimension: 'location', category: 'europe', subCategory: 'western-europe' },
  },
]

// ====== 映射表 ======
export const seasonMap: Record<string, string> = {
  spring: '春天',
  summer: '夏天',
  autumn: '秋天',
  winter: '冬天',
  all: '四季皆宜',
}

export const difficultyMap: Record<string, string> = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
  expert: '专家级',
}

// ====== 性能优化常量 ======
export const MIN_LOAD_TIME = 300
export const cachedViews = ['Home', 'Category', 'Photographers', 'Profile', 'Guides'] as const

// ====== 瀑布流布局常量 ======
export const masonryCardHeights = [
  240, 320, 280, 360, 300, 260, 340, 290,
  310, 270, 350, 250, 330, 380, 285, 315,
  295, 335, 305, 275, 365, 255, 325, 375
]

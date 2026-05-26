import type { Category } from '@/typesOfPages/landscape';

export const OSS = 'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape'

export const dimensions = [
  { id: 'theme', name: '主题', icon: '🎨' },
  { id: 'location', name: '地点', icon: '📍' },
  { id: 'time', name: '时间', icon: '⏰' },
  { id: 'weather', name: '天气', icon: '🌤️' },
  { id: 'technique', name: '技术', icon: '📷' },
  { id: 'style', name: '风格', icon: '🎭' },
  { id: 'element', name: '元素', icon: '✨' },
]

export const heroStats = [
  { icon: '📸', number: '10,000+', label: '精选作品' },
  { icon: '👤', number: '5,000+', label: '摄影师' },
  { icon: '🌍', number: '100+', label: '国家地区' },
]

export const heroTitle = '探索世界之美'
export const heroSubtitleWords = ['发现', '收藏', '分享'] as const

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
    locations: ['冰岛·雷克雅未克', '挪威·特罗姆瑟', '芬兰·罗瓦涅米', '加拿大·黄刀镇'],
    tips: ['选择冬季晴朗的夜晚，避开满月', '使用三脚架和快门线，长曝光拍摄', '设置高ISO和大光圈，保证足够的进光量', '寻找有前景的构图，增加画面层次感'],
    navigation: { dimension: 'theme', category: 'sky', subCategory: 'aurora' },
  },
  {
    id: 2,
    title: '山岳风光',
    category: '自然风光',
    image: `${OSS}/2.webp`,
    description: '征服高山峻岭，捕捉壮丽的山岳风光和云海奇观',
    views: '9.8k',
    likes: '1.2k',
    favorites: '389',
    comments: '187',
    date: '2024-01-20',
    bestSeason: '春秋',
    locations: ['瑞士·阿尔卑斯山脉', '中国·黄山', '美国·落基山脉', '新西兰·南阿尔卑斯山脉'],
    tips: ['选择日出或日落时分，光线最柔和', '提前了解天气状况，云海出现的概率', '携带广角镜头，捕捉广阔的山景', '注意安全，选择安全的拍摄位置'],
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
    locations: ['美国·纽约', '中国·上海', '阿联酋·迪拜', '新加坡'],
    tips: ['选择高处拍摄点，如观景台或摩天大楼', '黄金时刻拍摄，城市灯光和自然光平衡', '使用三脚架，保证画面清晰', '尝试不同角度，寻找独特的构图'],
    navigation: { dimension: 'theme', category: 'urban', subCategory: 'skyline' },
  },
  {
    id: 4,
    title: '海滩日落',
    category: '海边风光',
    image: `${OSS}/5.webp`,
    description: '追逐最美的海滩日落，记录夕阳西下的浪漫时刻',
    views: '10.7k',
    likes: '1.5k',
    favorites: '423',
    comments: '203',
    date: '2024-01-15',
    bestSeason: '夏季',
    locations: ['马尔代夫', '巴厘岛·库塔海滩', '夏威夷·威基基海滩', '澳大利亚·黄金海岸'],
    tips: ['提前到达拍摄地点，占据最佳位置', '使用渐变滤镜，平衡天空和地面曝光', '捕捉海浪和沙滩的纹理，增加画面细节', '尝试不同的构图，如三分法或引导线'],
    navigation: { dimension: 'theme', category: 'water', subCategory: 'beach' },
  },
]

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
    tips: '夏季可看午夜阳光，冬季可观赏极光',
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
    tips: '春季气候宜人，适合徒步和摄影',
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

export const mainNavs = [
  { path: '/landscape/home', name: '首页', icon: '🏠' },
  { path: '/landscape/category', name: '分类', icon: '📁' },
  { path: '/landscape/guides', name: '指南攻略', icon: '📖' },
  { path: '/landscape/photographers', name: '摄影师', icon: '👤' },
  { path: '/landscape/profile', name: '我的', icon: '⚙️' },
]

export const contentTabs = [
  { key: 'all', label: '全部', icon: '⊞' },
  { key: 'photo', label: '图片', icon: '⊡' },
  { key: 'video', label: '视频', icon: '▶' },
  { key: 'guide', label: '攻略', icon: '⊞' },
]

export const filterTags = [
  { id: 'all', name: '全部', icon: '📷', count: 8 },
  { id: '风光', name: '风光', icon: '⛰️', count: 3 },
  { id: '星空', name: '星空', icon: '🌟', count: 2 },
  { id: '城市', name: '城市', icon: '🏙️', count: 2 },
  { id: '夜景', name: '夜景', icon: '🌙', count: 1 },
  { id: '自然', name: '自然', icon: '🌿', count: 2 }
]

export const sortOptions = [
  { value: 'default', label: '默认排序' },
  { value: 'works', label: '作品数最多' },
  { value: 'likes', label: '点赞数最多' },
  { value: 'followers', label: '粉丝数最多' },
  { value: 'active', label: '最近活跃' }
]

export const guideSortOptions = [
  { value: 'latest', label: '最新' },
  { value: 'views', label: '最多浏览' },
  { value: 'likes', label: '最多点赞' },
  { value: 'loves', label: '最多喜爱' },
  { value: 'bookmarks', label: '最多收藏' },
  { value: 'shares', label: '最多分享' },
]

export const rankingTabs = [
  { value: 'works', label: '作品数', icon: '📸' },
  { value: 'followers', label: '粉丝数', icon: '👥' },
  { value: 'likes', label: '点赞数', icon: '❤️' },
  { value: 'views', label: '浏览量', icon: '👁️' }
]

export const hotTags = [
  { id: 'aurora', name: '极光', count: 1234 },
  { id: 'mountain', name: '山岳', count: 987 },
  { id: 'city', name: '城市', count: 876 },
  { id: 'beach', name: '海滩', count: 765 },
]

export const mediaTypes: Array<{ id: 'all' | 'image' | 'video'; label: string; icon: string }> = [
  { id: 'all', label: '全部', icon: '📊' },
  { id: 'image', label: '图片', icon: '🖼️' },
  { id: 'video', label: '视频', icon: '🎬' },
]

export const quickFilters: Array<{ id: string; label: string; icon: string }> = [
  { id: 'latest', label: '最新', icon: '🆕' },
  { id: 'most-views', label: '最多浏览', icon: '👁️' },
  { id: 'most-likes', label: '最多点赞', icon: '👍' },
  { id: 'most-loves', label: '最多喜爱', icon: '❤️' },
  { id: 'most-favorites', label: '最多收藏', icon: '🔖' },
  { id: 'most-shares', label: '最多分享', icon: '🔗' },
]

export const typeFilters = [
  { value: 'image', label: '图片', icon: '🖼️' },
  { value: 'video', label: '视频', icon: '🎬' },
  { value: 'guide', label: '攻略', icon: '📖' },
  { value: 'photographer', label: '摄影师', icon: '👤' }
]

export const userProfile = {
  id: 'user-1',
  name: '风光摄影爱好者',
  title: '星空追逐者',
  avatar: `${OSS}/1.webp`,
  bio: '用镜头记录宇宙的浩瀚与大地的壮美，在光影中寻找永恒的瞬间',
  location: '中国·北京',
  joinDate: '2024年加入',
  tags: ['风光', '星空', '城市'],
  verified: false,
  stats: {
    works: 12,
    favorites: 0,
    likes: 0,
    following: 0,
  }
}

export const profileTabs = [
  { key: 'favorites', name: '我的收藏', icon: '❤️' },
  { key: 'likes', name: '我的喜欢', icon: '⭐' },
  { key: 'uploads', name: '我的上传', icon: '📤' },
  { key: 'following', name: '我的关注', icon: '👤' },
]

export const profileCategories = [
  { id: 'image', name: '图片', icon: '🖼️' },
  { id: 'video', name: '视频', icon: '🎬' },
  { id: 'guide', name: '攻略', icon: '📖' },
  { id: 'photographer', name: '摄影师', icon: '👤' },
]

export const seasonMap: Record<string, string> = {
  spring: '春季',
  summer: '夏季',
  autumn: '秋季',
  winter: '冬季',
  all: '四季皆宜',
}

export const difficultyMap: Record<string, string> = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
  expert: '专家级',
}

export const travelModeMap: Record<string, { class: string; icon: string; title: string; subtitle: string }> = {
  self: { class: 'self-drive', icon: '🚗', title: '自驾游', subtitle: '自由探索' },
  group: { class: 'group-tour', icon: '👥', title: '跟团游', subtitle: '省心省力' },
  guide: { class: 'guided', icon: '🗺️', title: '向导游', subtitle: '深度体验' },
  hiking: { class: 'hiking', icon: '🥾', title: '徒步游', subtitle: '亲近自然' },
}

export const workTypes = ['photo', 'video', 'guide', 'panorama', 'timelapse', 'aerial', 'longexp', 'startrail', 'hdr']

export const workTypeConfigs: Record<string, { icon: string; name: string; format: string }> = {
  photo: { icon: '📷', name: '照片', format: 'JPG' },
  video: { icon: '🎬', name: '视频', format: 'MP4' },
  guide: { icon: '📖', name: '攻略', format: 'PDF' },
  panorama: { icon: '🌅', name: '全景', format: 'JPG' },
  timelapse: { icon: '⏱️', name: '延时', format: 'MP4' },
  aerial: { icon: '🚁', name: '航拍', format: 'JPG' },
  longexp: { icon: '✨', name: '长曝光', format: 'JPG' },
  startrail: { icon: '⭐', name: '星轨', format: 'JPG' },
  hdr: { icon: '🌈', name: 'HDR', format: 'JPG' },
}

export const workTypeIcons: Record<string, string> = Object.fromEntries(
  Object.entries(workTypeConfigs).map(([k, v]) => [k, v.icon])
) as Record<string, string>

export const workTypeLabels: Record<string, string> = Object.fromEntries(
  Object.entries(workTypeConfigs).map(([k, v]) => [k, v.name])
) as Record<string, string>

export const travelModes = [
  { id: 'self-drive', label: '自驾游', icon: '🚗', count: 0 },
  { id: 'group-tour', label: '跟团游', icon: '👥', count: 0 },
  { id: 'guided', label: '向导游', icon: '🗺️', count: 0 },
  { id: 'hiking', label: '徒步游', icon: '🥾', count: 0 },
  { id: 'cycling', label: '骑行游', icon: '🚴', count: 0 },
  { id: 'backpacking', label: '背包游', icon: '🎒', count: 0 },
  { id: 'photography-tour', label: '摄影团', icon: '📸', count: 0 },
  { id: 'cruise', label: '邮轮游', icon: '🚢', count: 0 },
  { id: 'rv-camping', label: '房车游', icon: '🚐', count: 0 },
  { id: 'train-travel', label: '火车游', icon: '🚄', count: 0 },
]

export const naturalScenery = [
  { id: 'mountain', label: '山岳', icon: '⛰️', count: 0 },
  { id: 'ocean', label: '海洋', icon: '🌊', count: 0 },
  { id: 'forest', label: '森林', icon: '🌲', count: 0 },
  { id: 'desert', label: '沙漠', icon: '🏜️', count: 0 },
  { id: 'lake', label: '湖泊', icon: '💧', count: 0 },
  { id: 'waterfall', label: '瀑布', icon: '💦', count: 0 },
  { id: 'grassland', label: '草原', icon: '🌾', count: 0 },
  { id: 'glacier', label: '冰川', icon: '🏔️', count: 0 },
  { id: 'canyon', label: '峡谷', icon: '🏔️', count: 0 },
  { id: 'cave', label: '溶洞', icon: '🕳️', count: 0 },
  { id: 'coastline', label: '海岸线', icon: '🏖️', count: 0 },
  { id: 'island', label: '岛屿', icon: '🏝️', count: 0 },
  { id: 'wetland', label: '湿地', icon: '🦆', count: 0 },
]

export const weatherScenery = [
  { id: 'aurora', label: '极光', icon: '🌌', count: 0 },
  { id: 'sunrise', label: '日出', icon: '🌅', count: 0 },
  { id: 'sunset', label: '日落', icon: '🌇', count: 0 },
  { id: 'clouds', label: '云海', icon: '☁️', count: 0 },
  { id: 'rainbow', label: '彩虹', icon: '🌈', count: 0 },
  { id: 'starry', label: '星空', icon: '⭐', count: 0 },
  { id: 'fog', label: '雾景', icon: '🌫️', count: 0 },
  { id: 'lightning', label: '雷电', icon: '⚡', count: 0 },
  { id: 'snow-scene', label: '雪景', icon: '❄️', count: 0 },
]

export const seasonalScenery = [
  { id: 'spring-flowers', label: '春季花海', icon: '🌸', count: 0 },
  { id: 'summer-green', label: '夏季绿荫', icon: '🌿', count: 0 },
  { id: 'autumn-leaves', label: '秋季红叶', icon: '🍂', count: 0 },
  { id: 'winter-snow', label: '冬季雪景', icon: '❄️', count: 0 },
  { id: 'cherry-blossom', label: '樱花季', icon: '🌼', count: 0 },
  { id: 'lavender', label: '薰衣草季', icon: '💜', count: 0 },
  { id: 'rapeseed', label: '油菜花季', icon: '💛', count: 0 },
  { id: 'ginkgo', label: '银杏季', icon: '💛', count: 0 },
]

export const culturalScenery = [
  { id: 'ancient', label: '古迹遗址', icon: '🏛️', count: 0 },
  { id: 'city', label: '都市风光', icon: '🏙️', count: 0 },
  { id: 'village', label: '乡村田园', icon: '🏘️', count: 0 },
  { id: 'festival', label: '节庆活动', icon: '🎭', count: 0 },
  { id: 'temple', label: '宗教建筑', icon: '⛩️', count: 0 },
  { id: 'museum', label: '博物馆', icon: '🏛️', count: 0 },
  { id: 'castle', label: '城堡宫殿', icon: '🏰', count: 0 },
  { id: 'market', label: '市集文化', icon: '🛒', count: 0 },
]

export const wildlifeScenery = [
  { id: 'birds', label: '鸟类摄影', icon: '🦅', count: 0 },
  { id: 'mammals', label: '哺乳动物', icon: '🦁', count: 0 },
  { id: 'marine', label: '海洋生物', icon: '🐋', count: 0 },
  { id: 'insects', label: '昆虫微距', icon: '🦋', count: 0 },
  { id: 'safari', label: '野生动物', icon: '🦒', count: 0 },
  { id: 'panda', label: '大熊猫', icon: '🐼', count: 0 },
  { id: 'penguin', label: '企鹅', icon: '🐧', count: 0 },
]

export const locations = [
  { id: 'china', label: '中国', icon: '🇨🇳', count: 0 },
  { id: 'asia', label: '亚洲', icon: '🌏', count: 0 },
  { id: 'europe', label: '欧洲', icon: '🌍', count: 0 },
  { id: 'north-america', label: '北美洲', icon: '🌎', count: 0 },
  { id: 'south-america', label: '南美洲', icon: '🌎', count: 0 },
  { id: 'africa', label: '非洲', icon: '🌍', count: 0 },
  { id: 'oceania', label: '大洋洲', icon: '🌏', count: 0 },
  { id: 'antarctica', label: '南极洲', icon: '🐧', count: 0 },
]

export const seasons = [
  { id: 'spring', label: '春季', icon: '🌸', count: 0 },
  { id: 'summer', label: '夏季', icon: '☀️', count: 0 },
  { id: 'autumn', label: '秋季', icon: '🍂', count: 0 },
  { id: 'winter', label: '冬季', icon: '❄️', count: 0 },
  { id: 'all-year', label: '四季皆宜', icon: '🌈', count: 0 },
]

export const durations = [
  { id: '1-3', label: '1-3天', icon: '📅', count: 0 },
  { id: '4-7', label: '4-7天', icon: '📅', count: 0 },
  { id: '8-14', label: '8-14天', icon: '📅', count: 0 },
  { id: '15-30', label: '15-30天', icon: '📅', count: 0 },
  { id: '30+', label: '30天以上', icon: '📅', count: 0 },
]

export const budgetRanges = [
  { id: 'budget', label: '经济型 (¥0-3000)', icon: '💰', count: 0 },
  { id: 'moderate', label: '舒适型 (¥3000-8000)', icon: '💵', count: 0 },
  { id: 'luxury', label: '豪华型 (¥8000-20000)', icon: '💎', count: 0 },
  { id: 'premium', label: '顶级体验 (¥20000+)', icon: '👑', count: 0 },
]

export const difficultyLevels = [
  { id: 'easy', label: '轻松休闲', icon: '🚶', count: 0 },
  { id: 'moderate', label: '适度挑战', icon: '🥾', count: 0 },
  { id: 'challenging', label: '较大强度', icon: '⛰️', count: 0 },
  { id: 'extreme', label: '极限探险', icon: '🏔️', count: 0 },
]

export const groupTypes = [
  { id: 'solo', label: '独自旅行', icon: '🚶‍♂️', count: 0 },
  { id: 'couple', label: '情侣出游', icon: '💑', count: 0 },
  { id: 'family', label: '亲子家庭', icon: '👨‍👩‍👧‍👦', count: 0 },
  { id: 'friends', label: '好友结伴', icon: '👥', count: 0 },
  { id: 'senior', label: '银发族', icon: '👴', count: 0 },
]

export const photographyThemes = [
  { id: 'landscape', label: '风光摄影', icon: '🌄', count: 0 },
  { id: 'portrait', label: '人像摄影', icon: '👤', count: 0 },
  { id: 'street', label: '街头摄影', icon: '🏙️', count: 0 },
  { id: 'night', label: '夜景摄影', icon: '🌃', count: 0 },
  { id: 'aerial', label: '航拍摄影', icon: '🚁', count: 0 },
  { id: 'macro', label: '微距摄影', icon: '🔬', count: 0 },
  { id: 'timelapse', label: '延时摄影', icon: '⏱️', count: 0 },
]

export const specialExperiences = [
  { id: 'camping', label: '露营体验', icon: '⛺', count: 0 },
  { id: 'sunrise-chase', label: '追光之旅', icon: '🌅', count: 0 },
  { id: 'star-watching', label: '观星之旅', icon: '⭐', count: 0 },
  { id: 'wildlife-safari', label: '野生动物', icon: '🦁', count: 0 },
  { id: 'cultural-immersion', label: '文化沉浸', icon: '🎭', count: 0 },
  { id: 'photography-workshop', label: '摄影工作坊', icon: '📸', count: 0 },
  { id: 'diving', label: '潜水体验', icon: '🤿', count: 0 },
  { id: 'skiing', label: '滑雪之旅', icon: '⛷️', count: 0 },
  { id: 'hot-spring', label: '温泉养生', icon: '♨️', count: 0 },
  { id: 'road-trip', label: '公路旅行', icon: '🛣️', count: 0 },
  { id: 'island-hopping', label: '跳岛游', icon: '🏝️', count: 0 },
  { id: 'food-tour', label: '美食之旅', icon: '🍜', count: 0 },
]

export const guideTypes = [
  { id: 'itinerary', label: '行程攻略', icon: '📍', count: 0 },
  { id: 'photography', label: '摄影攻略', icon: '📷', count: 0 },
  { id: 'food', label: '美食攻略', icon: '🍜', count: 0 },
  { id: 'accommodation', label: '住宿攻略', icon: '🏨', count: 0 },
  { id: 'transportation', label: '交通攻略', icon: '🚄', count: 0 },
  { id: 'shopping', label: '购物攻略', icon: '🛍️', count: 0 },
  { id: 'budget-guide', label: '省钱攻略', icon: '💰', count: 0 },
  { id: 'tips', label: '避坑指南', icon: '⚠️', count: 0 },
  { id: 'equipment', label: '装备清单', icon: '🎒', count: 0 },
  { id: 'visa', label: '签证攻略', icon: '📄', count: 0 },
]

export const ratingFilters = [
  { id: 'top-rated', label: '高分精选', icon: '⭐⭐⭐⭐⭐', count: 0 },
  { id: 'popular', label: '热门推荐', icon: '🔥', count: 0 },
  { id: 'trending', label: '新晋热门', icon: '📈', count: 0 },
  { id: 'classic', label: '经典攻略', icon: '📚', count: 0 },
  { id: 'most-bookmarked', label: '最多收藏', icon: '🔖', count: 0 },
]

export const contentStyles = [
  { id: 'practical', label: '实用干货', icon: '📋', count: 0 },
  { id: 'inspirational', label: '灵感美图', icon: '✨', count: 0 },
  { id: 'storytelling', label: '游记故事', icon: '📖', count: 0 },
  { id: 'professional', label: '专业教程', icon: '🎓', count: 0 },
  { id: 'quick-tips', label: '速查手册', icon: '⚡', count: 0 },
]

export const seasonalEvents = [
  { id: 'chinese-new-year', label: '春节假期', icon: '🧧', count: 0 },
  { id: 'national-day', label: '国庆长假', icon: '🇨🇳', count: 0 },
  { id: 'labor-day', label: '五一假期', icon: '🌸', count: 0 },
  { id: 'mid-autumn', label: '中秋假期', icon: '🌙', count: 0 },
  { id: 'summer-vacation', label: '暑期档', icon: '☀️', count: 0 },
  { id: 'winter-vacation', label: '寒假档', icon: '❄️', count: 0 },
  { id: 'cherry-season', label: '樱花季', icon: '🌸', count: 0 },
  { id: 'autumn-leaves', label: '红叶季', icon: '🍂', count: 0 },
  { id: 'aurora-season', label: '极光季', icon: '🌌', count: 0 },
]

export const detailedLocations = [
  { id: 'china', label: '中国', icon: '🇨🇳', count: 0 },
  { id: 'asia', label: '亚洲', icon: '🌏', count: 0 },
  { id: 'europe', label: '欧洲', icon: '🌍', count: 0 },
  { id: 'north-america', label: '北美洲', icon: '🌎', count: 0 },
  { id: 'south-america', label: '南美洲', icon: '🌎', count: 0 },
  { id: 'africa', label: '非洲', icon: '🌍', count: 0 },
  { id: 'oceania', label: '大洋洲', icon: '🌏', count: 0 },
  { id: 'antarctica', label: '南极洲', icon: '🐧', count: 0 },
]

export const photographyTechniques = [
  { id: 'long-exposure', label: '长曝光', icon: '⏱️', count: 0 },
  { id: 'hdr', label: 'HDR', icon: '🌈', count: 0 },
  { id: 'panorama', label: '全景接片', icon: '🔄', count: 0 },
  { id: 'timelapse', label: '延时摄影', icon: '⏳', count: 0 },
  { id: 'star-trail', label: '星轨拍摄', icon: '⭐', count: 0 },
  { id: 'light-painting', label: '光绘摄影', icon: '💡', count: 0 },
  { id: 'aerial', label: '航拍技巧', icon: '🚁', count: 0 },
  { id: 'macro', label: '微距拍摄', icon: '🔬', count: 0 },
  { id: 'night', label: '夜景拍摄', icon: '🌃', count: 0 },
  { id: 'golden-hour', label: '黄金时刻', icon: '✨', count: 0 },
]

export const guideModeMap: Record<string, string> = {
  'self-drive': '自驾游',
  'group-tour': '跟团游',
  'guided': '向导游',
  'hiking': '徒步游',
  'cycling': '骑行游',
  'backpacking': '背包游',
  'photography-tour': '摄影团',
  'cruise': '邮轮游',
  'rv-camping': '房车游',
  'train-travel': '火车游',
}

export const guideSeasonMap: Record<string, string> = {
  'spring': '春季',
  'summer': '夏季',
  'autumn': '秋季',
  'winter': '冬季',
  'all-year': '全年',
}

export const guideDurationMap: Record<string, string> = {
  '1-3': '1-3天',
  '4-7': '4-7天',
  '8-14': '8-14天',
  '15-30': '15-30天',
  '30+': '30天以上',
}

export const guideThemeMap: Record<string, string> = {
  'mountain': '山岳',
  'ocean': '海洋',
  'forest': '森林',
  'desert': '沙漠',
  'lake': '湖泊',
  'waterfall': '瀑布',
  'grassland': '草原',
  'glacier': '冰川',
  'canyon': '峡谷',
  'cave': '溶洞',
  'coastline': '海岸线',
  'island': '岛屿',
  'wetland': '湿地',
  'aurora': '极光',
  'sunrise': '日出',
  'sunset': '日落',
  'clouds': '云海',
  'rainbow': '彩虹',
  'starry': '星空',
  'fog': '雾景',
  'lightning': '雷电',
  'snow-scene': '雪景',
  'spring-flowers': '春季花海',
  'summer-green': '夏季绿荫',
  'autumn-leaves': '秋季红叶',
  'winter-snow': '冬季雪景',
  'cherry-blossom': '樱花季',
  'lavender': '薰衣草季',
  'rapeseed': '油菜花季',
  'ginkgo': '银杏季',
  'ancient': '古迹遗址',
  'city': '都市风光',
  'village': '乡村田园',
  'festival': '节庆活动',
  'temple': '宗教建筑',
  'museum': '博物馆',
  'castle': '城堡宫殿',
  'market': '市集文化',
  'birds': '鸟类摄影',
  'mammals': '哺乳动物',
  'marine': '海洋生物',
  'insects': '昆虫微距',
  'safari': '野生动物',
  'panda': '大熊猫',
  'penguin': '企鹅',
}

export const categories: Category[] = [
  { id: 'all', name: '全部', icon: '🌍', count: 156 },
  { id: 'mountain', name: '山川', icon: '⛰️', count: 42 },
  { id: 'ocean', name: '海洋', icon: '🌊', count: 38 },
  { id: 'forest', name: '森林', icon: '🌲', count: 35 },
  { id: 'sunset', name: '日落', icon: '🌅', count: 28 },
  { id: 'city', name: '城市', icon: '🏙️', count: 25 },
  { id: 'desert', name: '沙漠', icon: '🏜️', count: 18 },
  { id: 'snow', name: '雪景', icon: '❄️', count: 20 },
]

export const cachedViews = ['Home', 'Category', 'Photographers', 'Profile', 'Guides'] as const
export const MIN_LOAD_TIME = 300

export const masonryCardHeights = [
  240, 320, 280, 360, 300, 260, 340, 290, 
  310, 270, 350, 250, 330, 380, 285, 315,
  295, 335, 305, 275, 365, 255, 325, 375
]

export const typeToTravelMode: Record<string, string> = {
  'deep-tour': 'self-drive',
  'photo-tour': 'photo-travel',
  'self-drive': 'self-drive',
  'hiking': 'hiking',
  'free-travel': 'free-travel',
  'group-travel': 'group-travel',
  'camping': 'camping',
  'cruise': 'cruise',
  'cycling': 'cycling',
}

export const ProfileSpecialtyOptions = [
  '风光',
  '人像',
  '纪实',
  '商业',
  '建筑',
  '美食',
  '婚礼',
  '体育',
  '动物',
  '微距',
] as const

export const SearchPhotographerSortOptions = [
  { value: 'relevance', label: '综合推荐' },
  { value: 'latest', label: '最新发布' },
  { value: 'followers', label: '最多关注' },
  { value: 'works', label: '最多作品' },
  { value: 'likes', label: '最多点赞' },
  { value: 'bookmarks', label: '最多收藏' },
] as const

export const SearchContentSortOptions = [
  { value: 'relevance', label: '综合推荐' },
  { value: 'latest', label: '最新发布' },
  { value: 'views', label: '最多浏览' },
  { value: 'likes', label: '最多点赞' },
  { value: 'bookmarks', label: '最多收藏' },
  { value: 'shares', label: '最多分享' },
] as const

export const CopyrightOptions = [
  { label: '保留所有权利', value: '保留所有权利' },
  { label: 'CC BY', value: 'CC BY' },
  { label: 'CC BY-SA', value: 'CC BY-SA' },
  { label: 'CC BY-NC', value: 'CC BY-NC' },
  { label: 'CC0', value: 'CC0' },
] as const

export const PhotographyQualityOptions = [
  { label: '原图', value: '原图' },
  { label: '高清', value: '高清' },
  { label: '标清', value: '标清' },
] as const

export const WatermarkPositionOptions = [
  { label: '右下角', value: '右下角' },
  { label: '左下角', value: '左下角' },
  { label: '右上角', value: '右上角' },
  { label: '左上角', value: '左上角' },
  { label: '居中', value: '居中' },
] as const

export const UploadQualityOptions = [
  { label: '高质量', value: '高质量' },
  { label: '平衡', value: '平衡' },
  { label: '节省空间', value: '节省空间' },
] as const

export const UploadPrivacyOptions = [
  { label: '公开', value: 'public' },
  { label: '仅关注者', value: 'followers' },
  { label: '私有', value: 'private' },
] as const

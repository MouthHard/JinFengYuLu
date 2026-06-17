/**
 * 指南模块常量
 * 包含：旅行模式、风景类型、指南类型、评分过滤、内容风格等
 */

// ====== 旅行模式配置 ======
export const travelModeMap: Record<string, { class: string; icon: string; title: string; subtitle: string }> = {
  'self-drive': { class: 'self-drive', icon: '🚗', title: '自驾游', subtitle: '自由探索' },
  'rv-camping': { class: 'rv-travel', icon: '🏕️', title: '房车游', subtitle: '移动的家' },
  'motorcycle-tour': { class: 'motorcycle-tour', icon: '🏍️', title: '摩旅', subtitle: '风驰电掣' },
  'chartered-tour': { class: 'chartered-tour', icon: '🚙', title: '包车游', subtitle: '舒适便捷' },
  'train-travel': { class: 'train-travel', icon: '🚂', title: '火车游', subtitle: '慢享旅途' },
  'cruise': { class: 'cruise', icon: '🚢', title: '邮轮游', subtitle: '海上度假' },
  'hiking': { class: 'hiking', icon: '🥾', title: '徒步游', subtitle: '亲近自然' },
  'cycling': { class: 'cycling', icon: '🚴', title: '骑行游', subtitle: '绿色出行' },
  'group-tour': { class: 'group-tour', icon: '👥', title: '跟团游', subtitle: '省心省力' },
  'guided': { class: 'guided', icon: '🧭', title: '向导游', subtitle: '深度体验' },
  'photography-tour': { class: 'photo-travel', icon: '📷', title: '摄影团', subtitle: '光影艺术' },
  'backpacking': { class: 'backpacking', icon: '🎒', title: '背包游', subtitle: '自由随性' },
}

// ====== 旅行模式列表 ======
export const travelModes = [
  // 【公路系】4种路上方式
  { id: 'self-drive', label: '自驾游', icon: '🚗', count: 0 },
  { id: 'rv-camping', label: '房车游', icon: '🏕️', count: 0 },
  { id: 'motorcycle-tour', label: '摩旅', icon: '🏍️', count: 0 },
  { id: 'chartered-tour', label: '包车游', icon: '🚙', count: 0 },
  // 【铁路/海上】2种专线交通
  { id: 'train-travel', label: '火车游', icon: '🚂', count: 0 },
  { id: 'cruise', label: '邮轮游', icon: '🚢', count: 0 },
  // 【人力/户外】2种自力方式
  { id: 'hiking', label: '徒步游', icon: '🥾', count: 0 },
  { id: 'cycling', label: '骑行游', icon: '🚴', count: 0 },
  // 【有组织】3种带服务的方式
  { id: 'group-tour', label: '跟团游', icon: '🚌', count: 0 },
  { id: 'guided', label: '向导游', icon: '🧭', count: 0 },
  { id: 'photography-tour', label: '摄影团', icon: '📷', count: 0 },
  // 【自由精神】1种旅行哲学
  { id: 'backpacking', label: '背包游', icon: '🎒', count: 0 },
]

// ====== 自然风景类型 ======
export const naturalScenery = [
  { id: 'mountain', label: '山岳', icon: '⛰️', count: 0 },
  { id: 'ocean', label: '海洋', icon: '🌊', count: 0 },
  { id: 'forest', label: '森林', icon: '🌲', count: 0 },
  { id: 'desert', label: '沙漠', icon: '🏜️', count: 0 },
  { id: 'lake', label: '湖泊', icon: '🏞️', count: 0 },
  { id: 'waterfall', label: '瀑布', icon: '💦', count: 0 },
  { id: 'grassland', label: '草原', icon: '🌾', count: 0 },
  { id: 'glacier', label: '冰川', icon: '🧊', count: 0 },
  { id: 'canyon', label: '峡谷', icon: '🏔️', count: 0 },
  { id: 'cave', label: '溶洞', icon: '🕳️', count: 0 },
  { id: 'coastline', label: '海岸线', icon: '🏖️', count: 0 },
  { id: 'island', label: '海岛', icon: '🏝️', count: 0 },
  { id: 'wetland', label: '湿地', icon: '🌫️', count: 0 },
]

// ====== 天气风景类型 ======
export const weatherScenery = [
  { id: 'aurora', label: '极光', icon: '🌌', count: 0 },
  { id: 'sunrise', label: '日出', icon: '🌅', count: 0 },
  { id: 'sunset', label: '日落', icon: '🌇', count: 0 },
  { id: 'clouds', label: '云海', icon: '☁️', count: 0 },
  { id: 'rainbow', label: '彩虹', icon: '🌈', count: 0 },
  { id: 'starry', label: '星空', icon: '🌟', count: 0 },
  { id: 'fog', label: '雾景', icon: '🌫️', count: 0 },
  { id: 'lightning', label: '闪电', icon: '⚡', count: 0 },
  { id: 'snow-scene', label: '雪景', icon: '❄️', count: 0 },
]

// ====== 季节性风景类型 ======
export const seasonalScenery = [
  { id: 'spring-flowers', label: '春天花开', icon: '🌸', count: 0 },
  { id: 'summer-green', label: '夏天绿意', icon: '🌿', count: 0 },
  { id: 'autumn-leaves', label: '秋天红叶', icon: '🍁', count: 0 },
  { id: 'winter-snow', label: '冬天雪景', icon: '❄️', count: 0 },
  { id: 'cherry-blossom', label: '樱花季', icon: '🌲', count: 0 },
  { id: 'lavender', label: '薰衣草季', icon: '💜', count: 0 },
  { id: 'rapeseed', label: '油菜花季', icon: '🌼', count: 0 },
  { id: 'ginkgo', label: '银杏季', icon: '🍂', count: 0 },
]

// ====== 文化风景类型 ======
export const culturalScenery = [
  { id: 'ancient', label: '古迹遗址', icon: '🏛️', count: 0 },
  { id: 'city', label: '城市风光', icon: '🏙️', count: 0 },
  { id: 'village', label: '乡村田园', icon: '🏡', count: 0 },
  { id: 'festival', label: '节庆活动', icon: '🎉', count: 0 },
  { id: 'temple', label: '宗教建筑', icon: '⛩️', count: 0 },
  { id: 'museum', label: '博物馆', icon: '🏛️', count: 0 },
  { id: 'castle', label: '城堡古迹', icon: '🏰', count: 0 },
  { id: 'market', label: '集市文化', icon: '🏪', count: 0 },
]

// ====== 野生动物摄影类型 ======
export const wildlifeScenery = [
  { id: 'birds', label: '鸟类摄影', icon: '🐦', count: 0 },
  { id: 'mammals', label: '哺乳动物', icon: '🦁', count: 0 },
  { id: 'marine', label: '海洋生物', icon: '🐙', count: 0 },
  { id: 'insects', label: '昆虫微距', icon: '🦋', count: 0 },
  { id: 'safari', label: '野生动物', icon: '🐘', count: 0 },
  { id: 'panda', label: '大熊猫', icon: '🐼', count: 0 },
  { id: 'penguin', label: '企鹅', icon: '🐧', count: 0 },
]

// ====== 地点筛选 ======
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

// ====== 季节筛选 ======
export const seasons = [
  { id: 'spring', label: '春季', icon: '🌸', count: 0 },
  { id: 'summer', label: '夏季', icon: '☀️', count: 0 },
  { id: 'autumn', label: '秋季', icon: '🍁', count: 0 },
  { id: 'winter', label: '冬季', icon: '❄️', count: 0 },
  { id: 'all-year', label: '四季皆宜', icon: '🌟', count: 0 },
]

// ====== 时长筛选 ======
export const durations = [
  { id: '1-3', label: '1-3天', icon: '📅', count: 0 },
  { id: '4-7', label: '4-7天', icon: '📅', count: 0 },
  { id: '8-14', label: '8-14天', icon: '📅', count: 0 },
  { id: '15-30', label: '15-30天', icon: '📅', count: 0 },
  { id: '30+', label: '30天以上', icon: '📅', count: 0 },
]

// ====== 预算范围筛选 ======
export const budgetRanges = [
  { id: 'budget', label: '经济型 (¥0-3000)', icon: '💵', count: 0 },
  { id: 'moderate', label: '舒适型 (¥3000-8000)', icon: '💰', count: 0 },
  { id: 'luxury', label: '奢华型 (¥8000-20000)', icon: '💎', count: 0 },
  { id: 'premium', label: '顶级体验 (¥20000+)', icon: '👑', count: 0 },
]

// ====== 难度等级筛选 ======
export const difficultyLevels = [
  { id: 'easy', label: '轻松休闲', icon: '😊', count: 0 },
  { id: 'moderate', label: '适度挑战', icon: '🥾', count: 0 },
  { id: 'challenging', label: '较大强度', icon: '⛰️', count: 0 },
  { id: 'extreme', label: '极限挑战', icon: '🏔️', count: 0 },
]

// ====== 出行人群筛选 ======
export const groupTypes = [
  { id: 'solo', label: '独自旅行', icon: '😎🧳', count: 0 },
  { id: 'couple', label: '情侣出游', icon: '💑', count: 0 },
  { id: 'family', label: '亲子家庭', icon: '👨👩👧👦', count: 0 },
  { id: 'friends', label: '朋友结伴', icon: '👥', count: 0 },
  { id: 'senior', label: '银发族', icon: '👴', count: 0 },
]

// ====== 摄影主题筛选 ======
export const photographyThemes = [
  { id: 'landscape', label: '风光摄影', icon: '📷', count: 0 },
  { id: 'portrait', label: '人像摄影', icon: '👤', count: 0 },
  { id: 'street', label: '街头摄影', icon: '🚶', count: 0 },
  { id: 'night', label: '夜景摄影', icon: '🌃', count: 0 },
  { id: 'aerial', label: '航拍摄影', icon: '🚁', count: 0 },
  { id: 'macro', label: '微距摄影', icon: '🔬', count: 0 },
  { id: 'timelapse', label: '延时摄影', icon: '⏱️', count: 0 },
]

// ====== 特色体验筛选 ======
export const specialExperiences = [
  { id: 'camping', label: '露营体验', icon: '⛺', count: 0 },
  { id: 'sunrise-chase', label: '追光之旅', icon: '🌅', count: 0 },
  { id: 'star-watching', label: '观星之旅', icon: '✨', count: 0 },
  { id: 'wildlife-safari', label: '野生动物', icon: '🦁', count: 0 },
  { id: 'cultural-immersion', label: '文化沉浸', icon: '🎭', count: 0 },
  { id: 'photography-workshop', label: '摄影工作坊', icon: '📷', count: 0 },
  { id: 'diving', label: '潜水体验', icon: '🤿', count: 0 },
  { id: 'skiing', label: '滑雪之旅', icon: '⛷️', count: 0 },
  { id: 'hot-spring', label: '温泉养生', icon: '♨️', count: 0 },
  { id: 'road-trip', label: '公路旅行', icon: '🛣️', count: 0 },
  { id: 'island-hopping', label: '跳岛游', icon: '🏝️', count: 0 },
  { id: 'food-tour', label: '美食之旅', icon: '🍜', count: 0 },
]

// ====== 指南类型筛选 ======
export const guideTypes = [
  { id: 'itinerary', label: '行程攻略', icon: '📍', count: 0 },
  { id: 'photography', label: '摄影攻略', icon: '📸', count: 0 },
  { id: 'food', label: '美食攻略', icon: '🍜', count: 0 },
  { id: 'accommodation', label: '住宿攻略', icon: '🏨', count: 0 },
  { id: 'transportation', label: '交通攻略', icon: '🚗', count: 0 },
  { id: 'shopping', label: '购物攻略', icon: '🛍️', count: 0 },
  { id: 'budget-guide', label: '省钱攻略', icon: '💵', count: 0 },
  { id: 'tips', label: '实用指南', icon: '💡', count: 0 },
  { id: 'equipment', label: '装备清单', icon: '🎒', count: 0 },
  { id: 'visa', label: '签证攻略', icon: '📋', count: 0 },
]

// ====== 评分过滤 ======
export const ratingFilters = [
  { id: 'top-rated', label: '高分好评', icon: '⭐⭐⭐', count: 0 },
  { id: 'popular', label: '热门推荐', icon: '🔥', count: 0 },
  { id: 'trending', label: '新晋热门', icon: '📈', count: 0 },
  { id: 'classic', label: '经典攻略', icon: '📚', count: 0 },
  { id: 'most-bookmarked', label: '最多收藏', icon: '🔖', count: 0 },
]

// ====== 内容风格筛选 ======
export const contentStyles = [
  { id: 'practical', label: '实用干货', icon: '📝', count: 0 },
  { id: 'inspirational', label: '灵感美图', icon: '💎', count: 0 },
  { id: 'storytelling', label: '游记故事', icon: '📖', count: 0 },
  { id: 'professional', label: '专业教程', icon: '📚', count: 0 },
  { id: 'quick-tips', label: '速查手册', icon: '💡', count: 0 },
]

// ====== 季节事件筛选 ======
export const seasonalEvents = [
  { id: 'chinese-new-year', label: '春节假期', icon: '🧧', count: 0 },
  { id: 'national-day', label: '国庆长假', icon: '🇨🇳', count: 0 },
  { id: 'labor-day', label: '五一假期', icon: '🌸', count: 0 },
  { id: 'mid-autumn', label: '中秋假期', icon: '🌕', count: 0 },
  { id: 'summer-vacation', label: '暑假', icon: '☀️', count: 0 },
  { id: 'winter-vacation', label: '寒假', icon: '❄️', count: 0 },
  { id: 'cherry-season', label: '樱花季', icon: '🌸', count: 0 },
  { id: 'autumn-leaves', label: '红叶季', icon: '🍁', count: 0 },
  { id: 'aurora-season', label: '极光季', icon: '🌌', count: 0 },
]

// ====== 详细地点列表（与 locations 相同但用于详情） ======
export const detailedLocations = [...locations]

// ====== 摄影技术筛选 ======
export const photographyTechniques = [
  { id: 'long-exposure', label: '长曝光', icon: '⏱️', count: 0 },
  { id: 'hdr', label: 'HDR', icon: '🌟', count: 0 },
  { id: 'panorama', label: '全景接片', icon: '🗺️', count: 0 },
  { id: 'timelapse', label: '延时摄影', icon: '⏰', count: 0 },
  { id: 'star-trail', label: '星轨拍摄', icon: '✨', count: 0 },
  { id: 'light-painting', label: '光绘摄影', icon: '🎨', count: 0 },
  { id: 'aerial', label: '航拍技术', icon: '🚁', count: 0 },
  { id: 'macro', label: '微距拍摄', icon: '🔬', count: 0 },
  { id: 'night', label: '夜景拍摄', icon: '🌃', count: 0 },
  { id: 'golden-hour', label: '黄金时刻', icon: '💛', count: 0 },
]

// ====== 映射表 ======
export const guideModeMap: Record<string, string> = {
  // 【公路系】
  'self-drive': '自驾游',
  'rv-camping': '房车游',
  'motorcycle-tour': '摩旅',
  'chartered-tour': '包车游',
  // 【铁路/海上】
  'train-travel': '火车游',
  'cruise': '邮轮游',
  // 【人力/户外】
  'hiking': '徒步游',
  'cycling': '骑行游',
  // 【有组织】
  'group-tour': '跟团游',
  'guided': '向导游',
  'photography-tour': '摄影团',
  // 【自由精神】
  'backpacking': '背包游',
}

// 中文旅行模式 → 过滤器ID（反向映射，用于首页跳转）
export const travelModeToFilterId: Record<string, string> = {
  // 【公路系】
  '自驾游': 'self-drive',
  '房车游': 'rv-camping',
  '摩旅': 'motorcycle-tour',
  '包车游': 'chartered-tour',
  // 【铁路/海上】
  '火车游': 'train-travel',
  '邮轮游': 'cruise',
  // 【人力/户外】
  '徒步游': 'hiking',
  '骑行游': 'cycling',
  // 【有组织】
  '跟团游': 'group-tour',
  '向导游': 'guided',
  '摄影团': 'photography-tour',
  // 【自由精神】
  '背包游': 'backpacking',
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

// 合并所有风景类型的映射
const allSceneryTypes = [
  ...naturalScenery,
  ...weatherScenery,
  ...seasonalScenery,
  ...culturalScenery,
  ...wildlifeScenery,
]

export const guideThemeMap: Record<string, string> = Object.fromEntries(
  allSceneryTypes.map(item => [item.id, item.label])
)

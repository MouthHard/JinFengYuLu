/**
 * Landscape 分类体系常量
 * 包含：主题、地点、时间、天气、技术、风格、元素等7大分类维度
 */

import type { Category } from '@/typesOfPages/landscape'
export type { Category }

// ============================================
// 一级分类: 主题分类
// ============================================
export const themeCategories: Category[] = [
  {
    id: 'nature',
    name: '自然风光',
    icon: '🌿',
    description: '大自然的壮美景色',
    children: [
      { id: 'mountain', name: '山岳', icon: '⛰️', description: '山峰、山脉、山峦' },
      { id: 'valley', name: '峡谷', icon: '⛰️', description: '峡谷、河谷、断层' },
      { id: 'forest', name: '森林', icon: '🌲', description: '森林、树林、丛林' },
      { id: 'grassland', name: '草原', icon: '🌾', description: '草原、草地' },
      { id: 'desert', name: '沙漠', icon: '🏜️', description: '沙漠、戈壁、沙丘' },
      { id: 'glacier', name: '冰川', icon: '🧊', description: '冰川、冰原、冰雪' },
      { id: 'field', name: '田野', icon: '🌾', description: '稻田、麦田、花田' },
    ]
  },
  {
    id: 'water',
    name: '水域风光',
    icon: '🌊',
    description: '江河湖海的美丽',
    children: [
      { id: 'ocean', name: '海洋', icon: '🌊', description: '大海、海洋、海浪' },
      { id: 'lake', name: '湖泊', icon: '🏞️', description: '湖泊、池塘、水库' },
      { id: 'river', name: '河流', icon: '🏞️', description: '河流、溪流、江水' },
      { id: 'waterfall', name: '瀑布', icon: '💦', description: '瀑布、溪流、流水' },
      { id: 'beach', name: '海滩', icon: '🏖️', description: '沙滩、海岸、海岛' },
      { id: 'wetland', name: '湿地', icon: '🌫️', description: '湿地、沼泽、滩涂' },
    ]
  },
  {
    id: 'sky',
    name: '天空风光',
    icon: '☁️',
    description: '天空的变幻奇观',
    children: [
      { id: 'clouds', name: '云层', icon: '☁️', description: '云层、云海' },
      { id: 'cloud-sea', name: '云海', icon: '🌫️', description: '云海翻涌、云海' },
      { id: 'morning-glow', name: '朝霞', icon: '🌅', description: '日出朝霞、晨光照射' },
      { id: 'evening-glow', name: '晚霞', icon: '🌇', description: '日落晚霞、余晖' },
      { id: 'starry', name: '星空', icon: '✨', description: '星空、银河、星轨' },
      { id: 'aurora', name: '极光', icon: '🌌', description: '极光、北极光、南极光' },
    ]
  },
  {
    id: 'urban',
    name: '城市风光',
    icon: '🏙️',
    description: '城市的现代之美',
    children: [
      { id: 'skyline', name: '天际线', icon: '🏙', description: '城市天际线、全景' },
      { id: 'architecture', name: '建筑', icon: '🏛️', description: '建筑、地标、高楼大厦' },
      { id: 'street', name: '街景', icon: '🛣️', description: '街道、巷弄、商圈' },
      { id: 'nightview', name: '夜景', icon: '🌃', description: '城市夜景、灯光' },
      { id: 'bridge', name: '桥梁', icon: '🌉', description: '桥梁、高架桥、斜拉桥' },
    ]
  },
  {
    id: 'season',
    name: '四季风光',
    icon: '🍁',
    description: '季节的独特魅力',
    children: [
      { id: 'spring', name: '春天', icon: '🌸', description: '春花、新绿、生机' },
      { id: 'summer', name: '夏天', icon: '☀️', description: '夏日、绿荫、活力' },
      { id: 'autumn', name: '秋天', icon: '🍄', description: '秋叶、金黄、收获' },
      { id: 'winter', name: '冬天', icon: '❄️', description: '冬雪、冰晶、雪景' },
    ]
  },
  {
    id: 'cultural',
    name: '人文风光',
    icon: '🏛️',
    description: '人文历史景观',
    children: [
      { id: 'ruins', name: '古迹', icon: '🏛️', description: '废墟、遗址、古建筑' },
      { id: 'garden', name: '园林', icon: '🌿', description: '公园、花园、中式园林' },
      { id: 'lighthouse', name: '灯塔', icon: '🔭', description: '灯塔、航标' },
      { id: 'windmill', name: '风车', icon: '💨', description: '风力风车、古老风车' },
    ]
  },
];

// ============================================
// 一级分类: 地点分类
// ============================================
export const locationCategories: Category[] = [
  {
    id: 'china',
    name: '中国',
    icon: '🇨🇳',
    description: '中华大地的美景',
    children: [
      { id: 'china-west', name: '西部', icon: '⛰️', description: '西藏、新疆、青海、内蒙古' },
      { id: 'china-south', name: '南方', icon: '🌿', description: '云南、广东、广西、海南' },
      { id: 'china-north', name: '北方', icon: '❄️', description: '黑龙江、吉林、辽宁、北京' },
      { id: 'china-east', name: '东部', icon: '🌊', description: '浙江、江苏、安徽、山东' },
      { id: 'china-central', name: '中部', icon: '⛰️', description: '四川、重庆、湖北、湖南' },
      { id: 'china-island', name: '海岛', icon: '🏝️', description: '台湾、海南岛、崇明岛' },
      { id: 'china-hk-mo', name: '港澳', icon: '🌆', description: '香港、澳门' },
    ]
  },
  {
    id: 'asia',
    name: '亚洲',
    icon: '🌏',
    description: '亚洲的多彩风情',
    children: [
      { id: 'japan', name: '日本', icon: '🗾', description: '樱花、富士山、古城' },
      { id: 'korea', name: '韩国', icon: '🇰🇷', description: '首尔、济州岛' },
      { id: 'southeast', name: '东南亚', icon: '🌴', description: '泰国、越南、柬埔寨、印尼' },
      { id: 'india', name: '印度', icon: '🇮🇳', description: '泰姬陵、恒河、喜马拉雅' },
      { id: 'middle-east', name: '中东', icon: '🕌', description: '埃及、以色列、伊朗' },
    ]
  },
  {
    id: 'europe',
    name: '欧洲',
    icon: '🌍',
    description: '欧洲的古老文明',
    children: [
      { id: 'western-europe', name: '西欧', icon: '🏰', description: '法国、英国、瑞士、荷兰' },
      { id: 'southern-europe', name: '南欧', icon: '🌊', description: '意大利、希腊、西班牙' },
      { id: 'northern-europe', name: '北欧', icon: '❄️', description: '冰岛、挪威、瑞典、芬兰' },
      { id: 'eastern-europe', name: '东欧', icon: '⛪', description: '捷克、匈牙利、波兰' },
    ]
  },
  {
    id: 'america',
    name: '美洲',
    icon: '🌎',
    description: '美洲的自然奇观',
    children: [
      { id: 'north-america', name: '北美', icon: '🦅', description: '美国、加拿大、墨西哥' },
      { id: 'south-america', name: '南美', icon: '🦜', description: '巴西、阿根廷、秘鲁、智利' },
      { id: 'central-america', name: '中美', icon: '🏝️', description: '哥斯达黎加、危地马拉' },
    ]
  },
  {
    id: 'africa',
    name: '非洲',
    icon: '🌍',
    description: '非洲的狂野之旅',
    children: [
      { id: 'north-africa', name: '北非', icon: '🏜️', description: '摩洛哥、撒哈拉沙漠' },
      { id: 'east-africa', name: '东非', icon: '🦁', description: '肯尼亚、坦桑尼亚、塞伦盖蒂' },
      { id: 'south-africa', name: '南非', icon: '🌿', description: '南非、纳米比亚、维多利亚瀑布' },
    ]
  },
  {
    id: 'oceania',
    name: '大洋洲',
    icon: '🌏',
    description: '大洋洲的海岛风情',
    children: [
      { id: 'australia', name: '澳大利亚', icon: '🐘', description: '大堡礁、悉尼、艾尔斯岩' },
      { id: 'new-zealand', name: '新西兰', icon: '🥝', description: '南岛、北岛、皇后镇' },
      { id: 'pacific', name: '太平洋岛屿', icon: '🏝️', description: '斐济、大溪地' },
    ]
  },
  {
    id: 'polar',
    name: '极地',
    icon: '❄️',
    description: '极地的纯净世界',
    children: [
      { id: 'arctic', name: '北极', icon: '🐻❄️', description: '北极地区、格陵兰、斯瓦尔巴' },
      { id: 'antarctic', name: '南极', icon: '🐧', description: '南极大陆、南极半岛' },
    ]
  },
];

// ============================================
// 一级分类: 时间分类
// ============================================
export const timeCategories: Category[] = [
  {
    id: 'daytime',
    name: '白天',
    icon: '☀️',
    description: '白天的光影变化',
    children: [
      { id: 'dawn', name: '黎明', icon: '🌅', description: '日出前的微光时段(05:00-06:00)' },
      { id: 'sunrise-time', name: '日出', icon: '🌅', description: '太阳升起时分(06:00-07:00)' },
      { id: 'morning-time', name: '上午', icon: '🌤️', description: '上午时光(07:00-11:00)' },
      { id: 'noon-time', name: '正午', icon: '☀️', description: '正午前后(11:00-13:00)' },
      { id: 'afternoon-time', name: '下午', icon: '🌤', description: '下午时光(13:00-16:00)' },
      { id: 'golden-hour', name: '黄金时刻', icon: '💛', description: '日出前或日落前的黄金光线(约1小时)' },
    ]
  },
  {
    id: 'nighttime',
    name: '夜晚',
    icon: '🌃',
    description: '夜晚的璀璨魅力',
    children: [
      { id: 'dusk', name: '黄昏', icon: '🌙', description: '日落前的橘红色调(16:00-18:00)' },
      { id: 'sunset-time', name: '日落', icon: '🌇', description: '太阳落下时分(18:00-19:00)' },
      { id: 'blue-hour', name: '蓝调时刻', icon: '🔵', description: '日出前或日落后的蓝调时刻(约30分钟)' },
      { id: 'night-time', name: '深夜', icon: '🌃', description: '深夜时段(19:00-24:00)' },
      { id: 'midnight', name: '午夜', icon: '🌌', description: '午夜时分(00:00-05:00)' },
    ]
  },
];

// ============================================
// 一级分类: 天气分类
// ============================================
export const weatherCategories: Category[] = [
  {
    id: 'clear-sky',
    name: '晴空',
    icon: '☀️',
    description: '晴朗的好天气',
    children: [
      { id: 'sunny', name: '晴天', icon: '☀️', description: '晴空万里' },
    ]
  },
  {
    id: 'cloudy-weather',
    name: '多云',
    icon: '☁️',
    description: '云层的变化',
    children: [
      { id: 'partly-cloudy', name: '少云', icon: '🌤️', description: '晴间多云' },
      { id: 'cloudy', name: '多云', icon: '☁️', description: '多云天气' },
      { id: 'overcast', name: '阴天', icon: '☁️', description: '阴天无阳' },
    ]
  },
  {
    id: 'precipitation',
    name: '降水',
    icon: '🌧️',
    description: '降水的洗礼',
    children: [
      { id: 'rain', name: '雨天', icon: '🌧️', description: '雨景' },
      { id: 'snow', name: '雪天', icon: '❄️', description: '雪景' },
      { id: 'hail', name: '冰雹', icon: '🧊', description: '冰雹天气' },
    ]
  },
  {
    id: 'atmospheric',
    name: '大气',
    icon: '🌫️',
    description: '大气的特殊效果',
    children: [
      { id: 'fog', name: '雾天', icon: '🌫️', description: '雾景' },
      { id: 'mist', name: '薄雾', icon: '🌫', description: '薄雾朦胧' },
      { id: 'haze', name: '霾', icon: '😷', description: '雾霾天气' },
    ]
  },
  {
    id: 'extreme',
    name: '极端',
    icon: '⛈️',
    description: '极端天气现象',
    children: [
      { id: 'storm', name: '暴风', icon: '⛈️', description: '暴风天气' },
      { id: 'lightning', name: '闪电', icon: '⚡', description: '闪电交加' },
      { id: 'tornado', name: '龙卷风', icon: '🌪️', description: '龙卷风' },
    ]
  },
  {
    id: 'optical',
    name: '光学现象',
    icon: '🌈',
    description: '大气光学现象',
    children: [
      { id: 'rainbow', name: '彩虹', icon: '🌈', description: '彩虹' },
      { id: 'halo', name: '日晕月晕', icon: '✨', description: '日晕、月晕、光晕' },
      { id: 'mirage', name: '海市蜃楼', icon: '🏜️', description: '海市蜃楼' },
    ]
  },
];

// ============================================
// 一级分类: 技术分类
// ============================================
export const techniqueCategories: Category[] = [
  {
    id: 'composition',
    name: '构图',
    icon: '📐',
    description: '构图技巧',
    children: [
      { id: 'rule-of-thirds', name: '三分法', icon: '📐', description: '经典三分构图' },
      { id: 'leading-lines', name: '引导线', icon: '➡️', description: '引导线构图' },
      { id: 'symmetry', name: '对称', icon: '🔲', description: '对称构图' },
      { id: 'framing', name: '框景', icon: '🖼️', description: '框景构图' },
      { id: 'minimalist-composition', name: '极简构图', icon: '🎯', description: '极简构图法' },
      { id: 'golden-ratio', name: '黄金比例', icon: '📐', description: '黄金比例构图' },
    ]
  },
  {
    id: 'exposure',
    name: '曝光',
    icon: '📸',
    description: '曝光技术',
    children: [
      { id: 'long-exposure', name: '长曝光', icon: '⏱️', description: '长曝光效果' },
      { id: 'multiple-exposure', name: '多重曝光', icon: '📷', description: '多重曝光' },
      { id: 'hdr-tech', name: 'HDR', icon: '🌟', description: '高动态范围' },
      { id: 'bracketing', name: '包围曝光', icon: '📳', description: '包围曝光' },
      { id: 'stacking', name: '堆栈合成', icon: '📚', description: '降噪、动态模糊合成' },
    ]
  },
  {
    id: 'perspective',
    name: '视角',
    icon: '👁️',
    description: '拍摄视角',
    children: [
      { id: 'aerial', name: '航拍', icon: '🚁', description: '无人机航拍' },
      { id: 'low-angle', name: '低角度', icon: '🔽', description: '低角度拍摄' },
      { id: 'high-angle', name: '高角度', icon: '🔼', description: '高角度俯拍' },
      { id: 'panorama', name: '全景', icon: '🗺️', description: '全景接片' },
      { id: '360-panorama', name: '360°全景', icon: '🔄', description: '360度全景' },
      { id: 'macro', name: '微距', icon: '🔬', description: '微距摄影' },
    ]
  },
  {
    id: 'special-tech',
    name: '特殊技术',
    icon: '💎',
    description: '特殊拍摄技术',
    children: [
      { id: 'timelapse', name: '延时摄影', icon: '⏱️', description: '延时摄影' },
      { id: 'star-trail', name: '星轨', icon: '✨', description: '星轨拍摄' },
      { id: 'light-painting', name: '光绘', icon: '🎨', description: '光绘摄影' },
      { id: 'underwater', name: '水下', icon: '🤿', description: '水下摄影' },
      { id: 'infrared', name: '红外', icon: '🔴', description: '红外摄影' },
      { id: 'focus-stacking', name: '焦距合成', icon: '🔄', description: '多焦点景深融合' },
      { id: 'filter-usage', name: '滤镜', icon: '🎭', description: 'ND、GND、PL滤镜' },
    ]
  },
];

// ============================================
// 一级分类: 风格分类
// ============================================
export const styleCategories: Category[] = [
  {
    id: 'color-style',
    name: '色彩风格',
    icon: '🎨',
    description: '色彩的表现',
    children: [
      { id: 'warm-tone', name: '暖色调', icon: '🟠', description: '红黄暖色系' },
      { id: 'cool-tone', name: '冷色调', icon: '🔵', description: '蓝青冷色系' },
      { id: 'vibrant', name: '鲜艳', icon: '🌈', description: '高饱和度' },
      { id: 'muted', name: '柔和', icon: '🎨', description: '低饱和度' },
      { id: 'monochrome', name: '单色', icon: '⚫', description: '单色系' },
    ]
  },
  {
    id: 'mood',
    name: '情绪风格',
    icon: '🎭',
    description: '情绪的表现',
    children: [
      { id: 'dramatic', name: '戏剧', icon: '🎭', description: '戏剧化光影' },
      { id: 'peaceful', name: '宁静', icon: '😌', description: '宁静祥和' },
      { id: 'mysterious', name: '神秘', icon: '🌃', description: '神秘氛围' },
      { id: 'romantic', name: '浪漫', icon: '💕', description: '浪漫唯美' },
      { id: 'powerful', name: '震撼', icon: '💪', description: '震撼磅礴' },
    ]
  },
  {
    id: 'artistic',
    name: '艺术风格',
    icon: '🖼️',
    description: '艺术的表现',
    children: [
      { id: 'black-white', name: '黑白', icon: '⚫', description: '黑白摄影' },
      { id: 'vintage', name: '复古', icon: '📸', description: '复古风格' },
      { id: 'minimalist', name: '极简', icon: '🎯', description: '极简艺术风格' },
      { id: 'abstract', name: '抽象', icon: '🌀', description: '抽象艺术' },
      { id: 'painterly', name: '绘画感', icon: '🎨', description: '绘画风格' },
      { id: 'film-look', name: '胶片感', icon: '🎞️', description: '模拟胶片质感' },
      { id: 'cinematic', name: '电影感', icon: '🎥', description: '电影画面风格' },
      { id: 'high-key', name: '高调', icon: '☀️', description: '高调摄影' },
      { id: 'low-key', name: '低调', icon: '🌑', description: '低调摄影' },
    ]
  },
];

// ============================================
// 一级分类: 元素分类
// ============================================
export const elementCategories: Category[] = [
  {
    id: 'natural-element',
    name: '自然元素',
    icon: '🌿',
    description: '自然界的元素',
    children: [
      { id: 'single-tree', name: '孤树', icon: '🌳', description: '独棵树、老树' },
      { id: 'flowers', name: '花草', icon: '🌸', description: '花草、花卉' },
      { id: 'rocks', name: '岩石', icon: '🪨', description: '岩石、石头' },
      { id: 'ice', name: '冰雪', icon: '❄️', description: '冰雪、冰晶' },
      { id: 'reflection', name: '倒影', icon: '🪞', description: '水面倒影' },
      { id: 'birds', name: '飞鸟', icon: '🐦', description: '鸟类、飞鸟' },
      { id: 'wildlife', name: '野生动物', icon: '🦁', description: '野生动物' },
    ]
  },
  {
    id: 'human-element',
    name: '人文元素',
    icon: '🏛️',
    description: '人文景观',
    children: [
      { id: 'architectural-detail', name: '建筑细节', icon: '🏛️', description: '建筑局部、细节' },
      { id: 'roads', name: '道路', icon: '🛣️', description: '道路、小径' },
      { id: 'vehicles', name: '交通工具', icon: '🚗', description: '车、船、飞机' },
      { id: 'people', name: '人物', icon: '👥', description: '人物点缀' },
    ]
  },
  {
    id: 'special-element',
    name: '特殊元素',
    icon: '💎',
    description: '特殊的视觉元素',
    children: [
      { id: 'silhouette', name: '剪影', icon: '👤', description: '剪影效果' },
      { id: 'shadow', name: '影子', icon: '👤', description: '光影效果' },
      { id: 'texture', name: '纹理', icon: '📐', description: '纹理质感' },
      { id: 'pattern', name: '图案', icon: '🔲', description: '几何图案' },
      { id: 'hot-air-balloon', name: '热气球', icon: '🎈', description: '热气球' },
    ]
  },
];

// ============================================
// 所有分类组合
// ============================================
export const allCategories = {
  theme: themeCategories,
  location: locationCategories,
  time: timeCategories,
  weather: weatherCategories,
  technique: techniqueCategories,
  style: styleCategories,
  element: elementCategories,
};

// 分类类型定义
export interface CategoryGroup {
  key: string;
  name: string;
  icon: string;
  description: string;
  categories: Category[];
}

// 分类组
export const categoryGroups: CategoryGroup[] = [
  { key: 'theme', name: '主题', icon: '🎯', description: '按拍摄主题分类', categories: themeCategories },
  { key: 'location', name: '地点', icon: '📍', description: '按地理位置分类', categories: locationCategories },
  { key: 'time', name: '时间', icon: '🕐', description: '按拍摄时间分类', categories: timeCategories },
  { key: 'weather', name: '天气', icon: '🌤️', description: '按天气条件分类', categories: weatherCategories },
  { key: 'technique', name: '技术', icon: '📸', description: '按拍摄技术分类', categories: techniqueCategories },
  { key: 'style', name: '风格', icon: '🎨', description: '按照片风格分类', categories: styleCategories },
  { key: 'element', name: '元素', icon: '💎', description: '按画面元素分类', categories: elementCategories },
];

/**
 * TravelGuide 风光模块常量
 * 包含：标签页、文化主题、景观类型、最佳时间、季节等分类体系
 */

import type { SceneryTab, CultureTheme, LandscapeType, BestTime } from '@/typesOfPages/travelGuide';

/** 风光概览标签页 */
export const sceneryTabs: SceneryTab[] = [
  { id: 'overview', name: '概览', icon: '🏠' },
  { id: 'nature', name: '自然风光', icon: '🏔️' },
  { id: 'culture', name: '文化风情', icon: '🏛️' },
  { id: 'customs', name: '民俗特色', icon: '🎭' },
];

/** 文化风情主题分类（按主体功能/性质划分） */
export const cultureThemes: CultureTheme[] = [
  // 1. 历史遗迹 — 以"过去存在的痕迹"为主体价值
  { value: 'historical_site', name: '历史遗迹', icon: '🏯', description: '考古遗址、古城墙/古道、古代工程(非皇家)、历史战场' },

  // 2. 皇家宫苑 — 皇室专属
  { value: 'royal', name: '皇家宫苑', icon: '👑', description: '宫殿、皇陵、皇家园林、行宫、皇家坛庙' },

  // 3. 宗教圣地 — 所有宗教活动场所
  { value: 'religious', name: '宗教圣地', icon: '🕉️', description: '寺院、道观、佛塔、石窟寺、教堂、清真寺' },

  // 4. 园林古建 — 民间/艺术性建筑
  { value: 'garden_arch', name: '园林古建', icon: '🏛️', description: '私家园林、名楼名阁、古桥、民居聚落(土楼/窑洞/四合院)' },

  // 5. 现代地标 — 当代标志性建筑/区域
  { value: 'modern', name: '现代地标', icon: '🏙️', description: '摩天大楼、大桥、广场、新区、现代建筑群' },

  // 6. 博物展馆 — 收藏/展示性知识场馆
  { value: 'museum', name: '博物展馆', icon: '🎨', description: '博物馆、美术馆、科技馆、展览馆' },

  // 7. 非遗民俗 — 活态传统文化
  { value: 'folk_customs', name: '非遗民俗', icon: '🎭', description: '手工艺、戏曲、节庆、民族村寨、民俗体验' },

  // 8. 街区纪念 — 历史商住空间 + 缅怀纪念场所
  { value: 'street_memorial', name: '街区纪念', icon: '🏪', description: '历史街区、商业老街、胡同巷弄、纪念碑、名人故居' },
];

/** 自然风光景观类型（基于 GB/T 18972-2017 国标） */
export const landscapeTypes: LandscapeType[] = [
  // A. 地文景观 — 山地
  { value: 'mountain', name: '山地', label: '山地', icon: '⛰️', description: '山峰、山脉、丘陵、火山锥体等山地景观' },

  // B. 水域景观 — 所有水体
  { value: 'water', name: '水域', label: '水域', icon: '💧', description: '湖泊、河流、瀑布、湿地、温泉等水景' },

  // C. 海洋/岛礁 — 滨海类
  { value: 'coastal', name: '滨海岛屿', label: '滨海岛屿', icon: '🏖️', description: '海滩、海湾、海港、海岛、礁岛等海洋景观' },

  // D. 生物景观 — 植被
  { value: 'vegetation', name: '森林草原', label: '森林草原', icon: '🌲', description: '森林、草原、草甸、植物园等植被景观' },

  // E. 地貌奇观 — 特殊/罕见地貌
  { value: 'wonderland', name: '地貌奇观', label: '地貌奇观', icon: '🏜️', description: '沙漠戈壁、丹霞、喀斯特、冰川雪峰、峡谷溶洞、高原' },

  // F. 都市绿地 — 城市中的自然空间
  { value: 'urban_nature', name: '城市自然', label: '城市自然', icon: '🌳', description: '城市公园、植物园、湿地保护区等都市自然景观' },
];

/** 最佳游览时间选项 */
export const bestTimes: BestTime[] = [
  { value: 'spring', name: '春季', icon: '🌸' },
  { value: 'summer', name: '夏季', icon: '☀️' },
  { value: 'autumn', name: '秋季', icon: '🍂' },
  { value: 'winter', name: '冬季', icon: '❄️' },
];

/** 季节名称列表 */
export const seasons = ['春季', '夏季', '秋季', '冬季'] as const;

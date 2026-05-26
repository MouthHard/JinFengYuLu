import type { SceneryData } from '@/typesOfPages/travelGuide';

export const liaoningData: SceneryData = {
  overview: {
    totalSpots: 200,
    natureSpots: 90,
    cultureSpots: 110,
    topAttractions: [
      {
        name: '沈阳故宫',
        image: 'https://picsum.photos/id/1220/600/400',
        description: '中国仅存的两大宫殿建筑群之一',
      },
      {
        name: '大连金石滩',
        image: 'https://picsum.photos/id/1221/600/400',
        description: '国家级风景名胜区,拥有美丽的海滨风光',
      },
      {
        name: '老虎滩海洋公园',
        image: 'https://picsum.photos/id/1222/600/400',
        description: '中国最大的现代化海滨游乐场',
      },
      {
        name: '千山',
        image: 'https://picsum.photos/id/1223/600/400',
        description: '东北第一名山,道教圣地',
      },
      {
        name: '本溪水洞',
        image: 'https://picsum.photos/id/1224/600/400',
        description: '世界上最长的地下充水溶洞',
      },
      {
        name: '大连星海广场',
        image: 'https://picsum.photos/id/1225/600/400',
        description: '亚洲最大的城市广场',
      },
      {
        name: '北陵公园',
        image: 'https://picsum.photos/id/1226/600/400',
        description: '清朝皇太极的陵墓',
      },
      {
        name: '兴城古城',
        image: 'https://picsum.photos/id/1227/600/400',
        description: '保存完好的明代古城',
      },
    ],
  },
  spots: [
    {
      id: 'shenyangImperialPalace',
      name: '沈阳故宫',
      description: '中国仅存的两大宫殿建筑群之一',
      image: 'https://picsum.photos/id/1220/600/400',
      location: '辽宁省沈阳市沈河区',
      type: 'culture',
      bestTime: '春秋',
      tags: ['宫殿', '历史', '建筑', '皇家'],
      rating: 4.7,
    },
    {
      id: 'dalianJinshitan',
      name: '大连金石滩',
      description: '国家级风景名胜区,拥有美丽的海滨风光',
      image: 'https://picsum.photos/id/1221/600/400',
      location: '辽宁省大连市金州区',
      type: 'nature',
      bestTime: '夏季',
      tags: ['海滨', '地质', '自然', '度假'],
      rating: 4.6,
      landscapeType: 'coastal',
      landscapeCategory: ['水体景观'],
      landformTags: ['海滨景观'],
    },
    {
      id: 'laohutanOceanPark',
      name: '老虎滩海洋公园',
      description: '中国最大的现代化海滨游乐场',
      image: 'https://picsum.photos/id/1222/600/400',
      location: '辽宁省大连市中山区',
      type: 'nature',
      bestTime: '夏季',
      tags: ['海洋', '公园', '娱乐', '亲子'],
      rating: 4.5,
    },
    {
      id: 'qianshanMountain',
      name: '千山',
      description: '东北第一名山,道教圣地',
      image: 'https://picsum.photos/id/1223/600/400',
      location: '辽宁省鞍山市千山区',
      type: 'nature',
      bestTime: '春秋',
      tags: ['名山', '道教', '自然', '登山'],
      rating: 4.6,
      landscapeType: 'mountain',
      landscapeCategory: ['地理景观'],
      landformTags: ['山地景观'],
    },
    {
      id: 'benxiWaterCave',
      name: '本溪水洞',
      description: '世界上最长的地下充水溶洞',
      image: 'https://picsum.photos/id/1224/600/400',
      location: '辽宁省本溪市本溪满族自治县',
      type: 'nature',
      bestTime: '全年',
      tags: ['溶洞', '地质', '奇观', '探险'],
      rating: 4.5,
      landscapeType: 'cave',
      landscapeCategory: ['地理景观'],
      landformTags: ['洞穴景观'],
    },
    {
      id: 'dalianXinghaiSquare',
      name: '大连星海广场',
      description: '亚洲最大的城市广场',
      image: 'https://picsum.photos/id/1225/600/400',
      location: '辽宁省大连市沙河口区',
      type: 'culture',
      bestTime: '全年',
      tags: ['广场', '地标', '海滨', '现代'],
      rating: 4.6,
    },
  ],
  seasonal: [
    {
      name: '春季',
      description: '春暖花开,千山山花烂漫,是踏青赏花的好时节',
      image: 'https://picsum.photos/id/1223/600/400',
      activities: ['千山踏青', '沈阳故宫游览', '大连海滨漫步', '北陵公园赏花'],
    },
    {
      name: '夏季',
      description: '绿树成荫,大连海滨是避暑纳凉的好去处',
      image: 'https://picsum.photos/id/1221/600/400',
      activities: ['大连海滨度假', '金石滩游玩', '老虎滩海洋公园', '星海广场纳凉'],
    },
    {
      name: '秋季',
      description: '秋高气爽,千山红叶满山,是登山赏秋的好时节',
      image: 'https://picsum.photos/id/1223/600/400',
      activities: ['千山赏秋', '沈阳故宫秋游', '本溪水洞探险', '兴城古城游览'],
    },
    {
      name: '冬季',
      description: '银装素裹,是体验北国风情和冰雪活动的好时节',
      image: 'https://picsum.photos/id/1220/600/400',
      activities: ['冰雪活动', '沈阳故宫雪景', '温泉体验', '室内景点游览'],
    },
  ],
  activities: [
    {
      id: '1',
      name: '沈阳故宫游览',
      description: '游览清朝早期皇宫,了解清初历史',
      image: 'https://picsum.photos/id/1220/600/400',
      category: 'culture',
      location: '沈阳故宫',
      duration: '2-3小时',
      difficulty: '简单',
      type: '文化体验',
    },
    {
      id: '2',
      name: '大连海滨度假',
      description: '在大连海滨享受阳光沙滩',
      image: 'https://picsum.photos/id/1221/600/400',
      category: 'nature',
      location: '大连金石滩',
      duration: '1-2天',
      difficulty: '简单',
      type: '休闲度假',
    },
  ],
  routes: [
    {
      id: '1',
      name: '大连海滨之旅',
      title: '大连海滨之旅',
      description: '体验美丽的海滨风光',
      duration: '2天',
      difficulty: '简单',
      highlights: ['大连金石滩', '老虎滩海洋公园', '星海广场'],
      spots: ['大连金石滩', '老虎滩海洋公园', '星海广场'],
      tags: ['海滨', '度假', '休闲'],
      image: 'https://picsum.photos/id/1221/600/400',
      rating: 4.6,
      bestTime: '夏季',
      traffic: '地铁/公交',
      suitableFor: '所有游客',
    },
  ],
};

export const liaoningCustomsData = {
  activities: [
    {
      id: '1',
      name: '东北二人转',
      description: '观看东北特色的二人转表演',
      image: 'https://picsum.photos/id/1220/600/400',
      category: 'culture',
      location: '沈阳刘老根大舞台',
      duration: '2-3小时',
      difficulty: '简单',
      type: '文化体验',
    },
  ],
};

export const liaoningIntangibleHeritage = [
  {
    id: '1',
    name: '东北二人转',
    description: '东北地方戏曲,具有浓郁的地方特色',
    level: 'national',
    category: '传统戏剧',
    protectionUnit: '辽宁省艺术研究院',
    features: ['传统戏剧', '国家级非遗', '东北文化'],
    icon: '🎭',
    image: 'https://picsum.photos/id/1220/600/400',
  },
];

export const liaoningFolkCustomsElements = [
  {
    name: '东北二人转',
    description: '东北地方戏曲,幽默风趣',
    image: 'https://picsum.photos/id/1220/600/400',
    tags: ['传统曲艺', '东北文化', '幽默艺术', '非遗传承', '民间艺术'],
  },
];

export const liaoningFestivals = [
  {
    id: '1',
    name: '大连国际樱桃节',
    description: '大连特色水果节庆活动',
    month: '6月',
    day: '10日',
    location: '大连',
    isUnique: true,
  },
];

export default liaoningData;

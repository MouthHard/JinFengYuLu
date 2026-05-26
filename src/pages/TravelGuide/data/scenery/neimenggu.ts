import type { SceneryData } from '@/typesOfPages/travelGuide';

export const neimengguData: SceneryData = {
  overview: {
    totalSpots: 180,
    natureSpots: 120,
    cultureSpots: 60,
    topAttractions: [
      {
        name: '呼伦贝尔大草原',
        image: 'https://picsum.photos/id/1200/600/400',
        description: '世界三大草原之一,被誉为牧草王国',
      },
      {
        name: '阿尔山国家森林公园',
        image: 'https://picsum.photos/id/1201/600/400',
        description: '国家4A级景区,拥有丰富的自然景观',
      },
      {
        name: '成吉思汗陵',
        image: 'https://picsum.photos/id/1202/600/400',
        description: '蒙古帝国创始人成吉思汗的陵墓',
      },
      {
        name: '响沙湾',
        image: 'https://picsum.photos/id/1203/600/400',
        description: '会唱歌的沙漠,神奇的沙漠景观',
      },
      {
        name: '额济纳胡杨林',
        image: 'https://picsum.photos/id/1204/600/400',
        description: '中国最美的胡杨林,秋季金黄一片',
      },
      {
        name: '满洲里',
        image: 'https://picsum.photos/id/1205/600/400',
        description: '中俄边境城市,拥有独特的异域风情',
      },
      {
        name: '乌兰布统草原',
        image: 'https://picsum.photos/id/1206/600/400',
        description: '皇家猎苑,拥有壮美的草原风光',
      },
      {
        name: '五当召',
        image: 'https://picsum.photos/id/1207/600/400',
        description: '内蒙古最大的藏传佛教寺院',
      },
    ],
  },
  spots: [
    {
      id: 'hulunbuirGrassland',
      name: '呼伦贝尔大草原',
      description: '世界三大草原之一,被誉为牧草王国',
      image: 'https://picsum.photos/id/1200/600/400',
      location: '内蒙古自治区呼伦贝尔市',
      type: 'nature',
      bestTime: '夏季',
      tags: ['草原', '自然', '牧民', '风光'],
      rating: 4.9,
      landscapeType: 'grassland',
      landscapeCategory: ['地理景观'],
      landformTags: ['草原景观'],
    },
    {
      id: 'aershanForestPark',
      name: '阿尔山国家森林公园',
      description: '国家4A级景区,拥有丰富的自然景观',
      image: 'https://picsum.photos/id/1201/600/400',
      location: '内蒙古自治区兴安盟阿尔山市',
      type: 'nature',
      bestTime: '夏季',
      tags: ['森林', '火山', '温泉', '自然'],
      rating: 4.7,
      landscapeType: 'forest',
      landscapeCategory: ['生物景观'],
      landformTags: ['森林景观'],
    },
    {
      id: 'genghisKhanMausoleum',
      name: '成吉思汗陵',
      description: '蒙古帝国创始人成吉思汗的陵墓',
      image: 'https://picsum.photos/id/1202/600/400',
      location: '内蒙古自治区鄂尔多斯市伊金霍洛旗',
      type: 'culture',
      bestTime: '全年',
      tags: ['历史', '陵墓', '蒙古', '文化'],
      rating: 4.6,
    },
    {
      id: 'xiangshawan',
      name: '响沙湾',
      description: '会唱歌的沙漠,神奇的沙漠景观',
      image: 'https://picsum.photos/id/1203/600/400',
      location: '内蒙古自治区鄂尔多斯市达拉特旗',
      type: 'nature',
      bestTime: '春秋',
      tags: ['沙漠', '奇观', '自然', '探险'],
      rating: 4.5,
      landscapeType: 'desert',
      landscapeCategory: ['地理景观'],
      landformTags: ['沙漠景观'],
    },
    {
      id: 'ejinaPopulusForest',
      name: '额济纳胡杨林',
      description: '中国最美的胡杨林,秋季金黄一片',
      image: 'https://picsum.photos/id/1204/600/400',
      location: '内蒙古自治区阿拉善盟额济纳旗',
      type: 'nature',
      bestTime: '秋季',
      tags: ['胡杨', '森林', '秋景', '摄影'],
      rating: 4.8,
      landscapeType: 'forest',
      landscapeCategory: ['生物景观'],
      landformTags: ['森林景观'],
    },
    {
      id: 'manzhouli',
      name: '满洲里',
      description: '中俄边境城市,拥有独特的异域风情',
      image: 'https://picsum.photos/id/1205/600/400',
      location: '内蒙古自治区呼伦贝尔市满洲里市',
      type: 'culture',
      bestTime: '夏季',
      tags: ['边境', '异域', '建筑', '文化'],
      rating: 4.5,
    },
  ],
  seasonal: [
    {
      name: '春季',
      description: '春暖花开,草原复苏,是欣赏草原春景的好时节',
      image: 'https://picsum.photos/id/1200/600/400',
      activities: ['草原踏青', '阿尔山游览', '成吉思汗陵参观', '响沙湾探险'],
    },
    {
      name: '夏季',
      description: '绿草如茵,是草原最美的季节,适合草原旅游',
      image: 'https://picsum.photos/id/1200/600/400',
      activities: ['草原骑马', '阿尔山避暑', '呼伦贝尔草原游', '满洲里旅游'],
    },
    {
      name: '秋季',
      description: '秋高气爽,额济纳胡杨林金黄一片,是摄影的最佳时节',
      image: 'https://picsum.photos/id/1204/600/400',
      activities: ['额济纳胡杨林摄影', '草原秋游', '阿尔山秋景', '成吉思汗陵参观'],
    },
    {
      name: '冬季',
      description: '银装素裹,是体验草原雪景和民族风情的好时节',
      image: 'https://picsum.photos/id/1200/600/400',
      activities: ['草原雪景', '冰雪活动', '民族风情体验', '温泉体验'],
    },
  ],
  activities: [
    {
      id: '1',
      name: '草原骑马',
      description: '在呼伦贝尔大草原上骑马,感受草原风情',
      image: 'https://picsum.photos/id/1200/600/400',
      category: 'nature',
      location: '呼伦贝尔大草原',
      duration: '2-3小时',
      difficulty: '中等',
      type: '户外活动',
    },
    {
      id: '2',
      name: '沙漠探险',
      description: '在响沙湾体验沙漠探险乐趣',
      image: 'https://picsum.photos/id/1203/600/400',
      category: 'nature',
      location: '响沙湾',
      duration: '3-4小时',
      difficulty: '中等',
      type: '户外活动',
    },
  ],
  routes: [
    {
      id: '1',
      name: '呼伦贝尔草原之旅',
      title: '呼伦贝尔草原之旅',
      description: '体验辽阔的草原风光',
      duration: '3天',
      difficulty: '中等',
      highlights: ['呼伦贝尔大草原', '满洲里'],
      spots: ['呼伦贝尔大草原', '满洲里'],
      tags: ['草原', '自然', '民族'],
      image: 'https://picsum.photos/id/1200/600/400',
      rating: 4.8,
      bestTime: '夏季',
      traffic: '旅游大巴',
      suitableFor: '自然爱好者',
    },
  ],
};

export const neimengguCustomsData = {
  activities: [
    {
      id: '1',
      name: '蒙古族风情体验',
      description: '体验蒙古族传统文化和生活方式',
      image: 'https://picsum.photos/id/1200/600/400',
      category: 'culture',
      location: '呼伦贝尔大草原',
      duration: '1天',
      difficulty: '简单',
      type: '文化体验',
    },
  ],
};

export const neimengguIntangibleHeritage = [
  {
    id: '1',
    name: '蒙古族长调',
    description: '蒙古族传统音乐,被誉为草原音乐活化石',
    level: 'national',
    category: '传统音乐',
    protectionUnit: '内蒙古自治区艺术研究所',
    features: ['传统音乐', '国家级非遗', '草原文化'],
    icon: '🎵',
    image: 'https://picsum.photos/id/1200/600/400',
  },
];

export const neimengguFolkCustomsElements = [
  {
    name: '那达慕大会',
    description: '蒙古族传统节日,盛大的草原盛会',
    image: 'https://picsum.photos/id/1200/600/400',
    tags: ['传统节日', '草原文化', '蒙古族', '民俗活动', '体育竞技'],
  },
];

export const neimengguFestivals = [
  {
    id: '1',
    name: '那达慕大会',
    description: '蒙古族传统节日,盛大的草原盛会',
    month: '8月',
    day: '1日',
    location: '呼伦贝尔大草原',
    isUnique: true,
  },
];

export default neimengguData;

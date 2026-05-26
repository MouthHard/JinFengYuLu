import type { SceneryData } from '@/typesOfPages/travelGuide';

export const shanghaiData: SceneryData = {
  overview: {
    totalSpots: 180,
    natureSpots: 50,
    cultureSpots: 130,
    topAttractions: [
      {
        name: '外滩',
        image: 'https://picsum.photos/id/1280/600/400',
        description: '上海的标志性景观,拥有52栋风格各异的古典复兴大楼',
      },
      {
        name: '东方明珠',
        image: 'https://picsum.photos/id/1281/600/400',
        description: '上海的标志性建筑之一,是上海的地标性建筑和旅游热点',
      },
      {
        name: '豫园',
        image: 'https://picsum.photos/id/1282/600/400',
        description: '上海市区内唯一的江南古典园林',
      },
    ],
  },
  spots: [
    {
      id: 'theBund',
      name: '外滩',
      description: '上海的标志性景观,位于黄浦江西岸,拥有52栋风格各异的古典复兴大楼',
      image: 'https://picsum.photos/id/1280/600/400',
      location: '上海市黄浦区中山东一路',
      type: 'culture',
      bestTime: '全年',
      tags: ['地标', '建筑', '夜景', '历史'],
      rating: 4.7,
    },
    {
      id: 'orientalPearlTower',
      name: '东方明珠',
      description: '上海的标志性建筑之一,高468米,是上海的地标性建筑和旅游热点',
      image: 'https://picsum.photos/id/1281/600/400',
      location: '上海市浦东新区世纪大道1号',
      type: 'culture',
      bestTime: '全年',
      tags: ['地标', '电视塔', '观光', '现代'],
      rating: 4.5,
    },
    {
      id: 'yuyuanGarden',
      name: '豫园',
      description: '上海市区内唯一的江南古典园林,始建于明代嘉靖年间',
      image: 'https://picsum.photos/id/1282/600/400',
      location: '上海市黄浦区福佑路168号',
      type: 'culture',
      bestTime: '春秋',
      tags: ['园林', '古建', '明清', '文化'],
      rating: 4.4,
    },
  ],
  seasonal: [
    {
      name: '春季',
      description: '春暖花开,豫园百花齐放,是踏青赏花的好时节',
      image: 'https://picsum.photos/id/1282/600/400',
      activities: ['豫园赏花', '外滩漫步', '朱家角古镇游', '田子坊艺术之旅'],
    },
    {
      name: '夏季',
      description: '绿树成荫,是避暑纳凉的好去处,迪士尼乐园是热门选择',
      image: 'https://picsum.photos/id/1283/600/400',
      activities: ['迪士尼乐园', '外滩夜景', '南京路购物', '新天地夜生活'],
    },
    {
      name: '秋季',
      description: '秋高气爽,朱家角古镇秋色迷人,是游览古镇的好时节',
      image: 'https://picsum.photos/id/1286/600/400',
      activities: ['朱家角古镇游', '豫园秋游', '外滩秋景', '田子坊艺术之旅'],
    },
    {
      name: '冬季',
      description: '冬季温暖,是旅游的好时节,外滩夜景别有一番风味',
      image: 'https://picsum.photos/id/1280/600/400',
      activities: ['外滩夜景', '迪士尼乐园', '豫园游览', '南京路购物'],
    },
  ],
  activities: [
    {
      id: '1',
      name: '外滩漫步',
      description: '漫步外滩,欣赏黄浦江两岸的美景',
      image: 'https://picsum.photos/id/1280/600/400',
      category: 'culture',
      location: '外滩',
      duration: '1-2小时',
      difficulty: '简单',
      type: '文化体验',
    },
    {
      id: '2',
      name: '迪士尼乐园游玩',
      description: '在迪士尼乐园享受梦幻的一天',
      image: 'https://picsum.photos/id/1283/600/400',
      category: 'culture',
      location: '上海迪士尼乐园',
      duration: '1天',
      difficulty: '简单',
      type: '娱乐体验',
    },
  ],
  routes: [
    {
      id: '1',
      name: '上海经典一日游',
      title: '上海经典一日游',
      description: '游览上海最著名的景点',
      duration: '1天',
      difficulty: '简单',
      highlights: ['外滩', '东方明珠', '豫园'],
      spots: ['外滩', '东方明珠', '豫园'],
      tags: ['经典', '文化', '历史'],
      image: 'https://picsum.photos/id/1280/600/400',
      rating: 4.7,
      bestTime: '全年',
      traffic: '地铁',
      suitableFor: '所有游客',
    },
  ],
};

export const shanghaiCustomsData = {
  activities: [
    {
      id: '1',
      name: '海派文化体验',
      description: '体验上海独特的海派文化',
      image: 'https://picsum.photos/id/1280/600/400',
      category: 'culture',
      location: '田子坊',
      duration: '2-3小时',
      difficulty: '简单',
      type: '文化体验',
    },
  ],
};

export const shanghaiIntangibleHeritage = [
  {
    id: '1',
    name: '沪剧',
    description: '上海地方戏曲,具有浓郁的地方特色',
    level: 'national',
    category: '传统戏剧',
    protectionUnit: '上海市沪剧院',
    features: ['传统戏剧', '国家级非遗', '海派文化'],
    icon: '🎭',
    image: 'https://picsum.photos/id/1280/600/400',
  },
];

export const shanghaiFolkCustomsElements = [
  {
    name: '海派文化',
    description: '上海独特的文化现象和生活方式',
    image: 'https://picsum.photos/id/1280/600/400',
    tags: ['海派文化', '上海文化', '现代文化', '中西合璧', '城市文化'],
  },
];

export const shanghaiFestivals = [
  {
    id: '1',
    name: '上海国际电影节',
    description: '国际性的电影盛会',
    month: '6月',
    day: '15日',
    location: '上海',
    isUnique: true,
  },
];

export default shanghaiData;

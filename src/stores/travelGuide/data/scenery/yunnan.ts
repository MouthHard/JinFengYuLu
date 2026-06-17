import type { SceneryData } from '@/typesOfPages/travelGuide';

export const yunnanData: SceneryData = {
  overview: {
    totalSpots: 300, natureSpots: 160, cultureSpots: 140, topAttractions: [
      { name: '丽江古城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界文化遗产，中国最美古城之一，纳西族文化中心' },
      { name: '大理古城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '风花雪月之地，白族文化发源地，苍山洱海间' },
      { name: '玉龙雪山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '北半球最近赤道的雪山群，纳西族神山' },
      { name: '石林', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界自然遗产，天下第一奇观，喀斯特地貌博物馆' },
      { name: '香格里拉', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '人间仙境，消失的地平线，藏族文化圣地' },
      { name: '泸沽湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '东方女儿国，摩梭人母系氏族社会最后领地' },
      { name: '西双版纳', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '热带雨林王国，中国唯一的热带雨林自然保护区' },
      { name: '束河古镇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '茶马古道重要驿站，纳西先民在丽江坝子最早的聚居地之一' }
    ]
  },
  spots: [
    {
      id: 'lijiangAncientTown',
      name: '丽江古城',
      description: '世界文化遗产，中国保存最完好的少数民族古城',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '丽江市古城区',
      type: 'culture',
      cultureType: 'historical_site',
      bestTime: '全年',
      tags: ['古城', '世界遗产', '纳西', '文化'],
      rating: 4.8
    },
    {
      id: 'jadeDragonSnowMountain',
      name: '玉龙雪山',
      description: '北半球最近赤道的终年积雪的山脉，如一条矫健的玉龙横卧山巅',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '丽江市玉龙纳西族自治县',
      type: 'nature',
      bestTime: '冬季',
      tags: ['雪山', '冰川', '索道', '摄影'],
      rating: 4.8,
      landscapeType: 'mountain'
    },
    {
      id: 'stoneForest',
      name: '石林风景区',
      description: '世界自然遗产，典型的喀斯特地貌奇观',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '昆明市石林彝族自治县',
      type: 'nature',
      bestTime: '全年',
      tags: ['石林', '喀斯特', '世界遗产', '地质'],
      rating: 4.6,
      landscapeType: 'wonderland'
    },
    {
      id: 'luguLake',
      name: '泸沽湖',
      description: '东方女儿国，摩梭人母系氏族社会最后领地，高原明珠',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '丽江市宁蒗县',
      type: 'nature',
      bestTime: '全年',
      tags: ['湖泊', '摩梭', '高原', '摄影'],
      rating: 4.7,
      landscapeType: 'water'
    },
    {
      id: 'daliAncientTown',
      name: '大理古城',
      description: '风花雪月之地，白族文化发源地，苍山洱海间的千年古城',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '大理市',
      type: 'culture',
      cultureType: 'historical_site',
      bestTime: '全年',
      tags: ['古城', '白族', '洱海', '文化'],
      rating: 4.6
    },
    {
      id: 'xishuangbanna',
      name: '西双版纳热带植物园',
      description: '中国最大的热带植物园，万种植物汇聚的绿色王国',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '景洪市勐腊县',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '冬季',
      tags: ['热带雨林', '植物', '傣族', '生态'],
      rating: 4.5
    }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开，大理茶花节、丽江樱花盛开的好时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['大理赏花', '丽江古城游览', '玉龙雪山登山', '石林参观'] },
    { name: '夏季', description: '绿树成荫，玉龙雪山和香格里拉是避暑的好去处', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['玉龙雪山避暑', '香格里拉游览', '泸泛湖游玩', '西双版纳参观'] },
    { name: '秋季', description: '秋高气爽，玉龙雪山和香格里拉是旅游的好时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['玉龙雪山登山', '香格里拉登山', '泸泛湖划船', '大理古城秋景'] },
    { name: '冬季', description: '温暖如春，西双版纳是避寒的好去处', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['西双版纳避寒', '丽江古城游览', '大理古城游览', '石林参观'] }
  ],
  activities: [
    { id: '1', name: '丽江古城游览', description: '游览世界文化遗产丽江古城', category: 'culture', location: '丽江古城', duration: '1天', difficulty: '简单', type: '文化体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '玉龙雪山登山', description: '乘坐索道登顶观赏雪山美景', category: 'nature', location: '玉龙雪山', duration: '1天', difficulty: '中等', type: '户外运动', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    {
      id: '1',
      name: '云南经典五日游',
      title: '云南经典之旅',
      description: '体验云南的自然风光和民族文化',
      duration: '5天',
      difficulty: '简单',
      highlights: ['丽江古城', '大理古城', '玉龙雪山'],
      spots: ['丽江古城', '大理古城', '玉龙雪山'],
      tags: ['古城', '文化', '自然'],
      rating: 4.8,
      bestTime: '全年',
      traffic: '飞机/高铁',
      suitableFor: '所有游客',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`
    }
  ],
  intangibleHeritage: [
    { id: '1', name: '白族扎染', description: '白族传统印染技艺，以蓝白相间、图案典雅著称', level: 'national', category: '传统技艺', protectionUnit: '大理市非物质文化遗产保护中心', features: ['扎染', '国家级非遗', '白族', '蓝白相间'], icon: '🎨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '普洱茶制作技艺', description: '云南普洱茶传统制作工艺，越陈越香', level: 'national', category: '传统技艺', protectionUnit: '普洱市非物质文化遗产保护中心', features: ['普洱茶', '国家级非遗', '制茶工艺', '越陈越香'], icon: '🍵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '火把节', description: '彝族最盛大的传统节日，火树银花不夜天', month: '8月', day: '前后', location: '楚雄州', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '民族民俗', description: '云南多民族民俗文化，包括泼水节、三月街、目脑纵歌等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['多民族', '火把节', '泼水节', '七彩云南'] }
  ]
};

export default yunnanData;

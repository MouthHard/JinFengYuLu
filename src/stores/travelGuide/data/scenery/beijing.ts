import type { SceneryData } from '@/typesOfPages/travelGuide';

export const beijingData: SceneryData = {
  overview: {
    totalSpots: 200,
    natureSpots: 50,
    cultureSpots: 150,
    topAttractions: [
      {
        name: '故宫博物院',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '世界现存最大最完整的古建筑群，明清两代皇宫',
      },
      {
        name: '长城',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '世界七大奇迹之一，中华民族的象征，世界文化遗产',
      },
      {
        name: '天坛公园',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '明清皇帝祭天的场所，中国古代建筑杰作',
      },
      {
        name: '颐和园',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '中国古典园林之首，皇家园林博物馆',
      },
      {
        name: '天安门广场',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '世界上最大的城市广场，中华人民共和国的象征',
      },
      {
        name: '北海公园',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '中国现存历史最悠久的皇家园林之一',
      },
      {
        name: '南锣鼓巷',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '北京最古老的街区之一，胡同文化代表',
      },
      {
        name: '798艺术区',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '当代艺术聚集地，工业遗址改造的艺术区',
      }
    ],
  },
  spots: [
    {
      id: 'forbiddenCity',
      name: '故宫博物院',
      description: '世界现存最大最完整的古建筑群，明清两代皇宫，收藏文物180万件',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市东城区景山前街4号',
      type: 'culture',
      cultureType: 'royal',
      bestTime: '春秋两季',
      tags: ['故宫', '皇家建筑', '世界文化遗产', '博物馆'],
      rating: 4.9
    },
    {
      id: 'greatWall',
      name: '八达岭长城',
      description: '万里长城精华段，气势磅礴，是游览长城的首选之地',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市延庆区八达岭镇',
      type: 'culture',
      cultureType: 'historical_site',
      bestTime: '春秋两季',
      tags: ['长城', '世界文化遗产', '历史', '户外'],
      rating: 4.7,
      landscapeType: 'mountain',
      landscapeCategory: ['地理景观'],
      landformTags: ['山地景观']
    },
    {
      id: 'templeOfHeaven',
      name: '天坛公园',
      description: '明清皇帝祭天祈谷的场所，建筑精美，是中国古代建筑的杰出代表',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市东城区天坛路甲1号',
      type: 'culture',
      cultureType: 'royal',
      bestTime: '全年',
      tags: ['祭天', '皇家建筑', '世界文化遗产'],
      rating: 4.6
    },
    {
      id: 'summerPalace',
      name: '颐和园',
      description: '中国保存最完整的大型皇家园林，以昆明湖、万寿山为基址',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市海淀区新建宫门路19号',
      type: 'culture',
      cultureType: 'garden_arch',
      bestTime: '春夏秋三季',
      tags: ['园林', '皇家', '湖泊', '世界文化遗产'],
      rating: 4.7,
      landscapeType: 'water',
      landscapeCategory: ['水体景观'],
      landformTags: ['湖泊景观']
    },
    {
      id: 'tiananmenSquare',
      name: '天安门广场',
      description: '世界上最大的城市广场，可容纳100万人集会，国家象征',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市东城区长安街',
      type: 'culture',
      cultureType: 'street_memorial',
      bestTime: '全年',
      tags: ['广场', '国家象征', '政治中心'],
      rating: 4.5
    },
    {
      id: 'nanluoguxiang',
      name: '南锣鼓巷',
      description: '北京最古老的街区之一，保留着元代的胡同院落风貌',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市东城区南锣鼓巷',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '全年',
      tags: ['胡同', '老北京', '文艺', '小吃'],
      rating: 4.2
    },
    {
      id: 'beihaiPark',
      name: '北海公园',
      description: '中国现存历史上建园最早、保存最完整、文化沉积最深厚的古典皇家园林',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市西城区文津街1号',
      type: 'nature',
      bestTime: '春夏秋三季',
      tags: ['园林', '白塔', '划船', '皇家'],
      rating: 4.4,
      landscapeType: 'urban_nature',
      landscapeCategory: ['人文景观'],
      landformTags: ['公园绿地']
    },
    {
      id: 'xiangshanPark',
      name: '香山公园',
      description: '北京著名的红叶观赏胜地，秋季满山红叶如火如荼',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市海淀区香山街道',
      type: 'nature',
      bestTime: '秋季',
      tags: ['红叶', '登山', '皇家园林', '秋季赏景'],
      rating: 4.5,
      landscapeType: 'mountain'
    },
    {
      id: 'yuyuantanPark',
      name: '玉渊潭公园',
      description: '北京最大的城市公园之一，春季樱花盛开美不胜收',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市海淀区西三环中路10号',
      type: 'nature',
      bestTime: '春季',
      tags: ['樱花', '城市公园', '划船', '春季赏花'],
      rating: 4.3,
      landscapeType: 'urban_nature'
    },
    {
      id: 'artDistrict798',
      name: '798艺术区',
      description: '由废弃的电子工业老厂区改造而成的艺术集聚区，当代艺术的殿堂',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '北京市朝阳区酒仙桥路2号',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '全年',
      tags: ['艺术', '现代', '画廊', '创意'],
      rating: 4.3
    }
  ],
  seasonal: [
    {
      name: '春季',
      description: '春暖花开，万物复苏，是游览故宫、颐和园的最佳时节',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['故宫赏花', '颐和园游船', '玉渊潭樱花节', '香山踏青']
    },
    {
      name: '夏季',
      description: '炎热多雨，适合参观室内场馆，避暑山庄纳凉',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['博物馆参观', '颐和园泛舟', '水立方嬉水', '王府井购物']
    },
    {
      name: '秋季',
      description: '秋高气爽，红叶满山，是登长城、爬香山的黄金季节',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['香山赏红叶', '长城登高', '奥林匹克森林公园漫步', '圆明园怀古']
    },
    {
      name: '冬季',
      description: '寒冷干燥，雪后故宫银装素裹别有韵味，庙会热闹非凡',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      activities: ['故宫雪景摄影', '什刹海滑冰', '庙会体验', '温泉度假']
    }
  ],
  activities: [
    {
      id: '1',
      name: '故宫深度游',
      description: '专业导游讲解，深入了解明清皇室生活和文化',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      category: 'culture',
      location: '故宫博物院',
      duration: '半天',
      difficulty: '简单',
      type: '文化体验'
    },
    {
      id: '2',
      name: '长城徒步挑战',
      description: '攀登八达岭或慕田峪长城，感受古代工程的伟大',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      category: 'outdoor',
      location: '八达岭长城',
      duration: '1天',
      difficulty: '中等',
      type: '户外运动'
    }
  ],
  routes: [
    {
      id: '1',
      name: '北京经典三日游',
      title: '北京经典三日游',
      description: '涵盖北京最著名的景点，感受古都魅力与现代都市的完美融合',
      duration: '3天',
      difficulty: '简单',
      highlights: ['故宫', '长城', '天坛', '颐和园'],
      spots: ['故宫博物院', '八达岭长城', '天坛公园', '颐和园'],
      tags: ['历史文化', '皇家建筑', '世界遗产'],
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      rating: 4.8,
      bestTime: '春秋两季',
      traffic: '地铁+公交',
      suitableFor: '所有游客'
    }
  ],
  intangibleHeritage: [
    {
      id: '1',
      name: '京剧',
      description: '中国国粹，被誉为东方歌剧，融唱念做打于一体',
      level: 'national',
      category: '传统戏剧',
      protectionUnit: '国家京剧院',
      features: ['传统戏曲', '国家级非遗', '表演艺术', '国粹'],
      icon: '🎭',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`
    },
    {
      id: '2',
      name: '景泰蓝制作技艺',
      description: '北京著名特种工艺品，又称铜胎掐丝珐琅',
      level: 'national',
      category: '传统美术',
      protectionUnit: '北京市珐琅厂',
      features: ['传统工艺', '国家级非遗', '金属工艺', '宫廷艺术'],
      icon: '🏺',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`
    }
  ],
  festivals: [
    {
      id: '1',
      name: '春节庙会',
      description: '北京最具特色的民俗活动，吃喝玩乐应有尽有',
      month: '2月',
      day: '1月下旬-2月中旬',
      location: '地坛公园、龙潭湖公园等',
      isUnique: true
    },
    {
      id: '2',
      name: '国庆庆典',
      description: '中华人民共和国成立纪念活动，天安门广场盛大阅兵',
      month: '10月',
      day: '1日',
      location: '天安门广场',
      isUnique: true
    }
  ],
  folkCustomsElements: [
    {
      name: '四合院文化',
      description: '北京传统民居形式，体现了中国传统建筑文化和家族观念',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      tags: ['四合院', '传统建筑', '居住文化', '老北京']
    },
    {
      name: '胡同文化',
      description: '北京特有的城市肌理，承载着数百年的历史记忆和市井生活',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      tags: ['胡同', '城市肌理', '市井生活', '文化遗产']
    }
  ]
};

export default beijingData;
import type { SceneryData } from '@/typesOfPages/travelGuide';

export const guangdongData: SceneryData = {
  overview: {
    totalSpots: 250,
    natureSpots: 100,
    cultureSpots: 150,
    topAttractions: [
      {
        name: '广州塔',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '广州新地标，中国第一高塔，小蛮腰造型独特'
      },
      {
        name: '长隆旅游度假区',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '世界级主题公园集群，欢乐世界、野生动物世界、水上乐园'
      },
      {
        name: '开平碉楼与村落',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '世界文化遗产，中西合璧的防御性民居建筑群'
      },
      {
        name: '丹霞山',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '世界自然遗产，丹霞地貌命名地，红石奇观'
      },
      {
        name: '深圳世界之窗',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '微缩景观主题公园，一日游遍世界名胜'
      },
      {
        name: '珠海长隆海洋王国',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '全球最大的海洋主题度假区之一'
      },
      {
        name: '惠州西湖',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '岭南著名园林湖泊，苏东坡曾谪居于此'
      },
      {
        name: '佛山祖庙',
        image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
        description: '岭南古建筑瑰宝，叶问、黄飞鸿故乡'
      }
    ]
  },
  spots: [
    {
      id: 'cantonTower',
      name: '广州塔',
      description: '广州新电视塔，总高度600米，是中国第一高塔，有"小蛮腰"之称',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '广州市海珠区阅江西路222号',
      type: 'culture',
      cultureType: 'modern',
      bestTime: '傍晚至夜晚',
      tags: ['地标', '观景', '现代建筑', '夜景'],
      rating: 4.6
    },
    {
      id: 'chimelongParadise',
      name: '长隆欢乐世界',
      description: '国内顶级主题乐园，拥有多项世界级游乐设施',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '广州市番禺区汉溪大道东299号',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '全年',
      tags: ['主题乐园', '亲子', '刺激', '娱乐'],
      rating: 4.7
    },
    {
      id: 'kaipingDiaolou',
      name: '开平碉楼',
      description: '集防卫、居住和中西建筑艺术于一体的多层塔楼式民居',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '江门市开平市',
      type: 'culture',
      cultureType: 'garden_arch',
      bestTime: '春秋两季',
      tags: ['世界遗产', '建筑', '历史', '侨乡'],
      rating: 4.5,
      landscapeType: 'urban_nature',
      landscapeCategory: ['人文景观'],
      landformTags: ['建筑景观']
    },
    {
      id: 'danxiaMountain',
      name: '丹霞山',
      description: '世界自然遗产，以赤壁丹崖为特色，是丹霞地貌的命名地',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '韶关市仁化县',
      type: 'nature',
      bestTime: '秋季',
      tags: ['自然遗产', '丹霞地貌', '地质', '登山'],
      rating: 4.6,
      landscapeType: 'mountain',
      landscapeCategory: ['地理景观'],
      landformTags: ['丹霞地貌']
    },
    {
      id: 'windowOfTheWorld',
      name: '深圳世界之窗',
      description: '将世界奇观、历史遗迹、古今名胜、自然风光、民俗歌舞融为一体的大型文化主题公园',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '深圳市南山区深南大道9037号',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '全年',
      tags: ['微缩景观', '主题公园', '世界名胜', '演艺'],
      rating: 4.3
    },
    {
      id: 'foshanAncestralTemple',
      name: '佛山祖庙',
      description: '集佛山古代建筑艺术精华的典型代表，被誉为东方民间艺术之宫',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '佛山市禅城区祖庙路21号',
      type: 'culture',
      cultureType: 'religious',
      bestTime: '全年',
      tags: ['古建筑', '武术', '粤剧', '民间艺术'],
      rating: 4.4
    },
    {
      id: 'huizhouWestLake',
      name: '惠州西湖',
      description: '岭南著名园林湖泊，苏东坡曾谪居于此，山水秀美',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '惠州市惠城区',
      type: 'nature',
      bestTime: '春季',
      tags: ['湖泊', '园林', '苏轼', '岭南'],
      rating: 4.3,
      landscapeType: 'water'
    },
    {
      id: 'shenzhenDameisha',
      name: '深圳大梅沙海滨公园',
      description: '深圳最著名的海滨度假胜地，金色沙滩碧海蓝天',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '深圳市盐田区',
      type: 'nature',
      bestTime: '夏季',
      tags: ['海滩', '度假', '游泳', '深圳'],
      rating: 4.2,
      landscapeType: 'coastal'
    }
  ],
  seasonal: [
    { name: '春季', description: '温暖湿润，百花盛开，适合户外游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏花', '踏青', '游园'] },
    { name: '夏季', description: '炎热多雨，注意防暑降温，可前往海边或室内场馆', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['海滨度假', '水上游乐', '博物馆参观'] },
    { name: '秋季', description: '秋高气爽，最佳旅游季节，气候宜人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['登山', '游览古镇', '品尝美食'] },
    { name: '冬季', description: '温暖如春，避寒胜地，适合北方游客', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['温泉度假', '逛花市', '品尝年货'] }
  ],
  activities: [
    { id: '1', name: '广州塔观光', description: '登塔俯瞰珠江新城全景', category: 'sightseeing', location: '广州市海珠区广州塔', duration: '2小时', difficulty: '简单', type: '城市观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '长隆野生动物世界', description: '观赏珍稀动物，体验动物互动', category: 'entertainment', location: '广州市番禺区长隆野生动物世界', duration: '1天', difficulty: '简单', type: '亲子娱乐', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    {
      id: '1', name: '广深珠经典三日游', title: '珠三角精华游', description: '游览广州深圳珠海三大城市精华景点感受珠三角都市魅力与岭南文化', duration: '3天', difficulty: '简单',
      highlights: ['广州塔', '长隆', '开平碉楼', '珠海'],
      spots: ['广州塔', '长隆旅游度假区', '开平碉楼', '珠海长隆海洋王国'],
      tags: ['都市', '主题公园', '文化遗产'], rating: 4.8, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, bestTime: '全年', traffic: '高铁+包车', suitableFor: '所有游客、家庭游客'
    }
  ],
  intangibleHeritage: [
    { id: '1', name: '粤绣', description: '中国四大名绣之一，以色彩富丽、运用金银线著称', level: 'national', category: '传统美术', protectionUnit: '广东省非物质文化遗产保护中心', features: ['刺绣', '国家级非遗', '四大名绣', '金银线'], icon: '🧵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '潮州木雕', description: '中国四大木雕之一，以多层次镂空技艺和金漆装饰著称', level: 'national', category: '传统美术', protectionUnit: '潮州市非物质文化遗产保护中心', features: ['木雕', '国家级非遗', '四大木雕', '金漆木雕'], icon: '🪵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '广府庙会', description: '广州传统民俗盛会，展示广府文化的独特魅力', month: '2月', day: '中旬左右', location: '广州市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '岭南民俗', description: '岭南地区独特民俗文化，包括醒狮、粤剧、早茶文化等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['岭南文化', '醒狮', '早茶', '广府民俗'] }
  ]
};

export default guangdongData;

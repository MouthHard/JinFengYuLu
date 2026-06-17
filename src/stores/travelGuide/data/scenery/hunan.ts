import type { SceneryData } from '@/typesOfPages/travelGuide';

export const hunanData: SceneryData = {
  overview: {
    totalSpots: 180, natureSpots: 100, cultureSpots: 80, topAttractions: [
      { name: '张家界', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '阿凡达取景地，石英砂岩峰林地貌奇观' },
      { name: '凤凰古城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '沈从文笔下的边城，苗族土家族风情浓郁' },
      { name: '岳麓书院', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国古代四大书院之一，千年学府' },
      { name: '衡山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '五岳之一的南岳，寿岳之称' }
    ]
  },
  spots: [
    { id: 'zhangjiajieNationalForestPark', name: '张家界国家森林公园', description: '中国第一个国家森林公园，独特的石英砂岩峰林地貌', location: '张家界市永定区', type: 'nature', bestTime: '春秋两季', tags: ['峰林', '自然遗产', '阿凡达', '玻璃栈道'], rating: 4.9, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'fenghuangAncientTown', name: '凤凰古城', description: '由苗族、汉族、土家族等28个民族组成，是典型的少数民族聚居区', location: '湘西土家族苗族自治州凤凰县', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['古镇', '沱江', '民族风情', '沈从文'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'hengshanMountain', name: '衡山', description: '五岳之一的南岳，寿岳之称，佛教道教名山', location: '衡阳市南岳区', type: 'nature', bestTime: '全年', tags: ['五岳', '宗教', '登山', '云海'], rating: 4.6, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yueluAcademy', name: '岳麓书院', description: '中国古代四大书院之一千年学府惟楚有材', location: '长沙市岳麓区', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['书院', '教育', '历史', '文化'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'dongtingLake', name: '洞庭湖', description: '中国第二大淡水湖，岳阳楼所在地，鱼米之乡', location: '岳阳市', type: 'nature', bestTime: '夏季', tags: ['湖泊', '湿地', '候鸟', '自然'], rating: 4.3, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开张家界峰林云雾缭绕凤凰古城春意盎然', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['张家界探险', '凤凰古城漫步', '品尝湘菜', '赏油菜花'] },
    { name: '夏季', description: '炎热多雨注意防暑湘西山区凉爽宜人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['天门山玻璃栈道', '沱江泛舟', '品尝口味虾', '漂流戏水'] },
    { name: '秋季', description: '秋高气爽张家界秋色迷人层林尽染', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['张家界赏秋色', '登衡山', '岳阳楼怀古', '品蟹'] },
    { name: '冬季', description: '湿冷阴沉可体验温泉和湖南美食火锅', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['泡温泉', '吃火锅', '逛坡子街', '滑雪'] }
  ],
  activities: [
    { id: '1', name: '张家界天门山玻璃栈道', description: '体验惊险刺激的高空行走感受云端漫步', category: 'adventure', location: '张家界市永定区', duration: '1天', difficulty: '中等', type: '户外探险', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '凤凰古城夜游沱江', description: '夜晚乘船游览沱江欣赏两岸吊脚楼灯火', category: 'nightlife', location: '湘西州凤凰县', duration: '半天', difficulty: '简单', type: '夜景观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '湘菜美食品鉴', description: '品尝正宗湘菜体验辣味文化', category: 'food', location: '湖南省各地', duration: '1天', difficulty: '简单', type: '美食体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '4', name: '衡山祈福之旅', description: '登南岳衡山烧香祈福观赏云海日出', category: 'religious', location: '衡阳市南岳区', duration: '2天', difficulty: '中等', type: '宗教朝圣', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '湖南湘西五日游', title: '芙蓉国里·潇湘山水', description: '畅游湖南精华景点感受湘西风情和湖湘文化', duration: '5天', difficulty: '简单', highlights: ['张家界', '凤凰古城', '长沙', '岳阳楼'], spots: ['张家界国家森林公园', '凤凰古城'], tags: ['自然风光', '民族文化', '古镇', '美食'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '4-10月', traffic: '高铁+包车', suitableFor: '所有游客、摄影师、户外爱好者' },
    { id: '2', name: '长沙周边二日游', title: '星城长沙·美食之都', description: '游览长沙及周边景点品尝地道湘菜', duration: '2天', difficulty: '简单', highlights: ['岳麓书院', '橘子洲头', '坡子街', '太平街'], spots: ['岳麓书院'], tags: ['历史文化', '美食', '城市观光', '书院'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '全年', traffic: '地铁+出租车', suitableFor: '美食家、文化爱好者、年轻人' },
    { id: '3', name: '湖南山水四日游', title: '奇峰秀水·魅力湖南', description: '深度游览张家界凤凰古城等精华景区', duration: '4天', difficulty: '中等', highlights: ['张家界', '天门山', '凤凰古城', '芙蓉镇'], spots: ['张家界国家森林公园', '凤凰古城'], tags: ['峰林', '古镇', '民族文化', '自然风光'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '全年', traffic: '高铁+旅游大巴', suitableFor: '摄影爱好者、户外爱好者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '湘绣', description: '中国四大名绣之一，以掺针法和平针法著称，绣花如花', level: 'national', category: '传统美术', protectionUnit: '湖南省湘绣研究所', features: ['刺绣', '国家级非遗', '四大名绣', '掺针法'], icon: '🧵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '土家族织锦', description: '土家族传统织锦技艺，以色彩斑斓、图案古朴著称', level: 'national', category: '传统技艺', protectionUnit: '湘西土家族苗族自治州文化馆', features: ['织锦', '国家级非遗', '土家族', '西兰卡普'], icon: '🧶', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '张家界国际民俗节', description: '展示湘西多民族民俗风情的国际性节庆活动', month: '9月', day: '15-20日左右', location: '张家界市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '湘楚民俗', description: '湖南湘楚地区民俗文化，包括花鼓戏、赶秋节、苗族银饰等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['湘楚文化', '花鼓戏', '苗族', '湘西民俗'] }
  ]
};

export default hunanData;

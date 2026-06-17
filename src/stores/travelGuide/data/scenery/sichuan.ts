import type { SceneryData } from '@/typesOfPages/travelGuide';

export const sichuanData: SceneryData = {
  overview: {
    totalSpots: 300,
    natureSpots: 180,
    cultureSpots: 120,
    topAttractions: [
      { name: '九寨沟', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '童话世界，人间仙境，世界自然遗产' },
      { name: '峨眉山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '佛教名山，普贤菩萨道场，云海日出壮观' },
      { name: '都江堰', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界水利文化的鼻祖，千年古堰仍在使用' },
      { name: '成都大熊猫繁育研究基地', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '国宝大熊猫的家，近距离观看可爱熊猫' },
      { name: '乐山大佛', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界最大石刻弥勒佛坐像，世界文化与自然双重遗产' },
      { name: '青城山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '道教名山，青城天下幽，问道修心的好去处' },
      { name: '稻城亚丁', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '蓝色星球上的最后一片净土，雪山草甸湖泊' },
      { name: '武侯祠', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '纪念诸葛亮的祠堂，三国文化圣地' }
    ]
  },
  spots: [
    {
      id: 'jiuzhaigou', name: '九寨沟',
      description: '以翠海、叠瀑、彩林、雪峰、藏情著称于世，被誉为童话世界',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '阿坝藏族羌族自治州九寨沟县', type: 'nature', bestTime: '秋季',
      tags: ['世界遗产', '湖泊', '瀑布', '彩林'], rating: 4.9,
      landscapeType: 'wonderland', landscapeCategory: ['水体景观'], landformTags: ['峡谷景观']
    },
    {
      id: 'emeiMountain', name: '峨眉山',
      description: '中国四大佛教名山之一，金顶云海日出令人震撼',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '乐山市峨眉山市', type: 'nature', bestTime: '四季皆宜',
      tags: ['佛教名山', '云海', '日出', '猴子'], rating: 4.7,
      landscapeType: 'mountain', landscapeCategory: ['地理景观'], landformTags: ['山地景观']
    },
    {
      id: 'dujiangyanIrrigation',
      name: '都江堰',
      description: '公元前256年李冰父子修建的无坝引水工程，至今仍发挥着防洪灌溉作用',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '成都市都江堰市',
      type: 'culture',
      cultureType: 'historical_site',
      bestTime: '全年',
      tags: ['水利工程', '世界遗产', '历史', '古代智慧'],
      rating: 4.6
    },
    {
      id: 'chengduPandaBase', name: '成都大熊猫繁育研究基地',
      description: '我国实施大熊猫等濒危野生动物迁地保护工程的主要研究基地之一',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '成都市成华区熊猫大道1375号', type: 'nature', bestTime: '全年',
      tags: ['大熊猫', '国宝', '动物保护', '科普教育'], rating: 4.8,
      landscapeType: 'urban_nature'
    },
    {
      id: 'leshanGiantBuddha',
      name: '乐山大佛',
      description: '通高71米，是中国最大的一尊摩崖石刻造像',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '乐山市市中区',
      type: 'culture',
      cultureType: 'religious',
      bestTime: '全年',
      tags: ['佛像', '世界遗产', '石刻', '宗教'],
      rating: 4.7
    },
    {
      id: 'jinliAncientStreet',
      name: '锦里古街',
      description: '西蜀历史上最古老最具商业气息的街道之一，成都知名旅游景点',
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      location: '成都市武侯区',
      type: 'culture',
      cultureType: 'folk_customs',
      bestTime: '全年',
      tags: ['古街', '民俗', '小吃', '三国文化'],
      rating: 4.3
    }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开，成都平原油菜花金黄', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['看花', '品茶', '逛宽窄巷子'] },
    { name: '夏季', description: '凉爽宜人，九寨沟、黄龙最美时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['避暑', '游九寨沟', '吃火锅'] },
    { name: '秋季', description: '层林尽染，九寨沟五彩斑斓', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏秋色', '登峨眉', '看红叶'] },
    { name: '冬季', description: '西岭雪山滑雪泡温泉', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['滑雪', '温泉', '吃串串香'] }
  ],
  activities: [
    { id: '1', name: '九寨沟深度游', description: '徒步游览九寨沟精华景点', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'nature', location: '阿坝藏族羌族自治州九寨沟县', duration: '1天', difficulty: '简单', type: '自然观光' },
    { id: '2', name: '峨眉山金顶祈福', description: '登金顶看云海日出', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'religious', location: '乐山市峨眉山市', duration: '2天', difficulty: '中等', type: '宗教朝圣' }
  ],
  routes: [
    {
      id: '1', name: '四川经典五日游', title: '熊猫故里·天府之国',
      description: '体验四川的自然奇观与人文魅力，从熊猫基地到佛教名山的完美旅程',
      duration: '5天', difficulty: '中等',
      highlights: ['成都', '九寨沟', '峨眉山', '乐山大佛'],
      spots: ['成都大熊猫繁育研究基地', '九寨沟', '峨眉山', '乐山大佛'],
      tags: ['自然', '文化', '佛教', '美食'],
      image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
      rating: 4.9, bestTime: '春秋两季',
      traffic: '飞机抵达成都双流机场，高铁或旅游大巴前往各景区',
      suitableFor: '家庭游客、摄影爱好者、美食爱好者'
    }
  ],
  intangibleHeritage: [
    { id: '1', name: '蜀绣', description: '中国四大名绣之一，以严谨细腻、光亮平整著称', level: 'national', category: '传统美术', protectionUnit: '成都蜀绣研究所', features: ['刺绣', '国家级非遗', '四大名绣', '双面异色'], icon: '🧵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '川剧变脸', description: '川剧绝技，瞬间变换脸谱，神秘莫测令人叹服', level: 'national', category: '传统戏剧', protectionUnit: '四川省川剧院', features: ['变脸', '国家级非遗', '川剧', '绝技'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '成都国际非遗节', description: '国际非物质文化遗产节，汇聚全球非遗文化', month: '10月', day: '15-18日左右', location: '成都市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '巴蜀民俗', description: '巴蜀地区独特民俗文化，包括茶馆文化、变脸、火锅等习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['巴蜀文化', '茶馆', '川剧', '天府民俗'] }
  ]
};

export default sichuanData;

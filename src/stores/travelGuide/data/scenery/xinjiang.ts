import type { SceneryData } from '@/typesOfPages/travelGuide';

export const xinjiangData: SceneryData = {
  overview: {
    totalSpots: 200, natureSpots: 130, cultureSpots: 70, topAttractions: [
      { name: '天山天池', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天山明珠，高山冰碛湖，西王母瑶池' },
      { name: '喀纳斯湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '人间仙境神的后花园，变色湖水神秘莫测' },
      { name: '吐鲁番火焰山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '西游记取景地，中国最热的地方' },
      { name: '喀什老城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '西域风情活化石，维吾尔族文化中心' }
    ]
  },
  spots: [
    { id: 'heavenlyLakeOfTianshan', name: '天山天池风景区', description: '是以高山湖泊为中心的自然风景区', location: '昌吉回族自治州阜康市博格达峰北坡山腰', type: 'nature', bestTime: '夏秋两季', tags: ['湖泊', '天山', '雪山', '森林'], rating: 4.7, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'kanasLake', name: '喀纳斯景区', description: '喀纳斯湖位于新疆阿勒泰地区布尔津县北部，是中国最美的湖泊之一', location: '阿勒泰地区布尔津县', type: 'nature', bestTime: '秋季', tags: ['湖泊', '自然风光', '图瓦人', '摄影'], rating: 4.8, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'flameMountain', name: '火焰山景区', description: '西游记火焰山原型地，中国最热的地方，红色山体壮观', location: '吐鲁番市高昌区', type: 'nature', bestTime: '夏季', tags: ['沙漠', '高温', '西游记', '地质奇观'], rating: 4.3, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'naratPrairie', name: '那拉提草原', description: '空中草原，世界四大草原之一的亚高山草甸植物区', location: '伊犁哈萨克自治州新源县', type: 'nature', bestTime: '夏季', tags: ['草原', '雪山', '哈萨克族', '牧歌'], rating: 4.6, landscapeType: 'vegetation', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'kashgarOldCity', name: '喀什古城', description: '西域风情活化石，维吾尔族文化中心，千年历史的高台民居建筑群', location: '喀什市喀什古城景区', type: 'culture', cultureType: 'street_memorial', bestTime: '全年', tags: ['古城', '维吾尔族', '西域风情', '高台民居'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jiaoheRuins', name: '交河故城', description: '世界上最大最古老保存最完好的生土建筑城市遗址，丝绸之路重要节点', location: '吐鲁番市高昌区', type: 'culture', cultureType: 'historical_site', bestTime: '春秋两季', tags: ['故城遗址', '丝绸之路', '生土建筑', '考古'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'xinjiangRegionalMuseum', name: '新疆维吾尔自治区博物馆', description: '馆藏楼兰美女干尸等珍贵文物，系统展示新疆历史文化与丝路文明', location: '乌鲁木齐市沙依巴克区', type: 'culture', cultureType: 'museum', bestTime: '全年', tags: ['博物馆', '干尸', '丝路文明', '文物'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '秋季', description: '喀纳斯层林尽染最美时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['游览喀纳斯', '品尝瓜果', '体验维吾尔族风情'] }],
  activities: [{ id: '1', name: '喀什古城深度游', description: '体验西域风情品尝当地美食', category: 'cultural', location: '喀什市喀什古城', duration: '1天', difficulty: '简单', type: '文化体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }],
  routes: [{ id: '1', name: '新疆大环线十二日游', title: '西域风情·大美新疆', description: '穿越天山南北感受西域风情与壮美自然风光', duration: '12天', difficulty: '较难', highlights: ['乌鲁木齐', '喀纳斯', '伊犁', '喀什', '吐鲁番'], spots: ['天山天池风景区', '喀纳斯景区'], tags: ['自然风光', '民族文化', '丝路', '摄影'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '6-9月', traffic: '包车或自驾', suitableFor: '摄影爱好者、深度游游客' }],
  intangibleHeritage: [
    { id: '1', name: '维吾尔木卡姆', description: '维吾尔族古典音乐大曲，集歌舞乐于一体', level: 'national', category: '传统音乐', protectionUnit: '新疆木卡姆艺术团', features: ['木卡姆', '国家级非遗', '维吾尔族', '古典音乐'], icon: '🎵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '和田玉雕', description: '以和田美玉为材的雕刻技艺，温润如脂精雕细琢', level: 'national', category: '传统美术', protectionUnit: '和田市玉雕协会', features: ['玉雕', '国家级非遗', '和田玉', '温润如脂'], icon: '💎', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '古尔邦节', description: '维吾尔族等穆斯林最盛大的节日，宰牲献祭', month: '6月', day: '左右(每年浮动)', location: '新疆各地', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '维吾尔民俗', description: '维吾尔族独特民俗文化，包括麦西热甫、烤馕、手鼓舞等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['维吾尔文化', '麦西热甫', '烤馕', '西域民俗'] }
  ]
};

export default xinjiangData;

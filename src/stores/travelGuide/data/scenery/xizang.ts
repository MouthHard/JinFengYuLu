import type { SceneryData } from '@/typesOfPages/travelGuide';

export const xizangData: SceneryData = {
  overview: {
    totalSpots: 100, natureSpots: 60, cultureSpots: 40, topAttractions: [
      { name: '布达拉宫', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界上海拔最高的宫殿，藏传佛教圣地' },
      { name: '大昭寺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '西藏最神圣的寺庙，朝圣者的终极目的地' },
      { name: '纳木错', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '西藏三大圣湖之一，天湖之称' },
      { name: '珠穆朗玛峰', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界最高峰，地球之巅8848.86米' }
    ]
  },
  spots: [
    { id: 'potalaPalace', name: '布达拉宫', description: '位于拉萨市区西北的玛布日山上，是一座宫堡式建筑群', location: '拉萨市城关区北京中路35号', type: 'culture', cultureType: 'religious', bestTime: '夏秋两季', tags: ['宫殿', '佛教', '世界遗产', '地标'], rating: 4.9, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jokhangTemple', name: '大昭寺', description: '西藏最神圣的寺庙，供奉着释迦牟尼十二岁等身像，朝圣者的终极目的地', location: '拉萨市城关区八廓街', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['寺庙', '佛教圣地', '朝圣', '世界遗产'], rating: 4.8, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'tashilhunpoMonastery', name: '扎什伦布寺', description: '日喀则地区最大寺庙，历代班禅驻锡地，藏传佛教格鲁派六大寺院之一', location: '日喀则市桑珠孜区', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['寺院', '班禅', '格鲁派', '古建筑'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'namtsoLake', name: '纳木错', description: '西藏第二大湖泊，也是中国第三大的咸水湖', location: '拉萨市当雄县', type: 'nature', bestTime: '夏季', tags: ['湖泊', '圣湖', '高原', '摄影'], rating: 4.7, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'everest', name: '珠穆朗玛峰', description: '世界最高峰，地球之巅8848.86米，登山者的终极梦想', location: '日喀则市定日县', type: 'nature', bestTime: '春季和秋季', tags: ['雪山', '世界最高峰', '登山', '挑战'], rating: 5.0, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yamdrokLake', name: '羊卓雍错', description: '西藏三大圣湖之一，碧玉般的湖泊镶嵌在群山之中', location: '山南市贡嘎县', type: 'nature', bestTime: '夏季', tags: ['湖泊', '圣湖', '高原', '摄影'], rating: 4.6, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '夏季', description: '气温适宜含氧量较高', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['游览布达拉宫', '转经大昭寺', '纳木错观景'] }],
  activities: [{ id: '1', name: '拉萨朝圣之旅', description: '转八廓街朝拜大昭寺', category: 'religious', location: '拉萨市八廓街', duration: '2天', difficulty: '中等', type: '宗教朝圣', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }],
  routes: [{ id: '1', name: '西藏圣地七日游', title: '雪域高原·纯净天堂', description: '探索雪域高原感受藏传佛教文化与壮美自然风光', duration: '7天', difficulty: '较难', highlights: ['拉萨', '纳木错', '林芝', '日喀则'], spots: ['布达拉宫', '纳木错'], tags: ['高原', '佛教文化', '自然风光', '摄影'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '5-10月', traffic: '飞机+包车', suitableFor: '摄影爱好者、文化探索者、身体健康的游客' }],
  intangibleHeritage: [
    { id: '1', name: '藏戏', description: '藏族传统戏剧，戴着面具演出，以唱韵舞表白六功著称', level: 'national', category: '传统戏剧', protectionUnit: '西藏自治区藏剧团', features: ['藏戏', '国家级非遗', '面具戏', '六功'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '唐卡绘制', description: '藏族传统绘画艺术，以矿物颜料绘制、色彩绚丽著称', level: 'national', category: '传统美术', protectionUnit: '西藏唐卡画院', features: ['唐卡', '国家级非遗', '宗教艺术', '矿物颜料'], icon: '🖼️', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '雪顿节', description: '藏族最盛大的节日之一，意为酸奶节，晒佛仪式壮观', month: '8月', day: '20-28日左右', location: '拉萨市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '藏族民俗', description: '藏族独特民俗文化，包括献哈达、转经、酥油茶等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['藏族文化', '哈达', '转经', '雪域民俗'] }
  ]
};

export default xizangData;

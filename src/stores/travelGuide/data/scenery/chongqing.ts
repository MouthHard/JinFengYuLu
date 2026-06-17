import type { SceneryData } from '@/typesOfPages/travelGuide';

export const chongqingData: SceneryData = {
  overview: {
    totalSpots: 180, natureSpots: 90, cultureSpots: 90, topAttractions: [
      { name: '洪崖洞', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '现实版千与千寻，吊脚楼群夜景震撼' },
      { name: '解放碑', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '重庆地标，中国西部第一街' },
      { name: '长江三峡', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '瞿塘峡巫峡西陵峡，壮丽峡谷风光' },
      { name: '武隆天生三桥', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界自然遗产，喀斯特地貌奇观' }
    ]
  },
  spots: [
    { id: 'hongyaCave', name: '洪崖洞民俗风貌区', description: '依山就势沿江而建的吊脚楼群，夜景如梦似幻', location: '重庆市渝中区嘉陵江滨江路88号', type: 'culture', cultureType: 'garden_arch', bestTime: '夜晚', tags: ['夜景', '建筑', '民俗', '网红'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'threeGorges', name: '长江三峡', description: '西起重庆奉节白帝城东至湖北宜昌南津关的193千米峡谷河段', location: '重庆市至湖北省', type: 'nature', bestTime: '春秋两季', tags: ['峡谷', '长江', '自然风光', '游船'], rating: 4.8, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'wulongKarst', name: '武隆天生三桥', description: '世界自然遗产，喀斯特地貌奇观，天坑地缝壮观', location: '重庆市武隆区', type: 'nature', bestTime: '全年', tags: ['天坑', '喀斯特', '自然遗产', '电影取景地'], rating: 4.7, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jieFangBei', name: '解放碑步行街', description: '中国西部第一街，重庆地标性商业中心', location: '重庆市渝中区解放碑', type: 'culture', cultureType: 'folk_customs', bestTime: '全天', tags: ['地标', '购物', '美食', '都市'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'ciqikou', name: '磁器口古镇', description: '千年古镇，巴渝文化发祥地之一，小吃云集', location: '重庆市沙坪坝区', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['古镇', '历史', '小吃', '文艺'], rating: 4.2, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开山城花开正艳，适合户外游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['南山赏花', '磁器口漫步', '品尝火锅', '游两江'] },
    { name: '夏季', description: '火炉城市注意防暑，可乘船游三峡避暑', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['乘船游三峡', '夜游洪崖洞', '吃火锅', '武隆避暑'] },
    { name: '秋季', description: '秋高气爽红叶满山，是游览三峡的最佳时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['三峡观红叶', '登高望远', '品秋蟹', '温泉度假'] },
    { name: '冬季', description: '湿冷阴沉但火锅暖身，雾都别有韵味', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['吃火锅', '泡温泉', '逛解放碑', '体验山城夜景'] }
  ],
  activities: [
    { id: '1', name: '山城夜游', description: '乘坐长江索道看夜景游览洪崖洞解放碑', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'nightlife', location: '重庆市渝中区', duration: '3小时', difficulty: '简单', type: '夜景观光' },
    { id: '2', name: '长江三峡游轮之旅', description: '乘坐豪华游轮穿越三峡观赏壮丽峡谷风光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'cruise', location: '重庆市至宜昌市', duration: '3-4天', difficulty: '简单', type: '水上游览' },
    { id: '3', name: '武隆天坑地缝探险', description: '游览天生三龙天坑地缝感受喀斯特地貌魅力', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'adventure', location: '重庆市武隆区', duration: '1天', difficulty: '中等', type: '地质探险' },
    { id: '4', name: '重庆火锅美食品鉴', description: '品尝正宗九宫格老火锅体验麻辣鲜香', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'food', location: '重庆市各区', duration: '半天', difficulty: '简单', type: '美食体验' }
  ],
  routes: [
    { id: '1', name: '重庆山城四日游', title: '魔幻山城·火锅之都', description: '感受8D魔幻城市魅力品味地道川渝文化', duration: '4天', difficulty: '简单', highlights: ['洪崖洞', '解放碑', '长江三峡', '武隆'], spots: ['洪崖洞民俗风貌区', '长江三峡', '武隆天生三桥', '解放碑步行街'], tags: ['山城', '夜景', '火锅', '峡谷'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '全年', traffic: '地铁+旅游大巴', suitableFor: '所有游客' },
    { id: '2', name: '重庆周边二日游', title: '山水重庆·人文荟萃', description: '游览武隆大足石刻等周边精华景点', duration: '2天', difficulty: '中等', highlights: ['武隆', '大足石刻', '金佛山'], spots: ['武隆天生三桥'], tags: ['自然遗产', '石刻艺术', '名山'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '春秋两季', traffic: '包车+高铁', suitableFor: '自然爱好者、文化爱好者' },
    { id: '3', name: '重庆三峡五日深度游', title: '壮丽三峡·诗画长江', description: '乘坐游轮深度游览三峡全程体验巴楚文化', duration: '5天', difficulty: '简单', highlights: ['白帝城', '巫峡', '瞿塘峡', '三峡大坝'], spots: ['长江三峡'], tags: ['长江', '峡谷', '历史文化', '水利工程'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '春秋两季', traffic: '游轮', suitableFor: '所有游客、摄影爱好者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '川江号子', description: '长江船工在行船中为统一动作而唱的劳动号子，高亢激昂', level: 'national', category: '传统音乐', protectionUnit: '重庆市文化艺术研究院', features: ['劳动号子', '国家级非遗', '长江文化', '船工文化'], icon: '🎵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '梁平木版年画', description: '重庆梁平传统民间艺术，以粗犷豪放、色彩浓艳著称', level: 'national', category: '传统美术', protectionUnit: '梁平区文化遗产保护中心', features: ['木版年画', '国家级非遗', '民间美术', '巴渝文化'], icon: '🎨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '重庆火锅节', description: '以火锅文化为主题的大型美食节庆活动，展示重庆火锅魅力', month: '10月', day: '1日', location: '重庆市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '巴渝民俗', description: '重庆地区独特的巴渝民俗文化，包括吊脚楼、摆手舞等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['巴渝文化', '吊脚楼', '山城民俗'] }
  ]
};

export default chongqingData;

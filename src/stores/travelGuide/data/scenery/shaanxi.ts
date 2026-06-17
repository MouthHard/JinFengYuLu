import type { SceneryData } from '@/typesOfPages/travelGuide';

export const shaanxiData: SceneryData = {
  overview: {
    totalSpots: 200, natureSpots: 80, cultureSpots: 120, topAttractions: [
      { name: '秦始皇兵马俑', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界第八大奇迹，秦始皇陵的陪葬坑' },
      { name: '华清池', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '杨贵妃沐浴之地，西安事变发生地' },
      { name: '大雁塔', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '玄奘法师译经之所，唐代佛教建筑艺术杰作' },
      { name: '华山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '奇险天下第一山，西岳华山五峰耸立' }
    ]
  },
  spots: [
    { id: 'terracottaWarriors', name: '秦始皇兵马俑博物馆', description: '世界文化遗产，被誉为世界第八大奇迹', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '西安市临潼区秦陵北路', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['兵马俑', '秦朝', '考古', '世界遗产'], rating: 4.9 },
    { id: 'bigWildGoosePagoda', name: '大雁塔', description: '唐代佛教建筑艺术杰作，玄奘法师译经之所，西安地标', location: '西安市雁塔区大慈恩寺内', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['古塔', '佛教', '玄奘', '唐代'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'huaqingPool', name: '华清宫', description: '杨贵妃沐浴之地，唐代皇家温泉行宫，西安事变发生地', location: '西安市临潼区华清路', type: 'culture', cultureType: 'royal', bestTime: '全年', tags: ['温泉', '唐代', '杨贵妃', '历史'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'huaMountain', name: '华山', description: '中华五岳之西岳，以险著称于世', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '渭南市华阴市', type: 'nature', bestTime: '春秋两季', tags: ['名山', '登山', '险峻', '日出'], rating: 4.8, landscapeType: 'mountain' },
    { id: 'hukouWaterfallShaanxi', name: '壶口瀑布（陕西侧）', description: '黄河上最大的黄色瀑布，气势磅礴令人震撼', location: '延安市宜川县壶口乡', type: 'nature', bestTime: '春秋两季', tags: ['瀑布', '黄河', '壮观', '摄影'], rating: 4.7, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'taibaiMountain', name: '太白山国家森林公园', description: '秦岭主峰，海拔3767米，原始森林风光壮丽', location: '宝鸡市眉县', type: 'nature', bestTime: '夏季', tags: ['名山', '秦岭', '森林', '避暑'], rating: 4.5, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '春季', description: '气候宜人适合游览古都', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['参观兵马俑', '登华山', '回民街品尝美食'] }],
  activities: [{ id: '1', name: '兵马俑深度讲解', description: '专业导游讲解秦朝历史文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'culture', location: '西安市临潼区', duration: '半天', difficulty: '简单', type: '文化体验' }],
  routes: [{ id: '1', name: '陕西古都四日游', title: '十三朝古都·华夏文明', description: '深度探索十三朝古都西安的历史底蕴，从秦皇汉武到盛唐文化', duration: '4天', difficulty: '中等', highlights: ['兵马俑', '大雁塔', '华山', '城墙'], spots: ['秦始皇兵马俑博物馆', '华山'], tags: ['历史文化', '古都风韵', '世界遗产'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.9, bestTime: '春秋两季', traffic: '飞机或高铁抵达西安咸阳机场，市内地铁公交便捷', suitableFor: '历史爱好者、文化探索者、家庭游客' }],
  intangibleHeritage: [
    { id: '1', name: '秦腔', description: '中国最古老的戏剧之一，以高亢激昂、粗犷豪放著称', level: 'national', category: '传统戏剧', protectionUnit: '陕西省戏曲研究院', features: ['秦腔', '国家级非遗', '古老戏剧', '梆子腔'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '华县皮影', description: '中国皮影戏的杰出代表，以精雕细刻和碗碗腔著称', level: 'national', category: '传统戏剧', protectionUnit: '华州区非物质文化遗产保护中心', features: ['皮影', '国家级非遗', '碗碗腔', '影戏'], icon: '🎬', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '西安城墙灯会', description: '古城墙上的新春灯会，万盏花灯映古城', month: '1月下旬-2月', day: '持续至元宵后', location: '西安城墙', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '关中民俗', description: '关中地区传统民俗文化，包括社火、秦腔、面花等习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['关中文化', '社火', '面花', '三秦民俗'] }
  ]
};

export default shaanxiData;

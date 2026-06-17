import type { SceneryData } from '@/typesOfPages/travelGuide';

export const anhuiData: SceneryData = {
  overview: {
    totalSpots: 150, natureSpots: 80, cultureSpots: 70, topAttractions: [
      { name: '黄山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '五岳归来不看山，黄山归来不看岳，世界文化与自然双重遗产' },
      { name: '宏村', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国画里的乡村，徽派建筑典范，世界文化遗产' },
      { name: '西递', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '明清古民居博物馆，桃花源里人家' },
      { name: '九华山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '地藏王菩萨道场，四大佛教名山之一' }
    ]
  },
  spots: [
    { id: 'huangshanMountain', name: '黄山', description: '以奇松怪石云海温泉四绝著称于世', location: '黄山市黄山区汤口镇', type: 'nature', bestTime: '四季皆宜', tags: ['世界遗产', '名山', '云海', '日出'], rating: 4.9, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'hongcunVillage', name: '宏村', description: '徽派古村落的典型代表，牛形水系设计独特', location: '黄山市黟县宏村镇', type: 'culture', cultureType: 'garden_arch', bestTime: '春秋两季', tags: ['古村落', '徽派建筑', '世界遗产', '摄影'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'xidiVillage', name: '西递古村', description: '明清古民居博物馆，桃花源里人家，徽州三绝之一', location: '黄山市黟县西递镇', type: 'culture', cultureType: 'garden_arch', bestTime: '春秋两季', tags: ['古村落', '明清建筑', '世界遗产', '摄影'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jiuhuashan', name: '九华山', description: '地藏王菩萨道场，四大佛教名山之一，莲花佛国', location: '池州市青阳县', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['佛教名山', '寺庙', '圣地', '云海'], rating: 4.8, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'tunxiAncientStreet', name: '屯溪老街', description: '中国保存最完整的宋明清建筑步行商业街，活动着的清明上河图', location: '黄山市屯溪区', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['老街', '商业', '徽派建筑', '美食'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'taipingLake', name: '太平湖', description: '安徽省最大的人工湖，青山绿水景色秀美，被誉为黄山情侣', location: '黄山市黄山区', type: 'nature', bestTime: '全年', tags: ['湖泊', '度假', '钓鱼', '水上运动'], rating: 4.4, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'qiandaoLake', name: '新安江山水画廊', description: '百里画廊新安江，两岸青山绿水如诗如画', location: '黄山市歙县', type: 'nature', bestTime: '春季', tags: ['河流', '山水', '摄影', '徒步'], rating: 4.5, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '油菜花海映衬粉墙黛瓦，宏村西递春意盎然', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏油菜花', '游古镇', '摄影创作', '品尝徽菜'] },
    { name: '夏季', description: '黄山云海壮观，九华山清凉避暑胜地', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['登黄山看云海', '九华山礼佛', '漂流戏水', '避暑纳凉'] },
    { name: '秋季', description: '层林尽染塔川红叶，秋高气爽登山好时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['塔川赏秋色', '登高望远', '品蟹赏菊', '古镇漫步'] },
    { name: '冬季', description: '雪后黄山银装素裹，温泉暖身惬意舒适', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['黄山观雪景', '泡温泉', '逛庙会', '品尝腊味'] }
  ],
  activities: [
    { id: '1', name: '黄山观日出云海', description: '登光明顶或狮子峰看日出云海奇观', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'nature', location: '黄山市黄山区', duration: '2天', difficulty: '中等', type: '自然观光' },
    { id: '2', name: '徽州古村落深度游', description: '游览宏村西递体验徽派建筑文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'culture', location: '黄山市黟县', duration: '1天', difficulty: '简单', type: '文化体验' },
    { id: '3', name: '九华山朝圣之旅', description: '游览化城寺肉身宝殿等主要寺院', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'religious', location: '池州市青阳县', duration: '2天', difficulty: '简单', type: '宗教朝圣' },
    { id: '4', name: '徽菜美食品鉴', description: '品尝臭鳜鱼毛豆腐等正宗徽菜', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'food', location: '黄山市屯溪区', duration: '半天', difficulty: '简单', type: '美食体验' }
  ],
  routes: [
    { id: '1', name: '安徽徽州文化四日游', title: '水墨徽州·梦幻黄山', description: '探访世界文化遗产感受徽州文化魅力', duration: '4天', difficulty: '中等', highlights: ['黄山', '宏村', '西递', '九华山'], spots: ['黄山', '宏村', '西递古村', '九华山'], tags: ['世界遗产', '名山', '古村落', '佛教'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '3-11月', traffic: '高铁+包车', suitableFor: '文化爱好者、摄影师' },
    { id: '2', name: '皖南古村二日游', title: '画里乡村·梦里徽州', description: '深度游览皖南最美古村落群', duration: '2天', difficulty: '简单', highlights: ['宏村', '西递', '塔川', '卢村'], spots: ['宏村', '西递古村'], tags: ['古村落', '摄影', '徽派建筑', '田园风光'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '春秋两季', traffic: '自驾', suitableFor: '摄影爱好者、家庭游客' },
    { id: '3', name: '安徽山水禅意三日游', title: '名山古刹·禅意之旅', description: '登黄山览胜九华山问禅', duration: '3天', difficulty: '中等', highlights: ['黄山', '九华山', '太平湖'], spots: ['黄山', '九华山'], tags: ['名山', '佛教', '自然风光', '禅修'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '全年', traffic: '高铁+旅游大巴', suitableFor: '信众、自然爱好者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '宣纸制作技艺', description: '中国文房四宝之一，纸寿千年，被誉为纸中之王', level: 'national', category: '传统技艺', protectionUnit: '中国宣纸股份有限公司', features: ['宣纸', '国家级非遗', '文房四宝', '纸中之王'], icon: '📜', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '徽墨制作技艺', description: '徽墨以落墨如漆、万载存真著称，文房四宝之一', level: 'national', category: '传统技艺', protectionUnit: '安徽省徽墨研究所', features: ['徽墨', '国家级非遗', '文房四宝', '制墨工艺'], icon: '✒️', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '黄山国际旅游节', description: '以黄山为主题的国际旅游盛会，展示徽州山水人文', month: '11月', day: '15-18日左右', location: '黄山市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '徽州民俗', description: '徽州地区独特民俗文化，包括徽派建筑、宗族祠堂、徽商习俗等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['徽州文化', '徽派建筑', '宗族文化', '徽商'] }
  ]
};

export default anhuiData;

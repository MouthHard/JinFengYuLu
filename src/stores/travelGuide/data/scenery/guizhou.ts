import type { SceneryData } from '@/typesOfPages/travelGuide';

export const guizhouData: SceneryData = {
  overview: {
    totalSpots: 150, natureSpots: 90, cultureSpots: 60, topAttractions: [
      { name: '黄果树瀑布', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '亚洲第一大瀑布，西游记取景地' },
      { name: '千户苗寨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界上最大的苗族聚居村寨，千与千寻原型' },
      { name: '荔波小七孔', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '地球腰带上的绿宝石，喀斯特森林秘境' },
      { name: '镇远古镇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '东方威尼斯，两千多年历史的古城' }
    ]
  },
  spots: [
    { id: 'huangguoshuWaterfall', name: '黄果树瀑布', description: '以水势浩大著称，属喀斯特地貌中的侵蚀裂典型瀑布', location: '安顺市镇宁布依族苗族自治县', type: 'nature', bestTime: '夏秋两季', tags: ['瀑布', '喀斯特', '自然', '壮观'], rating: 4.7, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'xijiangMiaoVillage', name: '西江千户苗寨', description: '由十余个依山而建的自然村寨相连成片', location: '黔东南苗族侗族自治州雷山县', type: 'culture', cultureType: 'garden_arch', bestTime: '全年', tags: ['苗族', '古村落', '民族文化', '夜景'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'liboXiaoqikong', name: '荔波小七孔', description: '地球腰带上的绿宝石喀斯特森林秘境水上森林奇观', location: '黔南布依族苗族自治州荔波县', type: 'nature', bestTime: '夏季', tags: ['喀斯特', '森林', '瀑布', '自然遗产'], rating: 4.8, landscapeType: 'vegetation', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'zhenyuanAncientTown', name: '镇远古镇', description: '东方威尼斯两千多年历史的古城舞阳河穿城而过', location: '黔东南苗族侗族自治州镇远县', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['古镇', '历史文化', '河流', '夜景'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'zhijinCave', name: '织金洞', description: '中国最美旅游洞穴之王溶洞博物馆石笋石柱壮观', location: '毕节市织金县', type: 'nature', bestTime: '全年', tags: ['溶洞', '喀斯特', '地质公园', '摄影'], rating: 4.6, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'zhaoxingDongVillage', name: '肇兴侗寨', description: '全国最大的侗族村寨，鼓楼文化之乡，侗族大歌发源地', location: '黔东南苗族侗族自治州黎平县', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['侗寨', '鼓楼', '民族文化', '大歌'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开百里杜鹃盛开，气候宜人适合户外游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['百里杜鹃赏花', '千户苗寨游览', '镇远古镇漫步'] },
    { name: '夏季', description: '避暑胜地气候凉爽是贵州最佳旅游季节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['观瀑布', '体验苗族风情', '溶洞探险', '漂流戏水'] },
    { name: '秋季', description: '秋高气爽红叶满山，梯田金黄景色迷人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['加榜梯田摄影', '古镇漫游', '品尝酸汤鱼', '登高望远'] },
    { name: '冬季', description: '湿冷阴沉但民族节庆丰富可体验独特民俗文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['苗族新年体验', '泡温泉', '品尝腊味', '参观博物馆'] }
  ],
  activities: [
    { id: '1', name: '苗族长桌宴体验', description: '品尝酸汤鱼体验高山流水敬酒礼感受苗族热情好客', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'cultural', location: '黔东南苗族侗族自治州雷山县', duration: '半天', difficulty: '简单', type: '民族文化体验' },
    { id: '2', name: '黄果树瀑布群深度游', description: '游览陡坡塘天星桥等周边瀑布群欣赏喀斯特奇观', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'nature', location: '安顺市镇宁县', duration: '1天', difficulty: '简单', type: '自然观光' },
    { id: '3', name: '荔波小七孔徒步穿越', description: '穿越原始水上森林体验地球绿宝石的魅力', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'adventure', location: '黔南州荔波县', duration: '1天', difficulty: '中等', type: '户外探险' },
    { id: '4', name: '镇远古镇夜游舞阳河', description: '夜晚乘船游览舞阳河欣赏两岸灯火辉煌的古城夜景', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'nightlife', location: '黔东南州镇远县', duration: '2小时', difficulty: '简单', type: '夜景观光' }
  ],
  routes: [
    { id: '1', name: '贵州多彩五日游', title: '多彩贵州·民族风情', description: '畅游贵州精华景点感受多彩民族文化和壮美自然风光', duration: '5天', difficulty: '简单', highlights: ['黄果树瀑布', '千户苗寨', '小七孔', '镇远古镇'], spots: ['黄果树瀑布', '西江千户苗寨', '荔波小七孔', '镇远古镇'], tags: ['瀑布', '民族文化', '喀斯特', '古镇'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '全年', traffic: '高铁+包车', suitableFor: '所有游客、摄影师' },
    { id: '2', name: '贵州西线四日游', title: '山水秘境·喀斯特之旅', description: '深入探索贵州西部喀斯特地貌和民族文化', duration: '4天', difficulty: '中等', highlights: ['黄果树', '织金洞', '马岭河峡谷', '万峰林'], spots: ['黄果树瀑布', '织金洞'], tags: ['喀斯特', '溶洞', '峡谷', '峰林'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '5-10月', traffic: '包车', suitableFor: '地质爱好者、摄影师' },
    { id: '3', name: '贵州东线五日游', title: '侗乡风情·古镇探秘', description: '探访黔东南少数民族村寨和历史文化名镇', duration: '5天', difficulty: '简单', highlights: ['镇远古镇', '肇兴侗寨', '岜沙苗寨', '朗德上寨'], spots: ['镇远古镇'], tags: ['侗族', '苗族', '古镇', '民族文化'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '全年', traffic: '高铁+包车', suitableFor: '文化爱好者、民族学研究者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '苗绣', description: '苗族刺绣以图案精美、针法丰富著称，被誉为穿在身上的史诗', level: 'national', category: '传统美术', protectionUnit: '贵州省非物质文化遗产保护中心', features: ['刺绣', '国家级非遗', '苗族', '穿在身上的史诗'], icon: '🧵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '侗族大歌', description: '侗族无指挥无伴奏多声部合唱，天籁之音', level: 'national', category: '传统音乐', protectionUnit: '从江县文化馆', features: ['大歌', '国家级非遗', '侗族', '多声部合唱'], icon: '🎵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '苗族姊妹饭节', description: '苗族青年男女社交节日，以彩色糯米饭传情达意', month: '4-5月', day: '15日左右', location: '台江县', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '苗侗民俗', description: '贵州苗侗地区民俗文化，包括银饰、蜡染、芦笙舞等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['苗族文化', '侗族文化', '银饰', '芦笙'] }
  ]
};

export default guizhouData;
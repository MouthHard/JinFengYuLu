import type { SceneryData } from '@/typesOfPages/travelGuide';

export const hubeiData: SceneryData = {
  overview: {
    totalSpots: 170, natureSpots: 90, cultureSpots: 80, topAttractions: [
      { name: '黄鹤楼', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天下江山第一楼，江南三大名楼之一' },
      { name: '神农架', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '华中屋脊，原始森林秘境，野人传说地' },
      { name: '武当山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '道教名山，太极拳发源地，武当武术发祥地' },
      { name: '宜昌三峡', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '长江三峡核心段，三峡大坝所在地' }
    ]
  },
  spots: [
    { id: 'yellowCraneTower', name: '黄鹤楼', description: '位于蛇山之巅，濒临万里长江，是武汉的地标性建筑', location: '武汉市武昌区蛇山西坡1号', type: 'culture', cultureType: 'garden_arch', bestTime: '春季', tags: ['名楼', '诗词', '地标', '文化'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'shennongjia', name: '神农架林区', description: '中国唯一以林区命名的县级行政区，拥有完好的亚热带森林生态系统', location: '神农架林区', type: 'nature', bestTime: '夏秋两季', tags: ['原始森林', '自然保护区', '野生动植物'], rating: 4.6, landscapeType: 'vegetation', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'wudangMountain', name: '武当山', description: '道教名山，太极拳发源地，武当武术发祥地', location: '十堰市丹江口市', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['道教', '名山', '武术', '古建筑'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'threeGorgesDam', name: '三峡大坝', description: '世界最大的水利枢纽工程，国之重器', location: '宜昌市夷陵区', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['水利工程', '现代建筑', '科技', '壮观'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'eastLake', name: '武汉东湖', description: '中国最大的城中湖之一，楚文化游览胜地', location: '武汉市武昌区', type: 'nature', bestTime: '春季', tags: ['湖泊', '樱花', '休闲', '文化'], rating: 4.3, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'enshiCanyon', name: '恩施大峡谷', description: '东方科罗拉多，绝壁栈道一炷香等奇观令人叹为观止', location: '恩施土家族苗族自治州恩施市', type: 'nature', bestTime: '春秋两季', tags: ['峡谷', '绝壁', '栈道', '喀斯特'], rating: 4.7, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'shennongAltar', name: '神农顶风景区', description: '华中屋脊，原始森林风光壮丽，野生动植物资源丰富', location: '神农架林区', type: 'nature', bestTime: '夏季', tags: ['原始森林', '华中屋脊', '避暑', '生态'], rating: 4.5, landscapeType: 'vegetation', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '武大樱花东湖梅花春暖花开适合踏青', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏樱花', '登黄鹤楼', '游东湖', '品尝热干面'] },
    { name: '夏季', description: '火炉城市注意防暑神农架是避暑好去处', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['神农架避暑', '三峡游轮', '品尝热干面', '东湖游泳'] },
    { name: '秋季', description: '三峡红叶层林尽染秋高气爽登高好时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['三峡观红叶', '武当问道', '登高望远', '品尝螃蟹'] },
    { name: '冬季', description: '湿冷阴沉可泡温泉体验湖北美食', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['泡温泉', '品尝藕汤', '参观博物馆', '品尝火锅'] }
  ],
  activities: [
    { id: '1', name: '长江三峡游轮之旅', description: '乘坐豪华游轮穿越三峡观赏壮丽峡谷风光', category: 'cruise', location: '宜昌至重庆', duration: '3天', difficulty: '简单', type: '水上游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '武当山问道之旅', description: '游览武当山古建筑群学习太极拳基础', category: 'cultural', location: '十堰市丹江口市', duration: '2天', difficulty: '中等', type: '文化体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '神农架生态探险', description: '探索原始森林寻找金丝猴等珍稀动物', category: 'adventure', location: '神农架林区', duration: '2天', difficulty: '中等', type: '生态旅游', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '4', name: '武汉美食之旅', description: '品尝热干面豆皮鸭脖等武汉特色小吃', category: 'food', location: '武汉市各区', duration: '1天', difficulty: '简单', type: '美食体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '湖北荆楚文化五日游', title: '千湖之省·灵秀湖北', description: '畅游湖北精华景点感受荆楚文化魅力', duration: '5天', difficulty: '简单', highlights: ['武汉', '宜昌三峡', '神农架', '武当山'], spots: ['黄鹤楼', '神农架林区', '武当山'], tags: ['历史文化', '自然风光', '道教', '三峡'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '3-11月', traffic: '高铁+包车', suitableFor: '所有游客、文化爱好者' },
    { id: '2', name: '宜昌三峡二日游', title: '壮丽三峡·大国重器', description: '游览三峡大坝及周围景点感受现代工程奇迹', duration: '2天', difficulty: '简单', highlights: ['三峡大坝', '三峡人家', '清江画廊'], spots: ['三峡大坝'], tags: ['水利工程', '自然风光', '民俗文化'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '全年', traffic: '高铁或自驾', suitableFor: '所有游客、工程爱好者' },
    { id: '3', name: '湖北山水四日游', title: '灵秀湖北·山水画廊', description: '深度游览湖北自然山水和人文景观', duration: '4天', difficulty: '中等', highlights: ['神农架', '武当山', '恩施大峡谷', '宜昌'], spots: ['神农架林区', '武当山', '三峡大坝'], tags: ['自然风光', '道教文化', '峡谷', '森林'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '5-10月', traffic: '包车', suitableFor: '自然爱好者、摄影师' }
  ],
  intangibleHeritage: [
    { id: '1', name: '汉绣', description: '楚文化孕育的刺绣艺术，以色彩浓艳、构图饱满著称', level: 'national', category: '传统美术', protectionUnit: '武汉市汉绣研究院', features: ['刺绣', '国家级非遗', '楚文化', '汉派工艺'], icon: '🧵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '楚式漆器', description: '楚国传统漆器工艺，红黑辉映、彩绘绚烂', level: 'national', category: '传统技艺', protectionUnit: '荆州市非物质文化遗产保护中心', features: ['漆器', '国家级非遗', '楚文化', '髹漆工艺'], icon: '🏺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '武汉渡江节', description: '纪念毛泽东横渡长江的群众性游泳活动，万人竞渡', month: '7月', day: '16日', location: '武汉市长江段', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '荆楚民俗', description: '荆楚大地传统民俗文化，包括端午祭祀、楚剧、热干面文化等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['荆楚文化', '端午', '楚剧', '江城民俗'] }
  ]
};

export default hubeiData;

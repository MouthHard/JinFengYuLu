import type { SceneryData } from '@/typesOfPages/travelGuide';

export const heilongjiangData: SceneryData = {
  overview: {
    totalSpots: 140, natureSpots: 80, cultureSpots: 60, topAttractions: [
      { name: '哈尔滨冰雪大世界', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界最大冰雪主题乐园，冰雕雪塑艺术殿堂' },
      { name: '漠河北极村', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国最北端，可观赏北极光现象' },
      { name: '五大连池', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天然火山博物馆，世界地质公园' },
      { name: '镜泊湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国最大高山堰塞湖，吊水楼瀑布壮观' }
    ]
  },
  spots: [
    { id: 'harbinIceAndSnowWorld', name: '哈尔滨冰雪大世界', description: '始创于1999年是由黑龙江省哈尔滨市政府为迎接千年庆典神州世纪而推出的大型冰雪艺术精品工程', location: '哈尔滨市松北区', type: 'culture', bestTime: '冬季', tags: ['冰雪', '艺术', '夜景', '节日'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'sophiaCathedral', name: '圣索菲亚教堂', description: '远东地区最大东正教堂，拜占庭式建筑典范，哈尔滨地标', location: '哈尔滨市道里区透笼街88号', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['教堂', '建筑', '俄式', '地标'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'centralStreetHarbin', name: '中央大街步行街', description: '亚洲最长的步行街，欧式建筑艺术长廊，被誉为东方莫斯科', location: '哈尔滨市道里区', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['步行街', '欧式建筑', '购物', '历史'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'moheArcticVillage', name: '漠河北极村', description: '中国最北的村镇，北极光最佳观测点', location: '大兴安岭地区漠河市', type: 'nature', bestTime: '夏季和冬至前后', tags: ['极光', '最北', '边境', '探险'], rating: 4.5, landscapeType: 'vegetation', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'wudalianchi', name: '五大连池', description: '天然火山博物馆，世界地质公园，火山地貌壮观', location: '黑河市五大连池市', type: 'nature', bestTime: '夏季', tags: ['火山', '地质公园', '温泉', '湖泊'], rating: 4.6, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jingpoLake', name: '镜泊湖', description: '中国最大高山堰塞湖，吊水楼瀑布壮观', location: '牡丹江市宁安市', type: 'nature', bestTime: '夏秋两季', tags: ['湖泊', '瀑布', '森林', '自然'], rating: 4.5, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yabuliSki', name: '亚布力滑雪旅游度假区', description: '亚洲最大滑雪场，中国滑雪旅游的发源地', location: '哈尔滨市尚志市', type: 'nature', bestTime: '冬季', tags: ['滑雪', '冬季运动', '度假', '雪场'], rating: 4.6, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开冰雪融化万物复苏适合户外游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['镜泊湖游览', '五大连池观光', '品尝山野菜', '徒步'] },
    { name: '夏季', description: '凉爽宜人是避暑好时节漠河可观测极光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['漠河找北', '五大连池避暑', '镜泊湖游船', '漂流'] },
    { name: '秋季', description: '层林尽染五花山色迷人秋高气爽', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏五花山', '登山徒步', '品尝秋收美食', '摄影'] },
    { name: '冬季', description: '冰雪节期间最美冰雕雪雕艺术殿堂', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['看冰雕', '滑雪', '体验东北民俗', '泡温泉'] }
  ],
  activities: [
    { id: '1', name: '哈尔滨冰雪节', description: '欣赏冰雕雪雕艺术品体验冰雪魅力', category: 'festival', location: '哈尔滨市', duration: '1天', difficulty: '简单', type: '节庆活动', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '亚布力滑雪体验', description: '在亚洲最大滑雪场体验滑雪乐趣', category: 'sports', location: '哈尔滨市尚志市', duration: '1天', difficulty: '中等', type: '冬季运动', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '漠河找北之旅', description: '前往中国最北点寻找北极村感受极地风光', category: 'adventure', location: '大兴安岭地区漠河市', duration: '3天', difficulty: '中等', type: '探险旅行', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '4', name: '镜泊湖吊水楼瀑布观览', description: '观赏中国最大高山堰塞湖和壮观的吊水楼瀑布', category: 'nature', location: '牡丹江市宁安市', duration: '1天', difficulty: '简单', type: '自然观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '黑龙江冰雪五日游', title: '北国风光·冰雪奇缘', description: '畅游黑龙江精华景点感受北国冰雪魅力', duration: '5天', difficulty: '简单', highlights: ['哈尔滨', '漠河', '五大连池', '镜泊湖'], spots: ['哈尔滨冰雪大世界', '漠河北极村'], tags: ['冰雪', '极光', '火山', '湖泊'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '12月-次年2月', traffic: '飞机+包车', suitableFor: '所有游客、摄影爱好者' },
    { id: '2', name: '哈尔滨周边三日游', title: '冰城哈尔滨·雪乡风情', description: '游览哈尔滨市区及雪乡等周边景点', duration: '3天', difficulty: '简单', highlights: ['中央大街', '索菲亚教堂', '雪乡', '亚布力'], spots: ['哈尔滨冰雪大世界', '亚布力滑雪旅游度假区'], tags: ['城市观光', '冰雪', '滑雪', '民俗'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '12月-次年2月', traffic: '高铁或包车', suitableFor: '所有游客、家庭游客' },
    { id: '3', name: '黑龙江极北六日游', title: '神州北极·极地探秘', description: '从哈尔滨到漠河完整体验黑龙江北部风光', duration: '6天', difficulty: '中等', highlights: ['哈尔滨', '五大连池', '漠河北极村', '北极村'], spots: ['哈尔滨冰雪大世界', '五大连池', '漠河北极村'], tags: ['极地', '火山', '冰雪', '探险'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '夏季或冬季', traffic: '飞机+包车', suitableFor: '探险爱好者、摄影爱好者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '赫哲族鱼皮技艺', description: '赫哲族以鱼皮制作服饰的独特技艺，世界罕见', level: 'national', category: '传统技艺', protectionUnit: '同江市非物质文化遗产保护中心', features: ['鱼皮技艺', '国家级非遗', '赫哲族', '渔猎文化'], icon: '🐟', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '东北二人转', description: '东北民间说唱艺术，一丑一旦载歌载舞，幽默风趣', level: 'national', category: '传统曲艺', protectionUnit: '黑龙江省非物质文化遗产保护中心', features: ['二人转', '国家级非遗', '民间曲艺', '东北文化'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '哈尔滨国际冰雪节', description: '世界四大冰雪节之一，冰灯雪雕享誉全球', month: '1月', day: '5日', location: '哈尔滨市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '东北民俗', description: '东北地区独特民俗文化，包括火炕、杀猪菜、扭秧歌等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['东北文化', '火炕', '秧歌', '冰雪民俗'] }
  ]
};

export default heilongjiangData;

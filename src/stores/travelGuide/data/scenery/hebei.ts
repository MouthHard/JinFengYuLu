import type { SceneryData } from '@/typesOfPages/travelGuide';

export const hebeiData: SceneryData = {
  overview: {
    totalSpots: 180, natureSpots: 80, cultureSpots: 100, topAttractions: [
      { name: '承德避暑山庄', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界现存最大的皇家园林，清代皇帝避暑处理政务之地' },
      { name: '山海关', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天下第一关，长城东端起点' },
      { name: '北戴河', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '避暑疗养胜地，中央领导人的度假地' },
      { name: '白洋淀', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '华北明珠，荷花芦苇荡漾的水乡泽国' }
    ]
  },
  spots: [
    { id: 'chengdeMountainResort', name: '承德避暑山庄', description: '中国四大名园之一，占地564万平方米相当于8个故宫', location: '承德市双桥区', type: 'culture', cultureType: 'royal', bestTime: '夏季', tags: ['皇家园林', '世界遗产', '避暑', '历史'], rating: 4.7, landscapeType: 'urban_nature', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'shanhaiguanPass', name: '山海关', description: '明长城东部起点，有天下第一关之称', location: '秦皇岛市山海关区', type: 'culture', cultureType: 'historical_site', bestTime: '春秋两季', tags: ['长城', '关隘', '历史', '军事'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'beidaihe', name: '北戴河海滨', description: '避暑疗养胜地，中央领导人的度假地', location: '秦皇岛市北戴河区', type: 'nature', bestTime: '夏季', tags: ['海滨', '度假', '疗养', '观鸟'], rating: 4.4, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'baiyangdian', name: '白洋淀', description: '华北明珠，荷花芦苇荡漾的水乡泽国', location: '保定市安新县', type: 'nature', bestTime: '夏季', tags: ['湖泊', '湿地', '芦苇', '红色旅游'], rating: 4.3, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'langyaMountain', name: '狼牙山', description: '五壮士跳崖处，爱国主义教育基地', location: '保定市易县', type: 'nature', bestTime: '秋季', tags: ['名山', '红色旅游', '登山', '自然'], rating: 4.2, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开避暑山庄花开正艳适合踏青', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['游览山庄', '山海关登城', '赏花踏青'] },
    { name: '夏季', description: '避暑山庄凉爽宜人北戴河海滨度假好时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['游览山庄', '北戴河海滨度假', '登长城'] },
    { name: '秋季', description: '秋高气爽白洋淀芦花飞雪景色迷人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['白洋淀赏芦花', '登高望远', '品尝海鲜'] },
    { name: '冬季', description: '寒冷干燥可体验冰雪项目和温泉养生', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['滑雪', '泡温泉', '逛庙会'] }
  ],
  activities: [
    { id: '1', name: '承德皇家园林深度游', description: '游览山庄及外八庙感受清代皇室生活', category: 'culture', location: '承德市', duration: '2天', difficulty: '简单', type: '文化游', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '北戴河海滨休闲', description: '享受阳光沙滩海水浴品尝海鲜大餐', category: 'leisure', location: '秦皇岛市', duration: '1天', difficulty: '简单', type: '海滨度假', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '白洋淀水乡游', description: '乘船游览芦苇荡体验北方水乡风情', category: 'nature', location: '保定市', duration: '1天', difficulty: '简单', type: '生态观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '河北历史文化四日游', title: '燕赵大地·皇家园林', description: '游览承德避暑山庄、山海关长城、北戴河海滨和白洋淀水乡感受燕赵文化', duration: '4天', difficulty: '简单', highlights: ['承德避暑山庄', '山海关', '北戴河', '白洋淀'], spots: ['承德避暑山庄', '山海关'], tags: ['皇家园林', '长城', '海滨', '水乡'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '5-10月', traffic: '高铁+包车', suitableFor: '所有游客' },
    { id: '2', name: '秦皇岛海滨二日游', title: '长城之滨·海滨胜地', description: '登临天下第一关山海关漫步北戴河金色海滩享受海滨假期', duration: '2天', difficulty: '简单', highlights: ['山海关', '老龙头', '北戴河'], spots: ['山海关', '北戴河海滨'], tags: ['长城', '海滨', '历史'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '6-9月', traffic: '高铁或自驾', suitableFor: '家庭游客' }
  ],
  intangibleHeritage: [
    { id: '1', name: '吴桥杂技', description: '中国杂技之乡，以精湛技艺和惊险表演闻名于世', level: 'national', category: '传统体育游艺与杂技', protectionUnit: '吴桥县杂技团', features: ['杂技', '国家级非遗', '民间艺术', '惊险表演'], icon: '🎪', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '衡水内画', description: '在鼻烟壶内壁作画的独特技艺，方寸之间展现大千世界', level: 'national', category: '传统美术', protectionUnit: '衡水内画艺术有限公司', features: ['内画', '国家级非遗', '鼻烟壶', '微缩艺术'], icon: '🎨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '沧州武术节', description: '展示沧州武术文化的盛会，武术之乡的年度盛典', month: '9月', day: '15-20日左右', location: '沧州市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '冀中民俗', description: '河北中部地区民俗文化，包括年画、剪纸、庙会等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['冀中文化', '年画', '庙会', '燕赵民俗'] }
  ]
};

export default hebeiData;
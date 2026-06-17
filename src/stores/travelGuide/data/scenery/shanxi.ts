import type { SceneryData } from '@/typesOfPages/travelGuide';

export const shanxiData: SceneryData = {
  overview: {
    totalSpots: 180, natureSpots: 70, cultureSpots: 110, topAttractions: [
      { name: '平遥古城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国现存最完整的古代县城，世界文化遗产' },
      { name: '云冈石窟', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国四大石窟之一，北魏皇家石刻艺术宝库' },
      { name: '五台山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '文殊菩萨道场，中国四大佛教名山之首' },
      { name: '乔家大院', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '晋商民居建筑典范，大红灯笼高高挂拍摄地' }
    ]
  },
  spots: [
    { id: 'pingyaoAncientCity', name: '平遥古城', description: '中国境内保存最为完整的一座古代县城，是中国汉民族城市在明清时期的杰出范例', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '晋中市平遥县', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['古城', '世界遗产', '晋商', '摄影'], rating: 4.7 },
    { id: 'yungangGrottoes', name: '云冈石窟', description: '中国四大石窟之一，主要洞窟开凿于北魏时期', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '大同市西郊武周山南麓', type: 'culture', cultureType: 'religious', bestTime: '春秋两季', tags: ['石窟', '佛教艺术', '北魏', '世界遗产'], rating: 4.8 },
    { id: 'wutaiMountain', name: '五台山', description: '中国四大佛教名山之首，文殊菩萨道场，自然风光秀丽', location: '忻州市五台县', type: 'nature', bestTime: '夏季', tags: ['佛教名山', '避暑', '寺庙', '自然风光'], rating: 4.7, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'hengshanMountain', name: '恒山', description: '五岳之一的北岳，以悬空寺闻名天下，山势雄伟', location: '大同市浑源县', type: 'nature', bestTime: '夏季', tags: ['五岳', '悬空寺', '道教名山', '登山'], rating: 4.5, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'hukouWaterfall', name: '壶口瀑布', description: '中国第二大瀑布，黄河上最大的黄色瀑布，气势磅礴', location: '临汾市吉县', type: 'nature', bestTime: '春秋两季', tags: ['瀑布', '黄河', '自然奇观', '摄影'], rating: 4.8, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'qiaoFamilyCourtyard', name: '乔家大院', description: '晋商民居建筑典范，大红灯笼高高挂拍摄地，清代民居建筑艺术精品', location: '晋中市祁县', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['晋商', '大院', '建筑', '历史'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '秋季', description: '天高气爽适合游览古建', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['游览平遥古城', '云冈石窟', '五台山礼佛'] }],
  activities: [{ id: '1', name: '晋商文化深度游', description: '游览平遥乔家大院了解晋商历史', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'culture', location: '晋中市平遥县', duration: '2天', difficulty: '简单', type: '文化体验' }],
  routes: [{ id: '1', name: '山西晋商文化四日游', title: '表里山河·晋商故里', description: '探寻三晋大地的深厚文化底蕴，从晋商传奇到佛教圣地', duration: '4天', difficulty: '简单', highlights: ['太原', '平遥', '大同', '五台山'], spots: ['平遥古城', '云冈石窟'], tags: ['历史文化', '晋商文化', '宗教朝圣'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '春秋两季', traffic: '飞机抵达太原武宿机场，高铁连接大同、平遥等地', suitableFor: '历史爱好者、摄影爱好者、文化探索者' }],
  intangibleHeritage: [
    { id: '1', name: '平遥推光漆器', description: '以手掌推光修饰的漆器工艺，漆面光洁如镜', level: 'national', category: '传统技艺', protectionUnit: '平遥县推光漆器有限公司', features: ['漆器', '国家级非遗', '推光工艺', '晋商文化'], icon: '🏺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '老陈醋酿制技艺', description: '山西老陈醋传统酿制工艺，以蒸酵熏淋陈五步法著称', level: 'national', category: '传统技艺', protectionUnit: '山西老陈醋集团有限公司', features: ['酿醋', '国家级非遗', '传统工艺', '调味文化'], icon: '🫗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '平遥国际摄影大展', description: '国际知名摄影盛会，在古城中展示世界摄影艺术', month: '9月', day: '19-23日左右', location: '平遥古城', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '晋商文化', description: '山西商人创造的商业文化体系，以诚信义利为核心价值观', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['晋商', '票号', '诚信文化', '大院文化'] }
  ]
};

export default shanxiData;

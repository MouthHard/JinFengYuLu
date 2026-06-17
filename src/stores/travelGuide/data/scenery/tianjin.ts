import type { SceneryData } from '@/typesOfPages/travelGuide';

export const tianjinData: SceneryData = {
  overview: {
    totalSpots: 130, natureSpots: 50, cultureSpots: 80, topAttractions: [
      { name: '天津之眼', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界上唯一建在桥上的摩天轮，天津地标' },
      { name: '古文化街', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '津门故里，天津民俗文化聚集地' },
      { name: '意式风情区', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '亚洲最大意式建筑群，百年历史风貌' },
      { name: '盘山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '京东第一山，乾隆皇帝巡幸32次之地' }
    ]
  },
  spots: [
    { id: 'tianjinEye', name: '天津之眼摩天轮', description: '跨海河连接河北区和红桥区的摩天轮，是天津的地标之一', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '天津市河北区李公祠大街与五马路交口南行300米', type: 'culture', cultureType: 'modern', bestTime: '夜晚', tags: ['摩天轮', '地标', '夜景', '浪漫'], rating: 4.4 },
    { id: 'ancientCultureStreet', name: '天津古文化街', description: '津门十景之一，以经营文化用品为主', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '天津市南开区水阁大街', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['民俗', '古建筑', '小吃', '手工艺品'], rating: 4.3 },
    { id: 'panShan', name: '盘山风景名胜区', description: '京东第一山，乾隆皇帝巡幸32次之地，自然与文化交融', location: '天津市蓟州区', type: 'nature', bestTime: '春秋两季', tags: ['名山', '皇家游览地', '奇石', '松树'], rating: 4.6, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'haiheRiver', name: '海河风景线', description: '天津的母亲河，沿岸汇集了众多历史建筑和现代地标', location: '天津市内六区', type: 'nature', bestTime: '夜晚', tags: ['河流', '夜景', '游船', '桥梁'], rating: 4.5, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'waterPark', name: '天津水上公园', description: '天津市最大的综合性公园，湖水面积广阔，是市民休闲的好去处', location: '天津市南开区', type: 'nature', bestTime: '春夏秋三季', tags: ['城市公园', '湖泊', '划船', '休闲'], rating: 4.2, landscapeType: 'urban_nature', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'italianStyleArea', name: '意式风情区', description: '亚洲最大意式建筑群，百年历史风貌，欧式建筑与中西文化交融', location: '天津市河北区', type: 'culture', cultureType: 'historical_site', bestTime: '全天', tags: ['欧式建筑', '历史', '异域风情', '摄影'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '春季', description: '气候宜人适合游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['乘坐天津之眼', '逛古文化街', '品尝狗不理包子'] }],
  activities: [{ id: '1', name: '天津相声茶馆体验', description: '听传统天津相声', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'cultural', location: '天津市和平区', duration: '2小时', difficulty: '简单', type: '文化体验' }],
  routes: [{ id: '1', name: '天津文化二日游', title: '津门故里·欧陆风情', description: '品味津门文化的独特魅力，从传统民俗到异域风情的完美融合', duration: '2天', difficulty: '简单', highlights: ['天津之眼', '古文化街', '意式风情区', '五大道'], spots: ['天津之眼摩天轮', '天津古文化街'], tags: ['历史文化', '欧陆风情', '美食之旅'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.4, bestTime: '春秋两季', traffic: '高铁抵达天津站或天津西站，市内地铁公交便捷', suitableFor: '家庭游客、美食爱好者、情侣游客' }],
  intangibleHeritage: [
    { id: '1', name: '杨柳青年画', description: '中国四大木版年画之一，以细腻的笔法和鲜艳的色彩著称', level: 'national', category: '传统美术', protectionUnit: '天津市杨柳青画社', features: ['木版年画', '国家级非遗', '民间美术', '半印半画'], icon: '🎨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '泥人张彩塑', description: '天津民间艺术瑰宝，以写实传神、色彩典雅著称', level: 'national', category: '传统美术', protectionUnit: '天津市泥人张彩塑工作室', features: ['彩塑', '国家级非遗', '民间艺术', '写实传神'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '天津妈祖文化节', description: '纪念海神妈祖的大型民俗文化活动，展现天津海洋文化', month: '5月', day: '20日左右', location: '天津天后宫', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '津门俗礼', description: '天津独特的民俗礼仪，包括婚丧嫁娶、节日庆典等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['民俗礼仪', '传统习俗', '津门文化'] }
  ]
};

export default tianjinData;

import type { SceneryData } from '@/typesOfPages/travelGuide';

export const henanData: SceneryData = {
  overview: {
    totalSpots: 200, natureSpots: 80, cultureSpots: 120, topAttractions: [
      { name: '龙门石窟', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界文化遗产，中国四大石窟之一' },
      { name: '少林寺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '禅宗祖庭，少林功夫发源地' },
      { name: '殷墟', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '商代晚期都城遗址，甲骨文出土地' },
      { name: '云台山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界地质公园，红石峡峡谷奇观' }
    ]
  },
  spots: [
    { id: 'longmenGrottoes', name: '龙门石窟', description: '中国四大石窟之一，开凿于北魏孝文帝年间', location: '洛阳市洛龙区', type: 'culture', cultureType: 'religious', bestTime: '春秋两季', tags: ['石窟', '佛教艺术', '世界遗产', '历史'], rating: 4.8, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'shaolinTemple', name: '少林寺', description: '中国佛教禅宗祖庭和中国功夫的发源地', location: '郑州市登封市', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['佛教', '武术', '禅宗', '古刹'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yuntaiMountain', name: '云台山', description: '世界地质公园，红石峡峡谷奇观壮观', location: '焦作市修武县', type: 'nature', bestTime: '夏秋两季', tags: ['地质公园', '峡谷', '瀑布', '登山'], rating: 4.6, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'longmenGorge', name: '龙潭大峡谷', description: '世界地质公园，红岩嶂谷地貌，峡谷幽深壁立千仞', location: '洛阳市新安县', type: 'nature', bestTime: '春秋两季', tags: ['峡谷', '地质公园', '红岩', '徒步'], rating: 4.5, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'laojunMountain', name: '老君山', description: '道教名山，伏牛山主峰，云海金顶日出壮美如画', location: '洛阳市栾川县', type: 'nature', bestTime: '夏秋两季', tags: ['道教名山', '云海', '金顶', '日出'], rating: 4.7, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yinXu', name: '殷墟', description: '商代晚期都城遗址，甲骨文出土地，世界文化遗产', location: '安阳市殷都区', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['考古', '商代', '甲骨文', '世界遗产'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'longtingPark', name: '龙亭公园', description: '开封标志性景点，宋代皇宫遗址所在地', location: '开封市龙亭区', type: 'culture', cultureType: 'historical_site', bestTime: '春季', tags: ['历史', '宋代', '公园', '菊花'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '洛阳牡丹花会期间最美四月花开满城香', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏牡丹', '游览龙门石窟', '少林寺习武', '踏青'] },
    { name: '夏季', description: '云台山清凉避暑瀑布壮观适合户外活动', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['云台山避暑', '少林寺参观', '品尝河南美食', '漂流'] },
    { name: '秋季', description: '秋高气爽登高望远菊花盛开古都韵味浓', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['开封赏菊', '登高望远', '品尝秋收美食', '摄影'] },
    { name: '冬季', description: '寒冷干燥可体验温泉养生和室内文化景点', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['博物馆参观', '泡温泉', '品尝烩面', '逛庙会'] }
  ],
  activities: [
    { id: '1', name: '少林功夫体验', description: '观看少林武僧表演学习基础功夫', category: 'cultural', location: '郑州市登封市', duration: '半天', difficulty: '简单', type: '文化体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '洛阳牡丹花会游', description: '四月份游览洛阳各大公园观赏国色天香', category: 'nature', location: '洛阳市', duration: '1天', difficulty: '简单', type: '自然观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '云台山红石峡徒步', description: '穿越红石峡欣赏丹霞地貌和瀑布群', category: 'adventure', location: '焦作市修武县', duration: '1天', difficulty: '中等', type: '户外探险', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '4', name: '开封宋都文化游', description: '游览清明上河园龙亭公园等宋代主题景点', category: 'cultural', location: '开封市', duration: '1天', difficulty: '简单', type: '历史文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '河南中原文化四日游', title: '华夏之源·功夫河南', description: '畅游河南精华景点感受中原文化魅力', duration: '4天', difficulty: '简单', highlights: ['郑州', '洛阳', '开封', '嵩山'], spots: ['龙门石窟', '少林寺'], tags: ['历史文化', '佛教', '武术', '古都'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '4-5月、9-11月', traffic: '高铁+包车', suitableFor: '所有游客、文化爱好者' },
    { id: '2', name: '河南山水二日游', title: '太行山水·云台仙境', description: '游览云台山等自然景观享受山水之美', duration: '2天', difficulty: '中等', highlights: ['云台山', '红旗渠', '太行大峡谷'], spots: ['云台山'], tags: ['自然风光', '地质公园', '登山', '峡谷'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '5-10月', traffic: '自驾或包车', suitableFor: '自然爱好者、摄影师' },
    { id: '3', name: '河南古都五日游', title: '八大古都·中原文明', description: '深度游览郑州洛阳开封安阳等古都城市', duration: '5天', difficulty: '简单', highlights: ['郑州', '洛阳', '开封', '安阳', '嵩山'], spots: ['龙门石窟', '少林寺', '殷墟'], tags: ['古都', '历史', '文化遗产', '考古'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '全年', traffic: '高铁+包车', suitableFor: '历史文化爱好者、学生' }
  ],
  intangibleHeritage: [
    { id: '1', name: '少林功夫', description: '天下武功出少林，以禅武合一、刚柔并济著称', level: 'national', category: '传统体育游艺与杂技', protectionUnit: '少林寺', features: ['武术', '国家级非遗', '禅武合一', '功夫文化'], icon: '🥋', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '朱仙镇木版年画', description: '中国最古老的木版年画之一，以线条粗犷豪放著称', level: 'national', category: '传统美术', protectionUnit: '开封市朱仙镇木版年画社', features: ['年画', '国家级非遗', '木版印刷', '中原文化'], icon: '🎨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '洛阳牡丹花会', description: '以牡丹为主题的盛大花会，唯有牡丹真国色', month: '4月', day: '10-25日左右', location: '洛阳市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '中原民俗', description: '中原地区传统民俗文化，包括少林武术、豫剧、庙会等习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['中原文化', '豫剧', '庙会', '河洛民俗'] }
  ]
};

export default henanData;

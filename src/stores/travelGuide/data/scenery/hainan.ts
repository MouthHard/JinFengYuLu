import type { SceneryData } from '@/typesOfPages/travelGuide';

export const hainanData: SceneryData = {
  overview: {
    totalSpots: 100, natureSpots: 70, cultureSpots: 30, topAttractions: [
      { name: '三亚亚龙湾', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天下第一湾，椰风海韵热带天堂' },
      { name: '天涯海角', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '海南标志性景点，浪漫爱情象征' },
      { name: '南山寺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '108米海上观音，佛教文化圣地' },
      { name: '蜈支洲岛', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国的马尔代夫，潜水胜地' }
    ]
  },
  spots: [
    { id: 'yalongBay', name: '亚龙湾', description: '拥有7千米长的银白色海滩，沙质相当细腻海水清澈见底', location: '三亚市吉阳区', type: 'nature', bestTime: '冬春两季', tags: ['海滨', '沙滩', '度假', '潜水'], rating: 4.6, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'tianyaHaijiao', name: '天涯海角游览区', description: '海南久负盛名的景点之一，天涯海角石是海南的标志', location: '三亚市天涯区', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['地标', '浪漫', '海滨', '石刻'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'wuzhizhouIsland', name: '蜈支洲岛', description: '中国的马尔代夫潜水胜地，海水能见度极高', location: '三亚市海棠区', type: 'nature', bestTime: '全年', tags: ['海岛', '潜水', '度假', '水上运动'], rating: 4.7, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'nanshanTemple', name: '南山文化旅游区', description: '108米海上观音，佛教文化圣地祈福圣地', location: '三亚市崖州区', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['佛教', '观音', '文化', '朝圣'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'fenjieZhou', name: '分界洲岛', description: '动植物天堂，热带与亚热带分界线，海豚湾观赏地', location: '陵水黎族自治县', type: 'nature', bestTime: '全年', tags: ['海岛', '生态', '潜水', '动物'], rating: 4.6, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'binglangguValley', name: '槟榔谷黎苗文化旅游区', description: '海南原住民文化展示地，黎苗风情浓郁，非物质文化遗产丰富', location: '保亭黎族苗族自治县', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['黎族', '苗族', '民族文化', '非遗'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '温暖宜人花开正艳，是海南旅游的好时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['海滨度假', '潜水冲浪', '环岛自驾', '品尝热带水果'] },
    { name: '夏季', description: '炎热多雨但海边凉爽，注意防晒防台风', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['海滨游泳', '水上乐园', '雨林探险', '品尝清补凉'] },
    { name: '秋季', description: '气候最佳秋高气爽，避寒胜地开始迎来旺季', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['海滨度假', '潜水冲浪', '品尝海鲜', '温泉养生'] },
    { name: '冬季', description: '避寒胜地温暖如夏，北方游客的最佳选择', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['海滨度假', '潜水冲浪', '品尝海鲜', '购买热带特产'] }
  ],
  activities: [
    { id: '1', name: '蜈支洲岛潜水', description: '体验海底世界观赏珊瑚礁和热带鱼群', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'water_sports', location: '三亚市海棠区蜈支洲岛', duration: '1天', difficulty: '中等', type: '水上运动' },
    { id: '2', name: '亚龙湾海滨休闲', description: '享受阳光沙滩海水浴体验各种水上项目', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'leisure', location: '三亚市吉阳区亚龙湾', duration: '1天', difficulty: '简单', type: '海滨度假' },
    { id: '3', name: '南山寺朝圣之旅', description: '参观108米海上观音感受佛教文化氛围', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'religious', location: '三亚市崖州区南山寺', duration: '半天', difficulty: '简单', type: '宗教朝圣' },
    { id: '4', name: '海南环岛自驾游', description: '环海南岛东线或西线自驾欣赏沿途风光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'roadtrip', location: '海南省全境', duration: '5-7天', difficulty: '简单', type: '自驾旅行' }
  ],
  routes: [
    { id: '1', name: '海南环岛五日游', title: '椰风海韵·热带天堂', description: '环海南岛游览精华景点感受热带海岛风情', duration: '5天', difficulty: '简单', highlights: ['三亚', '海口', '文昌', '万宁'], spots: ['亚龙湾', '天涯海角游览区', '南山文化旅游区', '蜈支洲岛'], tags: ['海滨', '热带', '海岛', '度假'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '10月-次年4月', traffic: '租车自驾或高铁', suitableFor: '所有游客、蜜月旅行者' },
    { id: '2', name: '三亚深度四日游', title: '东方夏威夷·三亚风情', description: '深度游览三亚及周边景点享受海滨假期', duration: '4天', difficulty: '简单', highlights: ['亚龙湾', '天涯海角', '蜈支洲岛', '南山寺'], spots: ['亚龙湾', '天涯海角游览区', '蜈支洲岛', '南山文化旅游区'], tags: ['海滨', '度假', '水上运动', '佛教'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '10月-次年4月', traffic: '出租车或包车', suitableFor: '家庭游客、情侣、蜜月旅行者' },
    { id: '3', name: '海南中线生态三日游', title: '热带雨林·黎苗风情', description: '探索海南中部热带雨林和少数民族文化', duration: '3天', difficulty: '中等', highlights: ['五指山', '槟榔谷', '七仙岭', '呀诺达'], spots: [], tags: ['雨林', '少数民族', '登山', '生态'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '全年', traffic: '包车', suitableFor: '自然爱好者、摄影师、文化探索者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '黎锦', description: '黎族传统纺织技艺，以絣染工艺和精美图案著称', level: 'national', category: '传统技艺', protectionUnit: '海南省非物质文化遗产保护中心', features: ['织锦', '国家级非遗', '黎族', '絣染'], icon: '🧶', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '海南椰雕', description: '以椰壳为材料的雕刻工艺，海南特有的民间艺术', level: 'national', category: '传统美术', protectionUnit: '海口市非物质文化遗产保护中心', features: ['椰雕', '国家级非遗', '椰壳工艺', '海岛文化'], icon: '🥥', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '换花节', description: '海口传统民俗节日，青年男女互换鲜花表达情意', month: '2月', day: '中下旬(元宵夜)', location: '海口市府城', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '黎族民俗', description: '黎族独特民俗文化，包括纹面、船型屋、竹竿舞等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['黎族文化', '纹面', '船型屋', '海岛民俗'] }
  ]
};

export default hainanData;
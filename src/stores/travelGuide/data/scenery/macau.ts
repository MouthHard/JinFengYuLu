import type { SceneryData } from '@/typesOfPages/travelGuide';

export const macauData: SceneryData = {
  overview: {
    totalSpots: 60, natureSpots: 20, cultureSpots: 40, topAttractions: [
      { name: '大三巴牌坊', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '澳门的标志性建筑，世界文化遗产' },
      { name: '威尼斯人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界知名的综合性度假村酒店' },
      { name: '妈祖庙', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '澳门最古老的庙宇，供奉妈祖' },
      { name: '澳门塔', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '澳门新的地标性建筑，世界第十高塔' },
      { name: '议事亭前地', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '澳门的历史文化中心' },
      { name: '葡京赌场', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '澳门最著名的赌场和酒店' },
      { name: '路环岛', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '澳门最大的岛屿，保留着自然风光' },
      { name: '黑沙海滩', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '澳门最著名的海滩，以黑色沙滩著称' }
    ]
  },
  spots: [
    { id: 'ruinsOfStPauls', name: '大三巴牌坊', description: '澳门天主之母教堂正面前壁的遗址，是世界文化遗产', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '澳门特别行政区花王堂区', type: 'culture', bestTime: '全年', tags: ['牌坊', '世界遗产', '历史', '建筑'], rating: 4.7 },
    { id: 'macauTower', name: '澳门旅游塔', description: '高度338米是全球独立式观光塔第十位的建筑物', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '澳门特别行政区大堂区', type: 'culture', bestTime: '全年', tags: ['塔', '观景', '娱乐', '蹦极'], rating: 4.5 },
    { id: 'blackSandBeach', name: '黑沙海滩', description: '澳门最著名的海滩，以黑色沙滩著称，自然风光独特', location: '澳门特别行政区路环岛', type: 'nature', bestTime: '夏季', tags: ['海滩', '黑沙', '游泳', '自然'], rating: 4.2, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'coloaneTrail', name: '路环步行径', description: '路环岛的自然保护区，山海相连生态环境优美适合徒步', location: '澳门特别行政区路环岛', type: 'nature', bestTime: '秋季和春季', tags: ['徒步', '自然', '生态', '山径'], rating: 4.1, landscapeType: 'urban_nature', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'taipaMuseum', name: '龙环葡韵住宅式博物馆', description: '葡式建筑群与自然景观结合，湿地生态丰富', location: '澳门特别行政区氹仔', type: 'nature', bestTime: '全年', tags: ['葡式建筑', '湿地', '博物馆', '生态'], rating: 4.0, landscapeType: 'urban_nature', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '秋季', description: '天气凉爽适合游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['大三巴牌坊参观', '议事亭前地漫步', '妈祖庙参拜', '澳门塔登高'] }],
  activities: [{ id: '1', name: '大三巴牌坊参观', description: '游览澳门标志性建筑大三巴牌坊', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'culture', location: '澳门特别行政区花王堂区', duration: '1-2小时', difficulty: '简单', type: '文化体验' }],
  routes: [{ id: '1', name: '澳门经典二日游', title: '海上花园·博彩之都', description: '深度体验澳门中西合璧的文化魅力，从历史遗迹到现代娱乐', duration: '2天', difficulty: '简单', highlights: ['大三巴牌坊', '威尼斯人', '妈祖庙', '澳门塔'], spots: ['大三巴牌坊', '澳门旅游塔', '威尼斯人', '妈祖庙'], tags: ['历史文化', '休闲娱乐', '美食购物'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '春秋两季', traffic: '可从珠海拱北口岸或香港乘船抵达，市内公交或步行即可', suitableFor: '情侣游客、美食爱好者、文化探索者' }],
  intangibleHeritage: [
    { id: '1', name: '粤剧', description: '澳门传统戏曲艺术，南国红豆情深', level: 'national', category: '传统戏剧', protectionUnit: '澳门文化局', features: ['粤剧', '国家级非遗', '戏曲', '岭南文化'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '凉茶制作技艺', description: '岭南传统凉茶配制技艺，药食同源养生智慧', level: 'national', category: '传统技艺', protectionUnit: '澳门非物质文化遗产中心', features: ['凉茶', '国家级非遗', '药食同源', '岭南养生'], icon: '🍵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '澳门妈祖文化旅游节', description: '以妈祖文化为主题的旅游节庆，展现澳门多元文化', month: '10月', day: '15-20日左右', location: '澳门妈阁庙', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '澳门民俗', description: '澳门独特民俗文化，包括葡式碎石路、蛋挞、醉龙节等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['澳门文化', '中葡融合', '妈祖', '濠江民俗'] }
  ]
};

export default macauData;

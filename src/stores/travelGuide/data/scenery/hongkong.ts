import type { SceneryData } from '@/typesOfPages/travelGuide';

export const hongkongData: SceneryData = {
  overview: {
    totalSpots: 100, natureSpots: 30, cultureSpots: 70, topAttractions: [
      { name: '维多利亚港', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界三大天然良港之一，香港的标志性景观' },
      { name: '太平山顶', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '香港最高点，俯瞰香港全景的最佳地点' },
      { name: '迪士尼乐园', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界著名主题乐园，家庭旅游的首选' },
      { name: '海洋公园', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界知名主题公园，集海洋动物与机动游戏于一体' },
      { name: '中环', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '香港的商业金融中心，繁华的都市景观' },
      { name: '尖沙咀', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '香港著名的购物和旅游区' },
      { name: '浅水湾', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '香港最著名的海滩，富人区' },
      { name: '赤柱', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '香港著名的海滨小镇，充满欧陆风情' }
    ]
  },
  spots: [
    { id: 'victoriaHarbor', name: '维多利亚港', description: '位于香港岛和九龙半岛之间，是世界著名的天然良港', location: '香港特别行政区', type: 'nature', bestTime: '全年', tags: ['海港', '夜景', '地标', '观光'], rating: 4.8, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'victoriaPeak', name: '太平山顶', description: '香港岛的最高点，海拔552米，是俯瞰香港全景的最佳地点', location: '香港特别行政区中西区', type: 'nature', bestTime: '全年', tags: ['山顶', '观景', '夜景', '缆车'], rating: 4.7, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'repulseBay', name: '浅水湾', description: '香港最著名的海滩，富人区，被誉为天下第一湾', location: '香港岛南区', type: 'nature', bestTime: '夏季', tags: ['海滩', '游泳', '度假', '富人区'], rating: 4.5, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'disneyland', name: '香港迪士尼乐园', description: '世界著名主题乐园，家庭旅游的首选', location: '香港特别行政区大屿山', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['主题乐园', '亲子', '娱乐', '童话'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'oceanPark', name: '香港海洋公园', description: '世界知名主题公园，集海洋动物与机动游戏于一体', location: '香港特别行政区黄竹坑', type: 'culture', bestTime: '全年', tags: ['海洋动物', '游乐设施', '表演', '亲子'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'tsimShaTsui', name: '尖沙咀', description: '香港著名的购物和旅游区，星光大道所在地', location: '香港特别行政区九龙尖沙咀', type: 'culture', bestTime: '全年', tags: ['购物', '海滨', '文化', '美食'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '气候温和适合户外活动花卉展览丰富', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['太平山顶观光', '维多利亚港游览', '迪士尼乐园游玩', '尖沙咀购物'] },
    { name: '夏季', description: '炎热潮湿注意防晒水上乐园是避暑好去处', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['海洋公园玩水', '商场购物避暑', '品尝港式茶餐厅', '海滩游泳'] },
    { name: '秋季', description: '天气晴朗温度适宜是旅游的最佳季节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['维多利亚港夜游', '登太平山顶', '中环购物', '兰桂坊夜生活'] },
    { name: '冬季', description: '凉爽干燥圣诞新年气氛热烈打折季', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['圣诞促销购物', '跨年倒数', '温泉度假', '品尝火锅'] }
  ],
  activities: [
    { id: '1', name: '维多利亚港夜游', description: '夜晚乘船游览欣赏两岸璀璨夜景感受东方之珠魅力', category: 'nightlife', location: '维多利亚港', duration: '1-2小时', difficulty: '简单', type: '夜景观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '太平山顶观光', description: '乘坐缆车登上太平山顶俯瞰香港全景', category: 'sightseeing', location: '太平山顶', duration: '半天', difficulty: '简单', type: '城市观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '迪士尼一日游', description: '畅玩香港迪士尼体验童话世界欢乐', category: 'entertainment', location: '大屿山迪士尼乐园', duration: '全天', difficulty: '简单', type: '主题乐园', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '4', name: '香港美食之旅', description: '品尝地道港式美食茶餐厅点心海鲜大餐', category: 'food', location: '香港各区', duration: '1天', difficulty: '简单', type: '美食体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '香港经典三日游', title: '东方之珠·动感之都', description: '畅游香港精华景点感受中西合璧的国际都市魅力', duration: '3天', difficulty: '简单', highlights: ['维多利亚港', '太平山顶', '迪士尼乐园', '海洋公园'], spots: ['维多利亚港', '太平山顶', '香港迪士尼乐园'], tags: ['都市', '主题乐园', '购物', '夜景'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '10月-次年3月', traffic: '地铁+出租车', suitableFor: '所有游客、家庭游客' },
    { id: '2', name: '香港文化二日游', title: '中西合璧·文化之旅', description: '深度探索香港历史文化品尝地道美食', duration: '2天', difficulty: '简单', highlights: ['中环', '上环', '赤柱', '大澳渔村'], spots: ['维多利亚港', '尖沙咀'], tags: ['历史', '文化', '美食', '建筑'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '全年', traffic: '地铁', suitableFor: '文化爱好者、美食家' },
    { id: '3', name: '香港亲子四日游', title: '欢乐天堂·家庭时光', description: '畅玩迪士尼海洋公园等主题乐园享受亲子时光', duration: '4天', difficulty: '简单', highlights: ['迪士尼乐园', '海洋公园', '太空馆', '科学馆'], spots: ['香港迪士尼乐园', '香港海洋公园', '太平山顶'], tags: ['亲子', '主题乐园', '教育', '娱乐'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '全年', traffic: '地铁+出租车', suitableFor: '家庭游客、带儿童的家庭' }
  ],
  intangibleHeritage: [
    { id: '1', name: '粤剧', description: '香港传统戏曲艺术，以唱做念打四功著称', level: 'national', category: '传统戏剧', protectionUnit: '香港粤剧发展基金', features: ['粤剧', '国家级非遗', '戏曲', '南国红豆'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '舞火龙', description: '中秋夜舞火龙驱瘟祈福，香港独特民俗传统', level: 'national', category: '民俗', protectionUnit: '香港非物质文化遗产中心', features: ['舞火龙', '国家级非遗', '中秋', '驱瘟祈福'], icon: '🐉', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '太平清醮', description: '长洲岛传统太平清醮，飘色巡游和抢包山闻名', month: '5-6月', day: '5-7日左右', location: '长洲岛', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '港式民俗', description: '香港独特民俗文化，包括茶餐厅、舞狮、打小人等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['港式文化', '茶餐厅', '舞狮', '中西合璧'] }
  ]
};

export default hongkongData;

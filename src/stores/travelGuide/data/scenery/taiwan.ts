import type { SceneryData } from '@/typesOfPages/travelGuide';

export const taiwanData: SceneryData = {
  overview: {
    totalSpots: 120, natureSpots: 60, cultureSpots: 60, topAttractions: [
      { name: '台北101', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '曾经的世界第一高楼，台北地标性建筑' },
      { name: '日月潭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '台湾最大的天然淡水湖，湖面海拔748米' },
      { name: '阿里山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '阿里山五奇：日出云海晚霞森林与铁路' },
      { name: '垦丁国家公园', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '台湾最南端的热带国家公园，阳光沙滩椰林' }
    ]
  },
  spots: [
    { id: 'taipei101', name: '台北101大楼', description: '位于台北市信义区，高度508米曾是世界第一高楼', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '台北市信义区信义路五段7号', type: 'culture', cultureType: 'modern', bestTime: '全年', tags: ['摩天大楼', '地标', '观景台', '购物'], rating: 4.5 },
    { id: 'palaceMuseumTaipei', name: '台北故宫博物院', description: '中国三大博物馆之一，收藏70万件中华文物珍品', location: '台北市士林区至善路二段221号', type: 'culture', cultureType: 'museum', bestTime: '全年', tags: ['博物馆', '文物', '故宫', '历史'], rating: 4.8, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jiufenOldStreet', name: '九份老街', description: '山城老街，宫崎骏千与千寻灵感来源地，红灯笼夜景迷人', location: '新北市瑞芳区', type: 'culture', cultureType: 'folk_customs', bestTime: '夜晚', tags: ['老街', '夜景', '山城', '美食'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'sunMoonLake', name: '日月潭风景区', description: '台湾最大的天然湖泊，湖面海拔748米，常态面积为7.93平方公里', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '南投县鱼池乡', type: 'nature', bestTime: '全年', tags: ['湖泊', '自行车道', '游船', '原住民文化'], rating: 4.6, landscapeType: 'water' },
    { id: 'alishanMountain', name: '阿里山风景区', description: '阿里山五奇：日出云海晚霞森林与铁路，台湾著名山林景区', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '嘉义县阿里山乡', type: 'nature', bestTime: '全年', tags: ['日出', '云海', '森林', '铁路'], rating: 4.7, landscapeType: 'mountain' },
    { id: 'kentingPark', name: '垦丁国家公园', description: '台湾最南端的热带国家公园，阳光沙滩椰林珊瑚礁', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '屏东县恒春镇', type: 'nature', bestTime: '全年', tags: ['热带', '海滩', '珊瑚礁', '生态'], rating: 4.5, landscapeType: 'coastal' }
  ],
  seasonal: [{ name: '秋季', description: '气候凉爽适合环岛旅游', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['游览台北', '日月潭骑行', '阿里山观日出'] }],
  activities: [{ id: '1', name: '台湾环岛八日游', description: '环岛一圈体验台湾风土人情', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'tour', location: '台湾全岛', duration: '8天', difficulty: '中等', type: '环岛游' }],
  routes: [{ id: '1', name: '台湾经典七日游', title: '宝岛台湾·风情万种', description: '深度体验宝岛台湾的多元魅力，从现代都市到自然风光的精彩旅程', duration: '7天', difficulty: '简单', highlights: ['台北', '台中', '日月潭', '高雄', '垦丁'], spots: ['台北101大楼', '日月潭风景区'], tags: ['都市风情', '自然风光', '美食之旅'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '春秋两季', traffic: '飞机抵达台北桃园机场，高铁环岛或包车游览', suitableFor: '家庭游客、美食爱好者、摄影爱好者' }],
  intangibleHeritage: [
    { id: '1', name: '布袋戏', description: '台湾传统掌中戏，以精巧木偶和生动口白著称', level: 'national', category: '传统戏剧', protectionUnit: '台湾传统艺术中心', features: ['布袋戏', '国家级非遗', '掌中戏', '木偶戏'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '歌仔戏', description: '台湾唯一土生土长的剧种，以唱腔优美著称', level: 'national', category: '传统戏剧', protectionUnit: '台湾传统艺术中心', features: ['歌仔戏', '国家级非遗', '台湾剧种', '唱腔优美'], icon: '🎭', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '妈祖绕境', description: '大甲妈祖绕境进香，台湾最盛大的宗教民俗活动', month: '4-5月', day: '4月中旬起，为期9天', location: '台中大甲', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '闽南民俗', description: '台湾闽南民俗文化，包括电音三太子、夜市文化、阵头等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['闽南文化', '妈祖', '夜市', '宝岛民俗'] }
  ]
};

export default taiwanData;

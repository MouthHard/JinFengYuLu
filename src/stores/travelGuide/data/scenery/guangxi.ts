import type { SceneryData } from '@/typesOfPages/travelGuide';

export const guangxiData: SceneryData = {
  overview: {
    totalSpots: 180, natureSpots: 120, cultureSpots: 60, topAttractions: [
      { name: '漓江', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '桂林山水甲天下，漓江山水甲桂林' },
      { name: '阳朔西街', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '地球村，中西合璧的洋人街' },
      { name: '龙脊梯田', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界梯田之冠，壮瑶民族农耕文明杰作' },
      { name: '北海银滩', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天下第一滩，银白色的沙滩绵延数十里' }
    ]
  },
  spots: [
    { id: 'liJiangRiver', name: '漓江风景区', description: '世界上规模最大风景最美的岩溶山水游览区', location: '桂林市至阳朔县', type: 'nature', bestTime: '秋季', tags: ['喀斯特', '山水', '竹筏', '摄影'], rating: 4.8, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'longjiTerrace', name: '龙脊梯田', description: '始建于元朝完工于清初，距今已有650多年历史', location: '桂林市龙胜各族自治县', type: 'culture', cultureType: 'historical_site', bestTime: '春秋两季', tags: ['梯田', '农业景观', '少数民族', '摄影'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yangshuoWestStreet', name: '阳朔西街', description: '地球村，中西合璧的洋人街，酒吧咖啡厅聚集地', location: '桂林市阳朔县', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['西街', '洋人街', '酒吧', '购物'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'beihaiSilverBeach', name: '北海银滩', description: '天下第一滩，银白色的沙滩绵延数十里水质清澈', location: '北海市银海区', type: 'nature', bestTime: '夏秋两季', tags: ['海滩', '海滨度假', '游泳', '海鲜'], rating: 4.5, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'detianWaterfall', name: '德天跨国瀑布', description: '亚洲第一大跨国瀑布，中越边境壮观自然景观', location: '崇左市大新县', type: 'nature', bestTime: '夏季', tags: ['瀑布', '边境风光', '自然奇观', '摄影'], rating: 4.7, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'guilinElephantTrunkHill', name: '象鼻山', description: '桂林城徽象鼻山，漓江与桃花江汇流处，桂林山水象征', location: '桂林市象山区', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['地标', '象鼻山', '桂林', '漓江'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '龙脊梯田灌水期如镜面般美丽，漓江烟雨朦胧', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['龙脊梯田摄影', '漓江漂流', '阳朔骑行', '品尝米粉'] },
    { name: '夏季', description: '德天瀑布水量充沛气势磅礴，北海海滨清凉宜人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['德天观瀑布', '北海海滨度假', '漓江竹筏漂流', '溶洞探险'] },
    { name: '秋季', description: '龙脊梯田金黄一片美不胜收，气候最适宜旅游', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['漓江漂流', '阳朔骑行', '龙脊摄影', '品尝柚子'] },
    { name: '冬季', description: '温暖如春适合避寒，桂林山水别有韵味', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['桂林市区游览', '温泉度假', '品尝火锅', '逛西街'] }
  ],
  activities: [
    { id: '1', name: '漓江竹筏漂流', description: '从桂林到阳朔的精华段欣赏百里画廊', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'nature', location: '桂林市至阳朔县', duration: '4小时', difficulty: '简单', type: '水上游览' },
    { id: '2', name: '龙脊梯田深度游', description: '徒步或缆车登顶观赏壮美梯田体验壮族文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'culture', location: '桂林市龙胜各族自治县', duration: '1天', difficulty: '中等', type: '文化体验' },
    { id: '3', name: '阳朔十里画廊骑行', description: '租自行车沿十里画廊欣赏喀斯特田园风光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'outdoor', location: '桂林市阳朔县', duration: '半天', difficulty: '简单', type: '户外运动' },
    { id: '4', name: '北海银滩海滨休闲', description: '享受阳光沙滩海水浴品尝海鲜大餐', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'leisure', location: '北海市银海区', duration: '1天', difficulty: '简单', type: '海滨度假' }
  ],
  routes: [
    { id: '1', name: '广西山水四日游', title: '桂林山水·甲天下', description: '畅游桂林山水感受喀斯特地貌魅力', duration: '4天', difficulty: '简单', highlights: ['漓江', '阳朔', '龙脊梯田', '北海'], spots: ['漓江风景区', '龙脊梯田', '阳朔西街', '北海银滩'], tags: ['山水', '喀斯特', '梯田', '海滨'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '全年', traffic: '高铁+旅游大巴', suitableFor: '所有游客、摄影师' },
    { id: '2', name: '广西边境五日游', title: '边关风情·跨国瀑布', description: '探索中越边境德天瀑布及沿途民族风情', duration: '5天', difficulty: '中等', highlights: ['南宁', '崇左', '德天瀑布', '凭祥'], spots: ['德天跨国瀑布'], tags: ['边境', '瀑布', '民族文化', '探险'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '6-10月', traffic: '包车', suitableFor: '摄影爱好者、探险爱好者' },
    { id: '3', name: '广西环线六日游', title: '八桂大地·多彩广西', description: '从桂林到北海再到边境完整体验广西魅力', duration: '6天', difficulty: '中等', highlights: ['桂林', '阳朔', '北海', '崇左', '南宁'], spots: ['漓江风景区', '阳朔西街', '北海银滩', '德天跨国瀑布'], tags: ['山水', '海滨', '边境', '民族文化'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '全年', traffic: '高铁+包车', suitableFor: '深度游爱好者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '壮锦', description: '壮族传统织锦，以色彩绚丽、图案对称著称', level: 'national', category: '传统技艺', protectionUnit: '广西壮锦织绣厂', features: ['织锦', '国家级非遗', '壮族', '万寿纹'], icon: '🧶', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '侗族大歌', description: '侗族多声部无伴奏合唱，天籁之音闻名于世', level: 'national', category: '传统音乐', protectionUnit: '三江侗族自治县文化馆', features: ['大歌', '国家级非遗', '侗族', '多声部'], icon: '🎵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '三月三歌节', description: '壮族最盛大的传统节日，歌圩对歌、抛绣球', month: '4月', day: '3-9日左右', location: '广西各地', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '壮族民俗', description: '壮族独特民俗文化，包括铜鼓、歌圩、壮医等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['壮族文化', '铜鼓', '歌圩', '壮锦'] }
  ]
};

export default guangxiData;

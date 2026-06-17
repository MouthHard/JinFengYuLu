import type { SceneryData } from '@/typesOfPages/travelGuide';

export const qinghaiData: SceneryData = {
  overview: {
    totalSpots: 120, natureSpots: 80, cultureSpots: 40, topAttractions: [
      { name: '青海湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国最大内陆咸水湖，高原蓝宝石' },
      { name: '塔尔寺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '藏传佛教格鲁派六大寺院之一，酥油花艺术殿堂' },
      { name: '茶卡盐湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天空之镜，中国的玻利维亚乌尤尼' },
      { name: '可可西里', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界第三大无人区，藏羚羊最后的栖息地' }
    ]
  },
  spots: [
    { id: 'qinghaiLake', name: '青海湖景区', description: '中国最大的内陆咸水湖，也是中国最大的咸水湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '海南藏族自治州共和县', type: 'nature', bestTime: '夏季', tags: ['湖泊', '高原', '油菜花', '鸟类'], rating: 4.7, landscapeType: 'water' },
    { id: 'kokaSaltLake', name: '茶卡盐湖', description: '被旅行者们称为中国天空之镜，被国家旅游地理杂志评为人一生必去的55个地方之一', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '海西蒙古族藏族自治州乌兰县茶卡镇', type: 'nature', bestTime: '夏季', tags: ['盐湖', '摄影', '天空之镜', '倒影'], rating: 4.6, landscapeType: 'water' },
    { id: 'qilianMountain', name: '祁连山草原', description: '祁连山下好牧场，雪山草原牛羊成群', location: '海北藏族自治州', type: 'nature', bestTime: '夏季', tags: ['草原', '雪山', '牧场', '避暑'], rating: 4.5, landscapeType: 'vegetation', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'taerMonastery', name: '塔尔寺', description: '藏传佛教格鲁派六大寺院之一，酥油花、壁画、堆绣艺术三绝享誉世界', location: '西宁市湟中区', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['藏传佛教', '寺院', '酥油花', '格鲁派'], rating: 4.8, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'qinghaiTibetMuseum', name: '青海藏文化博物院', description: '世界上唯一一座全面收藏保护展示藏文化的综合博物馆，拥有618米长唐卡长卷', location: '西宁市城北区', type: 'culture', cultureType: 'museum', bestTime: '全年', tags: ['博物馆', '藏文化', '唐卡', '非遗'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'tongrenRebgongArt', name: '同仁热贡艺术之乡', description: '热贡艺术发源地，以唐卡绘画、堆绣、泥塑等藏族传统艺术闻名于世', location: '黄南藏族自治州同仁市', type: 'culture', cultureType: 'folk_customs', bestTime: '夏季', tags: ['热贡艺术', '唐卡', '非遗', '民间工艺'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '夏季', description: '油菜花盛开气候宜人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['环湖骑行', '茶卡盐湖拍照', '塔尔寺朝圣'] }],
  activities: [{ id: '1', name: '青海湖环湖骑行', description: '360公里环湖自行车之旅', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'cycling', location: '海南藏族自治州', duration: '3-4天', difficulty: '中等', type: '户外运动' }],
  routes: [{ id: '1', name: '青海高原五日游', title: '大美青海·高原明珠', description: '探索青藏高原的壮美风光，从碧蓝湖泊到天空之镜的视觉盛宴', duration: '5天', difficulty: '中等', highlights: ['青海湖', '茶卡盐湖', '塔尔寺', '祁连山'], spots: ['青海湖景区', '茶卡盐湖'], tags: ['高原风光', '湖泊摄影', '宗教文化'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '夏季、秋季', traffic: '飞机抵达西宁曹家堡机场，包车或自驾环湖游览', suitableFor: '摄影爱好者、户外爱好者、自驾游客' }],
  intangibleHeritage: [
    { id: '1', name: '热贡艺术', description: '藏传佛教艺术瑰宝，以唐卡、堆绣、壁画著称', level: 'national', category: '传统美术', protectionUnit: '同仁市热贡艺术馆', features: ['热贡艺术', '国家级非遗', '唐卡', '藏传佛教'], icon: '🖼️', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '青海花儿', description: '西北地区传统山歌，以高亢悠扬、即兴编词著称', level: 'national', category: '传统音乐', protectionUnit: '青海省非物质文化遗产保护中心', features: ['花儿', '国家级非遗', '山歌', '对唱'], icon: '🎵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '青海湖祭海节', description: '藏族传统祭祀青海湖的盛大仪式，祈愿风调雨顺', month: '8月', day: '10-15日左右', location: '青海湖畔', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '青海民俗', description: '青海多民族民俗文化，包括转山、赛马、锅庄舞等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['青海文化', '转山', '赛马', '高原民俗'] }
  ]
};

export default qinghaiData;

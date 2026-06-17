import type { SceneryData } from '@/typesOfPages/travelGuide';

export const jilinData: SceneryData = {
  overview: {
    totalSpots: 120, natureSpots: 70, cultureSpots: 50, topAttractions: [
      { name: '长白山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中华十大名山之一，天池火山口湖奇观' },
      { name: '吉林雾凇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国四大自然奇观之一，玉树琼花' },
      { name: '长春电影城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '新中国电影的摇篮，电影主题公园' },
      { name: '伪满皇宫', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国现存三大宫廷遗址之一' }
    ]
  },
  spots: [
    { id: 'changbaishanMountain', name: '长白山天池', description: '中朝界湖，是一座休眠火山，火山口积水成湖', location: '延边朝鲜族自治州安图县', type: 'nature', bestTime: '夏秋两季', tags: ['火山', '湖泊', '边境', '自然'], rating: 4.8, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jilinRime', name: '吉林雾凇岛', description: '因雾凇多且美丽而得名，是中国著名的雾凇观赏胜地', location: '吉林市龙潭区乌拉街满族镇', type: 'nature', bestTime: '冬季', tags: ['雾凇', '冬季景观', '摄影', '自然'], rating: 4.5, landscapeType: 'urban_nature', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'changchunFilmCity', name: '长春电影世纪城', description: '新中国电影的摇篮，电影主题公园和博物馆', location: '长春市朝阳区', type: 'culture', bestTime: '全年', tags: ['电影', '主题公园', '文化', '娱乐'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'puppetMansionsPalace', name: '伪满皇宫博物院', description: '中国现存三大宫廷遗址之一，末代皇帝溥仪的宫殿', location: '长春市宽城区', type: 'culture', bestTime: '全年', tags: ['历史', '宫廷建筑', '近代史', '世界遗产'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'songhuaLake', name: '松花湖', description: '吉林省最大的人工湖，青山绿水风景秀丽', location: '吉林市丰满区', type: 'nature', bestTime: '夏季', tags: ['湖泊', '度假', '钓鱼', '水上运动'], rating: 4.3, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yanbianKoreanFolkVillage', name: '延边朝鲜族民俗园', description: '体验朝鲜族传统文化，欣赏民俗表演品尝正宗朝鲜族美食', location: '延边朝鲜族自治州延吉市', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['朝鲜族', '民俗', '美食', '表演'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开长白山冰雪融化万物复苏适合户外活动', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['长白山登山', '松花湖游览', '品尝山野菜', '赏花'] },
    { name: '夏季', description: '凉爽宜人长白山天池最美时节是避暑好去处', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['长白山避暑', '松花湖泛舟', '漂流戏水', '露营'] },
    { name: '秋季', description: '层林尽染五花山色迷人红叶满山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏红叶', '登高望远', '品尝秋收美食', '摄影'] },
    { name: '冬季', description: '雾凇最美滑雪最佳可体验东北民俗文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['看雾凇', '长白山滑雪', '温泉度假', '体验满族风情'] }
  ],
  activities: [
    { id: '1', name: '长白山北坡穿越', description: '徒步游览长白山瀑布小天池等景点感受火山地貌', category: 'hiking', location: '延边州安图县', duration: '1天', difficulty: '中等', type: '户外探险', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '吉林雾凇摄影之旅', description: '在最佳条件下拍摄雾凇奇观感受玉树琼花', category: 'photography', location: '吉林市', duration: '1天', difficulty: '简单', type: '摄影创作', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '长春电影文化之旅', description: '参观长影旧址博物馆了解中国电影发展历史', category: 'culture', location: '长春市', duration: '半天', difficulty: '简单', type: '文化体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '4', name: '长白山滑雪体验', description: '在亚洲顶级雪场体验滑雪乐趣感受冰雪魅力', category: 'sports', location: '延边州安图县', duration: '1天', difficulty: '中等', type: '冬季运动', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '吉林冰雪五日游', title: '白山黑水·冰雪吉林', description: '畅游吉林精华景点感受北国风光和关东文化', duration: '5天', difficulty: '简单', highlights: ['长春', '吉林市', '长白山', '延吉'], spots: ['长白山天池', '吉林雾凇岛'], tags: ['冰雪', '名山', '雾凇', '边境'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '12月-次年2月', traffic: '高铁+包车', suitableFor: '所有游客、摄影爱好者、冬季运动爱好者' },
    { id: '2', name: '长白山二日游', title: '神山圣水·天池仙境', description: '深度游览长白山北坡或西坡观赏天池美景', duration: '2天', difficulty: '中等', highlights: ['天池', '长白瀑布', '地下森林', '绿渊潭'], spots: ['长白山天池'], tags: ['名山', '湖泊', '火山', '自然风光'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '6-9月', traffic: '包车', suitableFor: '自然爱好者、摄影师、登山爱好者' },
    { id: '3', name: '吉林关东文化四日游', title: '关东风情·北国春城', description: '游览长春吉林等地感受关东文化和伪满历史', duration: '4天', difficulty: '简单', highlights: ['长春', '吉林市', '雾凇岛', '松花湖'], spots: ['吉林雾凇岛', '长春电影世纪城', '伪满皇宫博物院'], tags: ['历史', '电影', '雾凇', '湖泊'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '全年', traffic: '高铁+包车', suitableFor: '历史文化爱好者、家庭游客' }
  ],
  intangibleHeritage: [
    { id: '1', name: '朝鲜族农乐舞', description: '朝鲜族传统舞蹈，融舞蹈、音乐、杂技于一体', level: 'national', category: '传统舞蹈', protectionUnit: '延边朝鲜族自治州文化馆', features: ['农乐舞', '国家级非遗', '朝鲜族', '舞蹈艺术'], icon: '💃', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '东北大鼓', description: '东北地区传统曲艺形式，以鼓书说唱为特色', level: 'national', category: '传统曲艺', protectionUnit: '吉林省非物质文化遗产保护中心', features: ['大鼓', '国家级非遗', '曲艺', '说唱艺术'], icon: '🥁', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '长春冰雪节', description: '以冰雪旅游为主题的大型节庆，展示长春冰雪魅力', month: '12月', day: '至次年2月', location: '长春市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '朝鲜族民俗', description: '朝鲜族独特民俗文化，包括冷面、打糕、韩服等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['朝鲜族', '冷面', '打糕', '延边民俗'] }
  ]
};

export default jilinData;

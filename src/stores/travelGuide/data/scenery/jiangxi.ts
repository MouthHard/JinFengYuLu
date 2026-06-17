import type { SceneryData } from '@/typesOfPages/travelGuide';

export const jiangxiData: SceneryData = {
  overview: {
    totalSpots: 150, natureSpots: 80, cultureSpots: 70, topAttractions: [
      { name: '庐山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '匡庐奇秀甲天下，世界文化景观遗产' },
      { name: '井冈山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国革命的摇篮，红色旅游圣地' },
      { name: '景德镇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界瓷都，千年窑火不熄' },
      { name: '婺源', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国最美乡村，油菜花海古村落' }
    ]
  },
  spots: [
    { id: 'lushanMountain', name: '庐山', description: '以雄奇险秀闻名于世，具有极高的科学价值和旅游观赏价值', location: '九江市庐山市', type: 'nature', bestTime: '夏季', tags: ['名山', '避暑', '云雾', '世界遗产'], rating: 4.7, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jingdezhenPorcelain', name: '景德镇古窑民俗博览区', description: '全国唯一一家以陶瓷文化为主题的国家级旅游景区', location: '景德镇市昌江区', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['陶瓷', '工艺', '历史', '艺术'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'wuyuanVillage', name: '婺源', description: '中国最美乡村，油菜花海古村落徽派建筑典范', location: '上饶市婺源县', type: 'culture', cultureType: 'garden_arch', bestTime: '春季', tags: ['古村落', '油菜花', '摄影', '徽派建筑'], rating: 4.8, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jinggangMountain', name: '井冈山', description: '中国革命的摇篮，红色旅游圣地，绿色生态宝库', location: '吉安市井冈山市', type: 'culture', cultureType: 'street_memorial', bestTime: '全年', tags: ['红色旅游', '革命圣地', '自然风光'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'poyangLake', name: '鄱阳湖', description: '中国最大淡水湖，候鸟天堂湿地生态系统完整', location: '九江市', type: 'nature', bestTime: '冬季', tags: ['湖泊', '候鸟', '湿地', '自然'], rating: 4.3, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '婺源油菜花盛开庐山花开正艳适合踏青摄影', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['婺源赏花', '登庐山', '游览井冈山', '摄影创作'] },
    { name: '夏季', description: '庐山是著名避暑胜地鄱阳湖荷花盛开', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['庐山避暑', '鄱阳湖观鸟', '景德镇参观', '漂流戏水'] },
    { name: '秋季', description: '婺源晒秋景色迷人庐山秋高气爽红叶满山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['婺源晒秋', '庐山观红叶', '品尝秋收美食', '登高望远'] },
    { name: '冬季', description: '鄱阳湖候鸟云集是观鸟最佳时节可泡温泉', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['鄱阳湖观候鸟', '泡温泉', '品尝瓦罐汤', '逛庙会'] }
  ],
  activities: [
    { id: '1', name: '景德镇陶艺体验', description: '亲手制作瓷器体验陶瓷文化魅力', category: 'cultural', location: '景德镇市', duration: '半天', difficulty: '简单', type: '文化体验', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '婺源古村摄影创作', description: '在最佳光线条件下拍摄徽派建筑和田园风光', category: 'photography', location: '上饶市婺源县', duration: '1天', difficulty: '简单', type: '摄影创作', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '3', name: '庐山云海日出之旅', description: '登上含鄱口或五老峰观赏壮丽云海日出', category: 'nature', location: '九江市庐山市', duration: '2天', difficulty: '中等', type: '自然观光', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '4', name: '井冈山红色之旅', description: '游览革命旧址感受红色文化学习革命历史', category: 'cultural', location: '吉安市井冈山市', duration: '2天', difficulty: '简单', type: '历史文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  routes: [
    { id: '1', name: '江西红绿古四日游', title: '红色摇篮·瓷都江西', description: '畅游江西精华景点感受红色文化陶瓷文化和自然风光', duration: '4天', difficulty: '简单', highlights: ['庐山', '井冈山', '景德镇', '婺源'], spots: ['庐山', '景德镇古窑民俗博览区', '婺源'], tags: ['名山', '红色旅游', '陶瓷', '古村落'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '3-11月', traffic: '高铁+包车', suitableFor: '所有游客、摄影师、文化爱好者' },
    { id: '2', name: '赣北山水二日游', title: '匡庐奇秀·瓷都风情', description: '游览庐山景德镇等赣北精华景点', duration: '2天', difficulty: '简单', highlights: ['庐山', '景德镇', '鄱阳湖'], spots: ['庐山', '景德镇古窑民俗博览区'], tags: ['名山', '陶瓷', '湖泊', '文化'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '全年', traffic: '高铁或自驾', suitableFor: '文化爱好者、摄影师' },
    { id: '3', name: '江西环线五日游', title: '物华天宝·人杰地灵', description: '深度游览江西各地精华景点体验赣鄱文化', duration: '5天', difficulty: '中等', highlights: ['南昌', '庐山', '景德镇', '婺源', '井冈山'], spots: ['庐山', '景德镇古窑民俗博览区', '婺源', '井冈山'], tags: ['名山', '陶瓷', '古村落', '红色旅游'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '全年', traffic: '高铁+包车', suitableFor: '深度游爱好者、摄影师' }
  ],
  intangibleHeritage: [
    { id: '1', name: '景德镇手工制瓷技艺', description: '千年瓷都的制瓷绝技，成就了中国瓷器的辉煌', level: 'national', category: '传统技艺', protectionUnit: '景德镇市陶瓷研究所', features: ['制瓷', '国家级非遗', '千年瓷都', '青花瓷'], icon: '🏺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '婺源三雕', description: '婺源古建筑中的砖雕石雕木雕三雕技艺，精巧绝伦', level: 'national', category: '传统美术', protectionUnit: '婺源县非物质文化遗产保护中心', features: ['三雕', '国家级非遗', '建筑雕饰', '徽派工艺'], icon: '🪨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '景德镇国际瓷博会', description: '国际陶瓷博览会，展示千年瓷都的陶瓷艺术与产业', month: '10月', day: '18-22日左右', location: '景德镇市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '赣鄱民俗', description: '江西赣鄱地区民俗文化，包括傩舞、赣剧、晒秋等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['赣鄱文化', '傩舞', '晒秋', '客家民俗'] }
  ]
};

export default jiangxiData;

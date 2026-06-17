import type { SceneryData } from '@/typesOfPages/travelGuide';

export const zhejiangData: SceneryData = {
  overview: {
    totalSpots: 200, natureSpots: 100, cultureSpots: 100, topAttractions: [
      { name: '西湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '人间天堂，世界文化遗产，三面云山一面城' },
      { name: '乌镇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国最后的枕水人家，江南水乡典范' },
      { name: '普陀山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '观音菩萨道场，海天佛国，四大佛教名山之一' },
      { name: '千岛湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天下第一秀水，星罗棋布的岛屿如珍珠洒落' },
      { name: '西塘古镇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '活着的千年古镇，烟雨长廊独具特色' },
      { name: '横店影视城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '东方好莱坞，中国最大影视拍摄基地' },
      { name: '雁荡山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '东南第一山，奇峰怪石飞瀑流泉' },
      { name: '南浔古镇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中西合璧的古镇建筑，富甲一方的历史印记' }
    ]
  },
  spots: [
    { id: 'westLake', name: '西湖', description: '杭州西湖以其秀丽的湖光山色和众多的名胜古迹闻名中外', location: '杭州市西湖区', type: 'nature', bestTime: '四季皆宜', tags: ['湖泊', '园林', '世界遗产', '文化'], rating: 4.9, landscapeType: 'water', landscapeCategory: ['水体景观'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yandangMountain', name: '雁荡山', description: '东南第一山，以奇峰怪石飞瀑流泉著称，灵峰夜景天下绝', location: '温州市乐清市', type: 'nature', bestTime: '四季皆宜', tags: ['名山', '瀑布', '奇峰', '夜景'], rating: 4.6, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'qiandaoLake', name: '千岛湖', description: '新安江水库，星罗棋布的岛屿如珍珠洒落，天下第一秀水', location: '杭州市淳安县', type: 'nature', bestTime: '全年', tags: ['湖泊', '岛屿', '森林', '度假'], rating: 4.5, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'wuzhen', name: '乌镇', description: '典型的江南水乡古镇，完整保存着晚清和民国时期水乡古镇的风貌和格局', location: '嘉兴市桐乡市', type: 'culture', cultureType: 'historical_site', bestTime: '春秋两季', tags: ['古镇', '水乡', '历史', '文化'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'putuoMountain', name: '普陀山', description: '中国佛教四大名山之一，观音菩萨道场，素有海天佛国南海圣境之称', location: '舟山市普陀区', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['佛教', '名山', '朝圣', '海岛'], rating: 4.7, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'lingyinTemple', name: '灵隐寺', description: '江南著名古刹，始建于东晋，禅宗十大古刹之一，飞来峰造像举世闻名', location: '杭州市西湖区灵隐路', type: 'culture', cultureType: 'religious', bestTime: '春秋两季', tags: ['佛教', '古刹', '历史', '石刻'], rating: 4.8, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'hengdianFilmCity', name: '横店影视城', description: '亚洲最大的影视拍摄基地，被誉为东方好莱坞，集秦王宫、清明上河图等众多仿古景区于一体', location: '金华市东阳市横店镇', type: 'culture', cultureType: 'modern', bestTime: '全年', tags: ['影视', '摄影', '仿古建筑', '娱乐'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '桃红柳绿，西湖春晓最美时节', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏花', '游湖', '品龙井茶'] },
    { name: '夏季', description: '荷花盛开，曲院风荷醉人', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏荷', '避暑', '古镇纳凉'] },
    { name: '秋季', description: '桂花飘香，满陇桂雨香溢杭城', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏桂', '观潮', '登高'] },
    { name: '冬季', description: '断桥残雪，西湖冬韵别样美', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏雪', '泡温泉', '逛庙会'] }
  ],
  activities: [{ id: '1', name: '西湖泛舟', description: '乘船游览西湖十景', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'leisure', location: '浙江省杭州市', duration: '2小时', difficulty: '轻松', type: '休闲游' }],
  routes: [{ id: '1', name: '浙江经典四日游', title: '诗画浙江·山水之间', description: '游览浙江精华景点，体验江南风情', duration: '4天', difficulty: '轻松', highlights: ['西湖', '乌镇', '普陀山', '千岛湖'], spots: ['西湖', '乌镇', '普陀山', '千岛湖'], tags: ['山水', '古镇', '宗教', '湖泊'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '3-5月、9-11月', traffic: '高铁+大巴', suitableFor: '所有游客' }],
  intangibleHeritage: [
    { id: '1', name: '龙泉青瓷', description: '中国制瓷史上的璀璨明珠，以青如玉明如镜著称', level: 'national', category: '传统技艺', protectionUnit: '龙泉市青瓷行业协会', features: ['青瓷', '国家级非遗', '瓷器', '哥窑弟窑'], icon: '🏺', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '东阳木雕', description: '中国四大木雕之首，以层次丰富、精雕细刻著称', level: 'national', category: '传统美术', protectionUnit: '东阳木雕行业协会', features: ['木雕', '国家级非遗', '四大木雕', '建筑雕饰'], icon: '🪵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '钱江中秋观潮', description: '中秋节观赏钱塘江大潮的千年传统，天下奇观', month: '9月', day: '18-22日左右', location: '海宁盐官', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '江南民俗', description: '浙江江南水乡民俗文化，包括蚕花、龙井茶俗、水乡婚俗等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['江南文化', '蚕花', '茶俗', '水乡民俗'] }
  ]
};

export default zhejiangData;
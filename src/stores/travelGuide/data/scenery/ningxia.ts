import type { SceneryData } from '@/typesOfPages/travelGuide';

export const ningxiaData: SceneryData = {
  overview: {
    totalSpots: 100, natureSpots: 50, cultureSpots: 50, topAttractions: [
      { name: '沙坡头', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '大漠孤烟直长河落日圆，黄河与沙漠交汇奇观' },
      { name: '西夏王陵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '东方金字塔，西夏王朝皇家陵寝' },
      { name: '沙湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '塞上明珠，沙漠湖泊芦苇荡融为一体' },
      { name: '贺兰山岩画', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '北方游牧民族的画廊，远古文明印记' }
    ]
  },
  spots: [
    { id: 'shapotou', name: '沙坡头旅游区', description: '集大漠、黄河、高山、绿洲为一处，具西北风光之雄奇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '中卫市城区西部腾格里沙漠东南缘', type: 'nature', bestTime: '夏秋两季', tags: ['沙漠', '黄河', '滑沙', '骆驼'], rating: 4.6, landscapeType: 'wonderland' },
    { id: 'westernXiaImperialTombs', name: '西夏王陵', description: '是西历1038年至1227年间存在的大白高国皇室陵园', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '银川市西约30公里贺兰山东麓', type: 'culture', bestTime: '全年', tags: ['陵墓', '历史', '西夏', '考古'], rating: 4.5 },
    { id: 'shuidonggou', name: '水洞沟遗址', description: '中国最早发掘的旧石器时代遗址，被誉为中国史前考古的发祥地', location: '银川市灵武市', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['考古', '史前', '遗址', '博物馆'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'baisikouPagodas', name: '108塔', description: '西夏时期建造的喇嘛式塔群，依山势自上而下按奇数排列成十二行', location: '吴忠市青铜峡市', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['佛塔', '西夏', '黄河', '宗教'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'shahuLake', name: '沙湖生态旅游区', description: '塞上明珠，沙漠湖泊芦苇荡融为一体，江南水乡与大漠风光结合', location: '石嘴山市平罗县', type: 'nature', bestTime: '夏季', tags: ['湖泊', '沙漠', '芦苇', '鸟类'], rating: 4.4, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'helanMountain', name: '贺兰山', description: '父亲山，阻挡西北寒流和风沙，岩画丰富自然风光壮美', location: '银川市', type: 'nature', bestTime: '夏季', tags: ['名山', '岩画', '自然', '登山'], rating: 4.3, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '秋季', description: '秋高气爽适合游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['沙坡头滑沙', '游览王陵', '品尝滩羊肉'] }],
  activities: [{ id: '1', name: '沙坡头沙漠探险', description: '骑骆驼滑沙乘坐羊皮筏子', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'adventure', location: '中卫市', duration: '1天', difficulty: '简单', type: '户外运动' }],
  routes: [{ id: '1', name: '宁夏塞上江南三日游', title: '塞上江南·神奇宁夏', description: '体验宁夏独特的塞上江南风光，感受大漠与黄河的壮美交融', duration: '3天', difficulty: '简单', highlights: ['银川', '中卫', '石嘴山'], spots: ['沙坡头旅游区', '西夏王陵'], tags: ['沙漠探险', '历史文化', '黄河风光'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '夏秋两季', traffic: '飞机抵达银川河东机场，包车或自驾前往各景点', suitableFor: '家庭游客、摄影爱好者、户外爱好者' }],
  intangibleHeritage: [
    { id: '1', name: '回族剪纸', description: '回族传统剪纸艺术，以花卉几何图案为主，风格独特', level: 'national', category: '传统美术', protectionUnit: '宁夏非物质文化遗产保护中心', features: ['剪纸', '国家级非遗', '回族', '伊斯兰风格'], icon: '✂️', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '贺兰砚制作技艺', description: '以贺兰石为材制砚，紫绿双色天然雅致', level: 'national', category: '传统技艺', protectionUnit: '银川市贺兰砚协会', features: ['贺兰砚', '国家级非遗', '制砚', '紫绿双色'], icon: '🪨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '开斋节', description: '回族最盛大的宗教节日，斋月结束后的庆祝活动', month: '4-5月', day: '左右(每年浮动)', location: '宁夏各地', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '回族民俗', description: '回族独特民俗文化，包括盖碗茶、花儿、清真饮食等传统习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['回族文化', '盖碗茶', '清真', '塞上民俗'] }
  ]
};

export default ningxiaData;

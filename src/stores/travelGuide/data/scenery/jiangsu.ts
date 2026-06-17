import type { SceneryData } from '@/typesOfPages/travelGuide';

export const jiangsuData: SceneryData = {
  overview: {
    totalSpots: 180, natureSpots: 80, cultureSpots: 100, topAttractions: [
      { name: '苏州园林', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '咫尺之内再造乾坤，中国古典园林的巅峰之作' },
      { name: '中山陵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国近代民主革命先行者孙中山先生的陵寝' },
      { name: '瘦西湖', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '两堤花柳全依水，一路楼台直到山的湖上园林' },
      { name: '周庄', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国第一水乡，沈万三故居所在' },
      { name: '夫子庙秦淮河', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '十里秦淮六朝金粉地，南京历史文化荟萃之地' },
      { name: '拙政园', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国四大名园之首，江南园林的代表作品' }
    ]
  },
  spots: [
    { id: 'humbleAdministratorsGarden', name: '拙政园', description: '苏州最大的古典园林，以水为中心，山水萦绕，厅榭精美', location: '苏州市姑苏区东北街178号', type: 'culture', cultureType: 'garden_arch', bestTime: '春季', tags: ['园林', '世界遗产', '古典', '文化'], rating: 4.8, landscapeType: 'urban_nature', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'sunYatSenMausoleum', name: '中山陵', description: '位于紫金山南麓，是中国近代伟大的民主革命先行者孙中山先生的陵寝', location: '南京市玄武区石象路7号', type: 'culture', cultureType: 'street_memorial', bestTime: '春秋两季', tags: ['纪念', '历史', '建筑', '陵墓'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'slenderWestLake', name: '瘦西湖', description: '在清代康乾时期已形成基本格局，有园林之盛，甲于天下之誉', location: '扬州市邗江区大虹桥路28号', type: 'nature', bestTime: '春季', tags: ['湖泊', '园林', '花卉', '古建筑'], rating: 4.5, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'qixiaMountain', name: '栖霞山', description: '金陵第一明秀山，秋季红叶漫山遍野层林尽染', location: '南京市栖霞区', type: 'nature', bestTime: '秋季', tags: ['名山', '红叶', '古寺', '枫叶'], rating: 4.4, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'yantouzhu', name: '太湖鼋头渚', description: '太湖最美一角，太湖风光精华所在，郭沫若誉为太湖佳绝处', location: '无锡市滨湖区', type: 'nature', bestTime: '春季', tags: ['湖泊', '樱花', '太湖', '园林'], rating: 4.6, landscapeType: 'water', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'zhouzhuangWaterTown', name: '周庄古镇', description: '中国第一水乡，保存完好的明清古建筑群', location: '苏州市昆山市周庄镇', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['水乡', '古镇', '明清建筑', '沈万三'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'confuciusTemple', name: '夫子庙秦淮河', description: '南京历史文化荟萃之地，六朝金粉之地', location: '南京市秦淮区', type: 'culture', cultureType: 'folk_customs', bestTime: '全年', tags: ['历史', '文化', '夜景', '美食'], rating: 4.4, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '扬州瘦西湖烟花三月下扬州苏州园林春意盎然', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏花', '游园', '品早茶', '踏青'] },
    { name: '夏季', description: '炎热多雨但园林清凉宜人荷花盛开', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏荷', '游园林', '品茶', '避暑'] },
    { name: '秋季', description: '金陵秋色层林尽染栖霞山红叶满山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['赏秋', '登栖霞山', '游秦淮', '品蟹'] },
    { name: '冬季', description: '湿冷阴沉可泡温泉体验苏式生活', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['泡温泉', '逛庙会', '品尝年货', '游园林'] }
  ],
  activities: [
    { id: '1', name: '苏州园林深度游', description: '游览拙政园、留园、网师园等名园', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'culture', location: '江苏省苏州市', duration: '1天', difficulty: '简单', type: '文化体验' },
    { id: '2', name: '江南水乡游船', description: '乘坐乌篷船游览周庄同里等水乡古镇', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'leisure', location: '江苏省苏州市昆山市', duration: '半天', difficulty: '简单', type: '水乡游览' },
    { id: '3', name: '南京历史文化游', description: '游览中山陵明孝陵夫子庙等历史名胜', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'cultural', location: '江苏省南京市', duration: '2天', difficulty: '简单', type: '历史文化' },
    { id: '4', name: '扬州早茶文化体验', description: '品尝正宗扬州早茶体验慢生活文化', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'food', location: '江苏省扬州市', duration: '半天', difficulty: '简单', type: '美食体验' }
  ],
  routes: [
    { id: '1', name: '苏南经典三日游', title: '江南园林·人文荟萃', description: '游览江南著名园林和水乡古镇', duration: '3天', difficulty: '简单', highlights: ['苏州园林', '周庄', '中山陵', '夫子庙'], spots: ['拙政园', '周庄古镇', '中山陵', '夫子庙秦淮河'], tags: ['园林', '水乡', '历史', '文化'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '3-5月、9-11月', traffic: '高铁+自驾', suitableFor: '文化爱好者、家庭游客' },
    { id: '2', name: '南京二日游', title: '金陵帝王州·六朝古都', description: '深度游览南京历史文化名胜', duration: '2天', difficulty: '简单', highlights: ['中山陵', '明孝陵', '夫子庙', '总统府'], spots: ['中山陵', '夫子庙秦淮河'], tags: ['历史', '文化', '陵墓', '都市'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '全年', traffic: '地铁+出租车', suitableFor: '历史爱好者、学生' },
    { id: '3', name: '苏锡常四日游', title: '太湖明珠·江南水乡', description: '游览苏州无锡常州等太湖周边城市', duration: '4天', difficulty: '简单', highlights: ['苏州园林', '无锡鼋头渚', '常州恐龙园', '周庄'], spots: ['拙政园', '周庄古镇', '瘦西湖'], tags: ['园林', '水乡', '太湖', '主题乐园'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '全年', traffic: '高铁+自驾', suitableFor: '家庭游客、文化爱好者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '苏绣', description: '中国四大名绣之一，以精细雅洁闻名，针法多达40多种', level: 'national', category: '传统美术', protectionUnit: '苏州刺绣研究所', features: ['刺绣', '国家级非遗', '四大名绣', '双面绣'], icon: '🧵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '南京云锦', description: '中国三大名锦之一，以妆金妆彩工艺著称，古代御用织品', level: 'national', category: '传统技艺', protectionUnit: '南京云锦研究所', features: ['云锦', '国家级非遗', '三大名锦', '御用织品'], icon: '👘', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '姑苏中秋赏月', description: '苏州传统中秋赏月活动，石湖串月闻名遐迩', month: '9月', day: '15-17日左右', location: '苏州石湖', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '吴地民俗', description: '吴地传统民俗文化，包括评弹、昆曲、园林生活等雅致习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['吴文化', '评弹', '昆曲', '江南民俗'] }
  ]
};

export default jiangsuData;

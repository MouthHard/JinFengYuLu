import type { SceneryData } from '@/typesOfPages/travelGuide';

export const shandongData: SceneryData = {
  overview: {
    totalSpots: 200, natureSpots: 90, cultureSpots: 110, topAttractions: [
      { name: '泰山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '五岳之首，天下第一山，会当凌绝顶一览众山小' },
      { name: '曲阜三孔', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '孔府孔庙孔林，儒家文化的圣地' },
      { name: '青岛栈桥', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '青岛标志性建筑，长虹远引回澜阁' },
      { name: '蓬莱阁', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '人间仙境，八仙过海的传说发源地' },
      { name: '趵突泉', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天下第一泉，济南七十二名泉之冠' },
      { name: '威海刘公岛', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '北洋水师基地，甲午战争纪念地' }
    ]
  },
  spots: [
    { id: 'mountTai', name: '泰山', description: '五岳独尊，中华民族精神的象征，历代帝王封禅祭祀之地', location: '泰安市泰山区红门路54号', type: 'nature', bestTime: '春夏秋三季', tags: ['五岳', '登山', '日出', '文化遗产'], rating: 4.8, landscapeType: 'mountain', landscapeCategory: ['地理景观'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'confuciusTemple', name: '孔庙孔府孔林', description: '祭祀中国古代伟大思想家、教育家孔子的祠庙及其家族墓地', location: '济宁市曲阜市', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['儒家', '文化遗产', '历史', '教育'], rating: 4.7, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'taierzhuangAncientCity', name: '台儿庄古城', description: '中国最美水乡之一，活着的古运河，中华古水城', location: '枣庄市台儿庄区', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['古城', '运河', '水乡', '夜景'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'liugongIsland', name: '刘公岛', description: '北洋水师基地，甲午战争主战场，近代史教育圣地', location: '威海市环翠区', type: 'culture', cultureType: 'street_memorial', bestTime: '夏季', tags: ['海岛', '甲午战争', '历史', '博物馆'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'qingdaoZhanqiao', name: '青岛栈桥及海滨', description: '青岛最早的军事专用人工码头，被誉为青岛标志', location: '青岛市市南区太平路12号', type: 'nature', bestTime: '夏季', tags: ['海滨', '建筑', '欧式', '度假'], rating: 4.5, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'baotuSpring', name: '趵突泉景区', description: '天下第一泉，济南七十二名泉之冠，泉水清澈见底', location: '济南市历下区', type: 'nature', bestTime: '秋季', tags: ['泉水', '名泉', '园林', '济南'], rating: 4.6, landscapeType: 'urban_nature', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'penglaiPavilion', name: '蓬莱阁', description: '人间仙境，八仙过海的传说发源地，海市蜃楼奇观', location: '烟台市蓬莱区', type: 'nature', bestTime: '夏季', tags: ['仙境', '海滨', '传说', '古建筑'], rating: 4.7, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '泰山桃花盛开趵突泉水涌', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['登山', '赏花', '品泉'] },
    { name: '夏季', description: '青岛海滨避暑胜地', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['海水浴', '啤酒节', '海鲜美食'] }
  ],
  activities: [{ id: '1', name: '泰山登山观日', description: '夜爬泰山看日出', category: 'outdoor', location: '泰安市泰山风景区', duration: '1天', difficulty: '中等', type: '户外运动', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }],
  routes: [{ id: '1', name: '山东齐鲁文化五日游', title: '一山一水一圣人', description: '游览五岳之首泰山、儒家圣地曲阜、泉水之都济南和海滨城市青岛', duration: '5天', difficulty: '简单', highlights: ['泰山', '曲阜三孔', '趵突泉', '青岛'], spots: ['泰山', '孔庙孔府孔林', '青岛栈桥及海滨'], tags: ['历史文化', '自然风光', '儒家文化', '海滨度假'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '春秋两季', traffic: '高铁+包车', suitableFor: '所有游客、文化爱好者' }],
  intangibleHeritage: [
    { id: '1', name: '潍坊风筝', description: '中国风筝之乡，风筝造型优美、工艺精湛，享誉世界', level: 'national', category: '传统技艺', protectionUnit: '潍坊市风筝产业协会', features: ['风筝', '国家级非遗', '民间工艺', '扎糊绘放'], icon: '🪁', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '杨家埠木版年画', description: '中国三大木版年画之一，以粗犷朴实、色彩鲜艳著称', level: 'national', category: '传统美术', protectionUnit: '潍坊杨家埠木版年画社', features: ['年画', '国家级非遗', '木版印刷', '民间美术'], icon: '🎨', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '曲阜国际孔子文化节', description: '纪念孔子诞辰的国际性文化盛典，祭孔大典庄严肃穆', month: '9月', day: '28日', location: '曲阜市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '齐鲁民俗', description: '齐鲁大地传统民俗文化，包括祭孔、吕剧、赶海等习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['齐鲁文化', '祭孔', '儒家文化', '山东民俗'] }
  ]
};

export default shandongData;

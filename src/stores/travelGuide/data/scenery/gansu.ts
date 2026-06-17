import type { SceneryData } from '@/typesOfPages/travelGuide';

export const gansuData: SceneryData = {
  overview: {
    totalSpots: 120, natureSpots: 60, cultureSpots: 60, topAttractions: [
      { name: '敦煌莫高窟', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '东方卢浮宫，世界文化遗产，佛教艺术宝库' },
      { name: '鸣沙山月牙泉', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '沙漠奇观，沙不填泉泉不涸竭，千年守望' },
      { name: '张掖丹霞', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '七彩丹霞，彩虹山，上帝打翻的调色盘' },
      { name: '嘉峪关', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '天下第一雄关，长城西端起点' }
    ]
  },
  spots: [
    { id: 'mogaoGrottoes', name: '莫高窟', description: '世界上现存规模最大内容最丰富的佛教艺术地', location: '酒泉市敦煌市', type: 'culture', cultureType: 'religious', bestTime: '秋季', tags: ['石窟', '艺术', '世界遗产', '佛教'], rating: 4.9, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'singingSandMountain', name: '鸣沙山月牙泉', description: '处于鸣沙山环抱之中，形如新月而得名', location: '酒泉市敦煌市城南5公里', type: 'nature', bestTime: '夏秋两季', tags: ['沙漠', '泉水', '自然奇观'], rating: 4.7, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'zhangyeDanxia', name: '张掖七彩丹霞', description: '世界十大神奇地理奇观之一，彩虹山上帝打翻的调色盘', location: '张掖市临泽县', type: 'nature', bestTime: '秋季', tags: ['丹霞地貌', '地质公园', '摄影', '自然'], rating: 4.8, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'jiayuguanPass', name: '嘉峪关关城', description: '天下第一雄关，万里长城西端起点，明长城最西端关口', location: '嘉峪关市', type: 'culture', cultureType: 'historical_site', bestTime: '全年', tags: ['长城', '关隘', '历史', '军事'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'kongtongMountain', name: '崆峒山', description: '道教名山，西来第一山，黄帝问道处', location: '平凉市', type: 'nature', bestTime: '夏季', tags: ['道教名山', '名山', '历史文化', '登山'], rating: 4.5, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [
    { name: '春季', description: '春暖花开河西走廊生机勃勃，适合户外游览', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['嘉峪关登城', '张掖丹霞观光', '品尝兰州拉面'] },
    { name: '夏季', description: '气候凉爽是避暑好去处，敦煌莫高窟人流相对较少', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['莫高窟参观', '鸣沙山骑骆驼滑沙', '沙漠露营'] },
    { name: '秋季', description: '天高气爽是游览丝路黄金季节，丹霞色彩最艳丽', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['莫高窟参观', '沙漠骑骆驼', '嘉峪关怀古', '张掖赏丹霞'] },
    { name: '冬季', description: '寒冷干燥但游客稀少可深度体验，雪后大漠别有风情', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['莫高窟深度游', '体验冬捕', '泡温泉', '品尝热冬果'] }
  ],
  activities: [
    { id: '1', name: '丝绸之路文化之旅', description: '重走丝绸之路精华段感受丝路文明', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'culture', location: '甘肃省', duration: '5天', difficulty: '中等', type: '文化游' },
    { id: '2', name: '敦煌莫高窟艺术之旅', description: '专业讲解员带领参观洞窟了解佛教艺术', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'art', location: '酒泉市敦煌市', duration: '1天', difficulty: '简单', type: '艺术鉴赏' },
    { id: '3', name: '鸣沙山沙漠探险', description: '骑骆驼滑沙越野冲浪体验沙漠魅力', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'adventure', location: '酒泉市敦煌市', duration: '半天', difficulty: '中等', type: '户外探险' },
    { id: '4', name: '张掖丹霞摄影创作', description: '在最佳光线条件下拍摄七彩丹霞美景', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'photography', location: '张掖市临泽县', duration: '1天', difficulty: '简单', type: '摄影创作' }
  ],
  routes: [
    { id: '1', name: '甘肃丝路五日游', title: '丝路明珠·河西走廊', description: '探访丝绸之路上的璀璨文明感受千年丝路风华', duration: '5天', difficulty: '中等', highlights: ['敦煌', '张掖', '嘉峪关', '兰州'], spots: ['莫高窟', '鸣沙山月牙泉', '张掖丹霞', '嘉峪关关城'], tags: ['丝路', '文化', '历史', '艺术'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.8, bestTime: '5-10月', traffic: '飞机+包车', suitableFor: '历史文化爱好者' },
    { id: '2', name: '甘南藏区四日游', title: '九色甘南·香巴拉', description: '深入甘南藏族自治州体验藏族文化与高原风光', duration: '4天', difficulty: '较难', highlights: ['拉卜楞寺', '郎木寺', '扎尕那', '桑科草原'], spots: [], tags: ['藏族文化', '草原', '寺庙', '高原风光'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.6, bestTime: '6-9月', traffic: '包车', suitableFor: '摄影爱好者、文化探索者' },
    { id: '3', name: '甘肃全景七日游', title: '大美甘肃·丝路全览', description: '从兰州出发穿越河西走廊抵达敦煌完整体验丝路文明', duration: '7天', difficulty: '中等', highlights: ['兰州', '武威', '张掖', '嘉峪关', '敦煌'], spots: ['莫高窟', '鸣沙山月牙泉', '张掖丹霞', '嘉峪关关城', '崆峒山'], tags: ['丝路', '自然风光', '历史文化', '民族风情'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '5-10月', traffic: '飞机+包车或自驾', suitableFor: '所有游客、深度游爱好者' }
  ],
  intangibleHeritage: [
    { id: '1', name: '敦煌壁画临摹技艺', description: '传承千年的敦煌壁画临摹技艺，再现石窟艺术辉煌', level: 'national', category: '传统美术', protectionUnit: '敦煌研究院', features: ['壁画', '国家级非遗', '敦煌艺术', '石窟文化'], icon: '🖼️', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '兰州水车制作技艺', description: '黄河岸边传统灌溉工具制作技艺，水车悠悠转千年', level: 'national', category: '传统技艺', protectionUnit: '兰州市非物质文化遗产保护中心', features: ['水车', '国家级非遗', '黄河文化', '灌溉工具'], icon: '🎡', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '敦煌行吟文化节', description: '以敦煌文化为主题的国际性文化节庆活动', month: '9月', day: '20-25日左右', location: '敦煌市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '陇原民俗', description: '甘肃陇原地区民俗文化，包括花儿、社火、裕固族习俗等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['陇原文化', '花儿', '丝路民俗', '黄河文化'] }
  ]
};

export default gansuData;
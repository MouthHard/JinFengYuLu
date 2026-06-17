import type { SceneryData } from '@/typesOfPages/travelGuide';

export const neimengguData: SceneryData = {
  overview: {
    totalSpots: 180, natureSpots: 120, cultureSpots: 60, topAttractions: [
      { name: '呼伦贝尔草原', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界三大草原之一，牧草王国' },
      { name: '额济纳胡杨林', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '活着千年不死死后千年不倒的沙漠英雄树' },
      { name: '响沙湾', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '会唱歌的沙漠，滑沙响声如雷鸣' },
      { name: '成吉思汗陵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '一代天骄成吉思汗的衣冠冢' }
    ]
  },
  spots: [
    { id: 'hulunbuirGrassland', name: '呼伦贝尔大草原', description: '因境内的呼伦湖和贝尔湖而得名，是世界著名的天然牧场', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '呼伦贝尔市', type: 'nature', bestTime: '夏季', tags: ['草原', '蒙古族', '牧马', '自然'], rating: 4.8, landscapeType: 'vegetation' },
    { id: 'ejinaPopulusEuphratica', name: '额济纳旗胡杨林', description: '现存仅有的三处天然河道胡杨林之一', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '阿拉善盟额济纳旗', type: 'nature', bestTime: '秋季', tags: ['胡杨林', '沙漠', '秋季景观', '摄影'], rating: 4.7, landscapeType: 'wonderland' },
    { id: 'xiangshawan', name: '响沙湾', description: '会唱歌的沙漠，滑沙响声如雷鸣，沙漠迪士尼', location: '鄂尔多斯市达拉特旗', type: 'nature', bestTime: '夏季和秋季', tags: ['沙漠', '滑沙', '响沙', '骆驼'], rating: 4.5, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'genghisKhanMausoleum', name: '成吉思汗陵', description: '一代天骄成吉思汗的衣冠冢，蒙古族祭祀圣地，展示成吉思汗生平与蒙元文化', location: '鄂尔多斯市伊金霍洛旗', type: 'culture', cultureType: 'royal', bestTime: '全年', tags: ['成吉思汗', '陵寝', '祭祀', '蒙元文化'], rating: 4.6, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'dazhaoTemple', name: '大召寺', description: '呼和浩特最早建成的黄教寺院，供奉银佛释迦牟尼像，被誉为银佛寺', location: '呼和浩特市玉泉区', type: 'culture', cultureType: 'religious', bestTime: '全年', tags: ['藏传佛教', '寺院', '银佛', '古建筑'], rating: 4.5, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'hohhotOldCity', name: '呼和浩特塞上老街', description: '明清风格古街，大召寺前历史文化街区，集中展示内蒙古传统手工艺与美食文化', location: '呼和浩特市玉泉区大召前街', type: 'culture', cultureType: 'street_memorial', bestTime: '全年', tags: ['老街', '历史街区', '美食', '手工艺'], rating: 4.3, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '夏季', description: '草原最美时节绿草如茵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['草原骑马', '住蒙古包', '品尝烤全羊'] }],
  activities: [{ id: '1', name: '草原深度体验', description: '骑马射箭住蒙古包体验游牧生活', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'cultural', location: '呼伦贝尔市', duration: '2天', difficulty: '简单', type: '文化体验' }],
  routes: [{ id: '1', name: '内蒙古草原六日游', title: '天苍苍野茫茫·风吹草低见牛羊', description: '深入内蒙古大草原，体验蒙古族游牧文化，欣赏壮美自然风光', duration: '6天', difficulty: '中等', highlights: ['呼和浩特', '呼伦贝尔', '额济纳', '响沙湾'], spots: ['呼伦贝尔大草原', '额济纳旗胡杨林'], tags: ['草原风光', '民族文化', '沙漠探险'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.7, bestTime: '夏季、秋季', traffic: '飞机抵达呼和浩特或海拉尔，包车或自驾游览草原', suitableFor: '摄影爱好者、户外爱好者、文化探索者' }],
  intangibleHeritage: [
    { id: '1', name: '蒙古长调', description: '蒙古族传统歌唱艺术，悠远绵长、辽阔深沉', level: 'national', category: '传统音乐', protectionUnit: '内蒙古自治区非物质文化遗产保护中心', features: ['长调', '国家级非遗', '蒙古族', '草原牧歌'], icon: '🎵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '马头琴', description: '蒙古族传统乐器，琴声悠扬诉说着草原故事', level: 'national', category: '传统音乐', protectionUnit: '内蒙古自治区马头琴协会', features: ['马头琴', '国家级非遗', '蒙古族', '弓弦乐器'], icon: '🎻', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '那达慕大会', description: '蒙古族最盛大的传统盛会，赛马摔跤射箭三艺竞技', month: '7月', day: '15日左右', location: '内蒙古各地', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '蒙古族民俗', description: '蒙古族独特民俗文化，包括蒙古包、奶茶、敖包祭祀等', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['蒙古族文化', '蒙古包', '那达慕', '草原民俗'] }
  ]
};

export default neimengguData;

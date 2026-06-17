import type { SceneryData } from '@/typesOfPages/travelGuide';

export const liaoningData: SceneryData = {
  overview: {
    totalSpots: 160, natureSpots: 70, cultureSpots: 90, topAttractions: [
      { name: '沈阳故宫', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '中国仅存的两大宫殿建筑群之一，清朝发祥地' },
      { name: '大连星海广场', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '亚洲最大城市广场，大连地标' },
      { name: '本溪水洞', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '世界上最长的可乘船游览的地下暗河溶洞' },
      { name: '千山', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, description: '东北明珠，道教名山，无峰不奇无石不峭' }
    ]
  },
  spots: [
    { id: 'shenyangImperialPalace', name: '沈阳故宫', description: '中国清朝入关前的皇宫，是清太祖努尔哈赤和清太宗皇太极建造和使用的宫殿', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '沈阳市沈河区沈阳路171号', type: 'culture', bestTime: '全年', tags: ['宫殿', '清朝', '历史', '建筑'], rating: 4.6 },
    { id: 'xinghaiSquare', name: '星海广场', description: '为纪念香港回归而建，是亚洲最大的城市广场', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, location: '大连市沙河口区', type: 'culture', bestTime: '夏季', tags: ['广场', '海滨', '现代', '地标'], rating: 4.4, landscapeType: 'urban_nature' },
    { id: 'benxiWaterCave', name: '本溪水洞', description: '世界上最长的可乘船游览的地下暗河溶洞，钟乳石千姿百态', location: '本溪市本溪满族自治县', type: 'nature', bestTime: '全年', tags: ['溶洞', '地下河', '钟乳石', '地质奇观'], rating: 4.6, landscapeType: 'wonderland', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'qianshanMountain', name: '千山风景名胜区', description: '东北明珠，道教名山，无峰不奇无石不峭，景色秀丽', location: '鞍山市铁东区', type: 'nature', bestTime: '春秋两季', tags: ['名山', '道教', '奇石', '登山'], rating: 4.5, landscapeType: 'mountain', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'xinghaiBeach', name: '金石滩国家旅游度假区', description: '大连著名的海滨度假胜地，奇石海岸线独特', location: '大连市金州区', type: 'nature', bestTime: '夏季', tags: ['海滨', '度假', '奇石', '海滩'], rating: 4.4, landscapeType: 'coastal', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: 'dalianRussianStreet', name: '俄罗斯风情街', description: '百年俄罗斯风格建筑群，大连异域文化地标，历史与时尚交融', location: '大连市西岗区', type: 'culture', cultureType: 'historical_site', bestTime: '全天', tags: ['俄式建筑', '历史', '异域风情', '购物'], rating: 4.2, image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  seasonal: [{ name: '夏季', description: '大连海滨避暑胜地', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, activities: ['游览沈阳故宫', '大连海滨度假', '千山登山'] }],
  activities: [{ id: '1', name: '本溪水洞探秘', description: '乘船游览地下暗河', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, category: 'adventure', location: '本溪市', duration: '半天', difficulty: '简单', type: '户外运动' }],
  routes: [{ id: '1', name: '辽宁历史文化四日游', title: '共和国长子·辽宁', description: '探索辽宁深厚的历史文化底蕴，从清朝发祥地到现代海滨都市', duration: '4天', difficulty: '简单', highlights: ['沈阳', '大连', '本溪', '鞍山'], spots: ['沈阳故宫', '星海广场', '本溪水洞', '千山'], tags: ['历史文化', '自然风光', '海滨度假'], image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, rating: 4.5, bestTime: '春秋两季', traffic: '飞机抵达沈阳或大连，省内高铁连接各市', suitableFor: '家庭游客、历史爱好者、摄影爱好者' }],
  intangibleHeritage: [
    { id: '1', name: '辽绣', description: '东北地区的传统刺绣技艺，以粗犷豪放与细腻并存著称', level: 'provincial', category: '传统美术', protectionUnit: '沈阳市非物质文化遗产保护中心', features: ['刺绣', '省级非遗', '满族文化', '东北工艺'], icon: '🧵', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` },
    { id: '2', name: '岫岩满族剪纸', description: '满族传统剪纸艺术，图案粗犷质朴，富有民族特色', level: 'national', category: '传统美术', protectionUnit: '岫岩满族自治县文化馆', features: ['剪纸', '国家级非遗', '满族艺术', '民间美术'], icon: '✂️', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp` }
  ],
  festivals: [
    { id: '1', name: '沈阳国际冰雪节', description: '以冰雪为主题的国际性节庆活动，展示北国风光', month: '12月', day: '至次年2月', location: '沈阳市', isUnique: true }
  ],
  folkCustomsElements: [
    { name: '满族民俗', description: '满族传统民俗文化，包括萨满祭祀、旗袍、饽饽等独特习俗', image: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`, tags: ['满族文化', '萨满', '旗袍', '东北民俗'] }
  ]
};

export default liaoningData;

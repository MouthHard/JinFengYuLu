import {
  ScenerySpot,
  TravelActivity,
  RouteInfo,
  SeasonalScenery,
} from "../scenery.ts";

// 四川省自然风光数据
const sichuanNatureSpots: ScenerySpot[] = [
  {
    id: "jiuzhaigouValley",
    name: "九寨沟",
    description:
      "四川省阿坝藏族羌族自治州的著名自然景区，以其美丽的湖泊、瀑布和多彩的森林而闻名",
    image: "https://picsum.photos/id/1019/600/400",
    location: "四川省阿坝藏族羌族自治州九寨沟县",
    type: "nature",
    bestTime: "秋季",
    tags: ["自然", "湖泊", "瀑布", "森林"],
    rating: 4.9,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["湖泊景观"],
  },
  {
    id: "dujiangyanIrrigationSystem",
    name: "都江堰",
    description:
      "四川省成都市的著名水利工程，以其独特的设计和重要的历史意义而闻名",
    image: "https://picsum.photos/id/1035/600/400",
    location: "四川省成都市都江堰市",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "水利", "历史", "文化"],
    rating: 4.8,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史建筑"],
  },
  {
    id: "qingchengMountain",
    name: "青城山",
    description:
      "四川省成都市的著名道教名山，以其秀丽的自然风光和丰富的道教文化而闻名",
    image: "https://picsum.photos/id/1036/600/400",
    location: "四川省成都市都江堰市",
    type: "nature",
    bestTime: "春季",
    tags: ["自然", "山岳", "道教", "文化"],
    rating: 4.7,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "leshanGiantBuddha",
    name: "乐山大佛",
    description: "四川省乐山市的著名石刻佛像，以其巨大的规模和精美的雕刻而闻名",
    image: "https://picsum.photos/id/1037/600/400",
    location: "四川省乐山市市中区",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "石刻", "佛教", "文化"],
    rating: 4.8,
    landscapeType: "grotto",
    landscapeCategory: ["人文景观"],
    landformTags: ["石刻景观"],
  },
  {
    id: "emeiMountain",
    name: "峨眉山",
    description:
      "四川省乐山市的著名佛教名山，以其秀丽的自然风光和丰富的佛教文化而闻名",
    image: "https://picsum.photos/id/1038/600/400",
    location: "四川省乐山市峨眉山市",
    type: "nature",
    bestTime: "春季",
    tags: ["自然", "山岳", "佛教", "文化"],
    rating: 4.8,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "chengduPandaBase",
    name: "成都大熊猫繁育研究基地",
    description:
      "四川省成都市的著名大熊猫保护基地，以其可爱的大熊猫和完善的保护设施而闻名",
    image: "https://picsum.photos/id/1039/600/400",
    location: "四川省成都市成华区熊猫大道",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "动物", "保护", "科普"],
    rating: 4.7,
    landscapeType: "zoo",
    landscapeCategory: ["生物景观"],
    landformTags: ["动物景观"],
  },
  {
    id: "daochengYading",
    name: "稻城亚丁",
    description:
      "四川省甘孜藏族自治州的著名自然景区，以其壮丽的雪山、湖泊和草原而闻名",
    image: "https://picsum.photos/id/1040/600/400",
    location: "四川省甘孜藏族自治州稻城县",
    type: "nature",
    bestTime: "秋季",
    tags: ["自然", "雪山", "湖泊", "草原"],
    rating: 4.9,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
];

// 四川省人文景观数据
const sichuanCultureSpots: ScenerySpot[] = [
  {
    id: "wuhouciTemple",
    name: "武侯祠",
    description:
      "四川省成都市的著名祠堂，以其纪念诸葛亮的历史意义和精美的建筑而闻名",
    image: "https://picsum.photos/id/1044/600/400",
    location: "四川省成都市武侯区武侯祠大街",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "祠堂", "建筑"],
    rating: 4.7,
    landscapeType: "temple",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史建筑"],
  },
  {
    id: "jinliAncientStreet",
    name: "锦里古街",
    description:
      "四川省成都市的著名历史文化街区，以其独特的建筑风格和丰富的民俗文化而闻名",
    image: "https://picsum.photos/id/1045/600/400",
    location: "四川省成都市武侯区锦里古街",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "古街", "民俗"],
    rating: 4.6,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史街区"],
  },
  {
    id: "kuiZhaiAlley",
    name: "宽窄巷子",
    description:
      "四川省成都市的著名历史文化街区，以其独特的建筑风格和丰富的民俗文化而闻名",
    image: "https://picsum.photos/id/1046/600/400",
    location: "四川省成都市青羊区宽窄巷子",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "古街", "民俗"],
    rating: 4.6,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史街区"],
  },
  {
    id: "sichuanCuisineMuseum",
    name: "川菜博物馆",
    description: "四川省成都市的著名博物馆，以其丰富的川菜文化和历史而闻名",
    image: "https://picsum.photos/id/1047/600/400",
    location: "四川省成都市郫县古城镇",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "美食", "博物馆"],
    rating: 4.5,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["博物馆"],
  },
  {
    id: "chengduUrbanPlanningExhibitionCenter",
    name: "成都规划馆",
    description:
      "四川省成都市的著名展馆，以其丰富的城市规划信息和互动体验而闻名",
    image: "https://picsum.photos/id/1048/600/400",
    location: "四川省成都市锦江区东大街",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "城市", "规划"],
    rating: 4.4,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["博物馆"],
  },
];

// 四川省季节性数据
const sichuanSeasonalData: Record<string, SeasonalScenery> = {
  spring: {
    name: "春季",
    description: "春季的四川，万物复苏，是游览青城山、峨眉山的最佳时节",
    image: "https://picsum.photos/id/1049/600/400",
    activities: [
      "青城山踏青",
      "峨眉山赏花",
      "成都大熊猫基地参观",
      "锦里古街春游",
    ],
  },
  summer: {
    name: "夏季",
    description: "夏季的四川，气温适中，是游览九寨沟、都江堰的好去处",
    image: "https://picsum.photos/id/1050/600/400",
    activities: [
      "九寨沟避暑",
      "都江堰水利工程参观",
      "乐山大佛游览",
      "成都宽窄巷子休闲",
    ],
  },
  autumn: {
    name: "秋季",
    description: "秋季的四川，天高气爽，是游览九寨沟、稻城亚丁的最佳时节",
    image: "https://picsum.photos/id/1051/600/400",
    activities: ["九寨沟赏秋", "稻城亚丁秋游", "青城山登山", "成都武侯祠参观"],
  },
  winter: {
    name: "冬季",
    description:
      "冬季的四川，虽然寒冷，但温泉和火锅是不错的选择，是参观成都市区景点的好时节",
    image: "https://picsum.photos/id/1052/600/400",
    activities: ["温泉泡浴", "火锅体验", "成都大熊猫基地参观", "锦里古街夜游"],
  },
};

// 四川省活动数据
const sichuanActivities: TravelActivity[] = [
  {
    id: "1",
    name: "九寨沟游览",
    description: "游览九寨沟，欣赏美丽的湖泊、瀑布和多彩的森林",
    image: "https://picsum.photos/id/1053/600/400",
    category: "nature",
    location: "四川省阿坝藏族羌族自治州九寨沟县",
    duration: "2-3天",
    difficulty: "中等",
    type: "户外活动",
  },
  {
    id: "2",
    name: "川菜体验",
    description: "品尝四川正宗川菜，感受麻辣鲜香的独特风味",
    image: "https://picsum.photos/id/1054/600/400",
    category: "culture",
    location: "四川省成都市锦里古街",
    duration: "2-3小时",
    difficulty: "简单",
    type: "美食体验",
  },
  {
    id: "3",
    name: "成都大熊猫基地参观",
    description: "参观成都大熊猫繁育研究基地，欣赏可爱的大熊猫",
    image: "https://picsum.photos/id/1055/600/400",
    category: "culture",
    location: "四川省成都市成华区熊猫大道",
    duration: "3-4小时",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "4",
    name: "乐山大佛游览",
    description: "游览乐山大佛，欣赏巨大的石刻佛像和精美的雕刻",
    image: "https://picsum.photos/id/1056/600/400",
    category: "culture",
    location: "四川省乐山市市中区",
    duration: "1天",
    difficulty: "中等",
    type: "文化体验",
  },
  {
    id: "5",
    name: "都江堰水利工程参观",
    description: "参观都江堰水利工程，了解其独特的设计和重要的历史意义",
    image: "https://picsum.photos/id/1057/600/400",
    category: "culture",
    location: "四川省成都市都江堰市",
    duration: "1天",
    difficulty: "简单",
    type: "文化体验",
  },
];

// 四川省路线数据
const sichuanRoutes: RouteInfo[] = [
  {
    id: "1",
    name: "四川自然生态之旅",
    title: "四川自然生态之旅",
    description: "游览四川最著名的自然生态景区",
    duration: "7天",
    difficulty: "中等",
    highlights: ["九寨沟", "青城山", "峨眉山", "稻城亚丁"],
    spots: ["九寨沟", "青城山", "峨眉山", "稻城亚丁"],
    tags: ["自然", "生态", "休闲"],
    image: "https://picsum.photos/id/1058/600/400",
    rating: 4.9,
    bestTime: "秋季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
  {
    id: "2",
    name: "四川文化遗产之旅",
    title: "四川文化遗产之旅",
    description: "探索四川的文化遗产",
    duration: "5天",
    difficulty: "简单",
    highlights: ["都江堰", "乐山大佛", "武侯祠", "锦里古街"],
    spots: ["都江堰", "乐山大佛", "武侯祠", "锦里古街"],
    tags: ["历史", "文化", "建筑"],
    image: "https://picsum.photos/id/1059/600/400",
    rating: 4.8,
    bestTime: "春季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
];

// 四川省非物质文化遗产数据
const sichuanIntangibleHeritage = [
  {
    id: "1",
    name: "川剧",
    description: "四川省传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    level: "national",
    category: "传统戏剧",
    heritageType: "传统表演艺术",
    protectionUnit: "四川省川剧院",
    tags: ["传统戏剧", "国家级非遗", "民间艺术"],
    icon: "🎭",
    image: "https://picsum.photos/id/1065/600/400",
    features: ["表演独特", "内容丰富", "历史悠久"],
  },
  {
    id: "2",
    name: "川菜烹饪技艺",
    description: "四川省传统烹饪技艺，以其独特的风味和精湛的工艺著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "四川省烹饪协会",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🍲",
    image: "https://picsum.photos/id/1066/600/400",
    features: ["风味独特", "工艺精湛", "历史悠久"],
  },
  {
    id: "3",
    name: "成都漆艺",
    description: "四川省成都市传统手工艺，以其精美的作品和独特的风格著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "四川省漆器工艺厂",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🎨",
    image: "https://picsum.photos/id/1067/600/400",
    features: ["作品精美", "风格独特", "工艺精湛"],
  },
  {
    id: "4",
    name: "藏族唐卡绘画",
    description:
      "四川省阿坝藏族羌族自治州传统美术，以其精美的作品和独特的风格著称",
    level: "national",
    category: "传统美术",
    heritageType: "传统手工艺",
    protectionUnit: "四川省阿坝藏族羌族自治州文化和旅游局",
    tags: ["传统美术", "国家级非遗", "民间艺术"],
    icon: "🖼️",
    image: "https://picsum.photos/id/1068/600/400",
    features: ["作品精美", "风格独特", "工艺精湛"],
  },
  {
    id: "5",
    name: "羌族碉楼营造技艺",
    description:
      "四川省阿坝藏族羌族自治州传统建筑技艺，以其独特的建筑风格和精湛的工艺著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "四川省阿坝藏族羌族自治州文化和旅游局",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🏛️",
    image: "https://picsum.photos/id/1069/600/400",
    features: ["建筑独特", "工艺精湛", "历史悠久"],
  },
];

// 四川省数据
export const sichuanData = {
  overview: {
    totalSpots: 12,
    natureSpots: 7,
    cultureSpots: 5,
    topAttractions: [
      {
        name: "九寨沟",
        image: "https://picsum.photos/id/1019/600/400",
        description:
          "四川省阿坝藏族羌族自治州的著名自然景区，以其美丽的湖泊、瀑布和多彩的森林而闻名",
      },
      {
        name: "乐山大佛",
        image: "https://picsum.photos/id/1037/600/400",
        description:
          "四川省乐山市的著名石刻佛像，以其巨大的规模和精美的雕刻而闻名",
      },
      {
        name: "峨眉山",
        image: "https://picsum.photos/id/1038/600/400",
        description:
          "四川省乐山市的著名佛教名山，以其秀丽的自然风光和丰富的佛教文化而闻名",
      },
      {
        name: "成都大熊猫繁育研究基地",
        image: "https://picsum.photos/id/1039/600/400",
        description:
          "四川省成都市的著名大熊猫保护基地，以其可爱的大熊猫和完善的保护设施而闻名",
      },
      {
        name: "都江堰",
        image: "https://picsum.photos/id/1035/600/400",
        description:
          "四川省成都市的著名水利工程，以其独特的设计和重要的历史意义而闻名",
      },
    ],
  },
  spots: [...sichuanNatureSpots, ...sichuanCultureSpots],
  seasonal: [
    sichuanSeasonalData.spring,
    sichuanSeasonalData.summer,
    sichuanSeasonalData.autumn,
    sichuanSeasonalData.winter,
  ],
  activities: sichuanActivities,
  routes: sichuanRoutes,
  intangibleHeritage: sichuanIntangibleHeritage,
};

// 四川省风俗文化数据
export const sichuanCustomsData = {
  activities: [
    {
      id: "1",
      name: "川剧表演欣赏",
      description:
        "观看四川省传统戏曲艺术川剧表演，感受其独特的表演形式和丰富的内容",
      image: "https://picsum.photos/id/1060/600/400",
      category: "culture",
      location: "四川省成都市川剧院",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "2",
      name: "川菜烹饪体验",
      description:
        "学习四川省传统烹饪技艺川菜制作，体验其独特的风味和精湛的工艺",
      image: "https://picsum.photos/id/1061/600/400",
      category: "culture",
      location: "四川省成都市川菜博物馆",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "3",
      name: "成都漆艺体验",
      description: "学习四川省成都市传统手工艺成都漆艺，体验其独特的工艺和风格",
      image: "https://picsum.photos/id/1062/600/400",
      category: "culture",
      location: "四川省成都市漆器工艺厂",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "4",
      name: "藏族唐卡绘画体验",
      description:
        "学习四川省阿坝藏族羌族自治州传统美术藏族唐卡绘画，体验其独特的工艺和风格",
      image: "https://picsum.photos/id/1063/600/400",
      category: "culture",
      location: "四川省阿坝藏族羌族自治州",
      duration: "1天",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "5",
      name: "四川美食之旅",
      description: "品尝四川特色美食，如川菜、火锅、小吃等",
      image: "https://picsum.photos/id/1064/600/400",
      category: "culture",
      location: "四川省成都市锦里古街",
      duration: "全天",
      difficulty: "简单",
      type: "美食体验",
    },
  ],
};

// 四川民俗风情元素数据
export const sichuanFolkCustomsElements = [
  {
    name: "川剧",
    description: "四川省传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    image: "https://picsum.photos/id/1070/600/400",
    tags: ["传统戏曲", "非遗文化", "变脸特技", "四川特色", "表演艺术"],
  },
  {
    name: "川菜",
    description: "四川省传统烹饪技艺，以其独特的风味和精湛的工艺著称",
    image: "https://picsum.photos/id/1071/600/400",
    tags: ["饮食文化", "传统技艺", "八大菜系", "四川特色", "麻辣风味"],
  },
  {
    name: "成都漆艺",
    description: "四川省成都市传统手工艺，以其精美的作品和独特的风格著称",
    image: "https://picsum.photos/id/1072/600/400",
    tags: ["传统技艺", "漆艺文化", "非遗文化", "四川特色", "工艺美术"],
  },
  {
    name: "藏族唐卡",
    description:
      "四川省阿坝藏族羌族自治州传统美术，以其精美的作品和独特的风格著称",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["传统美术", "非遗文化", "藏族特色", "宗教艺术", "文化遗产"],
  },
  {
    name: "羌族碉楼",
    description:
      "四川省阿坝藏族羌族自治州传统建筑技艺，以其独特的建筑风格和精湛的工艺著称",
    image: "https://picsum.photos/id/1074/600/400",
    tags: ["传统建筑", "非遗文化", "羌族特色", "建筑技艺", "文化遗产"],
  },
];

// 四川省文化节庆数据
export const sichuanFestivals = [
  {
    id: "1",
    name: "成都国际美食节",
    description: "成都举行的国际美食节庆活动",
    month: "10月",
    day: "18日",
    location: "四川省成都市锦里古街",
    isUnique: true,
  },
  {
    id: "2",
    name: "四川国际旅游节",
    description: "四川举行的国际旅游节庆活动",
    month: "9月",
    day: "1日",
    location: "四川省成都市",
    isUnique: true,
  },
  {
    id: "3",
    name: "九寨沟国际旅游节",
    description: "九寨沟举行的国际旅游节庆活动",
    month: "8月",
    day: "1日",
    location: "四川省阿坝藏族羌族自治州九寨沟县",
    isUnique: true,
  },
  {
    id: "4",
    name: "成都大熊猫节",
    description: "成都举行的大熊猫节庆活动",
    month: "7月",
    day: "20日",
    location: "四川省成都市大熊猫繁育研究基地",
    isUnique: true,
  },
  {
    id: "5",
    name: "清明节祭扫",
    description: "传统祭祀祖先的节日",
    month: "4月",
    day: "5日",
    location: "四川省各地",
    isUnique: false,
  },
  {
    id: "6",
    name: "中秋节赏月",
    description: "传统节日，家人团聚赏月吃月饼",
    month: "9月",
    day: "21日",
    location: "四川省各地",
    isUnique: false,
  },
];

export default sichuanData;

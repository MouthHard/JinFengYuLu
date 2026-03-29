import {
  ScenerySpot,
  TravelActivity,
  RouteInfo,
  SeasonalScenery,
} from "../scenery.ts";

// 云南省自然风光数据
const yunnanNatureSpots: ScenerySpot[] = [
  {
    id: "shilinStoneForest",
    name: "石林",
    description:
      "云南省昆明市的著名喀斯特地貌景观，以其独特的石柱群和壮丽的自然风光而闻名",
    image: "https://picsum.photos/id/1019/600/400",
    location: "云南省昆明市石林彝族自治县",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "喀斯特", "地质", "风景"],
    rating: 4.8,
    landscapeType: "karst",
    landscapeCategory: ["地理景观"],
    landformTags: ["喀斯特景观"],
  },
  {
    id: "lijiangAncientTown",
    name: "丽江古城",
    description:
      "云南省丽江市的著名古城，以其独特的纳西族建筑风格和丰富的民俗文化而闻名",
    image: "https://picsum.photos/id/1035/600/400",
    location: "云南省丽江市古城区",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "古城", "民俗", "文化"],
    rating: 4.9,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史古镇"],
  },
  {
    id: "daliAncientCity",
    name: "大理古城",
    description:
      "云南省大理白族自治州的著名古城，以其独特的白族建筑风格和丰富的民俗文化而闻名",
    image: "https://picsum.photos/id/1036/600/400",
    location: "云南省大理白族自治州大理市",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "古城", "民俗", "文化"],
    rating: 4.8,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史古镇"],
  },
  {
    id: "yulongSnowMountain",
    name: "玉龙雪山",
    description:
      "云南省丽江市的著名雪山，以其壮丽的自然风光和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1037/600/400",
    location: "云南省丽江市玉龙纳西族自治县",
    type: "nature",
    bestTime: "冬季",
    tags: ["自然", "雪山", "生态", "风景"],
    rating: 4.9,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "xishuangbannaTropicalRainforest",
    name: "西双版纳热带雨林",
    description:
      "云南省西双版纳傣族自治州的著名热带雨林，以其丰富的生物多样性和独特的生态系统而闻名",
    image: "https://picsum.photos/id/1038/600/400",
    location: "云南省西双版纳傣族自治州景洪市",
    type: "nature",
    bestTime: "春季",
    tags: ["自然", "雨林", "生态", "生物"],
    rating: 4.7,
    landscapeType: "forest",
    landscapeCategory: ["生物景观"],
    landformTags: ["森林景观"],
  },
  {
    id: "erhaiLake",
    name: "洱海",
    description:
      "云南省大理白族自治州的著名湖泊，以其美丽的自然风光和丰富的文化内涵而闻名",
    image: "https://picsum.photos/id/1039/600/400",
    location: "云南省大理白族自治州大理市",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "湖泊", "风景", "文化"],
    rating: 4.8,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["湖泊景观"],
  },
  {
    id: "pudacuoNationalPark",
    name: "普达措国家公园",
    description:
      "云南省迪庆藏族自治州的著名国家公园，以其壮丽的自然风光和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1040/600/400",
    location: "云南省迪庆藏族自治州香格里拉市",
    type: "nature",
    bestTime: "秋季",
    tags: ["自然", "公园", "生态", "风景"],
    rating: 4.7,
    landscapeType: "park",
    landscapeCategory: ["生物景观"],
    landformTags: ["公园景观"],
  },
];

// 云南省人文景观数据
const yunnanCultureSpots: ScenerySpot[] = [
  {
    id: "kunmingStoneForestMuseum",
    name: "昆明石林博物馆",
    description:
      "云南省昆明市的著名博物馆，以其丰富的喀斯特地貌知识和历史文化而闻名",
    image: "https://picsum.photos/id/1044/600/400",
    location: "云南省昆明市石林彝族自治县",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "博物馆", "地质"],
    rating: 4.5,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["博物馆"],
  },
  {
    id: "lijiangNaxiDongbaCulturalCenter",
    name: "丽江纳西东巴文化中心",
    description:
      "云南省丽江市的著名文化中心，以其丰富的纳西族东巴文化和历史而闻名",
    image: "https://picsum.photos/id/1045/600/400",
    location: "云南省丽江市古城区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "民俗", "艺术"],
    rating: 4.6,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["博物馆"],
  },
  {
    id: "daliBaiEthnicMuseum",
    name: "大理白族博物馆",
    description:
      "云南省大理白族自治州的著名博物馆，以其丰富的白族文化和历史而闻名",
    image: "https://picsum.photos/id/1046/600/400",
    location: "云南省大理白族自治州大理市",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "民俗", "艺术"],
    rating: 4.5,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["博物馆"],
  },
  {
    id: "xishuangbannaDaiEthnicVillage",
    name: "西双版纳傣族村寨",
    description:
      "云南省西双版纳傣族自治州的著名傣族村寨，以其独特的民俗文化和建筑风格而闻名",
    image: "https://picsum.photos/id/1047/600/400",
    location: "云南省西双版纳傣族自治州景洪市",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "民俗", "建筑"],
    rating: 4.7,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["民俗村寨"],
  },
  {
    id: "kunmingWorldHorticulturalExpoGarden",
    name: "昆明世界园艺博览园",
    description:
      "云南省昆明市的著名园艺博览园，以其丰富的植物资源和美丽的景观而闻名",
    image: "https://picsum.photos/id/1048/600/400",
    location: "云南省昆明市盘龙区",
    type: "culture",
    bestTime: "春季",
    tags: ["历史", "文化", "园艺", "风景"],
    rating: 4.4,
    landscapeType: "park",
    landscapeCategory: ["人文景观"],
    landformTags: ["公园景观"],
  },
];

// 云南省季节性数据
const yunnanSeasonalData: Record<string, SeasonalScenery> = {
  spring: {
    name: "春季",
    description:
      "春季的云南，万物复苏，是游览西双版纳热带雨林、昆明世界园艺博览园的最佳时节",
    image: "https://picsum.photos/id/1049/600/400",
    activities: [
      "西双版纳热带雨林春游",
      "昆明世界园艺博览园赏花",
      "大理古城春游",
      "丽江古城民俗体验",
    ],
  },
  summer: {
    name: "夏季",
    description: "夏季的云南，气温适中，是游览洱海、石林的好去处",
    image: "https://picsum.photos/id/1050/600/400",
    activities: ["洱海泛舟", "石林游览", "丽江古城避暑", "普达措国家公园徒步"],
  },
  autumn: {
    name: "秋季",
    description:
      "秋季的云南，天高气爽，是游览普达措国家公园、玉龙雪山的最佳时节",
    image: "https://picsum.photos/id/1051/600/400",
    activities: [
      "普达措国家公园赏秋",
      "玉龙雪山秋游",
      "大理古城赏月",
      "丽江古城夜游",
    ],
  },
  winter: {
    name: "冬季",
    description: "冬季的云南，温暖如春，是游览玉龙雪山、昆明石林的好时节",
    image: "https://picsum.photos/id/1052/600/400",
    activities: [
      "玉龙雪山滑雪",
      "昆明石林游览",
      "西双版纳避寒",
      "大理古城赏冬",
    ],
  },
};

// 云南省活动数据
const yunnanActivities: TravelActivity[] = [
  {
    id: "1",
    name: "石林游览",
    description: "游览昆明石林，欣赏独特的喀斯特地貌景观",
    image: "https://picsum.photos/id/1053/600/400",
    category: "nature",
    location: "云南省昆明市石林彝族自治县",
    duration: "1天",
    difficulty: "中等",
    type: "户外活动",
  },
  {
    id: "2",
    name: "丽江古城民俗体验",
    description: "参观丽江古城，体验独特的纳西族民俗文化和建筑风格",
    image: "https://picsum.photos/id/1054/600/400",
    category: "culture",
    location: "云南省丽江市古城区",
    duration: "1-2天",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "3",
    name: "洱海泛舟",
    description: "在洱海上泛舟，欣赏美丽的湖光山色",
    image: "https://picsum.photos/id/1055/600/400",
    category: "nature",
    location: "云南省大理白族自治州大理市",
    duration: "半天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "4",
    name: "玉龙雪山登山",
    description: "登玉龙雪山，欣赏壮丽的雪山风光",
    image: "https://picsum.photos/id/1056/600/400",
    category: "nature",
    location: "云南省丽江市玉龙纳西族自治县",
    duration: "1天",
    difficulty: "中等",
    type: "户外活动",
  },
  {
    id: "5",
    name: "云南美食之旅",
    description: "品尝云南特色美食，如过桥米线、汽锅鸡、鲜花饼等",
    image: "https://picsum.photos/id/1057/600/400",
    category: "culture",
    location: "云南省昆明市",
    duration: "全天",
    difficulty: "简单",
    type: "美食体验",
  },
];

// 云南省路线数据
const yunnanRoutes: RouteInfo[] = [
  {
    id: "1",
    name: "云南经典文化之旅",
    title: "云南经典文化之旅",
    description: "游览云南最著名的历史文化景点",
    duration: "7天",
    difficulty: "中等",
    highlights: ["丽江古城", "大理古城", "石林", "西双版纳傣族村寨"],
    spots: ["丽江古城", "大理古城", "石林", "西双版纳傣族村寨"],
    tags: ["历史", "文化", "民俗"],
    image: "https://picsum.photos/id/1058/600/400",
    rating: 4.9,
    bestTime: "春季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
  {
    id: "2",
    name: "云南自然生态之旅",
    title: "云南自然生态之旅",
    description: "探索云南的自然生态景观",
    duration: "6天",
    difficulty: "中等",
    highlights: ["玉龙雪山", "洱海", "普达措国家公园", "西双版纳热带雨林"],
    spots: ["玉龙雪山", "洱海", "普达措国家公园", "西双版纳热带雨林"],
    tags: ["自然", "生态", "风景"],
    image: "https://picsum.photos/id/1059/600/400",
    rating: 4.8,
    bestTime: "夏季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
];

// 云南省非物质文化遗产数据
const yunnanIntangibleHeritage = [
  {
    id: "1",
    name: "纳西东巴文",
    description:
      "云南省纳西族传统文字，以其独特的象形文字系统和丰富的文化内涵著称",
    level: "national",
    category: "传统文字",
    heritageType: "民间文学",
    protectionUnit: "云南省丽江市文化和旅游局",
    tags: ["传统文字", "国家级非遗", "民间艺术"],
    icon: "📝",
    image: "https://picsum.photos/id/1065/600/400",
    features: ["文字独特", "文化内涵丰富", "历史悠久"],
  },
  {
    id: "2",
    name: "白族扎染技艺",
    description: "云南省白族传统手工艺，以其精美的作品和独特的风格著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "云南省大理白族自治州文化和旅游局",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🎨",
    image: "https://picsum.photos/id/1066/600/400",
    features: ["作品精美", "风格独特", "工艺精湛"],
  },
  {
    id: "3",
    name: "傣族泼水节",
    description: "云南省傣族传统节日，以其独特的庆祝方式和丰富的内容著称",
    level: "national",
    category: "传统节日",
    heritageType: "民俗",
    protectionUnit: "云南省西双版纳傣族自治州文化和旅游局",
    tags: ["传统节日", "国家级非遗", "民间艺术"],
    icon: "🎉",
    image: "https://picsum.photos/id/1067/600/400",
    features: ["庆祝方式独特", "内容丰富", "历史悠久"],
  },
  {
    id: "4",
    name: "彝族火把节",
    description: "云南省彝族传统节日，以其独特的庆祝方式和丰富的内容著称",
    level: "national",
    category: "传统节日",
    heritageType: "民俗",
    protectionUnit: "云南省昆明市文化和旅游局",
    tags: ["传统节日", "国家级非遗", "民间艺术"],
    icon: "🔥",
    image: "https://picsum.photos/id/1068/600/400",
    features: ["庆祝方式独特", "内容丰富", "历史悠久"],
  },
  {
    id: "5",
    name: "藏族锅庄舞",
    description: "云南省藏族传统舞蹈，以其独特的表演形式和丰富的内容著称",
    level: "national",
    category: "传统舞蹈",
    heritageType: "传统表演艺术",
    protectionUnit: "云南省迪庆藏族自治州文化和旅游局",
    tags: ["传统舞蹈", "国家级非遗", "民间艺术"],
    icon: "💃",
    image: "https://picsum.photos/id/1069/600/400",
    features: ["表演独特", "内容丰富", "历史悠久"],
  },
];

// 云南省数据
export const yunnanData = {
  overview: {
    totalSpots: 12,
    natureSpots: 7,
    cultureSpots: 5,
    topAttractions: [
      {
        name: "石林",
        image: "https://picsum.photos/id/1019/600/400",
        description:
          "云南省昆明市的著名喀斯特地貌景观，以其独特的石柱群和壮丽的自然风光而闻名",
      },
      {
        name: "丽江古城",
        image: "https://picsum.photos/id/1035/600/400",
        description:
          "云南省丽江市的著名古城，以其独特的纳西族建筑风格和丰富的民俗文化而闻名",
      },
      {
        name: "大理古城",
        image: "https://picsum.photos/id/1036/600/400",
        description:
          "云南省大理白族自治州的著名古城，以其独特的白族建筑风格和丰富的民俗文化而闻名",
      },
      {
        name: "玉龙雪山",
        image: "https://picsum.photos/id/1037/600/400",
        description:
          "云南省丽江市的著名雪山，以其壮丽的自然风光和丰富的生态资源而闻名",
      },
      {
        name: "西双版纳热带雨林",
        image: "https://picsum.photos/id/1038/600/400",
        description:
          "云南省西双版纳傣族自治州的著名热带雨林，以其丰富的生物多样性和独特的生态系统而闻名",
      },
    ],
  },
  spots: [...yunnanNatureSpots, ...yunnanCultureSpots],
  seasonal: [
    yunnanSeasonalData.spring,
    yunnanSeasonalData.summer,
    yunnanSeasonalData.autumn,
    yunnanSeasonalData.winter,
  ],
  activities: yunnanActivities,
  routes: yunnanRoutes,
  intangibleHeritage: yunnanIntangibleHeritage,
};

// 云南省风俗文化数据
export const yunnanCustomsData = {
  activities: [
    {
      id: "1",
      name: "纳西东巴文体验",
      description:
        "学习云南省纳西族传统文字东巴文，体验其独特的象形文字系统和丰富的文化内涵",
      image: "https://picsum.photos/id/1060/600/400",
      category: "culture",
      location: "云南省丽江市古城区",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "2",
      name: "白族扎染体验",
      description: "学习云南省白族传统手工艺扎染，体验其独特的工艺和风格",
      image: "https://picsum.photos/id/1061/600/400",
      category: "culture",
      location: "云南省大理白族自治州大理市",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "3",
      name: "傣族泼水节体验",
      description:
        "参与云南省傣族传统节日泼水节，感受其独特的庆祝方式和丰富的内容",
      image: "https://picsum.photos/id/1062/600/400",
      category: "culture",
      location: "云南省西双版纳傣族自治州景洪市",
      duration: "1天",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "4",
      name: "彝族火把节体验",
      description:
        "参与云南省彝族传统节日火把节，感受其独特的庆祝方式和丰富的内容",
      image: "https://picsum.photos/id/1063/600/400",
      category: "culture",
      location: "云南省昆明市石林彝族自治县",
      duration: "1天",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "5",
      name: "云南美食之旅",
      description: "品尝云南特色美食，如过桥米线、汽锅鸡、鲜花饼等",
      image: "https://picsum.photos/id/1064/600/400",
      category: "culture",
      location: "云南省昆明市",
      duration: "全天",
      difficulty: "简单",
      type: "美食体验",
    },
  ],
};

// 云南民俗风情元素数据
export const yunnanFolkCustomsElements = [
  {
    name: "纳西东巴文",
    description:
      "云南省纳西族传统文字，以其独特的象形文字系统和丰富的文化内涵著称",
    image: "https://picsum.photos/id/1070/600/400",
    tags: ["传统文字", "非遗文化", "纳西族特色", "象形文字活化石", "文化遗产"],
  },
  {
    name: "白族扎染",
    description: "云南省白族传统手工艺，以其精美的作品和独特的风格著称",
    image: "https://picsum.photos/id/1071/600/400",
    tags: ["传统技艺", "非遗文化", "白族特色", "染色工艺", "民间工艺"],
  },
  {
    name: "傣族泼水节",
    description: "云南省傣族传统节日，以其独特的庆祝方式和丰富的内容著称",
    image: "https://picsum.photos/id/1072/600/400",
    tags: ["民俗节日", "非遗文化", "傣族特色", "节庆文化", "民俗活动"],
  },
  {
    name: "彝族火把节",
    description: "云南省彝族传统节日，以其独特的庆祝方式和丰富的内容著称",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["民俗节日", "非遗文化", "彝族特色", "节庆文化", "民俗活动"],
  },
  {
    name: "藏族锅庄舞",
    description: "云南省藏族传统舞蹈，以其独特的表演形式和丰富的内容著称",
    image: "https://picsum.photos/id/1074/600/400",
    tags: ["传统舞蹈", "非遗文化", "藏族特色", "表演艺术", "民间艺术"],
  },
];

// 云南省文化节庆数据
export const yunnanFestivals = [
  {
    id: "1",
    name: "傣族泼水节",
    description: "云南傣族举行的传统节日",
    month: "4月",
    day: "13日",
    location: "云南省西双版纳傣族自治州",
    isUnique: true,
  },
  {
    id: "2",
    name: "彝族火把节",
    description: "云南彝族举行的传统节日",
    month: "6月",
    day: "24日",
    location: "云南省昆明市石林彝族自治县",
    isUnique: true,
  },
  {
    id: "3",
    name: "白族三月街",
    description: "云南白族举行的传统节日",
    month: "3月",
    day: "15日",
    location: "云南省大理白族自治州大理市",
    isUnique: true,
  },
  {
    id: "4",
    name: "纳西族三朵节",
    description: "云南纳西族举行的传统节日",
    month: "2月",
    day: "8日",
    location: "云南省丽江市古城区",
    isUnique: true,
  },
  {
    id: "5",
    name: "清明节祭扫",
    description: "传统祭祀祖先的节日",
    month: "4月",
    day: "5日",
    location: "云南省各地",
    isUnique: false,
  },
  {
    id: "6",
    name: "中秋节赏月",
    description: "传统节日，家人团聚赏月吃月饼",
    month: "9月",
    day: "21日",
    location: "云南省各地",
    isUnique: false,
  },
];

export default yunnanData;

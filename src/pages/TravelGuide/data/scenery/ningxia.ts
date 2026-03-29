import {
  ScenerySpot,
  TravelActivity,
  RouteInfo,
  SeasonalScenery,
} from "../scenery.ts";

// 宁夏回族自治区自然风光数据
const ningxiaNatureSpots: ScenerySpot[] = [
  {
    id: "沙湖",
    name: "沙湖",
    description:
      "宁夏回族自治区石嘴山市的著名湖泊，以其独特的沙水交融景观和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1019/600/400",
    location: "宁夏回族自治区石嘴山市平罗县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "湖泊", "沙漠", "生态"],
    rating: 4.7,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["湖泊景观"],
  },
  {
    id: "沙坡头",
    name: "沙坡头",
    description:
      "宁夏回族自治区中卫市的著名沙漠景区，以其独特的沙漠景观和丰富的沙漠活动而闻名",
    image: "https://picsum.photos/id/1035/600/400",
    location: "宁夏回族自治区中卫市沙坡头区",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "沙漠", "黄河", "风景"],
    rating: 4.8,
    landscapeType: "desert",
    landscapeCategory: ["地理景观"],
    landformTags: ["沙漠景观"],
  },
  {
    id: "贺兰山",
    name: "贺兰山",
    description:
      "宁夏回族自治区银川市的著名山脉，以其壮丽的自然风光和丰富的文化遗迹而闻名",
    image: "https://picsum.photos/id/1036/600/400",
    location: "宁夏回族自治区银川市西夏区",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "山脉", "文化", "风景"],
    rating: 4.6,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "六盘山",
    name: "六盘山",
    description:
      "宁夏回族自治区固原市的著名山脉，以其壮丽的自然风光和重要的革命历史意义而闻名",
    image: "https://picsum.photos/id/1037/600/400",
    location: "宁夏回族自治区固原市泾源县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "山脉", "革命", "风景"],
    rating: 4.5,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "鸣翠湖",
    name: "鸣翠湖",
    description:
      "宁夏回族自治区银川市的著名湿地公园，以其美丽的自然风光和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1038/600/400",
    location: "宁夏回族自治区银川市兴庆区",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "湿地", "生态", "风景"],
    rating: 4.4,
    landscapeType: "park",
    landscapeCategory: ["生物景观"],
    landformTags: ["湿地景观"],
  },
  {
    id: "黄河大峡谷",
    name: "黄河大峡谷",
    description:
      "宁夏回族自治区吴忠市的著名峡谷，以其壮丽的黄河峡谷景观和丰富的文化遗迹而闻名",
    image: "https://picsum.photos/id/1039/600/400",
    location: "宁夏回族自治区吴忠市青铜峡市",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "峡谷", "黄河", "文化"],
    rating: 4.5,
    landscapeType: "canyon",
    landscapeCategory: ["地理景观"],
    landformTags: ["峡谷景观"],
  },
  {
    id: "火石寨",
    name: "火石寨",
    description:
      "宁夏回族自治区固原市的著名丹霞地貌景区，以其独特的丹霞景观和丰富的文化遗迹而闻名",
    image: "https://picsum.photos/id/1040/600/400",
    location: "宁夏回族自治区固原市西吉县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "丹霞", "文化", "风景"],
    rating: 4.4,
    landscapeType: "karst",
    landscapeCategory: ["地理景观"],
    landformTags: ["丹霞景观"],
  },
];

// 宁夏回族自治区人文景观数据
const ningxiaCultureSpots: ScenerySpot[] = [
  {
    id: "西夏王陵",
    name: "西夏王陵",
    description:
      "宁夏回族自治区银川市的著名历史遗址，以西夏王朝的皇家陵墓和丰富的历史文化而闻名",
    image: "https://picsum.photos/id/1044/600/400",
    location: "宁夏回族自治区银川市西夏区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "陵墓", "西夏"],
    rating: 4.7,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史遗址"],
  },
  {
    id: "镇北堡西部影城",
    name: "镇北堡西部影城",
    description:
      "宁夏回族自治区银川市的著名影视城，以其作为多部电影的拍摄地和独特的西北风情而闻名",
    image: "https://picsum.photos/id/1045/600/400",
    location: "宁夏回族自治区银川市西夏区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "影视", "西北"],
    rating: 4.8,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["影视城"],
  },
  {
    id: "中华回乡文化园",
    name: "中华回乡文化园",
    description:
      "宁夏回族自治区银川市的著名文化景区，以其展示回族文化和伊斯兰建筑艺术而闻名",
    image: "https://picsum.photos/id/1046/600/400",
    location: "宁夏回族自治区银川市永宁县",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "回族", "伊斯兰"],
    rating: 4.6,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["文化园"],
  },
  {
    id: "宁夏博物馆",
    name: "宁夏博物馆",
    description:
      "宁夏回族自治区银川市的著名博物馆，以其丰富的历史文物和文化而闻名",
    image: "https://picsum.photos/id/1047/600/400",
    location: "宁夏回族自治区银川市金凤区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "博物馆", "艺术"],
    rating: 4.5,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["博物馆"],
  },
  {
    id: "青铜峡108塔",
    name: "青铜峡108塔",
    description:
      "宁夏回族自治区吴忠市的著名佛教建筑，以其独特的塔群布局和重要的宗教意义而闻名",
    image: "https://picsum.photos/id/1048/600/400",
    location: "宁夏回族自治区吴忠市青铜峡市",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "佛教", "塔群"],
    rating: 4.4,
    landscapeType: "temple",
    landscapeCategory: ["人文景观"],
    landformTags: ["宗教建筑"],
  },
];

// 宁夏回族自治区季节性数据
const ningxiaSeasonalData: Record<string, SeasonalScenery> = {
  spring: {
    name: "春季",
    description:
      "春季的宁夏，万物复苏，是游览西夏王陵、镇北堡西部影城的最佳时节",
    image: "https://picsum.photos/id/1049/600/400",
    activities: [
      "西夏王陵参观",
      "镇北堡西部影城游览",
      "宁夏博物馆参观",
      "银川市区漫步",
    ],
  },
  summer: {
    name: "夏季",
    description: "夏季的宁夏，气候宜人，是游览沙湖、沙坡头的好去处",
    image: "https://picsum.photos/id/1050/600/400",
    activities: ["沙湖水上活动", "沙坡头沙漠探险", "贺兰山徒步", "六盘山避暑"],
  },
  autumn: {
    name: "秋季",
    description: "秋季的宁夏，天高气爽，是游览鸣翠湖、火石寨的最佳时节",
    image: "https://picsum.photos/id/1051/600/400",
    activities: [
      "鸣翠湖赏秋",
      "火石寨丹霞赏景",
      "黄河大峡谷游览",
      "中华回乡文化园参观",
    ],
  },
  winter: {
    name: "冬季",
    description:
      "冬季的宁夏，虽然寒冷，但银装素裹，是参观西夏王陵、宁夏博物馆的好时节",
    image: "https://picsum.photos/id/1052/600/400",
    activities: [
      "西夏王陵冬季参观",
      "宁夏博物馆深度游",
      "银川市区美食之旅",
      "中华回乡文化园参观",
    ],
  },
};

// 宁夏回族自治区活动数据
const ningxiaActivities: TravelActivity[] = [
  {
    id: "1",
    name: "沙坡头沙漠探险",
    description: "在沙坡头沙漠中探险，体验沙漠冲浪、滑沙等丰富的沙漠活动",
    image: "https://picsum.photos/id/1053/600/400",
    category: "nature",
    location: "宁夏回族自治区中卫市沙坡头区",
    duration: "半天",
    difficulty: "中等",
    type: "户外活动",
  },
  {
    id: "2",
    name: "沙湖水上活动",
    description: "在沙湖进行水上活动，如划船、水上摩托等，体验水上乐趣",
    image: "https://picsum.photos/id/1054/600/400",
    category: "nature",
    location: "宁夏回族自治区石嘴山市平罗县",
    duration: "半天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "3",
    name: "西夏王陵参观",
    description: "参观西夏王陵，感受西夏王朝的历史文化",
    image: "https://picsum.photos/id/1055/600/400",
    category: "culture",
    location: "宁夏回族自治区银川市西夏区",
    duration: "半天",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "4",
    name: "镇北堡西部影城游览",
    description: "游览镇北堡西部影城，感受多部电影的拍摄场景和西北风情",
    image: "https://picsum.photos/id/1056/600/400",
    category: "culture",
    location: "宁夏回族自治区银川市西夏区",
    duration: "半天",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "5",
    name: "宁夏美食之旅",
    description: "品尝宁夏特色美食，如手抓羊肉、羊杂碎、宁夏拉面等",
    image: "https://picsum.photos/id/1057/600/400",
    category: "culture",
    location: "宁夏回族自治区银川市兴庆区",
    duration: "全天",
    difficulty: "简单",
    type: "美食体验",
  },
];

// 宁夏回族自治区路线数据
const ningxiaRoutes: RouteInfo[] = [
  {
    id: "1",
    name: "宁夏沙漠风情之旅",
    title: "宁夏沙漠风情之旅",
    description: "探索宁夏的沙漠风情和黄河文化",
    duration: "4天",
    difficulty: "中等",
    highlights: ["沙坡头", "沙湖", "黄河大峡谷", "青铜峡108塔"],
    spots: ["沙坡头", "沙湖", "黄河大峡谷", "青铜峡108塔"],
    tags: ["自然", "沙漠", "黄河"],
    image: "https://picsum.photos/id/1058/600/400",
    rating: 4.8,
    bestTime: "夏季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
  {
    id: "2",
    name: "宁夏历史文化之旅",
    title: "宁夏历史文化之旅",
    description: "探索宁夏的历史文化和回族风情",
    duration: "3天",
    difficulty: "中等",
    highlights: ["西夏王陵", "镇北堡西部影城", "中华回乡文化园", "宁夏博物馆"],
    spots: ["西夏王陵", "镇北堡西部影城", "中华回乡文化园", "宁夏博物馆"],
    tags: ["历史", "文化", "回族"],
    image: "https://picsum.photos/id/1059/600/400",
    rating: 4.7,
    bestTime: "春季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
];

// 宁夏回族自治区非物质文化遗产数据
const ningxiaIntangibleHeritage = [
  {
    id: "1",
    name: "回族民间故事",
    description:
      "宁夏回族自治区传统民间文学，以其丰富的内容和独特的艺术形式著称",
    level: "national",
    category: "民间文学",
    heritageType: "民间文学",
    protectionUnit: "宁夏回族自治区文化和旅游厅",
    tags: ["民间文学", "国家级非遗", "回族"],
    icon: "📚",
    image: "https://picsum.photos/id/1065/600/400",
    features: ["内容丰富", "形式独特", "历史悠久"],
  },
  {
    id: "2",
    name: "回族花儿",
    description:
      "宁夏回族自治区传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    level: "national",
    category: "传统音乐",
    heritageType: "传统表演艺术",
    protectionUnit: "宁夏回族自治区文化和旅游厅",
    tags: ["传统音乐", "国家级非遗", "回族"],
    icon: "🎵",
    image: "https://picsum.photos/id/1066/600/400",
    features: ["演唱独特", "内容丰富", "历史悠久"],
  },
  {
    id: "3",
    name: "宁夏小曲",
    description:
      "宁夏回族自治区传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    level: "national",
    category: "传统音乐",
    heritageType: "传统表演艺术",
    protectionUnit: "宁夏回族自治区文化和旅游厅",
    tags: ["传统音乐", "国家级非遗", "民间艺术"],
    icon: "🎵",
    image: "https://picsum.photos/id/1067/600/400",
    features: ["演唱独特", "内容丰富", "历史悠久"],
  },
  {
    id: "4",
    name: "回族刺绣",
    description: "宁夏回族自治区传统手工艺，以其精美的刺绣作品和独特的风格著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "宁夏回族自治区文化和旅游厅",
    tags: ["传统技艺", "国家级非遗", "回族"],
    icon: "🧵",
    image: "https://picsum.photos/id/1068/600/400",
    features: ["作品精美", "风格独特", "工艺精湛"],
  },
  {
    id: "5",
    name: "宁夏滩羊饲养与屠宰技艺",
    description: "宁夏回族自治区传统技艺，以其独特的饲养方法和屠宰工艺著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "宁夏回族自治区文化和旅游厅",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🐑",
    image: "https://picsum.photos/id/1069/600/400",
    features: ["工艺独特", "历史悠久", "文化价值"],
  },
];

// 宁夏回族自治区数据
export const ningxiaData = {
  overview: {
    totalSpots: 12,
    natureSpots: 7,
    cultureSpots: 5,
    topAttractions: [
      {
        name: "沙坡头",
        image: "https://picsum.photos/id/1035/600/400",
        description:
          "宁夏回族自治区中卫市的著名沙漠景区，以其独特的沙漠景观和丰富的沙漠活动而闻名",
      },
      {
        name: "沙湖",
        image: "https://picsum.photos/id/1019/600/400",
        description:
          "宁夏回族自治区石嘴山市的著名湖泊，以其独特的沙水交融景观和丰富的生态资源而闻名",
      },
      {
        name: "西夏王陵",
        image: "https://picsum.photos/id/1044/600/400",
        description:
          "宁夏回族自治区银川市的著名历史遗址，以西夏王朝的皇家陵墓和丰富的历史文化而闻名",
      },
      {
        name: "镇北堡西部影城",
        image: "https://picsum.photos/id/1045/600/400",
        description:
          "宁夏回族自治区银川市的著名影视城，以其作为多部电影的拍摄地和独特的西北风情而闻名",
      },
      {
        name: "贺兰山",
        image: "https://picsum.photos/id/1036/600/400",
        description:
          "宁夏回族自治区银川市的著名山脉，以其壮丽的自然风光和丰富的文化遗迹而闻名",
      },
    ],
  },
  spots: [...ningxiaNatureSpots, ...ningxiaCultureSpots],
  seasonal: [
    ningxiaSeasonalData.spring,
    ningxiaSeasonalData.summer,
    ningxiaSeasonalData.autumn,
    ningxiaSeasonalData.winter,
  ],
  activities: ningxiaActivities,
  routes: ningxiaRoutes,
  intangibleHeritage: ningxiaIntangibleHeritage,
};

// 宁夏回族自治区风俗文化数据
export const ningxiaCustomsData = {
  activities: [
    {
      id: "1",
      name: "回族花儿演唱体验",
      description:
        "聆听宁夏回族自治区传统民间音乐花儿演唱，感受其独特的演唱形式和丰富的内容",
      image: "https://picsum.photos/id/1060/600/400",
      category: "culture",
      location: "宁夏回族自治区银川市兴庆区",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "2",
      name: "回族刺绣体验",
      description:
        "学习宁夏回族自治区传统手工艺回族刺绣，体验其独特的工艺和风格",
      image: "https://picsum.photos/id/1061/600/400",
      category: "culture",
      location: "宁夏回族自治区银川市永宁县",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "3",
      name: "宁夏滩羊美食体验",
      description: "品尝宁夏特色美食滩羊肉，感受其独特的风味和烹饪技艺",
      image: "https://picsum.photos/id/1062/600/400",
      category: "culture",
      location: "宁夏回族自治区银川市兴庆区",
      duration: "2-3小时",
      difficulty: "简单",
      type: "美食体验",
    },
    {
      id: "4",
      name: "回族茶文化体验",
      description: "体验宁夏回族自治区传统茶文化，学习回族茶艺和茶道",
      image: "https://picsum.photos/id/1063/600/400",
      category: "culture",
      location: "宁夏回族自治区银川市永宁县",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "5",
      name: "宁夏美食之旅",
      description: "品尝宁夏特色美食，如手抓羊肉、羊杂碎、宁夏拉面等",
      image: "https://picsum.photos/id/1064/600/400",
      category: "culture",
      location: "宁夏回族自治区银川市兴庆区",
      duration: "全天",
      difficulty: "简单",
      type: "美食体验",
    },
  ],
};

// 宁夏民俗风情元素数据
export const ningxiaFolkCustomsElements = [
  {
    name: "回族花儿",
    description:
      "宁夏回族自治区传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    image: "https://picsum.photos/id/1070/600/400",
    tags: ["传统音乐", "非遗文化", "回族特色", "表演艺术", "文化遗产"],
  },
  {
    name: "回族刺绣",
    description: "宁夏回族自治区传统手工艺，以其精美的刺绣作品和独特的风格著称",
    image: "https://picsum.photos/id/1071/600/400",
    tags: ["传统技艺", "刺绣艺术", "非遗文化", "回族特色", "民间工艺"],
  },
  {
    name: "宁夏滩羊",
    description: "宁夏回族自治区特产，以其独特的肉质和饲养方法著称",
    image: "https://picsum.photos/id/1072/600/400",
    tags: ["地方特产", "畜牧文化", "宁夏特色", "地理标志", "饮食资源"],
  },
  {
    name: "宁夏小曲",
    description:
      "宁夏回族自治区传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["传统曲艺", "非遗文化", "表演艺术", "宁夏特色", "民间音乐"],
  },
  {
    name: "回族茶文化",
    description: "宁夏回族自治区传统茶文化，以其独特的茶艺和茶道著称",
    image: "https://picsum.photos/id/1074/600/400",
    tags: ["饮食文化", "非遗文化", "回族特色", "传统习俗", "文化传承"],
  },
];

// 宁夏回族自治区文化节庆数据
export const ningxiaFestivals = [
  {
    id: "1",
    name: "宁夏国际黄河文化节",
    description: "宁夏举行的国际黄河文化节庆活动",
    month: "9月",
    day: "1日",
    location: "宁夏回族自治区银川市金凤区",
    isUnique: true,
  },
  {
    id: "2",
    name: "中国宁夏沙坡头国际沙漠旅游节",
    description: "中卫举行的国际沙漠旅游节庆活动",
    month: "8月",
    day: "1日",
    location: "宁夏回族自治区中卫市沙坡头区",
    isUnique: true,
  },
  {
    id: "3",
    name: "中国宁夏银川国际穆斯林企业家论坛",
    description: "银川举行的国际穆斯林企业家论坛活动",
    month: "10月",
    day: "1日",
    location: "宁夏回族自治区银川市金凤区",
    isUnique: true,
  },
  {
    id: "4",
    name: "回族开斋节",
    description: "回族传统节日，庆祝斋月结束",
    month: "5月",
    day: "1日",
    location: "宁夏回族自治区各地",
    isUnique: true,
  },
  {
    id: "5",
    name: "清明节祭扫",
    description: "传统祭祀祖先的节日",
    month: "4月",
    day: "5日",
    location: "宁夏回族自治区各地",
    isUnique: false,
  },
  {
    id: "6",
    name: "中秋节赏月",
    description: "传统节日，家人团聚赏月吃月饼",
    month: "9月",
    day: "21日",
    location: "宁夏回族自治区各地",
    isUnique: false,
  },
];

export default ningxiaData;

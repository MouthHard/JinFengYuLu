import {
  ScenerySpot,
  TravelActivity,
  RouteInfo,
  SeasonalScenery,
} from "../scenery.ts";

// 澳门特别行政区自然风光数据
const macauNatureSpots: ScenerySpot[] = [
  {
    id: "macauPeninsula",
    name: "澳门半岛",
    description:
      "澳门特别行政区的主要区域，以其独特的历史建筑和繁华的城市景观而闻名",
    image: "https://picsum.photos/id/1019/600/400",
    location: "澳门特别行政区澳门半岛",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "城市", "历史", "风景"],
    rating: 4.7,
    landscapeType: "urban",
    landscapeCategory: ["人文景观"],
    landformTags: ["城市景观"],
  },
  {
    id: "taipaIsland",
    name: "氹仔岛",
    description: "澳门特别行政区的著名岛屿，以其现代化的建筑和娱乐设施而闻名",
    image: "https://picsum.photos/id/1035/600/400",
    location: "澳门特别行政区氹仔岛",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "岛屿", "现代", "娱乐"],
    rating: 4.6,
    landscapeType: "urban",
    landscapeCategory: ["人文景观"],
    landformTags: ["城市景观"],
  },
  {
    id: "coloaneIsland",
    name: "路环岛",
    description: "澳门特别行政区的著名岛屿，以其宁静的自然风光和海滩而闻名",
    image: "https://picsum.photos/id/1036/600/400",
    location: "澳门特别行政区路环岛",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "岛屿", "海滩", "宁静"],
    rating: 4.5,
    landscapeType: "island",
    landscapeCategory: ["地理景观"],
    landformTags: ["岛屿景观"],
  },
  {
    id: "hacSaBeach",
    name: "黑沙海滩",
    description: "澳门特别行政区的著名海滩，以其独特的黑色沙滩而闻名",
    image: "https://picsum.photos/id/1037/600/400",
    location: "澳门特别行政区路环岛",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "海滩", "黑色沙滩", "风景"],
    rating: 4.4,
    landscapeType: "beach",
    landscapeCategory: ["水景观"],
    landformTags: ["海滩景观"],
  },
  {
    id: "taipaColoaneCauseway",
    name: "氹仔路环连贯公路",
    description:
      "澳门特别行政区的著名公路，以其连接氹仔岛和路环岛的重要交通作用和美丽的海景而闻名",
    image: "https://picsum.photos/id/1038/600/400",
    location: "澳门特别行政区氹仔岛至路环岛",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "公路", "海景", "交通"],
    rating: 4.3,
    landscapeType: "transport",
    landscapeCategory: ["人文景观"],
    landformTags: ["交通设施"],
  },
  {
    id: "coloaneVillage",
    name: "路环村",
    description:
      "澳门特别行政区的著名村庄，以其宁静的乡村风光和传统的建筑而闻名",
    image: "https://picsum.photos/id/1039/600/400",
    location: "澳门特别行政区路环岛",
    type: "nature",
    bestTime: "春季",
    tags: ["自然", "村庄", "传统", "宁静"],
    rating: 4.4,
    landscapeType: "rural",
    landscapeCategory: ["人文景观"],
    landformTags: ["乡村景观"],
  },
  {
    id: "macauReservoir",
    name: "澳门水塘",
    description: "澳门特别行政区的著名水塘，以其美丽的自然风光和休闲设施而闻名",
    image: "https://picsum.photos/id/1040/600/400",
    location: "澳门特别行政区澳门半岛",
    type: "nature",
    bestTime: "春季",
    tags: ["自然", "水塘", "休闲", "风景"],
    rating: 4.2,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["湖泊景观"],
  },
];

// 澳门特别行政区人文景观数据
const macauCultureSpots: ScenerySpot[] = [
  {
    id: "ruinsOfStPaul",
    name: "大三巴牌坊",
    description:
      "澳门特别行政区的著名历史建筑，以其独特的巴洛克风格和重要的历史意义而闻名",
    image: "https://picsum.photos/id/1044/600/400",
    location: "澳门特别行政区澳门半岛",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "建筑", "宗教"],
    rating: 4.8,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史遗址"],
  },
  {
    id: "macauTower",
    name: "澳门塔",
    description:
      "澳门特别行政区的著名地标，以其高耸的建筑和蹦极跳等极限运动而闻名",
    image: "https://picsum.photos/id/1045/600/400",
    location: "澳门特别行政区澳门半岛",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "建筑", "极限运动"],
    rating: 4.7,
    landscapeType: "urban",
    landscapeCategory: ["人文景观"],
    landformTags: ["城市地标"],
  },
  {
    id: "senadoSquare",
    name: "议事亭前地",
    description:
      "澳门特别行政区的著名广场，以其独特的葡式建筑和繁忙的商业活动而闻名",
    image: "https://picsum.photos/id/1046/600/400",
    location: "澳门特别行政区澳门半岛",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "广场", "商业"],
    rating: 4.6,
    landscapeType: "urban",
    landscapeCategory: ["人文景观"],
    landformTags: ["城市广场"],
  },
  {
    id: "wynnMacau",
    name: "永利澳门",
    description: "澳门特别行政区的著名度假村，以其豪华的设施和表演而闻名",
    image: "https://picsum.photos/id/1047/600/400",
    location: "澳门特别行政区澳门半岛",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "度假村", "娱乐"],
    rating: 4.5,
    landscapeType: "entertainment",
    landscapeCategory: ["人文景观"],
    landformTags: ["娱乐场所"],
  },
  {
    id: "theVenetianMacao",
    name: "威尼斯人澳门",
    description: "澳门特别行政区的著名度假村，以其仿威尼斯的建筑和运河而闻名",
    image: "https://picsum.photos/id/1048/600/400",
    location: "澳门特别行政区氹仔岛",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "度假村", "娱乐"],
    rating: 4.7,
    landscapeType: "entertainment",
    landscapeCategory: ["人文景观"],
    landformTags: ["娱乐场所"],
  },
];

// 澳门特别行政区季节性数据
const macauSeasonalData: Record<string, SeasonalScenery> = {
  spring: {
    name: "春季",
    description: "春季的澳门，气候宜人，是游览路环村、澳门水塘的最佳时节",
    image: "https://picsum.photos/id/1049/600/400",
    activities: [
      "路环村漫步",
      "澳门水塘休闲",
      "议事亭前地购物",
      "大三巴牌坊参观",
    ],
  },
  summer: {
    name: "夏季",
    description: "夏季的澳门，虽然炎热，但也是游览黑沙海滩、路环岛的好去处",
    image: "https://picsum.photos/id/1050/600/400",
    activities: [
      "黑沙海滩游泳",
      "路环岛游览",
      "氹仔岛娱乐",
      "威尼斯人澳门游玩",
    ],
  },
  autumn: {
    name: "秋季",
    description: "秋季的澳门，天高气爽，是游览大三巴牌坊、澳门塔的最佳时节",
    image: "https://picsum.photos/id/1051/600/400",
    activities: [
      "大三巴牌坊参观",
      "澳门塔蹦极",
      "议事亭前地购物",
      "永利澳门游玩",
    ],
  },
  winter: {
    name: "冬季",
    description: "冬季的澳门，气候凉爽，是游览威尼斯人澳门、永利澳门的好时节",
    image: "https://picsum.photos/id/1052/600/400",
    activities: [
      "威尼斯人澳门游玩",
      "永利澳门参观",
      "澳门塔观景",
      "大三巴牌坊夜游",
    ],
  },
};

// 澳门特别行政区活动数据
const macauActivities: TravelActivity[] = [
  {
    id: "1",
    name: "大三巴牌坊参观",
    description:
      "参观澳门特别行政区的著名历史建筑大三巴牌坊，感受其独特的巴洛克风格和重要的历史意义",
    image: "https://picsum.photos/id/1053/600/400",
    category: "culture",
    location: "澳门特别行政区澳门半岛",
    duration: "2-3小时",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "2",
    name: "澳门塔蹦极",
    description: "在澳门塔体验蹦极跳等极限运动，感受刺激和挑战",
    image: "https://picsum.photos/id/1054/600/400",
    category: "culture",
    location: "澳门特别行政区澳门半岛",
    duration: "2-3小时",
    difficulty: "中等",
    type: "娱乐体验",
  },
  {
    id: "3",
    name: "黑沙海滩游泳",
    description: "在澳门特别行政区的著名海滩黑沙海滩游泳，享受阳光和海浪",
    image: "https://picsum.photos/id/1055/600/400",
    category: "nature",
    location: "澳门特别行政区路环岛",
    duration: "半天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "4",
    name: "威尼斯人澳门游玩",
    description:
      "在澳门特别行政区的著名度假村威尼斯人澳门游玩，感受仿威尼斯的建筑和运河",
    image: "https://picsum.photos/id/1056/600/400",
    category: "culture",
    location: "澳门特别行政区氹仔岛",
    duration: "全天",
    difficulty: "简单",
    type: "娱乐体验",
  },
  {
    id: "5",
    name: "澳门美食之旅",
    description: "品尝澳门特色美食，如葡式蛋挞、澳门猪扒包、澳门烧腊等",
    image: "https://picsum.photos/id/1057/600/400",
    category: "culture",
    location: "澳门特别行政区澳门半岛",
    duration: "全天",
    difficulty: "简单",
    type: "美食体验",
  },
];

// 澳门特别行政区路线数据
const macauRoutes: RouteInfo[] = [
  {
    id: "1",
    name: "澳门历史文化之旅",
    title: "澳门历史文化之旅",
    description: "探索澳门的历史文化景点",
    duration: "2天",
    difficulty: "简单",
    highlights: ["大三巴牌坊", "议事亭前地", "澳门塔", "路环村"],
    spots: ["大三巴牌坊", "议事亭前地", "澳门塔", "路环村"],
    tags: ["历史", "文化", "建筑"],
    image: "https://picsum.photos/id/1058/600/400",
    rating: 4.7,
    bestTime: "秋季",
    traffic: "步行+公交",
    suitableFor: "所有游客",
  },
  {
    id: "2",
    name: "澳门娱乐休闲之旅",
    title: "澳门娱乐休闲之旅",
    description: "探索澳门的娱乐休闲场所",
    duration: "2天",
    difficulty: "简单",
    highlights: ["威尼斯人澳门", "永利澳门", "黑沙海滩", "氹仔岛"],
    spots: ["威尼斯人澳门", "永利澳门", "黑沙海滩", "氹仔岛"],
    tags: ["娱乐", "休闲", "海滩"],
    image: "https://picsum.photos/id/1059/600/400",
    rating: 4.6,
    bestTime: "夏季",
    traffic: "公交+出租车",
    suitableFor: "所有游客",
  },
];

// 澳门特别行政区非物质文化遗产数据
const macauIntangibleHeritage = [
  {
    id: "1",
    name: "澳门粤剧",
    description:
      "澳门特别行政区传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    level: "national",
    category: "传统戏剧",
    heritageType: "传统表演艺术",
    protectionUnit: "澳门特别行政区文化局",
    tags: ["传统戏剧", "国家级非遗", "岭南文化"],
    icon: "🎭",
    image: "https://picsum.photos/id/1065/600/400",
    features: ["表演独特", "内容丰富", "历史悠久"],
  },
  {
    id: "2",
    name: "澳门葡式蛋挞制作技艺",
    description: "澳门特别行政区传统手工艺，以其精美的制作工艺和独特的风味著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "澳门特别行政区文化局",
    tags: ["传统技艺", "国家级非遗", "葡式文化"],
    icon: "🥧",
    image: "https://picsum.photos/id/1066/600/400",
    features: ["工艺精湛", "风味独特", "历史悠久"],
  },
  {
    id: "3",
    name: "澳门妈祖信俗",
    description:
      "澳门特别行政区传统民俗信仰，以其独特的祭祀仪式和丰富的文化内涵著称",
    level: "national",
    category: "民俗",
    heritageType: "民俗活动",
    protectionUnit: "澳门特别行政区文化局",
    tags: ["民俗", "国家级非遗", "海洋文化"],
    icon: "🙏",
    image: "https://picsum.photos/id/1067/600/400",
    features: ["仪式独特", "文化内涵丰富", "历史悠久"],
  },
  {
    id: "4",
    name: "澳门传统中医药",
    description:
      "澳门特别行政区传统医药，以其独特的诊疗方法和丰富的药材资源著称",
    level: "national",
    category: "传统医药",
    heritageType: "传统医药",
    protectionUnit: "澳门特别行政区文化局",
    tags: ["传统医药", "国家级非遗", "中医药文化"],
    icon: "🌿",
    image: "https://picsum.photos/id/1068/600/400",
    features: ["诊疗独特", "药材丰富", "历史悠久"],
  },
  {
    id: "5",
    name: "澳门传统木雕技艺",
    description: "澳门特别行政区传统手工艺，以其精美的制作工艺和独特的风格著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "澳门特别行政区文化局",
    tags: ["传统技艺", "国家级非遗", "岭南文化"],
    icon: "🪵",
    image: "https://picsum.photos/id/1069/600/400",
    features: ["工艺精湛", "风格独特", "历史悠久"],
  },
];

// 澳门特别行政区数据
export const macauData = {
  overview: {
    totalSpots: 12,
    natureSpots: 7,
    cultureSpots: 5,
    topAttractions: [
      {
        name: "大三巴牌坊",
        image: "https://picsum.photos/id/1044/600/400",
        description:
          "澳门特别行政区的著名历史建筑，以其独特的巴洛克风格和重要的历史意义而闻名",
      },
      {
        name: "澳门塔",
        image: "https://picsum.photos/id/1045/600/400",
        description:
          "澳门特别行政区的著名地标，以其高耸的建筑和蹦极跳等极限运动而闻名",
      },
      {
        name: "威尼斯人澳门",
        image: "https://picsum.photos/id/1048/600/400",
        description:
          "澳门特别行政区的著名度假村，以其仿威尼斯的建筑和运河而闻名",
      },
      {
        name: "黑沙海滩",
        image: "https://picsum.photos/id/1037/600/400",
        description: "澳门特别行政区的著名海滩，以其独特的黑色沙滩而闻名",
      },
      {
        name: "议事亭前地",
        image: "https://picsum.photos/id/1046/600/400",
        description:
          "澳门特别行政区的著名广场，以其独特的葡式建筑和繁忙的商业活动而闻名",
      },
    ],
  },
  spots: [...macauNatureSpots, ...macauCultureSpots],
  seasonal: [
    macauSeasonalData.spring,
    macauSeasonalData.summer,
    macauSeasonalData.autumn,
    macauSeasonalData.winter,
  ],
  activities: macauActivities,
  routes: macauRoutes,
  intangibleHeritage: macauIntangibleHeritage,
};

// 澳门特别行政区风俗文化数据
export const macauCustomsData = {
  activities: [
    {
      id: "1",
      name: "澳门粤剧表演体验",
      description:
        "欣赏澳门特别行政区传统戏曲艺术粤剧表演，感受其独特的表演形式和丰富的内容",
      image: "https://picsum.photos/id/1060/600/400",
      category: "culture",
      location: "澳门特别行政区澳门半岛",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "2",
      name: "葡式蛋挞制作体验",
      description:
        "学习澳门特别行政区传统手工艺葡式蛋挞制作，体验其独特的工艺和风味",
      image: "https://picsum.photos/id/1061/600/400",
      category: "culture",
      location: "澳门特别行政区澳门半岛",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "3",
      name: "澳门妈祖信俗体验",
      description:
        "体验澳门特别行政区传统民俗信仰妈祖信俗，感受其独特的祭祀仪式和丰富的文化内涵",
      image: "https://picsum.photos/id/1062/600/400",
      category: "culture",
      location: "澳门特别行政区澳门半岛",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "4",
      name: "澳门传统中医药体验",
      description:
        "体验澳门特别行政区传统医药，了解其独特的诊疗方法和丰富的药材资源",
      image: "https://picsum.photos/id/1063/600/400",
      category: "culture",
      location: "澳门特别行政区澳门半岛",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "5",
      name: "澳门美食之旅",
      description: "品尝澳门特色美食，如葡式蛋挞、澳门猪扒包、澳门烧腊等",
      image: "https://picsum.photos/id/1064/600/400",
      category: "culture",
      location: "澳门特别行政区澳门半岛",
      duration: "全天",
      difficulty: "简单",
      type: "美食体验",
    },
  ],
};

// 澳门民俗风情元素数据
export const macauFolkCustomsElements = [
  {
    name: "澳门粤剧",
    description:
      "澳门特别行政区传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    image: "https://picsum.photos/id/1070/600/400",
    tags: ["传统戏曲", "非遗文化", "表演艺术", "粤派文化", "文化遗产"],
  },
  {
    name: "葡式蛋挞",
    description: "澳门特别行政区传统手工艺，以其精美的制作工艺和独特的风味著称",
    image: "https://picsum.photos/id/1071/600/400",
    tags: ["特色美食", "饮食文化", "中西融合", "澳门特色", "传统技艺"],
  },
  {
    name: "妈祖信俗",
    description:
      "澳门特别行政区传统民俗信仰，以其独特的祭祀仪式和丰富的文化内涵著称",
    image: "https://picsum.photos/id/1072/600/400",
    tags: ["民俗信仰", "非遗文化", "海洋文化", "民间信俗", "文化遗产"],
  },
  {
    name: "传统中医药",
    description:
      "澳门特别行政区传统医药，以其独特的诊疗方法和丰富的药材资源著称",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["传统医药", "非遗文化", "中医药文化", "澳门特色", "文化传承"],
  },
  {
    name: "传统木雕",
    description: "澳门特别行政区传统手工艺，以其精美的制作工艺和独特的风格著称",
    image: "https://picsum.photos/id/1074/600/400",
    tags: ["传统技艺", "雕刻艺术", "非遗文化", "工艺美术", "民间工艺"],
  },
];

// 澳门特别行政区文化节庆数据
export const macauFestivals = [
  {
    id: "1",
    name: "澳门格兰披治大赛车",
    description: "澳门举行的国际赛车比赛活动，是澳门最具代表性的节庆活动之一",
    month: "11月",
    day: "1日",
    location: "澳门特别行政区澳门半岛",
    isUnique: true,
  },
  {
    id: "2",
    name: "澳门国际音乐节",
    description: "澳门举行的国际音乐节庆活动",
    month: "10月",
    day: "1日",
    location: "澳门特别行政区澳门半岛",
    isUnique: true,
  },
  {
    id: "3",
    name: "澳门国际烟花比赛汇演",
    description: "澳门举行的国际烟花比赛活动",
    month: "9月",
    day: "1日",
    location: "澳门特别行政区澳门半岛",
    isUnique: true,
  },
  {
    id: "4",
    name: "澳门妈祖文化旅游节",
    description: "澳门举行的妈祖文化旅游节庆活动",
    month: "10月",
    day: "15日",
    location: "澳门特别行政区澳门半岛",
    isUnique: true,
  },
  {
    id: "5",
    name: "清明节祭扫",
    description: "传统祭祀祖先的节日",
    month: "4月",
    day: "5日",
    location: "澳门特别行政区各地",
    isUnique: false,
  },
  {
    id: "6",
    name: "中秋节赏月",
    description: "传统节日，家人团聚赏月吃月饼",
    month: "9月",
    day: "21日",
    location: "澳门特别行政区各地",
    isUnique: false,
  },
];

export default macauData;

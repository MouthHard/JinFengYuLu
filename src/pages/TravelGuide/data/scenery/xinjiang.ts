import {
  ScenerySpot,
  TravelActivity,
  RouteInfo,
  SeasonalScenery,
} from "../scenery.ts";

// 新疆维吾尔自治区自然风光数据
const xinjiangNatureSpots: ScenerySpot[] = [
  {
    id: "tianshan",
    name: "天山",
    description:
      "新疆维吾尔自治区的著名山脉，以其壮丽的自然风光和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1019/600/400",
    location: "新疆维吾尔自治区昌吉回族自治州阜康市",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "山脉", "冰川", "风景"],
    rating: 4.9,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "kanasLake",
    name: "喀纳斯湖",
    description:
      "新疆维吾尔自治区的著名湖泊，以其美丽的湖光山色和神秘的'湖怪'传说而闻名",
    image: "https://picsum.photos/id/1035/600/400",
    location: "新疆维吾尔自治区阿勒泰地区布尔津县",
    type: "nature",
    bestTime: "秋季",
    tags: ["自然", "湖泊", "神秘", "风景"],
    rating: 4.8,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["湖泊景观"],
  },
  {
    id: "turpanGrapeGully",
    name: "吐鲁番葡萄沟",
    description:
      "新疆维吾尔自治区的著名葡萄产区，以其优质的葡萄和独特的气候条件而闻名",
    image: "https://picsum.photos/id/1036/600/400",
    location: "新疆维吾尔自治区吐鲁番市高昌区",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "葡萄", "田园", "风景"],
    rating: 4.7,
    landscapeType: "park",
    landscapeCategory: ["生物景观"],
    landformTags: ["植物景观"],
  },
  {
    id: "sayramLake",
    name: "赛里木湖",
    description:
      "新疆维吾尔自治区的著名湖泊，以其清澈的湖水和壮丽的自然风光而闻名",
    image: "https://picsum.photos/id/1037/600/400",
    location: "新疆维吾尔自治区博尔塔拉蒙古自治州博乐市",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "湖泊", "清澈", "风景"],
    rating: 4.8,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["湖泊景观"],
  },
  {
    id: "nalatiGrassland",
    name: "那拉提草原",
    description:
      "新疆维吾尔自治区的著名草原，以其广阔的草原风光和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1038/600/400",
    location: "新疆维吾尔自治区伊犁哈萨克自治州新源县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "草原", "生态", "风景"],
    rating: 4.7,
    landscapeType: "grassland",
    landscapeCategory: ["生物景观"],
    landformTags: ["草原景观"],
  },
  {
    id: "bayanbulakGrassland",
    name: "巴音布鲁克草原",
    description:
      "新疆维吾尔自治区的著名草原，以其广阔的草原风光和九曲十八弯的开都河而闻名",
    image: "https://picsum.photos/id/1039/600/400",
    location: "新疆维吾尔自治区巴音郭楞蒙古自治州和静县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "草原", "河流", "风景"],
    rating: 4.8,
    landscapeType: "grassland",
    landscapeCategory: ["生物景观"],
    landformTags: ["草原景观"],
  },
  {
    id: "flameMountain",
    name: "火焰山",
    description: "新疆维吾尔自治区的著名山脉，以其独特的地貌和高温而闻名",
    image: "https://picsum.photos/id/1040/600/400",
    location: "新疆维吾尔自治区吐鲁番市高昌区",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "山脉", "高温", "风景"],
    rating: 4.6,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
];

// 新疆维吾尔自治区人文景观数据
const xinjiangCultureSpots: ScenerySpot[] = [
  {
    id: "kashiOldTown",
    name: "喀什古城",
    description:
      "新疆维吾尔自治区的著名历史文化名城，以其独特的维吾尔族建筑风格和丰富的历史文化而闻名",
    image: "https://picsum.photos/id/1044/600/400",
    location: "新疆维吾尔自治区喀什地区喀什市",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "古城", "维吾尔族"],
    rating: 4.8,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史遗址"],
  },
  {
    id: "jiaoheRuins",
    name: "交河故城",
    description:
      "新疆维吾尔自治区的著名历史遗址，以其独特的城市布局和重要的历史意义而闻名",
    image: "https://picsum.photos/id/1045/600/400",
    location: "新疆维吾尔自治区吐鲁番市高昌区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "古城", "遗址"],
    rating: 4.7,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史遗址"],
  },
  {
    id: "gaochangRuins",
    name: "高昌故城",
    description:
      "新疆维吾尔自治区的著名历史遗址，以其重要的历史意义和丰富的文化遗产而闻名",
    image: "https://picsum.photos/id/1046/600/400",
    location: "新疆维吾尔自治区吐鲁番市高昌区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "古城", "遗址"],
    rating: 4.6,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史遗址"],
  },
  {
    id: "kizilCaves",
    name: "克孜尔千佛洞",
    description:
      "新疆维吾尔自治区的著名石窟，以其精美的壁画和重要的历史意义而闻名",
    image: "https://picsum.photos/id/1047/600/400",
    location: "新疆维吾尔自治区阿克苏地区拜城县",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "石窟", "壁画"],
    rating: 4.7,
    landscapeType: "grotto",
    landscapeCategory: ["人文景观"],
    landformTags: ["石窟景观"],
  },
  {
    id: "xinjiangInternationalBazaar",
    name: "新疆国际大巴扎",
    description:
      "新疆维吾尔自治区的著名商业中心，以其浓郁的民族特色和丰富的商品而闻名",
    image: "https://picsum.photos/id/1048/600/400",
    location: "新疆维吾尔自治区乌鲁木齐市天山区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "商业", "民族"],
    rating: 4.5,
    landscapeType: "market",
    landscapeCategory: ["人文景观"],
    landformTags: ["商业中心"],
  },
];

// 新疆维吾尔自治区季节性数据
const xinjiangSeasonalData: Record<string, SeasonalScenery> = {
  spring: {
    name: "春季",
    description: "春季的新疆，万物复苏，是游览喀什古城、交河故城的最佳时节",
    image: "https://picsum.photos/id/1049/600/400",
    activities: [
      "喀什古城漫步",
      "交河故城参观",
      "新疆国际大巴扎购物",
      "乌鲁木齐市区游览",
    ],
  },
  summer: {
    name: "夏季",
    description: "夏季的新疆，气候宜人，是游览天山、喀纳斯湖、赛里木湖的好去处",
    image: "https://picsum.photos/id/1050/600/400",
    activities: [
      "天山徒步",
      "喀纳斯湖游船",
      "赛里木湖拍照",
      "那拉提草原骑马",
      "巴音布鲁克草原观光",
    ],
  },
  autumn: {
    name: "秋季",
    description: "秋季的新疆，天高气爽，是游览喀纳斯湖、吐鲁番葡萄沟的最佳时节",
    image: "https://picsum.photos/id/1051/600/400",
    activities: [
      "喀纳斯湖赏秋",
      "吐鲁番葡萄采摘",
      "火焰山游览",
      "高昌故城参观",
    ],
  },
  winter: {
    name: "冬季",
    description: "冬季的新疆，银装素裹，是参观新疆国际大巴扎、喀什古城的好时节",
    image: "https://picsum.photos/id/1052/600/400",
    activities: [
      "新疆国际大巴扎购物",
      "喀什古城冬游",
      "乌鲁木齐市区美食之旅",
      "克孜尔千佛洞参观",
    ],
  },
};

// 新疆维吾尔自治区活动数据
const xinjiangActivities: TravelActivity[] = [
  {
    id: "1",
    name: "天山徒步",
    description: "在天山进行徒步旅行，欣赏壮丽的自然风光和丰富的生态资源",
    image: "https://picsum.photos/id/1053/600/400",
    category: "nature",
    location: "新疆维吾尔自治区昌吉回族自治州阜康市",
    duration: "1天",
    difficulty: "中等",
    type: "户外活动",
  },
  {
    id: "2",
    name: "喀纳斯湖游船",
    description: "在喀纳斯湖乘坐游船，欣赏美丽的湖光山色和神秘的'湖怪'传说",
    image: "https://picsum.photos/id/1054/600/400",
    category: "nature",
    location: "新疆维吾尔自治区阿勒泰地区布尔津县",
    duration: "半天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "3",
    name: "吐鲁番葡萄采摘",
    description: "在吐鲁番葡萄沟采摘新鲜的葡萄，体验田园风光的美丽",
    image: "https://picsum.photos/id/1055/600/400",
    category: "nature",
    location: "新疆维吾尔自治区吐鲁番市高昌区",
    duration: "半天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "4",
    name: "喀什古城漫步",
    description: "在喀什古城漫步，感受其独特的维吾尔族建筑风格和丰富的历史文化",
    image: "https://picsum.photos/id/1056/600/400",
    category: "culture",
    location: "新疆维吾尔自治区喀什地区喀什市",
    duration: "半天",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "5",
    name: "新疆美食之旅",
    description: "品尝新疆特色美食，如烤羊肉串、手抓饭、大盘鸡、烤包子等",
    image: "https://picsum.photos/id/1057/600/400",
    category: "culture",
    location: "新疆维吾尔自治区乌鲁木齐市天山区",
    duration: "全天",
    difficulty: "简单",
    type: "美食体验",
  },
];

// 新疆维吾尔自治区路线数据
const xinjiangRoutes: RouteInfo[] = [
  {
    id: "1",
    name: "新疆北疆自然风光之旅",
    title: "新疆北疆自然风光之旅",
    description: "探索新疆北疆的壮丽自然风光",
    duration: "10天",
    difficulty: "中等",
    highlights: [
      "天山",
      "喀纳斯湖",
      "赛里木湖",
      "那拉提草原",
      "巴音布鲁克草原",
    ],
    spots: ["天山", "喀纳斯湖", "赛里木湖", "那拉提草原", "巴音布鲁克草原"],
    tags: ["自然", "湖泊", "草原"],
    image: "https://picsum.photos/id/1058/600/400",
    rating: 4.9,
    bestTime: "夏季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
  {
    id: "2",
    name: "新疆南疆文化之旅",
    title: "新疆南疆文化之旅",
    description: "探索新疆南疆的丰富历史文化",
    duration: "8天",
    difficulty: "中等",
    highlights: ["喀什古城", "交河故城", "高昌故城", "克孜尔千佛洞", "火焰山"],
    spots: ["喀什古城", "交河故城", "高昌故城", "克孜尔千佛洞", "火焰山"],
    tags: ["历史", "文化", "古城"],
    image: "https://picsum.photos/id/1059/600/400",
    rating: 4.8,
    bestTime: "春季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
];

// 新疆维吾尔自治区非物质文化遗产数据
const xinjiangIntangibleHeritage = [
  {
    id: "1",
    name: "维吾尔族十二木卡姆",
    description: "新疆维吾尔自治区传统音乐，以其丰富的内容和独特的艺术形式著称",
    level: "national",
    category: "传统音乐",
    heritageType: "传统表演艺术",
    protectionUnit: "新疆维吾尔自治区文化和旅游厅",
    tags: ["传统音乐", "国家级非遗", "维吾尔族"],
    icon: "🎵",
    image: "https://picsum.photos/id/1065/600/400",
    features: ["内容丰富", "形式独特", "历史悠久"],
  },
  {
    id: "2",
    name: "柯尔克孜族史诗《玛纳斯》",
    description: "新疆维吾尔自治区传统民间文学，以其宏大的篇幅和丰富的内容著称",
    level: "national",
    category: "民间文学",
    heritageType: "民间文学",
    protectionUnit: "新疆维吾尔自治区文化和旅游厅",
    tags: ["民间文学", "国家级非遗", "柯尔克孜族"],
    icon: "📚",
    image: "https://picsum.photos/id/1066/600/400",
    features: ["篇幅宏大", "内容丰富", "历史悠久"],
  },
  {
    id: "3",
    name: "维吾尔族花帽制作技艺",
    description:
      "新疆维吾尔自治区传统手工艺，以其精美的制作工艺和独特的风格著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "新疆维吾尔自治区文化和旅游厅",
    tags: ["传统技艺", "国家级非遗", "维吾尔族"],
    icon: "🧢",
    image: "https://picsum.photos/id/1067/600/400",
    features: ["工艺精湛", "风格独特", "历史悠久"],
  },
  {
    id: "4",
    name: "维吾尔族桑皮纸制作技艺",
    description: "新疆维吾尔自治区传统手工艺，以其独特的制作工艺和历史价值著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "新疆维吾尔自治区文化和旅游厅",
    tags: ["传统技艺", "国家级非遗", "维吾尔族"],
    icon: "📄",
    image: "https://picsum.photos/id/1068/600/400",
    features: ["工艺独特", "历史悠久", "文化价值"],
  },
  {
    id: "5",
    name: "哈萨克族阿依特斯",
    description:
      "新疆维吾尔自治区传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    level: "national",
    category: "传统音乐",
    heritageType: "传统表演艺术",
    protectionUnit: "新疆维吾尔自治区文化和旅游厅",
    tags: ["传统音乐", "国家级非遗", "哈萨克族"],
    icon: "🎵",
    image: "https://picsum.photos/id/1069/600/400",
    features: ["演唱独特", "内容丰富", "历史悠久"],
  },
];

// 新疆维吾尔自治区数据
export const xinjiangData = {
  overview: {
    totalSpots: 12,
    natureSpots: 7,
    cultureSpots: 5,
    topAttractions: [
      {
        name: "天山",
        image: "https://picsum.photos/id/1019/600/400",
        description:
          "新疆维吾尔自治区的著名山脉，以其壮丽的自然风光和丰富的生态资源而闻名",
      },
      {
        name: "喀纳斯湖",
        image: "https://picsum.photos/id/1035/600/400",
        description:
          "新疆维吾尔自治区的著名湖泊，以其美丽的湖光山色和神秘的'湖怪'传说而闻名",
      },
      {
        name: "喀什古城",
        image: "https://picsum.photos/id/1044/600/400",
        description:
          "新疆维吾尔自治区的著名历史文化名城，以其独特的维吾尔族建筑风格和丰富的历史文化而闻名",
      },
      {
        name: "赛里木湖",
        image: "https://picsum.photos/id/1037/600/400",
        description:
          "新疆维吾尔自治区的著名湖泊，以其清澈的湖水和壮丽的自然风光而闻名",
      },
      {
        name: "那拉提草原",
        image: "https://picsum.photos/id/1038/600/400",
        description:
          "新疆维吾尔自治区的著名草原，以其广阔的草原风光和丰富的生态资源而闻名",
      },
    ],
  },
  spots: [...xinjiangNatureSpots, ...xinjiangCultureSpots],
  seasonal: [
    xinjiangSeasonalData.spring,
    xinjiangSeasonalData.summer,
    xinjiangSeasonalData.autumn,
    xinjiangSeasonalData.winter,
  ],
  activities: xinjiangActivities,
  routes: xinjiangRoutes,
  intangibleHeritage: xinjiangIntangibleHeritage,
};

// 新疆维吾尔自治区风俗文化数据
export const xinjiangCustomsData = {
  activities: [
    {
      id: "1",
      name: "维吾尔族十二木卡姆表演体验",
      description:
        "欣赏新疆维吾尔自治区传统音乐十二木卡姆表演，感受其丰富的内容和独特的艺术形式",
      image: "https://picsum.photos/id/1060/600/400",
      category: "culture",
      location: "新疆维吾尔自治区乌鲁木齐市天山区",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "2",
      name: "维吾尔族花帽制作体验",
      description:
        "学习新疆维吾尔自治区传统手工艺花帽制作，体验其独特的工艺和风格",
      image: "https://picsum.photos/id/1061/600/400",
      category: "culture",
      location: "新疆维吾尔自治区喀什地区喀什市",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "3",
      name: "哈萨克族阿依特斯表演体验",
      description:
        "欣赏新疆维吾尔自治区传统民间音乐哈萨克族阿依特斯表演，感受其独特的演唱形式和丰富的内容",
      image: "https://picsum.photos/id/1062/600/400",
      category: "culture",
      location: "新疆维吾尔自治区伊犁哈萨克自治州伊宁市",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "4",
      name: "新疆美食之旅",
      description: "品尝新疆特色美食，如烤羊肉串、手抓饭、大盘鸡、烤包子等",
      image: "https://picsum.photos/id/1063/600/400",
      category: "culture",
      location: "新疆维吾尔自治区乌鲁木齐市天山区",
      duration: "全天",
      difficulty: "简单",
      type: "美食体验",
    },
    {
      id: "5",
      name: "喀什古城民俗体验",
      description: "在喀什古城体验维吾尔族传统民俗，如家访、手工制作等",
      image: "https://picsum.photos/id/1064/600/400",
      category: "culture",
      location: "新疆维吾尔自治区喀什地区喀什市",
      duration: "半天",
      difficulty: "简单",
      type: "文化体验",
    },
  ],
};

// 新疆民俗风情元素数据
export const xinjiangFolkCustomsElements = [
  {
    name: "维吾尔族十二木卡姆",
    description: "新疆维吾尔自治区传统音乐，以其丰富的内容和独特的艺术形式著称",
    image: "https://picsum.photos/id/1070/600/400",
    tags: ["传统音乐", "非遗文化", "维吾尔族特色", "文化遗产", "表演艺术"],
  },
  {
    name: "柯尔克孜族史诗《玛纳斯》",
    description: "新疆维吾尔自治区传统民间文学，以其宏大的篇幅和丰富的内容著称",
    image: "https://picsum.photos/id/1071/600/400",
    tags: ["民间文学", "非遗文化", "柯尔克孜族特色", "文化遗产", "史诗文化"],
  },
  {
    name: "维吾尔族花帽",
    description:
      "新疆维吾尔自治区传统手工艺，以其精美的制作工艺和独特的风格著称",
    image: "https://picsum.photos/id/1072/600/400",
    tags: ["传统技艺", "非遗文化", "维吾尔族特色", "民间工艺", "服饰文化"],
  },
  {
    name: "哈萨克族阿依特斯",
    description:
      "新疆维吾尔自治区传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["传统曲艺", "非遗文化", "哈萨克族特色", "表演艺术", "民间艺术"],
  },
  {
    name: "维吾尔族桑皮纸",
    description: "新疆维吾尔自治区传统手工艺，以其独特的制作工艺和历史价值著称",
    image: "https://picsum.photos/id/1074/600/400",
    tags: ["传统技艺", "非遗文化", "维吾尔族特色", "造纸技艺", "文化遗产"],
  },
];

// 新疆维吾尔自治区文化节庆数据
export const xinjiangFestivals = [
  {
    id: "1",
    name: "中国新疆国际旅游节",
    description: "新疆举行的国际旅游节庆活动",
    month: "7月",
    day: "1日",
    location: "新疆维吾尔自治区乌鲁木齐市天山区",
    isUnique: true,
  },
  {
    id: "2",
    name: "新疆那达慕大会",
    description: "新疆举行的传统民族体育盛会",
    month: "8月",
    day: "1日",
    location: "新疆维吾尔自治区巴音郭楞蒙古自治州和静县",
    isUnique: true,
  },
  {
    id: "3",
    name: "维吾尔族肉孜节",
    description: "维吾尔族传统节日，庆祝斋月结束",
    month: "5月",
    day: "1日",
    location: "新疆维吾尔自治区各地",
    isUnique: true,
  },
  {
    id: "4",
    name: "维吾尔族古尔邦节",
    description: "维吾尔族传统节日，庆祝丰收和祭祀",
    month: "7月",
    day: "1日",
    location: "新疆维吾尔自治区各地",
    isUnique: true,
  },
  {
    id: "5",
    name: "清明节祭扫",
    description: "传统祭祀祖先的节日",
    month: "4月",
    day: "5日",
    location: "新疆维吾尔自治区各地",
    isUnique: false,
  },
  {
    id: "6",
    name: "中秋节赏月",
    description: "传统节日，家人团聚赏月吃月饼",
    month: "9月",
    day: "21日",
    location: "新疆维吾尔自治区各地",
    isUnique: false,
  },
];

export default xinjiangData;

import {
  ScenerySpot,
  TravelActivity,
  RouteInfo,
  SeasonalScenery,
} from "../scenery.ts";

// 青海省自然风光数据
const qinghaiNatureSpots: ScenerySpot[] = [
  {
    id: "qinghaiLake",
    name: "青海湖",
    description:
      "青海省海南藏族自治州的著名湖泊，以其美丽的自然风光和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1019/600/400",
    location: "青海省海南藏族自治州共和县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "湖泊", "生态", "风景"],
    rating: 4.9,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["湖泊景观"],
  },
  {
    id: "chakaSaltLake",
    name: "茶卡盐湖",
    description:
      "青海省海西蒙古族藏族自治州的著名盐湖，以其独特的盐湖景观和'天空之镜'的美誉而闻名",
    image: "https://picsum.photos/id/1035/600/400",
    location: "青海省海西蒙古族藏族自治州乌兰县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "盐湖", "天空之镜", "风景"],
    rating: 4.8,
    landscapeType: "lake",
    landscapeCategory: ["水景观"],
    landformTags: ["盐湖景观"],
  },
  {
    id: "kunlunMountains",
    name: "昆仑山",
    description:
      "青海省海西蒙古族藏族自治州的著名山脉，以其壮丽的自然风光和神秘的文化传说而闻名",
    image: "https://picsum.photos/id/1036/600/400",
    location: "青海省海西蒙古族藏族自治州格尔木市",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "山脉", "神秘", "风景"],
    rating: 4.7,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "kokonorMountains",
    name: "祁连山",
    description:
      "青海省海北藏族自治州的著名山脉，以其壮丽的自然风光和丰富的生态资源而闻名",
    image: "https://picsum.photos/id/1037/600/400",
    location: "青海省海北藏族自治州门源回族自治县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "山脉", "生态", "风景"],
    rating: 4.8,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "sanjiangyuan",
    name: "三江源",
    description:
      "青海省玉树藏族自治州的著名自然保护区，以其作为长江、黄河、澜沧江的发源地而闻名",
    image: "https://picsum.photos/id/1038/600/400",
    location: "青海省玉树藏族自治州玉树市",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "保护区", "水源", "生态"],
    rating: 4.9,
    landscapeType: "park",
    landscapeCategory: ["生物景观"],
    landformTags: ["自然保护区"],
  },
  {
    id: "qinghaiTibetRailway",
    name: "青藏铁路",
    description:
      "青海省的著名铁路，以其高原铁路的壮丽景观和重要的交通意义而闻名",
    image: "https://picsum.photos/id/1039/600/400",
    location: "青海省西宁市至西藏自治区拉萨市",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "铁路", "高原", "风景"],
    rating: 4.7,
    landscapeType: "transport",
    landscapeCategory: ["人文景观"],
    landformTags: ["交通设施"],
  },
  {
    id: "menyuanCanolaFlowerField",
    name: "门源油菜花田",
    description:
      "青海省海北藏族自治州的著名景观，以其壮观的油菜花田和美丽的自然风光而闻名",
    image: "https://picsum.photos/id/1040/600/400",
    location: "青海省海北藏族自治州门源回族自治县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "油菜花", "田园", "风景"],
    rating: 4.6,
    landscapeType: "park",
    landscapeCategory: ["生物景观"],
    landformTags: ["植物景观"],
  },
];

// 青海省人文景观数据
const qinghaiCultureSpots: ScenerySpot[] = [
  {
    id: "xiningTa'erMonastery",
    name: "塔尔寺",
    description: "青海省西宁市的著名寺庙，以其重要的宗教地位和精美的建筑而闻名",
    image: "https://picsum.photos/id/1044/600/400",
    location: "青海省西宁市湟中区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "寺庙", "佛教"],
    rating: 4.8,
    landscapeType: "temple",
    landscapeCategory: ["人文景观"],
    landformTags: ["宗教建筑"],
  },
  {
    id: "xiningMosque",
    name: "西宁东关清真大寺",
    description:
      "青海省西宁市的著名清真寺，以其重要的宗教地位和精美的建筑而闻名",
    image: "https://picsum.photos/id/1045/600/400",
    location: "青海省西宁市城东区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "清真寺", "宗教"],
    rating: 4.6,
    landscapeType: "temple",
    landscapeCategory: ["人文景观"],
    landformTags: ["宗教建筑"],
  },
  {
    id: "xiningMuseum",
    name: "青海省博物馆",
    description: "青海省西宁市的著名博物馆，以其丰富的历史文物和文化而闻名",
    image: "https://picsum.photos/id/1046/600/400",
    location: "青海省西宁市城西区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "博物馆", "艺术"],
    rating: 4.5,
    landscapeType: "museum",
    landscapeCategory: ["人文景观"],
    landformTags: ["博物馆"],
  },
  {
    id: "yushuJokhangTemple",
    name: "玉树结古寺",
    description:
      "青海省玉树藏族自治州的著名寺庙，以其重要的宗教地位和精美的建筑而闻名",
    image: "https://picsum.photos/id/1047/600/400",
    location: "青海省玉树藏族自治州玉树市",
    type: "culture",
    bestTime: "夏季",
    tags: ["历史", "文化", "寺庙", "佛教"],
    rating: 4.4,
    landscapeType: "temple",
    landscapeCategory: ["人文景观"],
    landformTags: ["宗教建筑"],
  },
  {
    id: "delinghaAlienSite",
    name: "德令哈外星人遗址",
    description:
      "青海省海西蒙古族藏族自治州的著名景点，以其神秘的外星人传说和独特的地质景观而闻名",
    image: "https://picsum.photos/id/1048/600/400",
    location: "青海省海西蒙古族藏族自治州德令哈市",
    type: "culture",
    bestTime: "夏季",
    tags: ["历史", "文化", "神秘", "地质"],
    rating: 4.3,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["神秘遗址"],
  },
];

// 青海省季节性数据
const qinghaiSeasonalData: Record<string, SeasonalScenery> = {
  spring: {
    name: "春季",
    description:
      "春季的青海，万物复苏，是游览塔尔寺、西宁东关清真大寺的最佳时节",
    image: "https://picsum.photos/id/1049/600/400",
    activities: [
      "塔尔寺朝圣",
      "西宁东关清真大寺参观",
      "青海省博物馆游览",
      "西宁市区漫步",
    ],
  },
  summer: {
    name: "夏季",
    description: "夏季的青海，气候宜人，是游览青海湖、茶卡盐湖的好去处",
    image: "https://picsum.photos/id/1050/600/400",
    activities: [
      "青海湖环湖游",
      "茶卡盐湖拍照",
      "门源油菜花田赏景",
      "祁连山徒步",
    ],
  },
  autumn: {
    name: "秋季",
    description: "秋季的青海，天高气爽，是游览昆仑山、三江源的最佳时节",
    image: "https://picsum.photos/id/1051/600/400",
    activities: [
      "昆仑山赏秋",
      "三江源生态体验",
      "德令哈外星人遗址探索",
      "青藏铁路观光",
    ],
  },
  winter: {
    name: "冬季",
    description:
      "冬季的青海，虽然寒冷，但雪景美丽，是参观塔尔寺、青海省博物馆的好时节",
    image: "https://picsum.photos/id/1052/600/400",
    activities: [
      "塔尔寺冬季朝圣",
      "青海省博物馆深度游",
      "西宁市区美食之旅",
      "西宁东关清真大寺参观",
    ],
  },
};

// 青海省活动数据
const qinghaiActivities: TravelActivity[] = [
  {
    id: "1",
    name: "青海湖环湖游",
    description: "环绕青海湖游览，欣赏美丽的湖光山色和丰富的生态资源",
    image: "https://picsum.photos/id/1053/600/400",
    category: "nature",
    location: "青海省海南藏族自治州共和县",
    duration: "2-3天",
    difficulty: "中等",
    type: "户外活动",
  },
  {
    id: "2",
    name: "茶卡盐湖拍照",
    description: "在茶卡盐湖拍照，体验'天空之镜'的独特景观",
    image: "https://picsum.photos/id/1054/600/400",
    category: "nature",
    location: "青海省海西蒙古族藏族自治州乌兰县",
    duration: "半天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "3",
    name: "塔尔寺朝圣",
    description: "参观塔尔寺，感受其重要的宗教地位和精美的建筑",
    image: "https://picsum.photos/id/1055/600/400",
    category: "culture",
    location: "青海省西宁市湟中区",
    duration: "半天",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "4",
    name: "门源油菜花田赏景",
    description: "欣赏门源油菜花田的壮观景观，感受田园风光的美丽",
    image: "https://picsum.photos/id/1056/600/400",
    category: "nature",
    location: "青海省海北藏族自治州门源回族自治县",
    duration: "半天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "5",
    name: "青海美食之旅",
    description: "品尝青海特色美食，如青海老酸奶、手抓羊肉、青稞饼等",
    image: "https://picsum.photos/id/1057/600/400",
    category: "culture",
    location: "青海省西宁市城东区",
    duration: "全天",
    difficulty: "简单",
    type: "美食体验",
  },
];

// 青海省路线数据
const qinghaiRoutes: RouteInfo[] = [
  {
    id: "1",
    name: "青海湖环线之旅",
    title: "青海湖环线之旅",
    description: "环绕青海湖游览，欣赏美丽的湖光山色和丰富的生态资源",
    duration: "5天",
    difficulty: "中等",
    highlights: ["青海湖", "茶卡盐湖", "塔尔寺", "门源油菜花田"],
    spots: ["青海湖", "茶卡盐湖", "塔尔寺", "门源油菜花田"],
    tags: ["自然", "湖泊", "宗教"],
    image: "https://picsum.photos/id/1058/600/400",
    rating: 4.9,
    bestTime: "夏季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
  {
    id: "2",
    name: "青海自然风光之旅",
    title: "青海自然风光之旅",
    description: "探索青海的壮丽自然风光",
    duration: "6天",
    difficulty: "中等",
    highlights: ["昆仑山", "祁连山", "三江源", "德令哈外星人遗址"],
    spots: ["昆仑山", "祁连山", "三江源", "德令哈外星人遗址"],
    tags: ["自然", "山脉", "神秘"],
    image: "https://picsum.photos/id/1059/600/400",
    rating: 4.8,
    bestTime: "夏季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
];

// 青海省非物质文化遗产数据
const qinghaiIntangibleHeritage = [
  {
    id: "1",
    name: "热贡艺术",
    description:
      "青海省黄南藏族自治州传统美术，以其精美的唐卡、堆绣等作品和独特的风格著称",
    level: "national",
    category: "传统美术",
    heritageType: "传统手工艺",
    protectionUnit: "青海省黄南藏族自治州文化和旅游局",
    tags: ["传统美术", "国家级非遗", "民间艺术"],
    icon: "🖼️",
    image: "https://picsum.photos/id/1065/600/400",
    features: ["作品精美", "风格独特", "工艺精湛"],
  },
  {
    id: "2",
    name: "青海花儿",
    description: "青海省传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    level: "national",
    category: "传统音乐",
    heritageType: "传统表演艺术",
    protectionUnit: "青海省文化和旅游厅",
    tags: ["传统音乐", "国家级非遗", "民间艺术"],
    icon: "🎵",
    image: "https://picsum.photos/id/1066/600/400",
    features: ["演唱独特", "内容丰富", "历史悠久"],
  },
  {
    id: "3",
    name: "土族盘绣",
    description:
      "青海省互助土族自治县传统手工艺，以其精美的刺绣作品和独特的风格著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "青海省互助土族自治县文化和旅游局",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🧵",
    image: "https://picsum.photos/id/1067/600/400",
    features: ["作品精美", "风格独特", "工艺精湛"],
  },
  {
    id: "4",
    name: "撒拉族篱笆楼营造技艺",
    description:
      "青海省循化撒拉族自治县传统建筑技艺，以其独特的建筑风格和精湛的工艺著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "青海省循化撒拉族自治县文化和旅游局",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🏠",
    image: "https://picsum.photos/id/1068/600/400",
    features: ["建筑独特", "工艺精湛", "历史悠久"],
  },
  {
    id: "5",
    name: "藏戏（黄南藏戏）",
    description:
      "青海省黄南藏族自治州传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    level: "national",
    category: "传统戏剧",
    heritageType: "传统表演艺术",
    protectionUnit: "青海省黄南藏族自治州文化和旅游局",
    tags: ["传统戏剧", "国家级非遗", "民间艺术"],
    icon: "🎭",
    image: "https://picsum.photos/id/1069/600/400",
    features: ["表演独特", "内容丰富", "历史悠久"],
  },
];

// 青海省数据
export const qinghaiData = {
  overview: {
    totalSpots: 12,
    natureSpots: 7,
    cultureSpots: 5,
    topAttractions: [
      {
        name: "青海湖",
        image: "https://picsum.photos/id/1019/600/400",
        description:
          "青海省海南藏族自治州的著名湖泊，以其美丽的自然风光和丰富的生态资源而闻名",
      },
      {
        name: "茶卡盐湖",
        image: "https://picsum.photos/id/1035/600/400",
        description:
          "青海省海西蒙古族藏族自治州的著名盐湖，以其独特的盐湖景观和'天空之镜'的美誉而闻名",
      },
      {
        name: "塔尔寺",
        image: "https://picsum.photos/id/1044/600/400",
        description:
          "青海省西宁市的著名寺庙，以其重要的宗教地位和精美的建筑而闻名",
      },
      {
        name: "门源油菜花田",
        image: "https://picsum.photos/id/1040/600/400",
        description:
          "青海省海北藏族自治州的著名景观，以其壮观的油菜花田和美丽的自然风光而闻名",
      },
      {
        name: "三江源",
        image: "https://picsum.photos/id/1038/600/400",
        description:
          "青海省玉树藏族自治州的著名自然保护区，以其作为长江、黄河、澜沧江的发源地而闻名",
      },
    ],
  },
  spots: [...qinghaiNatureSpots, ...qinghaiCultureSpots],
  seasonal: [
    qinghaiSeasonalData.spring,
    qinghaiSeasonalData.summer,
    qinghaiSeasonalData.autumn,
    qinghaiSeasonalData.winter,
  ],
  activities: qinghaiActivities,
  routes: qinghaiRoutes,
  intangibleHeritage: qinghaiIntangibleHeritage,
};

// 青海省风俗文化数据
export const qinghaiCustomsData = {
  activities: [
    {
      id: "1",
      name: "热贡艺术体验",
      description:
        "学习青海省黄南藏族自治州传统美术热贡艺术，体验其独特的工艺和风格",
      image: "https://picsum.photos/id/1060/600/400",
      category: "culture",
      location: "青海省黄南藏族自治州同仁市",
      duration: "1天",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "2",
      name: "青海花儿演唱体验",
      description:
        "聆听青海省传统民间音乐花儿演唱，感受其独特的演唱形式和丰富的内容",
      image: "https://picsum.photos/id/1061/600/400",
      category: "culture",
      location: "青海省西宁市城东区",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "3",
      name: "土族盘绣体验",
      description:
        "学习青海省互助土族自治县传统手工艺土族盘绣，体验其独特的工艺和风格",
      image: "https://picsum.photos/id/1062/600/400",
      category: "culture",
      location: "青海省互助土族自治县威远镇",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "4",
      name: "撒拉族篱笆楼参观",
      description:
        "参观青海省循化撒拉族自治县传统建筑篱笆楼，感受其独特的建筑风格和精湛的工艺",
      image: "https://picsum.photos/id/1063/600/400",
      category: "culture",
      location: "青海省循化撒拉族自治县积石镇",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "5",
      name: "青海美食之旅",
      description: "品尝青海特色美食，如青海老酸奶、手抓羊肉、青稞饼等",
      image: "https://picsum.photos/id/1064/600/400",
      category: "culture",
      location: "青海省西宁市城东区",
      duration: "全天",
      difficulty: "简单",
      type: "美食体验",
    },
  ],
};

// 青海民俗风情元素数据
export const qinghaiFolkCustomsElements = [
  {
    name: "热贡艺术",
    description:
      "青海省黄南藏族自治州传统美术，以其精美的唐卡、堆绣等作品和独特的风格著称",
    image: "https://picsum.photos/id/1070/600/400",
    tags: ["传统美术", "非遗文化", "藏族特色", "工艺美术", "文化遗产"],
  },
  {
    name: "青海花儿",
    description: "青海省传统民间音乐，以其独特的演唱形式和丰富的内容著称",
    image: "https://picsum.photos/id/1071/600/400",
    tags: ["传统音乐", "非遗文化", "民间艺术", "青海特色", "表演艺术"],
  },
  {
    name: "土族盘绣",
    description:
      "青海省互助土族自治县传统手工艺，以其精美的刺绣作品和独特的风格著称",
    image: "https://picsum.photos/id/1072/600/400",
    tags: ["传统技艺", "刺绣艺术", "非遗文化", "土族特色", "民间工艺"],
  },
  {
    name: "撒拉族篱笆楼",
    description:
      "青海省循化撒拉族自治县传统建筑技艺，以其独特的建筑风格和精湛的工艺著称",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["传统建筑", "非遗文化", "撒拉族特色", "建筑技艺", "文化遗产"],
  },
  {
    name: "黄南藏戏",
    description:
      "青海省黄南藏族自治州传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    image: "https://picsum.photos/id/1074/600/400",
    tags: ["传统戏曲", "非遗文化", "藏族特色", "表演艺术", "文化遗产"],
  },
];

// 青海省文化节庆数据
export const qinghaiFestivals = [
  {
    id: "1",
    name: "青海湖国际自行车环湖赛",
    description: "青海举行的国际自行车比赛活动",
    month: "7月",
    day: "1日",
    location: "青海省海南藏族自治州",
    isUnique: true,
  },
  {
    id: "2",
    name: "热贡文化艺术节",
    description: "黄南举行的热贡文化艺术节庆活动",
    month: "8月",
    day: "1日",
    location: "青海省黄南藏族自治州同仁市",
    isUnique: true,
  },
  {
    id: "3",
    name: "青海国际藏毯展览会",
    description: "西宁举行的国际藏毯展览活动",
    month: "6月",
    day: "1日",
    location: "青海省西宁市城西区",
    isUnique: true,
  },
  {
    id: "4",
    name: "土族纳顿节",
    description: "互助土族举行的传统节日",
    month: "7月",
    day: "15日",
    location: "青海省互助土族自治县威远镇",
    isUnique: true,
  },
  {
    id: "5",
    name: "清明节祭扫",
    description: "传统祭祀祖先的节日",
    month: "4月",
    day: "5日",
    location: "青海省各地",
    isUnique: false,
  },
  {
    id: "6",
    name: "中秋节赏月",
    description: "传统节日，家人团聚赏月吃月饼",
    month: "9月",
    day: "21日",
    location: "青海省各地",
    isUnique: false,
  },
];

export default qinghaiData;

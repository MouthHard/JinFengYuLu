import {
  ScenerySpot,
  TravelActivity,
  RouteInfo,
  SeasonalScenery,
} from "../scenery.ts";

// 广西壮族自治区自然风光数据
const guangxiNatureSpots: ScenerySpot[] = [
  {
    id: "guilinLijiang",
    name: "桂林漓江",
    description:
      "广西壮族自治区桂林市的著名河流，以其壮丽的山水风光和独特的喀斯特地貌而闻名",
    image: "https://picsum.photos/id/1019/600/400",
    location: "广西壮族自治区桂林市灵川县",
    type: "nature",
    bestTime: "春季",
    tags: ["自然", "河流", "山水", "风景"],
    rating: 4.9,
    landscapeType: "river",
    landscapeCategory: ["水景观"],
    landformTags: ["河流景观"],
  },
  {
    id: "yangshuoWestStreet",
    name: "阳朔西街",
    description:
      "广西壮族自治区桂林市阳朔县的著名街道，以其独特的建筑风格和丰富的民俗文化而闻名",
    image: "https://picsum.photos/id/1035/600/400",
    location: "广西壮族自治区桂林市阳朔县",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "街道", "民俗", "文化"],
    rating: 4.8,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史街区"],
  },
  {
    id: "nanningQingxiuMountain",
    name: "南宁青秀山",
    description:
      "广西壮族自治区南宁市的著名山脉，以其壮丽的自然风光和丰富的历史文化而闻名",
    image: "https://picsum.photos/id/1036/600/400",
    location: "广西壮族自治区南宁市青秀区",
    type: "nature",
    bestTime: "春季",
    tags: ["自然", "山岳", "风景", "休闲"],
    rating: 4.6,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "guilinReedFluteCave",
    name: "桂林芦笛岩",
    description:
      "广西壮族自治区桂林市的著名溶洞，以其精美的钟乳石和独特的地质景观而闻名",
    image: "https://picsum.photos/id/1037/600/400",
    location: "广西壮族自治区桂林市叠彩区",
    type: "nature",
    bestTime: "四季皆宜",
    tags: ["自然", "溶洞", "地质", "风景"],
    rating: 4.7,
    landscapeType: "cave",
    landscapeCategory: ["地理景观"],
    landformTags: ["喀斯特景观"],
  },
  {
    id: "beihaiSilverBeach",
    name: "北海银滩",
    description:
      "广西壮族自治区北海市的著名海滩，以其美丽的自然风光和丰富的娱乐设施而闻名",
    image: "https://picsum.photos/id/1038/600/400",
    location: "广西壮族自治区北海市银海区",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "海滩", "休闲", "娱乐"],
    rating: 4.6,
    landscapeType: "beach",
    landscapeCategory: ["水景观"],
    landformTags: ["海洋景观"],
  },
  {
    id: "chongzuoDetianWaterfall",
    name: "崇左德天瀑布",
    description:
      "广西壮族自治区崇左市的著名瀑布，以其壮丽的自然风光和独特的跨国景观而闻名",
    image: "https://picsum.photos/id/1039/600/400",
    location: "广西壮族自治区崇左市大新县",
    type: "nature",
    bestTime: "夏季",
    tags: ["自然", "瀑布", "跨国", "风景"],
    rating: 4.8,
    landscapeType: "waterfall",
    landscapeCategory: ["水景观"],
    landformTags: ["瀑布景观"],
  },
  {
    id: "hechiBameiTerracedFields",
    name: "河池巴马梯田",
    description:
      "广西壮族自治区河池市的著名梯田，以其壮丽的自然风光和独特的农业景观而闻名",
    image: "https://picsum.photos/id/1040/600/400",
    location: "广西壮族自治区河池市巴马瑶族自治县",
    type: "nature",
    bestTime: "秋季",
    tags: ["自然", "梯田", "农业", "风景"],
    rating: 4.5,
    landscapeType: "terrace",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
];

// 广西壮族自治区人文景观数据
const guangxiCultureSpots: ScenerySpot[] = [
  {
    id: "nantongZhuangEthnicVillage",
    name: "那桐壮族村",
    description:
      "广西壮族自治区南宁市的著名壮族村寨，以其独特的民俗文化和建筑风格而闻名",
    image: "https://picsum.photos/id/1044/600/400",
    location: "广西壮族自治区南宁市隆安县",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "民俗", "建筑"],
    rating: 4.7,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["民俗景观"],
  },
  {
    id: "guilinSevenStarCave",
    name: "桂林七星岩",
    description:
      "广西壮族自治区桂林市的著名溶洞，以其精美的钟乳石和丰富的历史文化而闻名",
    image: "https://picsum.photos/id/1045/600/400",
    location: "广西壮族自治区桂林市七星区",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "溶洞", "地质"],
    rating: 4.6,
    landscapeType: "cave",
    landscapeCategory: ["地理景观"],
    landformTags: ["喀斯特景观"],
  },
  {
    id: "liuzhouHuaxiPark",
    name: "柳州花溪公园",
    description:
      "广西壮族自治区柳州市的著名公园，以其美丽的自然风光和丰富的娱乐设施而闻名",
    image: "https://picsum.photos/id/1046/600/400",
    location: "广西壮族自治区柳州市鱼峰区",
    type: "culture",
    bestTime: "春季",
    tags: ["历史", "文化", "公园", "休闲"],
    rating: 4.5,
    landscapeType: "park",
    landscapeCategory: ["人文景观"],
    landformTags: ["公园景观"],
  },
  {
    id: "guigangWest Mountain",
    name: "贵港西山",
    description:
      "广西壮族自治区贵港市的著名山脉，以其壮丽的自然风光和丰富的佛教文化而闻名",
    image: "https://picsum.photos/id/1047/600/400",
    location: "广西壮族自治区贵港市桂平市",
    type: "culture",
    bestTime: "春季",
    tags: ["历史", "文化", "佛教", "风景"],
    rating: 4.6,
    landscapeType: "mountain",
    landscapeCategory: ["地理景观"],
    landformTags: ["山地景观"],
  },
  {
    id: "fangchenggangDonganAncientTown",
    name: "防城港东兴古镇",
    description:
      "广西壮族自治区防城港市的著名古镇，以其独特的建筑风格和丰富的历史文化而闻名",
    image: "https://picsum.photos/id/1048/600/400",
    location: "广西壮族自治区防城港市东兴市",
    type: "culture",
    bestTime: "四季皆宜",
    tags: ["历史", "文化", "古镇", "建筑"],
    rating: 4.5,
    landscapeType: "historical",
    landscapeCategory: ["人文景观"],
    landformTags: ["历史古镇"],
  },
];

// 广西壮族自治区季节性数据
const guangxiSeasonalData: Record<string, SeasonalScenery> = {
  spring: {
    name: "春季",
    description: "春季的广西，万物复苏，是游览桂林漓江、南宁青秀山的最佳时节",
    image: "https://picsum.photos/id/1049/600/400",
    activities: [
      "桂林漓江游船",
      "南宁青秀山踏青",
      "阳朔西街游览",
      "桂林芦笛岩参观",
    ],
  },
  summer: {
    name: "夏季",
    description: "夏季的广西，气温较高，是游览北海银滩、崇左德天瀑布的好去处",
    image: "https://picsum.photos/id/1050/600/400",
    activities: [
      "北海银滩休闲",
      "崇左德天瀑布观光",
      "桂林漓江漂流",
      "阳朔西街夜游",
    ],
  },
  autumn: {
    name: "秋季",
    description: "秋季的广西，天高气爽，是游览河池巴马梯田、贵港西山的最佳时节",
    image: "https://picsum.photos/id/1051/600/400",
    activities: [
      "河池巴马梯田赏秋",
      "贵港西山登山",
      "桂林七星岩参观",
      "防城港东兴古镇游览",
    ],
  },
  winter: {
    name: "冬季",
    description: "冬季的广西，温暖如春，是游览南宁青秀山、柳州花溪公园的好时节",
    image: "https://picsum.photos/id/1052/600/400",
    activities: [
      "南宁青秀山游览",
      "柳州花溪公园参观",
      "阳朔西街休闲",
      "那桐壮族村体验",
    ],
  },
};

// 广西壮族自治区活动数据
const guangxiActivities: TravelActivity[] = [
  {
    id: "1",
    name: "桂林漓江游船",
    description: "乘坐游船游览桂林漓江，欣赏壮丽的山水风光",
    image: "https://picsum.photos/id/1053/600/400",
    category: "nature",
    location: "广西壮族自治区桂林市灵川县",
    duration: "1天",
    difficulty: "简单",
    type: "休闲体验",
  },
  {
    id: "2",
    name: "北海银滩休闲",
    description: "在北海银滩上享受阳光和海浪，体验各种水上活动",
    image: "https://picsum.photos/id/1054/600/400",
    category: "nature",
    location: "广西壮族自治区北海市银海区",
    duration: "1-2天",
    difficulty: "简单",
    type: "休闲体验",
  },
  {
    id: "3",
    name: "阳朔西街夜游",
    description: "在阳朔西街夜游，感受独特的民俗文化和热闹的氛围",
    image: "https://picsum.photos/id/1055/600/400",
    category: "culture",
    location: "广西壮族自治区桂林市阳朔县",
    duration: "3-4小时",
    difficulty: "简单",
    type: "文化体验",
  },
  {
    id: "4",
    name: "崇左德天瀑布观光",
    description: "参观崇左德天瀑布，欣赏壮丽的自然风光和独特的跨国景观",
    image: "https://picsum.photos/id/1056/600/400",
    category: "nature",
    location: "广西壮族自治区崇左市大新县",
    duration: "1天",
    difficulty: "简单",
    type: "户外活动",
  },
  {
    id: "5",
    name: "广西美食之旅",
    description: "品尝广西特色美食，如桂林米粉、南宁老友粉、北海海鲜等",
    image: "https://picsum.photos/id/1057/600/400",
    category: "culture",
    location: "广西壮族自治区各地",
    duration: "全天",
    difficulty: "简单",
    type: "美食体验",
  },
];

// 广西壮族自治区路线数据
const guangxiRoutes: RouteInfo[] = [
  {
    id: "1",
    name: "广西山水风光之旅",
    title: "广西山水风光之旅",
    description: "游览广西最著名的山水景观",
    duration: "5天",
    difficulty: "中等",
    highlights: ["桂林漓江", "阳朔西街", "崇左德天瀑布", "北海银滩"],
    spots: ["桂林漓江", "阳朔西街", "崇左德天瀑布", "北海银滩"],
    tags: ["自然", "山水", "休闲"],
    image: "https://picsum.photos/id/1058/600/400",
    rating: 4.8,
    bestTime: "春季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
  {
    id: "2",
    name: "广西文化遗产之旅",
    title: "广西文化遗产之旅",
    description: "探索广西的文化遗产",
    duration: "4天",
    difficulty: "简单",
    highlights: ["那桐壮族村", "桂林芦笛岩", "贵港西山", "防城港东兴古镇"],
    spots: ["那桐壮族村", "桂林芦笛岩", "贵港西山", "防城港东兴古镇"],
    tags: ["历史", "文化", "建筑"],
    image: "https://picsum.photos/id/1059/600/400",
    rating: 4.7,
    bestTime: "秋季",
    traffic: "旅游大巴",
    suitableFor: "所有游客",
  },
];

// 广西壮族自治区非物质文化遗产数据
const guangxiIntangibleHeritage = [
  {
    id: "1",
    name: "壮族三月三",
    description:
      "广西壮族自治区壮族传统节日，以其独特的庆祝方式和丰富的内容著称",
    level: "national",
    category: "传统节日",
    heritageType: "民俗",
    protectionUnit: "广西壮族自治区文化和旅游厅",
    tags: ["传统节日", "国家级非遗", "民间艺术"],
    icon: "🎉",
    image: "https://picsum.photos/id/1065/600/400",
    features: ["庆祝方式独特", "内容丰富", "历史悠久"],
  },
  {
    id: "2",
    name: "桂剧",
    description:
      "广西壮族自治区传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    level: "national",
    category: "传统戏剧",
    heritageType: "传统表演艺术",
    protectionUnit: "广西壮族自治区桂剧院",
    tags: ["传统戏剧", "国家级非遗", "民间艺术"],
    icon: "🎭",
    image: "https://picsum.photos/id/1066/600/400",
    features: ["表演独特", "内容丰富", "历史悠久"],
  },
  {
    id: "3",
    name: "壮锦织造技艺",
    description:
      "广西壮族自治区壮族传统织造技艺，以其精美的作品和独特的风格著称",
    level: "national",
    category: "传统技艺",
    heritageType: "传统手工艺",
    protectionUnit: "广西壮族自治区民族博物馆",
    tags: ["传统技艺", "国家级非遗", "民间艺术"],
    icon: "🧵",
    image: "https://picsum.photos/id/1067/600/400",
    features: ["作品精美", "风格独特", "工艺精湛"],
  },
  {
    id: "4",
    name: "瑶族盘王节",
    description:
      "广西壮族自治区瑶族传统节日，以其独特的庆祝方式和丰富的内容著称",
    level: "national",
    category: "传统节日",
    heritageType: "民俗",
    protectionUnit: "广西壮族自治区文化和旅游厅",
    tags: ["传统节日", "国家级非遗", "民间艺术"],
    icon: "🎉",
    image: "https://picsum.photos/id/1068/600/400",
    features: ["庆祝方式独特", "内容丰富", "历史悠久"],
  },
  {
    id: "5",
    name: "侗族大歌",
    description:
      "广西壮族自治区侗族传统民歌，以其独特的演唱形式和丰富的内容著称",
    level: "national",
    category: "传统音乐",
    heritageType: "传统表演艺术",
    protectionUnit: "广西壮族自治区文化和旅游厅",
    tags: ["传统音乐", "国家级非遗", "民间艺术"],
    icon: "🎤",
    image: "https://picsum.photos/id/1069/600/400",
    features: ["演唱独特", "内容丰富", "历史悠久"],
  },
];

// 广西壮族自治区数据
export const guangxiData = {
  overview: {
    totalSpots: 12,
    natureSpots: 7,
    cultureSpots: 5,
    topAttractions: [
      {
        name: "桂林漓江",
        image: "https://picsum.photos/id/1019/600/400",
        description:
          "广西壮族自治区桂林市的著名河流，以其壮丽的山水风光和独特的喀斯特地貌而闻名",
      },
      {
        name: "阳朔西街",
        image: "https://picsum.photos/id/1035/600/400",
        description:
          "广西壮族自治区桂林市阳朔县的著名街道，以其独特的建筑风格和丰富的民俗文化而闻名",
      },
      {
        name: "北海银滩",
        image: "https://picsum.photos/id/1038/600/400",
        description:
          "广西壮族自治区北海市的著名海滩，以其美丽的自然风光和丰富的娱乐设施而闻名",
      },
      {
        name: "崇左德天瀑布",
        image: "https://picsum.photos/id/1039/600/400",
        description:
          "广西壮族自治区崇左市的著名瀑布，以其壮丽的自然风光和独特的跨国景观而闻名",
      },
      {
        name: "桂林芦笛岩",
        image: "https://picsum.photos/id/1037/600/400",
        description:
          "广西壮族自治区桂林市的著名溶洞，以其精美的钟乳石和独特的地质景观而闻名",
      },
    ],
  },
  spots: [...guangxiNatureSpots, ...guangxiCultureSpots],
  seasonal: [
    guangxiSeasonalData.spring,
    guangxiSeasonalData.summer,
    guangxiSeasonalData.autumn,
    guangxiSeasonalData.winter,
  ],
  activities: guangxiActivities,
  routes: guangxiRoutes,
  intangibleHeritage: guangxiIntangibleHeritage,
};

// 广西壮族自治区风俗文化数据
export const guangxiCustomsData = {
  activities: [
    {
      id: "1",
      name: "壮族三月三体验",
      description:
        "体验广西壮族自治区壮族传统节日三月三，感受其独特的庆祝方式和丰富的内容",
      image: "https://picsum.photos/id/1060/600/400",
      category: "culture",
      location: "广西壮族自治区南宁市",
      duration: "1天",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "2",
      name: "桂剧表演欣赏",
      description:
        "欣赏广西壮族自治区传统戏曲艺术桂剧表演，感受其独特的表演形式和丰富的内容",
      image: "https://picsum.photos/id/1061/600/400",
      category: "culture",
      location: "广西壮族自治区桂林市桂剧院",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "3",
      name: "壮锦织造体验",
      description: "学习广西壮族自治区壮族传统织造技艺，体验壮锦的魅力",
      image: "https://picsum.photos/id/1062/600/400",
      category: "culture",
      location: "广西壮族自治区民族博物馆",
      duration: "3-4小时",
      difficulty: "中等",
      type: "文化体验",
    },
    {
      id: "4",
      name: "侗族大歌欣赏",
      description:
        "欣赏广西壮族自治区侗族传统民歌大歌表演，感受其独特的演唱形式和丰富的内容",
      image: "https://picsum.photos/id/1063/600/400",
      category: "culture",
      location: "广西壮族自治区柳州市三江侗族自治县",
      duration: "2-3小时",
      difficulty: "简单",
      type: "文化体验",
    },
    {
      id: "5",
      name: "广西美食之旅",
      description: "品尝广西特色美食，如桂林米粉、南宁老友粉、北海海鲜等",
      image: "https://picsum.photos/id/1064/600/400",
      category: "culture",
      location: "广西壮族自治区各地",
      duration: "全天",
      difficulty: "简单",
      type: "美食体验",
    },
  ],
};

// 广西民俗风情元素数据
export const guangxiFolkCustomsElements = [
  {
    name: "壮族三月三",
    description:
      "广西壮族自治区壮族传统节日，以其独特的庆祝方式和丰富的内容著称",
    image: "https://picsum.photos/id/1070/600/400",
    tags: ["民俗节日", "非遗文化", "壮族特色", "民俗活动", "文化传承"],
  },
  {
    name: "桂剧",
    description:
      "广西壮族自治区传统戏曲艺术，以其独特的表演形式和丰富的内容著称",
    image: "https://picsum.photos/id/1071/600/400",
    tags: ["传统戏曲", "非遗文化", "表演艺术", "地方剧种", "文化遗产"],
  },
  {
    name: "壮锦",
    description:
      "广西壮族自治区壮族传统织造技艺，以其精美的作品和独特的风格著称",
    image: "https://picsum.photos/id/1072/600/400",
    tags: ["传统技艺", "织造艺术", "非遗文化", "壮族特色", "工艺美术"],
  },
  {
    name: "瑶族盘王节",
    description:
      "广西壮族自治区瑶族传统节日，以其独特的庆祝方式和丰富的内容著称",
    image: "https://picsum.photos/id/1073/600/400",
    tags: ["民俗节日", "非遗文化", "瑶族特色", "民俗信仰", "文化传承"],
  },
  {
    name: "侗族大歌",
    description:
      "广西壮族自治区侗族传统民歌，以其独特的演唱形式和丰富的内容著称",
    image: "https://picsum.photos/id/1074/600/400",
    tags: ["传统音乐", "非遗文化", "侗族特色", "民间艺术", "活化石"],
  },
];

// 广西壮族自治区文化节庆数据
export const guangxiFestivals = [
  {
    id: "1",
    name: "壮族三月三",
    description: "广西壮族自治区壮族传统节日",
    month: "3月",
    day: "3日",
    location: "广西壮族自治区各地",
    isUnique: true,
  },
  {
    id: "2",
    name: "桂林山水文化旅游节",
    description: "桂林举行的山水文化旅游节庆活动",
    month: "10月",
    day: "1日",
    location: "广西壮族自治区桂林市",
    isUnique: true,
  },
  {
    id: "3",
    name: "南宁国际民歌艺术节",
    description: "南宁举行的国际民歌艺术节庆活动",
    month: "9月",
    day: "16日",
    location: "广西壮族自治区南宁市",
    isUnique: true,
  },
  {
    id: "4",
    name: "北海国际海滩旅游文化节",
    description: "北海举行的国际海滩旅游文化节庆活动",
    month: "7月",
    day: "1日",
    location: "广西壮族自治区北海市",
    isUnique: true,
  },
  {
    id: "5",
    name: "清明节祭扫",
    description: "传统祭祀祖先的节日",
    month: "4月",
    day: "5日",
    location: "广西壮族自治区各地",
    isUnique: false,
  },
  {
    id: "6",
    name: "中秋节赏月",
    description: "传统节日，家人团聚赏月吃月饼",
    month: "9月",
    day: "21日",
    location: "广西壮族自治区各地",
    isUnique: false,
  },
];

export default guangxiData;

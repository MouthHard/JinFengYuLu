import type {
  SceneryTab,
  CultureTheme,
  BestTime,
  LandscapeType,
} from "@/types/travelGuide";

// 风光页面标签
export const sceneryTabs: SceneryTab[] = [
  {
    id: "overview",
    name: "概览",
    icon: "📋",
  },
  {
    id: "nature",
    name: "自然风光",
    icon: "🌿",
  },
  {
    id: "culture",
    name: "人文风光",
    icon: "🎭",
  },
  {
    id: "customs",
    name: "风俗文化",
    icon: "🎪",
  },
];

// 文化主题
export const cultureThemes: CultureTheme[] = [
  { value: "", name: "全部主题", icon: "🎭" },
  { value: "historical", name: "历史古迹", icon: "🏛️" },
  { value: "religious", name: "宗教文化", icon: "🕌" },
  { value: "folk", name: "民俗风情", icon: "🎪" },
  { value: "art", name: "艺术文化", icon: "🎨" },
  { value: "modern", name: "现代文化", icon: "🌆" },
];

// 最佳时�?export const bestTimes: BestTime[] = [
  { value: "", name: "全部时间", icon: "⏰" },
  { value: "spring", name: "春季", icon: "🌸" },
  { value: "summer", name: "夏季", icon: "☀️" },
  { value: "autumn", name: "秋季", icon: "🍁" },
  { value: "winter", name: "冬季", icon: "❄️" },
];

// 景观类型
export const landscapeTypes: LandscapeType[] = [
  { value: "", label: "全部类型", icon: "🌿" },
  {
    value: "geographic",
    label: "地理景观",
    icon: "⛰️",
    children: [
      { value: "mountain", label: "山地景观", icon: "⛰️" },
      { value: "karst", label: "喀斯特景观", icon: "🏞️" },
      { value: "desert", label: "风沙景观", icon: "🏜️" },
      { value: "loess", label: "黄土景观", icon: "🟤" },
      { value: "volcano", label: "火山景观", icon: "🌋" },
      { value: "earthquake", label: "地震遗迹景观", icon: "⚡" },
      { value: "coastal", label: "海岸景观", icon: "🌊" },
      { value: "island", label: "岛屿景观", icon: "🏝️" },
      { value: "canyon", label: "峡谷景观", icon: "🏞️" },
      { value: "plateau", label: "高原景观", icon: "🏔️" },
      { value: "plain", label: "平原景观", icon: "🌾" },
      { value: "cave", label: "洞穴景观", icon: "🕳️" },
    ],
  },
  {
    value: "water",
    label: "水景�?,
    icon: "🌊",
    children: [
      { value: "river", label: "河流景观", icon: "🌊" },
      { value: "lake", label: "湖泊景观", icon: "🏞️" },
      { value: "waterfall", label: "瀑布景观", icon: "💦" },
      { value: "spring", label: "泉水景观", icon: "⛲" },
      { value: "ocean", label: "海洋景观", icon: "🌊" },
      { value: "glacier", label: "冰川景观", icon: "❄️" },
      { value: "hot-spring", label: "温泉景观", icon: "♨️" },
      { value: "wetland", label: "湿地景观", icon: "🌾" },
      { value: "reservoir", label: "水库景观", icon: "💧" },
      { value: "tide", label: "潮汐景观", icon: "🌊" },
      { value: "coral-reef", label: "珊瑚礁景观", icon: "🪸" },
    ],
  },
  {
    value: "atmospheric",
    label: "大气景观",
    icon: "☁️",
    children: [
      { value: "rain", label: "雨景", icon: "🌧️" },
      { value: "cloud", label: "云景", icon: "☁️" },
      { value: "snow", label: "冰雪景", icon: "❄️" },
      { value: "rime", label: "雾凇景", icon: "🌨️" },
      { value: "rainbow", label: "彩虹景", icon: "🌈" },
      { value: "mirage", label: "海市蜃楼景", icon: "🌅" },
      { value: "buddha-light", label: "佛光", icon: "✨" },
      { value: "sunrise", label: "日出景", icon: "🌅" },
      { value: "sunset", label: "日落景", icon: "🌇" },
      { value: "fog", label: "雾景", icon: "🌫️" },
      { value: "mist", label: "薄雾景", icon: "🌫️" },
      { value: "aurora", label: "极光景", icon: "Aurora" },
      { value: "lightning", label: "闪电景", icon: "⚡" },
    ],
  },
  {
    value: "biological",
    label: "生物景观",
    icon: "🌱",
    children: [
      {
        value: "plant",
        label: "植物景观",
        icon: "🌲",
        children: [
          { value: "forest", label: "森林景观", icon: "🌲" },
          { value: "meadow", label: "草原景观", icon: "🌾" },
          { value: "flower", label: "花卉景观", icon: "🌸" },
          { value: "bamboo", label: "竹林景观", icon: "🎍" },
          { value: "cactus", label: "仙人掌景观", icon: "🌵" },
          { value: "mangrove", label: "红树林景观", icon: "🌿" },
        ],
      },
      {
        value: "animal",
        label: "动物景观",
        icon: "🐾",
        children: [
          { value: "bird", label: "鸟类景观", icon: "🐦" },
          { value: "mammal", label: "哺乳动物景观", icon: "🐻" },
          { value: "aquatic", label: "水生动物景观", icon: "🐟" },
          { value: "insect", label: "昆虫景观", icon: "🐛" },
          { value: "butterfly", label: "蝴蝶景观", icon: "🦋" },
        ],
      },
    ],
  },
  {
    value: "astronomical",
    label: "天文景观",
    icon: "🌟",
    children: [
      { value: "white-night", label: "白夜景观", icon: "🌙" },
      { value: "sun-moon", label: "日月共存", icon: "🌞🌙" },
      { value: "starry-sky", label: "星空景观", icon: "✨" },
      { value: "meteor-shower", label: "流星雨景观", icon: "🌠" },
      { value: "eclipse", label: "日食月食景观", icon: "🌑" },
      { value: "comet", label: "彗星景观", icon: "☄️" },
      { value: "aurora-borealis", label: "北极光景观", icon: "Aurora" },
      { value: "aurora-australis", label: "南极光景观", icon: "Aurora" },
    ],
  },
];

// 季节
export const seasons = [
  { value: "", label: "全部季节", icon: "🌍" },
  { value: "spring", label: "春季", icon: "🌸" },
  { value: "summer", name: "夏季", icon: "☀️" },
  { value: "autumn", label: "秋季", icon: "🍁" },
  { value: "winter", label: "冬季", icon: "❄️" },
];

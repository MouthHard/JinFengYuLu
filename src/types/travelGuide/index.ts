// 省份接口
export interface Province {
  id: string;
  name: string;
  abbreviation: string;
  region: string;
  capital: string;
  description: string;
  tags?: string[];
}

// 标签页接口
export interface Tab {
  id: string;
  name: string;
  icon: any;
}

// 美食推荐接口
export interface FoodRecommendation {
  pairings: string[];
  eatingMethod: string;
}

// 美食接口
export interface Food {
  id: string;
  name: string;
  rating: number;
  isPopular: boolean;
  tags: string[];
  openingHours?: string;
  address?: string;
  description?: string;
  images?: string[];
  category?: string;
  price?: number;
  badgeText?: string;
  badgeColor?: string;
  image?: string;
  recommendations?: FoodRecommendation;
}

// 美食地图位置接口
export interface FoodMapLocation {
  id: string;
  name: string;
  address: string;
  rating: number;
  foods: string[];
  coordinates?: { x: number; y: number };
}

// 美食分类接口
export interface FoodCategory {
  id: number;
  name: string;
  icon: string;
  count: number;
}

// 风光景点接口
export interface ScenerySpot {
  id: string;
  name: string;
  type: "nature" | "culture";
  landscapeType?: string;
  description: string;
  location: string;
  tags: string[];
  images: string[];
  rating?: number;
  isPopular?: boolean;
  bestTime?: string;
  landscapeCategory?: string[];
  landformTags?: string[];
}

// 季节性风光接口
export interface SeasonalScenery {
  name: string;
  description: string;
  image: string;
  activities: string[];
}

// 旅游活动接口
export interface TravelActivity {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  location: string;
  duration: string;
  difficulty: string;
  type: string;
}

// 路线信息接口
export interface RouteInfo {
  id: string;
  name: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  highlights: string[];
  spots: string[];
  tags: string[];
  image: string;
  rating: number;
  bestTime: string;
  traffic: string;
  suitableFor: string;
}

// 非物质文化遗产接口
export interface IntangibleHeritage {
  id: string;
  name: string;
  level: string;
  description: string;
  image: string;
  category: string;
  heritageType: string;
  protectionUnit: string;
  tags: string[];
  icon: string;
  features: string[];
  views?: number;
  likes?: number;
  rating?: number;
}

// 民俗风情元素接口
export interface FolkCustomsElement {
  icon: string;
  name: string;
  description: string;
}

// 文化节庆接口
export interface Festival {
  id: string;
  name: string;
  description: string;
  location: string;
  month: string;
  day: string;
}

// 风光概览接口
export interface SceneryOverview {
  totalSpots: number;
  natureSpots: number;
  cultureSpots: number;
  topAttractions: Array<{
    name: string;
    image: string;
    description: string;
  }>;
}

// 风光数据接口
export interface SceneryData {
  overview: SceneryOverview;
  spots: ScenerySpot[];
  seasonal: SeasonalScenery[];
  activities: TravelActivity[];
  routes: RouteInfo[];
  intangibleHeritage?: IntangibleHeritage[];
}

// 美食数据接口
export interface FoodData {
  [provinceId: string]: Food[];
}

// 美食地图数据接口
export interface FoodLocationData {
  [provinceId: string]: FoodMapLocation[];
}

// 景观类型接口
export interface LandscapeType {
  value: string;
  label: string;
  icon: string;
  children?: LandscapeType[];
}

// 文化主题接口
export interface CultureTheme {
  value: string;
  name: string;
  icon: string;
}

// 最佳时间接口
export interface BestTime {
  value: string;
  name: string;
  icon: string;
}

// 星期数据接口
export interface Weekday {
  value: string;
  label: string;
}

// 风光标签页接口
export interface SceneryTab {
  id: string;
  name: string;
  icon: string;
}

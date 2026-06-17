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

// 美食项接口（用于 foodData）
export interface FoodItem {
  id: string;
  name: string;
  description?: string;
  image: string;
  isPopular?: boolean;
  price: string | number;
  rating: number;
  category: string;
  badgeText?: string;
  badgeColor?: string;
  tags?: string[];
  province?: string;
  taste?: string;
  ingredients?: string[];
  cookingMethod?: string;
  nameEn?: string;
  history?: string;
  bestRestaurant?: string;
  recommendations?: {
    pairings?: string[];
    eatingMethod?: string;
  };
}

// 美食位置接口（用于 foodLocations）
export interface FoodLocation {
  id: number | string;
  name: string;
  location: string;
  type: string;
  icon: string;
  image: string;
  foods: string[];
  reason: string;
  rank?: number;
  rating?: number;
  address?: string;
  openingHours?: string;
  specialties?: string[];
  bestTimeToVisit?: string;
  provinceId?: string;
  provinceName?: string;
}

// 美食接口
export interface Food {
  id: string;
  name: string;
  rating: number;
  isPopular?: boolean;
  tags?: string[];
  openingHours?: string;
  address?: string;
  description?: string;
  images?: string[];
  category?: string;
  price?: string | number;
  badgeText?: string;
  badgeColor?: string;
  image?: string;
  recommendations?: {
    pairings?: string[];
    eatingMethod?: string;
  };
}

// 美食街道接口
export interface FoodStreet {
  id: string;
  name: string;
  description?: string;
  image: string;
  location: string;
  province?: string;
  provinceId?: string;
  provinceName?: string;
  city?: string;
  foods?: string[];
  rating?: number;
  tags?: string[];
  type?: string;
  icon?: string;
  reason?: string;
  rank?: number;
  address?: string;
  openingHours?: string;
  specialties?: string[];
  bestTimeToVisit?: string;
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
  description: string;
  image: string;
  location: string;
  type: "nature" | "culture";
  bestTime: string;
  tags: string[];
  rating?: number;
  landscapeType?: string;
  landscapeCategory?: string[];
  landformTags?: string[];
  cultureType?: string;
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
  seasonal: Array<{
    name: string;
    description: string;
    image: string;
    activities: string[];
  }>;
  activities: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    location: string;
    duration: string;
    difficulty: string;
    type: string;
  }>;
  routes: Array<{
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
  }>;
  intangibleHeritage?: Array<{
    id: string;
    name: string;
    level: string;
    description: string;
    image: string;
    category: string;
    heritageType?: string;
    protectionUnit: string;
    tags?: string[];
    icon: string;
    features: string[];
    views?: number;
    likes?: number;
    rating?: number;
  }>;
  festivals?: any[];
  folkCustomsElements?: any[];
}

// 景观类型接口
export interface LandscapeType {
  value: string;
  label: string;
  icon: string;
  name?: string;
  description?: string;
  children?: LandscapeType[];
}

// 文化主题接口
export interface CultureTheme {
  value: string;
  name: string;
  icon: string;
  description?: string;
}

// 最佳时间接口
export interface BestTime {
  value: string;
  name: string;
  icon: string;
}

// 风光标签页接口
export interface SceneryTab {
  id: string;
  name: string;
  icon: string;
}

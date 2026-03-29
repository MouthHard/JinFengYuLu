// 历史人物背景内容接口
export interface BackContent {
  era: string;
  contribution: string;
  influence: string;
  funFact: string;
  relatedFigures: string[];
}

// 历史人物接口
export interface HistoricalFigure {
  id: string;
  name: string;
  dynasty: string;
  category: string;
  title: string;
  brief: string;
  description: string;
  achievements: string[];
  quotes: string;
  portraitUrl: string;
  tags: string[];
  backContent?: BackContent;
}

// 朝代接口
export interface Dynasty {
  id: string;
  name: string;
  period: string;
  era: string;
  periodTag: string;
  isUnified?: boolean;
  description?: string;
  highlights?: string[];
  mapUrl?: string;
  mapDescription?: string;
  capital?: string;
  location?: string;
  ethnicGroup?: string;
  founder?: string;
  startYear?: number;
  endYear?: number;
}

// 历史事件接口
export interface HistoricalEvent {
  id: string;
  name: string;
  year: string;
  dynasty: string;
  description: string;
  significance: string;
  relatedFigures: string[];
  category: string;
  imageUrl?: string;
}

// 文化遗产接口
export interface CulturalHeritageItem {
  id: string;
  name: string;
  type: "intangible" | "tangible";
  location: string;
  dynasty: string;
  description: string;
  significance: string;
  preservationStatus: string;
  imageUrl?: string;
  tags: string[];
  category?: string;
  level?: string;
}

// 导航项接口
export interface NavItem {
  id: string;
  name: string;
  icon: any;
}

// 分类接口
export interface Category {
  label: string;
  value: string;
}

// 分页配置接口
export interface PaginationConfig {
  currentPage: number;
  pageSize: number;
  total: number;
}

// 筛选选项接口
export interface FilterOptions {
  category?: string;
  dynasty?: string;
  searchQuery?: string;
}

// 排序选项接口
export interface SortOptions {
  field: string;
  order: "asc" | "desc";
}

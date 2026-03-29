// 博物馆类型定义
export interface Museum {
  id: number;
  name: string;
  province: string;
  type: string;
  image: string;
  description: string;
  artifacts: number;
  exhibitions: number;
  visitors: number;
  features: string[];
}

// 文物类型定义
export interface Artifact {
  id: number;
  museumId: number;
  name: string;
  period: string;
  image: string;
  description?: string;
  category?: string;
}

// 展览类型定义
export interface Exhibition {
  id: number;
  museumId: number;
  title: string;
  description: string;
  date: string;
  image: string;
  location?: string;
  category?: string;
}

// 活动类型定义
export interface Activity {
  id: number;
  museumId: number;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  image: string;
}

// 新闻类型定义
export interface News {
  id: number;
  museumId: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

// 沉浸式体验类型定义
export interface ImmersiveExperience {
  id: number;
  museumId: number;
  title: string;
  description: string;
  image: string;
}

// 文创产品类型定义
export interface CreativeProduct {
  id: number;
  museumId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

// 学术资源类型定义
export interface AcademicResource {
  id: number;
  museumId: number;
  title: string;
  author?: string;
  date: string;
  type: "article" | "book" | "video";
  description: string;
  link?: string;
}

// 文物详细信息接口
export interface ArtifactDetail {
  id: number;
  name: string;
  period: string;
  description: string;
  image: string;
  type?: string;
  basicInfo?: {
    periodDetail?: string;
    material?: string;
    dimensions?: string;
    collection?: string;
    excavation?: string;
  };
  appearance?: string;
  historicalValue?: string;
  artifactLevel?: string; // 文物等级
  relatedStory?: string; // 相关故事
  protectionStatus?: string; // 保护现状
  culturalSignificance?: string; // 文化意义
}

// 文物类型选项接口
export interface ArtifactTypeOption {
  label: string;
  value: string;
}

// 年代选项接口
export interface PeriodOption {
  label: string;
  value: string;
}

// 展览分类接口
export interface ExhibitionCategory {
  id: number;
  name: string;
  count: number;
  icon: string;
}

// 专馆数据接口
export interface ExhibitionHall {
  id: string;
  name: string;
  icon: string;
  category: string;
  coverImage: string;
  introduction: string;
  stats: {
    artifacts: number;
    exhibitions: number;
    visitors: number;
  };
  location: string;
  openTime: string;
  duration: string;
  ticket: string;
  artifacts: Array<{
    name: string;
    period: string;
    description: string;
    image: string;
  }>;
  exhibitions: Array<{
    title: string;
    date: string;
    description: string;
    status: string;
    statusText: string;
    image: string;
    tags: string[];
  }>;
  recommendations: Array<{
    icon: string;
    title: string;
    desc: string;
    type: string;
  }>;
}

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

// 开放时间信息
export interface OpenTimeInfo {
  regularTime: string; // 常规时间
  stopEntryTime: string; // 停止入馆时间
  closeDay: string; // 闭馆日
  holidayNotice?: string; // 节假日公告
}

// 票务信息
export interface TicketInfo {
  price: string; // 门票价格
  isFree: boolean; // 是否免费
  needReservation: boolean; // 是否需要预约
  idRequired?: string; // 证件要求
  discountPolicy?: string[]; // 优惠政策
}

// 参观须知
export interface VisitRules {
  allowed: string[]; // 允许的行为
  forbidden: string[]; // 禁止的行为
}

// 交通信息
export interface TransportationInfo {
  address: string; // 地址
  metro?: string; // 地铁信息
  bus?: string; // 公交信息
  parking?: string; // 停车信息
}

// 服务设施
export interface ServiceFacilities {
  hasGuide: boolean; // 讲解服务
  hasStorage: boolean; // 物品寄存
  hasRestaurant: boolean; // 餐饮服务
  hasAccessibility: boolean; // 无障碍设施
  hasRestArea: boolean; // 休息区
  hasWiFi: boolean; // 免费WiFi
  otherServices?: string[]; // 其他服务
}

// 联系方式
export interface ContactInfo {
  phone: string; // 咨询电话
  email?: string; // 电子邮箱
  complaintPhone?: string; // 投诉建议电话
  website?: string; // 官方网站
}

// 参观信息（用于AboutSection）
export interface MuseumVisitInfo {
  openTime: OpenTimeInfo | string; // 开放时间
  ticket: TicketInfo | string; // 票务信息
  rules?: VisitRules; // 参观须知
  transportation?: TransportationInfo; // 交通指南
  services?: ServiceFacilities; // 服务设施
  contact?: ContactInfo; // 联系方式
}

export interface MuseumDetailInfo {
  museumId: number;
  visitInfo: MuseumVisitInfo;
  history: string; // 历史沿革
  architecture: string; // 建筑特色
  highlights: string; // 重要馆藏
  education: string; // 教育活动
}

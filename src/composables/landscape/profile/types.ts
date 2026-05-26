export interface ProfileItem {
  type: string;
  data: any;
  id: string;
  globalIndex: number;
}

export interface DisplayCounts {
  likes: number;
  loves: number;
  favorites: number;
  shares: number;
  views: number;
}

export interface BaseItemData {
  id: string;
  title: string;
  thumbnail: string;
  image: string;
  location: string;
  category: string;
  likes: number;
  loves: number;
  views: number;
  favorites: number;
  shares: number;
  icon?: string;
  quality?: string;
  duration?: string;
}

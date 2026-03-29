export interface IntangibleHeritage {
  id: string;
  name: string;
  description: string;
  level: "national" | "provincial" | "municipal";
  category: string;
  heritageType?: string;
  protectionUnit: string;
  tags?: string[];
  icon: string;
  image: string;
  features: string[];
  views?: number;
  likes?: number;
  rating?: number;
}

export interface HeritageFilter {
  level?: "national" | "provincial" | "municipal" | "all";
  category?: string;
  sortBy?: "name" | "rating" | "views" | "likes";
  sortOrder?: "asc" | "desc";
}

export interface HeritageStats {
  views: number;
  likes: number;
  rating: number;
}

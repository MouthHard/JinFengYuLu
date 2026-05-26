export type GameCategory = 'action' | 'rpg' | 'strategy' | 'adventure' | 'fps' | 'simulation' | 'sports' | 'puzzle' | 'horror' | 'indie';

export type GamePlatform = 'pc' | 'ps5' | 'ps4' | 'xbox' | 'switch' | 'mobile';

export type GameTag = 'hot' | 'new' | 'sale' | 'coming' | 'free' | 'premium' | 'editor-choice' | 'multiplayer';

export interface GameItem {
  id: string;
  title: string;
  subtitle?: string;
  cover: string;
  banner?: string;
  screenshots?: string[];
  category: GameCategory;
  tags: GameTag[];
  platforms: GamePlatform[];
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  developer: string;
  publisher: string;
  releaseDate: string;
  description: string;
  features?: string[];
  systemRequirements?: {
    minimum: string;
    recommended: string;
  };
  isOwned?: boolean;
  isWishlisted?: boolean;
}

export interface GameBanner {
  id: string;
  gameId: string;
  image: string;
  title: string;
  subtitle: string;
  tag?: GameTag;
}

export interface GameCategoryInfo {
  key: GameCategory;
  label: string;
  icon: string;
}

export interface GameFilter {
  category: GameCategory | 'all';
  tag: GameTag | 'all';
  platform: GamePlatform | 'all';
  priceRange: 'all' | 'free' | 'under50' | 'under100' | 'over100';
  sortBy: 'popular' | 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'discount';
}

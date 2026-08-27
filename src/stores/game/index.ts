import { defineStore } from 'pinia';
import {
  fetchGames,
  fetchGameBanners,
  fetchGameCategories,
} from '@/services/game';
import type {
  GameItemResponse,
  GameBannerItem,
  GameCategoryItem,
} from '@/services/game';

interface CartItem {
  gameId: string;
  addedAt: number;
}

/** 游戏 Store 最小接口——只要包含 id 和 price 即可 */
interface GameLike {
  id: string;
  price: number;
}

/** 初始已拥有游戏 id（迁移自静态数据 isOwned 演示状态） */
const INITIAL_OWNED_IDS = ['stardew-valley-remake', 'iron-tides', 'pixel-kingdom'];

interface GameState {
  wishlist: Set<string>;
  cart: CartItem[];
  owned: Set<string>;
  games: GameItemResponse[];
  banners: GameBannerItem[];
  categories: GameCategoryItem[];
  dataLoaded: boolean;
  dataLoading: boolean;
}

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    wishlist: new Set(),
    cart: [],
    owned: new Set(),
    games: [],
    banners: [],
    categories: [],
    dataLoaded: false,
    dataLoading: false,
  }),

  getters: {
    isInWishlist: (state) => (gameId: string) => state.wishlist.has(gameId),
    
    isInCart: (state) => (gameId: string) => 
      state.cart.some(item => item.gameId === gameId),
    
    isOwned: (state) => (gameId: string) => state.owned.has(gameId),
    
    cartCount: (state) => state.cart.length,
    
    wishlistCount: (state) => state.wishlist.size,
    
    ownedCount: (state) => state.owned.size,
    
    cartItems: (state) => state.cart,
    
    wishlistItems: (state) => Array.from(state.wishlist),
    
    ownedItems: (state) => Array.from(state.owned),

    categoryLabelMap: (state): Record<string, string> =>
      state.categories.reduce((map, c) => {
        map[c.key] = c.label;
        return map;
      }, {} as Record<string, string>),

    getGameById: (state) => (gameId: string) =>
      state.games.find(g => g.id === gameId),

  },

  actions: {
    async loadGames(): Promise<void> {
      const res = await fetchGames({ limit: 100 });
      this.games = res.items;
      if (this.owned.size === 0) {
        INITIAL_OWNED_IDS.forEach(id => this.owned.add(id));
      }
    },

    async loadBanners(): Promise<void> {
      this.banners = await fetchGameBanners();
    },

    async loadCategories(): Promise<void> {
      this.categories = await fetchGameCategories();
    },

    async loadAll(): Promise<void> {
      if (this.dataLoaded || this.dataLoading) return;
      this.dataLoading = true;
      try {
        await Promise.all([
          this.loadGames(),
          this.loadBanners(),
          this.loadCategories(),
        ]);
        this.dataLoaded = true;
      } finally {
        this.dataLoading = false;
      }
    },

    async ensureDataLoaded(): Promise<void> {
      if (!this.dataLoaded) {
        await this.loadAll();
      }
    },

    toggleWishlist(gameId: string): boolean {
      if (this.wishlist.has(gameId)) {
        this.wishlist.delete(gameId);
        return false;
      } else {
        this.wishlist.add(gameId);
        return true;
      }
    },

    addToWishlist(gameId: string): void {
      this.wishlist.add(gameId);
    },

    removeFromWishlist(gameId: string): void {
      this.wishlist.delete(gameId);
    },

    addToCart(gameId: string): boolean {
      if (this.cart.some(item => item.gameId === gameId)) {
        return false;
      }
      if (this.owned.has(gameId)) {
        return false;
      }
      this.cart.push({
        gameId,
        addedAt: Date.now(),
      });
      return true;
    },

    removeFromCart(gameId: string): void {
      const index = this.cart.findIndex(item => item.gameId === gameId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },

    clearCart(): void {
      this.cart = [];
    },

    purchaseGames(gameIds: string[]): void {
      gameIds.forEach(id => {
        this.owned.add(id);
        this.wishlist.delete(id);
        const cartIndex = this.cart.findIndex(item => item.gameId === id);
        if (cartIndex !== -1) {
          this.cart.splice(cartIndex, 1);
        }
      });
    },

    purchaseCart(): string[] {
      const purchasedIds = this.cart.map(item => item.gameId);
      this.purchaseGames(purchasedIds);
      return purchasedIds;
    },

    toggleOwned(gameId: string): boolean {
      if (this.owned.has(gameId)) {
        this.owned.delete(gameId);
        return false;
      } else {
        this.owned.add(gameId);
        this.wishlist.delete(gameId);
        const cartIndex = this.cart.findIndex(item => item.gameId === gameId);
        if (cartIndex !== -1) {
          this.cart.splice(cartIndex, 1);
        }
        return true;
      }
    },

    getCartTotal<T extends GameLike>(games: T[]): number {
      return this.cart.reduce((total, item) => {
        const game = games.find(g => g.id === item.gameId);
        return total + (game?.price || 0);
      }, 0);
    },

    getCartGames<T extends GameLike>(games: T[]): T[] {
      return this.cart
        .map(item => games.find(g => g.id === item.gameId))
        .filter((g): g is T => g !== undefined);
    },

    getWishlistGames<T extends GameLike>(games: T[]): T[] {
      return games.filter(g => this.wishlist.has(g.id));
    },

    getOwnedGames<T extends GameLike>(games: T[]): T[] {
      return games.filter(g => this.owned.has(g.id));
    },
  },
});

export type { GameState, CartItem };

import { defineStore } from 'pinia';
import type { GameItem } from '@/typesOfPages/game';

interface CartItem {
  gameId: string;
  addedAt: number;
}

interface GameState {
  wishlist: Set<string>;
  cart: CartItem[];
  owned: Set<string>;
}

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    wishlist: new Set(),
    cart: [],
    owned: new Set(),
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
  },

  actions: {
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

    initializeFromData(games: GameItem[]): void {
      games.forEach(game => {
        if (game.isWishlisted) {
          this.wishlist.add(game.id);
        }
        if (game.isOwned) {
          this.owned.add(game.id);
        }
      });
    },

    getCartTotal(games: GameItem[]): number {
      return this.cart.reduce((total, item) => {
        const game = games.find(g => g.id === item.gameId);
        return total + (game?.price || 0);
      }, 0);
    },

    getCartGames(games: GameItem[]): GameItem[] {
      return this.cart
        .map(item => games.find(g => g.id === item.gameId))
        .filter((g): g is GameItem => g !== undefined);
    },

    getWishlistGames(games: GameItem[]): GameItem[] {
      return games.filter(g => this.wishlist.has(g.id));
    },

    getOwnedGames(games: GameItem[]): GameItem[] {
      return games.filter(g => this.owned.has(g.id));
    },
  },
});

export type { GameState, CartItem };

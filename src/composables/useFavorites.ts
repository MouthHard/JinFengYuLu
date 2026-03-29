import { ref, computed } from "vue";

export interface UseFavoritesOptions {
  storageKey?: string;
  persist?: boolean;
}

export function useFavorites<T extends { id: string }>(
  options: UseFavoritesOptions = {},
) {
  const { storageKey, persist = false } = options;

  const favorites = ref(new Set<string>());

  const isFavorite = (id: string): boolean => {
    return favorites.value.has(id);
  };

  const toggleFavorite = (id: string): void => {
    if (isFavorite(id)) {
      favorites.value.delete(id);
    } else {
      favorites.value.add(id);
    }

    if (persist && storageKey) {
      localStorage.setItem(storageKey, JSON.stringify([...favorites.value]));
    }
  };

  const favoriteCount = computed(() => favorites.value.size);

  const clearFavorites = (): void => {
    favorites.value.clear();
    if (persist && storageKey) {
      localStorage.removeItem(storageKey);
    }
  };

  const loadFavorites = (): void => {
    if (persist && storageKey) {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as string[];
          favorites.value = new Set(parsed);
        } catch {
          favorites.value = new Set();
        }
      }
    }
  };

  if (persist) {
    loadFavorites();
  }

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    favoriteCount,
    clearFavorites,
    loadFavorites,
  };
}

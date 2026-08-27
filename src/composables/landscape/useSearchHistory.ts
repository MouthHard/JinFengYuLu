import { ref } from 'vue';

const STORAGE_KEY = 'landscape-search-history';
const MAX_HISTORY = 50;

const history = ref<string[]>([]);

function loadHistory() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      history.value = JSON.parse(saved);
    }
  } catch {
    history.value = [];
  }
}

function saveHistory() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.value));
  } catch {
    // ignore
  }
}

loadHistory();

export function useSearchHistory() {
  const addHistory = (keyword: string) => {
    const trimmed = keyword.trim();
    if (!trimmed || trimmed.length < 2) return;
    history.value = [trimmed, ...history.value.filter(h => h !== trimmed)].slice(0, MAX_HISTORY);
    saveHistory();
  };

  const removeHistory = (keyword: string) => {
    history.value = history.value.filter(h => h !== keyword);
    saveHistory();
  };

  const clearHistory = () => {
    history.value = [];
    saveHistory();
  };

  return {
    history,
    addHistory,
    removeHistory,
    clearHistory,
  };
}
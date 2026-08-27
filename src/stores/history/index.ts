import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  fetchDynasties,
  fetchEvents,
  fetchFigures,
  fetchHeritage,
} from '@/services/history';
import type {
  Dynasty,
  HistoricalEvent,
  HistoricalFigure,
  CulturalHeritageItem,
} from '@/types/history';

export const useHistoryDataStore = defineStore('historyData', () => {
  const dynasties = ref<Dynasty[]>([]);
  const events = ref<HistoricalEvent[]>([]);
  const figures = ref<HistoricalFigure[]>([]);
  const heritage = ref<CulturalHeritageItem[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const loaded = ref(false);

  async function loadAll() {
    if (loaded.value || loading.value) return;
    loading.value = true;
    error.value = null;
    try {
      const [dynRes, evtRes, figRes, herRes] = await Promise.all([
        fetchDynasties(),
        fetchEvents(),
        fetchFigures(),
        fetchHeritage(),
      ]);
      dynasties.value = dynRes.items;
      events.value = evtRes.items;
      figures.value = figRes.items;
      heritage.value = herRes.items;
      loaded.value = true;
    } catch (e) {
      error.value = e instanceof Error ? e.message : '加载失败';
      dynasties.value = [];
      events.value = [];
      figures.value = [];
      heritage.value = [];
    } finally {
      loading.value = false;
    }
  }

  async function ensureLoaded() {
    if (!loaded.value) {
      await loadAll();
    }
  }

  return {
    dynasties,
    events,
    figures,
    heritage,
    loading,
    error,
    loaded,
    loadAll,
    ensureLoaded,
  };
});

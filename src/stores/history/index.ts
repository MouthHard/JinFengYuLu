import { defineStore } from 'pinia';
import { computed } from 'vue';
// 业务数据从 data 层导入
import { dynastiesData } from './data/dynasties';
import { historicalEvents } from './data/events';
import {
  historicalFigures,
  figureWorksMap,
  figureEvaluationTagsMap,
} from './data/figures';
import { culturalHeritage } from './data/heritage';
import type { CulturalHeritageItem } from './data/heritage';
// 常量（分类体系）从 constants 导入
import { DYNASTY_CATEGORIES } from '@/constants/History';

export type { CulturalHeritageItem };
export { DYNASTY_CATEGORIES };

export const useHistoryDataStore = defineStore('historyData', () => {
  const dynastyMap = computed(() => {
    const map = new Map<string, (typeof dynastiesData)[0]>();
    dynastiesData.forEach((dynasty) => {
      map.set(dynasty.id, dynasty);
    });
    return map;
  });

  const eventMap = computed(() => {
    const map = new Map<string, (typeof historicalEvents)[0]>();
    historicalEvents.forEach((event) => {
      map.set(event.id, event);
    });
    return map;
  });

  const figureMap = computed(() => {
    const map = new Map<string, (typeof historicalFigures)[0]>();
    historicalFigures.forEach((figure) => {
      map.set(figure.id, figure);
    });
    return map;
  });

  const heritageMap = computed(() => {
    const map = new Map<string, CulturalHeritageItem>();
    culturalHeritage.forEach((item) => {
      map.set(item.id, item);
    });
    return map;
  });

  function getAllDynasties() {
    return dynastiesData;
  }

  function getAllEvents() {
    return historicalEvents;
  }

  function getAllFigures() {
    return historicalFigures;
  }

  function getAllHeritage() {
    return culturalHeritage;
  }

  function getDynasty(id: string) {
    return dynastyMap.value.get(id);
  }

  function getEvent(id: string) {
    return eventMap.value.get(id);
  }

  function getFigure(id: string) {
    return figureMap.value.get(id);
  }

  function getHeritageItem(id: string) {
    return heritageMap.value.get(id);
  }

  function getEventsByCategory(category: string) {
    return historicalEvents.filter((event) => event.category === category);
  }

  function getFiguresByCategory(category: string) {
    return historicalFigures.filter((figure) => figure.category === category);
  }

  function getHeritageByCategory(category: string) {
    return culturalHeritage.filter((item) => item.category === category);
  }

  function searchEvents(keyword: string) {
    const lowerKeyword = keyword.toLowerCase();
    return historicalEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(lowerKeyword) ||
        event.brief.toLowerCase().includes(lowerKeyword) ||
        event.description.toLowerCase().includes(lowerKeyword) ||
        event.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword)),
    );
  }

  function searchFigures(keyword: string) {
    const lowerKeyword = keyword.toLowerCase();
    return historicalFigures.filter(
      (figure) =>
        figure.name.toLowerCase().includes(lowerKeyword) ||
        figure.brief.toLowerCase().includes(lowerKeyword) ||
        figure.description.toLowerCase().includes(lowerKeyword) ||
        figure.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword)),
    );
  }

  function searchHeritage(keyword: string) {
    const lowerKeyword = keyword.toLowerCase();
    return culturalHeritage.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerKeyword) ||
        item.brief.toLowerCase().includes(lowerKeyword) ||
        item.description.toLowerCase().includes(lowerKeyword) ||
        item.location.toLowerCase().includes(lowerKeyword),
    );
  }

  function getFigureWorks(figureId: string) {
    return figureWorksMap[figureId];
  }

  function getFigureEvaluationTags(figureId: string) {
    return figureEvaluationTagsMap[figureId] || [];
  }

  return {
    getAllDynasties,
    getAllEvents,
    getAllFigures,
    getAllHeritage,
    getDynasty,
    getEvent,
    getFigure,
    getHeritageItem,
    getEventsByCategory,
    getFiguresByCategory,
    getHeritageByCategory,
    searchEvents,
    searchFigures,
    searchHeritage,
    getFigureWorks,
    getFigureEvaluationTags,
    dynastyMap,
    eventMap,
    figureMap,
    heritageMap,
  };
});

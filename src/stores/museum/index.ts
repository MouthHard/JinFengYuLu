/**
 * 博物馆数�?Store
 * 模式对齐 useAphorismDataStore：页面通过 Store 消费 API，不直接读静�?data
 */
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  fetchMuseums,
  fetchMuseumById,
  fetchMuseumDetail,
  fetchArtifacts,
  fetchArtifactDetail,
  fetchExhibitions,
  fetchActivities,
  fetchNews,
  fetchImmersive,
  fetchCreativeProducts,
  fetchAcademicResources,
  fetchExhibitionHalls,
} from '@/services/museum';
import type {
  Museum,
  MuseumDetailInfo,
  Artifact,
  ArtifactDetail,
  Exhibition,
  Activity,
  News,
  ImmersiveExperience,
  CreativeProduct,
  AcademicResource,
  ExhibitionHall,
} from '@/types/museum';

export const useMuseumDataStore = defineStore('museumData', () => {
  const museums = ref<Museum[]>([]);
  const artifacts = ref<Artifact[]>([]);
  const artifactDetailMap = ref<Record<number, ArtifactDetail>>({});
  const exhibitions = ref<Exhibition[]>([]);
  const activities = ref<Activity[]>([]);
  const news = ref<News[]>([]);
  const immersive = ref<ImmersiveExperience[]>([]);
  const creativeProducts = ref<CreativeProduct[]>([]);
  const academicResources = ref<AcademicResource[]>([]);
  const exhibitionHalls = ref<ExhibitionHall[]>([]);
  const museumDetails = ref<Record<number, MuseumDetailInfo>>({});

  const loading = ref(false);
  const error = ref<string | null>(null);
  const loaded = ref(false);
  let loadPromise: Promise<void> | null = null;

  const museumsByProvince = computed(() => {
    const map: Record<string, Museum[]> = {};
    for (const m of museums.value) {
      // 前端路由使用英文省份 key，列表展示用中文 province�?      // 保留按中文省份分组，MuseumDetail 改用 id 查找
      if (!map[m.province]) map[m.province] = [];
      map[m.province].push(m);
    }
    return map;
  });

  async function loadAll() {
    if (loaded.value) return;
    if (loadPromise) return loadPromise;
    loadPromise = (async () => {
      loading.value = true;
      error.value = null;
      try {
        const [
          museumRes,
          artifactRes,
          exhibitionRes,
          activityRes,
          newsRes,
          immersiveRes,
          creativeRes,
          academicRes,
          hallRes,
        ] = await Promise.all([
          fetchMuseums(),
          fetchArtifacts(),
          fetchExhibitions(),
          fetchActivities(),
          fetchNews(),
          fetchImmersive(),
          fetchCreativeProducts(),
          fetchAcademicResources(),
          fetchExhibitionHalls(),
        ]);
        museums.value = museumRes.items;
        artifacts.value = artifactRes.items;
        exhibitions.value = exhibitionRes.items;
        activities.value = activityRes.items;
        news.value = newsRes.items;
        immersive.value = immersiveRes.items;
        creativeProducts.value = creativeRes.items;
        academicResources.value = academicRes.items;
        exhibitionHalls.value = hallRes.items;
        loaded.value = true;
      } catch (e) {
        error.value = e instanceof Error ? e.message : '加载失败';
        museums.value = [];
        artifacts.value = [];
        exhibitions.value = [];
        activities.value = [];
        news.value = [];
        immersive.value = [];
        creativeProducts.value = [];
        academicResources.value = [];
        exhibitionHalls.value = [];
      } finally {
        loading.value = false;
        loadPromise = null;
      }
    })();
    return loadPromise;
  }

  async function ensureLoaded() {
    if (!loaded.value) {
      await loadAll();
    }
  }

  async function getMuseum(id: number): Promise<Museum | null> {
    await ensureLoaded();
    const cached = museums.value.find((m) => m.id === id);
    if (cached) return cached;
    try {
      return await fetchMuseumById(id);
    } catch {
      return null;
    }
  }

  async function getMuseumDetailsById(
    museumId: number,
  ): Promise<MuseumDetailInfo | null> {
    if (museumDetails.value[museumId]) {
      return museumDetails.value[museumId];
    }
    try {
      const detail = await fetchMuseumDetail(museumId);
      museumDetails.value[museumId] = detail;
      return detail;
    } catch {
      return null;
    }
  }

  function getArtifactsByMuseumId(museumId: number): Artifact[] {
    return artifacts.value.filter((a) => a.museumId === museumId);
  }

  async function getArtifactDetailById(
    id: number,
  ): Promise<ArtifactDetail | null> {
    const cached = artifactDetailMap.value[id];
    if (cached) return cached;
    try {
      const detail = await fetchArtifactDetail(id);
      artifactDetailMap.value = { ...artifactDetailMap.value, [id]: detail };
      return detail;
    } catch {
      return null;
    }
  }

  function getExhibitionsByMuseumId(museumId: number): Exhibition[] {
    return exhibitions.value.filter((e) => e.museumId === museumId);
  }

  function getActivitiesByMuseumId(museumId: number): Activity[] {
    return activities.value.filter((a) => a.museumId === museumId);
  }

  function getNewsByMuseumId(museumId: number): News[] {
    return news.value.filter((n) => n.museumId === museumId);
  }

  function getImmersiveByMuseumId(museumId: number): ImmersiveExperience[] {
    return immersive.value.filter((i) => i.museumId === museumId);
  }

  function getCreativeProductsByMuseumId(museumId: number): CreativeProduct[] {
    return creativeProducts.value.filter((c) => c.museumId === museumId);
  }

  function getAcademicResourcesByMuseumId(
    museumId: number,
  ): AcademicResource[] {
    return academicResources.value.filter((a) => a.museumId === museumId);
  }

  function getExhibitionHallsByMuseumId(museumId: number): ExhibitionHall[] {
    return exhibitionHalls.value.filter(
      (h) => (h as ExhibitionHall & { museumId?: number }).museumId === museumId,
    );
  }

  return {
    museums,
    artifacts,
    artifactDetailMap,
    exhibitions,
    activities,
    news,
    immersive,
    creativeProducts,
    academicResources,
    exhibitionHalls,
    museumDetails,
    museumsByProvince,
    loading,
    error,
    loaded,
    loadAll,
    ensureLoaded,
    getMuseum,
    getMuseumDetailsById,
    getArtifactsByMuseumId,
    getArtifactDetailById,
    getExhibitionsByMuseumId,
    getActivitiesByMuseumId,
    getNewsByMuseumId,
    getImmersiveByMuseumId,
    getCreativeProductsByMuseumId,
    getAcademicResourcesByMuseumId,
    getExhibitionHallsByMuseumId,
  };
});

// 地图静态配置仍从原路径导出，便�?MapSection 使用
export {
  provinceElevation,
  provinceNameMap,
  provinceColors,
  getElevationTier,
} from './data/map';

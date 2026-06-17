import { provincesData } from './provinces';
import type { SceneryData } from '@/typesOfPages/travelGuide';

interface DataLoaderConfig {
  cacheEnabled: boolean;
  refreshInterval: number;
}

class DataLoader {
  private config: DataLoaderConfig;
  private cache: Map<string, SceneryData> = new Map();

  constructor(config?: Partial<DataLoaderConfig>) {
    this.config = {
      cacheEnabled: true,
      refreshInterval: 30 * 60 * 1000,
      ...config,
    };
  }

  async loadProvinceData(provinceKey: string): Promise<SceneryData | null> {
    if (this.config.cacheEnabled && this.cache.has(provinceKey)) {
      return this.cache.get(provinceKey) || null;
    }

    try {
      const module = await import(`./scenery/${provinceKey}`);
      const data = module.default || module;

      if (this.config.cacheEnabled) {
        this.cache.set(provinceKey, data);
      }

      return data as SceneryData;
    } catch (error) {
      console.warn(`Failed to load province data for ${provinceKey}:`, error);
      return null;
    }
  }

  async loadSceneryData(provinceKey: string): Promise<SceneryData | null> {
    return this.loadProvinceData(provinceKey);
  }

  hasProvinceData(provinceKey: string): boolean {
    return this.cache.has(provinceKey);
  }

  getAvailableProvinces(): string[] {
    return provincesData.map(p => p.id);
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const dataLoader = new DataLoader();
export const loadProvinceData = (provinceKey: string) => dataLoader.loadProvinceData(provinceKey);
export const loadSceneryData = (provinceKey: string) => dataLoader.loadSceneryData(provinceKey);
export const hasProvinceData = (provinceKey: string) => dataLoader.hasProvinceData(provinceKey);
export const getAvailableProvinces = () => dataLoader.getAvailableProvinces();

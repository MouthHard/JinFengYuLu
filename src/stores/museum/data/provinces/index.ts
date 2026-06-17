// 省份数据主入口 - 按省份组织所有博物馆相关数据
import type { ProvinceData } from '@/typesOfPages/museum';

// 导入各省份数据
import { beijingData } from './Beijing';
import { shanghaiData } from './Shanghai';
import { shaanxiData } from './Shaanxi';
import { jiangsuData } from './Jiangsu';
import { henanData } from './Henan';
import { zhejiangData } from './Zhejiang';
import { hubeiData } from './Hubei';
import { hunanData } from './Hunan';
import { sichuanData } from './Sichuan';
import { guangdongData } from './Guangdong';
import { tianjinData } from './Tianjin';
import { chongqingData } from './Chongqing';
import { shandongData } from './Shandong';
import { liaoningData } from './Liaoning';
import { jilinData } from './Jilin';
import { heilongjiangData } from './Heilongjiang';
import { fujianData } from './Fujian';
import { anhuiData } from './Anhui';
import { hebeiData } from './Hebei';
import { shanxiData } from './Shanxi';
import { jiangxiData } from './Jiangxi';
import { guangxiData } from './Guangxi';
import { hainanData } from './Hainan';
import { guizhouData } from './Guizhou';
import { yunnanData } from './Yunnan';
import { xizangData } from './Xizang';
import { gansuData } from './Gansu';
import { qinghaiData } from './Qinghai';
import { neimengguData } from './Neimenggu';
import { ningxiaData } from './Ningxia';
import { xinjiangData } from './Xinjiang';
import { taiwanData } from './Taiwan';
import { hongkongData } from './HongKong';
import { macauData } from './Macau';

// 所有省份数据映射
export const provinceDataMap: Record<string, ProvinceData> = {
  Beijing: beijingData,
  Shanghai: shanghaiData,
  Shaanxi: shaanxiData,
  Jiangsu: jiangsuData,
  Henan: henanData,
  Zhejiang: zhejiangData,
  Hubei: hubeiData,
  Hunan: hunanData,
  Sichuan: sichuanData,
  Guangdong: guangdongData,
  Tianjin: tianjinData,
  Chongqing: chongqingData,
  Shandong: shandongData,
  Liaoning: liaoningData,
  Jilin: jilinData,
  Heilongjiang: heilongjiangData,
  Fujian: fujianData,
  Anhui: anhuiData,
  Hebei: hebeiData,
  Shanxi: shanxiData,
  Jiangxi: jiangxiData,
  Guangxi: guangxiData,
  Hainan: hainanData,
  Guizhou: guizhouData,
  Yunnan: yunnanData,
  Xizang: xizangData,
  Gansu: gansuData,
  Qinghai: qinghaiData,
  Neimenggu: neimengguData,
  Ningxia: ningxiaData,
  Xinjiang: xinjiangData,
  Taiwan: taiwanData,
  HongKong: hongkongData,
  Macau: macauData,
};

// 获取省份数据
export const getProvinceData = (code: string): ProvinceData | undefined => {
  return provinceDataMap[code];
};

// 获取所有省份数据列表
export const allProvincesData: ProvinceData[] = Object.values(provinceDataMap);

// 向后兼容的全局聚合数据导出
export const getAllMuseumsFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.museums);
};

export const getAllArtifactsFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.artifacts);
};

export const getAllActivitiesFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.activities);
};

export const getAllCreativeProductsFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.creativeProducts);
};

export const getAllExhibitionsFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.exhibitions);
};

export const getAllNewsFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.news);
};

export const getAllAcademicResourcesFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.academicResources);
};

export const getAllImmersiveExperiencesFromProvinces = () => {
  return allProvincesData.flatMap((p) => p.immersiveExperiences);
};

// 聚合所有省份的专题展馆数据
export const getAllExhibitionHallsFromProvinces = () => {
  const result: Record<
    number,
    import('@/typesOfPages/museum').ExhibitionHall[]
  > = {};
  for (const province of allProvincesData) {
    if (province.exhibitionHalls) {
      for (const [museumId, halls] of Object.entries(province.exhibitionHalls)) {
        result[Number(museumId)] = halls;
      }
    }
  }
  return result;
};

// 按省份获取某博物馆的所有关联数据
export const getMuseumAllDataByProvince = (museumId: number) => {
  for (const province of allProvincesData) {
    if (province.details && province.details[museumId]) {
      return {
        museum: province.museums.find((m) => m.id === museumId),
        detail: province.details[museumId],
        artifacts: (province.artifacts || []).filter((a) => a.museumId === museumId),
        activities: (province.activities || []).filter((a) => a.museumId === museumId),
        creativeProducts: (province.creativeProducts || []).filter(
          (c) => c.museumId === museumId,
        ),
        exhibitions: (province.exhibitions || []).filter(
          (e) => e.museumId === museumId,
        ),
        news: (province.news || []).filter((n) => n.museumId === museumId),
        academicResources: (province.academicResources || []).filter(
          (a) => a.museumId === museumId,
        ),
        immersiveExperiences: (province.immersiveExperiences || []).filter(
          (i) => i.museumId === museumId,
        ),
        exhibitionHalls: (province.exhibitionHalls && province.exhibitionHalls[museumId]) || [],
      };
    }
  }
  return null;
};

export type { ProvinceData };

// 博物馆数据主索引文件

// 导入博物馆数据
import { museumsByProvince, museums } from "./museums";

// 导入文物数据
import {
  artifacts,
  getArtifactsByMuseumId,
  getArtifactDetailById,
  artifactTypes,
  periods,
  periodMap,
  artifactDetails,
} from "./artifacts";

// 导入展览数据
import {
  exhibitions,
  getExhibitionsByMuseumId,
  exhibitionCategories,
  staticExhibitions,
} from "./exhibitions";

// 导入文创产品数据
import {
  creativeProducts,
  getCreativeProductsByMuseumId,
} from "./creative-products";

// 导入学术资源数据
import {
  academicResources,
  getAcademicResourcesByMuseumId,
} from "./academic-resources";

// 导入活动数据
import { activities, getActivitiesByMuseumId } from "./activities";

// 导入新闻数据
import { news, getNewsByMuseumId } from "./news";

// 导入沉浸式体验数据
import {
  immersiveExperiences,
  getImmersiveExperiencesByMuseumId,
} from "./immersive-experiences";

// 导入地图数据
import {
  provinceElevation,
  provinceNameMap,
  provinceColors,
  getElevationTier,
} from "./map";

// 导入专馆数据
import {
  exhibitionHalls,
  museumExhibitionHalls,
  getExhibitionHallsByMuseumId,
  getAllExhibitionHalls,
  getExhibitionHallById,
  getExhibitionHallsByCategory,
} from "./special-exhibitions";

// 导入博物馆详细信息数据
import {
  allMuseumDetails,
  getMuseumDetailsById,
  type MuseumDetailInfo,
  type MuseumVisitInfo,
} from "./museum-details";

// 导出所有数据
export {
  // 博物馆数据
  museumsByProvince,
  museums,

  // 文物数据
  artifacts,
  getArtifactsByMuseumId,
  getArtifactDetailById,
  artifactTypes,
  periods,
  periodMap,
  artifactDetails,

  // 展览数据
  exhibitions,
  getExhibitionsByMuseumId,
  exhibitionCategories,
  staticExhibitions,

  // 文创产品数据
  creativeProducts,
  getCreativeProductsByMuseumId,

  // 学术资源数据
  academicResources,
  getAcademicResourcesByMuseumId,

  // 活动数据
  activities,
  getActivitiesByMuseumId,

  // 新闻数据
  news,
  getNewsByMuseumId,

  // 沉浸式体验数据
  immersiveExperiences,
  getImmersiveExperiencesByMuseumId,

  // 地图数据
  provinceElevation,
  provinceNameMap,
  provinceColors,
  getElevationTier,

  // 专馆数据
  exhibitionHalls,
  museumExhibitionHalls,
  getExhibitionHallsByMuseumId,
  getAllExhibitionHalls,
  getExhibitionHallById,
  getExhibitionHallsByCategory,

  // 博物馆详细信息数据
  allMuseumDetails,
  getMuseumDetailsById,
  MuseumDetailInfo,
  MuseumVisitInfo,
};

// 综合数据获取函数
export const getMuseumAllData = (museumId: number) => {
  return {
    artifacts: getArtifactsByMuseumId(museumId),
    exhibitions: getExhibitionsByMuseumId(museumId),
    creativeProducts: getCreativeProductsByMuseumId(museumId),
    academicResources: getAcademicResourcesByMuseumId(museumId),
    activities: getActivitiesByMuseumId(museumId),
    news: getNewsByMuseumId(museumId),
    immersiveExperiences: getImmersiveExperiencesByMuseumId(museumId),
  };
};

// 根据省份获取博物馆列表
export const getMuseumsByProvince = (province: string) => {
  return museumsByProvince[province] || [];
};

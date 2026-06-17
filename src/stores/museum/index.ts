import { defineStore } from 'pinia'
import { computed } from 'vue'
import type { Museum, Artifact, Exhibition, ExhibitionCategory, Activity, CreativeProduct, News, AcademicResource, ImmersiveExperience, MuseumDetailInfo, ProvinceData } from '@/typesOfPages/museum'
import {
  artifacts,
  ARTIFACT_TYPES,
  DYNASTIES,
  ARTIFACT_TYPE_MAP,
  DYNASTY_MAP,
  getArtifactsByMuseumId,
  exhibitions,
  getExhibitionsByMuseumId,
  museums,
  museumsByProvince,
  provinceElevation,
  provinceNameMap,
  provinceColors,
  getElevationTier,
  activities,
  getActivitiesByMuseumId,
  creativeProducts,
  getCreativeProductsByMuseumId,
  news,
  getNewsByMuseumId,
  academicResources,
  getAcademicResourcesByMuseumId,
  immersiveExperiences,
  getImmersiveExperiencesByMuseumId,
  allMuseumDetails,
  getMuseumDetailsById,
  exhibitionHalls,
  museumExhibitionHalls,
  getExhibitionHallsByMuseumId,
  getAllExhibitionHalls,
  getExhibitionHallById,
  getExhibitionHallsByCategory,
  getMuseumAllData,
  getMuseumsByProvince,
  // 省份数据（新架构）
  provinceDataMap,
  allProvincesData,
  getProvinceData,
  getMuseumAllDataByProvince,
} from './data'

export type { Museum, Artifact, Exhibition, ExhibitionCategory, Activity, CreativeProduct, News, AcademicResource, ImmersiveExperience, MuseumDetailInfo, ProvinceData }
export { getMuseumAllData, getMuseumsByProvince }

export const useMuseumDataStore = defineStore('museumData', () => {
  const artifactMap = computed(() => {
    const map = new Map<number, Artifact>()
    for (const artifact of artifacts) {
      map.set(artifact.id, artifact)
    }
    return map
  })

  const exhibitionMap = computed(() => {
    const map = new Map<number, Exhibition>()
    for (const exhibition of exhibitions) {
      map.set(exhibition.id, exhibition)
    }
    return map
  })

  const museumMap = computed(() => {
    const map = new Map<number, Museum>()
    for (const museum of museums) {
      map.set(museum.id, museum)
    }
    return map
  })

  const activityMap = computed(() => {
    const map = new Map<number, Activity>()
    for (const a of activities) {
      map.set(a.id, a)
    }
    return map
  })

  const creativeProductMap = computed(() => {
    const map = new Map<number, CreativeProduct>()
    for (const p of creativeProducts) {
      map.set(p.id, p)
    }
    return map
  })

  const museumDetailMap = computed(() => {
    const map = new Map<number, MuseumDetailInfo>()
    for (const d of allMuseumDetails) {
      map.set(d.museumId, d)
    }
    return map
  })

  const getArtifact = (id: number) => artifactMap.value.get(id)
  const getExhibition = (id: number) => exhibitionMap.value.get(id)
  const getMuseum = (id: number) => museumMap.value.get(id)
  const getActivity = (id: number) => activityMap.value.get(id)
  const getCreativeProduct = (id: number) => creativeProductMap.value.get(id)
  const getMuseumDetail = (museumId: number) => museumDetailMap.value.get(museumId)

  const getAllArtifacts = () => artifacts
  const getAllExhibitions = () => exhibitions
  const getAllMuseums = () => museums
  const getAllActivities = () => activities
  const getAllCreativeProducts = () => creativeProducts
  const getAllNews = () => news
  const getAllAcademicResources = () => academicResources
  const getAllImmersiveExperiences = () => immersiveExperiences
  const getAllMuseumDetails = () => allMuseumDetails

  const searchArtifacts = (keyword: string): Artifact[] => {
    if (!keyword) return artifacts
    const lowerKeyword = keyword.toLowerCase()
    return artifacts.filter(artifact =>
      artifact.name.toLowerCase().includes(lowerKeyword) ||
      artifact.period.toLowerCase().includes(lowerKeyword) ||
      artifact.description?.toLowerCase().includes(lowerKeyword) ||
      artifact.category?.toLowerCase().includes(lowerKeyword)
    )
  }

  const searchMuseums = (keyword: string): Museum[] => {
    if (!keyword) return museums
    const lowerKeyword = keyword.toLowerCase()
    return museums.filter(museum =>
      museum.name.toLowerCase().includes(lowerKeyword) ||
      museum.province.toLowerCase().includes(lowerKeyword) ||
      museum.type.toLowerCase().includes(lowerKeyword) ||
      museum.description.toLowerCase().includes(lowerKeyword)
    )
  }

  const searchExhibitions = (keyword: string): Exhibition[] => {
    if (!keyword) return exhibitions
    const lowerKeyword = keyword.toLowerCase()
    return exhibitions.filter(exhibition =>
      exhibition.title.toLowerCase().includes(lowerKeyword) ||
      exhibition.description.toLowerCase().includes(lowerKeyword) ||
      exhibition.location?.toLowerCase().includes(lowerKeyword) ||
      exhibition.category?.toLowerCase().includes(lowerKeyword)
    )
  }

  return {
    artifactMap,
    exhibitionMap,
    museumMap,
    activityMap,
    creativeProductMap,
    museumDetailMap,
    getArtifact,
    getExhibition,
    getMuseum,
    getActivity,
    getCreativeProduct,
    getMuseumDetail,
    getAllArtifacts,
    getAllExhibitions,
    getAllMuseums,
    getAllActivities,
    getAllCreativeProducts,
    getAllNews,
    getAllAcademicResources,
    getAllImmersiveExperiences,
    getAllMuseumDetails,
    getArtifactsByMuseumId,
    getExhibitionsByMuseumId,
    getActivitiesByMuseumId,
    getCreativeProductsByMuseumId,
    getNewsByMuseumId,
    getAcademicResourcesByMuseumId,
    getImmersiveExperiencesByMuseumId,
    getMuseumDetailsById,
    getExhibitionHallsByMuseumId,
    getAllExhibitionHalls,
    getExhibitionHallById,
    getExhibitionHallsByCategory,
    searchArtifacts,
    searchMuseums,
    searchExhibitions,
    museums,
    ARTIFACT_TYPES,
    DYNASTIES,
    ARTIFACT_TYPE_MAP,
    DYNASTY_MAP,
    museumsByProvince,
    provinceElevation,
    provinceNameMap,
    provinceColors,
    getElevationTier,
    exhibitionHalls,
    museumExhibitionHalls,
    artifactTypes: ARTIFACT_TYPES,
    periods: DYNASTIES,
    periodMap: DYNASTY_MAP,
    // 省份数据访问（新架构）
    provinceDataMap,
    allProvincesData,
    getProvinceData: (code: string) => getProvinceData(code),
    getMuseumAllDataByProvince: (museumId: number) => getMuseumAllDataByProvince(museumId),
  }
})

export const provinceMap: Record<string, string> = {
  北京: 'beijing', 上海: 'shanghai', 陕西: 'shaanxi', 江苏: 'jiangsu',
  河南: 'henan', 浙江: 'zhejiang', 湖北: 'hubei', 湖南: 'hunan',
  四川: 'sichuan', 广东: 'guangdong', 天津: 'tianjin', 重庆: 'chongqing',
  山东: 'shandong', 辽宁: 'liaoning', 吉林: 'jilin', 黑龙江: 'heilongjiang',
  福建: 'fujian', 安徽: 'anhui', 河北: 'hebei', 山西: 'shanxi',
  内蒙古: 'inner-mongolia', 江西: 'jiangxi', 广西: 'guangxi', 海南: 'hainan',
  贵州: 'guizhou', 云南: 'yunnan', 西藏: 'tibet', 甘肃: 'gansu',
  青海: 'qinghai', 宁夏: 'ningxia', 新疆: 'xinjiang', 台湾: 'taiwan',
  香港: 'hong-kong', 澳门: 'macau',
}

export const museumTypeMap: Record<string, string> = {
  历史博物馆: 'history', 艺术博物馆: 'art', 科技博物馆: 'science',
  综合博物馆: 'comprehensive', 专题博物馆: 'thematic',
}

export const artifactCategoryMap: Record<string, string> = {
  绘画: 'painting', 玉器: 'jade', 青铜器: 'bronze',
  陶瓷器: 'ceramic', 书法: 'calligraphy', 科技仪器: 'scientific_instrument',
}

export const creativeCategoryMap: Record<string, string> = {
  文具: 'stationery', 服装: 'clothing', 教育: 'education',
  家居: 'home', 饰品: 'accessories',
}

export const academicTypeMap: Record<string, string> = {
  article: '文章', book: '书籍', video: '视频',
}

export const formatNumber = (num: number): string => {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1).replace(/\.0$/, '') + '亿'
  }
  if (num >= 10000) {
    return (num / 10000).toFixed(1).replace(/\.0$/, '') + '万'
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const getProvinceEn = (province: string): string => {
  return provinceMap[province] || province.toLowerCase()
}

export const getMuseumTypeEn = (type: string): string => {
  return museumTypeMap[type] || type.toLowerCase()
}

export const generateMuseumRoute = (province: string, museumId: number): string => {
  const provinceEn = getProvinceEn(province)
  return `/museum/${provinceEn}/${museumId}`
}

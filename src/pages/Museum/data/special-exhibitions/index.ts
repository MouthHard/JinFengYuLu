// 专馆数据导出模块

// 导出专馆数据
export { exhibitionHalls } from "./hallData";

// 导出按博物馆区分的专馆数据
export {
  museumExhibitionHalls,
  getExhibitionHallsByMuseumId,
  getAllExhibitionHalls,
  getExhibitionHallById,
  getExhibitionHallsByCategory,
} from "./museumHallData";

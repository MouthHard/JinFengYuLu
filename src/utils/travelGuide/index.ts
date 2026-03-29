// TravelGuide 页面工具函数统一导出

export {
  type WeatherInfo,
  WEATHER_ICONS,
  WEATHER_DESCRIPTIONS,
  getWeatherByProvince,
  getWeatherIcon,
  getWeatherDescription,
  getTemperatureRange,
  getSeasonalWeather,
} from "./weatherUtils";

export {
  TAG_COLOR_CLASSES,
  DEFAULT_TAB_ID,
  DEFAULT_REGION,
  getTagColorClass,
  filterProvinces,
  extractRegions,
  findProvinceById,
  findProvinceByName,
  getProvinceStats,
  groupProvincesByRegion,
  searchProvinces,
} from "./provinceUtils";

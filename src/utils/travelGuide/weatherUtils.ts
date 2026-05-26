export interface WeatherInfo {
  icon: string;
  description: string;
  temperature?: string;
}

export const WEATHER_ICONS = ["☀️", "⛅", "☁️", "🌧️", "⛈️", "❄️"];

export const WEATHER_DESCRIPTIONS = [
  "晴朗",
  "多云",
  "阴天",
  "小雨",
  "雷阵雨",
  "雪天",
];

// 模拟温度范围
const TEMPERATURE_RANGES = [
  "15°C - 25°C",
  "18°C - 28°C",
  "10°C - 20°C",
  "12°C - 22°C",
  "8°C - 18°C",
  "-5°C - 5°C",
];

// 根据省份ID获取天气信息
export function getWeatherByProvince(provinceId: string): WeatherInfo {
  const hash = provinceId
    .split("")
    .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);

  const weatherIndex = hash % WEATHER_ICONS.length;

  return {
    icon: WEATHER_ICONS[weatherIndex],
    description: WEATHER_DESCRIPTIONS[weatherIndex],
    temperature: TEMPERATURE_RANGES[weatherIndex],
  };
}

// 获取天气图标
export function getWeatherIcon(provinceId: string): string {
  return getWeatherByProvince(provinceId).icon;
}

// 获取天气描述
export function getWeatherDescription(provinceId: string): string {
  return getWeatherByProvince(provinceId).description;
}

// 获取温度范围
export function getTemperatureRange(provinceId: string): string {
  return getWeatherByProvince(provinceId).temperature || "";
}

// 根据季节获取推荐天气（用于季节性推荐）
export function getSeasonalWeather(
  season: "spring" | "summer" | "autumn" | "winter",
): WeatherInfo {
  const seasonalMap: Record<string, WeatherInfo> = {
    spring: { icon: "🌸", description: "春暖花开", temperature: "15°C - 25°C" },
    summer: { icon: "☀️", description: "夏日炎炎", temperature: "25°C - 35°C" },
    autumn: { icon: "🍁", description: "秋高气爽", temperature: "10°C - 20°C" },
    winter: { icon: "❄️", description: "冬日寒冷", temperature: "-5°C - 10°C" },
  };

  return seasonalMap[season] || seasonalMap.spring;
}

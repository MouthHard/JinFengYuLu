import type { Province } from "@/types/travelGuide";

export const TAG_COLOR_CLASSES = [
  "tag-blue",
  "tag-green",
  "tag-orange",
  "tag-purple",
  "tag-red",
];

export const DEFAULT_TAB_ID = "food";
export const DEFAULT_REGION = "全部";

// 获取标签颜色�?export function getTagColorClass(index: number): string {
  return TAG_COLOR_CLASSES[index % TAG_COLOR_CLASSES.length];
}

// 筛选省�?export function filterProvinces(
  provinces: Province[],
  region: string,
  searchQuery: string,
): Province[] {
  return provinces.filter((province) => {
    const matchRegion = region === "全部" || province.region === region;
    const matchSearch =
      searchQuery === "" ||
      province.name.includes(searchQuery) ||
      province.id.includes(searchQuery);
    return matchRegion && matchSearch;
  });
}

// 提取地区列表
export function extractRegions(provinces: Province[]): string[] {
  const regionSet = new Set(provinces.map((p) => p.region));
  return ["全部", ...Array.from(regionSet)];
}

// 根据ID查找省份
export function findProvinceById(
  provinces: Province[],
  id: string,
): Province | undefined {
  return provinces.find((p) => p.id === id);
}

// 根据名称查找省份
export function findProvinceByName(
  provinces: Province[],
  name: string,
): Province | undefined {
  return provinces.find((p) => p.name === name);
}

// 获取省份统计信息
export function getProvinceStats(provinces: Province[]) {
  const total = provinces.length;
  const regions = extractRegions(provinces).length - 1; // 排除"全部"
  const withTags = provinces.filter((p) => p.tags && p.tags.length > 0).length;

  return {
    total,
    regions,
    withTags,
  };
}

// 按地区分组省�?export function groupProvincesByRegion(
  provinces: Province[],
): Record<string, Province[]> {
  return provinces.reduce(
    (acc, province) => {
      const region = province.region;
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(province);
      return acc;
    },
    {} as Record<string, Province[]>,
  );
}

// 搜索省份（支持拼音首字母搜索�?export function searchProvinces(
  provinces: Province[],
  query: string,
): Province[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return provinces;

  return provinces.filter((province) => {
    // 按名称搜�?    if (province.name.includes(query)) return true;
    // 按ID搜索
    if (province.id.includes(lowerQuery)) return true;
    // 按缩写搜�?    if (province.abbreviation.includes(query)) return true;
    // 按标签搜�?    if (province.tags?.some((tag) => tag.includes(query))) return true;
    return false;
  });
}

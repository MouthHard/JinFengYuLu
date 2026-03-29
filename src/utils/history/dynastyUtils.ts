import type { Dynasty } from "@/types/history";
import { getStartYear, getDurationYears } from "./dateUtils";

// 朝代分类映射
export const DYNASTY_CATEGORIES = [
  { label: "全部", value: "" },
  { label: "上古时期", value: "ancient" },
  { label: "夏商周", value: "xia-shang-zhou" },
  { label: "秦汉", value: "qin-han" },
  { label: "三国两晋", value: "three-kingdoms-jin" },
  { label: "五胡十六国", value: "five-hus-sixteen-kingdoms" },
  { label: "南北朝", value: "nanbeichao" },
  { label: "隋唐", value: "sui-tang" },
  { label: "五代十国", value: "five-dynasties" },
  { label: "宋辽夏金", value: "song-liao-xia-jin" },
  { label: "元明清", value: "yuan-ming-qing" },
];

// 按时间顺序排序朝代
export const sortDynastiesByTime = (dynasties: Dynasty[]): Dynasty[] => {
  return [...dynasties].sort((a, b) => {
    return getStartYear(a.period) - getStartYear(b.period);
  });
};

// 按分类筛选朝代
export const filterDynastiesByCategory = (
  dynasties: Dynasty[],
  category: string,
): Dynasty[] => {
  if (!category) return dynasties;
  return dynasties.filter((dynasty) => dynasty.periodTag === category);
};

// 获取朝代持续时间排名
export const getDynastyDurationRanking = (dynasties: Dynasty[]): Dynasty[] => {
  return [...dynasties].sort((a, b) => {
    return getDurationYears(b.period) - getDurationYears(a.period);
  });
};

// 查找朝代
export const findDynastyById = (
  dynasties: Dynasty[],
  id: string,
): Dynasty | undefined => {
  return dynasties.find((d) => d.id === id);
};

// 获取朝代统计信息
export const getDynastyStats = (dynasties: Dynasty[]) => {
  const total = dynasties.length;
  const unified = dynasties.filter((d) => d.isUnified).length;
  const totalDuration = dynasties.reduce((sum, d) => {
    return sum + getDurationYears(d.period);
  }, 0);

  return {
    total,
    unified,
    fragmented: total - unified,
    averageDuration: total > 0 ? Math.round(totalDuration / total) : 0,
    totalDuration,
  };
};

// 获取朝代时间线数据（用于图表展示）
export const getDynastyTimelineData = (dynasties: Dynasty[]) => {
  return dynasties.map((dynasty) => ({
    id: dynasty.id,
    name: dynasty.name,
    period: dynasty.period,
    startYear: getStartYear(dynasty.period),
    duration: getDurationYears(dynasty.period),
    isUnified: dynasty.isUnified,
    era: dynasty.era,
  }));
};

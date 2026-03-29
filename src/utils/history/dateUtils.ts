// 历史日期相关工具函数

// 处理中文数字的辅助函数
export const chineseToNumber = (str: string): number => {
  const charToNum: Record<string, number> = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10,
    百: 100,
    千: 1000,
  };
  let result = 0;
  let temp = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const num = charToNum[char];
    if (num === 10 || num === 100 || num === 1000) {
      if (temp === 0) temp = 1;
      result += temp * num;
      temp = 0;
    } else {
      temp = num;
    }
  }
  return result + temp;
};

// 缓存计算结果，提高性能
const yearCache = new Map<string, { start: number; end: number }>();

// 缓存统计
export function getCacheStats(): { size: number } {
  return {
    size: yearCache.size,
  };
}

// 清除缓存
export function clearYearCache(): void {
  yearCache.clear();
}

// 获取开始年份
export const getStartYear = (period: string): number => {
  const cached = yearCache.get(period);
  if (cached) return cached.start;

  const match = period.match(/(约)?前?([\d一二三四五六七八九十百千]+)/);
  if (!match) {
    return 0;
  }

  let yearStr = match[2];
  let year = isNaN(parseInt(yearStr))
    ? chineseToNumber(yearStr)
    : parseInt(yearStr);
  if (period.includes("前")) {
    year = -year;
  }
  return year;
};

// 获取结束年份
export const getEndYear = (period: string): number => {
  const cached = yearCache.get(period);
  if (cached) return cached.end;

  const matches = period.match(/(约)?前?([\d一二三四五六七八九十百千]+)/g);
  if (!matches || matches.length < 2) {
    if (period.includes("至今")) {
      return new Date().getFullYear();
    }
    return getStartYear(period);
  }

  const lastMatch = matches[matches.length - 1];
  const numMatch = lastMatch.match(/(约)?前?([\d一二三四五六七八九十百千]+)/);
  if (!numMatch) {
    return getStartYear(period);
  }

  let yearStr = numMatch[2];
  let year = isNaN(parseInt(yearStr))
    ? chineseToNumber(yearStr)
    : parseInt(yearStr);
  if (lastMatch.includes("前")) {
    year = -year;
  }
  return year;
};

// 计算持续时间（年）
export const getDurationYears = (period: string): number => {
  const cached = yearCache.get(period);
  if (cached) {
    return Math.abs(cached.end - cached.start);
  }

  const start = getStartYear(period);
  const end = getEndYear(period);

  yearCache.set(period, { start, end });

  return Math.abs(end - start);
};

// 格式化历史时期显示
export const formatPeriod = (period: string): string => {
  if (period.includes("前")) {
    return `公元前 ${period.replace("前", "")}`;
  }
  return period;
};

// 判断是否为古代时期
export const isAncientPeriod = (period: string): boolean => {
  const startYear = getStartYear(period);
  return startYear < 0;
};

// 获取世纪信息
export const getCentury = (year: number): string => {
  const century = Math.ceil(Math.abs(year) / 100);
  if (year < 0) {
    return `公元前${century}世纪`;
  }
  return `${century}世纪`;
};

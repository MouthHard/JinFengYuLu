/**
 * 数值映射函数：将数值从一个范围映射到另一个范围
 *
 * @param num - 需要映射的数值
 * @param in_min - 输入范围最小值
 * @param in_max - 输入范围最大值
 * @param out_min - 输出范围最小值
 * @param out_max - 输出范围最大值
 * @returns 映射后的数值
 * @example
 * ```typescript
 * // 将0-100的值映射到0-360度
 * const degrees = scale(50, 0, 100, 0, 360); // 180
 * ```
 */
export const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
): number => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

/**
 * 防抖函数：延迟执行，如果在等待时间内再次触发则重新计时
 *
 * @param func - 需要防抖的函数
 * @param wait - 等待时间（毫秒）
 * @returns 防抖后的函数
 * @example
 * ```typescript
 * const debouncedSearch = debounce(search, 300);
 * input.addEventListener('input', debouncedSearch);
 * ```
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: number | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      func(...args);
    }, wait);
  };
};

/**
 * 时间格式化函数：将 Date 对象格式化为 HH : MM : SS
 *
 * @param date - 需要格式化的日期对象
 * @returns 格式化后的时间字符串
 * @example
 * ```typescript
 * const time = formatTime(new Date()); // "14 : 30 : 45"
 * ```
 */
export const formatTime = (date: Date): string => {
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hours} : ${minutes} : ${seconds}`;
};

/**
 * 日期格式化函数：将 Date 对象格式化为 星期X , XXXX年X月X日
 *
 * @param date - 需要格式化的日期对象
 * @returns 格式化后的日期字符串
 * @example
 * ```typescript
 * const dateStr = formatDate(new Date()); // "星期一 , 2024年3月15日"
 * ```
 */
export const formatDate = (date: Date): string => {
  const days: string[] = [
    "星期天",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const months: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const day = date.getDay();
  const month = date.getMonth();
  const dateNum = date.getDate();
  const year = date.getFullYear();
  return `${days[day]} , ${year}年${months[month]}月${dateNum}日`;
};

/**
 * 根据字符串生成颜色
 * @param str 输入字符串
 * @returns 颜色样式对象
 */
export const getColorByString = (str: string): { backgroundColor: string } => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);
  return { backgroundColor: `hsl(${hue}, 70%, 45%)` };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

export const formatNumber = (num: number): string => {
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(1)}亿`;
  }
  if (num >= 10000) {
    return `${(num / 10000).toFixed(1)}万`;
  }
  return num.toLocaleString();
};

/**
 * HTML 特殊字符转义，防止 XSS
  */
export const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * 转义正则表达式特殊字符
 */
const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * 安全地高亮搜索关键词：先转义 HTML，再用 <mark> 包裹匹配项
 */
export const highlightSearchMatch = (text: string, keyword: string): string => {
  const escapedText = escapeHtml(text);
  if (!keyword) return escapedText;
  const escapedKeyword = escapeRegExp(escapeHtml(keyword));
  const regex = new RegExp(`(${escapedKeyword})`, 'gi');
  return escapedText.replace(regex, '<mark>$1</mark>');
};

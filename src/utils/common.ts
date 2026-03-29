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
 * 节流函数：限制函数执行频率，在指定时间内只执行一次
 *
 * @param func - 需要节流的函数
 * @param limit - 时间限制（毫秒）
 * @returns 节流后的函数
 * @example
 * ```typescript
 * const throttledScroll = throttle(handleScroll, 100);
 * window.addEventListener('scroll', throttledScroll);
 * ```
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
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
 * 数字格式化函数：将大数字格式化为更易读的形式
 *
 * @param num - 需要格式化的数字
 * @returns 格式化后的字符串
 * @example
 * ```typescript
 * formatNumber(150000000); // "1.5亿"
 * formatNumber(15000); // "1.5万"
 * formatNumber(1234); // "1,234"
 * ```
 */
export const formatNumber = (num: number): string => {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + "亿";
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + "万";
  }
  return num.toLocaleString();
};

/**
 * 博物馆模块格式化工具函数
 * @module utils/museum/format
 */

/**
 * 格式化数字为中文单位
 * @param num - 数字
 * @returns 格式化后的字符串
 * @example
 * formatNumber(10000) // '1万'
 * formatNumber(100000000) // '1亿'
 * formatNumber(1234) // '1,234'
 */
export function formatNumber(num: number): string {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1).replace(/\.0$/, '') + '亿'
  }
  if (num >= 10000) {
    return (num / 10000).toFixed(1).replace(/\.0$/, '') + '万'
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 格式化参观人数
 * @param visitors - 参观人数
 * @returns 格式化后的字符串
 * @example
 * formatVisitors(500000) // '50万'
 * formatVisitors(19000000) // '1900万'
 */
export function formatVisitors(visitors: number): string {
  if (visitors >= 100000000) {
    return (visitors / 100000000).toFixed(1).replace(/\.0$/, '') + '亿'
  }
  if (visitors >= 10000) {
    return (visitors / 10000).toFixed(1).replace(/\.0$/, '') + '万'
  }
  if (visitors >= 1000) {
    return (visitors / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  return visitors.toString()
}

/**
 * 格式化文物数量
 * @param count - 文物数量
 * @returns 格式化后的字符串
 * @example
 * formatArtifactCount(1863404) // '186.3万'
 */
export function formatArtifactCount(count: number): string {
  if (count >= 100000000) {
    return (count / 100000000).toFixed(1).replace(/\.0$/, '') + '亿件'
  }
  if (count >= 10000) {
    return (count / 10000).toFixed(1).replace(/\.0$/, '') + '万件'
  }
  return count.toString() + '件'
}

/**
 * 格式化价格
 * @param price - 价格
 * @returns 格式化后的字符串
 * @example
 * formatPrice(68) // '¥68'
 * formatPrice(0) // '免费'
 */
export function formatPrice(price: number): string {
  if (price === 0) return '免费'
  return `¥${price}`
}

/**
 * 格式化展览日期范围
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 格式化后的字符串
 * @example
 * formatDateRange('2024-01-01', '2024-12-31') // '2024-01-01 - 2024-12-31'
 */
export function formatDateRange(startDate: string, endDate?: string): string {
  if (!endDate) return startDate
  return `${startDate} - ${endDate}`
}
import { graphic } from 'echarts/core';
const { LinearGradient, RadialGradient } = graphic;

/**
 * 创建tooltip配置
 * @param trigger 触发方式
 * @param formatter 格式化函数
 * @returns tooltip配置
 */
export const createTooltipConfig = (
  trigger: 'axis' | 'item' = 'axis',
  formatter?: any,
) => ({
  trigger,
  axisPointer:
    trigger === 'axis'
      ? {
          type: 'shadow',
          shadowStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        }
      : undefined,
  backgroundColor: 'rgba(20, 35, 55, 0.95)',
  borderColor: 'rgba(0, 255, 255, 0.5)',
  borderWidth: 2,
  textStyle: { color: '#fff' },
  transitionDuration: 0.3,
  formatter,
});

/**
 * 创建grid配置
 * @param options 额外配置
 * @returns grid配置
 */
export const createGridConfig = (options?: any) => ({
  left: '8%',
  right: '8%',
  top: '12%',
  bottom: '18%',
  containLabel: true,
  ...options,
});

/**
 * 创建坐标轴配置
 * @param type 坐标轴类型
 * @param options 额外配置
 * @returns 坐标轴配置
 */
export const createAxisConfig = (type: 'category' | 'value', options?: any) => ({
  type,
  axisLabel: { color: '#e0e0e0' },
  axisLine: { show: true },
  axisTick: { show: true },
  splitLine: { show: true },
  ...options,
});

/**
 * 图表颜色数组
 */
export const CHART_COLORS = [
  '#ff6b6b',
  '#4ecdc4',
  '#45b7d1',
  '#96ceb4',
  '#ffeead',
  '#feca57',
  '#a29bfe',
  '#fd79a8',
  '#00cec9',
  '#e17055',
];

/**
 * 构建柱状图数据
 * @param values 数值数组
 * @param colors 颜色数组
 * @returns 处理后的柱状图数据
 */
export const buildBarData = (values: number[], colors: string[]) =>
  values.map((val, i) => ({
    value: val,
    itemStyle: {
      color: new LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: colors[i % colors.length] },
        { offset: 0.6, color: colors[i % colors.length] + 'cc' },
        { offset: 1, color: colors[i % colors.length] + '66' },
      ]),
      borderRadius: [6, 6, 0, 0],
      shadowBlur: 8,
      shadowColor: colors[i % colors.length] + '55',
      shadowOffsetY: 3,
    },
  }));

/**
 * 构建水平柱状图数据
 * @param values 数值数组
 * @param colors 颜色数组
 * @returns 处理后的水平柱状图数据
 */
export const buildHBarData = (values: number[], colors: string[]) =>
  values.map((val, i) => ({
    value: val,
    itemStyle: {
      color: new LinearGradient(1, 0, 0, 0, [
        { offset: 0, color: colors[i % colors.length] },
        { offset: 0.5, color: colors[i % colors.length] + 'cc' },
        { offset: 1, color: colors[i % colors.length] + '55' },
      ]),
      borderRadius: [0, 8, 8, 0],
      shadowBlur: 6,
      shadowColor: colors[i % colors.length] + '44',
      shadowOffsetX: 3,
    },
  }));

/**
 * 构建饼图数据
 * @param entries 数据条目
 * @param colors 颜色数组
 * @returns 处理后的饼图数据
 */
export const buildPieData = (entries: [string, number][], colors: string[]) =>
  entries.map(([name, value], i) => ({
    name,
    value,
    itemStyle: {
      color: new RadialGradient(0.5, 0.5, 1, [
        { offset: 0, color: colors[i % colors.length] },
        { offset: 0.7, color: colors[i % colors.length] + 'bb' },
        { offset: 1, color: colors[i % colors.length] + '77' },
      ]),
      borderRadius: 8,
      borderColor: 'rgba(10, 25, 40, 0.8)',
      borderWidth: 2,
      shadowBlur: 12,
      shadowColor: colors[i % colors.length] + '66',
      shadowOffsetY: 4,
    },
  }));

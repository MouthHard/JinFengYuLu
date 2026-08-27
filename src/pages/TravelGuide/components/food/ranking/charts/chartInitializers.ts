import { graphic } from 'echarts/core';
const { RadialGradient } = graphic;
import type { Food } from '@/types/travelGuide';
import {
  createTooltipConfig,
  createGridConfig,
  createAxisConfig,
  CHART_COLORS,
  buildBarData,
  buildHBarData,
  buildPieData,
} from './chartConfig';
import { calculatePriceRanges, calculateCategoryCounts, groupPriceRatingData } from './dataProcessors';

/**
 * 初始化评分对比图�? * @param popularFoods 热门美食数据
 * @param chartContainer 图表容器
 * @returns 图表配置
 */
export const initRatingChart = (popularFoods: Food[] = [], chartContainer: HTMLElement | null) => {
  if (!chartContainer || !popularFoods.length) return null;

  const foodNames = popularFoods.map((food: Food) => food.name);
  const foodRatings = popularFoods.map((food: Food) => food.rating);

  return {
    tooltip: createTooltipConfig('axis'),
    grid: createGridConfig({ bottom: '22%' }),
    xAxis: createAxisConfig('category', {
      name: '美食名称',
      nameLocation: 'middle',
      nameGap: 60,
      nameTextStyle: {
        color: '#ffff00',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowBlur: 5,
        textShadowColor: 'rgba(255, 255, 0, 0.5)',
      },
      data: foodNames,
      axisLabel: {
        interval: 0,
        rotate: 0,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f0f0f0',
        textShadowBlur: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        margin: 12,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 3,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 255, 255, 0.5)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.15)',
          type: 'dashed',
          width: 1,
        },
      },
    }),
    yAxis: createAxisConfig('value', {
      name: '评分',
      nameLocation: 'end',
      nameGap: 25,
      nameTextStyle: {
        color: '#ffff00',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowBlur: 5,
        textShadowColor: 'rgba(255, 255, 0, 0.5)',
      },
      min: 3,
      max: 5.5,
      interval: 0.5,
      axisLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f0f0f0',
        textShadowBlur: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        margin: 10,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 3,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 255, 255, 0.5)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.15)',
          type: 'dashed',
          width: 1,
        },
      },
    }),
    series: [
      {
        name: '评分',
        type: 'bar',
        barWidth: '55%',
        data: buildBarData(foodRatings, CHART_COLORS),
        animation: true,
        animationDuration: 1200,
        animationEasing: 'elasticOut',
        animationDelay: (idx: number) => idx * 100,
        label: {
          show: true,
          position: 'top',
          fontSize: 13,
          fontWeight: 'bold',
          formatter: '{c}',
          color: '#fff',
          textShadowBlur: 4,
          textShadowColor: 'rgba(0, 0, 0, 0.6)',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(255, 255, 255, 0.5)',
          },
        },
      },
    ],
  };
};

/**
 * 初始化价格分布环形图
 * @param allFoods 所有美食数�? * @param chartContainer 图表容器
 * @returns 图表配置
 */
export const initPriceChart = (allFoods: Food[] = [], chartContainer: HTMLElement | null) => {
  if (!chartContainer || !allFoods.length) return null;

  const priceRanges = calculatePriceRanges(allFoods);
  const pieEntries = Object.entries(priceRanges) as [string, number][];
  const totalCount = allFoods.length;

  return {
    tooltip: createTooltipConfig('item', '{a} <br/>{b}: {c}种美�?({d}%)'),
    legend: {
      orient: 'vertical',
      right: 20,
      top: 'center',
      data: Object.keys(priceRanges),
      textStyle: {
        fontSize: 15,
        color: '#f0f0f0',
        fontWeight: 'bold',
        textShadowBlur: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
      },
      itemWidth: 16,
      itemHeight: 16,
      itemGap: 18,
      selectedMode: true,
    },
    series: [
      {
        name: '价格分布',
        type: 'pie',
        radius: ['35%', '60%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: true,
        animation: true,
        animationDuration: 1500,
        animationEasing: 'cubicOut',
        animationDelay: (idx: number) => idx * 80,
        data: buildPieData(pieEntries, CHART_COLORS),
        label: { show: false },
        emphasis: {
          scale: true,
          scaleSize: 8,
          label: { show: false },
        },
        labelLine: { show: false },
      },
      {
        name: '总数',
        type: 'pie',
        radius: ['0%', '28%'],
        center: ['30%', '50%'],
        silent: true,
        itemStyle: {
          color: new RadialGradient(0.5, 0.5, 1, [
            { offset: 0, color: 'rgba(30, 50, 70, 0.95)' },
            { offset: 1, color: 'rgba(15, 30, 50, 0.98)' },
          ]),
          borderWidth: 2,
          borderColor: 'rgba(0, 255, 255, 0.25)',
          shadowBlur: 15,
          shadowColor: 'rgba(0, 255, 255, 0.15)',
        },
        label: {
          show: true,
          position: 'center',
          fontSize: 14,
          fontWeight: 'bold',
          color: '#fff',
          formatter: `总美食数\n${totalCount}`,
          lineHeight: 22,
          textShadowBlur: 6,
          textShadowColor: 'rgba(0, 0, 0, 0.7)',
        },
        labelLine: { show: false },
        data: [{ value: 1, name: '总数' }],
      },
    ],
  };
};

/**
 * 初始化分类数量水平柱状图
 * @param allFoods 所有美食数�? * @param chartContainer 图表容器
 * @returns 图表配置
 */
export const initCategoryChart = (allFoods: Food[] = [], chartContainer: HTMLElement | null) => {
  if (!chartContainer || !allFoods.length) return null;

  const categoryCounts = calculateCategoryCounts(allFoods);

  const sortedCategories = Object.entries(categoryCounts)
    .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }));

  const categoryNames = sortedCategories.map((item) => item.name);
  const categoryValues = sortedCategories.map((item) => item.value);

  return {
    tooltip: createTooltipConfig('axis', '{b}: {c}种美�?),
    grid: createGridConfig({
      left: '18%',
      right: '12%',
      top: '10%',
      bottom: '10%',
    }),
    xAxis: createAxisConfig('value', {
      name: '美食数量',
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: {
        color: '#ffff00',
        fontSize: 14,
        fontWeight: 'bold',
        textShadowBlur: 5,
        textShadowColor: 'rgba(255, 255, 0, 0.5)',
      },
      minInterval: 1,
      axisLabel: {
        formatter: '{value}�?,
        color: '#f0f0f0',
        fontSize: 14,
        fontWeight: 'bold',
        textShadowBlur: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        margin: 10,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.3)',
          width: 2,
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.3)',
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
          type: 'dashed',
        },
      },
    }),
    yAxis: createAxisConfig('category', {
      name: '美食分类',
      nameLocation: 'end',
      nameGap: 50,
      nameTextStyle: {
        color: '#ffff00',
        fontSize: 14,
        fontWeight: 'bold',
        textShadowBlur: 5,
        textShadowColor: 'rgba(255, 255, 0, 0.5)',
      },
      data: categoryNames,
      axisLabel: {
        color: '#f0f0f0',
        fontSize: 15,
        interval: 0,
        width: 90,
        overflow: 'truncate',
        fontWeight: 'bold',
        textShadowBlur: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        margin: 12,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.3)',
          width: 2,
        },
      },
      axisTick: { show: false },
      axisPointer: {
        show: true,
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0, 255, 255, 0.1)',
          blur: 5,
        },
      },
    }),
    series: [
      {
        name: '美食数量',
        type: 'bar',
        barWidth: '60%',
        data: buildHBarData(categoryValues, CHART_COLORS),
        animation: true,
        animationDuration: 1200,
        animationEasing: 'cubicOut',
        animationDelay: (idx: number) => idx * 80,
        animationDurationUpdate: 800,
        label: {
          show: true,
          position: 'inside',
          fontSize: 12,
          fontWeight: 'bold',
          formatter: '{c}�?,
          color: '#fff',
          textShadowBlur: 3,
          textShadowColor: 'rgba(0, 0, 0, 0.8)',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowColor: 'rgba(255, 255, 255, 0.5)',
          },
          label: {
            fontSize: 14,
            color: '#fff',
            textShadowBlur: 6,
            textShadowColor: 'rgba(0, 0, 0, 0.8)',
          },
        },
      },
    ],
  };
};

/**
 * 初始化价�?评分关系气泡�? * @param allFoods 所有美食数�? * @param chartContainer 图表容器
 * @returns 图表配置
 */
export const initPriceRatingChart = (allFoods: Food[] = [], chartContainer: HTMLElement | null) => {
  if (!chartContainer || !allFoods.length) return null;

  const priceRatingGroups = groupPriceRatingData(allFoods);

  const bubbleData = Object.values(priceRatingGroups).map(
    (group: {
      price: number;
      rating: number;
      count: number;
      foods: Food[];
    }, i: number) => {
      const baseColor = CHART_COLORS[i % CHART_COLORS.length];
      return {
        value: [group.price, group.rating, group.count] as number[],
        symbolSize: Math.max(14, Math.min(65, group.count * 2.5)),
        itemStyle: {
          color: new RadialGradient(0.4, 0.4, 1, [
            { offset: 0, color: baseColor },
            { offset: 0.5, color: baseColor + 'bb' },
            { offset: 1, color: baseColor + '55' },
          ]),
          shadowBlur: 10,
          shadowColor: baseColor + '66',
          shadowOffsetY: 3,
        },
      };
    },
  );

  return {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const dataIndex = params.dataIndex;
        const group = Object.values(priceRatingGroups)[dataIndex];
        if (!group) return '';
        const priceMin = group.price - 10;
        const priceMax = group.price + 10;
        const ratingMin = group.rating - 0.25;
        const ratingMax = group.rating + 0.25;

        return `价格区间: ¥${priceMin}-${priceMax}<br/>评分区间: ${ratingMin.toFixed(
          1,
        )}-${ratingMax.toFixed(1)}<br/>美食数量: ${group.count}种美食`;
      },
      backgroundColor: 'rgba(20, 35, 55, 0.95)',
      borderColor: 'rgba(0, 255, 255, 0.5)',
      borderWidth: 2,
      textStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
      },
      transitionDuration: 0.3,
      padding: [10, 15],
      borderRadius: 8,
    },
    grid: {
      left: '12%',
      right: '12%',
      top: '15%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      name: '价格',
      nameLocation: 'middle',
      nameGap: 40,
      nameTextStyle: {
        color: '#ffff00',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowBlur: 5,
        textShadowColor: 'rgba(255, 255, 0, 0.5)',
      },
      axisLabel: {
        formatter: '¥{value}',
        color: '#f0f0f0',
        fontSize: 14,
        fontWeight: 'bold',
        textShadowBlur: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        margin: 12,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 3,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 255, 255, 0.5)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.15)',
          type: 'dashed',
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
      name: '评分',
      nameLocation: 'end',
      nameGap: 25,
      nameTextStyle: {
        color: '#ffff00',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowBlur: 5,
        textShadowColor: 'rgba(255, 255, 0, 0.5)',
      },
      min: 3,
      max: 5.5,
      interval: 0.5,
      axisLabel: {
        color: '#f0f0f0',
        fontSize: 14,
        fontWeight: 'bold',
        textShadowBlur: 3,
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        margin: 10,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 3,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 255, 255, 0.5)',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.4)',
          width: 2,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.15)',
          type: 'dashed',
          width: 1,
        },
      },
    },
    series: [
      {
        name: '价格-评分关系',
        type: 'scatter',
        data: bubbleData,
        animation: true,
        animationDuration: 1500,
        animationEasing: 'elasticOut',
        animationDelay: (idx: number) => idx * 80,
        emphasis: {
          scale: 1.5,
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(255, 255, 255, 0.6)',
          },
        },
      },
      {
        name: '趋势�?,
        type: 'line',
        data: [
          [0, 3.5],
          [200, 5.0],
        ],
        showSymbol: false,
        lineStyle: {
          color: 'rgba(0, 255, 255, 0.5)',
          width: 2,
          type: 'dashed',
        },
        tooltip: { show: false },
        animation: true,
        animationDuration: 2000,
        animationEasing: 'cubicOut',
      },
    ],
  };
};

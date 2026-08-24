import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, PieChart, LineChart, ScatterChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent,
} from 'echarts/components';
import type { Food } from '@/types/travelGuide';
import {
  initRatingChart,
  initPriceChart,
  initCategoryChart,
  initPriceRatingChart,
} from './chartInitializers';

// 注册 ECharts 组件
echarts.use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent,
]);

/**
 * 图表管理�? * 负责图表的初始化、更新、销毁等生命周期管理
 */
export class ChartManager {
  private chartContainer: HTMLElement | null = null;
  private currentChart: echarts.ECharts | null = null;
  private activeTab = 'rating';
  private props: { popularFoods?: Food[]; allFoods?: Food[] };

  /**
   * 构造函�?   * @param chartContainer 图表容器
   * @param props 组件属�?   */
  constructor(chartContainer: HTMLElement | null, props: { popularFoods?: Food[]; allFoods?: Food[] }) {
    this.chartContainer = chartContainer;
    this.props = props;
  }

  /**
   * 设置激活的Tab
   * @param tabId Tab ID
   */
  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  /**
   * 更新属�?   * @param props 新的属�?   */
  updateProps(props: { popularFoods?: Food[]; allFoods?: Food[] }) {
    this.props = props;
  }

  /**
   * 初始化图�?   */
  init() {
    if (!this.chartContainer) return;

    // 确保容器有正确的尺寸
    this.chartContainer.style.width = '100%';
    this.chartContainer.style.height = '100%';

    // 如果图表实例不存在，创建新实�?    if (!this.currentChart) {
      this.currentChart = echarts.init(this.chartContainer);
    }

    // 根据当前激活的Tab初始化对应的图表
    let chartOption = null;
    switch (this.activeTab) {
      case 'rating':
        chartOption = initRatingChart(this.props.popularFoods, this.chartContainer);
        break;
      case 'price':
        chartOption = initPriceChart(this.props.allFoods, this.chartContainer);
        break;
      case 'category':
        chartOption = initCategoryChart(this.props.allFoods, this.chartContainer);
        break;
      case 'price-rating':
        chartOption = initPriceRatingChart(this.props.allFoods, this.chartContainer);
        break;
    }

    // 设置图表选项
    if (chartOption) {
      // 使用 replaceMerge 模式，只更新变化的部�?      this.currentChart.setOption(chartOption, true);
    } else {
      // 如果没有数据，创建空图表
      this.currentChart.setOption(
        {
          title: {
            text: '暂无数据',
            left: 'center',
            top: 'center',
            textStyle: {
              color: '#999',
              fontSize: 14,
            },
          },
          grid: {
            left: '10%',
            right: '10%',
            top: '15%',
            bottom: '15%',
          },
        },
        true,
      );
    }

    // 确保图表立即调整大小以填充容�?    this.currentChart.resize();

    // 清理之前的事件监听器，避免累�?    this.currentChart.off('mouseover');
    this.currentChart.off('mouseout');

    // 添加价格分布图表的事件监�?    if (this.activeTab === 'price') {
      const chart = this.currentChart;

      chart.on('mouseover', 'series', (params: any) => {
        if (params.seriesName === '价格分布') {
          // 更新中间圆的显示内容为当前悬停的扇面信息
          chart.setOption({
            series: [
              {},
              {
                label: {
                  formatter: `${params.name}\n${params.value}种美�?(${params.percent}%)`,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#fff',
                  shadowBlur: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.8)',
                  lineHeight: 26,
                },
              },
            ],
          });
        }
      });

      chart.on('mouseout', 'series', (params: any) => {
        if (params.seriesName === '价格分布') {
          // 恢复显示总美食数
          const allFoods = this.props.allFoods || [];
          const totalCount = allFoods.length;
          chart.setOption({
            series: [
              {},
              {
                label: {
                  formatter: `总美食数\n${totalCount}`,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                  shadowBlur: 8,
                  shadowColor: 'rgba(0, 0, 0, 0.7)',
                  lineHeight: 26,
                },
              },
            ],
          });
        }
      });
    }
  }



  /**
   * 调整图表大小
   */
  resize() {
    if (this.currentChart) {
      this.currentChart.resize();
    }
  }

  /**
   * 销毁图�?   */
  destroy() {
    if (this.currentChart) {
      // 清理所有事件监听器
      this.currentChart.off();
      this.currentChart.dispose();
      this.currentChart = null;
    }
  }

  /**
   * 重新初始化图�?   */
  reinit() {
    this.destroy();
    this.init();
  }
}

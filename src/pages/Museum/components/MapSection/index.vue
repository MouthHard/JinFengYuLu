<template>
  <div class="map-content">
    <h2 class="section-title" data-text="按省份浏览">
      <span class="title-icon">🗺️</span>
      按省份浏览
    </h2>
    <div id="chinaMap" ref="mapRef" class="map-element"></div>

    <div class="selected-province" v-if="selectedProvince">
      <span class="province-label">当前选择:</span>
      <span class="province-name">{{ selectedProvince }}</span>
      <span class="province-badge"
        >{{ getMuseumCount(selectedProvince) }} 个博物馆</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import * as echarts from "echarts";
import type { Museum } from "@/types/museum";
import {
  provinceElevation,
  provinceNameMap,
  provinceColors,
  getElevationTier,
} from "@/pages/Museum/data/map";

interface Props {
  selectedProvince: string;
  museums?: Museum[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "select", province: string): void;
}>();

const mapRef = ref<HTMLElement | null>(null);
let chart: echarts.ECharts | null = null;

const getMuseumCount = (province: string) => {
  if (!props.museums) return 0;
  return props.museums.filter((m) => m.province === province).length;
};

onMounted(() => {
  loadChinaMap();
});

const loadChinaMap = () => {
  fetch("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("网络响应不正常");
      }
      return response.json();
    })
    .then((chinaJson) => {
      echarts.registerMap("china", chinaJson as any);
      initMap();
    })
    .catch((error) => {
      console.error("加载中国地图数据失败:", error);
    });
};

const initMap = () => {
  if (!mapRef.value) {
    console.error("地图容器不存在");
    return;
  }
  chart = echarts.init(mapRef.value);

  const mapData: Array<{
    name: string;
    value: number;
    elevation: number;
    tier: number;
    itemStyle: {
      areaColor: string;
      shadowOffsetY: number;
      shadowBlur: number;
      shadowColor: string;
    };
  }> = [];

  // 生成地图数据，包括所有省份
  const allProvinces = Object.entries(provinceNameMap);

  allProvinces.forEach(([fullName, shortName]) => {
    const elevation =
      provinceElevation[fullName] || provinceElevation[shortName] || 0;
    const tier = getElevationTier(fullName) || getElevationTier(shortName) || 1;

    let shadowOffsetY = 0;
    let shadowBlur = 0;
    let shadowColor = "rgba(0, 0, 0, 1)";

    switch (tier) {
      case 4: // 第一梯队 - 最高
        shadowOffsetY = 10;
        shadowBlur = 12;
        shadowColor = "rgba(0, 0, 0, 1)";
        break;
      case 3: // 第二梯队
        shadowOffsetY = 8;
        shadowBlur = 10;
        shadowColor = "rgba(0, 0, 0, 1)";
        break;
      case 2: // 第三梯队
        shadowOffsetY = 5;
        shadowBlur = 8;
        shadowColor = "rgba(0, 0, 0, 1)";
        break;
      case 1: // 第四梯队 - 最低
        shadowOffsetY = 0;
        shadowBlur = 0;
        shadowColor = "rgba(0, 0, 0, 1)";
        break;
    }

    const areaColor = provinceColors[shortName] || {
      type: "linear",
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        { offset: 0, color: "#E8DCC8" },
        { offset: 1, color: "#D4C5B0" },
      ],
    };

    mapData.push({
      name: fullName,
      value: 100,
      elevation: elevation,
      tier: tier,
      itemStyle: {
        areaColor: areaColor,
        shadowOffsetY: shadowOffsetY,
        shadowBlur: shadowBlur,
        shadowColor: shadowColor,
      },
    });
  });

  mapData.sort((a, b) => {
    if (b.tier !== a.tier) {
      return b.tier - a.tier;
    }
    return b.elevation - a.elevation;
  });

  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      borderColor: "rgba(139, 69, 19, 0.3)",
      borderWidth: 1,
      padding: [12, 16],
      textStyle: {
        color: "#1a1a2e",
      },
      extraCssText:
        "box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); border-radius: 12px;",
      formatter: function (params: any) {
        const shortName = provinceNameMap[params.name] || params.name;
        const count = getMuseumCount(shortName);
        return `
            <div style="padding: 4px;">
              <h3 style="margin: 0 0 8px 0; color: #8B4513; font-size: 16px; font-weight: 700;">${params.name}</h3>
              <p style="margin: 0; color: #4a5568; font-size: 13px;">点击查看该省份的博物馆</p>
              ${count > 0 ? `<p style="margin: 8px 0 0 0; color: #D4AF37; font-size: 12px; font-weight: 600;">共有 ${count} 个博物馆</p>` : ""}
            </div>
          `;
      },
    },
    series: [
      {
        type: "map",
        map: "china",
        roam: true,
        zoom: 1.2,
        itemStyle: {
          borderWidth: 0,
        },
        emphasis: {
          itemStyle: {
            borderWidth: 3,
            borderType: "double",
            borderColor: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#FF0000" },
                { offset: 0.16, color: "#FF7F00" },
                { offset: 0.33, color: "#FFFF00" },
                { offset: 0.5, color: "#00FF00" },
                { offset: 0.66, color: "#0000FF" },
                { offset: 0.83, color: "#8B00FF" },
                { offset: 1, color: "#FF0000" },
              ],
            },
            shadowColor: "rgba(0, 0, 0, 0.95)",
            shadowBlur: 8,
            shadowOffsetY: 2,
            // Add inset shadow for depth
            shadowInnerColor: "rgba(0, 0, 0, 0.5)",
            shadowInnerBlur: 3,
            shadowInnerOffsetX: 1,
            shadowInnerOffsetY: 1,
            // Add outer glow effect
            glowColor: "rgba(212, 175, 55, 0.9)",
            glowBlur: 12,
          },
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
            color: "#000",
            textShadowColor: "rgba(255, 255, 255, 0.8)",
            textShadowBlur: 3,
          },
        },
        select: {
          itemStyle: {
            areaColor: "#ffffff",
            shadowColor: "rgba(0, 0, 0, 0.4)",
            shadowBlur: 15,
            shadowOffsetY: 10,
          },
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
            color: "#000000",
          },
        },
        label: {
          show: false,
        },
        data: mapData,
      },
    ],
  };

  chart.setOption(option);

  chart.on("click", (params: any) => {
    const shortName = provinceNameMap[params.name] || params.name;
    emit("select", shortName);
  });

  window.addEventListener("resize", () => {
    if (chart) {
      chart.resize();
    }
  });
};

onUnmounted(() => {
  if (chart) {
    chart.dispose();
  }
});
</script>

<style lang="scss" scoped src="./index.scss"></style>

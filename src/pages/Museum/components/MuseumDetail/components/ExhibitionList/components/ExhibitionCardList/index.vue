<template>
  <div class="exhibition-scrollable">
    <div class="category-exhibitions">
      <div
        class="exhibition-item"
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        :class="{ active: selectedExhibitionId === exhibition.id }"
        :style="{
          '--bg-image': `url(${getExhibitionBackground(exhibition.id)})`,
        }"
        @click="selectExhibition(exhibition)"
      >
        <div class="exhibition-image">
          <img :src="exhibition.image" :alt="exhibition.title" />
          <div
            v-if="(exhibition as any).status"
            class="status-badge"
            :style="{
              background: getStatusGradient((exhibition as any).status),
            }"
          >
            {{ (exhibition as any).status }}
          </div>
          <div class="exhibition-actions">
            <button class="action-btn favorite-btn">收藏</button>
            <button class="action-btn share-btn">分享</button>
          </div>
        </div>
        <div class="exhibition-details">
          <h3 class="exhibition-title">{{ exhibition.title }}</h3>
          <p class="exhibition-date">展览时间：{{ exhibition.date }}</p>
          <p class="exhibition-location" v-if="exhibition.location">
            展览地点：{{ exhibition.location }}
          </p>
          <p class="exhibition-description">{{ exhibition.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Exhibition } from "@/types/museum/index";

// Props
const props = defineProps({
  exhibitions: {
    type: Array as () => Exhibition[],
    default: () => [],
  },
  selectedExhibitionId: {
    type: Number,
    default: null,
  },
});

// Emits
const emit = defineEmits(["selectExhibition"]);

// 动态导入整个文件夹的图片
const backgroundImages = import.meta.glob(
  "@/assets/image/Museum/ExhibitionCardBg/*.png",
  { eager: true, import: "default" },
);
const backgroundImageArray = Object.values(backgroundImages);

// 存储每个展览的背景图片索引
const exhibitionBackgrounds = ref<Record<number, number>>({});

// 获取展览的背景图片
const getExhibitionBackground = (exhibitionId: number) => {
  // 如果该展览还没有背景图片索引，生成一个并存储
  if (!exhibitionBackgrounds.value[exhibitionId]) {
    exhibitionBackgrounds.value[exhibitionId] = Math.floor(
      Math.random() * backgroundImageArray.length,
    );
  }
  // 返回存储的背景图片
  return backgroundImageArray[exhibitionBackgrounds.value[exhibitionId]];
};

// 根据状态获取背景渐变色
const getStatusGradient = (status: string) => {
  switch (status) {
    case "热门":
      return "linear-gradient(135deg, #8B0000 0%, #A0522D 100%)";
    case "最新":
      return "linear-gradient(135deg, #1E3A8A 0%, #312E81 100%)";
    case "即将结束":
      return "linear-gradient(135deg, #78350F 0%, #92400E 100%)";
    case "筹备中":
      return "linear-gradient(135deg, #064E3B 0%, #065F46 100%)";
    case "已结束":
      return "linear-gradient(135deg, #4338CA 0%, #4F46E5 100%)";
    default:
      return "linear-gradient(135deg, #306d47 0%, #245e38 50%, #174e29 100%)";
  }
};

// 选择展览
const selectExhibition = (exhibition: any) => {
  emit("selectExhibition", exhibition);
};
</script>

<style lang="scss" scoped src="./index.scss"></style>

<template>
  <div class="museum-detail">
    <MuseumHeader
      :museum-name="museum?.name || ''"
      :active-tab="activeTab"
      @update:active-tab="switchTab"
    />

    <main class="museum-content">
      <MuseumInfo v-if="activeTab === 'home' && museum" :museum="museum" />
      <ArtifactList
        v-if="activeTab === 'artifacts' && museum"
        :museum="museum"
      />
      <ExhibitionList
        v-if="activeTab === 'exhibitions' && museum"
        :museum="museum"
      />
      <SpecialExhibition
        v-if="activeTab === 'special' && museum"
        :museum="museum"
      />
      <CreativeGrid v-if="activeTab === 'creative'" />
      <AboutSection
        v-if="activeTab === 'about' && museum"
        :museum-id="museum.id"
        @update:active-tab="switchTab"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { museumsByProvince } from "@/pages/Museum/data";
import type { Museum } from "@/types/museum/index";
import MuseumHeader from "./components/MuseumHeader/index.vue";
import MuseumInfo from "./components/MuseumInfo/index.vue";
import ArtifactList from "./components/ArtifactList/index.vue";
import ExhibitionList from "./components/ExhibitionList/index.vue";
import SpecialExhibition from "./components/SpecialExhibition/index.vue";
import CreativeGrid from "./components/CreativeGrid/index.vue";
import AboutSection from "./components/AboutSection/index.vue";

const route = useRoute();
const router = useRouter();
const museum = ref<Museum | null>(null);
const activeTab = ref("home");

const switchTab = (tab: string) => {
  activeTab.value = tab;
};

// 将省份英文名转换为数据键名
const convertProvinceEnToKey = (provinceEn: string): string => {
  // 特殊映射处理
  const specialMapping: Record<string, string> = {
    "inner-mongolia": "Neimenggu",
    tibet: "Xizang",
    "hong-kong": "HongKong",
    macau: "Macau",
  };

  if (specialMapping[provinceEn]) {
    return specialMapping[provinceEn];
  }

  // 默认转换：首字母大写
  return provinceEn.charAt(0).toUpperCase() + provinceEn.slice(1);
};

onMounted(() => {
  const provinceEn = route.params.province as string;
  const id = Number(route.params.id);
  const provinceKey = convertProvinceEnToKey(provinceEn);
  const provinceMuseums = museumsByProvince[provinceKey];
  if (provinceMuseums) {
    const foundMuseum = provinceMuseums.find((m) => m.id === id);
    if (foundMuseum) {
      museum.value = foundMuseum;
      return;
    }
  }

  router.push("/museum");
});
</script>

<style lang="scss" scoped src="./index.scss"></style>

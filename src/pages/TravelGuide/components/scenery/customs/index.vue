<template>
  <div class="customs-culture">
    <CulturalActivities
      :activities="culturalActivities"
      @toggle-favorite="toggleFavorite"
      @share-activity="shareActivity"
    />

    <IntangibleHeritage :heritages="intangibleHeritage" />

    <FolkCustoms :elements="folkCustomsElementsComputed" />

    <CulturalFestivals :festivals="upcomingFestivals" @select-day="selectDay" />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { loadSceneryData } from '../../../data/dataLoader.ts';
  import CulturalActivities from './cultural-activities/index.vue';
  import IntangibleHeritage from './intangible-heritage/index.vue';
  import FolkCustoms from './folk-customs/index.vue';
  import CulturalFestivals from './cultural-festivals/index.vue';

  const props = defineProps<{
    provinceId: string;
  }>();

  const customsData = ref<any>(null);
  const festivals = ref<any[]>([]);
  const folkCustomsElements = ref<any[]>([]);
  const intangibleHeritageData = ref<any[]>([]);

  const culturalActivities = computed(() => {
    if (!customsData.value || !customsData.value.activities) return [];
    return customsData.value.activities.filter(
      (activity: any) => activity.category === 'culture',
    );
  });

  const intangibleHeritage = computed(() => {
    return intangibleHeritageData.value || [];
  });

  const folkCustomsElementsComputed = computed(() => {
    return folkCustomsElements.value || [];
  });

  const upcomingFestivals = computed(() => {
    if (!festivals.value || festivals.value.length === 0) return [];
    const festivalList = festivals.value;
    return [
      ...festivalList.filter((f: any) => f.isUnique),
      ...festivalList.filter((f: any) => !f.isUnique),
    ];
  });

  const toggleFavorite = (activityId: string) => {
    console.log('收藏活动:', activityId);
  };

  const shareActivity = (activityId: string) => {
    console.log('分享活动:', activityId);
  };

  const selectDay = (day: any) => {
    console.log('选中日期:', day);
  };

  const loadProvinceData = async () => {
    try {
      await loadSceneryData(props.provinceId);

      const provinceModule = await import(
        `../../../data/scenery/${props.provinceId}.ts`
      );
      const customsDataKey = `${props.provinceId}CustomsData`;
      const festivalsKey = `${props.provinceId}Festivals`;
      const folkCustomsElementsKey = `${props.provinceId}FolkCustomsElements`;
      const intangibleHeritageKey = `${props.provinceId}IntangibleHeritage`;

      customsData.value = (provinceModule as any)[customsDataKey] || null;
      festivals.value = (provinceModule as any)[festivalsKey] || [];
      folkCustomsElements.value =
        (provinceModule as any)[folkCustomsElementsKey] || [];
      intangibleHeritageData.value =
        (provinceModule as any)[intangibleHeritageKey] || [];
    } catch (error) {
      console.error('Failed to load scenery data:', error);
    }
  };

  watch(
    () => props.provinceId,
    () => {
      loadProvinceData();
    },
    { immediate: true },
  );
</script>

<style scoped src="./index.scss" />

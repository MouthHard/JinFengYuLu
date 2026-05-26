<template>
  <div class="scenery-module">
    <div class="tab-navigation">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeTab === tab.id }"
        @click="switchTab(tab.id)"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        <span class="tab-text">{{ tab.name }}</span>
      </button>
    </div>

    <div class="tab-content">
      <component
        :is="
          activeTab === 'overview'
            ? OverviewSubModule
            : activeTab === 'nature'
              ? NatureSubModule
              : activeTab === 'culture'
                ? CultureSubModule
                : SeasonsSubModule
        "
        :key="provinceId + '-' + activeTab"
        :province-id="provinceId"
        class="tab-panel active"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import OverviewSubModule from './overview/index.vue';
  import NatureSubModule from './nature/index.vue';
  import CultureSubModule from './culture/index.vue';

  import SeasonsSubModule from './customs/index.vue';
  import { sceneryTabs } from '../../data/scenery.ts';
  import './index.scss';

  const props = defineProps<{
    provinceId: string;
  }>();

  const activeTab = ref('overview');

  const tabs = sceneryTabs;

  const switchTab = (tabId: string) => {
    activeTab.value = tabId;
  };
</script>

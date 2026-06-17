<template>
  <div class="tabs-container">
    <div class="tabs-wrapper">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-button', { active: activeTab === tab.key }]"
        @click="handleTabClick(tab.key)"
      >
        <span class="tab-icon">
          <MusicNoteIcon v-if="tab.icon === 'music'" />
          <HeartFilledIcon v-else-if="tab.icon === 'favorite'" />
          <PlaylistIcon v-else-if="tab.icon === 'playlist'" />
          <HistoryIcon v-else-if="tab.icon === 'history'" />
          <CheckCircleIcon v-else />
        </span>
        <span class="tab-label">{{ tab.label }}</span>
        <span v-if="tab.count !== undefined" class="tab-badge">
          {{ tab.count }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import MusicNoteIcon from '@/pages/Music/icons/Profile/common/MusicNoteIcon.vue';
import HeartFilledIcon from '@/pages/Music/icons/Profile/common/HeartFilledIcon.vue';
import PlaylistIcon from '@/pages/Music/icons/Profile/common/PlaylistIcon.vue';
import HistoryIcon from '@/pages/Music/icons/Profile/common/HistoryIcon.vue';
import CheckCircleIcon from '@/pages/Music/icons/MyMusic/common/CheckCircleIcon.vue';

defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => []
  },
  activeTab: {
    type: String,
    required: true,
    default: ''
  }
});

const emit = defineEmits(['tabChange']);

const handleTabClick = (tabKey) => {
  emit('tabChange', tabKey);
};
</script>

<style src="./index.scss" lang="scss"></style>


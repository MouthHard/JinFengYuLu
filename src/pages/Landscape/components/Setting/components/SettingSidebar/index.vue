<template>
  <aside class="setting-sidebar">
    <nav class="sidebar-nav">
      <button
        v-for="section in sections"
        :key="section.id"
        class="nav-item"
        :class="{ active: activeSection === section.id }"
        @click="$emit('change', section.id)"
      >
        <span class="nav-icon">
          <SettingIcon>
            <path v-if="section.id === 'account'" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle v-if="section.id === 'account'" cx="12" cy="7" r="4" />
            <path v-if="section.id === 'photography'" d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle v-if="section.id === 'photography'" cx="12" cy="13" r="3" />
            <path v-if="section.id === 'upload'" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline v-if="section.id === 'upload'" points="17 8 12 3 7 8" />
            <line v-if="section.id === 'upload'" x1="12" y1="3" x2="12" y2="15" />
            <path v-if="section.id === 'appearance'" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            <path v-if="section.id === 'copyright'" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path v-if="section.id === 'copyright'" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            <path v-if="section.id === 'notifications'" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path v-if="section.id === 'notifications'" d="M13.73 21a2 2 0 0 1-3.46 0" />
            <path v-if="section.id === 'social'" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            <path v-if="section.id === 'privacy'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle v-if="section.id === 'about'" cx="12" cy="12" r="10" />
            <line v-if="section.id === 'about'" x1="12" y1="16" x2="12" y2="12" />
            <line v-if="section.id === 'about'" x1="12" y1="8" x2="12.01" y2="8" />
          </SettingIcon>
        </span>
        <span class="nav-label">{{ section.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import SettingIcon from '@/pages/Landscape/icon/components/setting/SettingIcon.vue'

defineProps<{
  activeSection: string
}>()

defineEmits<{
  change: [section: string]
}>()

const sections = [
  { id: 'account', label: '账户' },
  { id: 'photography', label: '摄影' },
  { id: 'upload', label: '上传' },
  { id: 'appearance', label: '外观' },
  { id: 'copyright', label: '版权' },
  { id: 'notifications', label: '通知' },
  { id: 'social', label: '社交' },
  { id: 'privacy', label: '隐私' },
  { id: 'about', label: '关于' }
]
</script>

<style lang="scss" src="./index.scss"></style>
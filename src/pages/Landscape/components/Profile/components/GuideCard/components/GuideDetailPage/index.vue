<template>
  <div class="inner-page" :class="{ expanded: isExpanded }" @click="$emit('click')">
    <div class="page-texture"></div>
    <div class="back-indicator">
      <ChevronLeftIcon :stroke-width="2" />
      <span>点击返回</span>
    </div>

    <div class="inner-content" @click.stop>
      <div class="page-header">
        <h2 class="page-title">{{ item.title }}</h2>
        <p v-if="item.summary" class="page-subtitle">{{ item.summary }}</p>
      </div>

      <div class="main-section">
        <div class="info-grid">
          <div v-if="item.transport" class="info-card">
            <div class="info-icon">
              <ZapIcon />
            </div>
            <div class="info-body">
              <span class="info-label">交通</span>
              <span class="info-value">{{ item.transport }}</span>
            </div>
          </div>

          <div v-if="item.audience" class="info-card">
            <div class="info-icon">
              <UsersGroupIcon />
            </div>
            <div class="info-body">
              <span class="info-label">适合</span>
              <span class="info-value">{{ item.audience }}</span>
            </div>
          </div>

          <div v-if="item.accommodation" class="info-card">
            <div class="info-icon">
              <BuildingIcon />
            </div>
            <div class="info-body">
              <span class="info-label">住宿</span>
              <span class="info-value">{{ item.accommodation }}</span>
            </div>
          </div>

          <div v-if="item.language" class="info-card">
            <div class="info-icon">
              <MessageIcon />
            </div>
            <div class="info-body">
              <span class="info-label">语言</span>
              <span class="info-value">{{ item.language }}</span>
            </div>
          </div>
        </div>

        <div v-if="item.highlights?.length" class="highlights-section">
          <h4 class="section-header">
            <StarIcon />
            核心亮点
          </h4>
          <div class="highlights-grid">
            <span v-for="(h, idx) in item.highlights" :key="idx" class="highlight-card">
              {{ h }}
            </span>
          </div>
        </div>

        <div v-if="item.warnings?.length" class="warnings-section">
          <div class="warning-card">
            <AlertTriangleIcon />
            <div class="warning-content">
              <span class="warning-title">注意</span>
              <span class="warning-text">{{ item.warnings.join(' · ') }}</span>
            </div>
          </div>
        </div>

        <div v-if="item.shootTime || item.shootParams?.length" class="shoot-section">
          <h4 class="section-header">
            <ClockIcon />
            拍摄指南
          </h4>
          <div class="shoot-info">
            <div v-if="item.shootTime" class="shoot-time">
              <span class="shoot-label">最佳</span>
              <span class="shoot-value">{{ item.shootTime }}</span>
            </div>
            <div v-if="item.shootParams?.length" class="params-grid">
              <div v-for="(p, idx) in item.shootParams" :key="idx" class="param-item">
                <span class="param-label">{{ p.label }}</span>
                <span class="param-value">{{ p.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="item.gears?.length" class="gear-section">
          <h4 class="section-header">
            <LayoutIcon />
            器材清单
          </h4>
          <div class="gear-grid">
            <span v-for="(g, idx) in item.gears" :key="idx" class="gear-tag" :class="{ required: g.required }">
              <StarIcon v-if="g.required" />
              {{ g.name }}
            </span>
          </div>
        </div>

        <div v-if="item.safety?.length" class="safety-section">
          <h4 class="section-header">
            <ShieldIcon />
            安全须知
          </h4>
          <div class="safety-list">
            <div v-for="(s, idx) in item.safety" :key="idx" class="safety-item" :class="s.type">
              <span class="safety-title">{{ s.title }}</span>
              <span class="safety-content">{{ s.content }}</span>
            </div>
          </div>
        </div>

        <div v-if="item.altitude || item.temperature" class="env-section">
          <div v-if="item.altitude" class="env-item">
            <LayersIcon />
            <span class="env-value">{{ item.altitude }}</span>
          </div>
          <div v-if="item.temperature" class="env-item">
            <TemperatureIcon />
            <span class="env-value">{{ item.temperature }}</span>
          </div>
        </div>

        <div v-if="item.tips?.length" class="tips-section">
          <h4 class="section-header">
            <InfoCircleIcon />
            实用贴士
          </h4>
          <ul class="tips-list">
            <li v-for="(t, idx) in item.tips" :key="idx">{{ t }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GuideItem } from '@/typesOfPages/landscape'
import ChevronLeftIcon from '@/pages/Landscape/icon/common/ChevronLeftIcon.vue'
import ZapIcon from '@/pages/Landscape/icon/common/ZapIcon.vue'
import UsersGroupIcon from '@/pages/Landscape/icon/common/UsersGroupIcon.vue'
import BuildingIcon from '@/pages/Landscape/icon/Profile/GuideCard/BuildingIcon.vue'
import MessageIcon from '@/pages/Landscape/icon/common/MessageIcon.vue'
import StarIcon from '@/pages/Landscape/icon/common/StarIcon.vue'
import AlertTriangleIcon from '@/pages/Landscape/icon/Guides/GuideCard/AlertTriangleIcon.vue'
import ClockIcon from '@/pages/Landscape/icon/common/ClockIcon.vue'
import LayoutIcon from '@/pages/Landscape/icon/common/LayoutIcon.vue'
import ShieldIcon from '@/pages/Landscape/icon/common/ShieldIcon.vue'
import LayersIcon from '@/pages/Landscape/icon/common/LayersIcon.vue'
import TemperatureIcon from '@/pages/Landscape/icon/Profile/GuideCard/TemperatureIcon.vue'
import InfoCircleIcon from '@/pages/Landscape/icon/common/InfoCircleIcon.vue'

defineProps<{
  item: GuideItem
  isExpanded?: boolean
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped lang="scss" src="./index.scss" />
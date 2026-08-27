<template>
  <div class="modal-content-wrapper">
    <div :class="['modal-excerpt', `mode-${travelModeClass}`]">{{ guide.excerpt }}</div>

    <div class="modal-content" v-html="sanitizedContent"></div>

    <div v-if="guide.sections && guide.sections.length" class="content-sections">
      <div v-for="(section, index) in guide.sections" :key="index" class="section-block">
        <h4 class="section-title">{{ section.title }}</h4>
        <ul class="section-items">
          <li v-for="(item, idx) in section.items" :key="idx">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div v-if="guide.equipments && guide.equipments.length" class="equipments-section">
      <h4 class="equipments-title">装备清单</h4>
      <div class="equipments-grid">
        <div v-for="(equipment, index) in guide.equipments" :key="index" class="equipment-card">
          <div class="equipment-header">
            <span class="equipment-icon">{{ equipment.icon }}</span>
            <span class="equipment-title-text">{{ equipment.title }}</span>
          </div>
          <ul class="equipment-items">
            <li v-for="(item, idx) in equipment.items" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="guide.tips && guide.tips.length" class="tips-section">
      <h4 class="tips-title">实用提示</h4>
      <div class="tips-list">
        <div v-for="(tip, index) in guide.tips" :key="index" :class="['tip-card', `tip-${tip.type || 'info'}`]">
          <div class="tip-icon">
            <span v-if="tip.type === 'warning'">⚠️</span>
            <span v-else-if="tip.type === 'tip'">💡</span>
            <span v-else>ℹ️</span>
          </div>
          <div class="tip-content">
            <h5 class="tip-title">{{ tip.title }}</h5>
            <p class="tip-text">{{ tip.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasExtraInfo" class="extra-info-section">
      <div v-if="guide.bestTime" class="info-item">
        <span class="info-label">最佳时�?/span>
        <span class="info-value">{{ guide.bestTime }}</span>
      </div>
      <div v-if="guide.weather" class="info-item">
        <span class="info-label">天气情况</span>
        <span class="info-value">{{ guide.weather }}</span>
      </div>
      <div v-if="guide.transportation" class="info-item">
        <span class="info-label">交通方�?/span>
        <span class="info-value">{{ guide.transportation }}</span>
      </div>
      <div v-if="guide.accommodation" class="info-item">
        <span class="info-label">住宿建议</span>
        <span class="info-value">{{ guide.accommodation }}</span>
      </div>
      <div v-if="guide.budgetDetail" class="info-item">
        <span class="info-label">预算详情</span>
        <span class="info-value">{{ guide.budgetDetail }}</span>
      </div>
    </div>

    <div v-if="guide.safetyNotes && guide.safetyNotes.length" class="safety-section">
      <h4 class="safety-title">安全须知</h4>
      <ul class="safety-list">
        <li v-for="(note, index) in guide.safetyNotes" :key="index">{{ note }}</li>
      </ul>
    </div>

    <div v-if="guide.routePoints && guide.routePoints.length" class="route-section">
      <h4 class="route-title">行程路线</h4>
      <div class="route-timeline">
        <div v-for="(point, index) in guide.routePoints" :key="index" class="route-point">
          <div class="route-marker">{{ index + 1 }}</div>
          <div class="route-text">{{ point }}</div>
        </div>
      </div>
    </div>

    <div v-if="guide.recommendedGear && guide.recommendedGear.length" class="gear-section">
      <h4 class="gear-title">推荐装备</h4>
      <div class="gear-tags">
        <span v-for="(gear, index) in guide.recommendedGear" :key="index" class="gear-tag">{{ gear }}</span>
      </div>
    </div>

    <div v-if="guide.postProcessing && guide.postProcessing.length" class="processing-section">
      <h4 class="processing-title">后期处理</h4>
      <ul class="processing-list">
        <li v-for="(step, index) in guide.postProcessing" :key="index">{{ step }}</li>
      </ul>
    </div>

    <div :class="['travel-mode-section', `mode-${travelModeClass}`]">
      <div class="section-header">
        <div :class="['section-icon', `mode-${travelModeClass}`]">
          <span>{{ travelModeIcon }}</span>
        </div>
        <div class="section-title-group">
          <h3>{{ travelModeTitle }}</h3>
          <p class="section-subtitle">{{ travelModeSubtitle }}</p>
        </div>
      </div>

      <div v-if="travelMode === '自驾�?" class="mode-content self-drive">
        <div class="info-card">
          <div class="info-icon">🗺�?/div>
          <div class="info-content">
            <h4>路线规划</h4>
            <p>建议使用高德地图或百度地图离线导航，部分路段信号较差�?/p>
          </div>
        </div>
        <div class="info-card">
          <div class="info-icon">�?/div>
          <div class="info-content">
            <h4>加油提示</h4>
            <p>提前在县城加满油，部分偏远路段可能超�?00公里无加油站�?/p>
          </div>
        </div>
        <div class="info-card">
          <div class="info-icon">🚙</div>
          <div class="info-content">
            <h4>车辆准备</h4>
            <p>建议驾驶四驱SUV，携带备胎、千斤顶、防滑链等工具�?/p>
          </div>
        </div>
      </div>

      <div v-else-if="travelMode === '自由�?" class="mode-content free-travel">
        <div class="info-card">
          <div class="info-icon">🚌</div>
          <div class="info-content">
            <h4>交通指�?/h4>
            <p>当地公共交通便捷，可使用打车软件或公交出行�?/p>
          </div>
        </div>
        <div class="info-card">
          <div class="info-icon">🍜</div>
          <div class="info-content">
            <h4>美食推荐</h4>
            <p>推荐品尝当地特色小吃，可询问民宿老板获取美食攻略�?/p>
          </div>
        </div>
        <div class="info-card">
          <div class="info-icon">🏨</div>
          <div class="info-content">
            <h4>住宿建议</h4>
            <p>建议住在老城区或景区附近，出行更方便�?/p>
          </div>
        </div>
      </div>

      <div v-else class="mode-content default-mode">
        <div class="info-card">
          <div class="info-icon">📋</div>
          <div class="info-content">
            <h4>旅行贴士</h4>
            <p>{{ travelMode }}相关实用信息，助您旅途顺利�?/p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-tags">
      <span v-for="tag in guide.tags" :key="tag" :class="['tag', `mode-${travelModeClass}`]">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DOMPurify from 'dompurify'
import { travelModeMap } from '@/utils/landscape/constants'
import type { GlobalGuide } from '@/types/landscape/data'

interface Props {
  guide: GlobalGuide
}

const props = defineProps<Props>()

const sanitizedContent = computed(() => {
  const content = props.guide.content || ''
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'ul', 'ol', 'li', 'h3', 'h4', 'h5', 'span', 'div', 'a', 'img', 'blockquote'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'target', 'rel'],
  })
})

const travelMode = computed(() => props.guide.travelMode || 'self-drive')
const travelModeClass = computed(() => {
  const mode = props.guide.travelMode || 'self-drive'
  return travelModeMap[mode]?.class || 'default'
})
const travelModeIcon = computed(() => {
  const mode = props.guide.travelMode || 'self-drive'
  return travelModeMap[mode]?.icon || '📋'
})
const travelModeTitle = computed(() => {
  const mode = props.guide.travelMode || 'self-drive'
  return travelModeMap[mode]?.title || '旅行指南'
})
const travelModeSubtitle = computed(() => {
  const mode = props.guide.travelMode || 'self-drive'
  return travelModeMap[mode]?.subtitle || '实用信息'
})

const hasExtraInfo = computed(() => {
  return (
    props.guide.bestTime ||
    props.guide.weather ||
    props.guide.transportation ||
    props.guide.accommodation ||
    props.guide.budgetDetail
  )
})
</script>

<style scoped lang="scss" src="./index.scss" />

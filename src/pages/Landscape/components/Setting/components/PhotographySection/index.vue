<template>
  <div class="section-content">
    <h2 class="section-title">摄影设置</h2>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">设备配置</h3>
          <p class="card-desc">设置你常用的摄影设备</p>
        </div>
      </div>
      <div class="card-body">
        <div class="info-row">
          <span class="info-label">主相机</span>
          <span class="info-value">Sony A7R V</span>
        </div>
        <div class="info-row">
          <span class="info-label">常用镜头</span>
          <span class="info-value">24-70mm f/2.8 GM</span>
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">默认画质</span>
            <span class="item-desc">上传图片的默认质量</span>
          </div>
          <CustomSelect 
            v-model="imageQuality" 
            :options="qualityOptions"
            placeholder="选择画质"
          />
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l2 7h7l-5.5 4 2.5 7L12 16l-6 4 2.5-7L3 9h7z" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">擅长领域</h3>
          <p class="card-desc">选择你擅长的摄影领域</p>
        </div>
      </div>
      <div class="card-body">
        <div v-if="activeTags.length > 0" class="selected-tags">
          <span class="selected-label">已选择 ({{ activeTags.length }})</span>
          <div class="selected-list">
            <span 
              v-for="tag in activeTags" 
              :key="tag" 
              class="selected-tag"
            >
              {{ tag }}
              <button class="remove-tag" @click="removeTag(tag)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div class="tags-container">
          <button 
            v-for="tag in displayedTags" 
            :key="tag"
            :class="['tag-item', { active: activeTags.includes(tag) }]"
            @click="toggleTag(tag)"
          >
            {{ tag }}
          </button>

          <button 
            v-if="showMoreToggle" 
            class="more-btn"
            @click="toggleShowMore"
          >
            {{ showMore ? '收起' : '更多' }}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2"
              :class="{ rotated: showMore }"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div class="custom-tag-input">
          <input 
            v-model="newTag" 
            type="text" 
            placeholder="添加自定义标签..." 
            class="tag-input-field"
            @keyup.enter="addCustomTag"
          />
          <button class="add-tag-btn" @click="addCustomTag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="setting-card">
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <div>
          <h3 class="card-title">水印设置</h3>
          <p class="card-desc">为你的作品添加水印</p>
        </div>
      </div>
      <div class="card-body">
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">启用水印</span>
            <span class="item-desc">上传图片时自动添加水印</span>
          </div>
          <CustomSwitch v-model="enableWatermark" />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">水印位置</span>
            <span class="item-desc">选择水印在图片中的位置</span>
          </div>
          <CustomSelect 
            v-model="watermarkPosition" 
            :options="positionOptions"
            placeholder="选择位置"
          />
        </div>
        <div class="setting-item">
          <div class="item-info">
            <span class="item-label">水印透明度</span>
            <span class="item-desc">调整水印的透明程度</span>
          </div>
          <div class="slider-container">
            <input type="range" min="0" max="100" value="60" class="range-slider" />
            <span class="slider-value">60%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CustomSwitch from '../../common/CustomSwitch.vue'
import CustomSelect from '../../common/CustomSelect.vue'
import { PhotographyQualityOptions, WatermarkPositionOptions } from '@/utils/landscape/constants'

const imageQuality = ref('原图')
const enableWatermark = ref(true)
const watermarkPosition = ref('右下角')

const defaultTags = ['风光摄影', '城市夜景', '星空银河', '日出日落', '山川湖泊', '建筑摄影', '长曝光', '无人机航拍']
const customTags = ref<string[]>([])
const activeTags = ref(['风光摄影', '星空银河', '山川湖泊'])
const showMore = ref(false)
const newTag = ref('')

const allTags = computed(() => [...defaultTags, ...customTags.value])
const displayedTags = computed(() => {
  if (showMore.value) {
    return allTags.value
  }
  return allTags.value.slice(0, 5)
})
const showMoreToggle = computed(() => allTags.value.length > 5)

const toggleTag = (tag: string) => {
  const index = activeTags.value.indexOf(tag)
  if (index > -1) {
    activeTags.value.splice(index, 1)
  } else {
    activeTags.value.push(tag)
  }
}

const removeTag = (tag: string) => {
  const index = activeTags.value.indexOf(tag)
  if (index > -1) {
    activeTags.value.splice(index, 1)
  }
}

const toggleShowMore = () => {
  showMore.value = !showMore.value
}

const addCustomTag = () => {
  const tag = newTag.value.trim()
  if (tag && !allTags.value.includes(tag)) {
    customTags.value.push(tag)
    activeTags.value.push(tag)
    newTag.value = ''
  }
}

const qualityOptions = PhotographyQualityOptions

const positionOptions = WatermarkPositionOptions
</script>

<style lang="scss" src="./index.scss"></style>
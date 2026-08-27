<template>
  <div class="custom-switch" :class="{ 'is-checked': modelValue, 'is-disabled': disabled }" @click="toggle">
    <div class="switch-track">
      <div class="switch-thumb">
        <span class="thumb-shine"></span>
        <span class="thumb-highlight"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
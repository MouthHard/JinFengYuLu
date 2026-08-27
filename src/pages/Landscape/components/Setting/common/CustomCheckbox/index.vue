<template>
  <label class="custom-checkbox" :class="{ 'is-checked': modelValue, 'is-disabled': disabled }">
    <input type="checkbox" :checked="modelValue" :disabled="disabled" class="checkbox-input"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
    <span class="checkbox-box">
      <CheckIcon v-if="modelValue" class="check-icon" :stroke-width="2.5" />
    </span>
    <span v-if="$slots.default" class="checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import CheckIcon from '../../../../icon/common/CheckIcon.vue'

defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<style lang="scss" src="./index.scss"></style>
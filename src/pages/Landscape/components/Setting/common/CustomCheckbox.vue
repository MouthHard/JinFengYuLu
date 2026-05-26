<template>
  <label class="custom-checkbox" :class="{ 'is-checked': modelValue, 'is-disabled': disabled }">
    <input 
      type="checkbox" 
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      class="checkbox-input"
    />
    <span class="checkbox-box">
      <svg v-if="modelValue" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
    <span v-if="$slots.default" class="checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<style lang="scss" src="./CustomCheckbox.scss"></style>
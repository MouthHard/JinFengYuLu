<template>
  <div ref="selectRef" class="custom-select">
    <div class="select-trigger" :class="{ 'is-open': isOpen, 'is-disabled': disabled }" @click="toggleDropdown">
      <span class="select-value" :class="{ placeholder: !selectedLabel }">
        {{ selectedLabel || placeholder }}
      </span>
      <ChevronDownIcon class="select-arrow" :class="{ 'is-rotate': isOpen && placement === 'bottom' }" />
    </div>

    <Teleport to="body">
      <Transition name="dropdown">
        <div v-if="isOpen" ref="dropdownRef" class="select-dropdown" :class="{ 'is-up': placement === 'top' }"
          :style="dropdownStyle">
          <div class="dropdown-header"> </div>
          <div class="dropdown-list">
            <div v-for="option in options" :key="option.value" class="dropdown-item"
              :class="{ 'is-selected': modelValue === option.value }" @click="selectOption(option)">
              <span>{{ option.label }}</span>
              <CheckIcon v-if="modelValue === option.value" class="check-icon" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
} from 'vue'
import CheckIcon from '../../../../icon/common/CheckIcon.vue'
import ChevronDownIcon from '../../../../icon/common/ChevronDownIcon.vue'

interface Option {
  label: string;
  value: string | number;
}

const props = defineProps<{
  modelValue: string | number;
  options: readonly Option[];
  placeholder?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const selectRef = ref<HTMLElement>();
const dropdownRef = ref<HTMLElement>();
const isOpen = ref(false);
const dropdownStyle = ref<Record<string, string>>({});
const placement = ref<'top' | 'bottom'>('bottom');

const selectedLabel = computed(() => {
  const option = props.options.find((opt) => opt.value === props.modelValue);
  return option?.label || '';
});

function toggleDropdown() {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      nextTick(updateDropdownPosition);
    }
  }
}

function selectOption(option: Option) {
  emit('update:modelValue', option.value);
  isOpen.value = false;
}

function updateDropdownPosition() {
  if (!selectRef.value) return;

  const rect = selectRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  let dropdownHeight = dropdownRef.value?.offsetHeight || 0;
  if (dropdownHeight === 0) {
    dropdownHeight = Math.min(props.options.length * 48 + 20, 260);
  }

  const gap = 8;

  const spaceBelow = viewportHeight - rect.bottom - gap;
  const spaceAbove = rect.top - gap;

  let newPlacement: 'top' | 'bottom';
  if (spaceBelow >= dropdownHeight || spaceBelow >= spaceAbove) {
    newPlacement = 'bottom';
  } else {
    newPlacement = 'top';
  }

  placement.value = newPlacement;

  let top: number;
  if (newPlacement === 'bottom') {
    top = rect.bottom + gap;
  } else {
    top = rect.top - dropdownHeight - gap;
  }

  let left = rect.left;
  if (left + rect.width > viewportWidth - 10) {
    left = viewportWidth - rect.width - 10;
  }
  if (left < 10) {
    left = 10;
  }

  dropdownStyle.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    width: `${rect.width}px`,
    zIndex: '99999',
  };
}

function handleClickOutside(event: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    if (
      dropdownRef.value &&
      !dropdownRef.value.contains(event.target as Node)
    ) {
      isOpen.value = false;
    }
  }
}

watch(isOpen, (val) => {
  if (val) {
    nextTick(() => {
      updateDropdownPosition();
    });
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', updateDropdownPosition);
  window.addEventListener('scroll', updateDropdownPosition, true);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updateDropdownPosition);
  window.removeEventListener('scroll', updateDropdownPosition, true);
});
</script>

<style lang="scss">
@use './index.scss';
</style>
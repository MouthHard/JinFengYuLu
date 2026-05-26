<template>
  <div class="custom-select" ref="selectRef">
    <div
      class="select-trigger"
      :class="{ 'is-open': isOpen, 'is-disabled': disabled }"
      @click="toggleDropdown"
    >
      <span class="select-value" :class="{ placeholder: !selectedLabel }">
        {{ selectedLabel || placeholder }}
      </span>
      <svg
        class="select-arrow"
        :class="{ 'is-rotate': isOpen && placement === 'bottom' }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>

    <Teleport to="body">
      <Transition name="dropdown">
        <div
          class="select-dropdown"
          :class="{ 'is-up': placement === 'top' }"
          v-if="isOpen"
          :style="dropdownStyle"
          ref="dropdownRef"
        >
          <div class="dropdown-header"></div>
          <div class="dropdown-list">
            <div
              v-for="option in options"
              :key="option.value"
              class="dropdown-item"
              :class="{ 'is-selected': modelValue === option.value }"
              @click="selectOption(option)"
            >
              <span>{{ option.label }}</span>
              <svg
                v-if="modelValue === option.value"
                class="check-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
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
  } from 'vue';

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

    // 获取下拉菜单实际高度或使用预估高度
    let dropdownHeight = dropdownRef.value?.offsetHeight || 0;
    if (dropdownHeight === 0) {
      // 预估高度：每项约48px + padding
      dropdownHeight = Math.min(props.options.length * 48 + 20, 260);
    }

    const gap = 8; // 与触发器的间距

    // 计算向下展开是否会超出屏幕底部
    const spaceBelow = viewportHeight - rect.bottom - gap;
    const spaceAbove = rect.top - gap;

    // 判断最佳放置位置：优先向下，如果空间不足则向上
    let newPlacement: 'top' | 'bottom';
    if (spaceBelow >= dropdownHeight || spaceBelow >= spaceAbove) {
      newPlacement = 'bottom';
    } else {
      newPlacement = 'top';
    }

    placement.value = newPlacement;

    // 计算位置
    let top: number;
    if (newPlacement === 'bottom') {
      top = rect.bottom + gap;
    } else {
      top = rect.top - dropdownHeight - gap;
    }

    // 确保不超出左右边界
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
  @use './CustomSelect.scss';
</style>

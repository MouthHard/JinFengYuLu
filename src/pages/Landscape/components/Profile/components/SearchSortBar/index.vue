<template>
  <div class="search-sort-bar">
    <div class="search-container" :class="{ focused: searchFocused }">
      <div class="search-input-wrap">
        <SearchIcon class="search-icon" />
        <input
          :value="searchKeyword"
          type="text"
          :placeholder="placeholder"
          @input="handleInput"
          @focus="searchFocused = true"
          @blur="handleBlur"
        />
        <button v-if="searchKeyword" class="clear-btn" @click="clearSearch">
          <span class="clear-x">×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchIcon from '../../../../icon/common/SearchIcon.vue';

defineProps<{
  searchKeyword: string;
  placeholder: string;
}>();

const emit = defineEmits<{
  'update:searchKeyword': [value: string];
}>();

const searchFocused = ref(false);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:searchKeyword', target.value);
};

const clearSearch = () => {
  emit('update:searchKeyword', '');
};

const handleBlur = () => {
  setTimeout(() => {
    searchFocused.value = false;
  }, 150);
};
</script>

<style scoped lang="scss" src="./index.scss" />

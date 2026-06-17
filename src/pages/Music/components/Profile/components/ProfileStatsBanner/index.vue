<template>
  <div class="stats-banner">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="stat-item"
      :class="getGradientClass(stat.gradient)"
    >
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileStatsBanner',
  props: {
    stats: {
      type: Array,
      required: true,
      default: () => [
        { value: '0', label: '粉丝', gradient: 'purple' },
        { value: '0', label: '关注', gradient: 'pink' },
        { value: '0', label: '听歌', gradient: 'blue' },
        { value: '0', label: '歌单', gradient: 'green' },
        { value: '0', label: '喜欢', gradient: 'gold' }
      ],
      validator: (value) => {
        return value.every(stat => {
          return typeof stat.value === 'string' &&
                 typeof stat.label === 'string' &&
                 typeof stat.gradient === 'string';
        });
      }
    }
  },
  methods: {
    getGradientClass(gradient) {
      const gradientMap = {
        purple: 'gradient-purple',
        pink: 'gradient-pink',
        blue: 'gradient-blue',
        green: 'gradient-green',
        gold: 'gradient-gold'
      };
      return gradientMap[gradient] || 'gradient-purple';
    }
  }
}
</script>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
    default: () => [
      { value: '0', label: '粉丝', gradient: 'purple' },
      { value: '0', label: '关注', gradient: 'pink' },
      { value: '0', label: '听歌', gradient: 'blue' },
      { value: '0', label: '歌单', gradient: 'green' },
      { value: '0', label: '喜欢', gradient: 'gold' }
    ],
    validator: (value) => {
      return value.every(stat => {
        return typeof stat.value === 'string' &&
               typeof stat.label === 'string' &&
               typeof stat.gradient === 'string';
      });
    }
  }
});

const getGradientClass = (gradient) => {
  const gradientMap = {
    purple: 'gradient-purple',
    pink: 'gradient-pink',
    blue: 'gradient-blue',
    green: 'gradient-green',
    gold: 'gradient-gold'
  };
  return gradientMap[gradient] || 'gradient-purple';
};
</script>

<style src="./index.scss" lang="scss"></style>

<template>
  <div class="profile-stats">
    <div class="stats-section">
      <div class="section-header">
        <h3 class="section-title">统计</h3>
      </div>
      <div class="stats-cards">
        <div v-for="(stat, index) in statsCards" :key="index" class="stat-card" :style="{ background: stat.gradient }">
          <div class="stat-icon">
            <component :is="stat.icon" width="32" height="32" />
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="trend-section">
      <div class="section-header">
        <h3 class="section-title">本周听歌</h3>
      </div>
      <div class="trend-chart">
        <div v-for="(day, index) in weeklyData" :key="index" class="bar-container" @mouseenter="showTooltip(index)"
          @mouseleave="hideTooltip">
          <div v-if="tooltipIndex === index" class="tooltip">
            <div class="tooltip-content">
              <div v-if="day.songs && day.songs.length" class="tooltip-songs">
                <div v-for="(song, songIndex) in day.songs.slice(0, 5)" :key="songIndex" class="tooltip-song">
                  {{ song }}
                </div>
                <div v-if="day.songs.length > 5" class="tooltip-more">
                  还有 {{ day.songs.length - 5 }} 首
                </div>
              </div>
              <div v-else class="tooltip-empty">暂无</div>
            </div>
          </div>
          <div class="bar" :style="{
            height: getBarHeight(day.count) + 'px',
            background: `linear-gradient(180deg, ${barGradient.start} 0%, ${barGradient.end} 100%)`
          }"></div>
          <div class="bar-label">{{ day.day }}</div>
          <div class="bar-count">{{ day.count }}</div>
        </div>
      </div>
    </div>

    <div class="artists-section">
      <div class="section-header">
        <h3 class="section-title">常听</h3>
      </div>
      <div class="artists-grid">
        <div v-for="(artist, index) in topArtists" :key="index" class="artist-card" @mouseenter="hoveredArtist = index"
          @mouseleave="hoveredArtist = null">
          <div class="artist-avatar">
            <img :src="artist.avatar" :alt="artist.name" />
          </div>
          <div class="artist-info">
            <div class="artist-name">{{ artist.name }}</div>
            <div class="artist-genre">{{ artist.genre }}</div>
            <div class="artist-stats">
              <span class="stat-item">{{ artist.songs }}</span>
              <span class="stat-divider">|</span>
              <span class="stat-item">{{ artist.followers }}</span>
            </div>
          </div>
          <transition name="fade">
            <div v-if="hoveredArtist === index" class="follow-button">
              <button class="btn-follow"></button>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="preference-section">
      <div class="section-header">
        <h3 class="section-title">音乐</h3>
      </div>
      <div class="preference-content">
        <div class="pie-chart-container">
          <svg class="pie-chart" viewBox="0 0 100 100">
            <circle v-for="(segment, index) in pieSegments" :key="index" class="pie-segment" cx="50" cy="50" r="40"
              :stroke="segment.color" :stroke-dasharray="segment.dashArray" :stroke-dashoffset="segment.dashOffset"
              fill="none" stroke-width="20" :style="{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }" />
          </svg>
          <div class="pie-center">
            <div class="pie-center-text">音乐</div>
          </div>
        </div>
        <div class="pie-legend">
          <div v-for="(genre, index) in genreStats" :key="index" class="legend-item">
            <div class="legend-color" :style="{ background: genreColors[index] }"></div>
            <div class="legend-label">{{ genre.name }}</div>
            <div class="legend-value">{{ genre.percentage }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicNoteIcon from '../../../icons/Profile/common/MusicNoteIcon.vue';
import ClockIcon from '../../../icons/common/ClockIcon.vue';
import StarIcon from '../../../icons/PlayerBar/StarIcon.vue';
import CalendarIcon from '../../../icons/common/CalendarIcon.vue';

export default {
  name: 'ProfileStats',
  components: {
    MusicNoteIcon,
    ClockIcon,
    StarIcon,
    CalendarIcon
  },
  props: {
    totalListened: {
      type: String,
      default: '0'
    },
    listeningHours: {
      type: String,
      default: '0'
    },
    level: {
      type: String,
      default: '1'
    },
    consecutiveDays: {
      type: Number,
      default: 0
    },
    weeklyData: {
      type: Array,
      default: () => [
        { day: '周一', count: 0, songs: [] },
        { day: '周二', count: 0, songs: [] },
        { day: '周三', count: 0, songs: [] },
        { day: '周四', count: 0, songs: [] },
        { day: '周五', count: 0, songs: [] },
        { day: '周六', count: 0, songs: [] },
        { day: '周日', count: 0, songs: [] }
      ]
    },
    topArtists: {
      type: Array,
      default: () => []
    },
    genreStats: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      hoveredArtist: null,
      tooltipIndex: null,
      barGradient: {
        start: '#667eea',
        end: '#764ba2'
      },
      genreColors: [
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#FFA07A',
        '#98D8C8',
        '#F7B731',
        '#5F27CD'
      ]
    };
  },
  computed: {
    statsCards() {
      return [
        {
          icon: 'MusicNoteIcon',
          value: this.totalListened,
          label: '累计听歌',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          icon: 'ClockIcon',
          value: this.listeningHours,
          label: '累计时长',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          icon: 'StarIcon',
          value: this.level,
          label: '听歌等级',
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          icon: 'CalendarIcon',
          value: this.consecutiveDays,
          label: '连续天数',
          gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        }
      ];
    },
    pieSegments() {
      const total = this.genreStats.reduce((sum, item) => sum + item.percentage, 0);
      let currentOffset = 0;
      const circumference = 2 * Math.PI * 40;

      return this.genreStats.map((genre, index) => {
        const percentage = (genre.percentage / total) * 100;
        const dashLength = (percentage / 100) * circumference;
        const segment = {
          color: this.genreColors[index % this.genreColors.length],
          dashArray: `${dashLength} ${circumference - dashLength}`,
          dashOffset: -currentOffset
        };
        currentOffset += dashLength;
        return segment;
      });
    }
  },
  methods: {
    getBarHeight(count) {
      const maxCount = Math.max(...this.weeklyData.map(d => d.count), 1);
      return (count / maxCount) * 120;
    },
    showTooltip(index) {
      this.tooltipIndex = index;
    },
    hideTooltip() {
      this.tooltipIndex = null;
    }
  }
};
</script>

<style lang="scss" src="./index.scss"></style>

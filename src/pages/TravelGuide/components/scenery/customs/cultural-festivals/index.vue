<template>
  <section class="cultural-festivals">
    <div class="section-header">
      <span class="badge-icon">🌌</span>
      <span class="badge-text">节庆日历</span>
    </div>
    <div class="festivals-calendar">
      <div class="cosmos-background">
        <div
          v-for="star in stars"
          :key="star.id"
          class="star"
          :style="{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }"
        ></div>
      </div>
      <div class="calendar-header">
        <button class="calendar-nav-btn" @click="changeMonth(-1)">◀<</button>
        <h4 class="current-month">{{ currentMonthYear }}</h4>
        <button class="calendar-nav-btn" @click="changeMonth(1)">>▶</button>
      </div>
      <div class="calendar-grid">
        <div class="weekday-header">
          <span v-for="day in weekdays" :key="day.value" class="weekday">{{
            day.label
          }}</span>
        </div>
        <div class="calendar-body">
          <div
            v-for="(day, index) in calendarDays"
            :key="index"
            class="calendar-day"
            :class="{
              'has-festival': day.hasFestival,
              today: day.isToday,
              'other-month': day.isOtherMonth,
              selected:
                selectedDay && selectedDay.day === day.day && !day.isOtherMonth,
            }"
            @click="selectDay(day)"
          >
            <span class="day-number">{{ day.day }}</span>
            <div class="mark-badge">
              <div v-if="day.isToday" class="today-indicator"></div>
              <div v-if="day.hasFestival" class="festival-corner-badge">🎊</div>
            </div>
            <div v-if="day.hasFestival" class="festival-name-label">
              {{ day.festivalName }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="festivals-list">
      <div
        v-for="(monthData, monthIndex) in festivalsByMonth"
        :key="monthIndex"
        class="month-section"
      >
        <div class="month-header">
          <span class="month-icon">🌟</span>
          <h4 class="month-name">{{ monthData.month }}</h4>
          <span class="festival-count"
            >{{ monthData.festivals.length }}个节庆</span
          >
        </div>
        <div class="month-festivals">
          <div
            v-for="festival in monthData.festivals"
            :key="festival.id"
            class="festival-card"
          >
            <div class="festival-date">
              {{ festival.day }}
            </div>
            <div class="festival-info">
              <div class="festival-name-row">
                <h5 class="festival-name">{{ festival.name }}</h5>
                <div class="festival-badge">
                  <span v-if="festival.isUnique" class="badge unique"
                    >特色</span
                  >
                  <span v-else class="badge traditional">传统</span>
                </div>
              </div>
              <p class="festival-description">{{ festival.description }}</p>
            </div>
            <div class="festival-location">📍{{ festival.location }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  festivals: any[];
}>();

const emit = defineEmits<{
  selectDay: [day: any];
}>();

const currentDate = ref(new Date());
const selectedDay = ref<any>(null);
const weekdays = [
  { value: "sun", label: "日" },
  { value: "mon", label: "一" },
  { value: "tue", label: "二" },
  { value: "wed", label: "三" },
  { value: "thu", label: "四" },
  { value: "fri", label: "五" },
  { value: "sat", label: "六" },
];

const currentMonthYear = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth() + 1;
  return `${year}年${month}月`;
});

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();
  const currentMonthStr = `${month + 1}月`;

  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push({
      day: "",
      isToday: false,
      isOtherMonth: true,
      hasFestival: false,
    });
  }

  for (let i = 1; i <= totalDays; i++) {
    // 匹配当前月份的节日，处理"1日"格式的日期
    const festival = props.festivals.find((f: any) => {
      if (f.month !== currentMonthStr) return false;
      // 提取日期数字部分，移除"日"字
      const festivalDay = parseInt(f.day.replace("日", ""));
      return festivalDay === i;
    });

    const isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    days.push({
      day: i,
      isToday,
      isOtherMonth: false,
      hasFestival: !!festival,
      festivalName: festival ? festival.name : "",
      festival: festival || null,
    });
  }

  return days;
});

const changeMonth = (delta: number) => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() + delta);
  currentDate.value = newDate;
  selectedDay.value = null;
};

const selectDay = (day: any) => {
  if (!day.isOtherMonth && day.day) {
    selectedDay.value = day;
    emit("selectDay", day);
  }
};

// 生成星空背景的星星
const stars = ref(
  Array.from({ length: 80 }, () => ({
    id: Math.random(),
    size: Math.random() * 2 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.7 + 0.3,
    animationDelay: Math.random() * 3,
    animationDuration: Math.random() * 2 + 2,
  })),
);

const festivalsByMonth = computed(() => {
  if (!props.festivals || props.festivals.length === 0) return [];

  const monthOrder = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];

  const grouped: any = {};

  props.festivals.forEach((festival: any) => {
    const month = festival.month;
    if (!grouped[month]) {
      grouped[month] = [];
    }
    grouped[month].push(festival);
  });

  return monthOrder
    .filter((month) => grouped[month] && grouped[month].length > 0)
    .map((month) => ({
      month,
      festivals: grouped[month],
    }));
});
</script>

<style scoped src="./index.scss" />

<template>
  <section class="tab-content-section">
    <div class="page-header">
      <h2 class="section-title">参观指南</h2>
      <p class="section-subtitle">为您提供全方位的参观服务信息</p>
    </div>

    <div class="info-grid">
      <!-- 开放时间 -->
      <div class="info-card">
        <div class="card-header">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h3>开放时间</h3>
        </div>
        <div class="card-body">
          <div class="time-item">
            <span class="label">常规时间</span>
            <span class="value">{{
              typeof visitInfo?.openTime === 'string' ? visitInfo.openTime : (visitInfo?.openTime?.regularTime || "周二至周日 9:00-17:00")
            }}</span>
          </div>
          <div class="time-item highlight" v-if="typeof visitInfo?.openTime !== 'string'">
            <span class="label">停止入馆</span>
            <span class="value">{{
              visitInfo?.openTime?.stopEntryTime || "16:00"
            }}</span>
          </div>
          <div class="time-item" v-if="typeof visitInfo?.openTime !== 'string'">
            <span class="label">闭馆日</span>
            <span class="value">{{
              visitInfo?.openTime?.closeDay || "周一（法定节假日除外）"
            }}</span>
          </div>
          <div v-if="typeof visitInfo?.openTime !== 'string' && visitInfo?.openTime?.holidayNotice" class="notice-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>{{ visitInfo.openTime.holidayNotice }}</span>
          </div>
        </div>
      </div>

      <!-- 票务信息 -->
      <div class="info-card">
        <div class="card-header">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"
              />
              <path d="M16 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
          </div>
          <h3>票务信息</h3>
        </div>
        <div class="card-body">
          <div class="price-row">
            <span class="price-label">门票价格</span>
            <span
              class="price-value"
              :class="{ free: typeof visitInfo?.ticket !== 'string' && visitInfo?.ticket.isFree }"
              >{{ typeof visitInfo?.ticket === 'string' ? visitInfo.ticket : (visitInfo?.ticket?.price || "免费") }}</span
            >
          </div>
          <div class="booking-info" v-if="typeof visitInfo?.ticket !== 'string'">
            <div v-if="visitInfo?.ticket.needReservation" class="booking-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>需提前预约</span>
            </div>
            <div v-if="visitInfo?.ticket.idRequired" class="booking-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>{{ visitInfo.ticket.idRequired }}</span>
            </div>
          </div>
          <div
            v-if="
              typeof visitInfo?.ticket !== 'string' &&
              visitInfo?.ticket.discountPolicy &&
              visitInfo.ticket.discountPolicy.length > 0
            "
            class="discount-list"
          >
            <p class="discount-title">优惠政策</p>
            <p
              v-for="(policy, index) in visitInfo.ticket.discountPolicy"
              :key="index"
            >
              • {{ policy }}
            </p>
          </div>
        </div>
      </div>

      <!-- 参观须知 -->
      <div class="info-card">
        <div class="card-header">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <h3>参观须知</h3>
        </div>
        <div class="card-body">
          <div class="rule-list" v-if="visitInfo?.rules">
            <div
              v-for="(rule, index) in visitInfo.rules.allowed"
              :key="`allow-${index}`"
              class="rule-item"
            >
              <span class="rule-icon allow">✓</span>
              <span>{{ rule }}</span>
            </div>
            <div
              v-for="(rule, index) in visitInfo.rules.forbidden"
              :key="`forbid-${index}`"
              class="rule-item"
            >
              <span class="rule-icon forbid">✕</span>
              <span>{{ rule }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 交通指南 -->
      <div class="info-card">
        <div class="card-header">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3>交通指南</h3>
        </div>
        <div class="card-body">
          <div class="transport-item" v-if="visitInfo?.transportation">
            <div class="transport-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div class="transport-content">
              <span class="transport-label">地址</span>
              <span class="transport-value">{{
                visitInfo.transportation.address || "博物馆详细地址信息"
              }}</span>
            </div>
          </div>
          <div v-if="visitInfo?.transportation?.metro" class="transport-item">
            <div class="transport-icon metro">
              <span>M</span>
            </div>
            <div class="transport-content">
              <span class="transport-label">地铁</span>
              <span class="transport-value">{{
                visitInfo.transportation.metro
              }}</span>
            </div>
          </div>
          <div v-if="visitInfo?.transportation?.bus" class="transport-item">
            <div class="transport-icon bus">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 18v-6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6" />
                <path d="M3 18h18" />
                <path d="M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
              </svg>
            </div>
            <div class="transport-content">
              <span class="transport-label">公交</span>
              <span class="transport-value">{{
                visitInfo.transportation.bus
              }}</span>
            </div>
          </div>
          <div v-if="visitInfo?.transportation?.parking" class="transport-item">
            <div class="transport-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
              </svg>
            </div>
            <div class="transport-content">
              <span class="transport-label">停车</span>
              <span class="transport-value">{{
                visitInfo.transportation.parking
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 服务设施 -->
      <div class="info-card">
        <div class="card-header">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h3>服务设施</h3>
        </div>
        <div class="card-body">
          <div class="service-grid" v-if="visitInfo?.services">
            <div v-if="visitInfo.services.hasGuide" class="service-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>讲解服务</span>
            </div>
            <div v-if="visitInfo.services.hasStorage" class="service-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>物品寄存</span>
            </div>
            <div v-if="visitInfo.services.hasRestaurant" class="service-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
              <span>餐饮服务</span>
            </div>
            <div
              v-if="visitInfo.services.hasAccessibility"
              class="service-item"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <span>无障碍设施</span>
            </div>
            <div v-if="visitInfo.services.hasRestArea" class="service-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path
                  d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                />
              </svg>
              <span>休息区</span>
            </div>
            <div v-if="visitInfo.services.hasWiFi" class="service-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>免费WiFi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 联系方式 -->
      <div class="info-card">
        <div class="card-header">
          <div class="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.77 20.5 20.5 0 0 1-3.46-3.46 19.79 19.79 0 0 1-3.77-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.45L7.38 10.8a16 16 0 0 0 6.9 6.9l1.81-1.81a2 2 0 0 1 2.45-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <h3>联系我们</h3>
        </div>
        <div class="card-body">
          <div class="contact-item" v-if="visitInfo?.contact">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.77 20.5 20.5 0 0 1-3.46-3.46 19.79 19.79 0 0 1-3.77-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.45L7.38 10.8a16 16 0 0 0 6.9 6.9l1.81-1.81a2 2 0 0 1 2.45-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <div class="contact-content">
              <span class="contact-label">咨询电话</span>
              <span class="contact-value">{{
                visitInfo.contact.phone || "咨询电话"
              }}</span>
            </div>
          </div>
          <div class="contact-item" v-if="visitInfo?.contact">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <div class="contact-content">
              <span class="contact-label">电子邮箱</span>
              <span class="contact-value">{{
                visitInfo.contact.email || "museum@example.com"
              }}</span>
            </div>
          </div>
          <div v-if="visitInfo?.contact?.complaintPhone" class="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div class="contact-content">
              <span class="contact-label">投诉建议</span>
              <span class="contact-value">{{
                visitInfo.contact.complaintPhone
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="museum-footer">
      <div class="footer-content">
        <div class="footer-info">
          <h3>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            博物馆信息
          </h3>
          <div class="info-item">
            <div class="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div class="info-content">
              <span class="info-label">地址</span>
              <span class="info-value">{{
                visitInfo?.transportation?.address || "博物馆地址"
              }}</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.77 20.5 20.5 0 0 1-3.46-3.46 19.79 19.79 0 0 1-3.77-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.45L7.38 10.8a16 16 0 0 0 6.9 6.9l1.81-1.81a2 2 0 0 1 2.45-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>
            <div class="info-content">
              <span class="info-label">电话</span>
              <span class="info-value">{{
                visitInfo?.contact?.phone || "咨询电话"
              }}</span>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div class="info-content">
              <span class="info-label">开放时间</span>
              <span class="info-value">{{
                typeof visitInfo?.openTime === 'string' ? visitInfo.openTime : (visitInfo?.openTime?.regularTime || "周二至周日 9:00-17:00")
              }}</span>
            </div>
          </div>
        </div>
        <div class="footer-links">
          <h4>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
              />
              <polyline points="13 2 13 9 20 9" />
            </svg>
            快速链接
          </h4>
          <ul>
            <li>
              <a href="#" @click.prevent="switchTab('home')">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                首页
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="switchTab('artifacts')">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"
                  />
                  <path d="M16 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                </svg>
                文物
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="switchTab('exhibitions')">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                </svg>
                展览
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="switchTab('creative')">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                文创
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              />
            </svg>
            博物馆友链
          </h4>
          <ul>
            <li>
              <span class="official-tag">官方网站</span>
              <a
                href="https://www.chnmuseum.cn/"
                target="_blank"
                rel="noopener noreferrer"
                >中国国家博物馆</a
              >
            </li>
            <li>
              <span class="official-tag">官方网站</span>
              <a
                href="https://www.dpm.org.cn/"
                target="_blank"
                rel="noopener noreferrer"
                >故宫博物院</a
              >
            </li>
            <li>
              <span class="official-tag">官方网站</span>
              <a
                href="https://www.bmy.com.cn/"
                target="_blank"
                rel="noopener noreferrer"
                >秦始皇兵马俑博物馆</a
              >
            </li>
            <li>
              <span class="official-tag">官方网站</span>
              <a
                href="https://www.shanghaimuseum.net/"
                target="_blank"
                rel="noopener noreferrer"
                >上海博物馆</a
              >
            </li>
            <li>
              <span class="official-tag">官方网站</span>
              <a
                href="https://www.njmuseum.com/"
                target="_blank"
                rel="noopener noreferrer"
                >南京博物院</a
              >
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { getMuseumDetailsById } from "@/pages/Museum/data/museum-details/index";

const props = defineProps<{
  museumId: number;
}>();

const emit = defineEmits<{
  "update:activeTab": [tab: string];
}>();

// 获取博物馆详细信息
const museumDetails = computed(() => {
  return getMuseumDetailsById(props.museumId);
});

// 获取参观信息
const visitInfo = computed(() => {
  return museumDetails.value?.visitInfo;
});

const switchTab = (tab: string) => {
  emit("update:activeTab", tab);
};
</script>

<style lang="scss" scoped src="./index.scss"></style>

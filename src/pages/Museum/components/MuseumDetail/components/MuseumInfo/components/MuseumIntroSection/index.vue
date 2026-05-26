<template>
  <section class="museum-intro-section">
      <div class="left-column">
        <div class="museum-image">
          <img loading="lazy" :src="museum.image" />
        </div>
        <div class="museum-basic-info">
          <h2 class="section-title">{{ museum.name }}</h2>
          <div class="museum-meta">
            <span class="meta-item">
              <span class="meta-label">省份</span>
              <span class="meta-value">{{ museum.province }}</span>
            </span>
            <span class="meta-item">
              <span class="meta-label">类型</span>
              <span class="meta-value">{{ museum.type }}</span>
            </span>
            <span class="meta-item">
              <span class="meta-label">文物数量</span>
              <span class="meta-value">
                {{ formatNumber(museum.artifacts) }}
              </span>
            </span>
            <span class="meta-item">
              <span class="meta-label">展览数量</span>
              <span class="meta-value">{{ museum.exhibitions }}</span>
            </span>
            <span class="meta-item">
              <span class="meta-label">年访问量</span>
              <span class="meta-value">
                {{ formatNumber(museum.visitors) }}
              </span>
            </span>
          </div>
        </div>
        <div class="museum-visit">
          <h3 class="visit-title">参观信息</h3>
          <div class="visit-info">
            <!-- 开放时间 -->
            <p>
              <span class="visit-label">开放时间</span>
              <template v-if="museumDetails?.visitInfo">
                {{
                  typeof museumDetails.visitInfo.openTime === 'string'
                    ? museumDetails.visitInfo.openTime
                    : museumDetails.visitInfo.openTime?.regularTime ||
                      '周二至周日 9:00-17:00'
                }}
              </template>
              <template v-else>周二至周日 9:00-17:00</template>
            </p>

            <!-- 闭馆日 -->
            <p>
              <span class="visit-label">闭馆日</span>
              <template v-if="museumDetails?.visitInfo">
                {{
                  typeof museumDetails.visitInfo.openTime === 'string'
                    ? museumDetails.visitInfo.openTime
                    : museumDetails.visitInfo.openTime?.closeDay ||
                      '周一闭馆（法定节假日除外）'
                }}
              </template>
              <template v-else>周一闭馆（法定节假日除外）</template>
            </p>

            <!-- 门票 -->
            <p>
              <span class="visit-label">门票</span>
              <template v-if="museumDetails?.visitInfo">
                {{
                  typeof museumDetails.visitInfo.ticket === 'string'
                    ? museumDetails.visitInfo.ticket
                    : (museumDetails.visitInfo.ticket?.price || '免费') +
                      (museumDetails.visitInfo.ticket?.needReservation
                        ? '（需提前预约）'
                        : '')
                }}
              </template>
              <template v-else>免费（需提前预约）</template>
            </p>

            <!-- 地址 -->
            <p>
              <span class="visit-label">地址</span>
              <template v-if="museumDetails?.visitInfo">
                {{
                  museumDetails.visitInfo.transportation?.address || '地址信息'
                }}
              </template>
              <template v-else>地址信息</template>
            </p>

            <!-- 电话 -->
            <p
              v-if="
                museumDetails?.visitInfo &&
                museumDetails.visitInfo.contact?.phone
              "
            >
              <span class="visit-label">电话</span>
              {{ museumDetails.visitInfo.contact?.phone }}
            </p>

            <!-- 网站 -->
            <p
              v-if="
                museumDetails?.visitInfo &&
                museumDetails.visitInfo.contact?.website
              "
            >
              <span class="visit-label">网站</span>
              {{ museumDetails.visitInfo.contact?.website }}
            </p>
          </div>
        </div>
        <div
          v-if="museum.features && museum.features.length > 0"
          class="museum-features"
        >
          <h3 class="features-title">特色标签</h3>
          <div class="features-list">
            <span
              v-for="(feature, index) in museum.features"
              :key="index"
              class="feature-tag"
            >
              {{ feature }}
            </span>
          </div>
        </div>
      </div>

      <div class="right-column">
        <div class="museum-description">
          <h3 class="description-title">博物馆介绍</h3>
          <p>{{ museum.description }}</p>
        </div>
        <div class="museum-history">
          <h3 class="history-title">历史沿革</h3>
          <p>
            {{
              museumDetails?.history ||
              '博物馆历史悠久，收藏丰富，是重要的文化机构。'
            }}
          </p>
        </div>
        <div class="museum-architecture">
          <h3 class="architecture-title">建筑特色</h3>
          <p>
            {{
              museumDetails?.architecture ||
              '博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。'
            }}
          </p>
        </div>
        <div class="museum-highlights">
          <h3 class="highlights-title">重要馆藏</h3>
          <p>
            {{
              museumDetails?.highlights ||
              '馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。'
            }}
          </p>
        </div>
        <div class="museum-activities">
          <h3 class="activities-title">教育活动</h3>
          <p>
            {{
              museumDetails?.education ||
              '开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。'
            }}
          </p>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { Museum } from '@/typesOfPages/museum';
  import { getMuseumDetailsById } from '@/pages/Museum/data/museum-details';

  interface Props {
    museum: Museum;
  }

  const props = defineProps<Props>();

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  // 获取博物馆详细信息
  const museumDetails = computed(() => {
    return getMuseumDetailsById(props.museum.id);
  });
</script>

<style lang="scss" scoped src="./index.scss"></style>

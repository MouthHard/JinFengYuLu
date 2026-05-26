<template>
  <div v-if="selectedExhibition" class="exhibition-detail">
    <div class="detail-header">
      <div class="header-content">
        <div class="header-left">
          <h3 class="detail-title">{{ selectedExhibition.title }}</h3>
          <div class="detail-basic-info">
            <span class="info-item date">{{ selectedExhibition.date }}</span>
            <span class="info-item location">
              {{ selectedExhibition.location }}
            </span>
          </div>
          <div class="detail-actions">
            <button class="action-btn favorite-btn">收藏</button>
            <button class="action-btn share-btn">分享</button>
            <button class="action-btn">点赞</button>
          </div>
        </div>
        <div class="header-right">
          <img loading="lazy"             :src="selectedExhibition.image"
            :alt="selectedExhibition.title"
          />
        </div>
      </div>
    </div>

    <div class="detail-tabs">
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'overview' }"
        @click="activeTab = 'overview'"
      >
        展览概览
      </button>
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'exhibits' }"
        @click="activeTab = 'exhibits'"
      >
        展品欣赏
      </button>
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'history' }"
        @click="activeTab = 'history'"
      >
        历史背景
      </button>
    </div>

    <div v-if="activeTab === 'overview'" class="detail-content">
      <div class="content-section">
        <h4 class="section-title">展览简介</h4>
        <p class="detail-description">
          {{ getDetailedDescription(selectedExhibition) }}
        </p>
      </div>

      <!-- 展览信息 -->
      <div class="content-section">
        <h4 class="section-title">展览信息</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">展览时间：</span>
            <span class="info-value">{{ selectedExhibition.date }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">展览地点：</span>
            <span class="info-value">
              {{ selectedExhibition.location || '未知' }}
            </span>
          </div>
          <div class="info-item">
            <span class="info-label">展览主题：</span>
            <span class="info-value">
              {{ (selectedExhibition as any).category || '综合' }}
            </span>
          </div>
          <div class="info-item">
            <span class="info-label">展览状态：</span>
            <span class="info-value">
              {{ (selectedExhibition as any).status || '未知' }}
            </span>
          </div>
          <div v-if="(selectedExhibition as any).curator" class="info-item">
            <span class="info-label">策展人：</span>
            <span class="info-value">
              {{ (selectedExhibition as any).curator }}
            </span>
          </div>
          <div v-if="(selectedExhibition as any).scale" class="info-item">
            <span class="info-label">展览规模：</span>
            <span class="info-value">
              {{ (selectedExhibition as any).scale }}
            </span>
          </div>
          <div v-if="(selectedExhibition as any).visitors" class="info-item">
            <span class="info-label">参观人数：</span>
            <span class="info-value">
              {{ (selectedExhibition as any).visitors }}
            </span>
          </div>
        </div>
      </div>

      <!-- 参观指南 -->
      <div class="content-section">
        <h4 class="section-title">参观指南</h4>
        <div class="visit-guide">
          <p>开放时间：周二至周日 9:00-17:00（16:30停止入场）</p>
          <p>门票价格：成人票60元，学生票30元</p>
          <p>交通指南：乘坐地铁1号线到天安门东站，步行10分钟即可到达</p>
          <p>注意事项：参观时请勿触摸展品，禁止拍照闪光</p>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'exhibits'" class="detail-content">
      <div class="content-section">
        <h4 class="section-title">展品欣赏</h4>
        <div class="exhibits-masonry">
          <div v-for="i in 6" :key="i" class="exhibit-item">
            <div class="exhibit-image" :class="`size-${(i % 3) + 1}`">
              <img loading="lazy" :src="selectedExhibition.image" :alt="`展品 ${i}`" />
            </div>
            <div class="exhibit-info">
              <h5 class="exhibit-title">展品 {{ i }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'history'" class="detail-content">
      <div class="content-section">
        <h4 class="section-title">历史背景</h4>
        <div class="history-content">
          <p>
            清代是中国历史上最后一个封建王朝，从1644年到1912年，统治中国长达268年。清代宫廷生活充满了奢华与礼仪，展现了中国传统社会的最高等级生活方式。
          </p>
          <p>
            本次展览通过大量珍贵文物，还原了清代宫廷的日常生活、礼仪制度、文化艺术等方面，让观众能够深入了解清代宫廷的历史面貌。
          </p>
          <p>
            展览中的文物包括服饰、家具、器物、书画等多个类别，每一件都承载着丰富的历史信息，是研究清代历史的重要实物资料。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="exhibition-detail-empty">
    <div class="empty-content">
      <div class="empty-icon">🏛️</div>
      <h3>请选择一个展览</h3>
      <p>点击左侧展览卡片查看详细信息</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { Exhibition } from '@/typesOfPages/museum/index';

  const props = defineProps({
    selectedExhibition: {
      type: Object as () => Exhibition | null,
      default: null,
    },
  });

  const activeTab = ref('overview');

  // 获取详细的展览描述
  const getDetailedDescription = (exhibition: Exhibition) => {
    // 为不同展览提供更详细的描述
    const descriptions: Record<string, string> = {
      紫禁城建成600年展:
        '2020年是紫禁城建成600周年，本次展览以"丹宸永固"为主题，通过"宫城一体"、"有容乃大"、"生生不息"三个部分，展现了紫禁城600年来的发展变化。展览汇集了故宫博物院珍藏的大量文物，包括建筑构件、书画、器物等，全面展示了紫禁城的历史价值、艺术价值和科学价值。',
      清代宫廷生活展:
        '本次展览展示了清代宫廷的日常生活、礼仪制度和文化艺术。通过大量珍贵文物，还原了清代皇帝、后妃、皇子等宫廷成员的生活场景，包括饮食、服饰、居住、娱乐等方面。展览还展示了清代宫廷的礼仪制度，如朝会、祭祀、大婚等重要仪式，让观众能够深入了解清代宫廷的生活面貌。',
      中国古代陶瓷展:
        '中国是陶瓷的故乡，本次展览展示了中国古代陶瓷的发展历程和艺术成就。从新石器时代的彩陶，到商周时期的原始青瓷，再到唐宋时期的名窑瓷器，以及元明清时期的彩瓷，全面展现了中国陶瓷的发展脉络。展览中的文物包括各个时期的代表性瓷器，如唐三彩、宋汝窑、元青花、明清粉彩等，展示了中国陶瓷艺术的高超水平。',
      丝绸之路文物展:
        '丝绸之路是古代东西方文化交流的重要通道，本次展览通过大量文物，再现了古代丝绸之路的辉煌历史。展览包括丝绸、瓷器、金银器、玻璃器等多种类型的文物，来自中国、波斯、阿拉伯、罗马等多个国家和地区，展示了东西方文化交流的丰硕成果。',
      唐宋书画展:
        '唐宋时期是中国书画艺术的黄金时期，本次展览展出了唐宋时期的书画精品，包括书法、绘画等多种形式。展览中的作品包括颜真卿、柳公权、苏轼、米芾等著名书画家的作品，展现了中国古代书画艺术的巅峰成就。',
      明清家具展:
        '明清时期是中国传统家具的鼎盛时期，本次展览展示了明清时期的家具精品，包括桌椅、床榻、柜橱等多种类型。展览中的家具采用黄花梨、紫檀等名贵木材制作，工艺精湛，造型优美，展现了中国传统家具的工艺和美学。',
      青铜器特展:
        '青铜器是中国古代文明的重要标志，本次展览展示了中国古代青铜器的精品，包括礼器、兵器、乐器等多种类型。展览中的文物包括商代的司母戊鼎、周代的毛公鼎等著名青铜器，展现了青铜时代的文明成就。',
      古埃及文明展:
        '古埃及文明是世界上最古老的文明之一，本次展览展示了古埃及文明的珍贵文物，包括木乃伊、金字塔模型、象形文字等。展览通过这些文物，展现了古埃及的宗教信仰、社会制度、艺术成就等方面，让观众能够了解古埃及文明的魅力。',
      文艺复兴艺术展:
        '文艺复兴是欧洲历史上的重要时期，本次展览展出了文艺复兴时期的艺术精品，包括达芬奇、米开朗基罗等大师的作品。展览中的作品展现了文艺复兴时期的人文主义精神和艺术创新，是了解西方艺术史的重要窗口。',
      中国古代服饰展:
        '中国古代服饰是中国传统文化的重要组成部分，本次展览展示了中国古代各个朝代的服饰精品，包括商代的青铜器上的服饰纹样，周代的冕服，秦汉的深衣，魏晋的褒衣博带，唐宋的襦裙，明清的补服等。展览通过这些服饰，展现了中国传统服饰的演变历程和艺术特色。',
      丝绸之路展:
        '丝绸之路是古代东西方文化交流的重要通道，本次展览通过大量文物，再现了古代丝绸之路的辉煌历史。展览包括丝绸、瓷器、金银器、玻璃器等多种类型的文物，来自中国、波斯、阿拉伯、罗马等多个国家和地区，展示了东西方文化交流的丰硕成果。',
      清代宫廷文物展:
        '本次展览展示了清代宫廷的珍贵文物，包括御用器物、书画、服饰等。展览中的文物制作精美，工艺精湛，展现了清代宫廷的奢华生活和高超的工艺水平。通过这些文物，观众能够了解清代宫廷的文化艺术和生活方式。',
    };

    return descriptions[exhibition.title] || exhibition.description;
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>

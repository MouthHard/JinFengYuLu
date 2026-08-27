<template>
  <section class="travel-guides">
    <div class="section-header">
      <div class="header-left">
        <span class="title-label">EXPLORE</span>
        <h2 class="section-title">行者手�?/h2>
        <p class="section-subtitle">发现世界的每一个角�?/p>
      </div>
      <button class="more-btn" @click="handleMore">更多 �?/button>
    </div>

    <div class="editorial-layout">
      <div v-if="guides[0]" class="featured-main">
        <div class="featured-card large">
          <div class="card-image">
            <img :src="guides[0].cover" :alt="guides[0].title" loading="lazy" />
            <div class="image-overlay"></div>
          </div>
          <div class="card-content">
            <div class="content-top">
              <span class="type-tag" :data-type="guides[0].type">
                {{ guides[0].typeName }}
              </span>
              <span class="card-date">{{ guides[0].date }}</span>
            </div>
            <h3 class="card-title">{{ guides[0].title }}</h3>
            <p class="card-excerpt">{{ guides[0].excerpt }}</p>
            <div class="card-tags">
              <span v-for="tag in guides[0].tags" :key="tag" class="tag-item">
                {{ tag }}
              </span>
            </div>
            <div class="card-footer">
              <div class="author">
                <img loading="lazy" :src="guides[0].authorAvatar" :alt="guides[0].author" />
                <div class="author-info">
                  <span class="author-name">{{ guides[0].author }}</span>
                  <span class="author-title">{{ guides[0].category }}</span>
                </div>
              </div>
              <div class="action-chips">
                <span class="chip chip-views">
                  <EyeIcon :stroke-width="2" />
                  {{ fmt(getGuideCount(guides[0].id).views) }}
                </span>
                <button class="chip chip-like" :class="{ liked: isLiked(guides[0].id) }" @click.stop="handleToggleLike(guides[0])">
                  <ThumbUpIcon :stroke-width="2" :filled="isLiked(guides[0].id)" />
                  {{ getDisplayLikes(guides[0]) }}
                </button>
                <button class="chip chip-love" :class="{ loved: isLoved(guides[0].id) }" @click.stop="handleToggleLove(guides[0])">
                  <HeartIcon :stroke-width="2" :filled="isLoved(guides[0].id)" />
                  {{ getDisplayLoves(guides[0]) }}
                </button>
                <button class="chip chip-bookmark" :class="{ collected: isFavorited(guides[0].id) }" @click.stop="handleToggleFavorite(guides[0])">
                  <BookmarkIcon :stroke-width="2" :filled="isFavorited(guides[0].id)" />
                  {{ getDisplayCollections(guides[0]) }}
                </button>
                <button class="chip chip-share" @click.stop="handleShare(guides[0])">
                  <ShareIcon :stroke-width="2" />
                  {{ getDisplayShares(guides[0]) }}
                </button>
                <button class="chip chip-view" @click="handleCardClick(guides[0])">
                  <MaximizeIcon :stroke-width="2" />
                  查看
                </button>
              </div>
            </div>
          </div>
          <div class="hover-indicator">
            <div class="indicator-ring"></div>
          </div>
        </div>
      </div>

      <div class="featured-list">
        <div
          v-for="(guide, index) in guides.slice(1, 4)"
          :key="guide.id"
          class="list-card"
          :style="{ '--delay': `${index * 0.1}s` }"
        >
          <div class="list-image">
            <img :src="guide.cover" :alt="guide.title" loading="lazy" />
            <div class="image-overlay"></div>
            <span class="image-date">{{ guide.date }}</span>
          </div>
          <div class="list-content">
            <span class="type-tag" :data-type="guide.type">
              {{ guide.typeName }}
            </span>
            <h4 class="list-title">{{ guide.title }}</h4>
            <div class="list-tags">
              <span
                v-for="tag in guide.tags.slice(0, 2)"
                :key="tag"
                class="tag-item"
              >
                {{ tag }}
              </span>
            </div>
            <div class="action-chips">
              <span class="chip chip-views">
                <EyeIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" />
                {{ fmt(getGuideCount(guide.id).views) }}
              </span>
              <button class="chip chip-like" :class="{ liked: isLiked(guide.id) }" @click.stop="handleToggleLike(guide)">
                <ThumbUpIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" :filled="isLiked(guide.id)" />
                {{ getDisplayLikes(guide) }}
              </button>
              <button class="chip chip-love" :class="{ loved: isLoved(guide.id) }" @click.stop="handleToggleLove(guide)">
                <HeartIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" :filled="isLoved(guide.id)" />
                {{ getDisplayLoves(guide) }}
              </button>
              <button class="chip chip-bookmark" :class="{ collected: isFavorited(guide.id) }" @click.stop="handleToggleFavorite(guide)">
                <BookmarkIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" :filled="isFavorited(guide.id)" />
                {{ getDisplayCollections(guide) }}
              </button>
              <button class="chip chip-share" @click.stop="handleShare(guide)">
                <ShareIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" />
                {{ getDisplayShares(guide) }}
              </button>
              <button class="chip chip-view" @click.stop="handleCardClick(guide)">
                  <MaximizeIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" />
                  查看
                </button>
              </div>
            </div>
            <div class="list-number">
            {{ String(index + 2).padStart(2, '0') }}
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-section">
      <div class="scroll-header">
        <h3>更多精彩</h3>
        <div class="scroll-nav">
          <button
            class="nav-btn prev"
            :disabled="scrollPosition === 0"
            @click="scrollPrev"
          >
            <ChevronLeftIcon :stroke-width="2" />
          </button>
          <button
            class="nav-btn next"
            :disabled="scrollPosition >= maxScroll"
            @click="scrollNext"
          >
            <ChevronRightIcon :stroke-width="2" />
          </button>
        </div>
      </div>
      <div ref="scrollContainer" class="scroll-container">
        <div class="scroll-track">
          <div v-for="guide in moreGuides" :key="guide.id" class="scroll-card">
            <div class="scroll-image">
              <img :src="guide.cover" :alt="guide.title" loading="lazy" />
              <div class="image-overlay"></div>
              <span class="type-badge" :data-type="guide.type">
                {{ guide.typeName }}
              </span>
              <span class="image-date">{{ guide.date }}</span>
            </div>
            <div class="scroll-content">
              <h5>{{ guide.title }}</h5>
              <div class="scroll-tags">
                <span
                  v-for="tag in guide.tags.slice(0, 2)"
                  :key="tag"
                  class="tag-item"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="action-chips">
                <span class="chip chip-views">
                  <EyeIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" />
                  {{ fmt(getGuideCount(guide.id).views) }}
                </span>
                <button class="chip chip-like" :class="{ liked: isLiked(guide.id) }" @click.stop="handleToggleLike(guide)">
                  <ThumbUpIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" :filled="isLiked(guide.id)" />
                  {{ getDisplayLikes(guide) }}
                </button>
                <button class="chip chip-love" :class="{ loved: isLoved(guide.id) }" @click.stop="handleToggleLove(guide)">
                  <HeartIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" :filled="isLoved(guide.id)" />
                  {{ getDisplayLoves(guide) }}
                </button>
                <button class="chip chip-bookmark" :class="{ collected: isFavorited(guide.id) }" @click.stop="handleToggleFavorite(guide)">
                  <BookmarkIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" :filled="isFavorited(guide.id)" />
                  {{ getDisplayCollections(guide) }}
                </button>
                <button class="chip chip-share" @click.stop="handleShare(guide)">
                  <ShareIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" />
                  {{ getDisplayShares(guide) }}
                </button>
                <button class="chip chip-view" @click.stop="handleCardClick(guide)">
                  <MaximizeIcon :stroke-width="2" :style="{ width: '12px', height: '12px' }" />
                  查看
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { showMessage } from '@/utils/landscape';
  import { formatNumber as fmt } from '@/utils/landscape/format';
  import { throttle } from '@/utils/landscape/debounce';
  import EyeIcon from '@/pages/Landscape/icon/common/EyeIcon.vue';
  import ThumbUpIcon from '@/pages/Landscape/icon/common/ThumbUpIcon.vue';
  import HeartIcon from '@/pages/Landscape/icon/common/HeartIcon.vue';
  import BookmarkIcon from '@/pages/Landscape/icon/common/BookmarkIcon.vue';
  import ShareIcon from '@/pages/Landscape/icon/common/ShareIcon.vue';
  import ChevronLeftIcon from '@/pages/Landscape/icon/common/ChevronLeftIcon.vue';
  import ChevronRightIcon from '@/pages/Landscape/icon/common/ChevronRightIcon.vue';
  import MaximizeIcon from '@/pages/Landscape/icon/components/home/TravelGuides/MaximizeIcon.vue';
  import { useLandscapeDataStore } from '@/stores/landscape';
  import { useInteractionStore } from '@/stores/landscape';
  import type { InteractionItem } from '@/types/landscape';
  import { GUIDE_DEFAULTS, DATE_DEFAULTS, AUTHOR_DEFAULTS } from '@/utils/landscape/defaults';

  import type { GlobalGuide } from '@/types/landscape/data';

  const router = useRouter();
  const interactionStore = useInteractionStore();
  const dataStore = useLandscapeDataStore();
  const scrollContainer = ref<HTMLElement | null>(null);
  const scrollPosition = ref(0);
  const maxScroll = ref(0);

  const guides = computed(() => dataStore.getAllGuides());
  const moreGuides = computed(() => guides.value.slice(4));

  const getGuideId = (id: string | number) => String(id);
  const getGuideCount = (id: string | number) => interactionStore.getCount(getGuideId(id));

  const convertToInteractionItem = (guide: GlobalGuide): InteractionItem => {
    const gId = getGuideId(guide.id);
    const c = interactionStore.getCount(gId);
    return {
      id: gId,
      type: 'guide',
      title: guide.title,
      image: guide.cover,
      location: guide.location || guide.tags?.[0] || '未知目的�?,
      category: guide.typeName,
      timestamp: Date.now(),
      likes: c.likes,
      views: c.views,
      favorites: c.favorites,
      shares: c.shares,
      summary: guide.excerpt || GUIDE_DEFAULTS.summary,
      author: guide.author || AUTHOR_DEFAULTS.name,
      authorId: guide.authorId,
      authorAvatar: guide.authorAvatar,
      authorVerified: true,
      difficulty: guide.difficulty || GUIDE_DEFAULTS.difficulty,
      rating: guide.rating || GUIDE_DEFAULTS.rating,
      ratingCount: GUIDE_DEFAULTS.ratingCount,
      readTime: guide.readTime || GUIDE_DEFAULTS.readTime,
      saves: c.favorites,
      comments: guide.comments || GUIDE_DEFAULTS.comments,
      date: guide.date || DATE_DEFAULTS.fallback,
      isEditorPick: guide.id === '1',
      season: guide.season || GUIDE_DEFAULTS.season,
      duration: guide.duration || '7�?,
      transport: guide.transport || GUIDE_DEFAULTS.transport,
      budget: guide.budget || GUIDE_DEFAULTS.budget,
      audience: guide.audience || '摄影爱好者、户外探险�?,
      highlights: guide.highlights || ['极致自然风光', '独特地质景观', '丰富摄影机会', '深度文化体验'],
      accommodation: guide.accommodation || GUIDE_DEFAULTS.accommodation,
      language: guide.language || GUIDE_DEFAULTS.language,
      warnings: guide.warnings || ['注意天气变化', '准备防寒装备', '提前预约住宿'],
      shootTime: guide.shootTime || GUIDE_DEFAULTS.shootTime,
      shootParams: guide.shootParams || [
        { label: '相机', value: '全画幅单反' },
        { label: '镜头', value: '广角16-35mm' },
        { label: '滤镜', value: 'ND减光镜' },
      ],
      gears: guide.gears || [
        { name: '全画幅相�?, required: true },
        { name: '广角镜头', required: true },
        { name: '三脚�?, required: true },
        { name: '减光�?, required: false },
        { name: '备用电池', required: true },
      ],
      safety: guide.safety || [
        { type: 'warning' as const, title: '天气预警', content: '关注当地天气预报，避免恶劣天气出�? },
        { type: 'info' as const, title: '装备建议', content: '携带保暖衣物、防滑鞋、急救�? },
      ],
      altitude: guide.altitude || GUIDE_DEFAULTS.altitude,
      temperature: guide.temperature || GUIDE_DEFAULTS.temperature,
      tips: guide.tips || [
        '建议提前至少3个月规划行程',
        '热门景点需要提前预约门�?,
        '尊重当地文化和习�?,
        '保护环境，不要留下垃�?,
      ],
    } as any;
  };

  const isLiked = (id: string) => interactionStore.isLiked(getGuideId(id));
  const isFavorited = (id: string) => interactionStore.isFavorited(getGuideId(id));
  const isLoved = (id: string) => interactionStore.isLoved(getGuideId(id));

  const handleToggleLike = (guide: GlobalGuide) => {
    const item = convertToInteractionItem(guide);
    const isAdded = interactionStore.toggleLike(item);
    if (isAdded) {
      showMessage.like.success(guide.title);
    } else {
      showMessage.like.cancel();
    }
  };

  const handleToggleFavorite = (guide: GlobalGuide) => {
    const item = convertToInteractionItem(guide);
    const isAdded = interactionStore.toggleFavorite(item);
    if (isAdded) {
      showMessage.favorite.success(guide.title, 'guide');
    } else {
      showMessage.favorite.cancel(guide.title, 'guide');
    }
  };

  const handleToggleLove = (guide: GlobalGuide) => {
    const item = convertToInteractionItem(guide);
    const isAdded = interactionStore.toggleLove(item);
    if (isAdded) {
      showMessage.love.success(guide.title, 'guide');
    } else {
      showMessage.love.cancel(guide.title, 'guide');
    }
  };

  const handleShare = (guide: GlobalGuide) => {
    interactionStore.incrementShares(getGuideId(guide.id));
    showMessage.share.success(guide.title);
  };

  const handleCardClick = (guide: GlobalGuide) => {
    router.push({
      path: '/landscape/guides',
      query: {
        q: guide.title,
      },
    });
  };

  const handleMore = () => {
    console.log('查看更多');
  };

  const scrollPrev = () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const updateScrollPosition = throttle(() => {
    if (scrollContainer.value) {
      scrollPosition.value = scrollContainer.value.scrollLeft;
      maxScroll.value =
        scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth;
    }
  }, 16);

  onMounted(() => {
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('scroll', updateScrollPosition);
      updateScrollPosition();
    }
    interactionStore.registerBatch(
      guides.value.map((g: GlobalGuide) => ({
        id: getGuideId(g.id),
        counts: { likes: g.likes || 0, views: g.views || 0, loves: g.loves || 0, favorites: g.bookmarks || 0, shares: g.shares || 0 },
      }))
    );
  });

  onUnmounted(() => {
    if (scrollContainer.value) {
      scrollContainer.value.removeEventListener('scroll', updateScrollPosition);
    }
  });

  const getDisplayLikes = (guide: GlobalGuide) => fmt(getGuideCount(guide.id).likes);

  const getDisplayLoves = (guide: GlobalGuide) => fmt(getGuideCount(guide.id).loves);

  const getDisplayCollections = (guide: GlobalGuide) => fmt(getGuideCount(guide.id).favorites);

  const getDisplayShares = (guide: GlobalGuide) => fmt(getGuideCount(guide.id).shares);
</script>

<style scoped lang="scss" src="./index.scss" />

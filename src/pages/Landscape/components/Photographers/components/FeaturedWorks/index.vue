<template>
  <section class="featured-works-section">
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            <circle cx="12" cy="12" r="5" />
            <line x1="2" y1="7" x2="5" y2="7" />
            <line x1="2" y1="17" x2="5" y2="17" />
            <line x1="19" y1="7" x2="22" y2="7" />
            <line x1="19" y1="17" x2="22" y2="17" />
          </svg>
        </span>
        精选作品
      </h2>
      <p class="section-desc">来自优秀摄影师的代表作品</p>
    </div>
    <div v-if="featuredWorks.length > 0" class="film-carrier">
      <div class="film-strip-edge top">
        <div class="sprocket-row">
          <div v-for="i in 80" :key="'t' + i" class="sprocket">
            <div class="sprocket-hole"></div>
          </div>
        </div>
        <div class="edge-code">KODAK SAFETY FILM 5032 ▼</div>
      </div>
      <div class="film-body">
        <button class="scroll-dial left" @click="scrollLeft">
          <div class="dial-outer">
            <div class="dial-ring outer-ring">
              <div
                v-for="i in 20"
                :key="'ot' + i"
                class="ring-tick"
                :style="{ '--t': i }"
              ></div>
            </div>
            <div class="dial-ring inner-ring">
              <div
                v-for="i in 12"
                :key="'it' + i"
                class="ring-tick"
                :style="{ '--t': i }"
              ></div>
            </div>
            <div class="dial-arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
        </button>
        <div ref="scrollContainerRef" class="works-scroll-container">
          <div class="works-scroll">
            <div
              v-for="(work, index) in featuredWorks"
              :key="work.id || `work-${index}`"
              class="work-item"
              :style="{ '--index': index }"
              @click="$emit('preview', work)"
            >
              <div class="film-frame">
                <div class="frame-edge top-edge">
                  <div v-for="i in 4" :key="'es' + i" class="edge-sprocket">
                    <div class="edge-hole"></div>
                  </div>
                </div>
                <div class="frame-edge bottom-edge">
                  <div v-for="i in 4" :key="'eb' + i" class="edge-sprocket">
                    <div class="edge-hole"></div>
                  </div>
                </div>
                <div class="film-gate"></div>
                <img loading="lazy" :src="work.image" :alt="work.title" />
                <div class="work-type-indicator" :class="`type-${work.type}`">
                  <span class="type-icon">
                    {{ getWorkTypeIcon(work.type) }}
                  </span>
                </div>
                <div class="work-overlay">
                  <div class="overlay-aperture">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                  </div>
                  <div class="work-info">
                    <h3 class="work-title">{{ work.title }}</h3>
                    <p class="work-author">{{ work.author }}</p>
                  </div>
                </div>
              </div>
              <div class="frame-meta">
                <span class="frame-number">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <span class="frame-divider">—</span>
                <span class="frame-id">A</span>
              </div>
            </div>
          </div>
        </div>
        <button class="scroll-dial right" @click="scrollRight">
          <div class="dial-outer">
            <div class="dial-ring outer-ring">
              <div
                v-for="i in 20"
                :key="'ot' + i"
                class="ring-tick"
                :style="{ '--t': i }"
              ></div>
            </div>
            <div class="dial-ring inner-ring">
              <div
                v-for="i in 12"
                :key="'it' + i"
                class="ring-tick"
                :style="{ '--t': i }"
              ></div>
            </div>
            <div class="dial-arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div class="film-strip-edge bottom">
        <div class="sprocket-row">
          <div v-for="i in 80" :key="'b' + i" class="sprocket">
            <div class="sprocket-hole"></div>
          </div>
        </div>
        <div class="edge-code">▲ 5032 FILM SAFETY KODAK</div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="2" width="20" height="20" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
      </div>
      <p class="empty-text">暂无精选作品</p>
      <span class="empty-hint">优秀作品即将呈现</span>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { workTypeIcons } from '@/utils/landscape/constants';
  import { useLandscapeDataStore } from '@/stores/landscape';
  import { useInteractionStore } from '@/stores/landscape';

  defineEmits<{
    preview: [work: any];
  }>();

  const interactionStore = useInteractionStore();
  const dataStore = useLandscapeDataStore();

  const getWorkTypeIcon = (type?: string) =>
    workTypeIcons[type || 'photo'] || '🖼️';

  const featuredWorks = computed(() =>
    dataStore
      .getAllImages()
      .slice(0, 20)
      .map((img) => {
        const photographer = dataStore.getPhotographer(img.authorId)
        return {
          id: img.id,
          image: img.thumbnail || img.url,
          title: img.title,
          author: photographer?.name || img.author || '未知摄影师',
          authorId: img.authorId,
          authorAvatar: photographer?.avatar,
          location: img.location,
          category: img.category,
          type: 'image',
          likes: img.likes,
          views: img.views,
          loves: img.loves,
          favorites: img.favorites || 0,
          shares: img.shares,
        }
      })
  );

  const scrollContainerRef = ref<HTMLElement | null>(null);

  const getItemStep = () => {
    const el = scrollContainerRef.value;
    if (!el) return 346;
    const firstItem = el.querySelector('.work-item') as HTMLElement;
    if (!firstItem) return 346;
    return firstItem.offsetWidth + 6;
  };

  const scrollLeft = () => {
    const el = scrollContainerRef.value;
    if (!el) return;
    if (el.scrollLeft <= 5) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: -getItemStep(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const el = scrollContainerRef.value;
    if (!el) return;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: getItemStep(), behavior: 'smooth' });
    }
  };

  let scrollRAF: number;
  let scrollHandler: (() => void) | null = null;

  onMounted(() => {
    const el = scrollContainerRef.value;
    if (el) {
      scrollHandler = () => {
        cancelAnimationFrame(scrollRAF);
        scrollRAF = requestAnimationFrame(() => {console.log(el.scrollLeft)});
        
      };
      el.addEventListener('scroll', scrollHandler, { passive: true });
    }

    interactionStore.registerBatch(
      featuredWorks.value.map((work) => ({
        id: work.id,
        counts: {
          likes: work.likes || 0,
          loves: work.loves || 0,
          favorites: work.favorites || 0,
          views: work.views || 0,
          shares: work.shares || 0,
        },
      })),
    );
  });

  onUnmounted(() => {
    cancelAnimationFrame(scrollRAF);
    const el = scrollContainerRef.value;
    if (el && scrollHandler) {
      el.removeEventListener('scroll', scrollHandler);
    }
  });
</script>

<style scoped lang="scss" src="./index.scss" />

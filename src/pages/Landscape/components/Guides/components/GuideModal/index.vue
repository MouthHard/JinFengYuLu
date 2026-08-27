<template>
  <transition name="modal">
    <div
      v-if="visible"
      class="guide-modal-overlay"
      @click="$emit('close')"
    >
      <div :class="['guide-modal', `mode-${travelModeClass}`]" @click.stop>
        <button class="modal-close" @click="$emit('close')">×</button>

        <div class="modal-layout">
          <div class="modal-left">
            <div class="modal-left-content">
              <ModalContent :guide="guide" />
            </div>
          </div>

          <div class="modal-right">
            <ModalHeader
              :guide="guide"
              :counts="getCount()"
              :is-liked="isLiked"
              :is-loved="isLoved"
              :is-favorited="isFavorited"
              @toggle-like="handleToggleLike"
              @toggle-love="handleToggleLove"
              @toggle-favorite="handleToggleFavorite"
              @share="$emit('share', guide)"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ModalHeader from './components/ModalHeader/index.vue';
import ModalContent from './components/ModalContent/index.vue';
import { showMessage, createSimpleInteractionItem } from '@/utils/landscape';
import { travelModeMap } from '@/utils/landscape/constants';
import { useInteractionStore } from '@/stores/landscape';

interface Guide {
  id: string;
  title: string;
  cover: string;
  excerpt: string;
  travelMode?: string;
  sceneryTheme?: string;
  location: string;
  locationId?: string;
  duration: string;
  views: number;
  likes: number;
  loves: number;
  bookmarks: number;
  shares: number;
  tags: string[];
  authorId: string;
  author: string;
  authorAvatar?: string;
  authorVerified?: boolean;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  season?: string;
  rating?: number;
  publishDate?: string;
  content?: string;
  type?: string;
  typeName?: string;
  date?: string;
  readTime?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isHot?: boolean;
}

interface Props {
  visible: boolean;
  guide: Guide;
}

const props = defineProps<Props>();

defineEmits<{
  (e: 'close'): void;
  (e: 'like', guide: Guide): void;
  (e: 'love', guide: Guide): void;
  (e: 'bookmark', guide: Guide): void;
  (e: 'share', guide: Guide): void;
}>();

const interactionStore = useInteractionStore();

const travelModeClass = computed(() => {
  const mode = props.guide.travelMode || 'self-drive';
  return travelModeMap[mode]?.class || 'default';
});

const getCount = () => interactionStore.getCount(props.guide.id);
const isLiked = computed(() => interactionStore.isLiked(props.guide.id));
const isLoved = computed(() => interactionStore.isLoved(props.guide.id));
const isFavorited = computed(() => interactionStore.isFavorited(props.guide.id));

const handleToggleLike = () => {
  const liked = interactionStore.toggleLike(props.guide.id);
  if (liked) {
    showMessage.like.success(props.guide.title);
  } else {
    showMessage.like.cancel();
  }
};

const handleToggleLove = () => {
  const item = createSimpleInteractionItem(props.guide.id, 'guide', props.guide.title, {
    image: props.guide.cover,
    location: props.guide.location,
  });
  const loved = interactionStore.toggleLove(item);
  if (loved) {
    showMessage.love.success(props.guide.title, 'guide');
  } else {
    showMessage.love.cancel(props.guide.title, 'guide');
  }
};

const handleToggleFavorite = () => {
  const item = createSimpleInteractionItem(props.guide.id, 'guide', props.guide.title, {
    image: props.guide.cover,
    location: props.guide.location,
  });
  const favorited = interactionStore.toggleFavorite(item);
  if (favorited) {
    showMessage.favorite.success(props.guide.title, 'guide');
  } else {
    showMessage.favorite.cancel(props.guide.title, 'guide');
  }
};
</script>

<style scoped lang="scss" src="./index.scss" />

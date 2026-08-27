<template>
  <ImageCard
    v-if="item.type === 'image'"
    :item="item"
    :sort-mode="sortMode"
    @like="handleLike"
    @bookmark="handleBookmark"
    @share="handleShare"
  />
  <VideoCard
    v-else-if="item.type === 'video'"
    :item="item"
    :sort-mode="sortMode"
    @like="handleLike"
    @bookmark="handleBookmark"
    @share="handleShare"
  />
  <GuideCard
    v-else-if="item.type === 'guide'"
    :item="item"
    :sort-mode="sortMode"
    @like="handleLike"
    @bookmark="handleBookmark"
    @share="handleShare"
  />
  <PhotographerCard
    v-else-if="item.type === 'photographer'"
    :item="item"
    :sort-mode="sortMode"
    @like="handleLike"
    @follow="handleFollow"
  />
</template>

<script setup lang="ts">
  import type { SearchResultItem } from '@/utils/landscape';
  import ImageCard from '../ImageCard/index.vue';
  import VideoCard from '../VideoCard/index.vue';
  import GuideCard from '../GuideCard/index.vue';
  import PhotographerCard from '../PhotographerCard/index.vue';

  defineProps<{
    item: SearchResultItem;
    sortMode: string;
  }>();

  const emit = defineEmits<{
    like: [id: string];
    bookmark: [id: string];
    share: [id: string];
    follow: [id: string];
  }>();

  const handleLike = (id: string) => emit('like', id);
  const handleBookmark = (id: string) => emit('bookmark', id);
  const handleShare = (id: string) => emit('share', id);
  const handleFollow = (id: string) => emit('follow', id);
</script>

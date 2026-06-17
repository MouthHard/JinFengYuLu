<template>
  <div class="profile-following">
    <div class="following-header">
      <div class="header-top">
        <h2 class="page-title">我的</h2>
        <div class="following-count">
          <span class="count-label">共</span>
          <span class="count-value">{{ followingList.length }}</span>
          <span class="count-unit">位艺</span>
        </div>
      </div>
    </div>

    <div v-if="followingList && followingList.length > 0" class="following-grid">
      <div
        v-for="artist in followingList"
        :key="artist.id"
        class="artist-card"
        @click="handleArtistClick(artist)"
      >
        <div class="card-inner">
          <div class="artist-avatar-wrapper">
            <img
              v-if="artist.avatar"
              :src="artist.avatar"
              :alt="artist.name"
              class="artist-avatar"
            />
            <div v-else class="avatar-placeholder">
              <span class="avatar-icon"></span>
            </div>
            <div v-if="artist.isVerified" class="verified-badge">
              <VerifiedIcon />
            </div>
          </div>

          <div class="artist-info">
            <h3 class="artist-name">{{ artist.name }}</h3>
            <div class="artist-meta">
              <span class="fans-count">
                <HeartFilledIcon />
                {{ formatFansCount(artist.fans) }} 粉丝
              </span>
            </div>

            <div v-if="artist.recentSong" class="recent-song">
              <span class="recent-label">最近</span>
              <span class="recent-title">{{ artist.recentSong }}</span>
            </div>

            <button class="following-btn" @click.stop="handleUnfollow(artist)">
              <span class="btn-text">已</span>
            </button>
          </div>
        </div>

        <div class="card-glow"></div>
      </div>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon"></div>
      <div class="empty-text">暂无关注的</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import VerifiedIcon from '../../../../icons/SearchPage/VerifiedIcon.vue';
  import HeartFilledIcon from '../../../../icons/Profile/common/HeartFilledIcon.vue';

  interface FollowingArtist {
    id: number;
    name: string;
    fans: number;
    avatar?: string;
    isVerified?: boolean;
    recentSong?: string;
  }

  withDefaults(
    defineProps<{
      followingList?: FollowingArtist[];
    }>(),
    {
      followingList: () => []
    }
  );

  const emit = defineEmits<{
    (e: 'click', artist: FollowingArtist): void;
    (e: 'unfollow', artist: FollowingArtist): void;
  }>();

  const formatFansCount = (count: number): string => {
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + '万';
    }
    return count.toString();
  };

  const handleArtistClick = (artist: FollowingArtist) => {
    emit('click', artist);
  };

  const handleUnfollow = (artist: FollowingArtist) => {
    emit('unfollow', artist);
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>

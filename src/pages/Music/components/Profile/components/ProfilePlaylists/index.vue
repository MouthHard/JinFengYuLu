<template>
  <div class="profile-playlists">
    <div
      v-if="defaultPlaylists && defaultPlaylists.length > 0"
      class="playlist-categories"
    >
      <h3 class="category-title">默认歌单</h3>
      <div class="default-playlists-grid">
        <div
          v-for="item in defaultPlaylists"
          :key="item.key"
          class="default-playlist-card"
          @click="handlePlaylistClick(item)"
        >
          <div class="default-cover">
            <img
              v-if="item.cover"
              :src="item.cover"
              :alt="item.name"
              class="default-cover-image"
            />
            <div v-else class="default-cover-placeholder">
              <span class="placeholder-icon">{{ item.icon || '馃幍' }}</span>
            </div>
            <div class="default-cover-overlay">
              <div class="default-icon-large">{{ item.icon || '馃幍' }}</div>
              <div class="default-action-btns">
                <button
                  class="default-action-btn like-btn"
                  title="创建歌单"
                  @click.stop="handleLike(item)"
                >
                  <HeartFilledIcon />
                </button>
                <button
                  class="default-action-btn play-btn"
                  title="深色模式"
                  @click.stop="handlePlay(item)"
                >
                  <PlayIcon fill="currentColor" />
                </button>
                <button
                  class="default-action-btn share-btn"
                  title="分享"
                  @click.stop="handleShare(item)"
                >
                  <ShareIcon />
                </button>
              </div>
            </div>
          </div>
          <div class="default-card-info">
            <div class="default-card-name">{{ item.name }}</div>
            <div v-if="item.desc" class="default-card-desc">
              {{ item.desc }}
            </div>
            <div class="default-card-count">{{ item.count }}</div>
            <div
              v-if="item.songs && item.songs.length"
              class="default-card-songs"
            >
              <span
                v-for="song in item.songs.slice(0, 3)"
                :key="song"
                class="song-tag"
              >
                {{ song }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="createdPlaylists && createdPlaylists.length > 0"
      class="playlist-categories"
    >
      <div class="category-header">
        <h3 class="category-title">我的</h3>
        <button class="create-btn" @click="handleCreate">
          <PlusIcon />
          新增缓歌单
        </button>
      </div>
      <div class="playlists-grid">
        <div
          v-for="playlist in createdPlaylists"
          :key="playlist.id"
          class="playlist-card created-card"
          @click="handlePlaylistClick(playlist)"
        >
          <div class="playlist-inner">
            <div class="playlist-cover">
              <img
                v-if="playlist.cover"
                :src="playlist.cover"
                :alt="playlist.name"
                class="cover-image"
              />
              <div v-else class="cover-placeholder">
                <span class="placeholder-icon"></span>
              </div>
              <div class="cover-overlay">
                <div class="created-action-btns">
                  <button
                    class="created-action-btn favorite-btn"
                    title="收藏"
                    @click.stop="handleFavorite(playlist)"
                  >
                    <BookmarkIcon />
                  </button>
                  <button
                    class="created-action-btn play-btn"
                    title="深色模式"
                    @click.stop="handlePlay(playlist)"
                  >
                    <PlayIcon fill="currentColor" />
                  </button>
                  <button
                    class="created-action-btn more-btn"
                    title="查看更多"
                    @click.stop="handleMore(playlist)"
                  >
                    <MoreIcon />
                  </button>
                </div>
              </div>
              <div v-if="playlist.type" class="playlist-type">
                {{ playlist.type }}
              </div>
              <div class="play-count-badge">
                <PlayIcon fill="currentColor" :width="12" :height="12" />
                {{ playlist.playCount }}
              </div>
            </div>
            <div class="playlist-info">
              <h3 class="playlist-name">{{ playlist.name }}</h3>
              <p v-if="playlist.description" class="playlist-desc">
                {{ playlist.description }}
              </p>
              <div class="playlist-stats">
                <span class="stat-item">
                  <MusicNoteIcon :width="14" :height="14" />
                  {{ playlist.tracks }}首                </span>
                <span class="stat-divider"></span>
                <span class="stat-item plays">
                  <PlayIcon fill="currentColor" :width="14" :height="14" />
                  {{ playlist.playCount }}首
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="collectedPlaylists && collectedPlaylists.length > 0"
      class="playlist-categories"
    >
      <h3 class="category-title">收藏</h3>
      <div class="playlists-grid">
        <div
          v-for="playlist in collectedPlaylists"
          :key="playlist.id"
          class="playlist-card collected-card"
          @click="handlePlaylistClick(playlist)"
        >
          <div class="playlist-inner">
            <div class="playlist-cover">
              <img
                v-if="playlist.cover"
                :src="playlist.cover"
                :alt="playlist.name"
                class="cover-image"
              />
              <div v-else class="cover-placeholder">
                <span class="placeholder-icon"></span>
              </div>
              <div class="cover-overlay">
                <div class="collected-action-btns">
                  <button
                    class="collected-action-btn download-btn"
                    title="下载"
                    @click.stop="handleDownload(playlist)"
                  >
                    <DownloadIcon />
                  </button>
                  <button
                    class="collected-action-btn play-btn"
                    title="深色模式"
                    @click.stop="handlePlay(playlist)"
                  >
                    <PlayIcon fill="currentColor" />
                  </button>
                  <button
                    class="collected-action-btn add-btn"
                    title="添加到播放列表"
                    @click.stop="handleAddToPlaylist(playlist)"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div v-if="playlist.owner" class="playlist-owner">
                {{ playlist.owner }}
              </div>
              <div class="collected-stats-overlay">
                <span class="collected-stat">
                  <MusicNoteIcon :width="10" :height="10" />
                  {{ playlist.tracks }}
                </span>
              </div>
            </div>
            <div class="playlist-info">
              <h3 class="playlist-name">{{ playlist.name }}</h3>
              <p v-if="playlist.description" class="playlist-desc">
                {{ playlist.description }}
              </p>
              <div class="playlist-footer">
                <span class="footer-tracks">{{ playlist.tracks }}</span>
                <span class="footer-plays">
                  <PlayIcon fill="currentColor" :width="12" :height="12" />
                  {{ playlist.playCount }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="
        (!defaultPlaylists || defaultPlaylists.length === 0) &&
        (!createdPlaylists || createdPlaylists.length === 0) &&
        (!collectedPlaylists || collectedPlaylists.length === 0)
      "
      class="empty-state"
    >
      <div class="empty-icon"></div>
      <div class="empty-text">暂无</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeartFilledIcon from '@/pages/Music/icons/Profile/common/HeartFilledIcon.vue';
  import PlayIcon from '@/pages/Music/icons/common/PlayIcon.vue';
  import ShareIcon from '@/pages/Music/icons/PlayerBar/ShareIcon.vue';
  import PlusIcon from '@/pages/Music/icons/PlayerBar/PlusIcon.vue';
  import BookmarkIcon from '@/pages/Music/icons/UserMenu/BookmarkIcon.vue';
  import MoreIcon from '@/pages/Music/icons/PlayerBar/MoreIcon.vue';
  import MusicNoteIcon from '@/pages/Music/icons/Profile/common/MusicNoteIcon.vue';
  import DownloadIcon from '@/pages/Music/icons/MyMusic/common/DownloadIcon.vue';
  export interface DefaultPlaylist {
    key: string;
    icon?: string;
    name: string;
    count?: string;
    cover?: string;
    desc?: string;
    songs?: string[];
  }

  export interface CreatedPlaylist {
    id: number;
    name: string;
    tracks: number;
    playCount: string | number;
    cover?: string;
    type?: string;
    description?: string;
  }

  export interface CollectedPlaylist {
    id: number;
    name: string;
    tracks: number;
    playCount: string | number;
    cover?: string;
    owner?: string;
    description?: string;
  }

  withDefaults(
    defineProps<{
      defaultPlaylists?: DefaultPlaylist[];
      createdPlaylists?: CreatedPlaylist[];
      collectedPlaylists?: CollectedPlaylist[];
      showOptions?: boolean;
    }>(),
    {
      defaultPlaylists: () => [],
      createdPlaylists: () => [],
      collectedPlaylists: () => [],
      showOptions: true,
    },
  );

  const emit = defineEmits<{
    (
      e: 'play',
      playlist: DefaultPlaylist | CreatedPlaylist | CollectedPlaylist,
    ): void;
    (
      e: 'click',
      playlist: DefaultPlaylist | CreatedPlaylist | CollectedPlaylist,
    ): void;
    (e: 'create'): void;
    (e: 'options', playlist: CreatedPlaylist): void;
    (e: 'like', playlist: DefaultPlaylist): void;
    (e: 'share', playlist: DefaultPlaylist): void;
    (e: 'favorite', playlist: CreatedPlaylist): void;
    (e: 'more', playlist: CreatedPlaylist): void;
    (e: 'download', playlist: CollectedPlaylist): void;
    (e: 'addToPlaylist', playlist: CollectedPlaylist): void;
  }>();

  const handlePlaylistClick = (
    playlist: DefaultPlaylist | CreatedPlaylist | CollectedPlaylist,
  ) => {
    emit('click', playlist);
  };

  const handlePlay = (
    playlist: DefaultPlaylist | CreatedPlaylist | CollectedPlaylist,
  ) => {
    emit('play', playlist);
  };

  const handleCreate = () => {
    emit('create');
  };

  const handleLike = (playlist: DefaultPlaylist) => {
    emit('like', playlist);
  };

  const handleShare = (playlist: DefaultPlaylist) => {
    emit('share', playlist);
  };

  const handleFavorite = (playlist: CreatedPlaylist) => {
    emit('favorite', playlist);
  };

  const handleMore = (playlist: CreatedPlaylist) => {
    emit('more', playlist);
  };

  const handleDownload = (playlist: CollectedPlaylist) => {
    emit('download', playlist);
  };

  const handleAddToPlaylist = (playlist: CollectedPlaylist) => {
    emit('addToPlaylist', playlist);
  };
</script>

<style lang="scss" scoped src="./index.scss"></style>


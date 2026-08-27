<template>
  <div class="profile-header" :style="{ background: coverGradient }">
    <div class="gradient-overlay"></div>

    <div class="header-content">
      <div class="avatar-section">
        <div class="avatar-container">
          <div class="avatar-ring"></div>
          <div class="avatar-circle">
            <img
              v-if="userData.avatar"
              :src="userData.avatar"
              :alt="userData.nickname"
              class="avatar-image"
            />
            <div v-else class="avatar-placeholder">
              <span class="avatar-initial">
                {{ userData.nickname?.charAt(0) || 'U' }}
              </span>
            </div>
          </div>
        </div>

        <div v-if="userData.isVip" class="vip-badge">
          <StarIcon />
          <span class="vip-text">VIP</span>
        </div>
      </div>

      <div class="user-details">
        <div class="user-name-row">
          <h1 class="nickname">{{ userData.nickname || 'User' }}</h1>
          <span class="user-id">@{{ userData.userId || 'unknown' }}</span>
        </div>

        <p v-if="userData.bio" class="bio">{{ userData.bio }}</p>

        <div class="user-meta">
          <div v-if="userData.location" class="meta-item">
            <LocationIcon />
            <span>{{ userData.location }}</span>
          </div>

          <div v-if="userData.joinDate" class="meta-item">
            <CalendarIcon />
            <span>加入时间 {{ userData.joinDate }}</span>
          </div>

          <div v-if="userData.followers" class="meta-item">
            <UsersIcon />
            <span>{{ userData.followers }} </span>
          </div>

          <div v-if="userData.following" class="meta-item">
            <span class="following-count">{{ userData.following }} </span>
          </div>
        </div>
      </div>

      <div class="action-buttons">
        <button class="edit-button" @click="handleEdit">
          <EditIcon />
          <span>编辑</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import StarIcon from '../../../../icons/PlayerBar/StarIcon.vue';
  import LocationIcon from '../../../../icons/common/LocationIcon.vue';
  import CalendarIcon from '../../../../icons/common/CalendarIcon.vue';
  import UsersIcon from '../../../../icons/common/UsersIcon.vue';
  import EditIcon from '../../../../icons/MyMusic/common/EditIcon.vue';

  export default {
    name: 'ProfileHeader',
    props: {
      userData: {
        type: Object,
        required: true,
        default: () => ({
          nickname: '',
          userId: '',
          bio: '',
          location: '',
          joinDate: '',
          avatar: '',
          isVip: false,
          followers: 0,
          following: 0,
        }),
      },
      coverGradient: {
        type: String,
        default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
    emits: ['edit'],
    methods: {
      handleEdit() {
        this.$emit('edit');
      },
    },
  };
</script>

<style src="./index.scss" lang="scss"></style>

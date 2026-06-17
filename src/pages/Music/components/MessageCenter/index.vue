<template>
  <div class="message-center-page">
    <div class="page-header">
      <div class="header-content">
        <div class="header-icon">
          <UsersIcon />
        </div>
        <h1>消息</h1>
        <div class="unread-badge">{{ unreadCount }} 条</div>
      </div>
    </div>

    <div class="tabs-container">
      <div class="tabs-header">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['tab-btn', { active: activeTab === tab.key }]"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <span v-if="getUnreadCount(tab.key) > 0" class="tab-badge">{{ getUnreadCount(tab.key) }}</span>
        </button>
        <div class="tabs-action">
          <button class="action-btn" @click="markAllRead">
            <CheckIcon />
            <span>一键</span>
          </button>
        </div>
      </div>
    </div>

    <div class="message-content">
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="tab-panel">
          <div v-if="activeTab === 'private'" class="message-list">
            <div
              v-for="msg in privateMessages"
              :key="msg.id"
              :class="['message-item', { unread: msg.unread }]"
              @click="markAsRead('private', msg.id)"
            >
              <div class="msg-avatar" :style="{ background: msg.avatarColor }">
                <UserIcon />
              </div>
              <div class="msg-content">
                <div class="msg-header">
                  <span class="msg-name">{{ msg.name }}</span>
                  <span class="msg-time">{{ msg.time }}</span>
                </div>
                <p class="msg-text">{{ msg.content }}</p>
              </div>
              <div v-if="msg.unread" class="msg-unread"></div>
            </div>
          </div>

          <div v-if="activeTab === 'comment'" class="message-list">
            <div
              v-for="msg in commentMessages"
              :key="msg.id"
              :class="['message-item', { unread: msg.unread }]"
              @click="markAsRead('comment', msg.id)"
            >
              <div class="msg-avatar" :style="{ background: msg.avatarColor }">
                <UserIcon />
              </div>
              <div class="msg-content">
                <div class="msg-header">
                  <span class="msg-name">{{ msg.name }}</span>
                  <span class="msg-time">{{ msg.time }}</span>
                </div>
                <p class="msg-text">
                  <span class="highlight">{{ msg.name }}</span> 评论了你的<span class="highlight">{{ msg.target }}</span>：{{ msg.content }}
                </p>
              </div>
              <div v-if="msg.unread" class="msg-unread"></div>
            </div>
          </div>

          <div v-if="activeTab === 'at'" class="message-list">
            <div
              v-for="msg in atMessages"
              :key="msg.id"
              :class="['message-item', { unread: msg.unread }]"
              @click="markAsRead('at', msg.id)"
            >
              <div class="msg-avatar" :style="{ background: msg.avatarColor }">
                <UserIcon />
              </div>
              <div class="msg-content">
                <div class="msg-header">
                  <span class="msg-name">{{ msg.name }}</span>
                  <span class="msg-time">{{ msg.time }}</span>
                </div>
                <p class="msg-text">
                  <span class="highlight">@{{ msg.name }}</span> 在<span class="highlight">{{ msg.target }}</span> 中提到了你：{{ msg.content }}
                </p>
              </div>
              <div v-if="msg.unread" class="msg-unread"></div>
            </div>
          </div>

          <div v-if="activeTab === 'notice'" class="message-list">
            <div
              v-for="msg in noticeMessages"
              :key="msg.id"
              :class="['message-item notice-item', { unread: msg.unread }]"
              @click="markAsRead('notice', msg.id)"
            >
              <div class="msg-icon" :class="msg.iconType">
                <InfoIcon v-if="msg.iconType === 'system'" />
                <GiftIcon v-else-if="msg.iconType === 'gift'" />
                <LayersIcon v-else />
              </div>
              <div class="msg-content">
                <div class="msg-header">
                  <span class="msg-name">{{ msg.title }}</span>
                  <span class="msg-time">{{ msg.time }}</span>
                </div>
                <p class="msg-text">{{ msg.content }}</p>
              </div>
              <div v-if="msg.unread" class="msg-unread"></div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import UsersIcon from '../../icons/common/UsersIcon.vue';
import CheckIcon from '../../icons/common/CheckIcon.vue';
import UserIcon from '../../icons/common/UserIcon.vue';
import InfoIcon from '../../icons/common/InfoIcon.vue';
import GiftIcon from '../../icons/common/GiftIcon.vue';
import LayersIcon from '../../icons/common/LayersIcon.vue';

interface Message {
  id: number;
  name: string;
  content: string;
  time: string;
  unread: boolean;
  avatarColor?: string;
  target?: string;
  iconType?: string;
  title?: string;
}

const activeTab = ref('private');

const tabs = [
  { key: 'private', label: '私信' },
  { key: 'comment', label: '评论' },
  { key: 'at', label: '@我' },
  { key: 'notice', label: '通知' },
];

const privateMessages = ref<Message[]>([
  { id: 1, name: '王铮亮', content: '分享专辑：「无恙」', time: '05-21', unread: true, avatarColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 2, name: '张紫宁', content: '大家好，我是张紫宁！5月20日虾米outing...', time: '05-20', unread: true, avatarColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 3, name: '羽肿', content: '分享专辑：「山听雨」', time: '05-20', unread: true, avatarColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 4, name: '网易云音乐', content: '快来领取你的勋章', time: '05-19', unread: true, avatarColor: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%)' },
  { id: 5, name: '凌壹', content: '分享专辑：「失眠19天」', time: '05-16', unread: false, avatarColor: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
]);

const commentMessages = ref<Message[]>([
  { id: 1, name: '音乐小王子', content: '这首歌太好听了！', time: '05-22', unread: true, avatarColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', target: '歌单「我的最爱」' },
  { id: 2, name: '旋律', content: '收藏了，感谢分享', time: '05-21', unread: false, avatarColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', target: '评论「晴天」' },
]);

const atMessages = ref<Message[]>([
  { id: 1, name: '歌单达人', content: '一起来听听这些新歌吧！', time: '05-23', unread: true, avatarColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', target: '话题「音乐推荐」' },
]);

const noticeMessages = ref<Message[]>([
  { id: 1, name: '系统通知', title: '系统通知', content: '亲爱的会员您好，我们近期优化了《付费会员服务》，祝您使用愉快！', time: '05-23', unread: true, iconType: 'system' },
  { id: 2, name: '成就解锁', title: '成就解锁', content: '恭喜你获得了「音乐探险家」勋章！', time: '05-22', unread: false, iconType: 'gift' },
]);

const getUnreadCount = (tab: string): number => {
  switch (tab) {
    case 'private':
      return privateMessages.value.filter(m => m.unread).length;
    case 'comment':
      return commentMessages.value.filter(m => m.unread).length;
    case 'at':
      return atMessages.value.filter(m => m.unread).length;
    case 'notice':
      return noticeMessages.value.filter(m => m.unread).length;
    default:
      return 0;
  }
};

const unreadCount = computed(() => {
  return getUnreadCount('private') + getUnreadCount('comment') + getUnreadCount('at') + getUnreadCount('notice');
});

const markAsRead = (tab: string, id: number) => {
  switch (tab) {
    case 'private': {
      const pm = privateMessages.value.find(m => m.id === id);
      if (pm) pm.unread = false;
      break;
    }
    case 'comment': {
      const cm = commentMessages.value.find(m => m.id === id);
      if (cm) cm.unread = false;
      break;
    }
    case 'at': {
      const am = atMessages.value.find(m => m.id === id);
      if (am) am.unread = false;
      break;
    }
    case 'notice': {
      const nm = noticeMessages.value.find(m => m.id === id);
      if (nm) nm.unread = false;
      break;
    }
  }
};

const markAllRead = () => {
  privateMessages.value.forEach(m => m.unread = false);
  commentMessages.value.forEach(m => m.unread = false);
  atMessages.value.forEach(m => m.unread = false);
  noticeMessages.value.forEach(m => m.unread = false);
};
</script>

<style lang="scss" scoped src="./index.scss"></style>
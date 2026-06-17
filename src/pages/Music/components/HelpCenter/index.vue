<template>
  <div class="help-center-page">
    <div class="page-header">
      <div class="header-bg"></div>
      <div class="header-content">
        <div class="header-icon">
          <HelpQuestionIcon />
        </div>
        <h1>帮助中心</h1>
        <p>常见问题解答与使用指南</p>
      </div>
    </div>

    <div class="search-section">
      <div class="search-box" :class="{ focused: isSearchFocused }">
        <div class="search-icon">
          <SearchIcon />
        </div>
        <input v-model="searchKeyword" type="text" placeholder="搜索问题..." @focus="isSearchFocused = true"
          @blur="isSearchFocused = false" />
        <button v-if="searchKeyword" class="clear-btn" @click="searchKeyword = ''">
          <CloseIcon />
        </button>
      </div>
    </div>

    <div class="questions-section">
      <div class="section-header">
        <h2>
          {{activeCategory === 'all' ? '全部问题' : categories.find(c => c.key === activeCategory)?.label}}
        </h2>
        <span class="result-count">共{{ filteredQuestions.length }} 个问题</span>
      </div>

      <div class="questions-list">
        <div v-for="item in filteredQuestions" :key="item.id" class="question-item"
          :class="{ expanded: expandedId === item.id }">
          <div class="question-header" @click="toggleQuestion(item.id)">
            <div class="question-icon">
              <HelpQuestionIcon />
            </div>
            <h3 class="question-title">{{ item.question }}</h3>
            <div class="expand-icon">
              <ChevronDownIcon v-if="expandedId === item.id" :stroke-width="2" />
              <ChevronUpIcon v-else :stroke-width="2" />
            </div>
          </div>
          <transition name="answer-fade">
            <div v-if="expandedId === item.id" class="question-answer">
              <p>{{ item.answer }}</p>
              <div v-if="item.steps" class="steps-list">
                <div v-for="(step, idx) in item.steps" :key="idx" class="step-item">
                  <span class="step-number">{{ idx + 1 }}</span>
                  <span class="step-text">{{ step }}</span>
                </div>
              </div>
              <div v-if="item.tips" class="tips-box">
                <WarningIcon />
                <span class="tips-text">{{ item.tips }}</span>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div v-if="filteredQuestions.length === 0" class="empty-state">
        <div class="empty-icon">
          <HelpQuestionIcon :stroke-width="1.5" />
        </div>
        <h3>没有找到相关问题</h3>
        <p>尝试使用其他关键词搜索，或查看其他分类</p>
      </div>
    </div>

    <div class="features-section">
      <div class="section-header">
        <h2>
          <TargetIcon class="section-title-icon" /> 使用技巧
        </h2>
        <span class="section-desc">提升您的音乐体验</span>
      </div>
      <div class="features-list">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon" :style="{ background: feature.gradient }">
            <DynamicPathIcon :path="feature.icon" />
          </div>
          <div class="feature-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-section">
      <div class="contact-card">
        <div class="contact-header">
          <h2>没有找到答案？</h2>
          <p>我们很乐意为您提供帮助</p>
        </div>
        <div class="contact-cards">
          <div v-for="option in contactOptions" :key="option.type" class="contact-option">
            <div class="contact-icon-bg" :style="{ background: option.gradient }">
              <DynamicPathIcon :path="option.icon" />
            </div>
            <div class="contact-info">
              <h3>{{ option.title }}</h3>
              <p>{{ option.desc }}</p>
            </div>
            <button class="contact-btn" @click="handleContact(option.type)">
              <span>{{ option.buttonText }}</span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="feedback-section">
      <div class="feedback-card">
        <div class="feedback-icon">
          <CreditCardIcon />
        </div>
        <div class="feedback-content">
          <h3>您的反馈对我们很重要</h3>
          <p>帮助我们改进帮助中心，让更多用户获得更好的体验</p>
        </div>
        <button class="feedback-btn">
          提交反馈
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import SearchIcon from '@/pages/Music/icons/common/SearchIcon.vue';
import CloseIcon from '@/pages/Music/icons/common/CloseIcon.vue';
import HelpQuestionIcon from '@/pages/Music/icons/HelpCenter/HelpQuestionIcon.vue';
import ChevronDownIcon from '@/pages/Music/icons/common/ChevronDownIcon.vue';
import ChevronUpIcon from '@/pages/Music/icons/common/ChevronUpIcon.vue';
import WarningIcon from '@/pages/Music/icons/common/WarningIcon.vue';
import ArrowRightIcon from '@/pages/Music/icons/common/ArrowRightIcon.vue';
import CreditCardIcon from '@/pages/Music/icons/HelpCenter/CreditCardIcon.vue';
import DynamicPathIcon from '@/pages/Music/icons/common/DynamicPathIcon.vue';

const searchKeyword = ref('');
const activeCategory = ref('all');
const expandedId = ref<number | null>(null);
const isSearchFocused = ref(false);

const categories = [
  { key: 'all', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', label: '全部', count: 12 },
  { key: 'play', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', label: '播放', count: 3 },
  { key: 'account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: '账户', count: 3 },
  { key: 'vip', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', label: 'VIP相关', count: 3 },
  { key: 'other', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', label: '其他', count: 3 }
];


const questions = [
  {
    id: 1,
    category: 'play',
    question: '如何使用音乐播放器？',
    answer: '点击播放按钮即可开始播放音乐，支持上下曲切换、进度调节等功能。',
    steps: [
      '在发现音乐页面浏览推荐歌曲列表',
      '底部播放器会显示当前播放信息',
      '使用控制按钮切换歌曲或调节音量'
    ],
    tips: '提示：双击歌曲可以直接播放，无需等待加载'
  },
  {
    id: 2,
    category: 'play',
    question: '如何调整音效设置？',
    answer: '进入设置页面可以调整均衡器、音效模式等参数。',
    steps: [
      '点击右上角设置图标',
      '在个人主页点击"编辑资料"',
      '选择音效设置选项'
    ],
    tips: '如需更多帮助，请查看完整文档或联系客服。'
  },
  {
    id: 3,
    category: 'account',
    question: '如何编辑个人资料？',
    answer: '点击头像进入个人资料页面进行编辑。',
    steps: [
      '点击右上角用户头像',
      '在个人主页点击"编辑资料"',
      '修改昵称、头像等信息后保存'
    ],
    tips: '如需更多帮助，请查看完整文档或联系客服。'
  },
  {
    id: 4,
    category: 'account',
    question: '如何修改密码？',
    answer: '通过账户安全设置可以修改登录密码。',
    steps: [
      '进入设置 > 账户安全',
      '接收验证码',
      '设置新密码'
    ],
    tips: '如需更多帮助，请查看完整文档或联系客服。'
  },
  {
    id: 5,
    category: 'account',
    question: '如何查看我的收藏？',
    answer: '在"我的"页面可以查看收藏的歌曲和歌单。',
    steps: [],
    tips: '如需更多帮助，请查看完整文档或联系客服。'
  },
  {
    id: 6,
    category: 'account',
    question: '如何找回密码？',
    answer: '通过注册手机号或邮箱可以重置密码。',
    steps: [],
    tips: '如需更多帮助，请查看完整文档或联系客服。'
  },
  {
    id: 7,
    category: 'vip',
    question: 'VIP会员有什么特权？',
    answer: 'VIP会员享受无损音质、专属歌单、抢先听等特权。',
    features: [
      '无损音质：最高支持 Hi-Res 无损音质',
      '专属歌单：每周新歌专属推荐',
      '提前试听：新歌抢先听体验',
      '离线下载：无限制缓存歌曲'
    ]
  },
  {
    id: 8,
    category: 'vip',
    question: '如何开通 VIP 会员？',
    answer: '在个人中心选择会员套餐即可开通，支持月付/年付。',
    steps: []
  },
  {
    id: 9,
    category: 'vip',
    question: 'VIP会员到期后会怎样？',
    answer: '到期后将自动取消续费，已下载的歌曲仍可本地播放。',
    steps: []
  },
  {
    id: 10,
    category: 'other',
    question: '如何搜索歌曲？',
    answer: '在顶部搜索框输入歌曲名、歌手名或歌词关键词即可搜索。',
    steps: []
  },
  {
    id: 11,
    category: 'other',
    question: '如何创建歌单？',
    answer: '在"我的歌单"区域点击新建按钮即可创建自定义歌单。',
    steps: [
      '在"我的歌单"区域点击"新建歌单"',
      '输入歌单名称和描述',
      '点击创建即可'
    ],
    tips: '提示：歌单封面支持自定义上传图片'
  },
  {
    id: 12,
    category: 'other',
    question: '如何分享歌曲给好友？',
    answer: '点击分享按钮可以通过社交平台或链接分享给好友。',
    steps: []
  }
];

const features = [
  {
    title: '无损音质',
    desc: '支持 FLAC、Hi-Res 等高保真音频格式',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
  },
  {
    title: '智能推荐',
    desc: '基于听歌习惯智能推荐喜欢的音乐',
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
  },
  {
    title: '离线缓存',
    desc: '下载歌曲随时随地畅听',
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: '歌单协作',
    desc: '邀请好友一起创建和管理歌单',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)'
  }
];

const contactOptions = [
  {
    type: 'email',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    title: '邮件支持',
    desc: 'support@soundwave.com',
    buttonText: '发送邮件',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
  },
  {
    type: 'chat',
    icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
    title: '在线客服',
    desc: '工作时间 9:00-21:00',
    buttonText: '立即咨询',
    gradient: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)'
  },
  {
    type: 'faq',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: '常见问题',
    desc: '查看完整的 FAQ 文档',
    buttonText: '查看文档',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
];

const filteredQuestions = computed(() => {
  let result = questions;
  if (activeCategory.value !== 'all') {
    result = result.filter(q => q.category === activeCategory.value);
  }
  if (searchKeyword.value.trim()) {
    const keyword = searchKeyword.value.toLowerCase();
    result = result.filter(q =>
      q.question.toLowerCase().includes(keyword) ||
      q.answer.toLowerCase().includes(keyword)
    );
  }
  return result;
});

const toggleQuestion = (id: number) => {
  expandedId.value = expandedId.value === id ? null : id;
};

const handleContact = (type: string) => {
  switch (type) {
    case 'email':
      window.open('mailto:support@soundwave.com');
      break;
    case 'chat':
      ElMessage.info('暂无内容');
      break;
    case 'faq':
      activeCategory.value = 'all';
      break;
  }
};
</script>

<style lang="scss" scoped src="./index.scss"></style>

<template>
  <Teleport to="body">
    <Transition name="share-menu">
      <div v-if="visible" class="share-menu-overlay" @click="handleClose">
        <div class="share-menu-container" @click.stop>
          <div class="share-menu-header">
            <h3 class="share-title">分享到</h3>
            <button class="close-btn" @click="handleClose">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>

          <div class="share-platforms">
            <div class="platform-grid">
              <button v-for="platform in platforms" :key="platform.id" class="platform-btn" @click="handleShare(platform)">
                <div class="platform-icon" :style="{ background: platform.gradient }">
                  <component :is="platform.icon" />
                </div>
                <span class="platform-name">{{ platform.name }}</span>
              </button>
            </div>
          </div>

          <div class="share-link-section">
            <div class="link-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke-width="2" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke-width="2" />
              </svg>
              <span>复制链接</span>
            </div>
            <div class="link-input-group">
              <input type="text" :value="shareUrl" readonly class="link-input" />
              <button class="copy-btn" @click="handleCopyLink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="9" y="9" width="13" height="13" rx="2" stroke-width="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke-width="2" />
                </svg>
                <span>{{ copied ? '已复制' : '复制' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { showMessage } from '@/utils/landscape'

interface Platform {
  id: string
  name: string
  gradient: string
  icon: any
}

interface Props {
  visible: boolean
  shareUrl?: string
  title?: string
}

interface Emits {
  (e: 'update:visible', value: boolean): void
  (e: 'share', platform: Platform): void
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), {
  shareUrl: window.location.href,
  title: '',
})

const emit = defineEmits<Emits>()

const copied = ref(false)

const WechatIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M8.691 2.646C4.593 2.646 1.27 5.432 1.27 8.86c0 2.42 1.543 4.508 3.808 5.59l-.787 2.346 2.744-1.406c.58.126 1.183.19 1.798.19.293 0 .582-.017.866-.05-.18-.602-.277-1.234-.277-1.886 0-3.393 3.179-6.147 7.098-6.147.33 0 .654.023.972.067C16.085 4.596 12.69 2.646 8.691 2.646zm7.098 6.147c-3.393 0-6.147 2.386-6.147 5.32 0 .94.287 1.818.786 2.567l-.55 1.64 1.916-.984c.406.088.828.133 1.261.133 3.393 0 6.147-2.386 6.147-5.32s-2.754-5.356-6.413-5.356z',
    }),
  ])

const WeiboIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M9.808 18.08c-3.403.39-6.352-1.2-6.583-3.55-.23-2.35 2.35-4.553 5.753-4.943 3.403-.39 6.352 1.2 6.583 3.55.23 2.352-2.35 4.553-5.753 4.943zm8.84-8.84c-.47-.12-.79-.19-.55-.68.55-1.18.6-2.19.01-2.92-1.11-1.39-4.15-.52-7.62 1.58-2.18 1.32-3.63 2.66-3.63 2.66s.9-1.12 2.68-2.2c3.87-2.35 7.36-2.45 8.73-.73 1.07 1.35.78 3.31-.62 4.29zm2.26 2.56c-.14-.33-.52-.48-.86-.33-3.05 1.33-6.6 1.33-9.65 0-.34-.15-.72 0-.86.33-.14.33 0 .72.33.86 3.4 1.48 7.31 1.48 10.71 0 .33-.14.47-.53.33-.86z',
    }),
  ])

const QQIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M12.003 2c-2.26 0-4.096.465-5.477 1.387-1.882 1.26-2.878 3.312-2.878 5.933 0 2.587.91 4.628 2.707 6.083.093.076.188.15.284.221-.485 1.098-1.27 1.97-1.27 1.97s2.478.722 4.095-.17c.532.132 1.087.21 1.666.21 2.26 0 4.096-.465 5.477-1.387 1.882-1.26 2.878-3.312 2.878-5.933 0-2.587-.91-4.628-2.707-6.083C16.099 2.465 14.263 2 12.003 2z',
    }),
  ])

const TwitterIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M18.244 2.25h3.308l-7.227 8.26 8.474 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    }),
  ])

const FacebookIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.92-1.956 1.87v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    }),
  ])

const TelegramIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.132.001-.246-.193-.18l-10.25 3.93c-.216.083-.214.2.013.253l2.377.91 1.46 4.36c.07.208.192.228.328.062l1.587-1.996 2.43 1.85c.255.194.467.092.544-.232l2.637-8.987c.074-.252-.046-.394-.239-.45z',
    }),
  ])

const EmailIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }, [
    h('path', {
      d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      'stroke-width': '2',
    }),
    h('polyline', { points: '22,6 12,13 2,6', 'stroke-width': '2' }),
  ])

const LinkedinIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.367-1.85 3.603 0 4.27 2.371 4.27 5.456v6.285zM5.339 7.433c-1.144 0-2.066-.957-2.066-2.139 0-1.182.922-2.139 2.066-2.139 1.144 0 2.066.957 2.066 2.139 0 1.182-.922 2.139-2.066 2.139zM7.163 20.452H3.517V9h3.646v11.452zM22.226 0H1.774C.792 0 0 .773 0 1.729v20.542C0 23.227.792 24 1.774 24h20.452C23.208 24 24 23.227 24 22.271V1.729C24 .773 23.208 0 22.226 0z',
    }),
  ])

const PinterestIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.116-3.44.223-.82 1.439-5.186 1.439-5.186s-.367-.736-.367-1.824c0-1.708.99-2.985 2.22-2.985 1.048 0 1.556.787 1.556 1.732 0 1.056-.673 2.635-1.02 4.097-.29 1.23.614 2.23 1.824 2.23 2.188 0 3.868-2.306 3.868-5.626 0-2.94-2.104-5.002-5.106-5.002-3.476 0-5.514 2.606-5.514 5.298 0 1.056.406 2.188.912 2.888.1.122.114.23.088.355-.092.386-.298 1.23-.34 1.404-.054.227-.178.274-.408.165-1.524-.712-2.472-2.63-2.472-4.24 0-3.456 2.51-6.63 7.24-6.63 3.788 0 6.732 2.696 6.732 6.298 0 3.788-2.39 6.832-5.708 6.832-1.114 0-2.156-.58-2.514-1.264l-.684 2.612c-.248.956-.916 2.152-1.364 2.88.92.284 1.896.44 2.916.44 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z',
    }),
  ])

const RedditIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 7.389a1.624 1.624 0 0 1 1.623 1.624 1.624 1.624 0 0 1-1.623 1.624 1.624 1.624 0 0 1-1.624-1.624 1.624 1.624 0 0 1 1.624-1.624zm-8.707 8.413c.862.862 2.006 1.337 3.223 1.337 1.217 0 2.361-.475 3.223-1.337l.543.543c-1.018 1.018-2.37 1.58-3.766 1.58s-2.748-.562-3.766-1.58l.543-.543zm1.193-3.34a1.624 1.624 0 0 1 1.624 1.624 1.624 1.624 0 0 1-1.624 1.624 1.624 1.624 0 0 1-1.624-1.624 1.624 1.624 0 0 1 1.624-1.624zm4.5 0a1.624 1.624 0 0 1 1.624 1.624 1.624 1.624 0 0 1-1.624 1.624 1.624 1.624 0 0 1-1.624-1.624 1.624 1.624 0 0 1 1.624-1.624z',
    }),
  ])

const WhatsAppIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.656-2.059-.173-.297-.018-.46.125-.61.123-.123.273-.323.423-.473.149-.149.199-.273.298-.473.099-.197.049-.373-.05-.523-.149-.297-.647-1.56-.894-2.132-.197-.473-.396-.323-.545-.323-.173 0-.373-.025-.572-.025-.199 0-.523.075-.797.373-.273.297-1.063 1.04-1.063 2.535 0 1.495 1.088 2.933 1.238 3.135.149.199 2.138 3.267 5.183 4.583 2.452 1.058 3.355 1.14 4.053 1.14.897 0 1.358-.473 1.482-.871.149-.396.223-1.363.323-1.56.099-.198.099-.373-.05-.522zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z',
    }),
  ])

const DoubanIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M2.4 0v2.4h19.2V0H2.4zm0 4.8v2.4h19.2V4.8H2.4zm0 4.8v9.6h7.2v-7.2h4.8v7.2h7.2V9.6H2.4z',
    }),
  ])

const ZhihuIcon = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', {
      d:
        'M5.721 0C4.456 0 3.675.825 3.675 1.98v6.48H0v2.1h3.675v10.68c0 1.275.81 1.98 1.98 1.98h4.5v-2.1H6.42c-.51 0-.705-.195-.705-.705V10.56h4.815v-2.1H5.715V2.4c0-.51.195-.705.705-.705h3.735V0H5.72zm8.46 0v2.1h4.26c.51 0 .705.195.705.705v5.355H12.39v2.1h6.75v9.255c0 .51-.195.705-.705.705h-3.66v2.1h4.5c1.275 0 1.98-.705 1.98-1.98V10.56H24v-2.1h-3.735V1.98c0-1.155-.705-1.98-1.98-1.98h-4.104z',
    }),
  ])

const platforms: Platform[] = [
  {
    id: 'wechat',
    name: '微信',
    gradient: 'linear-gradient(135deg, #07c160 0%, #09bb07 100%)',
    icon: WechatIcon,
  },
  {
    id: 'weibo',
    name: '微博',
    gradient: 'linear-gradient(135deg, #e6162d 0%, #ff5722 100%)',
    icon: WeiboIcon,
  },
  {
    id: 'qq',
    name: 'QQ',
    gradient: 'linear-gradient(135deg, #12b7f5 0%, #2196f3 100%)',
    icon: QQIcon,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    gradient: 'linear-gradient(135deg, #1da1f2 0%, #0d95e8 100%)',
    icon: TwitterIcon,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    gradient: 'linear-gradient(135deg, #4267b2 0%, #3b5998 100%)',
    icon: FacebookIcon,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    gradient: 'linear-gradient(135deg, #0088cc 0%, #0088cc 100%)',
    icon: TelegramIcon,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    gradient: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
    icon: WhatsAppIcon,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    gradient: 'linear-gradient(135deg, #0077b5 0%, #0077b5 100%)',
    icon: LinkedinIcon,
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    gradient: 'linear-gradient(135deg, #e60023 0%, #bd081c 100%)',
    icon: PinterestIcon,
  },
  {
    id: 'reddit',
    name: 'Reddit',
    gradient: 'linear-gradient(135deg, #ff4500 0%, #ff4500 100%)',
    icon: RedditIcon,
  },
  {
    id: 'douban',
    name: '豆瓣',
    gradient: 'linear-gradient(135deg, #00b51d 0%, #00a01e 100%)',
    icon: DoubanIcon,
  },
  {
    id: 'zhihu',
    name: '知乎',
    gradient: 'linear-gradient(135deg, #0066ff 0%, #0066ff 100%)',
    icon: ZhihuIcon,
  },
  {
    id: 'email',
    name: '邮件',
    gradient: 'linear-gradient(135deg, #ff7043 0%, #ff5722 100%)',
    icon: EmailIcon,
  },
]

const handleClose = () => {
  emit('update:visible', false)
  emit('close')
}

const handleShare = (platform: Platform) => {
  showMessage.share.platform(platform.name)
  emit('share', platform)
  handleClose()
}

const handleCopyLink = async () => {
  try {
    await navigator.clipboard.writeText(props.shareUrl)
    copied.value = true
    showMessage.share.copied()
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    showMessage.share.error()
    console.error('Failed to copy:', err)
  }
}
</script>

<style scoped lang="scss" src="./index.scss" />

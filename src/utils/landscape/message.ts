import { ElMessage } from 'element-plus';

type ContentType = 'image' | 'video' | 'guide' | 'photographer';

const getContentTypeText = (type: ContentType): string => {
  const typeMap: Record<ContentType, string> = {
    image: '图片',
    video: '视频',
    guide: '攻略',
    photographer: '摄影师',
  };
  return typeMap[type] || '内容';
};

const MESSAGE_Z_INDEX = 11000;
const MESSAGE_DURATION = 3000;

const showMessageWithHoverClose = (options: {
  type: 'success' | 'info' | 'error' | 'warning';
  message: string;
}) => {
  const handler = ElMessage({
    ...options,
    duration: MESSAGE_DURATION,
    showClose: true,
    zIndex: MESSAGE_Z_INDEX,
    onClose: () => { },
  });

  const messageEl = document.querySelector('.el-message:last-child') as HTMLElement;
  if (messageEl) {
    messageEl.addEventListener('mouseenter', () => {
      handler.close();
    });
  }

  return handler;
};

export const showMessage = {
  like: {
    success: (title: string) => {
      showMessageWithHoverClose({
        type: 'success',
        message: `已为「${title}」点赞`,
      });
    },
    cancel: () => {
      showMessageWithHoverClose({
        type: 'info',
        message: '已取消点赞',
      });
    },
  },

  love: {
    success: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      showMessageWithHoverClose({
        type: 'success',
        message: `「${title}」已添加到「我的喜欢 - ${typeText}」`,
      });
    },
    cancel: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      showMessageWithHoverClose({
        type: 'info',
        message: `已从「我的喜欢 - ${typeText}」移除「${title}」`,
      });
    },
  },

  favorite: {
    success: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      showMessageWithHoverClose({
        type: 'success',
        message: `「${title}」已收藏到「我的收藏 - ${typeText}」`,
      });
    },
    cancel: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      showMessageWithHoverClose({
        type: 'info',
        message: `已从「我的收藏 - ${typeText}」移除「${title}」`,
      });
    },
  },

  follow: {
    success: (name: string) => {
      showMessageWithHoverClose({
        type: 'success',
        message: `已关注「${name}」，可在「我的关注」查看`,
      });
    },
    cancel: (name: string) => {
      showMessageWithHoverClose({
        type: 'info',
        message: `已取消关注「${name}」`,
      });
    },
  },

  share: {
    success: (title: string) => {
      showMessageWithHoverClose({
        type: 'success',
        message: `已复制「${title}」分享链接`,
      });
    },
    platform: (platformName: string) => {
      showMessageWithHoverClose({
        type: 'success',
        message: `已分享到 ${platformName}`,
      });
    },
    copied: () => {
      showMessageWithHoverClose({
        type: 'success',
        message: '链接已复制到剪贴板',
      });
    },
    error: () => {
      showMessageWithHoverClose({
        type: 'error',
        message: '复制失败，请手动复制',
      });
    },
  },

  download: {
    success: (title: string) => {
      showMessageWithHoverClose({
        type: 'success',
        message: `「${title}」下载已开始`,
      });
    },
    error: () => {
      showMessageWithHoverClose({
        type: 'error',
        message: '下载失败，请稍后重试',
      });
    },
  },

  error: (message: string) => {
    showMessageWithHoverClose({
      type: 'error',
      message,
    });
  },

  warning: (message: string) => {
    showMessageWithHoverClose({
      type: 'warning',
      message,
    });
  },

  info: (message: string) => {
    showMessageWithHoverClose({
      type: 'info',
      message,
    });
  },
};
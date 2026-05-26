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

export const showMessage = {
  like: {
    success: (title: string) => {
      ElMessage.success({
        message: `已为「${title}」点赞`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    cancel: () => {
      ElMessage.info({
        message: '已取消点赞',
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
  },

  love: {
    success: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      ElMessage.success({
        message: `「${title}」已添加到「我的喜欢 - ${typeText}」`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    cancel: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      ElMessage.info({
        message: `已从「我的喜欢 - ${typeText}」移除「${title}」`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
  },

  favorite: {
    success: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      ElMessage.success({
        message: `「${title}」已收藏到「我的收藏 - ${typeText}」`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    cancel: (title: string, type: ContentType) => {
      const typeText = getContentTypeText(type);
      ElMessage.info({
        message: `已从「我的收藏 - ${typeText}」移除「${title}」`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
  },

  follow: {
    success: (name: string) => {
      ElMessage.success({
        message: `已关注「${name}」，可在「我的关注」查看`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    cancel: (name: string) => {
      ElMessage.info({
        message: `已取消关注「${name}」`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
  },

  share: {
    success: (title: string) => {
      ElMessage.success({
        message: `已复制「${title}」分享链接`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    platform: (platformName: string) => {
      ElMessage.success({
        message: `已分享到 ${platformName}`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    copied: () => {
      ElMessage.success({
        message: '链接已复制到剪贴板',
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    error: () => {
      ElMessage.error({
        message: '复制失败，请手动复制',
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
  },

  download: {
    success: (title: string) => {
      ElMessage.success({
        message: `「${title}」下载已开始`,
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
    error: () => {
      ElMessage.error({
        message: '下载失败，请稍后重试',
        duration: 3000,
        showClose: true,
        zIndex: MESSAGE_Z_INDEX,
      });
    },
  },
};
// ==================== 图片URL常量 ====================
export const LANDSCAPE_IMAGE_BASE =
  'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/';
export const APHORISM_IMAGE_BASE =
  'https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/';
export const LOCAL_FALLBACK_BASE = '/src/assets/image/PoemPic/';

// ==================== 配置常量 ====================
const LANDSCAPE_MAX_INDEX = 21; // 0-20
const APHORISM_MAX_INDEX = 41; // 0-40

// 本地保底图片列表
const LOCAL_FALLBACK_IMAGES = [
  'A1.webp',
  'A2.webp',
  'A3.webp',
  'A4.webp',
  'A5.webp',
  'A6.webp',
  'A7.webp',
  'A8.webp',
  'B.webp',
  'C.webp',
  'D.webp',
  'E.webp',
  'F.webp',
  'G.webp',
  'H.webp',
  'I.webp',
  'J.webp',
  'K.webp',
  'L.webp',
  'M.webp',
  'N.webp',
  'O.webp',
  'P.webp',
  'Q.webp',
  'R.webp',
  'S.webp',
  'T.webp',
  'U.webp',
  'V.webp',
  'W.webp',
  'X.webp',
  'Y.webp',
  'Z.webp',
  'image.webp',
];

// ==================== 工具函数 ====================

/**
 * 基于字符串生成确定性hash值
 * 用于根据ID生成稳定的图片索引
 */
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * 获取基于ID的确定性风景图片URL
 * 相同ID总是返回相同的图片，适合需要稳定展示的场景
 * @param id - 用于生成hash的唯一标识符
 */
export function getLandscapeImage(id: string): string {
  const index = hashCode(id) % LANDSCAPE_MAX_INDEX;
  return `${LANDSCAPE_IMAGE_BASE}${index}.webp`;
}

/**
 * 获取基于ID的确定性格言图片URL
 * @param id - 用于生成hash的唯一标识符
 */
export function getAphorismImage(id: string): string {
  const index = hashCode(id) % APHORISM_MAX_INDEX;
  return `${APHORISM_IMAGE_BASE}${index}.webp`;
}

/**
 * 获取基于ID的美食图片URL（复用风景图）
 * @param id - 美食的唯一标识符
 */
export function getFoodImage(id: string): string {
  return getLandscapeImage(id);
}

/**
 * 获取基于ID的风光景点图片URL（复用风景图）
 * @param id - 景点的唯一标识符
 */
export function getScenerySpotImage(id: string): string {
  return getLandscapeImage(id);
}

/**
 * 获取随机风景图片URL
 * 每次调用返回不同的随机图片，适合展示多样性
 */
export function getRandomLandscapeImage(): string {
  const randomIndex = Math.floor(Math.random() * LANDSCAPE_MAX_INDEX);
  return `${LANDSCAPE_IMAGE_BASE}${randomIndex}.webp`;
}

/**
 * 获取随机格言图片URL
 */
export function getRandomAphorismImage(): string {
  const randomIndex = Math.floor(Math.random() * APHORISM_MAX_INDEX);
  return `${APHORISM_IMAGE_BASE}${randomIndex}.webp`;
}

/**
 * 获取本地保底图片URL
 * 当远程图片加载失败时使用
 */
export function getRandomLocalFallbackImage(): string {
  const randomIndex = Math.floor(Math.random() * LOCAL_FALLBACK_IMAGES.length);
  return `${LOCAL_FALLBACK_BASE}${LOCAL_FALLBACK_IMAGES[randomIndex]}`;
}

/**
 * 获取带保底机制的图片对象
 * 返回主图和备用图，前端可实现自动降级
 * @param imageUrl - 主图片URL
 */
export function getImageWithFallback(imageUrl: string): {
  primary: string;
  fallback: string;
} {
  return {
    primary: imageUrl,
    fallback: getRandomLocalFallbackImage(),
  };
}

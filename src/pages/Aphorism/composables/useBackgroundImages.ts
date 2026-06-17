/**
 * 背景图缓存 Composable
 * 避免每个 PoemCard 实例独立计算背景图
 */

const backgroundImagesCache = new Map<string, string[]>();
const backgroundImageIndexCache = new Map<string, number>();

export function useBackgroundImages() {
  if (!backgroundImagesCache.has('images')) {
    const imageModules = import.meta.glob(
      '../../../assets/image/PoemPic/*.webp',
      { eager: true }
    );
    const images = Object.values(imageModules).map(
      (module: any) => module.default
    );
    backgroundImagesCache.set('images', images);
  }

  return backgroundImagesCache.get('images')!;
}

export function useBackgroundImage(poemId: string): string {
  const images = useBackgroundImages();

  if (!backgroundImageIndexCache.has(poemId)) {
    let hash = 0;
    for (let i = 0; i < poemId.length; i++) {
      hash = (hash << 5) - hash + poemId.charCodeAt(i);
      hash = hash & hash;
    }
    const index = Math.abs(hash) % images.length;
    backgroundImageIndexCache.set(poemId, index);
  }

  const index = backgroundImageIndexCache.get(poemId)!;
  return images[index];
}

export function clearBackgroundImageCache() {
  backgroundImagesCache.clear();
  backgroundImageIndexCache.clear();
}
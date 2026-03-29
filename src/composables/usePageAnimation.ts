/**
 * 页面翻页动画 Composable
 *
 * 提供翻页动画的状态管理和控制功能，支持：
 * - 翻页方向控制
 * - 动画防抖
 * - 自动索引管理
 *
 * @future 用于 History、Museum 等需要翻页效果的模块
 * @example
 * ```typescript
 * const { isFlipping, currentIndex, nextPage, prevPage } = usePageAnimation({
 *   flipDuration: 600,
 * });
 * ```
 */

import { ref } from "vue";

export interface UsePageAnimationOptions {
  flipDuration?: number;
  flipDelay?: number;
}

export function usePageAnimation(options: UsePageAnimationOptions = {}) {
  const { flipDuration = 600, flipDelay = 300 } = options;

  const isFlipping = ref(false);
  const flipDirection = ref("");
  const currentIndex = ref(0);

  const handlePageChange = async (
    newIndex: number,
    direction: string,
  ): Promise<boolean> => {
    if (isFlipping.value) return false;

    isFlipping.value = true;
    flipDirection.value = direction;

    await new Promise((resolve) => setTimeout(resolve, flipDelay));
    currentIndex.value = newIndex;
    await new Promise((resolve) => setTimeout(resolve, flipDuration));

    isFlipping.value = false;
    flipDirection.value = "";

    return true;
  };

  const goToPage = async (index: number, totalPages: number): Promise<void> => {
    if (index < 0 || index >= totalPages || index === currentIndex.value)
      return;

    const direction = index > currentIndex.value ? "right" : "left";
    await handlePageChange(index, direction);
  };

  const nextPage = async (totalPages: number): Promise<void> => {
    if (currentIndex.value < totalPages - 1) {
      await handlePageChange(currentIndex.value + 1, "right");
    }
  };

  const prevPage = async (): Promise<void> => {
    if (currentIndex.value > 0) {
      await handlePageChange(currentIndex.value - 1, "left");
    }
  };

  return {
    isFlipping,
    flipDirection,
    currentIndex,
    handlePageChange,
    goToPage,
    nextPage,
    prevPage,
  };
}

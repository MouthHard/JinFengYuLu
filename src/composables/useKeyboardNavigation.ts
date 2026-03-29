/**
 * 键盘导航 Composable
 *
 * 提供键盘快捷键导航功能，支持方向键、回车、ESC等常用按键。
 * 自动管理事件监听器的生命周期。
 *
 * @future 用于 History、Museum 等需要键盘导航的模块
 * @example
 * ```typescript
 * useKeyboardNavigation({
 *   onLeft: () => prevPage(),
 *   onRight: () => nextPage(),
 *   onEnter: () => toggleDetail(),
 * });
 * ```
 */

import { onMounted, onUnmounted } from "vue";

export interface KeyboardNavigationOptions {
  onLeft?: () => void;
  onRight?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
  onSpace?: () => void;
  enabled?: boolean;
}

export function useKeyboardNavigation(
  options: KeyboardNavigationOptions,
): void {
  const {
    onLeft,
    onRight,
    onUp,
    onDown,
    onEnter,
    onEscape,
    onSpace,
    enabled = true,
  } = options;

  const handleKeydown = (event: KeyboardEvent): void => {
    if (!enabled) return;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        onLeft?.();
        break;
      case "ArrowRight":
        event.preventDefault();
        onRight?.();
        break;
      case "ArrowUp":
        event.preventDefault();
        onUp?.();
        break;
      case "ArrowDown":
        event.preventDefault();
        onDown?.();
        break;
      case "Enter":
        onEnter?.();
        break;
      case "Escape":
        onEscape?.();
        break;
      case " ":
        event.preventDefault();
        onSpace?.();
        break;
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
}

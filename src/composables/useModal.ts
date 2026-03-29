/**
 * 模态框管理 Composable
 *
 * 提供模态框的打开、关闭、状态管理功能，支持：
 * - 防止背景滚动
 * - ESC键关闭
 * - 点击外部关闭
 *
 * @future 用于 Museum、History 等需要详情弹窗的模块
 * @example
 * ```typescript
 * const { isOpen, selectedItem, open, close } = useModal<MuseumItem>();
 * ```
 */

import { ref, onMounted, onUnmounted } from "vue";

export interface UseModalOptions {
  preventBodyScroll?: boolean;
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
}

export function useModal<T>(options: UseModalOptions = {}) {
  const {
    preventBodyScroll = true,
    closeOnEscape = true,
    closeOnClickOutside = false,
  } = options;

  const selectedItem = ref<T | null>(null);
  const isOpen = ref(false);

  const open = (item: T): void => {
    selectedItem.value = item;
    isOpen.value = true;

    if (preventBodyScroll) {
      document.body.style.overflow = "hidden";
    }
  };

  const close = (): void => {
    selectedItem.value = null;
    isOpen.value = false;

    if (preventBodyScroll) {
      document.body.style.overflow = "";
    }
  };

  const toggle = (item?: T): void => {
    if (isOpen.value) {
      close();
    } else if (item) {
      open(item);
    }
  };

  const handleKeydown = (event: KeyboardEvent): void => {
    if (closeOnEscape && event.key === "Escape" && isOpen.value) {
      close();
    }
  };

  const handleClickOutside = (_event: MouseEvent): void => {
    if (closeOnClickOutside && isOpen.value) {
      close();
    }
  };

  onMounted(() => {
    if (closeOnEscape) {
      window.addEventListener("keydown", handleKeydown);
    }
  });

  onUnmounted(() => {
    if (closeOnEscape) {
      window.removeEventListener("keydown", handleKeydown);
    }
    if (preventBodyScroll) {
      document.body.style.overflow = "";
    }
  });

  return {
    selectedItem,
    isOpen,
    open,
    close,
    toggle,
    handleClickOutside,
  };
}

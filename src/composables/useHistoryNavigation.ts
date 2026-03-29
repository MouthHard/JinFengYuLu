/**
 * 历史页面导航 Composable
 *
 * 管理历史页面的导航状态、侧边栏折叠、内容显示等。
 * 自动管理body滚动状态。
 *
 * @future 用于 History 模块的主页面导航
 * @example
 * ```typescript
 * const { showContent, activeNav, enterContent, backToHome } = useHistoryNavigation();
 * ```
 */

import { ref, onMounted, onUnmounted } from "vue";

export interface UseHistoryNavigationOptions {
  defaultNav?: string;
}

export function useHistoryNavigation(
  options: UseHistoryNavigationOptions = {},
) {
  const { defaultNav = "dynasties" } = options;

  const showContent = ref(false);
  const sidebarRolledUp = ref(false);
  const activeNav = ref(defaultNav);

  const enterContent = (): void => {
    showContent.value = true;
    document.body.style.overflow = "hidden";
  };

  const backToHome = (): void => {
    showContent.value = false;
    document.body.style.overflow = "hidden";
    sidebarRolledUp.value = false;
  };

  const toggleRollUp = (): void => {
    sidebarRolledUp.value = !sidebarRolledUp.value;
  };

  const setActiveNav = (nav: string): void => {
    activeNav.value = nav;
  };

  onMounted(() => {
    document.body.style.overflow = "hidden";
  });

  onUnmounted(() => {
    document.body.style.overflow = "";
  });

  return {
    showContent,
    sidebarRolledUp,
    activeNav,
    enterContent,
    backToHome,
    toggleRollUp,
    setActiveNav,
  };
}

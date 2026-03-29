// 路由项类型：定义导航菜单项的结构
export interface RouteItem {
  routeId: string; // 路由唯一标识
  routeName: string; // 路由路径
  pageName: string; // 页面显示名称
  bg: string; // 背景图片地址
}

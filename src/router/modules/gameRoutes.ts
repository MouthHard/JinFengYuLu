import type { RouteRecordRaw } from "vue-router";

export const gameRoutes: RouteRecordRaw[] = [
  {
    path: "/game",
    name: "game",
    component: () => import("@/pages/Game/index.vue"),
    redirect: "/game/store",
    meta: {
      title: "游戏空间",
      description: "探索游戏世界，发现热门大作与独立精品",
    },
    children: [
      {
        path: "store",
        name: "game-store",
        component: () => import("@/pages/Game/components/Store/index.vue"),
      },
      {
        path: "sale",
        name: "game-sale",
        component: () => import("@/pages/Game/components/Sale/index.vue"),
      },
      {
        path: "library",
        name: "game-library",
        component: () => import("@/pages/Game/components/Library/index.vue"),
      },
      {
        path: "detail/:id",
        name: "game-detail",
        component: () => import("@/pages/Game/components/GameDetail/index.vue"),
      },
    ],
  },
];

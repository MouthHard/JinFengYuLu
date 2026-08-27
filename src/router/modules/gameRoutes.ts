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
        meta: { title: "游戏商店" },
      },
      {
        path: "sale",
        name: "game-sale",
        component: () => import("@/pages/Game/components/Sale/index.vue"),
        meta: { title: "特惠促销" },
      },
      {
        path: "ranking",
        name: "game-ranking",
        component: () => import("@/pages/Game/components/Ranking/index.vue"),
        meta: { title: "游戏排行榜" },
      },
      {
        path: "library",
        name: "game-library",
        component: () => import("@/pages/Game/components/Library/index.vue"),
        meta: { title: "我的游戏库" },
      },
      {
        path: "wishlist",
        name: "game-wishlist",
        component: () => import("@/pages/Game/components/Wishlist/index.vue"),
        meta: { title: "我的愿望单" },
      },
      {
        path: "cart",
        name: "game-cart",
        component: () => import("@/pages/Game/components/Cart/index.vue"),
        meta: { title: "购物车" },
      },
      {
        path: "search",
        name: "game-search",
        component: () => import("@/pages/Game/components/Search/index.vue"),
        meta: { title: "搜索游戏" },
      },
      {
        path: "detail/:id",
        name: "game-detail",
        component: () => import("@/pages/Game/components/GameDetail/index.vue"),
        meta: { title: "游戏详情" },
      },
    ],
  },
];

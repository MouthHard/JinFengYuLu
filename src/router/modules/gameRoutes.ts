import type { RouteRecordRaw } from "vue-router";

export const gameRoutes: RouteRecordRaw[] = [
  {
    path: "/game",
    name: "game",
    component: () => import("@/pages/Game/index.vue"),
    redirect: "/game/shop-steam",
    children: [
      {
        path: "shop-steam",
        name: "shop-steam",
        component: () => import("@/pages/Game/GameSubApp/ShopSteam/index.vue"),
      },
      {
        path: "warehouse-steam",
        name: "warehouse-steam",
        component: () =>
          import("@/pages/Game/GameSubApp/WarehouseSteam/index.vue"),
      },
      {
        path: "community-steam",
        name: "community-steam",
        component: () =>
          import("@/pages/Game/GameSubApp/CommunitySteam/index.vue"),
      },
      {
        path: "user-steam",
        name: "user-steam",
        component: () => import("@/pages/Game/GameSubApp/UserSteam/index.vue"),
      },
    ],
  },
];

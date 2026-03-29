import type { RouteRecordRaw } from "vue-router";

export const aphorismRoutes: RouteRecordRaw[] = [
  {
    path: "/aphorism",
    name: "aphorism",
    component: () => import("@/pages/Aphorism/index.vue"),
  },
];

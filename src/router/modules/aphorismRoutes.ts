import type { RouteRecordRaw } from "vue-router";

export const aphorismRoutes: RouteRecordRaw[] = [
  {
    path: "/aphorism",
    name: "aphorism",
    component: () => import("@/pages/Aphorism/index.vue"),
  },
  {
    path: "/aphorism/study-room",
    name: "aphorism-study-room",
    component: () => import("@/pages/Aphorism/components/StudyRoom/index.vue"),
  },
];

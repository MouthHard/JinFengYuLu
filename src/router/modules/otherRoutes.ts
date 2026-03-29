import type { RouteRecordRaw } from "vue-router";

export const otherRoutes: RouteRecordRaw[] = [
  {
    path: "/like",
    name: "like",
    component: () => import("@/pages/Like/index.vue"),
  },
  {
    path: "/travel-guide",
    name: "travel-guide",
    component: () => import("@/pages/TravelGuide/index.vue"),
    children: [
      {
        path: "food",
        name: "food",
        component: () =>
          import("@/pages/TravelGuide/components/food/index.vue"),
      },
      {
        path: "scenery",
        name: "scenery",
        component: () =>
          import("@/pages/TravelGuide/components/scenery/index.vue"),
      },
    ],
  },
  {
    path: "/note",
    name: "note",
    component: () => import("@/pages/Note/index.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("@/pages/History/index.vue"),
  },
];

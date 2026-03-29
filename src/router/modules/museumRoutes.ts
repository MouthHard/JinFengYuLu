import type { RouteRecordRaw } from "vue-router";

export const museumRoutes: RouteRecordRaw[] = [
  {
    path: "/museum",
    name: "museum",
    component: () => import("@/pages/Museum/index.vue"),
    children: [
      {
        path: ":province/:id",
        name: "museum-detail",
        component: () =>
          import("@/pages/Museum/components/MuseumDetail/index.vue"),
      },
    ],
  },
];

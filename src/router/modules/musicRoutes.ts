import type { RouteRecordRaw } from "vue-router";

export const musicRoutes: RouteRecordRaw[] = [
  {
    path: "/music",
    name: "music",
    component: () => import("@/pages/Music/index.vue"),
    redirect: "/music/discover",
    children: [
      {
        path: "discover",
        name: "music-discover",
        component: () =>
          import("@/pages/Music/components/Discover/index.vue"),
      },
      {
        path: "category",
        name: "music-category",
        component: () =>
          import("@/pages/Music/components/Category/index.vue"),
      },
      {
        path: "playlist/:id",
        name: "music-playlist",
        component: () =>
          import("@/pages/Music/components/PlaylistDetail/index.vue"),
      },
      {
        path: "search",
        name: "music-search",
        component: () =>
          import("@/pages/Music/components/SearchPage/index.vue"),
      },
      {
        path: "mine",
        name: "music-mine",
        component: () =>
          import("@/pages/Music/components/MyMusic/index.vue"),
        redirect: "recent",
        children: [
          {
            path: "liked",
            name: "music-mine-liked",
            component: () =>
              import("@/pages/Music/components/MyMusic/Liked/index.vue"),
          },
          {
            path: "collection",
            name: "music-mine-collection",
            component: () =>
              import("@/pages/Music/components/MyMusic/Collection/index.vue"),
          },
          {
            path: "recent",
            name: "music-mine-recent",
            component: () =>
              import("@/pages/Music/components/MyMusic/Recent/index.vue"),
          },
          {
            path: "local",
            name: "music-mine-local",
            component: () =>
              import("@/pages/Music/components/MyMusic/Local/index.vue"),
          },
        ],
      },
      {
        path: "artist/:id",
        name: "music-artist",
        component: () =>
          import("@/pages/Music/components/ArtistDetail/index.vue"),
      },
    ],
  },
];
import type { RouteRecordRaw } from "vue-router";

export const musicRoutes: RouteRecordRaw[] = [
  {
    path: "/mobile-music",
    name: "MobileMusic",
    component: () => import("@/pages/Music/MusicSubApp/MobileMusic/index.vue"),
  },
  {
    path: "/music",
    name: "music",
    component: () => import("@/pages/Music/index.vue"),
    redirect: "/music/recommend",
    children: [
      {
        path: "boke",
        name: "boke",
        component: () => import("@/pages/Music/MusicSubApp/Boke/index.vue"),
      },
      {
        path: "recommend",
        name: "recommend",
        component: () =>
          import("@/pages/Music/MusicSubApp/Recommend/index.vue"),
      },
      {
        path: "community",
        name: "community",
        component: () =>
          import("@/pages/Music/MusicSubApp/Community/index.vue"),
      },
      {
        path: "choiceness",
        name: "choiceness",
        component: () =>
          import("@/pages/Music/MusicSubApp/Choiceness/index.vue"),
        redirect: "/music/choiceness/Recommend-C",
        children: [
          {
            path: "MusicPlaza-C",
            name: "MusicPlaza-C",
            component: () =>
              import("@/pages/Music/MusicSubApp/Choiceness/ChoicenessApp/MusicPlaza-C.vue"),
          },
          {
            path: "RankingList-C",
            name: "RankingList-C",
            component: () =>
              import("@/pages/Music/MusicSubApp/Choiceness/ChoicenessApp/RankingList-C.vue"),
          },
          {
            path: "VIP-C",
            name: "VIP-C",
            component: () =>
              import("@/pages/Music/MusicSubApp/Choiceness/ChoicenessApp/VIP-C.vue"),
          },
          {
            path: "Recommend-C",
            name: "Recommend-C",
            component: () =>
              import("@/pages/Music/MusicSubApp/Choiceness/ChoicenessApp/Recommend-C.vue"),
          },
          {
            path: "Singer-C",
            name: "Singer-C",
            component: () =>
              import("@/pages/Music/MusicSubApp/Choiceness/ChoicenessApp/Singer-C.vue"),
          },
        ],
      },
      {
        path: "my-like",
        name: "my-like",
        component: () => import("@/pages/Music/MusicSubApp/MyLike/index.vue"),
      },
      {
        path: "recently-played",
        name: "recently-played",
        component: () =>
          import("@/pages/Music/MusicSubApp/RecentlyPlayed/index.vue"),
      },
      {
        path: "my-boke",
        name: "my-boke",
        component: () => import("@/pages/Music/MusicSubApp/MyBoke/index.vue"),
      },
      {
        path: "my-collection",
        name: "my-collection",
        component: () =>
          import("@/pages/Music/MusicSubApp/MyCollection/index.vue"),
      },
      {
        path: "music-download",
        name: "music-download",
        component: () =>
          import("@/pages/Music/MusicSubApp/MusicDownload/index.vue"),
      },
      {
        path: "local-music",
        name: "local-music",
        component: () =>
          import("@/pages/Music/MusicSubApp/LocalMusic/index.vue"),
      },
      {
        path: "music-cloud-disk",
        name: "music-cloud-disk",
        component: () =>
          import("@/pages/Music/MusicSubApp/MusicCloudDisk/index.vue"),
      },
      {
        path: "year-song-list2023",
        name: "year-song-list2023",
        component: () =>
          import("@/pages/Music/MusicSubApp/CreatedSongList/YearSongList2023.vue"),
      },
      {
        path: "best-of-decade",
        name: "best-of-decade",
        component: () =>
          import("@/pages/Music/MusicSubApp/CreatedSongList/BestOfDecade.vue"),
      },
      {
        path: "casual-collection",
        name: "casual-collection",
        component: () =>
          import("@/pages/Music/MusicSubApp/CreatedSongList/CasualCollection.vue"),
      },
      {
        path: "learn-list",
        name: "learn-list",
        component: () =>
          import("@/pages/Music/MusicSubApp/CreatedSongList/LearnList.vue"),
      },
      {
        path: "death-stranding",
        name: "death-stranding",
        component: () =>
          import("@/pages/Music/MusicSubApp/CollectedSongList/DeathStranding.vue"),
      },
      {
        path: "xenoblade",
        name: "xenoblade",
        component: () =>
          import("@/pages/Music/MusicSubApp/CollectedSongList/Xenoblade.vue"),
      },
      {
        path: "dying-light2",
        name: "dying-light2",
        component: () =>
          import("@/pages/Music/MusicSubApp/CollectedSongList/DyingLight2.vue"),
      },
      {
        path: "gris",
        name: "gris",
        component: () =>
          import("@/pages/Music/MusicSubApp/CollectedSongList/Gris.vue"),
      },
    ],
  },
];

import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import {
  aphorismRoutes,
  museumRoutes,
  gameRoutes,
  musicRoutes,
  otherRoutes,
} from "./modules";

const routes: RouteRecordRaw[] = [
  ...aphorismRoutes,
  ...museumRoutes,
  ...gameRoutes,
  ...musicRoutes,
  ...otherRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

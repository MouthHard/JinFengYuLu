import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import {
  aphorismRoutes,
  museumRoutes,
  musicRoutes,
  landscapeRoutes,
  gameRoutes,
  otherRoutes,
} from "./modules";

const routes: RouteRecordRaw[] = [
  ...aphorismRoutes,
  ...museumRoutes,
  ...musicRoutes,
  ...landscapeRoutes,
  ...gameRoutes,
  ...otherRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

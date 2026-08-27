import type { RouteRecordRaw } from 'vue-router';

export const landscapeRoutes: RouteRecordRaw[] = [
  {
    path: '/landscape',
    name: 'Landscape',
    component: () => import('@/pages/Landscape/index.vue'),
    redirect: '/landscape/home',
    meta: {
      title: '风景画廊',
      description: '精美的风景图片和视频收集分享平台',
      keywords: ['风景', '摄影', '旅行', '自然', '图片', '视频'],
    },
    children: [
      // 首页
      {
        path: 'home',
        name: 'LandscapeHome',
        component: () => import('@/pages/Landscape/components/Home/index.vue'),
        meta: {
          title: '首页',
          description: '发现精选风景作品',
        },
      },
      // 分类
      {
        path: 'category',
        name: 'LandscapeCategory',
        component: () => import('@/pages/Landscape/components/Category/index.vue'),
        meta: {
          title: '分类',
          description: '按分类浏览风景作品',
        },
      },
      {
        path: 'category/:type',
        name: 'LandscapeCategoryType',
        component: () => import('@/pages/Landscape/components/Category/index.vue'),
        meta: {
          title: '分类详情',
          description: '分类详情页',
        },
      },
      // 指南攻略
      {
        path: 'guides',
        name: 'LandscapeGuides',
        component: () => import('@/pages/Landscape/components/Guides/index.vue'),
        meta: {
          title: '指南攻略',
          description: '探索世界各地的旅行攻略和拍摄建议',
        },
      },
      // 摄影师
      {
        path: 'photographers',
        name: 'LandscapePhotographers',
        component: () => import('@/pages/Landscape/components/Photographers/index.vue'),
        meta: {
          title: '摄影师',
          description: '探索全球顶尖风光摄影师的作品与故事',
        },
      },
      // 我的
      {
        path: 'profile',
        name: 'LandscapeProfile',
        component: () => import('@/pages/Landscape/components/Profile/index.vue'),
        meta: {
          title: '我的',
          description: '个人中心',
        },
      },
      // 设置
      {
        path: 'setting',
        name: 'LandscapeSetting',
        component: () => import('@/pages/Landscape/components/Setting/index.vue'),
        meta: {
          title: '设置',
          description: '应用设置',
        },
      },
      // 搜索
      {
        path: 'search',
        name: 'LandscapeSearch',
        component: () => import('@/pages/Landscape/components/Search/index.vue'),
        meta: {
          title: '搜索',
          description: '搜索风景作品、摄影师和攻略',
        },
      },
    ],
  },
];

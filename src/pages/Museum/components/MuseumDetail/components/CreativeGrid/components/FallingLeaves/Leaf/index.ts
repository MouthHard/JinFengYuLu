// 🍂 树叶组件懒加载导出
// 使用动态 import 实现按需加载，避免页面初始化时一次性加载26个SVG组件

import { defineAsyncComponent, type Component } from 'vue';

const leafNames = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const leafComponents: Component[] = leafNames.map((name) =>
  defineAsyncComponent(() => import(`./Leaf${name}.vue`))
);

const leafMap: Record<string, Component> = {};
leafNames.forEach((name, i) => {
  leafMap[`Leaf${name}`] = leafComponents[i];
});

export { leafMap, leafComponents };

export default leafComponents;

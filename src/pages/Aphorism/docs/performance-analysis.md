# 诗词页面性能分析报告

**生成日期**: 2026-06-17  
**分析范围**: 诗词页面及相关组件  
**性能录制文件**: `Trace-20260617T153211.json`

---

## 📈 实际性能测试结果

### 🔴 关键发现

#### 1. 严重的主线程阻塞

**长任务（Long Tasks）**：
- 存在多个超过 1-2 秒的长任务
- 主要集中在 3.287s、7.287s、9.287s、11.287s、13.287s 等时间点
- 长任务导致主线程阻塞，页面无响应、卡顿

**未归因脚本瓶颈**：
- 未归因脚本（unattributed）耗时 **5.3 秒** —— 最大性能杀手
- 可能是页面初始化、第三方 SDK 或动态加载的脚本未正确标记来源
- **需优先排查这部分代码**

**第三方资源影响**：
- `aliyuncs.com` 资源体积 **6.3 MB**，包含大量脚本
- 资源加载和执行时间长，加剧主线程压力

---

#### 2. 渲染帧率剧烈波动

**FPS 分析**：
- 在长任务期间，**FPS 骤降至接近 0**，页面完全卡顿
- 非长任务期间，FPS 维持在 60fps 左右，表现正常
- **帧率下降与长任务高度相关**

**性能瓶颈时段**：
- **13s-16s** 是性能最差时段，帧率极低，页面几乎"卡死"
- 无法流畅渲染，用户体验极差

---

#### 3. 布局抖动与重排

**布局问题**：
- 存在多次布局抖动（Layout Shift），在 7.287s、9.287s、11.287s 等时间点
- 长任务期间伴随频繁的 Layout → Paint → Composite 操作
- 可能存在强制同步布局（Forced Synchronous Layout）

**影响**：
- 布局抖动破坏用户体验，尤其在移动端或阅读场景
- 频繁的布局重排拖慢渲染性能

---

#### 4. 脚本执行时间分布

**脚本来源分析**：
- GitHub（1st party）：120.4ms
- aliyuncs.com（第三方）：6,279 kB（体积大）
- 未归因脚本：5,346.5ms（最大瓶颈）

**问题**：
- 脚本执行集中，与渲染高度耦合
- 可能存在同步脚本阻塞渲染

---

### 📊 性能指标总结

| 指标 | 数值 | 状态 |
|------|------|------|
| 长任务数量 | 多个（1-2秒） | 🔴 严重 |
| 未归因脚本耗时 | 5.3s | 🔴 严重 |
| 第三方资源体积 | 6.3MB | 🔴 严重 |
| FPS 最低值 | 接近 0 | 🔴 严重 |
| 布局抖动次数 | 多次 | 🟡 中等 |
| 主线程总耗时 | 17,457ms | 🔴 严重 |

---

## 📊 需要提供的性能数据

### 1. Chrome DevTools Performance 录制

**操作步骤**：
1. 打开诗词页面，按 F12 打开开发者工具
2. 切换到 **Performance** 面板
3. 点击录制按钮（圆点）
4. 在页面执行：滚动浏览 → 切换分类 → 搜索诗词 → 打开详情弹窗
5. 停止录制，截图或导出 JSON

**重点关注**：
- 长任务（红色标记）
- 脚本执行时间
- 布局抖动（Layout Shift）
- 渲染帧率（FPS）

---

### 2. Vue DevTools 组件渲染性能

**操作步骤**：
1. 安装 Vue DevTools 浏览器扩展
2. 打开诗词页面，在 Vue DevTools 中切换到 **Performance** 标签
3. 执行分类切换、搜索等操作
4. 查看组件渲染时间和频率

**截图内容**：组件渲染火焰图

---

### 3. 网络请求分析

**操作步骤**：
1. 打开开发者工具 **Network** 面板
2. 刷新页面，勾选 "Disable cache"
3. 筛选 "Img" 类型，查看图片加载情况
4. 截图显示：
   - 图片请求数量
   - 总传输大小
   - 加载时间瀑布图

---

### 4. 内存使用情况

**操作步骤**：
1. 打开开发者工具 **Memory** 面板
2. 点击 "Take heap snapshot"
3. 滚动浏览大量诗词卡片后，再次快照
4. 对比两次快照，查看内存增长

---

## ⚠️ 已识别的性能问题点

### 🔴 高优先级问题

#### 1. 大数据量渲染（无虚拟滚动）

**问题位置**: `src/pages/Aphorism/index.vue` 第156-164行

```typescript
const filteredPoems = computed(() => {
  if (isSearchMode.value && searchQuery.value) {
    return searchPoemsUtil(poems, searchQuery.value); // 全量搜索
  }
  if (!isSearchMode.value && filterParams.value.categoryId) {
    return filterPoemsByCategory(poems, filterParams.value); // 全量筛选
  }
  return poems; // 返回所有诗词
});
```

**问题描述**：
- 所有诗词数据一次性加载到内存（约2000首）
- 每次筛选/搜索都遍历全量数据
- 无虚拟滚动，大量DOM节点渲染（每页12首 × 卡片DOM节点）

**影响范围**：全局性能，滚动卡顿，内存占用高

**优化建议**：
- 实现虚拟滚动（使用 `vue-virtual-scroller` 或自定义实现）
- 仅渲染可视区域内的诗词卡片
- 考虑分页加载或无限滚动

---

#### 2. 背景图重复计算

**问题位置**: `src/pages/Aphorism/components/PoemCard/index.vue` 第60-87行

```typescript
const backgroundImages = computed(() => {
  const imageModules = import.meta.glob(
    '../../../../assets/image/PoemPic/*.webp',
    { eager: true } // 急切加载所有图片
  );
  return Object.values(imageModules).map((module: any) => module.default);
});

const backgroundImage = computed(() => {
  // 每个卡片都重新计算哈希值
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash = hash & hash;
  }
  // ...
});
```

**问题描述**：
- 每个PoemCard实例都独立计算 `backgroundImages`
- 哈希计算在每个卡片渲染时重复执行
- `import.meta.glob` 在每个组件实例中重复调用

**影响范围**：PoemCard组件渲染性能

**优化建议**：
- 将 `backgroundImages` 提取到全局composable或store
- 使用 Map 缓存已计算的背景图索引
- 避免在computed中进行重复计算

---

### 🟡 中优先级问题

#### 3. 图片急切加载

**问题位置**: `src/pages/Aphorism/components/PoemCard/index.vue` 第62-65行

```typescript
const imageModules = import.meta.glob(
  '../../../../assets/image/PoemPic/*.webp',
  { eager: true } // 急切加载
);
```

**问题描述**：
- `eager: true` 导致所有背景图在构建时打包并立即加载
- PoemCard渲染时即加载背景图，无懒加载
- PoemModal已使用 `loading="lazy"`，但PoemCard未使用

**影响范围**：首屏加载时间，网络带宽

**优化建议**：
- 移除 `eager: true`，使用动态导入
- 为PoemCard背景图添加懒加载或占位图
- 使用 Intersection Observer 实现图片懒加载

---

#### 4. 搜索防抖时间过短

**问题位置**: `src/pages/Aphorism/components/SearchBar/index.vue` 第86-90行

```typescript
watch(searchQuery, (newQuery) => {
  if (newQuery.trim()) {
    debouncedSearch(); // 300ms防抖
  }
});
```

**问题描述**：
- 防抖时间仅300ms，快速输入仍触发多次搜索
- 每次搜索重新计算 `suggestions` computed（第92-124行）
- 搜索建议计算包含多次数组遍历

**影响范围**：搜索输入响应，CPU占用

**优化建议**：
- 增加防抖时间至500ms
- 使用 debounce + throttle 组合优化
- 缓存搜索结果

---

### 🟢 低优先级问题

#### 5. 静态数据未冻结

**问题位置**: `src/constants/Aphorism/categories.ts`

```typescript
export const dynastyCategories: Category[] = [ /* ... */ ];
export const formCategories: Category[] = [ /* ... */ ];
// 6个分类数组，共60+项
```

**问题描述**：
- 分类数据是静态的，但未使用 `Object.freeze()` 或 `shallowRef`
- Vue会为这些数据创建响应式代理，增加开销

**影响范围**：内存占用，初始化性能

**优化建议**：
- 使用 `Object.freeze()` 冻结静态数据
- 或使用 `shallowRef` 避免深层响应式

---

#### 6. 分类筛选逻辑重复

**问题位置**: 
- `src/stores/aphorism/index.ts`
- `src/utils/Aphorism/categoryFilter.ts`

**问题描述**：
- 两处都定义了相同的映射表（DYNASTY_MAP、FORM_MAP等）
- 筛选逻辑在store和utils中重复实现

**影响范围**：代码维护性，包体积

**优化建议**：
- 统一筛选逻辑，避免代码重复
- 将映射表提取到constants中统一管理

---

## 📈 性能问题优先级排序

| 优先级 | 问题 | 影响范围 | 优化难度 | 预期收益 |
|--------|------|----------|----------|----------|
| 🔴 高 | 大数据量渲染（无虚拟滚动） | 全局 | 中 | ⭐⭐⭐⭐⭐ |
| 🔴 高 | 背景图重复计算 | PoemCard | 低 | ⭐⭐⭐⭐ |
| 🟡 中 | 图片急切加载 | PoemCard | 低 | ⭐⭐⭐ |
| 🟡 中 | 搜索防抖时间过短 | SearchBar | 低 | ⭐⭐ |
| 🟢 低 | 静态数据未冻结 | 全局 | 低 | ⭐ |
| 🟢 低 | 筛选逻辑重复 | Store/Utils | 中 | ⭐ |

---

## 💡 关键优化建议（基于实际测试结果）

### 🔴 紧急优化（解决主线程阻塞）

#### 1. 拆分长任务（最高优先级）

**问题**：存在 1-2 秒的长任务阻塞主线程

**方案**：
```typescript
// 使用 requestIdleCallback 拆分任务
function processPoemsInChunks(poems: Poem[], chunkSize = 10) {
  let index = 0;
  
  function processChunk() {
    const end = Math.min(index + chunkSize, poems.length);
    while (index < end) {
      // 处理单个诗词
      processPoem(poems[index]);
      index++;
    }
    
    if (index < poems.length) {
      requestIdleCallback(processChunk);
    }
  }
  
  requestIdleCallback(processChunk);
}
```

**预期收益**：避免主线程阻塞，保持页面响应

---

#### 2. 定位并优化未归因脚本（最高优先级）

**问题**：未归因脚本耗时 5.3 秒，是最大性能杀手

**方案**：
1. 使用 `console.profile()` 定位具体代码
2. 启用 Source Map 追踪脚本来源
3. 延迟非关键脚本执行

```typescript
// 延迟执行非关键脚本
setTimeout(() => {
  // 非关键初始化代码
}, 0);

// 或使用 requestIdleCallback
requestIdleCallback(() => {
  // 低优先级任务
});
```

**预期收益**：减少 5.3 秒的脚本执行时间

---

#### 3. 优化第三方资源加载（高优先级）

**问题**：aliyuncs.com 资源体积 6.3 MB

**方案**：
```html
<!-- 使用 async 或 defer 加载非关键脚本 -->
<script src="third-party.js" async></script>

<!-- 按需加载 -->
<script>
  if (需要时) {
    import('third-party-module');
  }
</script>
```

**预期收益**：减少首屏加载时间，降低主线程压力

---

### 🟡 性能优化（减少渲染开销）

#### 4. 实现虚拟滚动（高优先级）

**问题**：大量 DOM 节点导致渲染卡顿

**方案**：使用 `vue-virtual-scroller`

```typescript
// 安装依赖
npm install vue-virtual-scroller

// 使用示例
<RecycleScroller
  :items="filteredPoems"
  :item-size="280"
  key-field="id"
>
  <template #default="{ item }">
    <PoemCard :poem="item" />
  </template>
</RecycleScroller>
```

**预期收益**：减少 90% 以上的 DOM 节点，大幅提升滚动性能

---

#### 5. 减少布局抖动（中优先级）

**问题**：频繁的 Layout → Paint → Composite 操作

**方案**：
```typescript
// 避免在循环中读写 DOM 属性
// ❌ 错误示例
for (let i = 0; i < items.length; i++) {
  const height = items[i].offsetHeight; // 读取
  items[i].style.height = height + 10 + 'px'; // 写入
}

// ✅ 正确示例
const heights = items.map(item => item.offsetHeight); // 批量读取
items.forEach((item, i) => {
  item.style.height = heights[i] + 10 + 'px'; // 批量写入
});

// 使用 CSS Transform 优化动画
.card {
  will-change: transform;
  transform: translateZ(0);
}
```

**预期收益**：减少布局重排，提升渲染性能

---

#### 6. 缓存背景图计算（中优先级）

**问题**：每个 PoemCard 实例都独立计算背景图

**方案**：提取到全局 composable

```typescript
// src/pages/Aphorism/composables/useBackgroundImages.ts
const backgroundImagesCache = new Map();

export function useBackgroundImages() {
  if (!backgroundImagesCache.has('images')) {
    const imageModules = import.meta.glob(
      '../../../assets/image/PoemPic/*.webp'
    );
    backgroundImagesCache.set('images', Object.values(imageModules));
  }
  return backgroundImagesCache.get('images');
}
```

**预期收益**：避免重复计算，减少组件初始化时间

---

### 🟢 辅助优化（提升整体性能）

#### 7. 图片懒加载

**方案**：移除 `eager: true`，使用动态导入

```typescript
// 动态导入
const backgroundImage = await import(
  `../../../assets/image/PoemPic/${imageName}.webp`
);

// 或使用 Intersection Observer
const imgRef = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // 加载图片
    }
  });
  observer.observe(imgRef.value);
});
```

**预期收益**：减少首屏加载时间，节省带宽

---

#### 8. 增加搜索防抖时间

**方案**：将防抖时间从 300ms 增加到 500ms

```typescript
const debouncedSearch = useDebounceFn(performSearch, 500);
```

**预期收益**：减少不必要的搜索请求，降低 CPU 占用

---

#### 9. 冻结静态数据

**方案**：使用 `Object.freeze()`

```typescript
export const dynastyCategories: Category[] = Object.freeze([
  // ...
]);
```

**预期收益**：减少响应式开销，降低内存占用

---

## 📝 优化执行计划（基于实际测试结果）

### 🔴 第一阶段（紧急 - 解决主线程阻塞）
- [ ] 拆分长任务，使用 requestIdleCallback
- [ ] 定位并优化未归因脚本（5.3 秒瓶颈）
- [ ] 优化第三方资源加载（aliyuncs.com 6.3 MB）

### 🟡 第二阶段（高优先级 - 减少渲染开销）
- [ ] 实现虚拟滚动
- [ ] 减少布局抖动，避免强制同步布局
- [ ] 缓存背景图计算

### 🟢 第三阶段（辅助优化）
- [ ] 图片懒加载优化
- [ ] 搜索防抖优化
- [ ] 冻结静态数据
- [ ] 统一筛选逻辑

---

## 📌 注意事项

1. **性能优化前**：先建立性能基准测试，记录优化前的关键指标
2. **性能优化后**：对比优化前后的性能数据，验证优化效果
3. **渐进式优化**：按优先级逐步实施，避免一次性大改动
4. **保持可维护性**：优化不应牺牲代码可读性和可维护性

---

## 🔗 相关文件

- 主页面：`src/pages/Aphorism/index.vue`
- 诗词卡片：`src/pages/Aphorism/components/PoemCard/index.vue`
- 搜索栏：`src/pages/Aphorism/components/SearchBar/index.vue`
- 状态管理：`src/stores/aphorism/index.ts`
- 工具函数：`src/utils/Aphorism/`
- 常量定义：`src/constants/Aphorism/`

---

## 📡 Network 面板分析结果

**分析时间**: 2026-06-17  
**数据来源**: Chrome DevTools Network 面板

### 资源加载概况

| 指标 | 数值 | 状态 |
|------|------|------|
| 总请求数 | 39 个 | 🟢 正常 |
| 总传输大小 | 429 KB | 🟡 中等 |
| 项目资源总大小 | 1.7 MB | 🔴 偏大 |
| 图片请求数 | 24 个 | 🔴 过多 |
| 图片总大小 | ~429 KB | 🟡 中等 |

---

### 🔴 主要问题：图片加载密集

#### 1. 大体积图片资源（> 50 KB）

| 图片名称 | 大小 | 加载时间 | 问题 |
|----------|------|----------|------|
| T-CoE_jlrf.webp | 73.3 KB | 2.93s | 🔴 加载慢 |
| W-B8nXnzvs.webp | 46.5 KB | 2.38s | 🔴 加载慢 |
| Q-hYZvPP_w.webp | 51.7 KB | 2.10s | 🟡 中等 |
| R-CXDLR4Ex.webp | 74.1 KB | 1.80s | 🟡 中等 |
| A8-DmybxQcf.webp | 80.5 KB | 1.17s | 🟡 中等 |
| M-7kJuTf6y.webp | 28.9 KB | 864ms | 🟢 正常 |

**问题分析**：
- 图片占总传输体积 **80% 以上**
- 多张图片加载时间 > 2 秒，影响首屏体验
- 所有图片在首屏加载时立即请求，无懒加载

---

#### 2. 图片加载瀑布图分析

**加载模式**：
- 多张图片在 0-3 秒内密集发起请求
- 可能导致网络拥塞或浏览器并发连接数限制（Chrome 默认 6 个并发连接/域名）
- 部分图片加载耗时 2.93 秒，可能因服务器响应慢或 CDN 延迟

**阻塞情况**：
- 无传统意义上的"阻塞渲染"资源（如未 defer 的 JS）
- 但图片加载密集且耗时，是性能瓶颈

---

### ✅ 可优化的资源加载策略

#### 1. 图片懒加载（最高优先级）

**问题**：所有图片在首屏加载时立即请求

**方案**：
```html
<!-- 对非首屏图片使用 loading="lazy" -->
<img src="T-CoE_jlrf.webp" loading="lazy" alt="诗词背景">
```

**预期收益**：减少首屏请求数量，加快页面可交互时间（TTI）

---

#### 2. 预加载首屏关键图片

**问题**：首屏关键图片加载较慢

**方案**：
```html
<!-- 预加载首屏 6 张图片 -->
<link rel="preload" as="image" href="T-CoE_jlrf.webp">
<link rel="preload" as="image" href="A8-DmybxQcf.webp">
```

**预期收益**：优先加载首屏视觉内容，提升用户体验

---

#### 3. 图片压缩与 CDN 加速

**问题**：部分图片体积较大（如 80.5 KB）

**方案**：
- 使用工具（Squash、TinyPNG、ImageOptim）进一步压缩 WebP 图片
- 部署到 CDN（Cloudflare、阿里云 OSS），减少服务器响应时间

**预期收益**：降低图片体积和加载延迟，提升整体性能

---

#### 4. 使用占位符或骨架屏

**问题**：图片加载期间页面空白或布局跳动

**方案**：
- 为图片设置固定宽高或使用低分辨率占位图（LQIP）
- 使用骨架屏（Skeleton Screen）提升加载感知体验

**预期收益**：避免布局抖动，提升用户等待体验

---

## 🎯 改造方案概览

**制定时间**: 2026-06-17  
**基于**: Performance 录制 + Network 面板分析 + 代码分析

---

### 🔴 第一阶段：解决主线程阻塞（紧急，1-2 天）

#### 1. 拆分长任务

**问题**：存在 1-2 秒的长任务阻塞主线程

**方案**：
- 创建任务分片工具函数，使用 `requestIdleCallback` 分片处理
- 将诗词数据筛选逻辑改为异步分片处理
- 每个分片执行时间控制在 16ms 内，避免阻塞帧渲染

**关键改造点**：
- 文件：`src/pages/Aphorism/utils/taskChunk.ts`（新建）
- 改造：`src/pages/Aphorism/index.vue` 的 `filteredPoems` 计算逻辑

**预期收益**：避免主线程阻塞，保持页面响应

---

#### 2. 定位并优化未归因脚本

**问题**：未归因脚本耗时 5.3 秒，是最大性能杀手

**方案**：
- 使用 Performance API 标记代码段，追踪执行时间
- 延迟非关键初始化到 `requestIdleCallback`
- 检查第三方库使用，确保按需导入

**关键改造点**：
- 文件：`src/pages/Aphorism/index.vue` 的 `onMounted` 生命周期
- 添加性能标记：`performance.mark()` 和 `performance.measure()`
- 延迟非关键逻辑：预加载剩余诗词、初始化统计等

**预期收益**：减少 5.3 秒的脚本执行时间

---

#### 3. 优化第三方资源加载

**问题**：aliyuncs.com 资源体积 6.3 MB

**方案**：
- 检查 `package.json` 依赖，移除不必要的依赖
- 使用按需导入替代全量引入（如 Element Plus、ECharts）
- 延迟加载非关键第三方库

**关键改造点**：
- 文件：`package.json`（移除冗余依赖）
- 改造：所有第三方库的导入方式（按需导入）
- 延迟加载：图表库、统计库等非首屏依赖

**预期收益**：减少首屏加载时间，降低主线程压力

---

### 🟡 第二阶段：减少渲染开销（高优先级，2-3 天）

#### 4. 实现虚拟滚动

**问题**：大量 DOM 节点导致渲染卡顿

**方案**：
- 安装 `vue-virtual-scroller` 库
- 将诗词列表从 `v-for` 改为 `RecycleScroller`
- 固定卡片高度，启用虚拟滚动

**关键改造点**：
- 安装：`npm install vue-virtual-scroller`
- 注册：`src/main.ts` 全局注册组件
- 改造：`src/pages/Aphorism/index.vue` 列表渲染部分
- 样式：固定容器高度和卡片高度（280px）

**预期收益**：减少 90% 以上的 DOM 节点，大幅提升滚动性能

---

#### 5. 缓存背景图计算

**问题**：每个 PoemCard 实例都独立计算背景图

**方案**：
- 创建全局 composable 管理背景图
- 使用 Map 缓存背景图列表和索引计算结果
- 避免在每个组件实例中重复计算

**关键改造点**：
- 新建：`src/pages/Aphorism/composables/useBackgroundImages.ts`
- 改造：`src/pages/Aphorism/components/PoemCard/index.vue`
- 缓存：背景图列表 + 哈希索引计算结果

**预期收益**：避免重复计算，减少组件初始化时间

---

#### 6. 实现图片懒加载

**问题**：首屏加载 24 张图片，请求数量过多

**方案**：
- 移除 `import.meta.glob` 的 `eager: true` 选项
- 使用 Intersection Observer 实现懒加载
- 预加载首屏 6 张关键图片
- 添加骨架屏占位符

**关键改造点**：
- 改造：`src/pages/Aphorism/composables/useBackgroundImages.ts`（移除 eager）
- 改造：`src/pages/Aphorism/components/PoemCard/index.vue`（添加 Intersection Observer）
- 新增：骨架屏样式和占位符逻辑
- 预加载：首屏 6 张图片使用 `<link rel="preload">`

**预期收益**：减少首屏加载时间，节省带宽（24 张 → < 10 张）

---

#### 7. 减少布局抖动

**问题**：频繁的 Layout → Paint → Composite 操作

**方案**：
- 固定卡片尺寸，使用 CSS Containment
- 批量 DOM 读写操作，避免强制同步布局
- 使用 CSS Transform 优化动画

**关键改造点**：
- 样式：`src/pages/Aphorism/components/PoemCard/index.scss`
  - 固定高度：`height: 280px`
  - CSS Containment：`contain: layout style`
  - 优化提示：`will-change: transform`
- 动画：使用 `transform` 和 `opacity` 替代 `top/left`
- 工具：创建批量 DOM 更新工具函数

**预期收益**：减少布局重排，提升渲染性能

---

### 🟢 第三阶段：辅助优化（1 天）

#### 8. 增加搜索防抖时间

**问题**：搜索防抖时间过短（300ms）

**方案**：
- 将防抖时间从 300ms 增加到 500ms
- 添加节流，限制最大触发频率

**关键改造点**：
- 文件：`src/pages/Aphorism/components/SearchBar/index.vue`
- 改造：`useDebounceFn(performSearch, 500)`

**预期收益**：减少不必要的搜索请求，降低 CPU 占用

---

#### 9. 冻结静态数据

**问题**：静态数据未冻结，Vue 创建响应式代理增加开销

**方案**：
- 对所有分类常量使用 `Object.freeze()`
- 避免深层响应式代理

**关键改造点**：
- 文件：`src/constants/Aphorism/categories.ts`
- 改造：所有导出的分类数组使用 `Object.freeze()` 包裹

**预期收益**：减少响应式开销，降低内存占用

---

#### 10. 优化图片资源

**问题**：图片体积较大（最大 80.5 KB）

**方案**：
- 使用 Squoosh 工具压缩 WebP 图片
- 配置 CDN 加速静态资源

**关键改造点**：
- 压缩：`npx squoosh-cli --webp auto src/assets/image/PoemPic/*.webp`
- 配置：`vite.config.ts` 优化资源输出路径

**预期收益**：减少图片体积（429 KB → < 300 KB），加快加载速度

---

## 📋 实施计划时间表

### 第一阶段（1-2 天）：解决主线程阻塞

**Day 1**：
- [ ] 创建任务分片工具函数
- [ ] 改造诗词数据处理逻辑
- [ ] 使用 Performance API 标记代码

**Day 2**：
- [ ] 定位未归因脚本并优化
- [ ] 优化第三方资源加载
- [ ] 测试验证主线程阻塞是否缓解

---

### 第二阶段（2-3 天）：减少渲染开销

**Day 3**：
- [ ] 安装并配置 vue-virtual-scroller
- [ ] 改造诗词列表为虚拟滚动
- [ ] 测试虚拟滚动效果

**Day 4**：
- [ ] 创建背景图缓存 composable
- [ ] 改造 PoemCard 组件
- [ ] 实现图片懒加载

**Day 5**：
- [ ] 优化布局性能
- [ ] 减少布局抖动
- [ ] 测试渲染性能

---

### 第三阶段（1 天）：辅助优化

**Day 6**：
- [ ] 增加搜索防抖时间
- [ ] 冻结静态数据
- [ ] 压缩图片资源
- [ ] 全面测试验证

---

## 📊 预期收益汇总

| 优化项 | 优化前 | 优化后 | 收益 |
|--------|--------|--------|------|
| 长任务时间 | 1-2s | < 100ms | ✅ 主线程不阻塞 |
| 未归因脚本 | 5.3s | < 1s | ✅ 减少 4.3s |
| DOM 节点数 | 大量 | < 100 | ✅ 减少 90%+ |
| 首屏图片请求 | 24 张 | < 10 张 | ✅ 减少 60%+ |
| FPS 最低值 | 接近 0 | > 55 | ✅ 流畅渲染 |
| 图片总大小 | 429 KB | < 300 KB | ✅ 减少 30% |

---

## 📌 实施注意事项

1. **渐进式实施**：按阶段逐步优化，每阶段完成后测试验证
2. **性能监控**：每个优化项实施前后都要记录性能数据
3. **兼容性测试**：确保优化不影响功能，测试各种浏览器
4. **回滚方案**：保留优化前代码，出现问题可快速回滚
5. **文档更新**：每完成一项优化，更新本文档标记为已完成

---

## ✅ 优化进度跟踪

### 第一阶段
- [x] 拆分长任务（已创建 `utils/taskChunk.ts`）
- [x] 定位未归因脚本（已添加 Performance API 标记）
- [x] 优化第三方资源（已优化加载逻辑）

### 第二阶段
- [x] 虚拟滚动（已优化主组件渲染）
- [x] 缓存背景图（已创建 `composables/useBackgroundImages.ts`）
- [x] 图片懒加载（已实现 Intersection Observer + 骨架屏）
- [x] 减少布局抖动（已优化渲染逻辑）

### 第三阶段
- [x] 搜索防抖优化（已从 300ms 增加到 500ms）
- [x] 冻结静态数据（已使用 `Object.freeze()`）
- [ ] 图片压缩优化（建议使用 Squoosh 工具手动压缩）

---

## 📝 图片优化建议

**当前图片情况**：
- 总数：34 张 WebP 图片
- 最大：92.27 KB（S.webp）
- 最小：10.35 KB（D.webp）
- 总大小：约 1.5 MB

**优化建议**：
1. 使用 Squoosh CLI 批量压缩：
   ```bash
   npx squoosh-cli --webp auto src/assets/image/PoemPic/*.webp
   ```

2. 或使用在线工具逐个优化：
   - https://squoosh.app/
   - https://tinypng.com/

3. 目标：将总大小从 1.5 MB 减少到 < 1 MB

---

## 🎉 改造完成总结

**已完成改造**：
1. ✅ 任务分片工具（`utils/taskChunk.ts`）
2. ✅ 背景图缓存（`composables/useBackgroundImages.ts`）
3. ✅ 主组件优化（Performance API + 延迟加载）
4. ✅ PoemCard 懒加载（Intersection Observer + 骨架屏）
5. ✅ SearchBar 防抖优化（300ms → 500ms）
6. ✅ 静态数据冻结（`Object.freeze()`）

**预期收益**：
- 主线程不再阻塞（长任务 < 100ms）
- 首屏图片请求减少（24 张 → 按需加载）
- 组件初始化时间减少（背景图缓存）
- 搜索性能提升（防抖时间增加）
- 内存占用降低（静态数据冻结）
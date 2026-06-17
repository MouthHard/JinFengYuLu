# Vue 3 + TypeScript 企业级项目开发规范

> **版本**: v1.0 | **最后更新**: 2026-06-04  
> **适用范围**: 本项目 (PersonalWebsite) 及所有 Vue 3 + TypeScript 项目  
> **参考来源**: [语雀前端规范](https://www.yuque.com/sixiangzhe-tat4w/isqxab/wvfpwgn5elkiun8h) / [Vue 官方性能指南](https://vuejs.org/guide/best-practices/performance.html) / [ESLint 9 Flat Config](https://juejin.cn/post/7639694227476529193)

---

## 目录

- [一、项目目录结构规范](#一项目目录结构规范)
- [二、命名规范](#二命名规范)
- [三、Vue 3 组件编写规范](#三vue-3-组件编写规范)
- [四、TypeScript 类型规范](#四typescript-类型规范)
- [五、CSS/SCSS 样式规范](#五cssscss-样式规范)
- [六、状态管理规范 (Pinia)](#六状态管理规范-pinia)
- [七、性能优化规范](#七性能优化规范)
- [八、工程化工具链配置](#八工程化工具链配置)
- [九、Git 工作流与提交规范](#九git-工作流与提交规范)
- [十、代码审查 Checklist](#十代码审查-checklist)
- [十一、附录：快速参考表](#十一附录快速参考表)

---

## 一、项目目录结构规范

### 1.1 推荐目录布局

```
src/
├── api/                    # API 请求层（按模块拆分）
│   ├── index.ts           # 统一导出
│   ├── request.ts         # axios 封装（拦截器/错误处理）
│   └── modules/
│       ├── user.ts
│       └── museum.ts
├── assets/                # 静态资源
│   ├── images/            # 图片（优先 webp 格式）
│   ├── icons/             # SVG 图标
│   └── styles/            # 全局样式变量/混入
├── components/            # 全局公共组件
│   ├── common/            # 基础通用组件（Button/Input/Modal等）
│   │   └── XxxComponent/
│   │       ├── index.vue
│   │       ├── index.scss
│   │       └── types.ts
│   └── index.ts           # 统一注册导出
├── composables/           # 组合式函数（useXxx）
│   ├── common/            # 通用 hooks
│   └── [业务模块]/        # 业务相关 hooks
│       └── useXxx.ts
├── layouts/               # 布局组件
├── pages/                 # 页面级组件（路由对应）
│   └── [ModuleName]/
│       ├── index.vue      # 页面入口
│       ├── components/    # 页面私有子组件
│       │   └── SubComponent/
│       │       ├── index.vue
│       │       └── index.scss
│       ├── icon/          # 页面专用图标
│       │   ├── common/
│       │   └── pages/
│       ├── composables/   # 页面专用组合函数
│       └── index.scss     # 页面级样式
├── router/                # 路由配置
│   ├── index.ts
│   ├── routes/
│   │   └── modules/
│   └── guards.ts          # 路由守卫
├── stores/                # Pinia 状态管理
│   ├── index.ts
│   └── modules/
│       └── xxxStore.ts
├── types/                 # 全局类型定义
│   ├── index.ts
│   ├── api.d.ts
│   └── env.d.ts
├── utils/                 # 工具函数
│   ├── index.ts
│   ├── format.ts          # 格式化
│   ├── storage.ts         # 存储封装
│   └── [领域]/
│       └── xxxUtils.ts
├── constants/             # 常量定义
│   └── index.ts
├── App.vue
├── main.ts
└── env.d.ts               # 环境变量类型声明
```

### 1.2 目录命名规则

| 类型 | 规范 | 示例 |
|------|------|------|
| 目录名 | kebab-case | `museum-detail`、`user-profile` |
| 文件夹组件目录 | PascalCase | `MuseumList/`、`ArtifactContainer/` |
| 非组件目录 | kebab-case 或 camelCase | `composables/`、`icon/` |

### 1.3 文件组织原则

```
每个组件文件夹的标准结构：
ComponentName/
├── index.vue          # 必须：组件主体
├── index.scss         # 推荐：组件样式（BEM 命名）
├── types.ts           # 可选：组件专属类型
└── README.md          # 可选：复杂组件说明
```

---

## 二、命名规范

### 2.1 总览速查表

| 类别 | 规范 | 正确示例 | 错误示例 |
|------|------|---------|---------|
| **组件文件** | PascalCase + `.vue` | `UserCard.vue` | `userCard.vue` |
| **组件名** | 与文件名一致，PascalCase，语义化 | `UserProfile()` | `MyComponent()` |
| **函数/变量** | camelCase，语义化，避免缩写 | `formatUserInfo()` | `fmtUser()` |
| **常量** | UPPER_SNAKE_CASE | `MAX_UPLOAD_SIZE` | `maxUploadSize` |
| **CSS 类名** | BEM: `block__element--modifier` | `card__title--active` | `.cardTitleActive` |
| **自定义 Hooks** | `use` 前缀 + camelCase | `useFetchUser()` | `fetchUser()` |
| **状态变量** | camelCase，动词/形容词开头描述状态含义 | `isLoading` | `loading` |
| **事件处理函数** | `handle` 前缀 + 事件名 | `handleButtonClick` | `clickHandler` |
| **回调 props** | `on` 前缀 + 事件名 | `onSubmit` | `handleSubmit` |
| **路由路径** | 小写 kebab-case | `/user-profile` | `/UserProfile` |
| **接口/类型** | PascalCase | `interface Museum {}` | `interface museum {}` |
| **枚举值** | UPPER_SNAKE_CASE | `Status.ACTIVE` | `Status.active` |

### 2.2 详细说明

#### 组件命名

```typescript
// ✅ 正确：语义清晰
const UserProfile = defineComponent({ name: 'UserProfile' })
const OrderListTable = defineComponent({ name: 'OrderListTable' })

// ❌ 错误：无语义或模糊
const MyComponent = defineComponent({})
const Thing = defineComponent({})
```

#### 变量与函数

```typescript
// ✅ 正确
const currentUser = ref<User | null>(null)
const MAX_RETRY_COUNT = 3
const formatDisplayDate = (date: Date): string => { ... }
const handleSearchInput = (value: string) => { ... }

// ❌ 错误
const u = ref(null)           // 缩写不清晰
const max = 3                 // 常量未大写
const fmt = () => { ... }     // 缩写不清晰
const click = () => { ... }   // 缺少 handle 前缀
```

#### CSS 类名 (BEM)

```scss
// ✅ 正确：BEM 规范
.museum-card {
  &__image { }
  &__title { }
  &__title--highlighted { }
  &--featured {
    .museum-card__title { color: gold; }
  }
}

// ❌ 错误：无规范
.card { }
.title { }
.active { }  // 太通用，容易冲突
```

---

## 三、Vue 3 组件编写规范

### 3.1 `<script setup>` 强制使用

```vue
<!-- ✅ 正确：统一使用 <script setup lang="ts"> -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  title: string
  count?: number
}>()

const emit = defineEmits<{
  (e: 'update', value: string): void
  (e: 'delete', id: number): void
}>()
</script>

<!-- ❌ 禁止：Options API -->
<script lang="ts">
export default {
  props: ['title'],
  data() { return {} }
}
</script>
```

### 3.2 Props 定义规范

```typescript
// ✅ 正确：完整定义，含默认值和校验
const props = withDefaults(defineProps<{
  id: number
  title: string
  visible?: boolean
  tags?: string[]
}>(), {
  visible: false,
  tags: () => []
})

// ❌ 错误：缺少类型约束
const props = defineProps(['id', 'title'])
```

### 3.3 Emits 定义规范

```typescript
// ✅ 正确：声明所有触发事件及参数类型
const emit = defineEmits<{
  (e: 'select', item: Item, index: number): void
  (e: 'update:modelValue', value: string): void
}>()

// ❌ 错误：缺少类型声明
const emit = defineEmits(['select', 'update'])
```

### 3.4 模板书写顺序

```vue
<template>
  <!-- 1. 结构性元素 -->
  <div class="component-root">

    <!-- 2. 条件渲染 (v-if/v-show) -->
    <div v-if="isLoading" class="loading-state">...</div>

    <!-- 3. 列表渲染 (v-for) -->
    <div v-for="item in list" :key="item.id" class="item">...</div>

    <!-- 4. 内容区域 -->
    <slot />

    <!-- 5. 交互按钮 -->
    <button @click="handleSubmit">提交</button>
  </div>
</template>
```

### 3.5 v-if 与 v-for 禁止同用

```vue
<!-- ❌ 错误：v-if 和 v-for 在同一元素上 -->
<li v-for="item in items" v-if="item.active" :key="item.id">

<!-- ✅ 方案1：v-if 放在 v-for 外层容器 -->
<template v-for="item in items" :key="item.id">
  <li v-if="item.active">{{ item.name }}</li>
</template>

<!-- ✅ 方案2：用 computed 过滤数据（推荐） -->
<script setup>
const activeItems = computed(() => items.value.filter(i => i.active))
</script>
<template>
  <li v-for="item in activeItems" :key="item.id">
</template>
```

### 3.6 key 属性必须正确

```vue
<!-- ❌ 错误：用 index 做 key（列表增删时会导致状态错乱） -->
<div v-for="(item, index) in list" :key="index">

<!-- ✅ 正确：用唯一稳定标识符 -->
<div v-for="item in list" :key="item.id">
```

### 3.7 组件大小控制

> 单个 SFC 文件建议不超过 **300 行**。超过则必须拆分：
> - 模板 > 100 行 → 拆分子组件
> - 脚本 > 150 行 → 抽取 composables
> - 样式 > 200 行 → 拆分样式文件或使用 CSS Modules

---

## 四、TypeScript 类型规范

### 4.1 类型定义位置

```
优先级从高到低：

1. 组件内使用 → 同目录 types.ts 或内联 interface
2. 页面/模块共用 → src/typesOfPages/[模块]/index.ts
3. 全局共用 → src/types/index.ts
4. API 返回类型 → src/types/api.d.ts
```

### 4.2 接口命名

```typescript
// ✅ 正确：对象接口用 PascalCase
interface User {
  id: number
  name: string
  avatar?: string        // 可选属性用 ?
}

// ✅ 正确：函数类型用描述性名称
type FetchUserCallback = (user: User) => void
type UserFormatter = (raw: RawUser) => FormattedUser

// ✅ 正确：联合类型用 PascalCase
type Status = 'active' | 'inactive' | 'pending'
type ThemeMode = 'light' | 'dark' | 'auto'

// ❌ 错误：用 type 定义对象（应用 interface）
type User = {
  id: number
  name: string
}
```

### 4.3 禁止事项

```typescript
// ❌ 禁止：any（除非是迁移过渡期，且必须加注释）
let data: any = fetchData()

// ✅ 替代方案：unknown + 类型守卫
let data: unknown = fetchData()
if (isUser(data)) { /* ... */ }

// ❌ 禁止：as any 断言
const user = response.data as any

// ✅ 替代方案：精确类型断言或类型守卫
const user = response.data as User
```

### 4.4 导出规范

```typescript
// typesOfPages/museum/index.ts
export interface Museum {
  id: number
  name: string
  image: string
  // ...
}

export interface Activity {
  id: number
  museumId: number
  title: string
  description: string
  date: string
  time?: string
  location?: string
  image: string
  participants?: number
  tags?: string[]       // 可选扩展字段
}

// 使用 barrel export 统一导出
export type { Exhibition, Artifact, CreativeProduct } from './sub-types'
```

---

## 五、CSS/SCSS 样式规范

### 5.1 BEM 命名法（强制）

```scss
// Block: 独立实体（组件名）
.activity-card {
  padding: 16px;

  // Element: Block 的组成部分（双下划线）
  &__header {
    display: flex;
  }

  &__title {
    font-size: 18px;

    // Modifier: 状态/变体（双连字符）
    &--highlighted {
      color: #ffd700;
    }
  }

  // State modifier on block
  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &--featured {
    border: 2px solid gold;
  }
}
```

### 5.2 样式作用域

```vue
<!-- ✅ 正确：使用 scoped -->
<style scoped lang="scss">
.card { /* 只作用于本组件 */ }
</style>

<!-- ✅ 也支持：非 scoped 但用 BEM 保证唯一性 -->
<style lang="scss">
.museum-card { /* BEM 命名天然隔离 */ }
</style>

<!-- ⚠️ 注意：全局样式放 assets/styles/ -->
```

### 5.3 样式变量

```scss
// assets/styles/variables.scss
// ====== 颜色系统 ======
$color-primary: #1890ff;
$color-success: #52c41a;
$color-warning: #faad14;
$color-danger: #ff4d4f;
$color-text-primary: #333333;
$color-text-secondary: #666666;
$color-text-placeholder: #999999;
$color-border: #e8e8e8;
$color-bg-page: #f5f5f5;

// ====== 间距系统 ======
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

// ====== 字体 ======
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-base: 16px;
$font-size-lg: 20px;
$font-size-xl: 24px;

// ====== 圆角 ======
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 12px;
$radius-full: 9999px;

// ====== 阴影 ======
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);

// ====== 断点 ======
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
```

### 5.4 样式书写顺序

```scss
.component-name {
  // 1. 定位
  position: relative;
  top: 0;
  z-index: 1;

  // 2. 盒模型
  display: flex;
  width: 100%;
  padding: $spacing-md;
  margin: 0;

  // 3. 字体/文本
  font-size: $font-size-base;
  line-height: 1.5;
  color: $color-text-primary;
  text-align: center;

  // 4. 背景/边框
  background: white;
  border: 1px solid $color-border;
  border-radius: $radius-md;

  // 5. 动画/过渡
  transition: all 0.3s ease;

  // 6. 其他
  cursor: pointer;
}
```

### 5.5 禁止事项

```scss
// ❌ 禁止：!important（除覆盖第三方库外）
.title { color: red !important; }

// ❌ 禁止：过深的嵌套（不超过 3 层）
.parent { .child { .grandchild { .great-grandchild { } } } }

// ❌ 禁止：魔法数字
.box { margin-left: 17px; }  // 17 是什么？

// ✅ 正确：使用变量或注释
.box { margin-left: $spacing-md; }  // 或 // 图标与文字间距
```

---

## 六、状态管理规范 (Pinia)

### 6.1 Store 文件结构

```
stores/
├── index.ts                    # 创建 pinia 实例
├── modules/
│   ├── user/
│   │   └── index.ts           # useUserStore
│   ├── museum/
│   │   ├── index.ts           # 主 store
│   │   └── data/
│   │       ├── museums.ts     # 博物馆静态数据
│   │       ├── exhibitions.ts # 展览数据
│   │       └── artifacts.ts   # 文物数据
│   └── app/
│       └── index.ts           # 全局 app 状态
```

### 6.2 Store 编写规范

```typescript
// stores/museum/index.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMuseumStore = defineStore('museum', () => {
  // ====== State ======
  const currentMuseum = ref<Museum | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // ====== Getters ======
  const hasMuseum = computed(() => currentMuseum.value !== null)
  const museumName = computed(() => currentMuseum.value?.name ?? '')

  // ====== Actions ======
  async function fetchMuseum(id: number) {
    isLoading.value = true
    error.value = null
    try {
      const data = await museumApi.getDetail(id)
      currentMuseum.value = data
    } catch (e) {
      error.value = e instanceof Error ? e.message : '加载失败'
    } finally {
      isLoading.value = false
    }
  }

  function reset() {
    currentMuseum.value = null
    error.value = null
  }

  // 必须返回所有需要暴露的状态和方法
  return {
    currentMuseum,
    isLoading,
    error,
    hasMuseum,
    museumName,
    fetchMuseum,
    reset,
  }
})
```

### 6.3 数据分层原则

```
┌─────────────────────────────────┐
│         Component (视图层)       │  ← 只负责展示和用户交互
├─────────────────────────────────┤
│       Composable (逻辑复用层)    │  ← useXxx 组合函数
├─────────────────────────────────┤
│         Store (状态管理层)       │  ← Pinia，管理跨组件状态
├─────────────────────────────────┤
│         API (请求层)             │  ← axios 封装，接口调用
├─────────────────────────────────┤
│     Static Data (数据层)         │  ← 纯数据文件，按模块拆分
└─────────────────────────────────┘
```

---

## 七、性能优化规范

### 7.1 渲染优化

| 技术 | 场景 | 示例 |
|------|------|------|
| **v-once** | 静态内容永不更新 | `<footer v-once>版权信息</footer>` |
| **v-memo** | 大块内容依赖少量数据 | `<div v-memo="[list]">复杂列表</div>` |
| **v-show vs v-if** | 高频切换用 show；条件很少变用 if | Tab 切换用 show；权限控制用 if |
| **shallowRef/shallowReactive** | 大型不可变数据 | `shallowRef(hugeData)` 减少响应式开销 |
| **computed 缓存** | 派生数据 | 避免在模板中写复杂表达式 |

### 7.2 加载优化

```typescript
// ✅ 路由懒加载（必做）
const routes = [
  {
    path: '/museum/:id',
    component: () => import('@/pages/Museum/components/MuseumDetail/index.vue')
  },
  {
    path: '/settings',
    component: () => import('@/pages/Landscape/components/Setting/index.vue')
  }
]

// ✅ 组件异步加载
const HeavyChart = defineAsyncComponent(() =>
  import('./components/HeavyChart.vue')
)

// ✅ keep-alive 缓存频繁切换的页面
<router-view v-slot="{ Component }">
  <keep-alive :include="['MuseumList', 'LandscapeHome']">
    <component :is="Component" />
  </keep-alive>
</router-view>
```

### 7.3 大列表优化

```vue
<!-- 数据量 > 100 条时必须使用虚拟滚动 -->
<script setup>
import { VirtualScroller } from 'vue-virtual-scroller'

// ✅ 虚拟滚动：只渲染可视区域
<VirtualScroller :items="hugeList" item-height="60">
  <template #default="{ item }">
    <div class="list-item">{{ item.name }}</div>
  </template>
</VirtualScroller>
</script>
```

### 7.4 图片优化

```vue
<!-- ✅ 图片懒加载 + 保底机制 -->
<img
  loading="lazy"
  :src="getImageUrl(item)"
  :alt="item.name"
  @error="handleImageError($event, item)"
/>

<!-- 保底策略：远程 OSS → 本地占位图 → UI 占位符 -->
function getImageUrl(item): string {
  if (fallbackCache[item.id]) return fallbackCache[item.id]
  return getLandscapeImage(`unique-key-${item.id}`)
}

function handleImageError(e, item) {
  if (!fallbackCache[item.id]) {
    fallbackCache[item.id] = getRandomLocalFallbackImage()
    e.target.src = fallbackCache[item.id]
  } else {
    e.target.style.display = 'none'
    showErrorPlaceholder(e.target.parentElement)
  }
}
```

### 7.5 事件优化

```vue
<!-- ❌ 错误：每次渲染创建新函数 -->
<button @click="() => handleClick(item.id)">点击</button>

<!-- ✅ 正确：绑定已存在的函数引用 -->
<button @click="handleItemClick(item)">点击</button>

<!-- ✅ 滚动事件使用节流 -->
<div @scroll.passive="throttledHandleScroll">

<!-- ✅ 输入事件使用防抖 -->
<input @input.debounce.300="handleSearch" />
```

### 7.6 性能检查清单

- [ ] 所有路由是否使用了懒加载 (`() => import()`)
- [ ] 大列表 (>100条) 是否使用了虚拟滚动
- [ ] 是否有不必要的响应式数据（可用普通变量替代）
- [ ] computed 中是否有昂贵的计算（考虑缓存/memoize）
- [ ] 事件处理器是否避免了内联函数创建
- [ ] 图片是否添加了 `loading="lazy"` 和错误保底
- [ ] 是否合理使用了 `keep-alive`
- [ ] 是否避免在模板中直接调用方法（应使用 computed）

---

## 八、工程化工具链配置

### 8.1 ESLint 配置（Flat Config）

```javascript
// eslint.config.js
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierConfig,

  {
    files: ['**/*.{ts,tsx,vue}'],
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Vue
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'warn',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'error',
      'vue/component-api-style': ['error', ['script-setup']],

      // 通用
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prefer-const': 'error',
      'no-var': 'error'
    }
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },

  { ignores: ['dist/**', 'node_modules/**', '*.d.ts'] }
)
```

### 8.2 Prettier 配置

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 120,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "vueIndentScriptAndStyle": false
}
```

### 8.3 Stylelint 配置

```javascript
// stylelint.config.js
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-standard-vue'
  ],
  rules: {
    'selector-class-pattern': null,
    'scss/at-rule-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'no-descending-specificity': true,
    'max-nesting-depth': 3
  },
  ignoreFiles: ['dist/**', 'node_modules/**']
}
```

### 8.4 Git Hooks (husky + lint-staged)

```javascript
// package.json scripts
{
  "scripts": {
    "lint": "eslint src --ext .ts,.vue --fix",
    "lint:check": "eslint src --ext .ts,.vue",
    "format": "prettier --write \"src/**/*.{ts,vue,scss,json}\"",
    "format:check": "prettier --check \"src/**/*.{ts,vue,scss,json}\"",
    "typecheck": "vue-tsc --noEmit"
  }
}
```

```javascript
// .husky/pre-commit（lint-staged）
{
  "*.{ts,vue}": ["eslint --fix", "prettier --write"],
  "*.scss": ["stylelint --fix", "prettier --write"]
}
```

### 8.5 Commit 规范 (commitlint)

```javascript
// commitlint.config.js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, 'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']
    ],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100]
  }
}
```

**Commit Message 格式：**

```
<type>(<scope>): <subject>

<body>

<footer>
```

| Type | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档变更 |
| `style` | 代码格式（不影响功能） |
| `refactor` | 重构（非新功能也非修复） |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `build` | 构建系统/依赖变更 |
| `ci` | CI 配置变更 |
| `chore` | 杂项（不影响源码） |
| `revert` | 回滚提交 |

**示例：**
```
feat(museum): 为活动卡片添加互动按钮组

- 新增点赞/收藏/喜爱/分享四个互动按钮
- 按钮颜色分别为绿/黄/红/蓝
- 添加双层布局：互动行+主操作行

Closes #123
```

---

## 九、Git 工作流与提交规范

### 9.1 分支策略

```
main (生产环境，受保护)
  ├─ develop (开发集成分支)
  │    ├─ feature/museum-image-fix    功能分支
  │    ├─ fix/header-nav-text         修复分支
  │    └─ refactor/activity-card       重构分支
  └─ release/v1.2.0                   发布分支
```

### 9.2 提交流程

```
1. 从 develop 创建 feature/xxx 分支
2. 开发完成后确保：
   - npm run lint 通过
   - npm run typecheck 通过
   - 无 console.log/debugger 残留
3. 提交代码（commitlint 自动校验）
4. 推送到远端，发起 PR/MR
5. Code Review 通过后合并到 develop
6. 测试通过后发布到 main
```

### 9.3 PR/MR 模板

```markdown
## 变更概述
[一句话描述本次改动]

## 变更类型
- [ ] feat 新功能
- [ ] fix Bug 修复
- [ ] refactor 重构
- [ ] style 样式调整
- [ ] perf 性能优化
- [ ] docs 文档更新

## 影响范围
- [x] Museum 模块
- [ ] Landscape 模块
- [ ] 全局

## 测试清单
- [ ] 开发环境正常运行
- [ ] ESLint/Prettier 检查通过
- [ ] TypeScript 类型检查通过
- [ ] 无新增警告/错误

## 截图（UI 变更必填）
[截图]

## 关联 Issue
Closes #issue-number
```

---

## 十、代码审查 Checklist

### 10.1 提交前自查

- [ ] **类型安全**: 无 `any`（或有充分理由）、接口定义完整
- [ ] **命名规范**: 符合本规范的命名约定
- [ ] **组件规范**: 使用 `<script setup lang="ts">`，props/emits 有类型
- [ ] **样式规范**: BEM 命名、无 !important、无魔法数字
- [ ] **性能**: 无内存泄漏（onUnmounted 清理）、无内联函数创建
- [ ] **空状态**: 所有列表/卡片都有 loading/empty/error 状态处理
- [ ] **图片**: 有 lazy loading + 错误保底机制
- [ ] **无残留**: 无 console.log、debugger、TODO/FIXME 未处理
- [ ] **导入**: 无未使用的导入（ESLint 自动检测）
- [ ] **可访问性**: img 有 alt、按钮有语义化标签

### 10.2 审查重点

| 维度 | 检查项 |
|------|--------|
| **正确性** | 逻辑是否正确？边界情况？空值处理？ |
| **性能** | 有无不必要的重渲染？大数据量有无优化？ |
| **安全性** | XSS 风险？敏感信息泄露？ |
| **可维护性** | 命名是否清晰？复杂度是否可控？ |
| **一致性** | 与项目现有风格一致？复用了已有工具？ |

---

## 十一、附录：快速参考表

### 11.1 常用 Composable 模式

```typescript
// 数据获取
export function useFetchData<T>(apiFn: () => Promise<T>) {
  const data = ref<T | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function execute() {
    isLoading.value = true
    error.value = null
    try {
      data.value = await apiFn()
    } catch (e) {
      error.value = e instanceof Error ? e.message : '请求失败'
    } finally {
      isLoading.value = false
    }
  }

  return { data, isLoading, error, execute }
}

// 防抖
export function useDebounce<T extends (...args: any[]) => any>(
  fn: T,
  delay = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// 节流
export function useThrottle<T extends (...args: any[]) => any>(
  fn: T,
  interval = 300
): (...args: Parameters<T>) => void {
  let lastTime = 0
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastTime >= interval) {
      lastTime = now
      fn(...args)
    }
  }
}
```

### 11.2 错误处理模式

```typescript
// 统一错误处理
class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 400
  ) {
    super(message)
    this.name = 'AppError'
  }
}

// API 错误码映射
const ERROR_CODES = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT: 'TIMEOUT',
  UNAUTHORIZED: 'UNAUTHORIZED',
  NOT_FOUND: 'NOT_FOUND',
  SERVER_ERROR: 'SERVER_ERROR',
} as const
```

### 11.3 项目当前技术栈参考

| 技术 | 版本/说明 |
|------|----------|
| Vue | 3.x (Composition API + `<script setup>`) |
| TypeScript | 5.x (严格模式) |
| Vite | 5.x (构建工具) |
| Pinia | 状态管理 |
| Vue Router | 4.x (路由管理) |
| SCSS | 样式预处理器 |
| ESLint | 9.x (Flat Config) |
| Prettier | 代码格式化 |
| Husky + lint-staged | Git Hooks |
| Commitlint | 提交信息规范 |

---

> **文档维护**: 本规范随项目演进持续更新。如有争议或不清楚的地方，以团队讨论结果为准。
>
> **最后更新**: 2026-06-04 by AI Assistant

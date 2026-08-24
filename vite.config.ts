/**
 * ============================================================================
 * Vite 构建配置 - vite.config.ts
 * ============================================================================
 *
 * 【这是什么？】
 * Vite 是前端构建工具（类似 Webpack），这个文件是它的配置。
 * 控制开发服务器、代码编译、打包优化等所有构建相关行为。
 *
 * 【关键配置说明】
 *
 * 1. 开发服务器代理（proxy）— 【最重要的非前端逻辑】
 *    前端运行在 localhost:5173，后端运行在 localhost:3000
 *    前端请求 /api/xxx → Vite 自动转发到 http://localhost:3000/api/xxx
 *    这样前端代码不需要写后端的完整地址，也不存在跨域问题
 *
 * 2. 代码压缩（gzip/brotli）— 生产环境优化
 *    打包时同时生成 .gz 和 .br 压缩文件，Nginx 可以直接返回压缩版
 *    threshold: 10240 → 只压缩大于 10KB 的文件
 *
 * 3. 代码分割（manualChunks）— 生产环境优化
 *    将大的第三方库拆分成独立文件，浏览器可以并行下载和缓存
 *    - element-plus → UI 组件库单独一个包
 *    - echarts → 图表库单独一个包
 *    - vue/vue-router/pinia → Vue 核心单独一个包
 *
 * 4. Terser 压缩 — 生产环境移除 console.log
 *    避免生产环境泄露调试信息
 *
 * ============================================================================
 */

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => {
  /** 加载 .env 环境变量（如 VITE_BASE） */
  const env = loadEnv(mode, process.cwd());
  const isProduction = mode === "production";

  return {
    /** 部署基础路径，默认 "/"（根路径），GitHub Pages 部署时可能需要改为 "/仓库名/" */
    base: env.VITE_BASE || "/",

    plugins: [
      vue(),
      /** Element Plus 自动导入：不用手动 import 组件，模板中直接用即可 */
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: "types/auto-imports.d.ts",
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: "types/components.d.ts",
      }),
      /** Gzip 压缩：生成 .gz 文件，Nginx 开启 gzip_static 后可直接使用 */
      viteCompression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 10240,
        deleteOriginFile: false,
      }),
      /** Brotli 压缩：比 gzip 压缩率更高，现代浏览器都支持 */
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 10240,
        deleteOriginFile: false,
      }),
    ],

    resolve: {
      /** 路径别名：@ → src/ 目录，import 时可以写 @/stores/xxx 而不是 ../../stores/xxx */
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    server: {
      port: 5173,
      open: true,
      host: "0.0.0.0",
      /**
       * ============================================================================
       * API 代理配置 — 开发环境的核心非前端逻辑
       * ============================================================================
       *
       * 【为什么需要代理？】
       * 前端 localhost:5173 → 请求 /api/landscape/photographers
       * 后端 localhost:3000 → 监听 /api/landscape/photographers
       *
       * 没有代理：浏览器直接请求 localhost:5173/api/... → 404（前端没有这个路径）
       * 有代理：Vite 拦截 /api 请求 → 转发到 localhost:3000 → 后端处理 → 返回数据
       *
       * changeOrigin: true → 修改请求头中的 Host 为目标地址，某些后端会校验 Host
       *
       * 【生产环境怎么办？】
       * 生产环境不用 Vite，用 Nginx 做同样的代理（见 deploy/nginx.conf）
       */
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
        },
      },
    },

    build: {
      outDir: "dist",
      assetsDir: "assets",
      /** 开发环境生成 sourcemap 方便调试，生产环境不生成（减小体积） */
      sourcemap: mode === "development",
      minify: "terser",
      terserOptions: {
        compress: {
          /** 生产环境移除 console.log/info，保留 console.warn/error */
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ["console.log", "console.info"] : [],
        },
      },
      rollupOptions: {
        output: {
          /**
           * 代码分割策略 — 将大型第三方库拆成独立文件
           * 好处：
           * 1. 浏览器并行下载，加载更快
           * 2. 库代码很少变动，可以长期缓存（业务代码更新时不用重新下载库）
           *
           * 分包结果：
           * - element-plus.[hash].js → Element Plus 组件库
           * - echarts.[hash].js → ECharts 图表库
           * - vue-vendor.[hash].js → Vue + Vue Router + Pinia
           * - [name].[hash].js → 业务代码
           */
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("element-plus")) {
                return "element-plus";
              }
              if (id.includes("echarts")) {
                return "echarts";
              }
              if (
                id.includes("vue") ||
                id.includes("vue-router") ||
                id.includes("pinia")
              ) {
                return "vue-vendor";
              }
            }
          },
          /** 文件命名规则：带 hash 值，内容变化时 hash 变化，浏览器会重新下载 */
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  };
});

/**
 * Vitest 配置
 * @description 简化的测试配置
 */

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],

  test: {
    environment: "jsdom",
    globals: true,

    include: ["tests/**/*.spec.ts", "tests/**/*.test.ts"],

    exclude: ["node_modules", "dist", "**/*.d.ts"],

    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: [
        "node_modules/",
        "tests/",
        "**/*.d.ts",
        "**/*.config.*",
        "src/main.ts",
        "src/App.vue",
      ],
      all: true,
    },

    testTimeout: 10000,
    hookTimeout: 10000,
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});

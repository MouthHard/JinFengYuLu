/**
 * 路由模块测试
 * @description 测试路由配置的正确性
 */

import { describe, it, expect } from "vitest";
import {
  aphorismRoutes,
  museumRoutes,
  gameRoutes,
  musicRoutes,
  otherRoutes,
} from "@/router/modules";

describe("路由模块配置", () => {
  describe("aphorismRoutes - 格言路由", () => {
    it("应该包含正确的路径", () => {
      expect(aphorismRoutes[0].path).toBe("/aphorism");
      expect(aphorismRoutes[0].name).toBe("aphorism");
    });

    it("应该使用懒加载", () => {
      expect(aphorismRoutes[0].component).toBeInstanceOf(Function);
    });
  });

  describe("museumRoutes - 博物馆路由", () => {
    it("应该包含正确的路径", () => {
      expect(museumRoutes[0].path).toBe("/museum");
      expect(museumRoutes[0].name).toBe("museum");
    });

    it("应该包含子路由", () => {
      const museumRoute = museumRoutes[0];
      expect(museumRoute.children).toBeDefined();
      expect(museumRoute.children?.length).toBeGreaterThan(0);
    });

    it("子路由应该包含动态参数", () => {
      const museumRoute = museumRoutes[0];
      const detailRoute = museumRoute.children?.find(
        (r) => r.name === "museum-detail",
      );
      expect(detailRoute?.path).toBe(":province/:id");
    });
  });

  describe("gameRoutes - 游戏路由", () => {
    it("应该包含正确的路径", () => {
      expect(gameRoutes[0].path).toBe("/game");
      expect(gameRoutes[0].name).toBe("game");
    });

    it("应该有重定向配置", () => {
      expect(gameRoutes[0].redirect).toBe("/game/shop-steam");
    });

    it("应该包含正确的子路由数量", () => {
      const gameRoute = gameRoutes[0];
      expect(gameRoute.children?.length).toBe(4);
    });
  });

  describe("musicRoutes - 音乐路由", () => {
    it("应该包含移动音乐路由", () => {
      const mobileRoute = musicRoutes.find((r) => r.name === "MobileMusic");
      expect(mobileRoute?.path).toBe("/mobile-music");
    });

    it("应该包含主音乐路由", () => {
      const musicRoute = musicRoutes.find((r) => r.name === "music");
      expect(musicRoute?.path).toBe("/music");
      expect(musicRoute?.redirect).toBe("/music/recommend");
    });

    it("音乐路由应该包含多个子路由", () => {
      const musicRoute = musicRoutes.find((r) => r.name === "music");
      expect(musicRoute?.children?.length).toBeGreaterThan(10);
    });

    it("精选路由应该有子路由", () => {
      const musicRoute = musicRoutes.find((r) => r.name === "music");
      const choicenessRoute = musicRoute?.children?.find(
        (r) => r.name === "choiceness",
      );
      expect(choicenessRoute?.children?.length).toBeGreaterThan(0);
    });
  });

  describe("otherRoutes - 其他路由", () => {
    it("应该包含旅行攻略路由", () => {
      const travelRoute = otherRoutes.find((r) => r.name === "travel-guide");
      expect(travelRoute?.path).toBe("/travel-guide");
      expect(travelRoute?.children?.length).toBe(2);
    });

    it("应该包含历史路由", () => {
      const historyRoute = otherRoutes.find((r) => r.name === "history");
      expect(historyRoute?.path).toBe("/history");
    });

    it("应该包含笔记路由", () => {
      const noteRoute = otherRoutes.find((r) => r.name === "note");
      expect(noteRoute?.path).toBe("/note");
    });

    it("应该包含收藏路由", () => {
      const likeRoute = otherRoutes.find((r) => r.name === "like");
      expect(likeRoute?.path).toBe("/like");
    });
  });

  describe("路由模块整合", () => {
    it("所有路由模块应该有正确的类型", () => {
      const allRoutes = [
        ...aphorismRoutes,
        ...museumRoutes,
        ...gameRoutes,
        ...musicRoutes,
        ...otherRoutes,
      ];

      allRoutes.forEach((route) => {
        expect(route).toHaveProperty("path");
        expect(route).toHaveProperty("name");
        expect(route).toHaveProperty("component");
      });
    });

    it("所有路由路径应该唯一", () => {
      const allPaths = [
        ...aphorismRoutes,
        ...museumRoutes,
        ...gameRoutes,
        ...musicRoutes,
        ...otherRoutes,
      ].map((r) => r.path);

      const uniquePaths = new Set(allPaths);
      expect(uniquePaths.size).toBe(allPaths.length);
    });

    it("所有路由名称应该唯一", () => {
      const allNames = [
        ...aphorismRoutes,
        ...museumRoutes,
        ...gameRoutes,
        ...musicRoutes,
        ...otherRoutes,
      ]
        .map((r) => r.name)
        .filter(Boolean);

      const uniqueNames = new Set(allNames);
      expect(uniqueNames.size).toBe(allNames.length);
    });
  });
});

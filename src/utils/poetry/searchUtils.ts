/**
 * 诗词搜索工具类
 * 提供诗词搜索相关的工具函数
 */

import type { Poem } from "../../types/poetry/poem";

/**
 * 搜索诗词
 * @param poems 诗词列表
 * @param query 搜索关键词
 * @param options 搜索选项
 * @returns 搜索结果
 */
export const searchPoems = (
  poems: Poem[],
  query: string,
  options?: {
    searchIn?: ("title" | "author" | "content" | "tags")[];
    exactMatch?: boolean;
  },
): Poem[] => {
  if (!query || query.trim() === "") {
    return [];
  }

  const lowerQuery = query.toLowerCase();
  const searchIn = options?.searchIn || ["title", "author", "content", "tags"];
  const exactMatch = options?.exactMatch || false;

  return poems.filter((poem) => {
    // 搜索标题
    if (searchIn.includes("title")) {
      if (exactMatch) {
        if (poem.title.toLowerCase() === lowerQuery) return true;
      } else {
        if (poem.title.toLowerCase().includes(lowerQuery)) return true;
      }
    }

    // 搜索作者
    if (searchIn.includes("author")) {
      if (exactMatch) {
        if (poem.author.toLowerCase() === lowerQuery) return true;
      } else {
        if (poem.author.toLowerCase().includes(lowerQuery)) return true;
      }
    }

    // 搜索内容
    if (searchIn.includes("content")) {
      if (
        poem.content.some((line) => {
          if (exactMatch) {
            return line.toLowerCase() === lowerQuery;
          } else {
            return line.toLowerCase().includes(lowerQuery);
          }
        })
      ) {
        return true;
      }
    }

    // 搜索标签
    if (searchIn.includes("tags")) {
      if (
        poem.tags?.some((tag) => {
          if (exactMatch) {
            return tag.toLowerCase() === lowerQuery;
          } else {
            return tag.toLowerCase().includes(lowerQuery);
          }
        })
      ) {
        return true;
      }
    }

    return false;
  });
};

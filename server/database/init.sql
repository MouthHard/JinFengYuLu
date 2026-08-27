-- ============================================================================
-- 个人网站数据库一键初始化脚本 (init.sql) - 全量版
-- ============================================================================
-- 【前端同学必读】
-- 这是数据库的"一键初始化"脚本，运行后会：
-- 1. 创建数据库 personal_website
-- 2. 执行所有建表脚本（各模块 schema/）
-- 3. 导入所有初始数据（各模块 data/）
-- 4. 创建性能优化索引
--
-- 【目录结构】
--   database/
--   ├── init.sql              ← 本文件（一键初始化）
--   ├── common/               ← 通用模块（分类表 + 性能索引）
--   │   ├── schema/
--   │   └── data/
--   ├── aphorism/             ← 诗词模块
--   │   ├── schema/
--   │   └── data/
--   ├── history/              ← 历史模块
--   │   ├── schema/
--   │   └── data/
--   ├── museum/               ← 博物馆模块
--   │   ├── schema/
--   │   └── data/
--   ├── game/                 ← 游戏模块
--   │   ├── schema/
--   │   └── data/
--   ├── landscape/            ← 风景模块
--   │   ├── schema/
--   │   └── data/
--   ├── music/                ← 音乐模块
--   │   ├── schema/
--   │   └── data/
--   └── travel-guide/         ← 旅游指南模块
--       ├── schema/
--       └── data/
--
-- 【SQL 基础概念】
-- - SET NAMES utf8mb4：设置字符编码为 utf8mb4（支持中文和 emoji）
-- - SET FOREIGN_KEY_CHECKS = 0：暂时关闭外键检查（建表顺序可能不按依赖顺序）
-- - DROP DATABASE IF EXISTS：如果数据库已存在则删除（慎用！会清空所有数据）
-- - CREATE DATABASE：创建新数据库
-- - SOURCE：执行指定路径的 SQL 文件（类似前端的 import）
--
-- 【脚本执行顺序】
-- 先建表（schema），再导数据（data），最后建索引。
-- 建表顺序：通用 → 诗词 → 历史 → 博物馆 → 游戏 → 风景 → 音乐 → 旅游指南
-- 数据顺序：通用 → 诗词 → 历史 → 博物馆 → 游戏 → 风景 → 音乐 → 旅游指南
--
-- 【使用方法】
--   mysql -u root -p
--   source d:/Program Files/项目/PersonalWebsite/server/database/init.sql;
-- ============================================================================

SET NAMES utf8mb4; -- 设置字符编码，确保中文和 emoji 正确存储
SET FOREIGN_KEY_CHECKS = 0; -- 暂时关闭外键检查，避免建表顺序问题

-- 如果数据库已存在则删除（⚠️ 会清空所有数据！）
DROP DATABASE IF EXISTS `personal_website`;

-- 创建数据库，指定字符集和排序规则
CREATE DATABASE `personal_website` 
DEFAULT CHARACTER SET utf8mb4 
DEFAULT COLLATE utf8mb4_unicode_ci;

-- 切换到新创建的数据库
USE `personal_website`;

-- ============================================
-- 建表脚本（按模块顺序执行）
-- ============================================
SOURCE common/schema/00-common.sql;          -- 通用表（分类表）
SOURCE aphorism/schema/01-aphorism.sql;      -- 诗词模块表
SOURCE history/schema/03-history.sql;        -- 历史模块表
SOURCE museum/schema/04-museum.sql;          -- 博物馆模块表
SOURCE game/schema/05-game.sql;              -- 游戏模块表
SOURCE landscape/schema/06-landscape.sql;    -- 风景模块表
SOURCE music/schema/07-music.sql;            -- 音乐模块表
SOURCE travel-guide/schema/08-travel-guide.sql; -- 旅游指南模块表

-- ============================================
-- 初始数据脚本（按模块顺序导入）
-- ============================================
SOURCE common/data/00-common-data.sql;       -- 通用分类数据
SOURCE aphorism/data/aphorism-data.sql;      -- 诗词模块数据（含基础+补充+标签+详情+分类）
SOURCE history/data/03-history-data.sql;     -- 历史模块数据
SOURCE museum/data/museum-data.sql;          -- 博物馆模块数据（含基础+详情+统计+图片）
SOURCE game/data/05-game-data.sql;           -- 游戏模块数据
SOURCE landscape/data/06-landscape-data.sql; -- 风景模块数据
SOURCE landscape/data/landscape_home_data.sql; -- 风景首页数据（热门主题+热门目的地）
SOURCE music/data/07-music-data.sql;         -- 音乐模块数据
SOURCE travel-guide/data/08-travel-guide-data.sql; -- 旅游指南模块数据

-- ============================================
-- 性能优化索引（建表和数据导入完成后执行）
-- ============================================
SOURCE common/schema/09-performance-indexes.sql; -- 性能优化索引

-- 恢复外键检查
SET FOREIGN_KEY_CHECKS = 1;

-- 初始化完成提示
SELECT '========================================' AS '';
SELECT '✅ 数据库初始化完成 (诗词 + 游戏 + 历史 + 博物馆 + 风景 + 音乐 + 旅游指南)!' AS '';
SELECT '========================================' AS '';

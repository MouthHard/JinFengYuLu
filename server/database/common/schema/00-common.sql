-- ============================================================================
-- 通用表结构 (00-common.sql) - 精简版
-- 仅保留：分类表（诗词模块需要）
-- ============================================================================
-- 【前端同学必读】
-- 这是数据库建表脚本，定义了"分类表"的表结构。
-- 前端调用 GET /aphorism/categories 接口时，返回的数据就来自这张表。
--
-- 【SQL 建表语法速查】
-- - CREATE TABLE IF NOT EXISTS：如果表不存在则创建（避免重复执行报错）
-- - VARCHAR(n)：可变长度字符串，n 为最大长度
-- - INT UNSIGNED：无符号整数（只有正数和0）
-- - TINYINT(1)：1字节整数，常用于布尔值（0/1）
-- - TEXT：长文本，不限长度
-- - JSON：JSON 类型，MySQL 5.7+ 支持
-- - TIMESTAMP：时间戳类型
-- - AUTO_INCREMENT：自增，插入数据时自动分配 ID
-- - DEFAULT：默认值
-- - NULL / NOT NULL：是否允许为空
-- - COMMENT：字段注释（数据库文档用）
-- - PRIMARY KEY：主键，唯一标识一行数据
-- - KEY / INDEX：索引，加速查询（类似前端的"给数组建哈希表"）
-- - ENGINE=InnoDB：存储引擎，支持事务和外键
-- - CHARSET=utf8mb4：字符集，支持中文和 emoji
-- ============================================================================

-- 分类表 (通用分类，支持多级)
-- type 字段区分不同模块的分类（如 aphorism_dynasty = 诗词-朝代分类）
-- parent_id 实现树形结构（顶级分类 parent_id 为 NULL）
CREATE TABLE IF NOT EXISTS `category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `type` VARCHAR(50) NOT NULL COMMENT '分类类型: aphorism_dynasty/aphorism_form/aphorism_subject 等',
  `parent_id` INT UNSIGNED DEFAULT NULL COMMENT '父分类ID (顶级为NULL)',
  `name` VARCHAR(100) NOT NULL COMMENT '分类名称',
  `icon` VARCHAR(100) DEFAULT NULL COMMENT '图标 (emoji或图标名)',
  `description` VARCHAR(500) DEFAULT NULL COMMENT '分类描述',
  `sort_order` INT DEFAULT 0 COMMENT '排序 (数值越小越靠前)',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用: 1启用 0禁用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),           -- 主键索引
  KEY `idx_type` (`type`),     -- 按 type 查询的索引
  KEY `idx_parent` (`parent_id`) -- 按 parent_id 查询的索引
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='分类表(通用)';

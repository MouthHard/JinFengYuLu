-- ============================================
-- 诗词模块表结构 (01-aphorism.sql)
-- 对应前端页面: src/pages/Aphorism/
-- 包含：诗词主表、诗词标签表、诗词-分类关联表
-- ============================================

-- 1. 诗词主表
CREATE TABLE IF NOT EXISTS `aphorism` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `title` VARCHAR(200) NOT NULL COMMENT '诗词标题',
  `author` VARCHAR(100) DEFAULT NULL COMMENT '作者',
  `dynasty` VARCHAR(50) DEFAULT NULL COMMENT '朝代',
  `content` JSON NOT NULL COMMENT '诗词内容 (行数组)',
  `form` VARCHAR(100) DEFAULT NULL COMMENT '体裁形式 (如: 五言绝句, 词, 乐府)',
  `image_url` VARCHAR(500) DEFAULT NULL COMMENT '配图URL',
  `annotation` TEXT DEFAULT NULL COMMENT '原文注释',
  `translation` TEXT DEFAULT NULL COMMENT '英文翻译',
  `background` TEXT DEFAULT NULL COMMENT '创作背景',
  `appreciation` TEXT DEFAULT NULL COMMENT '诗词赏析',
  `poet_introduction` TEXT DEFAULT NULL COMMENT '诗人简介',
  `view_count` INT UNSIGNED DEFAULT 0 COMMENT '浏览次数',
  `like_count` INT UNSIGNED DEFAULT 0 COMMENT '点赞次数',
  `is_featured` TINYINT(1) DEFAULT 0 COMMENT '是否精选: 1是 0否',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用: 1启用 0禁用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_title` (`title`),
  KEY `idx_author` (`author`),
  KEY `idx_dynasty` (`dynasty`),
  KEY `idx_form` (`form`),
  KEY `idx_featured` (`is_featured`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='诗词主表';

-- 2. 诗词标签表
CREATE TABLE IF NOT EXISTS `aphorism_tag` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `poem_id` INT UNSIGNED NOT NULL COMMENT '诗词ID',
  `tag` VARCHAR(50) NOT NULL COMMENT '标签名',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_poem_id` (`poem_id`),
  KEY `idx_tag` (`tag`),
  CONSTRAINT `fk_aphorism_tag_poem` FOREIGN KEY (`poem_id`) REFERENCES `aphorism` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='诗词标签表';

-- 3. 诗词-分类关联表 (多对多)
CREATE TABLE IF NOT EXISTS `aphorism_category_relation` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `poem_id` INT UNSIGNED NOT NULL COMMENT '诗词ID',
  `category_id` INT UNSIGNED NOT NULL COMMENT '分类ID',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_poem_category` (`poem_id`, `category_id`),
  KEY `idx_category_id` (`category_id`),
  CONSTRAINT `fk_aphorism_rel_poem` FOREIGN KEY (`poem_id`) REFERENCES `aphorism` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_aphorism_rel_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='诗词-分类关联表';

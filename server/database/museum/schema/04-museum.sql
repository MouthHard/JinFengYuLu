-- ============================================
-- 博物馆模块表结构 (04-museum.sql)
-- 对应前端页面: src/pages/Museum/
-- 包含：博物馆、详情、文物、展览、活动、新闻、
--       沉浸式体验、文创、学术资源、专馆
-- 说明：不强制外键约束（部分 museum_id 可能无对应主表行），仅建索引
-- ============================================

-- 1. 博物馆主表
CREATE TABLE IF NOT EXISTS `museum` (
  `id` INT UNSIGNED NOT NULL COMMENT '博物馆ID（与前端一致）',
  `name` VARCHAR(200) NOT NULL COMMENT '博物馆名称',
  `province` VARCHAR(50) DEFAULT NULL COMMENT '所在省份',
  `type` VARCHAR(50) DEFAULT NULL COMMENT '博物馆类型',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '封面图URL',
  `description` TEXT DEFAULT NULL COMMENT '简介',
  `artifacts_count` INT UNSIGNED DEFAULT 0 COMMENT '馆藏数量（计数，非关联）',
  `exhibitions_count` INT UNSIGNED DEFAULT 0 COMMENT '展览数量（计数，非关联）',
  `visitors` INT UNSIGNED DEFAULT 0 COMMENT '年访客量',
  `features` JSON DEFAULT NULL COMMENT '特色标签数组',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_province` (`province`),
  KEY `idx_type` (`type`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆主表';

-- 2. 博物馆详情表
CREATE TABLE IF NOT EXISTS `museum_detail` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '博物馆ID',
  `visit_info` JSON DEFAULT NULL COMMENT '参观信息',
  `history` TEXT DEFAULT NULL COMMENT '历史沿革',
  `architecture` TEXT DEFAULT NULL COMMENT '建筑特色',
  `highlights` JSON DEFAULT NULL COMMENT '重要馆藏（字符串或结构）',
  `education` TEXT DEFAULT NULL COMMENT '教育活动',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_museum_id` (`museum_id`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆详情表';

-- 3. 文物表
CREATE TABLE IF NOT EXISTS `museum_artifact` (
  `id` INT UNSIGNED NOT NULL COMMENT '文物ID（与前端一致）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `name` VARCHAR(200) NOT NULL COMMENT '文物名称',
  `period` VARCHAR(100) DEFAULT NULL COMMENT '年代',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `description` TEXT DEFAULT NULL COMMENT '描述',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类',
  `basic_info` JSON DEFAULT NULL COMMENT '基本信息',
  `appearance` TEXT DEFAULT NULL COMMENT '外观描述',
  `historical_value` TEXT DEFAULT NULL COMMENT '历史价值',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_category` (`category`),
  KEY `idx_period` (`period`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆文物表';

-- 4. 文物详情表
CREATE TABLE IF NOT EXISTS `museum_artifact_detail` (
  `id` INT UNSIGNED NOT NULL COMMENT '文物ID（与 museum_artifact.id 一致）',
  `name` VARCHAR(200) NOT NULL COMMENT '文物名称',
  `period` VARCHAR(100) DEFAULT NULL COMMENT '年代',
  `description` TEXT DEFAULT NULL COMMENT '描述',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `type` VARCHAR(50) DEFAULT NULL COMMENT '类型',
  `basic_info` JSON DEFAULT NULL COMMENT '基本信息',
  `appearance` TEXT DEFAULT NULL COMMENT '外观描述',
  `historical_value` TEXT DEFAULT NULL COMMENT '历史价值',
  `artifact_level` VARCHAR(200) DEFAULT NULL COMMENT '文物等级',
  `related_story` TEXT DEFAULT NULL COMMENT '相关故事',
  `protection_status` TEXT DEFAULT NULL COMMENT '保护现状',
  `cultural_significance` TEXT DEFAULT NULL COMMENT '文化意义',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_type` (`type`),
  KEY `idx_period` (`period`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆文物详情表';

-- 5. 展览表
CREATE TABLE IF NOT EXISTS `museum_exhibition` (
  `id` INT UNSIGNED NOT NULL COMMENT '展览ID（与前端一致）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `title` VARCHAR(200) NOT NULL COMMENT '展览标题',
  `description` TEXT DEFAULT NULL COMMENT '描述',
  `date` VARCHAR(200) DEFAULT NULL COMMENT '展期',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `location` VARCHAR(200) DEFAULT NULL COMMENT '展厅位置',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类',
  `status` VARCHAR(50) DEFAULT NULL COMMENT '状态码',
  `status_text` VARCHAR(100) DEFAULT NULL COMMENT '状态文案',
  `tags` JSON DEFAULT NULL COMMENT '标签数组',
  `curator` VARCHAR(200) DEFAULT NULL COMMENT '策展人',
  `scale` VARCHAR(100) DEFAULT NULL COMMENT '规模',
  `visitors` INT UNSIGNED DEFAULT NULL COMMENT '参观人数',
  `background` TEXT DEFAULT NULL COMMENT '背景介绍',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_category` (`category`),
  KEY `idx_status` (`status`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆展览表';

-- 6. 活动表
CREATE TABLE IF NOT EXISTS `museum_activity` (
  `id` INT UNSIGNED NOT NULL COMMENT '活动ID（与前端一致）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `title` VARCHAR(200) NOT NULL COMMENT '活动标题',
  `description` TEXT DEFAULT NULL COMMENT '描述',
  `date` VARCHAR(200) DEFAULT NULL COMMENT '日期',
  `time` VARCHAR(100) DEFAULT NULL COMMENT '时间',
  `location` VARCHAR(200) DEFAULT NULL COMMENT '地点',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆活动表';

-- 7. 新闻表
CREATE TABLE IF NOT EXISTS `museum_news` (
  `id` INT UNSIGNED NOT NULL COMMENT '新闻ID（与前端一致）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `description` TEXT DEFAULT NULL COMMENT '描述（非 content）',
  `date` VARCHAR(50) DEFAULT NULL COMMENT '日期',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆新闻表';

-- 8. 沉浸式体验表
CREATE TABLE IF NOT EXISTS `museum_immersive` (
  `id` INT UNSIGNED NOT NULL COMMENT '体验ID（与前端一致）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `description` TEXT DEFAULT NULL COMMENT '描述',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆沉浸式体验表';

-- 9. 文创产品表
CREATE TABLE IF NOT EXISTS `museum_creative_product` (
  `id` INT UNSIGNED NOT NULL COMMENT '产品ID（与前端一致）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `name` VARCHAR(200) NOT NULL COMMENT '产品名称',
  `description` TEXT DEFAULT NULL COMMENT '描述',
  `price` DECIMAL(10, 2) DEFAULT 0 COMMENT '价格',
  `image` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_category` (`category`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆文创产品表';

-- 10. 学术资源表
CREATE TABLE IF NOT EXISTS `museum_academic_resource` (
  `id` INT UNSIGNED NOT NULL COMMENT '资源ID（与前端一致）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `author` VARCHAR(200) DEFAULT NULL COMMENT '作者',
  `date` VARCHAR(50) DEFAULT NULL COMMENT '日期',
  `type` VARCHAR(50) DEFAULT NULL COMMENT '类型: article/book/video',
  `description` TEXT DEFAULT NULL COMMENT '描述',
  `link` VARCHAR(500) DEFAULT NULL COMMENT '链接',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_type` (`type`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆学术资源表';

-- 11. 专馆/展厅表
CREATE TABLE IF NOT EXISTS `museum_exhibition_hall` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `hall_id` VARCHAR(100) NOT NULL COMMENT '专馆字符串ID（前端 id）',
  `museum_id` INT UNSIGNED NOT NULL COMMENT '所属博物馆ID',
  `name` VARCHAR(200) NOT NULL COMMENT '专馆名称',
  `icon` VARCHAR(50) DEFAULT NULL COMMENT '图标',
  `category` VARCHAR(100) DEFAULT NULL COMMENT '分类',
  `cover_image` VARCHAR(500) DEFAULT NULL COMMENT '封面图',
  `introduction` TEXT DEFAULT NULL COMMENT '简介',
  `stats` JSON DEFAULT NULL COMMENT '统计信息',
  `location` VARCHAR(200) DEFAULT NULL COMMENT '位置',
  `open_time` VARCHAR(200) DEFAULT NULL COMMENT '开放时间',
  `duration` VARCHAR(100) DEFAULT NULL COMMENT '建议游览时长',
  `ticket` VARCHAR(200) DEFAULT NULL COMMENT '票务说明',
  `artifacts` JSON DEFAULT NULL COMMENT '馆藏文物列表',
  `exhibitions` JSON DEFAULT NULL COMMENT '展览列表',
  `recommendations` JSON DEFAULT NULL COMMENT '推荐活动',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_hall_id` (`hall_id`),
  KEY `idx_museum_id` (`museum_id`),
  KEY `idx_category` (`category`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='博物馆专馆表';

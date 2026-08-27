-- ============================================
-- 游戏模块表结构 (05-game.sql)
-- 对应前端页面: src/pages/Game/
-- 包含：游戏主表、游戏截图表、游戏特色表、Banner表、游戏分类表
-- ============================================

-- 1. 游戏主表
CREATE TABLE IF NOT EXISTS `game` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `game_id` VARCHAR(100) NOT NULL COMMENT '游戏唯一标识(slug)',
  `title` VARCHAR(200) NOT NULL COMMENT '游戏标题',
  `subtitle` VARCHAR(200) DEFAULT NULL COMMENT '副标题/英文名',
  `cover` VARCHAR(500) DEFAULT NULL COMMENT '封面图URL',
  `banner` VARCHAR(500) DEFAULT NULL COMMENT 'Banner大图URL',
  `category` VARCHAR(50) NOT NULL COMMENT '游戏分类: action/rpg/strategy/adventure/fps/simulation/sports/puzzle/horror/indie',
  `price` DECIMAL(10, 2) NOT NULL DEFAULT 0 COMMENT '当前价格',
  `original_price` DECIMAL(10, 2) DEFAULT NULL COMMENT '原价',
  `discount` TINYINT UNSIGNED DEFAULT NULL COMMENT '折扣百分比 0-100',
  `rating` DECIMAL(3, 1) NOT NULL DEFAULT 0 COMMENT '评分 (0-10)',
  `review_count` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '评价数量',
  `developer` VARCHAR(200) NOT NULL COMMENT '开发商',
  `publisher` VARCHAR(200) NOT NULL COMMENT '发行商',
  `release_date` DATE DEFAULT NULL COMMENT '发行日期',
  `description` TEXT DEFAULT NULL COMMENT '游戏描述',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_game_id` (`game_id`),
  KEY `idx_category` (`category`),
  KEY `idx_price` (`price`),
  KEY `idx_rating` (`rating`),
  KEY `idx_discount` (`discount`),
  KEY `idx_active` (`is_active`),
  KEY `idx_release_date` (`release_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏主表';

-- 2. 游戏截图表
CREATE TABLE IF NOT EXISTS `game_screenshot` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `game_id` INT UNSIGNED NOT NULL COMMENT '游戏主表ID',
  `url` VARCHAR(500) NOT NULL COMMENT '截图URL',
  `sort_order` INT UNSIGNED DEFAULT 0 COMMENT '排序序号',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_game_id` (`game_id`),
  CONSTRAINT `fk_game_screenshot_game` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏截图表';

-- 3. 游戏特色/特性表
CREATE TABLE IF NOT EXISTS `game_feature` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `game_id` INT UNSIGNED NOT NULL COMMENT '游戏主表ID',
  `feature` VARCHAR(100) NOT NULL COMMENT '特色名称',
  `sort_order` INT UNSIGNED DEFAULT 0 COMMENT '排序序号',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_game_id` (`game_id`),
  CONSTRAINT `fk_game_feature_game` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏特色表';

-- 4. 游戏标签表 (多对多)
CREATE TABLE IF NOT EXISTS `game_tag` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `game_id` INT UNSIGNED NOT NULL COMMENT '游戏主表ID',
  `tag` VARCHAR(50) NOT NULL COMMENT '标签名: hot/new/sale/coming/free/premium/editor-choice/multiplayer',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_game_tag` (`game_id`, `tag`),
  KEY `idx_tag` (`tag`),
  CONSTRAINT `fk_game_tag_game` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏标签表';

-- 5. 游戏平台表 (多对多)
CREATE TABLE IF NOT EXISTS `game_platform` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `game_id` INT UNSIGNED NOT NULL COMMENT '游戏主表ID',
  `platform` VARCHAR(20) NOT NULL COMMENT '平台: pc/ps5/ps4/xbox/switch/mobile',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_game_platform` (`game_id`, `platform`),
  KEY `idx_platform` (`platform`),
  CONSTRAINT `fk_game_platform_game` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏平台表';

-- 6. Banner表
CREATE TABLE IF NOT EXISTS `game_banner` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `banner_id` VARCHAR(50) NOT NULL COMMENT 'Banner唯一标识',
  `game_id_ref` VARCHAR(100) NOT NULL COMMENT '关联的游戏game_id(slug)',
  `image` VARCHAR(500) NOT NULL COMMENT 'Banner图片URL',
  `title` VARCHAR(200) NOT NULL COMMENT 'Banner标题',
  `subtitle` VARCHAR(200) DEFAULT NULL COMMENT 'Banner副标题',
  `tag` VARCHAR(50) DEFAULT NULL COMMENT '标签: hot/new/sale',
  `sort_order` INT UNSIGNED DEFAULT 0 COMMENT '排序序号',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_banner_id` (`banner_id`),
  KEY `idx_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏Banner表';

-- 7. 游戏分类配置表 (展示用分类信息)
CREATE TABLE IF NOT EXISTS `game_category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `key_name` VARCHAR(50) NOT NULL COMMENT '分类键名: action/rpg等',
  `label` VARCHAR(50) NOT NULL COMMENT '分类标签',
  `icon` VARCHAR(20) DEFAULT NULL COMMENT '图标emoji',
  `sort_order` INT UNSIGNED DEFAULT 0 COMMENT '排序',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_key_name` (`key_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='游戏分类配置表';

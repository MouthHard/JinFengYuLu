-- ============================================
-- 历史模块表结构 (03-history.sql)
-- 对应前端页面: src/pages/History/
-- 包含：朝代表、历史事件表、历史人物表、文化遗产表
-- ============================================

-- 1. 朝代表
CREATE TABLE IF NOT EXISTS `dynasty` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `dynasty_id` VARCHAR(50) NOT NULL COMMENT '朝代slug标识',
  `name` VARCHAR(100) NOT NULL COMMENT '朝代名称',
  `period` VARCHAR(100) NOT NULL COMMENT '时期范围 (如: 约前2070年-约前1600年)',
  `era` VARCHAR(50) DEFAULT NULL COMMENT '时代分类: ancient/imperial',
  `period_tag` VARCHAR(50) DEFAULT NULL COMMENT '时期标签: ancient/xia-shang-zhou/qin-han 等',
  `is_unified` TINYINT(1) DEFAULT 1 COMMENT '是否统一政权',
  `description` TEXT DEFAULT NULL COMMENT '朝代描述',
  `highlights` JSON DEFAULT NULL COMMENT '重要事件列表',
  `capital` VARCHAR(200) DEFAULT NULL COMMENT '都城',
  `location` VARCHAR(200) DEFAULT NULL COMMENT '地理位置',
  `ethnic_group` VARCHAR(100) DEFAULT NULL COMMENT '民族',
  `founder` VARCHAR(100) DEFAULT NULL COMMENT '建立者',
  `map_url` VARCHAR(500) DEFAULT NULL COMMENT '疆域图URL',
  `map_description` TEXT DEFAULT NULL COMMENT '疆域描述',
  `sort_order` INT DEFAULT 0 COMMENT '排序 (数值越小越靠前)',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_dynasty_id` (`dynasty_id`),
  KEY `idx_era` (`era`),
  KEY `idx_period_tag` (`period_tag`),
  KEY `idx_sort` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='朝代表';

-- 2. 历史事件表
CREATE TABLE IF NOT EXISTS `historical_event` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `event_id` VARCHAR(50) NOT NULL COMMENT '事件slug标识',
  `title` VARCHAR(200) NOT NULL COMMENT '事件标题',
  `period` VARCHAR(100) DEFAULT NULL COMMENT '发生时期',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类: political/cultural',
  `brief` VARCHAR(500) DEFAULT NULL COMMENT '简介',
  `description` TEXT DEFAULT NULL COMMENT '详细描述',
  `impact` TEXT DEFAULT NULL COMMENT '历史影响',
  `image_url` VARCHAR(500) DEFAULT NULL COMMENT '图片URL',
  `tags` JSON DEFAULT NULL COMMENT '标签数组',
  `sort_order` INT DEFAULT 0 COMMENT '排序',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_event_id` (`event_id`),
  KEY `idx_category` (`category`),
  KEY `idx_sort` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='历史事件表';

-- 3. 历史人物表
CREATE TABLE IF NOT EXISTS `historical_figure` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `figure_id` VARCHAR(50) NOT NULL COMMENT '人物slug标识',
  `name` VARCHAR(100) NOT NULL COMMENT '人物姓名',
  `dynasty` VARCHAR(50) DEFAULT NULL COMMENT '所属朝代/时期',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类: philosophy/politics/culture/science',
  `title` VARCHAR(200) DEFAULT NULL COMMENT '头衔/称谓',
  `brief` VARCHAR(500) DEFAULT NULL COMMENT '简介',
  `description` TEXT DEFAULT NULL COMMENT '详细描述',
  `achievements` JSON DEFAULT NULL COMMENT '成就列表',
  `quotes` VARCHAR(500) DEFAULT NULL COMMENT '名言',
  `portrait_url` VARCHAR(500) DEFAULT NULL COMMENT '画像URL',
  `tags` JSON DEFAULT NULL COMMENT '标签数组',
  `back_era` VARCHAR(100) DEFAULT NULL COMMENT '所属年代',
  `back_contribution` VARCHAR(500) DEFAULT NULL COMMENT '贡献',
  `back_influence` VARCHAR(500) DEFAULT NULL COMMENT '影响',
  `back_fun_fact` VARCHAR(500) DEFAULT NULL COMMENT '趣闻',
  `back_related_figures` JSON DEFAULT NULL COMMENT '相关人物',
  `representative_works` VARCHAR(500) DEFAULT NULL COMMENT '代表作',
  `evaluation_tags` JSON DEFAULT NULL COMMENT '历史评价标签数组',
  `sort_order` INT DEFAULT 0 COMMENT '排序',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_figure_id` (`figure_id`),
  KEY `idx_dynasty` (`dynasty`),
  KEY `idx_category` (`category`),
  KEY `idx_sort` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='历史人物表';

-- 4. 文化遗产表
CREATE TABLE IF NOT EXISTS `cultural_heritage` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `heritage_id` VARCHAR(50) NOT NULL COMMENT '遗产slug标识',
  `name` VARCHAR(200) NOT NULL COMMENT '遗产名称',
  `location` VARCHAR(200) DEFAULT NULL COMMENT '所在地',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类: site/building/artifact',
  `era` VARCHAR(100) DEFAULT NULL COMMENT '所属时代',
  `year` VARCHAR(100) DEFAULT NULL COMMENT '建造/存在年份',
  `brief` VARCHAR(500) DEFAULT NULL COMMENT '简介',
  `description` TEXT DEFAULT NULL COMMENT '详细描述',
  `history` TEXT DEFAULT NULL COMMENT '历史沿革',
  `cultural_significance` TEXT DEFAULT NULL COMMENT '文化意义',
  `features` JSON DEFAULT NULL COMMENT '特点列表',
  `related_figures` JSON DEFAULT NULL COMMENT '相关人物',
  `image_url` VARCHAR(500) DEFAULT NULL COMMENT '主图URL',
  `thumbnail_url` VARCHAR(500) DEFAULT NULL COMMENT '缩略图URL',
  `images` JSON DEFAULT NULL COMMENT '图片集URL',
  `related_items` JSON DEFAULT NULL COMMENT '相关遗产ID列表',
  `sort_order` INT DEFAULT 0 COMMENT '排序',
  `is_active` TINYINT(1) DEFAULT 1 COMMENT '是否启用',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_heritage_id` (`heritage_id`),
  KEY `idx_category` (`category`),
  KEY `idx_sort` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='文化遗产表';

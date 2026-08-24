-- ============================================================================
-- 风景模块表结构 (06-landscape.sql)
-- 对应前端页面: src/pages/Landscape/
-- 包含：摄影师、图片、视频、攻略（内容实体；分类体系等 UI 配置保留前端静态）
-- ============================================================================
-- 【前端同学必读】
-- 这是风景模块的建表脚本，定义了 4 张表：
-- 1. landscape_photographer（摄影师表）
-- 2. landscape_image（图片作品表）
-- 3. landscape_video（视频作品表）
-- 4. landscape_guide（攻略表）
--
-- 【设计模式：JSON 大对象 + 索引列】
-- 风景模块的数据结构嵌套且异构（worksPreview/tags/sections 等），
-- 如果把每个字段都拆成独立列，表会非常复杂且难以维护。
-- 所以采用"JSON 列存完整对象 + 独立列存常用查询字段"的混合设计：
-- - id/category/location/author_id 等是独立列，便于筛选和排序
-- - data 是 JSON 列，存储完整对象数据，前端直接使用
--
-- 【类比前端】
-- 类似前端的"列表页用简要信息，详情页用完整数据"——
-- 列表页只需要 id/category/封面图 等简要信息（来自独立列），
-- 详情页需要完整数据（来自 data JSON 列）。
--
-- 【索引说明】
-- - PRIMARY KEY：主键索引，保证 id 唯一
-- - KEY idx_xxx：普通索引，加速按该字段查询
-- - 索引越多 → 查询越快，但写入越慢（类似前端的"空间换时间"）
-- ============================================================================

-- 1. 摄影师表
-- 存储风景摄影师的基本信息和完整数据
CREATE TABLE IF NOT EXISTS `landscape_photographer` (
  `id` VARCHAR(50) NOT NULL COMMENT '摄影师唯一标识(如 ph-1)',
  `name` VARCHAR(100) NOT NULL COMMENT '摄影师姓名',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类',
  `location` VARCHAR(100) DEFAULT NULL COMMENT '所在地',
  `verified` TINYINT(1) DEFAULT 0 COMMENT '是否认证',
  `data` JSON DEFAULT NULL COMMENT '完整对象数据(含头像/简介/作品预览/社交等)',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),                           -- 主键：摄影师ID
  KEY `idx_photographer_name` (`name`),         -- 按姓名查询的索引
  KEY `idx_photographer_category` (`category`), -- 按分类查询的索引
  KEY `idx_photographer_location` (`location`), -- 按地区查询的索引
  KEY `idx_photographer_created` (`created_at`) -- 按创建时间查询的索引
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='风景摄影师表';

-- 2. 图片作品表
-- 存储风景摄影作品的基本信息和完整数据
CREATE TABLE IF NOT EXISTS `landscape_image` (
  `id` VARCHAR(50) NOT NULL COMMENT '图片唯一标识(如 img-1)',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类',
  `location` VARCHAR(100) DEFAULT NULL COMMENT '拍摄地点',
  `author_id` VARCHAR(50) DEFAULT NULL COMMENT '作者摄影师ID',
  `data` JSON DEFAULT NULL COMMENT '完整对象数据(含url/标签/统计/相机参数等)',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),                       -- 主键：图片ID
  KEY `idx_image_category` (`category`),    -- 按分类查询的索引
  KEY `idx_image_location` (`location`),    -- 按地点查询的索引
  KEY `idx_image_author` (`author_id`)      -- 按作者查询的索引
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='风景图片作品表';

-- 3. 视频作品表
-- 存储风景视频作品的基本信息和完整数据
CREATE TABLE IF NOT EXISTS `landscape_video` (
  `id` VARCHAR(50) NOT NULL COMMENT '视频唯一标识',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类',
  `location` VARCHAR(100) DEFAULT NULL COMMENT '拍摄地点',
  `author_id` VARCHAR(50) DEFAULT NULL COMMENT '作者摄影师ID',
  `data` JSON DEFAULT NULL COMMENT '完整对象数据',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),                       -- 主键：视频ID
  KEY `idx_video_category` (`category`),    -- 按分类查询的索引
  KEY `idx_video_location` (`location`),    -- 按地点查询的索引
  KEY `idx_video_author` (`author_id`)      -- 按作者查询的索引
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='风景视频作品表';

-- 4. 攻略表
-- 存储风景旅游攻略的基本信息和完整数据
CREATE TABLE IF NOT EXISTS `landscape_guide` (
  `id` VARCHAR(50) NOT NULL COMMENT '攻略唯一标识',
  `title` VARCHAR(200) DEFAULT NULL COMMENT '攻略标题',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '分类',
  `location` VARCHAR(100) DEFAULT NULL COMMENT '地点',
  `author_id` VARCHAR(50) DEFAULT NULL COMMENT '作者摄影师ID',
  `difficulty` VARCHAR(20) DEFAULT NULL COMMENT '难度: beginner/intermediate/advanced',
  `data` JSON DEFAULT NULL COMMENT '完整对象数据(含正文/章节/装备/注意事项等)',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),                          -- 主键：攻略ID
  KEY `idx_guide_category` (`category`),       -- 按分类查询的索引
  KEY `idx_guide_location` (`location`),       -- 按地点查询的索引
  KEY `idx_guide_author` (`author_id`),        -- 按作者查询的索引
  KEY `idx_guide_difficulty` (`difficulty`),    -- 按难度查询的索引
  KEY `idx_guide_title` (`title`)               -- 按标题查询的索引
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='风景攻略表';

-- 5. 热门主题表
-- 风景首页热门主题板块的数据
CREATE TABLE IF NOT EXISTS `landscape_hot_topic` (
  `id` VARCHAR(50) NOT NULL COMMENT '主题唯一标识',
  `title` VARCHAR(100) DEFAULT NULL COMMENT '主题标题',
  `category` VARCHAR(50) DEFAULT NULL COMMENT '主题分类',
  `data` JSON DEFAULT NULL COMMENT '完整对象数据',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_hot_topic_title` (`title`),
  KEY `idx_hot_topic_category` (`category`),
  KEY `idx_hot_topic_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='风景热门主题表';

-- 6. 热门目的地表
-- 风景首页热门目的地板块的数据
CREATE TABLE IF NOT EXISTS `landscape_popular_destination` (
  `id` VARCHAR(50) NOT NULL COMMENT '目的地唯一标识',
  `name` VARCHAR(100) DEFAULT NULL COMMENT '目的地名称',
  `country` VARCHAR(100) DEFAULT NULL COMMENT '国家',
  `data` JSON DEFAULT NULL COMMENT '完整对象数据',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_popular_dest_name` (`name`),
  KEY `idx_popular_dest_country` (`country`),
  KEY `idx_popular_dest_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='风景热门目的地表';

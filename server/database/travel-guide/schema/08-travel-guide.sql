-- ============================================
-- 旅游指南模块表结构 (08-travel-guide.sql)
-- 采用 JSON data 列方案：常用列用于查询，完整对象存 data 列
-- ============================================

-- 1. 省份表
CREATE TABLE IF NOT EXISTS `travel_guide_province` (
  `id` VARCHAR(50) NOT NULL COMMENT '省份ID',
  `name` VARCHAR(100) NOT NULL COMMENT '省份名称',
  `region` VARCHAR(50) DEFAULT NULL COMMENT '所属地区',
  `data` JSON DEFAULT NULL COMMENT '完整省份对象',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_region` (`region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='省份表';

-- 2. 省份风光数据表（含概览/景点/季节/活动/路线/风俗/非遗等）
CREATE TABLE IF NOT EXISTS `travel_guide_scenery` (
  `province_id` VARCHAR(50) NOT NULL COMMENT '省份ID',
  `name` VARCHAR(100) NOT NULL COMMENT '省份名称',
  `data` JSON DEFAULT NULL COMMENT '完整风光数据对象',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`province_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='省份风光数据表';

-- 3. 省份美食数据表（含美食列表与美食地点）
CREATE TABLE IF NOT EXISTS `travel_guide_food` (
  `province_id` VARCHAR(50) NOT NULL COMMENT '省份ID',
  `name` VARCHAR(100) NOT NULL COMMENT '省份名称',
  `data` JSON DEFAULT NULL COMMENT '完整美食数据对象(含 items + locations)',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`province_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='省份美食数据表';

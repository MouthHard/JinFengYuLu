-- ============================================
-- 音乐模块表结构 (07-music.sql)
-- 采用 JSON data 列方案：常用列用于查询/排序，完整对象存 data 列
-- ============================================

-- 1. 歌曲表
CREATE TABLE IF NOT EXISTS `music_song` (
  `id` INT UNSIGNED NOT NULL COMMENT '歌曲ID',
  `name` VARCHAR(200) NOT NULL COMMENT '歌曲名',
  `data` JSON DEFAULT NULL COMMENT '完整歌曲对象',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='歌曲表';

-- 2. 歌手表
CREATE TABLE IF NOT EXISTS `music_artist` (
  `id` INT UNSIGNED NOT NULL COMMENT '歌手ID',
  `name` VARCHAR(200) NOT NULL COMMENT '歌手名',
  `data` JSON DEFAULT NULL COMMENT '完整歌手对象',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='歌手表';

-- 3. 专辑表
CREATE TABLE IF NOT EXISTS `music_album` (
  `id` INT UNSIGNED NOT NULL COMMENT '专辑ID',
  `name` VARCHAR(200) NOT NULL COMMENT '专辑名',
  `data` JSON DEFAULT NULL COMMENT '完整专辑对象',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='专辑表';

-- 4. 歌单表
CREATE TABLE IF NOT EXISTS `music_playlist` (
  `id` INT UNSIGNED NOT NULL COMMENT '歌单ID',
  `name` VARCHAR(200) NOT NULL COMMENT '歌单名',
  `data` JSON DEFAULT NULL COMMENT '完整歌单对象(含歌曲列表)',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='歌单表';

-- 5. 附加数据表（榜单/热词/推荐/新歌/轮播/歌词/歌手详情/我的音乐）
CREATE TABLE IF NOT EXISTS `music_bundle` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `bundle_key` VARCHAR(50) NOT NULL COMMENT '数据键: mvs/toplists/search_hots/new_songs/banner_images/lyrics/artist_details/liked_songs/recent_played/...',
  `data` JSON DEFAULT NULL COMMENT '数据内容(数组或对象)',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_key` (`bundle_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='音乐附加数据表';

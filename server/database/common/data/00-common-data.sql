-- ============================================
-- 通用初始数据 (00-common-data.sql) - 精简版
-- 仅保留：诗词分类数据
-- ============================================

INSERT INTO `category` (`type`, `parent_id`, `name`, `icon`, `sort_order`) VALUES
-- 朝代分类
('aphorism_dynasty', NULL, '全部诗词', '📚', 0),
('aphorism_dynasty', NULL, '先秦', '🏺', 1),
('aphorism_dynasty', NULL, '秦汉', '🏛️', 2),
('aphorism_dynasty', NULL, '魏晋', '🎋', 3),
('aphorism_dynasty', NULL, '南北朝', '🏯', 4),
('aphorism_dynasty', NULL, '隋唐', '🏮🌸', 5),
('aphorism_dynasty', NULL, '五代十国', '⚔️', 6),
('aphorism_dynasty', NULL, '宋辽金', '🏯', 7),
('aphorism_dynasty', NULL, '元明清', '👑', 8),
('aphorism_dynasty', NULL, '近现代', '📷', 9),
-- 形式分类
('aphorism_form', NULL, '诗', '📜', 1),
('aphorism_form', NULL, '词', '🎋', 2),
('aphorism_form', NULL, '曲', '🎵', 3),
('aphorism_form', NULL, '其他韵文', '📚', 4),
('aphorism_form', NULL, '特殊形式', '✨', 5),
-- 题材分类
('aphorism_subject', NULL, '山水田园', '🏞️', 1),
('aphorism_subject', NULL, '咏物', '🌸', 2),
('aphorism_subject', NULL, '咏史怀古', '🏛️', 3),
('aphorism_subject', NULL, '边塞征战', '⚔️', 4),
('aphorism_subject', NULL, '离别相思', '🌙', 5),
('aphorism_subject', NULL, '爱情言情', '💕', 9),
('aphorism_subject', NULL, '哲理', '🔮', 10),
('aphorism_subject', NULL, '励志', '💪', 11),
('aphorism_subject', NULL, '饮酒', '🍶', 12),
('aphorism_subject', NULL, '节日', '🎊', 13),
-- 情感分类
('aphorism_emotion', NULL, '欢乐', '😊', 1),
('aphorism_emotion', NULL, '悲伤', '😢', 2),
('aphorism_emotion', NULL, '思乡', '🏠', 3),
('aphorism_emotion', NULL, '忧愁', '😔', 4),
('aphorism_emotion', NULL, '愤怒', '😠', 5),
('aphorism_emotion', NULL, '豪迈', '🦁', 7),
('aphorism_emotion', NULL, '恬淡', '🍃', 8),
-- 流派分类
('aphorism_school', NULL, '婉约派', '🌸', 1),
('aphorism_school', NULL, '豪放派', '🔥', 2),
('aphorism_school', NULL, '田园派', '🌾', 5),
('aphorism_school', NULL, '边塞派', '⛰️', 6),
-- 用途分类
('aphorism_usage', NULL, '启蒙读物', '📖', 1),
('aphorism_usage', NULL, '民歌', '🎵', 6);

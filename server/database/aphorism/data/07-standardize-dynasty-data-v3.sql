-- ============================================================================
-- 诗词朝代数据标准化脚本（第四版）
-- ============================================================================
-- 【目的】
-- 将数据库中的冗余朝代名称统一为标准名称，确保与分类映射表一致
--
-- 【标准化规则】
-- 唐代、初唐、盛唐、中唐、晚唐 → 唐
-- 宋代 → 北宋或南宋（根据诗词实际朝代）
-- 元代 → 元
-- 明代 → 明
-- 清代 → 清
-- 近现代、现代 → 现代或民国（根据诗词实际朝代）
-- 汉代、汉 → 西汉或东汉（根据诗词实际朝代）
-- 三国魏、三国蜀、三国吴 → 魏、蜀、吴
-- 辽金 → 辽
-- 西夏 → 西夏
-- 诗经 → 先秦（诗经是著作不是朝代）
-- ============================================================================

-- 更新朝代数据
UPDATE `aphorism` SET `dynasty` = '唐' WHERE `dynasty` IN ('唐代', '初唐', '盛唐', '中唐', '晚唐');
UPDATE `aphorism` SET `dynasty` = '北宋' WHERE `dynasty` = '宋代' AND `title` IN ('水调歌头·明月几时有', '念奴娇·赤壁怀古', '声声慢·寻寻觅觅', '念奴娇·登建康赏心亭呈致道', '扬州慢·淮左名都', '登快阁');
UPDATE `aphorism` SET `dynasty` = '南宋' WHERE `dynasty` = '宋代' AND `title` IN ('声声慢·秋声', '三字经');
UPDATE `aphorism` SET `dynasty` = '元' WHERE `dynasty` = '元代';
UPDATE `aphorism` SET `dynasty` = '明' WHERE `dynasty` = '明代';
UPDATE `aphorism` SET `dynasty` = '清' WHERE `dynasty` = '清代';
UPDATE `aphorism` SET `dynasty` = '民国' WHERE `dynasty` = '近现代' AND `title` = '三字经';
UPDATE `aphorism` SET `dynasty` = '现代' WHERE `dynasty` = '近现代' AND `title` = '再别康桥';
UPDATE `aphorism` SET `dynasty` = '西汉' WHERE `dynasty` IN ('汉代', '汉') AND `title` = '大风歌';
UPDATE `aphorism` SET `dynasty` = '东汉' WHERE `dynasty` IN ('汉代', '汉') AND `title` != '大风歌';
UPDATE `aphorism` SET `dynasty` = '魏' WHERE `dynasty` = '三国魏';
UPDATE `aphorism` SET `dynasty` = '蜀' WHERE `dynasty` = '三国蜀';
UPDATE `aphorism` SET `dynasty` = '吴' WHERE `dynasty` = '三国吴';
UPDATE `aphorism` SET `dynasty` = '辽' WHERE `dynasty` = '辽金';
UPDATE `aphorism` SET `dynasty` = '西夏' WHERE `dynasty` = '辽金' AND `title` != '念奴娇·赤壁怀古';
UPDATE `aphorism` SET `dynasty` = '先秦' WHERE `dynasty` = '诗经';

-- 验证更新结果
SELECT `dynasty`, COUNT(*) as count
FROM `aphorism`
WHERE `is_active` = 1
GROUP BY `dynasty`
ORDER BY `dynasty`;
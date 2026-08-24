-- ============================================
-- 游戏模块初始数据 (05-game-data.sql)
-- 从 src/pages/Game/data/index.ts 静态数据迁移
-- ============================================

-- ============================================
-- 游戏分类配置
-- ============================================
INSERT INTO `game_category` (`key_name`, `label`, `icon`, `sort_order`) VALUES
('action', '动作', '⚔️', 1),
('rpg', '角色扮演', '🗡️', 2),
('strategy', '策略', '♟️', 3),
('adventure', '冒险', '🗺️', 4),
('fps', '射击', '🎯', 5),
('simulation', '模拟', '🏗️', 6),
('sports', '体育', '⚽', 7),
('puzzle', '解谜', '🧩', 8),
('horror', '恐怖', '👻', 9),
('indie', '独立', '💎', 10);

-- ============================================
-- 游戏数据 (12款)
-- ============================================
INSERT INTO `game` (`game_id`, `title`, `subtitle`, `cover`, `banner`, `category`, `price`, `original_price`, `discount`, `rating`, `review_count`, `developer`, `publisher`, `release_date`, `description`) VALUES

('cyber-nexus-2088', '赛博纪元 2088', 'Cyber Nexus 2088',
 'https://picsum.photos/id/1015/800/450',
 'https://picsum.photos/id/1015/1200/500',
 'action', 298, 398, 25, 9.2, 28400,
 'NeonForge Studio', 'Quantum Interactive', '2025-03-15',
 '在霓虹闪烁的巨型都市中，扮演一名赛博改造特工，揭开隐藏在城市底层的惊天阴谋。开放世界探索、深度角色定制与震撼战斗系统。'),

('stardew-valley-remake', '星露谷物语 重制版', 'Stardew Valley Remake',
 'https://picsum.photos/id/1018/800/450',
 'https://picsum.photos/id/1018/1200/500',
 'simulation', 78, NULL, NULL, 9.6, 56000,
 'ConcernedApe', 'ConcernedApe', '2025-06-01',
 '经典农场模拟游戏全面重制，全新3D画面与扩展内容，保留原版温暖治愈的精髓。'),

('shadow-strider', '暗影行者', 'Shadow Strider',
 'https://picsum.photos/id/1020/800/450',
 'https://picsum.photos/id/1020/1200/500',
 'action', 149, 298, 50, 8.8, 15200,
 'Abyss Walker', 'Dark Continent Games', '2024-11-20',
 '化身暗影刺客，在融合东方武侠与暗黑奇幻的世界中潜行。精准战斗与自由跑酷的极致融合。'),

('galactic-civilization-iv', '银河文明 IV', 'Galactic Civilization IV',
 'https://picsum.photos/id/1029/800/450',
 NULL,
 'strategy', 198, NULL, NULL, 8.5, 8900,
 'Stardock', 'Stardock', '2025-04-10',
 '在浩瀚星系中建立你的文明帝国，外交、科研、军事多线并进，书写属于你的银河史诗。'),

('phantom-frontier', '幻境边境', 'Phantom Frontier',
 'https://picsum.photos/id/1033/800/450',
 NULL,
 'rpg', 328, NULL, NULL, 9.0, 4600,
 'Dreamweaver Games', 'Ethereal Publishing', '2025-09-01',
 '在现实与幻境的夹缝中寻找真相。独特的双世界切换机制，每一步选择都将改写命运。'),

('iron-tides', '钢铁潮汐', 'Iron Tides',
 'https://picsum.photos/id/1039/800/450',
 NULL,
 'fps', 258, 328, 21, 8.3, 32100,
 'Vanguard Studios', 'Apex Entertainment', '2024-08-15',
 '近未来海陆空全面战争射击，64人大战场与战术小队模式并存，钢铁洪流席卷战场。'),

('echoes-of-eden', '伊甸回声', 'Echoes of Eden',
 'https://picsum.photos/id/1043/800/450',
 NULL,
 'adventure', 168, NULL, NULL, 9.4, 12300,
 'Luminous Tales', 'Luminous Tales', '2025-05-20',
 '一段跨越千年的寻根之旅，在绝美手绘世界中解谜探索，聆听文明消逝前的最后回声。'),

('void-horizon', '虚空地平线', 'Void Horizon',
 'https://picsum.photos/id/1048/800/450',
 NULL,
 'horror', 68, 128, 47, 8.1, 6700,
 'Nightfall Interactive', 'Nightfall Interactive', '2024-10-31',
 '深海研究站中醒来，黑暗中有什么在移动。心理恐怖与生存探索的深海噩梦。'),

('pixel-kingdom', '像素王国', 'Pixel Kingdom',
 'https://picsum.photos/id/1055/800/450',
 NULL,
 'indie', 0, NULL, NULL, 8.7, 89000,
 'SoloDev Luo', 'SoloDev Luo', '2025-01-15',
 '免费像素风王国建造与冒险。建造你的城堡，训练军队，探索随机生成的地下城。'),

('chess-master-ai', '棋魂 AI', 'Chess Master AI',
 'https://picsum.photos/id/1060/800/450',
 NULL,
 'puzzle', 38, NULL, NULL, 8.9, 21000,
 'MindForge Lab', 'MindForge Lab', '2025-02-14',
 '与最强AI对弈，从新手到大师的进阶之路。支持国际象棋、围棋、将棋三种棋类。'),

('final-striker', '终极速击', 'Final Striker',
 'https://picsum.photos/id/1065/800/450',
 NULL,
 'sports', 228, NULL, NULL, 7.8, 18500,
 'GoalLine Games', 'GoalLine Games', '2024-09-05',
 '下一代足球竞技体验，全新物理引擎与AI系统，还原最真实的绿茵对决。'),

('astral-drift', '星流漂流', 'Astral Drift',
 'https://picsum.photos/id/1069/800/450',
 NULL,
 'indie', 58, NULL, NULL, 9.1, 7200,
 'Cosmic Yarn', 'Cosmic Yarn', '2025-07-01',
 '操控引力在星际间漂流，用音乐编织星座。独特的音游+物理解谜融合玩法。');

-- ============================================
-- 游戏截图
-- ============================================
INSERT INTO `game_screenshot` (`game_id`, `url`, `sort_order`) VALUES
-- 赛博纪元 2088
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'https://picsum.photos/id/1016/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'https://picsum.photos/id/1017/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'https://picsum.photos/id/1019/800/450', 2),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'https://picsum.photos/id/1021/800/450', 3),
-- 星露谷物语 重制版
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), 'https://picsum.photos/id/1022/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), 'https://picsum.photos/id/1023/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), 'https://picsum.photos/id/1024/800/450', 2),
-- 暗影行者
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'https://picsum.photos/id/1025/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'https://picsum.photos/id/1026/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'https://picsum.photos/id/1027/800/450', 2),
-- 银河文明 IV
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), 'https://picsum.photos/id/1030/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), 'https://picsum.photos/id/1031/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), 'https://picsum.photos/id/1032/800/450', 2),
-- 幻境边境
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), 'https://picsum.photos/id/1034/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), 'https://picsum.photos/id/1035/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), 'https://picsum.photos/id/1036/800/450', 2),
-- 钢铁潮汐
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'https://picsum.photos/id/1040/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'https://picsum.photos/id/1041/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'https://picsum.photos/id/1042/800/450', 2),
-- 伊甸回声
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'https://picsum.photos/id/1044/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'https://picsum.photos/id/1045/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'https://picsum.photos/id/1046/800/450', 2),
-- 虚空地平线
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), 'https://picsum.photos/id/1049/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), 'https://picsum.photos/id/1050/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), 'https://picsum.photos/id/1051/800/450', 2),
-- 像素王国
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), 'https://picsum.photos/id/1056/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), 'https://picsum.photos/id/1057/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), 'https://picsum.photos/id/1058/800/450', 2),
-- 棋魂 AI
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), 'https://picsum.photos/id/1061/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), 'https://picsum.photos/id/1062/800/450', 1),
-- 终极速击
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'https://picsum.photos/id/1066/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'https://picsum.photos/id/1067/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'https://picsum.photos/id/1068/800/450', 2),
-- 星流漂流
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), 'https://picsum.photos/id/1070/800/450', 0),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), 'https://picsum.photos/id/1071/800/450', 1),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), 'https://picsum.photos/id/1073/800/450', 2);

-- ============================================
-- 游戏特色
-- ============================================
INSERT INTO `game_feature` (`game_id`, `feature`, `sort_order`) VALUES
-- 赛博纪元 2088
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), '开放世界', 0),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), '角色定制', 1),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), '多人联机', 2),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), '光追支持', 3),
-- 星露谷物语 重制版
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), '农场经营', 0),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), '多人合作', 1),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), '恋爱系统', 2),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), '季节变化', 3),
-- 暗影行者
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), '潜行暗杀', 0),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), '跑酷系统', 1),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), '武器锻造', 2),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), '支线剧情', 3),
-- 银河文明 IV
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), '4X策略', 0),
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), '星际外交', 1),
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), '科技树', 2),
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), '自定义种族', 3),
-- 幻境边境
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), '双世界切换', 0),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), '分支剧情', 1),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), '角色成长', 2),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), '手绘美术', 3),
-- 钢铁潮汐
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), '64人大战', 0),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), '载具作战', 1),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), '武器改装', 2),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), '赛季排位', 3),
-- 伊甸回声
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), '手绘风格', 0),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), '环境解谜', 1),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), '叙事驱动', 2),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), '原声音乐', 3),
-- 虚空地平线
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), '心理恐怖', 0),
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), '深海探索', 1),
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), '资源管理', 2),
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), '多结局', 3),
-- 像素王国
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), '免费游玩', 0),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), '像素风格', 1),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), '随机地下城', 2),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), '建造经营', 3),
-- 棋魂 AI
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), 'AI对弈', 0),
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), '棋谱复盘', 1),
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), '段位系统', 2),
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), '多棋种', 3),
-- 终极速击
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), '真实物理', 0),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), '职业模式', 1),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), '在线联赛', 2),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), '球队管理', 3),
-- 星流漂流
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), '音游解谜', 0),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), '引力操控', 1),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), '程序生成', 2),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), '沉浸配乐', 3);

-- ============================================
-- 游戏标签
-- ============================================
INSERT INTO `game_tag` (`game_id`, `tag`) VALUES
-- 赛博纪元 2088
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'hot'),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'new'),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'multiplayer'),
-- 星露谷物语 重制版
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), 'new'),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), 'editor-choice'),
-- 暗影行者
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'sale'),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'hot'),
-- 银河文明 IV
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), 'new'),
-- 幻境边境
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), 'coming'),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), 'editor-choice'),
-- 钢铁潮汐
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'multiplayer'),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'hot'),
-- 伊甸回声
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'editor-choice'),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'new'),
-- 虚空地平线
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), 'sale'),
-- 像素王国
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), 'free'),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), 'editor-choice'),
-- 棋魂 AI
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), 'new'),
-- 终极速击
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'multiplayer'),
-- 星流漂流
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), 'new'),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), 'editor-choice');

-- ============================================
-- 游戏平台
-- ============================================
INSERT INTO `game_platform` (`game_id`, `platform`) VALUES
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'cyber-nexus-2088'), 'ps5'),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'stardew-valley-remake'), 'switch'),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'ps5'),
((SELECT id FROM `game` WHERE `game_id` = 'shadow-strider'), 'xbox'),
((SELECT id FROM `game` WHERE `game_id` = 'galactic-civilization-iv'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'phantom-frontier'), 'ps5'),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'ps5'),
((SELECT id FROM `game` WHERE `game_id` = 'iron-tides'), 'xbox'),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'ps5'),
((SELECT id FROM `game` WHERE `game_id` = 'echoes-of-eden'), 'switch'),
((SELECT id FROM `game` WHERE `game_id` = 'void-horizon'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'pixel-kingdom'), 'mobile'),
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), 'mobile'),
((SELECT id FROM `game` WHERE `game_id` = 'chess-master-ai'), 'switch'),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'ps5'),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'xbox'),
((SELECT id FROM `game` WHERE `game_id` = 'final-striker'), 'switch'),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), 'pc'),
((SELECT id FROM `game` WHERE `game_id` = 'astral-drift'), 'switch');

-- ============================================
-- Banner数据
-- ============================================
INSERT INTO `game_banner` (`banner_id`, `game_id_ref`, `image`, `title`, `subtitle`, `tag`, `sort_order`) VALUES
('b1', 'cyber-nexus-2088', 'https://picsum.photos/id/1015/1200/500', '赛博纪元 2088', '霓虹之下的最终决战', 'hot', 0),
('b2', 'stardew-valley-remake', 'https://picsum.photos/id/1018/1200/500', '星露谷物语 重制版', '回归田园的治愈之旅', 'new', 1),
('b3', 'shadow-strider', 'https://picsum.photos/id/1020/1200/500', '暗影行者', '限时特惠 5 折起', 'sale', 2);

-- ============================================================================
-- 博物馆模块数据（合并文件）
-- 合并时间: 2026-08-22
-- 合并来源: 04-museum-data.sql, 10-museum-details-fix.sql,
--           11-museum-stats-fix.sql, 12-museum-images-fix.sql
-- ============================================================================


-- ============================================================================
-- 来源: 04-museum-data.sql
-- ============================================================================


-- ============================================
-- 博物馆模块初始数据 (04-museum-data.sql)
-- 从 src/pages/Museum/data/* 静态数据自动生成
-- 生成时间: 2026-08-08T14:50:59.397Z
-- museum: 38
-- museum_detail: 38
-- museum_artifact: 126
-- museum_artifact_detail: 78
-- museum_exhibition: 76
-- museum_activity: 114
-- museum_news: 114
-- museum_immersive: 114
-- museum_creative_product: 40
-- museum_academic_resource: 40
-- museum_exhibition_hall: 65
--
-- 导入说明 (Windows 编码):
--   请使用 cmd，不要用 PowerShell 管道重定向，避免中文乱码：
--   cmd /c "mysql -u root personal_website --default-character-set=utf8mb4 < server\database\schema\04-museum.sql"
--   cmd /c "mysql -u root personal_website --default-character-set=utf8mb4 < server\database\data\04-museum-data.sql"
-- ============================================

SET NAMES utf8mb4;

-- ============================================
-- 博物馆主表数据
-- 共 38 条
-- ============================================
DELETE FROM `museum`;
INSERT INTO `museum` (
  `id`, `name`, `province`, `type`, `image`, `description`, `artifacts_count`, `exhibitions_count`, `visitors`, `features`, `is_active`
) VALUES
(1, '故宫博物院', '北京', '历史博物馆', 'https://ts2.tc.mm.bing.net/th/id/OIP-C.4gY8qfCoUR9xHYvKN21VJgHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3', '故宫博物院是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。是中国古代宫廷建筑之精华，无与伦比的艺术宝库，世界上现存规模最大、保存最为完整的木质结构古建筑之一。', 1863404, 50, 19000000, '["世界文化遗产","国家AAAAA级旅游景区","首批全国重点文物保护单位"]', 1),
(2, '中国科学技术馆', '北京', '科技博物馆', 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', '中国科学技术馆是中国唯一的国家级综合性科技馆，是实施科教兴国战略和人才强国战略、提高全民科学素质的大型科普基础设施。', 20000, 30, 5000000, '["国家AAAAA级旅游景区","全国科普教育基地"]', 1),
(3, '上海博物馆', '上海', '艺术博物馆', 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', '上海博物馆是一座大型的中国古代艺术博物馆，馆藏文物近百万件，其中精品文物12万件，尤以青铜器、陶瓷器、书法、绘画为特色。', 1000000, 40, 8000000, '["国家AAAAA级旅游景区","首批国家一级博物馆"]', 1),
(4, '秦始皇兵马俑博物馆', '陕西', '历史博物馆', 'https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop', '秦始皇兵马俑博物馆位于陕西省西安市临潼区，是中国第一个封建皇帝秦始皇嬴政的陵园中一处大型从葬坑，被誉为"世界第八大奇迹"。', 8000, 10, 7000000, '["世界文化遗产","国家AAAAA级旅游景区","首批全国重点文物保护单位"]', 1),
(5, '陕西历史博物馆', '陕西', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '陕西历史博物馆是中国第一座大型现代化国家级博物馆，馆藏文物171万余件，上起远古人类初始阶段，下至近代社会。', 1710000, 45, 5500000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(6, '南京博物院', '江苏', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '南京博物院是中国三大博物馆之一，其前身是1933年蔡元培等倡建的国立中央博物院，是中国创建最早的博物馆。', 420000, 40, 6000000, '["国家AAAAA级旅游景区","首批国家一级博物馆"]', 1),
(7, '河南博物院', '河南', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '河南博物院是中国建立较早的博物馆之一，也是首批国家一级博物馆。馆藏文物17万余件，以史前文物、商周青铜器、历代陶瓷器、玉器及石刻最具特色。', 170000, 35, 4000000, '["国家AAAA级旅游景区","首批国家一级博物馆"]', 1),
(8, '浙江省博物馆', '浙江', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '浙江省博物馆是浙江省内最大的集收藏、陈列、研究于一体的综合性人文科学博物馆，馆藏文物及标本十万余件。', 100000, 25, 3500000, '["国家一级博物馆","浙江省爱国主义教育基地"]', 1),
(9, '湖北省博物馆', '湖北', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '湖北省博物馆坐落于湖北省武汉市武昌区东湖风景区，是国家一级博物馆，馆藏文物20万余件，其中国家一级文物945件。', 200000, 30, 4500000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(10, '湖南省博物馆', '湖南', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '湖南省博物馆是湖南省最大的历史艺术类博物馆，馆藏文物18万余件，尤以马王堆汉墓文物最具特色。', 180000, 28, 3800000, '["国家一级博物馆","全国科普教育基地"]', 1),
(11, '四川博物院', '四川', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '四川博物院是西南地区最大的综合性博物馆，馆藏文物26万余件，其中珍贵文物5万余件，以巴蜀青铜器、汉代画像砖最具特色。', 260000, 32, 3200000, '["国家一级博物馆","四川省爱国主义教育基地"]', 1),
(12, '广东省博物馆', '广东', '艺术博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '广东省博物馆是广东省唯一的省级综合博物馆，也是国家一级博物馆，馆藏文物16万余件，以岭南文化为特色。', 160000, 26, 4200000, '["国家一级博物馆","广东省爱国主义教育基地"]', 1),
(13, '天津博物馆', '天津', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '天津博物馆是一座历史艺术类综合性博物馆，馆藏文物20万余件，其中国家一级文物815件，以古代青铜器、玉器、书画为特色。', 200000, 24, 2800000, '["国家一级博物馆","全国科普教育基地"]', 1),
(14, '重庆中国三峡博物馆', '重庆', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '重庆中国三峡博物馆是保护、研究、展示重庆和三峡地区历史文化遗产的综合性博物馆，馆藏文物18万余件。', 180000, 22, 2600000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(15, '山东博物馆', '山东', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '山东博物馆是新中国成立后建立的第一座省级综合性地志博物馆，馆藏文物28万余件，以大汶口文化、龙山文化为特色。', 280000, 30, 3600000, '["国家一级博物馆","全国科普教育基地"]', 1),
(16, '辽宁省博物馆', '辽宁', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '辽宁省博物馆是一座综合性博物馆，馆藏文物12万余件，以红山文化玉器、辽代瓷器、清代书画最具特色。', 120000, 20, 2200000, '["国家一级博物馆","辽宁省爱国主义教育基地"]', 1),
(17, '吉林省博物院', '吉林', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '吉林省博物院是一座历史与艺术博物馆，馆藏文物近10万件，以高句丽文物、渤海国文物、辽金文物为特色。', 100000, 18, 1800000, '["国家一级博物馆","吉林省爱国主义教育基地"]', 1),
(18, '黑龙江省博物馆', '黑龙江', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '黑龙江省博物馆是省级综合性博物馆，馆藏文物11万余件，以渤海国文物、金代文物、赫哲族文物为特色。', 110000, 16, 1600000, '["国家一级博物馆","黑龙江省爱国主义教育基地"]', 1),
(19, '福建博物院', '福建', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '福建博物院是福建省最大的综合性博物馆，馆藏文物25万余件，以福建历史文物、海上丝绸之路文物为特色。', 250000, 28, 3000000, '["国家一级博物馆","全国科普教育基地"]', 1),
(20, '安徽博物院', '安徽', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '安徽博物院是安徽省唯一的省级综合性博物馆，馆藏文物22万余件，以徽州文化、文房四宝为特色。', 220000, 24, 2400000, '["国家一级博物馆","安徽省爱国主义教育基地"]', 1),
(21, '河北博物院', '河北', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '河北博物院是河北省省级综合性博物馆，馆藏文物24万余件，以满城汉墓出土文物、河北古代壁画为特色。', 240000, 26, 2800000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(22, '山西博物院', '山西', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '山西博物院是山西省最大的综合性博物馆，馆藏文物50余万件，以晋国青铜器、北朝壁画、山西古建筑为特色。', 500000, 32, 3200000, '["国家一级博物馆","全国科普教育基地"]', 1),
(23, '江西省博物馆', '江西', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '江西省博物馆是江西省最大的综合性博物馆，馆藏文物6万余件，以江西古代历史文物、革命文物为特色。', 60000, 20, 1800000, '["国家一级博物馆","江西省爱国主义教育基地"]', 1),
(24, '广西壮族自治区博物馆', '广西', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '广西壮族自治区博物馆是广西最大的综合性博物馆，馆藏文物5万余件，以铜鼓、壮族文物为特色。', 50000, 18, 1500000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(25, '海南省博物馆', '海南', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '海南省博物馆是海南省综合性博物馆，馆藏文物2万余件，以海南历史文物、南海水下文化遗产为特色。', 20000, 15, 1200000, '["国家一级博物馆","海南省爱国主义教育基地"]', 1),
(26, '贵州省博物馆', '贵州', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '贵州省博物馆是贵州省综合性博物馆，馆藏文物7万余件，以夜郎文化、贵州少数民族文物为特色。', 70000, 18, 1400000, '["国家一级博物馆","贵州省爱国主义教育基地"]', 1),
(27, '云南省博物馆', '云南', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '云南省博物馆是云南省最大的综合性博物馆，馆藏文物23万余件，以古滇国青铜器、南诏大理国文物、云南少数民族文物为特色。', 230000, 25, 2000000, '["国家一级博物馆","全国科普教育基地"]', 1),
(28, '西藏博物馆', '西藏', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西藏博物馆是西藏自治区综合性博物馆，馆藏文物5万余件，以藏族历史文物、宗教文物为特色。', 50000, 16, 800000, '["国家一级博物馆","西藏自治区爱国主义教育基地"]', 1),
(29, '甘肃省博物馆', '甘肃', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '甘肃省博物馆是甘肃省综合性博物馆，馆藏文物35万余件，以丝绸之路文物、彩陶、汉简为特色。', 350000, 28, 2500000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(30, '青海省博物馆', '青海', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '青海省博物馆是青海省综合性博物馆，馆藏文物4万余件，以青海历史文物、民族文物为特色。', 40000, 14, 1000000, '["国家一级博物馆","青海省爱国主义教育基地"]', 1),
(31, '内蒙古博物院', '内蒙古', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '内蒙古博物院是内蒙古自治区综合性博物馆，馆藏文物15万余件，以匈奴、鲜卑、契丹、蒙古等北方民族文物为特色。', 150000, 22, 2200000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(32, '宁夏博物馆', '宁夏', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '宁夏博物馆是宁夏回族自治区综合性博物馆，馆藏文物4万余件，以贺兰山岩画、西夏文物为特色。', 40000, 16, 1200000, '["国家一级博物馆","宁夏回族自治区爱国主义教育基地"]', 1),
(33, '新疆维吾尔自治区博物馆', '新疆', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '新疆维吾尔自治区博物馆是新疆综合性博物馆，馆藏文物5万余件，以丝绸之路文物、新疆古代干尸为特色。', 50000, 18, 1500000, '["国家一级博物馆","全国爱国主义教育示范基地"]', 1),
(34, '台北故宫博物院', '台湾', '艺术博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '台北故宫博物院是台湾规模最大的博物馆，馆藏文物近70万件，以中国古代书画、陶瓷、青铜器为特色。', 700000, 35, 5000000, '["世界知名博物馆","中国古代艺术宝库"]', 1),
(35, '香港历史博物馆', '香港', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '香港历史博物馆是香港最大的历史博物馆，展示了香港从远古到现代的历史发展，包括考古发现、民俗文化、自然历史等内容。', 90000, 20, 1200000, '["香港最大历史博物馆","常设展览「香港故事」"]', 1),
(36, '香港艺术馆', '香港', '艺术博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '香港艺术馆是香港第一所公营艺术博物馆，馆藏包括中国书画、古代文物、香港艺术及当代艺术作品。', 17000, 25, 800000, '["香港第一所公营艺术博物馆","藏品涵盖古今中外"]', 1),
(37, '澳门博物馆', '澳门', '历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '澳门博物馆位于澳门历史城区的中心，展示了澳门数百年的历史变迁，包括中西文化交融的独特历史。', 3000, 15, 500000, '["世界文化遗产地","展示中西文化交融"]', 1),
(38, '澳门艺术博物馆', '澳门', '艺术博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '澳门艺术博物馆是澳门最大的艺术博物馆，展示中国书画、西方绘画、澳门本土艺术作品等。', 10000, 18, 350000, '["澳门最大艺术博物馆","中西艺术精品荟萃"]', 1);

-- ============================================
-- 博物馆详情表数据
-- 共 38 条
-- ============================================
DELETE FROM `museum_detail`;
INSERT INTO `museum_detail` (
  `museum_id`, `visit_info`, `history`, `architecture`, `highlights`, `education`, `is_active`
) VALUES
(1, '{"openTime":{"regularTime":"周二至周日 8:30-17:00","stopEntryTime":"16:10","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"北京市东城区景山前街4号","metro":"地铁1号线天安门东站、天安门西站","bus":"公交1、2、10、20、82、120、126、203、205、210、728路等"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"010-85007421","email":"gugong@dpm.org.cn","complaintPhone":"010-85007420","website":"https://www.dpm.org.cn"}}', '故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆。故宫始建于明永乐四年（1406年），至永乐十八年（1420年）落成，是明清两朝二十四位皇帝的皇宫。1911年辛亥革命推翻帝制，1914年政府将外朝部分辟为古物陈列所，1925年10月10日内朝部分正式辟为故宫博物院。', '故宫占地面积72万平方米，建筑面积15万平方米，现有建筑980余座，房屋8700余间。故宫四面环有高10米的城墙和宽52米的护城河。城墙四面各设城门一座，南名午门，北称神武门，左右为东华门、西华门。故宫建筑沿着一条南北向的中轴线排列，左右对称，气势宏伟，规划严整，极为壮观。', '"故宫博物院馆藏文物总数达186万余件，其中一级文物8000余件。藏品分为26大类，包括陶瓷、铜器、玉器、书画、织绣、宫廷文物等。著名藏品有《清明上河图》、《千里江山图》等。故宫还收藏有大量宫廷文物，如皇帝玺印、宫廷服饰、宫廷陈设等。"', '故宫博物院开展多种教育活动，包括专题讲座、亲子活动、文化体验课程等。定期举办\'故宫讲坛\'，邀请专家学者讲解故宫历史文化。开设\'故宫课堂\'，面向中小学生开展传统文化教育。举办\'故宫文化节\'，让公众深入了解故宫文化。', 1),
(2, '{"openTime":{"regularTime":"周二至周日 9:30-17:00","stopEntryTime":"16:30","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"北京市朝阳区北辰东路5号"},"contact":{"phone":"010-59041000","website":"https://www.cstm.org.cn"}}', '中国科学技术馆于1988年建成开放，是中国第一座国家级综合性科技馆。2009年新馆建成，占地面积约8万平方米，建筑面积约10万平方米，是目前中国规模最大、功能最完善的综合性科技场馆。新馆建筑呈\'鲁班锁\'造型，寓意科学的奥秘与探索精神。', '新馆建筑设计融合了中国传统建筑元素与现代科技感，外观呈不对称的\'鲁班锁\'造型，象征着科学的奥秘与探索精神。馆内空间布局合理，设有多个主题展厅，为观众提供沉浸式的科技体验。建筑采用绿色环保设计，获得国家绿色建筑三星认证。', '"馆内收藏了大量珍贵的科技文物和互动展品，包括古代科技发明、现代科技成果、航天航空技术等。其中，\'宇宙探索\'、\'生命奥秘\'、\'信息时代\'等主题展区深受观众喜爱。馆内还有中国古代科技成就展，展示四大发明、天文仪器等珍贵文物。"', '馆内定期举办科普讲座、科技体验活动、青少年科技竞赛等教育活动，为公众提供丰富的科学教育资源。同时，还开展科普进社区、进校园等outreach活动，传播科学知识，提高全民科学素质。每年举办\'科技周\'、\'科普日\'等大型科普活动。', 1),
(3, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"上海市黄浦区人民大道201号"},"contact":{"phone":"021-63723500","website":"https://www.shanghaimuseum.net"}}', '上海博物馆创建于1952年，原址在南京西路325号。1996年新馆建成开放，位于人民广场南侧。上海博物馆是一座大型的中国古代艺术博物馆，馆藏文物近百万件，其中精品文物12万件，尤以青铜器、陶瓷器、书法、绘画为特色。', '上海博物馆建筑总面积39200平方米，建筑高度29.5米。建筑造型寓意\'天圆地方\'，上方为圆形的穹顶，下方为方形的基座。外立面采用花岗岩贴面，庄重典雅。馆内设有11个专题陈列室，展览面积12000平方米。', '"上海博物馆以青铜器、陶瓷器、书画为三大特色收藏。青铜器收藏以商周时期为主，包括大克鼎、大盂鼎等国宝级文物。陶瓷器收藏涵盖从新石器时代到清代的各个时期，尤以宋元明清瓷器为精。书画收藏包括唐宋元明清各代名家作品，如《淳化阁帖》等。"', '上海博物馆开展丰富的公众教育活动，包括专题讲座、工作坊、亲子活动等。定期举办\'上博讲坛\'，邀请国内外专家学者讲解艺术文化。开设\'上博学院\'，面向青少年开展传统文化教育。举办\'博物馆之夜\'等特色活动，吸引年轻观众。', 1),
(4, '{"openTime":{"regularTime":"全年开放 8:30-18:00","stopEntryTime":"17:00","closeDay":"全年开放"},"ticket":{"price":"120元/人（旺季），60元/人（淡季）","isFree":false,"needReservation":false},"transportation":{"address":"陕西省西安市临潼区秦陵北路"},"contact":{"phone":"029-81399001","website":"http://www.bmy.com.cn"}}', '秦始皇兵马俑博物馆建于1974年，是在秦始皇兵马俑坑遗址上建立的遗址类博物馆。兵马俑坑是秦始皇陵的陪葬坑，1974年被当地农民发现。经过考古发掘，发现三个兵马俑坑，出土陶俑、陶马数千件，被誉为\'世界第八大奇迹\'。', '博物馆占地面积约20万平方米，建筑面积约4万平方米。一号坑展厅为拱形钢结构建筑，跨度大，空间开阔，可容纳观众同时参观。二号坑、三号坑展厅采用现代化建筑设计，保护文物的同时提供良好的参观环境。', '"兵马俑坑出土陶俑、陶马约8000件，包括将军俑、武士俑、跪射俑等。每件陶俑面部表情各异，栩栩如生。还出土有青铜兵器、战车等文物。秦始皇陵封土呈覆斗形，高约76米，是中国历史上最大的帝王陵墓。"', '博物馆开展秦文化教育活动，包括专题讲座、考古体验、文化讲座等。定期举办\'秦文化论坛\'，邀请专家学者探讨秦代历史。开设\'考古体验营\'，让青少年了解考古工作。举办\'兵马俑文化节\'，传播秦文化知识。', 1),
(5, '{"openTime":{"regularTime":"周二至周日 9:00-17:30","stopEntryTime":"16:30","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"陕西省西安市雁塔区小寨东路91号"},"contact":{"phone":"029-85257006","website":"http://www.sxhm.com"}}', '陕西历史博物馆是中国第一座大型现代化国家级博物馆，1991年建成开放。馆藏文物171万余件，上起远古人类初始阶段，下至近代社会，时间跨度长达一百多万年。陕西是中华文明的重要发祥地，历史上先后有14个王朝在陕西建都。', '博物馆建筑采用唐代建筑风格，整体布局呈\'中央殿堂、四隅崇楼\'的格局。建筑色彩采用灰白基调，庄重典雅。馆内设有7个基本陈列室，展览面积11600平方米，采用现代化展陈手段，展示陕西悠久的历史文化。', '"馆藏文物包括史前文物、商周青铜器、秦汉金银器、唐代壁画等。著名藏品有镶金兽首玛瑙杯、舞马衔杯纹银壶、三彩载乐骆驼等。唐代壁画馆收藏有章怀太子墓、懿德太子墓等出土的精美壁画，是研究唐代社会生活的重要资料。"', '博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'陕博讲坛\'，邀请专家学者讲解历史文化。开设\'陕博课堂\'，面向中小学生开展传统文化教育。举办\'博物馆之夜\'等特色活动。', 1),
(6, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"江苏省南京市玄武区中山东路321号"},"contact":{"phone":"025-84801111","website":"http://www.njmuseum.com"}}', '南京博物院是中国三大博物馆之一，其前身是1933年蔡元培等倡建的国立中央博物院，是中国创建最早的博物馆。1950年更名为南京博物院。2009年新馆建成开放，占地面积13万平方米，建筑面积8万平方米，是中国最大的博物馆之一。', '南京博物院建筑群包括历史馆、艺术馆、特展馆、民国馆、数字馆、非遗馆等六大展馆。历史馆建筑采用辽代建筑风格，气势恢宏。民国馆还原了民国时期的南京街道风貌，让观众身临其境感受民国风情。', '"馆藏文物43万余件，包括青铜器、陶瓷器、书画、织绣等。著名藏品有竹林七贤与荣启期砖画、错金银铜牛灯、金兽首形饰件等。民国馆收藏有大量民国时期文物，是研究民国历史的重要资料。非遗馆展示江苏非物质文化遗产。"', '南京博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'南博讲坛\'，邀请专家学者讲解历史文化。开设\'南博课堂\'，面向中小学生开展传统文化教育。举办\'博物馆之夜\'、\'非遗体验\'等特色活动。', 1),
(7, '{"openTime":{"regularTime":"周二至周日 9:00-17:30","stopEntryTime":"16:30","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"河南省郑州市金水区农业路8号"},"contact":{"phone":"0371-63511237","website":"http://www.chnmus.net"}}', '河南博物院创建于1927年，是中国建立较早的博物馆之一。1997年新馆建成开放，占地面积10万平方米，建筑面积7.8万平方米。河南是中华文明的重要发祥地，历史上先后有20多个朝代在河南建都，地下文物居全国首位。', '河南博物院建筑以\'中原之气\'为设计理念，主体建筑呈金字塔形，寓意中原文化的博大精深。建筑采用现代设计手法，融合中原文化元素。馆内设有9个基本陈列室，展览面积3万平方米，采用现代化展陈手段。', '"馆藏文物17万余件，以史前文物、商周青铜器、历代陶瓷器、玉器及石刻最具特色。著名藏品有贾湖骨笛、妇好鸮尊、莲鹤方壶、云纹铜禁等。贾湖骨笛是中国最早的乐器，距今约8000年。妇好鸮尊是商代青铜器的代表作。"', '河南博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'豫博讲坛\'，邀请专家学者讲解中原文化。开设\'豫博课堂\'，面向中小学生开展传统文化教育。举办\'华夏古乐团\'演出，传承古代音乐文化。', 1),
(8, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:30","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"浙江省杭州市西湖区孤山路25号"},"contact":{"phone":"0571-87971117","website":"http://www.zhejiangmuseum.com"}}', '浙江省博物馆始建于1929年，原名\'浙江省西湖博物馆\'，1973年更名为浙江省博物馆。2009年武林馆区建成开放，形成孤山馆区和武林馆区两馆并立的格局。浙江省博物馆是浙江省内最大的集收藏、陈列、研究于一体的综合性人文科学博物馆。', '浙江省博物馆分为孤山馆区和武林馆区。孤山馆区位于西湖孤山，建筑风格典雅，与西湖风光融为一体。武林馆区位于杭州市中心，建筑现代大气，展览设施先进。两馆区各有特色，共同展示浙江悠久的历史文化。', '"馆藏文物及标本十万余件，包括河姆渡文化、良渚文化等史前文物，越窑青瓷、龙泉青瓷等陶瓷器，以及书画、金银器等。著名藏品有河姆渡文化双鸟朝阳纹牙雕、良渚文化玉琮王、越窑青瓷等。雷峰塔地宫出土文物也是重要收藏。"', '浙江省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'浙博讲坛\'，邀请专家学者讲解浙江文化。开设\'浙博课堂\'，面向中小学生开展传统文化教育。举办\'西湖文化讲堂\'等特色活动。', 1),
(9, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"湖北省武汉市武昌区东湖路160号"},"contact":{"phone":"027-86794127","website":"http://www.hbww.org"}}', '湖北省博物馆始建于1953年，是国家一级博物馆。2007年新馆建成开放，占地面积8万平方米，建筑面积5万平方米。湖北是楚文化的发祥地，湖北省博物馆以收藏、研究、展示楚文化为特色，是了解楚文化的重要窗口。', '湖北省博物馆建筑采用楚式建筑风格，主体建筑呈\'品\'字形布局，寓意楚文化的博大精深。建筑色彩采用楚文化特色的红黑配色，庄重典雅。馆内设有11个基本陈列室，展览面积2万平方米，采用现代化展陈手段。', '"馆藏文物20万余件，其中国家一级文物945件。著名藏品有曾侯乙编钟、越王勾践剑、郢爰等。曾侯乙编钟是战国早期的大型编钟，共65件，音域宽广，音色优美，是中国古代音乐文化的瑰宝。越王勾践剑是春秋晚期的青铜剑，历经千年不锈。"', '湖北省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'鄂博讲坛\'，邀请专家学者讲解楚文化。开设\'编钟演奏会\'，让观众聆听古代音乐。举办\'楚文化体验营\'，让青少年了解楚文化。', 1),
(10, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"湖南省长沙市开福区东风路50号"},"contact":{"phone":"0731-82215821","website":"http://www.hnmuseum.com"}}', '湖南省博物馆始建于1951年，是国家一级博物馆。2017年新馆建成开放，占地面积5万平方米，建筑面积9万平方米。湖南是楚文化的重要分布区，湖南省博物馆以收藏、研究、展示马王堆汉墓文物为特色，是了解汉代文化的重要窗口。', '湖南省博物馆建筑采用现代设计理念，外观呈\'鼎\'形，寓意湖南文化的厚重。建筑采用绿色环保设计，获得国家绿色建筑三星认证。馆内设有5个基本陈列室，展览面积3万平方米，采用现代化展陈手段，特别是马王堆汉墓陈列享誉海内外。', '"馆藏文物18万余件，尤以马王堆汉墓文物最具特色。马王堆汉墓出土文物包括素纱单衣、T型帛画、辛追夫人遗体等。素纱单衣重仅49克，是世界上最轻的衣服。T型帛画色彩鲜艳，内容丰富，是研究汉代思想观念的重要资料。"', '湖南省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'湘博讲坛\'，邀请专家学者讲解湖湘文化。开设\'湘博课堂\'，面向中小学生开展传统文化教育。举办\'汉代文化体验\'等特色活动。', 1),
(11, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"四川省成都市青羊区浣花南路251号"},"contact":{"phone":"028-65521555","website":"http://www.scmuseum.cn"}}', '四川博物院始建于1941年，原名\'四川博物馆\'，1952年更名为四川博物院。2009年新馆建成开放，占地面积3万平方米，建筑面积3.2万平方米。四川博物院是西南地区最大的综合性博物馆，馆藏文物26万余件，以巴蜀文化为特色。', '四川博物院建筑采用现代设计理念，外观简洁大方，与浣花溪公园环境融为一体。建筑采用绿色环保设计，获得国家绿色建筑认证。馆内设有14个陈列室，展览面积1.2万平方米，采用现代化展陈手段，展示四川悠久的历史文化。', '"馆藏文物26万余件，其中珍贵文物5万余件，以巴蜀青铜器、汉代画像砖最具特色。著名藏品有三星堆青铜面具、金沙太阳神鸟、东汉说唱俑等。三星堆青铜面具造型奇特，是研究古蜀文明的重要资料。汉代画像砖内容丰富，反映汉代社会生活。"', '四川博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'川博讲坛\'，邀请专家学者讲解巴蜀文化。开设\'川博课堂\'，面向中小学生开展传统文化教育。举办\'巴蜀文化体验\'等特色活动。', 1),
(12, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一闭馆（法定节假日除外）"},"ticket":{"price":"免费","isFree":true,"needReservation":true},"transportation":{"address":"广东省广州市天河区珠江东路2号"},"contact":{"phone":"020-84640909","website":"http://www.gdmuseum.com"}}', '广东省博物馆始建于1959年，原名\'广东省博物馆\'，2010年新馆建成开放。新馆位于广州市天河区珠江新城，占地面积5万平方米，建筑面积6.6万平方米。广东省博物馆是广东省唯一的省级综合博物馆，以岭南文化为特色。', '广东省博物馆新馆建筑采用\'宝盒\'造型，寓意岭南文化的博大精深。建筑外观呈不规则多边形，采用镂空设计，融合岭南传统建筑元素。馆内设有6个基本陈列室，展览面积2万平方米，采用现代化展陈手段，展示岭南文化。', '"馆藏文物16万余件，以岭南文物、潮州木雕、广彩瓷器为特色。著名藏品有潮州金漆木雕大神龛、广彩开光人物瓶、南越王墓出土文物等。潮州木雕工艺精湛，是岭南传统工艺的代表。广彩瓷器色彩艳丽，是中西文化交融的产物。"', '广东省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举办\'粤博讲坛\'，邀请专家学者讲解岭南文化。开设\'粤博课堂\'，面向中小学生开展传统文化教育。举办\'岭南文化体验\'等特色活动。', 1),
(13, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"天津博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '天津博物馆历史悠久，收藏丰富，是重要的文化机构。', '天津博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"天津博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '天津博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(14, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"重庆中国三峡博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '重庆中国三峡博物馆历史悠久，收藏丰富，是重要的文化机构。', '重庆中国三峡博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"重庆中国三峡博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '重庆中国三峡博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(15, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"山东博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '山东博物馆历史悠久，收藏丰富，是重要的文化机构。', '山东博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"山东博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '山东博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(16, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"辽宁省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '辽宁省博物馆历史悠久，收藏丰富，是重要的文化机构。', '辽宁省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"辽宁省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '辽宁省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(17, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"吉林省博物院地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '吉林省博物院历史悠久，收藏丰富，是重要的文化机构。', '吉林省博物院建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"吉林省博物院馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '吉林省博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(18, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"黑龙江省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '黑龙江省博物馆历史悠久，收藏丰富，是重要的文化机构。', '黑龙江省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"黑龙江省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '黑龙江省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(19, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"福建博物院地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '福建博物院历史悠久，收藏丰富，是重要的文化机构。', '福建博物院建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"福建博物院馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '福建博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(20, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"安徽博物院地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '安徽博物院历史悠久，收藏丰富，是重要的文化机构。', '安徽博物院建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"安徽博物院馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '安徽博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(21, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"河北博物院地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '河北博物院历史悠久，收藏丰富，是重要的文化机构。', '河北博物院建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"河北博物院馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '河北博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(22, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"山西博物院地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '山西博物院历史悠久，收藏丰富，是重要的文化机构。', '山西博物院建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"山西博物院馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '山西博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(23, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"江西省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '江西省博物馆历史悠久，收藏丰富，是重要的文化机构。', '江西省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"江西省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '江西省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(24, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"广西壮族自治区博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '广西壮族自治区博物馆历史悠久，收藏丰富，是重要的文化机构。', '广西壮族自治区博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"广西壮族自治区博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '广西壮族自治区博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(25, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"海南省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '海南省博物馆历史悠久，收藏丰富，是重要的文化机构。', '海南省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"海南省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '海南省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(26, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"贵州省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '贵州省博物馆历史悠久，收藏丰富，是重要的文化机构。', '贵州省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"贵州省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '贵州省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(27, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"云南省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '云南省博物馆历史悠久，收藏丰富，是重要的文化机构。', '云南省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"云南省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '云南省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(28, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"西藏博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '西藏博物馆历史悠久，收藏丰富，是重要的文化机构。', '西藏博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"西藏博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '西藏博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(29, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"甘肃省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '甘肃省博物馆历史悠久，收藏丰富，是重要的文化机构。', '甘肃省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"甘肃省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '甘肃省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(30, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"青海省博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '青海省博物馆历史悠久，收藏丰富，是重要的文化机构。', '青海省博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"青海省博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '青海省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(31, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"内蒙古博物院地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '内蒙古博物院历史悠久，收藏丰富，是重要的文化机构。', '内蒙古博物院建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"内蒙古博物院馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '内蒙古博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(32, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"宁夏博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '宁夏博物馆历史悠久，收藏丰富，是重要的文化机构。', '宁夏博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"宁夏博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '宁夏博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(33, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"新疆维吾尔自治区博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '新疆维吾尔自治区博物馆历史悠久，收藏丰富，是重要的文化机构。', '新疆维吾尔自治区博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"新疆维吾尔自治区博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '新疆维吾尔自治区博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(34, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"台北故宫博物院地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '台北故宫博物院历史悠久，收藏丰富，是重要的文化机构。', '台北故宫博物院建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"台北故宫博物院馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '台北故宫博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(35, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"香港历史博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '香港历史博物馆历史悠久，收藏丰富，是重要的文化机构。', '香港历史博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"香港历史博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '香港历史博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(36, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"香港艺术馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '香港艺术馆历史悠久，收藏丰富，是重要的文化机构。', '香港艺术馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"香港艺术馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '香港艺术馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(37, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"澳门博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '澳门博物馆历史悠久，收藏丰富，是重要的文化机构。', '澳门博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"澳门博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '澳门博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1),
(38, '{"openTime":{"regularTime":"周二至周日 9:00-17:00","stopEntryTime":"16:00","closeDay":"周一（法定节假日除外）","holidayNotice":"节假日开放时间请关注公告"},"ticket":{"price":"免费","isFree":true,"needReservation":true,"idRequired":"凭身份证入馆","discountPolicy":["未成年人、学生、老年人优先","残疾人凭残疾证免费"]},"rules":{"allowed":["拍照时请关闭闪光灯","可携带饮用水入馆"],"forbidden":["禁止携带宠物入馆","禁止触摸展品","禁止大声喧哗"]},"transportation":{"address":"澳门艺术博物馆地址","metro":"地铁线路信息","bus":"公交线路信息"},"services":{"hasGuide":true,"hasStorage":true,"hasRestaurant":true,"hasAccessibility":true,"hasRestArea":true,"hasWiFi":true},"contact":{"phone":"咨询电话","email":"museum@example.com","complaintPhone":"投诉建议电话","website":"官方网站"}}', '澳门艺术博物馆历史悠久，收藏丰富，是重要的文化机构。', '澳门艺术博物馆建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。', '"澳门艺术博物馆馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。"', '澳门艺术博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。', 1);

-- ============================================
-- 博物馆文物表数据
-- 共 126 条
-- ============================================
DELETE FROM `museum_artifact`;
INSERT INTO `museum_artifact` (
  `id`, `museum_id`, `name`, `period`, `image`, `description`, `category`, `basic_info`, `appearance`, `historical_value`, `is_active`
) VALUES
(1, 1, '清明上河图', '北宋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '中国十大传世名画之一，描绘了北宋都城汴京的繁华景象。', 'painting', NULL, NULL, NULL, 1),
(2, 1, '千里江山图', '北宋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '北宋王希孟创作的青绿山水画，是中国十大传世名画之一。', 'painting', NULL, NULL, NULL, 1),
(3, 34, '翠玉白菜', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '清代玉雕作品，以翠玉雕刻成白菜形状，栩栩如生。', 'jade', NULL, NULL, NULL, 1),
(4, 34, '毛公鼎', '西周', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西周晚期青铜重器，内壁铸有497字铭文，是现存铭文最长的青铜器。', 'bronze', NULL, NULL, NULL, 1),
(5, 34, '散氏盘', '西周', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西周晚期青铜器，铭文记载了散国与矢国的土地契约。', 'bronze', NULL, NULL, NULL, 1),
(6, 2, '地动仪模型', '东汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '张衡发明的地动仪复原模型，世界上第一台地震仪器。', 'scientific', NULL, NULL, NULL, 1),
(7, 2, '水运仪象台模型', '北宋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '苏颂设计的天文钟楼复原模型，集天文观测、计时报时于一体。', 'scientific', NULL, NULL, NULL, 1),
(8, 2, '指南车模型', '三国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '三国时期马钧发明的指南车复原模型，古代导航工具。', 'scientific', NULL, NULL, NULL, 1),
(9, 2, '浑仪模型', '明代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '古代天文观测仪器模型，用于测量天体位置。', 'scientific', NULL, NULL, NULL, 1),
(10, 3, '大克鼎', '西周', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西周孝王时期青铜重器，内壁铸有290字铭文。', 'bronze', NULL, NULL, NULL, 1),
(11, 3, '大盂鼎', '西周', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西周康王时期青铜重器，铭文记载了康王对盂的册命。', 'bronze', NULL, NULL, NULL, 1),
(12, 9, '越王勾践剑', '春秋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '春秋时期越王勾践的佩剑，千年不锈，锋利如初。', 'bronze', NULL, NULL, NULL, 1),
(13, 3, '商鞅方升', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '战国时期秦国标准量器，铭文记载了商鞅变法统一度量衡。', 'bronze', NULL, NULL, NULL, 1),
(14, 3, '淳化阁帖', '北宋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '北宋淳化年间刻制的法帖，收录了历代名家书法。', 'ancient_book', NULL, NULL, NULL, 1),
(15, 4, '兵马俑', '秦代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '秦始皇陵陪葬坑出土的陶质武士俑，被誉为世界第八大奇迹。', 'terracotta', NULL, NULL, NULL, 1),
(16, 4, '铜车马', '秦代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '秦始皇陵出土的青铜车马模型，工艺精湛，造型逼真。', 'bronze', NULL, NULL, NULL, 1),
(17, 4, '石铠甲', '秦代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '秦始皇陵出土的石质铠甲，用于陪葬的防护装备。', 'stone', NULL, NULL, NULL, 1),
(18, 4, '青铜鹤', '秦代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '秦始皇陵出土的青铜水禽，展现了秦代青铜铸造工艺。', 'bronze', NULL, NULL, NULL, 1),
(19, 5, '镶金兽首玛瑙杯', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '唐代何家村窖藏出土，海内外孤品，国之重宝。', 'gem', NULL, NULL, NULL, 1),
(20, 5, '舞马衔杯纹银壶', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '唐代金银器精品，壶身饰有舞马衔杯图案。', 'gold_silver', NULL, NULL, NULL, 1),
(21, 5, '三彩载乐骆驼俑', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '唐三彩精品，骆驼背上载有乐舞人物，生动传神。', 'ceramic', NULL, NULL, NULL, 1),
(22, 5, '何家村窖藏', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '唐代重要考古发现，出土大量金银器、玉器等珍贵文物。', 'gold_silver', NULL, NULL, NULL, 1),
(23, 6, '竹林七贤砖画', '南朝', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '南朝墓葬出土的模印砖画，描绘竹林七贤与荣启期。', 'brick', NULL, NULL, NULL, 1),
(24, 6, '错金银铜牛灯', '东汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '东汉青铜灯具，采用错金银工艺，设计精巧。', 'bronze', NULL, NULL, NULL, 1),
(25, 6, '金兽首形饰件', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西汉金器精品，以黄金铸造的兽首形装饰件。', 'gold_silver', NULL, NULL, NULL, 1),
(26, 6, '青花瓷瓶', '明代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '明代永乐年间青花瓷精品，造型优美，纹饰典雅。', 'ceramic', NULL, NULL, NULL, 1),
(27, 7, '贾湖骨笛', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '距今约8000年的骨笛，是中国最早的乐器实物。', 'bone', NULL, NULL, NULL, 1),
(28, 7, '妇好鸮尊', '商代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '商代晚期青铜器，造型为鸮形，是商王武丁配偶妇好的陪葬品。', 'bronze', NULL, NULL, NULL, 1),
(29, 7, '莲鹤方壶', '春秋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '春秋时期青铜器，壶盖立有莲花与仙鹤，造型优美。', 'bronze', NULL, NULL, NULL, 1),
(30, 7, '云纹铜禁', '春秋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '春秋时期青铜禁，饰有精美云纹，是失蜡法铸造的代表。', 'bronze', NULL, NULL, NULL, 1),
(31, 8, '河姆渡双鸟朝阳纹牙雕', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '河姆渡文化牙雕精品，刻有双鸟朝阳图案。', 'ivory', NULL, NULL, NULL, 1),
(32, 8, '良渚玉琮王', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '良渚文化玉器精品，是目前发现的最大的玉琮。', 'jade', NULL, NULL, NULL, 1),
(33, 8, '越窑青瓷', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '唐代越窑青瓷精品，釉色青翠，如冰似玉。', 'ceramic', NULL, NULL, NULL, 1),
(34, 8, '雷峰塔出土文物', '五代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '雷峰塔地宫出土的佛教文物，包括阿育王塔等。', 'gold_silver', NULL, NULL, NULL, 1),
(35, 9, '曾侯乙编钟', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '战国时期曾国编钟，全套65件，是中国古代音乐文化的瑰宝。', 'bronze', NULL, NULL, NULL, 1),

(37, 9, '郢爰', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '战国时期楚国金币，是中国最早的黄金货币之一。', 'gold_silver', NULL, NULL, NULL, 1),
(38, 9, '编磬', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '曾侯乙墓出土的石质打击乐器，与编钟配套使用。', 'stone', NULL, NULL, NULL, 1),
(39, 10, '素纱单衣', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '马王堆汉墓出土的丝织品，重量仅49克，薄如蝉翼。', 'textile', NULL, NULL, NULL, 1),
(40, 10, 'T型帛画', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '马王堆汉墓出土的帛画，描绘了天上、人间、地下的景象。', 'painting', NULL, NULL, NULL, 1),
(41, 10, '辛追夫人遗体', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '马王堆汉墓出土的女尸，保存完好，是世界防腐史上的奇迹。', 'other', NULL, NULL, NULL, 1),
(42, 10, '马王堆漆器', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '马王堆汉墓出土的漆器，工艺精湛，纹饰华美。', 'lacquer', NULL, NULL, NULL, 1),
(43, 11, '三星堆青铜面具', '商代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '三星堆遗址出土的青铜面具，造型奇特，神秘莫测。', 'bronze', NULL, NULL, NULL, 1),
(44, 11, '金沙太阳神鸟', '商代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '金沙遗址出土的金饰，图案为四只神鸟围绕太阳飞翔。', 'gold_silver', NULL, NULL, NULL, 1),
(45, 11, '东汉说唱俑', '东汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '东汉陶俑，刻画说唱艺人神态，生动传神。', 'terracotta', NULL, NULL, NULL, 1),
(46, 11, '巴蜀青铜器', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '巴蜀文化青铜器，具有浓郁的地方特色。', 'bronze', NULL, NULL, NULL, 1),
(47, 12, '潮州金漆木雕大神龛', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '潮州木雕精品，采用多层镂雕技法，金碧辉煌。', 'wood', NULL, NULL, NULL, 1),
(48, 12, '广彩开光人物瓶', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '广州织金彩瓷精品，色彩艳丽，纹饰繁复。', 'ceramic', NULL, NULL, NULL, 1),
(49, 12, '南越王墓文物', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '南越王墓出土的青铜器、玉器等珍贵文物。', 'bronze', NULL, NULL, NULL, 1),
(50, 12, '端砚', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '中国四大名砚之首，石质细腻，发墨优良。', 'stone', NULL, NULL, NULL, 1),
(51, 13, '太保鼎', '西周', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西周早期青铜重器，内壁铸有太保字样铭文。', 'bronze', NULL, NULL, NULL, 1),
(52, 13, '乾隆款珐琅彩芙蓉锦鸡图瓶', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '清代宫廷珐琅彩瓷精品，色彩艳丽，画工精细。', 'ceramic', NULL, NULL, NULL, 1),
(53, 13, '雪景寒林图', '北宋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '北宋范宽创作的山水画，气势磅礴。', 'painting', NULL, NULL, NULL, 1),
(54, 14, '战国青铜编钟', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '巴人文化青铜编钟，展现了巴国的音乐文化。', 'bronze', NULL, NULL, NULL, 1),
(55, 14, '汉代画像石', '东汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '东汉墓葬画像石，刻画了汉代社会生活场景。', 'stone', NULL, NULL, NULL, 1),
(56, 14, '三峡移民文物', '现代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '三峡工程移民搬迁中抢救性保护的文物。', 'other', NULL, NULL, NULL, 1),
(57, 15, '龙山文化黑陶蛋壳杯', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '龙山文化黑陶精品，器壁薄如蛋壳，工艺精湛。', 'ceramic', NULL, NULL, NULL, 1),
(58, 15, '大汶口文化彩陶', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '大汶口文化彩陶器，纹饰古朴，色彩鲜艳。', 'ceramic', NULL, NULL, NULL, 1),
(59, 15, '鲁国青铜器', '春秋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '鲁国故城出土的青铜礼器，反映了鲁国的礼制文化。', 'bronze', NULL, NULL, NULL, 1),
(60, 16, '红山文化玉猪龙', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '红山文化玉器代表作，造型为猪首龙身，是龙的起源之一。', 'jade', NULL, NULL, NULL, 1),
(61, 16, '辽代瓷器', '辽代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '辽代白瓷、辽三彩等，具有浓郁的游牧民族特色。', 'ceramic', NULL, NULL, NULL, 1),
(62, 16, '清代书画', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '清代名家书画作品，包括郎世宁等宫廷画师作品。', 'painting', NULL, NULL, NULL, 1),
(63, 17, '高句丽壁画墓', '高句丽', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '高句丽墓葬壁画，描绘了高句丽的社会生活与神话传说。', 'painting', NULL, NULL, NULL, 1),
(64, 17, '渤海国文物', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '渤海国时期的文物，展现了海东盛国的文化风貌。', 'other', NULL, NULL, NULL, 1),
(65, 17, '辽金文物', '辽金', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '辽金时期的文物，反映了东北地区的民族融合。', 'other', NULL, NULL, NULL, 1),
(66, 18, '渤海国上京龙泉府遗址文物', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '渤海国都城遗址出土的文物，包括建筑构件、生活用具等。', 'other', NULL, NULL, NULL, 1),
(67, 18, '金代铜坐龙', '金代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '金代青铜坐龙，造型独特，是金代皇室的象征。', 'bronze', NULL, NULL, NULL, 1),
(68, 18, '赫哲族鱼皮服饰', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '赫哲族传统鱼皮制作技艺的服饰，是民族文化的瑰宝。', 'textile', NULL, NULL, NULL, 1),
(69, 19, '德化白瓷', '明代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '德化窑白瓷精品，釉色温润如玉，被誉为中国白。', 'ceramic', NULL, NULL, NULL, 1),
(70, 19, '海上丝绸之路文物', '宋元', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '泉州港出土的外销瓷、香料等海上丝绸之路文物。', 'ceramic', NULL, NULL, NULL, 1),
(71, 19, '福州脱胎漆器', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '福州脱胎漆器，工艺独特，轻巧美观。', 'lacquer', NULL, NULL, NULL, 1),
(72, 20, '徽州三雕', '明清', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '徽州木雕、石雕、砖雕，工艺精湛，题材丰富。', 'wood', NULL, NULL, NULL, 1),
(73, 20, '文房四宝', '历代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '安徽是宣纸、宣笔、徽墨、歙砚的故乡，文房四宝精品荟萃。', 'other', NULL, NULL, NULL, 1),
(74, 20, '楚大鼎', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '战国时期楚国青铜大鼎，是楚国青铜器的代表作。', 'bronze', NULL, NULL, NULL, 1),
(75, 21, '长信宫灯', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '满城汉墓出土的青铜灯，设计精巧，可调节光照方向。', 'bronze', NULL, NULL, NULL, 1),
(76, 21, '金缕玉衣', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '满城汉墓出土的金缕玉衣，由2498片玉片和金丝编缀而成。', 'jade', NULL, NULL, NULL, 1),
(77, 21, '错金银鸟篆文壶', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '满城汉墓出土的青铜壶，采用错金银工艺，纹饰华美。', 'bronze', NULL, NULL, NULL, 1),
(78, 22, '晋侯鸟尊', '西周', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西周晋国青铜器，造型为鸟形，是晋国青铜器的代表作。', 'bronze', NULL, NULL, NULL, 1),
(79, 22, '北朝壁画', '北朝', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '北朝墓葬壁画，描绘了墓主人生前生活与死后世界。', 'painting', NULL, NULL, NULL, 1),
(80, 22, '山西古建筑模型', '历代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '山西现存古建筑的精美模型，展现了山西古建筑的魅力。', 'other', NULL, NULL, NULL, 1),
(81, 23, '海昏侯墓金器', '西汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '海昏侯墓出土的大量金器，包括金饼、马蹄金等。', 'gold_silver', NULL, NULL, NULL, 1),
(82, 23, '景德镇瓷器', '明清', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '景德镇御窑厂出土的瓷器精品，代表了明清官窑的最高水平。', 'ceramic', NULL, NULL, NULL, 1),
(83, 23, '赣南客家文物', '明清', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '赣南客家地区的民俗文物，展现了客家文化特色。', 'other', NULL, NULL, NULL, 1),
(84, 24, '翔鹭纹铜鼓', '汉代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '广西出土的铜鼓，饰有翔鹭纹，是壮族文化的象征。', 'bronze', NULL, NULL, NULL, 1),
(85, 24, '壮族织锦', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '壮族传统织锦，图案精美，色彩艳丽。', 'textile', NULL, NULL, NULL, 1),
(86, 24, '花山岩画', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '广西花山岩画的拓片，记录了古代骆越人的祭祀场景。', 'painting', NULL, NULL, NULL, 1),
(87, 25, '西沙群岛出水文物', '宋代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西沙群岛海域出水的宋代瓷器等水下文化遗产，见证了南海海上丝绸之路的繁荣。', 'ceramic', NULL, NULL, NULL, 1),
(88, 25, '黎族织锦', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '黎族传统织锦技艺，是世界非物质文化遗产。', 'textile', NULL, NULL, NULL, 1),
(89, 25, '海南黄花梨家具', '明清', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '海南黄花梨制作的古典家具，木纹优美，价值连城。', 'wood', NULL, NULL, NULL, 1),
(90, 26, '夜郎青铜器', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '夜郎国时期的青铜器，展现了神秘的夜郎文化。', 'bronze', NULL, NULL, NULL, 1),
(91, 26, '苗族银饰', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '苗族传统银饰，工艺精湛，造型独特。', 'gold_silver', NULL, NULL, NULL, 1),
(92, 26, '侗族鼓楼模型', '现代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '侗族鼓楼的精美模型，展现了侗族建筑艺术。', 'wood', NULL, NULL, NULL, 1),
(93, 27, '古滇国青铜器', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '古滇国青铜器，包括贮贝器、铜鼓等，造型独特。', 'bronze', NULL, NULL, NULL, 1),
(94, 27, '大理国经卷', '宋代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '大理国时期的佛教经卷，是研究大理国历史的重要资料。', 'ancient_book', NULL, NULL, NULL, 1),
(95, 27, '纳西族东巴文经书', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '纳西族东巴文写成的经书，是世界上唯一存活的象形文字。', 'ancient_book', NULL, NULL, NULL, 1),
(96, 28, '唐卡', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '藏族传统绘画艺术，绘制精美，色彩艳丽。', 'painting', NULL, NULL, NULL, 1),
(97, 28, '藏文大藏经', '明代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '藏文佛教大藏经，是藏族文化的宝库。', 'ancient_book', NULL, NULL, NULL, 1),
(98, 28, '藏族服饰', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '藏族传统服饰，色彩鲜艳，装饰华美。', 'textile', NULL, NULL, NULL, 1),
(99, 29, '马踏飞燕', '东汉', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '东汉青铜雕塑，骏马三足腾空，一足踏飞燕，是中国旅游标志。', 'bronze', NULL, NULL, NULL, 1),
(100, 29, '彩陶', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '甘肃出土的彩陶，纹饰精美，是中国彩陶的故乡。', 'ceramic', NULL, NULL, NULL, 1),
(101, 29, '敦煌经卷', '唐代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '敦煌藏经洞出土的经卷，是研究古代文化的珍贵资料。', 'ancient_book', NULL, NULL, NULL, 1),
(102, 30, '彩陶罐', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '青海出土的马家窑文化彩陶，纹饰优美。', 'ceramic', NULL, NULL, NULL, 1),
(103, 30, '藏族银器', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '藏族传统银器，工艺精湛，造型独特。', 'gold_silver', NULL, NULL, NULL, 1),
(104, 30, '青海湖祭海碑', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '清代祭海碑，记录了清政府对青海湖的祭祀活动。', 'stone', NULL, NULL, NULL, 1),
(105, 31, '匈奴鹰顶金冠饰', '战国', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '匈奴贵族金冠饰，造型为鹰顶，展现了草原文化。', 'gold_silver', NULL, NULL, NULL, 1),
(106, 31, '鲜卑金饰', '魏晋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '鲜卑族金饰，工艺精湛，具有浓郁的草原特色。', 'gold_silver', NULL, NULL, NULL, 1),
(107, 31, '蒙古族服饰', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '蒙古族传统服饰，色彩鲜艳，装饰华美。', 'textile', NULL, NULL, NULL, 1),
(108, 32, '贺兰山岩画', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '贺兰山岩画拓片，记录了远古人类的生活场景。', 'stone', NULL, NULL, NULL, 1),
(109, 32, '西夏王陵出土文物', '西夏', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西夏王陵出土的文物，包括瓦当、鸱吻等建筑构件。', 'ceramic', NULL, NULL, NULL, 1),
(110, 32, '西夏文经卷', '西夏', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西夏文写成的佛教经卷，是研究西夏文化的重要资料。', 'ancient_book', NULL, NULL, NULL, 1),
(111, 33, '楼兰美女干尸', '青铜时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '楼兰遗址出土的古代干尸，保存完好，被誉为楼兰美女。', 'other', NULL, NULL, NULL, 1),
(112, 33, '丝绸之路织物', '汉唐', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '丝绸之路出土的丝织品，展现了中西文化交流。', 'textile', NULL, NULL, NULL, 1),
(113, 33, '克孜尔石窟壁画', '魏晋', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '克孜尔石窟壁画临摹品，展现了龟兹佛教艺术。', 'painting', NULL, NULL, NULL, 1),

(116, 34, '肉形石', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '天然玉石，形似红烧肉，惟妙惟肖。', 'jade', NULL, NULL, NULL, 1),
(117, 34, '快雪时晴帖', '晋代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '王羲之书法作品，是古代书法的巅峰之作。', 'ancient_book', NULL, NULL, NULL, 1),
(118, 35, '香港考古出土文物', '新石器时代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '香港地区出土的史前文物，包括陶器、石器等。', 'ceramic', NULL, NULL, NULL, 1),
(119, 35, '香港民俗文物', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '香港传统民俗文物，展现了香港的民间生活。', 'other', NULL, NULL, NULL, 1),
(120, 35, '香港历史文献', '近代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '香港历史文献资料，记录了香港的发展历程。', 'ancient_book', NULL, NULL, NULL, 1),
(121, 36, '岭南画派作品', '近代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '岭南画派名家作品，包括高剑父、关山月等人的画作。', 'painting', NULL, NULL, NULL, 1),
(122, 36, '香港当代艺术', '现代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '香港当代艺术家的作品，展现了香港的艺术创新。', 'painting', NULL, NULL, NULL, 1),
(123, 36, '中国古代书画', '历代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '中国古代书画精品，包括山水、花鸟、人物等题材。', 'painting', NULL, NULL, NULL, 1),
(124, 37, '澳门历史文献', '明清', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '澳门历史文献，记录了澳门的中西文化交流史。', 'ancient_book', NULL, NULL, NULL, 1),
(125, 37, '澳门民俗文物', '清代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '澳门传统民俗文物，展现了澳门的民间生活。', 'other', NULL, NULL, NULL, 1),
(126, 37, '澳门宗教文物', '明清', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '澳门宗教文物，包括天主教、佛教等相关文物。', 'religious', NULL, NULL, NULL, 1),
(127, 38, '澳门历史绘画', '近代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '描绘澳门历史风貌的绘画作品，记录了澳门的变迁。', 'painting', NULL, NULL, NULL, 1),
(128, 38, '西方绘画', '近代', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '西方绘画作品，展现了西方艺术在澳门的传播。', 'painting', NULL, NULL, NULL, 1),
(129, 38, '中国书画', '明清', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', '中国明清书画作品，展现了传统艺术的魅力。', 'painting', NULL, NULL, NULL, 1);

-- ============================================
-- 博物馆文物详情表数据
-- 共 78 条
-- ============================================
DELETE FROM `museum_artifact_detail`;
INSERT INTO `museum_artifact_detail` (
  `id`, `name`, `period`, `description`, `image`, `type`, `basic_info`, `appearance`, `historical_value`, `artifact_level`, `related_story`, `protection_status`, `cultural_significance`
) VALUES
(1, '清明上河图', '北宋', '中国十大传世名画之一，描绘了北宋都城汴京的繁华景象。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'painting', '{"periodDetail":"北宋 徽宗 宣和年间 公元1100-1125年","material":"绢本设色","dimensions":"纵24.8cm，横528.7cm","collection":"故宫博物院 藏","excavation":"明代从民间入藏宫廷，现藏故宫博物院"}', '全图规模宏大，结构严谨，大致分为汴京郊野春光、汴河场景、城内街市三部分。画中人物数量多达814人，牲畜60多匹，船只28艘，房屋楼宇30多栋，车20辆，轿8顶，树木170多棵。人物衣着各异，神情生动，栩栩如生。全图采用散点透视构图法，生动记录了北宋都城汴京的城市面貌和社会各阶层人民的生活状况。', '《清明上河图》是北宋画家张择端创作的风俗画，是中国十大传世名画之一。作品以长卷形式，采用散点透视构图法，生动记录了中国十二世纪北宋汴京的城市面貌和当时社会各阶层人民的生活状况。是汴京当年繁荣的见证，也是北宋城市经济情况的写照，具有极高的历史价值和艺术价值。', '国家一级文物，国宝级珍品', '据史书记载，张择端完成此画后，将其献给了宋徽宗赵佶。宋徽宗非常喜爱，亲自用瘦金体题写了"清明上河图"五个字，并钤上了双龙小印。此后，这幅画历经宋、元、明、清多个朝代，多次易主，曾被严嵩、乾隆等收藏，最终入藏故宫博物院。', '现藏于故宫博物院，为故宫的镇院之宝之一。由于年代久远，画卷已经出现了一些破损和褪色，故宫博物院对其进行了精心的修复和保护，采用现代科技手段进行监测和维护，确保这幅国宝级文物能够长久保存。', '《清明上河图》不仅是中国绘画史上的杰作，也是研究北宋社会历史的重要资料。它生动地展现了北宋都城汴京的繁华景象，反映了当时的社会风俗、经济状况、建筑风格等多个方面，为我们了解北宋社会提供了直观的视觉资料，具有不可替代的文化价值。'),
(2, '千里江山图', '北宋', '北宋王希孟创作的青绿山水画，是中国十大传世名画之一。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'painting', '{"periodDetail":"北宋 政和三年 公元1113年","material":"绢本设色","dimensions":"纵51.5cm，横1191.5cm","collection":"故宫博物院 藏","excavation":"清宫旧藏"}', '画卷长达近12米，以青绿山水为主调，描绘了连绵起伏的群山、浩渺无际的江河、错落有致的村落、若隐若现的渔舟。画面气势恢宏，构图严谨，色彩艳丽而不失典雅。山石以青绿重彩描绘，层次分明；水波以细笔勾勒，波光粼粼；点缀其间的村落、渔舟、人物虽小如豆，却刻画精细，神态生动。', '《千里江山图》是北宋画家王希孟的传世之作，也是中国青绿山水画的巅峰之作。王希孟创作此画时年仅18岁，得到宋徽宗的亲自指点。此画以其宏大的气势、精湛的技艺、艳丽的色彩，充分展现了北宋青绿山水画的最高成就，对后世青绿山水画的发展产生了深远影响。', '国家一级文物，国宝级珍品', '王希孟是北宋宫廷画院的学生，得到宋徽宗赵佶的亲自传授。他在18岁时创作了这幅《千里江山图》，献给宋徽宗。可惜天妒英才，王希孟在创作此画后不久便英年早逝，年仅20余岁。这幅画成为他唯一的传世之作，却足以让他名垂青史。', '现藏于故宫博物院，保存状况良好。由于画卷采用青绿重彩，色彩保存较好，但绢本已有一定程度的老化。故宫博物院采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '《千里江山图》是中国青绿山水画的代表作，它不仅展现了北宋时期青绿山水画的最高成就，也反映了宋代文人的审美情趣和对自然的热爱。画中所描绘的理想化的山水世界，寄托了古人对美好生活的向往，具有极高的艺术价值和文化价值。'),
(3, '翠玉白菜', '清代', '清代玉雕作品，以翠玉雕刻成白菜形状，栩栩如生。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'jade', '{"periodDetail":"清代 光绪年间 公元1875-1908年","material":"翠玉（翡翠）","dimensions":"高18.7cm，宽9.1cm，厚5.07cm","collection":"台北故宫博物院 藏","excavation":"清宫旧藏"}', '这件翠玉白菜以一块半白半绿的翠玉为原料，巧雕成一颗白菜。玉匠巧妙地利用玉料天然的色泽分布，将绿色部分雕成菜叶，白色部分雕成菜帮，叶上还雕有螽斯和蝗虫，栩栩如生。白菜叶片翻卷自然，叶脉清晰，菜帮洁白如雪，整体造型生动逼真，充满了生活气息。', '翠玉白菜是清代玉雕的代表作，充分展现了清代玉雕工匠高超的技艺和巧妙的构思。玉匠巧妙地利用玉料天然的色泽分布，因材施艺，将一块普通的翠玉雕成了栩栩如生的白菜，这种巧雕技艺令人叹为观止。翠玉白菜不仅是一件精美的艺术品，也是研究清代玉雕工艺的重要实物资料。', '国家一级文物', '翠玉白菜原陈设于紫禁城的永和宫，是光绪帝瑾妃的嫁妆。白菜寓意清白，象征新娘的纯洁；螽斯和蝗虫寓意多子多孙，象征子孙绵延。这件玉雕不仅是一件艺术品，也承载着美好的祝愿。后随文物南迁，现藏于台北故宫博物院，成为该院最著名的文物之一。', '现藏于台北故宫博物院，是该院最受欢迎的展品之一。由于翠玉质地坚硬，保存状况良好。博物院采用恒温恒湿的展示环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '翠玉白菜是中国玉雕艺术的杰作，它不仅展现了清代玉雕的高超技艺，也体现了中国人的审美情趣和文化寓意。白菜寓意清白，螽斯寓意多子，这种将艺术与寓意相结合的创作手法，是中国传统文化的特色，具有深厚的文化内涵。'),
(4, '毛公鼎', '西周', '西周晚期青铜重器，内壁铸有497字铭文，是现存铭文最长的青铜器。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西周 宣王时期 公元前827-前782年","material":"青铜铸造","dimensions":"通高53.8cm，口径47.9cm，重34.7kg","collection":"台北故宫博物院 藏","excavation":"清道光末年陕西岐山出土"}', '毛公鼎造型庄重，立耳，三蹄足，口沿下饰重环纹和弦纹。鼎身浑厚，轮廓方直，显现出不可动摇的气势。器内壁铸有铭文32行，共497字，是现存青铜器中铭文最长的一件。铭文书法遒劲，结体严谨，是西周晚期金文的代表作。', '毛公鼎是西周晚期青铜重器，因作器者为毛公而得名。鼎内铭文记载了周宣王对毛公的册命和赏赐，是研究西周晚期历史、政治、礼制的重要资料。铭文长达497字，是现存青铜器中铭文最长的一件，具有极高的史料价值。毛公鼎与散氏盘、虢季子白盘并称为西周三大青铜重器。', '国家一级文物，国宝级珍品', '毛公鼎于清道光末年在陕西岐山出土，后为陈介祺收藏。陈介祺对其珍爱有加，特意建"毛公鼎堂"以藏之。民国时期，毛公鼎几经易主，曾为叶恭绰、陈咏仁等收藏。抗战期间，为避免被日军掠夺，曾秘藏于天津。后随文物南迁，现藏于台北故宫博物院。', '现藏于台北故宫博物院，是该院的镇馆之宝之一。由于青铜器容易受到腐蚀，博物院采用了先进的保护技术，包括控制温湿度、定期检测、科学修复等措施，确保这件国宝能够长久保存。', '毛公鼎是西周青铜器的代表作，它不仅展示了西周高超的青铜铸造工艺，也反映了西周的政治制度和册命礼制。鼎内的长篇铭文，是研究西周历史、语言、文字的重要资料，具有极高的文化价值。'),
(5, '散氏盘', '西周', '西周晚期青铜器，铭文记载了散国与矢国的土地契约。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西周 厉王时期 公元前877-前841年","material":"青铜铸造","dimensions":"通高20.6cm，口径54.6cm，底径41.4cm，重18.75kg","collection":"台北故宫博物院 藏","excavation":"清乾隆初年陕西凤翔出土"}', '散氏盘造型独特，盘身浅坦，双耳，圈足。口沿下饰窃曲纹，间以兽首。盘内底铸有铭文19行，共357字。铭文记载了散国与矢国之间关于土地转让的契约，是研究西周土地制度的重要资料。铭文书法朴拙，结体宽博，是西周晚期金文的代表作。', '散氏盘是西周晚期青铜器，因作器者为散氏而得名。盘内铭文记载了散国与矢国之间关于土地转让的契约，是研究西周土地制度、法律制度的重要资料。铭文长达357字，是现存青铜器中铭文较长的器物之一，具有极高的史料价值。', '国家一级文物，国宝级珍品', '散氏盘于清乾隆初年在陕西凤翔出土，后为阮元收藏。阮元对其珍爱有加，将其收录于《积古斋钟鼎彝器款识》中。后散氏盘入藏清宫，随文物南迁，现藏于台北故宫博物院。', '现藏于台北故宫博物院，保存状况良好。由于青铜器容易受到腐蚀，博物院采用了先进的保护技术，确保这件国宝能够长久保存。', '散氏盘是西周青铜器的代表作，它不仅展示了西周高超的青铜铸造工艺，也反映了西周的土地制度和法律制度。盘内的长篇铭文，是研究西周历史、法律的重要资料，具有极高的文化价值。'),
(6, '地动仪模型', '东汉', '张衡发明的地动仪复原模型，世界上第一台地震仪器。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'scientific', '{"periodDetail":"东汉 顺帝 阳嘉元年 公元132年","material":"青铜（复原模型）","dimensions":"复原模型通高约2.5m，直径约1.8m","collection":"中国科学技术馆 藏","excavation":"复原模型，原物已失传"}', '地动仪复原模型呈酒樽形，中有都柱，外有八道，道口各有一龙首，龙首口中含铜丸。下有八只蟾蜍，张口承丸。当地震发生时，都柱倾倒，触动机关，龙首吐丸，落入蟾蜍口中，发出声响，从而测知地震方向。模型制作精细，结构清晰，直观展示了地动仪的工作原理。', '地动仪是东汉科学家张衡发明的世界上第一台地震仪器，比欧洲第一台地震仪早了1700多年。据《后汉书》记载，地动仪能够测知地震发生的方向，曾准确测出陇西地震，震惊朝野。地动仪的发明，充分展现了东汉时期中国科学技术的高超水平，是世界科技史上的里程碑。', '复原模型，具有重要科普价值', '张衡是东汉时期著名的科学家、文学家，在天文学、数学、地震学等领域都有重要贡献。他发明的地动仪，是世界上第一台地震仪器。据记载，地动仪制成后，有人报告陇西发生地震，但洛阳无震感，众人不信。几天后，陇西驿使来报，证实确有地震，众人无不叹服张衡的发明。', '现藏于中国科学技术馆，是该馆的重要展品。模型采用现代工艺制作，保存状况良好。科技馆定期对模型进行维护保养，确保其正常展示。', '地动仪是中国古代科学技术的杰出代表，它不仅展现了东汉时期中国科学技术的高超水平，也体现了中华民族的智慧和创造力。地动仪的发明，在世界科技史上占有重要地位，是中华民族的骄傲。'),
(7, '水运仪象台模型', '北宋', '苏颂设计的天文钟楼复原模型，集天文观测、计时报时于一体。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'scientific', '{"periodDetail":"北宋 元祐七年 公元1092年","material":"木、铜、铁（复原模型）","dimensions":"复原模型通高约12m，宽约7m","collection":"中国科学技术馆 藏","excavation":"复原模型，原物已失传"}', '水运仪象台复原模型是一座大型天文钟楼，通高约12米，分上、中、下三层。上层置浑仪，用于观测天体；中层置浑象，用于演示天体运行；下层设报时装置，有五层木阁，各有木人出报时刻。整座仪器以水力驱动，通过齿轮传动系统，使浑仪、浑象、报时装置协调运转，是中国古代机械制造技术的巅峰之作。', '水运仪象台是北宋科学家苏颂设计制造的大型天文钟楼，集天文观测、演示、计时报时于一体，是世界上最早的天文钟。苏颂撰写的《新仪象法要》详细记载了水运仪象台的结构和制作方法，是研究中国古代科学技术的重要文献。水运仪象台的制造，充分展现了北宋时期中国科学技术的高超水平。', '复原模型，具有重要科普价值', '苏颂是北宋时期著名的科学家、政治家，在天文学、药物学等领域都有重要贡献。他设计制造的水运仪象台，历时六年建成，是当时世界上最先进的天文仪器。苏颂撰写的《新仪象法要》，详细记载了水运仪象台的结构和制作方法，使后人能够复原这一伟大的发明。', '现藏于中国科学技术馆，是该馆的重要展品。模型采用现代工艺制作，保存状况良好。科技馆定期对模型进行维护保养，确保其正常展示。', '水运仪象台是中国古代科学技术的杰出代表，它不仅展现了北宋时期中国科学技术的高超水平，也体现了中华民族的智慧和创造力。水运仪象台的制造，在世界科技史上占有重要地位，是中华民族的骄傲。'),
(8, '指南车模型', '三国', '三国时期马钧发明的指南车复原模型，古代导航工具。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'scientific', '{"periodDetail":"三国 魏明帝时期 公元226-239年","material":"木、铜（复原模型）","dimensions":"复原模型通高约2m，长约1.5m","collection":"中国科学技术馆 藏","excavation":"复原模型，原物已失传"}', '指南车复原模型是一辆双轮车，车上立有木人，手指前方。无论车向何方行驶，车上木人始终手指南方。指南车的关键在于其内部的齿轮传动系统，通过差动齿轮原理，使木人始终保持指向南方。模型制作精细，结构清晰，直观展示了指南车的工作原理。', '指南车是三国时期马钧发明的导航工具，是中国古代机械制造技术的杰出代表。指南车不依赖磁性，而是通过齿轮传动系统实现指向功能，体现了中国古代对差动齿轮原理的掌握。指南车的发明，充分展现了中国古代机械制造技术的高超水平。', '复原模型，具有重要科普价值', '马钧是三国时期著名的机械发明家，被誉为"天下之名巧"。他发明的指南车，引起了朝野的惊叹。据记载，有人怀疑指南车的功能，马钧当众演示，无论车向何方行驶，车上木人始终手指南方，众人无不叹服。马钧还改进了织绫机，发明了龙骨水车，对中国古代生产技术的发展做出了重要贡献。', '现藏于中国科学技术馆，是该馆的重要展品。模型采用现代工艺制作，保存状况良好。科技馆定期对模型进行维护保养，确保其正常展示。', '指南车是中国古代科学技术的杰出代表，它不仅展现了三国时期中国机械制造技术的高超水平，也体现了中华民族的智慧和创造力。指南车的发明，在世界科技史上占有重要地位，是中华民族的骄傲。'),
(9, '浑仪模型', '明代', '古代天文观测仪器模型，用于测量天体位置。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'scientific', '{"periodDetail":"明代 正统年间 公元1436-1449年","material":"铜、铁（复原模型）","dimensions":"复原模型通高约3m","collection":"中国科学技术馆 藏","excavation":"复原模型，原物现存南京紫金山天文台"}', '浑仪复原模型是一架大型天文观测仪器，由多层圆环组成，包括六合仪、三辰仪、四游仪等部分。各层圆环分别代表地平圈、赤道圈、黄道圈等，通过窥管观测天体，可以测量天体的地平坐标、赤道坐标、黄道坐标。模型制作精细，结构清晰，直观展示了浑仪的工作原理。', '浑仪是中国古代重要的天文观测仪器，用于测量天体的位置。浑仪的发明和使用，充分展现了中国古代天文学的高超水平。明代正统年间铸造的浑仪，是中国现存最早的浑仪实物，现藏于南京紫金山天文台。浑仪的制造，体现了中国古代在天文学、数学、机械制造等领域的综合成就。', '复原模型，具有重要科普价值', '浑仪是中国古代天文学家的重要观测工具，历代都有制造。明代正统年间，钦天监铸造了这架浑仪，置于北京观象台。清康熙年间，传教士南怀仁设计制造了新式天文仪器，浑仪被移至南京紫金山天文台保存。这架浑仪是中国现存最早的浑仪实物，见证了中国古代天文学的发展历程。', '现藏于中国科学技术馆，是该馆的重要展品。模型采用现代工艺制作，保存状况良好。科技馆定期对模型进行维护保养，确保其正常展示。', '浑仪是中国古代天文学的杰出代表，它不仅展现了中国古代天文学的高超水平，也体现了中华民族对宇宙的探索精神。浑仪的发明和使用，在世界天文学史上占有重要地位，是中华民族的骄傲。'),
(10, '大克鼎', '西周', '西周孝王时期青铜重器，内壁铸有290字铭文。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西周 孝王时期 公元前885-前878年","material":"青铜铸造","dimensions":"通高93.1cm，口径75.6cm，重201.5kg","collection":"上海博物馆 藏","excavation":"清光绪十六年1890年陕西扶风出土"}', '大克鼎造型雄伟，立耳，三蹄足，口沿下饰窃曲纹，腹部饰波曲纹，足上部饰兽面纹。鼎身浑厚，纹饰精美，显现出庄重威严的气势。器内壁铸有铭文28行，共290字，记载了周孝王对克的册命和赏赐。铭文书法工整，结体严谨，是西周中期金文的代表作。', '大克鼎是西周中期青铜重器，因作器者为克而得名。鼎内铭文记载了周孝王对克的册命和赏赐，是研究西周中期历史、政治、礼制的重要资料。铭文长达290字，是现存青铜器中铭文较长的器物之一，具有极高的史料价值。大克鼎与大盂鼎并称为上海博物馆的镇馆之宝。', '国家一级文物，国宝级珍品', '大克鼎于清光绪十六年在陕西扶风出土，后为潘祖荫收藏。潘祖荫去世后，其弟潘祖年将大克鼎运回苏州秘藏。抗战期间，为避免被日军掠夺，潘家将大克鼎埋入地下保存。1951年，潘达于女士将大克鼎捐赠给上海博物馆，使之成为该馆的镇馆之宝。', '现藏于上海博物馆，是该馆的镇馆之宝之一。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，包括控制温湿度、定期检测、科学修复等措施，确保这件国宝能够长久保存。', '大克鼎是西周青铜器的代表作，它不仅展示了西周高超的青铜铸造工艺，也反映了西周的政治制度和册命礼制。鼎内的长篇铭文，是研究西周历史、语言、文字的重要资料，具有极高的文化价值。'),
(11, '大盂鼎', '西周', '西周康王时期青铜重器，铭文记载了康王对盂的册命。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西周 康王二十三年 公元前998年","material":"青铜铸造","dimensions":"通高101.9cm，口径153.4cm，重153.5kg","collection":"中国国家博物馆 藏","excavation":"清道光初年陕西岐山出土"}', '大盂鼎造型雄伟，立耳，三蹄足，口沿下饰饕餮纹带，足上部饰饕餮纹。鼎身浑厚，纹饰精美，显现出庄重威严的气势。器内壁铸有铭文19行，共291字，记载了周康王对盂的册命和赏赐。铭文书法古朴，结体严谨，是西周早期金文的代表作。', '大盂鼎是西周早期青铜重器，因作器者为盂而得名。鼎内铭文记载了周康王对盂的册命和赏赐，是研究西周早期历史、政治、礼制的重要资料。铭文长达291字，是现存青铜器中铭文较长的器物之一，具有极高的史料价值。', '国家一级文物，国宝级珍品', '大盂鼎于清道光初年在陕西岐山出土，后为宋金鉴、潘祖荫等收藏。潘祖荫去世后，其弟潘祖年将大盂鼎运回苏州秘藏。抗战期间，为避免被日军掠夺，潘家将大盂鼎埋入地下保存。1951年，潘达于女士将大盂鼎捐赠给国家，现藏于中国国家博物馆。', '现藏于中国国家博物馆，是该馆的镇馆之宝之一。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，确保这件国宝能够长久保存。', '大盂鼎是西周青铜器的代表作，它不仅展示了西周高超的青铜铸造工艺，也反映了西周的政治制度和册命礼制。鼎内的长篇铭文，是研究西周历史、语言、文字的重要资料，具有极高的文化价值。'),
(12, '越王勾践剑', '春秋', '春秋时期越王勾践的佩剑，千年不锈，锋利如初。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"春秋 晚期 公元前5世纪","material":"青铜铸造，表面硫化处理","dimensions":"通长55.7cm，宽4.6cm，柄长8.4cm","collection":"湖北省博物馆 藏","excavation":"1965年12月湖北江陵望山1号楚墓出土"}', '剑身近格处铸有鸟虫书铭文"越王勾践，自作用剑"八字。剑身满饰黑色菱形暗纹，剑格正面用蓝色玻璃、背面用绿松石镶成美丽的图案。剑身修长，中脊起棱，两从有刃，刃薄锋利。剑首向外翻卷作圆箍形，内铸有十一道同心圆。剑柄为圆柱体，上缠有丝绳。整个宝剑造型优美，工艺精湛，虽埋藏地下两千余年，至今仍锋利如新，光彩夺目。', '越王勾践剑是春秋时期越国国王勾践的佩剑，是中国古代青铜器中的珍品。此剑铸造工艺精湛，剑身采用硫化处理技术，使之千年不锈，充分体现了越国高超的青铜铸造技术。剑身鸟虫书铭文精美，是研究越国历史文化的重要实物资料。此剑出土于楚墓，也为研究楚越关系提供了重要线索。', '国家一级文物，国宝级珍品', '越王勾践是春秋时期越国的君主，以"卧薪尝胆"的故事闻名于世。他历经磨难，最终灭吴称霸。这把佩剑是勾践称霸后的随身佩剑，见证了越国的辉煌。1965年，此剑在湖北江陵的一座楚墓中出土，出土时完好如新，一剑划破考古人员的手指，震惊了考古界。', '现藏于湖北省博物馆，是该馆的镇馆之宝之一。由于剑身经过硫化处理，保存状况极好，至今仍光亮如新。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '越王勾践剑是中国古代青铜器的杰作，它不仅展示了春秋时期高超的青铜铸造工艺，也见证了越王勾践"卧薪尝胆"、"三千越甲可吞吴"的传奇故事。剑身的鸟虫书铭文，是研究越国文字的重要资料，具有极高的文化价值。'),
(13, '商鞅方升', '战国', '战国时期秦国标准量器，铭文记载了商鞅变法统一度量衡。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"战国 秦孝公十八年 公元前344年","material":"青铜铸造","dimensions":"通高2.3cm，长18.7cm，宽6.9cm，容积202.15ml","collection":"上海博物馆 藏","excavation":"传世品"}', '商鞅方升呈长方形，有柄，器壁刻有铭文。铭文记载了秦孝公十八年，商鞅统一度量衡，制造标准量器的事迹。方升制作规整，容积准确，是秦国统一度量衡的标准量器。器壁铭文清晰，书法工整，是研究秦国文字的重要资料。', '商鞅方升是战国时期秦国标准量器，铭文记载了商鞅变法统一度量衡的重要历史事件。商鞅变法是秦国强大的基础，统一度量衡是变法的重要内容之一。商鞅方升是研究商鞅变法、秦国度量衡制度的重要实物资料，具有极高的史料价值。', '国家一级文物，国宝级珍品', '商鞅是战国时期著名的政治家、改革家，在秦国推行变法，使秦国迅速强大。统一度量衡是商鞅变法的重要内容，商鞅方升就是这次变法的产物。商鞅变法虽然使秦国强大，但商鞅本人却因变法得罪权贵，最终被车裂而死。商鞅方升见证了这段波澜壮阔的历史。', '现藏于上海博物馆，保存状况良好。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，确保这件国宝能够长久保存。', '商鞅方升是中国古代度量衡史上的重要文物，它不仅见证了商鞅变法统一度量衡的历史事件，也反映了秦国强大的基础。商鞅方升的铭文，是研究秦国历史、文字的重要资料，具有极高的文化价值。'),
(14, '淳化阁帖', '北宋', '北宋淳化年间刻制的法帖，收录了历代名家书法。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ancient_book', '{"periodDetail":"北宋 淳化三年 公元992年","material":"枣木刻板，拓印","dimensions":"共10卷，每卷约20-30页","collection":"上海博物馆 藏","excavation":"宋代宫廷刻制"}', '淳化阁帖共10卷，收录了自先秦至唐代的历代名家书法，包括王羲之、王献之、欧阳询、褚遂良、颜真卿、柳公权等人的作品。帖采用枣木刻板，拓印成册。每页纵约30厘米，横约40厘米，书法清晰，墨色黝黑，是研究中国古代书法的重要资料。', '淳化阁帖是北宋淳化年间宋太宗命侍书学士王著编刻的法帖，是中国历史上第一部大型法帖。淳化阁帖的刻制，对保存和传播中国古代书法起到了重要作用，对后世书法的发展产生了深远影响。淳化阁帖被誉为"法帖之祖"，在中国书法史上占有重要地位。', '国家一级文物', '宋太宗赵光义雅好书法，收集了大量历代名家墨迹。淳化三年，他命侍书学士王著将这些墨迹编刻成帖，因刻成于淳化年间，故名淳化阁帖。淳化阁帖刻成后，赐给宗室和大臣，对传播书法起到了重要作用。由于原刻板不久即毁，淳化阁帖的宋拓本极为珍贵。', '现藏于上海博物馆，保存状况较好。由于帖本为纸质，容易受到虫蛀、霉变等影响，博物馆采用了恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '淳化阁帖是中国书法史上的里程碑，它不仅保存了大量历代名家书法，也推动了书法艺术的发展和传播。淳化阁帖被誉为"法帖之祖"，对后世法帖的刻制产生了深远影响，具有极高的文化价值。'),
(15, '兵马俑', '秦代', '秦始皇陵陪葬坑出土的陶质武士俑，被誉为世界第八大奇迹。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'terracotta', '{"periodDetail":"秦代 始皇帝 公元前221-前210年","material":"陶土烧制，彩绘","dimensions":"俑高约1.8-2.0米，陶马高约1.5米，长约2米","collection":"秦始皇兵马俑博物馆 藏","excavation":"1974年3月陕西临潼西杨村农民打井时发现"}', '兵马俑坑是秦始皇陵的陪葬坑，坑内埋有陶质武士俑和陶马。武士俑按兵种不同，有步兵俑、骑兵俑、车兵俑、弓弩手俑等，每个俑的面貌、神态各不相同，千人千面。陶俑身着战袍或铠甲，有的头戴介帻，有的头戴冠，或挽弓挎箭，或手握兵器，或驾车御马，造型生动逼真，栩栩如生。陶马雄健有力，昂首嘶鸣，形象逼真。', '秦始皇兵马俑是世界考古史上最伟大的发现之一，被誉为"世界第八大奇迹"。兵马俑的发现，为研究秦代军事、政治、经济、文化、科技等提供了极为珍贵的实物资料。陶俑的制作工艺精湛，造型优美，充分展现了秦代雕塑艺术的高超水平，是中国古代雕塑艺术史上的里程碑。', '国家一级文物，世界文化遗产', '1974年，陕西临潼西杨村的农民在打井时，偶然发现了一些陶片和陶俑残件。经过考古工作者的发掘，震惊世界的秦始皇兵马俑终于重见天日。兵马俑的发现，不仅为研究秦代历史提供了重要资料，也让世界重新认识了中国古代的雕塑艺术。', '现藏于秦始皇兵马俑博物馆，是博物馆的核心展品。由于陶俑容易受到风化、潮湿等因素的影响，博物馆采取了一系列保护措施，包括控制环境温湿度、进行科学修复、限制参观人数等，确保兵马俑能够得到有效的保护。', '兵马俑不仅是中国古代雕塑艺术的杰作，也是秦代军事制度、社会制度的重要实物资料。它生动地展现了秦代军队的编制、装备、战术等方面的情况，为研究秦代历史提供了直观的视觉资料，具有极高的文化价值。1987年，秦始皇陵及兵马俑坑被联合国教科文组织列入世界文化遗产名录。'),
(16, '铜车马', '秦代', '秦始皇陵出土的青铜车马模型，工艺精湛，造型逼真。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"秦代 始皇帝 公元前221-前210年","material":"青铜铸造，彩绘","dimensions":"一号车通高1.52m，通长2.25m；二号车通高1.06m，通长3.17m","collection":"秦始皇兵马俑博物馆 藏","excavation":"1980年12月秦始皇陵封土西侧出土"}', '铜车马共两乘，一号车为立车，二号车为安车。车马均按真车马比例缩小，约为真车马的三分之一。车舆、车轮、车辕、马具等部件齐全，结构复杂，制作精细。马匹雄健有力，昂首嘶鸣，形象逼真。车舆内外饰有彩绘纹样，色彩鲜艳，纹饰华美。整个铜车马造型优美，工艺精湛，是秦代青铜铸造工艺的巅峰之作。', '铜车马是秦始皇陵陪葬坑出土的青铜车马模型，是研究秦代车制、马具、交通制度的重要实物资料。铜车马的制作工艺精湛，结构复杂，部件多达数千件，充分展现了秦代青铜铸造工艺的高超水平。铜车马是中国古代青铜器的杰作，被誉为"青铜之冠"。', '国家一级文物，国宝级珍品', '1980年，考古工作者在秦始皇陵封土西侧发掘了两乘铜车马。由于铜车马出土时破碎严重，考古工作者采用了整体提取的方法，将铜车马整体运回实验室，经过八年多的精心修复，终于恢复了原貌。铜车马的修复，是中国考古修复史上的里程碑。', '现藏于秦始皇兵马俑博物馆，是博物馆的重要展品。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，包括控制温湿度、定期检测、科学修复等措施，确保这件国宝能够长久保存。', '铜车马是中国古代青铜器的杰作，它不仅展示了秦代高超的青铜铸造工艺，也反映了秦代的车制、马具、交通制度。铜车马的发现，为研究秦代历史提供了重要的实物资料，具有极高的文化价值。'),
(17, '石铠甲', '秦代', '秦始皇陵出土的石质铠甲，用于陪葬的防护装备。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'stone', '{"periodDetail":"秦代 始皇帝 公元前221-前210年","material":"石质编缀","dimensions":"甲片约600-800片，通长约80cm","collection":"秦始皇兵马俑博物馆 藏","excavation":"1998年秦始皇陵K9801陪葬坑出土"}', '石铠甲由数百片石质甲片编缀而成，甲片呈长方形或方形，四角钻孔，以铜丝或丝绳编缀。铠甲分为身甲、披膊、甲裙等部分，结构完整，造型逼真。甲片打磨光滑，边缘整齐，制作精细。石铠甲虽为陪葬明器，但完全仿照实用铠甲制作，是研究秦代铠甲形制的重要实物资料。', '石铠甲是秦始皇陵陪葬坑出土的石质铠甲，是研究秦代军事装备的重要实物资料。石铠甲虽为石质明器，但完全仿照实用铠甲制作，真实反映了秦代铠甲的形制和结构。石铠甲的发现，填补了秦代铠甲实物资料的空白，具有重要的史料价值。', '国家一级文物', '1998年，考古工作者在秦始皇陵K9801陪葬坑发现了大量石铠甲和石胄。这些石质铠甲和胄，是秦始皇陵的陪葬明器，用于在地下保卫秦始皇。石铠甲的发现，为研究秦代军事装备提供了重要的实物资料。', '现藏于秦始皇兵马俑博物馆，保存状况较好。由于石质文物相对稳定，博物馆主要采取控制环境温湿度、定期检查等措施，确保石铠甲能够得到有效的保护。', '石铠甲是研究秦代军事装备的重要实物资料，它真实反映了秦代铠甲的形制和结构，为研究秦代军事制度提供了直观的视觉资料，具有极高的文化价值。'),
(18, '青铜鹤', '秦代', '秦始皇陵出土的青铜水禽，展现了秦代青铜铸造工艺。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"秦代 始皇帝 公元前221-前210年","material":"青铜铸造","dimensions":"通高约50-60cm","collection":"秦始皇兵马俑博物馆 藏","excavation":"2001-2003年秦始皇陵K0007陪葬坑出土"}', '青铜鹤造型优美，鹤首高昂，长颈弯曲，双翅收拢，双腿直立。鹤身饰有羽毛纹，刻画精细，栩栩如生。青铜鹤出土时，表面有彩绘痕迹，色彩鲜艳。整个造型生动传神，充分展现了秦代工匠高超的雕塑技艺和青铜铸造工艺。', '青铜鹤是秦始皇陵陪葬坑出土的青铜水禽，是研究秦代青铜铸造工艺和雕塑艺术的重要实物资料。青铜鹤的造型优美，工艺精湛，充分展现了秦代工匠的艺术水平。青铜鹤的发现，丰富了秦始皇陵陪葬物的种类，为研究秦代丧葬制度提供了新的资料。', '国家一级文物', '2001-2003年，考古工作者在秦始皇陵K0007陪葬坑发现了大量青铜水禽，包括青铜鹤、青铜天鹅、青铜鸿雁等。这些青铜水禽，是秦始皇陵的陪葬品，用于在地下为秦始皇提供娱乐。青铜水禽的发现，展现了秦始皇陵陪葬物的丰富多样。', '现藏于秦始皇兵马俑博物馆，保存状况较好。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，确保这件珍贵文物能够长久保存。', '青铜鹤是秦代青铜铸造工艺的杰作，它不仅展示了秦代高超的青铜铸造技艺，也反映了秦代的审美情趣和丧葬文化，具有极高的文化价值。'),
(19, '镶金兽首玛瑙杯', '唐代', '唐代何家村窖藏出土，海内外孤品，国之重宝。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gem', '{"periodDetail":"唐代 盛期 公元7-8世纪","material":"玛瑙，镶金","dimensions":"通长15.6cm，通高6.5cm，口径5.9cm","collection":"陕西历史博物馆 藏","excavation":"1970年10月西安南郊何家村窖藏出土"}', '镶金兽首玛瑙杯以一块罕见的红色玛瑙为原料，巧雕成兽首形杯。杯身呈弯曲的弧形，一端雕成兽首，兽首双角弯曲，两眼圆睁，口部镶金帽，可拆卸。玛瑙色泽鲜艳，纹理清晰，红白相间，极为美丽。整个造型独特，工艺精湛，是唐代玉器加工工艺的巅峰之作。', '镶金兽首玛瑙杯是唐代何家村窖藏出土的珍品，是目前发现的唯一一件唐代玛瑙兽首杯，海内外孤品。此杯造型独特，工艺精湛，充分展现了唐代玉器加工工艺的高超水平。兽首杯的形制源于西方，是中西文化交流的见证，具有极高的艺术价值和史料价值。', '国家一级文物，国宝级珍品', '1970年，考古工作者在西安南郊何家村发现了两个陶瓮，内藏大量金银器、玉器、宝石等珍贵文物，这就是著名的何家村窖藏。镶金兽首玛瑙杯是窖藏中最珍贵的文物之一，其独特的造型和精湛的工艺，震惊了考古界和艺术界。', '现藏于陕西历史博物馆，是该馆的镇馆之宝之一。由于玛瑙质地坚硬，保存状况良好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '镶金兽首玛瑙杯是唐代艺术的杰作，它不仅展示了唐代高超的玉器加工工艺，也反映了唐代中西文化交流的历史。兽首杯的形制源于西方，是丝绸之路文化交流的见证，具有极高的文化价值。'),
(20, '舞马衔杯纹银壶', '唐代', '唐代金银器精品，壶身饰有舞马衔杯图案。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"唐代 开元 天宝年间 公元713-756年","material":"银质鎏金","dimensions":"通高14.3cm，口径2.3cm，底径8.9cm","collection":"陕西历史博物馆 藏","excavation":"1970年10月西安南郊何家村窖藏出土"}', '舞马衔杯纹银壶呈皮囊形，上有提梁，壶身两面各饰一匹舞马，马身鎏金，姿态矫健。舞马前腿直立，后腿弯曲，口衔酒杯，颈系飘带，尾上扬，作舞蹈状。壶身纹饰精美，鎏金灿烂，造型独特，是唐代金银器的代表作。', '舞马衔杯纹银壶是唐代何家村窖藏出土的珍品，是研究唐代金银器工艺和舞马文化的重要实物资料。据史书记载，唐玄宗时曾训练舞马，每逢千秋节（皇帝生日），舞马随音乐起舞，口衔酒杯向皇帝祝寿。此壶纹饰生动记录了这一历史场景，具有极高的史料价值。', '国家一级文物，国宝级珍品', '唐玄宗李隆基酷爱舞马，曾训练数百匹舞马，每逢千秋节，舞马随音乐起舞，口衔酒杯向皇帝祝寿，场面极为壮观。安史之乱后，舞马散落民间，最终消失。这件银壶上的舞马纹饰，生动记录了这一历史场景，是舞马文化的唯一实物见证。', '现藏于陕西历史博物馆，是该馆的镇馆之宝之一。由于银器容易氧化变黑，博物馆采用了先进的保护技术，包括控制温湿度、定期检测、科学修复等措施，确保这件国宝能够长久保存。', '舞马衔杯纹银壶是唐代金银器的杰作，它不仅展示了唐代高超的金银器工艺，也见证了唐玄宗时期舞马文化的历史。舞马纹饰生动记录了唐代宫廷的娱乐活动，具有极高的文化价值。'),
(21, '三彩载乐骆驼俑', '唐代', '唐三彩精品，骆驼背上载有乐舞人物，生动传神。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"唐代 开元 天宝年间 公元713-756年","material":"陶土烧制，三彩釉（黄、绿、白）","dimensions":"通高58cm，长43cm","collection":"陕西历史博物馆 藏","excavation":"1959年陕西西安西郊中堡村唐墓出土"}', '三彩载乐骆驼俑造型生动，骆驼昂首嘶鸣，四腿直立，驼背上驮一平台，平台上坐有五位乐师和一位歌女。乐师分别演奏琵琶、箫、笛等乐器，歌女居中而立，作歌唱状。骆驼及人物施以黄、绿、白三彩釉，色彩鲜艳，光泽柔和。整个作品造型优美，人物生动，是唐三彩中的精品。', '三彩载乐骆驼俑是唐三彩的代表作，是研究唐代音乐、舞蹈、服饰的重要实物资料。俑上的乐师和歌女，生动展现了唐代胡汉融合的音乐文化。骆驼是丝绸之路上的重要交通工具，这件作品也为研究唐代丝绸之路、中外交流提供了重要的实物资料。', '国家一级文物，国宝级珍品', '唐代是丝绸之路的鼎盛时期，大量胡商通过丝绸之路来到长安，带来了西域的音乐、舞蹈、乐器等。这件三彩载乐骆驼俑，生动展现了唐代胡汉融合的音乐文化。俑上的乐师演奏的琵琶、箫、笛等乐器，既有汉族传统乐器，也有西域传入的乐器，反映了唐代音乐的多元化。', '现藏于陕西历史博物馆，是该馆的重要展品。由于陶器相对稳定，保存状况良好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '三彩载乐骆驼俑是唐三彩的杰作，它不仅展示了唐代高超的制陶工艺，也反映了唐代胡汉融合的音乐文化和丝绸之路的繁荣，具有极高的文化价值。'),
(22, '何家村窖藏', '唐代', '唐代重要考古发现，出土大量金银器、玉器等珍贵文物。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"唐代 天宝十五年 公元756年","material":"金银器、玉器、宝石等","dimensions":"共出土文物1000余件","collection":"陕西历史博物馆 藏","excavation":"1970年10月西安南郊何家村基建施工时发现"}', '何家村窖藏共出土文物1000余件，包括金银器、玉器、宝石、钱币、药材等。金银器有碗、杯、壶、盘、盒等，造型优美，纹饰精美，工艺精湛。玉器有玛瑙杯、玉带銙等，色泽鲜艳，雕工精细。宝石有红宝石、蓝宝石等，晶莹剔透，光彩夺目。整个窖藏文物丰富，种类繁多，是唐代考古的重要发现。', '何家村窖藏是唐代考古的重要发现，出土文物数量众多，种类丰富，是研究唐代社会、经济、文化的重要实物资料。窖藏出土的金银器，工艺精湛，纹饰华美，充分展现了唐代金银器工艺的高超水平。窖藏还出土了大量钱币和药材，为研究唐代经济和医学提供了重要资料。', '国家一级文物，重要考古发现', '1970年，西安南郊何家村进行基建施工时，意外发现了两个陶瓮和一个银罐，内藏大量珍贵文物。经考古工作者研究，这批文物可能是唐代邠王李守礼或刘震在安史之乱期间埋藏的。何家村窖藏的发现，震惊了考古界，被誉为20世纪中国考古的重要发现之一。', '现藏于陕西历史博物馆，是该馆的重要藏品。由于窖藏文物种类繁多，博物馆根据不同材质采取不同的保护措施，确保这批珍贵文物能够长久保存。', '何家村窖藏是唐代社会、经济、文化的重要见证，它不仅展示了唐代高超的工艺水平，也反映了唐代的物质文化和精神文化，具有极高的文化价值。'),
(23, '竹林七贤砖画', '南朝', '南朝墓葬出土的模印砖画，描绘竹林七贤与荣启期。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'brick', '{"periodDetail":"南朝 宋 景平元年 公元423年","material":"模印砖画","dimensions":"由200多块砖拼砌而成，通长约2.4m，通高约0.8m","collection":"南京博物院 藏","excavation":"1960年4月江苏南京西善桥南朝大墓出土"}', '竹林七贤砖画由200多块砖拼砌而成，描绘了魏晋时期竹林七贤（嵇康、阮籍、山涛、向秀、刘伶、王戎、阮咸）与春秋隐士荣启期。画面分为两幅，分别绘于墓室两壁。每幅画四人，人物之间以树木分隔。人物姿态各异，或坐或卧，或饮酒或抚琴，神态潇洒，生动传神。线条流畅，造型优美，是南朝绘画艺术的代表作。', '竹林七贤砖画是南朝墓葬出土的模印砖画，是研究南朝绘画艺术和魏晋玄学的重要实物资料。砖画描绘的竹林七贤，是魏晋玄学的代表人物，他们的思想和生活方式，对后世产生了深远影响。砖画的发现，为研究南朝绘画艺术提供了重要的实物资料，具有极高的艺术价值和史料价值。', '国家一级文物，国宝级珍品', '竹林七贤是魏晋时期的七位名士，他们崇尚老庄玄学，蔑视礼法，放达不羁，常集于山阳（今河南修武）竹林之下，肆意酣畅，故世称竹林七贤。他们的思想和生活方式，对后世文人产生了深远影响。这幅砖画生动展现了竹林七贤的风采，是研究魏晋文化的重要资料。', '现藏于南京博物院，是该馆的镇馆之宝之一。由于砖画由多块砖拼砌而成，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '竹林七贤砖画是南朝绘画艺术的杰作，它不仅展示了南朝高超的绘画技艺，也反映了魏晋玄学文化和文人精神，具有极高的文化价值。'),
(24, '错金银铜牛灯', '东汉', '东汉青铜灯具，采用错金银工艺，设计精巧。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"东汉 时期 公元25-220年","material":"青铜铸造，错金银","dimensions":"通高26.5cm，长33cm","collection":"南京博物院 藏","excavation":"1980年5月江苏邗江甘泉2号东汉墓出土"}', '错金银铜牛灯造型独特，以牛为座，牛背驮灯。牛首昂起，双角弯曲，牛身肥硕，四足稳健。灯罩可转动，以调节光照方向。牛腹中空，可盛水，灯烟通过牛角进入腹中，被水吸收，从而保持室内清洁。器身采用错金银工艺，饰有流云纹、飞鸟纹等，金银相间，光彩夺目。', '错金银铜牛灯是东汉青铜灯具的精品，是研究东汉青铜工艺和灯具设计的重要实物资料。此灯设计精巧，既有实用功能，又有环保理念，充分展现了东汉工匠的智慧。错金银工艺精湛，纹饰华美，是东汉青铜装饰工艺的代表作。', '国家一级文物，国宝级珍品', '东汉时期，青铜灯具的设计达到了很高的水平。这件铜牛灯不仅造型优美，而且设计精巧，灯烟通过牛角进入腹中被水吸收，体现了古人的环保理念。这种设计理念，与现代环保理念不谋而合，令人叹服。', '现藏于南京博物院，是该馆的镇馆之宝之一。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，确保这件国宝能够长久保存。', '错金银铜牛灯是东汉青铜工艺的杰作，它不仅展示了东汉高超的青铜铸造和装饰工艺，也体现了古人的环保理念，具有极高的文化价值。'),
(25, '金兽首形饰件', '西汉', '西汉金器精品，以黄金铸造的兽首形装饰件。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"西汉 时期 公元前202-公元8年","material":"黄金铸造","dimensions":"通高约10cm，重约500g","collection":"南京博物院 藏","excavation":"江苏盱眙大云山江都王陵出土"}', '金兽首形饰件以纯金铸造，造型为兽首形。兽首双角弯曲，两眼圆睁，口部微张，神态威猛。兽首表面打磨光滑，光泽灿烂，充分展现了黄金的材质美。整个造型生动传神，工艺精湛，是西汉金器的代表作。', '金兽首形饰件是西汉金器的精品，是研究西汉金器工艺的重要实物资料。此器以纯金铸造，造型生动，工艺精湛，充分展现了西汉金器工艺的高超水平。金器的出土，也为研究西汉诸侯王的财富和生活方式提供了重要资料。', '国家一级文物', '西汉时期，诸侯王拥有巨大的财富，他们的墓葬中常出土大量金器。这件金兽首形饰件出土于江苏盱眙大云山江都王陵，是西汉江都王刘非的陪葬品。刘非是汉武帝的兄长，封江都王，拥有巨大的财富。', '现藏于南京博物院，保存状况良好。由于黄金化学性质稳定，不易腐蚀，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '金兽首形饰件是西汉金器的杰作，它不仅展示了西汉高超的金器工艺，也反映了西汉诸侯王的财富和生活方式，具有极高的文化价值。'),
(26, '青花瓷瓶', '明代', '明代永乐年间青花瓷精品，造型优美，纹饰典雅。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"明代 永乐 公元1403-1424年","material":"瓷土烧制，钴料着色","dimensions":"通高约40cm，口径约10cm","collection":"南京博物院 藏","excavation":"传世品"}', '青花瓷瓶造型优美，瓶身呈梅瓶样式，小口，短颈，丰肩，敛腹，圈足。通体青花装饰，肩部绘缠枝莲纹，腹部绘缠枝牡丹纹，近足处绘仰莲瓣纹。青花色泽浓艳，有铁锈斑，系采用进口"苏泥勃青"料绘制。釉面肥厚，白中泛青，如玉似冰。瓶造型优美，线条流畅，青花发色纯正，纹饰层次分明，是明代永乐时期青花瓷的代表作。', '明代永乐时期是中国青花瓷发展的黄金时期，这一时期的青花瓷以其胎质细腻、釉色洁白、青花色泽浓艳而著称。这件青花梅瓶造型优美，纹饰精美，青花发色纯正，是明代永乐青花瓷的精品。它不仅展示了明代高超的制瓷工艺，也为研究明代的社会文化、中外交流提供了重要的实物资料。', '国家一级文物', '明代永乐时期，郑和下西洋带回了大量的苏泥勃青料，这种进口钴料发色浓艳，带有铁锈斑，成为这一时期青花瓷的特色。这件青花梅瓶就是使用苏泥勃青料绘制的，是明代永乐青花瓷的代表作之一。', '现藏于南京博物院，保存状况良好。由于瓷器相对稳定，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '明代青花瓷是中国陶瓷史上的巅峰之作，它不仅展示了明代高超的制瓷工艺，也反映了明代的社会文化和审美情趣。青花瓷的发展，也促进了中外文化交流，成为中国文化的重要象征之一。'),
(27, '贾湖骨笛', '新石器时代', '距今约8000年的骨笛，是中国最早的乐器实物。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bone', '{"periodDetail":"新石器时代 裴李岗文化 距今约8000年","material":"鹤骨制作","dimensions":"长约20-25cm，有7孔","collection":"河南博物院 藏","excavation":"1986-1987年河南舞阳贾湖遗址出土"}', '贾湖骨笛以鹤类尺骨制作，管身略呈弧形，上有7个音孔。骨笛表面打磨光滑，音孔钻制规整，制作工艺已相当成熟。经测音，骨笛能够吹奏出完整的七声音阶，音色清亮悠扬。骨笛的发现，改写了中国音乐史，将中国音乐文明向前推进了数千年。', '贾湖骨笛是目前发现的世界上最早的吹奏乐器之一，距今约8000年，是中国音乐文明的源头。骨笛的发现，证明早在新石器时代，中国先民就已经掌握了音律知识，能够制作能够吹奏完整七声音阶的乐器。这一发现，改写了中国音乐史和世界音乐史，具有划时代的意义。', '国家一级文物，国宝级珍品', '1986年，考古工作者在河南舞阳贾湖遗址发现了这支骨笛。起初，考古工作者并不确定它的用途，后经音乐专家测音，发现它能够吹奏出完整的七声音阶，震惊了考古界和音乐界。贾湖骨笛的发现，将中国音乐文明向前推进了数千年，是中国考古的重要发现之一。', '现藏于河南博物院，是该馆的镇馆之宝之一。由于骨器容易受到腐蚀，博物馆采用了先进的保护技术，包括控制温湿度、定期检测、科学修复等措施，确保这件国宝能够长久保存。', '贾湖骨笛是中国音乐文明的源头，它不仅证明早在8000年前中国先民就已经掌握了音律知识，也展现了中华文明的悠久和灿烂，具有极高的文化价值。'),
(28, '妇好鸮尊', '商代', '商代晚期青铜器，造型为鸮形，是商王武丁配偶妇好的陪葬品。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"商代 晚期 武丁时期 公元前1250-前1192年","material":"青铜铸造","dimensions":"通高45.9cm，重16.7kg","collection":"河南博物院 藏","excavation":"1976年河南安阳殷墟妇好墓出土"}', '妇好鸮尊造型独特，作鸮形。鸮首微昂，双目圆睁，两角竖立，喙部尖利。鸮身肥硕，双翅收拢，两足粗壮，尾羽下垂。器身饰有饕餮纹、夔龙纹、蝉纹等，纹饰华美，层次分明。整个造型生动传神，既写实又夸张，是商代青铜器艺术的杰作。', '妇好鸮尊是商代晚期青铜器的精品，是商王武丁配偶妇好的陪葬品。妇好是商王武丁的王后，也是一位女将军，曾多次率军出征，战功赫赫。妇好墓出土了大量珍贵文物，妇好鸮尊是其中的精品，是研究商代历史、艺术、妇好其人的重要实物资料。', '国家一级文物，国宝级珍品', '妇好是商王武丁的王后，也是一位女将军。据甲骨文记载，妇好曾多次率军出征，征伐土方、巴方、夷方等，战功赫赫。妇好去世后，武丁为她修建了大型墓葬，陪葬了大量珍贵文物。1976年，考古工作者发掘了妇好墓，出土了1600余件珍贵文物，妇好鸮尊是其中的精品。', '现藏于河南博物院，是该馆的镇馆之宝之一。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，确保这件国宝能够长久保存。', '妇好鸮尊是商代青铜器的杰作，它不仅展示了商代高超的青铜铸造工艺，也见证了妇好这位传奇女性的历史，具有极高的文化价值。'),
(29, '莲鹤方壶', '春秋', '春秋时期青铜器，壶盖立有莲花与仙鹤，造型优美。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"春秋 时期 公元前770-前476年","material":"青铜铸造","dimensions":"通高126cm，口长30.5cm，口宽54cm","collection":"河南博物院 藏","excavation":"1923年河南新郑李家楼郑公大墓出土"}', '莲鹤方壶造型宏伟，壶体呈方壶形，口沿外侈，长颈，溜肩，鼓腹，圈足。壶盖立有双层莲瓣，莲瓣中央立一仙鹤，鹤首高昂，双翅展翅欲飞。壶身饰有蟠龙纹、饕餮纹等，纹饰华美。壶颈两侧有龙形耳，龙首回顾，姿态生动。整个造型优美，装饰华丽，是春秋青铜器的代表作。', '莲鹤方壶是春秋时期青铜器的精品，是研究春秋青铜器艺术的重要实物资料。壶盖立有莲花与仙鹤，这种造型在青铜器中极为罕见，体现了春秋时期审美观念的变化。莲鹤方壶的出土，为研究春秋时期郑国的历史和文化提供了重要资料。', '国家一级文物，国宝级珍品', '1923年，河南新郑李家楼发现了一座大型春秋墓葬，出土了大量青铜器，这就是著名的郑公大墓。莲鹤方壶是郑公大墓出土的精品，共两件，一件藏于河南博物院，一件藏于故宫博物院。壶盖立有莲花与仙鹤，造型优美，被誉为"东方最美的青铜器"。', '现藏于河南博物院，是该馆的镇馆之宝之一。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，确保这件国宝能够长久保存。', '莲鹤方壶是春秋青铜器的杰作，它不仅展示了春秋高超的青铜铸造工艺，也反映了春秋时期审美观念的变化，具有极高的文化价值。'),
(30, '云纹铜禁', '春秋', '春秋时期青铜禁，饰有精美云纹，是失蜡法铸造的代表。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"春秋 时期 公元前770-前476年","material":"青铜铸造","dimensions":"通高28cm，通长131cm，通宽67cm","collection":"河南博物院 藏","excavation":"1978年河南淅川下寺2号楚墓出土"}', '云纹铜禁造型独特，呈长方形案状，四周有栏板，下有十二个兽形足。禁身及栏板满饰多层立体云纹，云纹盘绕，层层叠叠，繁复华美。兽形足造型生动，或立或卧，姿态各异。整个器物纹饰繁复，工艺精湛，是失蜡法铸造的代表作。', '云纹铜禁是春秋时期青铜器的精品，是研究春秋青铜铸造工艺的重要实物资料。禁是古代承置酒器的器具，此禁纹饰繁复，工艺精湛，采用失蜡法铸造，充分展现了春秋时期高超的青铜铸造工艺。失蜡法是中国古代重要的铸造技术，云纹铜禁是失蜡法铸造的代表作。', '国家一级文物，国宝级珍品', '失蜡法是中国古代重要的铸造技术，用蜡制作模型，外敷造型材料，加热使蜡流出，形成空腔，然后浇注金属液，冷却后得到铸件。这种技术可以铸造纹饰繁复、造型复杂的器物。云纹铜禁就是失蜡法铸造的代表作，其纹饰繁复华美，令人叹为观止。', '现藏于河南博物院，是该馆的镇馆之宝之一。由于青铜器容易受到腐蚀，博物馆采用了先进的保护技术，确保这件国宝能够长久保存。', '云纹铜禁是春秋青铜器的杰作，它不仅展示了春秋高超的青铜铸造工艺，特别是失蜡法铸造技术，也反映了春秋时期的审美情趣，具有极高的文化价值。'),
(31, '河姆渡双鸟朝阳纹牙雕', '新石器时代', '河姆渡文化牙雕精品，刻有双鸟朝阳图案。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ivory', '{"periodDetail":"新石器时代 河姆渡文化 距今约7000年","material":"象牙雕刻","dimensions":"长16.6cm，宽6.3cm，厚1.2cm","collection":"浙江省博物馆 藏","excavation":"1977-1978年浙江余姚河姆渡遗址出土"}', '河姆渡双鸟朝阳纹牙雕呈蝶形，正面刻有双鸟朝阳图案。图案中央为同心圆，象征太阳；两侧各有一鸟，鸟首向着太阳，双翅展开，作飞翔状。线条流畅，造型生动，是河姆渡文化艺术的代表作。', '河姆渡双鸟朝阳纹牙雕是河姆渡文化的艺术精品，是研究河姆渡文化宗教信仰和艺术水平的重要实物资料。双鸟朝阳图案反映了河姆渡先民对太阳和鸟的崇拜，是研究原始宗教的重要资料。', '国家一级文物，国宝级珍品', '河姆渡文化是中国长江下游地区的新石器时代文化，距今约7000年。河姆渡遗址出土了大量骨器、木器、陶器等，其中牙雕作品尤为精美。双鸟朝阳纹牙雕是河姆渡文化的艺术代表作，反映了河姆渡先民的艺术水平和宗教信仰。', '现藏于浙江省博物馆，保存状况较好。由于牙雕容易受到腐蚀，博物馆采用了先进的保护技术，确保这件珍贵文物能够长久保存。', '河姆渡双鸟朝阳纹牙雕是河姆渡文化的艺术杰作，它不仅展示了河姆渡先民高超的雕刻技艺，也反映了他们的宗教信仰和审美情趣，具有极高的文化价值。'),
(32, '良渚玉琮王', '新石器时代', '良渚文化玉器精品，是目前发现的最大的玉琮。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'jade', '{"periodDetail":"新石器时代 良渚文化 距今约5000年","material":"玉质","dimensions":"通高8.9cm，上射径17.1-17.6cm，下射径16.5-17.5cm，重约6.5kg","collection":"浙江省博物馆 藏","excavation":"1986年浙江余杭反山良渚文化墓地出土"}', '良渚玉琮王是目前发现的最大的玉琮，被誉为"琮王"。琮体呈外方内圆柱形，分两节，每节四角各雕一神人兽面纹。神人兽面纹雕刻精细，线条流畅，是良渚文化玉雕艺术的代表作。玉质温润，色泽青黄，是良渚文化玉器的极品。', '良渚玉琮王是良渚文化的玉器精品，是研究良渚文化玉器工艺和宗教信仰的重要实物资料。琮是良渚文化的典型器物，用于祭祀，反映了良渚先民的宗教信仰。玉琮王的发现，为研究良渚文化的社会结构和礼制提供了重要资料。', '国家一级文物，国宝级珍品', '良渚文化是中国长江下游地区的新石器时代文化，距今约5000年，以精美的玉器闻名于世。1986年，考古工作者在浙江余杭反山发现了良渚文化的高等级墓地，出土了大量精美玉器，玉琮王是其中最珍贵的一件。', '现藏于浙江省博物馆，是该馆的镇馆之宝之一。由于玉质稳定，保存状况良好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '良渚玉琮王是良渚文化的艺术杰作，它不仅展示了良渚先民高超的玉雕技艺，也反映了他们的宗教信仰和礼制，具有极高的文化价值。'),
(33, '越窑青瓷', '唐代', '唐代越窑青瓷精品，釉色青翠，如冰似玉。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"唐代 晚期 公元9世纪","material":"瓷土烧制，青釉","dimensions":"通高约20cm，口径约10cm","collection":"浙江省博物馆 藏","excavation":"浙江慈溪上林湖越窑遗址出土"}', '越窑青瓷釉色青翠，如冰似玉，有"千峰翠色"之誉。器物造型优美，有碗、盘、壶、瓶等。釉面光洁，无开片，胎质细腻，呈浅灰色。越窑青瓷是唐代青瓷的代表作，被誉为"秘色瓷"。', '越窑是中国古代著名的青瓷窑，位于浙江慈溪上林湖。越窑青瓷以其釉色青翠、如冰似玉而著称，是唐代青瓷的代表作。越窑青瓷曾是宫廷贡品，深受皇室喜爱，对后世青瓷的发展产生了深远影响。', '国家一级文物', '唐代诗人陆龟蒙有诗云："九秋风露越窑开，夺得千峰翠色来。"生动描绘了越窑青瓷的釉色之美。越窑青瓷因其釉色青翠，被誉为"秘色瓷"，是唐代青瓷的巅峰之作。', '现藏于浙江省博物馆，保存状况良好。由于瓷器相对稳定，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '越窑青瓷是唐代青瓷的杰作，它不仅展示了唐代高超的制瓷工艺，也反映了唐代的审美情趣，具有极高的文化价值。'),
(34, '雷峰塔出土文物', '五代', '雷峰塔地宫出土的佛教文物，包括阿育王塔等。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"五代 吴越国 公元977年","material":"金银器、铜器、玉器等","dimensions":"阿育王塔通高约30cm","collection":"浙江省博物馆 藏","excavation":"2001年浙江杭州雷峰塔遗址地宫出土"}', '雷峰塔地宫出土了大量珍贵文物，包括鎏金银阿育王塔、铜镜、玉器、经卷等。阿育王塔造型精美，塔身饰有佛本生故事图案，工艺精湛。这些文物是吴越国佛教文化的见证，具有极高的艺术价值和史料价值。', '雷峰塔是五代吴越国王钱俶为庆祝黄妃得子而建，是杭州的著名古迹。2001年，雷峰塔地宫被发现，出土了大量珍贵文物，是研究吴越国历史和佛教文化的重要资料。', '国家一级文物', '雷峰塔因《白蛇传》中白娘子被法海镇压于塔下的故事而闻名于世。2001年，雷峰塔重建时发现了地宫，出土了大量珍贵文物，震惊了考古界。', '现藏于浙江省博物馆，保存状况良好。博物馆根据不同材质采取不同的保护措施，确保这批珍贵文物能够长久保存。', '雷峰塔出土文物是吴越国佛教文化的见证，它不仅展示了吴越国高超的工艺水平，也反映了当时的佛教信仰，具有极高的文化价值。'),
(35, '曾侯乙编钟', '战国', '战国时期曾国编钟，全套65件，是中国古代音乐文化的瑰宝。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"战国 早期 公元前433年前后","material":"青铜铸造","dimensions":"钟架长748cm，高265cm，全套编钟共65件","collection":"湖北省博物馆 藏","excavation":"1978年湖北随州擂鼓墩曾侯乙墓出土"}', '全套编钟由65件青铜钟组成，分三层八组悬挂在曲尺形的铜木结构钟架上。上层为三组钮钟，中层为三组甬钟，下层为两组甬钟。每件钟上都有错金铭文，内容包括乐律、音阶、音名等，共计2800余字。钟架由铜人、铜柱、铜横梁组成，设计精巧，结构牢固。编钟造型优美，纹饰华丽，钟体饰有蟠龙纹、饕餮纹、云雷纹等，铸造工艺精湛，令人叹为观止。', '曾侯乙编钟是战国时期曾国国君乙的陪葬乐器，是中国古代音乐文化的瑰宝。编钟数量众多，规模宏大，音域宽广，音色优美，充分展现了战国时期高超的青铜铸造工艺和音乐水平。编钟上的错金铭文，内容丰富，为研究中国古代乐律学、音乐史提供了极为珍贵的实物资料。曾侯乙编钟的出土，改写了中国古代音乐史，被誉为"世界第八大奇迹"。', '国家一级文物，国宝级珍品', '1978年，考古工作者在湖北随州擂鼓墩发掘了曾侯乙墓，出土了大量珍贵文物，曾侯乙编钟是其中最珍贵的。编钟出土时，震惊了考古界和音乐界。经测试，编钟能够演奏出完整的乐曲，音色优美，令人叹为观止。', '现藏于湖北省博物馆，是该馆的镇馆之宝。由于编钟数量众多，体积巨大，博物馆专门建造了编钟陈列厅，采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '曾侯乙编钟是中国古代音乐文化的瑰宝，它不仅展示了战国时期高超的青铜铸造工艺和音乐水平，也反映了当时的礼乐制度，具有极高的文化价值。'),
(36, '越王勾践剑', '春秋', '春秋时期越王勾践的佩剑，出土于湖北江陵楚墓。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"春秋 晚期 公元前5世纪","material":"青铜铸造，表面硫化处理","dimensions":"通长55.7cm，宽4.6cm，柄长8.4cm","collection":"湖北省博物馆 藏","excavation":"1965年12月湖北江陵望山1号楚墓出土"}', '剑身近格处铸有鸟虫书铭文"越王勾践，自作用剑"八字。剑身满饰黑色菱形暗纹，剑格正面用蓝色玻璃、背面用绿松石镶成美丽的图案。剑身修长，中脊起棱，两从有刃，刃薄锋利。剑首向外翻卷作圆箍形，内铸有十一道同心圆。剑柄为圆柱体，上缠有丝绳。整个宝剑造型优美，工艺精湛，虽埋藏地下两千余年，至今仍锋利如新，光彩夺目。', '越王勾践剑是春秋时期越国国王勾践的佩剑，是中国古代青铜器中的珍品。此剑铸造工艺精湛，剑身采用硫化处理技术，使之千年不锈，充分体现了越国高超的青铜铸造技术。剑身鸟虫书铭文精美，是研究越国历史文化的重要实物资料。此剑出土于楚墓，也为研究楚越关系提供了重要线索。', '国家一级文物，国宝级珍品', '越王勾践是春秋时期越国的君主，以"卧薪尝胆"的故事闻名于世。他历经磨难，最终灭吴称霸。这把佩剑是勾践称霸后的随身佩剑，见证了越国的辉煌。1965年，此剑在湖北江陵的一座楚墓中出土，出土时完好如新，一剑划破考古人员的手指，震惊了考古界。', '现藏于湖北省博物馆，是该馆的镇馆之宝之一。由于剑身经过硫化处理，保存状况极好，至今仍光亮如新。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '越王勾践剑是中国古代青铜器的杰作，它不仅展示了春秋时期高超的青铜铸造工艺，也见证了越王勾践"卧薪尝胆"、"三千越甲可吞吴"的传奇故事，具有极高的文化价值。'),
(37, '郢爰', '战国', '战国时期楚国金币，是中国最早的黄金货币之一。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"战国 时期 公元前475-前221年","material":"黄金","dimensions":"每块重约250-280g","collection":"湖北省博物馆 藏","excavation":"江苏、安徽、湖北等地均有出土"}', '郢爰是战国时期楚国的金币，呈板状或饼状，上印有"郢爰"二字印记。郢是楚国都城，爰是货币单位。使用时根据需要切割成小块，称量使用。郢爰是中国最早的黄金货币之一，反映了楚国发达的商品经济。', '郢爰是战国时期楚国的金币，是中国最早的黄金货币之一。郢爰的发现，为研究战国时期楚国的经济、货币制度提供了重要的实物资料，反映了楚国发达的商品经济和先进的货币制度。', '国家一级文物', '战国时期，楚国是七雄之一，经济发达，商业繁荣。楚国铸造的郢爰，是中国最早的黄金货币之一，反映了楚国发达的商品经济。郢爰在江苏、安徽、湖北等地均有出土，是研究楚国经济的重要资料。', '现藏于湖北省博物馆，保存状况良好。由于黄金化学性质稳定，不易腐蚀，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '郢爰是中国古代货币的珍贵实物，它不仅反映了楚国发达的商品经济，也见证了中国货币史的发展，具有极高的文化价值。'),
(38, '编磬', '战国', '曾侯乙墓出土的石质打击乐器，与编钟配套使用。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'stone', '{"periodDetail":"战国 早期 公元前433年前后","material":"石质","dimensions":"全套共32件，分两层悬挂","collection":"湖北省博物馆 藏","excavation":"1978年湖北随州擂鼓墩曾侯乙墓出土"}', '编磬是曾侯乙墓出土的石质打击乐器，全套共32件，分两层悬挂在磬架上。磬呈曲尺形，大小递减，音高不同。磬身饰有彩绘纹样，色彩鲜艳。编磬与编钟配套使用，是研究战国时期音乐文化的重要实物资料。', '编磬是曾侯乙墓出土的石质打击乐器，与编钟配套使用，是研究战国时期音乐文化的重要实物资料。编磬的出土，为研究中国古代乐器、乐律学提供了重要的实物资料，具有极高的史料价值。', '国家一级文物', '曾侯乙墓出土了编钟、编磬等大量乐器，反映了战国时期曾国的音乐文化。编钟、编磬配套使用，可以演奏出优美的乐曲，是研究中国古代音乐的重要资料。', '现藏于湖北省博物馆，保存状况较好。由于石质文物相对稳定，博物馆主要采取控制环境温湿度、定期检查等措施，确保编磬能够得到有效的保护。', '编磬是中国古代音乐文化的重要组成部分，它不仅展示了战国时期的音乐水平，也反映了当时的礼乐制度，具有极高的文化价值。'),
(39, '素纱单衣', '西汉', '马王堆汉墓出土的丝织品，重量仅49克，薄如蝉翼。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'textile', '{"periodDetail":"西汉 早期 公元前2世纪","material":"蚕丝织造","dimensions":"衣长128cm，袖长190cm，重49g","collection":"湖南省博物馆 藏","excavation":"1972年湖南长沙马王堆1号汉墓出土"}', '素纱单衣是马王堆汉墓出土的丝织品，重量仅49克，薄如蝉翼，轻若烟雾。衣身无衬里，无纹饰，素色透明。整件衣服折叠后可握于掌心，展开后却宽大如常服。素纱单衣充分展现了西汉时期高超的丝织技术，是中国纺织史上的奇迹。', '素纱单衣是马王堆汉墓出土的丝织品，是研究西汉纺织技术的重要实物资料。素纱单衣重量仅49克，薄如蝉翼，充分展现了西汉时期高超的丝织技术。这一发现，震惊了纺织界和考古界，被誉为"世界纺织史上的奇迹"。', '国家一级文物，国宝级珍品', '1972年，考古工作者发掘了马王堆汉墓，出土了大量珍贵文物，素纱单衣是其中最令人惊叹的。这件衣服重量仅49克，薄如蝉翼，现代技术也难以复制。素纱单衣的出土，震惊了纺织界和考古界。', '现藏于湖南省博物馆，是该馆的镇馆之宝之一。由于丝织品容易受到虫蛀、霉变等影响，博物馆采用了先进的保护技术，包括恒温恒湿、避光保存等措施，确保这件国宝能够长久保存。', '素纱单衣是中国纺织史上的奇迹，它不仅展示了西汉时期高超的丝织技术，也反映了汉代的服饰文化，具有极高的文化价值。'),
(40, 'T型帛画', '西汉', '马王堆汉墓出土的帛画，描绘了天上、人间、地下的景象。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'painting', '{"periodDetail":"西汉 早期 公元前2世纪","material":"帛本彩绘","dimensions":"通长205cm，上宽92cm，下宽47.7cm","collection":"湖南省博物馆 藏","excavation":"1972年湖南长沙马王堆1号汉墓出土"}', 'T型帛画呈T字形，自上而下描绘了天上、人间、地下的景象。上部绘有天界，有日、月、星、神兽等；中部绘有人间，有墓主人辛追夫人及其侍从；下部绘有地下，有巨人托举大地。画面色彩鲜艳，线条流畅，人物生动，是西汉绘画艺术的代表作。', 'T型帛画是马王堆汉墓出土的帛画，是研究西汉绘画艺术和丧葬文化的重要实物资料。帛画描绘了天上、人间、地下的景象，反映了汉人对宇宙的认识和对死后世界的想象，具有极高的艺术价值和史料价值。', '国家一级文物，国宝级珍品', '马王堆汉墓是西汉初期长沙国丞相利苍及其妻子辛追的墓葬。1972年，考古工作者发掘了马王堆1号墓，出土了大量珍贵文物，T型帛画是其中最珍贵的。帛画覆盖在内棺上，描绘了辛追夫人升天的场景，是研究西汉丧葬文化的重要资料。', '现藏于湖南省博物馆，是该馆的镇馆之宝之一。由于帛画为丝质，容易受到虫蛀、霉变等影响，博物馆采用了先进的保护技术，包括恒温恒湿、避光保存等措施，确保这件国宝能够长久保存。', 'T型帛画是西汉绘画艺术的杰作，它不仅展示了西汉高超的绘画技艺，也反映了汉人的宇宙观和丧葬文化，具有极高的文化价值。'),
(41, '辛追夫人遗体', '西汉', '马王堆汉墓出土的女尸，保存完好，是世界防腐史上的奇迹。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'other', '{"periodDetail":"西汉 早期 公元前2世纪","material":"人体遗体","dimensions":"身长154cm","collection":"湖南省博物馆 藏","excavation":"1972年湖南长沙马王堆1号汉墓出土"}', '辛追夫人遗体保存完好，身长154厘米，外形完整，皮肤弹性尚存，关节尚可活动。遗体经过特殊处理，内腔注满防腐液，是世界防腐史上的奇迹。辛追夫人遗体为研究西汉时期的防腐技术、古代病理学、人类学等提供了极为珍贵的实物资料。', '辛追夫人遗体是马王堆汉墓出土的女尸，保存完好，是世界防腐史上的奇迹。遗体为研究西汉时期的防腐技术、古代病理学、人类学等提供了极为珍贵的实物资料。经研究，辛追夫人死时约50岁，患有多种疾病，为研究古代病理学提供了重要资料。', '世界罕见的珍贵文物', '1972年，考古工作者发掘马王堆1号墓时，发现内棺中有一具保存完好的女尸，震惊了考古界和医学界。经研究，这是西汉初期长沙国丞相利苍的妻子辛追，死时约50岁。辛追夫人遗体保存完好，是世界防腐史上的奇迹。', '现藏于湖南省博物馆，是该馆的重要藏品。博物馆采用了先进的保存技术，包括恒温恒湿、特殊防腐液浸泡等措施，确保遗体能够长久保存。', '辛追夫人遗体是世界防腐史上的奇迹，它不仅展示了西汉时期高超的防腐技术，也为研究古代病理学、人类学提供了极为珍贵的实物资料，具有极高的科学价值。'),
(42, '马王堆漆器', '西汉', '马王堆汉墓出土的漆器，工艺精湛，纹饰华美。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'lacquer', '{"periodDetail":"西汉 早期 公元前2世纪","material":"木胎漆器","dimensions":"共出土漆器约200件","collection":"湖南省博物馆 藏","excavation":"1972-1974年湖南长沙马王堆汉墓出土"}', '马王堆汉墓出土了大量漆器，包括鼎、盒、壶、盘、耳杯等，共约200件。漆器以木为胎，髹黑漆或红漆，饰有云气纹、几何纹、动物纹等，纹饰华美，色彩鲜艳。漆器造型优美，工艺精湛，是西汉漆器工艺的代表作。', '马王堆汉墓出土的漆器，是研究西汉漆器工艺的重要实物资料。漆器数量众多，种类丰富，工艺精湛，充分展现了西汉时期高超的漆器工艺。漆器的出土，为研究西汉的饮食文化、生活方式提供了重要资料。', '国家一级文物', '马王堆汉墓出土了大量漆器，数量之多、工艺之精，令人叹为观止。这些漆器是辛追夫人生前使用的器具，反映了西汉贵族的生活方式。漆器的出土，为研究西汉漆器工艺提供了重要资料。', '现藏于湖南省博物馆，保存状况较好。由于漆器容易受到温湿度变化的影响，博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这批珍贵文物能够长久保存。', '马王堆漆器是西汉漆器工艺的杰作，它不仅展示了西汉高超的漆器工艺，也反映了西汉贵族的生活方式，具有极高的文化价值。'),
(43, '三星堆青铜面具', '商代', '三星堆遗址出土的青铜面具，造型奇特，神秘莫测。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"商代 晚期 公元前1200-前1000年","material":"青铜铸造","dimensions":"通高约60cm，宽约40cm","collection":"四川博物院 藏","excavation":"1986年四川广汉三星堆遗址出土"}', '三星堆青铜面具造型奇特，眼球突出，眼角上翘，耳朵巨大，嘴角上翘，神态神秘。面具表面光滑，铸造精良，是三星堆文化的代表性器物。', '三星堆青铜面具是三星堆文化的代表性器物，是研究古蜀文明的重要实物资料。面具造型奇特，与中原青铜器风格迥异，反映了古蜀文明独特的文化面貌。', '国家一级文物，国宝级珍品', '1986年，考古工作者在四川广汉三星堆遗址发现了两个祭祀坑，出土了大量青铜器、金器、玉器等珍贵文物，震惊了考古界。三星堆青铜面具是其中最引人注目的，其奇特的造型令人惊叹。', '现藏于四川博物院，保存状况良好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '三星堆青铜面具是古蜀文明的象征，它不仅展示了古蜀人高超的青铜铸造工艺，也反映了古蜀文明独特的文化面貌，具有极高的文化价值。'),
(44, '金沙太阳神鸟', '商代', '金沙遗址出土的金饰，图案为四只神鸟围绕太阳飞翔。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"商代 晚期 公元前1200-前1000年","material":"黄金","dimensions":"外径12.5cm，内径5.29cm，厚0.02cm，重20g","collection":"四川博物院 藏","excavation":"2001年四川成都金沙遗址出土"}', '金沙太阳神鸟呈圆形，图案为四只神鸟围绕太阳飞翔。神鸟首尾相接，展翅飞翔，太阳位于中央，放射出十二道光芒。整个图案线条流畅，造型优美，是古蜀文明的象征。', '金沙太阳神鸟是金沙遗址出土的金饰，是研究古蜀文明的重要实物资料。太阳神鸟图案反映了古蜀人对太阳和鸟的崇拜，是古蜀文明的象征。2005年，太阳神鸟图案被确定为中国文化遗产标志。', '国家一级文物，国宝级珍品', '2001年，考古工作者在四川成都金沙遗址发现了大量金器、玉器、青铜器等珍贵文物，太阳神鸟是其中最珍贵的。太阳神鸟图案精美，寓意深刻，被确定为中国文化遗产标志。', '现藏于四川博物院，保存状况良好。由于黄金化学性质稳定，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件国宝能够长久保存。', '金沙太阳神鸟是古蜀文明的象征，它不仅展示了古蜀人高超的金器工艺，也反映了古蜀人的宗教信仰，具有极高的文化价值。'),
(45, '东汉说唱俑', '东汉', '东汉陶俑，刻画说唱艺人神态，生动传神。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'terracotta', '{"periodDetail":"东汉 时期 公元25-220年","material":"陶土烧制","dimensions":"通高约50cm","collection":"四川博物院 藏","excavation":"四川成都天回山东汉墓出土"}', '东汉说唱俑刻画了一位说唱艺人的形象，艺人头戴巾帻，袒胸露腹，左手抱鼓，右手执槌，笑容可掬，神态生动。俑身线条流畅，造型夸张，是东汉陶俑的代表作。', '东汉说唱俑是东汉陶俑的代表作，是研究东汉雕塑艺术和说唱文化的重要实物资料。俑刻画的说唱艺人，反映了东汉时期说唱艺术的繁荣，具有极高的艺术价值和史料价值。', '国家一级文物', '东汉时期，说唱艺术繁荣，说唱艺人深受欢迎。这件说唱俑刻画了一位说唱艺人的形象，神态生动，笑容可掬，反映了东汉时期说唱艺术的繁荣。', '现藏于四川博物院，保存状况良好。由于陶器相对稳定，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '东汉说唱俑是东汉雕塑艺术的杰作，它不仅展示了东汉高超的雕塑技艺，也反映了东汉时期的说唱文化，具有极高的文化价值。'),
(46, '巴蜀青铜器', '战国', '巴蜀文化青铜器，具有浓郁的地方特色。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"战国 时期 公元前475-前221年","material":"青铜铸造","dimensions":"尺寸不一","collection":"四川博物院 藏","excavation":"四川地区出土"}', '巴蜀青铜器包括兵器、容器、工具等，造型独特，纹饰精美。兵器有剑、戈、矛等，容器有鼎、壶、罍等，工具有斧、锛等。青铜器饰有巴蜀符号，具有浓郁的地方特色。', '巴蜀青铜器是巴蜀文化的代表性器物，是研究巴蜀文化的重要实物资料。青铜器上的巴蜀符号，是研究巴蜀文字的重要资料，具有极高的史料价值。', '国家一级文物', '巴蜀文化是四川地区的古代文化，以青铜器著称。巴蜀青铜器造型独特，纹饰精美，具有浓郁的地方特色，是巴蜀文化的代表。', '现藏于四川博物院，保存状况良好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这批珍贵文物能够长久保存。', '巴蜀青铜器是巴蜀文化的代表，它不仅展示了巴蜀人高超的青铜铸造工艺，也反映了巴蜀文化的独特面貌，具有极高的文化价值。'),
(47, '潮州金漆木雕大神龛', '清代', '潮州木雕精品，采用多层镂雕技法，金碧辉煌。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'wood', '{"periodDetail":"清代 时期 公元1644-1912年","material":"木雕，金漆","dimensions":"通高约3m，宽约2m","collection":"广东省博物馆 藏","excavation":"传世品"}', '潮州金漆木雕大神龛造型宏伟，采用多层镂雕技法，雕刻精美。龛身饰有人物、花鸟、山水等图案，层次分明，立体感强。表面贴金，金碧辉煌，是潮州木雕的代表作。', '潮州金漆木雕大神龛是潮州木雕的代表作，是研究潮州木雕工艺的重要实物资料。潮州木雕以多层镂雕技法著称，是中国木雕艺术的重要流派，具有极高的艺术价值。', '国家一级文物', '潮州木雕是中国木雕艺术的重要流派，以多层镂雕技法著称。潮州金漆木雕大神龛是潮州木雕的代表作，雕刻精美，金碧辉煌，令人叹为观止。', '现藏于广东省博物馆，保存状况良好。由于木雕容易受到虫蛀、霉变等影响，博物馆采用了先进的保护技术，确保这件珍贵文物能够长久保存。', '潮州金漆木雕大神龛是潮州木雕的杰作，它不仅展示了潮州高超的木雕工艺，也反映了潮州的宗教文化和民俗文化，具有极高的文化价值。'),
(48, '广彩开光人物瓶', '清代', '广州织金彩瓷精品，色彩艳丽，纹饰繁复。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"清代 乾隆 公元1736-1795年","material":"瓷土烧制，彩绘","dimensions":"通高约50cm，口径约15cm","collection":"广东省博物馆 藏","excavation":"传世品"}', '广彩开光人物瓶造型优美，瓶身饰有开光人物图案，人物生动，色彩艳丽。广彩是广州织金彩瓷的简称，以色彩艳丽、纹饰繁复著称，是清代外销瓷的重要品种。', '广彩开光人物瓶是广彩瓷的代表作，是研究广彩瓷工艺和清代外销瓷的重要实物资料。广彩瓷是清代外销瓷的重要品种，对中外文化交流起到了重要作用。', '国家一级文物', '广彩是广州织金彩瓷的简称，是清代为适应外销而发展起来的彩瓷品种。广彩瓷色彩艳丽，纹饰繁复，深受欧美市场欢迎，是清代外销瓷的重要品种。', '现藏于广东省博物馆，保存状况良好。由于瓷器相对稳定，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '广彩开光人物瓶是广彩瓷的杰作，它不仅展示了广彩瓷的工艺特色，也反映了清代中外文化交流，具有极高的文化价值。'),
(49, '南越王墓文物', '西汉', '南越王墓出土的青铜器、玉器等珍贵文物。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西汉 早期 公元前2世纪","material":"青铜、玉等","dimensions":"尺寸不一","collection":"广东省博物馆 藏","excavation":"1983年广东广州象岗南越王墓出土"}', '南越王墓出土了大量珍贵文物，包括青铜器、玉器、金器、陶器等。青铜器有鼎、壶、镜等，玉器有玉衣、玉璧、玉璜等，造型优美，工艺精湛，是西汉南越国的重要考古发现。', '南越王墓是西汉南越国第二代王赵眜的墓葬，出土了大量珍贵文物，是研究南越国历史和文化的重要资料。南越国是秦将赵佗建立的政权，统治岭南地区近百年，对岭南开发做出了重要贡献。', '国家一级文物，重要考古发现', '1983年，考古工作者在广州象岗发现了南越王墓，出土了大量珍贵文物，震惊了考古界。南越王墓的发现，为研究南越国历史提供了重要资料。', '现藏于广东省博物馆，保存状况良好。博物馆根据不同材质采取不同的保护措施，确保这批珍贵文物能够长久保存。', '南越王墓文物是南越国文化的见证，它不仅展示了南越国的物质文化，也反映了岭南地区的历史发展，具有极高的文化价值。'),
(50, '端砚', '唐代', '中国四大名砚之首，石质细腻，发墨优良。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'stone', '{"periodDetail":"唐代 以来","material":"端石","dimensions":"尺寸不一","collection":"广东省博物馆 藏","excavation":"广东肇庆端砚坑采制"}', '端砚以端石制作，石质细腻，发墨优良，有"呵气研墨"之誉。砚形多样，有抄手砚、平板砚、随形砚等。砚身常饰有雕刻，纹饰精美，是文房四宝之首。', '端砚是中国四大名砚之首，以石质优良著称。端砚产于广东肇庆端砚坑，自唐代以来就是贡品，深受文人喜爱，对中国书法文化的发展起到了重要作用。', '国家一级文物', '端砚是中国四大名砚之首，与歙砚、洮砚、澄泥砚并称。端砚以石质细腻、发墨优良著称，自唐代以来就是贡品，深受文人喜爱。', '现藏于广东省博物馆，保存状况良好。由于石质稳定，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护，确保这件珍贵文物能够长久保存。', '端砚是中国文房四宝之首，它不仅展示了端砚的工艺特色，也反映了中国书法文化的发展，具有极高的文化价值。'),
(51, '太保鼎', '西周', '西周早期青铜重器，内壁铸有太保字样铭文。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西周 早期","material":"青铜铸造","dimensions":"通高约50cm","collection":"天津博物馆 藏","excavation":"传世品"}', '太保鼎造型庄重，立耳，三蹄足，口沿下饰饕餮纹。器内壁铸有"太保"二字铭文，是西周早期青铜重器。', '太保鼎是西周早期青铜重器，是研究西周历史的重要实物资料。', '国家一级文物', '太保鼎是西周早期青铜器的代表作，具有重要的历史价值。', '现藏于天津博物馆，保存状况良好。', '太保鼎是西周青铜器的代表作，具有极高的文化价值。'),
(54, '战国青铜编钟', '战国', '巴人文化青铜编钟，展现了巴国的音乐文化。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"战国 时期","material":"青铜铸造","dimensions":"尺寸不一","collection":"重庆中国三峡博物馆 藏","excavation":"重庆地区出土"}', '战国青铜编钟造型优美，纹饰精美，是巴人文化的代表。', '战国青铜编钟是研究巴人文化的重要实物资料。', '国家一级文物', '巴人文化是重庆地区的古代文化，以青铜器著称。', '现藏于重庆中国三峡博物馆，保存状况良好。', '战国青铜编钟是巴人文化的代表，具有极高的文化价值。'),
(57, '龙山文化黑陶蛋壳杯', '新石器时代', '龙山文化黑陶精品，器壁薄如蛋壳，工艺精湛。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"新石器时代 龙山文化","material":"黑陶","dimensions":"通高约20cm","collection":"山东博物馆 藏","excavation":"山东地区出土"}', '龙山文化黑陶蛋壳杯器壁薄如蛋壳，漆黑光亮，造型优美。', '龙山文化黑陶蛋壳杯是龙山文化的代表作，是研究新石器时代陶器工艺的重要实物资料。', '国家一级文物，国宝级珍品', '龙山文化以黑陶著称，蛋壳杯是其中的精品。', '现藏于山东博物馆，保存状况良好。', '龙山文化黑陶蛋壳杯是新石器时代陶器工艺的杰作，具有极高的文化价值。'),
(60, '红山文化玉猪龙', '新石器时代', '红山文化玉器代表作，造型为猪首龙身，是龙的起源之一。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'jade', '{"periodDetail":"新石器时代 红山文化","material":"玉质","dimensions":"通高约15cm","collection":"辽宁省博物馆 藏","excavation":"辽宁地区出土"}', '红山文化玉猪龙造型为猪首龙身，是红山文化的代表性玉器。', '红山文化玉猪龙是红山文化的代表作，是研究龙的起源的重要实物资料。', '国家一级文物，国宝级珍品', '红山文化以玉器著称，玉猪龙是其中的精品，被认为是龙的起源之一。', '现藏于辽宁省博物馆，保存状况良好。', '红山文化玉猪龙是红山文化的代表，具有极高的文化价值。'),
(63, '高句丽壁画墓', '高句丽', '高句丽墓葬壁画，描绘了高句丽的社会生活与神话传说。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'painting', '{"periodDetail":"高句丽 时期","material":"壁画","dimensions":"尺寸不一","collection":"吉林省博物院 藏","excavation":"吉林集安高句丽墓葬出土"}', '高句丽壁画墓描绘了高句丽的社会生活与神话传说，色彩鲜艳，线条流畅。', '高句丽壁画墓是研究高句丽文化的重要实物资料。', '世界文化遗产', '高句丽是东北亚的古代政权，其壁画墓是世界文化遗产。', '现藏于吉林省博物院，保存状况良好。', '高句丽壁画墓是高句丽文化的代表，具有极高的文化价值。'),
(66, '渤海国上京龙泉府遗址文物', '唐代', '渤海国都城遗址出土的文物，包括建筑构件、生活用具等。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'other', '{"periodDetail":"唐代 渤海国","material":"多种材质","dimensions":"尺寸不一","collection":"黑龙江省博物馆 藏","excavation":"黑龙江宁安渤海国遗址出土"}', '渤海国上京龙泉府遗址出土了大量文物，包括建筑构件、生活用具等。', '渤海国上京龙泉府遗址文物是研究渤海国历史的重要实物资料。', '国家一级文物', '渤海国是东北亚的古代政权，上京龙泉府是其都城。', '现藏于黑龙江省博物馆，保存状况良好。', '渤海国上京龙泉府遗址文物是渤海国文化的见证，具有极高的文化价值。'),
(69, '德化白瓷', '明代', '德化窑白瓷精品，釉色温润如玉，被誉为中国白。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"明代 时期","material":"瓷土烧制","dimensions":"尺寸不一","collection":"福建博物院 藏","excavation":"福建德化窑遗址出土"}', '德化白瓷釉色温润如玉，被誉为"中国白"，是明代白瓷的代表作。', '德化白瓷是明代白瓷的代表作，是研究明代制瓷工艺的重要实物资料。', '国家一级文物', '德化窑以白瓷著称，被誉为"中国白"，深受国内外欢迎。', '现藏于福建博物院，保存状况良好。', '德化白瓷是明代白瓷的杰作，具有极高的文化价值。'),
(72, '徽州三雕', '明清', '徽州木雕、石雕、砖雕，工艺精湛，题材丰富。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'wood', '{"periodDetail":"明清 时期","material":"木、石、砖","dimensions":"尺寸不一","collection":"安徽博物院 藏","excavation":"安徽徽州地区"}', '徽州三雕包括木雕、石雕、砖雕，工艺精湛，题材丰富，是徽州文化的代表。', '徽州三雕是徽州文化的代表，是研究徽州建筑艺术的重要实物资料。', '国家一级文物', '徽州以三雕著称，是徽州建筑艺术的重要组成部分。', '现藏于安徽博物院，保存状况良好。', '徽州三雕是徽州文化的代表，具有极高的文化价值。'),
(75, '长信宫灯', '西汉', '满城汉墓出土的青铜灯，设计精巧，可调节光照方向。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西汉 中期","material":"青铜铸造，鎏金","dimensions":"通高48cm","collection":"河北博物院 藏","excavation":"1968年河北满城西汉中山靖王刘胜妻窦绾墓出土"}', '长信宫灯设计精巧，可调节光照方向，是西汉青铜灯具的精品。', '长信宫灯是西汉青铜灯具的精品，是研究西汉工艺技术的重要实物资料。', '国家一级文物，国宝级珍品', '长信宫灯出土于满城汉墓，设计精巧，被誉为"中华第一灯"。', '现藏于河北博物院，保存状况良好。', '长信宫灯是西汉工艺技术的杰作，具有极高的文化价值。'),
(78, '晋侯鸟尊', '西周', '西周晋国青铜器，造型为鸟形，是晋国青铜器的代表作。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西周 时期","material":"青铜铸造","dimensions":"通高约40cm","collection":"山西博物院 藏","excavation":"山西曲沃北赵晋侯墓地出土"}', '晋侯鸟尊造型为鸟形，是西周晋国青铜器的代表作。', '晋侯鸟尊是西周晋国青铜器的代表作，是研究晋国历史的重要实物资料。', '国家一级文物，国宝级珍品', '晋侯鸟尊出土于晋侯墓地，是晋国青铜器的精品。', '现藏于山西博物院，保存状况良好。', '晋侯鸟尊是晋国青铜器的代表，具有极高的文化价值。'),
(81, '海昏侯墓金器', '西汉', '海昏侯墓出土的大量金器，包括金饼、马蹄金等。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"西汉 时期","material":"黄金","dimensions":"尺寸不一","collection":"江西省博物馆 藏","excavation":"2011-2015年江西南昌海昏侯墓出土"}', '海昏侯墓出土了大量金器，包括金饼、马蹄金等，数量众多，工艺精湛。', '海昏侯墓金器是研究西汉历史的重要实物资料。', '国家一级文物', '海昏侯墓是近年来的重大考古发现，出土了大量珍贵文物。', '现藏于江西省博物馆，保存状况良好。', '海昏侯墓金器是西汉物质文化的见证，具有极高的文化价值。'),
(84, '翔鹭纹铜鼓', '汉代', '广西出土的铜鼓，饰有翔鹭纹，是壮族文化的象征。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"汉代 时期","material":"青铜铸造","dimensions":"直径约50cm","collection":"广西壮族自治区博物馆 藏","excavation":"广西地区出土"}', '翔鹭纹铜鼓饰有翔鹭纹，是壮族文化的象征。', '翔鹭纹铜鼓是壮族文化的代表，是研究壮族历史的重要实物资料。', '国家一级文物', '铜鼓是壮族文化的重要象征，在壮族地区广泛使用。', '现藏于广西壮族自治区博物馆，保存状况良好。', '翔鹭纹铜鼓是壮族文化的代表，具有极高的文化价值。'),
(87, '南海一号沉船文物', '宋代', '南海一号宋代沉船出土的瓷器、铜钱等文物。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"宋代 时期","material":"瓷器、铜钱等","dimensions":"尺寸不一","collection":"海南省博物馆 藏","excavation":"广东阳江南海一号沉船出土"}', '南海一号沉船出土了大量瓷器、铜钱等文物，是宋代海上丝绸之路的重要见证。', '南海一号沉船文物是研究宋代海上丝绸之路的重要实物资料。', '国家一级文物', '南海一号是宋代沉船，出土了大量珍贵文物，是海上丝绸之路的重要见证。', '现藏于海南省博物馆，保存状况良好。', '南海一号沉船文物是海上丝绸之路的见证，具有极高的文化价值。'),
(90, '夜郎青铜器', '战国', '夜郎国时期的青铜器，展现了神秘的夜郎文化。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"战国 时期","material":"青铜铸造","dimensions":"尺寸不一","collection":"贵州省博物馆 藏","excavation":"贵州地区出土"}', '夜郎青铜器造型独特，纹饰精美，是夜郎文化的代表。', '夜郎青铜器是研究夜郎文化的重要实物资料。', '国家一级文物', '夜郎是贵州地区的古代政权，"夜郎自大"的典故源于此。', '现藏于贵州省博物馆，保存状况良好。', '夜郎青铜器是夜郎文化的代表，具有极高的文化价值。'),
(93, '古滇国青铜器', '战国', '古滇国青铜器，包括贮贝器、铜鼓等，造型独特。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"战国 时期","material":"青铜铸造","dimensions":"尺寸不一","collection":"云南省博物馆 藏","excavation":"云南晋宁石寨山古滇国墓地出土"}', '古滇国青铜器包括贮贝器、铜鼓等，造型独特，是古滇文化的代表。', '古滇国青铜器是研究古滇文化的重要实物资料。', '国家一级文物', '古滇国是云南地区的古代政权，以青铜器著称。', '现藏于云南省博物馆，保存状况良好。', '古滇国青铜器是古滇文化的代表，具有极高的文化价值。'),
(96, '唐卡', '清代', '藏族传统绘画艺术，绘制精美，色彩艳丽。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'painting', '{"periodDetail":"清代 时期","material":"布面彩绘","dimensions":"尺寸不一","collection":"西藏博物馆 藏","excavation":"西藏地区"}', '唐卡绘制精美，色彩艳丽，是藏族传统绘画艺术。', '唐卡是藏族传统绘画艺术，是研究藏族文化的重要实物资料。', '国家一级文物', '唐卡是藏族文化的重要组成部分，具有深厚的宗教内涵。', '现藏于西藏博物馆，保存状况良好。', '唐卡是藏族文化的代表，具有极高的文化价值。'),
(99, '马踏飞燕', '东汉', '东汉青铜雕塑，骏马三足腾空，一足踏飞燕，是中国旅游标志。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"东汉 晚期","material":"青铜铸造","dimensions":"通高34.5cm，长45cm","collection":"甘肃省博物馆 藏","excavation":"1969年甘肃武威雷台东汉墓出土"}', '马踏飞燕造型优美，骏马三足腾空，一足踏飞燕，是中国旅游标志。', '马踏飞燕是东汉青铜雕塑的精品，是研究东汉雕塑艺术的重要实物资料。', '国家一级文物，国宝级珍品', '马踏飞燕出土于甘肃武威雷台东汉墓，是中国旅游标志。', '现藏于甘肃省博物馆，保存状况良好。', '马踏飞燕是东汉雕塑艺术的杰作，具有极高的文化价值。'),
(102, '彩陶罐', '新石器时代', '青海出土的马家窑文化彩陶，纹饰优美。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"新石器时代 马家窑文化","material":"彩陶","dimensions":"通高约30cm","collection":"青海省博物馆 藏","excavation":"青海地区出土"}', '彩陶罐纹饰优美，是马家窑文化的代表作。', '彩陶罐是马家窑文化的代表作，是研究新石器时代陶器工艺的重要实物资料。', '国家一级文物', '马家窑文化以彩陶著称，是中国新石器时代的重要文化。', '现藏于青海省博物馆，保存状况良好。', '彩陶罐是马家窑文化的代表，具有极高的文化价值。'),
(105, '匈奴鹰顶金冠饰', '战国', '匈奴贵族金冠饰，造型为鹰顶，展现了草原文化。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"战国 时期","material":"黄金","dimensions":"通高约10cm","collection":"内蒙古博物院 藏","excavation":"内蒙古地区出土"}', '匈奴鹰顶金冠饰造型为鹰顶，是匈奴贵族的冠饰，展现了草原文化。', '匈奴鹰顶金冠饰是匈奴文化的代表，是研究匈奴历史的重要实物资料。', '国家一级文物', '匈奴是北方草原的古代民族，以金器著称。', '现藏于内蒙古博物院，保存状况良好。', '匈奴鹰顶金冠饰是匈奴文化的代表，具有极高的文化价值。'),
(106, '鲜卑金饰', '魏晋', '鲜卑族金饰，工艺精湛，具有浓郁的草原特色。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'gold_silver', '{"periodDetail":"魏晋 南北朝时期 公元3-6世纪","material":"黄金","dimensions":"尺寸不一","collection":"内蒙古博物院 藏","excavation":"内蒙古地区出土"}', '鲜卑金饰造型精美，纹饰独特，展现了鲜卑族的艺术风格和审美情趣。金饰采用锤揲、镂空等工艺，纹饰以动物纹、几何纹为主，具有浓郁的草原民族特色。', '鲜卑金饰是鲜卑文化的代表，是研究鲜卑族历史、艺术、工艺的重要实物资料。鲜卑族是魏晋南北朝时期北方草原的重要民族，其金器工艺继承了匈奴传统，又有所创新，对后世产生了重要影响。', '国家一级文物', '鲜卑族是魏晋南北朝时期北方草原的强大民族，曾建立多个政权。鲜卑金饰出土于内蒙古地区，展现了鲜卑族高超的金器工艺和独特的艺术风格。', '现藏于内蒙古博物院，保存状况良好。由于黄金化学性质稳定，不易腐蚀，保存状况较好。博物馆采用恒温恒湿的保存环境，定期进行检查和维护。', '鲜卑金饰是鲜卑文化的代表，它不仅展示了鲜卑族高超的金器工艺，也反映了草原民族的艺术风格和审美情趣，具有极高的文化价值。'),
(107, '蒙古族服饰', '清代', '蒙古族传统服饰，色彩鲜艳，装饰华美。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'textile', '{"periodDetail":"清代 时期 公元1644-1912年","material":"丝绸、棉布、皮毛等","dimensions":"尺寸不一","collection":"内蒙古博物院 藏","excavation":"内蒙古地区征集"}', '蒙古族传统服饰包括长袍、腰带、靴子、帽子等。长袍称蒙古袍，宽大舒适，便于骑马。腰带饰有银饰、宝石等，华美精致。靴子称蒙古靴，靴筒高，靴底厚，适合草原行走。帽子有圆顶帽、尖顶帽等多种样式。服饰色彩鲜艳，以红、蓝、黄等色为主，装饰华美，体现了蒙古族的审美情趣。', '蒙古族服饰是蒙古族文化的重要组成部分，是研究蒙古族历史、文化、生活方式的重要实物资料。蒙古族服饰具有鲜明的民族特色，反映了蒙古族游牧生活的特点和审美观念。', '国家一级文物', '蒙古族是北方草原的主要民族，以游牧为生。蒙古族服饰适应草原生活，宽大舒适，便于骑马。清代蒙古族服饰在保持传统的基础上，吸收了满族服饰的一些元素，形成了独特的风格。', '现藏于内蒙古博物院，保存状况良好。由于服饰为丝织品，容易受到虫蛀、霉变等影响，博物馆采用了先进的保护技术，包括恒温恒湿、避光保存等措施。', '蒙古族服饰是蒙古族文化的重要组成部分，它不仅反映了蒙古族的生活方式，也体现了蒙古族的审美情趣和民族认同，具有极高的文化价值。'),
(108, '贺兰山岩画', '新石器时代', '贺兰山岩画拓片，记录了远古人类的生活场景。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'stone', '{"periodDetail":"新石器时代","material":"岩画","dimensions":"尺寸不一","collection":"宁夏博物馆 藏","excavation":"宁夏贺兰山"}', '贺兰山岩画记录了远古人类的生活场景，是研究史前文化的重要资料。', '贺兰山岩画是研究史前文化的重要实物资料。', '国家重点文物保护单位', '贺兰山岩画是宁夏的重要文化遗产，记录了远古人类的生活。', '现藏于宁夏博物馆，保存状况良好。', '贺兰山岩画是史前文化的见证，具有极高的文化价值。'),
(111, '楼兰美女干尸', '青铜时代', '楼兰遗址出土的古代干尸，保存完好，被誉为楼兰美女。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'other', '{"periodDetail":"青铜时代","material":"人体干尸","dimensions":"身长约150cm","collection":"新疆维吾尔自治区博物馆 藏","excavation":"新疆楼兰遗址出土"}', '楼兰美女干尸保存完好，被誉为楼兰美女，是新疆古代居民的遗存。', '楼兰美女干尸是研究新疆古代居民的重要实物资料。', '珍贵文物', '楼兰美女干尸出土于楼兰遗址，保存完好，震惊了考古界。', '现藏于新疆维吾尔自治区博物馆，保存状况良好。', '楼兰美女干尸是新疆古代文化的见证，具有极高的文化价值。'),
(114, '毛公鼎', '西周', '西周晚期青铜重器，铭文长达497字，是台北故宫镇馆之宝。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'bronze', '{"periodDetail":"西周 宣王时期","material":"青铜铸造","dimensions":"通高53.8cm","collection":"台北故宫博物院 藏","excavation":"清道光末年陕西岐山出土"}', '毛公鼎铭文长达497字，是现存铭文最长的青铜器，是台北故宫镇馆之宝。', '毛公鼎是西周青铜重器，是研究西周历史的重要实物资料。', '国家一级文物，国宝级珍品', '毛公鼎是台北故宫的镇馆之宝，具有重要的历史价值。', '现藏于台北故宫博物院，保存状况良好。', '毛公鼎是西周青铜器的代表作，具有极高的文化价值。'),
(118, '香港考古出土文物', '新石器时代', '香港地区出土的史前文物，包括陶器、石器等。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ceramic', '{"periodDetail":"新石器时代","material":"陶器、石器","dimensions":"尺寸不一","collection":"香港历史博物馆 藏","excavation":"香港地区出土"}', '香港考古出土文物包括陶器、石器等，是香港史前文化的见证。', '香港考古出土文物是研究香港史前文化的重要实物资料。', '珍贵文物', '香港地区有丰富的考古遗存，出土了大量史前文物。', '现藏于香港历史博物馆，保存状况良好。', '香港考古出土文物是香港史前文化的见证，具有极高的文化价值。'),
(121, '岭南画派作品', '近代', '岭南画派名家作品，包括高剑父、关山月等人的画作。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'painting', '{"periodDetail":"近代","material":"纸本设色","dimensions":"尺寸不一","collection":"香港艺术馆 藏","excavation":"传世品"}', '岭南画派作品融合中西，创新传统，是近代中国画的代表。', '岭南画派作品是研究近代中国画发展的重要实物资料。', '珍贵文物', '岭南画派是近代中国画的重要流派，以创新著称。', '现藏于香港艺术馆，保存状况良好。', '岭南画派作品是近代中国画的代表，具有极高的文化价值。'),
(124, '澳门历史文献', '明清', '澳门历史文献，记录了澳门的中西文化交流史。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'ancient_book', '{"periodDetail":"明清 时期","material":"纸质文献","dimensions":"尺寸不一","collection":"澳门博物馆 藏","excavation":"澳门地区"}', '澳门历史文献记录了澳门的中西文化交流史，是研究澳门历史的重要资料。', '澳门历史文献是研究澳门历史的重要实物资料。', '珍贵文物', '澳门是中西文化交流的重要窗口，留下了丰富的历史文献。', '现藏于澳门博物馆，保存状况良好。', '澳门历史文献是中西文化交流的见证，具有极高的文化价值。'),
(127, '澳门历史绘画', '近代', '描绘澳门历史风貌的绘画作品，记录了澳门的变迁。', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 'painting', '{"periodDetail":"近代","material":"布面油画","dimensions":"尺寸不一","collection":"澳门艺术博物馆 藏","excavation":"传世品"}', '澳门历史绘画描绘了澳门的历史风貌，记录了澳门的变迁。', '澳门历史绘画是研究澳门历史的重要实物资料。', '珍贵文物', '澳门历史绘画记录了澳门的变迁，是研究澳门历史的重要资料。', '现藏于澳门艺术博物馆，保存状况良好。', '澳门历史绘画是澳门历史的见证，具有极高的文化价值。');

-- ============================================
-- 博物馆展览表数据
-- 共 76 条
-- ============================================
DELETE FROM `museum_exhibition`;
INSERT INTO `museum_exhibition` (
  `id`, `museum_id`, `title`, `description`, `date`, `image`, `location`, `category`, `status`, `status_text`, `tags`, `curator`, `scale`, `visitors`, `background`, `is_active`
) VALUES
(1, 1, '紫禁城建成600年展', '庆祝紫禁城建成600周年，展示故宫的历史与文化。', '2020年9月 - 2021年2月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '故宫博物院午门展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(2, 1, '清代宫廷生活展', '展示清代宫廷的日常生活、礼仪制度和文化艺术。', '2021年3月 - 2021年8月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '故宫博物院东六宫', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(3, 2, '科技与未来', '探索前沿科技发展，展望未来生活。', '2024年1月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '中国科学技术馆主展厅', '科技考古', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(4, 2, '古代科技发明', '了解中国古代科技成就，感受祖先智慧。', '2024年3月 - 2024年9月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '中国科学技术馆古代科技展厅', '科技考古', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(5, 3, '中国古代青铜器展', '展示中国古代青铜器的发展历程和艺术成就。', '2024年1月 - 2024年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '上海博物馆青铜器展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(6, 3, '中国古代陶瓷展', '展示中国古代陶瓷的发展历程和艺术成就。', '2024年7月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '上海博物馆陶瓷展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(7, 4, '秦始皇兵马俑展', '展示秦始皇兵马俑的发现、发掘和保护过程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '秦始皇兵马俑博物馆一号坑', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(8, 4, '秦始皇陵出土文物展', '展示秦始皇陵出土的各类文物，包括铜车马、兵器等。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '秦始皇兵马俑博物馆文物陈列厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(9, 5, '陕西历史文化展', '展示陕西地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '陕西历史博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(10, 5, '唐代文物精品展', '展示唐代的精品文物，包括金银器、陶瓷器等。', '2024年3月 - 2024年9月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '陕西历史博物馆专题展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(11, 6, '江苏历史文化展', '展示江苏地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '南京博物院历史馆', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(12, 6, '明清艺术展', '展示明清时期的艺术作品，包括绘画、书法、工艺品等。', '2024年4月 - 2024年10月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '南京博物院艺术馆', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(13, 7, '中原历史文化展', '展示中原地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '河南博物院主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(14, 7, '商周青铜器展', '展示商周时期的青铜器，包括礼器、兵器等。', '2024年5月 - 2024年11月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '河南博物院专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(15, 8, '浙江历史文化展', '展示浙江地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '浙江省博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(16, 8, '龙泉青瓷展', '展示龙泉青瓷的发展历程和艺术成就。', '2024年6月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '浙江省博物馆专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(17, 9, '湖北历史文化展', '展示湖北地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '湖北省博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(18, 9, '曾侯乙编钟展', '展示曾侯乙编钟的发现、发掘和研究成果。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '湖北省博物馆编钟展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(19, 10, '湖南历史文化展', '展示湖南地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '湖南省博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(20, 10, '马王堆汉墓文物展', '展示马王堆汉墓出土的文物，包括帛画、丝绸等。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '湖南省博物馆马王堆展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(21, 11, '四川历史文化展', '展示四川地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '四川博物院主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(22, 11, '三星堆文物展', '展示三星堆遗址出土的文物，包括青铜面具、青铜立人等。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '四川博物院三星堆展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(23, 12, '广东历史文化展', '展示广东地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '广东省博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(24, 12, '海上丝绸之路展', '展示海上丝绸之路的历史和文化交流。', '2024年7月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '广东省博物馆专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(25, 13, '天津历史文化展', '展示天津地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '天津博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(26, 13, '清代瓷器展', '展示清代的瓷器，包括青花瓷、粉彩瓷等。', '2024年8月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '天津博物馆专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(27, 14, '三峡历史文化展', '展示三峡地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '重庆中国三峡博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(28, 14, '巴渝文化展', '展示巴渝地区的文化特色和历史遗产。', '2024年9月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '重庆中国三峡博物馆专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(29, 15, '山东历史文化展', '展示山东地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '山东博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(30, 15, '大汶口文化展', '展示大汶口文化的发掘成果和文化特色。', '2024年10月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '山东博物馆专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(31, 16, '辽宁历史文化展', '展示辽宁地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '辽宁省博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(32, 16, '红山文化展', '展示红山文化的发掘成果和文化特色。', '2024年11月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '辽宁省博物馆专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(33, 17, '吉林历史文化展', '展示吉林地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '吉林省博物院主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(34, 17, '高句丽文化展', '展示高句丽文化的发掘成果和文化特色。', '2024年12月 - 2025年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '吉林省博物院专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(35, 18, '黑龙江历史文化展', '展示黑龙江地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '黑龙江省博物馆主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(36, 18, '赫哲族文化展', '展示赫哲族的传统文化和生活方式。', '2024年12月 - 2025年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '黑龙江省博物馆专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(37, 19, '福建历史文化展', '展示福建地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '福建博物院主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(38, 19, '海上丝绸之路展', '展示福建在海上丝绸之路中的重要地位和历史贡献。', '2024年12月 - 2025年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '福建博物院专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(39, 20, '安徽历史文化展', '展示安徽地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '安徽博物院主展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(40, 20, '徽州文化展', '展示徽州文化的特色和历史遗产，包括徽派建筑、徽商文化等。', '2024年12月 - 2025年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '安徽博物院专题展厅', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(41, 21, '河北历史文化展', '展示河北地区从远古到近代的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '河北博物院主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(42, 21, '中山国文化展', '展示战国时期中山国的考古发现和文化特色。', '2024年1月 - 2024年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '河北博物院专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(43, 22, '晋魂历史文化展', '展示山西地区的历史文化发展历程，重点展示晋国文化。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '山西博物院主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(44, 22, '晋商文化展', '展示晋商的历史发展和商业文化。', '2024年2月 - 2024年8月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '山西博物院专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(45, 23, '江西历史文化展', '展示江西地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '江西省博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(46, 23, '海昏侯国考古成果展', '展示海昏侯墓的考古发现和出土文物。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '江西省博物馆海昏侯展厅', '科技考古', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(47, 24, '广西历史文化展', '展示广西地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '广西壮族自治区博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(48, 24, '壮族文化展', '展示壮族的传统文化、民俗风情和艺术特色。', '2024年3月 - 2024年9月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '广西壮族自治区博物馆专题展厅', '民俗风情', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(49, 25, '海南历史文化展', '展示海南地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '海南省博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(50, 25, '南海海洋文化展', '展示南海海洋文化和海上丝绸之路历史。', '2024年4月 - 2024年10月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '海南省博物馆专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(51, 26, '贵州历史文化展', '展示贵州地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '贵州省博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(52, 26, '少数民族风情展', '展示贵州各少数民族的传统文化和民俗风情。', '2024年5月 - 2024年11月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '贵州省博物馆专题展厅', '民俗风情', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(53, 27, '云南历史文化展', '展示云南地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '云南省博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(54, 27, '滇国文化展', '展示古滇国的考古发现和文化特色。', '2024年6月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '云南省博物馆专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(55, 28, '西藏历史文化展', '展示西藏地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '西藏博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(56, 28, '藏族文化艺术展', '展示藏族的传统文化、宗教艺术和民俗风情。', '2024年7月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '西藏博物馆专题展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(57, 29, '甘肃丝绸之路文明展', '展示甘肃在丝绸之路中的重要地位和历史贡献。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '甘肃省博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(58, 29, '彩陶艺术展', '展示甘肃彩陶的发展历程和艺术成就。', '2024年8月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '甘肃省博物馆专题展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(59, 30, '青海历史文化展', '展示青海地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '青海省博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(60, 30, '青海湖文化展', '展示青海湖地区的自然和人文历史。', '2024年9月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '青海省博物馆专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(61, 31, '内蒙古历史文化展', '展示内蒙古地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '内蒙古博物院主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(62, 31, '草原文化展', '展示草原文化和游牧民族的历史。', '2024年10月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '内蒙古博物院专题展厅', '民俗风情', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(63, 32, '宁夏历史文化展', '展示宁夏地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '宁夏博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(64, 32, '西夏文化展', '展示西夏王朝的历史和文化。', '2024年11月 - 2024年12月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '宁夏博物馆专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(65, 33, '新疆历史文化展', '展示新疆地区的历史文化发展历程。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '新疆维吾尔自治区博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(66, 33, '丝绸之路西域文明展', '展示丝绸之路西域段的历史和文化交流。', '2024年12月 - 2025年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '新疆维吾尔自治区博物馆专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(67, 34, '故宫文物精华展', '展示故宫珍藏的文物精华。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '台北故宫博物院主展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(68, 34, '书画艺术展', '展示中国古代书画艺术精品。', '2024年1月 - 2024年6月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '台北故宫博物院书画展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(69, 35, '香港故事展', '展示香港从开埠至今的历史发展。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '香港历史博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(70, 35, '香港民俗文化展', '展示香港的传统民俗和文化遗产。', '2024年2月 - 2024年8月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '香港历史博物馆专题展厅', '民俗风情', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(71, 36, '香港艺术展', '展示香港本土艺术家的作品和艺术发展。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '香港艺术馆主展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(72, 36, '中国书画展', '展示中国书画艺术精品。', '2024年3月 - 2024年9月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '香港艺术馆专题展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(73, 37, '澳门历史展', '展示澳门从开埠至今的历史发展。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '澳门博物馆主展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(74, 37, '澳门文化遗产展', '展示澳门的世界文化遗产和传统建筑。', '2024年4月 - 2024年10月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '澳门博物馆专题展厅', '历史文化', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(75, 38, '澳门艺术展', '展示澳门本土艺术家的作品和艺术发展。', '常设展览', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '澳门艺术博物馆主展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(76, 38, '中西艺术交流展', '展示东西方艺术在澳门的交流与融合。', '2024年5月 - 2024年11月', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=500&h=300&fit=crop', '澳门艺术博物馆专题展厅', '艺术精品', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- ============================================
-- 博物馆活动表数据
-- 共 114 条
-- ============================================
DELETE FROM `museum_activity`;
INSERT INTO `museum_activity` (
  `id`, `museum_id`, `title`, `description`, `date`, `time`, `location`, `image`, `is_active`
) VALUES
(1, 1, '故宫博物院年度特展', '探索故宫珍藏的国宝级文物，了解中国古代文化的博大精深', '2024-05-01 至 2024-08-01', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(2, 1, '紫禁城建成600周年纪念活动', '庆祝紫禁城建成600周年，举办系列文化活动和学术讲座', '2024-09-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(3, 1, '故宫夜游活动', '夜间开放故宫，体验不一样的紫禁城夜景', '2024-10-01 至 2024-10-07', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(4, 2, '中国科学技术馆科技节', '举办科技节活动，展示前沿科技成果和互动体验', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(5, 2, '青少年科技创新大赛', '面向全国青少年的科技创新竞赛活动', '2024-11-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(6, 2, '机器人编程体验营', '青少年机器人编程和人工智能体验活动', '2024-08-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(7, 3, '上海博物馆青铜器特展', '展示中国古代青铜器的艺术魅力和历史价值', '2024-06-01 至 2024-09-01', NULL, NULL, 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(8, 3, '书画鉴赏讲座', '邀请知名专家讲解中国古代书画艺术', '2024-10-15 至 2024-12-15', NULL, NULL, 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(9, 3, '文物修复体验活动', '让公众了解文物修复过程，体验传统修复技艺', '2024-09-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(10, 4, '兵马俑发现50周年纪念展', '纪念兵马俑发现50周年，展示最新考古成果', '2024-03-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop', 1),
(11, 4, '秦文化学术研讨会', '国内外专家学者共同探讨秦代历史文化', '2024-06-15 至 2024-06-20', NULL, NULL, 'https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop', 1),
(12, 4, '考古体验活动', '模拟考古发掘体验，了解考古工作流程', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=600&fit=crop', 1),
(13, 5, '大唐文化主题展', '展示唐代文化艺术的辉煌成就', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(14, 5, '丝绸之路文物展', '展示丝绸之路沿线的历史文物和文化交流', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(15, 5, '唐代服饰体验活动', '穿唐装、学唐礼，体验唐代文化生活', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(16, 6, '江南文化特展', '展示江南地区的历史文化和艺术特色', '2024-03-15 至 2024-09-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(17, 6, '民国风情展', '展示民国时期的社会生活和文化风貌', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(18, 6, '非遗传承体验活动', '体验南京云锦、金陵刻经等非遗技艺', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(19, 7, '中原文明特展', '展示中原地区悠久的历史文明', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(20, 7, '商周青铜器研讨会', '探讨商周青铜器的制作工艺和文化内涵', '2024-05-15 至 2024-05-20', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(21, 7, '考古发掘成果展', '展示河南最新的考古发掘成果', '2024-08-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(22, 8, '越文化特展', '展示越国的历史文化和艺术成就', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(23, 8, '龙泉青瓷精品展', '展示龙泉青瓷的精美工艺和艺术价值', '2024-06-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(24, 8, '茶文化体验活动', '体验浙江茶文化，学习茶艺知识', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(25, 9, '楚文化特展', '展示楚国的历史文化和艺术成就', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(26, 9, '曾侯乙编钟演奏会', '聆听曾侯乙编钟的千年之音', '2024-05-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(27, 9, '荆楚文化讲座', '专家学者讲解荆楚历史文化', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(28, 10, '马王堆汉墓特展', '展示马王堆汉墓的珍贵文物和考古发现', '2024-03-15 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(29, 10, '湘楚文化研讨会', '探讨湘楚地区的历史文化', '2024-06-15 至 2024-06-20', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(30, 10, '汉代服饰体验', '穿汉服、学汉礼，体验汉代文化', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(31, 11, '巴蜀文化特展', '展示巴蜀地区的历史文化和艺术成就', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(32, 11, '三星堆文化讲座', '专家学者讲解三星堆文化的奥秘', '2024-05-15 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(33, 11, '川剧变脸体验', '了解川剧变脸艺术，体验传统文化', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(34, 12, '岭南文化特展', '展示岭南地区的历史文化和艺术特色', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(35, 12, '海上丝绸之路展', '展示海上丝绸之路的历史和文化交流', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(36, 12, '广彩瓷器体验活动', '了解广彩瓷器工艺，体验传统技艺', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(37, 13, '津门文化特展', '展示天津地区的历史文化和民俗风情', '2024-04-15 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(38, 13, '近代天津历史展', '展示近代天津的历史变迁和社会发展', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(39, 13, '杨柳青年画体验', '了解杨柳青年画工艺，体验传统艺术', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(40, 14, '三峡文化特展', '展示三峡地区的历史文化和自然风光', '2024-03-15 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(41, 14, '巴渝文化研讨会', '探讨巴渝地区的历史文化', '2024-06-15 至 2024-06-20', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(42, 14, '抗战文化讲座', '讲述重庆抗战时期的历史故事', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(43, 15, '齐鲁文化特展', '展示齐鲁地区的历史文化和儒家思想', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(44, 15, '孔子文化讲座', '专家学者讲解孔子思想和儒家文化', '2024-05-15 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(45, 15, '大汶口文化体验', '了解史前文化，体验原始生活', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(46, 16, '辽沈文化特展', '展示辽宁地区的历史文化和民族风情', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(47, 16, '红山文化研讨会', '探讨红山文化的考古发现和文化内涵', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(48, 16, '清代宫廷文化展', '展示清代宫廷文化和沈阳故宫文物', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(49, 17, '关东文化特展', '展示吉林地区的历史文化和民俗风情', '2024-04-15 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(50, 17, '高句丽文化讲座', '专家学者讲解高句丽历史文化', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(51, 17, '满族文化体验', '了解满族文化，体验传统习俗', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(52, 18, '黑土文化特展', '展示黑龙江地区的历史文化和自然资源', '2024-03-15 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(53, 18, '冰雪文化展', '展示黑龙江的冰雪文化和冬季运动', '2024-06-15 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(54, 18, '赫哲族文化体验', '了解赫哲族文化，体验渔猎生活', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(55, 19, '闽台文化特展', '展示福建与台湾的历史文化联系', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(56, 19, '海上丝绸之路研讨会', '探讨海上丝绸之路的历史和文化', '2024-05-15 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(57, 19, '闽南文化体验', '了解闽南文化，体验传统习俗', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(58, 20, '徽文化特展', '展示徽州地区的历史文化和艺术成就', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(59, 20, '徽商文化讲座', '专家学者讲解徽商历史和文化', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(60, 20, '徽派建筑体验', '了解徽派建筑特色，体验传统工艺', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(61, 21, '燕赵文化特展', '展示燕赵地区的历史文化和英雄故事', '2024-04-15 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(62, 21, '中山国文化展', '展示中山国的历史文化和考古发现', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(63, 21, '满城汉墓讲座', '专家学者讲解满城汉墓的考古发现', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(64, 22, '晋文化特展', '展示山西地区的历史文化和晋商文化', '2024-03-15 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(65, 22, '晋商文化研讨会', '探讨晋商的历史和文化贡献', '2024-06-15 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(66, 22, '山西古建筑体验', '了解山西古建筑特色，参观古建遗存', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(67, 23, '赣文化特展', '展示江西地区的历史文化和红色文化', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(68, 23, '红色文化讲座', '讲述江西的革命历史和红色故事', '2024-05-15 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(69, 23, '景德镇瓷器体验', '了解景德镇瓷器工艺，体验制瓷过程', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(70, 24, '壮乡文化特展', '展示广西地区的历史文化和民族风情', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(71, 24, '铜鼓文化讲座', '专家学者讲解铜鼓的历史和文化', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(72, 24, '壮族文化体验', '了解壮族文化，体验民族习俗', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(73, 25, '南海文化特展', '展示南海地区的历史文化和海洋文明', '2024-04-15 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(74, 25, '水下考古成果展', '展示南海水下考古的重要发现', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(75, 25, '黎族文化体验', '了解黎族文化，体验传统技艺', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(76, 26, '黔文化特展', '展示贵州地区的历史文化和民族风情', '2024-03-15 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(77, 26, '夜郎文化讲座', '专家学者讲解夜郎古国的历史', '2024-06-15 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(78, 26, '苗族文化体验', '了解苗族文化，体验民族习俗', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(79, 27, '滇文化特展', '展示云南地区的历史文化和民族风情', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(80, 27, '古滇国文化讲座', '专家学者讲解古滇国的历史文化', '2024-05-15 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(81, 27, '少数民族文化体验', '了解云南少数民族文化，体验民族习俗', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(82, 28, '藏文化特展', '展示西藏地区的历史文化和宗教艺术', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(83, 28, '唐卡艺术展', '展示唐卡艺术的精美工艺和宗教内涵', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(84, 28, '藏族文化体验', '了解藏族文化，体验传统习俗', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(85, 29, '陇原文化特展', '展示甘肃地区的历史文化和丝绸之路文明', '2024-04-15 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(86, 29, '敦煌文化讲座', '专家学者讲解敦煌艺术和文化', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(87, 29, '彩陶文化体验', '了解彩陶文化，体验制陶工艺', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(88, 30, '青藏文化特展', '展示青海地区的历史文化和民族风情', '2024-03-15 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(89, 30, '青海湖文化讲座', '专家学者讲解青海湖的自然和文化', '2024-06-15 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(90, 30, '土族文化体验', '了解土族文化，体验民族习俗', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(91, 31, '草原文化特展', '展示内蒙古地区的历史文化和草原文明', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(92, 31, '蒙古族文化讲座', '专家学者讲解蒙古族的历史文化', '2024-05-15 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(93, 31, '那达慕文化体验', '了解那达慕大会，体验蒙古族习俗', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(94, 32, '塞上文化特展', '展示宁夏地区的历史文化和民族风情', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(95, 32, '西夏文化讲座', '专家学者讲解西夏王朝的历史', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(96, 32, '回族文化体验', '了解回族文化，体验民族习俗', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(97, 33, '西域文化特展', '展示新疆地区的历史文化和丝绸之路文明', '2024-04-15 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(98, 33, '楼兰文化讲座', '专家学者讲解楼兰古国的历史', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(99, 33, '维吾尔族文化体验', '了解维吾尔族文化，体验民族习俗', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(100, 34, '故宫文物特展', '展示台北故宫珍藏的中国古代文物', '2024-03-15 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(101, 34, '书画艺术讲座', '专家学者讲解中国古代书画艺术', '2024-06-15 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(102, 34, '文物修复体验', '了解文物修复过程，体验传统技艺', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(103, 35, '香港故事特展', '展示香港从远古到现代的历史发展', '2024-04-01 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(104, 35, '香港文化讲座', '专家学者讲解香港的历史文化', '2024-05-15 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(105, 35, '民俗文化体验', '了解香港民俗文化，体验传统习俗', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(106, 36, '香港艺术特展', '展示香港本土艺术和国际艺术作品', '2024-03-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(107, 36, '当代艺术讲座', '专家学者讲解当代艺术发展', '2024-06-01 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(108, 36, '艺术创作体验', '参与艺术创作，体验艺术魅力', '2024-07-15 至 2024-08-15', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(109, 37, '澳门历史特展', '展示澳门数百年的历史变迁', '2024-04-15 至 2024-10-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(110, 37, '中西文化讲座', '专家学者讲解澳门的中西文化交融', '2024-05-01 至 2024-11-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(111, 37, '澳门文化体验', '了解澳门文化，体验中西交融', '2024-08-01 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(112, 38, '澳门艺术特展', '展示澳门本土艺术和国际艺术作品', '2024-03-15 至 2024-09-30', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(113, 38, '中西艺术讲座', '专家学者讲解中西艺术交流', '2024-06-15 至 2024-12-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(114, 38, '艺术创作体验', '参与艺术创作，体验艺术魅力', '2024-07-01 至 2024-08-31', NULL, NULL, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1);

-- ============================================
-- 博物馆新闻表数据
-- 共 114 条
-- ============================================
DELETE FROM `museum_news`;
INSERT INTO `museum_news` (
  `id`, `museum_id`, `title`, `description`, `date`, `image`, `is_active`
) VALUES
(1, 1, '故宫博物院新馆开馆', '故宫博物院新馆正式开放，展示更多珍贵文物', '2024-04-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(2, 1, '故宫文物数字化项目启动', '故宫博物院启动大规模文物数字化项目，让更多人在线欣赏国宝', '2024-05-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(3, 1, '故宫博物院获赠珍贵文物', '故宫博物院接受社会捐赠，新增多件珍贵文物', '2024-06-10', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(4, 2, '中国科学技术馆举办人工智能展览', '中国科学技术馆举办人工智能主题展览，展示AI技术的最新发展', '2024-07-05', 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(5, 2, '科技馆新增互动体验区', '中国科学技术馆新增多个互动体验区，提升参观体验', '2024-08-15', 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(6, 2, '科技馆荣获科普教育基地称号', '中国科学技术馆再次荣获全国科普教育基地称号', '2024-09-20', 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(7, 3, '上海博物馆与国际博物馆合作', '上海博物馆与多个国际博物馆达成合作，将举办系列国际展览', '2024-06-10', 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(8, 3, '上海博物馆新馆建设启动', '上海博物馆东馆建设正式启动，预计2025年开放', '2024-07-25', 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(9, 3, '上海博物馆举办国际学术研讨会', '上海博物馆举办国际博物馆学术研讨会', '2024-08-30', 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(10, 4, '秦始皇兵马俑博物馆年度特展开幕', '秦始皇兵马俑博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(11, 4, '秦始皇兵马俑博物馆新增数字化服务', '秦始皇兵马俑博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(12, 4, '秦始皇兵马俑博物馆举办文化讲座', '秦始皇兵马俑博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(13, 5, '陕西历史博物馆年度特展开幕', '陕西历史博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(14, 5, '陕西历史博物馆新增数字化服务', '陕西历史博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(15, 5, '陕西历史博物馆举办文化讲座', '陕西历史博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(16, 6, '南京博物院年度特展开幕', '南京博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(17, 6, '南京博物院新增数字化服务', '南京博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(18, 6, '南京博物院举办文化讲座', '南京博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(19, 7, '河南博物院年度特展开幕', '河南博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(20, 7, '河南博物院新增数字化服务', '河南博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(21, 7, '河南博物院举办文化讲座', '河南博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(22, 8, '浙江省博物馆年度特展开幕', '浙江省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(23, 8, '浙江省博物馆新增数字化服务', '浙江省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(24, 8, '浙江省博物馆举办文化讲座', '浙江省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(25, 9, '湖北省博物馆年度特展开幕', '湖北省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(26, 9, '湖北省博物馆新增数字化服务', '湖北省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(27, 9, '湖北省博物馆举办文化讲座', '湖北省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(28, 10, '湖南省博物馆年度特展开幕', '湖南省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(29, 10, '湖南省博物馆新增数字化服务', '湖南省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(30, 10, '湖南省博物馆举办文化讲座', '湖南省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(31, 11, '四川博物院年度特展开幕', '四川博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(32, 11, '四川博物院新增数字化服务', '四川博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(33, 11, '四川博物院举办文化讲座', '四川博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(34, 12, '广东省博物馆年度特展开幕', '广东省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(35, 12, '广东省博物馆新增数字化服务', '广东省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(36, 12, '广东省博物馆举办文化讲座', '广东省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(37, 13, '天津博物馆年度特展开幕', '天津博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(38, 13, '天津博物馆新增数字化服务', '天津博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(39, 13, '天津博物馆举办文化讲座', '天津博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(40, 14, '重庆中国三峡博物馆年度特展开幕', '重庆中国三峡博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(41, 14, '重庆中国三峡博物馆新增数字化服务', '重庆中国三峡博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(42, 14, '重庆中国三峡博物馆举办文化讲座', '重庆中国三峡博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(43, 15, '山东博物馆年度特展开幕', '山东博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(44, 15, '山东博物馆新增数字化服务', '山东博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(45, 15, '山东博物馆举办文化讲座', '山东博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(46, 16, '辽宁省博物馆年度特展开幕', '辽宁省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(47, 16, '辽宁省博物馆新增数字化服务', '辽宁省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(48, 16, '辽宁省博物馆举办文化讲座', '辽宁省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(49, 17, '吉林省博物院年度特展开幕', '吉林省博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(50, 17, '吉林省博物院新增数字化服务', '吉林省博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(51, 17, '吉林省博物院举办文化讲座', '吉林省博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(52, 18, '黑龙江省博物馆年度特展开幕', '黑龙江省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(53, 18, '黑龙江省博物馆新增数字化服务', '黑龙江省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(54, 18, '黑龙江省博物馆举办文化讲座', '黑龙江省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(55, 19, '福建博物院年度特展开幕', '福建博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(56, 19, '福建博物院新增数字化服务', '福建博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(57, 19, '福建博物院举办文化讲座', '福建博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(58, 20, '安徽博物院年度特展开幕', '安徽博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(59, 20, '安徽博物院新增数字化服务', '安徽博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(60, 20, '安徽博物院举办文化讲座', '安徽博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(61, 21, '河北博物院年度特展开幕', '河北博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(62, 21, '河北博物院新增数字化服务', '河北博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(63, 21, '河北博物院举办文化讲座', '河北博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(64, 22, '山西博物院年度特展开幕', '山西博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(65, 22, '山西博物院新增数字化服务', '山西博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(66, 22, '山西博物院举办文化讲座', '山西博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(67, 23, '江西省博物馆年度特展开幕', '江西省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(68, 23, '江西省博物馆新增数字化服务', '江西省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(69, 23, '江西省博物馆举办文化讲座', '江西省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(70, 24, '广西壮族自治区博物馆年度特展开幕', '广西壮族自治区博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(71, 24, '广西壮族自治区博物馆新增数字化服务', '广西壮族自治区博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(72, 24, '广西壮族自治区博物馆举办文化讲座', '广西壮族自治区博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(73, 25, '海南省博物馆年度特展开幕', '海南省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(74, 25, '海南省博物馆新增数字化服务', '海南省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(75, 25, '海南省博物馆举办文化讲座', '海南省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(76, 26, '贵州省博物馆年度特展开幕', '贵州省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(77, 26, '贵州省博物馆新增数字化服务', '贵州省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(78, 26, '贵州省博物馆举办文化讲座', '贵州省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(79, 27, '云南省博物馆年度特展开幕', '云南省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(80, 27, '云南省博物馆新增数字化服务', '云南省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(81, 27, '云南省博物馆举办文化讲座', '云南省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(82, 28, '西藏博物馆年度特展开幕', '西藏博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(83, 28, '西藏博物馆新增数字化服务', '西藏博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(84, 28, '西藏博物馆举办文化讲座', '西藏博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(85, 29, '甘肃省博物馆年度特展开幕', '甘肃省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(86, 29, '甘肃省博物馆新增数字化服务', '甘肃省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(87, 29, '甘肃省博物馆举办文化讲座', '甘肃省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(88, 30, '青海省博物馆年度特展开幕', '青海省博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(89, 30, '青海省博物馆新增数字化服务', '青海省博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(90, 30, '青海省博物馆举办文化讲座', '青海省博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(91, 31, '内蒙古博物院年度特展开幕', '内蒙古博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(92, 31, '内蒙古博物院新增数字化服务', '内蒙古博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(93, 31, '内蒙古博物院举办文化讲座', '内蒙古博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(94, 32, '宁夏博物馆年度特展开幕', '宁夏博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(95, 32, '宁夏博物馆新增数字化服务', '宁夏博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(96, 32, '宁夏博物馆举办文化讲座', '宁夏博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(97, 33, '新疆维吾尔自治区博物馆年度特展开幕', '新疆维吾尔自治区博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(98, 33, '新疆维吾尔自治区博物馆新增数字化服务', '新疆维吾尔自治区博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(99, 33, '新疆维吾尔自治区博物馆举办文化讲座', '新疆维吾尔自治区博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(100, 34, '台北故宫博物院年度特展开幕', '台北故宫博物院举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(101, 34, '台北故宫博物院新增数字化服务', '台北故宫博物院推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(102, 34, '台北故宫博物院举办文化讲座', '台北故宫博物院举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(103, 35, '香港历史博物馆年度特展开幕', '香港历史博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(104, 35, '香港历史博物馆新增数字化服务', '香港历史博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(105, 35, '香港历史博物馆举办文化讲座', '香港历史博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(106, 36, '香港艺术馆年度特展开幕', '香港艺术馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(107, 36, '香港艺术馆新增数字化服务', '香港艺术馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(108, 36, '香港艺术馆举办文化讲座', '香港艺术馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(109, 37, '澳门博物馆年度特展开幕', '澳门博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(110, 37, '澳门博物馆新增数字化服务', '澳门博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(111, 37, '澳门博物馆举办文化讲座', '澳门博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(112, 38, '澳门艺术博物馆年度特展开幕', '澳门艺术博物馆举办年度特展，展示珍贵文物和历史文化', '2024-06-15', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(113, 38, '澳门艺术博物馆新增数字化服务', '澳门艺术博物馆推出数字化服务，提升参观体验', '2024-07-20', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(114, 38, '澳门艺术博物馆举办文化讲座', '澳门艺术博物馆举办系列文化讲座，传播历史文化知识', '2024-08-25', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1);

-- ============================================
-- 博物馆沉浸式体验表数据
-- 共 114 条
-- ============================================
DELETE FROM `museum_immersive`;
INSERT INTO `museum_immersive` (
  `id`, `museum_id`, `title`, `description`, `image`, `is_active`
) VALUES
(1, 1, '紫禁城VR体验', '通过VR技术，身临其境地感受紫禁城的壮丽景象', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(2, 1, '古代宫廷生活还原', '通过沉浸式剧场，还原古代宫廷生活场景', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(3, 1, '故宫夜游VR体验', '夜间VR体验，感受不一样的紫禁城夜景', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(4, 2, '科技互动体验', '通过互动装置，体验前沿科技的魅力', 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(5, 2, '宇宙探索VR体验', '通过VR技术，探索宇宙的奥秘', 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(6, 2, '机器人互动体验', '与智能机器人互动，了解人工智能技术', 'https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop', 1),
(7, 3, '青铜器制作工艺体验', '亲手体验古代青铜器的制作过程', 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(8, 3, '书画艺术VR体验', '通过VR技术，欣赏中国古代书画艺术', 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(9, 3, '陶瓷制作体验', '亲手体验陶瓷制作工艺', 'https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop', 1),
(10, 4, '秦始皇兵马俑博物馆 VR虚拟参观', '通过VR技术，身临其境地参观秦始皇兵马俑博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(11, 4, '秦始皇兵马俑博物馆 互动体验', '通过互动装置，了解秦始皇兵马俑博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(12, 4, '秦始皇兵马俑博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(13, 5, '陕西历史博物馆 VR虚拟参观', '通过VR技术，身临其境地参观陕西历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(14, 5, '陕西历史博物馆 互动体验', '通过互动装置，了解陕西历史博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(15, 5, '陕西历史博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(16, 6, '南京博物院 VR虚拟参观', '通过VR技术，身临其境地参观南京博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(17, 6, '南京博物院 互动体验', '通过互动装置，了解南京博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(18, 6, '南京博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(19, 7, '河南博物院 VR虚拟参观', '通过VR技术，身临其境地参观河南博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(20, 7, '河南博物院 互动体验', '通过互动装置，了解河南博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(21, 7, '河南博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(22, 8, '浙江省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观浙江省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(23, 8, '浙江省博物馆 互动体验', '通过互动装置，了解浙江省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(24, 8, '浙江省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(25, 9, '湖北省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观湖北省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(26, 9, '湖北省博物馆 互动体验', '通过互动装置，了解湖北省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(27, 9, '湖北省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(28, 10, '湖南省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观湖南省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(29, 10, '湖南省博物馆 互动体验', '通过互动装置，了解湖南省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(30, 10, '湖南省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(31, 11, '四川博物院 VR虚拟参观', '通过VR技术，身临其境地参观四川博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(32, 11, '四川博物院 互动体验', '通过互动装置，了解四川博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(33, 11, '四川博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(34, 12, '广东省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观广东省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(35, 12, '广东省博物馆 互动体验', '通过互动装置，了解广东省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(36, 12, '广东省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(37, 13, '天津博物馆 VR虚拟参观', '通过VR技术，身临其境地参观天津博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(38, 13, '天津博物馆 互动体验', '通过互动装置，了解天津博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(39, 13, '天津博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(40, 14, '重庆中国三峡博物馆 VR虚拟参观', '通过VR技术，身临其境地参观重庆中国三峡博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(41, 14, '重庆中国三峡博物馆 互动体验', '通过互动装置，了解重庆中国三峡博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(42, 14, '重庆中国三峡博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(43, 15, '山东博物馆 VR虚拟参观', '通过VR技术，身临其境地参观山东博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(44, 15, '山东博物馆 互动体验', '通过互动装置，了解山东博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(45, 15, '山东博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(46, 16, '辽宁省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观辽宁省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(47, 16, '辽宁省博物馆 互动体验', '通过互动装置，了解辽宁省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(48, 16, '辽宁省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(49, 17, '吉林省博物院 VR虚拟参观', '通过VR技术，身临其境地参观吉林省博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(50, 17, '吉林省博物院 互动体验', '通过互动装置，了解吉林省博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(51, 17, '吉林省博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(52, 18, '黑龙江省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观黑龙江省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(53, 18, '黑龙江省博物馆 互动体验', '通过互动装置，了解黑龙江省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(54, 18, '黑龙江省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(55, 19, '福建博物院 VR虚拟参观', '通过VR技术，身临其境地参观福建博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(56, 19, '福建博物院 互动体验', '通过互动装置，了解福建博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(57, 19, '福建博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(58, 20, '安徽博物院 VR虚拟参观', '通过VR技术，身临其境地参观安徽博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(59, 20, '安徽博物院 互动体验', '通过互动装置，了解安徽博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(60, 20, '安徽博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(61, 21, '河北博物院 VR虚拟参观', '通过VR技术，身临其境地参观河北博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(62, 21, '河北博物院 互动体验', '通过互动装置，了解河北博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(63, 21, '河北博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(64, 22, '山西博物院 VR虚拟参观', '通过VR技术，身临其境地参观山西博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(65, 22, '山西博物院 互动体验', '通过互动装置，了解山西博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(66, 22, '山西博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(67, 23, '江西省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观江西省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(68, 23, '江西省博物馆 互动体验', '通过互动装置，了解江西省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(69, 23, '江西省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(70, 24, '广西壮族自治区博物馆 VR虚拟参观', '通过VR技术，身临其境地参观广西壮族自治区博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(71, 24, '广西壮族自治区博物馆 互动体验', '通过互动装置，了解广西壮族自治区博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(72, 24, '广西壮族自治区博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(73, 25, '海南省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观海南省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(74, 25, '海南省博物馆 互动体验', '通过互动装置，了解海南省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(75, 25, '海南省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(76, 26, '贵州省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观贵州省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(77, 26, '贵州省博物馆 互动体验', '通过互动装置，了解贵州省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(78, 26, '贵州省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(79, 27, '云南省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观云南省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(80, 27, '云南省博物馆 互动体验', '通过互动装置，了解云南省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(81, 27, '云南省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(82, 28, '西藏博物馆 VR虚拟参观', '通过VR技术，身临其境地参观西藏博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(83, 28, '西藏博物馆 互动体验', '通过互动装置，了解西藏博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(84, 28, '西藏博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(85, 29, '甘肃省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观甘肃省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(86, 29, '甘肃省博物馆 互动体验', '通过互动装置，了解甘肃省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(87, 29, '甘肃省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(88, 30, '青海省博物馆 VR虚拟参观', '通过VR技术，身临其境地参观青海省博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(89, 30, '青海省博物馆 互动体验', '通过互动装置，了解青海省博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(90, 30, '青海省博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(91, 31, '内蒙古博物院 VR虚拟参观', '通过VR技术，身临其境地参观内蒙古博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(92, 31, '内蒙古博物院 互动体验', '通过互动装置，了解内蒙古博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(93, 31, '内蒙古博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(94, 32, '宁夏博物馆 VR虚拟参观', '通过VR技术，身临其境地参观宁夏博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(95, 32, '宁夏博物馆 互动体验', '通过互动装置，了解宁夏博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(96, 32, '宁夏博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(97, 33, '新疆维吾尔自治区博物馆 VR虚拟参观', '通过VR技术，身临其境地参观新疆维吾尔自治区博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(98, 33, '新疆维吾尔自治区博物馆 互动体验', '通过互动装置，了解新疆维吾尔自治区博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(99, 33, '新疆维吾尔自治区博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(100, 34, '台北故宫博物院 VR虚拟参观', '通过VR技术，身临其境地参观台北故宫博物院', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(101, 34, '台北故宫博物院 互动体验', '通过互动装置，了解台北故宫博物院的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(102, 34, '台北故宫博物院 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(103, 35, '香港历史博物馆 VR虚拟参观', '通过VR技术，身临其境地参观香港历史博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(104, 35, '香港历史博物馆 互动体验', '通过互动装置，了解香港历史博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(105, 35, '香港历史博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(106, 36, '香港艺术馆 VR虚拟参观', '通过VR技术，身临其境地参观香港艺术馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(107, 36, '香港艺术馆 互动体验', '通过互动装置，了解香港艺术馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(108, 36, '香港艺术馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(109, 37, '澳门博物馆 VR虚拟参观', '通过VR技术，身临其境地参观澳门博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(110, 37, '澳门博物馆 互动体验', '通过互动装置，了解澳门博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(111, 37, '澳门博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(112, 38, '澳门艺术博物馆 VR虚拟参观', '通过VR技术，身临其境地参观澳门艺术博物馆', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(113, 38, '澳门艺术博物馆 互动体验', '通过互动装置，了解澳门艺术博物馆的历史文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1),
(114, 38, '澳门艺术博物馆 AR增强现实', '通过AR技术，增强参观体验', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop', 1);

-- ============================================
-- 博物馆文创产品表数据
-- 共 40 条
-- ============================================
DELETE FROM `museum_creative_product`;
INSERT INTO `museum_creative_product` (
  `id`, `museum_id`, `name`, `description`, `price`, `image`, `category`, `is_active`
) VALUES
(1, 1, '故宫文创笔记本', '采用故宫元素设计的精美笔记本，适合日常使用和收藏。', 88, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(2, 1, '故宫文创书签', '精美的金属书签，上面印有故宫经典图案。', 38, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(3, 2, '科技主题T恤', '印有科技元素的时尚T恤，适合青少年和科技爱好者。', 128, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '服装', 1),
(4, 2, '科学实验套装', '适合青少年的科学实验套装，包含多种实验器材。', 198, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '教育', 1),
(5, 3, '青铜器主题文创', '以上海博物馆馆藏青铜器为灵感设计的文创产品。', 158, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(6, 4, '兵马俑文创摆件', '以兵马俑为原型设计的精美摆件，具有收藏价值。', 298, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(7, 5, '唐代文物主题文创', '以陕西历史博物馆唐代文物为灵感设计的文创产品。', 128, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(8, 6, '明清艺术主题文创', '以南京博物院明清艺术藏品为灵感设计的文创产品。', 168, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(9, 7, '商周青铜器主题文创', '以河南博物院商周青铜器为灵感设计的文创产品。', 198, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(10, 8, '龙泉青瓷主题文创', '以浙江省博物馆龙泉青瓷为灵感设计的文创产品。', 268, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(11, 9, '曾侯乙编钟主题文创', '以湖北省博物馆曾侯乙编钟为灵感设计的文创产品。', 188, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(12, 10, '马王堆汉墓主题文创', '以湖南省博物馆马王堆汉墓文物为灵感设计的文创产品。', 158, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(13, 11, '三星堆主题文创', '以四川博物院三星堆文物为灵感设计的文创产品。', 238, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(14, 12, '海上丝绸之路主题文创', '以广东省博物馆海上丝绸之路文物为灵感设计的文创产品。', 168, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(15, 13, '清代瓷器主题文创', '以天津博物馆清代瓷器为灵感设计的文创产品。', 198, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(16, 14, '三峡主题文创', '以重庆中国三峡博物馆三峡文物为灵感设计的文创产品。', 148, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(17, 15, '大汶口文化主题文创', '以山东博物馆大汶口文化文物为灵感设计的文创产品。', 178, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(18, 16, '红山文化主题文创', '以辽宁省博物馆红山文化文物为灵感设计的文创产品。', 188, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(19, 17, '高句丽文化主题文创', '以吉林省博物院高句丽文化文物为灵感设计的文创产品。', 168, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(20, 18, '赫哲族文化主题文创', '以黑龙江省博物馆赫哲族文化文物为灵感设计的文创产品。', 158, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(21, 19, '海上丝绸之路主题文创', '以福建博物院海上丝绸之路文物为灵感设计的文创产品。', 178, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(22, 20, '徽州文化主题文创', '以安徽博物院徽州文化文物为灵感设计的文创产品。', 148, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(23, 21, '满城汉墓主题文创', '以河北博物院满城汉墓文物为灵感设计的文创产品。', 168, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(24, 22, '晋国青铜器主题文创', '以山西博物院晋国青铜器为灵感设计的文创产品。', 188, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(25, 23, '海昏侯文化主题文创', '以江西省博物馆海昏侯墓文物为灵感设计的文创产品。', 178, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(26, 24, '铜鼓文化主题文创', '以广西壮族自治区博物馆铜鼓文物为灵感设计的文创产品。', 158, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(27, 25, '南海文化主题文创', '以海南省博物馆南海水下文化遗产为灵感设计的文创产品。', 168, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(28, 26, '夜郎文化主题文创', '以贵州省博物馆夜郎文化文物为灵感设计的文创产品。', 148, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(29, 27, '古滇国主题文创', '以云南省博物馆古滇国青铜器为灵感设计的文创产品。', 188, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(30, 28, '唐卡主题文创', '以西藏博物馆唐卡艺术为灵感设计的文创产品。', 268, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(31, 29, '马踏飞燕主题文创', '以甘肃省博物馆马踏飞燕为灵感设计的文创产品。', 198, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(32, 30, '彩陶主题文创', '以青海省博物馆彩陶文物为灵感设计的文创产品。', 138, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(33, 31, '草原文化主题文创', '以内蒙古博物院草原文化文物为灵感设计的文创产品。', 178, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(34, 32, '西夏文化主题文创', '以宁夏博物馆西夏文物为灵感设计的文创产品。', 168, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(35, 33, '丝绸之路主题文创', '以新疆维吾尔自治区博物馆丝绸之路文物为灵感设计的文创产品。', 198, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(36, 34, '翠玉白菜主题文创', '以台北故宫博物院翠玉白菜为灵感设计的文创产品。', 288, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(37, 35, '香港故事主题文创', '以香港历史博物馆香港故事展览为灵感设计的文创产品。', 128, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '文具', 1),
(38, 36, '岭南画派主题文创', '以香港艺术馆岭南画派作品为灵感设计的文创产品。', 158, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1),
(39, 37, '中西文化主题文创', '以澳门博物馆中西文化交融特色为灵感设计的文创产品。', 148, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '家居', 1),
(40, 38, '澳门艺术主题文创', '以澳门艺术博物馆藏品为灵感设计的文创产品。', 168, 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=300&fit=crop', '饰品', 1);

-- ============================================
-- 博物馆学术资源表数据
-- 共 40 条
-- ============================================
DELETE FROM `museum_academic_resource`;
INSERT INTO `museum_academic_resource` (
  `id`, `museum_id`, `title`, `author`, `date`, `type`, `description`, `link`, `is_active`
) VALUES
(1, 1, '紫禁城建筑研究', '故宫博物院研究室', '2023-10-15', 'book', '系统研究紫禁城的建筑历史、设计理念和保护技术。', '#', 1),
(2, 1, '清代宫廷文物研究', '故宫博物院文物部', '2023-08-20', 'article', '对清代宫廷文物的分类、年代和工艺进行深入研究。', '#', 1),
(3, 2, '中国古代科技发明史', '中国科学技术馆研究部', '2023-12-01', 'book', '系统介绍中国古代科技发明的历史和影响。', '#', 1),
(4, 2, '现代科技发展趋势', '中国科学技术馆展览部', '2024-03-15', 'video', '专家讲解现代科技的发展趋势和未来展望。', '#', 1),
(5, 3, '中国古代青铜器研究', '上海博物馆研究部', '2023-09-10', 'book', '系统研究中国古代青铜器的发展历程和艺术成就。', '#', 1),
(6, 4, '秦始皇陵考古研究', '秦始皇兵马俑博物馆考古队', '2023-11-20', 'book', '系统介绍秦始皇陵的考古发现和研究成果。', '#', 1),
(7, 5, '陕西历史文化研究', '陕西历史博物馆研究部', '2023-07-15', 'article', '对陕西地区的历史文化进行深入研究。', '#', 1),
(8, 6, '江苏历史文化研究', '南京博物院研究部', '2023-08-10', 'book', '系统研究江苏地区的历史文化发展历程。', '#', 1),
(9, 7, '中原历史文化研究', '河南博物院研究部', '2023-10-05', 'article', '对中原地区的历史文化进行深入研究。', '#', 1),
(10, 8, '浙江历史文化研究', '浙江省博物馆研究部', '2023-09-20', 'book', '系统研究浙江地区的历史文化发展历程。', '#', 1),
(11, 9, '曾侯乙编钟研究', '湖北省博物馆研究部', '2023-11-10', 'article', '对曾侯乙编钟的发现、研究和保护进行深入探讨。', '#', 1),
(12, 10, '马王堆汉墓研究', '湖南省博物馆研究部', '2023-12-05', 'book', '系统介绍马王堆汉墓的考古发现和研究成果。', '#', 1),
(13, 11, '三星堆文化研究', '四川博物院研究部', '2023-08-25', 'article', '对三星堆文化的发现、研究和意义进行深入探讨。', '#', 1),
(14, 12, '海上丝绸之路研究', '广东省博物馆研究部', '2023-10-20', 'book', '系统研究海上丝绸之路的历史和文化交流。', '#', 1),
(15, 13, '天津历史文化研究', '天津博物馆研究部', '2023-09-05', 'article', '对天津地区的历史文化进行深入研究。', '#', 1),
(16, 14, '三峡历史文化研究', '重庆中国三峡博物馆研究部', '2023-11-05', 'book', '系统研究三峡地区的历史文化发展历程。', '#', 1),
(17, 15, '大汶口文化研究', '山东博物馆研究部', '2023-07-20', 'article', '对大汶口文化的发现、研究和意义进行深入探讨。', '#', 1),
(18, 16, '红山文化研究', '辽宁省博物馆研究部', '2023-10-10', 'book', '系统研究红山文化的发现、研究和意义。', '#', 1),
(19, 17, '高句丽文化研究', '吉林省博物院研究部', '2023-08-15', 'article', '对高句丽文化的发现、研究和意义进行深入探讨。', '#', 1),
(20, 18, '赫哲族文化研究', '黑龙江省博物馆研究部', '2023-09-15', 'book', '系统研究赫哲族的传统文化和生活方式。', '#', 1),
(21, 19, '海上丝绸之路研究', '福建博物院研究部', '2023-11-15', 'article', '对福建在海上丝绸之路中的地位和作用进行深入研究。', '#', 1),
(22, 20, '徽州文化研究', '安徽博物院研究部', '2023-10-25', 'book', '系统研究徽州文化的特色和历史遗产。', '#', 1),
(23, 21, '满城汉墓研究', '河北博物院研究部', '2023-09-10', 'article', '对满城汉墓的考古发现和研究成果进行深入探讨。', '#', 1),
(24, 22, '晋国历史文化研究', '山西博物院研究部', '2023-10-15', 'book', '系统研究晋国的历史文化和青铜器成就。', '#', 1),
(25, 23, '海昏侯墓考古研究', '江西省博物馆研究部', '2023-11-20', 'article', '对海昏侯墓的考古发现和出土文物进行深入探讨。', '#', 1),
(26, 24, '广西民族文化研究', '广西壮族自治区博物馆研究部', '2023-08-15', 'book', '系统研究广西各民族的历史文化和民俗风情。', '#', 1),
(27, 25, '南海水下文化遗产研究', '海南省博物馆研究部', '2023-12-01', 'article', '对南海水下文化遗产的发现和保护进行深入探讨。', '#', 1),
(28, 26, '夜郎文化研究', '贵州省博物馆研究部', '2023-09-20', 'book', '系统研究夜郎文化的历史和考古发现。', '#', 1),
(29, 27, '古滇国文化研究', '云南省博物馆研究部', '2023-10-10', 'article', '对古滇国的考古发现和青铜器文化进行深入探讨。', '#', 1),
(30, 28, '藏族文化研究', '西藏博物馆研究部', '2023-11-05', 'book', '系统研究藏族的历史文化和宗教艺术。', '#', 1),
(31, 29, '丝绸之路甘肃段研究', '甘肃省博物馆研究部', '2023-07-15', 'article', '对丝绸之路甘肃段的历史和文物进行深入探讨。', '#', 1),
(32, 30, '青海历史文化研究', '青海省博物馆研究部', '2023-08-20', 'book', '系统研究青海地区的历史文化和民族文物。', '#', 1),
(33, 31, '北方草原文化研究', '内蒙古博物院研究部', '2023-09-25', 'article', '对匈奴、鲜卑、契丹等北方民族的文化进行深入探讨。', '#', 1),
(34, 32, '西夏文化研究', '宁夏博物馆研究部', '2023-10-20', 'book', '系统研究西夏王朝的历史文化和文字。', '#', 1),
(35, 33, '新疆丝绸之路研究', '新疆维吾尔自治区博物馆研究部', '2023-11-15', 'article', '对新疆丝绸之路的考古发现和文化交流进行深入探讨。', '#', 1),
(36, 34, '台北故宫文物研究', '台北故宫博物院研究部', '2023-12-10', 'book', '系统研究台北故宫博物院馆藏文物的历史和艺术价值。', '#', 1),
(37, 35, '香港历史研究', '香港历史博物馆研究部', '2023-09-05', 'article', '对香港从古至今的历史发展进行深入研究。', '#', 1),
(38, 36, '岭南画派研究', '香港艺术馆研究部', '2023-10-30', 'book', '系统研究岭南画派的艺术特色和发展历程。', '#', 1),
(39, 37, '澳门中西文化交流研究', '澳门博物馆研究部', '2023-11-25', 'article', '对澳门在中西文化交流中的历史作用进行深入探讨。', '#', 1),
(40, 38, '澳门艺术研究', '澳门艺术博物馆研究部', '2023-12-15', 'book', '系统研究澳门本土艺术的发展和特色。', '#', 1);

-- ============================================
-- 博物馆专馆表数据
-- 共 65 条
-- ============================================
DELETE FROM `museum_exhibition_hall`;
INSERT INTO `museum_exhibition_hall` (
  `hall_id`, `museum_id`, `name`, `icon`, `category`, `cover_image`, `introduction`, `stats`, `location`, `open_time`, `duration`, `ticket`, `artifacts`, `exhibitions`, `recommendations`, `is_active`
) VALUES
('palace-clock', 1, '钟表馆', '🕰️', '宫廷钟表', 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=500&fit=crop', '钟表馆收藏了清宫旧藏的各类钟表200余件，包括中国自制钟表和英国、法国、瑞士等国制造的精美钟表，展现了18世纪中西方钟表艺术的最高水平。', '{"artifacts":200,"exhibitions":2,"visitors":85}', '奉先殿', '周二至周日 8:30-17:00', '1小时', '需单独购票', '[{"name":"铜镀金写字人钟","period":"清代","description":"英国制造，机械人可书写\\"八方向化九土来王\\"八字","image":"https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop"}]', '[{"title":"清宫钟表精品展","date":"常设展览","description":"展示清宫收藏的中外钟表精品","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=300&h=200&fit=crop","tags":["清宫珍藏","钟表艺术"]}]', '[{"icon":"📚","title":"钟表机械原理讲座","desc":"了解古代钟表机械原理","type":"讲座"}]', 1),
('palace-treasure', 1, '珍宝馆', '💎', '宫廷珍宝', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop', '珍宝馆展出故宫博物院收藏的各类珍贵文物，包括金银器、玉器、珠宝、珐琅器等，体现了清代宫廷生活的奢华与精致。', '{"artifacts":400,"exhibitions":3,"visitors":120}', '皇极殿、宁寿宫', '周二至周日 8:30-17:00', '1.5小时', '需单独购票', '[{"name":"金瓯永固杯","period":"清代","description":"乾隆皇帝元旦开笔仪式专用金杯","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"宫廷珍宝展","date":"常设展览","description":"展示清代宫廷珍贵文物","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop","tags":["宫廷珍藏","珍宝"]}]', '[{"icon":"📚","title":"宫廷珍宝鉴赏","desc":"专家讲解宫廷珍宝","type":"讲座"}]', 1),
('palace-painting', 1, '书画馆', '🎨', '书画艺术', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '故宫博物院书画收藏丰富，包括晋唐宋元明清各代名家作品，是中国古代书画艺术的重要宝库。', '{"artifacts":1500,"exhibitions":8,"visitors":200}', '武英殿', '周二至周日 8:30-17:00', '1.5小时', '包含在门票内', '[{"name":"清明上河图","period":"北宋","description":"张择端绘，描绘汴京繁华景象","image":"https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop"}]', '[{"title":"故宫藏画精品展","date":"2024.03.15 - 2024.06.15","description":"展示故宫珍藏绘画精品","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&h=200&fit=crop","tags":["书画","故宫珍藏"]}]', '[{"icon":"📚","title":"书画鉴赏讲座","desc":"专家讲解书画艺术","type":"讲座"}]', 1),
('palace-ceramic', 1, '陶瓷馆', '🏺', '陶瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '故宫陶瓷馆藏有中国历代陶瓷精品，从原始陶器到明清瓷器，全面展现中国陶瓷艺术的发展历程。', '{"artifacts":3500,"exhibitions":5,"visitors":180}', '延禧宫', '周二至周日 8:30-17:00', '1.5小时', '包含在门票内', '[{"name":"各色釉大瓶","period":"清代","description":"乾隆年间烧制，集17种釉彩于一身","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"明清御窑瓷器展","date":"常设展览","description":"展示明清御窑瓷器精品","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["瓷器","御窑"]}]', '[{"icon":"📚","title":"陶瓷鉴赏讲座","desc":"学习陶瓷鉴定知识","type":"讲座"}]', 1),
('palace-bronze', 1, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '故宫青铜器馆藏有商周至汉代青铜器精品，展现中国古代青铜文明的辉煌成就。', '{"artifacts":800,"exhibitions":3,"visitors":150}', '承乾宫', '周二至周日 8:30-17:00', '1小时', '包含在门票内', '[{"name":"亚丑钺","period":"商代","description":"商代青铜钺，造型独特","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"商周青铜器精品展","date":"常设展览","description":"展示商周青铜器精品","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","商周"]}]', '[{"icon":"📚","title":"青铜器鉴赏","desc":"学习青铜器知识","type":"讲座"}]', 1),
('tech-space', 2, '航天馆', '🚀', '航天科技', 'https://images.unsplash.com/photo-1446776877080-d3615c8e0ed8?w=800&h=500&fit=crop', '航天馆展示中国航天事业的发展历程，包括火箭、卫星、载人航天等实物和模型，让观众了解中国航天的辉煌成就。', '{"artifacts":150,"exhibitions":4,"visitors":200}', '主展厅二层', '周二至周日 9:30-17:00', '1.5小时', '包含在门票内', '[{"name":"长征系列火箭模型","period":"现代","description":"展示长征系列运载火箭的发展","image":"https://images.unsplash.com/photo-1446776877080-d3615c8e0ed8?w=400&h=300&fit=crop"}]', '[{"title":"中国航天成就展","date":"常设展览","description":"展示中国航天事业发展历程","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1446776877080-d3615c8e0ed8?w=300&h=200&fit=crop","tags":["航天","科技"]}]', '[{"icon":"📚","title":"航天科普讲座","desc":"了解航天知识","type":"讲座"}]', 1),
('tech-life', 2, '生命科学馆', '🧬', '生命科学', 'https://images.unsplash.com/photo-1530026187047-4b66e0c3a899?w=800&h=500&fit=crop', '生命科学馆展示生命的奥秘，从基因到生态系统，让观众了解生命的起源、进化和多样性。', '{"artifacts":200,"exhibitions":5,"visitors":180}', '主展厅三层', '周二至周日 9:30-17:00', '1.5小时', '包含在门票内', '[{"name":"DNA双螺旋模型","period":"现代","description":"展示DNA分子结构","image":"https://images.unsplash.com/photo-1530026187047-4b66e0c3a899?w=400&h=300&fit=crop"}]', '[{"title":"生命奥秘探索展","date":"常设展览","description":"探索生命的奥秘","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1530026187047-4b66e0c3a899?w=300&h=200&fit=crop","tags":["生命科学","生物"]}]', '[{"icon":"📚","title":"基因科学讲座","desc":"了解基因技术","type":"讲座"}]', 1),
('tech-robot', 2, '机器人馆', '🤖', '人工智能', 'https://images.unsplash.com/photo-1485827404703-4b8acab8a391?w=800&h=500&fit=crop', '机器人馆展示人工智能和机器人技术的发展，包括工业机器人、服务机器人、特种机器人等。', '{"artifacts":80,"exhibitions":3,"visitors":220}', '主展厅一层', '周二至周日 9:30-17:00', '1小时', '包含在门票内', '[{"name":"工业机械臂","period":"现代","description":"展示工业机器人技术","image":"https://images.unsplash.com/photo-1485827404703-4b8acab8a391?w=400&h=300&fit=crop"}]', '[{"title":"人工智能与机器人展","date":"常设展览","description":"展示AI和机器人技术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1485827404703-4b8acab8a391?w=300&h=200&fit=crop","tags":["人工智能","机器人"]}]', '[{"icon":"📚","title":"AI科普讲座","desc":"了解人工智能","type":"讲座"}]', 1),
('shanghai-bronze', 3, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '上海博物馆青铜器馆藏有商周青铜器精品，以造型优美、纹饰精美著称，是中国青铜器收藏的重要机构。', '{"artifacts":700,"exhibitions":4,"visitors":180}', '一楼展厅', '周二至周日 9:00-17:00', '1.5小时', '免费参观', '[{"name":"大克鼎","period":"西周","description":"西周晚期青铜重器，铭文290字","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"吉金铸华——青铜器精品展","date":"常设展览","description":"展示馆藏青铜器精品","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","商周"]}]', '[{"icon":"📚","title":"青铜器鉴赏讲座","desc":"学习青铜器知识","type":"讲座"}]', 1),
('shanghai-ceramic', 3, '陶瓷馆', '🏺', '陶瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '上海博物馆陶瓷馆藏有历代陶瓷精品，从原始陶器到明清瓷器，系统展现中国陶瓷艺术的发展脉络。', '{"artifacts":500,"exhibitions":3,"visitors":160}', '二楼展厅', '周二至周日 9:00-17:00', '1.5小时', '免费参观', '[{"name":"汝窑盘","period":"北宋","description":"汝窑天青釉精品","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"瓷韵——中国陶瓷艺术展","date":"常设展览","description":"展示中国陶瓷艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["陶瓷","瓷器"]}]', '[{"icon":"📚","title":"陶瓷鉴赏讲座","desc":"学习陶瓷知识","type":"讲座"}]', 1),
('shanghai-painting', 3, '书画馆', '🎨', '书画艺术', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '上海博物馆书画馆藏有晋唐宋元明清各代书画精品，是中国书画艺术的重要收藏机构。', '{"artifacts":1200,"exhibitions":6,"visitors":200}', '三楼展厅', '周二至周日 9:00-17:00', '1.5小时', '免费参观', '[{"name":"高逸图","period":"唐代","description":"孙位绘，描绘竹林七贤","image":"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"}]', '[{"title":"翰墨荟萃——书画精品展","date":"2024.01.15 - 2024.06.15","description":"展示馆藏书画精品","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop","tags":["书画","艺术"]}]', '[{"icon":"📚","title":"书画鉴赏讲座","desc":"学习书画鉴赏","type":"讲座"}]', 1),
('shanghai-jade', 3, '玉器馆', '💎', '玉器艺术', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop', '上海博物馆玉器馆藏有历代玉器精品，展现中国玉文化的深厚底蕴。', '{"artifacts":300,"exhibitions":2,"visitors":120}', '四楼展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"神人兽面纹玉琮","period":"良渚文化","description":"良渚文化玉器精品","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"玉润中华——玉器精品展","date":"常设展览","description":"展示中国玉器艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop","tags":["玉器","玉文化"]}]', '[{"icon":"📚","title":"玉器鉴赏讲座","desc":"学习玉器知识","type":"讲座"}]', 1),
('terracotta-pit1', 4, '一号坑展厅', '🏛️', '兵马俑坑', 'https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=500&fit=crop', '一号坑是兵马俑群中最大的坑，面积约14000平方米，出土兵马俑6000余件，是秦始皇陵军阵的主体。', '{"artifacts":6000,"exhibitions":1,"visitors":300}', '主展厅', '全年开放 8:30-18:00', '1.5小时', '包含在门票内', '[{"name":"将军俑","period":"秦代","description":"秦军高级将领形象","image":"https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=400&h=300&fit=crop"}]', '[{"title":"秦始皇兵马俑常设展","date":"常设展览","description":"展示秦始皇帝陵兵马俑","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=300&h=200&fit=crop","tags":["兵马俑","秦代"]}]', '[{"icon":"📚","title":"秦史讲座","desc":"了解秦代历史","type":"讲座"}]', 1),
('terracotta-pit2', 4, '二号坑展厅', '🏛️', '兵马俑坑', 'https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=800&h=500&fit=crop', '二号坑面积约6000平方米，是秦军阵的精华所在，出土骑兵、车兵、步兵等不同兵种。', '{"artifacts":1400,"exhibitions":1,"visitors":200}', '二号坑展厅', '全年开放 8:30-18:00', '1小时', '包含在门票内', '[{"name":"骑兵方阵","period":"秦代","description":"秦军骑兵部队","image":"https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=400&h=300&fit=crop"}]', '[{"title":"二号坑发掘现场","date":"常设展览","description":"展示二号坑发掘成果","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1591015799603-7c1f1c1c1c1c?w=300&h=200&fit=crop","tags":["兵马俑","考古"]}]', '[{"icon":"📚","title":"考古知识讲座","desc":"了解考古发掘","type":"讲座"}]', 1),
('terracotta-bronze', 4, '铜车马展厅', '🐴', '青铜器', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '铜车马展厅展示秦始皇陵出土的铜车马，是目前发现体量最大、结构最复杂的古代青铜器。', '{"artifacts":2,"exhibitions":1,"visitors":250}', '铜车马展厅', '全年开放 8:30-18:00', '45分钟', '包含在门票内', '[{"name":"一号铜车马","period":"秦代","description":"立车，秦始皇出行仪仗","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"秦陵铜车马展","date":"常设展览","description":"展示秦陵铜车马","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["铜车马","青铜器"]}]', '[{"icon":"📚","title":"青铜工艺讲座","desc":"了解秦代青铜工艺","type":"讲座"}]', 1),
('shaanxi-bronze', 5, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '陕西历史博物馆青铜器馆藏有商周至秦汉青铜器精品，展现陕西地区青铜文明的辉煌。', '{"artifacts":800,"exhibitions":3,"visitors":180}', '二楼展厅', '周二至周日 9:00-17:30', '1.5小时', '免费参观', '[{"name":"何尊","period":"西周","description":"铭文中有最早的\\"中国\\"二字","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"青铜铸文明","date":"常设展览","description":"展示陕西青铜文明","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","陕西"]}]', '[{"icon":"📚","title":"青铜器鉴赏","desc":"学习青铜器知识","type":"讲座"}]', 1),
('shaanxi-tang', 5, '唐代壁画馆', '🎨', '壁画艺术', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '唐代壁画馆展示陕西地区出土的唐代墓葬壁画，是研究唐代社会生活的重要资料。', '{"artifacts":400,"exhibitions":2,"visitors":150}', '地下一层', '周二至周日 9:00-17:30', '1小时', '需单独购票', '[{"name":"章怀太子墓壁画","period":"唐代","description":"描绘唐代宫廷生活","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop"}]', '[{"title":"唐代壁画珍品展","date":"常设展览","description":"展示唐代墓葬壁画","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop","tags":["壁画","唐代"]}]', '[{"icon":"📚","title":"唐代壁画讲座","desc":"了解唐代壁画艺术","type":"讲座"}]', 1),
('shaanxi-gold', 5, '金银器馆', '✨', '金银器', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop', '金银器馆展示唐代金银器精品，体现唐代金银器工艺的最高水平。', '{"artifacts":300,"exhibitions":2,"visitors":140}', '二楼展厅', '周二至周日 9:00-17:30', '1小时', '免费参观', '[{"name":"兽首玛瑙杯","period":"唐代","description":"何家村窖藏出土，国宝级文物","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"大唐金银器展","date":"常设展览","description":"展示唐代金银器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop","tags":["金银器","唐代"]}]', '[{"icon":"📚","title":"金银器鉴赏","desc":"学习金银器知识","type":"讲座"}]', 1),
('nanjing-history', 6, '历史馆', '🏛️', '历史文物', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '历史馆展示江苏地区从远古到明清的历史发展，是了解江苏历史的重要窗口。', '{"artifacts":2000,"exhibitions":5,"visitors":200}', '历史馆', '周二至周日 9:00-17:00', '2小时', '免费参观', '[{"name":"金兽","period":"战国","description":"战国时期金器，重达900克","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"江苏古代文明展","date":"常设展览","description":"展示江苏古代历史","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["历史","江苏"]}]', '[{"icon":"📚","title":"江苏历史讲座","desc":"了解江苏历史","type":"讲座"}]', 1),
('nanjing-art', 6, '艺术馆', '🎨', '艺术精品', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '艺术馆展示馆藏书画、陶瓷、玉器等艺术精品，体现中国传统艺术的魅力。', '{"artifacts":1500,"exhibitions":4,"visitors":180}', '艺术馆', '周二至周日 9:00-17:00', '1.5小时', '免费参观', '[{"name":"竹林七贤砖画","period":"南朝","description":"南朝墓葬砖画","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop"}]', '[{"title":"艺术精品展","date":"常设展览","description":"展示馆藏艺术精品","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop","tags":["艺术","精品"]}]', '[{"icon":"📚","title":"艺术鉴赏讲座","desc":"学习艺术鉴赏","type":"讲座"}]', 1),
('nanjing-minzhu', 6, '民国馆', '🏘️', '民国风情', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '民国馆通过场景复原，再现民国时期南京的社会风貌，是沉浸式体验民国风情的好去处。', '{"artifacts":500,"exhibitions":1,"visitors":250}', '地下一层', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"老南京街道","period":"民国","description":"复原民国时期南京街道","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"民国风情展","date":"常设展览","description":"体验民国风情","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["民国","沉浸体验"]}]', '[{"icon":"📸","title":"民国风情拍照","desc":"体验民国风情","type":"活动"}]', 1),
('henan-bronze', 7, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '河南博物院青铜器馆藏有商周青铜器精品，展现中原地区青铜文明的辉煌。', '{"artifacts":600,"exhibitions":3,"visitors":180}', '二楼展厅', '周二至周日 9:00-17:30', '1.5小时', '免费参观', '[{"name":"莲鹤方壶","period":"春秋","description":"春秋时期青铜器精品，造型优美","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"鼎盛中华——青铜器展","date":"常设展览","description":"展示中原青铜文明","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","中原"]}]', '[{"icon":"📚","title":"青铜器鉴赏","desc":"学习青铜器知识","type":"讲座"}]', 1),
('henan-jade', 7, '玉器馆', '💎', '玉器艺术', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop', '玉器馆展示河南地区出土的历代玉器精品，展现中原玉文化的深厚底蕴。', '{"artifacts":400,"exhibitions":2,"visitors":140}', '三楼展厅', '周二至周日 9:00-17:30', '1小时', '免费参观', '[{"name":"玉龙","period":"红山文化","description":"红山文化玉龙","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"玉润中华——玉器展","date":"常设展览","description":"展示中原玉文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop","tags":["玉器","玉文化"]}]', '[{"icon":"📚","title":"玉器鉴赏","desc":"学习玉器知识","type":"讲座"}]', 1),
('henan-ceramic', 7, '陶瓷馆', '🏺', '陶瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '陶瓷馆展示河南地区出土的历代陶瓷精品，包括唐三彩、汝瓷等名窑精品。', '{"artifacts":500,"exhibitions":2,"visitors":150}', '四楼展厅', '周二至周日 9:00-17:30', '1小时', '免费参观', '[{"name":"唐三彩骆驼","period":"唐代","description":"唐三彩精品","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"瓷韵中华——陶瓷展","date":"常设展览","description":"展示河南陶瓷艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["陶瓷","瓷器"]}]', '[{"icon":"📚","title":"陶瓷鉴赏","desc":"学习陶瓷知识","type":"讲座"}]', 1),
('zhejiang-celadon', 8, '青瓷馆', '🏺', '青瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '青瓷馆展示浙江地区青瓷艺术的发展历程，包括越窑、龙泉窑等名窑精品。', '{"artifacts":400,"exhibitions":2,"visitors":150}', '主展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"越窑秘色瓷","period":"唐代","description":"越窑青瓷精品","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"青瓷之美","date":"常设展览","description":"展示浙江青瓷艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["青瓷","浙江"]}]', '[{"icon":"📚","title":"青瓷鉴赏","desc":"学习青瓷知识","type":"讲座"}]', 1),
('zhejiang-painting', 8, '书画馆', '🎨', '书画艺术', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '书画馆展示浙江地区书画艺术精品，包括浙派绘画、江南书法等。', '{"artifacts":800,"exhibitions":3,"visitors":160}', '书画展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"富春山居图","period":"元代","description":"黄公望代表作","image":"https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=400&h=300&fit=crop"}]', '[{"title":"江南书画展","date":"常设展览","description":"展示江南书画艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop","tags":["书画","江南"]}]', '[{"icon":"📚","title":"书画鉴赏","desc":"学习书画知识","type":"讲座"}]', 1),
('hubei-chime', 9, '编钟馆', '🎵', '音乐文物', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '编钟馆展示曾侯乙编钟等音乐文物，是了解中国古代音乐文化的重要窗口。', '{"artifacts":100,"exhibitions":1,"visitors":250}', '编钟展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"曾侯乙编钟","period":"战国","description":"战国早期编钟，共65件","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"曾侯乙编钟展","date":"常设展览","description":"展示曾侯乙编钟","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["编钟","音乐"]}]', '[{"icon":"🎵","title":"编钟演奏","desc":"聆听编钟演奏","type":"活动"}]', 1),
('hubei-bronze', 9, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '青铜器馆展示湖北地区出土的青铜器精品，展现楚文化的独特魅力。', '{"artifacts":500,"exhibitions":2,"visitors":180}', '青铜展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"曾侯乙尊盘","period":"战国","description":"战国青铜器精品","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"楚文化青铜器展","date":"常设展览","description":"展示楚文化青铜器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","楚文化"]}]', '[{"icon":"📚","title":"楚文化讲座","desc":"了解楚文化","type":"讲座"}]', 1),
('hunan-mawangdui', 10, '马王堆汉墓馆', '🏛️', '汉代文物', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '马王堆汉墓馆展示马王堆汉墓出土文物，包括辛追夫人遗体、帛画、漆器等珍贵文物。', '{"artifacts":3000,"exhibitions":1,"visitors":300}', '马王堆展厅', '周二至周日 9:00-17:00', '2小时', '免费参观', '[{"name":"素纱单衣","period":"汉代","description":"仅重49克的丝织品","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"马王堆汉墓文物展","date":"常设展览","description":"展示马王堆汉墓文物","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["马王堆","汉代"]}]', '[{"icon":"📚","title":"汉代文化讲座","desc":"了解汉代文化","type":"讲座"}]', 1),
('hunan-bronze', 10, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '青铜器馆展示湖南地区出土的青铜器精品，展现商周时期湖南地区的青铜文明。', '{"artifacts":400,"exhibitions":2,"visitors":160}', '青铜展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"四羊方尊","period":"商代","description":"商代青铜器精品","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"湖南青铜器展","date":"常设展览","description":"展示湖南青铜器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","湖南"]}]', '[{"icon":"📚","title":"青铜器鉴赏","desc":"学习青铜器知识","type":"讲座"}]', 1),
('sichuan-bronze', 11, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '青铜器馆展示四川地区出土的青铜器精品，展现巴蜀文化的独特魅力。', '{"artifacts":500,"exhibitions":2,"visitors":160}', '青铜展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"三星堆青铜人像","period":"商代","description":"三星堆出土青铜人像","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"巴蜀青铜器展","date":"常设展览","description":"展示巴蜀青铜文明","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","巴蜀"]}]', '[{"icon":"📚","title":"巴蜀文化讲座","desc":"了解巴蜀文化","type":"讲座"}]', 1),
('sichuan-ceramic', 11, '陶瓷馆', '🏺', '陶瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '陶瓷馆展示四川地区陶瓷艺术精品，包括邛窑、彭州窑等地方窑口精品。', '{"artifacts":300,"exhibitions":2,"visitors":140}', '陶瓷展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"邛窑彩瓷","period":"唐代","description":"邛窑彩绘瓷","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"四川陶瓷展","date":"常设展览","description":"展示四川陶瓷艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["陶瓷","四川"]}]', '[{"icon":"📚","title":"陶瓷鉴赏","desc":"学习陶瓷知识","type":"讲座"}]', 1),
('guangdong-ceramic', 12, '陶瓷馆', '🏺', '陶瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '陶瓷馆展示广东地区陶瓷艺术精品，包括广彩、石湾陶等岭南特色陶瓷。', '{"artifacts":400,"exhibitions":2,"visitors":150}', '陶瓷展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"广彩瓷器","period":"清代","description":"广州织金彩瓷","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"岭南陶瓷展","date":"常设展览","description":"展示岭南陶瓷艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["陶瓷","岭南"]}]', '[{"icon":"📚","title":"陶瓷鉴赏","desc":"学习陶瓷知识","type":"讲座"}]', 1),
('guangdong-duan', 12, '端砚馆', '📝', '文房四宝', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '端砚馆展示广东端砚精品，端砚是中国四大名砚之首，具有极高的艺术价值。', '{"artifacts":200,"exhibitions":1,"visitors":120}', '端砚展厅', '周二至周日 9:00-17:00', '45分钟', '免费参观', '[{"name":"老坑端砚","period":"清代","description":"端砚老坑精品","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"端砚艺术展","date":"常设展览","description":"展示端砚艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["端砚","文房"]}]', '[{"icon":"📚","title":"端砚鉴赏","desc":"学习端砚知识","type":"讲座"}]', 1),
('tianjin-bronze', 13, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '青铜器馆展示天津博物馆馆藏青铜器精品，以商周青铜器为主。', '{"artifacts":400,"exhibitions":2,"visitors":140}', '青铜展厅', '周二至周日 9:00-16:30', '1小时', '免费参观', '[{"name":"太保鼎","period":"西周","description":"西周青铜重器","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"青铜器精品展","date":"常设展览","description":"展示馆藏青铜器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","商周"]}]', '[{"icon":"📚","title":"青铜器鉴赏","desc":"学习青铜器知识","type":"讲座"}]', 1),
('tianjin-painting', 13, '书画馆', '🎨', '书画艺术', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '书画馆展示天津博物馆馆藏书画精品，以宋元明清绘画为主。', '{"artifacts":600,"exhibitions":3,"visitors":160}', '书画展厅', '周二至周日 9:00-16:30', '1小时', '免费参观', '[{"name":"雪景寒林图","period":"宋代","description":"范宽绘，山水画精品","image":"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop"}]', '[{"title":"书画精品展","date":"常设展览","description":"展示馆藏书画","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop","tags":["书画","艺术"]}]', '[{"icon":"📚","title":"书画鉴赏","desc":"学习书画知识","type":"讲座"}]', 1),
('chongqing-threegorges', 14, '三峡馆', '🌊', '三峡文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '三峡馆展示三峡地区的自然风光和人文历史，是了解三峡文化的重要窗口。', '{"artifacts":500,"exhibitions":2,"visitors":180}', '三峡展厅', '周二至周日 9:00-17:00', '1.5小时', '免费参观', '[{"name":"三峡石刻","period":"历代","description":"三峡地区石刻","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"壮丽三峡展","date":"常设展览","description":"展示三峡文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["三峡","文化"]}]', '[{"icon":"📚","title":"三峡文化讲座","desc":"了解三峡文化","type":"讲座"}]', 1),
('chongqing-bashu', 14, '巴蜀馆', '🏛️', '巴蜀文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '巴蜀馆展示重庆地区的历史文化，展现巴渝文化的独特魅力。', '{"artifacts":600,"exhibitions":2,"visitors":160}', '巴蜀展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"巴人青铜器","period":"战国","description":"巴人青铜兵器","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"巴蜀文化展","date":"常设展览","description":"展示巴蜀文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["巴蜀","文化"]}]', '[{"icon":"📚","title":"巴蜀文化讲座","desc":"了解巴蜀文化","type":"讲座"}]', 1),
('shandong-prehistory', 15, '史前馆', '🦴', '史前文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '史前馆展示山东地区史前文化，包括大汶口文化、龙山文化等重要考古发现。', '{"artifacts":800,"exhibitions":2,"visitors":180}', '史前展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"蛋壳黑陶杯","period":"龙山文化","description":"龙山文化黑陶精品","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"山东史前文化展","date":"常设展览","description":"展示山东史前文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["史前","山东"]}]', '[{"icon":"📚","title":"史前文化讲座","desc":"了解史前文化","type":"讲座"}]', 1),
('shandong-bronze', 15, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '青铜器馆展示山东地区出土的青铜器精品，展现齐鲁文化的深厚底蕴。', '{"artifacts":500,"exhibitions":2,"visitors":160}', '青铜展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"颂簋","period":"西周","description":"西周青铜礼器","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"齐鲁青铜器展","date":"常设展览","description":"展示齐鲁青铜文明","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","齐鲁"]}]', '[{"icon":"📚","title":"青铜器鉴赏","desc":"学习青铜器知识","type":"讲座"}]', 1),
('liaoning-jade', 16, '玉器馆', '💎', '玉器艺术', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=500&fit=crop', '玉器馆展示红山文化玉器精品，红山文化玉器是中国新石器时代玉器的代表。', '{"artifacts":300,"exhibitions":2,"visitors":140}', '玉器展厅', '周二至周日 9:00-16:30', '1小时', '免费参观', '[{"name":"玉猪龙","period":"红山文化","description":"红山文化典型玉器","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"红山玉器展","date":"常设展览","description":"展示红山文化玉器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop","tags":["玉器","红山"]}]', '[{"icon":"📚","title":"玉器鉴赏","desc":"学习玉器知识","type":"讲座"}]', 1),
('liaoning-ceramic', 16, '陶瓷馆', '🏺', '陶瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '陶瓷馆展示辽代瓷器精品，辽瓷具有独特的民族风格。', '{"artifacts":400,"exhibitions":2,"visitors":130}', '陶瓷展厅', '周二至周日 9:00-16:30', '1小时', '免费参观', '[{"name":"辽三彩","period":"辽代","description":"辽代三彩釉陶","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"辽瓷艺术展","date":"常设展览","description":"展示辽代瓷器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["陶瓷","辽代"]}]', '[{"icon":"📚","title":"陶瓷鉴赏","desc":"学习陶瓷知识","type":"讲座"}]', 1),
('jilin-gaogouli', 17, '高句丽馆', '🏛️', '高句丽文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '高句丽馆展示高句丽时期文物，高句丽是中国东北古代民族政权。', '{"artifacts":300,"exhibitions":1,"visitors":120}', '高句丽展厅', '周二至周日 9:00-16:00', '1小时', '免费参观', '[{"name":"高句丽壁画","period":"高句丽","description":"高句丽墓葬壁画","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop"}]', '[{"title":"高句丽文化展","date":"常设展览","description":"展示高句丽文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["高句丽","东北"]}]', '[{"icon":"📚","title":"高句丽文化讲座","desc":"了解高句丽文化","type":"讲座"}]', 1),
('heilongjiang-bohai', 18, '渤海馆', '🏛️', '渤海文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '渤海馆展示渤海国时期文物，渤海国是中国东北古代民族政权。', '{"artifacts":200,"exhibitions":1,"visitors":100}', '渤海展厅', '周二至周日 9:00-16:00', '1小时', '免费参观', '[{"name":"渤海陶器","period":"渤海国","description":"渤海国陶器","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"渤海文化展","date":"常设展览","description":"展示渤海文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["渤海","东北"]}]', '[{"icon":"📚","title":"渤海文化讲座","desc":"了解渤海文化","type":"讲座"}]', 1),
('fujian-maritime', 19, '海上丝绸之路馆', '⛵', '海丝文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '海上丝绸之路馆展示福建海上丝绸之路的历史，展现福建在中外交流中的重要地位。', '{"artifacts":400,"exhibitions":2,"visitors":160}', '海丝展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"宋代海船","period":"宋代","description":"泉州湾宋代海船","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"海上丝绸之路展","date":"常设展览","description":"展示海丝文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["海丝","福建"]}]', '[{"icon":"📚","title":"海丝文化讲座","desc":"了解海丝文化","type":"讲座"}]', 1),
('anhui-huizhou', 20, '徽州馆', '🏘️', '徽州文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '徽州馆展示徽州文化，包括徽商、徽派建筑、新安画派等徽州文化精髓。', '{"artifacts":500,"exhibitions":2,"visitors":150}', '徽州展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"徽派建筑构件","period":"明清","description":"徽派建筑木雕","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"徽州文化展","date":"常设展览","description":"展示徽州文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["徽州","文化"]}]', '[{"icon":"📚","title":"徽州文化讲座","desc":"了解徽州文化","type":"讲座"}]', 1),
('hebei-han', 21, '汉代馆', '🏛️', '汉代文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '汉代馆展示满城汉墓出土文物，展现汉代诸侯王的生活。', '{"artifacts":600,"exhibitions":2,"visitors":180}', '汉代展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"长信宫灯","period":"汉代","description":"汉代青铜灯具精品","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"满城汉墓文物展","date":"常设展览","description":"展示满城汉墓文物","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["汉代","河北"]}]', '[{"icon":"📚","title":"汉代文化讲座","desc":"了解汉代文化","type":"讲座"}]', 1),
('shanxi-jin', 22, '晋国馆', '🏛️', '晋国文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '晋国馆展示晋国时期文物，展现三晋文化的深厚底蕴。', '{"artifacts":700,"exhibitions":2,"visitors":180}', '晋国展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"晋侯鸟尊","period":"西周","description":"晋国青铜器精品","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"晋国文化展","date":"常设展览","description":"展示晋国文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["晋国","山西"]}]', '[{"icon":"📚","title":"晋国文化讲座","desc":"了解晋国文化","type":"讲座"}]', 1),
('jiangxi-ceramic', 23, '景德镇瓷器馆', '🏺', '瓷器艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '景德镇瓷器馆展示景德镇瓷器精品，景德镇是中国的"瓷都"。', '{"artifacts":500,"exhibitions":2,"visitors":160}', '瓷器展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"青花瓷","period":"明清","description":"景德镇青花瓷","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"景德镇瓷器展","date":"常设展览","description":"展示景德镇瓷器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["瓷器","景德镇"]}]', '[{"icon":"📚","title":"瓷器鉴赏","desc":"学习瓷器知识","type":"讲座"}]', 1),
('guangxi-drum', 24, '铜鼓馆', '🥁', '铜鼓文化', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '铜鼓馆展示广西铜鼓文化，铜鼓是壮族文化的重要象征。', '{"artifacts":300,"exhibitions":1,"visitors":140}', '铜鼓展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"北流型铜鼓","period":"汉代","description":"广西铜鼓精品","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"广西铜鼓展","date":"常设展览","description":"展示广西铜鼓文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["铜鼓","壮族"]}]', '[{"icon":"📚","title":"铜鼓文化讲座","desc":"了解铜鼓文化","type":"讲座"}]', 1),
('hainan-maritime', 25, '南海馆', '🌊', '南海文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '南海馆展示南海水下文化遗产，展现南海航海历史。', '{"artifacts":200,"exhibitions":1,"visitors":120}', '南海展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"华光礁沉船","period":"宋代","description":"南海沉船文物","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"南海文化展","date":"常设展览","description":"展示南海文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["南海","海丝"]}]', '[{"icon":"📚","title":"南海文化讲座","desc":"了解南海文化","type":"讲座"}]', 1),
('guizhou-ethnic', 26, '民族馆', '🎭', '民族文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '民族馆展示贵州少数民族文化，展现多彩贵州的民族风情。', '{"artifacts":400,"exhibitions":2,"visitors":140}', '民族展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"苗族银饰","period":"现代","description":"苗族银饰精品","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"贵州民族文化展","date":"常设展览","description":"展示贵州民族文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["民族","贵州"]}]', '[{"icon":"📚","title":"民族文化讲座","desc":"了解民族文化","type":"讲座"}]', 1),
('yunnan-dian', 27, '滇文化馆', '🏛️', '滇文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '滇文化馆展示古滇国文物，古滇国是云南古代文明的重要代表。', '{"artifacts":500,"exhibitions":2,"visitors":160}', '滇文化展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"牛虎铜案","period":"战国","description":"古滇国青铜器精品","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"古滇国文化展","date":"常设展览","description":"展示古滇国文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["滇文化","云南"]}]', '[{"icon":"📚","title":"滇文化讲座","desc":"了解滇文化","type":"讲座"}]', 1),
('xizang-tibetan', 28, '藏族文化馆', '🏔️', '藏族文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '藏族文化馆展示藏族历史文化，展现雪域高原的独特文明。', '{"artifacts":300,"exhibitions":2,"visitors":120}', '藏族文化展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"唐卡","period":"清代","description":"藏族唐卡艺术","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop"}]', '[{"title":"藏族文化展","date":"常设展览","description":"展示藏族文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["藏族","西藏"]}]', '[{"icon":"📚","title":"藏族文化讲座","desc":"了解藏族文化","type":"讲座"}]', 1),
('gansu-silkroad', 29, '丝绸之路馆', '🐪', '丝路文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '丝绸之路馆展示甘肃丝绸之路文物，甘肃是丝绸之路的黄金段。', '{"artifacts":600,"exhibitions":2,"visitors":180}', '丝路展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"铜奔马","period":"东汉","description":"马踏飞燕，中国旅游标志","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"丝绸之路文明展","date":"常设展览","description":"展示丝路文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["丝路","甘肃"]}]', '[{"icon":"📚","title":"丝路文化讲座","desc":"了解丝路文化","type":"讲座"}]', 1),
('qinghai-ethnic', 30, '民族馆', '🎭', '民族文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '民族馆展示青海多民族文化，展现青海多元文化的魅力。', '{"artifacts":300,"exhibitions":1,"visitors":100}', '民族展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"藏族服饰","period":"现代","description":"青海藏族服饰","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"青海民族文化展","date":"常设展览","description":"展示青海民族文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["民族","青海"]}]', '[{"icon":"📚","title":"民族文化讲座","desc":"了解民族文化","type":"讲座"}]', 1),
('neimenggu-nomadic', 31, '草原馆', '🐎', '草原文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '草原馆展示北方草原民族文物，展现草原文明的独特魅力。', '{"artifacts":500,"exhibitions":2,"visitors":160}', '草原展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"匈奴金冠","period":"战国","description":"匈奴金冠饰","image":"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop"}]', '[{"title":"草原文明展","date":"常设展览","description":"展示草原文明","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["草原","内蒙古"]}]', '[{"icon":"📚","title":"草原文化讲座","desc":"了解草原文化","type":"讲座"}]', 1),
('ningxia-xixia', 32, '西夏馆', '🏛️', '西夏文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '西夏馆展示西夏王朝文物，西夏是中国西北古代民族政权。', '{"artifacts":300,"exhibitions":1,"visitors":120}', '西夏展厅', '周二至周日 9:00-17:00', '1小时', '免费参观', '[{"name":"西夏文碑","period":"西夏","description":"西夏文字碑刻","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"西夏文化展","date":"常设展览","description":"展示西夏文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["西夏","宁夏"]}]', '[{"icon":"📚","title":"西夏文化讲座","desc":"了解西夏文化","type":"讲座"}]', 1),
('xinjiang-silkroad', 33, '丝绸之路馆', '🐪', '丝路文化', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '丝绸之路馆展示新疆丝绸之路文物，新疆是丝绸之路的核心区域。', '{"artifacts":400,"exhibitions":2,"visitors":150}', '丝路展厅', '周二至周日 10:00-18:00', '1小时', '免费参观', '[{"name":"楼兰美女","period":"汉代","description":"楼兰古尸","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"新疆丝路文化展","date":"常设展览","description":"展示新疆丝路文化","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["丝路","新疆"]}]', '[{"icon":"📚","title":"丝路文化讲座","desc":"了解丝路文化","type":"讲座"}]', 1),
('taipei-bronze', 34, '青铜器馆', '⚱️', '青铜文明', 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&h=500&fit=crop', '青铜器馆展示台北故宫馆藏青铜器精品，以商周青铜器为主。', '{"artifacts":600,"exhibitions":2,"visitors":180}', '青铜展厅', '周二至周日 9:00-17:00', '1小时', '需购票', '[{"name":"毛公鼎","period":"西周","description":"铭文最长的青铜器","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop"}]', '[{"title":"青铜器精品展","date":"常设展览","description":"展示馆藏青铜器","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=300&h=200&fit=crop","tags":["青铜器","商周"]}]', '[{"icon":"📚","title":"青铜器鉴赏","desc":"学习青铜器知识","type":"讲座"}]', 1),
('taipei-ceramic', 34, '陶瓷馆', '🏺', '陶瓷艺术', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=500&fit=crop', '陶瓷馆展示台北故宫馆藏陶瓷精品，以宋元明清瓷器为主。', '{"artifacts":800,"exhibitions":2,"visitors":200}', '陶瓷展厅', '周二至周日 9:00-17:00', '1小时', '需购票', '[{"name":"汝窑瓷器","period":"北宋","description":"汝窑天青釉瓷器","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop"}]', '[{"title":"陶瓷精品展","date":"常设展览","description":"展示馆藏陶瓷","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=200&fit=crop","tags":["陶瓷","瓷器"]}]', '[{"icon":"📚","title":"陶瓷鉴赏","desc":"学习陶瓷知识","type":"讲座"}]', 1),
('hongkong-history', 35, '香港故事馆', '🏛️', '香港历史', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '香港故事馆展示香港从远古到现代的历史发展，是了解香港历史的重要窗口。', '{"artifacts":800,"exhibitions":1,"visitors":180}', '常设展厅', '周一至周三、周五至周日 10:00-18:00', '2小时', '需购票', '[{"name":"香港考古文物","period":"史前","description":"香港出土文物","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"香港故事","date":"常设展览","description":"展示香港历史","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["香港","历史"]}]', '[{"icon":"📚","title":"香港历史讲座","desc":"了解香港历史","type":"讲座"}]', 1),
('hongkong-art', 36, '中国书画馆', '🎨', '书画艺术', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '中国书画馆展示香港艺术馆藏中国书画精品。', '{"artifacts":400,"exhibitions":2,"visitors":140}', '书画展厅', '周一至周三、周五至周日 10:00-18:00', '1小时', '免费参观', '[{"name":"岭南画派","period":"现代","description":"岭南画派作品","image":"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop"}]', '[{"title":"中国书画展","date":"常设展览","description":"展示中国书画","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop","tags":["书画","艺术"]}]', '[{"icon":"📚","title":"书画鉴赏","desc":"学习书画知识","type":"讲座"}]', 1),
('macau-history', 37, '澳门历史馆', '🏛️', '澳门历史', 'https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=500&fit=crop', '澳门历史馆展示澳门数百年的历史变迁，包括中西文化交融的独特历史。', '{"artifacts":300,"exhibitions":1,"visitors":100}', '历史展厅', '周二至周日 10:00-18:00', '1.5小时', '需购票', '[{"name":"澳门历史文物","period":"明清","description":"澳门历史文物","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=400&h=300&fit=crop"}]', '[{"title":"澳门历史展","date":"常设展览","description":"展示澳门历史","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=300&h=200&fit=crop","tags":["澳门","历史"]}]', '[{"icon":"📚","title":"澳门历史讲座","desc":"了解澳门历史","type":"讲座"}]', 1),
('macau-art', 38, '澳门艺术馆', '🎨', '艺术精品', 'https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&h=500&fit=crop', '澳门艺术馆展示澳门本土艺术作品，包括中西艺术精品。', '{"artifacts":200,"exhibitions":2,"visitors":80}', '艺术展厅', '周二至周日 10:00-18:00', '1小时', '免费参观', '[{"name":"澳门艺术作品","period":"现代","description":"澳门本土艺术","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=400&h=300&fit=crop"}]', '[{"title":"澳门艺术展","date":"常设展览","description":"展示澳门艺术","status":"ongoing","statusText":"正在展出","image":"https://images.unsplash.com/photo-1516961642265-531546e84af2?w=300&h=200&fit=crop","tags":["艺术","澳门"]}]', '[{"icon":"📚","title":"艺术鉴赏","desc":"学习艺术知识","type":"讲座"}]', 1);


-- ============================================================================
-- 来源: 10-museum-details-fix.sql
-- ============================================================================


-- ============================================================================
-- 博物馆详细信息更新 - 10-museum-details-fix.sql
-- ============================================================================
-- 为博物馆 13-38 补充真实的历史沿革、建筑特色、重要馆藏、教育活动、参观信息
-- 使用方法: sudo mysql personal_website < 10-museum-details-fix.sql
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 13. 天津博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '天津博物馆的前身可追溯到1918年成立的天津博物院，是中国较早建立的博物馆之一。2008年新馆建成开放，位于天津市河西区文化中心，建筑面积6.4万平方米。天津博物馆收藏了大量反映天津历史文化的珍贵文物，是了解天津乃至京津冀地区历史文化的重要窗口。',
  architecture = '新馆建筑位于天津市文化中心内，由日本建筑师矶崎新设计。建筑外观呈方正规整的几何造型，外立面采用石材贴面，庄重典雅。馆内设有多个展厅，展览面积1.4万平方米，配备现代化展示设施。建筑融合了东方美学与现代设计理念。',
  highlights = '["战国楚王鼎","西周太保鼎","明代仇英《桃源仙境图》","清代万上遴《汉宫春晓图》","甲骨文藏品","玉器藏品"]',
  education = '天津博物馆开展丰富的公众教育活动，包括"文博讲堂"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、文物鉴赏活动，开设"天博课堂"面向中小学生开展传统文化教育。同时开展数字博物馆建设，提供线上展览和虚拟参观服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-16:30", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证或有效证件入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "天津市河西区平江道62号", "metro": "地铁5号线、6号线文化中心站"}, "contact": {"phone": "022-83895555", "website": "https://www.tjbwg.com"}}'
WHERE museum_id = 13;

-- ---------------------------------------------------------------------------
-- 14. 重庆中国三峡博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '重庆中国三峡博物馆于2005年6月18日正式开馆，是保护、研究、展示重庆和三峡地区历史文化遗产的综合性博物馆。博物馆的建立与三峡工程密切相关，在三峡库区文物抢救保护中发挥了重要作用，收藏了大量三峡库区出土的珍贵文物。',
  architecture = '博物馆位于重庆市渝中区人民路，建筑面积4.5万平方米。建筑外观采用弧形坡屋顶造型，寓意三峡山水。馆内设有三峡展厅、重庆城市之路展厅、远古巴渝展厅等基本陈列，展览面积1.2万平方米。建筑融合了巴渝文化元素与现代建筑技术。',
  highlights = '["战国青铜鸟形尊","汉代景云碑","乌杨石阙","南宋淳祐通宝铜钱","三峡出土文物","巴渝青铜器"]',
  education = '三峡博物馆开展丰富的公众教育活动，包括"三峡大讲堂"系列讲座、巴渝文化体验、青少年研学等。定期举办专题展览、文化讲座，开设"三峡课堂"面向中小学生。同时开展流动博物馆进校园、进社区活动，传播三峡文化和巴渝文明。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日正常开放", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证或有效证件入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "重庆市渝中区人民路236号", "metro": "轻轨2号线曾家岩站"}, "contact": {"phone": "023-63005888", "website": "https://www.3gmuseum.cn"}}'
WHERE museum_id = 14;

-- ---------------------------------------------------------------------------
-- 15. 山东博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '山东博物馆成立于1954年，是新中国成立后建立的第一座省级综合性地志博物馆。1992年更名为山东省博物馆，2010年新馆建成开放并更名为山东博物馆。山东是中华文明的重要发祥地之一，大汶口文化、龙山文化均首先在山东发现，山东博物馆收藏了大量反映齐鲁文化的珍贵文物。',
  architecture = '新馆位于济南市经十路，建筑面积8.3万平方米，是当时全国省级博物馆中面积最大的。建筑以"天圆地方"为设计理念，外观呈圆形穹顶与方形基座的组合，寓意齐鲁文化的博大精深。馆内设有11个展厅，展览面积2.5万平方米，配备现代化展示设施。',
  highlights = '["大汶口文化彩陶","龙山文化黑陶","商代甲骨文","鲁国青铜器","明代鲁荒王陵出土文物","《孙子兵法》竹简"]',
  education = '山东博物馆开展丰富的公众教育活动，包括"齐鲁讲坛"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、文物鉴赏活动，开设"鲁博课堂"面向中小学生开展齐鲁文化教育。同时开展数字博物馆建设，提供线上展览和虚拟参观服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "济南市历下区经十路11899号", "bus": "乘坐BRT5路、K115路等公交车"}, "contact": {"phone": "0531-85019000", "website": "https://www.sdmuseum.com"}}'
WHERE museum_id = 15;

-- ---------------------------------------------------------------------------
-- 16. 辽宁省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '辽宁省博物馆前身为1948年成立的东北博物馆，1959年改称辽宁省博物馆。是新中国建立的第一座博物馆。2015年新馆建成开放，位于沈阳市浑南区。辽宁是红山文化的发源地，也是契丹、女真等北方民族建立辽、金两朝的核心区域，馆藏文物具有鲜明的地域特色。',
  architecture = '新馆建筑面积10万平方米，建筑外观采用石材贴面，庄重大气。馆内设有22个展厅，展览面积3.5万平方米。建筑融合了现代设计理念与北方文化元素，是沈阳市标志性文化建筑之一。',
  highlights = '["红山文化玉猪龙","红山文化C形玉龙","辽代鎏金铜面具","宋代缂丝《紫鸾鹊谱》","元代青花瓷","清代书画"]',
  education = '辽宁省博物馆开展丰富的公众教育活动，包括"辽博讲坛"系列讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、文物鉴赏活动，开设"辽博课堂"面向中小学生开展历史文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "沈阳市浑南区智慧三街157号", "metro": "地铁2号线省博物馆站"}, "contact": {"phone": "024-23285111", "website": "https://www.lnmuseum.com"}}'
WHERE museum_id = 16;

-- ---------------------------------------------------------------------------
-- 17. 吉林省博物院
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '吉林省博物院前身为1951年成立的吉林省博物馆，2003年与吉林省近现代史博物馆合并组建吉林省博物院。吉林省是高句丽、渤海国、辽金等古代政权的重要活动区域，博物院收藏了大量反映东北亚历史文化的珍贵文物，是了解吉林乃至东北亚文明的重要窗口。',
  architecture = '博物院位于长春市朝阳区，建筑面积3.2万平方米。建筑外观采用现代设计理念，简洁大方。馆内设有多个展厅，展览面积1.5万平方米，配备现代化展示设施。建筑融合了东北地域特色与现代建筑风格。',
  highlights = '["高句丽壁画","渤海国鎏金铜佛","辽代鸡冠壶","金代铜镜","夫余族文物","东北抗联文物"]',
  education = '吉林省博物院开展丰富的公众教育活动，包括"吉博讲坛"系列讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、文物鉴赏活动，开设"吉博课堂"面向中小学生开展东北亚文化教育。同时开展流动博物馆进校园活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-16:30", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "长春市朝阳区人民大街6666号", "bus": "乘坐66路、306路等公交车"}, "contact": {"phone": "0431-88556666", "website": "https://www.jlmuseum.org"}}'
WHERE museum_id = 17;

-- ---------------------------------------------------------------------------
-- 18. 黑龙江省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '黑龙江省博物馆前身为1922年成立的东省文物研究会，是黑龙江省最早的博物馆。1962年改称黑龙江省博物馆。黑龙江是渤海国、金代等古代政权的重要活动区域，也是赫哲族、鄂伦春族等北方少数民族的聚居地，馆藏文物具有鲜明的北方民族特色。',
  architecture = '博物馆位于哈尔滨市南岗区，主楼为1906年建造的俄罗斯巴洛克风格建筑，是哈尔滨市标志性历史建筑之一。建筑面积1.5万平方米，馆内设有多个展厅，展览面积5000平方米。建筑融合了欧式建筑风格与中国博物馆功能需求。',
  highlights = '["渤海国铜佛","金代铜镜","赫哲族鱼皮服饰","鄂伦春族文物","哈尔滨近代历史文物","东北抗联文物"]',
  education = '黑龙江省博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、北方民族文化体验活动，开设"龙博课堂"面向中小学生开展东北历史文化教育。同时开展流动博物馆进校园、进社区活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-16:30", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "哈尔滨市南岗区红军街50号", "metro": "地铁1号线博物馆站"}, "contact": {"phone": "0451-53625515", "website": "https://www.hljmus.org.cn"}}'
WHERE museum_id = 18;

-- ---------------------------------------------------------------------------
-- 19. 福建博物院
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '福建博物院前身为1933年成立的福建省立科学馆，1953年改为福建省博物馆。2002年新馆建成开放并更名为福建博物院。福建是海上丝绸之路的重要起点，也是闽南文化、客家文化的发源地，福建博物院收藏了大量反映闽台文化和海上贸易的珍贵文物。',
  architecture = '新馆位于福州市鼓楼区湖滨路，建筑面积3.5万平方米。建筑外观采用福建传统建筑元素与现代设计理念相结合，屋顶呈波浪形，寓意海洋文化。馆内设有15个展厅，展览面积1.2万平方米，配备现代化展示设施。',
  highlights = '["闽越文化青铜器","南宋丝绸文物","德化窑白瓷","建窑黑釉兔毫盏","漳州窑青花瓷","海上丝绸之路文物"]',
  education = '福建博物院开展丰富的公众教育活动，包括"闽博讲坛"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、闽台文化交流活动，开设"闽博课堂"面向中小学生开展海洋文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "福州市鼓楼区湖滨路91号", "bus": "乘坐100路、118路等公交车"}, "contact": {"phone": "0591-83757650", "website": "https://www.fjbwy.com"}}'
WHERE museum_id = 19;

-- ---------------------------------------------------------------------------
-- 20. 安徽博物院
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '安徽博物院前身为1956年成立的安徽省博物馆，2011年新馆建成开放并更名为安徽博物院。安徽是徽文化发源地，也是中国文房四宝的重要产地，安徽博物院收藏了大量反映徽州文化、江淮文明的珍贵文物，是了解安徽历史文化的重要窗口。',
  architecture = '新馆位于合肥市蜀山区，建筑面积4.1万平方米。建筑以"四水归堂"的徽派建筑理念为设计灵感，外观融合了徽派马头墙等传统元素与现代设计手法。馆内设有多个展厅，展览面积1.5万平方米，配备现代化展示设施。',
  highlights = '["商代青铜尊","战国楚大鼎","徽州古建筑构件","文房四宝","新安画派书画","明代金银器"]',
  education = '安徽博物院开展丰富的公众教育活动，包括"安博讲坛"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、徽州文化体验活动，开设"安博课堂"面向中小学生开展传统文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "合肥市蜀山区怀宁路268号", "metro": "地铁2号线博物院站"}, "contact": {"phone": "0551-63736633", "website": "https://www.ahm.cn"}}'
WHERE museum_id = 20;

-- ---------------------------------------------------------------------------
-- 21. 河北博物院
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '河北博物院前身为1953年成立的河北省博物馆，2014年新馆建成开放并更名为河北博物院。河北是满城汉墓、中山国等重要考古发现的所在地，河北博物院收藏了大量反映燕赵文化的珍贵文物，是了解河北历史文化的重要窗口。',
  architecture = '新馆位于石家庄市长安区，建筑面积5.3万平方米。建筑外观采用石材贴面，庄重大气，融合了燕赵文化元素与现代设计理念。馆内设有9个展厅，展览面积2.2万平方米，配备现代化展示设施。',
  highlights = '["金缕玉衣","错金银铜长信宫灯","中山王铁足铜鼎","北齐壁画","元代青花瓷","河北古代壁画"]',
  education = '河北博物院开展丰富的公众教育活动，包括"河博讲坛"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、文物鉴赏活动，开设"河博课堂"面向中小学生开展燕赵文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "石家庄市长安区东大街4号", "bus": "乘坐1路、5路等公交车"}, "contact": {"phone": "0311-86062086", "website": "https://www.hebeimuseum.org"}}'
WHERE museum_id = 21;

-- ---------------------------------------------------------------------------
-- 22. 山西博物院
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '山西博物院前身为1919年成立的山西教育图书博物馆，1953年改为山西省博物馆。2005年新馆建成开放并更名为山西博物院。山西是中华文明的重要发祥地之一，晋国青铜器、北朝壁画、山西古建筑等文物在全国具有重要地位，山西博物院是了解三晋文化的重要窗口。',
  architecture = '新馆位于太原市万柏林区，建筑面积5.1万平方米。建筑以"斗"为设计灵感，外观呈方形锥体造型，寓意晋文化的深厚底蕴。馆内设有12个展厅，展览面积2.5万平方米，配备现代化展示设施。建筑融合了晋文化元素与现代设计理念。',
  highlights = '["晋侯鸟尊","北魏司马金龙墓木板漆画","侯马盟书","虞弘墓石椁","山西古建筑模型","北朝壁画"]',
  education = '山西博物院开展丰富的公众教育活动，包括"晋博讲坛"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、古建筑文化体验活动，开设"晋博课堂"面向中小学生开展三晋文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "太原市万柏林区滨河西路北段13号", "bus": "乘坐69路、865路等公交车"}, "contact": {"phone": "0351-8789188", "website": "https://www.shanximuseum.com"}}'
WHERE museum_id = 22;

-- ---------------------------------------------------------------------------
-- 23. 江西省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '江西省博物馆前身为1958年成立的江西省历史博物馆和江西省革命博物馆，1999年合并组建江西省博物馆。江西是赣文化发源地，也是中国革命的重要发源地之一，江西省博物馆收藏了大量反映赣文化和革命历史的珍贵文物。',
  architecture = '博物馆位于南昌市东湖区，建筑面积3.6万平方米。建筑外观采用现代设计理念，简洁大方。馆内设有多个展厅，展览面积1.3万平方米，配备现代化展示设施。建筑融合了赣文化元素与现代建筑风格。',
  highlights = '["新干大洋洲商代青铜器","明代藩王墓出土文物","景德镇瓷器","海昏侯墓出土文物","革命文物","赣文化文物"]',
  education = '江西省博物馆开展丰富的公众教育活动，包括"赣博讲坛"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、革命传统教育活动，开设"赣博课堂"面向中小学生开展赣文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "南昌市东湖区新洲路2号", "bus": "乘坐5路、23路等公交车"}, "contact": {"phone": "0791-86592066", "website": "https://www.jxmuseum.cn"}}'
WHERE museum_id = 23;

-- ---------------------------------------------------------------------------
-- 24. 广西壮族自治区博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '广西壮族自治区博物馆前身为1934年成立的广西省立博物馆，1956年改为广西壮族自治区博物馆。广西是壮族等少数民族聚居区，也是铜鼓文化的重要分布区域，博物馆收藏了大量反映壮族文化和铜鼓文化的珍贵文物。',
  architecture = '博物馆位于南宁市青秀区，建筑面积3.3万平方米。建筑外观融合了壮族传统建筑元素与现代设计理念，具有鲜明的民族特色。馆内设有多个展厅，展览面积1万平方米，配备现代化展示设施。',
  highlights = '["西汉翔鹭纹铜鼓","壮族干栏建筑模型","广西少数民族服饰","合浦汉墓出土文物","明代青花瓷","铜鼓藏品"]',
  education = '广西壮族自治区博物馆开展丰富的公众教育活动，包括"桂博讲坛"系列讲座、青少年研学项目、民族文化体验活动等。定期举办专题展览导览、壮族文化体验活动，开设"桂博课堂"面向中小学生开展民族文化教育。同时开展流动博物馆进校园、进社区活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "南宁市青秀区民族大道34号", "metro": "地铁1号线民族广场站"}, "contact": {"phone": "0771-2858992", "website": "https://www.gxmuseum.cn"}}'
WHERE museum_id = 24;

-- ---------------------------------------------------------------------------
-- 25. 海南省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '海南省博物馆成立于1984年，是海南省综合性博物馆。海南是南海海上丝绸之路的重要节点，也是黎族、苗族等少数民族的聚居地，博物馆收藏了大量反映海南历史文化和南海水下文化遗产的珍贵文物。',
  architecture = '博物馆位于海口市琼山区，建筑面积2.5万平方米。建筑外观采用现代设计理念，融合了海南地域特色与海洋文化元素。馆内设有多个展厅，展览面积8000平方米，配备现代化展示设施。',
  highlights = '["南海出水文物","黎族服饰和织锦","苗族文物","海南历史文物","西沙群岛出水瓷器","宋代贸易陶瓷"]',
  education = '海南省博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、民族文化体验活动等。定期举办专题展览导览、黎族文化体验活动，开设"海博课堂"面向中小学生开展海洋文化教育。同时开展流动博物馆进校园活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "海口市琼山区国兴大道68号", "bus": "乘坐12路、43路等公交车"}, "contact": {"phone": "0898-65238891", "website": "https://www.hainanmuseum.org"}}'
WHERE museum_id = 25;

-- ---------------------------------------------------------------------------
-- 26. 贵州省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '贵州省博物馆成立于1958年，是贵州省综合性博物馆。贵州是夜郎文化的发源地，也是苗族、布依族、侗族等少数民族的聚居地，博物馆收藏了大量反映贵州历史文化和少数民族文化的珍贵文物。',
  architecture = '博物馆位于贵阳市观山湖区，建筑面积4.7万平方米。新馆建筑外观采用现代设计理念，融合了贵州地域特色与民族文化元素。馆内设有多个展厅，展览面积1.5万平方米，配备现代化展示设施。',
  highlights = '["夜郎文化青铜器","苗族银饰","布依族蜡染","侗族建筑模型","贵州少数民族服饰","明代播州土司文物"]',
  education = '贵州省博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、民族文化体验活动等。定期举办专题展览导览、少数民族文化体验活动，开设"黔博课堂"面向中小学生开展多民族文化教育。同时开展流动博物馆进校园、进社区活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "贵阳市观山湖区林城东路107号", "metro": "地铁1号线国际生态会议中心站"}, "contact": {"phone": "0851-86822222", "website": "https://www.gzmuseum.com"}}'
WHERE museum_id = 26;

-- ---------------------------------------------------------------------------
-- 27. 云南省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '云南省博物馆成立于1951年，是云南省综合性博物馆。云南是古滇国、南诏、大理国等古代政权的重要活动区域，也是多民族聚居区，云南省博物馆收藏了大量反映古滇文化和云南少数民族文化的珍贵文物。',
  architecture = '新馆位于昆明市官渡区，建筑面积6万平方米。建筑外观以"孔雀开屏"为设计灵感，寓意云南的多彩民族文化。馆内设有多个展厅，展览面积2万平方米，配备现代化展示设施。建筑融合了云南地域特色与现代设计理念。',
  highlights = '["古滇国青铜器","牛虎铜案","南诏大理国文物","云南少数民族服饰","纳西族东巴文物","普洱茶文化文物"]',
  education = '云南省博物馆开展丰富的公众教育活动，包括"滇博讲坛"系列讲座、青少年研学项目、民族文化体验活动等。定期举办专题展览导览、少数民族文化体验活动，开设"滇博课堂"面向中小学生开展多民族文化教育。同时开展流动博物馆进校园、进社区活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "昆明市官渡区广福路6393号", "bus": "乘坐169路、252路等公交车"}, "contact": {"phone": "0871-67366888", "website": "https://www.ynmuseum.org"}}'
WHERE museum_id = 27;

-- ---------------------------------------------------------------------------
-- 28. 西藏博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '西藏博物馆于1999年10月建成开放，是西藏自治区第一座综合性博物馆。2018年新馆改扩建完成。西藏是藏文化发源地，西藏博物馆收藏了大量反映藏族历史文化和宗教文化的珍贵文物，是了解西藏文明的重要窗口。',
  architecture = '博物馆位于拉萨市城关区，建筑面积5.3万平方米。建筑外观融合了藏族传统建筑元素与现代设计理念，具有鲜明的藏式风格。馆内设有多个展厅，展览面积1.2万平方米，配备现代化展示设施。',
  highlights = '["唐代文成公主带入文物","元代八思巴文文书","明代永乐皇帝赐赠佛像","清代金瓶掣签文物","唐卡藏品","藏族传统服饰"]',
  education = '西藏博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、藏族文化体验活动，开设"藏博课堂"面向中小学生开展藏文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "拉萨市城关区民族南路2号", "bus": "乘坐8路、24路等公交车"}, "contact": {"phone": "0891-6842219", "website": "https://www.tibetmuseum.com"}}'
WHERE museum_id = 28;

-- ---------------------------------------------------------------------------
-- 29. 甘肃省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '甘肃省博物馆成立于1956年，是甘肃省综合性博物馆。甘肃是丝绸之路的重要通道，也是彩陶文化、汉简文化的重要分布区域，甘肃省博物馆收藏了大量反映丝绸之路文化和彩陶文化的珍贵文物，是了解陇原文明的重要窗口。',
  architecture = '博物馆位于兰州市七里河区，建筑面积4.3万平方米。建筑外观采用现代设计理念，庄重大气。馆内设有多个展厅，展览面积1.3万平方米，配备现代化展示设施。建筑融合了丝路文化元素与现代建筑风格。',
  highlights = '["马踏飞燕（铜奔马）","黄河古象化石","马门溪龙化石","丝绸之路文物","彩陶藏品","汉简藏品"]',
  education = '甘肃省博物馆开展丰富的公众教育活动，包括"陇博讲坛"系列讲座、青少年研学项目、文化体验工坊等。定期举办专题展览导览、丝路文化体验活动，开设"陇博课堂"面向中小学生开展丝路文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "兰州市七里河区西津西路3号", "bus": "乘坐1路、31路等公交车"}, "contact": {"phone": "0931-2333304", "website": "https://www.gansumuseum.com"}}'
WHERE museum_id = 29;

-- ---------------------------------------------------------------------------
-- 30. 青海省博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '青海省博物馆成立于2004年，是青海省综合性博物馆。青海是丝绸之路南线和唐蕃古道的重要节点，也是多民族聚居区，青海省博物馆收藏了大量反映青海历史文化和民族文化的珍贵文物。',
  architecture = '博物馆位于西宁市城西区，建筑面积2.3万平方米。建筑外观采用现代设计理念，融合了青海地域特色与民族文化元素。馆内设有多个展厅，展览面积8000平方米，配备现代化展示设施。',
  highlights = '["彩陶文物","青铜时代诺木洪文化文物","吐谷浑文物","唐代丝绸之路文物","青海少数民族服饰","藏传佛教文物"]',
  education = '青海省博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、民族文化体验活动，开设"青博课堂"面向中小学生开展青海历史文化教育。同时开展流动博物馆进校园活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "西宁市城西区西关大街58号", "bus": "乘坐2路、22路等公交车"}, "contact": {"phone": "0971-6115908", "website": "https://www.qhmuseum.com"}}'
WHERE museum_id = 30;

-- ---------------------------------------------------------------------------
-- 31. 内蒙古博物院
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '内蒙古博物院前身为1957年成立的内蒙古博物馆，2007年新馆建成开放并更名为内蒙古博物院。内蒙古是匈奴、鲜卑、契丹、蒙古等北方民族的重要活动区域，内蒙古博物院收藏了大量反映草原文明的珍贵文物，是了解北方游牧文化的重要窗口。',
  architecture = '新馆位于呼和浩特市新城区，建筑面积5.7万平方米。建筑外观融合了草原文化元素与现代设计理念，造型庄重大气。馆内设有多个展厅，展览面积1.5万平方米，配备现代化展示设施。',
  highlights = '["匈奴王冠","契丹鸡冠壶","辽代鎏金铜面具","蒙古族服饰","查干诺尔恐龙化石","草原青铜器"]',
  education = '内蒙古博物院开展丰富的公众教育活动，包括"内博讲坛"系列讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、草原文化体验活动，开设"内博课堂"面向中小学生开展北方民族文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": true}, "transportation": {"address": "呼和浩特市新城区呼伦贝尔南路5号", "bus": "乘坐2路、3路等公交车"}, "contact": {"phone": "0471-4614001", "website": "https://www.nmgmuseum.com"}}'
WHERE museum_id = 31;

-- ---------------------------------------------------------------------------
-- 32. 宁夏博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '宁夏博物馆前身为1959年成立的宁夏回族自治区博物馆，是宁夏综合性博物馆。宁夏是西夏王朝的核心区域，也是贺兰山岩画的重要分布地，宁夏博物馆收藏了大量反映西夏文化和宁夏历史文化的珍贵文物。',
  architecture = '博物馆位于银川市金凤区，建筑面积3.2万平方米。建筑外观采用现代设计理念，融合了宁夏地域特色与民族文化元素。馆内设有多个展厅，展览面积1万平方米，配备现代化展示设施。',
  highlights = '["西夏鎏金铜牛","西夏石雕力士志文支座","贺兰山岩画拓片","西夏文文献","回族文物","宁夏历史文物"]',
  education = '宁夏博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、西夏文化体验活动，开设"宁博课堂"面向中小学生开展宁夏历史文化教育。同时开展流动博物馆进校园活动。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 9:00-17:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "16:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "银川市金凤区人民广场东街6号", "bus": "乘坐1路、33路等公交车"}, "contact": {"phone": "0951-5108188", "website": "https://www.nxbwg.com"}}'
WHERE museum_id = 32;

-- ---------------------------------------------------------------------------
-- 33. 新疆维吾尔自治区博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '新疆维吾尔自治区博物馆成立于1959年，是新疆综合性博物馆。新疆是丝绸之路的核心区域，也是多民族聚居区，新疆博物馆收藏了大量反映丝绸之路文化和新疆历史文化的珍贵文物，其中新疆古代干尸藏品在世界上具有独特地位。',
  architecture = '博物馆位于乌鲁木齐市沙依巴克区，建筑面积1.7万平方米。建筑外观融合了维吾尔族传统建筑元素与现代设计理念，具有鲜明的地域特色。馆内设有多个展厅，展览面积7000平方米，配备现代化展示设施。',
  highlights = '["楼兰美女干尸","小河墓地文物","营盘男尸","丝绸之路出土纺织品","唐代丝绸之路文书","新疆少数民族服饰"]',
  education = '新疆维吾尔自治区博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、丝路文化体验活动，开设"新博课堂"面向中小学生开展新疆历史文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 10:00-18:00", "closeDay": "周一闭馆（法定节假日除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "17:00"}, "ticket": {"price": "免费", "isFree": true, "idRequired": "凭身份证入馆", "discountPolicy": ["未成年人、学生、老年人优先", "残疾人凭残疾证免费"], "needReservation": false}, "transportation": {"address": "乌鲁木齐市沙依巴克区西北路581号", "bus": "乘坐7路、910路等公交车"}, "contact": {"phone": "0991-4530830", "website": "https://www.xjmuseum.com.cn"}}'
WHERE museum_id = 33;

-- ---------------------------------------------------------------------------
-- 34. 台北故宫博物院
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '台北故宫博物院成立于1965年，原名中山博物院。其藏品主要来自北京故宫博物院、南京中央博物院筹备处等机构的南迁文物。台北故宫博物院收藏的中国古代文物精品数量众多，尤以书画、陶瓷、铜器、玉器最为著名，是研究中国古代艺术文化的重要机构。',
  architecture = '博物院位于台北市士林区，建筑面积1.6万平方米。主建筑采用中国宫殿式建筑风格，黄瓦绿墙，庄重典雅。1965年建成开放，后经多次扩建。建筑融合了中国传统宫殿建筑元素与现代化博物馆功能，是台北市标志性文化建筑之一。',
  highlights = '["翠玉白菜","毛公鼎","散氏盘","肉形石","《快雪时晴帖》","宋代汝窑瓷器"]',
  education = '台北故宫博物院开展丰富的公众教育活动，包括专题讲座、文物鉴赏、文化体验课程等。定期举办"故宫讲坛"，邀请专家学者讲解文物历史文化。开设"故宫课堂"，面向青少年开展传统文化教育。同时开展数字博物馆建设，提供线上展览和虚拟参观服务。',
  visit_info = '{"openTime": {"regularTime": "周一至周日 8:30-18:30", "closeDay": "除夕固定闭馆", "holidayNotice": "节假日延长开放至21:00", "stopEntryTime": "18:00"}, "ticket": {"price": "350元新台币", "isFree": false, "idRequired": "凭票入馆", "discountPolicy": ["学生票150元", "65岁以上长者免费", "身心障碍者免费"], "needReservation": false}, "transportation": {"address": "台北市士林区至善路二段221号", "metro": "捷运淡水线士林站转乘公交"}, "contact": {"phone": "886-2-28812021", "website": "https://www.npm.gov.tw"}}'
WHERE museum_id = 34;

-- ---------------------------------------------------------------------------
-- 35. 香港历史博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '香港历史博物馆于1998年建成开放，是香港康乐及文化事务署辖下的博物馆。博物馆通过"香港故事"常设展览，展示了香港从四亿年前的泥盆纪到1997年回归祖国的历史变迁，是了解香港历史文化的重要窗口。',
  architecture = '博物馆位于香港九龙尖沙咀，建筑面积1.7万平方米。建筑外观采用现代设计理念，简洁大方。馆内设有多个展厅，展览面积8000平方米，配备现代化展示设施。建筑融合了现代建筑风格与香港都市特色。',
  highlights = '["香港考古出土文物","香港历史文献","香港民俗文物","日军占领时期文物","香港工业发展文物","1997年回归文物"]',
  education = '香港历史博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、历史文化讲座，开设教育项目面向中小学生开展香港历史文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周一至周三、周五至周日 10:00-18:00", "closeDay": "周四闭馆（公众假期除外）", "holidayNotice": "圣诞前夕及农历新年前夕10:00-17:00", "stopEntryTime": "17:30"}, "ticket": {"price": "10元港币", "isFree": false, "idRequired": "凭票入馆", "discountPolicy": ["全日制学生、高龄人士、残疾人士免费", "星期三免费入场"], "needReservation": false}, "transportation": {"address": "香港九龙尖沙咀漆咸道南100号", "metro": "港铁尖沙咀站B2出口"}, "contact": {"phone": "852-27249042", "website": "https://hk.history.museum"}}'
WHERE museum_id = 35;

-- ---------------------------------------------------------------------------
-- 36. 香港艺术馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '香港艺术馆于1962年成立，是香港最早成立的公共艺术博物馆。2019年完成翻新重新开放。香港艺术馆收藏了大量中国书画、外销艺术、香港艺术及世界艺术作品，是香港重要的艺术文化机构。',
  architecture = '艺术馆位于香港九龙尖沙咀，建筑面积1.7万平方米。2019年翻新后建筑外观更加现代开放，增设了玻璃幕墙和公共空间。馆内设有多个展厅，展览面积1万平方米，配备现代化展示设施。建筑融合了现代建筑风格与维港景观。',
  highlights = '["中国书画藏品","外销画藏品","香港当代艺术","中国古代陶瓷","吴冠中捐赠作品","国际艺术藏品"]',
  education = '香港艺术馆开展丰富的公众教育活动，包括专题讲座、艺术工作坊、导赏活动等。定期举办专题展览导览、艺术家讲座，开设艺术教育项目面向中小学生。同时开展数字博物馆建设，提供线上展览和虚拟参观服务。',
  visit_info = '{"openTime": {"regularTime": "周一至周四 10:00-18:00", "closeDay": "每周四闭馆", "holidayNotice": "周五至周日及公众假期10:00-19:00", "stopEntryTime": "17:30"}, "ticket": {"price": "30元港币", "isFree": false, "idRequired": "凭票入馆", "discountPolicy": ["全日制学生、高龄人士、残疾人士半价", "博物馆通行证可免费入场"], "needReservation": false}, "transportation": {"address": "香港九龙尖沙咀梳士巴利道10号", "metro": "港铁尖沙咀站L3出口"}, "contact": {"phone": "852-27210116", "website": "https://hk.art.museum"}}'
WHERE museum_id = 36;

-- ---------------------------------------------------------------------------
-- 37. 澳门博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '澳门博物馆于1998年建成开放，由澳门民政总署管理。博物馆位于大炮台之上，展示了澳门数百年来的历史变迁和中西文化交融的独特面貌。澳门作为中西文化交流的重要港口，其历史文化具有独特的融合特色。',
  architecture = '博物馆位于澳门半岛大炮台，利用原有军事建筑改建，建筑面积2800平方米。建筑保留了原有军事建筑的风貌，内部改建为现代化展厅。馆内设有三层展厅，展示澳门早期历史、民间艺术与传统、澳门当代特色等内容。',
  highlights = '["澳门早期贸易文物","中西文化交流文物","澳门民间工艺品","宗教文物","澳门历史文献","大炮台军事文物"]',
  education = '澳门博物馆开展丰富的公众教育活动，包括专题讲座、青少年研学项目、文化体验活动等。定期举办专题展览导览、中西文化体验活动，开设教育项目面向中小学生开展澳门历史文化教育。同时开展数字博物馆建设，提供线上展览服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 10:00-18:00", "closeDay": "周一闭馆（公众假期除外）", "holidayNotice": "澳门居民免费入场", "stopEntryTime": "17:30"}, "ticket": {"price": "15澳门元", "isFree": false, "idRequired": "凭票入馆", "discountPolicy": ["澳门居民免费", "学生及65岁以上半价", "周日免费入场"], "needReservation": false}, "transportation": {"address": "澳门半岛大炮台", "bus": "乘坐3路、3X路等公交车"}, "contact": {"phone": "853-28357911", "website": "https://www.macaumuseum.gov.mo"}}'
WHERE museum_id = 37;

-- ---------------------------------------------------------------------------
-- 38. 澳门艺术博物馆
-- ---------------------------------------------------------------------------
UPDATE museum_detail SET
  history = '澳门艺术博物馆于1999年建成开放，由澳门民政总署管理。博物馆以收藏、研究、展示中国书画艺术、历史绘画及澳门艺术作品为主，是澳门重要的艺术文化机构。博物馆定期举办国际艺术展览，促进澳门与世界的艺术交流。',
  architecture = '博物馆位于澳门新口岸填海区，建筑面积1万平方米。建筑外观采用现代设计理念，简洁大方。馆内设有四层展厅，展览面积4000平方米，配备现代化展示设施。建筑融合了现代建筑风格与澳门地域特色。',
  highlights = '["中国书画藏品","澳门历史绘画","外销画藏品","澳门当代艺术","国际艺术展览作品","岭南画派作品"]',
  education = '澳门艺术博物馆开展丰富的公众教育活动，包括专题讲座、艺术工作坊、导赏活动等。定期举办专题展览导览、艺术家讲座，开设艺术教育项目面向中小学生。同时开展数字博物馆建设，提供线上展览和虚拟参观服务。',
  visit_info = '{"openTime": {"regularTime": "周二至周日 10:00-19:00", "closeDay": "周一闭馆（公众假期除外）", "holidayNotice": "节假日开放时间请关注官网公告", "stopEntryTime": "18:30"}, "ticket": {"price": "5澳门元", "isFree": false, "idRequired": "凭票入馆", "discountPolicy": ["澳门居民免费", "学生及65岁以上免费", "周日免费入场"], "needReservation": false}, "transportation": {"address": "澳门新口岸宋玉生广场", "bus": "乘坐3路、8路等公交车"}, "contact": {"phone": "853-87915728", "website": "https://www.MAM.gov.mo"}}'
WHERE museum_id = 38;

-- ============================================================================
-- 来源: 11-museum-stats-fix.sql
-- ============================================================================


-- ============================================================================
-- 博物馆统计数据更新 - 11-museum-stats-fix.sql
-- ============================================================================
-- 更新所有博物馆的文物数量、展览数量、年访问量
-- 文物数量：来自各博物馆官方公布的馆藏数据（确认值）
-- 展览数量：各博物馆近年常规展览数量
-- 年访问量：2025年数据大多未公布，设为0（暂无数据）
-- 使用方法: SOURCE 11-museum-stats-fix.sql
-- ============================================================================

-- 1. 故宫博物院：藏品1,863,404件（官网确认）
UPDATE museum SET artifacts_count = 1863404, exhibitions_count = 50, visitors = 0 WHERE id = 1;

-- 2. 中国科学技术馆：科技馆非传统收藏博物馆
UPDATE museum SET artifacts_count = 0, exhibitions_count = 30, visitors = 0 WHERE id = 2;

-- 3. 上海博物馆：馆藏文物近102万件
UPDATE museum SET artifacts_count = 1020000, exhibitions_count = 40, visitors = 0 WHERE id = 3;

-- 4. 秦始皇兵马俑博物馆：出土文物约5万件
UPDATE museum SET artifacts_count = 50000, exhibitions_count = 10, visitors = 0 WHERE id = 4;

-- 5. 陕西历史博物馆：馆藏文物171万余件
UPDATE museum SET artifacts_count = 1710000, exhibitions_count = 45, visitors = 0 WHERE id = 5;

-- 6. 南京博物院：馆藏文物432,768件
UPDATE museum SET artifacts_count = 432768, exhibitions_count = 40, visitors = 0 WHERE id = 6;

-- 7. 河南博物院：馆藏文物17万余件
UPDATE museum SET artifacts_count = 170000, exhibitions_count = 35, visitors = 0 WHERE id = 7;

-- 8. 浙江省博物馆：馆藏文物十万余件
UPDATE museum SET artifacts_count = 100000, exhibitions_count = 25, visitors = 0 WHERE id = 8;

-- 9. 湖北省博物馆：馆藏文物20万余件
UPDATE museum SET artifacts_count = 200000, exhibitions_count = 30, visitors = 0 WHERE id = 9;

-- 10. 湖南省博物馆：馆藏文物18万余件
UPDATE museum SET artifacts_count = 180000, exhibitions_count = 28, visitors = 0 WHERE id = 10;

-- 11. 四川博物院：馆藏文物26万余件
UPDATE museum SET artifacts_count = 260000, exhibitions_count = 32, visitors = 0 WHERE id = 11;

-- 12. 广东省博物馆：馆藏文物16万余件
UPDATE museum SET artifacts_count = 160000, exhibitions_count = 26, visitors = 0 WHERE id = 12;

-- 13. 天津博物馆：馆藏文物20万余件
UPDATE museum SET artifacts_count = 200000, exhibitions_count = 24, visitors = 0 WHERE id = 13;

-- 14. 重庆中国三峡博物馆：馆藏文物18万余件
UPDATE museum SET artifacts_count = 180000, exhibitions_count = 22, visitors = 0 WHERE id = 14;

-- 15. 山东博物馆：馆藏文物28万余件
UPDATE museum SET artifacts_count = 280000, exhibitions_count = 30, visitors = 0 WHERE id = 15;

-- 16. 辽宁省博物馆：馆藏文物12万余件
UPDATE museum SET artifacts_count = 120000, exhibitions_count = 20, visitors = 0 WHERE id = 16;

-- 17. 吉林省博物院：馆藏文物近10万件
UPDATE museum SET artifacts_count = 100000, exhibitions_count = 18, visitors = 0 WHERE id = 17;

-- 18. 黑龙江省博物馆：馆藏文物11万余件
UPDATE museum SET artifacts_count = 110000, exhibitions_count = 16, visitors = 0 WHERE id = 18;

-- 19. 福建博物院：馆藏文物25万余件
UPDATE museum SET artifacts_count = 250000, exhibitions_count = 28, visitors = 0 WHERE id = 19;

-- 20. 安徽博物院：馆藏文物22万余件
UPDATE museum SET artifacts_count = 220000, exhibitions_count = 24, visitors = 0 WHERE id = 20;

-- 21. 河北博物院：馆藏文物24万余件
UPDATE museum SET artifacts_count = 240000, exhibitions_count = 26, visitors = 0 WHERE id = 21;

-- 22. 山西博物院：馆藏文物50万余件
UPDATE museum SET artifacts_count = 500000, exhibitions_count = 32, visitors = 0 WHERE id = 22;

-- 23. 江西省博物馆：馆藏文物6万余件
UPDATE museum SET artifacts_count = 60000, exhibitions_count = 20, visitors = 0 WHERE id = 23;

-- 24. 广西壮族自治区博物馆：馆藏文物5万余件
UPDATE museum SET artifacts_count = 50000, exhibitions_count = 18, visitors = 0 WHERE id = 24;

-- 25. 海南省博物馆：馆藏文物2万余件
UPDATE museum SET artifacts_count = 20000, exhibitions_count = 15, visitors = 0 WHERE id = 25;

-- 26. 贵州省博物馆：馆藏文物7万余件
UPDATE museum SET artifacts_count = 70000, exhibitions_count = 18, visitors = 0 WHERE id = 26;

-- 27. 云南省博物馆：馆藏文物23万余件
UPDATE museum SET artifacts_count = 230000, exhibitions_count = 25, visitors = 0 WHERE id = 27;

-- 28. 西藏博物馆：馆藏文物5万余件
UPDATE museum SET artifacts_count = 50000, exhibitions_count = 16, visitors = 0 WHERE id = 28;

-- 29. 甘肃省博物馆：馆藏文物35万余件
UPDATE museum SET artifacts_count = 350000, exhibitions_count = 28, visitors = 0 WHERE id = 29;

-- 30. 青海省博物馆：馆藏文物4万余件
UPDATE museum SET artifacts_count = 40000, exhibitions_count = 14, visitors = 0 WHERE id = 30;

-- 31. 内蒙古博物院：馆藏文物15万余件
UPDATE museum SET artifacts_count = 150000, exhibitions_count = 22, visitors = 0 WHERE id = 31;

-- 32. 宁夏博物馆：馆藏文物4万余件
UPDATE museum SET artifacts_count = 40000, exhibitions_count = 16, visitors = 0 WHERE id = 32;

-- 33. 新疆维吾尔自治区博物馆：馆藏文物5万余件
UPDATE museum SET artifacts_count = 50000, exhibitions_count = 18, visitors = 0 WHERE id = 33;

-- 34. 台北故宫博物院：馆藏文物698,785件
UPDATE museum SET artifacts_count = 698785, exhibitions_count = 35, visitors = 0 WHERE id = 34;

-- 35. 香港历史博物馆：馆藏文物约9万件
UPDATE museum SET artifacts_count = 90000, exhibitions_count = 20, visitors = 0 WHERE id = 35;

-- 36. 香港艺术馆：馆藏文物约1.7万件
UPDATE museum SET artifacts_count = 17000, exhibitions_count = 25, visitors = 0 WHERE id = 36;

-- 37. 澳门博物馆：馆藏文物约3000件
UPDATE museum SET artifacts_count = 3000, exhibitions_count = 15, visitors = 0 WHERE id = 37;

-- 38. 澳门艺术博物馆：馆藏文物约1万件
UPDATE museum SET artifacts_count = 10000, exhibitions_count = 18, visitors = 0 WHERE id = 38;


-- ============================================================================
-- 来源: 12-museum-images-fix.sql
-- ============================================================================


-- 博物馆卡片图片更新 - 使用官网真实图片 + 百度百科CDN图片
-- 更新时间: 2026-08-22
-- 百度百科CDN URL格式: https://bkimg.cdn.bcebos.com/pic/xxx?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70

-- ==================== 官网图片 (8个) ====================

-- ID 2: 中国科学技术馆
UPDATE museum SET image = 'https://www.cstm.org.cn/cms_files/filemanager/842192284/picture/20243/5651637d2b7f4e0bb3f5deb72fa8773d.jpg' WHERE id = 2;

-- ID 3: 上海博物馆
UPDATE museum SET image = 'https://www.shanghaimuseum.net/mu/upload/202607/f43263bc-4cd4-40f9-adfc-b66f43093ef6.jpg' WHERE id = 3;

-- ID 4: 秦始皇兵马俑博物馆
UPDATE museum SET image = 'https://www.bmy.com.cn/Uploads/Picture/2023/06/07/s647fe2c666795.jpg' WHERE id = 4;

-- ID 5: 陕西历史博物馆
UPDATE museum SET image = 'https://www.sxhm.com/Uploads/Picture/2026/06/12/s6a2bab3009d90.jpg' WHERE id = 5;

-- ID 7: 河南博物院
UPDATE museum SET image = 'https://www.chnmus.net/webfile/upload/2026/07-24/10-13-080288-389942026.jpg' WHERE id = 7;

-- ID 10: 湖南省博物馆
UPDATE museum SET image = 'https://www.hnmuseum.com/sites/default/files/dhz001.jpg' WHERE id = 10;

-- ID 12: 广东省博物馆
UPDATE museum SET image = 'https://img1.qunarzz.com/travel/d3/1606/e6/b7bcede1bc52c89a.jpg' WHERE id = 12;

-- ID 15: 山东博物馆
UPDATE museum SET image = 'https://dimg05.c-ctrip.com/images/tg/702/590/880/9357e2b1c2f44f23bc3a57e7790d0cd3_C_671_10000_Q90.jpg' WHERE id = 15;

-- ==================== 百度百科CDN图片 (11个) ====================

-- ID 1: 故宫博物院
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/83025aafa40f4bfbfbed961c9f186ff0f736afc3b266?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 1;

-- ID 6: 南京博物院
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/d50735fae6cd7b899e513c98977855a7d933c895a02e?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 6;

-- ID 8: 浙江省博物馆
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/dbb44aed2e738bd4b31c76eca6d690d6277f9f2f53e2?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 8;

-- ID 9: 湖北省博物馆
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/a5c27d1ed21b0ef41bd51eb3d59946da81cb38db9093?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 9;

-- ID 11: 四川博物院
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/bba1cd11728b4710b9124f63e495d4fdfc0392458553?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 11;

-- ID 13: 天津博物馆
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/64380cd7912397dda1448c2268d5a5b7d0a20cf429c4?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 13;

-- ID 14: 重庆中国三峡博物馆
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/09fa513d269759ee3d6dbda280a254166d224f4a711a?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 14;

-- ID 16: 辽宁省博物馆
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/5ab5c9ea15ce36d3f5ec84353df33a87e850b1ce?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 16;

-- ID 17: 吉林省博物院
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/574e9258d109b3de9c828a3ffeee7b81800a19d8e611?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 17;

-- ID 18: 黑龙江省博物馆
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/b21bb051f8198618367a145f6fb539738bd4b21c48ed?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 18;

-- ID 19: 福建博物院
UPDATE museum SET image = 'https://bkimg.cdn.bcebos.com/pic/4610b912c8fcc3cec3fde63b0519c188d43f87948a3d?x-bce-process=image/resize,m_lfit,w_536,limit_1/quality,Q_70' WHERE id = 19;

-- ==================== 360图片搜索 (11个) ====================

-- ID 20: 安徽博物院
UPDATE museum SET image = 'https://p2.ssl.qhimgs1.com/t0106ea97500d38ec68.jpg' WHERE id = 20;

-- ID 21: 河北博物院
UPDATE museum SET image = 'https://p0.ssl.qhimgs1.com/t043958eda551fffd6e.jpg' WHERE id = 21;

-- ID 22: 山西博物院
UPDATE museum SET image = 'https://p0.ssl.qhimgs1.com/t0429e45ea764debe64.jpg' WHERE id = 22;

-- ID 23: 江西省博物馆
UPDATE museum SET image = 'https://p0.ssl.qhimgs1.com/t01d94f5d0b29c88e56.jpg' WHERE id = 23;

-- ID 24: 广西壮族自治区博物馆
UPDATE museum SET image = 'https://p3.ssl.qhimgs1.com/t0144d0c1792e6ca9b9.jpg' WHERE id = 24;

-- ID 25: 海南省博物馆
UPDATE museum SET image = 'https://p3.ssl.qhimgs1.com/t01a007cf07dce62053.jpg' WHERE id = 25;

-- ID 26: 贵州省博物馆
UPDATE museum SET image = 'https://p2.ssl.qhimgs1.com/t01c2eba2985a8062ec.jpg' WHERE id = 26;

-- ID 28: 西藏博物馆
UPDATE museum SET image = 'https://p2.ssl.qhimgs1.com/t01b9e1fd92cf9aea78.jpg' WHERE id = 28;

-- ID 32: 宁夏博物馆
UPDATE museum SET image = 'https://p0.ssl.qhimgs1.com/t049bc6280e2f9cdce0.jpg' WHERE id = 32;

-- ID 33: 新疆维吾尔自治区博物馆
UPDATE museum SET image = 'https://p2.ssl.qhimgs1.com/t043e275cbec83d9ac8.jpg' WHERE id = 33;

-- ID 34: 台北故宫博物院
UPDATE museum SET image = 'https://p3.ssl.qhimgs1.com/t01056fd2254bfe6929.jpg' WHERE id = 34;

-- ==================== 其他来源 (7个) ====================

-- ID 27: 云南省博物馆 (官网)
UPDATE museum SET image = 'https://www.ynmuseum.org/Uploads/files/2025-09-23/7f98a23130c344da9176734440048c6d.jpg' WHERE id = 27;

-- ID 29: 甘肃省博物馆 (360图片)
UPDATE museum SET image = 'https://p1.ssl.qhimg.com/t01c602c6985a0eaa7b.jpg' WHERE id = 29;

-- ID 30: 青海省博物馆 (去哪儿)
UPDATE museum SET image = 'https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/bc1b58c737b7a6b83248cfffa16019ed.jpg' WHERE id = 30;

-- ID 31: 内蒙古博物院 (携程)
UPDATE museum SET image = 'https://youimg1.c-ctrip.com/target/100h0d0000006q2v053EB.jpg' WHERE id = 31;

-- ID 35: 香港历史博物馆 (iMuseum)
UPDATE museum SET image = 'https://icity-static.icitycdn.com/images/uploads/ap/imsm/museum/pic_head/5ofa5r6/084308ed1caaa0c75ofa5r6.jpg/1403588710/640x0' WHERE id = 35;

-- ID 36: 香港艺术馆 (携程)
UPDATE museum SET image = 'https://youimg1.c-ctrip.com/target/10061d000001e8tjy58C6.jpg' WHERE id = 36;

-- ID 37: 澳门博物馆 (携程)
UPDATE museum SET image = 'https://youimg1.c-ctrip.com/target/100q0d0000006t2f2086B.jpg' WHERE id = 37;

-- ID 38: 澳门艺术博物馆 (中国画家网)
UPDATE museum SET image = 'https://www.huajia.cc/photo/hall/h1/340.jpg' WHERE id = 38;


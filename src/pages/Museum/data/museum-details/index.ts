// 博物馆详细信息数据（参观信息、历史沿革、建筑特色、重要馆藏、教育活动）

import type {
  MuseumDetailInfo,
} from "../../../../types/museum";

export type { MuseumDetailInfo, MuseumVisitInfo } from "../../../../types/museum";

// 博物馆详细信息数�?export const museumDetailsData: MuseumDetailInfo[] = [
  // 故宫博物�?(ID: 1)
  {
    museumId: 1,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?8:30-17:00",
        stopEntryTime: "16:10",
        closeDay: "周一（法定节假日除外�?,
        holidayNotice: "节假日开放时间请关注公告",
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
        idRequired: "凭身份证入馆",
        discountPolicy: ["未成年人、学生、老年人优�?, "残疾人凭残疾证免�?],
      },
      rules: {
        allowed: ["拍照时请关闭闪光�?, "可携带饮用水入馆"],
        forbidden: ["禁止携带宠物入馆", "禁止触摸展品", "禁止大声喧哗"],
      },
      transportation: {
        address: "北京市东城区景山前街4�?,
        metro: "地铁1号线天安门东站、天安门西站",
        bus: "公交1�?�?0�?0�?2�?20�?26�?03�?05�?10�?28路等",
      },
      services: {
        hasGuide: true,
        hasStorage: true,
        hasRestaurant: true,
        hasAccessibility: true,
        hasRestArea: true,
        hasWiFi: true,
      },
      contact: {
        phone: "010-85007421",
        email: "gugong@dpm.org.cn",
        complaintPhone: "010-85007420",
        website: "https://www.dpm.org.cn",
      },
    },
    history:
      "故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆。故宫始建于明永乐四年（1406年），至永乐十八年（1420年）落成，是明清两朝二十四位皇帝的皇宫�?911年辛亥革命推翻帝制，1914年政府将外朝部分辟为古物陈列所�?925�?0�?0日内朝部分正式辟为故宫博物院�?,
    architecture:
      "故宫占地面积72万平方米，建筑面�?5万平方米，现有建�?80余座，房�?700余间。故宫四面环有高10米的城墙和宽52米的护城河。城墙四面各设城门一座，南名午门，北称神武门，左右为东华门、西华门。故宫建筑沿着一条南北向的中轴线排列，左右对称，气势宏伟，规划严整，极为壮观�?,
    highlights:
      "故宫博物院馆藏文物总数�?86万余件，其中一级文�?000余件。藏品分�?6大类，包括陶瓷、铜器、玉器、书画、织绣、宫廷文物等。著名藏品有《清明上河图》、翠玉白菜、毛公鼎、散氏盘等。故宫还收藏有大量宫廷文物，如皇帝玺印、宫廷服饰、宫廷陈设等�?,
    education:
      "故宫博物院开展多种教育活动，包括专题讲座、亲子活动、文化体验课程等。定期举�?故宫讲坛'，邀请专家学者讲解故宫历史文化。开�?故宫课堂'，面向中小学生开展传统文化教育。举�?故宫文化�?，让公众深入了解故宫文化�?,
  },
  // 中国科学技术馆 (ID: 2)
  {
    museumId: 2,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:30-17:00",
        stopEntryTime: "16:30",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "北京市朝阳区北辰东路5�?,
      },
      contact: {
        phone: "010-59041000",
        website: "https://www.cstm.org.cn",
      },
    },
    history:
      "中国科学技术馆�?988年建成开放，是中国第一座国家级综合性科技馆�?009年新馆建成，占地面积�?万平方米，建筑面积约10万平方米，是目前中国规模最大、功能最完善的综合性科技场馆。新馆建筑呈'鲁班�?造型，寓意科学的奥秘与探索精神�?,
    architecture:
      "新馆建筑设计融合了中国传统建筑元素与现代科技感，外观呈不对称�?鲁班�?造型，象征着科学的奥秘与探索精神。馆内空间布局合理，设有多个主题展厅，为观众提供沉浸式的科技体验。建筑采用绿色环保设计，获得国家绿色建筑三星认证�?,
    highlights:
      "馆内收藏了大量珍贵的科技文物和互动展品，包括古代科技发明、现代科技成果、航天航空技术等。其中，'宇宙探索'�?生命奥秘'�?信息时代'等主题展区深受观众喜爱。馆内还有中国古代科技成就展，展示四大发明、天文仪器等珍贵文物�?,
    education:
      "馆内定期举办科普讲座、科技体验活动、青少年科技竞赛等教育活动，为公众提供丰富的科学教育资源。同时，还开展科普进社区、进校园等outreach活动，传播科学知识，提高全民科学素质。每年举�?科技�?�?科普�?等大型科普活动�?,
  },
  // 上海博物�?(ID: 3)
  {
    museumId: 3,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:00",
        stopEntryTime: "16:00",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "上海市黄浦区人民大道201�?,
      },
      contact: {
        phone: "021-63723500",
        website: "https://www.shanghaimuseum.net",
      },
    },
    history:
      "上海博物馆创建于1952年，原址在南京西�?25号�?996年新馆建成开放，位于人民广场南侧。上海博物馆是一座大型的中国古代艺术博物馆，馆藏文物近百万件，其中精品文�?2万件，尤以青铜器、陶瓷器、书法、绘画为特色�?,
    architecture:
      "上海博物馆建筑总面�?9200平方米，建筑高度29.5米。建筑造型寓意'天圆地方'，上方为圆形的穹顶，下方为方形的基座。外立面采用花岗岩贴面，庄重典雅。馆内设�?1个专题陈列室，展览面�?2000平方米�?,
    highlights:
      "上海博物馆以青铜器、陶瓷器、书画为三大特色收藏。青铜器收藏以商周时期为主，包括大克鼎、大盂鼎等国宝级文物。陶瓷器收藏涵盖从新石器时代到清代的各个时期，尤以宋元明清瓷器为精。书画收藏包括唐宋元明清各代名家作品，如《淳化阁帖》等�?,
    education:
      "上海博物馆开展丰富的公众教育活动，包括专题讲座、工作坊、亲子活动等。定期举�?上博讲坛'，邀请国内外专家学者讲解艺术文化。开�?上博学院'，面向青少年开展传统文化教育。举�?博物馆之�?等特色活动，吸引年轻观众�?,
  },
  // 秦始皇兵马俑博物�?(ID: 4)
  {
    museumId: 4,
    visitInfo: {
      openTime: {
        regularTime: "全年开�?8:30-18:00",
        stopEntryTime: "17:00",
        closeDay: "全年开�?,
      },
      ticket: {
        price: "120�?人（旺季），60�?人（淡季�?,
        isFree: false,
        needReservation: false,
      },
      transportation: {
        address: "陕西省西安市临潼区秦陵北�?,
      },
      contact: {
        phone: "029-81399001",
        website: "http://www.bmy.com.cn",
      },
    },
    history:
      "秦始皇兵马俑博物馆建�?974年，是在秦始皇兵马俑坑遗址上建立的遗址类博物馆。兵马俑坑是秦始皇陵的陪葬坑�?974年被当地农民发现。经过考古发掘，发现三个兵马俑坑，出土陶俑、陶马数千件，被誉为'世界第八大奇�?�?,
    architecture:
      "博物馆占地面积约20万平方米，建筑面积约4万平方米。一号坑展厅为拱形钢结构建筑，跨度大，空间开阔，可容纳观众同时参观。二号坑、三号坑展厅采用现代化建筑设计，保护文物的同时提供良好的参观环境�?,
    highlights:
      "兵马俑坑出土陶俑、陶马约8000件，包括将军俑、武士俑、跪射俑等。每件陶俑面部表情各异，栩栩如生。还出土有青铜兵器、战车等文物。秦始皇陵封土呈覆斗形，高约76米，是中国历史上最大的帝王陵墓�?,
    education:
      "博物馆开展秦文化教育活动，包括专题讲座、考古体验、文化讲座等。定期举�?秦文化论�?，邀请专家学者探讨秦代历史。开�?考古体验�?，让青少年了解考古工作。举�?兵马俑文化节'，传播秦文化知识�?,
  },
  // 陕西历史博物�?(ID: 5)
  {
    museumId: 5,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:30",
        stopEntryTime: "16:30",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "陕西省西安市雁塔区小寨东�?1�?,
      },
      contact: {
        phone: "029-85257006",
        website: "http://www.sxhm.com",
      },
    },
    history:
      "陕西历史博物馆是中国第一座大型现代化国家级博物馆�?991年建成开放。馆藏文�?71万余件，上起远古人类初始阶段，下至近代社会，时间跨度长达一百多万年。陕西是中华文明的重要发祥地，历史上先后�?4个王朝在陕西建都�?,
    architecture:
      "博物馆建筑采用唐代建筑风格，整体布局�?中央殿堂、四隅崇�?的格局。建筑色彩采用灰白基调，庄重典雅。馆内设�?个基本陈列室，展览面�?1600平方米，采用现代化展陈手段，展示陕西悠久的历史文化�?,
    highlights:
      "馆藏文物包括史前文物、商周青铜器、秦汉金银器、唐代壁画等。著名藏品有镶金兽首玛瑙杯、舞马衔杯纹银壶、三彩载乐骆驼等。唐代壁画馆收藏有章怀太子墓、懿德太子墓等出土的精美壁画，是研究唐代社会生活的重要资料�?,
    education:
      "博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?陕博讲坛'，邀请专家学者讲解历史文化。开�?陕博课堂'，面向中小学生开展传统文化教育。举�?博物馆之�?等特色活动�?,
  },
  // 南京博物�?(ID: 6)
  {
    museumId: 6,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:00",
        stopEntryTime: "16:00",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "江苏省南京市玄武区中山东�?21�?,
      },
      contact: {
        phone: "025-84801111",
        website: "http://www.njmuseum.com",
      },
    },
    history:
      "南京博物院是中国三大博物馆之一，其前身�?933年蔡元培等倡建的国立中央博物院，是中国创建最早的博物馆�?950年更名为南京博物院�?009年新馆建成开放，占地面积13万平方米，建筑面�?万平方米，是中国最大的博物馆之一�?,
    architecture:
      "南京博物院建筑群包括历史馆、艺术馆、特展馆、民国馆、数字馆、非遗馆等六大展馆。历史馆建筑采用辽代建筑风格，气势恢宏。民国馆还原了民国时期的南京街道风貌，让观众身临其境感受民国风情�?,
    highlights:
      "馆藏文物43万余件，包括青铜器、陶瓷器、书画、织绣等。著名藏品有竹林七贤与荣启期砖画、错金银铜牛灯、金兽首形饰件等。民国馆收藏有大量民国时期文物，是研究民国历史的重要资料。非遗馆展示江苏非物质文化遗产�?,
    education:
      "南京博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?南博讲坛'，邀请专家学者讲解历史文化。开�?南博课堂'，面向中小学生开展传统文化教育。举�?博物馆之�?�?非遗体验'等特色活动�?,
  },
  // 河南博物�?(ID: 7)
  {
    museumId: 7,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:30",
        stopEntryTime: "16:30",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "河南省郑州市金水区农业路8�?,
      },
      contact: {
        phone: "0371-63511237",
        website: "http://www.chnmus.net",
      },
    },
    history:
      "河南博物院创建于1927年，是中国建立较早的博物馆之一�?997年新馆建成开放，占地面积10万平方米，建筑面�?.8万平方米。河南是中华文明的重要发祥地，历史上先后�?0多个朝代在河南建都，地下文物居全国首位�?,
    architecture:
      "河南博物院建筑以'中原之气'为设计理念，主体建筑呈金字塔形，寓意中原文化的博大精深。建筑采用现代设计手法，融合中原文化元素。馆内设�?个基本陈列室，展览面�?万平方米，采用现代化展陈手段�?,
    highlights:
      "馆藏文物17万余件，以史前文物、商周青铜器、历代陶瓷器、玉器及石刻最具特色。著名藏品有贾湖骨笛、妇好鸮尊、莲鹤方壶、云纹铜禁等。贾湖骨笛是中国最早的乐器，距今约8000年。妇好鸮尊是商代青铜器的代表作�?,
    education:
      "河南博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?豫博讲坛'，邀请专家学者讲解中原文化。开�?豫博课堂'，面向中小学生开展传统文化教育。举�?华夏古乐�?演出，传承古代音乐文化�?,
  },
  // 浙江省博物馆 (ID: 8)
  {
    museumId: 8,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:00",
        stopEntryTime: "16:30",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "浙江省杭州市西湖区孤山路25�?,
      },
      contact: {
        phone: "0571-87971117",
        website: "http://www.zhejiangmuseum.com",
      },
    },
    history:
      "浙江省博物馆始建�?929年，原名'浙江省西湖博物馆'�?973年更名为浙江省博物馆�?009年武林馆区建成开放，形成孤山馆区和武林馆区两馆并立的格局。浙江省博物馆是浙江省内最大的集收藏、陈列、研究于一体的综合性人文科学博物馆�?,
    architecture:
      "浙江省博物馆分为孤山馆区和武林馆区。孤山馆区位于西湖孤山，建筑风格典雅，与西湖风光融为一体。武林馆区位于杭州市中心，建筑现代大气，展览设施先进。两馆区各有特色，共同展示浙江悠久的历史文化�?,
    highlights:
      "馆藏文物及标本十万余件，包括河姆渡文化、良渚文化等史前文物，越窑青瓷、龙泉青瓷等陶瓷器，以及书画、金银器等。著名藏品有河姆渡文化双鸟朝阳纹牙雕、良渚文化玉琮王、越窑青瓷等。雷峰塔地宫出土文物也是重要收藏�?,
    education:
      "浙江省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?浙博讲坛'，邀请专家学者讲解浙江文化。开�?浙博课堂'，面向中小学生开展传统文化教育。举�?西湖文化讲堂'等特色活动�?,
  },
  // 湖北省博物馆 (ID: 9)
  {
    museumId: 9,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:00",
        stopEntryTime: "16:00",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "湖北省武汉市武昌区东湖路160�?,
      },
      contact: {
        phone: "027-86794127",
        website: "http://www.hbww.org",
      },
    },
    history:
      "湖北省博物馆始建�?953年，是国家一级博物馆�?007年新馆建成开放，占地面积8万平方米，建筑面�?万平方米。湖北是楚文化的发祥地，湖北省博物馆以收藏、研究、展示楚文化为特色，是了解楚文化的重要窗口�?,
    architecture:
      "湖北省博物馆建筑采用楚式建筑风格，主体建筑呈'�?字形布局，寓意楚文化的博大精深。建筑色彩采用楚文化特色的红黑配色，庄重典雅。馆内设�?1个基本陈列室，展览面�?万平方米，采用现代化展陈手段�?,
    highlights:
      "馆藏文物20万余件，其中国家一级文�?45件。著名藏品有曾侯乙编钟、越王勾践剑、郢爰等。曾侯乙编钟是战国早期的大型编钟，共65件，音域宽广，音色优美，是中国古代音乐文化的瑰宝。越王勾践剑是春秋晚期的青铜剑，历经千年不锈�?,
    education:
      "湖北省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?鄂博讲坛'，邀请专家学者讲解楚文化。开�?编钟演奏�?，让观众聆听古代音乐。举�?楚文化体验营'，让青少年了解楚文化�?,
  },
  // 湖南省博物馆 (ID: 10)
  {
    museumId: 10,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:00",
        stopEntryTime: "16:00",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "湖南省长沙市开福区东风�?0�?,
      },
      contact: {
        phone: "0731-82215821",
        website: "http://www.hnmuseum.com",
      },
    },
    history:
      "湖南省博物馆始建�?951年，是国家一级博物馆�?017年新馆建成开放，占地面积5万平方米，建筑面�?万平方米。湖南是楚文化的重要分布区，湖南省博物馆以收藏、研究、展示马王堆汉墓文物为特色，是了解汉代文化的重要窗口�?,
    architecture:
      "湖南省博物馆建筑采用现代设计理念，外观呈'�?形，寓意湖南文化的厚重。建筑采用绿色环保设计，获得国家绿色建筑三星认证。馆内设�?个基本陈列室，展览面�?万平方米，采用现代化展陈手段，特别是马王堆汉墓陈列享誉海内外�?,
    highlights:
      "馆藏文物18万余件，尤以马王堆汉墓文物最具特色。马王堆汉墓出土文物包括素纱单衣、T型帛画、辛追夫人遗体等。素纱单衣重�?9克，是世界上最轻的衣服。T型帛画色彩鲜艳，内容丰富，是研究汉代思想观念的重要资料�?,
    education:
      "湖南省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?湘博讲坛'，邀请专家学者讲解湖湘文化。开�?湘博课堂'，面向中小学生开展传统文化教育。举�?汉代文化体验'等特色活动�?,
  },
  // 四川省博物馆 (ID: 11)
  {
    museumId: 11,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:00",
        stopEntryTime: "16:00",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "四川省成都市青羊区浣花南�?51�?,
      },
      contact: {
        phone: "028-65521555",
        website: "http://www.scmuseum.cn",
      },
    },
    history:
      "四川博物院始建于1941年，原名'四川博物�?�?952年更名为四川博物院�?009年新馆建成开放，占地面积3万平方米，建筑面�?.2万平方米。四川博物院是西南地区最大的综合性博物馆，馆藏文�?6万余件，以巴蜀文化为特色�?,
    architecture:
      "四川博物院建筑采用现代设计理念，外观简洁大方，与浣花溪公园环境融为一体。建筑采用绿色环保设计，获得国家绿色建筑认证。馆内设�?4个陈列室，展览面�?.2万平方米，采用现代化展陈手段，展示四川悠久的历史文化�?,
    highlights:
      "馆藏文物26万余件，其中珍贵文物5万余件，以巴蜀青铜器、汉代画像砖最具特色。著名藏品有三星堆青铜面具、金沙太阳神鸟、东汉说唱俑等。三星堆青铜面具造型奇特，是研究古蜀文明的重要资料。汉代画像砖内容丰富，反映汉代社会生活�?,
    education:
      "四川博物院开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?川博讲坛'，邀请专家学者讲解巴蜀文化。开�?川博课堂'，面向中小学生开展传统文化教育。举�?巴蜀文化体验'等特色活动�?,
  },
  // 广东省博物馆 (ID: 12)
  {
    museumId: 12,
    visitInfo: {
      openTime: {
        regularTime: "周二至周�?9:00-17:00",
        stopEntryTime: "16:00",
        closeDay: "周一闭馆（法定节假日除外�?,
      },
      ticket: {
        price: "免费",
        isFree: true,
        needReservation: true,
      },
      transportation: {
        address: "广东省广州市天河区珠江东�?�?,
      },
      contact: {
        phone: "020-84640909",
        website: "http://www.gdmuseum.com",
      },
    },
    history:
      "广东省博物馆始建�?959年，原名'广东省博物馆'�?010年新馆建成开放。新馆位于广州市天河区珠江新城，占地面积5万平方米，建筑面�?.6万平方米。广东省博物馆是广东省唯一的省级综合博物馆，以岭南文化为特色�?,
    architecture:
      "广东省博物馆新馆建筑采用'宝盒'造型，寓意岭南文化的博大精深。建筑外观呈不规则多边形，采用镂空设计，融合岭南传统建筑元素。馆内设�?个基本陈列室，展览面�?万平方米，采用现代化展陈手段，展示岭南文化�?,
    highlights:
      "馆藏文物16万余件，以岭南文物、潮州木雕、广彩瓷器为特色。著名藏品有潮州金漆木雕大神龛、广彩开光人物瓶、南越王墓出土文物等。潮州木雕工艺精湛，是岭南传统工艺的代表。广彩瓷器色彩艳丽，是中西文化交融的产物�?,
    education:
      "广东省博物馆开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等。定期举�?粤博讲坛'，邀请专家学者讲解岭南文化。开�?粤博课堂'，面向中小学生开展传统文化教育。举�?岭南文化体验'等特色活动�?,
  },
];

// 为剩余博物馆生成默认数据的辅助函�?function generateDefaultDetails(): MuseumDetailInfo[] {
  const details: MuseumDetailInfo[] = [];

  // 博物馆ID�?3�?8
  for (let museumId = 13; museumId <= 38; museumId++) {
    details.push({
      museumId,
      visitInfo: {
        openTime: {
          regularTime: "周二至周�?9:00-17:00",
          stopEntryTime: "16:00",
          closeDay: "周一（法定节假日除外�?,
          holidayNotice: "节假日开放时间请关注公告",
        },
        ticket: {
          price: "免费",
          isFree: true,
          needReservation: true,
          idRequired: "凭身份证入馆",
          discountPolicy: ["未成年人、学生、老年人优�?, "残疾人凭残疾证免�?],
        },
        rules: {
          allowed: ["拍照时请关闭闪光�?, "可携带饮用水入馆"],
          forbidden: ["禁止携带宠物入馆", "禁止触摸展品", "禁止大声喧哗"],
        },
        transportation: {
          address: `博物�?{museumId}地址`,
          metro: "地铁线路信息",
          bus: "公交线路信息",
        },
        services: {
          hasGuide: true,
          hasStorage: true,
          hasRestaurant: true,
          hasAccessibility: true,
          hasRestArea: true,
          hasWiFi: true,
        },
        contact: {
          phone: "咨询电话",
          email: "museum@example.com",
          complaintPhone: "投诉建议电话",
          website: "官方网站",
        },
      },
      history: `博物�?{museumId}历史悠久，收藏丰富，是重要的文化机构。`,
      architecture: `博物�?{museumId}建筑风格独特，融合传统与现代元素，为观众提供良好的参观环境。`,
      highlights: `博物�?{museumId}馆藏文物丰富，包括历史文物、艺术珍品等，是了解当地历史文化的重要窗口。`,
      education: `博物�?{museumId}开展丰富的公众教育活动，包括专题讲座、文化体验、研学旅行等，传播历史文化知识。`,
    });
  }

  return details;
}

// 合并所有博物馆详细信息数据
export const allMuseumDetails: MuseumDetailInfo[] = [
  ...museumDetailsData,
  ...generateDefaultDetails(),
];

// 根据博物馆ID获取详细信息
export const getMuseumDetailsById = (
  museumId: number,
): MuseumDetailInfo | undefined => {
  return allMuseumDetails.find((detail) => detail.museumId === museumId);
};

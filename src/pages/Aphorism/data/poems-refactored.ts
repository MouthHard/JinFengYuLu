/**
 * 精简的诗词数据集
 * 每首诗词可以在多个一级分类下出现，但在同一个一级分类下只属于一个二级分类
 */

import type { Poem } from "../../../types/poetry/poem";

export const poems: Poem[] = [
  {
    id: "poem-1",
    title: "关雎",
    author: "诗经",
    dynasty: "先秦",
    content: [
      "关关雎鸠，在河之洲",
      "窈窕淑女，君子好逑",
      "参差荇菜，左右流之",
      "窈窕淑女，寤寐求之",
      "求之不得，寤寐思服",
      "悠哉悠哉，辗转反侧",
      "参差荇菜，左右采之",
      "窈窕淑女，琴瑟友之",
      "参差荇菜，左右芼之",
      "窈窕淑女，钟鼓乐之",
    ],
    form: "诗经",
    tags: ["爱情", "诗经", "经典", "抒情", "婉约"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "雎鸠鸟在河中的小洲上鸣叫，美丽贤淑的女子，是君子好的配偶",
    translation:
      "The turtledoves coo on the islet in the river. The gentle and graceful lady is a good match for the gentleman.",
    background:
      "《关雎》是《诗经》的第一篇，也是中国古典文学中描写爱情的开篇之作。它反映了周代初期的社会生活，表达了青年男女之间纯真美好的爱情追求",
    appreciation:
      "这首诗运用比兴的手法，以雎鸠鸟的和鸣起兴，引出对美好爱情的向往。诗歌语言质朴自然，节奏明快，反复咏唱，层层递进，展现了从追求到思念，再到最终结合的完整爱情过程",
    poetIntroduction:
      "《诗经》是中国最早的诗歌总集，收集了从西周到春秋中期305篇诗歌，分为'风'、'雅'、'颂'三部分，是中华文学的源头之一",
  },
  {
    id: "poem-2",
    title: "离骚（节选）",
    author: "屈原",
    dynasty: "先秦",
    content: [
      "帝高阳之苗裔兮，朕皇考曰伯庸",
      "摄提贞于孟陬兮，惟庚寅吾以降",
      "皇览揆余初度兮，肇锡余以嘉名",
      "名余曰正则兮，字余曰灵均",
      "纷吾既有此内美兮，又重之以修能",
      "扈江离与辟芷兮，纫秋兰以为佩",
    ],
    form: "楚辞",
    tags: ["楚辞", "屈原", "爱国", "经典", "愤懑", "浪漫", "哲理"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "我是古帝高阳氏的后代，我已故的父亲名叫伯庸",
    translation:
      "I am a descendant of Emperor Gaoyang, my late father was named Boyong.",
    background:
      "《离骚》是屈原的代表作，创作于他被流放期间。全诗373句，2477字，是中国古代最长的抒情诗。诗中屈原自述身世，表达对理想的追求和对现实的愤懑",
    appreciation:
      "《离骚》开创了中国文学'香草美人'的比兴传统，以丰富的想象和瑰丽的语言，展现了诗人高洁的品格和坚定的政治理想",
    poetIntroduction:
      "屈原（约前340-前278），战国时期楚国诗人、政治家。他是中国浪漫主义文学的奠基人，主要作品有《离骚》、《九歌》、《天问》等",
  },
  {
    id: "poem-3",
    title: "咏鹅",
    author: "骆宾王",
    dynasty: "唐代",
    content: ["鹅，鹅，鹅，曲项向天歌", "白毛浮绿水，红掌拨清波"],
    form: "五言",
    tags: ["咏物", "经典", "骆宾王", "幽默", "田园", "闲适"],
    imageUrl:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    annotation: "鹅，鹅，鹅，弯着脖子向天歌唱",
    translation: "Goose, goose, goose, bending its neck to sing to the sky.",
    background: "《咏鹅》是骆宾王七岁时的作品，是中国古代著名的咏物诗",
    appreciation:
      "这首诗语言简洁生动，通过对鹅的描写，表现了诗人对自然的热爱和对生活的观察",
    poetIntroduction: "骆宾王（约640-684），字观光，唐代著名诗人，初唐四杰之一",
  },
  {
    id: "poem-4",
    title: "静夜思",
    author: "李白",
    dynasty: "唐代",
    content: ["床前明月光，疑是地上霜", "举头望明月，低头思故乡"],
    form: "五言绝句",
    tags: [
      "抒情",
      "思乡",
      "李白",
      "经典",
      "离别怀",
      "凄婉忧愁",
      "浪漫",
      "豪放",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "床前明亮的月光，疑是地上铺了霜",
    translation:
      "Bright moonlight before my bed, I suspect it is frost on the ground.",
    background:
      "《静夜思》是李白的代表作之一，创作于唐代。这首诗表达了诗人在静夜中思念故乡的情感",
    appreciation:
      "这首诗语言简洁，意境优美，通过对月光的描写，表达了诗人对故乡的思念。'举头望明月，低头思故乡'是千古名句",
    poetIntroduction:
      "李白（701-762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人称为'诗仙'",
  },
  {
    id: "poem-5",
    title: "出塞",
    author: "王昌龄",
    dynasty: "唐代",
    content: [
      "秦时明月汉时关，万里长征人未还",
      "但使龙城飞将在，不教胡马度阴山",
    ],
    form: "七言绝句",
    tags: [
      "边塞",
      "战争",
      "王昌龄",
      "经典",
      "边塞战争",
      "豪放雄浑",
      "边塞诗派",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "秦时的明月汉时的关，万里长征的人还没有回来",
    translation:
      "The moon of Qin, the passes of Han, the soldiers on the long march have not returned.",
    background:
      "《出塞》是王昌龄的代表作之一，创作于唐代。这首诗表达了对边塞将士的同情和对和平的渴望",
    appreciation:
      "这首诗气势雄浑，意境深远，通过对边塞的描写，表达了诗人对将士的赞美和对和平的向往",
    poetIntroduction:
      "王昌龄（698-756），字少伯，唐代著名诗人，有'七绝圣手'之称",
  },
  {
    id: "poem-6",
    title: "将进酒",
    author: "李白",
    dynasty: "唐代",
    content: [
      "君不见，黄河之水天上来，奔流到海不复回",
      "君不见，高堂明镜悲白发，朝如青丝暮成雪",
      "人生得意须尽欢，莫使金樽空对月",
      "天生我材必有用，千金散尽还复来",
    ],
    form: "乐府",
    tags: [
      "浪漫",
      "豪放",
      "李白",
      "经典",
      "人生感怀",
      "豪放雄浑",
      "豪放",
      "宴饮酬唱",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation:
      "你难道没有看见吗？黄河之水从天上奔涌而下，波涛翻滚直奔东海，再也没有回来",
    translation:
      "Have you not seen? The Yellow River comes from the sky, rushing to the sea never to return.",
    background:
      "《将进酒》是李白的代表作之一，创作于唐代。这首诗表达了诗人豪放不羁的人生态度",
    appreciation:
      "这首诗语言豪放，气势磅礴，通过对黄河的描写，表达了诗人对人生的感慨和对自由的追求",
    poetIntroduction:
      "李白（701-762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人称为'诗仙'",
  },
  {
    id: "poem-7",
    title: "茅屋为秋风所破歌",
    author: "杜甫",
    dynasty: "唐代",
    content: [
      "八月秋高风怒号，卷我屋上三重茅",
      "茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳",
      "南村群童欺我老无力，忍能对面为盗贼",
      "公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息",
    ],
    form: "古体",
    tags: ["忧国", "民生", "杜甫", "经典", "忧国讽喻", "凄婉忧愁", "讽喻劝诫"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "八月秋高气爽，风大声吼叫，卷走了我屋上的三层茅草",
    translation:
      "In the eighth month, autumn winds howl fiercely,卷起 the three layers of thatch on my roof.",
    background:
      "《茅屋为秋风所破歌》是杜甫的代表作之一，创作于唐代。这首诗描写了诗人的茅屋被秋风所破的情景，表达了对穷苦百姓的同情",
    appreciation:
      "这首诗通过对茅屋被秋风所破的描写，揭露了宫市的弊端，表达了对劳动人民的同情。语言质朴，情感真挚",
    poetIntroduction:
      "杜甫（712-770），字子美，号少陵野老，唐代伟大的现实主义诗人，被后人称为'诗圣'",
  },
  {
    id: "poem-8",
    title: "山居秋暝",
    author: "王维",
    dynasty: "唐代",
    content: [
      "空山新雨后，天气晚来秋",
      "明月松间照，清泉石上流",
      "竹喧归浣女，莲动下渔舟",
      "随意春芳歇，王孙自可留",
    ],
    form: "五言律诗",
    tags: [
      "清丽",
      "山水",
      "王维",
      "经典",
      "山水田园",
      "婉约典雅",
      "山水田园诗派",
      "闲适旷",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "空旷的山中刚刚下过雨，天气在傍晚时分转凉，已是秋天",
    translation:
      "After fresh rain in the empty mountains, the weather turns cool at evening, it's autumn now.",
    background:
      "《山居秋暝》是王维的代表作之一，创作于唐代。这首诗描写了秋天山居的景色",
    appreciation:
      "这首诗语言清丽，意境优美，通过对秋景的描写，表达了诗人对田园生活的热爱。'明月松间照，清泉石上流'是千古名句",

    poetIntroduction:
      "王维（701-761），字摩诘，唐代著名诗人、画家，山水田园诗派代表人物",
  },
  {
    id: "poem-9",
    title: "念奴娇·赤壁怀古",
    author: "苏轼",
    dynasty: "北宋",
    content: [
      "大江东去，浪淘尽，千古风流人物",
      "故垒西边，人道是，三国周郎赤壁",
      "乱石穿空，惊涛拍岸，卷起千堆雪",
      "江山如画，一时多少豪杰",
    ],
    form: "词",
    tags: ["豪放", "咏史", "苏轼", "经典", "咏史怀", "豪放雄浑", "豪放"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "大江向东流去，浪涛淘尽了千古风流人物",
    translation:
      "The great river flows east, washing away all the heroic figures of the ages.",
    background:
      "《念奴娇·赤壁怀古》是苏轼的代表作之一，创作于北宋时期。这首词表达了对历史的感慨",
    appreciation:
      "这首词气势磅礴，意境开阔，通过对赤壁的描写，表达了诗人对历史的感慨和对英雄的赞美",
    poetIntroduction:
      "苏轼（1037-1101），字子瞻，号东坡居士，北宋著名文学家、书画家",
  },
  {
    id: "poem-10",
    title: "雨霖铃",
    author: "柳永",
    dynasty: "北宋",
    content: [
      "寒蝉凄切，对长亭晚，骤雨初歇",
      "都门帐饮无绪，留恋处，兰舟催发",
      "执手相看泪眼，竟无语凝噎",
      "念去去，千里烟波，暮霭沉沉楚天阔",
    ],
    form: "词",
    tags: ["婉约", "离别", "柳永", "经典", "离别怀", "婉约典雅", "婉约"],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "寒蝉凄切地鸣叫，面对着长亭，傍晚时分，骤雨刚刚停歇",
    translation:
      "Cicadas cry mournfully in the cold; facing the pavilion at dusk, the sudden rain has just stopped.",
    background:
      "《雨霖铃》是柳永的代表作之一，创作于北宋时期。这首词描写了恋人离别的情景",
    appreciation:
      "这首词语言婉约，情感真挚，通过对离别情景的描写，表达了恋人之间的深情厚谊。'执手相看泪眼，竟无语凝噎'是离别的经典写照",

    poetIntroduction:
      "柳永（约984-1053），字耆卿，北宋著名词人，婉约派代表人物",
  },
  {
    id: "poem-11",
    title: "虞美人·春花秋月何时了",
    author: "李煜",
    dynasty: "五代十国",
    content: [
      "春花秋月何时了？往事知多少",
      "小楼昨夜又东风，故国不堪回首月明中",
      "雕栏玉砌应犹在，只是朱颜改",
      "问君能有几多愁？恰似一江春水向东流",
    ],
    form: "词",
    tags: ["婉约", "情感", "李煜", "经典", "爱情闺", "凄婉忧愁", "婉约"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "春花秋月什么时候才能结束？往事知道多少",
    translation:
      "When will spring flowers and autumn moon end? How much do we know of the past?",
    background:
      "《虞美人·春花秋月何时了》是李煜的代表作之一，创作于五代十国时期。这首词表达了诗人对故国的思念",
    appreciation:
      "这首词语言婉约，情感真挚，通过对春花秋月的描写，表达了诗人对故国的思念和哀愁",
    poetIntroduction: "李煜（937-978），字重光，南唐后主，婉约派代表人物",
  },
  {
    id: "poem-12",
    title: "满江红·写怀",
    author: "岳飞",
    dynasty: "南宋",
    content: [
      "怒发冲冠，凭栏处、潇潇雨歇",
      "抬望眼，仰天长啸，壮怀激烈",
      "三十功名尘与土，八千里路云和月",
      "莫等闲，白了少年头，空悲切！",
    ],
    form: "词",
    tags: ["悲壮", "爱国", "岳飞", "经典", "边塞战争", "豪放雄浑", "豪放"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "愤怒得头发竖起，帽子顶起，登上栏杆，潇潇的雨刚停",
    translation:
      "Anger makes my hair stand, lifting my hat; leaning on the rail, the drizzling rain has stopped.",
    background:
      "《满江红·写怀》是岳飞的代表作之一，创作于南宋时期。这首词表达了诗人的爱国情怀和抗金决心",
    appreciation:
      "这首词气势磅礴，情感悲壮，表达了诗人的爱国情怀和抗金决心。'莫等闲，白了少年头，空悲切'是千古名句",

    poetIntroduction: "岳飞（1103-1142），字鹏举，南宋著名抗金将领、民族英雄",
  },
  {
    id: "poem-13",
    title: "登高",
    author: "杜甫",
    dynasty: "",
    content: [
      "风急天高猿啸哀，渚清沙白鸟飞回",
      "无边落木萧萧下，不尽长江滚滚来",
      "万里悲秋常作客，百年多病独登台",
      "艰难苦恨繁霜鬓，潦倒新停浊酒杯",
    ],
    form: "七言律诗",
    tags: ["苍凉", "人生", "杜甫", "经典", "人生感怀", "凄婉忧愁"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation:
      "风急天高，猿猴啼叫悲哀，水中的小洲清浅，沙滩洁白，鸟儿在天空中盘旋",
    translation:
      "The wind is sharp, the sky high, apes cry mournfully; the islet clear, sand white, birds fly back and forth.",
    background:
      "《登高》是杜甫的代表作之一，创作于唐代。这首诗通过登高所见的秋景，表达了诗人的苍凉之感",
    appreciation:
      "这首诗意境苍凉，通过对秋景的描写，表达了诗人对人生的感慨和对命运的无奈。'无边落木萧萧下，不尽长江滚滚来'表现了时间的流逝和生命的短暂",

    poetIntroduction:
      "杜甫（712-770），字子美，号少陵野老，唐代伟大的现实主义诗人，被后人称为'诗圣'",
  },
  {
    id: "poem-14",
    title: "定风波·莫听穿林打叶声",
    author: "苏轼",
    dynasty: "北宋",
    content: [
      "莫听穿林打叶声，何妨吟啸且徐行",
      "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生",
      "料峭春风吹酒醒，微冷，山头斜照却相迎",
      "回首向来萧瑟处，归去，也无风雨也无晴",
    ],
    form: "词",
    tags: ["旷达", "苏轼", "经典", "人生感怀", "闲适旷", "豪放"],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation:
      "不要听那穿过树林打在树叶上的雨声，不妨一边吟诗长啸，一边慢慢行走",
    translation:
      "Don't listen to the sound of rain hitting leaves through the forest; why not sing and walk slowly?",
    background:
      "《定风波·莫听穿林打叶声》是苏轼的代表作之一，创作于北宋时期。这首词表达了诗人的旷达情怀",
    appreciation:
      "这首词语言旷达，情感洒脱，表达了诗人对人生的豁达态度。'一蓑烟雨任平生'、'也无风雨也无晴'体现了诗人的超然境界",

    poetIntroduction:
      "苏轼（1037-1101），字子瞻，号东坡居士，北宋著名文学家、书画家",
  },
  {
    id: "poem-15",
    title: "声声慢·寻寻觅觅",
    author: "李清照",
    dynasty: "南宋",
    content: [
      "寻寻觅觅，冷冷清清，凄凄惨惨戚戚",
      "乍暖还寒时候，最难将息",
      "三杯两盏淡酒，怎敌他、晚来风急？",
      "雁过也，正伤心，却是旧时相识",
    ],
    form: "词",
    tags: ["凄婉", "李清照", "经典", "离别怀", "凄婉忧愁", "婉约"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚",
    translation: "Searching, searching, cold and clear, sad and miserable.",
    background:
      "《声声慢·寻寻觅觅》是李清照的代表作之一，创作于南宋时期。这首词表达了诗人的凄婉之情",
    appreciation:
      "这首词语言凄婉，情感真挚，通过对秋天景象的描写，表达了诗人的孤独和忧伤。'寻寻觅觅，冷冷清清，凄凄惨惨戚戚'是千古名句",

    poetIntroduction:
      "李清照（1084-1155），号易安居士，南宋著名女词人，婉约派代表人物",
  },
  {
    id: "poem-16",
    title: "望岳",
    author: "杜甫",
    dynasty: "",
    content: [
      "岱宗夫如何？齐鲁青未了",
      "造化钟神秀，阴阳割昏晓",
      "荡胸生曾云，决眦入归鸟",
      "会当凌绝顶，一览众山小",
    ],
    form: "五言律诗",
    tags: ["雄浑", "山水", "杜甫", "经典", "山水田园", "豪放雄浑"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "泰山到底怎么样？在齐鲁大地上，那青翠的山色没有尽头",
    translation:
      "What's Mount Tai like? In the land of Qi and Lu, the green mountains stretch endlessly.",
    background:
      "《望岳》是杜甫的代表作之一，创作于唐代。这首诗描写了泰山的雄伟景象",
    appreciation:
      "这首诗意境雄浑，通过对泰山的描写，表达了诗人的雄心壮志。'会当凌绝顶，一览众山小'是千古名句，表现了诗人的豪迈气概",

    poetIntroduction:
      "杜甫（712-770），字子美，号少陵野老，唐代伟大的现实主义诗人，被后人称为'诗圣'",
  },
  {
    id: "poem-17",
    title: "饮酒·其五",
    author: "陶渊明",
    dynasty: "东晋",
    content: [
      "结庐在人境，而无车马喧",
      "问君何能尔？心远地自偏",
      "采菊东篱下，悠然见南山",
      "山气日夕佳，飞鸟相与还",
    ],
    form: "五言",
    tags: [
      "冲淡",
      "田园",
      "陶渊明",
      "经典",
      "山水田园",
      "闲适旷",
      "山水田园诗派",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "在人世间建造房屋，却没有车马的喧闹",
    translation:
      "Building a hut in the human world, yet no noise of carriages and horses.",
    background:
      "《饮酒·其五》是陶渊明的代表作之一，创作于东晋时期。这首诗表达了诗人的冲淡情怀",
    appreciation:
      "这首诗语言冲淡，意境优美，通过对田园生活的描写，表达了诗人对宁静生活的向往。'采菊东篱下，悠然见南山'是千古名句",

    poetIntroduction:
      "陶渊明（365-427），字元亮，号五柳先生，东晋著名诗人，田园诗派创始人",
  },
  {
    id: "poem-18",
    title: "锦瑟",
    author: "李商隐",
    dynasty: "唐代",
    content: [
      "锦瑟无端五十弦，一弦一柱思华年",
      "庄生晓梦迷蝴蝶，望帝春心托杜鹃",
      "沧海月明珠有泪，蓝田日暖玉生烟",
      "此情可待成追忆？只是当时已惘然",
    ],
    form: "七言律诗",
    tags: ["典雅", "李商隐", "经典", "爱情闺", "婉约典雅", "温李诗派"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation:
      "锦瑟有五十根弦，这是为什么呢？每一根弦，每一个柱，都让我想起了美好的年华",
    translation:
      "The jinse has fifty strings for no reason; each string, each bridge, makes me think of my youth.",
    background:
      "《锦瑟》是李商隐的代表作之一，创作于唐代。这首诗表达了诗人对美好年华的追忆",
    appreciation:
      "这首诗语言典雅，意境朦胧，通过对锦瑟的描写，表达了诗人对美好年华的追忆和对人生的感慨。诗中运用了多个典故，增加了诗歌的深度和美感",
    poetIntroduction: "李商隐（约813-约858），字义山，号玉溪生，唐代著名诗人",
  },
  {
    id: "poem-19",
    title: "行路难·其一",
    author: "李白",
    dynasty: "",
    content: [
      "金樽清酒斗十千，玉盘珍羞直万钱",
      "停杯投箸不能食，拔剑四顾心茫然",
      "欲渡黄河冰塞川，将登太行雪满山",
      "闲来垂钓碧溪上，忽复乘舟梦日边",
    ],
    form: "古体",
    tags: ["愤懑", "李白", "经典", "人生感怀", "愤懑"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "金杯中的清酒一斗价值十千，玉盘里的珍贵菜肴价值万钱",
    translation:
      "A golden cup of clear wine costs ten thousand coins; a jade plate of delicacies is worth ten thousand cash.",
    background:
      "《行路难·其一》是李白的代表作之一，创作于唐代。这首诗表达了诗人的愤懑之情",
    appreciation:
      "这首诗语言豪放，情感愤懑，表达了诗人对人生道路的艰难和对理想的追求。'长风破浪会有时，直挂云帆济沧海'体现了诗人的乐观精神",

    poetIntroduction:
      "李白（701-762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人称为'诗仙'",
  },
  {
    id: "poem-20",
    title: "归园田居·其一",
    author: "陶渊明",
    dynasty: "东晋",
    content: [
      "少无适俗韵，性本爱丘山",
      "误落尘网中，一去三十年",
      "羁鸟恋旧林，池鱼思故渊",
      "开荒南野际，守拙归园田",
      "方宅十余亩，草屋八九间",
      "榆柳荫后檐，桃李罗堂前",
      "暧暧远人村，依依墟里烟",
      "狗吠深巷中，鸡鸣桑树颠",
    ],
    form: "五言古诗",
    tags: [
      "田园",
      "隐逸",
      "陶渊明",
      "经典",
      "山水田园",
      "闲适旷",
      "山水田园诗派",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "年轻时就没有适应世俗的韵致，本性热爱山水田园",
    translation:
      "Young as I was, I had no taste for worldly ways; by nature I loved hills and mountains.",
    background:
      "《归园田居》是陶渊明的代表作之一，创作于东晋时期。这首诗表达了诗人回归田园的喜悦",
    appreciation:
      "这首诗语言质朴，意境优美，通过对田园生活的描写，表达了诗人对自然的热爱和对自由生活的向往",
    poetIntroduction:
      "陶渊明（365-427），字元亮，号五柳先生，东晋著名诗人，田园诗派创始人",
  },
  {
    id: "poem-21",
    title: "七步",
    author: "曹植",
    dynasty: "三国",
    content: ["煮豆燃豆萁，豆在釜中泣", "本是同根生，相煎何太急？"],
    form: "五言",
    tags: ["叙事", "经典", "曹植", "悲壮", "豪放雄浑", "现实", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "煮豆子燃烧豆萁，豆子在锅中哭泣",
    translation: "Boiling beans burns the beanstalks, beans weep in the pot.",
    background:
      "《七步诗》是曹植的代表作，创作于三国时期。这首诗表达了诗人对兄弟相残的悲愤",
    appreciation:
      "这首诗语言简练，意境深远，通过对煮豆的描写，表达了诗人对兄弟相残的悲愤。'本是同根生，相煎何太急'是千古名句",

    poetIntroduction:
      "曹植（192-232），字子建，三国时期著名诗人，曹操之子，被称为'才高八斗'",
  },
  {
    id: "poem-22",
    title: "鹊桥仙·纤云弄巧",
    author: "秦观",
    dynasty: "北宋",
    content: [
      "纤云弄巧，飞星传恨，银汉迢迢暗度",
      "金风玉露一相逢，便胜却人间无数",
      "柔情似水，佳期如梦，忍顾鹊桥归路",
      "两情若是久长时，又岂在朝朝暮暮",
    ],
    form: "词",
    tags: [
      "爱情",
      "经典",
      "秦观",
      "爱情闺",
      "婉约典雅",
      "婉约",
      "节日时令",
      "七夕",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation:
      "纤薄的云彩变幻出巧妙的图案，流星传递着离别的恨恨，在银河中悄悄度过",
    translation:
      "Thin clouds weave patterns, shooting stars convey regret, secretly crossing the Milky Way.",
    background:
      "《鹊桥仙·纤云弄巧》是秦观的代表作，创作于宋代。这首词描写了牛郎织女的传说",
    appreciation:
      "这首词语言婉约，意境优美，通过对牛郎织女传说的描写，表达了对爱情的美好祝愿。'两情若是久长时，又岂在朝朝暮暮'是千古名句",

    poetIntroduction: "秦观（1049-1100），字少游，北宋著名词人，婉约派代表人物",
  },
  {
    id: "poem-23",
    title: "天净沙·秋",
    author: "马致远",
    dynasty: "元代",
    content: [
      "枯藤老树昏鸦，小桥流水人家，古道西风瘦马",
      "夕阳西下，断肠人在天涯",
    ],
    form: "散曲",
    tags: ["悲凉", "经典", "马致远", "离别怀", "凄婉忧愁", "叙事", "抒情"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation:
      "枯藤缠绕着老树，黄昏时乌鸦在树上鸣叫，小桥下流水潺潺，几户人家",
    translation:
      "Withered vines, old trees, evening crows; small bridge, flowing water, households; ancient road, west wind, lean horse.",
    background:
      "《天净沙·秋思》是马致远的代表作，创作于元代。这首词描写了秋天的景象和游子的思乡之情",
    appreciation:
      "这首词语言凝练，意境深远，通过对秋景的描写，表达了游子的思乡之情。'夕阳西下，断肠人在天涯'是千古名句",

    poetIntroduction:
      "马致远（约1250-1321），号东篱，元代著名戏曲家、散曲家，被称为'曲状元'",
  },
  {
    id: "poem-24",
    title: "石灰吟",
    author: "于谦",
    dynasty: "明代",
    content: [
      "千锤万凿出深山，烈火焚烧若等闲",
      "粉骨碎身浑不怕，要留清白在人间",
    ],
    form: "七言绝句",
    tags: ["豪放", "经典", "于谦", "豪放雄浑", "人生感怀", "哲理禅意"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "经过千万次的锤凿才从深山里开采出来，烈火焚烧也看作平常的事",
    translation:
      "Thousand hammers and chisels bring it from deep mountains, fierce fire burns it as if nothing.",
    background:
      "《石灰吟》是于谦的代表作，创作于明代。这首诗表达了诗人坚贞不屈的品格",
    appreciation:
      "这首诗语言豪放，意境深远，通过对石灰的描写，表达了诗人坚贞不屈的品格。'要留清白在人间'是千古名句",

    poetIntroduction: "于谦（1398-1457），字廷益，明代著名政治家、诗人",
  },
  {
    id: "poem-25",
    title: "己亥杂诗",
    author: "龚自珍",
    dynasty: "清代",
    content: [
      "九州生气恃风雷，万马齐喑究可哀",
      "我劝天公重抖擞，不拘一格降人才",
    ],
    form: "七言绝句",
    tags: ["豪放", "经典", "龚自珍", "豪放雄浑", "忧国讽喻", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "九州内生机勃勃依靠风雷激荡，万马齐喑的局面实在令人悲哀",
    translation:
      "The nine provinces' vitality depends on wind and thunder, ten thousand horses silent is truly sad.",
    background:
      "《己亥杂诗》是龚自珍的代表作，创作于清代。这首诗表达了诗人对国家命运的关切",
    appreciation:
      "这首诗语言豪放，意境深远，通过对国家命运的关切，表达了诗人的爱国情怀。'我劝天公重抖擞，不拘一格降人才'是千古名句",

    poetIntroduction: "龚自珍（1792-1841），字璱人，清代著名思想家、文学家",
  },
  {
    id: "poem-26",
    title: "长恨歌（节选）",
    author: "白居易",
    dynasty: "唐代",
    content: [
      "汉皇重色思倾国，御宇多年求不得",
      "杨家有女初长成，养在深闺人未识",
      "天生丽质难自弃，一朝选在君王侧",
      "回眸一笑百媚生，六宫粉黛无颜色",
      "春寒赐浴华清池，温泉水滑洗凝脂",
      "侍儿扶起娇无力，始是新承恩泽时",
    ],
    form: "歌行",
    tags: [
      "叙事",
      "爱情",
      "白居易",
      "经典",
      "爱情闺",
      "婉约典雅",
      "元白诗派",
      "人生感怀",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "汉武帝看重美色，想得到倾国倾城的美人，统治天下多年都没有找到",
    translation:
      "The Han Emperor valued beauty and sought a nation-toppling beauty for years without success.",
    background:
      "《长恨歌》是白居易的代表作，创作于唐代。这首诗描写了唐玄宗和杨贵妃的爱情故事",
    appreciation:
      "这首诗语言优美，叙事完整，通过对唐玄宗和杨贵妃的爱情的描写，表现了诗人对爱情的感慨",
    poetIntroduction:
      "白居易（772-846），字乐天，号香山居士，唐代伟大的现实主义诗人",
  },
  {
    id: "poem-27",
    title: "左迁至蓝关示侄孙",
    author: "韩愈",
    dynasty: "唐代",
    content: [
      "一封朝奏九重天，夕贬潮州路八千",
      "欲为圣明除弊事，肯将衰朽惜残年！",
      "云横秦岭家何在？雪拥蓝关马不前",
      "知汝远来应有意，好收吾骨瘴江边",
    ],
    form: "七言律诗",
    tags: ["奇险", "韩愈", "经典", "豪放雄浑", "愤懑", "韩孟诗派", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "早晨呈上一封奏章给皇帝，晚上就被贬到潮州，路途有八千里远",
    translation:
      "Morning I presented a memorial to the Emperor, evening I was banished to Chaozhou, eight thousand li away.",
    background:
      "《左迁至蓝关示侄孙湘》是韩愈的代表作，创作于唐代。这首诗表达了诗人被贬的悲愤",
    appreciation:
      "这首诗语言奇险，意境悲壮，通过对被贬的描写，表达了诗人的悲愤和不屈的精神",
    poetIntroduction:
      "韩愈（768-824），字退之，唐代著名文学家，韩孟诗派代表人物",
  },
  {
    id: "poem-28",
    title: "菩萨蛮·人人尽说江南好",
    author: "韦庄",
    dynasty: "五代十国",
    content: [
      "人人尽说江南好，游人只合江南老",
      "春水碧于天，画船听雨眠",
      "垆边人似月，皓腕凝霜雪",
      "未老莫还乡，还乡须断肠",
    ],
    form: "词",
    tags: [
      "婉约",
      "江南",
      "韦庄",
      "经典",
      "山水田园",
      "婉约典雅",
      "花间",
      "离别怀",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "人人都在说江南好，游子只应该在江南终老",
    translation:
      "Everyone says Jiangnan is beautiful, travelers should grow old in Jiangnan.",
    background:
      "《菩萨蛮·人人尽说江南好》是韦庄的代表作，创作于五代十国时期。这首词描写了江南的美景",
    appreciation:
      "这首词语言婉约，意境优美，通过对江南的描写，表达了诗人对江南的热爱和留恋",
    poetIntroduction:
      "韦庄（约836-910），字端己，五代十国时期著名诗人，花间派代表人物",
  },
  {
    id: "poem-29",
    title: "闻官军收河南河北",
    author: "杜甫",
    dynasty: "",
    content: [
      "剑外忽传收蓟北，初闻涕泪满衣裳",
      "却看妻子愁何在，漫卷诗书喜欲狂",
      "白日放歌须纵酒，青春作伴好还乡",
      "即从巴峡穿巫峡，便下襄阳向洛阳",
    ],
    form: "七言律诗",
    tags: ["喜悦", "爱国", "杜甫", "经典", "豪放雄浑", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "剑外忽然传来收复蓟北的消息，刚听到时眼泪沾满了衣裳",
    translation:
      "Suddenly news comes from Jiannan that Ji north has been recaptured; at first hearing, tears wet my clothes.",
    background:
      "《闻官军收河南河北》是杜甫的代表作，创作于唐代。这首诗表达了诗人听到官军收复失地的喜悦之情",
    appreciation:
      "这首诗语言明快，情感喜悦，表达了诗人听到官军收复失地的喜悦之情。'漫卷诗书喜欲狂'表现了诗人的狂喜状态",

    poetIntroduction:
      "杜甫（712-770），字子美，号少陵野老，唐代伟大的现实主义诗人，被后人称为'诗圣'",
  },
  {
    id: "poem-30",
    title: "春晓",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["春眠不觉晓，处处闻啼鸟", "夜来风雨声，花落知多少"],
    form: "五言绝句",
    tags: [
      "田园",
      "经典",
      "孟浩然",
      "山水田园",
      "婉约典雅",
      "山水田园诗派",
      "闲适旷",
      "节日时令",
      "春节",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "春天睡觉不知不觉天就亮了，到处都能听到鸟儿的叫声",
    translation:
      "Sleeping in spring, I don't notice the dawn; everywhere I hear birds singing.",
    background: "《春晓》是孟浩然的代表作，创作于唐代。这首诗描写了春天的景象",
    appreciation:
      "这首诗语言简洁，意境优美，通过对春天景象的描写，表达了诗人对春天的热爱。'春眠不觉晓，处处闻啼鸟'是春天的经典写照",

    poetIntroduction:
      "孟浩然（689-740），字浩然，唐代著名诗人，山水田园诗派代表人物",
  },
  {
    id: "poem-31",
    title: "垓下歌",
    author: "项羽",
    dynasty: "秦末",
    content: [
      "力拔山兮气盖世，时不利兮骓不逝",
      "骓不逝兮可奈何，虞兮虞兮奈若何！",
    ],
    form: "歌谣",
    tags: ["悲壮", "经典", "项羽", "豪放雄浑", "悲壮", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "力气可以拔起大山，豪气盖过世间，时运不济啊乌骓马不肯离去",
    translation:
      "Strength can move mountains, spirit covers the world; times are unfavorable, the steed won't leave.",
    background:
      "《垓下歌》是项羽的代表作，创作于秦朝末年。这首诗表达了项羽在垓下之战失败后的悲愤",
    appreciation:
      "这首诗语言悲壮，气势磅礴，通过对英雄末路的描写，表达了项羽的悲愤和不甘。'力拔山兮气盖世'是千古名句",

    poetIntroduction:
      "项羽（前232-前202），名籍，字羽，秦末农民起义领袖，西楚霸王",
  },
  {
    id: "poem-32",
    title: "大风歌",
    author: "刘邦",
    dynasty: "汉代",
    content: ["大风起兮云飞扬，威加海内兮归故乡", "安得猛士兮守四方"],
    form: "歌谣",
    tags: ["豪放", "经典", "刘邦", "豪放雄浑", "人生感怀", "爱国"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "大风刮起啊云彩飞扬，威震天下啊回到故乡",
    translation:
      "Great wind rises, clouds fly; power spreads across the land, returning to hometown.",
    background:
      "《大风歌》是刘邦的代表作，创作于汉朝建立初期。这首诗表达了刘邦统一天下的豪情",
    appreciation:
      "这首诗语言豪放，气势磅礴，通过对统一天下的描写，表达了刘邦的豪情壮志。'大风起兮云飞扬'是千古名句",

    poetIntroduction: "刘邦（前256-前195），字季，汉朝开国皇帝，汉高祖",
  },
  {
    id: "poem-33",
    title: "短歌行",
    author: "曹操",
    dynasty: "东汉末年",
    content: [
      "对酒当歌，人生几何！",
      "譬如朝露，去日苦多",
      "慨当以慷，忧思难忘",
      "何以解忧？唯有杜康",
      "青青子衿，悠悠我心",
      "但为君故，沉吟至今",
      "呦呦鹿鸣，食野之苹",
      "我有嘉宾，鼓瑟吹笙",
    ],
    form: "乐府",
    tags: [
      "豪放",
      "经典",
      "曹操",
      "豪放雄浑",
      "人生感怀",
      "忧国讽喻",
      "宴饮酬唱",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "面对着美酒应当高歌，人生能有多久呢",
    translation: "Facing wine we should sing, how long can life be?",
    background:
      "《短歌行》是曹操的代表作，创作于东汉末年。这首诗表达了诗人对人生的感慨和对人才的渴求",
    appreciation:
      "这首诗语言豪放，意境深远，通过对人生的感慨，表达了诗人对人才的渴求和对理想的追求。'对酒当歌，人生几何'是千古名句",

    poetIntroduction: "曹操（155-220），字孟德，东汉末年政治家、军事家、诗人",
  },
  {
    id: "poem-34",
    title: "木兰辞（节选）",
    author: "北朝民歌",
    dynasty: "北朝",
    content: [
      "唧唧复唧唧，木兰当户织",
      "不闻机杼声，唯闻女叹息",
      "问女何所思，问女何所忆",
      "女亦无所思，女亦无所忆",
      "昨夜见军帖，可汗大点兵",
      "军书十二卷，卷卷有爷名",
    ],
    form: "乐府",
    tags: ["叙事", "经典", "木兰", "悲壮", "豪放雄浑", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "织布机唧唧响，木兰对着门织布",
    translation: "The loom clacks, Mulan weaves at the door.",
    background: "《木兰辞》是北朝民歌，讲述了木兰替父从军的故事",
    appreciation:
      "这首诗叙事完整，人物形象鲜明，通过对木兰从军的描写，表现了女性的勇敢和智慧",
    poetIntroduction: "《木兰辞》是北朝民歌，是中国古代著名的叙事诗",
  },
  {
    id: "poem-35",
    title: "敕勒歌",
    author: "北朝民歌",
    dynasty: "北朝",
    content: [
      "敕勒川，阴山下",
      "天似穹庐，笼盖四野",
      "天苍苍，野茫茫",
      "风吹草低见牛羊",
    ],
    form: "民歌",
    tags: ["山水", "经典", "北朝", "山水田园", "豪放雄浑", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "敕勒川在阴山脚下，天空像圆顶的帐篷，笼罩着四面八方",
    translation:
      "Chile River lies under Yin Mountain; the sky like a dome covers the four directions.",
    background: "《敕勒歌》是北朝民歌，描写了北国草原的壮丽景象",
    appreciation:
      "这首诗语言简洁，意境开阔，通过对草原景象的描写，表现了北国草原的壮丽。'风吹草低见牛羊'是千古名句",

    poetIntroduction: "《敕勒歌》是北朝民歌，是中国古代著名的民歌",
  },
  {
    id: "poem-36",
    title: "春江花月夜",
    author: "张若虚",
    dynasty: "唐代",
    content: [
      "春江潮水连海平，海上明月共潮生",
      "滟滟随波千万里，何处春江无月明！",
      "江流宛转绕芳甸，月照花林皆似霰",
      "空里流霜不觉飞，汀上白沙看不见",
      "江天一色无纤尘，皎皎空中孤月轮",
      "江畔何人初见月？江月何年初照人？",
    ],
    form: "七言古诗",
    tags: [
      "山水",
      "经典",
      "张若虚",
      "山水田园",
      "婉约典雅",
      "人生感怀",
      "哲理禅意",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation:
      "春天的江潮浩浩荡荡，与大海连成一片，一轮明月从海上升起，好像与潮水一起涌出来",
    translation:
      "Spring river tide connects to the sea, bright moon rises with the tide.",
    background:
      "《春江花月夜》是张若虚的代表作，创作于隋朝末年。这首诗描写了春江花月夜的壮丽景象",
    appreciation:
      "这首诗语言优美，意境深远，通过对春江花月夜的描写，表现了诗人对人生的感悟。'春江潮水连海平，海上明月共潮生'是千古名句",
    poetIntroduction:
      "张若虚（约660-约720），唐代诗人，《春江花月夜》被誉为'孤篇盖全唐'",
  },
  {
    id: "poem-37",
    title: "野望",
    author: "王绩",
    dynasty: "",
    content: [
      "东皋薄暮望，徙倚欲何依",
      "树树皆秋色，山山唯落晖",
      "牧人驱犊返，猎马带禽归",
      "相顾无相识，长歌怀采薇",
    ],
    form: "五言律诗",
    tags: ["悲凉", "经典", "王绩", "山水田园", "凄婉忧愁", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "傍晚时分站在东皋向远处眺望，徘徊不定不知该归依何方",
    translation:
      "At dusk standing on Donggao looking afar, wandering uncertain where to belong.",
    background:
      "《野望》是王绩的代表作，创作于隋朝。这首诗描写了秋天的景象和诗人的孤独感",
    appreciation:
      "这首诗语言简洁，意境深远，通过对秋景的描写，表达了诗人的孤独感。'树树皆秋色，山山唯落晖'是千古名句",
    poetIntroduction:
      "王绩（585-644），字无功，隋唐时期著名诗人，被称为'五言律诗的奠基人'",
  },
  // 补充缺失的分类诗"  // 辽金
  {
    id: "poem-38",
    title: "题黄华峪",
    author: "元好",
    dynasty: "",
    content: [
      "黄华山水冠中州，我欲题诗到上头",
      "为问西来双燕子，故山春事可如秋？",
    ],
    form: "七言绝句",
    tags: ["山水", "金代", "元好", "山水田园", "闲适旷"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "黄华的山水是中州最好的，我想在山顶题诗",
    translation:
      "Huanghua's mountains and waters are the best in Zhongzhou, I want to inscribe a poem on the top.",
    background:
      "《题黄华峪》是元好问的作品，创作于金代。这首诗描写了黄华峪的山水美景",
    appreciation:
      "这首诗语言简洁，意境优美，通过对黄华峪山水的描写，表达了诗人对自然的热爱",
    poetIntroduction: "元好问（1190-1257），字裕之，号遗山，金代著名文学家",
  },
  // 其他韵文
  {
    id: "poem-39",
    title: "陋室",
    author: "刘禹",
    dynasty: "",
    content: [
      "山不在高，有仙则名。水不在深，有龙则灵",
      "斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青",
      "谈笑有鸿儒，往来无白丁。可以调素琴，阅金经",
      "无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭",
      "孔子云：何陋之有",
    ],
    form: "",
    tags: ["哲理", "刘禹", "经典", "哲理禅意", "闲适旷"],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "山不在于高，有了神仙就会有名气。水不在于深，有了龙就会有灵气",
    translation:
      "A mountain is not high, it becomes famous if there are immortals. Water is not deep, it becomes spiritual if there are dragons.",
    background:
      "《陋室铭》是刘禹锡的代表作，创作于唐代。这篇铭文表达了作者安贫乐道的生活态度",
    appreciation:
      "这篇铭文语言简洁，意境深远，通过对陋室的描写，表达了作者安贫乐道的生活态度和高洁的品格",
    poetIntroduction: "刘禹锡（772-842），字梦得，唐代著名文学家、哲学家",
  },
  // 特殊形式
  {
    id: "poem-40",
    title: "回文",
    author: "苏轼",
    dynasty: "",
    content: [
      "赏花归去马如飞，去马如飞酒力微",
      "酒力微醒时已暮，醒时已暮赏花归",
    ],
    form: "回文",
    tags: ["苏轼", "经典", "幽默", "闲适旷"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "赏花回来的时候马跑得像飞一样，马跑得像飞一样是因为酒力发作",
    translation:
      "Returning from flower viewing, the horse flies like a bird; the horse flies like a bird because of the wine's effect.",
    background: "这是苏轼创作的一首回文诗，正着读和倒着读都通顺",
    appreciation:
      "这首回文诗语言巧妙，构思新颖，通过回文的形式，表现了诗人赏花后的愉悦心情",
    poetIntroduction:
      "苏轼（1037-1101），字子瞻，号东坡居士，北宋著名文学家、书画家",
  },
  // 宫词
  {
    id: "poem-41",
    title: "宫词",
    author: "王建",
    dynasty: "唐代",
    content: [
      "树头树底觅残红，一片西飞一片东",
      "自是桃花贪结子，错教人恨五更风",
    ],
    form: "七言绝句",
    tags: ["宫词", "王建", "经典", "爱情闺怨", "凄婉忧愁"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "在树头树底寻找残留的红花，一片向西飞，一片向东飞",
    translation:
      "Searching for residual red flowers on the tree top and bottom, one piece flies west, one piece flies east.",
    background:
      "《宫词》是王建的代表作之一，创作于唐代。这首诗描写了宫女的孤独和哀怨",
    appreciation:
      "这首诗语言委婉，情感真挚，通过对落花的描写，表达了宫女的孤独和哀怨",
    poetIntroduction: "王建（约767-约830），字仲初，唐代著名诗人",
  },
  // 讽喻劝诫
  {
    id: "poem-42",
    title: "悯农二首·其一",
    author: "李绅",
    dynasty: "唐代",
    content: ["春种一粒粟，秋收万颗子", "四海无闲田，农夫犹饿死"],
    form: "五言绝句",
    tags: ["悯农", "李绅", "经典", "忧国讽喻", "愤懑"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "春天种下一粒粟，秋天收获万颗子",
    translation: "Spring sows a single grain, autumn reaps ten thousand seeds.",
    background:
      "《悯农二首》是李绅的代表作，创作于唐代。这首诗表达了对农民的同情",
    appreciation:
      "这首诗语言简洁，情感真挚，通过对比手法，表达了对农民的同情和对社会不公的不满",
    poetIntroduction: "李绅（772-846），字公垂，唐代著名诗人",
  },
  // 方外题材
  {
    id: "poem-43",
    title: "寻隐者不遇",

    author: "贾岛",
    dynasty: "唐代",
    content: ["松下问童子，言师采药去", "只在此山中，云深不知处"],
    form: "五言绝句",
    tags: ["贾岛", "经典", "方外题材", "闲适旷达"],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "在松树下询问童子，童子说师傅采药去了",
    translation:
      "Asking a boy under a pine tree, he says his master has gone to gather herbs.",
    background:
      "《寻隐者不遇》是贾岛的代表作，创作于唐代。这首诗描写了寻找隐者的过程",
    appreciation:
      "这首诗语言简洁，意境深远，通过问答的形式，表现了隐者的高洁和神秘",
    poetIntroduction: "贾岛（779-843），字浪仙，唐代著名诗人，以苦吟著称",
  },
  // 豪放派（补充）
  {
    id: "poem-44",
    title: "破阵子·为陈同甫赋壮词以寄",
    author: "辛弃疾",
    dynasty: "南宋",
    content: [
      "醉里挑灯看剑，梦回吹角连营",
      "八百里分麾下炙，五十弦翻塞外声",
      "沙场秋点兵",
      "马作的卢飞快，弓如霹雳弦惊",
    ],
    form: "词",
    tags: ["辛弃疾", "经典", "豪放雄浑", "边塞战争", "豪放"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation:
      "醉梦里挑亮油灯观看宝剑，梦中回到了当年的各个营垒，接连响起号角声",
    translation:
      "Drunk, I light the lamp to look at my sword; in my dream, I return to the camp where bugles sound.",
    background:
      "《破阵子·为陈同甫赋壮词以寄之》是辛弃疾的代表作，创作于南宋时期。这首词表达了作者的爱国情怀",
    appreciation:
      "这首词语言豪放，气势磅礴，通过对战场的描写，表达了作者的爱国情怀和杀敌报国的决心",

    poetIntroduction:
      "辛弃疾（1140-1207），字幼安，号稼轩，南宋著名词人，豪放派代表人物",
  },
  // 婉约派（补充）
  {
    id: "poem-45",
    title: "一剪梅·红藕香残玉簟秋",
    author: "李清照",
    dynasty: "南宋",
    content: [
      "红藕香残玉簟秋。轻解罗裳，独上兰舟",
      "云中谁寄锦书来？雁字回时，月满西楼",
      "花自飘零水自流。一种相思，两处闲愁",
    ],
    form: "词",
    tags: ["李清照", "经典", "婉约典雅", "爱情闺怨", "婉约"],
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation:
      "红色的荷花已经凋谢，竹席也已凉了，秋天来了。轻轻解开罗裙，独自登上兰舟",
    translation:
      "Red lotus flowers wither, jade mat turns cool, autumn arrives. Gently undoing my silk dress, I board the orchid boat alone.",

    background:
      "《一剪梅·红藕香残玉簟秋》是李清照的代表作，创作于南宋时期。这首词表达了作者的相思之情",
    appreciation:
      "这首词语言婉约，情感真挚，通过对秋天景象的描写，表达了作者的相思之情",
    poetIntroduction:
      "李清照（1084-1155），号易安居士，南宋著名女词人，婉约派代表人物",
  },
  // 节日（补充）
  {
    id: "poem-46",
    title: "元日",
    author: "王安石",
    dynasty: "北宋",
    content: [
      "爆竹声中一岁除，春风送暖入屠苏",
      "千门万户曈曈日，总把新桃换旧符",
    ],
    form: "七言绝句",
    tags: ["王安石", "经典", "节日时令", "春节", "喜悦"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "在爆竹声中旧的一年过去了，春风把暖气吹进了屠苏酒",

    translation:
      "In the sound of firecrackers, the old year passes; spring breeze brings warmth into the屠苏 wine.",
    background:
      "《元日》是王安石的代表作，创作于北宋时期。这首诗描写了春节的景象",
    appreciation:
      "这首诗语言明快，情感喜悦，通过对春节景象的描写，表达了作者对新年的美好祝愿",
    poetIntroduction:
      "王安石（1021-1086），字介甫，号半山，北宋著名政治家、文学家",
  },
  // 节气
  {
    id: "poem-47",
    title: "清明",
    author: "杜牧",
    dynasty: "唐代",
    content: [
      "清明时节雨纷纷，路上行人欲断魂",
      "借问酒家何处有？牧童遥指杏花村",
    ],
    form: "七言绝句",
    tags: ["杜牧", "经典", "节气", "清明", "凄婉忧愁"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "清明时节细雨纷纷，路上的行人情绪低落",
    translation:
      "During Qingming Festival, rain falls in drizzles; passers-by on the road are heartbroken.",
    background: "《清明》是杜牧的代表作，创作于唐代。这首诗描写了清明节的景象",
    appreciation:
      "这首诗语言简洁，意境深远，通过对清明节景象的描写，表达了诗人的思乡之情",
    poetIntroduction: "杜牧（803-852），字牧之，唐代著名诗人",
  },
  // 季节（补充）
  {
    id: "poem-48",
    title: "秋词二首·其一",
    author: "刘禹锡",
    dynasty: "唐代",
    content: [
      "自古逢秋悲寂寥，我言秋日胜春朝",
      "晴空一鹤排云上，便引诗情到碧霄",
    ],
    form: "七言绝句",
    tags: ["刘禹锡", "经典", "季节", "豪放雄浑"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation:
      "自古以来，人们每逢秋天就会感到悲凉寂寞，我却认为秋天比春天更好",
    translation:
      "Since ancient times, people have felt sad and lonely in autumn; I say autumn is better than spring.",
    background:
      "《秋词二首》是刘禹锡的代表作，创作于唐代。这首诗表达了作者对秋天的喜爱",

    appreciation:
      "这首诗语言豪放，意境开阔，通过对秋天景象的描写，表达了作者对秋天的喜爱和积极向上的人生态度",
    poetIntroduction: "刘禹锡（772-842），字梦得，唐代著名文学家、哲学家",
  },
  // 天气景物（补充）
  {
    id: "poem-49",
    title: "望庐山瀑布",
    author: "李白",
    dynasty: "唐代",
    content: [
      "日照香炉生紫烟，遥看瀑布挂前川",
      "飞流直下三千尺，疑是银河落九天",
    ],
    form: "七言绝句",
    tags: ["李白", "经典", "天气景物", "山水", "豪放雄浑"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation:
      "阳光照射在香炉峰上，产生紫色的烟雾，远远望去，瀑布像一条白练挂在山前",
    translation:
      "Sunlight shines on Incense Burner Peak, creating purple smoke; from afar, the waterfall hangs like a white silk ribbon in front of the mountain.",
    background:
      "《望庐山瀑布》是李白的代表作，创作于唐代。这首诗描写了庐山瀑布的壮丽景象",
    appreciation:
      "这首诗语言豪放，气势磅礴，通过对庐山瀑布的描写，表达了诗人对自然的热爱和赞美",
    poetIntroduction:
      "李白（701-762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人称为'诗仙'",
  },
  // 人生场景（补充）
  {
    id: "poem-50",
    title: "劝学",
    author: "颜真卿",

    dynasty: "唐代",
    content: [
      "三更灯火五更鸡，正是男儿读书时",
      "黑发不知勤学早，白首方悔读书迟",
    ],
    form: "七言绝句",
    tags: ["颜真卿", "经典", "人生场景", "劝学", "哲理禅意"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "三更时分灯火明亮，五更时分公鸡啼叫，这正是男儿读书的好时候",
    translation:
      "At third watch the lamp is bright, at fifth watch the rooster crows; this is the time for young men to study.",
    background: "《劝学》是颜真卿的代表作，创作于唐代。这首诗勉励人们勤奋学习",
    appreciation:
      "这首诗语言简洁，意境深远，通过对读书时间的描写，勉励人们勤奋学习，珍惜时光",
    poetIntroduction: "颜真卿（709-784），字清臣，唐代著名书法家、政治家",
  },
  // 大历十才子代表作
  {
    id: "poem-51",
    title: "归雁",
    author: "钱起",
    dynasty: "唐代",
    content: [
      "潇湘何事等闲回，水碧沙明两岸苔",
      "二十五弦弹夜月，不胜清怨却飞来",
    ],
    form: "七言绝句",
    tags: ["钱起", "经典", "大历十才子", "婉约典雅", "离别怀远"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "潇湘的大雁为什么无事而回？水碧沙明，两岸长满青苔",
    translation:
      "Why do the wild geese of Xiaoxiang return without cause? The water is clear and the sand bright, moss grows on both banks.",
    background:
      "《归雁》是钱起的代表作之一，创作于唐代。钱起是大历十才子之一，这首诗描写了归雁的景象",
    appreciation:
      "这首诗语言清丽，意境深远，通过对归雁的描写，表达了诗人的思乡之情",
    poetIntroduction: "钱起（722-780），字仲文，唐代著名诗人，大历十才子之一",
  },
  // 阳羡词派代表作品
  {
    id: "poem-52",
    title: "点绛唇·夜宿临洺驿",
    author: "陈维崧",
    dynasty: "清代",
    content: [
      "晴髻离离，太行山势如蝤蛴",
      "醉青鞋，曾踏邯郸道上",
      "那是邯郸，旅舍愁如许",
      "",

      "",
    ],
    form: "词",
    tags: ["陈维崧", "经典", "阳羡词派", "豪放雄浑", "豪放"],

    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "晴朗的山峰如发髻般分明，太行山的山势像蝤蛴一样隆起",
    translation:
      "Clear peaks stand apart like hair buns, the Taihang Mountains rise like the grub.",
    background:
      "《点绛唇·夜宿临洺驿》是陈维崧的代表作之一，创作于清代。陈维崧是阳羡词派代表人物",
    appreciation:
      "这首词气势豪放，意境开阔，通过对太行山的描写，表现了阳羡词派的豪放风格",
    poetIntroduction:
      "陈维崧（1625-1682），字其年，号迦陵，清代著名词人，阳羡词派代表人物",
  },
  // 格律派代表作
  {
    id: "poem-53",
    title: "过许州",
    author: "沈德潜",
    dynasty: "清代",
    content: [
      "到处陂塘决决流，垂杨百里罨平畴",
      "行人便觉春光好，一路花声送到头",
    ],
    form: "七言绝句",
    tags: ["沈德潜", "经典", "格调派", "山水田园", "婉约典雅"],

    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "到处都是池塘流水声，垂杨百里掩映着平整的田野",
    translation:
      "Everywhere there is the sound of flowing water in ponds, willow trees stretch for a hundred miles covering the flat fields.",
    background:
      "《过许州》是沈德潜的代表作之一，创作于清代。沈德潜是格律派代表人物",
    appreciation:
      "这首诗语言清丽，格律工整，通过对春景的描写，表现了格律派的严谨风格",
    poetIntroduction:
      "沈德潜（1673-1769），字确士，号归愚，清代著名诗人，格律派代表人物",
  },
  // 江西诗派代表作品
  {
    id: "poem-54",
    title: "登快阁",
    author: "黄庭坚",
    dynasty: "北宋",
    content: [
      "痴儿了却公家事，快阁东西倚晚晴",
      "落木千山天远大，澄江一道月分明",
      "朱弦已为佳人绝，青眼聊因美酒横",
      "万里归船弄长笛，此心吾与白鸥盟",
    ],
    form: "七言律诗",
    tags: ["黄庭坚", "经典", "江西诗派", "豪放雄浑", "人生感怀"],

    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "痴儿办完了公家事，快阁东西倚靠着晚晴",
    translation:
      "The foolish man has finished his official duties, leaning against the evening glow at Kuaige.",
    background:
      "《登快阁》是黄庭坚的代表作之一，创作于宋代。黄庭坚是江西诗派开创者",
    appreciation:
      "这首诗语言奇崛，意境开阔，通过对登阁所见景色的描写，表现了江西诗派的独特风格",
    poetIntroduction:
      "黄庭坚（1045-1105），字鲁直，号山谷道人，北宋著名诗人、书法家，江西诗派开创者",
  },
  // 江湖诗派代表作品
  {
    id: "poem-55",
    title: "扬州慢·淮左名都",
    author: "姜夔",
    dynasty: "南宋",
    content: [
      "淮左名都，竹西佳处，解鞍少驻初程",
      "过春风十里，尽荠麦青青",
      "自胡马窥江去后，废池乔木，犹厌言兵",
      "渐黄昏，清角吹寒，都在空城",
    ],
    form: "词",
    tags: ["姜夔", "经典", "江湖诗派", "凄婉忧愁", "咏史怀古"],

    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "淮左的名都，竹西的美好地方，解下马鞍稍作停留",
    translation:
      "The famous city of Huaizuo, the beautiful place of Zhuxi, unsaddle and rest for a moment.",
    background:
      "《扬州慢·淮左名都》是姜夔的代表作之一，创作于宋代。姜夔是江湖诗派代表人物",
    appreciation:
      "这首词语言清空，意境凄婉，通过对扬州战后景象的描写，表现了江湖诗派的风格",
    poetIntroduction:
      "姜夔（1154-1221），字尧章，号白石道人，南宋著名词人、音乐家，江湖诗派代表人物",
  },
  // 四灵派代表作
  {
    id: "poem-56",
    title: "约客",
    author: "赵师秀",
    dynasty: "南宋",
    content: [
      "黄梅时节家家雨，青草池塘处处蛙",
      "有约不来过夜半，闲敲棋子落灯花",
    ],
    form: "七言绝句",
    tags: ["赵师秀", "经典", "四灵派", "婉约典雅", "闲适旷达"],

    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "黄梅时节家家户户都在下雨，青草池塘处处都有青蛙叫",
    translation:
      "During the plum rain season, every household has rain; in the grassy ponds, frogs croak everywhere.",
    background:
      "《约客》是赵师秀的代表作之一，创作于宋代。赵师秀是四灵派代表人物",
    appreciation:
      "这首诗语言清新，意境恬淡，通过对等待客人的描写，表现了四灵派的清雅风格",
    poetIntroduction:
      "赵师秀（1170-1219），字紫芝，号灵秀，南宋著名诗人，四灵派代表人物",
  },
  // 中兴四大家代表作
  {
    id: "poem-57",
    title: "小池",
    author: "杨万里",
    dynasty: "南宋",
    content: [
      "泉眼无声惜细流，树阴照水爱晴柔",
      "小荷才露尖尖角，早有蜻蜓立上头",
    ],
    form: "七言绝句",
    tags: ["杨万里", "经典", "中兴四大家", "婉约典雅", "山水田园"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "泉眼无声地爱惜细流，树阴照在水面上爱晴光的柔和",
    translation:
      "The spring eye silently cherishes the fine flow; the tree shade reflects on the water, loving the gentle sunshine.",
    background:
      "《小池》是杨万里的代表作之一，创作于宋代。杨万里是中兴四大家之一",
    appreciation:
      "这首诗语言清新，意境优美，通过对小池景色的描写，表现了中兴四大家的活泼风格",
    poetIntroduction:
      "杨万里（1127-1206），字廷秀，号诚斋，南宋著名诗人，中兴四大家之一",
  },
  // 前后七子代表作品
  {
    id: "poem-58",
    title: "杪秋登太华绝顶",
    author: "李攀龙",
    dynasty: "明代",
    content: [
      "苍龙半挂秦川雨，石马长嘶汉苑风",
      "地敞中原秋色尽，天开万里夕阳空",
    ],
    form: "七言绝句",
    tags: ["李攀龙", "经典", "前后七子", "豪放雄浑", "山水田园"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "苍龙半挂在秦川的雨中，石马长嘶在汉苑的风中",
    translation:
      "The green dragon hangs half in the rain of Qinchuan, the stone horse neighs long in the wind of Han Garden.",
    background:
      "《杪秋登太华绝顶》是李攀龙的代表作之一，创作于明代。李攀龙是后七子之一",
    appreciation:
      "这首诗气势雄伟，意境开阔，通过对华山景色的描写，表现了前后七子的复古风格",
    poetIntroduction:
      "李攀龙（1514-1570），字于鳞，号沧溟，明代著名诗人，后七子之一",
  },
  // 公安派代表作
  {
    id: "poem-59",
    title: "小竹枝词",
    author: "袁宏道",
    dynasty: "明代",
    content: [
      "雪里山茶取次红，白头孀妇哭春风",
      "自从虎牙关上哭，不见花枝笑春风",
    ],
    form: "七言绝句",
    tags: ["袁宏道", "经典", "公安派", "婉约典雅", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "雪里的山茶依次开放，白头寡妇在春风中哭泣",
    translation:
      "Camellias in the snow bloom one after another, the white-haired widow weeps in the spring breeze.",
    background:
      "《小竹枝词》是袁宏道的代表作之一，创作于明代。袁宏道是公安派代表人物",
    appreciation:
      "这首诗语言清新，感情真挚，通过对山茶花的描写，表现了公安派的性灵风格",
    poetIntroduction:
      "袁宏道（1568-1610），字中郎，号石公，明代著名文学家，公安派代表人物",
  },
  // 竟陵派代表作
  {
    id: "poem-60",
    title: "宿归宗寺",
    author: "钟惺",
    dynasty: "明代",
    content: [
      "暮色到孤塔，钟声出乱云",
      "僧归松下月，客宿石间云",
      "一室焚香坐，千山落叶闻",
      "此时心不静，何处觅尘氛",
    ],
    form: "五言律诗",
    tags: ["钟惺", "经典", "竟陵派", "婉约典雅", "哲理禅意"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "暮色来到孤塔，钟声从乱云中传出",
    translation:
      "Twilight comes to the lonely pagoda, the bell sound emerges from the chaotic clouds.",
    background:
      "《宿归宗寺》是钟惺的代表作之一，创作于明代。钟惺是竟陵派代表人物",
    appreciation:
      "这首诗语言幽深，意境清远，通过对寺院夜景的描写，表现了竟陵派的深幽风格",
    poetIntroduction:
      "钟惺（1574-1624），字伯敬，号退谷，明代著名文学家，竟陵派代表人物",
  },
  // 性灵派代表作
  {
    id: "poem-61",
    title: "所见",
    author: "袁枚",
    dynasty: "清代",
    content: ["牧童骑黄牛，歌声振林樾", "意欲捕鸣蝉，忽然闭口立"],
    form: "五言绝句",
    tags: ["袁枚", "经典", "性灵派", "婉约典雅", "山水田园"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "牧童骑着黄牛，歌声振动了林木",
    translation:
      "The shepherd boy rides a yellow ox, his singing vibrates through the forest.",
    background: "《所见》是袁枚的代表作之一，创作于清代。袁枚是性灵派代表人物",
    appreciation:
      "这首诗语言生动，意境清新，通过对牧童的描写，表现了性灵派的活泼风格",
    poetIntroduction:
      "袁枚（1716-1797），字子才，号简斋，清代著名诗人、文学家，性灵派代表人物",
  },
  // 肌理派代表作
  {
    id: "poem-62",
    title: "钱塘观潮",
    author: "翁方纲",
    dynasty: "清代",
    content: [
      "八月十八潮，壮观天下无",
      "鲲鹏水击三千里，组练长驱十万夫",
      "红旗青盖互明灭，黑沙白浪相吞屠",
    ],
    form: "七言古诗",
    tags: ["翁方纲", "经典", "肌理派", "豪放雄浑", "山水田园"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "八月十八日的潮水，壮观程度天下无双",
    translation:
      "The tide on August 18th is magnificent, unparalleled under heaven.",
    background:
      "《钱塘观潮》是翁方纲的代表作之一，创作于清代。翁方纲是肌理派代表人物",
    appreciation:
      "这首诗语言严谨，气势磅礴，通过对钱塘潮的描写，表现了肌理派的学问风格",
    poetIntroduction:
      "翁方纲（1733-1818），字正三，号覃溪，清代著名诗人、书法家、金石学家，肌理派代表人物",
  },
  // 浙西词派代表作品
  {
    id: "poem-63",
    title: "桂殿秋·思往事",
    author: "朱彝尊",
    dynasty: "清代",
    content: [
      "思往事，渡江干，青娥低映越山看",
      "共眠一舸听秋雨，小簟轻衾各自寒",
    ],
    form: "词",
    tags: ["朱彝尊", "经典", "浙西词派", "婉约典雅", "爱情闺怨"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "思念往事，渡过江岸，青娥低映着越山观看",
    translation:
      "Thinking of the past, crossing the river, the beautiful woman looks down at the Yue mountains.",
    background:
      "《桂殿秋·思往事》是朱彝尊的代表作之一，创作于清代。朱彝尊是浙西词派代表人物",
    appreciation:
      "这首词语言清丽，感情深婉，通过对往事的回忆，表现了浙西词派的典雅风格",
    poetIntroduction:
      "朱彝尊（1629-1709），字锡鬯，号竹垞，清代著名词人、学者，浙西词派代表人物",
  },
  // 常州词派代表作品
  {
    id: "poem-64",
    title: "水调歌头·春日赋示杨生子掞",
    author: "张惠言",
    dynasty: "清代",
    content: [
      "长镵白木柄，我破南山竹",
      "一夜北风起，万窍怒号呼",
      "谁道春光好，转眼成秋肃",
      "只有梅花在，不怕霜雪酷",
    ],
    form: "词",
    tags: ["张惠言", "经典", "常州词派", "豪放雄浑", "人生感怀"],
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",

    annotation: "长柄白木锄，我破开南山的竹子",
    translation: "With a long white wooden hoe, I break the bamboo of Nanshan.",
    background:
      "《水调歌头·春日赋示杨生子掞》是张惠言的代表作之一，创作于清代。张惠言是常州词派代表人物",
    appreciation:
      "这首词语言刚健，意境深远，通过对春景的描写，表现了常州词派的寄托风格",
    poetIntroduction:
      "张惠言（1761-1802），字皋文，号茗柯，清代著名词人、经学家，常州词派代表人物",
  },
];

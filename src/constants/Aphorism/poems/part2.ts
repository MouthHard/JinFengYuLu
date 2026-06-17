/**
 * 诗词数据集 - 第二部分
 * 包含 poem-36 到 poem-supplement-16
 */

import type { Poem } from "@/typesOfPages/aphorism/poem";

export const poemsPart2: Poem[] = [
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
  // 补充：垂钓闲适题材
  {
    id: "poem-supplement-1",
    title: "江雪",
    author: "柳宗元",
    dynasty: "唐代",
    content: ["千山鸟飞绝，万径人踪灭", "孤舟蓑笠翁，独钓寒江雪"],
    form: "五言绝句",
    tags: ["垂钓", "闲适", "隐居", "山水", "经典", "孤独", "恬淡"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "千山万岭不见飞鸟的踪迹，千路万径不见行人的脚印",
    translation: "Thousands of mountains, no birds in flight; thousands of paths, no human traces.",
    background: "《江雪》是柳宗元的代表作，创作于他被贬永州期间",
    appreciation: "这首诗通过对寒江独钓的描写，表现了诗人在政治上的孤独和顽强",
    poetIntroduction: "柳宗元（773-819），字子厚，唐代著名文学家，唐宋八大家之一",
  },
  // 补充：宫怨题材
  {
    id: "poem-supplement-2",
    title: "长信怨",
    author: "王昌龄",
    dynasty: "唐代",
    content: ["奉帚平明金殿开，暂将团扇共徘徊", "玉颜不及寒鸦色，犹带昭阳日影来"],
    form: "七言绝句",
    tags: ["宫怨", "失宠", "幽禁", "经典", "凄婉", "忧愁"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "天亮时拿着扫帚打扫金殿，暂且拿着团扇徘徊",
    translation: "At dawn, I sweep the golden hall, holding the round fan, hesitating.",
    background: "《长信怨》是王昌龄的代表作，描写宫中失宠嫔妃的哀怨",
    appreciation: "这首诗通过对宫中生活的描写，表现了失宠嫔妃的哀怨之情",
    poetIntroduction: "王昌龄（698-756），字少伯，唐代著名诗人，有'七绝圣手'之称",
  },
  // 补充：清旷派
  {
    id: "poem-supplement-3",
    title: "临江仙·滚滚长江东逝水",
    author: "杨慎",
    dynasty: "明代",
    content: ["滚滚长江东逝水，浪花淘尽英雄", "是非成败转头空", "青山依旧在，几度夕阳红"],
    form: "词",
    tags: ["清旷", "闲适旷达", "冲淡", "咏史", "经典", "豪放"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "滚滚长江向东流逝，浪花淘尽了英雄",
    translation: "The rolling Yangtze flows east, waves washing away all heroes.",
    background: "《临江仙》是杨慎的代表作，表现了清旷派的风格",
    appreciation: "这首词语言清旷，意境开阔，表现了超然物外的人生态度",
    poetIntroduction: "杨慎（1488-1559），字用修，号升庵，明代著名文学家",
  },
  // 补充：格律派
  {
    id: "poem-supplement-4",
    title: "登金陵凤凰台",
    author: "李白",
    dynasty: "唐代",
    content: [
      "凤凰台上凤凰游，凤去台空江自流",
      "吴宫花草埋幽径，晋代衣冠成古丘",
      "三山半落青天外，二水中分白鹭洲",
      "总为浮云能蔽日，长安不见使人愁",
    ],
    form: "七言律诗",
    tags: ["格律派", "咏史", "怀古", "经典", "豪放", "忧国"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "凤凰台上曾经有凤凰来游，凤凰离去后楼台空寂，江水独自流淌",
    translation: "Phoenix once visited the Phoenix Terrace; now the terrace is empty, the river flows alone.",
    background: "《登金陵凤凰台》是李白的代表作，严格遵守格律",
    appreciation: "这首诗格律工整，意境深远，是格律派的代表作",
    poetIntroduction: "李白（701-762），字太白，号青莲居士，唐代伟大的浪漫主义诗人",
  },
  // 补充：江西诗派
  {
    id: "poem-supplement-5",
    title: "登快阁",
    author: "黄庭坚",
    dynasty: "北宋",
    content: ["痴儿了却公家事，快阁东西倚晚晴", "落木千山天远大，澄江一道月分明"],
    form: "七言律诗",
    tags: ["江西诗派", "山水", "闲适", "经典", "旷达"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "我这个痴儿办完了公事，在快阁上倚栏观赏晚晴",
    translation: "I, the foolish one, have finished official duties, leaning on the railing of Kuai Pavilion to watch the evening clear sky.",
    background: "《登快阁》是黄庭坚的代表作，江西诗派的典型作品",
    appreciation: "这首诗语言瘦硬，意境清远，体现了江西诗派的风格",
    poetIntroduction: "黄庭坚（1045-1105），字鲁直，号山谷道人，北宋著名诗人，江西诗派开创者",
  },
  // 补充：启蒙读物用途
  {
    id: "poem-supplement-6",
    title: "三字经（节选）",
    author: "王应麟",
    dynasty: "南宋",
    content: ["人之初，性本善", "性相近，习相远", "苟不教，性乃迁", "教之道，贵以专"],
    form: "三言",
    tags: ["启蒙", "劝学", "修身", "哲理", "经典", "教育"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "人出生之初，本性都是善良的",
    translation: "At the beginning of life, human nature is inherently good.",
    background: "《三字经》是中国传统启蒙教材，影响深远",
    appreciation: "这部作品语言简洁，内容丰富，是启蒙教育的经典",
    poetIntroduction: "王应麟（1223-1296），字伯厚，南宋著名学者",
  },
  // 补充：科举应试用途
  {
    id: "poem-supplement-7",
    title: "及第谣",
    author: "孟郊",
    dynasty: "唐代",
    content: ["昔日龌龊不足夸，今朝放荡思无涯", "春风得意马蹄疾，一日看尽长安花"],
    form: "七言绝句",
    tags: ["励志", "壮志", "抒怀", "喜悦", "经典", "科举"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "往日的困顿不值得夸耀，今天我神思飞扬，畅快无边",
    translation: "Past hardships are not worth mentioning; today my thoughts soar without limit.",
    background: "《及第谣》是孟郊进士及第后所作，表现了金榜题名的喜悦",
    appreciation: "这首诗语言豪放，情感真挚，表现了科举及第的狂喜",
    poetIntroduction: "孟郊（751-814），字东野，唐代著名诗人",
  },
  // 补充：哀悼用途
  {
    id: "poem-supplement-8",
    title: "江城子·乙卯正月二十日夜记梦",
    author: "苏轼",
    dynasty: "北宋",
    content: [
      "十年生死两茫茫，不思量，自难忘",
      "千里孤坟，无处话凄凉",
      "纵使相逢应不识，尘满面，鬓如霜",
    ],
    form: "词",
    tags: ["哀悼", "思念", "悲伤", "经典", "凄婉", "婉约"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "十年了，生死两隔，彼此都茫然不知",
    translation: "Ten years have passed since we were separated by life and death.",
    background: "《江城子》是苏轼悼念亡妻王弗的词作",
    appreciation: "这首词语言凄婉，情感真挚，是悼亡词的代表作",
    poetIntroduction: "苏轼（1037-1101），字子瞻，号东坡居士，北宋著名文学家",
  },
  // 补充：羁旅题材
  {
    id: "poem-supplement-9",
    title: "旅夜书怀",
    author: "杜甫",
    dynasty: "唐代",
    content: [
      "细草微风岸，危樯独夜舟",
      "星垂平野阔，月涌大江流",
      "名岂文章著，官应老病休",
      "飘飘何所似，天地一沙鸥",
    ],
    form: "五言律诗",
    tags: ["羁旅", "漂泊", "行役", "游子", "经典", "孤独", "忧愁"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "微风吹拂着岸边的细草，夜色中孤舟高耸着桅杆",
    translation: "Fine grass on the shore, gentle breeze; a lonely boat at night with high mast.",
    background: "《旅夜书怀》是杜甫漂泊途中所作，表现了羁旅之思",
    appreciation: "这首诗意境开阔，情感深沉，表现了诗人的羁旅之苦",
    poetIntroduction: "杜甫（712-770），字子美，号少陵野老，唐代伟大的现实主义诗人",
  },
  // 补充：愤怒情感
  {
    id: "poem-supplement-10",
    title: "书愤",
    author: "陆游",
    dynasty: "南宋",
    content: [
      "早岁那知世事艰，中原北望气如山",
      "楼船夜雪瓜洲渡，铁马秋风大散关",
      "塞上长城空自许，镜中衰鬓已先斑",
      "出师一表真名世，千载谁堪伯仲间",
    ],
    form: "七言律诗",
    tags: ["愤懑", "愤慨", "忧国", "经典", "豪放", "悲壮", "励志"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "年轻时哪里知道世事的艰难，北望中原，豪气如山",
    translation: "In my youth, I knew not the hardships of the world; looking north to the Central Plains, my spirit was like a mountain.",
    background: "《书愤》是陆游的代表作，表现了对国土沦丧的愤慨",
    appreciation: "这首诗语言悲壮，情感愤懑，表现了诗人的爱国情怀",
    poetIntroduction: "陆游（1125-1210），字务观，号放翁，南宋著名爱国诗人",
  },
  // 补充：惆怅情感
  {
    id: "poem-supplement-11",
    title: "锦瑟",
    author: "李商隐",
    dynasty: "唐代",
    content: [
      "锦瑟无端五十弦，一弦一柱思华年",
      "庄生晓梦迷蝴蝶，望帝春心托杜鹃",
      "沧海月明珠有泪，蓝田日暖玉生烟",
      "此情可待成追忆，只是当时已惘然",
    ],
    form: "七言律诗",
    tags: ["惆怅", "伤感", "经典", "婉约", "典雅", "人生"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "锦瑟无缘无故有五十根弦，每一根弦都让人想起逝去的年华",
    translation: "The brocade zither has fifty strings for no reason; each string reminds me of the years gone by.",
    background: "《锦瑟》是李商隐的代表作，意境朦胧，情感惆怅",
    appreciation: "这首诗语言典雅，意境朦胧，表现了对往昔的惆怅",
    poetIntroduction: "李商隐（约813-约858），字义山，号玉溪生，唐代著名诗人",
  },
  // 补充：田园派
  {
    id: "poem-supplement-12",
    title: "归园田居·其三",
    author: "陶渊明",
    dynasty: "东晋",
    content: [
      "种豆南山下，草盛豆苗稀",
      "晨兴理荒秽，带月荷锄归",
      "道狭草木长，夕露沾我衣",
      "衣沾不足惜，但使愿无违",
    ],
    form: "五言古诗",
    tags: ["田园派", "田园", "隐居", "闲适", "经典", "冲淡"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "我在南山下种豆，野草茂盛，豆苗稀疏",
    translation: "I plant beans under the southern mountain; weeds are lush, bean seedlings sparse.",
    background: "《归园田居》是陶渊明的代表作，田园诗派的典型作品",
    appreciation: "这首诗语言质朴，意境恬淡，表现了对田园生活的热爱",
    poetIntroduction: "陶渊明（365-427），字元亮，号五柳先生，东晋著名诗人，田园诗派创始人",
  },
  // 补充：边塞诗派
  {
    id: "poem-supplement-13",
    title: "从军行·其四",
    author: "王昌龄",
    dynasty: "唐代",
    content: ["青海长云暗雪山，孤城遥望玉门关", "黄沙百战穿金甲，不破楼兰终不还"],
    form: "七言绝句",
    tags: ["边塞诗派", "边塞", "战争", "经典", "豪放", "悲壮", "励志"],
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    annotation: "青海湖上的长云遮暗了雪山，遥望孤城玉门关",
    translation: "Long clouds over Qinghai Lake darken the snow mountains; looking far to the lonely city of Yumen Pass.",
    background: "《从军行》是王昌龄的代表作，边塞诗派的典型作品",
    appreciation: "这首诗气势雄浑，意境悲壮，表现了将士的豪情壮志",
    poetIntroduction: "王昌龄（698-756），字少伯，唐代著名诗人，边塞诗派代表人物",
  },
  // 补充：应制用途
  {
    id: "poem-supplement-14",
    title: "奉和圣制从蓬莱向兴庆阁道中",
    author: "王维",
    dynasty: "唐代",
    content: [
      "渭水自萦秦塞曲，黄山旧绕汉宫斜",
      "銮舆迥出千门柳，阁道回看上苑花",
      "云里帝城双凤阙，雨中春树万人家",
      "为乘阳气行时令，不是宸游玩物华",
    ],
    form: "七言律诗",
    tags: ["应制", "酬唱", "宴饮", "经典", "典雅", "山水"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "渭水自绕着秦塞弯曲，黄山旧时环绕着汉宫倾斜",
    translation: "The Wei River winds around the Qin fortress; Mount Huang historically surrounded the Han palace.",
    background: "这是王维奉和唐玄宗的应制诗",
    appreciation: "这首诗语言典雅，意境宏大，是应制诗的佳作",
    poetIntroduction: "王维（701-761），字摩诘，唐代著名诗人、画家",
  },
  // 补充：民歌用途
  {
    id: "poem-supplement-15",
    title: "敕勒歌",
    author: "佚名",
    dynasty: "南北朝",
    content: ["敕勒川，阴山下", "天似穹庐，笼盖四野", "天苍苍，野茫茫", "风吹草低见牛羊"],
    form: "民歌",
    tags: ["民歌", "民谣", "叙事", "经典", "山水", "边塞"],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    annotation: "敕勒川位于阴山脚下，天空像圆顶毡帐，笼罩着四面原野",
    translation: "Chile River lies at the foot of Mount Yin; the sky is like a yurt, covering the vast wilderness.",
    background: "《敕勒歌》是北朝民歌的代表作",
    appreciation: "这首民歌语言质朴，意境开阔，表现了草原的壮美",
    poetIntroduction: "佚名，北朝民歌作者",
  },
  // 补充：仰慕情感
  {
    id: "poem-supplement-16",
    title: "蜀相",
    author: "杜甫",
    dynasty: "唐代",
    content: [
      "丞相祠堂何处寻，锦官城外柏森森",
      "映阶碧草自春色，隔叶黄鹂空好音",
      "三顾频烦天下计，两朝开济老臣心",
      "出师未捷身先死，长使英雄泪满襟",
    ],
    form: "七言律诗",
    tags: ["仰慕", "赞美", "敬仰", "咏史", "经典", "忧愁", "豪放"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    annotation: "丞相的祠堂在哪里寻找？在锦官城外柏树茂密的地方",
    translation: "Where to find the Prime Minister's shrine? Outside Jinguan City, where cypress trees grow dense.",
    background: "《蜀相》是杜甫凭吊诸葛亮的诗作",
    appreciation: "这首诗语言沉郁，情感真挚，表现了对诸葛亮的仰慕",
    poetIntroduction: "杜甫（712-770），字子美，号少陵野老，唐代伟大的现实主义诗人",
  },
];

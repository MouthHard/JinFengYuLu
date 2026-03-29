// 音乐路由接口
export interface MusicRoute {
  routeId: string;
  routeName: string;
  pageName: string;
  pathD?: string;
  listImg?: string;
}

// 歌曲列表项接口
export interface SongListItem {
  id?: number;
  playNum: string;
  playName: string;
  songArr: string[];
  bgColor?: string;
  src?: string;
}

// 排行榜项接口
export interface RankingItem {
  id?: number;
  rankUpdate: string;
  rankName: string;
  songArr: string[];
  src?: string;
  bg?: string;
}

// 部分项接口
export interface PartItem {
  title: string;
  partId: number;
  fifthArr: FifthArrItem[];
}

// 第五数组项接口
export interface FifthArrItem {
  id: number;
  h4Text: string;
  h5Text: string;
  h6Text: string;
  h6OtherText: string;
  imgSrc: string;
}

// 场景项接口
export interface SceneItem {
  h5Text: string;
  src?: string;
  id?: number;
}

// 推荐歌曲列表项接口
export interface RecSongListItem {
  text: string;
  src?: string;
  id?: number;
}

// 评论项接口
export interface CommentItem {
  id: number;
  userName: string;
  headIcon: string;
  comTime: string;
  text: string;
  imgSrc: string;
  songImg: string;
  songName: string;
  singer: string;
  goodNum: string;
  shareNum: string;
  comNum: string;
  h5Show: boolean;
  imgShow: boolean;
  songShow: boolean;
}

// 播放列表项接口
export interface PlaylistItem {
  id: number;
  routeId: string;
  routeName: string;
  pageName: string;
  listImg?: string;
}

// 歌曲项接口
export interface SongItem {
  id: number;
  subImgsrc: string;
  songName: string;
  tagArr: string[];
  singer: string;
  album: string;
  time: string;
  flag: boolean;
}

// 收藏者项接口
export interface CollectorItem {
  id: number;
  imgSrc: string;
  userName: string;
  sign: string;
  showVIP: boolean;
  showCreator: boolean;
}

// 播客部分项接口
export interface BokeSectionItem {
  partId: number;
  title: string;
  fifthArr: BokeFifthArrItem[];
}

export interface BokeFifthArrItem {
  id: number;
  imgSrc: string;
  h4Text: string;
  h5Text: string;
  h6Text: string;
  h6OtherText: string;
}

// 播客第二行项接口
export interface BokeSecondLineItem {
  idB: number;
  h3Text: string;
  idBArr: BokeIdBArrItem[];
}

export interface BokeIdBArrItem {
  id: number;
  playNum: string;
  playName: string;
  bg: string;
  bgColor: string;
}

// FM 项接口
export interface FmItem {
  id: number;
  text: string;
  bgcolor: string;
  imgSrc: string;
  title: string;
  list: string;
  num: string;
}

// 播客列表标签项接口
export interface BokeListTagItem {
  id: number;
  text: string;
  bg: string;
  content: BokeContentItem[];
}

export interface BokeContentItem {
  listId: number;
  imgSrcList: string;
  h6Text: string;
  h6Color: string;
}

// 精选路由项接口
export interface ChoicenessRouteItem {
  routeId: string;
  routeName: string;
  pageName: string;
}

// 广场内容项接口
export interface PlazaContentItem {
  subId?: number;
  playNum: string;
  playName: string;
  songArr: string[];
  bgColor: string;
  imgSrc?: string;
}

// 广场标签项接口
export interface PlazaTagItem {
  id?: number;
  text: string;
  prefix: string;
  content: PlazaContentItem[];
}

// 广场子标签项接口
export interface PlazaSubTagItem {
  id: number;
  text: string;
  arr: string[];
}

// VIP 轮播图项接口
export interface VipCarouselItem {
  idx: number;
  src: string;
}

// VIP 歌单推荐项接口
export interface VipSongListItem {
  id: number;
  playNum: string;
  playName: string;
  songArr: string[];
  bg: string;
  bgColor: string;
}

// VIP 数字专辑项接口
export interface VipAlbumItem {
  id: number;
  imgSrc: string;
  albumName: string;
  albumPerson: string;
}

// VIP 有声书项接口
export interface VipAudioBookItem {
  id: number;
  imgSrc: string;
  h4Text: string;
  h5Text: string;
  h6Text: string[];
  playnum: string;
  count: string;
}

// VIP 排行榜歌曲项接口
export interface VipRankSongItem {
  rankId: number;
  imgSrc: string;
  h4Text: string;
  h5Text: string;
  h6Text: string[];
  ranking: string;
}

// VIP 排行榜项接口
export interface VipRankItem {
  rankName: string;
  rankArr: VipRankSongItem[];
}

// VIP 每日推荐项接口
export interface VipDailyItem {
  id: number;
  imgSrc: string;
  h4Text: string;
  h5Text: string;
  h6Text: string[];
}

// 歌单评论项接口
export interface SongListCommentItem {
  id: number;
  userHead: string;
  userName: string;
  comment: string;
  VIP: number;
  showReply: boolean;
  reply: string;
  otherUser: string;
  goodNum: string;
}

// 排序标签项接口
export interface SortLabelItem {
  id: number;
  arr: string[];
}

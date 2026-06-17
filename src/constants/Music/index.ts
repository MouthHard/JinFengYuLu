/**
 * Music 模块常量
 * 包含：播放模式映射、标签颜色映射等静态配置
 */

/** 播放模式映射（value → label + icon） */
export const playModeMap: Record<string, { label: string; icon: string }> = {
  sequence: { label: "顺序播放", icon: "sequence" },
  loop: { label: "列表循环", icon: "loop" },
  random: { label: "随机播放", icon: "random" },
  single: { label: "单曲循环", icon: "single" },
};

/** 歌曲标签颜色映射 */
export const tagColorMap: Record<string, string> = {
  华语: "#ff6b6b",
  流行: "#4ecdc4",
  摇滚: "#f7b731",
  民谣: "#a29bfe",
  电子: "#00d2d3",
  说唱: "#ff9ff3",
  轻音乐: "#54a0ff",
  古典: "#c8d6e5",
  日语: "#ff9f43",
  韩语: "#ee5a24",
  欧美: "#0abde3",
  "R&B": "#10ac84",
};

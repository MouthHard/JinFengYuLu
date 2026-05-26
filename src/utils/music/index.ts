// 音乐相关工具函数和静态映射

// 播放模式映射
export const playModeMap: Record<string, { label: string; icon: string }> = {
  sequence: { label: "顺序播放", icon: "sequence" },
  loop: { label: "列表循环", icon: "loop" },
  random: { label: "随机播放", icon: "random" },
  single: { label: "单曲循环", icon: "single" },
};

// 歌曲标签映射
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

// 格式化歌曲时长（秒 -> mm:ss）
export const formatDuration = (seconds: number): string => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

// 格式化播放次数
export const formatPlayCount = (count: number): string => {
  if (count >= 100000000) {
    return (count / 100000000).toFixed(1) + "亿";
  } else if (count >= 10000) {
    return (count / 10000).toFixed(1) + "万";
  }
  return count.toString();
};

// 根据播放模式获取下一首歌曲索引
export const getNextIndex = (
  currentIndex: number,
  total: number,
  mode: string
): number => {
  switch (mode) {
    case "single":
      return currentIndex;
    case "random":
      if (total <= 1) return 0;
      let next = currentIndex;
      while (next === currentIndex) {
        next = Math.floor(Math.random() * total);
      }
      return next;
    case "loop":
      return (currentIndex + 1) % total;
    case "sequence":
    default:
      return currentIndex + 1 >= total ? -1 : currentIndex + 1;
  }
};

// 根据播放模式获取上一首歌曲索引
export const getPrevIndex = (
  currentIndex: number,
  total: number,
  mode: string
): number => {
  switch (mode) {
    case "random":
      if (total <= 1) return 0;
      let prev = currentIndex;
      while (prev === currentIndex) {
        prev = Math.floor(Math.random() * total);
      }
      return prev;
    case "loop":
    case "single":
    case "sequence":
    default:
      return currentIndex <= 0 ? total - 1 : currentIndex - 1;
  }
};

// 解析歌词文本为 LyricLine 数组
export const parseLyric = (lyricText: string): { time: number; text: string }[] => {
  const lines = lyricText.split("\n");
  const result: { time: number; text: string }[] = [];
  const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

  for (const line of lines) {
    const match = line.match(timeRegex);
    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseInt(match[2]);
      const milliseconds = parseInt(match[3]);
      const time = minutes * 60 + seconds + milliseconds / 1000;
      const text = line.replace(timeRegex, "").trim();
      if (text) {
        result.push({ time, text });
      }
    }
  }

  return result.sort((a, b) => a.time - b.time);
};

// 根据当前时间获取歌词索引
export const getCurrentLyricIndex = (
  lyrics: { time: number; text: string }[],
  currentTime: number
): number => {
  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (currentTime >= lyrics[i].time) {
      return i;
    }
  }
  return 0;
};

// 搜索歌曲（本地模拟）
export const searchSongs = (
  songs: { id: number; name: string; artists: { name: string }[] }[],
  keyword: string
) => {
  const lowerKeyword = keyword.toLowerCase();
  return songs.filter(
    (song) =>
      song.name.toLowerCase().includes(lowerKeyword) ||
      song.artists.some((a) => a.name.toLowerCase().includes(lowerKeyword))
  );
};

// 获取标签颜色
export const getTagColor = (tag: string): string => {
  return tagColorMap[tag] || "#666";
};

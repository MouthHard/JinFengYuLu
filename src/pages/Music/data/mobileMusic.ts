export interface MobileSong {
  songId: number;
  songName: string;
  author: string;
  time: string;
  songSrc: string;
  flag: boolean;
  imgSrc: string;
  lyric: string;
}

export const MOBILE_SONG_ARR: MobileSong[] = [
  {
    songId: 0,
    songName: "Grace and Glory",
    author: "Johan Soderqvist/ Patrik Andrén",
    time: "02:45",
    songSrc: "http://music.163.com/song/media/outer/url?id=512377393.mp3",
    flag: true,
    imgSrc:
      "http://p2.music.126.net/crG3Zkll1EOon9xMlZGfFg==/109951163043166406.jpg?param=130y130",
    lyric: `[00:04.35]Идем вперед на врага 我们向着敌人前进，[00:11.99]Пускай не дрогнет рука 任凭如何也绝不停息！[00:18.99]Родную землю свою 我们齐心协力，[00:27.03]Защитим плечом к плечу 保卫我们的祖国！[00:34.10]Перед бедой устоим 我们将挺立在这不幸的灾难前，[00:41.99]Мы устоим до конца 我们将战至最后一刻！[00:49.10]Мы защитим от врага землю нашу 我们将誓死守护自己的家园！[01:40.00]Перед бедой устоим 我们将挺立在这不幸的灾难前，[01:49.98]Мы устоим до конца 我们将战至最后一刻！[01:57.02]Мы защитим от врага землю нашу 我们将誓死守护自己的家园！`,
  },
  {
    songId: 1,
    songName: "Empowering Yourself (feat. London Contemporary Orchestra)",
    author: "Olivier Deriviere/London Contemporary Orchestra",
    time: "03:24",
    flag: true,
    songSrc: "http://music.163.com/song/media/outer/url?id=1918693740.mp3",
    imgSrc:
      "http://p2.music.126.net/iaZdqlqv0ET9TS-2x64WSA==/109951167029358745.jpg?param=130y130",
    lyric: "纯音乐请聆听",
  },
  {
    songId: 2,
    songName: "Every Time We Touch",
    author: "Dream Tunes",
    time: "03:07",
    flag: true,
    songSrc: "http://music.163.com/song/media/outer/url?id=1966889776.mp3",
    imgSrc:
      "http://p1.music.126.net/cqhNn3Kvn-Gq-pppKWXA2w==/109951167713893315.jpg?param=130y130",
    lyric: `[00:00.000] 作曲 : Cascada [00:11.640]I still hear your voice when you sleep next to me[00:20.480]I still feel your touch in my dreams[00:29.910]Forgive me my weakness[00:34.530]But I don't know why[00:39.370]Without you it's hard to survive[00:48.410]Cause everytime we touch[00:50.260]I get this feeling[00:52.840]And every time we kiss[00:54.940]I swear I can fly[00:58.050]Can't you feel my heart beat fast?[01:01.440]I want this to last[01:03.990]Need you by my side[01:07.360]'Cause everytime we touch[01:09.400]I feel like static[01:12.180]and everytime we kiss[01:14.270]I reach for the sky[01:17.270]Can't you hear my heart beat so?[01:20.520]I can't let you go[01:23.300]Want you in my life[01:27.460]Your arms are my castle[01:32.220]Your heart is my sky[01:37.070]They wipe away tears that I cry[01:46.790]The good and the bad times[01:51.420]We've been through them all[01:56.170]You make me rise when I fall[02:05.220]'Cause everytime we touch[02:07.180]I get this feeling[02:09.670]And everytime we kiss[02:11.830]I swear I can fly[02:14.790]Can't you feel my heart beat fast?[02:18.200]I want this to last[02:20.900]Need you by my side[02:24.160]'Cause everytime we touch[02:26.250]I feel like static[02:28.930]And everytime we kiss[02:31.020]I reach for the sky[02:34.060]Can't you hear my heart beat so?
				[02:37.460]I can't let you go[02:40.050]Want you in my life`,
  },
];

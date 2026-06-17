<template>
  <div class="profile-page">
    <ProfileHeader :user-data="userData" :cover-gradient="coverGradient" @edit="handleEdit" />

    <ProfileStatsBanner :stats="stats" />

    <ProfileTabs :tabs="tabs" :active-tab="activeTab" @tab-change="handleTabChange" />

    <div class="tab-content">
      <ProfilePlaylists v-if="activeTab === 'playlists'" :default-playlists="defaultPlaylists"
        :created-playlists="createdPlaylists" :collected-playlists="collectedPlaylists" @play="handlePlayPlaylist"
        @create="handleCreatePlaylist" />

      <ProfileStats v-if="activeTab === 'stats'" :total-listened="totalListened" :listening-hours="listeningHours"
        :level="level" :consecutive-days="365" :weekly-data="weeklyData" :top-artists="topArtists"
        :genre-stats="genreStats" />

      <ProfileAchievements v-if="activeTab === 'achievements'" :achievements="achievements" />

      <ProfileFollowing v-if="activeTab === 'following'" :following-list="followingList" @unfollow="handleUnfollow" />
    </div>

    <EditModal :visible="showEditModal" :user-data="editForm" @close="handleCloseModal" @save="handleSaveProfile" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import ProfileHeader from './components/ProfileHeader/index.vue';
import ProfileStatsBanner from './components/ProfileStatsBanner/index.vue';
import ProfileTabs from './components/ProfileTabs/index.vue';
import ProfilePlaylists from './components/ProfilePlaylists/index.vue';
import ProfileStats from './components/ProfileStats/index.vue';
import ProfileAchievements from './components/ProfileAchievements/index.vue';
import ProfileFollowing from './components/ProfileFollowing/index.vue';
import EditModal from './components/EditModal/index.vue';
import type { DefaultPlaylist, CreatedPlaylist, CollectedPlaylist } from './components/ProfilePlaylists/index.vue';
import FolderIcon from '../icons/MyMusic/common/FolderIcon.vue';
import ChartIcon from '../icons/common/ChartIcon.vue';
import MedalIcon from '../icons/common/MedalIcon.vue';
import UsersIcon from '../icons/common/UsersIcon.vue';
import HeartFilledIcon from '../icons/Profile/common/HeartFilledIcon.vue';
import PlayPauseIcon from '../icons/common/PlayPauseIcon.vue';
import StarIcon from '../icons/PlayerBar/StarIcon.vue';
import MusicNoteIcon from '../icons/Profile/common/MusicNoteIcon.vue';
import FireIcon from '../icons/common/FireIcon.vue';
import MoonIcon from '../icons/common/MoonIcon.vue';
import FlexIcon from '../icons/common/FlexIcon.vue';
import TargetIcon from '../icons/common/TargetIcon.vue';
import MicIcon from '../icons/common/MicIcon.vue';
import CrownIcon from '../icons/common/CrownIcon.vue';
import GlobeIcon from '../icons/common/GlobeIcon.vue';
import HeadphonesIcon from '../icons/common/HeadphonesIcon.vue';

interface FollowingArtist {
  id: number;
  name: string;
  fans: number;
  avatar?: string;
  isVerified?: boolean;
  recentSong?: string;
}

const showEditModal = ref(false);
const activeTab = ref('playlists');

const coverGradient = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #1a1a2e 100%)';

const userData = reactive({
  nickname: '音乐爱好者',
  userId: '88888888',
  bio: '热爱音乐，享受生活。在这里分享我的音乐故事，发现更多好听的歌曲。',
  location: '中国 · 深圳',
  joinDate: '2020年1月加入',
});

const editForm = reactive({
  nickname: '',
  bio: '',
  location: '',
});

const stats = [
  { value: '1,280', label: '粉丝', gradient: 'purple' },
  { value: '365', label: '关注', gradient: 'pink' },
  { value: '12.5k', label: '听歌', gradient: 'blue' },
  { value: '12', label: '歌单', gradient: 'green' },
  { value: '128', label: '喜欢', gradient: 'gold' },
];

const tabs = [
  { key: 'playlists', icon: FolderIcon, label: '我的歌单', count: 12 },
  { key: 'stats', icon: ChartIcon, label: '听歌统计' },
  { key: 'achievements', icon: MedalIcon, label: '音乐成就' },
  { key: 'following', icon: UsersIcon, label: '我的关注', count: 15 },
];

const defaultPlaylists = [
  {
    key: 'liked',
    icon: HeartFilledIcon,
    name: '我喜欢的音乐',
    count: '128 首',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    desc: '收藏你喜爱的歌曲，随时回味',
    songs: ['晴天', '夜曲', '稻香'],
  },
  {
    key: 'recent',
    icon: PlayPauseIcon,
    name: '最近播放',
    count: '最近听过',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    desc: '记录你最近听过的音乐',
    songs: ['最伟大的作品', '爱你', '孤勇者'],
  },
  {
    key: 'collections',
    icon: StarIcon,
    name: '我的收藏',
    count: '32 个',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    desc: '收藏的歌曲、歌单和专辑',
    songs: ['七里香', '江南', '浮夸'],
  },
  {
    key: 'local',
    icon: FolderIcon,
    name: '本地音乐',
    count: '86 首',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    desc: '存储在设备上的音乐文件',
    songs: ['晴天', '夜曲', '告白气球'],
  },
] as unknown as DefaultPlaylist[];

const createdPlaylists = [
  {
    id: 1,
    name: '深夜治愈',
    tracks: 52,
    playCount: '1.2万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    type: '私人',
    description: '适合深夜聆听的治愈系音乐',
  },
  {
    id: 2,
    name: '运动燃曲',
    tracks: 38,
    playCount: '8650',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    type: '私人',
    description: '运动时听的热血燃曲',
  },
  {
    id: 3,
    name: '经典老歌',
    tracks: 86,
    playCount: '3.5万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    description: '陪伴成长的经典老歌',
  },
  {
    id: 4,
    name: '学习专注',
    tracks: 45,
    playCount: '5200',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    type: '私人',
    description: '帮助学习专注的白噪音和轻音乐',
  },
  {
    id: 5,
    name: '怀旧金曲',
    tracks: 63,
    playCount: '2.1万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    description: '90年代经典金曲合集',
  },
  {
    id: 6,
    name: '周末派对',
    tracks: 72,
    playCount: '1.8万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    description: '周末派对必备热曲',
  },
];

const collectedPlaylists = [
  {
    id: 101,
    name: '华语经典500首',
    tracks: 500,
    playCount: '560万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    owner: '网易云音乐',
    description: '精选华语乐坛经典之作',
  },
  {
    id: 102,
    name: '欧美流行Top100',
    tracks: 100,
    playCount: '420万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    owner: 'QQ音乐',
    description: 'Billboard热门金曲精选',
  },
  {
    id: 103,
    name: '治愈系纯音乐',
    tracks: 80,
    playCount: '280万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    owner: '虾米音乐',
    description: '放松身心的纯音乐合集',
  },
  {
    id: 104,
    name: '电影原声大碟',
    tracks: 120,
    playCount: '150万',
    cover: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    owner: '豆瓣音乐',
    description: '经典电影原声配乐',
  },
];

const totalListened = '3,842';
const listeningHours = '268';
const level = 'Lv.12';

const weeklyData = [
  { label: '周一', shortLabel: '一', count: 45, songs: ['晴天', '夜曲'] },
  { label: '周二', shortLabel: '二', count: 62, songs: ['最伟大的作品', '爱你'] },
  { label: '周三', shortLabel: '三', count: 38, songs: ['孤勇者', '起风了'] },
  { label: '周四', shortLabel: '四', count: 75, songs: ['稻香', '七里香'] },
  { label: '周五', shortLabel: '五', count: 90, songs: ['江南', '不为谁而作的歌'] },
  { label: '周六', shortLabel: '六', count: 85, songs: ['浮夸', 'K歌之王'] },
  { label: '周日', shortLabel: '日', count: 68, songs: ['Love Story', 'Shake It Off'] },
];

const topArtists = [
  {
    name: '周杰伦',
    count: 156,
    fans: '6800万',
    likes: '12亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    genre: '华语流行',
  },
  {
    name: '林俊杰',
    count: 89,
    fans: '5200万',
    likes: '9.8亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
    genre: '华语流行',
  },
  {
    name: '陈奕迅',
    count: 67,
    fans: '4500万',
    likes: '8.2亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    color: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
    genre: '粤语流行',
  },
  {
    name: 'Taylor Swift',
    count: 54,
    fans: '1.2亿',
    likes: '25亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    color: 'linear-gradient(135deg, #A8E6CF 0%, #FF8B94 100%)',
    genre: '欧美流行',
  },
  {
    name: '邓紫棋',
    count: 48,
    fans: '4200万',
    likes: '7.5亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    color: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)',
    genre: '华语流行',
  },
  {
    name: '薛之谦',
    count: 42,
    fans: '3800万',
    likes: '6.8亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    genre: '华语流行',
  },
  {
    name: 'Ed Sheeran',
    count: 38,
    fans: '9800万',
    likes: '22亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    genre: '欧美流行',
  },
  {
    name: '王菲',
    count: 35,
    fans: '3500万',
    likes: '5.6亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    color: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)',
    genre: '华语流行',
  },
  {
    name: '五月天',
    count: 32,
    fans: '3200万',
    likes: '5.2亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    color: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    genre: '摇滚',
  },
  {
    name: 'Coldplay',
    count: 28,
    fans: '8500万',
    likes: '18亿',
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    genre: '摇滚',
  },
];

const achievements = [
  {
    id: 1,
    icon: MusicNoteIcon,
    name: '音乐新手',
    desc: '完成第一次播放',
    achieved: true,
    progress: 100,
  },
  {
    id: 2,
    icon: FireIcon,
    name: '听歌达人',
    desc: '累计听歌超过1000首',
    achieved: true,
    progress: 100,
  },
  {
    id: 3,
    icon: MoonIcon,
    name: '夜猫子',
    desc: '凌晨2-6点听歌100次',
    achieved: true,
    progress: 100,
  },
  {
    id: 4,
    icon: FlexIcon,
    name: '坚持不懈',
    desc: '连续听歌30天',
    achieved: true,
    progress: 100,
  },
  {
    id: 5,
    icon: TargetIcon,
    name: '单曲循环',
    desc: '同一首歌听100次',
    achieved: true,
    progress: 100,
  },
  {
    id: 6,
    icon: StarIcon,
    name: '宝藏猎人',
    desc: '发现并收藏50首新歌',
    achieved: true,
    progress: 100,
  },
  {
    id: 7,
    icon: MicIcon,
    name: 'K歌之王',
    desc: '完成100次K歌',
    achieved: false,
    progress: 45,
  },
  {
    id: 8,
    icon: CrownIcon,
    name: '音乐大师',
    desc: '累计听歌超过10000首',
    achieved: false,
    progress: 38,
  },
  {
    id: 9,
    icon: GlobeIcon,
    name: '环球音乐',
    desc: '听遍全球50个国家的音乐',
    achieved: false,
    progress: 24,
  },
  {
    id: 10,
    icon: HeadphonesIcon,
    name: '耳机依赖',
    desc: '累计听歌时长超过1000小时',
    achieved: false,
    progress: 27,
  },
];

const genreStats = [
  { name: '流行', percentage: 35, color: '#FF6B6B' },
  { name: '摇滚', percentage: 20, color: '#4ECDC4' },
  { name: '电子', percentage: 18, color: '#A8E6CF' },
  { name: '古典', percentage: 12, color: '#FFE66D' },
  { name: 'R&B', percentage: 10, color: '#667eea' },
  { name: '其他', percentage: 5, color: '#95E1D3' },
];

const followingList = [
  {
    id: 1,
    name: '周杰伦',
    fans: 68000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: '最伟大的作品',
  },
  {
    id: 2,
    name: '林俊杰',
    fans: 52000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    isVerified: true,
    recentSong: '愿与愁',
  },
  {
    id: 3,
    name: 'Taylor Swift',
    fans: 120000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: 'Cruel Summer',
  },
  {
    id: 4,
    name: '邓紫棋',
    fans: 42000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    isVerified: true,
    recentSong: 'GLORIA',
  },
  {
    id: 5,
    name: '陈奕迅',
    fans: 45000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: '富士山下',
  },
  {
    id: 6,
    name: 'Ed Sheeran',
    fans: 98000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    isVerified: true,
    recentSong: 'Shape of You',
  },
  {
    id: 7,
    name: '薛之谦',
    fans: 38000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: '天外来物',
  },
  {
    id: 8,
    name: '王菲',
    fans: 35000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    isVerified: true,
    recentSong: '如愿',
  },
  {
    id: 9,
    name: '五月天',
    fans: 32000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: '突然好想你',
  },
  {
    id: 10,
    name: 'Coldplay',
    fans: 85000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    isVerified: true,
    recentSong: 'Yellow',
  },
  {
    id: 11,
    name: 'IU',
    fans: 48000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: 'Celebrity',
  },
  {
    id: 12,
    name: 'BTS',
    fans: 280000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    isVerified: true,
    recentSong: 'Dynamite',
  },
  {
    id: 13,
    name: '刘若英',
    fans: 28000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: '后来',
  },
  {
    id: 14,
    name: '汪峰',
    fans: 31000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/aphorism/${Math.floor(Math.random() * 41)}.webp`,
    isVerified: true,
    recentSong: '怒放的生命',
  },
  {
    id: 15,
    name: 'Adele',
    fans: 110000000,
    avatar: `https://mouthhard-website.oss-cn-hangzhou.aliyuncs.com/landscape/${Math.floor(Math.random() * 21)}.webp`,
    isVerified: true,
    recentSong: 'Hello',
  },
];

const handleEdit = () => {
  editForm.nickname = userData.nickname;
  editForm.bio = userData.bio;
  editForm.location = userData.location;
  showEditModal.value = true;
};

const handleTabChange = (newTab: string) => {
  activeTab.value = newTab;
};

const handleCloseModal = () => {
  showEditModal.value = false;
};

const handleSaveProfile = (formData: { nickname: string; bio: string; location: string }) => {
  userData.nickname = formData.nickname;
  userData.bio = formData.bio;
  userData.location = formData.location;
  showEditModal.value = false;
};

const handleUnfollow = (_artist: FollowingArtist) => {
  // TODO: 实现取消关注功能
};

// TODO: 实现播放歌单功能
const handlePlayPlaylist = (_playlist: DefaultPlaylist | CreatedPlaylist | CollectedPlaylist) => {
  // 占位：后续实现播放逻辑
};

// TODO: 实现创建歌单功能
const handleCreatePlaylist = () => {
  // 占位：后续创建歌单逻辑
};
</script>

<style lang="scss" scoped src="./index.scss"></style>

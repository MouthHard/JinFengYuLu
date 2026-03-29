import { ref } from "vue";
import {
  SORT_LABELS,
  DEFAULT_COLLECTORS,
  DEFAULT_LIKE_SONGS,
  DEFAULT_COMMENTS,
} from "@/pages/Music/data/songList";
import type {
  SongItem,
  CollectorItem,
  SongListCommentItem,
} from "@/types/music/music";

export function useSongList() {
  const active = ref(0);
  const sortIndices = ref([0, 0, 0]);
  const hoveredRowId = ref<number | null>(null);
  const likeSongArr = ref<SongItem[]>([...DEFAULT_LIKE_SONGS]);
  const commentArr = ref<SongListCommentItem[]>([...DEFAULT_COMMENTS]);
  const collectorArr = ref<CollectorItem[]>([...DEFAULT_COLLECTORS]);

  const handleToggle = (index: number) => {
    active.value = index;
  };

  const cycleSortLabel = (labelIndex: number) => {
    const arr = SORT_LABELS[labelIndex].arr;
    sortIndices.value[labelIndex] =
      (sortIndices.value[labelIndex] + 1) % arr.length;
  };

  const toggleHeart = (songId: number) => {
    const song = likeSongArr.value.find((s) => s.id === songId);
    if (song) {
      song.flag = !song.flag;
    }
  };

  const handleRowEnter = (songId: number) => {
    hoveredRowId.value = songId;
  };

  const handleRowLeave = () => {
    hoveredRowId.value = null;
  };

  return {
    active,
    sortIndices,
    hoveredRowId,
    likeSongArr,
    commentArr,
    collectorArr,
    SORT_LABELS,
    handleToggle,
    cycleSortLabel,
    toggleHeart,
    handleRowEnter,
    handleRowLeave,
  };
}

import type { Artifact, ArtifactDetail } from "@/typesOfPages/museum/index";

// 导出常量和映射
export { artifactTypes, periods, periodMap } from "./constants";

// 导出文物列表数据
export { artifacts } from "./artifactData";

// 导出文物详细数据
export { artifactDetails } from "./artifactDetailData";

// 导入文物数据用于函数
import { artifacts } from "./artifactData";
import { artifactDetails } from "./artifactDetailData";

// 根据博物馆ID获取文物
export const getArtifactsByMuseumId = (museumId: number): Artifact[] => {
  return artifacts.filter((artifact) => artifact.museumId === museumId);
};

// 根据文物ID获取文物详情
export const getArtifactDetailById = (
  artifactId: number,
): ArtifactDetail | undefined => {
  return artifactDetails.find((detail) => detail.id === artifactId);
};

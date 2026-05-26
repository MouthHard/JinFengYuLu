// 沉浸式体验数据
import type { ImmersiveExperience } from "@/typesOfPages/museum/index";

// 沉浸式体验数据数组
export const immersiveExperiences: ImmersiveExperience[] = [
  // 故宫博物院 (ID: 1)
  {
    id: 1,
    museumId: 1,
    title: "紫禁城VR体验",
    description: "通过VR技术，身临其境地感受紫禁城的壮丽景象",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    museumId: 1,
    title: "古代宫廷生活还原",
    description: "通过沉浸式剧场，还原古代宫廷生活场景",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    museumId: 1,
    title: "故宫夜游VR体验",
    description: "夜间VR体验，感受不一样的紫禁城夜景",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 中国科学技术馆 (ID: 2)
  {
    id: 4,
    museumId: 2,
    title: "科技互动体验",
    description: "通过互动装置，体验前沿科技的魅力",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    museumId: 2,
    title: "宇宙探索VR体验",
    description: "通过VR技术，探索宇宙的奥秘",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    museumId: 2,
    title: "机器人互动体验",
    description: "与智能机器人互动，了解人工智能技术",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  // 上海博物馆 (ID: 3)
  {
    id: 7,
    museumId: 3,
    title: "青铜器制作工艺体验",
    description: "亲手体验古代青铜器的制作过程",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    museumId: 3,
    title: "书画艺术VR体验",
    description: "通过VR技术，欣赏中国古代书画艺术",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    museumId: 3,
    title: "陶瓷制作体验",
    description: "亲手体验陶瓷制作工艺",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  // 为其他博物馆生成沉浸式体验数据（简化版）
  ...generateImmersiveForMuseums(),
];

// 为剩余博物馆生成沉浸式体验数据的辅助函数
function generateImmersiveForMuseums(): ImmersiveExperience[] {
  const immersiveData: ImmersiveExperience[] = [];
  let id = 10;

  // 博物馆ID从4到38
  for (let museumId = 4; museumId <= 38; museumId++) {
    // 为每个博物馆生成3个沉浸式体验
    immersiveData.push({
      id: id++,
      museumId,
      title: `博物馆${museumId} VR虚拟参观`,
      description: `通过VR技术，身临其境地参观博物馆${museumId}`,
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    });

    immersiveData.push({
      id: id++,
      museumId,
      title: `博物馆${museumId} 互动体验`,
      description: `通过互动装置，了解博物馆${museumId}的历史文化`,
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    });

    immersiveData.push({
      id: id++,
      museumId,
      title: `博物馆${museumId} AR增强现实`,
      description: `通过AR技术，增强参观体验`,
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    });
  }

  return immersiveData;
}

// 根据博物馆ID获取沉浸式体验
export const getImmersiveExperiencesByMuseumId = (
  museumId: number,
): ImmersiveExperience[] => {
  return immersiveExperiences.filter(
    (experience) => experience.museumId === museumId,
  );
};

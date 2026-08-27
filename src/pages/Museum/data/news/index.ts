// 新闻数据
import type { News } from "@/types/museum/index";

// 新闻数据数组
export const news: News[] = [
  // 故宫博物�?(ID: 1)
  {
    id: 1,
    museumId: 1,
    title: "故宫博物院新馆开�?,
    description: "故宫博物院新馆正式开放，展示更多珍贵文物",
    date: "2024-04-15",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    museumId: 1,
    title: "故宫文物数字化项目启�?,
    description: "故宫博物院启动大规模文物数字化项目，让更多人在线欣赏国宝",
    date: "2024-05-20",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    museumId: 1,
    title: "故宫博物院获赠珍贵文�?,
    description: "故宫博物院接受社会捐赠，新增多件珍贵文物",
    date: "2024-06-10",
    image:
      "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
  },
  // 中国科学技术馆 (ID: 2)
  {
    id: 4,
    museumId: 2,
    title: "中国科学技术馆举办人工智能展览",
    description: "中国科学技术馆举办人工智能主题展览，展示AI技术的最新发�?,
    date: "2024-07-05",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    museumId: 2,
    title: "科技馆新增互动体验区",
    description: "中国科学技术馆新增多个互动体验区，提升参观体验",
    date: "2024-08-15",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    museumId: 2,
    title: "科技馆荣获科普教育基地称�?,
    description: "中国科学技术馆再次荣获全国科普教育基地称号",
    date: "2024-09-20",
    image:
      "https://images.unsplash.com/photo-1534225057607-5897d0d7c9d4?w=800&h=600&fit=crop",
  },
  // 上海博物�?(ID: 3)
  {
    id: 7,
    museumId: 3,
    title: "上海博物馆与国际博物馆合�?,
    description: "上海博物馆与多个国际博物馆达成合作，将举办系列国际展�?,
    date: "2024-06-10",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    museumId: 3,
    title: "上海博物馆新馆建设启�?,
    description: "上海博物馆东馆建设正式启动，预计2025年开�?,
    date: "2024-07-25",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    museumId: 3,
    title: "上海博物馆举办国际学术研讨会",
    description: "上海博物馆举办国际博物馆学术研讨�?,
    date: "2024-08-30",
    image:
      "https://images.unsplash.com/photo-1518991905535-1dcf6bc5e4de?w=800&h=600&fit=crop",
  },
  // 为其他博物馆生成新闻数据（简化版�?  ...generateNewsForMuseums(),
];

// 为剩余博物馆生成新闻数据的辅助函�?function generateNewsForMuseums(): News[] {
  const newsData: News[] = [];
  let id = 10;

  // 博物馆ID�?�?8
  for (let museumId = 4; museumId <= 38; museumId++) {
    // 为每个博物馆生成3条新�?    newsData.push({
      id: id++,
      museumId,
      title: `博物�?{museumId}年度特展开幕`,
      description: `博物�?{museumId}举办年度特展，展示珍贵文物和历史文化`,
      date: "2024-06-15",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    });

    newsData.push({
      id: id++,
      museumId,
      title: `博物�?{museumId}新增数字化服务`,
      description: `博物�?{museumId}推出数字化服务，提升参观体验`,
      date: "2024-07-20",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    });

    newsData.push({
      id: id++,
      museumId,
      title: `博物�?{museumId}举办文化讲座`,
      description: `博物�?{museumId}举办系列文化讲座，传播历史文化知识`,
      date: "2024-08-25",
      image:
        "https://images.unsplash.com/photo-1584468104715-5b8f9e8b8f4e?w=800&h=600&fit=crop",
    });
  }

  return newsData;
}

// 根据博物馆ID获取新闻
export const getNewsByMuseumId = (museumId: number): News[] => {
  return news.filter((newsItem) => newsItem.museumId === museumId);
};

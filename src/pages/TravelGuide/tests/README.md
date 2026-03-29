# TravelGuide 页面测试

## 测试范围

### 单元测试 (unit/)
- `SceneryCard.spec.ts` - 景点卡片测试
- `SceneryDetail.spec.ts` - 景点详情测试
- `FoodCard.spec.ts` - 美食卡片测试
- `ProvinceFilter.spec.ts` - 省份筛选测试

### 集成测试 (integration/)
- `scenery-search.spec.ts` - 景点搜索流程测试
- `province-filter.spec.ts` - 省份筛选流程测试
- `recommendation.spec.ts` - 推荐系统测试

## 测试重点

### 1. 景点展示
- 正确显示景点信息
- 正确显示评分和标签
- 正确显示位置信息

### 2. 美食推荐
- 美食列表展示
- 美食详情查看
- 收藏功能

### 3. 省份筛选
- 省份选择
- 结果更新
- 地图交互

### 4. 搜索功能
- 关键词搜索
- 多条件筛选
- 结果排序

## 运行测试

```bash
npm run test -- src/pages/TravelGuide/tests
```

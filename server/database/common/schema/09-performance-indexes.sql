-- ============================================================================
-- 性能优化索引 - 09-performance-indexes.sql
-- ============================================================================
-- 为关键词搜索字段、排序字段、筛选字段添加索引
-- 使用方法: mysql -u <DB_USER> -p <DB_NAME> < 09-performance-indexes.sql
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 诗词模块 (aphorism)
-- ---------------------------------------------------------------------------
CREATE INDEX idx_aphorism_view_count ON aphorism (view_count);
CREATE INDEX idx_aphorism_created_at ON aphorism (created_at);
CREATE INDEX idx_aphorism_like_count ON aphorism (like_count);
CREATE INDEX idx_aphorism_active_dynasty ON aphorism (is_active, dynasty);
CREATE INDEX idx_aphorism_active_author ON aphorism (is_active, author);
CREATE INDEX idx_aphorism_active_featured_views ON aphorism (is_active, is_featured, view_count);

-- ---------------------------------------------------------------------------
-- 历史模块 (history)
-- ---------------------------------------------------------------------------
CREATE INDEX idx_dynasty_active ON dynasty (is_active);
CREATE INDEX idx_dynasty_name ON dynasty (name);

CREATE INDEX idx_historical_event_active ON historical_event (is_active);
CREATE INDEX idx_historical_event_title ON historical_event (title);
CREATE INDEX idx_historical_event_period ON historical_event (period);

CREATE INDEX idx_historical_figure_active ON historical_figure (is_active);
CREATE INDEX idx_historical_figure_name ON historical_figure (name);

CREATE INDEX idx_cultural_heritage_active ON cultural_heritage (is_active);
CREATE INDEX idx_cultural_heritage_name ON cultural_heritage (name);
CREATE INDEX idx_cultural_heritage_era ON cultural_heritage (era);
CREATE INDEX idx_cultural_heritage_location ON cultural_heritage (location);

-- ---------------------------------------------------------------------------
-- 博物馆模块 (museum)
-- ---------------------------------------------------------------------------
CREATE INDEX idx_museum_name ON museum (name);

CREATE INDEX idx_museum_artifact_name ON museum_artifact (name);

CREATE INDEX idx_museum_exhibition_title ON museum_exhibition (title);
CREATE INDEX idx_museum_exhibition_location ON museum_exhibition (location);

CREATE INDEX idx_museum_activity_title ON museum_activity (title);
CREATE INDEX idx_museum_activity_location ON museum_activity (location);

CREATE INDEX idx_museum_news_title ON museum_news (title);

CREATE INDEX idx_museum_immersive_title ON museum_immersive (title);

CREATE INDEX idx_museum_creative_product_name ON museum_creative_product (name);

CREATE INDEX idx_museum_academic_resource_title ON museum_academic_resource (title);
CREATE INDEX idx_museum_academic_resource_author ON museum_academic_resource (author);

CREATE INDEX idx_museum_exhibition_hall_name ON museum_exhibition_hall (name);

-- ---------------------------------------------------------------------------
-- 游戏模块 (game)
-- ---------------------------------------------------------------------------
CREATE INDEX idx_game_title ON game (title);
CREATE INDEX idx_game_developer ON game (developer);
CREATE INDEX idx_game_publisher ON game (publisher);
CREATE INDEX idx_game_review_count ON game (review_count);
CREATE INDEX idx_game_active_category ON game (is_active, category);
CREATE INDEX idx_game_active_reviews ON game (is_active, review_count);

CREATE INDEX idx_game_screenshot_game_sort ON game_screenshot (game_id, sort_order);
CREATE INDEX idx_game_feature_game_sort ON game_feature (game_id, sort_order);
CREATE INDEX idx_game_banner_sort_order ON game_banner (sort_order);
CREATE INDEX idx_game_banner_game_ref ON game_banner (game_id_ref);

CREATE INDEX idx_game_category_active ON game_category (is_active);
CREATE INDEX idx_game_category_sort ON game_category (sort_order);

-- ---------------------------------------------------------------------------
-- 旅游指南模块 (travel_guide)
-- ---------------------------------------------------------------------------
CREATE INDEX idx_travel_guide_province_name ON travel_guide_province (name);
CREATE INDEX idx_travel_guide_province_region ON travel_guide_province (region);
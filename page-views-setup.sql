-- 페이지 조회수 추적 테이블 생성
CREATE TABLE IF NOT EXISTS page_views (
  id SERIAL PRIMARY KEY,
  page_name TEXT NOT NULL DEFAULT 'landing',
  visitor_id TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security 활성화
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- INSERT 정책 추가 (누구나 추가 가능)
CREATE POLICY "Allow public inserts" ON page_views
FOR INSERT WITH CHECK (true);

-- 통계 뷰 생성 (전환율 계산용)
CREATE OR REPLACE VIEW conversion_stats AS
SELECT 
  COUNT(DISTINCT pv.visitor_id) as total_views,
  COUNT(DISTINCT er.phone) as total_registrations,
  CASE 
    WHEN COUNT(DISTINCT pv.visitor_id) > 0 
    THEN ROUND((COUNT(DISTINCT er.phone)::numeric / COUNT(DISTINCT pv.visitor_id)::numeric * 100), 2)
    ELSE 0
  END as conversion_rate
FROM page_views pv
LEFT JOIN earlybird_registrations er ON DATE(pv.created_at) = DATE(er.created_at);
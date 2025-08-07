-- 얼리버드 예약 테이블 생성
CREATE TABLE IF NOT EXISTS earlybird_registrations (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  instagram TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security 활성화
ALTER TABLE earlybird_registrations ENABLE ROW LEVEL SECURITY;

-- INSERT 정책 추가 (누구나 추가 가능)
CREATE POLICY "Allow public inserts" ON earlybird_registrations
FOR INSERT WITH CHECK (true);

-- SELECT 정책 추가 (관리자만 조회 가능하도록 설정)
-- 필요한 경우 아래 주석을 해제하고 수정하세요
-- CREATE POLICY "Only admins can select" ON earlybird_registrations
-- FOR SELECT USING (auth.role() = 'authenticated');
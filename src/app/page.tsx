'use client';

import { useState } from 'react';
import Link from 'next/link';
import './service.css';

/* ─── Arrow Icon Component ─── */
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Growth Icon ─── */
function GrowthIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

/* ─── Hamburger Icon ─── */
function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

/* ─── Navigation ─── */
function ServiceNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sp-nav glass-panel">
        <Link href="/" className="sp-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/TAG_Logo_Navy.png" alt="TAG" className="sp-logo-img" />
        </Link>
        <div className="nav-links">
          <a href="#">크리에이터</a>
          <a href="#">이용 방법</a>
          <a href="#" className="nav-login">로그인</a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
          <HamburgerIcon />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`mobile-menu-panel ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기">
          <CloseIcon />
        </button>
        <a href="#" onClick={() => setMenuOpen(false)}>크리에이터</a>
        <a href="#" onClick={() => setMenuOpen(false)}>이용 방법</a>
        <a href="#" onClick={() => setMenuOpen(false)}>로그인</a>
      </div>
    </>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="hero sp-container">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="pill-badge">
            <span className="tag-dot" /> 크리에이터 도구
            <span style={{ color: 'var(--text-inverse-sec)', margin: '0 4px', opacity: 0.5 }}>|</span>
            <span className="en-font">15~20% 커미션</span>
          </div>

          <h1>어차피 올리는 OOTD,<br />올릴 때마다 수익이 생긴다면?</h1>

          <p>매일 하는 코디 공유에 상품을 태그하세요. 당신의 게시물 하나가 판매로 이어질 때마다, 판매가의 15~20%가 수익이 됩니다. 팔로워 300명이어도 상관없습니다.</p>

          <div className="hero-cta-group">
            <a href="#" className="btn btn-primary">
              지금 시작하기
              <div className="btn-icon">
                <ArrowIcon />
              </div>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="OOTD Fashion Style"
                className="phone-bg-img"
              />

              <div className="scanner-line" />
              <div className="scanner-ring" />

              <div className="product-tag">
                <div className="tag-dot" />
                <span className="tag-text">Acne Studios Jacket</span>
              </div>
              <div className="product-tag" style={{ top: '70%', left: '20%' }}>
                <div className="tag-dot" />
                <span className="tag-text">Wide Denim</span>
              </div>
            </div>

            <div className="glass-panel-dark floating-widget">
              <div className="widget-label">Estimated Earnings</div>
              <div className="en-font widget-value">$1,248</div>
              <div className="widget-growth">
                <GrowthIcon />
                오늘 +18%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Problem Section ─── */
function ProblemSection() {
  const problems = [
    {
      number: '01',
      title: <>시간은 쓰는데,<br />수익은 0원</>,
      desc: '게시물 하나를 올리기 위해 코디하고, 사진 찍고, 보정하는 데 주당 평균 4.2시간을 쓰지만, 82%의 크리에이터가 월 10만원 이하의 수익을 냅니다.',
    },
    {
      number: '02',
      title: <>브랜드 협찬?<br />팔로워 1만은 넘어야 합니다</>,
      desc: '영향력은 팔로워 수로만 증명되지 않지만, 기존 시장은 마이크로 인플루언서의 실제 전환력을 외면합니다.',
    },
    {
      number: '03',
      title: <>매달 패션에 37만원을 쓰지만,<br />돌아오는 건 없습니다</>,
      desc: '자신의 돈으로 구매한 옷을 정성스럽게 리뷰해도, 소비자로 남을 뿐 생산자로서의 가치를 인정받지 못합니다.',
    },
  ];

  return (
    <section className="section-problem">
      <div className="sp-container">
        <div className="section-header">
          <div
            className="pill-badge light"
            style={{
              marginBottom: '16px',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--accent)',
              borderColor: 'var(--border-dark)',
            }}
          >
            Current Reality
          </div>
          <h2 className="section-title">지금 이런 상황 아닌가요?</h2>
        </div>

        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.number} className="problem-card">
              <div className="problem-number">{p.number}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Section ─── */
function ServicesSection() {
  return (
    <section className="section-services">
      <div className="sp-container">
        <div className="section-header" style={{ marginTop: '40px' }}>
          <h2 className="section-title">TAG가 해결합니다</h2>
        </div>

        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="glass-panel service-card service-card-1">
            <div className="card-visual">
              <div className="bar" style={{ height: '20%' }} />
              <div className="bar dark" style={{ height: '40%' }} />
              <div className="bar" style={{ height: '30%' }} />
              <div className="bar active" style={{ height: '80%' }} />
              <div className="bar" style={{ height: '50%' }} />
              <div className="bar" style={{ height: '60%' }} />
              <div className="bar dark" style={{ height: '90%' }} />
              <div className="bar" style={{ height: '45%' }} />
            </div>
            <h3>태그 한 번,<br />수익 파이프라인 완성</h3>
            <p>링크 하나만 복사해서 붙여넣으세요. 판매가 발생할 때마다 업계 최고 수준인 15-20%의 커미션이 자동으로 정산됩니다.</p>
            <div className="service-metric">예상 월 수익 23~45만원</div>
          </div>

          {/* Service Card 2 */}
          <div className="glass-panel service-card service-card-2">
            <div className="card-visual">
              <div className="ai-nodes" />
              <div className="ai-highlight" />
              <div className="ai-highlight" style={{ top: '60%', left: '70%', width: '20px', height: '20px', opacity: 0.5 }} />
            </div>
            <h3>AI 에이전트가<br />콘텐츠 전략을 세워줍니다</h3>
            <p>현재 트렌드, 최적의 해시태그, 업로드 타이밍을 다중 AI 에이전트가 분석하여 제안합니다. 당신은 코디에만 집중하세요.</p>
            <div className="service-metric">평균 클릭률 2.4배 상승</div>
          </div>

          {/* Service Card 3 */}
          <div className="glass-panel service-card">
            <div
              className="card-visual"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '40px',
                justifyContent: 'flex-end',
                height: '120px',
              }}
            >
              <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '8px',
              }}>
                <span className="en-font" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Conversion Rate</span>
                <span className="en-font" style={{ fontSize: '2rem', fontWeight: 700 }}>4.8%</span>
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '8px',
              }}>
                <span className="en-font" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Total Tags</span>
                <span className="en-font" style={{ fontSize: '2rem', fontWeight: 700 }}>128</span>
              </div>
            </div>
            <h3>내 영향력을 숫자로<br />증명하는 대시보드</h3>
            <p>실시간 데이터 분석을 통해 어떤 아이템이 가장 반응이 좋은지 확인하세요. 이 데이터는 브랜드 협찬을 위한 강력한 포트폴리오가 됩니다.</p>
            <div className="service-metric">브랜드 협찬 성사율 3.1배 증가</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About & Track Record Section ─── */
function AboutSection() {
  return (
    <section className="sp-container">
      <div className="section-split">
        {/* About Team */}
        <div className="about-team">
          <div className="pill-badge light" style={{ marginBottom: '24px' }}>Team TAG</div>
          <h2>&quot;크리에이터의 첫 수익&quot;에<br />집착하는 팀</h2>
          <p>우리는 누구나 자신의 취향으로 돈을 벌 수 있는 생태계를 만듭니다. 기술과 데이터를 통해 패션 크리에이터의 영향력을 실제 가치로 치환합니다.</p>

          <table className="milestone-table">
            <tbody>
              <tr>
                <td className="milestone-year">2025</td>
                <td className="milestone-desc">예비창업패키지 선정</td>
              </tr>
              <tr>
                <td className="milestone-year">2026</td>
                <td className="milestone-desc">벤처스퀘어로부터 Seed 투자 유치</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Track Record */}
        <div className="track-record">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>우리가 만들어 온 것들</h3>
          </div>

          <div className="track-record-grid">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="track-item active">Project {String(n).padStart(2, '0')}</div>
            ))}
            {[5, 6, 7, 8].map((n) => (
              <div key={n} className="track-item">{String(n).padStart(2, '0')}</div>
            ))}
          </div>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.875rem' }}>
            패션, 커머스, AI 분야에서 8개의 프로덕트를 성공적으로 런칭한 경험을 바탕으로 TAG를 만듭니다.
          </p>

          <a href="#" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '1rem' }}>
            자세히 보기 <span style={{ fontWeight: 400, color: 'var(--text-tertiary)' }}>(Coming soon)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── News Section ─── */
function NewsSection() {
  return (
    <section className="section-news">
      <div className="sp-container">
        <div className="section-header">
          <div className="pill-badge light" style={{ marginBottom: '16px' }}>News &amp; Media</div>
          <h2 className="section-title">TAG의 이야기</h2>
        </div>

        <div className="news-grid">
          {/* Real article */}
          <a
            href="https://www.venturesquare.net/1064584/"
            target="_blank"
            rel="noopener noreferrer"
            className="news-card news-card-featured"
          >
            <div className="news-thumbnail">
              <div className="news-thumbnail-overlay" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/TAG_Logo_white.png" alt="TAG" className="news-thumbnail-logo" />
            </div>
            <div className="news-body">
              <span className="news-source en-font">VentureSquare</span>
              <h3 className="news-title">팔로워보다 중요한 건 실제 구매... 류태규 대표가 설계한 예비 인플루언서 플랫폼, 태그</h3>
              <div className="news-read-more en-font">
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* Placeholder cards */}
          {[0, 1].map((i) => (
            <div key={i} className="news-card news-card-placeholder">
              <div className="news-placeholder-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 7h16M4 11h12M4 15h14" />
                </svg>
              </div>
              <p className="news-placeholder-text">더 많은 소식이<br />준비되고 있습니다</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="section-cta sp-container">
      <div className="cta-grid">
        {/* Creator CTA */}
        <div className="cta-card cta-creator">
          <div>
            <div
              className="pill-badge"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--accent)', marginBottom: '24px' }}
            >
              For Creators
            </div>
            <h2>크리에이터로 시작하기</h2>
            <p>가입하고, 첫 OOTD에 태그를 달아보세요.<br />팔로워 수는 상관없습니다.</p>
          </div>
          <a href="#" className="btn btn-accent">
            무료로 시작하기
            <div className="btn-icon">
              <ArrowIcon />
            </div>
          </a>
        </div>

        {/* B2B CTA */}
        <div className="cta-card cta-b2b glass-panel">
          <div>
            <div className="pill-badge light" style={{ marginBottom: '24px' }}>For Business</div>
            <h2>TAG 팀과 함께 만들기</h2>
            <p>TAG를 만든 팀의 기술력과 실행력이 필요하신가요? 엔터프라이즈 레벨의 개발을 지원합니다.</p>
          </div>
          <a href="#" className="btn btn-primary">
            외주 개발 문의하기
            <div className="btn-icon">
              <ArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function ServiceFooter() {
  return (
    <footer className="sp-footer">
      <div className="sp-container">
        <div className="footer-business-info">
          <p>주식회사 태그 | 대표 류태규</p>
          <p>사업자등록번호 : 792-81-03987</p>
          <p>주소 : 부천시 원미구 소사로 487, 2층 에이-05호</p>
          <p>연락처 : 010-8546-0413 | 이메일 : <a href="mailto:tag_official@tags.kr" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>tag_official@tags.kr</a></p>
        </div>
        <p className="en-font footer-copyright">&copy; 2026 TAG. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function ServicePage() {
  return (
    <div className="service-page">
      <ServiceNav />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <AboutSection />
      <NewsSection />
      <CTASection />
      <ServiceFooter />
    </div>
  );
}

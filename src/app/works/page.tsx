'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../service.css';
import './works.css';

/* ─── Icons ─── */
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

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
function WorksNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sp-nav glass-panel">
        <Link href="/" className="sp-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/TAG_Logo_Navy.png" alt="TAG" className="sp-logo-img" />
        </Link>
        <div className="nav-links">
          <Link href="/">크리에이터</Link>
          <Link href="/partners">공급사</Link>
          <Link href="/works">개발 사례</Link>
          <a href="https://app.tags.kr" target="_blank" rel="noopener noreferrer" className="nav-login">앱 바로가기</a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
          <HamburgerIcon />
        </button>
      </nav>

      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`mobile-menu-panel ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기">
          <CloseIcon />
        </button>
        <Link href="/" onClick={() => setMenuOpen(false)}>크리에이터</Link>
        <Link href="/partners" onClick={() => setMenuOpen(false)}>공급사</Link>
        <Link href="/works" onClick={() => setMenuOpen(false)}>개발 사례</Link>
        <a href="https://app.tags.kr" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>앱 바로가기</a>
      </div>
    </>
  );
}

/* ─── Project Data ─── */
type Project = {
  name: string;
  category: string;
  image: string;
  desc: string;
  tags: string[];
  url?: string;
};

const projects: Project[] = [
  {
    name: 'ENTTIX',
    category: '스포츠 티켓 예약 서비스',
    image: '/works/enttix.png',
    desc: '해외 축구·테니스·F1 등 글로벌 스포츠 경기 티켓을 한 곳에서 검색하고 예매하는 프리미엄 티켓 마켓플레이스입니다. 숨은 수수료 없이 100% 정품 티켓을 보장합니다.',
    tags: ['Marketplace', 'Booking', 'Global'],
    url: 'https://www.enttix.com/',
  },
  {
    name: 'BroadwayShow',
    category: '브로드웨이 뮤지컬 티켓 서비스',
    image: '/works/broadwayshow.png',
    desc: '위키드·라이온킹 등 브로드웨이 인기 뮤지컬을 실시간 좌석 확인부터 원화 결제까지 한국어로 간편하게 예매하는 인바운드 공식 리셀러 플랫폼입니다.',
    tags: ['Ticketing', 'Inbound', '원화 결제'],
    url: 'https://www.broadwayshow.co.kr',
  },
  {
    name: '미디어 사이트',
    category: '미디어·콘텐츠 사이트 개발 다수',
    image: '/works/media.png',
    desc: '투자·산업 전문 뉴스를 비롯한 다양한 분야의 미디어·매거진 사이트를 다수 구축했습니다. 기사 발행 관리부터 반응형 콘텐츠 레이아웃까지 운영 전 과정을 개발합니다.',
    tags: ['Media', 'CMS', 'Magazine'],
  },
  {
    name: 'SnapClip',
    category: '영상 자동 생성형 AI 서비스',
    image: '/works/snapclip.png',
    desc: '상품 사진 한 장만 업로드하면 AI가 30초 만에 15초짜리 숏폼 광고 영상을 자동으로 만들어 주는 생성형 AI 서비스입니다.',
    tags: ['Generative AI', 'Video', 'Short-form'],
  },
  {
    name: 'GlobalAgriFit',
    category: '농업 기계 해외 수출 어시스턴트',
    image: '/works/globalagrifit.png',
    desc: '농기계 스펙만 입력하면 토양·기후·지형 데이터를 분석해 전 세계에서 가장 적합한 농지와 수출 대상 국가를 지도 위에 시각화해 주는 해외 수출 어시스턴트입니다.',
    tags: ['Data Viz', '3D Globe', 'B2B'],
  },
];

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="hero sp-container works-hero">
      <div className="pill-badge">
        <span className="tag-dot" /> Our Works
        <span style={{ color: 'var(--text-inverse-sec)', margin: '0 4px', opacity: 0.5 }}>|</span>
        <span className="en-font">{projects.length} Projects</span>
      </div>
      <h1>우리가 만들어 온 것들</h1>
      <p>티켓 예매, 미디어, 생성형 AI, 데이터 시각화까지.<br />TAG 팀이 직접 기획하고 개발한 프로덕트들을 소개합니다.</p>
    </section>
  );
}

/* ─── Project Row ─── */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const visual = (
    <div className="work-visual glass-panel">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.image} alt={project.name} loading="lazy" />
    </div>
  );

  return (
    <article className={`work-row ${index % 2 === 1 ? 'reverse' : ''}`}>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="work-visual-link">
          {visual}
        </a>
      ) : (
        visual
      )}
      <div className="work-info">
        <div className="work-index en-font">{String(index + 1).padStart(2, '0')}</div>
        <span className="work-category">{project.category}</span>
        <h2 className="work-name">{project.name}</h2>
        <p className="work-desc">{project.desc}</p>
        <div className="work-tags">
          {project.tags.map((t) => (
            <span key={t} className="work-tag en-font">{t}</span>
          ))}
        </div>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="work-visit en-font">
            사이트 방문하기
            <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  );
}

/* ─── CTA ─── */
function WorksCTA() {
  return (
    <section className="sp-container works-cta-wrap">
      <div className="works-cta glass-panel-dark">
        <h2>이런 서비스, 함께 만들어 볼까요?</h2>
        <p>아이디어만 있으면 됩니다. TAG 팀의 기획·개발 역량으로 프로덕트를 현실로 만들어 드립니다.</p>
        <Link href="/partners" className="btn btn-accent">
          개발 문의하기
          <div className="btn-icon">
            <ArrowIcon />
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function WorksFooter() {
  return (
    <footer className="sp-footer">
      <div className="sp-container">
        <div className="footer-business-info">
          <p>주식회사 태그 | 대표 류태규</p>
          <p>사업자등록번호 : 792-81-03987</p>
          <p>주소 : 부천시 원미구 소사로 487, 208호</p>
          <p>연락처 : 010-8546-0413 | 이메일 : <a href="mailto:tag_official@tags.kr" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>tag_official@tags.kr</a></p>
        </div>
        <p className="en-font footer-copyright">&copy; 2026 TAG. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function WorksPage() {
  return (
    <div className="service-page works-page">
      <WorksNav />
      <HeroSection />
      <section className="sp-container works-list">
        {projects.map((p, i) => (
          <ProjectRow key={p.name} project={p} index={i} />
        ))}
      </section>
      <WorksCTA />
      <WorksFooter />
    </div>
  );
}

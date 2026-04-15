'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import '../service.css';
import './partners.css';

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
function PartnersNav() {
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
          <Link href="/">회사소개</Link>
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
        <Link href="/" onClick={() => setMenuOpen(false)}>회사소개</Link>
        <a href="https://app.tags.kr" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>앱 바로가기</a>
      </div>
    </>
  );
}

/* ─── Hero ─── */
function HeroSection({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="hero sp-container partners-hero">
      <div className="partners-hero-content">
        <div className="pill-badge">
          <span className="tag-dot" /> For Suppliers
          <span style={{ color: 'var(--text-inverse-sec)', margin: '0 4px', opacity: 0.5 }}>|</span>
          <span className="en-font">Wholesale &amp; Brand</span>
        </div>

        <h1>
          인플루언서가 직접 구매한 진짜 후기,<br />
          당신의 상품을 팝니다.
        </h1>

        <p>
          협찬도, 광고비도 없습니다. 진짜 소비자인 인플루언서가 자기 돈으로 구매한 상품을
          OOTD에 올리고 태그합니다. 진짜 후기는 광고보다 강합니다.
        </p>

        <div className="hero-cta-group">
          <button type="button" onClick={onOpenForm} className="btn btn-primary">
            공급사 입점 신청
            <div className="btn-icon">
              <ArrowIcon />
            </div>
          </button>
        </div>
      </div>

      {/* Hero illustration: product → influencer → consumer flow */}
      <div className="partners-hero-visual">
        <div className="flow-card flow-card-product">
          <div className="flow-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <path d="M3 10h18M9 14h6" />
            </svg>
          </div>
          <div className="flow-card-label">상품 등록</div>
          <div className="flow-card-sub">공급사</div>
        </div>

        <div className="flow-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div className="flow-card flow-card-influencer">
          <div className="flow-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21v-2a6 6 0 0112 0v2" />
            </svg>
          </div>
          <div className="flow-card-label">실구매 &amp; 태그 게시</div>
          <div className="flow-card-sub">나노 인플루언서</div>
        </div>

        <div className="flow-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        <div className="flow-card flow-card-consumer">
          <div className="flow-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15.46l-5.27-.61a2 2 0 00-1.78.62l-1.27 1.27a16 16 0 01-7.43-7.43l1.27-1.27a2 2 0 00.62-1.78L6.54 3a2 2 0 00-2-1.74H3.18A2 2 0 001.2 3.45 19 19 0 0020.55 22.8a2 2 0 002.19-1.98v-1.36a2 2 0 00-1.74-2z" />
            </svg>
          </div>
          <div className="flow-card-label">인플루언서 마케팅 효과 및 판매 발생</div>
          <div className="flow-card-sub">소비자</div>
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
      title: <>협찬비·광고비<br />부담은 그대로</>,
      desc: '메가 인플루언서 한 건당 5,000달러 이상. 효과 검증 없이 비용만 먼저 나갑니다.',
    },
    {
      number: '02',
      title: <>광고처럼 보이면<br />효과는 떨어집니다</>,
      desc: '협찬·유료광고 표시가 붙는 순간 신뢰도가 급락. 전환율도 절반 이하로 떨어집니다.',
    },
    {
      number: '03',
      title: <>측정할 수 없는<br />브랜드 노출</>,
      desc: '게시 후 실제로 누가 사고 누가 봤는지 알 수 없습니다. 다음 마케팅 전략을 세울 데이터가 없습니다.',
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
          <h2 className="section-title">기존 인플루언서 마케팅의 문제</h2>
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

/* ─── How It Works ─── */
function HowItWorksSection() {
  const steps = [
    {
      n: '01',
      title: '상품 등록',
      desc: '공급사가 TAG 플랫폼에 상품을 등록합니다. 별도 협찬·샘플 발송 없이 평소 판매하던 상품 그대로.',
    },
    {
      n: '02',
      title: '인플루언서 실구매',
      desc: '나노 인플루언서가 본인 돈으로 상품을 구매합니다. 광고가 아닌 진짜 소비입니다.',
    },
    {
      n: '03',
      title: 'OOTD 게시 + 태그',
      desc: '구매한 상품을 OOTD에 입고 게시물에 태그합니다. 광고/협찬 표시 없이 진짜 후기로 노출됩니다.',
    },
    {
      n: '04',
      title: '인플루언서 마케팅 효과 및 판매 발생',
      desc: '게시물을 본 팔로워가 태그를 통해 구매. 자연스러운 마케팅이 시작됩니다.',
    },
  ];

  return (
    <section className="section-services partners-how">
      <div className="sp-container">
        <div className="section-header" style={{ marginTop: '40px' }}>
          <div className="pill-badge light" style={{ marginBottom: '16px' }}>How It Works</div>
          <h2 className="section-title">상품 한 번 등록으로<br />마케팅이 시작됩니다</h2>
        </div>

        <div className="how-grid">
          {steps.map((s, i) => (
            <div key={s.n} className="how-card">
              <div className="how-step-number en-font">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="how-connector">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  const stats = [
    {
      value: '20배',
      unit: 'ROI',
      label: '나노 인플루언서 마케팅 평균 ROI',
      desc: '$50 한 건 캠페인이 평균 $1,000 이상의 매출로 이어집니다. 메가 인플루언서 단가의 1/100 비용으로 시작해 동일하거나 더 높은 매출을 만들어냅니다.',
      color: 'stat-blue',
    },
    {
      value: '$5.78',
      unit: '',
      label: '1달러당 마케팅 수익',
      desc: '나노 인플루언서 마케팅에 1달러를 쓸 때 평균 $5.78의 매출이 발생합니다. 일반 디스플레이·검색 광고 평균(약 $2)의 2배 이상입니다.',
      color: 'stat-orange',
    },
    {
      value: '44%',
      unit: '',
      label: '브랜드의 나노 선호도',
      desc: '글로벌 브랜드 마케터의 44%가 메가·매크로 대신 나노 인플루언서를 우선 선택한다고 응답. 효율성과 진정성이 핵심 이유입니다.',
      color: 'stat-green',
    },
    {
      value: '92%',
      unit: '',
      label: '소비자의 추천 신뢰도',
      desc: '소비자 92%가 브랜드 광고보다 실제 사람의 추천을 더 신뢰합니다. 협찬·유료 표시가 없는 실구매 후기는 일반 광고 대비 4~5배 높은 전환율을 보입니다.',
      color: 'stat-pink',
    },
  ];

  return (
    <section className="section-stats">
      <div className="sp-container">
        <div className="section-header">
          <div className="pill-badge light" style={{ marginBottom: '16px' }}>Why Nano</div>
          <h2 className="section-title">나노 인플루언서가 만드는<br />압도적 마케팅 효율</h2>
          <p className="section-subtitle">
            전체 인플루언서의 65~70%가 나노 인플루언서. 가장 큰 비중을 차지하면서
            팔로워와의 높은 친밀도와 진정성을 기반으로 최고의 전환을 만들어냅니다.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className={`stat-card ${s.color}`}>
              <div className="stat-value en-font">
                {s.value}
                {s.unit && <span className="stat-unit"> {s.unit}</span>}
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="comparison-wrap">
          <h3 className="comparison-title">나노 인플루언서의 마케팅 효율</h3>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>지표</th>
                  <th><span className="tier-badge tier-nano">Nano</span><br /><span className="tier-sub">1K-10K</span></th>
                  <th><span className="tier-badge tier-macro">Macro</span><br /><span className="tier-sub">500K-1M</span></th>
                  <th><span className="tier-badge tier-mega">Mega</span><br /><span className="tier-sub">1M+</span></th>
                  <th className="col-highlight">나노 우위</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Instagram 참여율</td>
                  <td className="en-font">2.71%</td>
                  <td className="en-font dim">0.6%</td>
                  <td className="en-font dim">0.92%</td>
                  <td className="col-highlight"><span className="up-badge">4.5배 ↑</span></td>
                </tr>
                <tr>
                  <td>TikTok 참여율</td>
                  <td className="en-font">10.3%</td>
                  <td className="en-font dim">5.1%</td>
                  <td className="en-font dim">4.0%</td>
                  <td className="col-highlight"><span className="up-badge">2.6배 ↑</span></td>
                </tr>
                <tr>
                  <td>구매 전환율</td>
                  <td className="en-font">7%</td>
                  <td className="en-font dim">3%</td>
                  <td className="en-font dim">-</td>
                  <td className="col-highlight"><span className="up-badge">2.3배 ↑</span></td>
                </tr>
                <tr>
                  <td>스폰서 참여율</td>
                  <td className="en-font">48%</td>
                  <td className="en-font dim">26%</td>
                  <td className="en-font dim">-</td>
                  <td className="col-highlight"><span className="up-badge">1.8배 ↑</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="comparison-source">출처: Influencer Marketing Hub, HypeAuditor, Later 등 종합</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Early Benefits Section ─── */
function EarlyBenefitsSection() {
  const benefits = [
    {
      tag: 'EXCLUSIVE',
      title: '3만+ 팔로워 인플루언서까지 활용',
      desc: '초기 입점사에 한해 나노(1K~10K)뿐 아니라 팔로워 30,000명 이상의 마이크로·미드티어 인플루언서까지 매칭합니다. 일반 시장에서는 건당 수백만 원이 드는 협찬 채널을 무료로 활용하세요.',
      highlight: '평균 협찬비 200~500만원 절감 효과',
    },
    {
      tag: 'ZERO COST',
      title: '입점비·광고비 0원',
      desc: '초기 파트너에게는 입점 수수료, 월 광고비, 노출 비용 모두 면제됩니다. 상품 등록만으로 모든 마케팅 채널이 자동으로 열립니다.',
      highlight: '런칭 후 6개월 100% 무료',
    },
    {
      tag: 'DATA',
      title: '마케팅 데이터 리포트 제공',
      desc: '어떤 인플루언서가, 어떤 상품을, 어떤 게시물로 얼마나 팔았는지 모두 데이터로 받아보세요. 다음 시즌 기획에 바로 활용 가능한 인사이트입니다.',
      highlight: '주간·월간 리포트 자동 발송',
    },
  ];

  return (
    <section className="section-early">
      <div className="sp-container">
        <div className="early-wrap">
          <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 56px' }}>
            <div className="pill-badge" style={{ background: 'var(--accent)', color: 'var(--dark-surface)', marginBottom: '16px' }}>
              Early Partner Benefits
            </div>
            <h2 className="section-title" style={{ color: 'var(--text-inverse)' }}>
              지금 입점하면<br />이런 혜택이 추가됩니다
            </h2>
            <p className="early-subtitle">
              TAG는 초기 안정적인 상품 풀 확보를 위해 입점사에게 특별한 혜택을 제공합니다.
              한정된 기간, 한정된 수량의 입점사에게만 적용됩니다.
            </p>
          </div>

          <div className="early-grid">
            {benefits.map((b, i) => (
              <div key={b.title} className="early-card">
                <div className="early-card-tag en-font">
                  <span className="early-num en-font">{String(i + 1).padStart(2, '0')}</span>
                  {b.tag}
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <div className="early-highlight">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {b.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="section-cta sp-container">
      <div className="cta-card cta-creator partners-final-cta">
        <div>
          <div className="pill-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--accent)', marginBottom: '24px' }}>
            For Suppliers
          </div>
          <h2>지금 입점하고<br />진짜 후기 마케팅을 시작하세요</h2>
          <p>샘플 비용도, 월 광고비도 없습니다. 상품을 등록하면 우리가 인플루언서와 연결합니다.</p>
        </div>
        <button type="button" onClick={onOpenForm} className="btn btn-accent">
          공급사 입점 신청
          <div className="btn-icon">
            <ArrowIcon />
          </div>
        </button>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function PartnersFooter() {
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

/* ─── Partner Inquiry Modal ─── */
function PartnerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    company: '',
    manager: '',
    contact: '',
    email: '',
    category: '',
    monthly_volume: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const hasAny = Object.values(form).some((v) => v.trim().length > 0);
    if (!hasAny) {
      setStatus('error');
      return;
    }

    setSubmitting(true);
    setStatus('idle');

    try {
      const { error } = await supabase.from('partner_inquiries').insert([
        {
          company: form.company || null,
          manager: form.manager || null,
          contact: form.contact || null,
          email: form.email || null,
          category: form.category || null,
          monthly_volume: form.monthly_volume || null,
          message: form.message || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setForm({ company: '', manager: '', contact: '', email: '', category: '', monthly_volume: '', message: '' });
    } catch (err) {
      console.error('Partner inquiry error:', err);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="inquiry-modal-overlay" onClick={onClose}>
      <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="inquiry-modal-close" onClick={onClose} aria-label="닫기">
          <CloseIcon />
        </button>

        <h3 className="inquiry-modal-title">공급사 입점 신청</h3>
        <p className="inquiry-modal-desc">
          알고 계신 정보만 자유롭게 입력해주세요. 영업일 기준 2일 이내에 회신드립니다.
        </p>

        {status === 'success' ? (
          <div className="inquiry-success">
            <div className="inquiry-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <h4>입점 신청이 접수되었습니다</h4>
            <p>빠른 시일 내에 연락드리겠습니다.</p>
            <button className="btn btn-primary" onClick={onClose}>닫기</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="inquiry-row">
              <label className="inquiry-field">
                <span>회사명</span>
                <input name="company" value={form.company} onChange={handleChange} placeholder="(주)예시컴퍼니" />
              </label>
              <label className="inquiry-field">
                <span>담당자</span>
                <input name="manager" value={form.manager} onChange={handleChange} placeholder="홍길동" />
              </label>
            </div>

            <div className="inquiry-row">
              <label className="inquiry-field">
                <span>연락처</span>
                <input name="contact" value={form.contact} onChange={handleChange} placeholder="010-0000-0000" />
              </label>
              <label className="inquiry-field">
                <span>이메일</span>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@example.com" />
              </label>
            </div>

            <div className="inquiry-row">
              <label className="inquiry-field">
                <span>상품 카테고리</span>
                <select name="category" value={form.category} onChange={handleChange}>
                  <option value="">선택해주세요</option>
                  <option value="여성 의류">여성 의류</option>
                  <option value="남성 의류">남성 의류</option>
                  <option value="신발">신발</option>
                  <option value="가방·잡화">가방·잡화</option>
                  <option value="액세서리">액세서리</option>
                  <option value="뷰티">뷰티</option>
                  <option value="기타">기타</option>
                </select>
              </label>
              <label className="inquiry-field">
                <span>월 출고 가능량</span>
                <select name="monthly_volume" value={form.monthly_volume} onChange={handleChange}>
                  <option value="">선택해주세요</option>
                  <option value="100건 이하">100건 이하</option>
                  <option value="100~500건">100~500건</option>
                  <option value="500~1000건">500~1000건</option>
                  <option value="1000~5000건">1000~5000건</option>
                  <option value="5000건 이상">5000건 이상</option>
                </select>
              </label>
            </div>

            <label className="inquiry-field">
              <span>추가 메시지</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="궁금하신 점이나 전달하고 싶은 내용을 자유롭게 작성해주세요."
              />
            </label>

            {status === 'error' && (
              <p className="inquiry-error">최소 한 개 이상의 항목을 입력해주세요.</p>
            )}

            <button type="submit" className="btn btn-primary inquiry-submit" disabled={submitting}>
              {submitting ? '전송 중...' : '신청하기'}
              {!submitting && (
                <div className="btn-icon">
                  <ArrowIcon />
                </div>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function PartnersPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="service-page partners-page">
      <PartnersNav />
      <HeroSection onOpenForm={() => setFormOpen(true)} />
      <ProblemSection />
      <HowItWorksSection />
      <StatsSection />
      <EarlyBenefitsSection />
      <FinalCTA onOpenForm={() => setFormOpen(true)} />
      <PartnersFooter />
      <PartnerModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}

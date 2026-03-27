'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CorporateNav from '@/components/CorporateNav';

/* ─── Intersection Observer hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/* ─── Count-up hook ─── */
function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return count;
}

/* ─── SVG Icons ─── */
function CodeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#EEF2FF" />
      <path d="M16 14L10 20L16 26" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 14L30 20L24 26" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12L18 28" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#EEF2FF" />
      <path d="M20 10C16.134 10 13 13.134 13 17C13 19.39 14.2 21.5 16 22.74V25C16 25.55 16.45 26 17 26H23C23.55 26 24 25.55 24 25V22.74C25.8 21.5 27 19.39 27 17C27 13.134 23.866 10 20 10Z" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 29H23" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 32H22" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#EEF2FF" />
      <path d="M28 12L16 17H12C11.45 17 11 17.45 11 18V22C11 22.55 11.45 23 12 23H16L28 28V12Z" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 23V28C16 28.55 16.45 29 17 29H19C19.55 29 20 28.55 20 28V23" stroke="#2A50FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M22 7L12 13L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 11L12 6L14 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 11L12 6L10 8L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 17L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 17L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 18L12 15L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 16.5C3 18 3 21 3 21C3 21 6 21 7.5 19.5C8.33 18.67 8.33 17.33 7.5 16.5C6.67 15.67 5.33 15.67 4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 4C14.5 4 18 2 21 3C22 6 20 9.5 20 9.5L11 18.5L5.5 13L14.5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

/* ─── Section: Hero ─── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07163D]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07163D] via-[#0d2157] to-[#162d6b]" />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Image
            src="/TAG_Logo_white.png"
            alt="TAG"
            width={120}
            height={48}
            className="h-10 lg:h-12 w-auto mx-auto mb-10"
          />
        </div>

        <h1
          className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          신뢰 위에 가치를 더합니다
        </h1>

        <p
          className={`text-base md:text-lg lg:text-xl text-white/70 mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          개발, 마케팅, 기획. 세 가지 역량으로 서비스를 직접 만듭니다.
        </p>

        <Link
          href="/pre-registration"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm font-medium hover:bg-white/10 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#2A50FB] animate-pulse" />
          Our Service — Coming Soon
        </Link>
      </div>
    </section>
  );
}

/* ─── Section: Vision & Roadmap ─── */
function VisionSection() {
  const section = useReveal();

  const phases = [
    {
      phase: 'Phase 1',
      year: '2025',
      title: '예비창업패키지 선정',
      desc: '예비창업패키지 선정 및 법인 설립. 자체 서비스 런칭과 초기 시장 검증을 시작합니다.',
      active: true,
    },
    {
      phase: 'Phase 2',
      year: '2026',
      title: '투자 유치 및 서비스 런칭',
      desc: '검증된 역량을 기반으로 투자를 유치하고, 본격적인 서비스 런칭과 사업 확장을 추진합니다.',
      active: false,
    },
    {
      phase: 'Phase 3',
      year: '2027~',
      title: '글로벌 진출',
      desc: '카테고리를 확장하고 글로벌 시장 진출을 본격적으로 검토합니다.',
      active: false,
    },
  ];

  return (
    <section id="vision" className="py-24 lg:py-32 bg-white">
      <div
        ref={section.ref}
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#2A50FB] tracking-wide mb-3">VISION & ROADMAP</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#07163D] mb-6">
            우리가 만들어가는 것들
          </h2>
          <p className="text-base md:text-lg text-[#6A7282] max-w-3xl mx-auto leading-relaxed">
            우리는 직접 서비스를 만들며 시장을 경험했습니다. 그 과정에서 쌓은 개발, 기획, 마케팅 역량으로
            단기 수익을 넘어 장기적인 성장을 만들어갑니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {phases.map((p, i) => (
              <div
                key={p.phase}
                className={`relative transition-all duration-700 delay-${i * 150} ${
                  section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: section.visible ? `${i * 150}ms` : '0ms' }}
              >
                {/* Dot */}
                <div className="hidden md:flex items-center justify-center mb-8">
                  <div
                    className={`w-3 h-3 rounded-full ring-4 ${
                      p.active
                        ? 'bg-[#2A50FB] ring-[#2A50FB]/20'
                        : 'bg-gray-300 ring-gray-100'
                    }`}
                  />
                </div>

                <div
                  className={`p-5 rounded-2xl border transition-colors h-full flex flex-col ${
                    p.active
                      ? 'border-[#2A50FB]/20 bg-[#F5F6FF]'
                      : 'border-gray-100 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold ${p.active ? 'text-[#2A50FB]' : 'text-gray-400'}`}>
                      {p.phase}
                    </span>
                    <span className={`text-xs ${p.active ? 'text-[#07163D]' : 'text-gray-400'}`}>
                      {p.year}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#07163D] mb-1">{p.title}</h3>
                  <p className="text-sm text-[#6A7282] leading-relaxed flex-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Core Capabilities ─── */
function CapabilitiesSection() {
  const section = useReveal();

  const cards = [
    {
      icon: <CodeIcon />,
      title: '개발',
      desc: '웹사이트, 쇼핑몰, 앱 등 풀스택 개발 역량 보유. 기획부터 배포까지 자체적으로 수행합니다.',
    },
    {
      icon: <LightbulbIcon />,
      title: '기획',
      desc: '예비창업패키지 등 국가사업 수주 경험. 사업화 전략과 투자 유치 역량을 갖추고 있습니다.',
    },
    {
      icon: <MegaphoneIcon />,
      title: '마케팅',
      desc: '콘텐츠 기획, 퍼포먼스 마케팅, 브랜딩까지. 직접 운영한 마케팅 전략을 보유합니다.',
    },
  ];

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-[#F8F9FC]">
      <div
        ref={section.ref}
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#2A50FB] tracking-wide mb-3">CORE CAPABILITIES</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#07163D]">
            세 가지 힘으로 실행합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: section.visible ? `${i * 120}ms` : '0ms' }}
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-lg font-bold text-[#07163D] mb-3">{card.title}</h3>
              <p className="text-sm text-[#6A7282] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Achievements ─── */
function AchievementsSection() {
  const section = useReveal();

  const stats = [
    { label: '외주 수행 프로젝트', value: 5, suffix: '건' },
    { label: '공모전·국가사업 선정', value: 2, suffix: '건' },
    { label: '컴퍼니빌더 프로그램', value: 1, suffix: '기' },
  ];

  return (
    <section id="achievements" className="py-24 lg:py-32 bg-white">
      <div
        ref={section.ref}
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#2A50FB] tracking-wide mb-3">ACHIEVEMENTS</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#07163D]">
            숫자로 증명합니다
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} visible={section.visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  visible,
}: {
  stat: { label: string; value: number; suffix: string };
  index: number;
  visible: boolean;
}) {
  const count = useCountUp(stat.value, 1500, visible);

  return (
    <div
      className={`text-center p-10 rounded-2xl bg-[#F8F9FC] border border-gray-100 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="text-5xl lg:text-6xl font-bold text-[#07163D] mb-3">
        {count}
        <span className="text-2xl lg:text-3xl text-[#2A50FB] ml-1">{stat.suffix}</span>
      </div>
      <p className="text-sm text-[#6A7282] font-medium">{stat.label}</p>
    </div>
  );
}

/* ─── Section: News & Media ─── */
function NewsSection() {
  const section = useReveal();

  return (
    <section id="news" className="py-24 lg:py-32 bg-[#F8F9FC]">
      <div
        ref={section.ref}
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#2A50FB] tracking-wide mb-3">NEWS & MEDIA</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#07163D]">
            우리의 이야기를 직접 확인하세요
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Real article card */}
          <a
            href="https://www.venturesquare.net/1064584/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group block rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-all duration-500 ${
              section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: section.visible ? '0ms' : '0ms' }}
          >
            {/* Thumbnail */}
            <div className="relative h-48 bg-gradient-to-br from-[#07163D] to-[#243B7A] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(42,80,251,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(141,22,250,0.3) 0%, transparent 50%)',
              }} />
              <Image
                src="/TAG_Logo_white.png"
                alt="TAG"
                width={80}
                height={32}
                className="h-8 w-auto opacity-60 group-hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="p-5">
              <span className="inline-block text-xs font-semibold text-[#2A50FB] mb-2">벤처스퀘어</span>
              <h3 className="text-sm font-bold text-[#07163D] leading-snug group-hover:text-[#2A50FB] transition-colors line-clamp-3">
                팔로워보다 중요한 건 실제 구매... 류태규 대표가 설계한 예비 인플루언서 플랫폼, 태그
              </h3>
            </div>
          </a>

          {/* Placeholder cards */}
          {[0, 1].map((i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden bg-white border border-gray-100 flex flex-col items-center justify-center p-10 transition-all duration-500 ${
                section.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: section.visible ? `${(i + 1) * 120}ms` : '0ms' }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 7H16M4 10H12M4 13H14" stroke="#C0C5CE" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm text-[#6A7282] text-center">더 많은 소식이<br />준비되고 있습니다</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Footer ─── */
function CorporateFooter() {
  return (
    <footer id="contact" className="bg-[#07163D] text-white">
      {/* CTA Row */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3 text-white/80">
              <MailIcon />
              <h3 className="text-base font-bold text-white">외주 개발 문의</h3>
            </div>
            <p className="text-sm text-white/50 mb-4">웹·앱 개발, 마케팅 프로젝트를 의뢰하세요.</p>
            <a
              href="mailto:tag_official@tags.kr?subject=외주 개발 문의"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              문의하기
            </a>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3 text-white/80">
              <HandshakeIcon />
              <h3 className="text-base font-bold text-white">투자·파트너 문의</h3>
            </div>
            <p className="text-sm text-white/50 mb-4">투자 및 사업 협력에 관심 있으신 분은 연락주세요.</p>
            <a
              href="mailto:tag_official@tags.kr?subject=투자·파트너 문의"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              문의하기
            </a>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3 text-white/80">
              <RocketIcon />
              <h3 className="text-base font-bold text-white">서비스 문의</h3>
            </div>
            <p className="text-sm text-white/50 mb-4">TAG 서비스에 대해 더 알아보세요.</p>
            <Link
              href="/pre-registration"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              사전예약 바로가기
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/TAG_Logo_white.png"
              alt="TAG"
              width={60}
              height={24}
              className="h-5 w-auto opacity-60"
            />
            <span className="text-xs text-white/40">
              &copy; 2025 주식회사 태그. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">개인정보처리방침</a>
            <span>|</span>
            <a href="#" className="hover:text-white/60 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <CorporateNav />
      <HeroSection />
      <VisionSection />
      <CapabilitiesSection />
      <AchievementsSection />
      <NewsSection />
      <CorporateFooter />
    </div>
  );
}

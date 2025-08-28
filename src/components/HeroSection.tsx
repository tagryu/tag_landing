'use client';

import { useState, useEffect } from 'react';
import { trackCTAClick } from '@/components/GoogleAnalyticsEvents';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* 배경 비디오 */}
      <div className="absolute inset-0">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero_section.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between z-10">
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className={`transform transition-all duration-1000 text-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-8 leading-tight">
              <span className="sm:hidden">팔로워 · 좋아요와 상관없이<br/>누구나 수익을!</span>
              <span className="hidden sm:inline">팔로워 · 좋아요와 상관없이, 누구나 수익을!</span>
            </h1>
            
            {/* CTA 버튼 - 메인 타이틀 아래 위치 */}
            <button 
            onClick={() => {
              trackCTAClick('hero_cta_얼리버드신청');
              document.getElementById('pre-registration')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-4 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-semibold text-white wave-button rounded-full hover:shadow-lg transition-all duration-300 inline-block relative cursor-pointer"
          >
            <span className="relative z-10">🔥 OOTD로 수익낼 얼리버드 절찬리 모집중! <span className="text-yellow-300">딱 9/30까지</span></span>
          </button>
          
          <p className="text-white/90 text-sm sm:text-base mt-4 font-bold">
            일찍 시작할수록 더 많은 수익 기회!
          </p>
{/*             
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              <span className="block sm:hidden">내가 언젠가 촬영한 콘텐츠를 공유</span>
              <span className="hidden sm:block">
                내 게시물에 태그된 상품을 다른 사람이 구매할 땐 상품 금액의 5%를 리워드로,<br />
                다른 사람의 게시물에 태그된 상품을 구매할 땐 5% 할인을 받아요.
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
      
      <div className="container mx-auto px-6 py-20 text-center z-10 max-w-6xl">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            당신의 모든 컨텐츠가 수익이 되는 태그
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
            내 게시물에 태그된 상품을 다른 사람이 구매할 땐 상품 금액의 5%를 리워드로,<br />
            다른 사람의 게시물에 태그된 상품을 구매할 땐 5% 할인을 받아요.
          </p>
          
          {/* CTA 버튼 */}
          <div className="flex justify-center">
            <button 
              onClick={() => document.getElementById('pre-registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#155DFC] to-[#9810FA] rounded-full hover:shadow-lg transition-all duration-300"
            >
              가장 먼저 경험하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
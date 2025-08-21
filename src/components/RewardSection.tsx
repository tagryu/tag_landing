'use client';

import { useEffect, useRef, useState } from 'react';

export default function RewardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-white flex items-center justify-center py-16 sm:py-20" 
      style={{ minHeight: '819px' }}
    >
      <div className="container mx-auto px-6 sm:px-6 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className={`font-bold text-[#07163D] mb-4 transition-all duration-1000 text-2xl sm:text-5xl px-4 sm:px-0 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Pretendard', transitionDelay: '200ms' }}
          >
            어차피하는 SNS, 그리고 쇼핑
          </h2>
          <h2 
            className={`font-bold text-[#07163D] mb-6 sm:mb-8 transition-all duration-1000 text-2xl sm:text-5xl px-4 sm:px-0 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Pretendard', transitionDelay: '400ms' }}
          >
            아무런 리워드 없이 하기엔 아깝잖아요.
          </h2>
          <div className={`transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
          >
            <p className="text-gray-600 mb-1 px-4 sm:px-0 text-base sm:text-xl" style={{ fontFamily: 'Pretendard' }}>
              팔로워나 좋아요 수에 상관없이,
            </p>
            <p className="text-gray-600 px-4 sm:px-0 text-base sm:text-xl" style={{ fontFamily: 'Pretendard' }}>
              누구나 수익을 만들 수 있어요.
            </p>
          </div>
        </div>

        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {/* 기존 SNS */}
          <div className="bg-[#A8B5CC] rounded-3xl p-8 sm:p-12 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <img 
                src="/Heart.png" 
                alt="Heart" 
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            </div>
            <p className="text-white mb-3 sm:mb-4 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
              &apos;좋아요, 팔로워&apos;가 전부였던
            </p>
            <h3 className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'Pretendard' }}>
              기존 SNS
            </h3>
          </div>

          {/* Picksell */}
          <div className="bg-[#243B7A] rounded-3xl p-8 sm:p-12 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span className="text-2xl sm:text-4xl">💰</span>
            </div>
            <p className="text-white mb-3 sm:mb-4 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
              태그한 상품 금액의 5%씩 쌓이는
            </p>
            <div className="mb-2">
              <img 
                src="/logo_picksell_rewardsection.svg" 
                alt="xpicksell" 
                className="h-5 sm:h-6 mx-auto"
              />
            </div>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Pretendard' }}>
              (1,000원 이상 출금 가능)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
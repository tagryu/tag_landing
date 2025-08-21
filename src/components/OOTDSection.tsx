'use client';

import { useEffect, useRef, useState } from 'react';

export default function OOTDSection() {
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
      className="bg-[#F5F6FF] py-16 sm:py-20" 
      style={{ minHeight: '600px' }}
    >
      <div className="container mx-auto px-6 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className={`font-bold text-[#07163D] transition-all duration-1000 text-2xl sm:text-5xl px-4 sm:px-0 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Pretendard', transitionDelay: '200ms' }}
          >
            OOTD가 돈이 되는 가장 쉬운 방법.
          </h2>
        </div>

        {/* 상품 구매 & 게시물 업로드 섹션 */}
        <div className="mb-12 sm:mb-20">
          <div className="flex justify-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-32">
              <div 
                className={`text-left lg:text-left transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <p className="text-[#07163D] mb-4 px-4 sm:px-0 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
                  상품 구매 & 게시물 업로드
                </p>
                <h3 className="font-bold text-[#07163D] leading-tight text-2xl sm:text-5xl px-4 sm:px-0" style={{ fontFamily: 'Pretendard', lineHeight: '1.2' }}>
                  마음에 드는 상품을 구매하고<br/>
                  상품을 태그해 게시물을 올려요
                </h3>
                <p className="text-gray-600 leading-relaxed mt-4 px-4 sm:px-0 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
                  내가 고른 상품, 나만의 무드를 담아 게시물을 올리면 나와 비슷한 취향을<br className="hidden sm:block"/>
                  가진 사람들에게 더 자주 노출되요.
                </p>
              </div>

              {/* 폰 이미지 1, 2 */}
              <div 
                className={`flex gap-4 sm:gap-8 flex-shrink-0 mx-auto lg:mx-0 transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="relative">
                  <div className="w-[120px] h-[260px] sm:w-[196px] sm:h-[387px] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src="/phone1.jpg" 
                        alt="OOTD 게시물 1" 
                        className="w-full h-full object-cover object-bottom"
                      />
                  </div>
                </div>
                <div className="relative mt-4 sm:mt-8">
                  <div className="w-[120px] h-[260px] sm:w-[196px] sm:h-[387px] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src="/phone2.jpg" 
                        alt="OOTD 게시물 2" 
                        className="w-full h-full object-cover object-bottom"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 타인 구매 & 리워드 지급 섹션 */}
        <div>
          <div className="flex justify-center">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-32">
              <div 
                className={`text-left lg:text-left transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <p className="text-[#07163D] mb-4 px-4 sm:px-0 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
                  타인 구매 & 리워드 지급
                </p>
                <h3 className="font-bold text-[#07163D] leading-tight text-2xl sm:text-5xl px-4 sm:px-0" style={{ fontFamily: 'Pretendard', lineHeight: '1.2' }}>
                  내가 태그한 상품을 다른 사람<br/>
                  이 구매하면, 리워드 지급!
                </h3>
                <p className="text-gray-600 leading-relaxed mt-4 px-4 sm:px-0 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
                  내 게시물에 태그된 상품을 누군가가 구매할 때 마다 상품 가격의 5%를 리워<br className="hidden sm:block"/>
                  드로 지급해요. (단, 1,000원 이상 출금 가능)
                </p>
              </div>

              {/* 폰 이미지 3, 4 */}
              <div 
                className={`flex gap-4 sm:gap-8 flex-shrink-0 mx-auto lg:mx-0 transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="relative">
                  <div className="w-[120px] h-[260px] sm:w-[196px] sm:h-[387px] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src="/phone3.jpg" 
                        alt="리워드 확인 1" 
                        className="w-full h-full object-cover object-bottom"
                      />
                  </div>
                </div>
                <div className="relative mt-4 sm:mt-8">
                  <div className="w-[120px] h-[260px] sm:w-[196px] sm:h-[387px] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                      <img 
                        src="/phone4.jpg" 
                        alt="리워드 확인 2" 
                        className="w-full h-full object-cover object-bottom"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
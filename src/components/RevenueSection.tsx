'use client';

import { useEffect, useRef, useState } from 'react';

export default function RevenueSection() {
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
      id="picksel-intro"
      ref={sectionRef}
      className="bg-[#F5F6FF] flex items-center justify-center py-16 sm:py-20 min-h-[400px] sm:min-h-[812px]"
    >
      <div className="container mx-auto px-6 sm:px-6 max-w-6xl">
        <div className="text-center">
          <h2 
            className={`font-bold text-[#07163D] leading-tight transition-all duration-1000 px-4 sm:px-0 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              fontFamily: 'Pretendard',
              lineHeight: '1.3',
              fontSize: 'clamp(1.5rem, 5vw, 2.625rem)' // 24px ~ 42px
            }}
          >
            <span className="sm:hidden">
              내가 게시물을 통해 상품이<br/>
              팔릴 때 마다 5%를 리워드로,<br/>
              <br/>
              <br/>
              다른 사람이 태그한 상품을<br/>
              살 때마다 5%를 할인 받아요.
            </span>
            <span className="hidden sm:inline">
              내가 게시물을 통해 상품이 팔릴 때 마다 5%를 리워드로,<br/>
              다른 사람이 태그한 상품을 살 때마다 5%를 할인 받아요.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
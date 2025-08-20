'use client';

import { useEffect, useRef, useState } from 'react';

export default function EarlyBirdSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    instagram: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-white flex items-center justify-center" 
      style={{ minHeight: '1140px' }}
    >
      <div className="container mx-auto px-6 sm:px-6 max-w-7xl py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className={`font-bold text-[#07163D] mb-4 transition-all duration-1000 text-2xl sm:text-5xl px-4 sm:px-0 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Pretendard', transitionDelay: '200ms' }}
          >
            <span className="sm:hidden">얼리버드를 위한<br/>두가지 특별한 혜택</span>
            <span className="hidden sm:inline">얼리버드를 위한 두가지 특별한 혜택</span>
          </h2>
          <p 
            className={`text-gray-600 transition-all duration-1000 text-base sm:text-lg px-4 sm:px-0 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Pretendard', transitionDelay: '400ms' }}
          >
            이 혜택은 9월 30일 마감됩니다.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32">
            {/* 왼쪽 - 혜택 */}
            <div 
              className={`transition-all duration-1000 text-center lg:text-left ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {/* 혜택 1 */}
              <div className="mb-8 sm:mb-12">
                <div className="text-white rounded-full text-sm font-bold inline-block mb-3" style={{ backgroundColor: '#2A50FB', width: '79px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  혜택 1
                </div>
                <h4 className="font-bold text-[#07163D] mb-2 text-xl sm:text-3xl px-4 sm:px-0" style={{ fontFamily: 'Pretendard' }}>
                  지원금 3만원.
                </h4>
                <p className="text-gray-600 leading-relaxed px-4 sm:px-0 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
                  <span className="sm:hidden">당신의 첫 콘텐츠를 응원하며<br/>3만원의 쇼핑 지원금을 선물로 드려요.</span>
                  <span className="hidden sm:inline">당신의 첫 콘텐츠를 응원하며<br/>3만원의 쇼핑 지원금을 선물로 드려요.</span>
                </p>
              </div>

              {/* 혜택 2 */}
              <div>
                <div className="text-white rounded-full text-sm font-bold inline-block mb-3" style={{ backgroundColor: '#8D16FA', width: '79px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  혜택 2
                </div>
                <h4 className="font-bold text-[#07163D] mb-2 text-xl sm:text-3xl px-4 sm:px-0" style={{ fontFamily: 'Pretendard' }}>
                  더 높은 리워드.
                </h4>
                <p className="text-gray-600 leading-relaxed px-4 sm:px-0 text-base sm:text-lg" style={{ fontFamily: 'Pretendard' }}>
                  <span className="sm:hidden">누구보다 빨랐던 당신과 2025년 내내 <br/>7%의 리워드로 함께 할게요.</span>
                  <span className="hidden sm:inline">누구보다 빨랐던 당신과 2025년 내내 7%의 리워드로 함께 할게요.</span>
                </p>
              </div>
            </div>

            {/* 오른쪽 - 입력폼 */}
            <div 
              className={`bg-white rounded-3xl shadow-2xl p-6 sm:p-10 flex-shrink-0 transition-all duration-1000 w-full max-w-[450px] ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <h3 className="text-center font-bold text-[#07163D] mb-6 sm:mb-8 text-lg sm:text-2xl" style={{ fontFamily: 'Pretendard' }}>
                특별한 혜택, 지금 바로 예약할까요?
              </h3>

              {/* 폼 */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-[#07163D] mb-2 text-sm" style={{ fontFamily: 'Pretendard' }}>
                    이름
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="닉네임도 괜찮아요 :)"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
                    style={{ fontFamily: 'Pretendard' }}
                  />
                </div>

                <div>
                  <label className="block text-[#07163D] mb-2 text-sm" style={{ fontFamily: 'Pretendard' }}>
                    연락처 or Email
                  </label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    placeholder="010-0000-0000 / email@email.com"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
                    style={{ fontFamily: 'Pretendard' }}
                  />
                </div>

                <div>
                  <label className="block text-[#07163D] mb-2 text-sm" style={{ fontFamily: 'Pretendard' }}>
                    인스타그램 계정
                  </label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                    placeholder="@yourinstagram"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
                    style={{ fontFamily: 'Pretendard' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 rounded-4xl font-bold text-white transition-all hover:shadow-lg mt-4 sm:mt-6 text-sm sm:text-base"
                  style={{ 
                    fontFamily: 'Pretendard', 
                    background: 'linear-gradient(to right, #2A50FB, #8D16FA)'
                  }}
                >
                  얼리버드 예약하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
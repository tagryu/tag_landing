'use client';

import { useState, useEffect, useRef } from 'react';

export default function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">
            무엇이 다른가요?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-200">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">❤️</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">기존 SNS</h3>
                      <p className="text-gray-600">
                        &apos;좋아요&apos;로만 끝나던<br />
                        나의 콘텐츠
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="flex justify-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-75"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-150"></div>
                      </div>
                      <p className="text-sm text-gray-500">좋아요 123개</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg border-2 border-blue-200">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl text-white">💰</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">TAG에서는</h3>
                      <p className="text-gray-700 font-medium">
                        수익이 발생합니다
                      </p>
                    </div>
                    <div className="pt-4">
                      <div className="bg-green-100 rounded-full py-2 px-4 mb-4">
                        <p className="text-green-700 font-semibold">+₩5,000</p>
                      </div>
                      <p className="text-sm text-gray-600">리워드 적립</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  당신도 인플루언서처럼 수익을 얻을 수 있어요
                </h3>
                <p className="text-blue-100 text-lg">
                  팔로워 수나 좋아요 수에 상관없이, 누구나 콘텐츠로 수익을 만들 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
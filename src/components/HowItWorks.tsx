'use client';

import { useState, useEffect, useRef } from 'react';

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: 1,
      title: "상품을 구매하고",
      description: "마음에 드는 상품을 구매합니다",
      icon: "🛍️",
      color: "from-pink-500 to-rose-500"
    },
    {
      number: 2,
      title: "상품을 태그하여 사진을 업로드",
      description: "구매한 상품을 태그하여 멋진 사진을 올려보세요",
      icon: "📸",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 3,
      title: "5% 수익 지급!",
      description: "다른 사용자가 태그를 통해 구매하면 수익이 발생합니다",
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    }
  ];

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, steps.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            어떻게 작동하나요?
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            구매와 콘텐츠가 연결되는, 새로운 커머스 구조
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } ${activeStep === index ? 'scale-105' : 'scale-100'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`bg-gradient-to-br ${step.color} p-8 rounded-3xl text-white shadow-2xl h-80 flex flex-col justify-between ${
                    activeStep === index ? 'shadow-3xl ring-4 ring-blue-300' : ''
                  } transition-all duration-500`}>
                    <div className="flex flex-col items-center">
                      <div className="text-6xl mb-6">{step.icon}</div>
                      <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                        <span className="text-2xl font-bold">{step.number}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4 h-14 flex items-center justify-center px-2">{step.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed px-2 break-keep h-12 flex items-center justify-center">{step.description}</p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600">→</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className={`mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  구매와 콘텐츠가 연결되는, 새로운 커머스 구조
                </h3>
                <p className="text-gray-600 text-lg">
                  단순히 광고를 보여주는 것이 아닌, 실제 구매 경험을 바탕으로 한 진정성 있는 추천으로 모두가 윈-윈할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
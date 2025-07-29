'use client';

import { useState, useEffect, useRef } from 'react';

export default function RevenueFlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const flowSteps = [
    { 
      title: "상품 구매", 
      icon: "🛍️", 
      description: "원하는 상품을 구매합니다",
      color: "bg-pink-500"
    },
    { 
      title: "태그 & 게시", 
      icon: "📱", 
      description: "상품을 태그하여 사진을 업로드합니다",
      color: "bg-blue-500"
    },
    { 
      title: "타인 구매", 
      icon: "👥", 
      description: "다른 사용자가 태그를 보고 구매합니다",
      color: "bg-purple-500"
    },
    { 
      title: "리워드 수익", 
      icon: "💰", 
      description: "5% 리워드를 받습니다",
      color: "bg-green-500"
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
        setCurrentStep((prev) => (prev + 1) % flowSteps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, flowSteps.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            수익은 어떻게 생기나요?
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            한눈에 보이는 리워드 플로우
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                {flowSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div
                      className={`relative transform transition-all duration-500 ${
                        currentStep === index ? 'scale-110' : 'scale-100'
                      } ${
                        currentStep >= index ? 'opacity-100' : 'opacity-60'
                      }`}
                    >
                      <div
                        className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl ${
                          step.color
                        } ${
                          currentStep === index ? 'animate-pulse ring-4 ring-white shadow-3xl' : ''
                        } transition-all duration-500`}
                      >
                        {step.icon}
                      </div>
                      
                      {currentStep === index && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${
                        currentStep >= index ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm mt-2 max-w-32 transition-colors duration-300 ${
                        currentStep >= index ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                    
                    {index < flowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-16">
                        <div className={`h-0.5 transition-all duration-500 ${
                          currentStep > index ? 'bg-green-400' : 'bg-gray-300'
                        }`}>
                          <div
                            className={`h-full bg-green-400 transition-all duration-1000 ${
                              currentStep > index ? 'w-full' : 'w-0'
                            }`}
                          ></div>
                        </div>
                        <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 transition-colors duration-500 ${
                          currentStep > index ? 'text-green-400' : 'text-gray-300'
                        }`}>
                          →
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {currentStep === flowSteps.length - 1 && (
                <div className={`mt-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-200">
                    <div className="text-center">
                      <div className="text-4xl mb-4">🎉</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        리워드 완료!
                      </h3>
                      <div className="bg-green-100 rounded-full py-3 px-6 inline-block mb-4">
                        <span className="text-green-700 font-bold text-xl">+₩2,500</span>
                      </div>
                      <p className="text-gray-600">
                        구매 금액의 5%가 리워드로 지급되었습니다
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className={`mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl mb-4">⚡</div>
                  <h4 className="font-bold text-gray-900 mb-2">즉시 지급</h4>
                  <p className="text-sm text-gray-600">구매 확정 시 바로 리워드가 적립됩니다</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl mb-4">📊</div>
                  <h4 className="font-bold text-gray-900 mb-2">실시간 추적</h4>
                  <p className="text-sm text-gray-600">태그별 수익을 실시간으로 확인할 수 있습니다</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl mb-4">💳</div>
                  <h4 className="font-bold text-gray-900 mb-2">간편 출금</h4>
                  <p className="text-sm text-gray-600">언제든지 간편하게 출금할 수 있습니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useState } from 'react';

export default function RewardSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { number: 1, title: '상품 구매', description: '마음에 드는 상품 구매' },
    { number: 2, title: '콘텐츠 업로드', description: '구매한 상품을 태그해 콘텐츠 업로드' },
    { number: 3, title: '타인 구매', description: '내 콘텐츠 게시물에 태그된 상품을 다른 사람이 구매' },
    { number: 4, title: '리워드 지급', description: '구매가 발생한 상품 가격의 5%를 리워드로 지급\n(단, 1,000원 이상 출금 가능)' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F5F6FF]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#07163D] mb-4 sm:mb-6">
            진짜 리워드를 드려요
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            단순한 쇼핑을 넘어 취향으로 연결되는 경험
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            진짜 후기, 진짜 구매, 그리고 진짜 리워드.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Steps */}
          <div className="flex-1 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-6 sm:mb-8 text-center lg:text-left">
              리워드 받는 법, 알려드릴게요.
            </h3>
            
            <div className="space-y-6 sm:space-y-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 ${
                    activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-40 translate-x-2'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base transition-all duration-500 ${
                      activeStep === index ? 'bg-[#243B7A] scale-110' : 'bg-gray-300'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-base sm:text-lg mb-1 transition-colors duration-500 ${
                      activeStep === index ? 'text-[#243B7A]' : 'text-[#1a1a1a]'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex-shrink-0 mt-8 lg:mt-0">
            <div className="relative mx-auto" style={{ width: '240px' }}>
              {/* Light gray phone frame with rounded corners */}
              <div className="bg-gray-200 rounded-[2.5rem] p-2 shadow-lg">
                {/* White phone screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden" style={{ height: '480px' }}>
                  <div className="p-4">
                    {/* Content will be added later */}
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
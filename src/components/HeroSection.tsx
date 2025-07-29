'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20 text-center z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            당신의 스타일,<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              수익이 됩니다
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            사진에 상품을 태그하면, 누군가 구매할 때마다 수익이 쌓입니다
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            좋아요만 받던 SNS 콘텐츠, 이제 수익의 시작점이 됩니다<br />
            지금, 가장 먼저 TAG를 경험하세요
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <span className="relative z-10">사전 신청하기</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="text-sm text-gray-500 mt-4">
            사전 신청자에게는 상위 노출 뱃지를 드립니다
          </p>
        </div>
        
        <div className={`mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      TAG
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-sm font-medium text-gray-900">상품명</div>
                      <div className="text-xs text-gray-600">5% 리워드</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2 mt-1"></div>
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
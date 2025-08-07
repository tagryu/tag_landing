'use client';

import { useState } from 'react';

export default function ChoiceSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* 일반 SNS 카드 */}
          <div 
            className="relative bg-white rounded-3xl p-8 border-2 border-[#E5E7EB] hover:shadow-xl transition-all duration-300"
            onMouseEnter={() => setHoveredCard('sns')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#F3F4F6] rounded-full mb-6">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V10H11V11H10V12H9V13H8V14H7V15H6V16H5V17H4V18H3V19H2V20H0V19H1V18H2V17H3V16H4V15H5V14H6V13H7V12H8V11H9V10H10V9H12Z" fill="black"/>
                <path d="M11 9V10H12V11H13V12H14V13H15V14H16V15H17V16H18V17H19V18H20V19H21V20H23V19H22V18H21V17H20V16H19V15H18V14H17V13H16V12H15V11H14V10H13V9H11Z" fill="black"/>
              </svg>
            </div>

            <h3 className="text-xl font-bold text-[#07163D] mb-2">일반 SNS</h3>
            <p className="text-[#6A7282] mb-8">
              좋아요와 댓글은 늘어나지만<br />
              수익은 0원
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#E5E7EB" strokeWidth="2"/>
                </svg>
                <p className="text-[#6A7282]">열심히 올려도 수익 없음</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#E5E7EB" strokeWidth="2"/>
                </svg>
                <p className="text-[#6A7282]">팔로워와 수익 무관</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#E5E7EB" strokeWidth="2"/>
                </svg>
                <p className="text-[#6A7282]">브랜드 광고 의존</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
              <p className="text-3xl font-bold text-[#E5E7EB]">월 0원</p>
              <p className="text-sm text-[#6A7282] mt-1">팔로워 10K</p>
            </div>
          </div>

          {/* TAG 카드 */}
          <div 
            className="relative bg-white rounded-3xl p-8 border-2 border-[#E5E7EB] hover:shadow-xl transition-all duration-300"
            onMouseEnter={() => setHoveredCard('tag')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#F3F4F6] rounded-full mb-6">
              <div className="relative w-14 h-14">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" alt="TAG" className="w-full h-full rounded-full object-cover" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                    <path d="M6 1L7.5 4L11 4.5L8.5 7L9 10.5L6 9L3 10.5L3.5 7L1 4.5L4.5 4L6 1Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#07163D] mb-2">TAG</h3>
            <p className="text-[#6A7282] mb-8">
              태그 하나로<br />
              지속적인 수익 창출
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#4B7BFF" fillOpacity="0.1" stroke="#4B7BFF" strokeWidth="2"/>
                  <path d="M6 10L9 13L14 7" stroke="#4B7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#07163D] font-medium">모든 판매의 5% 수익</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#4B7BFF" fillOpacity="0.1" stroke="#4B7BFF" strokeWidth="2"/>
                  <path d="M6 10L9 13L14 7" stroke="#4B7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#07163D] font-medium">팔로워가 자연스럽게 구매</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#4B7BFF" fillOpacity="0.1" stroke="#4B7BFF" strokeWidth="2"/>
                  <path d="M6 10L9 13L14 7" stroke="#4B7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#07163D] font-medium">브랜드 광고 없이 독립적</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
              <p className="text-3xl font-bold text-[#07163D]">월 100만원+</p>
              <p className="text-sm text-[#6A7282] mt-1">팔로워 10K</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { trackEarlybirdSubmit } from '@/components/GoogleAnalyticsEvents';

export default function EarlyBirdSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    instagram: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Supabase에 데이터 저장
      const { error } = await supabase
        .from('earlybird_registrations')
        .insert([
          {
            name: formData.name,
            phone: formData.contact,
            instagram: formData.instagram,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) throw error;
      
      // Slack으로 알림 전송
      const slackMessage = {
        text: "🎉 새로운 얼리버드 예약이 접수되었습니다!",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "🎉 새로운 얼리버드 예약"
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*이름:*\n${formData.name}`
              },
              {
                type: "mrkdwn",
                text: `*연락처:*\n${formData.contact}`
              },
              {
                type: "mrkdwn",
                text: `*인스타그램:*\n${formData.instagram}`
              },
              {
                type: "mrkdwn",
                text: `*접수 시간:*\n${new Date().toLocaleString('ko-KR')}`
              }
            ]
          },
          {
            type: "divider"
          }
        ]
      };

      await fetch('https://hooks.slack.com/services/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', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage)
      });
      
      // GA4 이벤트 추적
      trackEarlybirdSubmit({
        name: formData.name,
        phone: formData.contact,
        instagram: formData.instagram
      });
      
      setSubmitMessage('예약이 완료되었습니다! 곧 연락드리겠습니다.');
      setFormData({ name: '', contact: '', instagram: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="pre-registration"
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
                  <span className="hidden sm:inline">당신의 첫 콘텐츠를 응원하며 3만원의 쇼핑 지원금을<br/>선물로 드려요.</span>
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
                    required
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
                    required
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
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
                    style={{ fontFamily: 'Pretendard' }}
                  />
                </div>

                {submitMessage && (
                  <div className={`text-center p-3 rounded-lg ${
                    submitMessage.includes('완료') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-4 rounded-full wave-button font-bold text-white transition-all hover:shadow-lg mt-4 sm:mt-6 text-sm sm:text-base relative ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  style={{ 
                    fontFamily: 'Pretendard'
                  }}
                >
                  <span className="relative z-10">{isSubmitting ? '처리 중...' : '얼리버드 예약하기'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
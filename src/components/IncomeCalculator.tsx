'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { trackEarlybirdSubmit } from '@/components/GoogleAnalyticsEvents';

export default function IncomeCalculator() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    instagram: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Supabase에 데이터 저장
      const { data, error } = await supabase
        .from('earlybird_registrations') // 테이블 이름
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            instagram: formData.instagram,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) throw error;
      
      // GA4 이벤트 추적
      trackEarlybirdSubmit(formData);
      
      setSubmitMessage('예약이 완료되었습니다! 곧 연락드리겠습니다.');
      setFormData({ name: '', phone: '', instagram: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Supabase Error:', error);
      setSubmitMessage('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pre-registration" className="py-16 sm:py-24 lg:py-32 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#07163D] mb-4 sm:mb-6 lg:mb-8 px-4">
            얼리버드만 누릴 수 있는 두가지 특별한 혜택
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            이 특별한 기회는 08월 22일 마감됩니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side - Benefits */}
          <div className="flex-1 w-full space-y-6 sm:space-y-8 lg:space-y-12">
            {/* 혜택 1 */}
            <div className="bg-white/10 rounded-2xl p-6 sm:p-8">
              <div className="inline-block bg-[#2A50FB] rounded-full px-4 sm:px-5 py-1 sm:py-1.5 text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4">
                혜택 1
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">
                상위 노출.
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                당신의 취향이 더 많은 사람들에게 가장 먼저<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>발견될 수 있도록, 한달에 5번 기회를 드립니다.
              </p>
            </div>

            {/* 혜택 2 */}
            <div className="bg-white/20 rounded-2xl p-6 sm:p-8">
              <div className="inline-block bg-[#8D16FA] rounded-full px-4 sm:px-5 py-1 sm:py-1.5 text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4">
                혜택 2
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">
                더 높은 리워드.
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                누구보다 빨랐던 당신, 2025년 내내 7%의 리<br className="hidden sm:block" />
                <span className="sm:hidden">워드로 </span><span className="hidden sm:inline">워드로 함께 할게요.</span><span className="sm:hidden">함께 할게요.</span>
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-shrink-0 w-full lg:w-[480px] max-w-[480px]">
            <div className="bg-white rounded-3xl py-16 px-12 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-10 text-center">
                특별한 혜택, 지금 바로 예약할까요?
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="닉네임도 괜찮아요 :)"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C6EFF] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연락처 or Email</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="010-0000-0000 / email@email.com"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C6EFF] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">인스타그램 계정</label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                    placeholder="@yourinstagram"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C6EFF] focus:border-transparent text-sm sm:text-base"
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
                  className={`w-full bg-gradient-to-r from-[#155DFC] to-[#9810FA] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all mt-4 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? '처리 중...' : '얼리버드 예약하기'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
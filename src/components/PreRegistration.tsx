'use client';

import { useState, useEffect, useRef } from 'react';

export default function PreRegistration() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              사전 신청이 완료되었습니다!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              얼리버드 혜택과 정식 오픈 소식을 가장 먼저 알려드릴게요.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎁 얼리버드 혜택</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>✅ 상위 노출 뱃지 제공</li>
                <li>✅ 베타 테스트 우선 참여</li>
                <li>✅ 추가 리워드 보너스</li>
                <li>✅ 전용 고객 지원</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-3xl mx-auto text-white">
            <div className="text-4xl mb-6">👋</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 break-keep">
              지금 등록하면, 정식 오픈 전<br />
              <span className="whitespace-nowrap">얼리버드 전용 리워드 + 한정 기능을 드려요</span>
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              얼리버드에게는 상위 노출 뱃지를 드려요
            </p>
            
            <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                사전 신청하고 얼리버드 혜택 받기
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="이름을 입력해주세요"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading || !email || !name}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      처리 중...
                    </span>
                  ) : (
                    '사전 신청하고 얼리버드 혜택 받기'
                  )}
                </button>
              </form>
              
              <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
                <span className="mr-2">👉</span>
                이메일은 오픈 알림과 베타 안내에만 사용됩니다
              </div>
            </div>
            
            <div className={`mt-12 grid md:grid-cols-2 gap-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                <div className="text-3xl mb-4">🏆</div>
                <h4 className="text-xl font-bold mb-2 text-white">상위 노출 뱃지</h4>
                <p className="text-blue-100">
                  얼리버드 전용 뱃지로 다른 사용자들보다 우선 노출됩니다
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                <div className="text-3xl mb-4">💎</div>
                <h4 className="text-xl font-bold mb-2 text-white">추가 리워드</h4>
                <p className="text-blue-100">
                  정식 오픈 후 첫 달 동안 추가 리워드 보너스를 제공합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
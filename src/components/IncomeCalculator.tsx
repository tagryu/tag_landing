'use client';

export default function IncomeCalculator() {
  return (
    <section id="pre-registration" className="py-32 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#07163D] mb-8">
            얼리버드만 누릴 수 있는 두가지 특별한 혜택
          </h2>
          <p className="text-xl text-gray-600">
            이 특별한 기회는 08월 22일 마감됩니다.
          </p>
        </div>

        <div className="flex items-center gap-12">
          {/* Left side - Benefits */}
          <div className="flex-1 space-y-12">
            {/* 혜택 1 */}
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="inline-block bg-[#2A50FB] rounded-full px-5 py-1.5 text-white font-bold text-sm mb-4">
                혜택 1
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-3">
                상위 노출.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                당신의 취향이 더 많은 사람들에게 가장 먼저<br />
                발견될 수 있도록, 한달에 5번 기회를 드립니다.
              </p>
            </div>

            {/* 혜택 2 */}
            <div className="bg-white/20 rounded-2xl p-8">
              <div className="inline-block bg-[#8D16FA] rounded-full px-5 py-1.5 text-white font-bold text-sm mb-4">
                혜택 2
              </div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-3">
                더 높은 리워드.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                누구보다 빨랐던 당신, 2025년 내내 7%의 리<br />
                워드로 함께 할게요.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-shrink-0 w-[480px]">
            <div className="bg-white rounded-3xl py-16 px-12 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-10 text-center">
                특별한 혜택, 지금 바로 예약할까요?
              </h3>
              
              <form className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                  <input
                    type="text"
                    placeholder="닉네임도 괜찮아요 :)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C6EFF] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5C6EFF] focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#155DFC] to-[#9810FA] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all mt-4"
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
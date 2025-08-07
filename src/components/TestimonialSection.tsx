'use client';

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#07163D] mb-4">
            이미 시작한 사람들
          </h2>
          <p className="text-xl text-[#6A7282]">
            평범한 일상이 수익이 되는 경험
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 후기 카드 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-bold text-[#07163D]">민지</p>
                <p className="text-sm text-[#6A7282]">@minji_daily</p>
              </div>
            </div>
            <p className="text-[#6A7282] mb-4">
              "평소에 올리던 OOTD 사진에 TAG 하기 시작한 지 3개월 만에 월 200만원 수익이 생겼어요!"
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6A7282]">팔로워 12K</p>
              <p className="font-bold text-[#07163D]">월 200만원</p>
            </div>
          </div>

          {/* 후기 카드 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-bold text-[#07163D]">서준</p>
                <p className="text-sm text-[#6A7282]">@seojun_look</p>
              </div>
            </div>
            <p className="text-[#6A7282] mb-4">
              "취미로 운영하던 패션 계정이 이제는 제 부업이 됐어요. 학비 걱정 없이 학교 다니고 있습니다."
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6A7282]">팔로워 8.5K</p>
              <p className="font-bold text-[#07163D]">월 120만원</p>
            </div>
          </div>

          {/* 후기 카드 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-bold text-[#07163D]">하늘</p>
                <p className="text-sm text-[#6A7282]">@sky_beauty</p>
              </div>
            </div>
            <p className="text-[#6A7282] mb-4">
              "뷰티 제품 리뷰만 해도 수익이 들어와요. 팔로워들도 신뢰할 수 있는 제품을 찾을 수 있다고 좋아해요."
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6A7282]">팔로워 25K</p>
              <p className="font-bold text-[#07163D]">월 350만원</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#6A7282] mb-6">당신도 바로 시작할 수 있어요</p>
          <button className="bg-[#07163D] text-white px-8 py-4 rounded-full hover:bg-[#0A1F4D] transition-colors font-semibold text-lg">
            무료로 시작하기
          </button>
        </div>
      </div>
    </section>
  );
}
'use client';

export default function RevenueSection() {
  return (
    <section id="service-intro" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#07163D] mb-6">
            좋아요만으론 부족했던 당신께
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            이제 팔로워나 좋아요 수에 상관없이,<br />
            누구나 콘텐츠로 수익을 만들 수 있어요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 기존 SNS */}
          <div className="bg-gray-50 rounded-3xl p-10 text-center">
            <div className="mb-8">
              <span className="text-6xl">🤍</span>
            </div>
            <p className="text-gray-500 mb-4">
              &apos;좋아요, 팔로워&apos;가 전부였던
            </p>
            <h3 className="text-2xl font-bold text-[#1a1a1a]">
              기존 SNS
            </h3>
          </div>

          {/* TAG */}
          <div className="bg-gray-50 rounded-3xl p-10 text-center">
            <div className="mb-8">
              <span className="text-6xl">💰</span>
            </div>
            <p className="text-gray-500 mb-4">
              태그한 상품 금액의 5%씩 쌓이는
            </p>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
              TAG
            </h3>
            <p className="text-sm text-gray-500">
              (1,000원 이상 출금 가능)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer id="contact" className="bg-[#243B7A] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src="/TAG_Logo_white.png" 
              alt="TAG" 
              className="h-8 sm:h-10"
            />
          </div>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            당신의 모든 컨텐츠가 수익이 되는<br></br>새로운 소셜 커머스
          </p>
        </div>
        
        <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <a href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
            이용약관
          </a>
          <a href="#" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
            개인정보 처리방침
          </a>
        </div>
        
        <div className="text-xs sm:text-sm text-white/60 space-y-1.5 sm:space-y-2">
          <p>주식회사 태그 | 대표 류태규</p>
          <p>사업자등록번호 : 792-81-03987</p>
          <p>주소 : 부천시 원미구 소사로 487, 2층 에이-05호</p>
          <p>연락처 : 010-8546-0413 | 이메일 : <a href="mailto:tag_official@tags.kr" className="text-white/80 hover:text-white transition-colors">tag_official@tags.kr</a></p>
          <p className="pt-2 sm:pt-4">© 2025 TAG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
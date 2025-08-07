export default function Footer() {
  return (
    <footer id="contact" className="bg-[#243B7A] text-white py-16">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <img 
              src="/TAG_Logo_White.png" 
              alt="TAG" 
              className="h-10"
            />
          </div>
          <p className="text-lg mb-8">
            리뷰가 수익이 되는 새로운 소셜 커머스
          </p>
        </div>
        
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            이용약관
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            개인정보 처리방침
          </a>
        </div>
        
        <div className="text-sm text-white/60">
          <p>© 2025 TAG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
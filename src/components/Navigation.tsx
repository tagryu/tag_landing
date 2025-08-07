'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-white/30 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center ml-24">
            <img
              src="/Logo_TAG.png"
              alt="TAG"
              className="h-6 w-auto object-contain"
            />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-10 mr-8">
            <button
              onClick={() => scrollToSection('service-intro')}
              className={`text-lg font-bold transition-colors ${
                isScrolled ? 'text-[#07163D] hover:text-[#243B7A]' : 'text-[#07163D] hover:text-[#243B7A]'
              }`}
            >
              서비스 소개
            </button>
            <button
              onClick={() => scrollToSection('pre-registration')}
              className={`text-lg font-bold transition-colors ${
                isScrolled ? 'text-[#07163D] hover:text-[#243B7A]' : 'text-[#07163D] hover:text-[#243B7A]'
              }`}
            >
              사전예약
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-lg font-bold transition-colors ${
                isScrolled ? 'text-[#07163D] hover:text-[#243B7A]' : 'text-[#07163D] hover:text-[#243B7A]'
              }`}
            >
              문의하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className={`w-6 h-6 ${isScrolled ? 'text-[#333333]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
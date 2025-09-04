'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white/30 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center ml-4 sm:ml-8 md:ml-24">
            <img
              src="/Logo_TAG.png"
              alt="TAG"
              className="h-5 sm:h-6 w-auto object-contain"
            />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-10 mr-8">
            <button
              onClick={() => scrollToSection('picksel-intro')}
              className={`text-lg font-bold transition-colors cursor-pointer ${
                isScrolled ? 'text-[#07163D] hover:text-[#243B7A]' : 'text-[#07163D] hover:text-[#243B7A]'
              }`}
            >
              태그소개
            </button>
            <button
              onClick={() => scrollToSection('pre-registration')}
              className={`text-lg font-bold transition-colors cursor-pointer ${
                isScrolled ? 'text-[#07163D] hover:text-[#243B7A]' : 'text-[#07163D] hover:text-[#243B7A]'
              }`}
            >
              사전예약
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden mr-4 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className={`w-6 h-6 ${isScrolled ? 'text-[#07163D]' : 'text-[#07163D]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => {
                  scrollToSection('picksel-intro');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-bold text-[#07163D] hover:text-[#243B7A] py-2 cursor-pointer"
              >
                픽셀소개
              </button>
              <button
                onClick={() => {
                  scrollToSection('pre-registration');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-lg font-bold text-[#07163D] hover:text-[#243B7A] py-2 cursor-pointer"
              >
                사전예약
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
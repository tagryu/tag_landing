'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: '소개', href: '#vision' },
  { label: '역량', href: '#capabilities' },
  { label: '성과', href: '#achievements' },
  { label: '소식', href: '#news' },
  { label: '문의', href: '#contact' },
];

export default function CorporateNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? '/TAG_Logo_Navy.png' : '/TAG_Logo_white.png'}
              alt="TAG"
              width={80}
              height={32}
              className="h-7 lg:h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:opacity-70 ${
                  scrolled ? 'text-[#07163D]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="메뉴 열기"
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? `rotate-45 translate-y-2 ${scrolled ? 'bg-[#07163D]' : 'bg-white'}`
                  : scrolled ? 'bg-[#07163D]' : 'bg-white'
              }`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              } ${scrolled ? 'bg-[#07163D]' : 'bg-white'}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                menuOpen
                  ? `-rotate-45 -translate-y-2 ${scrolled ? 'bg-[#07163D]' : 'bg-white'}`
                  : scrolled ? 'bg-[#07163D]' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-3 text-sm font-medium text-[#07163D] hover:text-[#2A50FB] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

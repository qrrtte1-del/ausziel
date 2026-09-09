'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig, navigationItems } from '@/config/site';
import { scrollToSection } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-xl font-bold text-text tracking-tight hover:text-accent transition-colors"
        >
          Ausziel
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-text-secondary hover:text-text transition-colors text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button
          onClick={() => scrollToSection('consultation-form')}
          className="hidden md:inline-block px-6 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors shadow-soft-lg hover:shadow-soft-xl"
        >
          Безкоштовна консультація
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-lavender rounded-lg transition-colors"
          aria-label="Відкрити меню"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} className="text-text" />
          ) : (
            <Menu size={24} className="text-text" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-lavender">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-text-secondary hover:text-text transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection('consultation-form');
                setIsOpen(false);
              }}
              className="w-full mt-2 px-4 py-3 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Безкоштовна консультація
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

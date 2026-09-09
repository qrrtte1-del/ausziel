'use client';

import { siteConfig, navigationItems } from '@/config/site';
import { scrollToSection } from '@/lib/utils';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-cream py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteConfig.brandName}</h3>
            <p className="text-cream/80 leading-relaxed text-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-cream">Навігація</h4>
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="block text-cream/80 hover:text-cream transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-cream">Контакти</h4>
            <div className="space-y-4 text-sm">
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/80 hover:text-cream transition-colors font-medium"
              >
                Telegram: {siteConfig.telegramUsername}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/80 hover:text-cream transition-colors font-medium"
              >
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-cream/80 hover:text-cream transition-colors font-medium"
                >
                  Email: {siteConfig.email}
                </a>
              )}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-cream">Правова інформація</h4>
            <div className="space-y-4 text-sm">
              <a
                href="#privacy"
                className="block text-cream/80 hover:text-cream transition-colors font-medium"
              >
                Політика конфіденційності
              </a>
              <a
                href="#impressum"
                className="block text-cream/80 hover:text-cream transition-colors font-medium"
              >
                Impressum
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 mb-8 pt-8" />

        {/* Disclaimer */}
        <div className="bg-cream/10 p-6 rounded-lg mb-8">
          <p className="text-cream/70 text-sm leading-relaxed">
            <span className="font-semibold text-cream">Дисклеймер:</span> Інформація на сайті має інформаційний характер. Вимоги до вступу та процедури можуть змінюватися й відрізнятися залежно від університету та програми. Остаточні вимоги завжди слід перевіряти на офіційних сайтах відповідних університетів та державних органів Австрії.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/70">
          <p>
            © {currentYear} {siteConfig.brandName}. Усі права захищені.
          </p>
          <p>
            Розроблено з 🤍 для абітурієнтів
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

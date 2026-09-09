'use client';

import { scrollToSection } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import HeroGraphic from './HeroGraphic';
import ContactButtons from './ContactButtons';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 bg-gradient-to-b from-cream via-lavender/10 to-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text */}
          <div className="flex flex-col justify-center">
            {/* Pre-title */}
            <div className="mb-8 flex items-center gap-2">
              <div className="h-1 w-8 bg-accent rounded-full" />
              <p className="text-sm font-semibold tracking-wider text-accent uppercase">
                Ausziel • Вступ до Австрії
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
              Вступ до Австрії — зрозуміло, крок за кроком
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-lg">
              Допомагаю абітурієнтам розібратися з вимогами університетів, документами, дедлайнами та подачею заявки — без хаосу й незрозумілих формулювань.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => scrollToSection('consultation-form')}
                className="px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl hover:translate-y-[-2px] flex items-center justify-center gap-2"
              >
                Записатися на безкоштовну консультацію
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-8 py-4 bg-white text-accent border-2 border-accent rounded-lg font-semibold text-lg hover:bg-lavender/20 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
              >
                Як це працює
              </button>
            </div>

            {/* Guarantee text */}
            <p className="text-sm text-text-secondary mb-8">
              Перша розмова — безкоштовна та без зобов'язань.
            </p>

            {/* Contact quick links */}
            <ContactButtons variant="hero" />
          </div>

          {/* Right side - Graphic */}
          <div className="hidden md:block">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

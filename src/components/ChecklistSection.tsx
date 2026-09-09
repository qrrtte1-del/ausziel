'use client';

import { scrollToSection } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { checklist } from '@/config/site';

const ChecklistSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-cream to-peach/10">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Checklist */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-8">
              Що варто з'ясувати перед вступом
            </h2>
            <div className="space-y-4">
              {checklist.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-text-secondary italic">
              Не знаєш відповіді на все? Це нормально — розберемося разом.
            </p>
            <button
              onClick={() => scrollToSection('consultation-form')}
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl hover:translate-y-[-2px]"
            >
              Записатися на консультацію
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right - Decorative */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-sky/20 to-lavender/20 rounded-3xl border border-lavender/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">✓</div>
                  <p className="text-text-secondary font-semibold text-xl">Чек-лист готовий</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistSection;

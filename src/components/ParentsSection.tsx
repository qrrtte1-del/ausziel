'use client';

import { scrollToSection } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const ParentsSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Якщо ви батьки абітурієнта
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Вступ за кордон часто створює багато запитань не лише в абітурієнта, а й у батьків. Моє завдання — зробити процес максимально зрозумілим: що потрібно перевірити, які документи готуються, які є дедлайни та що відбувається на кожному етапі.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              За бажанням першу консультацію можна пройти разом.
            </p>
            <button
              onClick={() => scrollToSection('consultation-form')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl hover:translate-y-[-2px]"
            >
              Поставити запитання
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right - Decorative element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/20 to-sky/20 rounded-3xl border border-lavender/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍👩‍👧</div>
                  <p className="text-text-secondary font-medium">Розуміємо разом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;

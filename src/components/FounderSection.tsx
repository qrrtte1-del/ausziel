'use client';

import { siteConfig, generateWhatsAppLink } from '@/config/site';
import { scrollToSection } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const FounderSection = () => {
  const whatsappLink = generateWhatsAppLink(
    siteConfig.whatsappNumber,
    siteConfig.whatsappInitialMessage
  );

  return (
    <section id="founder" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-cream via-peach/5 to-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-lavender/30 to-sky/30 border-2 border-lavender/40 flex items-center justify-center">
              {/* Placeholder for photo */}
              <div className="text-center">
                <div className="text-8xl mb-4">📸</div>
                <p className="text-text-secondary text-lg font-medium">Фото Вячеслава</p>
                <p className="text-text-secondary text-sm mt-2">public/images/founder.jpg</p>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Познайомитися
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-8">
              Привіт, я {siteConfig.founderName}
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-8">
              <p>
                Я сам студент і знаю, наскільки заплутаним може виглядати вступ до Австрії, коли перед тобою десятки сторінок університетів, різні вимоги, документи та дедлайни.
              </p>
              <p>
                Спочатку я просто допомагав друзям розібратися з цим процесом. З часом зрозумів, що можу перетворити цей досвід на структуровану допомогу для інших абітурієнтів.
              </p>
              <p>
                Так з'явився Ausziel.
              </p>
              <p className="font-semibold text-text">
                Моя задача — не обіцяти «100% вступ», а допомогти тобі зрозуміти свою ситуацію, знайти актуальні вимоги в офіційних джерелах і побудувати зрозумілий план наступних кроків.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('consultation-form')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl hover:translate-y-[-2px]"
              >
                Обговорити мою ситуацію
                <ArrowRight size={20} />
              </button>
              <a
                href={`https://t.me/${siteConfig.telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky text-text rounded-lg font-semibold hover:bg-sky/80 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
              >
                Написати в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

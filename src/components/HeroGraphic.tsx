'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, FileText, Calendar, MessageCircle } from 'lucide-react';

const HeroGraphic = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-full min-h-[500px] flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating card - Austria */}
        <div
          className={`absolute top-12 right-8 p-6 bg-gradient-to-br from-sky/40 to-lavender/40 rounded-2xl border border-sky/60 shadow-soft-lg transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            animation: isVisible ? 'float 3s ease-in-out infinite' : 'none',
          }}
        >
          <div className="text-sm font-semibold text-accent mb-2">АВСТРІЯ</div>
          <MapPin size={32} className="text-accent mb-2" />
          <p className="text-xs text-text-secondary">Чудові місто для навчання</p>
        </div>

        {/* Checklist card */}
        <div
          className={`absolute bottom-32 left-4 p-5 bg-white/60 rounded-xl border border-peach/50 shadow-soft-lg transform transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            animation: isVisible ? 'float 4s ease-in-out infinite 0.2s' : 'none',
          }}
        >
          <div className="text-xs font-semibold text-text mb-3">Документи</div>
          <div className="space-y-2">
            <div className="flex gap-2 items-start">
              <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 mt-0.5" />
              <p className="text-xs text-text-secondary">Паспорт</p>
            </div>
            <div className="flex gap-2 items-start">
              <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 mt-0.5" />
              <p className="text-xs text-text-secondary">Дипломи</p>
            </div>
          </div>
        </div>

        {/* Timeline/Process */}
        <div
          className={`absolute top-1/3 right-12 space-y-4 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <p className="text-xs text-text-secondary">Вимоги</p>
          </div>
          <div className="flex items-center gap-3 ml-1.5">
            <ArrowRight size={16} className="text-accent/50" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <p className="text-xs text-text-secondary">Документи</p>
          </div>
          <div className="flex items-center gap-3 ml-1.5">
            <ArrowRight size={16} className="text-accent/50" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <p className="text-xs text-text-secondary">Подача</p>
          </div>
        </div>

        {/* Calendar indicator */}
        <div
          className={`absolute bottom-16 right-1/4 p-4 bg-gradient-to-br from-peach/30 to-sky/30 rounded-xl border border-peach/40 shadow-soft transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            animation: isVisible ? 'float 3.5s ease-in-out infinite 0.3s' : 'none',
          }}
        >
          <Calendar size={24} className="text-accent" />
          <p className="text-xs text-text-secondary mt-2 font-semibold">Дедлайни</p>
        </div>
      </div>
    </div>
  );
};

export default HeroGraphic;

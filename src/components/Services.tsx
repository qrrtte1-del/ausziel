'use client';

import { services } from '@/config/site';
import ServiceCard from './ServiceCard';
import * as Icons from 'lucide-react';

const Services = () => {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = Icons;
    return iconMap[iconName] || Icons.HelpCircle;
  };

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-cream via-sky/5 to-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Що я можу допомогти
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Розділю процес вступу на зрозумілі кроки та допомагаю розібратися з кожним з них
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ServiceCard
                icon={getIcon(service.icon)}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

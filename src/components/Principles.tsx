'use client';

import { principles } from '@/config/site';
import PrincipleCard from './PrincipleCard';
import * as Icons from 'lucide-react';

const Principles = () => {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = Icons;
    return iconMap[iconName] || Icons.HelpCircle;
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-cream to-peach/10">
      <div className="max-w-7xl mx-auto">
        {/* Immediately after Hero - Trust Principles */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-12 text-center">
            На чому побудовано Ausziel
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <PrincipleCard
                  icon={getIcon(principle.icon)}
                  title={principle.title}
                  description={principle.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;

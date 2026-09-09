'use client';

import { processSteps } from '@/config/site';

const ProcessSteps = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Як це працює
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Простий та прозорий процес з чотирма ключовими етапами
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="h-full p-8 bg-gradient-to-br from-lavender/30 to-sky/20 rounded-2xl border border-lavender/40 hover:border-lavender transition-all duration-300">
                {/* Step Number */}
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-accent to-accent-teal bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                {/* Step Title */}
                <h3 className="text-xl font-semibold text-text mb-4">
                  {step.title}
                </h3>
                {/* Step Description */}
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps (hidden on mobile, visible on larger screens) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-accent/30 to-transparent" />
                  <div className="w-3 h-3 rounded-full bg-accent ml-2 mt-[-5px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

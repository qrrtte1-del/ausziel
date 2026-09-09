'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/config/site';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Часті запитання
          </h2>
          <p className="text-lg text-text-secondary">
            Відповіді на питання, які найчастіше мені задають
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-lavender/30 rounded-xl overflow-hidden hover:border-lavender transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-lavender/10 to-sky/10 hover:from-lavender/20 hover:to-sky/20 transition-all duration-300"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-left text-lg font-semibold text-text pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer - Collapsible */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-lavender/20">
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

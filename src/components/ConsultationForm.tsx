'use client';

import { useState } from 'react';
import { siteConfig, generateWhatsAppLink } from '@/config/site';
import { isValidPhoneOrTelegram } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  contactInfo: string;
  interest: string;
  situation: string;
  agreeToTerms: boolean;
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactInfo: '',
    interest: '',
    situation: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Будь ласка, введіть своє ім'я";
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = 'Будь ласка, введіть Telegram або номер телефону';
    } else if (!isValidPhoneOrTelegram(formData.contactInfo)) {
      newErrors.contactInfo = 'Введіть коректний Telegram (@username) або номер телефону';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Погодьтеся з обробкою даних';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Try to send via backend API if configured
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Помилка при відправленні форми');
        }
      }

      // Prepare WhatsApp message
      const whatsappMessage = `Привіт! Мене звати ${formData.name}.

Хочу записатися на консультацію щодо вступу в Австрію.${
        formData.interest ? `\n\nМене цікавить: ${formData.interest}` : ''
      }${
        formData.situation ? `\n\nМоя ситуація: ${formData.situation}` : ''
      }`;

      const whatsappLink = generateWhatsAppLink(
        siteConfig.whatsappNumber,
        whatsappMessage
      );

      // Open WhatsApp
      window.open(whatsappLink, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        contactInfo: '',
        interest: '',
        situation: '',
        agreeToTerms: false,
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="consultation-form" className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-cream to-lavender/10">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Не знаєш, з чого почати?
          </h2>
          <p className="text-lg text-text-secondary">
            Розкажи коротко про свою ситуацію. На першій безкоштовній консультації визначимо, що варто перевірити та які можуть бути наступні кроки.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-2xl border border-lavender/30 shadow-soft-lg"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-text mb-3">
              Ім'я *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Твоє ім'я"
              className={`w-full px-4 py-3 border rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                errors.name
                  ? 'border-red-300 bg-red-50/30'
                  : 'border-lavender/30 bg-lavender/5 focus:border-accent'
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          {/* Contact Info Field */}
          <div className="mb-6">
            <label htmlFor="contactInfo" className="block text-sm font-semibold text-text mb-3">
              Telegram або номер телефону *
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="@username або +43 676 123 4567"
              className={`w-full px-4 py-3 border rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                errors.contactInfo
                  ? 'border-red-300 bg-red-50/30'
                  : 'border-lavender/30 bg-lavender/5 focus:border-accent'
              }`}
            />
            {errors.contactInfo && (
              <p className="text-red-600 text-sm mt-2">{errors.contactInfo}</p>
            )}
          </div>

          {/* Interest Field */}
          <div className="mb-6">
            <label htmlFor="interest" className="block text-sm font-semibold text-text mb-3">
              Який напрям або університет тебе цікавить? <span className="text-text-secondary font-normal">(необов'язково)</span>
            </label>
            <input
              type="text"
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              placeholder="Наприклад: Computer Science в Віденському університеті"
              className="w-full px-4 py-3 border border-lavender/30 bg-lavender/5 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>

          {/* Situation Field */}
          <div className="mb-8">
            <label htmlFor="situation" className="block text-sm font-semibold text-text mb-3">
              Коротко опиши свою ситуацію <span className="text-text-secondary font-normal">(необов'язково)</span>
            </label>
            <textarea
              id="situation"
              name="situation"
              value={formData.situation}
              onChange={handleChange}
              placeholder="Розкажи трохи про себе та свої планів..."
              rows={5}
              className="w-full px-4 py-3 border border-lavender/30 bg-lavender/5 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className={`w-5 h-5 mt-1 rounded border cursor-pointer transition-all duration-300 ${
                  errors.agreeToTerms
                    ? 'border-red-300 bg-red-50'
                    : 'border-lavender/30 accent-accent'
                }`}
              />
              <span className="text-sm text-text-secondary">
                Я погоджуюся з обробкою моїх даних відповідно до{' '}
                <a
                  href="#privacy"
                  className="text-accent hover:text-blue-600 font-medium transition-colors"
                >
                  політики конфіденційності
                </a>
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="text-red-600 text-sm mt-2">{errors.agreeToTerms}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-accent text-white rounded-lg font-semibold text-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-soft-lg hover:shadow-soft-xl hover:translate-y-[-2px] flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Відправляю...' : 'Записатися на консультацію'}
            {!isSubmitting && <ArrowRight size={20} />}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-300 rounded-lg text-green-800 font-medium">
              ✓ Спасибі! Детальна інформація буде в WhatsApp
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-lg text-red-800 font-medium">
              ✕ Помилка при відправленні. Спробуй ще раз або напиши прямо в Telegram
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-lavender/20 text-center">
            <p className="text-text-secondary font-medium mb-4">
              Перша консультація безкоштовна • Без зобов'язань
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-sky text-text rounded-lg font-medium hover:bg-sky/80 transition-all duration-300"
              >
                Написати в Telegram
              </a>
              <a
                href={generateWhatsAppLink(
                  siteConfig.whatsappNumber,
                  siteConfig.whatsappInitialMessage
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-sage text-text rounded-lg font-medium hover:bg-sage/80 transition-all duration-300"
              >
                Написати у WhatsApp
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;

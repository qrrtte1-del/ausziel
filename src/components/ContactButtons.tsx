'use client';

import { siteConfig, generateWhatsAppLink } from '@/config/site';
import { MessageCircle, Send } from 'lucide-react';

interface ContactButtonsProps {
  variant?: 'hero' | 'cta' | 'compact';
}

const ContactButtons = ({ variant = 'compact' }: ContactButtonsProps) => {
  const whatsappLink = generateWhatsAppLink(
    siteConfig.whatsappNumber,
    siteConfig.whatsappInitialMessage
  );

  const buttonClasses = {
    hero: 'flex gap-4 flex-col sm:flex-row',
    cta: 'flex gap-4 justify-center flex-col sm:flex-row',
    compact: 'flex gap-3',
  };

  const buttonSizeClasses = {
    hero: 'px-6 py-3 text-base',
    cta: 'px-6 py-3 text-base',
    compact: 'px-4 py-2 text-sm',
  };

  return (
    <div className={buttonClasses[variant]}>
      <a
        href={siteConfig.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonSizeClasses[variant]} inline-flex items-center justify-center gap-2 bg-sky text-text rounded-lg font-medium hover:bg-sky/80 transition-all duration-300 shadow-soft hover:shadow-soft-lg`}
        aria-label="Написати в Telegram"
      >
        <Send size={20} />
        <span>Telegram</span>
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonSizeClasses[variant]} inline-flex items-center justify-center gap-2 bg-sage text-text rounded-lg font-medium hover:bg-sage/80 transition-all duration-300 shadow-soft hover:shadow-soft-lg`}
        aria-label="Написати у WhatsApp"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactButtons;

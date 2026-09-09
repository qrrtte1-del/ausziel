'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-8 bg-gradient-to-br from-lavender/20 to-sky/20 rounded-2xl border border-lavender/40 hover:border-lavender hover:shadow-soft-lg transition-all duration-300 hover:translate-y-[-4px]">
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-soft group-hover:shadow-soft-lg transition-shadow">
          <Icon size={28} className="text-accent" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-text mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;

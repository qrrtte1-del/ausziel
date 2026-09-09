'use client';

import { LucideIcon } from 'lucide-react';

interface PrincipleProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PrincipleCard = ({ icon: Icon, title, description }: PrincipleProps) => {
  return (
    <div className="flex gap-4 p-6 bg-white/50 rounded-xl border border-lavender/30 hover:border-lavender hover:shadow-soft-lg transition-all duration-300">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-lavender">
          <Icon size={24} className="text-accent" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PrincipleCard;

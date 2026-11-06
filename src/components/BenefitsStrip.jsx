import React from 'react';
import { Award, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { content } from '../data/content';

const iconMap = {
  Award,
  Users,
  TrendingUp,
  ShieldCheck,
};

export default function BenefitsStrip() {
  const { benefits } = content.hero;

  return (
    <div className="w-full bg-[#050B1A]/85 backdrop-blur-xl border-t border-kw-cyan/20 px-6 sm:px-12 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-kw-cyan/20">
        {benefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon] || Award;
          return (
            <div 
              key={benefit.id} 
              className={`flex items-center gap-3 ${index !== 0 ? 'md:pl-6' : ''} ${index !== benefits.length - 1 ? 'md:pr-6' : ''}`}
            >
              <div className="w-8 h-8 rounded-full bg-[#0B2545]/80 border border-kw-cyan/40 flex items-center justify-center text-kw-cyan flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/90 leading-tight">
                {benefit.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


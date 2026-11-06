import React from 'react';
import { Award, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

const iconMap = {
  Award,
  Users,
  TrendingUp,
  ShieldCheck,
};

export default function Benefits() {
  const { benefits } = academyData;

  return (
    <section id="beneficios" className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* OUTER BOX */}
      <div className="bg-gradient-to-r from-kw-card/90 via-kw-navy/80 to-kw-card/90 backdrop-blur-xl border border-kw-cyan/40 rounded-2xl sm:rounded-3xl shadow-glow-cyan-sm p-6 sm:p-8 lg:p-9 relative overflow-hidden">
        
        {/* Subtle Decorative Sparkle on corner */}
        <div className="absolute top-3 right-4 opacity-70 hidden sm:block">
          <SparkleStar className="w-4 h-4 text-kw-cyan" glow={false} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-kw-cyan/20">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || Award;
            return (
              <div 
                key={benefit.id} 
                className={`flex items-start gap-4 ${
                  index !== 0 ? 'lg:pl-8' : ''
                } ${
                  index !== benefits.length - 1 ? 'lg:pr-8' : ''
                } group transition-all duration-300`}
              >
                {/* INNER BOX: Circular/Squircle Icon with Glow (Box dentro de otro box) */}
                <div className="flex-shrink-0 w-13 h-13 rounded-2xl bg-[#050E1D]/90 border border-kw-cyan/40 flex items-center justify-center p-3 text-kw-cyan group-hover:bg-kw-cyan group-hover:text-kw-dark group-hover:shadow-glow-cyan group-hover:scale-110 transition-all duration-300 relative">
                  <IconComponent className="w-6 h-6" />
                  {/* Micro blinking point in top-right of icon box */}
                  <span className="absolute -top-1 -right-1">
                    <BlinkingDot variant="blink" color="cyan" size="sm" />
                  </span>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-1 group-hover:text-kw-cyan transition-colors flex items-center gap-1.5">
                    <span>{benefit.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-kw-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

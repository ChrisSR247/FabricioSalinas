import React from 'react';
import { ArrowRight, Waves, Target } from 'lucide-react';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

export default function About() {
  const { about } = academyData;

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-kw-navy/30 to-transparent">
      {/* Decorative Blur Circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-kw-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Ambient Blinking Points */}
      <div className="absolute top-20 right-1/4 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-kw-cyan block animate-blink-dot-2 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7">
            {/* Badge with Sparkle and Blinking Dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#06152B]/90 border border-kw-cyan/40 text-xs font-bold uppercase tracking-widest text-kw-cyan mb-5 shadow-glow-cyan-sm">
              <BlinkingDot variant="live" color="cyan" />
              <span>{about.badge}</span>
              <SparkleStar className="w-3.5 h-3.5" glow={false} />
            </div>

            {/* Title */}
            <h2 className="font-heading italic font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {about.title}
            </h2>

            {/* Specific Required Text */}
            <p className="text-base sm:text-lg text-kw-muted leading-relaxed mb-8">
              {about.text}
            </p>

            {/* NESTED BOXES: Stat Cards (Box dentro de otro box) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-4 border-t border-kw-cyan/20">
              {about.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#050E1D]/80 border border-kw-cyan/20 hover:border-kw-cyan/50 rounded-2xl p-4 text-center group transition-all duration-300 shadow-inner"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className="font-heading font-black italic text-2xl sm:text-3xl text-kw-cyan drop-shadow group-hover:scale-105 transition-transform">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-[11px] text-kw-muted font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* "Conoce más" Button */}
            <div>
              <a
                href={about.buttonHref}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-sm text-kw-cyan border-2 border-kw-cyan bg-kw-dark/60 hover:bg-kw-cyan hover:text-kw-dark hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span>{about.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Orca (Killer Whale) Swimming Image with Floating Caption Box */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glowing Background Blur */}
              <div className="absolute -inset-3 bg-gradient-to-r from-kw-cyan/30 to-kw-blue/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70" />

              {/* Image Frame (Outer Box) */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-kw-cyan/40 bg-kw-card shadow-2xl">
                <img
                  src={about.image}
                  alt="Orca Killer Whale nadando en aguas profundas - Emblema de Academia KW"
                  className="w-full h-[420px] sm:h-[490px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Water Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-kw-dark/95 via-transparent to-transparent" />

                {/* Corner Sparkle */}
                <div className="absolute top-5 right-5">
                  <SparkleStar className="w-6 h-6 text-kw-cyan" glow={true} />
                </div>

                {/* Floating Caption Box (Box dentro de otro box con puntos que prenden y apagan) */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#050E1D]/90 backdrop-blur-md border border-kw-cyan/40 shadow-xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 text-kw-cyan text-xs font-bold uppercase tracking-wider">
                      <BlinkingDot variant="live" color="cyan" />
                      <span>Filosofía Killer Whale</span>
                    </div>
                    <SparkleStar className="w-4 h-4 text-kw-cyan" glow={false} />
                  </div>
                  <p className="text-xs text-kw-muted leading-relaxed">
                    Fuerza, coordinación y trabajo en equipo para conquistar cualquier desafío en la piscina.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

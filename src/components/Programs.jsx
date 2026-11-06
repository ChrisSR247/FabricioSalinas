import React from 'react';
import { Smile, Waves, HeartPulse, Trophy, ArrowRight, Check } from 'lucide-react';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

const iconMap = {
  Smile,
  Waves,
  HeartPulse,
  Trophy
};

export default function Programs() {
  const { programs } = academyData;

  return (
    <section id="programas" className="py-24 relative overflow-hidden">
      {/* Background Subtle Water Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-kw-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-kw-navy/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Blinking Points */}
      <div className="absolute top-12 left-1/4 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-kw-cyan block animate-blink-dot-2 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
      </div>
      <div className="absolute bottom-16 right-1/3 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-kw-sky block animate-blink-dot-1 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Decorative Lines, Sparkle Star and Blinking Point */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-kw-cyan rounded-full" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#06152B]/80 border border-kw-cyan/30">
              <BlinkingDot variant="live" color="cyan" />
              <span className="font-heading uppercase tracking-[0.2em] text-xs font-bold text-kw-cyan">
                METODOLOGÍA KILLER WHALE
              </span>
              <SparkleStar className="w-3.5 h-3.5" glow={false} />
            </div>
            <span className="h-[2px] w-10 sm:w-16 bg-gradient-l from-transparent to-kw-cyan rounded-full" />
          </div>

          <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Nuestros <span className="bg-gradient-to-r from-kw-cyan via-kw-sky to-cyan-200 bg-clip-text text-transparent">Programas</span>
          </h2>

          <p className="mt-4 text-kw-muted max-w-2xl text-sm sm:text-base leading-relaxed">
            Estructurados por etapas pedagógicas con profesores especializados para garantizar confianza, técnica y evolución constante.
          </p>
        </div>

        {/* 4 Cards Grid (Box dentro de otro Box) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((prog) => {
            const Icon = iconMap[prog.icon] || Waves;
            return (
              <div
                key={prog.id}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-kw-card/80 via-kw-navy/70 to-[#051124]/90 backdrop-blur-md border border-kw-cyan/30 hover:border-kw-cyan hover:shadow-glow-cyan transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1.5"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={`Programa de natación ${prog.title} en Loja`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-[#051124]/40 to-transparent" />
                  
                  {/* Floating Circular Icon */}
                  <div className="absolute bottom-4 left-5 w-12 h-12 rounded-2xl bg-[#06152B]/95 border border-kw-cyan/50 text-kw-cyan flex items-center justify-center shadow-lg group-hover:bg-kw-cyan group-hover:text-kw-dark group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Top-Right Age Badge with Sparkle */}
                  <div className="absolute top-4 right-4 bg-[#050E1D]/90 backdrop-blur-md px-3 py-1 rounded-full border border-kw-cyan/30 text-[11px] font-semibold text-kw-muted flex items-center gap-1.5">
                    <SparkleStar className="w-3 h-3 text-kw-cyan" glow={false} />
                    <span>{prog.age}</span>
                  </div>
                </div>

                {/* Outer Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading italic font-bold text-2xl text-white group-hover:text-kw-cyan transition-colors">
                        {prog.title}
                      </h3>
                      <BlinkingDot variant="blink" color="cyan" size="sm" />
                    </div>

                    <p className="text-kw-cyan font-medium text-xs sm:text-sm mb-3">
                      "{prog.subtitle}"
                    </p>

                    <p className="text-kw-muted text-xs sm:text-sm leading-relaxed mb-5">
                      {prog.description}
                    </p>

                    {/* INNER BOX: Objectives / Highlights Box (Box dentro de otro box) */}
                    <div className="bg-[#050E1D]/80 rounded-2xl p-4 border border-kw-cyan/20 group-hover:border-kw-cyan/40 transition-all shadow-inner mb-6">
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-kw-cyan mb-2.5 pb-1.5 border-b border-white/5">
                        <span>Puntos clave</span>
                        <SparkleStar className="w-3.5 h-3.5" glow={false} />
                      </div>

                      <ul className="space-y-2">
                        {prog.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-kw-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-kw-cyan flex-shrink-0 animate-blink-dot-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Inscription Action Link */}
                  <div className="pt-2 border-t border-kw-cyan/15">
                    <a
                      href="#inscripciones"
                      className="inline-flex items-center justify-between w-full py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-kw-cyan hover:text-white transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <BlinkingDot variant="live" color="green" />
                        <span>Inscribirme en {prog.title}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

export default function Schedule() {
  const { schedules } = academyData;

  return (
    <section id="horarios" className="py-24 relative overflow-hidden">
      {/* Background Ambience & Twinkling Sparkles */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-kw-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-kw-blue/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative Floating Blinking Points in the section background */}
      <div className="absolute top-20 right-1/4 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-kw-cyan block animate-blink-dot-1 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
      </div>
      <div className="absolute bottom-24 left-1/5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-kw-sky block animate-blink-dot-2 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
      </div>
      <div className="absolute top-1/2 left-8 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-kw-cyan block animate-blink-dot-3 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kw-card/90 border border-kw-cyan/40 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-kw-cyan mb-4 shadow-glow-cyan-sm">
            <BlinkingDot variant="live" color="cyan" />
            <span>FLEXIBILIDAD Y TURNOS EN LOJA</span>
            <SparkleStar className="w-3.5 h-3.5" glow={false} />
          </div>

          <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Horarios de <span className="bg-gradient-to-r from-kw-cyan via-kw-sky to-cyan-200 bg-clip-text text-transparent">Clases</span>
          </h2>

          <p className="mt-4 text-kw-muted text-sm sm:text-base leading-relaxed">
            Turnos organizados por niveles y edades. Grupos reducidos con seguimiento técnico en cada carril.
          </p>
        </div>

        {/* Schedule Cards Grid: Optimized Nested Boxes (Box dentro de otro Box) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {schedules.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${
                item.highlight 
                  ? 'bg-gradient-to-b from-kw-card/90 via-kw-navy/85 to-[#051124]/95 border-2 border-kw-cyan/50 shadow-glow-cyan hover:border-kw-cyan hover:scale-[1.02]' 
                  : 'bg-gradient-to-b from-kw-card/75 via-kw-navy/70 to-[#051124]/90 border border-kw-cyan/25 hover:border-kw-cyan/50 hover:shadow-glow-cyan-sm'
              }`}
            >
              <div>
                {/* 1. Header Bar: Pill Badge on Left + Sparkle Symbol on Right (Matching Reference) */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  {/* Pill Badge with Blinking Point and Cyan Border */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06152B]/95 border border-kw-cyan shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                    <BlinkingDot variant="live" color="cyan" />
                    <span className="font-heading font-black italic tracking-wider text-xs text-kw-cyan uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Sparkle Star Symbol with Top-right Plus and Bottom-left Dot */}
                  <div className="flex items-center gap-1.5">
                    <SparkleStar className="w-6 h-6 text-kw-cyan" glow={true} />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="font-heading italic font-bold text-xl text-white mb-5 group-hover:text-kw-cyan transition-colors">
                  {item.category}
                </h3>

                {/* 2. INNER BOX 1: Main Weekday Hours (Box dentro de otro box) */}
                <div className="bg-[#050E1D]/85 rounded-2xl p-4 border border-kw-cyan/20 group-hover:border-kw-cyan/40 transition-all duration-300 shadow-inner mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-kw-cyan" />
                      <span>{item.days}</span>
                    </div>
                    {/* Blinking point for active schedule indicator */}
                    <BlinkingDot variant="blink" color="cyan" size="sm" />
                  </div>

                  {/* Micro-boxes for Time Slots */}
                  <div className="space-y-2">
                    {item.hours.map((hr, hrIdx) => (
                      <div 
                        key={hrIdx}
                        className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-[#0A1F3D]/60 border border-kw-cyan/15 text-xs"
                      >
                        <span className="text-kw-muted flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-kw-sky" />
                          <span>Turno {hrIdx + 1}</span>
                        </span>
                        <span className="font-bold text-white tracking-wide">
                          {hr}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. INNER BOX 2: Weekend Details (Box dentro de otro box) */}
                {item.weekend && (
                  <div className="bg-[#050E1D]/60 rounded-xl p-3.5 border border-white/5 mb-4 group-hover:border-kw-cyan/20 transition-all">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-kw-muted font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-kw-sky" />
                        <span>Fin de semana:</span>
                      </span>
                      <span className="font-semibold text-white/90">
                        {item.weekend.replace('Sábados intensivos: ', '').replace('Sábados: ', '').replace('Sábados libres: ', '').replace('Sábados técnicos: ', '')}
                      </span>
                    </div>
                  </div>
                )}

                {/* 4. INNER BOX 3: Live Slots / Status Indicator (Box dentro de otro box con puntos que prenden y apagan) */}
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-kw-cyan/10 border border-kw-cyan/30 mb-6">
                  <div className="flex items-center gap-2">
                    <BlinkingDot variant="live" color="green" />
                    <span className="text-[11px] font-semibold text-white">
                      {item.slots}
                    </span>
                  </div>
                  <SparkleStar className="w-3.5 h-3.5 text-kw-cyan opacity-80" glow={false} />
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="pt-2">
                <a
                  href="#inscripciones"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-kw-dark bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue hover:shadow-glow-cyan hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  <span>Reservar Cupo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Cluster of Blinking Dots and Sparkles */}
        <div className="mt-12 bg-kw-card/50 backdrop-blur-md rounded-2xl border border-kw-cyan/20 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-kw-dark border border-kw-cyan/30 flex items-center justify-center text-kw-cyan">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                ¿No encuentras un horario que se ajuste a tu rutina?
              </p>
              <p className="text-xs text-kw-muted">
                Abrimos turnos especiales para grupos y empresas en Loja previa coordinación.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BlinkingDot variant="cluster" />
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-kw-cyan hover:text-white uppercase tracking-wider underline underline-offset-4 transition-colors"
            >
              <span>Consultar Horario Personalizado</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

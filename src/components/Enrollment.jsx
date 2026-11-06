import React from 'react';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

export default function Enrollment() {
  const { enrollment, general } = academyData;

  return (
    <section id="inscripciones" className="py-24 relative overflow-hidden">
      {/* Background Water Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-kw-cyan/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Blinking Points */}
      <div className="absolute top-10 right-1/4 pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-kw-cyan block animate-blink-dot-3 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
      </div>
      <div className="absolute bottom-12 left-1/4 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-kw-sky block animate-blink-dot-1 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* OUTER BOX: Main Glassmorphism Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-kw-card/90 via-kw-navy/85 to-[#050E1D]/95 border-2 border-kw-cyan/40 p-8 sm:p-12 lg:p-14 shadow-glow-cyan overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge with Sparkle and Blinking Dot */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#06152B]/90 border border-kw-cyan/50 text-kw-cyan font-heading font-bold text-xs uppercase tracking-widest mb-5 shadow-glow-cyan-sm">
                <BlinkingDot variant="live" color="cyan" />
                <span>{enrollment.badge}</span>
                <SparkleStar className="w-4 h-4 ml-1" glow={false} />
              </div>

              {/* Title */}
              <h2 className="font-heading italic font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                {enrollment.title}
              </h2>

              <p className="text-kw-muted text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
                {enrollment.description}
              </p>

              {/* NESTED INNER BOXES: Grid of guarantees/benefits (Box dentro de otro box) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {enrollment.features.map((feat, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#050E1D]/70 border border-kw-cyan/20 hover:border-kw-cyan/40 transition-all"
                  >
                    <BlinkingDot variant="blink" color="cyan" size="sm" />
                    <span className="text-xs sm:text-sm text-white/90 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: INNER BOX (Action Box dentro de otro box) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full bg-[#050E1D]/90 backdrop-blur-xl border-2 border-kw-cyan/40 rounded-3xl p-6 sm:p-8 text-center shadow-glow-cyan-sm relative overflow-hidden group">
                
                {/* Corner Sparkle Symbol */}
                <div className="absolute top-4 right-4">
                  <SparkleStar className="w-5 h-5 text-kw-cyan/70" glow={true} />
                </div>

                {/* WhatsApp Circular Icon with Glowing Waves */}
                <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] mb-4 shadow-[0_0_25px_rgba(37,211,102,0.35)] group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-8 h-8" />
                </div>

                <div className="flex items-center justify-center gap-2 mb-1">
                  <BlinkingDot variant="live" color="green" />
                  <h3 className="font-heading font-bold text-lg text-white">
                    Canal Directo Loja
                  </h3>
                </div>

                <p className="text-xs text-kw-muted mb-6 leading-relaxed">
                  Consulta de cupos, requisitos para niños o adultos y reserva de horarios inmediatos.
                </p>

                {/* WhatsApp Button */}
                <a
                  href={enrollment.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-heading font-bold text-sm uppercase tracking-wider text-kw-dark bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue hover:shadow-glow-cyan hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg group"
                >
                  <MessageCircle className="w-5 h-5 fill-kw-dark" />
                  <span>{enrollment.whatsappButtonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Direct Phone Tag */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] text-kw-muted">
                  <SparkleStar className="w-3 h-3 text-kw-cyan" glow={false} />
                  <span>Llámanos al <strong className="text-white">{general.phone}</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

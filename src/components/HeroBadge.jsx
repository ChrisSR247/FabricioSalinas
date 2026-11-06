import React from 'react';
import SparkleStar from './SparkleStar';

/**
 * HeroBadge: Reproduce fielmente la referencia en tamaño GRANDE
 * con animación de agua, halo luminoso y el símbolo exacto.
 */
export default function HeroBadge({ className = "" }) {
  return (
    <div className={`relative inline-flex items-center group select-none animate-float-water ${className}`}>
      
      {/* Outer Aquatic Glow Shadow */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-kw-cyan/40 via-kw-sky/30 to-kw-cyan/40 blur-lg group-hover:blur-xl transition-all duration-500 opacity-80" />
      
      {/* Main Pill Capsule (GRANDE) */}
      <div className="relative inline-flex items-center justify-between gap-4 sm:gap-6 px-6 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#06152B]/95 border-2 border-kw-cyan shadow-glow-badge backdrop-blur-xl overflow-hidden">
        
        {/* Subtle Water Shimmer sweep across the pill */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-kw-cyan/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* 1. Left Dot: Glowing Cyan Circle with Aquatic Halo Ring */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          {/* Pulsing Outer Ripple Wave */}
          <span className="absolute w-6 h-6 rounded-full bg-kw-cyan/20 animate-ping" />
          {/* Halo Ring */}
          <span className="absolute w-5 h-5 rounded-full ring-2 ring-kw-cyan/50 animate-pulse" />
          {/* Core Glowing Dot */}
          <span className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-kw-cyan shadow-[0_0_12px_#22D3EE]" />
        </div>

        {/* 2. Center Text: "ACADEMIA KW – KILLER WHALE" (Grande, spaced, electric cyan) */}
        <span className="font-heading font-black italic tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-base lg:text-lg text-kw-cyan uppercase whitespace-nowrap drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
          ACADEMIA KW – KILLER WHALE
        </span>

        {/* 3. Right Symbol: Sparkle Star (4-point star + plus + dot) */}
        <div className="flex items-center justify-center flex-shrink-0 ml-1">
          <SparkleStar className="w-5 h-5 sm:w-6 sm:h-6 text-kw-cyan" glow={true} animate={true} />
        </div>

      </div>
    </div>
  );
}


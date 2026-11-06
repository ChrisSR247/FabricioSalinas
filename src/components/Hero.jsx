import React from 'react';
import { ArrowRight, ChevronDown, Waves } from 'lucide-react';
import HeroBadge from './HeroBadge';
import { WaterBubbles, PoolWaves, PoolCaustics, WaterDropRipple } from './WaterEffects';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

export default function Hero() {
  const { hero } = academyData;

  return (
    <section 
      id="inicio" 
      className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden"
    >
      {/* 1. Background Swimmer Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Nadador de mariposa entrenando en piscina de Academia KW Killer Whale en Loja"
          className="w-full h-full object-cover object-center lg:object-[center_35%] scale-105 transform animate-pulse-subtle"
          loading="eager"
        />
        
        {/* Deep Water Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-kw-dark via-kw-dark/90 to-kw-dark/45 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-kw-dark via-transparent to-kw-dark/70" />
        
        {/* Animated Swimming Pool Caustics Light Reflections */}
        <PoolCaustics />

        {/* Ambient Radial Water Glows */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-kw-cyan/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-kw-blue/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-kw-deep/30 rounded-full blur-[130px] pointer-events-none" />
      </div>

      {/* 2. Realistic Rising Water Bubbles (Efecto Piscina) */}
      <WaterBubbles count={16} />

      {/* 3. Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl lg:max-w-4xl">
          
          {/* THE REQUESTED BIG BADGE (Grande con animación de agua) */}
          <div className="mb-8">
            <HeroBadge />
          </div>

          {/* Main Title (Italic Bold Large with White & Cyan) */}
          <h1 className="font-heading italic font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
            <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {hero.titlePart1}
            </span>
            <span className="block bg-gradient-to-r from-kw-cyan via-kw-sky to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              {hero.titlePart2}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-kw-muted font-normal max-w-2xl mb-10 leading-relaxed drop-shadow-md">
            {hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Action Button (Conoce más) */}
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-bold text-base text-kw-cyan border-2 border-kw-cyan/90 bg-kw-dark/60 backdrop-blur-md hover:bg-kw-cyan hover:text-kw-dark hover:shadow-glow-cyan hover:scale-[1.02] active:scale-95 transition-all duration-300 group shadow-lg"
            >
              <span>{hero.primaryCta.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Solid Cyan Inscription Button */}
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-heading font-bold text-base uppercase tracking-wider text-kw-dark bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue hover:shadow-glow-cyan-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl"
            >
              <BlinkingDot variant="live" color="green" />
              <span>{hero.secondaryCta.text}</span>
            </a>
          </div>

          {/* Pool Specs Bar with Animated Water Drop Ripple & Sparkles */}
          <div className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-kw-muted/90 font-medium">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06152B]/80 border border-kw-cyan/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-kw-cyan animate-ping" />
              <Waves className="w-4 h-4 text-kw-cyan" />
              <span className="text-white font-semibold">Piscina Semiolímpica Temperada</span>
            </div>

            <span className="text-white/20 hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06152B]/80 border border-kw-cyan/30 backdrop-blur-md">
              <BlinkingDot variant="blink" color="cyan" size="sm" />
              <span>Loja, Ecuador</span>
              <SparkleStar className="w-3.5 h-3.5 text-kw-cyan ml-1" glow={false} />
            </div>
          </div>

        </div>
      </div>

      {/* 4. Animated Multi-Layered Pool Waves at the bottom */}
      <PoolWaves />

      {/* Floating Bottom Scroll Indicator */}
      <a
        href="#beneficios"
        aria-label="Desplazarse a beneficios"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-kw-muted hover:text-kw-cyan transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold mb-1 opacity-70">Deslizar</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-kw-cyan" />
      </a>
    </section>
  );
}

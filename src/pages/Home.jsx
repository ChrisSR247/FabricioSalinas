import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';
import BenefitsStrip from '../components/BenefitsStrip';
import PhotoCredit from '../components/PhotoCredit';
import { content } from '../data/content';

export default function Home() {
  const { hero } = content;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-kw-dark">
      
      {/* Full-Screen Background Image with Aquatic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Nadador mariposa de Academia KW Killer Whale"
          className="w-full h-full object-cover object-center lg:object-[center_30%] scale-105 filter brightness-90"
        />
        {/* Dark bluish gradient overlay for extreme legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/95 via-[#050B1A]/75 to-[#0A1F3D]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-[#050B1A]/60" />
      </div>

      {/* Main Content Area (Huge Typography, Minimal Clutter) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-36 sm:pt-44 pb-12 w-full my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Subtitle / Tagline Tag */}
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-kw-cyan animate-pulse" />
            <span className="font-heading uppercase tracking-[0.3em] text-xs sm:text-sm font-bold text-kw-cyan">
              ESCUELA DE NATACIÓN · LOJA, ECUADOR
            </span>
          </div>

          {/* Huge Main Title */}
          <h1 className="font-heading italic font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              {hero.title}
            </span>
            <span className="block bg-gradient-to-r from-kw-cyan via-kw-sky to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              {hero.subtitle}
            </span>
          </h1>

          {/* Short Phrase */}
          <p className="text-lg sm:text-2xl text-kw-muted font-light max-w-xl mb-10 leading-relaxed drop-shadow">
            {hero.tagline}
          </p>

          {/* Minimalist Button (Cyan Border, Transparent Background) */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={hero.ctaLink}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-kw-cyan text-kw-cyan font-heading font-bold text-sm sm:text-base uppercase tracking-wider bg-transparent hover:bg-kw-cyan hover:text-kw-dark hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <span>{hero.ctaText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <Link
              to="/programas"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-sm sm:text-base uppercase tracking-wider text-white bg-kw-card/80 border border-white/10 hover:border-kw-cyan hover:text-kw-cyan transition-all duration-300"
            >
              <span>Ver Programas</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Corner Social Icons & Photo Credit */}
      <div className="relative z-10 px-6 sm:px-12 pb-4 flex items-center justify-between">
        <SocialIcons />
        <PhotoCredit text={hero.photoCredit} />
      </div>

      {/* Bottom Benefits Strip */}
      <div className="relative z-10">
        <BenefitsStrip />
      </div>

    </div>
  );
}


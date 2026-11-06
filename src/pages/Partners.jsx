import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';
import PhotoCredit from '../components/PhotoCredit';
import { content } from '../data/content';

export default function Partners() {
  const { partners, general } = content;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-kw-dark">
      
      {/* Background Image with Dark Bluish Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={partners.backgroundImage}
          alt="Aliados y Patrocinadores de Academia KW Natación"
          className="w-full h-full object-cover object-center scale-105 filter brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/95 via-[#050B1A]/85 to-[#0A1F3D]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-[#050B1A]/70" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-36 pb-16 w-full my-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          {/* Subtitle */}
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-kw-cyan" />
            <span className="font-heading uppercase tracking-[0.3em] text-xs font-bold text-kw-cyan">
              {partners.subtitle}
            </span>
          </div>

          <h1 className="font-heading italic font-extrabold text-4xl sm:text-6xl text-white tracking-tight mb-4">
            {partners.title}
          </h1>

          <p className="text-kw-muted text-base sm:text-lg leading-relaxed">
            {partners.description}
          </p>
        </motion.div>

        {/* Partners Grid (Minimalist Athletic Brand Badges) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.list.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#0B2545]/60 backdrop-blur-md border border-kw-cyan/25 hover:border-kw-cyan hover:shadow-glow-cyan flex flex-col items-center justify-center text-center group transition-all duration-300"
            >
              {/* Partner Logo Placeholder Text */}
              <span className="font-heading font-black italic tracking-wider text-xl sm:text-2xl text-white group-hover:text-kw-cyan transition-colors mb-2">
                {partner.logoText}
              </span>
              <span className="text-[11px] text-kw-muted font-medium uppercase tracking-wider">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Sponsorships */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#050B1A]/80 border border-kw-cyan/30 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0B2545] border border-kw-cyan/40 flex items-center justify-center text-kw-cyan flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base sm:text-lg">
                ¿Deseas ser aliado o patrocinador de Academia KW?
              </h3>
              <p className="text-xs sm:text-sm text-kw-muted">
                Contáctanos para programas de patrocinio deportivo y convenios institucionales en Loja.
              </p>
            </div>
          </div>

          <a
            href={general.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-kw-cyan text-kw-cyan hover:bg-kw-cyan hover:text-kw-dark text-xs font-bold uppercase tracking-wider transition-all duration-300 flex-shrink-0 inline-flex items-center gap-2"
          >
            <span>Contactar alianzas</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Floating Bottom Socials & Photo Credit */}
      <div className="relative z-10 px-6 sm:px-12 py-6 border-t border-white/5 flex items-center justify-between">
        <SocialIcons />
        <PhotoCredit text="Foto: Alianzas Deportivas KW" />
      </div>

    </div>
  );
}


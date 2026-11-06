import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Waves, HeartPulse, Trophy, ArrowRight, Check } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';
import PhotoCredit from '../components/PhotoCredit';
import { content } from '../data/content';

const iconMap = {
  Smile,
  Waves,
  HeartPulse,
  Trophy,
};

export default function Programs() {
  const { programs, general } = content;

  return (
    <div className="relative min-h-screen bg-kw-dark pt-32 pb-24">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-kw-cyan" />
            <span className="font-heading uppercase tracking-[0.3em] text-xs font-bold text-kw-cyan">
              METODOLOGÍA POR EDADES Y NIVELES
            </span>
          </div>

          <h1 className="font-heading italic font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            Nuestros <span className="bg-gradient-to-r from-kw-cyan via-kw-sky to-cyan-200 bg-clip-text text-transparent">Programas</span>
          </h1>
          <p className="mt-4 text-kw-muted max-w-2xl text-base sm:text-lg">
            Descubre las 4 etapas formativas de natación en Loja. Diseñadas para desarrollar confianza, técnica y potencia en piscina temperada.
          </p>
        </motion.div>
      </div>

      {/* 4 Large Immersive Full-Bleed Scenes / Cards */}
      <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-6 sm:px-12">
        {programs.map((prog, index) => {
          const Icon = iconMap[prog.icon] || Waves;
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[70vh] rounded-3xl overflow-hidden border border-kw-cyan/30 shadow-2xl flex flex-col justify-between p-8 sm:p-14 group"
            >
              {/* Full-Bleed Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={prog.backgroundImage}
                  alt={`Programa ${prog.title} de natación en Loja`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-75"
                />
                {/* Gradient Overlays */}
                <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-l from-[#050B1A]/95 via-[#050B1A]/80 to-transparent' : 'bg-gradient-to-r from-[#050B1A]/95 via-[#050B1A]/80 to-transparent'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-[#050B1A]/50" />
              </div>

              {/* Top Bar inside Card */}
              <div className="relative z-10 flex items-center justify-between">
                {/* Circular Icon with Cyan Glow */}
                <div className="w-14 h-14 rounded-full bg-[#050B1A]/90 border border-kw-cyan/60 flex items-center justify-center text-kw-cyan shadow-glow-cyan">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Age Badge */}
                <span className="px-4 py-1.5 rounded-full bg-[#0B2545]/80 backdrop-blur-md border border-kw-cyan/30 text-xs font-bold text-kw-cyan uppercase tracking-widest">
                  {prog.age}
                </span>
              </div>

              {/* Bottom Content inside Card */}
              <div className={`relative z-10 max-w-2xl ${isEven ? 'self-end text-left sm:text-right' : ''}`}>
                <h2 className="font-heading italic font-extrabold text-4xl sm:text-6xl text-white mb-2">
                  {prog.title}
                </h2>

                <p className="text-kw-cyan font-bold text-lg sm:text-xl italic mb-4">
                  "{prog.tagline}"
                </p>

                <p className="text-kw-muted text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                  {prog.description}
                </p>

                {/* Action Button: Inscríbete (opens WhatsApp) */}
                <div className={`flex items-center gap-4 ${isEven ? 'justify-start sm:justify-end' : ''}`}>
                  <a
                    href={`${general.whatsappUrl}&text=Hola%20Academia%20KW,%20deseo%20inscribirme%20en%20el%20programa%20de%20${prog.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue text-kw-dark font-heading font-bold text-sm uppercase tracking-wider hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
                  >
                    <span>Inscríbete</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <PhotoCredit text={prog.photoCredit} />
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Floating Bottom Socials */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
        <SocialIcons />
        <span className="text-xs text-kw-muted">
          Piscina temperada en Loja, Ecuador
        </span>
      </div>

    </div>
  );
}

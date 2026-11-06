import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Waves } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';
import PhotoCredit from '../components/PhotoCredit';
import { content } from '../data/content';

export default function Story() {
  const { story } = content;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-kw-dark">
      
      {/* Background Image with Dark Bluish Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={story.backgroundImage}
          alt="Historia de Academia KW Natación en Loja"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/95 via-[#050B1A]/85 to-[#0A1F3D]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-[#050B1A]/70" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-36 pb-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Subtitle with spaced letters */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-kw-cyan" />
              <span className="font-heading uppercase tracking-[0.3em] text-xs sm:text-sm font-bold text-kw-cyan">
                {story.subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading italic font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-8">
              {story.title}
            </h1>

            {/* Required Exact Text */}
            <p className="text-xl sm:text-2xl text-white font-light leading-relaxed mb-6 drop-shadow">
              "{story.text}"
            </p>

            <p className="text-sm sm:text-base text-kw-muted leading-relaxed mb-10 max-w-xl">
              {story.extendedText}
            </p>

            {/* Minimalist Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pt-6 border-t border-kw-cyan/20">
              {story.stats.map((s, idx) => (
                <div key={idx}>
                  <div className="font-heading font-black italic text-2xl sm:text-3xl text-kw-cyan">
                    {s.value}
                  </div>
                  <div className="text-xs text-kw-muted mt-1 uppercase tracking-wider font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action to Programs */}
            <div>
              <Link
                to="/programas"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-kw-cyan text-kw-cyan font-heading font-bold text-sm uppercase tracking-wider bg-transparent hover:bg-kw-cyan hover:text-kw-dark hover:shadow-glow-cyan transition-all duration-300 group"
              >
                <span>Conoce los Programas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Orca (Killer Whale) Swimming Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Outer Cyan Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-kw-cyan/30 to-kw-blue/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Orca Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-kw-cyan/40 bg-[#0B2545]/70 shadow-2xl">
                <img
                  src={story.orcaImage}
                  alt="Orca Killer Whale nadando bajo el agua - Inspiración de Academia KW"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A]/90 via-transparent to-transparent" />
                
                {/* Floating Orca Legend */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#050B1A]/85 backdrop-blur-md border border-kw-cyan/30">
                  <div className="flex items-center gap-2 text-kw-cyan text-xs font-bold uppercase tracking-wider mb-1">
                    <Waves className="w-4 h-4" />
                    <span>Emblema Killer Whale</span>
                  </div>
                  <p className="text-xs text-kw-muted">
                    Fuerza, coordinación y elegancia en el agua.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Bottom Socials & Photo Credit */}
      <div className="relative z-10 px-6 sm:px-12 py-6 border-t border-white/5 flex items-center justify-between">
        <SocialIcons />
        <PhotoCredit text={story.photoCredit} />
      </div>

    </div>
  );
}


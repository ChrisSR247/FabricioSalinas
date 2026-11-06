import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import SocialIcons from './SocialIcons';
import { content } from '../data/content';

export default function MenuOverlay({ isOpen, onClose }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#050B1A]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal de navegación"
        >
          {/* Top Bar: Brand Logo & Close Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Academia KW"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-heading font-black italic text-lg tracking-tight text-white">KW</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-kw-cyan font-bold">KILLER WHALE</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-kw-cyan/40 bg-[#0B2545]/60 hover:bg-kw-cyan hover:text-kw-dark text-white font-heading text-xs uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-kw-cyan group"
              aria-label="Cerrar menú"
            >
              <span className="hidden sm:inline">Cerrar</span>
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Middle: Huge Clean Links (Framer Motion Staggered) */}
          <nav className="my-auto py-8">
            <ul className="space-y-4 sm:space-y-6">
              {content.navigation.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group inline-flex items-center gap-4 text-3xl sm:text-5xl lg:text-6xl font-heading font-black italic tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-kw-cyan pl-3 border-l-4 border-kw-cyan'
                          : 'text-white/80 hover:text-white hover:translate-x-3'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 text-kw-cyan transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Bottom Bar: Location, Contact & Social Corner */}
          <div className="pt-6 border-t border-kw-cyan/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-kw-muted">
              <span className="flex items-center gap-1.5 text-white">
                <MapPin className="w-4 h-4 text-kw-cyan" />
                {content.general.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-kw-cyan" />
                {content.general.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-kw-cyan" />
                {content.general.email}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-kw-muted hidden sm:inline">
                Síguenos
              </span>
              <SocialIcons />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}


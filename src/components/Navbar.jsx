import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import KwLogo from './KwLogo';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-kw-dark/95 backdrop-blur-md border-b border-kw-cyan/25 shadow-lg shadow-kw-dark/60 py-3' 
          : 'bg-kw-dark/65 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group" aria-label="Academia KW Killer Whale - Inicio">
            <KwLogo variant="navbar" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {academyData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-kw-muted hover:text-kw-cyan hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) with Blinking Live Indicator */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#inscripciones"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-kw-dark bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <BlinkingDot variant="live" color="green" />
              <span>Inscríbete</span>
              <SparkleStar className="w-3.5 h-3.5 text-kw-dark" glow={false} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-kw-cyan hover:bg-kw-card/60 border border-kw-cyan/30 transition-colors focus:outline-none focus:ring-2 focus:ring-kw-cyan"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050E1D]/95 backdrop-blur-xl border-b border-kw-cyan/30 px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-3" aria-label="Navegación móvil">
            {academyData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-kw-cyan hover:translate-x-1.5 transition-all py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <BlinkingDot variant="blink" color="cyan" size="sm" />
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#inscripciones"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-heading font-bold uppercase tracking-wider text-kw-dark bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue shadow-glow-cyan"
            >
              <BlinkingDot variant="live" color="green" />
              <span>Inscríbete Ahora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

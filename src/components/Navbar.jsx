import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import MenuOverlay from './MenuOverlay';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-5 sm:py-6 flex items-center justify-between transition-all duration-300 pointer-events-none">
        
        {/* Top-Left: KW Logo (Pointer events auto to be clickable) */}
        <div className="pointer-events-auto">
          <BrandLogo />
        </div>

        {/* Top-Right: Clean Minimalist Hamburger / Menu Trigger */}
        <div className="pointer-events-auto">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#050B1A]/85 backdrop-blur-md border border-kw-cyan/40 text-white hover:text-kw-cyan hover:border-kw-cyan hover:shadow-glow-cyan focus:outline-none focus:ring-2 focus:ring-kw-cyan transition-all duration-300 group"
            aria-label="Abrir menú a pantalla completa"
          >
            <span className="font-heading font-bold text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all">
              Menú
            </span>
            {/* Custom 2-bar animated minimalist hamburger icon */}
            <div className="flex flex-col gap-1.5 w-5 justify-center items-end">
              <span className="h-0.5 w-5 bg-kw-cyan rounded-full group-hover:w-4 transition-all" />
              <span className="h-0.5 w-3.5 bg-kw-cyan rounded-full group-hover:w-5 transition-all" />
            </div>
          </button>
        </div>

      </header>

      {/* Full-Screen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

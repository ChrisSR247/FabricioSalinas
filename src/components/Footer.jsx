import React from 'react';
import { academyData } from '../data/academyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-kw-cyan/20 bg-kw-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Copyright */}
          <p className="text-xs text-kw-muted">
            © {currentYear} <span className="text-white font-semibold">{academyData.general.name}</span>. Todos los derechos reservados.
          </p>

          {/* Location & Tagline */}
          <div className="flex items-center gap-3 text-xs text-kw-muted">
            <span>Loja, Ecuador</span>
            <span className="text-kw-cyan/40">•</span>
            <span className="text-kw-cyan font-medium">Piscina Temperada</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

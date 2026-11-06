import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ className = "h-12 sm:h-14", onClick }) {
  return (
    <Link 
      to="/" 
      onClick={onClick}
      className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-kw-cyan rounded-lg transition-transform hover:scale-105"
      aria-label="Academia KW Killer Whale - Inicio"
    >
      <img
        src="/images/logo.png"
        alt="Academia KW Killer Whale - Logo Oficial"
        className={`w-auto object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] ${className}`}
      />
    </Link>
  );
}

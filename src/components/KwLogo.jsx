import React from 'react';

export default function KwLogo({ variant = 'navbar', className = '' }) {
  if (variant === 'calligraphy') {
    return (
      <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
        {/* Orca & Shield Emblem */}
        <div className="relative mb-3 group">
          <div className="absolute -inset-2 bg-kw-cyan/20 rounded-full blur-xl group-hover:bg-kw-cyan/40 transition duration-500"></div>
          <svg className="w-24 h-24 text-kw-cyan drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Hexagon / Shield */}
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" stroke="currentColor" strokeWidth="2.5" fill="rgba(11,37,69,0.7)" />
            {/* Stylized Orca / Whale Fin cutting water */}
            <path d="M30 65 C40 40 45 30 65 25 C58 38 62 48 70 54 C55 52 45 56 30 65 Z" fill="url(#cyanGradLg)" />
            {/* Water waves */}
            <path d="M22 75 Q35 70 50 75 T78 75" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M28 82 Q40 78 50 82 T72 82" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <defs>
              <linearGradient id="cyanGradLg" x1="30" y1="25" x2="70" y2="65" gradientUnits="userSpaceOnUse">
                <stop stopColor="#22D3EE" />
                <stop offset="1" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Calligraphy / Italic Bold Typography */}
        <div className="flex flex-col items-center">
          <span className="font-heading font-black italic text-4xl sm:text-5xl tracking-tighter bg-gradient-to-r from-white via-cyan-200 to-kw-cyan bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)]">
            KW
          </span>
          <span className="font-heading italic font-bold tracking-[0.25em] text-lg sm:text-xl text-kw-cyan uppercase mt-1">
            Killer Whale
          </span>
          <span className="text-xs uppercase tracking-[0.35em] text-kw-muted font-medium mt-1">
            Academia de Natación · Loja
          </span>
        </div>
      </div>
    );
  }

  // Default navbar variant
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Mini Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-kw-card/90 border border-kw-cyan/40 shadow-glow-cyan-sm group-hover:border-kw-cyan transition-all">
        <svg className="w-7 h-7 text-kw-cyan" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield */}
          <polygon points="20,3 36,11 36,29 20,37 4,29 4,11" stroke="currentColor" strokeWidth="1.8" fill="rgba(10,31,61,0.6)" />
          {/* Fin */}
          <path d="M12 26 C16 16 19 12 28 10 C25 15 27 19 30 22 C24 21 19 23 12 26 Z" fill="currentColor" />
          <path d="M10 30 Q15 28 20 30 T30 30" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="font-heading font-black italic text-xl tracking-tight text-white">KW</span>
          <span className="font-heading font-bold italic text-sm tracking-wider text-kw-cyan uppercase">KILLER WHALE</span>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-kw-muted font-semibold">
          Academia de Natación
        </span>
      </div>
    </div>
  );
}


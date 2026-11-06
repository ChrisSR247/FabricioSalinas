import React from 'react';

/**
 * Puntos que se prenden y apagan (Blinking / Pulsing LED & Sparkle Dots)
 * Variants:
 * - 'live': Live indicator with radar ping wave
 * - 'blink': LED dot that turns on and off smoothly
 * - 'twinkle': Aquatic sparkle dot with glowing halo
 * - 'cluster': Small trio of staggered blinking dots
 */
export default function BlinkingDot({ 
  variant = 'blink', 
  color = 'cyan', // 'cyan' | 'green' | 'sky'
  size = 'md',    // 'sm' | 'md' | 'lg'
  className = '',
  label = null
}) {
  const colorMap = {
    cyan: {
      bg: 'bg-kw-cyan',
      ping: 'bg-kw-cyan',
      shadow: 'shadow-[0_0_8px_rgba(34,211,238,0.9)]',
    },
    green: {
      bg: 'bg-emerald-400',
      ping: 'bg-emerald-400',
      shadow: 'shadow-[0_0_8px_rgba(52,211,153,0.9)]',
    },
    sky: {
      bg: 'bg-kw-sky',
      ping: 'bg-kw-sky',
      shadow: 'shadow-[0_0_8px_rgba(56,189,248,0.9)]',
    }
  };

  const current = colorMap[color] || colorMap.cyan;

  const sizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  if (variant === 'live') {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.ping} opacity-75`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${current.bg} ${current.shadow}`} />
        </span>
        {label && <span className="text-[11px] font-semibold text-white/90">{label}</span>}
      </span>
    );
  }

  if (variant === 'cluster') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-kw-cyan animate-blink-dot-1 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
        <span className="w-2 h-2 rounded-full bg-kw-sky animate-blink-dot-2 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <span className="w-1.5 h-1.5 rounded-full bg-kw-cyan animate-blink-dot-3 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
      </div>
    );
  }

  // Default 'blink' variant (turns on and off periodically)
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span 
        className={`rounded-full ${sizeClasses[size] || 'w-2 h-2'} ${current.bg} animate-blink-dot-1 ${current.shadow}`} 
      />
      {label && <span className="text-[11px] font-semibold tracking-wider uppercase text-kw-cyan">{label}</span>}
    </span>
  );
}


import React from 'react';

export default function PhotoCredit({ text = "Foto: Academia KW", className = "" }) {
  return (
    <div className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-kw-muted/60 select-none ${className}`}>
      {text}
    </div>
  );
}


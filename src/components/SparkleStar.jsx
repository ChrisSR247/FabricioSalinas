import React from 'react';

/**
 * Exact Sparkle Star Symbol from design reference:
 * - 4-point curved star
 * - Top-right mini plus (+)
 * - Bottom-left mini dot (•)
 */
export default function SparkleStar({ className = "w-6 h-6", animate = true, glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full text-kw-cyan ${
          glow ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.75)]' : ''
        } ${animate ? 'animate-pulse' : ''}`}
      >
        {/* Main 4-point curved star with smooth concave arms */}
        <path
          d="M16 4 C16 10 20.5 14.5 26.5 14.5 C20.5 14.5 16 19 16 25 C16 19 11.5 14.5 5.5 14.5 C11.5 14.5 16 10 16 4 Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top-right Plus (+) mark */}
        <path
          d="M26.5 5 V9.5 M24.2 7.2 H28.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Bottom-left Dot (•) mark */}
        <circle
          cx="7.5"
          cy="22.5"
          r="1.9"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}


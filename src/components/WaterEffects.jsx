import React from 'react';

/**
 * WaterBubbles: Realistic animated swimming pool bubbles rising upwards
 */
export function WaterBubbles({ count = 14, className = "" }) {
  // Pre-configured bubble properties for varied natural movement
  const bubbles = [
    { left: '8%', size: '14px', duration: '9s', delay: '0s' },
    { left: '18%', size: '22px', duration: '12s', delay: '2.5s' },
    { left: '26%', size: '10px', duration: '7.5s', delay: '1s' },
    { left: '38%', size: '18px', duration: '11s', delay: '4s' },
    { left: '47%', size: '12px', duration: '8.5s', delay: '0.8s' },
    { left: '58%', size: '26px', duration: '13s', delay: '3.2s' },
    { left: '68%', size: '15px', duration: '9.5s', delay: '1.8s' },
    { left: '79%', size: '20px', duration: '11.5s', delay: '5s' },
    { left: '88%', size: '11px', duration: '8s', delay: '2s' },
    { left: '94%', size: '16px', duration: '10s', delay: '3.8s' },
    { left: '12%', size: '8px', duration: '6.5s', delay: '4.5s' },
    { left: '62%', size: '9px', duration: '7s', delay: '6s' },
  ].slice(0, count);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="water-bubble"
          style={{
            left: b.left,
            bottom: '-40px',
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}

/**
 * PoolWaves: Multi-layered animated SVG waves flowing continuously like water lanes
 */
export function PoolWaves({ className = "" }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-10 ${className}`}>
      {/* Wave Layer 1 (Deep Blue - Slower) */}
      <div className="relative w-[200%] h-16 sm:h-24 animate-wave-flow opacity-60">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#0A1F3D]">
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Wave Layer 2 (Cyan Gradient - Reverse Speed) */}
      <div className="absolute bottom-0 w-[200%] h-12 sm:h-16 animate-wave-flow-fast opacity-50">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#0B2545]">
          <path d="M0,40 C200,-20 400,80 600,20 C800,-40 1000,70 1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Wave Layer 3 (Cyan Highlight line at top) */}
      <div className="absolute bottom-0 w-[200%] h-8 sm:h-12 animate-wave-flow opacity-80">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-kw-dark">
          <path d="M0,60 C250,10 450,95 700,50 C950,5 1100,75 1200,55 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </div>
  );
}

/**
 * PoolCaustics: Dancing light patterns through water
 */
export function PoolCaustics({ className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute inset-0 pool-caustic-overlay animate-caustics-dance" />
    </div>
  );
}

/**
 * WaterDropRipple: Concentric ripple wave originating from water drops
 */
export function WaterDropRipple({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center pointer-events-none ${className}`}>
      <span className="absolute w-8 h-8 rounded-full border border-kw-cyan/80 animate-pool-ripple" />
      <span className="absolute w-8 h-8 rounded-full border border-kw-sky/60 animate-pool-ripple [animation-delay:1.2s]" />
      <span className="absolute w-8 h-8 rounded-full border border-kw-cyan/40 animate-pool-ripple [animation-delay:2.4s]" />
    </div>
  );
}


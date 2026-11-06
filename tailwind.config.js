/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kw: {
          dark: '#050B1A',        // Fondo principal ultra oscuro
          navy: '#0A1F3D',        // Degradados de fondo
          card: '#0B2545',        // Fondo base de tarjetas
          cyan: '#22D3EE',        // Acento primario cian eléctrico
          sky: '#38BDF8',         // Acento secundario azul cielo
          blue: '#0EA5E9',        // Azul vibrante
          deep: '#0369A1',        // Azul profundo
          muted: '#B6C8DC',       // Texto gris azulado claro
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.4)',
        'glow-cyan-lg': '0 0 50px -5px rgba(34, 211, 238, 0.6)',
        'glow-cyan-sm': '0 0 15px -3px rgba(34, 211, 238, 0.35)',
        'glow-badge': '0 0 30px rgba(34, 211, 238, 0.35), inset 0 0 15px rgba(34, 211, 238, 0.15)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'pool-light': '0 0 60px rgba(34, 211, 238, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatWater: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-6px) rotate(0.5deg)' },
          '75%': { transform: 'translateY(4px) rotate(-0.5deg)' },
        },
        blinkDot: {
          '0%, 100%': {
            opacity: '0.15',
            transform: 'scale(0.8)',
            filter: 'drop-shadow(0 0 0px transparent)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.25)',
            filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 1))',
          },
        },
        waterWave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        waterWaveReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        caustics: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.35' },
          '50%': { transform: 'scale(1.18) rotate(4deg)', opacity: '0.6' },
        },
        poolRipple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.9' },
          '100%': { transform: 'scale(2.6)', opacity: '0' },
        },
        shimmerWater: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-water': 'floatWater 5s ease-in-out infinite',
        'blink-dot-1': 'blinkDot 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink-dot-2': 'blinkDot 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.4s',
        'blink-dot-3': 'blinkDot 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.8s',
        'wave-flow': 'waterWave 18s linear infinite',
        'wave-flow-fast': 'waterWaveReverse 12s linear infinite',
        'caustics-dance': 'caustics 8s ease-in-out infinite',
        'pool-ripple': 'poolRipple 3.5s cubic-bezier(0, 0.2, 0.8, 1) infinite',
        'shimmer-badge': 'shimmerWater 6s linear infinite',
      }
    },
  },
  plugins: [],
}

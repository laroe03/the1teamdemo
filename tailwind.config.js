/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'wave-1': 'wave1 25s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'wave-2': 'wave2 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'wave-3': 'wave3 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'wave-slide': 'slideRight 120s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        wave1: {
          '0%, 100%': { transform: 'translateX(-50%) scaleY(1)' },
          '50%': { transform: 'translateX(-50%) scaleY(1.2)' },
        },
        wave2: {
          '0%, 100%': { transform: 'translateX(-45%) scaleY(1)' },
          '50%': { transform: 'translateX(-45%) scaleY(1.1)' },
        },
        wave3: {
          '0%, 100%': { transform: 'translateX(-40%) scaleY(1)' },
          '50%': { transform: 'translateX(-40%) scaleY(1.15)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
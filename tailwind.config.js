/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#F0E040',
          400: '#E8D420',
          500: '#D4C012',
          600: '#B8A810',
          700: '#9A8C0E',
          premium: '#C9A84C',
        },
        dark: {
          50:  '#1A1A1A',
          100: '#141414',
          200: '#111111',
          300: '#0E0E0E',
          400: '#080808',
          500: '#080808',
        },
      },
      fontFamily: {
        bebas: ['"Barlow Condensed"', 'sans-serif'],
        inter: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4C012 0%, #C9A84C 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080808 0%, #111111 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 192, 18, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(212, 192, 18, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

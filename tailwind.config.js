/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#0b0f1a',
        aurora: '#7c5cff',
        neon: '#21d4fd'
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 92, 255, 0.35)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
        'hero-gradient': 'radial-gradient(circle at top, rgba(124, 92, 255, 0.3), transparent 60%), radial-gradient(circle at 20% 20%, rgba(33, 212, 253, 0.2), transparent 50%)'
      }
    }
  },
  plugins: []
};

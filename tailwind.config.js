/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        "vision-purple": "#7C3AED",
        "vision-cyan": "#22D3EE",
        "vision-rose": "#FB7185"
      },
      boxShadow: {
        glass: "0 8px 32px rgba(15, 23, 42, 0.25)"
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.35" },
          "100%": { transform: "scale(4)", opacity: "0" }
        }
      },
      animation: {
        glow: "glow 4s ease-in-out infinite",
        ripple: "ripple 0.6s ease-out"
      }
    }
  },
  plugins: []
};

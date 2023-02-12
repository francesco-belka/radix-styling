/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#242424",
      },
      keyframes: {
        popIn: {
          "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
          "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        popIn: "popIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      }
    },
  },
  plugins: [],
};

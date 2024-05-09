/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const FlipPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".rotate-y-360": {
      transform: "rotateY(360deg)",
    },
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [FlipPlugin],
};

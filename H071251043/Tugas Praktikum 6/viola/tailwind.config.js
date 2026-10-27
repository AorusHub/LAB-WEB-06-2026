/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Arial Narrow"', "Impact", "sans-serif"],
        handwritten: ['"Comic Sans MS"', "cursive"],
      },
    },
  },
  plugins: [],
};
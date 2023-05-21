/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main": "#0891b2",
        "secondary": "#22d3ee"
      }
    },
  },
  plugins: [],
};

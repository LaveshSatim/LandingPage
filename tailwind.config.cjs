/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {

        '112': '28rem',
        '144': '36rem'
      }
    },
  },
  plugins: [],
}

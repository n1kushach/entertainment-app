/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pureWhite': "#FFFFFF",
        'red': '#FC4747',
        'darkBlue': '#10141E',
        'greyishBlue': '#5A698F',
        'semiDarkBlue': '#161D2F',
      },
      fontFamily: {
        'Outfit': ['"Outfit"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
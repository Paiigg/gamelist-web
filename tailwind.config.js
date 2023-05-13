/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#3B44F6',
      'secondary':'#D8DAFD',
      'black':'#181818',
      'white':'#FFFFFF'
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

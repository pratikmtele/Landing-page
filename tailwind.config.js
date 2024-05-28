/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'voiletblue': '#3F41A6',
        'sonicsilver': '#787282',
        'black': '#000000',
        'white': '#FFFFFF',
        'cetaceanblue': '#1A093E',
        'silversand': '#C4C4C4',
        'ghostwhite': '#F9F9FC',
        'darkpurple': '#1A093C',
        'green': '#53E546',
        'magnolia': '#F6F5FB',
        'cultured': '#F4F5F9',
        'orange': '#F96056',
        'pastelorange': '#FDBD45',
        'lightsilver': '#D9D9D9',
        'violet': '#431898',
        'onyx': '#3C3842'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize:{
        '2.5rem': ['2.5rem', {
          lineHeight: '1.2'
        }],
      },
      borderRadius:{
        'large': '3.5rem'
      }
    },
  },
  plugins: [],
}


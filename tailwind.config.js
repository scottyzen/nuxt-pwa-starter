const colors = require('tailwindcss/colors')
module.exports = {
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      indigo: colors.indigo,
      blue: colors.cyan,
      pink: colors.pink,
      green: colors.green,
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  },
}

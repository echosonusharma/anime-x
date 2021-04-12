// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      violet: colors.violet,
      purple: colors.purple,
      green: colors.green,
      'light-dark': '#4D516D',
    },
    extend: {
      width: {
        108: '27rem',
        120: '30rem',
        132: '33rem',
        144: '36rem',
        156: '38rem',
      },
      height: {
        108: '27rem',
        120: '30rem',
        132: '33rem',
        144: '36rem',
        156: '38rem',
      },
      variants: {
        extend: {},
      },
      plugins: [],
    },
  },
};

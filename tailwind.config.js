module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '108': '27rem',
        '120': '30rem',
        '132': '33rem'
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
  }
}
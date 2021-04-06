module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-slow-reverse': 'spin 5s linear infinite reverse',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

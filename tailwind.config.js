/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px',
    },
    color: {
      purple: '#000000',
      lightPurple: '#AA79FA',
    },
    extend: {
      fontFamily: {
        'chain': ["'chainwhacks'", ...defaultTheme.fontFamily.sans],
        'aldrich': ["'aldrich-regular'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

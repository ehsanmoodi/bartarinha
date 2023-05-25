/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      peyda: ['var(--font-peyda)'],
    },
    colors: {
      transparent: 'transparent',
      primary: '#27A3CB',
      secondary: '#303842',
      white: '#fff',
      black: '#000',
      neutral: {
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#A9A9A9',
      },
    },
    extend: {
      backgroundImage: {
        'item-layer':
          'linear-gradient(180deg, rgba(39, 163, 203, 0) 0%, rgba(39, 163, 203, 0.8) 100%)',
      },
      boxShadow: {
        'cat-item': '32px 32px 50px rgba(39, 163, 203, 0.14)',
        'package-item': '42px 42px 50px rgba(39, 163, 203, 0.14)',
        item: '0px 34px 50px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('svg', '&>svg')
    }),
  ],
}

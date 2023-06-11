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
      orange: '#F26F14',
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
        'featured-layer':
          'linear-gradient(179.54deg, rgba(36, 42, 50, 0) 27.98%, rgba(36, 42, 50, 0.82) 99.58%)',
        'mobile-banner-layer':
          'linear-gradient(180deg, rgba(39, 163, 203, 0) 0%, #27A3CB 100%)',
        'desktop-banner-layer':
          'linear-gradient(90deg, rgba(39, 163, 203, 0) 0%, #27A3CB 100%)',
      },
      boxShadow: {
        'cat-item': '32px 32px 50px rgba(39, 163, 203, 0.14)',
        'package-item': '42px 42px 50px rgba(39, 163, 203, 0.14)',
        item: '0px 34px 50px rgba(0, 0, 0, 0.07)',
        header: '0px 32px 50px -10px rgba(0, 0, 0, 0.06)',
        submenu: '0px 60px 50px -28px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('svg', '&>svg')
    }),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      })
    }),
  ],
}

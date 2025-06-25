/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current:     'currentColor',
        transparent: 'transparent',

        // Core brand colors - directly from @theme
        background: 'var(--color-background)',
        surface:    'var(--color-surface)',
        primary:    'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary:  'var(--color-secondary)',
        accent:     'var(--color-accent)',
        text:       'var(--color-text)',

        // Brand color palette - accessible via cd-* classes
        'cd-coral':        'var(--color-cd-coral)',
        'cd-coral-hover':  'var(--color-cd-coral-hover)',
        'cd-teal-light':   'var(--color-cd-teal-light)',
        'cd-teal-dark':    'var(--color-cd-teal-dark)',
        'cd-navy-light':   'var(--color-cd-navy-light)',
        'cd-navy-dark':    'var(--color-cd-navy-dark)',
        'cd-sand-light':   'var(--color-cd-sand-light)',
        'cd-sand-dark':    'var(--color-cd-sand-dark)',
        'cd-charcoal':     'var(--color-cd-charcoal)',
        'cd-white':        'var(--color-cd-white)',
        'cd-bg-dark':      'var(--color-cd-bg-dark)',
        'cd-surface-light': 'var(--color-cd-surface-light)',

        // Legacy aliases - for backward compatibility
        white:       'var(--color-cd-white)',
        black:       'var(--color-cd-charcoal)',
        dark:        'var(--color-cd-bg-dark)',
        yellow:      'var(--color-secondary)',

        'body-color': {
          DEFAULT: 'var(--color-text)',
          dark:    'var(--color-cd-white)',
        },

        stroke: {
          stroke: 'var(--color-accent)',
          dark:   'var(--color-accent)',
        },

        gray: {
          ...colors.gray,
          dark:  'var(--color-cd-sand-dark)',
          light: 'var(--color-cd-sand-light)',
        },
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#021f5b',
          light: '#0a2d73',
          dark: '#011438',
        },
        light: {
          DEFAULT: '#e9eef8',
          bg: '#f2f5fb',
          dark: '#d8e1f0',
        },
        blue: {
          soft: '#80b1d2',
          periwinkle: '#87a6dd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Baloo 2', 'Nunito', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        // Warm, trustworthy palette with soft pastel accents for a nursery
        cream: {
          50: '#fffdf9',
          100: '#fdf6ec',
          200: '#f9ead4',
        },
        peach: {
          50: '#fff5f0',
          100: '#ffe6d9',
          200: '#ffcdb4',
          300: '#ffb088',
          400: '#ff8e5e',
          500: '#f9703a',
          600: '#e8551f',
          700: '#c43f17',
        },
        teal: {
          50: '#f0fbf9',
          100: '#d6f5ef',
          200: '#aeebe0',
          300: '#7bdccc',
          400: '#48c3b5',
          500: '#2aa89c',
          600: '#1f857c',
          700: '#1c6a63',
        },
        sun: {
          100: '#fff8d6',
          200: '#ffec9e',
          300: '#ffdd63',
          400: '#ffc933',
          500: '#f5b21a',
        },
        rose: {
          100: '#ffe3e8',
          200: '#ffc6d1',
          300: '#ff9fb1',
          400: '#fb6f8e',
        },
        ink: {
          700: '#4a3f37',
          800: '#3a312b',
          900: '#2a2420',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(74, 63, 55, 0.18)',
        card: '0 8px 30px -10px rgba(74, 63, 55, 0.14)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'wiggle': {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

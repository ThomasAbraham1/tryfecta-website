/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4FD8',
          light: '#3B73F5',
          dark: '#0F2D8A',
        },
        secondary: {
          DEFAULT: '#0D1B40',
          light: '#162554',
        },
        accent: {
          DEFAULT: '#00C9A7',
          light: '#00E8C3',
        },
        surface: '#F4F7FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'ui-sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D1B40 0%, #1B4FD8 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(27,79,216,0.08) 0%, rgba(0,201,167,0.05) 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease both',
        'fade-in-left': 'fadeInLeft 0.7s ease both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

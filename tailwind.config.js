/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'sound-wave': 'soundWave 1.2s ease-in-out infinite',
      },
      keyframes: {
        soundWave: {
          '0%, 100%': {
            height: '0.5rem',
          },
          '50%': {
            height: '2rem',
          },
        },
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'progress': 'progress 20s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        },
        keyframes: {
          progress: {
            '0%': { width: '0%' },
            '50%': { width: '70%' },
            '100%': { width: '95%' },
          }
        }
      },
    },
    plugins: [],
  }
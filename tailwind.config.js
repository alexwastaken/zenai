/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '40rem',
      },
      fontSize: {
        'custom': '11rem',
      },
      fontFamily: {
        sans: ['Helvetica'],
      },
      inset: {
        '4/5': '80%',
      },
    },
    
  },
  plugins: [],
}
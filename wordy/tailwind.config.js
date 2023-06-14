/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Dosis', 'sans-serif']
      },
      colors:{
        "coral": "#ff7f50",
        "lime": "#4dff4d",
        "lightRed": "#ff4433"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-green': '#4e6c50',
        'green-grey': '#A2A378',
        'brown': '#c1ae93',
        'beige': '#a7ab90'
      }
    },

  },
  plugins: [],
}


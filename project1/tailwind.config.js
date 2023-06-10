/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens : {
        'widescreen' : {'raw' : '(min-aspect-radio : 3/2)'},
        'tallscreen' : {'raw' : '(min-aspect-radio : 1/2)'},
      }
    },
  },
  plugins: [],
}


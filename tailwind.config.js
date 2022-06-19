/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
  'fontawesome-svg-core': {
    'license': 'free'
  },
  theme: {
    extend: {},
   
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

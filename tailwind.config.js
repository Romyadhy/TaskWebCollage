/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./public/*.html", 
  "./public/home.html", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'second': '#60a5fa',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#152259',
        secondary: '#509CDB',
        header: '#4F4F4F',
        background: '#f3f4f6', // Custom background color
        surface: '#ffffff', // Custom surface color
        red: '#ff0000', // Custom error color
      },
    },
  },
  plugins: [],
}


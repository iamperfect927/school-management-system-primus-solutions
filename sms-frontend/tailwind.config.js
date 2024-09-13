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
        table_head: '#424242',
        table_body: '#4F4F4F',
        table_bg: '#EBF6FF80',
        btn_bg: '#F1F1F1',
        background: '#f3f4f6', // Custom background color
        white: '#ffffff', // Custom surface color
        red: '#ff0000', // Custom error color
        border_col : '#BDBDBD',

      },
    },
  },
  plugins: [],
}


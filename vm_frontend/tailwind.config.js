/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#436EE8',
        primary_hover: '#4374e8',
        primary_focus: '#436fe8',
        con_block: '#CBD3FF',
        secondary: '#262626',
        i_muted: '#818181',
      },
    },
  },
  plugins: [],
}

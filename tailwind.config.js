/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 27%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(222, 12%, 13%)',
        veryPalRed: 'hsl(12, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 69%)',

      }
    },
  },
  plugins: [],
}


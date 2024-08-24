/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '465px', // Custom breakpoint for extra small screens
      },
    },
    container:{
      center:true
    }
  },
  plugins: [],
}


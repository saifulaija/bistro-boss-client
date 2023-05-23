/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:'Poppins',
      def: 'Shantell Sans',
    }
  },
   plugins: [require("daisyui")],

}


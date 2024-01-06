/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      white: '#FFFFFF',
      orenge:{
        800:"#f77f00"
      },
      black: {
        800:"#1e1e1e",
        900:"#000000"
      },
      blue:{
        700:"#0a9396",
        800:"#0066ff",
        900:"#1D2581"
      },
      yellow:{
        500:"#ffd60a"
      }
    },
    fontFamily:{
      ubuntu:['Ubuntu Mono','monospace'],
      poppins:['Poppins','sans-serif'],
      Alton:["Anton","sans-serif"]
    },
    borderRadius:{
      DEFAULT:"4px",
    },
    extend: {
    
    },
  },
  plugins: [],
}
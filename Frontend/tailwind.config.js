/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-image':"url(/Background3N.png)",
        'custom-image2':"url(/new.jpg)",
      },
      colors:{
        beige:'#F5F5DC',
        beigeDark:'#FFEEDF',
        darkBlue:'#2A3663',
        socialColor2:'#EEEEEE',
        contentColor:'#141415',
        brownBlackShade:'#191A1B',
        greyforCoord:'#636262'
      }
    },
    fontFamily:{
      vibes: ["Courgette"],
      dmSans: ["DM Sans"],
      ezcar:["Eczar"],
      poppins:["Poppins"],
      noto:["Noto Serif"],
      playFair:["Playfair Display"]
    }
  },
  plugins: [],
}
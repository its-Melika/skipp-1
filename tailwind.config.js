/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'third-color': '#F53838',
        'first-color' : '#0B132A',
        'second-color' : '#4F5665',
        'border-color' : '#EEEFF2',
        'second-bg' : 'rgb(251 251 251)',
        'second-border-color' : '#DDDDDD',
        'btn-color' : '#DDE0E4',
        
      },
      width :{
        'custome-width-btn': '150px',
        'logo-width' : '30%',
        'start-btn' : '250px',
        'width-330' : '330px',
        'width-177' : '177px',
        'width-400' : '403px',
        'width-60' : '60px',
        'width-390' : '390px',
        'width-1000' : '1140px'

      },
      height:{
        'custome-height-btn' : '45px',
        'start-btn' : '60px',
        'height-200' : '200px',
        'height-760' : '760px',
        'height-45' : '45px',
        'height-560' : '563px',
        'height-230': '233px'

      },
      borderWidth :{
        'custome-width-border' : '1px',
      },
      borderRadius:{
        'radiuse-50' : '50px',
        'radiuse-10' : '10px'
      },
      fontSize:{
        'size-50': '50px'
      },
      boxShadow:{
        'btn-start': '0px 115px 175px -61px;'
      },
      screens:{
        'sm': { 'max': '640px' },
        'md': { 'max': '768px' },
        'lg': { 'max': '1024px' },
        'xl': { 'max': '1280px' },
      }
      
    },
  },
  plugins: [],
  
}

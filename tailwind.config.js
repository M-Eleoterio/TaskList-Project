/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        blue:{
          'claro': '#121212'
        }
      },
      animation: {
        'loadindLink': 'loadindLink_kf .5s ease-in-out normal',
      },
      keyframes:{
        'loadindLink_kf': {
          '0%': {width: '0px'},
          '100%': {width: '100%'}
        }
      }
      
    },
  },
  plugins: [],
}


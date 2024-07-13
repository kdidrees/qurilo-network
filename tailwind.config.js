/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors:{
        // 'purple':'#cc3d5c',
        'networkbg':'#F2F2F2',
        'first':'#0A142A',
        'second':"#D6DFF9",
        'third':"#E1DCF3",
        'fourth':"#F9EBDD", 
        "blue":"#558BDC",
        "creme":"#f9ebdd",
        "carasoul":"#0D184B",
        "desc":"#3e3e3e"
      }
      
      ,
      boxShadow:{
        "custom": '0 4px 6px -1px rgba(53, 4, 40, 0.5), 0 2px 4px -1px rgba(53, 4, 40, 0.3)',
      }
    
    },
  },
  plugins: [],
}
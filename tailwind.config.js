/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // 'purple':'#cc3d5c',
        // 'networkbg':'#F2F2F2',
        // 'first':'#0A142A',

        second: "#D6DFF9",
        third: "#E1DCF3",
        fourth: "#F9EBDD",
        "text-primary-500": "#558BDC",
        blue: "#558BDC",
        creme: "#f9ebdd",
        carasoul: "#0D184B",
        desc: "#3e3e3e",
        "#f1f1f1":"#f1f1f1"
      },

      keyframes: {
        slideIn: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
        slideOut: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
      },
      animation: {
        "slide-in": "slideIn 1s forwards",
        "slide-out": "slideOut 1s forwards",
      },
    },
  },
  plugins: [],
};

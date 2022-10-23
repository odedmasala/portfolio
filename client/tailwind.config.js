/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        heroPattern: [
          "url('/youTubePro.png');background-position: center; background-size: cover; background-repeat: no-repeat;",
        ],
        footerTexture: "url('/youTubePro.png')",
        darked: ["linear-gradient(160deg, #0d170d 0%, #213c37 100%)"],
        whiteZone: ["linear-gradient(113deg, #d6d3cc 0%, #a3bfb3 100%)"],
      },
      backgroundColor: {
        darkedColor: ["#0d170d"],
        whiteColor: ["#d6d3cc"],
      },
      boxShadow: {
        navShadowWhiteMode: ["0px 3vh 0px 0px #11111029"],
        navShadowBlackMode: ["0px 3vh 0px 0px #fcfbf427"],
      },
    },
  },
  plugins: [require("daisyui")],
};

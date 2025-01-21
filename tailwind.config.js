/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        e_white: "#ffffff",
        e_lightPink: "#f9f0ff",
        e_grayishPurple: "#8c6991",
        e_darkPurple: "#2f1533",
        e_activePurple: "#ad28eb",
      },
      fontFamily: {
        WorkSans: ['"Work Sans"', "sans-serif"],
      },
      fontSize: {
        e_body: "16px",
      },
      fontWeight: {
        e_regular: 400,
        e_medium: 600,
        e_bold: 700,
      },
      backgroundImage: {
        e_patternMobile: "url('./assets/images/background-pattern-mobile.svg')",
        e_patternDesktop:
          "url('./assets/images/background-pattern-desktop.svg')",
      },
      boxShadow: {
        e_md: "0px 15px 25px 15px rgba(140, 105, 145, 0.125)",
      },
    },
  },
  plugins: [],
};

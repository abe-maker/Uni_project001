/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "2300px",
      },
      colors: {
        "dark-green": "#4e6c50",
        "green-grey": "#A2A378",
        brown: "#c1ae93",
        beige: "#a7ab90",
      },
      dropShadow: {
        textshadow: " 0px 5px 3px rgba(0, 0, 0, 0.3)",
        buttonshadow: "0px 0px 9px rgba(0,0,0,1)",
        headlineshadow: "0px 0px 10px rgba(0,0,0,1)",
        headlineshadowwhite: "0px 0px 10px rgba(255,255,255,1)",
      },
      boxShadow: {
        hard: " 0px 0px 25px rgba(0, 0, 0, 1)",
        soft: " 0px 0px 15px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        playfairdisplay: ["Playfair Display"],
        nunito: ["Nunito"],
        lato: ["Lato"],
        oswald: ["Oswald"],
        anton: ["Anton"],
        passionone: ["Passion One"],
        roboto: ["Roboto"],
        opensans: ["Open Sans"],
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};

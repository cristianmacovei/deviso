/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        night: "#131515",
        jet: "#2b2c28",
        persiangreen: "#339989",
        tiffanyblue: "#7de2d1",
        snow: "#fffafb",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

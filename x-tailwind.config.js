/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
// const colors = require("tailwindcss/colors");
// import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.neutral,
        error: colors.red,
        info: colors.teal,
        success: colors.green,
        warning: colors.yellow,
        // secondary: {
        //   500: "#bfa094",
        // },
      },
    },
  },
  // safelist: [
  //   {
  //     pattern: /(bg|ring)-(primary|secondary|gray)-(50|100|600|700)/,
  //   },
  // ],
};

// module.exports = {
//   theme: {
//     colors: {
//       primary: colors.indigo,
//     },
//   },
// };

// module.exports = {
//   content: [],
//   theme: {
//     colors: {
//       primary: colors.indigo,
//     },
//     extend: {},
//   },
//   plugins: [],
// };

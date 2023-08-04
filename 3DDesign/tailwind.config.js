/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
// export const theme = {
//   extend: {
//     screens: {
//       xl: "1280px",
//     },
//   },
// };
// export const plugins = [];

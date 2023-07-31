/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#121356",
        darkBlue: "#0D0E42",
        lightOrange: "#F64C72",
        lightGray: "#D9D9D9",
        extend: {},
      },
    },
  },
  plugins: [],
};

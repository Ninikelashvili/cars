/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        "background-1": "url('./assets/main-background.svg')",
      },
      colors: {
        "black-1": "#202123",
        "white-1": "#ffffff",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

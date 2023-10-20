/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F152B",
        secondary: "#9CC4E1",
        "secondary-tone-1": "#F5F6E3",
        "secondary-tone-2": "#5A6282",
        "gradient-top": "#3E92B6",
        "gradient-bottom": "#9CC4E1",
      },
      fontFamily: {
        mazzard: ["Mazzard", "sans serif"],
        "mazzard-italic": ["Mazzard-italic", "sans serif"],
      },
    },
  },
  plugins: [],
};

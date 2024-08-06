/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkGray: "hsl(0, 0%, 55%)",
        VeryDarkGray: " hsl(0, 0%, 41%)",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
    },
  },
  plugins: [],
};

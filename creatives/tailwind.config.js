/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      colors: {
        Softred: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        Dark: "hsl(167, 40%, 24%)",
        Darkblue: "hsl(198, 62%, 26%)",
        Darkcyan: "hsl(168, 34%, 41%)",

        Veryblue: "hsl(212, 27%, 19%)",
        Verydark: "hsl(213, 9%, 39%)",
        cyan: "hsl(232, 10%, 55%)",
        Grayishblue: "hsl(210, 4%, 67%)",
      },
    },
  },
  plugins: [],
};

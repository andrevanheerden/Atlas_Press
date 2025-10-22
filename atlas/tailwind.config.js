/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#BC9585",
        chestnut: "#834D40",
        taupe: "#735E57",
        cocoa: "#45322E",
        deepTeal: "#32474C",
        maroon: "#5D1B21",
        navy: "#0E2F4E",
      },
    },
  },
  plugins: [],
};

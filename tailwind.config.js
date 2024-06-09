/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      phone: {max: "500px"},
      tab: {max: "1024px"},
      desktop: {max: "1280px"},
      smallPhone: {max: "340px"},
      MediumPhone : {max : '425px' }
  },
},
  plugins: [scrollbarPlugin()],
}
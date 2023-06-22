/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#7ED957",
        black: "#000000",
        navy: "#14213d",
        white: "#ffffff",
        gray: "#C4C4C4",
        fore: "#8B5CF6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

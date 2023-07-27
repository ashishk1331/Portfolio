/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-quote-borders": theme("colors.primary"),
            "--tw-prose-hr": theme("colors.neutral[50]"),
          },
        },
      }),
      colors: {
        primary: "#FF8551",
        secondary: "#F8FDCF",
        tertiary: "#E384FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

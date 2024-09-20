/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mcolor: "#179957",
        mdark: "#184d47",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
};

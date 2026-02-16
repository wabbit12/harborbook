/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F7F8FB",
        brand: {
          50: "#EFFAFA",
          100: "#D8F3F2",
          500: "#0EA5A8",
          600: "#0B8C8F",
          700: "#0A7072"
        }
      }
    }
  },
  plugins: []
};


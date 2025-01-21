/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Brighter orange
        secondary: "#252525",
        dark: {
          100: "#0A0A0A", // Darker background
          200: "#151515", // Darker sections
          300: "#202020", // Darker elements
        },
        accent: "#3B82F6", // Blue accent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

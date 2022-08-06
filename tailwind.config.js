/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
        roboto: ['"Roboto", sans-serif'],
      },
      colors: {
        warning: "#f97316",
        dark: "#1e293b",
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "dark-blue-testimonials": "hsl(219, 30%, 18%)",
        // ====
        "cyn-gradient": "hsl(176, 68%, 64%)",
        "blue-gradient": "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
      boxShadow: {
        "3xl": "0 0 13px rgba(0, 0, 0, 0.3)",
        // "3xl": "0 5px 15px 0 rgb(0 0 0 / 8%)",
      },
      backgroundImage: {
        "curvy-desktop": "url('/images/bg-curvy-desktop.svg')",
        "curvy-mobile": "url('/images/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};

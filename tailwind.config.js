/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "20px",
          lg: "50px",
          xl: "90px",
        },
      },
    },
  },
  plugins: [],
};

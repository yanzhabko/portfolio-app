/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "line-slide-up": {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
      },
      animation: {
        "line-slide-up": "line-slide-up 0.5s ease-out forwards",
      },
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

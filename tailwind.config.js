/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "save-alert": "saveAlert 0.25s ease-in-out forwards",
      },
      keyframes: {
        saveAlert: {
          "0%": {
            transform: "translateY(-25px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

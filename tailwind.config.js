/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38BBF8",
        secondary: "#CBACF9",
        important: "FD6F00",
        black: "#272727",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

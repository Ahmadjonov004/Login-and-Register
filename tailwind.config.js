export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      l16: {
        to: { transform: "rotate(1turn)" },
      },
    },
    animation: {
      l16: "l16 1s linear infinite",
      l16rev: "l16 0.5s linear infinite reverse",
    },
  },
  plugins: [],
};

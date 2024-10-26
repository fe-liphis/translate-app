/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        38: "38%",
        128: "32rem",
        256: "64rem",
      },
      height: {
        38: "38%",
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};

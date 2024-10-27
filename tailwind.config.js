/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        boxF: "#222431",
        boxT: "#292C3F",
        border: "#4D5562",
        textColor: "#F9FAFB",
      },
      backgroundImage: {
        backgroundApp:
          "url('./src/assets/bryan-goff-f7YQo-eYHdM-unsplash.jpg')",
        // Image by: https://unsplash.com/pt-br/fotografias/aglomerado-de-ilustracao-de-estrela-f7YQo-eYHdM
      },
      width: {
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

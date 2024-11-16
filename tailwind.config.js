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
        textColor2: "#7A879B",
        languageBg: "#4D5562",
        btnBorder: "#7CA9F3",
        textBlue: "#3662E3",
      },
      backgroundImage: {
        bgApp: "url('./src/assets/bryan-goff-f7YQo-eYHdM-unsplash.jpg')",
        // Image by: https://unsplash.com/pt-br/fotografias/aglomerado-de-ilustracao-de-estrela-f7YQo-eYHdM
      },
      backgroundColor: {
        btnBlue: "#3662E3",
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

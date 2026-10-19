/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-text)",
        paper: "var(--color-background)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        muted: "var(--color-muted)",
        line: "var(--color-border)",
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', "sans-serif"],
      },
      boxShadow: { card: "var(--shadow-card)" },
    },
  },
  plugins: [],
};

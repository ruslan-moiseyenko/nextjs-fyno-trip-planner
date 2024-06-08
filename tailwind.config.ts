import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        "sf-pro": ["SF Pro", "-apple-system", "Roboto", "Arial", "sans-serif"]
      },
      fontWeight: {
        thin: "100",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      },
      colors: {
        text_primary: "#000000",
        text_secondary: "#3C3C43CC",
        border_gray: "#9797974D"
        // gray50: "#97979780"
        // gray80: "#9797974D"
      }
    }
  },
  plugins: []
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "shake-vertical": "shake-vertical 20s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both",
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(.5)"
          },
          to: {
            transform: "scale(1)"
          }
        },
        "shake-vertical": {
          "0%,to": {
              transform: "translateY(0)"
          },
          "10%,30%,50%,70%": {
              transform: "translateY(-8px)"
          },
          "20%,40%,60%": {
              transform: "translateY(8px)"
          },
          "80%": {
              transform: "translateY(6.4px)"
          },
          "90%": {
              transform: "translateY(-6.4px)"
          }
      }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          '50': '#f2f4fc',
          '100': '#e2e7f7',
          '200': '#cbd5f2',
          '300': '#a8bbe8',
          '400': '#7e98dc',
          '500': '#6078d1',
          '600': '#4c5ec4',
          '700': '#3f49ab',
          '800': '#3b4092',
          '900': '#333975',
          '950': '#232648',
        },
        secondary: {
          '50': '#fffbeb',
          '100': '#fff4c6',
          '200': '#ffe688',
          '300': '#ffd44a',
          '400': '#ffc021',
          '500': '#f99e07',
          '600': '#dd7602',
          '700': '#b75206',
          '800': '#943e0c',
          '900': '#7a330d',
          '950': '#461a02',
        },
      }
    },
  },
  plugins: [],
};
export default config;



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        100: "#d8d8dc",
        200: "#b0b1b8",
        300: "#898b95",
        400: "#616471",
        500: "#3a3d4e",
        600: "#2e313e",
        700: "#23252f",
        800: "#17181f",
        900: "#0c0c10",
      },
      yellow: {
        100: "#fef4d9",
        200: "#fde9b3",
        300: "#fddd8c",
        400: "#fcd266",
        500: "#fbc740",
        600: "#c99f33",
        700: "#977726",
        800: "#64501a",
        900: "#32280d",
      },
      white: {
        100: "#fdfefd",
        200: "#fcfdfb",
        300: "#fafbf9",
        400: "#f9faf7",
        500: "#f7f9f5",
        600: "#c6c7c4",
        700: "#949593",
        800: "#636462",
        900: "#313231",
      },
      red: {
        100: "#fae2df",
        200: "#f4c5bf",
        300: "#efa79f",
        400: "#e98a7f",
        500: "#e46d5f",
        600: "#b6574c",
        700: "#894139",
        800: "#5b2c26",
        900: "#2e1613",
      },
      gray: {
        100: "#f7f8f8",
        200: "#f0f1f1",
        300: "#e8e9ea",
        400: "#e1e2e3",
        500: "#f0f3f1",
        600: "#aeafb0",
        700: "#828384",
        800: "#575858",
        900: "#2b2c2c",
      },
      blue: {
        100: "#ddf1f4",
        200: "#bbe3e9",
        300: "#99d5dd",
        400: "#77c7d2",
        500: "#55b9c7",
        600: "#44949f",
        700: "#336f77",
        800: "#224a50",
        900: "#112528",
      },
      darkBlue: {
        100: "#d3dae5",
        200: "#a7b5cb",
        300: "#7b91b2",
        400: "#4f6c98",
        500: "#23477e",
        600: "#1c3965",
        700: "#152b4c",
        800: "#0e1c32",
        900: "#070e19",
      },
      green: {
        100: "#cfdddc",
        200: "#9fbbb9",
        300: "#709a95",
        400: "#407872",
        500: "#10564f",
        600: "#0d453f",
        700: "#0a342f",
        800: "#062220",
        900: "#031110",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "greenBg":"url('/greenBg.svg')"
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "repeat(6, minmax(0, 200px))",
      },
      boxShadow: {
        icon: "1px 1px 25px -9px rgba(87,88,88,1)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        enter: {
          "0%": {
            opacity: "0",
            transform: "scale(.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        leave: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(.9)",
          },
        },
      },
      aimation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        enter: "enter .2s ease-out",
        leave: "leave .15s ease-in forwards",
      },
    },
  },
  plugins: [],
};

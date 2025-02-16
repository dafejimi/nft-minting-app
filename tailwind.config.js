module.exports = {
    mode: "jit",
    content: [
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './public/index.html',
    ],
    darkMode: "class",
    theme: {
      screens: {
        md: { max: "1050px" },
        sm: { max: "550px" }
      },
      extend: {
        colors: {
          black: {
            900: "var(--black_900)",
            "900_cc": "var(--black_900_cc)"
          },
          blue_gray: {
            100: "var(--blue_gray_100)",
            200: "var(--blue_gray_200)",
            300: "var(--blue_gray_300)",
            800: "var(--blue_gray_800)",
            900: "var(--blue_gray_900)",
            "100_01": "var(--blue_gray_100_01)",
            "900_7f": "var(--blue_gray_900_7f)"
          },
          deep_purple: {
            a200: "var(--deep_purple_a200)"
          },
          gray: {
            900: "var(--gray_900)",
            "900_7f": "var(--gray_900_7f)"
          },
          pink: {
            300: "var(--pink_300)"
          },
          teal: {
            400: "var(--teal_400)",
            "400_33": "var(--teal_400_33)"
          },
          white: {
            a700: "var(--white_a700)"
          }
        },
        boxShadow: {},
        backgroundImage: {
          gradient: "linear-gradient(90deg, #ec4899, #8b5cf6)",
          gradient1: "linear-gradient(90deg, #000000, #111827)"
        },
        fontFamily: {
          inter: "Inter"
        }
      }
    },
    plugins: [require("@tailwindcss/forms")]
  };
  
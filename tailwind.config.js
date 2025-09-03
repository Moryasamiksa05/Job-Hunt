// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: "1rem",
//         sm: "1rem",
//         md: "2rem",
//         lg: "2rem",
//         xl: "3rem",
//       },
//     },
//     extend: {
//       fontFamily: {
//         inter: ['Inter', 'system-ui', 'sans-serif'],
//       },
//       colors: {
//         primary: {
//           DEFAULT: "#6C5CE7",
//           50: "#F2F1FF",
//           100: "#E7E6FF",
//           200: "#CFCBFF",
//           300: "#B6B0FF",
//           400: "#9E95FF",
//           500: "#867AFF",
//           600: "#6C5CE7",
//           700: "#584AC0",
//           800: "#463A98",
//           900: "#332B71"
//         },
//         accent: "#00D1B2"
//       },
//       boxShadow: {
//         soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
//       },
//       backgroundImage: {
//         "grid": "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
//         "radial": "radial-gradient(60% 60% at 100% 0%, rgba(108,92,231,0.15) 0%, rgba(108,92,231,0) 60%), radial-gradient(60% 60% at 0% 100%, rgba(0,209,178,0.15) 0%, rgba(0,209,178,0) 60%)"
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#6C5CE7", // Job Hunt Purple
          50: "#F2F1FF",
          100: "#E7E6FF",
          200: "#CFCBFF",
          300: "#B6B0FF",
          400: "#9E95FF",
          500: "#867AFF",
          600: "#6C5CE7",
          700: "#584AC0",
          800: "#463A98",
          900: "#332B71",
        },
        accent: "#00D1B2",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
        glow: "0 0 25px rgba(108, 92, 231, 0.5)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
        radial:
          "radial-gradient(60% 60% at 100% 0%, rgba(108,92,231,0.15) 0%, rgba(108,92,231,0) 60%), radial-gradient(60% 60% at 0% 100%, rgba(0,209,178,0.15) 0%, rgba(0,209,178,0) 60%)",

        // 🌊 New water gradient background
        water: "linear-gradient(135deg, #6C5CE7 0%, #3B82F6 50%, #00D1B2 100%)",
        glass:
          "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
      },
      backdropBlur: {
        xs: "2px",
        lg: "30px",
      },
      animation: {
        waterFlow: "waterFlow 18s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        waterFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

